<?php
// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Service;

use OCP\IConfig;
use OCP\IL10N;
use Psr\Log\LoggerInterface;
use OCP\TextProcessing\IManager;
#use OCP\TextProcessing\FreePromptTaskType;


class GptFreePromptService
{
    public function __construct(
        private IConfig $config,
        private IL10N $l10n,
        private LoggerInterface $logger,
        private IManager $textProcessingManager
    ) {
    }
    public function processPrompt(?string $prompt): array
    {
        $this->logger->warning("Processing prompt: $prompt");

        $result = [
            'prompt' => $prompt,
            'result' => 'This is a test result'
        ];
        return $result;
    }
}

