<?php

namespace OCA\GptFreePrompt\Tests\Controller;

use Exception;
use OCA\GptFreePrompt\Controller\GptFreePromptController;
use OCA\GptFreePrompt\Service\GptFreePromptService;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;
use OCP\IConfig;
use Psr\Log\LoggerInterface;
use OCP\App\IAppManager;
use Test\TestCase;
use OCP\TextProcessing\IManager;
use OCA\GptFreePrompt\Db\PromptMapper;
use OCA\GptFreePrompt\Db\GenerationMapper;
use OCA\GptFreePrompt\Db\Generation;
use OCP\IL10N;
use OCP\Notification\IManager as INotificationManager;
use OCP\IServerContainer;
use OCA\GptFreePrompt\AppInfo\Application;

/**
 * @group DB
 */
class GptFreePromptControllerTest extends TestCase
{
	const APP_NAME = 'gptfreeprompt';
	const TEST_USER1 = 'testuser';
	private $controller;
	private $request;
	private $gptFreePromptService;
	private $initialStateService;
	private $appManager;
	private $genId;
	private $app;
	private $container;
	private $generationMapper;

	public static function setUpBeforeClass(): void {
		parent::setUpBeforeClass();
		$backend = new \Test\Util\User\Dummy();
		$backend->createUser(self::TEST_USER1, self::TEST_USER1);
		\OC::$server->get(\OCP\IUserManager::class)->registerBackend($backend);
	}

	protected function setUp(): void
	{
		parent::setUp();

		$this->app = new Application();
		$this->container = $this->app->getContainer();
		$c = $this->container;
		$sc = $c->get(IServerContainer::class);

		$this->generationMapper = \OC::$server->get(GenerationMapper::class);

		$this->gptFreePromptService = new GptFreePromptService(
			\OC::$server->get(IConfig::class),
			\OC::$server->get(LoggerInterface::class),
			\OC::$server->get(IManager::class),
			self::TEST_USER1,
			\OC::$server->get(PromptMapper::class),
			$this->generationMapper,
			$sc->getL10N($c->get('AppName')),
			\OC::$server->get(INotificationManager::class)
		);
		$this->appManager = $this->createMock(IAppManager::class);

		$this->appManager->enableApp('testing');
		
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
		
		$response = $this->controller->processPrompt($prompt, $nResults);

		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertIsString($response->getData());
		$this->assertEquals($expectedResultLength, strlen($response->getData()));

		$this->genId = $response->getData();
	
	}

	public function testPromptProcessing(): void
	{
		$this->processDummyPrompt();
	}

	public function testGetOuputs(): void
	{
		$this->processDummyPrompt();

		$response = $this->controller->getOutputs($this->genId);
		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertIsArray($response->getData());
		$this->assertArrayHasKey(0, $response->getData());
		$this->assertArrayHasKey('text', $response->getData()[0]);
		$this->assertArrayHasKey('status', $response->getData()[0]);
		$this->assertEquals('', $response->getData()[0]['text']); // Result not yet ready so it should be an empty string
		$this->assertEquals(0, $response->getData()[0]['status']); // Still processing

		// TODO: Trigger the cron job to run and check the result
	}

	public function testGetOutputsWithException(): void
	{
		$this->processDummyPrompt();
		$genId = ((string) bin2hex(random_bytes(32)));
		$errorMessage = 'Generation not found';
		$errorCode = Http::STATUS_BAD_REQUEST;

		$response = $this->controller->getOutputs($genId);

		$this->assertInstanceOf(DataResponse::class, $response);
		$this->assertEquals(['error' => $errorMessage], $response->getData());
		$this->assertEquals($errorCode, $response->getStatus());
	}

	public function testGetPromptHistory(): void
	{
		$this->processDummyPrompt();

		$expectedResult = 'Test prompt';

		$response = $this->controller->getPromptHistory();

		$this->assertInstanceOf(DataResponse::class, $response);
		$result_array = $response->getData();
		$this->assertIsArray($result_array);
		$this->assertCount(1, $result_array);
		$this->assertEquals($expectedResult, array_pop($result_array)->getValue());
	}

	public function testSetNotify(): void
	{
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