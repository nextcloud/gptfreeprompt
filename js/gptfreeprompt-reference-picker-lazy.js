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
      inputPlaceholder: t('gptfreeprompt', 'What is the matter with putting pineapple on pizza?'),
      poweredByTitle: '',
      poweredByUrl: '',
      modelPlaceholder: t('gptfreeprompt', 'Choose a model'),
      showAdvanced: false,
      includeQuery: false,
      completionNumber: 1,
      prompts: null
    };
  },
  computed: {
    showAdvancedIcon() {
      return this.showAdvanced ? vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_4__["default"] : vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_3__["default"];
    },
    previewButtonLabel() {
      return this.result !== null ? t('gptfreeprompt', 'Regenerate') : t('gptfreeprompt', 'Preview');
    },
    emptyResult() {
      return this.result.trim() === '';
    }
  },
  watch: {},
  mounted() {
    this.focusOnInput();
    this.getPromptHistory();

    // TODO:
    // const capabilities = OC.getCapabilities()?.integration_openai
    // this.poweredByTitle = capabilities.uses_openai
    // ? t('gptfreeprompt', 'by OpenAI')
    // : t('gptfreeprompt', 'by LocalAI')
    // this.poweredByUrl = capabilities.uses_openai
    // ? 'https://openai.com'
    // : 'https://localai.io/features/text-generation/'
  },

  methods: {
    focusOnInput() {
      setTimeout(() => {
        this.$refs['gptfreeprompt-search-input'].$el.getElementsByTagName('input')[0]?.focus();
      }, 300);
    },
    getPromptHistory() {
      const params = {
        params: {}
      };
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_14__.generateUrl)('/apps/gptfreeprompt/prompt_history');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_13__["default"].get(url, params).then(response => {
        this.prompts = response.data;
      }).catch(error => {
        console.error(error);
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
        nResults: this.completionNumber
      };
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_14__.generateUrl)('/apps/gptfreeprompt/process_prompt');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_13__["default"].post(url, params).then(response => {
        const data = response.data;
        if (data.length && data.length > 0) {
          this.processCompletion(data);
          this.insertPrompt(this.query);
        } else {
          this.error = response.data.error;
        }
      }).catch(error => {
        console.error('OpenAI completions request error', error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_15__.showError)(t('gptfreeprompt', 'OpenAI error') + ': ' + (error.response?.data?.body?.error?.message || error.response?.data?.body?.error?.code || error.response?.data?.error || t('gptfreeprompt', 'Unknown OpenAI API error')));
      }).then(() => {
        this.loading = false;
      });
    },
    processCompletion(response) {
      const answers = response.filter(c => !!c.text).map(c => c.text.replace(/^\s+|\s+$/g, ''));
      if (answers.length > 0) {
        if (answers.length === 1) {
          this.result = this.includeQuery ? t('gptfreeprompt', 'Prompt') + '\n' + this.query + '\n\n' + t('gptfreeprompt', 'Result') + '\n' + answers[0] : answers[0];
        } else {
          const multiAnswers = answers.map((a, i) => {
            return t('gptfreeprompt', 'Result {index}', {
              index: i + 1
            }) + '\n' + a;
          });
          this.result = this.includeQuery ? t('gptfreeprompt', 'Prompt') + '\n' + this.query + '\n\n' + multiAnswers.join('\n\n') : multiAnswers.join('\n\n');
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
    staticClass: "gptfreeprompt-picker-content-wrapper"
  }, [!_vm.pickerEnabled ? _c("div", {
    staticClass: "gptfreeprompt-picker-content"
  }, [_c("h2", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("gptfreeprompt", "ERROR: No free prompt provider available")) + "\n\t\t")])]) : _vm._e(), _vm._v(" "), _vm.pickerEnabled ? _c("div", {
    staticClass: "gptfreeprompt-picker-content"
  }, [_c("h2", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("gptfreeprompt", "AI text generation")) + "\n\t\t")]), _vm._v(" "), _c("a", {
    staticClass: "attribution",
    attrs: {
      target: "_blank",
      href: _vm.poweredByUrl
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.poweredByTitle) + "\n\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "input-wrapper"
  }, [_c("NcTextField", {
    ref: "gptfreeprompt-search-input",
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
  }, [_c("h3", [_vm._v(_vm._s(_vm.t("gptfreeprompt", "Preview")))]), _vm._v(" "), _c("NcRichContenteditable", {
    staticClass: "editable-preview",
    attrs: {
      value: _vm.result,
      multiline: true,
      disabled: _vm.loading,
      placeholder: _vm.t("gptfreeprompt", "Preview content"),
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
      "aria-label": _vm.t("gptfreeprompt", "Show/hide advanced options")
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
    }], null, false, 1568011672)
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("gptfreeprompt", "Advanced options")) + "\n\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "secondary",
      "aria-label": _vm.t("gptfreeprompt", "Preview text generation by OpenAI"),
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
    }], null, false, 4202185618)
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.previewButtonLabel) + "\n\t\t\t\t")]), _vm._v(" "), _vm.result !== null ? _c("NcButton", {
    attrs: {
      type: "primary",
      "aria-label": _vm.t("gptfreeprompt", "Submit text generated by OpenAI"),
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
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("gptfreeprompt", "Send")) + "\n\t\t\t\t")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("gptfreeprompt", "Include the prompt in the result")) + "\n\t\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "line"
  }, [_c("label", {
    attrs: {
      for: "nb-results"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("gptfreeprompt", "How many results to generate")) + "\n\t\t\t\t")]), _vm._v(" "), _c("div", {
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
  })])])]) : _vm._e()]);
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
___CSS_LOADER_EXPORT___.push([module.id, `.gptfreeprompt-picker-content-wrapper[data-v-043c6bdc] {
  width: 100%;
}
.gptfreeprompt-picker-content[data-v-043c6bdc] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 16px 16px 16px;
}
.gptfreeprompt-picker-content h2[data-v-043c6bdc] {
  display: flex;
  align-items: center;
}
.gptfreeprompt-picker-content .prompts[data-v-043c6bdc] {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.gptfreeprompt-picker-content .prompts > *[data-v-043c6bdc] {
  margin-right: 8px;
}
.gptfreeprompt-picker-content .prompt-bubble[data-v-043c6bdc] {
  max-width: 250px;
}
.gptfreeprompt-picker-content .preview[data-v-043c6bdc] {
  width: 100%;
}
.gptfreeprompt-picker-content .preview h3[data-v-043c6bdc] {
  font-weight: bold;
}
.gptfreeprompt-picker-content .preview .editable-preview[data-v-043c6bdc] {
  width: 100% !important;
  max-height: 300px !important;
}
.gptfreeprompt-picker-content .spacer[data-v-043c6bdc] {
  flex-grow: 1;
}
.gptfreeprompt-picker-content .attribution[data-v-043c6bdc] {
  color: var(--color-text-maxcontrast);
  padding-bottom: 8px;
}
.gptfreeprompt-picker-content .input-wrapper[data-v-043c6bdc] {
  display: flex;
  align-items: center;
  width: 100%;
}
.gptfreeprompt-picker-content .prompt-select[data-v-043c6bdc] {
  width: 100%;
  margin-top: 4px;
}
.gptfreeprompt-picker-content .footer[data-v-043c6bdc] {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 12px;
}
.gptfreeprompt-picker-content .footer > *[data-v-043c6bdc] {
  margin-left: 4px;
}
.gptfreeprompt-picker-content .advanced[data-v-043c6bdc] {
  width: 100%;
  padding: 12px 0;
}
.gptfreeprompt-picker-content .advanced .line[data-v-043c6bdc] {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.gptfreeprompt-picker-content .advanced .line input[data-v-043c6bdc] {
  width: 200px;
}
.gptfreeprompt-picker-content .advanced .line .model-select[data-v-043c6bdc] {
  width: 300px;
}
.gptfreeprompt-picker-content .advanced input[type=number][data-v-043c6bdc] {
  width: 120px;
  appearance: initial !important;
  -moz-appearance: initial !important;
  -webkit-appearance: initial !important;
}
.gptfreeprompt-picker-content .advanced .include-query[data-v-043c6bdc] {
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
//# sourceMappingURL=gptfreeprompt-reference-picker-lazy.js.map?v=962f17535ba0ce675777