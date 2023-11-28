<?php
use OCA\GptFreePrompt\AppInfo\Application;
use OCP\Util;

// Load the dialog javascript
Util::addScript(Application::APP_ID, Application::APP_ID . '-generationPage');
?>

<div id="gptfreeprompt_generation_page"></div>