<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
namespace OCA\GptFreePrompt\Listener;

use InvalidArgumentException;
use OCA\GptFreePrompt\AppInfo\Application;
use OCA\GptFreePrompt\Db\Generation;
use OCA\GptFreePrompt\Db\GenerationMapper;
use OCA\GptFreePrompt\Service\GptFreePromptService;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\TextProcessing\Events\AbstractTextProcessingEvent;
use OCP\TextProcessing\Events\TaskFailedEvent;
use OCP\TextProcessing\Events\TaskSuccessfulEvent;
use Psr\Log\LoggerInterface;

class GptFreePromptResultListener implements IEventListener {

	public function __construct(
		private GenerationMapper $generationMapper,
		private LoggerInterface $logger,
		private GptFreePromptService $gptFreePromptService
	) {
	}
	public function handle(Event $event): void {

		if (!$event instanceof AbstractTextProcessingEvent || $event->getTask()->getAppId() !== Application::APP_ID) {
			return;
		}

		$genId = $event->getTask()->getIdentifier();

		try {
			$generations = $this->generationMapper->getGenerationsByGenId($genId);
		} catch (\OCP\DB\Exception | DoesNotExistException $e) {
			$this->logger->warning('Error getting generations by gen id: ' . $genId);
			return;
		}
		

		// Find the first generation that is not yet completed
		$generation = null;
		foreach ($generations as $gen) {
			if ($gen->getStatus() === Generation::STATUS_PROCESSING) {
				$generation = $gen;
				break;
			}
		}

		// If all generations are set, then we have a problem
		if ($generation === null) {
			$this->logger->error('All generations are completed for generation id: ' . $genId . ' but a task with this id was just completed');
			return;
		}

		if ($event instanceof TaskSuccessfulEvent) {
			$output = $event->getTask()->getOutput();
			

			$generation->setValue($output);
			$generation->setStatus(Generation::STATUS_SUCCESS);
			try {
				$generation = $this->generationMapper->update($generation);
			} catch (\OCP\DB\Exception | InvalidArgumentException $e) {
				$this->logger->warning('Error while saving generation: ' . $e->getMessage());

				// Try to set the task as failed instead:
				$generation->setStatus(Generation::STATUS_FAILED);
				$generation->setValue('');
				try {
					$generation = $this->generationMapper->update($generation);
				} catch (\OCP\DB\Exception | InvalidArgumentException $e) {
					$this->logger->warning('Error while setting generation as failed: ' . $e->getMessage());
					return;
				}
				
				return;
			}

			$this->gptFreePromptService->notifyUser($generation);
		} elseif ($event instanceof TaskFailedEvent) {
			$generations = $this->generationMapper->getGenerationsByGenId($genId);

			// Find the first generation that is not yet completed
			$generation = null;
			foreach ($generations as $gen) {
				if ($gen->getStatus() === Generation::STATUS_PROCESSING) {
					$generation = $gen;
					break;
				}
			}

			// If all generations are set, then we have a problem
			if ($generation === null) {
				$this->logger->error('All generations are completed for generation id: ' . $genId . ' but a task with this id was just completed');
				return;
			}

			$generation->setStatus(Generation::STATUS_FAILED);
			$this->generationMapper->update($generation);

			// TODO:
			// Send notification to user
		}

	}
}
