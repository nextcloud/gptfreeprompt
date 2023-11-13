<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Service;

use OCA\GptFreePrompt\AppInfo\Application;
use OCA\GptFreePrompt\Db\PromptMapper;
use OCP\IConfig;
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
	) {
	}
	public function processPrompt(string $prompt, int $nResults, string $userId): array {
		$taskTypes = $this->textProcessingManager->getAvailableTaskTypes();
		if (!in_array(FreePromptTaskType::class, $taskTypes)) {
			$this->logger->warning('FreePromptTaskType not available');
			return [];
		}

		$result = [];
		# Generate nResults prompts
		for ($i = 0; $i < $nResults; $i++) {
			$promptTask = new Task(FreePromptTaskType::class, $prompt, Application::APP_ID, $this->userId, (string) bin2hex(random_bytes(16)));

			#$result = $languageModelManager->runTask($promptTask);
			array_push($result, ['text' => $this->textProcessingManager->runTask($promptTask)]);
		}

		# Save prompt to database
		$this->promptMapper->createPrompt($userId, $prompt);

		return $result;
	}

	/**
	 * @param string $userId
	 * @return array
	 * @throws \OCP\DB\Exception
	 */
	public function getPromptHistory(string $userId): array {
		return $this->promptMapper->getPromptsOfUser($userId);
	}
}
