<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\AppInfo;

use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCA\GptFreePrompt\Listener\GptFreePromptReferenceListener;
use OCA\GptFreePrompt\Reference\GptFreePromptReferenceProvider;


use OCP\AppFramework\App;

class Application extends App implements IBootstrap
{
	public const APP_ID = 'gptfreeprompt';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	public function register(IRegistrationContext $context): void
	{
		$context->registerEventListener(RenderReferenceEvent::class, GptFreePromptReferenceListener::class);
		$context->registerReferenceProvider(GptFreePromptReferenceProvider::class);
	}

	public function boot(IBootContext $context): void
	{
	}

}
