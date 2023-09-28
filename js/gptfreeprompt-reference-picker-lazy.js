"use strict";
(self["webpackChunkgptfreeprompt"] = self["webpackChunkgptfreeprompt"] || []).push([["reference-picker-lazy"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_material_design_icons_Eye_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/Eye.vue */ "./node_modules/vue-material-design-icons/Eye.vue");
/* harmony import */ var vue_material_design_icons_Refresh_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Refresh.vue */ "./node_modules/vue-material-design-icons/Refresh.vue");
/* harmony import */ var vue_material_design_icons_ArrowRight_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/ArrowRight.vue */ "./node_modules/vue-material-design-icons/ArrowRight.vue");
/* harmony import */ var vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/ChevronRight.vue */ "./node_modules/vue-material-design-icons/ChevronRight.vue");
/* harmony import */ var vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/ChevronDown.vue */ "./node_modules/vue-material-design-icons/ChevronDown.vue");
/* harmony import */ var vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/HelpCircle.vue */ "./node_modules/vue-material-design-icons/HelpCircle.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSelect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcUserBubble_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcUserBubble.js */ "./node_modules/@nextcloud/vue/dist/Components/NcUserBubble.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcUserBubble_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcUserBubble_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcRichContenteditable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcRichContenteditable.js */ "./node_modules/@nextcloud/vue/dist/Components/NcRichContenteditable.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcRichContenteditable_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcRichContenteditable_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GptFreePromptCustomPickerElement',
  components: {
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_6___default()),
    NcLoadingIcon: (_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_7___default()),
    NcTextField: (_nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_8___default()),
    NcSelect: (_nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_9___default()),
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_10___default()),
    ChevronRightIcon: vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChevronDownIcon: vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    HelpCircleIcon: vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ArrowRightIcon: vue_material_design_icons_ArrowRight_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcUserBubble: (_nextcloud_vue_dist_Components_NcUserBubble_js__WEBPACK_IMPORTED_MODULE_11___default()),
    RefreshIcon: vue_material_design_icons_Refresh_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EyeIcon: vue_material_design_icons_Eye_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcRichContenteditable: (_nextcloud_vue_dist_Components_NcRichContenteditable_js__WEBPACK_IMPORTED_MODULE_12___default())
  },
  props: {
    providerId: {
      type: String,
      required: true
    },
    accessible: {
      type: Boolean,
      default: false
    },
    pickerEnabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      query: '',
      result: null,
      loading: false,
      models: [],
      inputPlaceholder: t('integration_openai', 'What is the matter with putting pineapple on pizza?'),
      poweredByTitle: '',
      poweredByUrl: '',
      modelPlaceholder: t('integration_openai', 'Choose a model'),
      showAdvanced: false,
      selectedModel: null,
      includeQuery: false,
      completionNumber: 1,
      maxTokens: 1000,
      prompts: null
    };
  },
  computed: {
    showAdvancedIcon() {
      return this.showAdvanced ? vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_4__["default"] : vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_3__["default"];
    },
    formattedModels() {
      if (this.models) {
        return this.models.map(m => {
          return {
            id: m.id,
            value: m.id,
            label: m.id + ' (' + m.owned_by + ')'
          };
        });
      }
      return [];
    },
    previewButtonLabel() {
      return this.result !== null ? t('integration_openai', 'Regenerate') : t('integration_openai', 'Preview');
    },
    emptyResult() {
      return this.result.trim() === '';
    }
  },
  watch: {},
  mounted() {
    this.focusOnInput();
    this.getModels();
    this.getPromptHistory();
    const capabilities = OC.getCapabilities()?.integration_openai;
    this.poweredByTitle = capabilities.uses_openai ? t('integration_openai', 'by OpenAI') : t('integration_openai', 'by LocalAI');
    this.poweredByUrl = capabilities.uses_openai ? 'https://openai.com' : 'https://localai.io/features/text-generation/';
  },
  methods: {
    focusOnInput() {
      setTimeout(() => {
        this.$refs['chatgpt-search-input'].$el.getElementsByTagName('input')[0]?.focus();
      }, 300);
    },
    getPromptHistory() {
      const params = {
        params: {
          type: 1
        }
      };
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_14__.generateUrl)('/apps/integration_openai/prompts');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_13__["default"].get(url, params).then(response => {
        this.prompts = response.data;
      }).catch(error => {
        console.error(error);
      });
    },
    getModels() {
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_14__.generateUrl)('/apps/integration_openai/models');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_13__["default"].get(url).then(response => {
        this.models = response.data?.data;
        const defaultModelId = response.data?.default_completion_model_id;
        const defaultModel = this.models.find(m => m.id === defaultModelId);
        const modelToSelect = defaultModel ?? this.models[0] ?? null;
        if (modelToSelect) {
          this.selectedModel = {
            id: modelToSelect.id,
            value: modelToSelect.id,
            label: modelToSelect.id + ' (' + modelToSelect.owned_by + ')'
          };
        }
      }).catch(error => {
        console.error(error);
      });
    },
    saveModel(modelId) {
      const req = {
        values: {
          default_completion_model_id: modelId
        }
      };
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_14__.generateUrl)('/apps/integration_openai/config');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_13__["default"].put(url, req).then(response => {}).catch(error => {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_15__.showError)(t('integration_openai', 'Failed to save OpenAI default model ID') + ': ' + error.response?.request?.responseText);
      });
    },
    submit() {
      this.$emit('submit', this.result.trim());
    },
    insertPrompt(prompt) {
      if (this.prompts.find(p => p.value === prompt) === undefined) {
        this.prompts.unshift({
          id: 0,
          value: prompt
        });
      }
    },
    generate() {
      if (this.query === '') {
        return;
      }
      this.loading = true;
      const params = {
        prompt: this.query,
        n: this.completionNumber,
        maxTokens: this.maxTokens
      };
      if (this.selectedModel) {
        params.model = this.selectedModel.id;
        this.saveModel(this.selectedModel.id);
      }
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_14__.generateUrl)('/apps/integration_openai/completions');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_13__["default"].post(url, params).then(response => {
        const data = response.data;
        if (data.choices && data.choices.length && data.choices.length > 0) {
          this.processCompletion(data.choices);
          this.insertPrompt(this.query);
        } else {
          this.error = response.data.error;
        }
      }).catch(error => {
        console.error('OpenAI completions request error', error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_15__.showError)(t('integration_openai', 'OpenAI error') + ': ' + (error.response?.data?.body?.error?.message || error.response?.data?.body?.error?.code || error.response?.data?.error || t('integration_openai', 'Unknown OpenAI API error')));
      }).then(() => {
        this.loading = false;
      });
    },
    processCompletion(choices) {
      const answers = this.selectedModel.id.startsWith('gpt-') ? choices.filter(c => !!c.message?.content).map(c => c.message?.content.replace(/^\s+|\s+$/g, '')) : choices.filter(c => !!c.text).map(c => c.text.replace(/^\s+|\s+$/g, ''));
      if (answers.length > 0) {
        if (answers.length === 1) {
          this.result = this.includeQuery ? t('integration_openai', 'Prompt') + '\n' + this.query + '\n\n' + t('integration_openai', 'Result') + '\n' + answers[0] : answers[0];
        } else {
          const multiAnswers = answers.map((a, i) => {
            return t('integration_openai', 'Result {index}', {
              index: i + 1
            }) + '\n' + a;
          });
          this.result = this.includeQuery ? t('integration_openai', 'Prompt') + '\n' + this.query + '\n\n' + multiAnswers.join('\n\n') : multiAnswers.join('\n\n');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "chatgpt-picker-content-wrapper"
  }, [_c("div", {
    staticClass: "chatgpt-picker-content"
  }, [_c("h2", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("integration_openai", "ChatGPT-like text generation")) + "\n\t\t")]), _vm._v(" "), _c("a", {
    staticClass: "attribution",
    attrs: {
      target: "_blank",
      href: _vm.poweredByUrl
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.poweredByTitle) + "\n\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "input-wrapper"
  }, [_c("NcTextField", {
    ref: "chatgpt-search-input",
    attrs: {
      value: _vm.query,
      label: _vm.inputPlaceholder,
      disabled: _vm.loading,
      "show-trailing-button": !!_vm.query
    },
    on: {
      "update:value": function ($event) {
        _vm.query = $event;
      },
      keydown: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.generate.apply(null, arguments);
      },
      "trailing-button-click": function ($event) {
        _vm.query = "";
      }
    }
  })], 1), _vm._v(" "), _vm.result === null || _vm.query === "" ? _c("div", {
    staticClass: "prompts"
  }, _vm._l(_vm.prompts, function (p) {
    return _c("NcUserBubble", {
      key: p.id + p.value,
      staticClass: "prompt-bubble",
      attrs: {
        title: p.value,
        size: 30,
        "avatar-image": "icon-history",
        "display-name": p.value
      },
      on: {
        click: function ($event) {
          _vm.query = p.value;
        }
      }
    });
  }), 1) : _vm._e(), _vm._v(" "), _vm.result !== null ? _c("div", {
    staticClass: "preview"
  }, [_c("h3", [_vm._v(_vm._s(_vm.t("integration_openai", "Preview")))]), _vm._v(" "), _c("NcRichContenteditable", {
    staticClass: "editable-preview",
    attrs: {
      value: _vm.result,
      multiline: true,
      disabled: _vm.loading,
      placeholder: _vm.t("integration_openai", "Preview content"),
      "link-autocomplete": false
    },
    on: {
      "update:value": function ($event) {
        _vm.result = $event;
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "footer"
  }, [_c("NcButton", {
    staticClass: "advanced-button",
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("integration_openai", "Show/hide advanced options")
    },
    on: {
      click: function ($event) {
        _vm.showAdvanced = !_vm.showAdvanced;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c(_vm.showAdvancedIcon, {
          tag: "component"
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("integration_openai", "Advanced options")) + "\n\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "secondary",
      "aria-label": _vm.t("integration_openai", "Preview text generation by OpenAI"),
      disabled: _vm.loading || !_vm.query
    },
    on: {
      click: _vm.generate
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm.loading ? _c("NcLoadingIcon") : _vm.result !== null ? _c("RefreshIcon") : _c("EyeIcon")];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.previewButtonLabel) + "\n\t\t\t\t")]), _vm._v(" "), _vm.result !== null ? _c("NcButton", {
    attrs: {
      type: "primary",
      "aria-label": _vm.t("integration_openai", "Submit text generated by OpenAI"),
      disabled: _vm.loading || _vm.emptyResult
    },
    on: {
      click: _vm.submit
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("ArrowRightIcon")];
      },
      proxy: true
    }], null, false, 1168934321)
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("integration_openai", "Send")) + "\n\t\t\t\t")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showAdvanced,
      expression: "showAdvanced"
    }],
    staticClass: "advanced"
  }, [_c("div", {
    staticClass: "line"
  }, [_c("NcCheckboxRadioSwitch", {
    staticClass: "include-query",
    attrs: {
      checked: _vm.includeQuery
    },
    on: {
      "update:checked": function ($event) {
        _vm.includeQuery = $event;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("integration_openai", "Include the prompt in the result")) + "\n\t\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "line"
  }, [_c("label", {
    attrs: {
      for: "nb-results"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("integration_openai", "How many results to generate")) + "\n\t\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.completionNumber,
      expression: "completionNumber"
    }],
    attrs: {
      id: "nb-results",
      type: "number",
      min: "1",
      max: "10",
      step: "1"
    },
    domProps: {
      value: _vm.completionNumber
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.completionNumber = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "line"
  }, [_c("label", {
    attrs: {
      for: "openai-completion-model-select"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("integration_openai", "Model to use")) + "\n\t\t\t\t")]), _vm._v(" "), _c("a", {
    attrs: {
      title: _vm.t("integration_openai", "More information about OpenAI models"),
      href: "https://beta.openai.com/docs/models",
      target: "_blank"
    }
  }, [_c("NcButton", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("integration_openai", "More information about OpenAI models")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("HelpCircleIcon")];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("NcSelect", {
    staticClass: "model-select",
    attrs: {
      options: _vm.formattedModels,
      "input-id": "openai-completion-model-select"
    },
    model: {
      value: _vm.selectedModel,
      callback: function ($$v) {
        _vm.selectedModel = $$v;
      },
      expression: "selectedModel"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "line"
  }, [_c("label", {
    attrs: {
      for: "max-tokens"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("integration_openai", "Approximate maximum number of words to generate (tokens)")) + "\n\t\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.maxTokens,
      expression: "maxTokens"
    }],
    attrs: {
      id: "max-tokens",
      type: "number",
      min: "10",
      max: "100000",
      step: "1"
    },
    domProps: {
      value: _vm.maxTokens
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.maxTokens = $event.target.value;
      }
    }
  })])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.chatgpt-picker-content-wrapper[data-v-043c6bdc] {
  width: 100%;
}
.chatgpt-picker-content[data-v-043c6bdc] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 16px 16px 16px;
}
.chatgpt-picker-content h2[data-v-043c6bdc] {
  display: flex;
  align-items: center;
}
.chatgpt-picker-content .prompts[data-v-043c6bdc] {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.chatgpt-picker-content .prompts > *[data-v-043c6bdc] {
  margin-right: 8px;
}
.chatgpt-picker-content .prompt-bubble[data-v-043c6bdc] {
  max-width: 250px;
}
.chatgpt-picker-content .preview[data-v-043c6bdc] {
  width: 100%;
}
.chatgpt-picker-content .preview h3[data-v-043c6bdc] {
  font-weight: bold;
}
.chatgpt-picker-content .preview .editable-preview[data-v-043c6bdc] {
  width: 100% !important;
  max-height: 300px !important;
}
.chatgpt-picker-content .spacer[data-v-043c6bdc] {
  flex-grow: 1;
}
.chatgpt-picker-content .attribution[data-v-043c6bdc] {
  color: var(--color-text-maxcontrast);
  padding-bottom: 8px;
}
.chatgpt-picker-content .input-wrapper[data-v-043c6bdc] {
  display: flex;
  align-items: center;
  width: 100%;
}
.chatgpt-picker-content .prompt-select[data-v-043c6bdc] {
  width: 100%;
  margin-top: 4px;
}
.chatgpt-picker-content .footer[data-v-043c6bdc] {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 12px;
}
.chatgpt-picker-content .footer > *[data-v-043c6bdc] {
  margin-left: 4px;
}
.chatgpt-picker-content .advanced[data-v-043c6bdc] {
  width: 100%;
  padding: 12px 0;
}
.chatgpt-picker-content .advanced .line[data-v-043c6bdc] {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.chatgpt-picker-content .advanced .line input[data-v-043c6bdc] {
  width: 200px;
}
.chatgpt-picker-content .advanced .line .model-select[data-v-043c6bdc] {
  width: 300px;
}
.chatgpt-picker-content .advanced input[type=number][data-v-043c6bdc] {
  width: 120px;
  appearance: initial !important;
  -moz-appearance: initial !important;
  -webkit-appearance: initial !important;
}
.chatgpt-picker-content .advanced .include-query[data-v-043c6bdc] {
  margin-right: 16px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_style_index_0_id_043c6bdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_style_index_0_id_043c6bdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_style_index_0_id_043c6bdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_style_index_0_id_043c6bdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_style_index_0_id_043c6bdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/GptFreePromptCustomPickerElement.vue":
/*!********************************************************!*\
  !*** ./src/views/GptFreePromptCustomPickerElement.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GptFreePromptCustomPickerElement_vue_vue_type_template_id_043c6bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true& */ "./src/views/GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true&");
/* harmony import */ var _GptFreePromptCustomPickerElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js& */ "./src/views/GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js&");
/* harmony import */ var _GptFreePromptCustomPickerElement_vue_vue_type_style_index_0_id_043c6bdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss& */ "./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GptFreePromptCustomPickerElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GptFreePromptCustomPickerElement_vue_vue_type_template_id_043c6bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GptFreePromptCustomPickerElement_vue_vue_type_template_id_043c6bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "043c6bdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/GptFreePromptCustomPickerElement.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_template_id_043c6bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_template_id_043c6bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_template_id_043c6bdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=template&id=043c6bdc&scoped=true&");


/***/ }),

/***/ "./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GptFreePromptCustomPickerElement_vue_vue_type_style_index_0_id_043c6bdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/GptFreePromptCustomPickerElement.vue?vue&type=style&index=0&id=043c6bdc&scoped=true&lang=scss&");


/***/ })

}]);
//# sourceMappingURL=gptfreeprompt-reference-picker-lazy.js.map?v=f8805428e85065c9fd3e