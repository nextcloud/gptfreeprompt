<?php
// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Reference;

use OC\Collaboration\Reference\ReferenceManager;
use OCA\GptFreePrompt\AppInfo\Application;
use OCA\GptFreePrompt\Service\GptFreePromptService;
use OCP\Collaboration\Reference\ADiscoverableReferenceProvider;
use OCP\Collaboration\Reference\IReference;
use OCP\IL10N;
use OCP\IURLGenerator;

class GptFreePromptReferenceProvider extends ADiscoverableReferenceProvider 
{

	public function __construct(
		private IL10N $l10n,
		private IURLGenerator $urlGenerator,
		private ReferenceManager $referenceManager,
		private GptFreePromptService $gptFreePromptService,
		private ?string $userId
	) {
	}

	/**
	 * @inheritDoc
	 */
	public function getId(): string	{
		return 'gptfreeprompt';
	}

	/**
	 * @inheritDoc
	 */
	public function getTitle(): string {
		#return $this->l10n->t('AI text generation');		
		return 'AI text generation';
	}

	/**
	 * @inheritDoc
	 */
	public function getOrder(): int	{
		return 10;
	}

	/**
	 * @inheritDoc
	 */
	public function getIconUrl(): string {
		return $this->urlGenerator->getAbsoluteURL(
			$this->urlGenerator->imagePath(Application::APP_ID, 'app.svg')
		);
	}

	/**
	 * @inheritDoc
	 */
	public function matchReference(string $referenceText): bool {
		return false;		
	}

	/**
	 * @inheritDoc
	 */
	public function resolveReference(string $referenceText): ?IReference {
		return null;
	}

	/**
	 * @param string $url
	 * @return array|null
	 */
	private function getCompletionId(string $url): ?string {
		preg_match('/\/c\/([0-9a-z]+)$/i', $url, $matches);
		if (count($matches) > 1) {
			return $matches[1];
		}
		return null;
	}

	/**
	 * @inheritDoc
	 */
	public function getCachePrefix(string $referenceId): string {
		return $this->userId ?? '';
	}

	/**
	 * We don't use the userId here but rather a reference unique id
	 * @inheritDoc
	 */
	public function getCacheKey(string $referenceId): ?string {
		$predictionId = $this->getCompletionId($referenceId);
		if ($predictionId !== null) {
			return $predictionId;
		}

		return $referenceId;
	}

	/**
	 * @param string $userId
	 * @return void
	 */
	public function invalidateUserCache(string $userId): void {
		$this->referenceManager->invalidateCache($userId);
	}

	
}
