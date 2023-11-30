<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
namespace OCA\GptFreePrompt\Notification;

use OCA\GptFreePrompt\AppInfo\Application;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\Notification\INotification;
use OCP\Notification\INotifier;

class GptFreePromptNotifier implements INotifier {
	public function __construct(
		private IURLGenerator $urlGenerator,
		private IL10N $il10n
	) {

	}

	/**
	 * Identifier of the notifier, only use [a-z0-9_]
	 * @return string
	 */
	public function getID(): string {
		return 'gptfreeprompt';
	}

	/**
	 * Human readable name describing the notifier
	 * @return string
	 */
	public function getName(): string {
		return 'GptFreePrompt Generation';
	}

	/**
	 * @param INotification $notification
	 * @param string $languageCode The code of the language that should be used to prepare the notification
	 */
	public function prepare(INotification $notification, string $languageCode): INotification {
		if ($notification->getApp() !== Application::APP_ID) {
			// Not this app
			throw new \InvalidArgumentException();
		}

		$notification->setIcon($this->urlGenerator->getAbsoluteURL($this->urlGenerator->imagePath('gptfreeprompt', 'app-dark.svg')));

		$parameters = $notification->getMessageParameters();

		$subject = $this->il10n->t('Text generation ready');
		
		// Mostly to make psalm happy:
		if (isset($parameters['prompt']) && is_string($parameters['prompt'])) {
			$message = '"' . $parameters['prompt'] . '"';
		} else {
			$message = '';
		}
		
		$notification->setParsedSubject($subject);
		$notification->setParsedMessage($message);

		foreach ($notification->getActions() as $action) {
			switch ($action->getLabel()) {
				case 'view':
					$action->setParsedLabel($this->il10n->t('View'))
						->setLink($this->urlGenerator->linkToRouteAbsolute(Application::APP_ID . '.GptFreePrompt.showGenerationPage', ['genId' => $parameters['genId']]), 'WEB');
					break;
				case 'delete':
					$action->setParsedLabel($this->il10n->t('Delete'))
						->setLink($this->urlGenerator->linkToRouteAbsolute(Application::APP_ID . '.GptFreePrompt.cancelGeneration', ['genId' => $parameters['genId']]), 'POST');
					break;
			}

			$notification->addParsedAction($action);
		}
		return $notification;
	}
}
