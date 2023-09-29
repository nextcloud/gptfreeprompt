<?php
// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Controller;

use OCA\GptFreePrompt\Service\GptFreePromptService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class GptFreePromptController extends Controller
{
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
    public function processPrompt(string $prompt, int $nResults =1): DataResponse
    {
        $result = $this->gptFreePromptService->processPrompt($prompt, $nResults);
        return new DataResponse($result);
    }
}