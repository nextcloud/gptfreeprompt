// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

import Vue from 'vue'
import GptFreePromptGenerationPage from './views/GptFreePromptGenerationPage.vue'
import { loadState } from '@nextcloud/initial-state'

Vue.mixin({ methods: { t, n } })
const options = loadState('gptfreeprompt', 'generation-page-inputs')
const genId = options.gen_id
const View = Vue.extend(GptFreePromptGenerationPage)
new View({ propsData: { genId } }).$mount('#gptfreeprompt_generation_page')
