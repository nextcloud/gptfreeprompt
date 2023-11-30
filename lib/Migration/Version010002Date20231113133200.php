<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
declare(strict_types=1);

namespace OCA\GptFreePrompt\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version010002Date20231113133200 extends SimpleMigrationStep {
	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return void
	 */
	public function preSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
	}

	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('gptfreeprompt_prompts')) {
			$table = $schema->getTable('gptfreeprompt_prompts');
			// Check if the index already exists
			if (!$table->hasIndex('gptfreeprompt_prompt_uid_ts')) {
				$table->addIndex(['user_id', 'timestamp'], 'gptfreeprompt_prompt_uid_ts');
			}
		}

		if ($schema->hasTable('gptfreeprompt_gens')) {
			$schema->dropTable('gptfreeprompt_gens');
		}

		if (!$schema->hasTable('gptfreeprompt_gens')) {
			$table = $schema->createTable('gptfreeprompt_gens');
			$table->addColumn(
				'id',
				Types::INTEGER,
				[
					'autoincrement' => true,
					'notnull' => true,
				]
			);
			$table->addColumn(
				'gen_id',
				Types::STRING,
				[
					'notnull' => true,
					'length' => 64
				]
			);
			$table->addColumn(
				'user_id',
				Types::STRING,
				[
					'notnull' => true,
				]
			);
			$table->addColumn(
				'prompt',
				Types::TEXT,
				[
					'notnull' => true,
				]
			);
			$table->addColumn(
				'value',
				Types::TEXT,
				[
					'notnull' => true,
				]
			);
			$table->addColumn(
				'status',
				Types::INTEGER,
				[
					'notnull' => true
				]
			);
			$table->addColumn(
				'timestamp',
				Types::INTEGER,
				[
					'notnull' => true
				]
			);
			$table->addColumn(
				'completion_time',
				Types::INTEGER,
				[
					'notnull' => true
				]
			);
			$table->addColumn(
				'notify',
				Types::BOOLEAN,
				[
					'notnull' => false,
					'default' => false
				]
			);
			$table->setPrimaryKey(['id']);
			$table->addIndex(['gen_id'], 'gptfreeprompt_gen_genid');
			$table->addIndex(['gen_id','user_id'], 'gptfreeprompt_gen_genid_uid');
		}

		return $schema;
	}

	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return void
	 */
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
	}
}
