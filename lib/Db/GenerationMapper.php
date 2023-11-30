<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

declare(strict_types=1);

namespace OCA\GptFreePrompt\Db;

use OCA\GptFreePrompt\AppInfo\Application;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\Exception;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use RuntimeException;

class GenerationMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'gptfreeprompt_gens', Generation::class);
	}

	/**
	 * @param int $id
	 * @return Generation
	 * @throws DoesNotExistException
	 * @throws Exception
	 * @throws MultipleObjectsReturnedException
	 */
	public function getGeneration(int $id): Generation {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->getTableName())
			->where(
				$qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT))
			);

		return $this->findEntity($qb);
	}

	/**
	 * @param string $genId
	 * @return array
	 * @throws DoesNotExistException
	 * @throws \OCP\Db\Exception
	 */
	public function getGenerationsByGenId(string $genId): array {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->getTableName())
			->where(
				$qb->expr()->eq('gen_id', $qb->createNamedParameter($genId, IQueryBuilder::PARAM_STR))
			);

		return $this->findEntities($qb);
	}

	/**
	 * @param string $userId
	 * @param string $genId
	 * @return array
	 * @throws \OCP\Db\Exception
	 * @throws DoesNotExistException
	 */
	public function getGenerationsByUserAndGenId(string $userId, string $genId): array {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->getTableName())
			->where(
				$qb->expr()->eq('user_id', $qb->createNamedParameter($userId, IQueryBuilder::PARAM_STR))
			)
			->andWhere(
				$qb->expr()->eq('gen_id', $qb->createNamedParameter($genId, IQueryBuilder::PARAM_STR))
			);

		return $this->findEntities($qb);
	}

	/**
	 * Delete all generations of a user
	 * @param string $userId
	 * @return void
	 * @throws \OCP\Db\Exception
	 */
	public function deleteGenerationsByUser(string $userId): void {
		$qb = $this->db->getQueryBuilder();

		$qb->delete($this->getTableName())
			->where(
				$qb->expr()->eq('user_id', $qb->createNamedParameter($userId, IQueryBuilder::PARAM_STR))
			);

		$qb->executeStatement();
	}

	/**
	 * @return void
	 * @throws \OCP\Db\Exception
	 * @throws RuntimeException
	 */
	public function cleanupGenerations(): void {
		$qb = $this->db->getQueryBuilder();

		// Delete all generations that are older than DEFAULT_GENERATION_STORAGE_TIME
		$qb->delete($this->getTableName())
			->where(
				$qb->expr()->lt('timestamp', $qb->createNamedParameter(time() - Application::DEFAULT_GENERATION_STORAGE_TIME, IQueryBuilder::PARAM_INT))
			);


		$qb->executeStatement();
	}
}
