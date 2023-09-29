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
		# Retrieve a list of available freeprompt providers from the backend
		# Prosess a prompt (prompt and provider is suppilied as get params)
		['name' => 'GptFreePrompt#processPrompt', 'url' => '/process_prompt', 'verb' => 'POST'],			
	],
];
