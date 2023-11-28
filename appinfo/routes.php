<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

/**
 * Create your routes in here. The name is the lowercase name of the controller
 * without the controller part, the stuff after the hash is the method.
 * e.g. page#index -> OCA\GptFreePrompt\Controller\PageController->index()
 *
 * The controller class has to be registered in the application.php file since
 * it's instantiated in there
 */
return [
	'routes' => [
		# Prosess a prompt (prompt is suppilied as a get param)
		['name' => 'GptFreePrompt#processPrompt', 'url' => '/process_prompt', 'verb' => 'POST'],
		['name' => 'GptFreePrompt#getPromptHistory', 'url' => '/prompt_history', 'verb' => 'GET'],
		['name' => 'GptFreePrompt#getOutputs', 'url' => '/get_outputs', 'verb' => 'GET'],
		['name' => 'GptFreePrompt#cancelGeneration', 'url' => '/cancel_generation', 'verb' => 'POST'],
		['name' => 'GptFreePrompt#setNotify', 'url' => '/set_notify', 'verb' => 'POST'],
		['name' => 'GptFreePrompt#showGenerationPage', 'url' => '/show_gen', 'verb' => 'GET']
	],
];
