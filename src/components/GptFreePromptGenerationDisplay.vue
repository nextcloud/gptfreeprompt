<!-- SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com> -->
<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->

<template>
	<div class="display-container">
		<div v-if="result !== ''">
			<NcRichContenteditable v-if="result !== null"
				:value.sync="result"
				class="editable-preview"
				:multiline="true"
				:disabled="loading"
				:placeholder="t('gptfreeprompt', 'Text generation content')"
				:link-autocomplete="false"
				@update:value="onTextEdit" />
		</div>
		<div v-if="loading">
			<NcLoadingIcon :size="64" />
			<div v-if="processing" class="loading-info">
				<div v-if="bgProcessingScheduled" class="task-scheduled-info">
					{{ t('gptfreeprompt', 'The text generation task was scheduled to run in the background.') }}
					<div v-if="timeUntilCompletion !== null">
						{{ t('gptfreeprompt', 'Estimated completion time: ') + timeUntilCompletion }}
					</div>
					<div v-else>
						{{ t('gptfreeprompt', 'This can take a while...') }}
					</div>
				</div>
				<div v-else>
					{{ t('gptfreeprompt', 'Some generations are still being processed in the background! Showing finished generations.') }}
				</div>
			</div>
			<div v-else>
				{{ t('gptfreeprompt', 'Loading generations...') }}
			</div>
		</div>
		<div v-if="!loading" class="button-wrapper">
			<NcButton :disabled="result === null || loading" type="primary" @click="copyToClipboard">
				{{ t('gptfreeprompt', 'Copy text to clipboard') }}
			</NcButton>
			<NcButton :disabled="result === originalResult || loading" type="primary" @click="delayedReset">
				{{ t('gptfreeprompt', 'Reset') }}
			</NcButton>
			<NcCheckboxRadioSwitch
				:checked.sync="includePrompt"
				:disabled="loading || result === ''"
				@update:checked="onIncludePromptToggle">
				{{ t('gptfreeprompt', 'Include prompt') }}
			</NcCheckboxRadioSwitch>
		</div>
	</div>
</template>

<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import NcLoadingIcon from '@nextcloud/vue/dist/Components/NcLoadingIcon.js'
import NcRichContenteditable from '@nextcloud/vue/dist/Components/NcRichContenteditable.js'
import NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'
import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'
import { showError } from '@nextcloud/dialogs'
import humanizeDuration from 'humanize-duration'

