<?php
// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Service;

use OCP\IConfig;
use OCP\IL10N;
use Psr\Log\LoggerInterface;
use OCP\TextProcessing\IManager;
use OCP\TextProcessing\FreePromptTaskType;
use OCP\TextProcessing\Task;
use OCA\GptFreePrompt\AppInfo\Application;

class GptFreePromptService
{
    public function __construct(
        private IConfig $config,
        private IL10N $l10n,
        private LoggerInterface $logger,
        private IManager $textProcessingManager,
        private ?string $userId
    ) {
    }
    public function processPrompt(string $prompt, int $nResults): array
    {
        $taskTypes = $this->textProcessingManager->getAvailableTaskTypes();
        if (!in_array(FreePromptTaskType::class, $taskTypes)) {
            $this->logger->warning('FreePromptTaskType not available');
            return [];
        }

        $result = [];
        # Generate nResults prompts
        for ($i = 0; $i < $nResults; $i++) {
            $promptTask = new Task(FreePromptTaskType::class, $prompt, Application::APP_ID , $this->userId, (string) bin2hex(random_bytes(16)));

            #$result = $languageModelManager->runTask($promptTask);
            array_push($result, ['text' => $this->textProcessingManager->runTask($promptTask)]);            
        }

        return $result;
    }
}

