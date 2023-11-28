<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\GptFreePrompt\Db;

use OCP\AppFramework\Db\Entity;

/**
 * @method string getGenId()
 * @method void setGenId(string $genId)
 * @method string getUserId()
 * @method void setUserId(string $userId)
 * @method string getValue()
 * @method void setValue(string $value)
 * @method string getPrompt()
 * @method void setPrompt(string $prompt)
 * @method int getStatus()
 * @method void setStatus(int $status)
 * @method int getTimestamp()
 * @method void setTimestamp(int $timestamp)
 * @method boolean isNotify()
 * @method void setNotify(boolean $notify)
 * @method int getCompletionTime()
 * @method void setCompletionTime(int $completionTime)
 */
class Generation extends Entity implements \JsonSerializable {
	public const STATUS_SUCCESS = 1;
	public const STATUS_FAILED = -1;
	public const STATUS_PROCESSING = 0;
	public const STATUS_DELETED = -2;

	/** @var string */
	protected $genId;
	/** @var string */
	protected $userId;
	/** @var string */
	protected $value;
	/** @var string */
	protected $prompt;
	/** @var int */
	protected $status;
	/** @var int */
	protected $timestamp;
	/** @var boolean */
	protected $notify;
	/** @var int */
	protected $completionTime;

	public function __construct() {
		$this->addType('gen_id', 'string');
		$this->addType('user_id', 'string');
		$this->addType('value', 'string');
		$this->addType('prompt', 'string');
		$this->addType('status', 'integer');
		$this->addType('timestamp', 'integer');
		$this->addType('notify', 'boolean');
		$this->addType('completion_time', 'integer');
	}

	#[\ReturnTypeWillChange]
	public function jsonSerialize() {
		return [
			'id' => $this->id,
			'gen_id' => $this->genId,
			'user_id' => $this->userId,
			'value' => $this->value,
			'prompt' => $this->prompt,
			'status' => $this->status,
			'timestamp' => $this->timestamp,
			'notify' => $this->notify,
			'completion_time' => $this->completionTime,
		];
	}

	// Specify php bool compatible boolean setters
	public function setNotify(?bool $notify): void {
		$this->setter('notify', [$notify ? 1 : null]);
	}
}