export default {
	name: 'GptFreePromptGenerationDisplay',

	components: {
		NcLoadingIcon,
		NcRichContenteditable,
		NcButton,
		NcCheckboxRadioSwitch,
	},

	props: {
		genId: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			originalResponse: null,
			originalResult: null,
			result: null,
			loading: true,
			processing: false,
			bgProcessingScheduled: false,
			includePrompt: false,
			prompt: '',
			timeUntilCompletion: null,
			rawCompletionTimestamp: null,
			closed: false,
		}
	},

	mounted() {
		this.getResults()
	},

	beforeDestroy() {
		this.closed = true
	},

	methods: {
		getResults() {
			// Check if this element has already been closed/destroyed
			if (this.closed) {
				return
			}
			const config = {
				params: {
					genId: this.genId,
				},
			}
			const url = generateUrl('/apps/gptfreeprompt/get_outputs')
			return axios.get(url, config)
				.then((response) => {
					const data = response.data
					if (data.length && data.length > 0) {
						if (!data.length || data[0]?.status === undefined) {
							this.loading = false
							showError(t('gptfreeprompt', 'Unexpected server response'))
							this.$emit('error')
							return
						}

						if (this.rawCompletionTimestamp === null) {
							// Get the largest timestamp of all generations
							this.rawCompletionTimestamp = Math.max(...data.map(c => c.completion_time))
							this.updateTimeUntilCompletion(this.rawCompletionTimestamp)
						}

						// Check if processing of all completions is finished
						const numGensProcessing = data.filter(c => c.status === 0).length
						if (numGensProcessing === 0) {
							const nFailures = data.filter(c => c.status < 0).length
							if (nFailures > 0) {
								if (nFailures === data.length) {
									// status === -2 means the generation was deleted
									if (data.filter(c => c.status === -2).length === data.length) {
										showError(t('gptfreeprompt', 'This generation has been deleted.'))
									} else {
										showError(t('gptfreeprompt', 'The processing of generations failed.'))
									}
									this.loading = false
									this.result = null
									this.$emit('error')
									return
								}
								showError(t('gptfreeprompt', 'The processing of some generations failed.'))
							}
							this.loading = false
							this.$emit('loaded')
							this.processCompletion(data)
						} else {
							if (numGensProcessing === data.length) {
								this.bgProcessingScheduled = true
							}
							this.processing = true
							this.processCompletion(data)
							setTimeout(() => {
								this.getResults()
							}, 1000)
						}
					} else {
						this.loading = false
						this.$emit('error')
						this.error = response.data.error
					}
				})
				.catch((error) => {
					this.loading = false
					this.$emit('error')
					console.error('Text  completions request error', error)
					showError(
						t('gptfreeprompt', 'Text generation error') + ': '
						+ (error.response?.data?.body?.error?.message
							|| error.response?.data?.body?.error?.code
							|| error.response?.data?.error
							|| t('gptfreeprompt', 'Unknown text generation API error')
						),
					)
				})
		},

		onReset() {
			this.result = this.originalResult
		},

		delayedReset() {
			// This is a hack to sure the text box is updated
			// when we reset the text since removing newlines or spaces
			// from the end of the text does not trigger an update.

			// Delete any trailing newlines
			this.result = this.result.replace(/\n+$/, '')
			this.result += '.'

			// Let the ui refresh before resetting the text
			setTimeout(() => {
				this.onReset()
			}, 0)
		},

		copyToClipboard() {
			navigator.clipboard.writeText(this.result)
		},

		processCompletion(response) {
			this.originalResponse = response
			const totalGens = response.length
			// Drop completions that are not yet finished
			this.prompt = response[0].prompt
			response = response.filter(c => c.status === 1)
			const answers = response.filter(c => !!c.text).map(c => c.text.replace(/^\s+|\s+$/g, ''))
			if (answers.length > 0) {
				if (totalGens === 1) {
					this.originalResult = this.result = this.includePrompt
						? t('gptfreeprompt', 'Prompt') + '\n' + this.prompt + '\n\n' + t('gptfreeprompt', 'Result') + '\n' + answers[0]
						: answers[0]
				} else {
					const multiAnswers = answers.map((a, i) => {
						return t('gptfreeprompt', 'Result {index}', { index: i + 1 }) + '\n' + a
					})
					this.originalResult = this.result = this.includePrompt
						? t('gptfreeprompt', 'Prompt') + '\n' + this.prompt + '\n\n' + multiAnswers.join('\n\n')
						: multiAnswers.join('\n\n')
				}
			}
		},

		onIncludePromptToggle() {
			this.processCompletion(this.originalResponse)
		},

		onTextEdit() {
			this.$emit('update:result', this.result)
		},

		updateTimeUntilCompletion(completionTimeStamp) {
			const timeDifference = new Date(completionTimeStamp * 1000) - new Date()
			if (timeDifference < 60000) {
				this.timeUntilCompletion = null
				return
			}

			this.timeUntilCompletion = humanizeDuration(timeDifference,
				{ units: ['h', 'm'], language: OC.getLanguage(), fallbacks: ['en'], round: true })

			// Schedule next update:
			if (!this.closed) {
				setTimeout(() => {
					this.updateTimeUntilCompletion(completionTimeStamp)
				}, 30000)
			}
		},
	},
}
</script>

<style scoped lang="scss">
.display-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin-top: 24px;

	.loading-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 12px;
		margin-bottom: 24px;

		.task-scheduled-info {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.button-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 12px;
		margin-bottom: 12px;

		>* {
			margin-right: 12px;
			margin-left: 12px;
		}
	}

	.editable-preview {
		max-width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 12px;
		line-height: 1.5;
		white-space: pre-wrap;
		word-break: break-word;
		margin-bottom: 24px;
	}
}
</style>
