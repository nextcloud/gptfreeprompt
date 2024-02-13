<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Tests\Controller;

use OCA\GptFreePrompt\Controller\GptFreePromptController;
use OCA\GptFreePrompt\Db\Generation;
use OCA\GptFreePrompt\Db\GenerationMapper;
use OCA\GptFreePrompt\Db\PromptMapper;
use OCA\GptFreePrompt\Service\GptFreePromptService;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;
use OCP\TextProcessing\IManager as TextProcessingManager;
use OCP\TextProcessing\Task;
use Test\TestCase;

/**
 * @group DB
 */
class GptFreePromptControllerTest extends TestCase {
	public const APP_NAME = 'gptfreeprompt';
	public const TEST_USER1 = 'testuser';
	private $controller;
	private $request;
	private $gptFreePromptService;
	private $initialStateService;
	private $textProcessingManager;
	private $genId;
	private $generationMapper;
	private $l10n;

	public static function setUpBeforeClass(): void {
		parent::setUpBeforeClass();
	}

	protected function setUp(): void {
		parent::setUp();

		$this->loginAsUser(self::TEST_USER1);

		$this->textProcessingManager = $this->createMock(TextProcessingManager::class);
		$this->l10n = $this->createMock(\OCP\IL10N::class);

		$this->gptFreePromptService = new GptFreePromptService(
			\OC::$server->get(\OCP\IConfig::class),
			\OC::$server->get(\Psr\Log\LoggerInterface::class),
			$this->textProcessingManager,
			self::TEST_USER1,
			\OC::$server->get(PromptMapper::class),
			\OC::$server->get(GenerationMapper::class),
			$this->l10n,
			\OC::$server->get(\OCP\Notification\IManager::class),
		);

		$this->generationMapper = \OC::$server->get(GenerationMapper::class);

		$this->request = $this->createMock(IRequest::class);
		$this->initialStateService = $this->createMock(IInitialState::class);

		$this->controller = new GptFreePromptController(
			self::APP_NAME,
			$this->request,
			$this->gptFreePromptService,
			self::TEST_USER1,
			$this->initialStateService
		);
	}

	public static function tearDownAfterClass(): void {
		parent::tearDownAfterClass();

		$promptMapper = \OC::$server->get(PromptMapper::class);
		$promptMapper->deleteUserPrompts(self::TEST_USER1);
		$generationMapper = \OC::$server->get(GenerationMapper::class);
		$generationMapper->deleteGenerationsByUser(self::TEST_USER1);
	}

	protected function tearDown(): void {
		parent::tearDown();

		$promptMapper = \OC::$server->get(PromptMapper::class);
		$promptMapper->deleteUserPrompts(self::TEST_USER1);
		$generationMapper = \OC::$server->get(GenerationMapper::class);
		$generationMapper->deleteGenerationsByUser(self::TEST_USER1);

	}

	private function processDummyPrompt(): void {
		$prompt = 'Test prompt';
		$nResults = 1;
		$expectedResultLength = 64; // 32 bytes as ascii hex string
		
		$this->textProcessingManager->expects($this->once())
			->method('getAvailableTaskTypes')
			->willReturn([\OCP\TextProcessing\FreePromptTaskType::class]);
		$this->textProcessingManager->expects($this->once())
			->method('runOrScheduleTask')
			->willReturnCallback(function ($task) {
				$task->setStatus(Task::STATUS_SUCCESSFUL);
				$task->setOutput('This is a test output.');
				return true;
			});

		$response = $this->controller->processPrompt($prompt, $nResults);

		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertIsString($response->getData());
		$this->assertEquals($expectedResultLength, strlen($response->getData()));

		$this->genId = $response->getData();

	}

	public function testPromptProcessing(): void {
		$this->processDummyPrompt();
	}

	public function testGetOuputs(): void {
		$this->processDummyPrompt();
		$response = $this->controller->getOutputs($this->genId);
		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertIsArray($response->getData());
		$this->assertArrayHasKey(0, $response->getData());
		$this->assertArrayHasKey('text', $response->getData()[0]);
		$this->assertArrayHasKey('status', $response->getData()[0]);
		$this->assertEquals('This is a test output.', $response->getData()[0]['text']);
		$this->assertEquals(1, $response->getData()[0]['status']);
	}

	public function testGetOutputsWithException(): void {
		$this->processDummyPrompt();
		$genId = ((string) bin2hex(random_bytes(32)));
		$errorMessage = 'Generation not found';
		$errorCode = Http::STATUS_BAD_REQUEST;

		$this->l10n->expects($this->once())
			->method('t')
			->with($errorMessage)
			->willReturn($errorMessage);

		$response = $this->controller->getOutputs($genId);

		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertEquals(['error' => $errorMessage], $response->getData());
		$this->assertEquals($errorCode, $response->getStatus());
	}

	public function testGetPromptHistory(): void {
		$this->processDummyPrompt();

		$expectedResult = 'Test prompt';

		$response = $this->controller->getPromptHistory();

		$this->assertInstanceOf(DataResponse::class, $response);
		$result_array = $response->getData();
		$this->assertIsArray($result_array);
		$this->assertCount(1, $result_array);
		$this->assertEquals($expectedResult, array_pop($result_array)->getValue());
	}

	public function testSetNotify(): void {
		$this->processDummyPrompt();

		$response = $this->controller->setNotify($this->genId, true);

		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertEquals(['status' => 'success'], $response->getData());

		$notify = $this->generationMapper->getGenerationsByGenId($this->genId)[0]->getNotify();

		$this->assertEquals(true, $notify);
	}

	public function testCancelGeneration() {
		$this->processDummyPrompt();

		$response = $this->controller->cancelGeneration($this->genId);

		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertEquals(['status' => 'success'], $response->getData());

		$generation = $this->generationMapper->getGenerationsByGenId($this->genId)[0];
		$this->assertEquals(Generation::STATUS_DELETED, $generation->getStatus());
	}
}
