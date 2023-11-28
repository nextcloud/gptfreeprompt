<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\AppInfo;

use OCA\GptFreePrompt\Listener\GptFreePromptReferenceListener;
use OCA\GptFreePrompt\Listener\GptFreePromptResultListener;
use OCA\GptFreePrompt\Notification\GptFreePromptNotifier;
use OCA\GptFreePrompt\Reference\GptFreePromptReferenceProvider;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Collaboration\Reference\RenderReferenceEvent;
use OCP\TextProcessing\Events\TaskFailedEvent;
use OCP\TextProcessing\Events\TaskSuccessfulEvent;

class Application extends App implements IBootstrap {
	public const APP_ID = 'gptfreeprompt';

	public const MAX_STORED_PROMPTS_PER_USER = 5;
	public const DEFAULT_GENERATION_STORAGE_TIME = 60 * 60 * 24 * 90; // 90 days

	public function __construct() {
		parent::__construct(self::APP_ID);

	}

	public function register(IRegistrationContext $context): void {
		$context->registerReferenceProvider(GptFreePromptReferenceProvider::class);
		$context->registerEventListener(RenderReferenceEvent::class, GptFreePromptReferenceListener::class);
		$context->registerEventListener(TaskSuccessfulEvent::class, GptFreePromptResultListener::class);
		$context->registerEventListener(TaskFailedEvent::class, GptFreePromptResultListener::class);
		$context->registerNotifierService(GptFreePromptNotifier::class);
	}

	public function boot(IBootContext $context): void {
	}

}
