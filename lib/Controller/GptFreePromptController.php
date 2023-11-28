<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Controller;

use Exception;
use OCA\GptFreePrompt\AppInfo\Application;
use OCA\GptFreePrompt\Service\GptFreePromptService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\BruteForceProtection;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;

class GptFreePromptController extends Controller {
	public function __construct(
		string $appName,
		IRequest $request,
		private GptFreePromptService $gptFreePromptService,
		private ?string $userId,
		private IInitialState $initialStateService
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
			$result = $this->gptFreePromptService->processPrompt($prompt, $nResults);
		} catch (Exception $e) {
			return new DataResponse(['error' => $e->getMessage()], $e->getCode());
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
		try {
			$result = $this->gptFreePromptService->getPromptHistory($this->userId);
		} catch (Exception $e) {
			return new DataResponse(['error' => $e->getMessage()], $e->getCode());
		}
		return new DataResponse($result, Http::STATUS_OK);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @param string $genId
	 * @return DataResponse
	 */
	#[BruteForceProtection(action: 'genId')]
	public function getOutputs(string $genId): DataResponse {
		try {
			$result = $this->gptFreePromptService->getOutputs($genId);
		} catch (Exception $e) {
			$response = new DataResponse(['error' => $e->getMessage()], $e->getCode());
			if($e->getCode() === Http::STATUS_BAD_REQUEST) {
				// Throttle brute force attempts
				$response->throttle(['action' => 'genId']);
			}
			return $response;
		}
		return new DataResponse($result, Http::STATUS_OK);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * No need for bruteforce protection since the user can only cancel their own generations
	 *
	 * @param string $genId
	 * @return DataResponse
	 */
	public function cancelGeneration(string $genId): DataResponse {
		try {
			$this->gptFreePromptService->cancelGeneration($genId);
		} catch (Exception $e) {
			$response = new DataResponse(['error' => $e->getMessage()], $e->getCode());
			return $response;
		}
		return new DataResponse(['status' => 'success'], Http::STATUS_OK);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * No need for bruteforce protection since the user can only set the notifications on their own generations
	 *
	 * @param string $genId
	 * @param bool $notify
	 * @return DataResponse
	 */
	public function setNotify(string $genId, bool $notify): DataResponse {
		try {
			$this->gptFreePromptService->setNotify($genId, $notify);
		} catch (Exception $e) {
			$response = new DataResponse(['error' => $e->getMessage()], $e->getCode());
			return $response;
		}
		return new DataResponse(['status' => 'success'], Http::STATUS_OK);
	}

	/**
	 * Show visibility dialog
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * Does not need bruteforce protection since the
	 * outputs are retrieved from the getOutputs endpoint
	 * during rendering of the page.
	 *
	 * @param string|null $genId
	 * @return TemplateResponse
	 */
	public function showGenerationPage(?string $genId): TemplateResponse {
		
		if ($genId === null) {
			$this->initialStateService->provideInitialState('generation-page-inputs', ['gen_id' => '']);
		} else {
			$this->initialStateService->provideInitialState('generation-page-inputs', ['gen_id' => $genId]);
		}
		

		return new TemplateResponse(Application::APP_ID, 'generationPage');
	}

}
