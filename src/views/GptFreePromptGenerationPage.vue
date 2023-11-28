<!-- SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com> -->
<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
	<NcContent app-name="gptfreeprompt">
		<NcAppContent class="page">
			<div class="generation-dialog">
				<h2>
					{{ t('gptfreeprompt', 'Text generation') }}
				</h2>
				<GptFreePromptGenerationDisplay :gen-id="genId" />
			</div>
		</NcAppContent>
	</NcContent>
</template>
<script>
import NcContent from '@nextcloud/vue/dist/Components/NcContent.js'
import NcAppContent from '@nextcloud/vue/dist/Components/NcAppContent.js'
import GptFreePromptGenerationDisplay from '../components/GptFreePromptGenerationDisplay.vue'

export default {
	name: 'GptFreePromptGenerationPage',
	components: {
		NcContent,
		NcAppContent,
		GptFreePromptGenerationDisplay,
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
			originalResult: '',
			result: '',
			loading: true,
			processing: false,
			includePrompt: false,
			prompt: '',
		}
	},
	mounted() {
		this.getResults()
	},
	methods: {
	},
}
</script>
<style scoped lang="scss">
.page {
	display: flex;
	justify-content: center;
	align-items: start;
	width: 100%;
	height: 100vh;

	.generation-dialog {
		width: 600px;
		margin: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: center;
		padding: 12px 12px 12px 12px;
		overflow-x: hidden;

		h2 {
			display: flex;
			align-items: center;
		}
	}
}
</style>
