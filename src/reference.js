// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

import { registerCustomPickerElement, NcCustomPickerRenderResult } from '@nextcloud/vue/dist/Components/NcRichText.js'

import { linkTo } from '@nextcloud/router'
import { loadState } from '@nextcloud/initial-state'
import { getRequestToken } from '@nextcloud/auth'

__webpack_nonce__ = btoa(getRequestToken()) // eslint-disable-line
__webpack_public_path__ = linkTo('gptfreeprompt', 'js/') // eslint-disable-line

const features = loadState('gptfreeprompt', 'features')

if (features.picker_enabled === true || (features.picker_enabled === false && features.is_admin === true)) {
	registerCustomPickerElement('gptfreeprompt', async (el, { providerId, accessible }) => {
		const { default: Vue } = await import(/* webpackChunkName: "vue-lazy" */'vue')
		Vue.mixin({ methods: { t, n } })
		const { default: GptFreePromptCustomPickerElement } = await import(/* webpackChunkName: "reference-picker-lazy" */'./views/GptFreePromptCustomPickerElement.vue')
		const Element = Vue.extend(GptFreePromptCustomPickerElement)
		const pickerEnabled = features.picker_enabled
		const vueElement = new Element({
			propsData: {
				providerId,
				accessible,
				pickerEnabled,
			},
		}).$mount(el)
		return new NcCustomPickerRenderResult(vueElement.$el, vueElement)
	}, (el, renderResult) => {
		renderResult.object.$destroy()
	})
}
