<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Controller;

use OCA\GptFreePrompt\Service\GptFreePromptService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;
use RuntimeException;

class GptFreePromptController extends Controller {
	public function __construct(
		string $appName,
		IRequest $request,
		private GptFreePromptService $gptFreePromptService,
		private ?string $userId
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @param string|null $prompt
	 * @return DataResponse
	 */
	public function processPrompt(string $prompt, int $nResults = 1): DataResponse {
		try {
			$result = $this->gptFreePromptService->processPrompt($prompt, $nResults, $this->userId);
		} catch (RuntimeException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
		
		return new DataResponse($result);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @return DataResponse
	 */
	public function getPromptHistory(): DataResponse {
		$response = $this->gptFreePromptService->getPromptHistory($this->userId);
		if (isset($response['error'])) {
			return new DataResponse($response, Http::STATUS_BAD_REQUEST);
		}
		return new DataResponse($response);
	}
}
