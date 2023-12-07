<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Service;

use DateTime;
use Exception;
use OCA\GptFreePrompt\AppInfo\Application;
use OCA\GptFreePrompt\Db\Generation;
use OCA\GptFreePrompt\Db\GenerationMapper;
use OCA\GptFreePrompt\Db\PromptMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Http;
use OCP\DB\Exception as DBException;
use OCP\IConfig;
use OCP\IL10N;
use OCP\Notification\IManager as INotificationManager;
use OCP\PreConditionNotMetException;
use OCP\TextProcessing\Exception\TaskFailureException;
use OCP\TextProcessing\FreePromptTaskType;
use OCP\TextProcessing\IManager;
use OCP\TextProcessing\Task;
use Psr\Log\LoggerInterface;

class GptFreePromptService {
	public function __construct(
		private IConfig $config,
		private LoggerInterface $logger,
		private IManager $textProcessingManager,
		private ?string $userId,
		private PromptMapper $promptMapper,
		private GenerationMapper $generationMapper,
		private IL10N $l10n,
		private INotificationManager $notificationManager
	) {
	}

	/*
	 * @param string $prompt
	 * @param int $nResults
	 * @param bool $showPrompt
	 * @return string
	 * @throws Exception
	 */
	public function processPrompt(string $prompt, int $nResults): string {
		$taskTypes = $this->textProcessingManager->getAvailableTaskTypes();
		if (!in_array(FreePromptTaskType::class, $taskTypes)) {
			$this->logger->warning('FreePromptTaskType not available');
			throw new Exception($this->l10n->t('FreePromptTaskType not available'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}
		
		# Generate a unique id for this generation
		while (true) {
			$genId = bin2hex(random_bytes(32));
			// Exceedingly unlikely that this will ever happen, but just in case:
			try {
				if(count($this->generationMapper->getGenerationsByGenId($genId)) === 0) {
					break;
				} else {
					continue;
				}
			} catch (DoesNotExistException) {
				break;
			} catch (DBException $e) {
				$this->logger->warning('Failed to get generations by genId', ['exception' => $e]);
				throw new Exception($this->l10n->t('Failed process prompt'), Http::STATUS_INTERNAL_SERVER_ERROR);
			}
		}

		# Generate nResults prompts
		for ($i = 0; $i < $nResults; $i++) {
			
			// Create a db entity for the generation
			$newGeneration = new Generation();
			$newGeneration->setGenId($genId);
			$newGeneration->setPrompt($prompt);
			$newGeneration->setStatus(Generation::STATUS_PROCESSING);
			$newGeneration->setTimestamp(time());
			$newGeneration->setNotify(false);
			$newGeneration->setValue('');
			$newGeneration->setUserId($this->userId ?? '');

			$promptTask = new Task(FreePromptTaskType::class, $prompt, Application::APP_ID, $this->userId, $genId);

			# Run or schedule the task:
			try {
				$this->textProcessingManager->runOrScheduleTask($promptTask);
			} catch (DBException | PreConditionNotMetException | TaskFailureException $e) {
				$this->logger->warning('Failed to run or schedule a task', ['exception' => $e]);
				throw new Exception($this->l10n->t('Failed to run or schedule a task'), Http::STATUS_INTERNAL_SERVER_ERROR);
			}

			$taskStatus = $promptTask->getStatus();

			if ($taskStatus === Task::STATUS_SUCCESSFUL) {
				$newGeneration->setStatus(Generation::STATUS_SUCCESS);
				$newGeneration->setValue($promptTask->getOutput() ?? '');
				$newGeneration->setCompletionTime((new DateTime('now'))->getTimestamp());
				
			} elseif ($taskStatus === Task::STATUS_RUNNING || $taskStatus === Task::STATUS_SCHEDULED) {
				// Task was scheduled or is running, so we need to wait for it to finish
				// and process the result in the event listener.
				$completionExpAt = ($promptTask->getCompletionExpectedAt() ?? new DateTime('now'))->getTimestamp();
				$newGeneration->setCompletionTime($completionExpAt);
			} else {
				// Task failed
				$newGeneration->setStatus(Generation::STATUS_FAILED);
			}

			try {
				$this->generationMapper->insert($newGeneration);
			} catch (DBException $e) {
				$this->logger->warning('Failed to insert a generation entity to db', ['exception' => $e]);
				throw new Exception($this->l10n->t('Failed to create a generation'), Http::STATUS_INTERNAL_SERVER_ERROR);
			}

		}

		# Save prompt to database
		if ($this->userId !== null) {
			$this->promptMapper->createPrompt($this->userId, $prompt);
		}

		return $genId;
	}

	/**
	 * Notify user of generation being ready
	 * @param Generation $generation
	 * @return void
	 */
	public function notifyUser(Generation $generation): void {
		if (!$generation->isNotify()) {
			return;
		}

		if ($generation->getUserId() === '') {
			$this->logger->warning('User id is empty when trying to set notification for user');
			return;
		}

		$notification = $this->notificationManager->createNotification();

		$notification->setApp(Application::APP_ID)
			->setUser($generation->getUserId())
			->setObject('gptfreeprompt', $generation->getGenId());

		if ($this->notificationManager->getCount($notification) > 0) {
			// Notification already exists, don't create a new one
			return;
		}

		$viewAction = $notification->createAction();
		$viewAction->setLabel('view')
			->setLink(Application::APP_ID, 'WEB');

		$deleteAction = $notification->createAction();
		$deleteAction->setLabel('delete')
				->setLink(Application::APP_ID, 'POST');

		$notification->setDateTime(new DateTime('now'))
			->setSubject('gptfreeprompt')
			->setMessage('gptfreeprompt', ['genId' => $generation->getGenId(), 'prompt' => $generation->getPrompt()])
			->addAction($deleteAction)
			->addAction($viewAction);

		try {
			$this->notificationManager->notify($notification);
		} catch (\InvalidArgumentException $e) {
			$this->logger->warning('Failed to notify user', ['exception' => $e]);
		}
		
	}

	/**
	 * @return array
	 * @throws Exception
	 */
	public function getPromptHistory(): array {
		if ($this->userId === null) {
			$this->logger->warning('User id is null when trying to get prompt history');
			throw new Exception($this->l10n->t('Failed to get prompt history'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		try {
			return $this->promptMapper->getPromptsOfUser($this->userId);
		} catch (DBException $e) {
			$this->logger->warning('Failed to get prompts of user', ['exception' => $e]);
			throw new Exception($this->l10n->t('Failed to get prompt history'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}
		
	}
	
	/**
	 * @param int status
	 * @return string
	 */
	public function getStatusString(int $status): string {
		switch ($status) {
			case Generation::STATUS_SUCCESS:
				return $this->l10n->t('Success');
			case Generation::STATUS_FAILED:
				return $this->l10n->t('Failed');
			case Generation::STATUS_PROCESSING:
				return $this->l10n->t('Processing');
			case Generation::STATUS_DELETED:
				return $this->l10n->t('Deleted');
			default:
				return $this->l10n->t('Unknown');
		}
	}

	/**
	 * @param string $genId
	 * @return array
	 * @throws Exception
	 */
	public function getOutputs(string $genId): array {
		try {
			$generations = $this->generationMapper->getGenerationsByGenId($genId);

			if (count($generations) === 0) {
				throw new DoesNotExistException('');
			}
		} catch (DoesNotExistException $e) {
			$this->logger->warning('Error getting generations by gen id: ' . $genId);
			throw new Exception($this->l10n->t('Generation not found'), Http::STATUS_BAD_REQUEST);
		} catch (DBException $e) {
			$this->logger->warning('Error getting generations by gen id: ' . $genId);
			throw new Exception($this->l10n->t('Failed to retrieve outputs'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		$outputs = [];
		foreach ($generations as $gen) {
			$row = ['prompt' => $gen->getPrompt(), 'text' => $gen->getValue(), 'status' => $gen->getStatus()];
			if ($gen->getStatus() === Generation::STATUS_PROCESSING) {
				$row['completion_time'] = $gen->getCompletionTime();
			}
			array_push($outputs, $row);
		}

		return $outputs;
	}

	/**
	 * @param string $genId
	 * @return void
	 * @throws Exception
	 */
	public function cancelGeneration(string $genId): void {
		if ($this->userId === null) {
			$this->logger->warning('User id is null when trying to cancel generation');
			throw new Exception($this->l10n->t('Failed to cancel generation'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}
		
		try {
			$generations = $this->generationMapper->getGenerationsByUserAndGenId($this->userId, $genId);
			if (count($generations) === 0) {
				throw new DoesNotExistException('');
			}
		} catch (DoesNotExistException $e) {
			$this->logger->warning('Error getting generations by gen id: ' . $genId);
			throw new Exception($this->l10n->t('Generation not found'), Http::STATUS_BAD_REQUEST);
		} catch (DBException $e) {
			$this->logger->warning('Error getting generations by gen id: ' . $genId);
			throw new Exception($this->l10n->t('Failed to cancel generation'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		// See if there is a notification associated with this generation
		// and dismiss the notification if there is one.
		$notification = $this->notificationManager->createNotification();
		$notification->setApp(Application::APP_ID)
			->setUser($generations[0]->getUserId())
			->setObject('gptfreeprompt', $genId);

		$this->notificationManager->markProcessed($notification);

		// Get all tasks that have this genId as identifier.
		/** @var Task[] $tasks */
		$tasks = $this->textProcessingManager->getUserTasksByApp($this->userId, Application::APP_ID, $genId);

		// Cancel all tasks
		foreach ($tasks as $task) {
			$this->textProcessingManager->deleteTask($task);
		}

		// Set all generations to deleted
		foreach ($generations as $gen) {
			$gen->setValue('');
			$gen->setPrompt('');
			$gen->setUserId('');
			$gen->setStatus(Generation::STATUS_DELETED);
			$gen->setNotify(false);
			try {
				$this->generationMapper->update($gen);
			} catch (DBException | \InvalidArgumentException $e) {
				$this->logger->warning('Failed to delete generation from db', ['exception' => $e]);
			}
			
		}

		return;
	}

	/**
	 * @param string $genId
	 * @param bool $notify
	 * @return void
	 * @throws Exception
	 */
	public function setNotify(string $genId, bool $notify): void {
		if ($this->userId === null) {
			$this->logger->warning('User id is null when trying to set notify');
			throw new Exception($this->l10n->t('Failed set a notification: Unknown user'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}
		
		try {
			$generations = $this->generationMapper->getGenerationsByUserAndGenId($this->userId, $genId);
			if (count($generations) === 0) {
				throw new DoesNotExistException('');
			}
		} catch (DoesNotExistException $e) {
			$this->logger->warning('Error getting generations by gen id: ' . $genId);
			throw new Exception($this->l10n->t('Failed to set notification: Generation not found'), Http::STATUS_BAD_REQUEST);
		} catch (DBException $e) {
			$this->logger->warning('Error getting generations by gen id: ' . $genId);
			throw new Exception('Failed to set notification: Unknown error', Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		// Set notifications on/off for all generations
		foreach ($generations as $gen) {
			$gen->setNotify($notify);
			try {
				$this->generationMapper->update($gen);
			} catch (DBException | \InvalidArgumentException $e) {
				$this->logger->warning('Failed to update generation with new notification status', ['exception' => $e]);
				throw new Exception($this->l10n->t('Failed to set notification: unknown error'), Http::STATUS_INTERNAL_SERVER_ERROR);
			}
			
		}

		return;
	}


}
