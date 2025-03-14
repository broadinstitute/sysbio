/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"expression": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,"chunk-vendors","chunk-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Autocomplete.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Autocomplete.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_typeahead_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-typeahead-bootstrap */ "./node_modules/vue-typeahead-bootstrap/src/components/VueTypeaheadBootstrap.vue");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_5__);






vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BootstrapVue"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["IconsPlugin"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("vue-typeahead-bootstrap", vue_typeahead_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"]);

//currently autocompletes only genes
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("autocomplete", {
  props: {
    matches: Array,
    placeholder: String,
    secondaryKey: String,
    labelFormatter: {
      type: Function,
      default: function _default(id) {
        return id;
      }
    },
    disabled: Boolean
  },
  data: function data() {
    return {
      userInput: this.initialText || "",
      selectedItem: ""
    };
  },
  computed: {
    lookupOptions: function lookupOptions() {
      if (!this.matches) {
        return [];
      } else {
        return this.matches;
      }
    }
  },
  methods: {
    tap: function tap() {
      console.log(arguments);
    },
    formatHTML: function formatHTML(html) {
      return this.labelFormatter(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(html));
    },
    serializer: function serializer(item) {
      if (!this.matchkey) {
        return item;
      } else {
        return this.matchkey;
      }
    },
    onAutoCompleteItemSelected: function onAutoCompleteItemSelected(item) {
      this.$emit("item-select", item);
      this.userInput = "";
      this.$refs.autocomplete.inputValue = "";
    },
    onUserEnterNonAutoCompleteItem: function onUserEnterNonAutoCompleteItem() {
      this.$emit("keyup-enter", this.userInput);
      this.userInput = "";
      this.$refs.autocomplete.inputValue = "";
    }
  },
  watch: {
    userInput: function userInput(text) {
      this.$emit("input-change", text);
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DataDownload.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataDownload.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_uiUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/uiUtils */ "./src/utils/uiUtils.js");
/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ "./node_modules/flat/index.js");
/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_4__["default"].component("DataDownload", {
  props: {
    data: {
      type: Array,
      required: true
    },
    filename: {
      type: String,
      required: false,
      default: "data"
    },
    flatten: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    downloadCsv: function downloadCsv() {
      if (this.flatten && this.data) {
        var flatted = this.flattenCsv(this.data, this.flatten);
        _utils_uiUtils__WEBPACK_IMPORTED_MODULE_5__["default"].convertJson2Csv(flatted, this.filename);
      } else {
        _utils_uiUtils__WEBPACK_IMPORTED_MODULE_5__["default"].convertJson2Csv(this.data, this.filename);
      }
    },
    //! Don't flatten unless necessary;
    // This function will flatten the input column
    flattenCsv: function flattenCsv(data, field) {
      return data.map(function (line) {
        line[field] = flat__WEBPACK_IMPORTED_MODULE_6___default()(line[field]);
        return line;
      });
    },
    downloadJson: function downloadJson() {
      _utils_uiUtils__WEBPACK_IMPORTED_MODULE_5__["default"].saveJson(this.data, this.filename);
    },
    downloadTsv: function downloadTsv() {
      _utils_uiUtils__WEBPACK_IMPORTED_MODULE_5__["default"].convertJson2Tsv(this.data, this.filename);
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DownloadChart.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_uiUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/uiUtils */ "./src/utils/uiUtils.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");













/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_10__["default"].component("DownloadChart", {
  props: {
    chartId: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      default: 'chart'
    },
    transparentPng: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    isCanvas: function isCanvas() {
      return document.querySelector("canvas#".concat(this.chartId)) !== null;
    }
  },
  methods: {
    svgUrl: function svgUrl() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (!id) {
        id = this.chartId;
      }
      // Serialize the SVG to a string
      var svgString = new XMLSerializer().serializeToString(d3__WEBPACK_IMPORTED_MODULE_12__["select"]("svg#".concat(id)).node());
      // Create a data URL
      var blob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8"
      });
      return URL.createObjectURL(blob);
    },
    downloadSvg: function downloadSvg() {
      if (this.isCanvas) {
        this.downloadCanvasToSvg();
        return;
      }
      _utils_uiUtils__WEBPACK_IMPORTED_MODULE_11__["default"].downloadChart(this.svgUrl(), "".concat(this.filename, ".svg"));
    },
    downloadPng: function downloadPng() {
      if (this.isCanvas) {
        this.downloadCanvasToPng();
        return;
      }
      var img = new Image();
      img.src = this.svgUrl();
      var filename = "".concat(this.filename, ".png");
      var transparent = this.transparentPng;
      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        var ctx = canvas.getContext("2d");
        if (!transparent) {
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(this, 0, 0);
        var dataUrl = canvas.toDataURL("image/png");
        _utils_uiUtils__WEBPACK_IMPORTED_MODULE_11__["default"].downloadChart(dataUrl, filename);
      };
    },
    downloadCanvasToPng: function downloadCanvasToPng() {
      var canvas = document.querySelector("canvas#".concat(this.chartId));
      var dataUrl = canvas.toDataURL("image/png");
      _utils_uiUtils__WEBPACK_IMPORTED_MODULE_11__["default"].downloadChart(dataUrl, "".concat(this.filename, ".png"));
    },
    downloadCanvasToSvg: function downloadCanvasToSvg() {
      var canvas = document.querySelector("canvas#".concat(this.chartId));
      var dataUrl = canvas.toDataURL("image/png");
      var height = canvas.height;
      var width = canvas.width;
      var image = "<image height=\"".concat(height, "\" width=\"").concat(width, "\" y=\"0\" x=\"0\" xlink:href=\"").concat(dataUrl, "\" id=\"importedCanvas_0\"/>");
      var svg = "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"".concat(height, "\" width=\"").concat(width, "\" xmlns=\"http://www.w3.org/2000/svg\" id=\"new-svg\">").concat(image, "</svg>");
      var newDiv = document.createElement("div");
      newDiv.innerHTML = svg;
      newDiv.hidden = true;
      document.body.appendChild(newDiv);
      _utils_uiUtils__WEBPACK_IMPORTED_MODULE_11__["default"].downloadChart(this.svgUrl("new-svg"), "".concat(this.filename, ".svg"));
      document.body.removeChild(newDiv);
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/GeneSelectPicker.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GeneSelectPicker.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_typeahead_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-typeahead-bootstrap */ "./node_modules/vue-typeahead-bootstrap/src/components/VueTypeaheadBootstrap.vue");
/* harmony import */ var _components_Autocomplete_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Autocomplete.vue */ "./src/components/Autocomplete.vue");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/bioIndexUtils */ "./src/utils/bioIndexUtils.js");
/* harmony import */ var _utils_regionUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/regionUtils */ "./src/utils/regionUtils.js");










vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BootstrapVue"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["IconsPlugin"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].component("vue-typeahead-bootstrap", vue_typeahead_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].component("autocomplete", _components_Autocomplete_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].component("gene-selectpicker", {
  props: [],
  data: function data() {
    return {
      matchingGenes: []
    };
  },
  computed: {},
  methods: {
    setFocus: function setFocus() {
      var _this = this;
      this.$nextTick(function () {
        _this.$refs.geneSelect.$refs.input.focus();
      });
    },
    lookupGenes: function lookupGenes(input) {
      var _this2 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var matches;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!input) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return Object(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_8__["match"])("gene", input, {
                limit: 10
              });
            case 3:
              matches = _context.sent;
              _this2.matchingGenes = matches;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    selectGene: function selectGene(gene) {
      var _this3 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var geneSymbol;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _utils_regionUtils__WEBPACK_IMPORTED_MODULE_9__["default"].geneSymbol(gene);
            case 2:
              geneSymbol = _context2.sent;
              if (geneSymbol) {
                _this3.$store.state.geneToQuery = geneSymbol;
                _this3.$emit("onGeneChange", geneSymbol);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");


/*
usage: mouseTooltip.js
dont import this component directly, use the mouseTooltip.js service instead

simply
import mouseTooltip from '@/components/researchPortal/singleCellBrowser/mouseTooltip.js';

to show tooltip call
mouseTooltip.show(your_content_string_html);

to hide tooltip call
mouseTooltip.hide();

the tooltip will keep following mouse until hide() is called
*/

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('research-mouse-tooltip', {
  props: {},
  data: function data() {
    return {
      tt: null,
      content: null,
      mousePos: {
        x: 0,
        y: 0
      },
      showing: false
    };
  },
  watch: {},
  mounted: function mounted() {
    this.tt = this.$refs.tooltip;
  },
  created: function created() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    showTooltip: function showTooltip(content) {
      this.content = content;
      this.tt.innerHTML = this.content;
      this.positionToolip();
      this.tt.classList.add('show');
    },
    positionToolip: function positionToolip() {
      var tt = this.tt;

      // get tooltip dimentions
      var tooltipWidth = tt.offsetWidth;
      var tooltipHeight = tt.offsetHeight;
      var viewportWidth = window.innerWidth;
      var viewportHeight = window.innerHeight;

      //ideal tooltip position next to mouse
      var top = this.mousePos.y - 10;
      var left = this.mousePos.x + 10;

      // adjust to keep the tooltip inside the viewport
      if (left + tooltipWidth > viewportWidth) {
        left = this.mousePos.x - tooltipWidth - 10;
      }
      if (top + tooltipHeight > viewportHeight) {
        top = viewportHeight - tooltipHeight - 10;
      }

      // avoid moving out of the top edge
      if (top < 0) {
        top = 10;
      }
      tt.style.top = "".concat(top, "px");
      tt.style.left = "".concat(left, "px");
      this.showing = true;
    },
    hideTooltip: function hideTooltip() {
      this.tt.classList.remove('show');
      this.tt.style.top = -10000 + "px";
      this.tt.style.left = -10000 + "px";
      this.showing = false;
    },
    updateMousePosition: function updateMousePosition(x, y) {
      this.mousePos = {
        x: x,
        y: y
      };
      if (this.showing) {
        this.positionToolip();
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.iterator.reduce.js */ "./node_modules/core-js/modules/es.iterator.reduce.js");
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/utils/formatters */ "./src/utils/formatters.js");
/* harmony import */ var _components_researchPortal_singleCellBrowser_mouseTooltip_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../components/researchPortal/singleCellBrowser/mouseTooltip.js */ "./src/components/researchPortal/singleCellBrowser/mouseTooltip.js");




































vue__WEBPACK_IMPORTED_MODULE_30__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_33__["BootstrapVueIcons"]);
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_30__["default"].component("bulk-volcano-plot", {
  props: ["renderData", "renderConfig", "margin", "sectionId", "selectedGene", "filter"],
  data: function data() {
    return {
      tooltip: null,
      chart: null,
      chartWidth: 0,
      fontSize: "12px",
      svg: null,
      x: null,
      y: null,
      yAxisField: null,
      xAxisField: null,
      geneMap: null
    };
  },
  modules: {},
  components: {},
  created: function created() {},
  mounted: function mounted() {
    this.chart = document.getElementById("vector_wrapper_".concat(this.sectionId));
    this.chartWidth = this.renderConfig.width || this.chart.clientWidth;
    this.geneMap = new Map(this.plotData.map(function (d) {
      return [d.GENE, d];
    })); //should be this.renderConfig.renderBy
    this.renderPlot();
    if (this.selectedGene) {
      this.highlightDot(this.selectedGene);
      //this.$emit("highlight", this.selectedGene);
    }
  },
  computed: {
    canvasId: function canvasId() {
      var canvasId = this.sectionId.replaceAll("_", "-").toLowerCase();
      return canvasId;
    },
    plotData: function plotData() {
      if (this.filter) {
        return this.renderData.filter(this.filter);
      }
      return this.renderData;
    }
  },
  watch: {
    plotData: function plotData(newData, oldData) {
      if (newData !== oldData) {
        this.renderPlot();
      }
    },
    selectedGene: function selectedGene(newData, oldData) {
      this.highlightDot(newData);
    },
    renderConfig: {
      handler: function handler(newData, oldData) {
        //console.log(newData === oldData)
        //if(newData !== oldData){
        this.renderPlot();
        //}
      },
      deep: true
    }
  },
  methods: {
    tpmFormatter: _utils_formatters__WEBPACK_IMPORTED_MODULE_34__["default"].tpmFormatter,
    renderPlot: function renderPlot() {
      var _this = this;
      console.log('rendering');
      var wrapperClass = ".vector-wrapper-".concat(this.canvasId);
      var wrapperId = "vector_wrapper_".concat(this.sectionId);

      //Clear existing
      d3__WEBPACK_IMPORTED_MODULE_31__["select"](wrapperClass).selectAll("svg").remove();
      d3__WEBPACK_IMPORTED_MODULE_31__["select"](wrapperClass).selectAll("g").remove();
      d3__WEBPACK_IMPORTED_MODULE_31__["select"](wrapperClass).selectAll("div").remove();
      var renderConfig = this.renderConfig;
      var calculateCondition = function calculateCondition(EXP, LENGTH) {
        var calcString = "";
        EXP.map(function (e) {
          var eValue = !!["+", "-", "*", "/", "(", ")"].includes(e) ? e : typeof e === 'number' ? e : typeof e === 'string' ? e == "data length" ? LENGTH : e : null;
          calcString += eValue;
        });
        var threshold = eval(calcString);
        return threshold;
      };
      var conditions = [["x condition", "lower than"], ["x condition", "greater than"], ["y condition", "lower than"], ["y condition", "greater than"]];
      conditions.map(function (condition) {
        if (renderConfig[condition[0]][condition[1]] && renderConfig[condition[0]][condition[1]] == "calculate") {
          var expression = renderConfig[condition[0]]["condition calculate"][condition[1]];
          renderConfig[condition[0]][condition[1]] = calculateCondition(expression, _this.plotData.length);
        }
      });
      var margin = this.margin;
      var width = this.chartWidth - margin.left - margin.right - margin.middleSpacing;
      var height = this.renderConfig['height'] - margin.top - margin.bottom;
      this.tooltip = d3__WEBPACK_IMPORTED_MODULE_31__["select"](wrapperClass).append("div").style("opacity", 0).attr("class", "tooltip").style("background-color", "white").style("border", "2px solid gray").style("padding", "5px").style("border-radius", "5px").style("font-size", "smaller");
      this.svg = d3__WEBPACK_IMPORTED_MODULE_31__["select"](wrapperClass).append("svg").attr("id", "vector_volcano_plot_" + this.sectionId).attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
      this.yAxisField = this.renderConfig['y axis field'];
      this.xAxisField = this.renderConfig['x axis field'];
      var renderField = this.renderConfig['render by'];
      var sumstat = [];
      this.plotData.map(function (v) {
        var tempObj = {
          key: v[renderField],
          value: {}
        };
        tempObj.value['x'] = v[_this.xAxisField];
        tempObj.value['y'] = v[_this.yAxisField];
        sumstat.push(tempObj);
      });

      //render axis labels
      this.svg.append("text").attr('text-anchor', 'middle').attr("x", margin.left + width / 2).attr("y", height + margin.bottom + margin.top - 14).style("font-family", "Arial").style("font-size", 14).text(this.renderConfig['x axis label']);
      this.svg.append("text").attr('text-anchor', 'middle').attr("x", -(margin.top + height / 2)).attr("y", 14).attr("transform", "rotate(-90)").style("font-family", "Arial").style("font-size", 14).text(this.renderConfig['y axis label']);

      /// render axis
      var xVals = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(sumstat.map(function (s) {
          return s.value.x;
        }))),
        yVals = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(sumstat.map(function (s) {
          return s.value.y;
        })));
      var xMaxVal = xVals.reduce(function (prev, next) {
          return prev > next ? prev : next;
        }),
        xMinVal = xVals.reduce(function (prev, next) {
          return prev < next ? prev : next;
        }),
        yMaxVal = yVals.reduce(function (prev, next) {
          return prev > next ? prev : next;
        }),
        yMinVal = yVals.reduce(function (prev, next) {
          return prev < next ? prev : next;
        }),
        vals = [xMaxVal, xMinVal, yMaxVal, yMinVal];
      vals.map(function (v) {
        v = Math.round(v * 100) / 100;
      });
      this.x = d3__WEBPACK_IMPORTED_MODULE_31__["scaleLinear"]().domain([xMinVal - xMaxVal * .05, xMaxVal + xMaxVal * .05]).range([margin.left, width + margin.left]);
      this.y = d3__WEBPACK_IMPORTED_MODULE_31__["scaleLinear"]().domain([yMinVal - yMaxVal * .05, yMaxVal + yMaxVal * .05]).range([height + margin.top, margin.top]);
      this.svg.attr("transform", "translate(0,0)").append("g").attr("id", "axisGroup");
      this.svg.select("#axisGroup").append("g").attr("transform", function (d) {
        return "translate(" + (margin.left - margin.bump) + "," + "0" + ")";
      }).call(d3__WEBPACK_IMPORTED_MODULE_31__["axisLeft"](this.y)).selectAll("text").style("font-size", this.fontSize);
      this.svg.select("#axisGroup").append("g").attr("transform", function (d) {
        return "translate(" + "0" + "," + (height + margin.top + margin.bump) + ")";
      }).call(d3__WEBPACK_IMPORTED_MODULE_31__["axisBottom"](this.x)).selectAll("text").style("font-size", this.fontSize);
      if (!!renderConfig["x condition"]) {
        if (!!renderConfig["x condition"]["greater than"]) {
          this.svg.select("#axisGroup").append('line').attr('style', "stroke-dasharray: 3,3").attr('x1', this.x(renderConfig["x condition"]["greater than"])).attr('y1', margin.top).attr('x2', this.x(renderConfig["x condition"]["greater than"])).attr('y2', margin.top + height).attr("stroke", "#cccccc").style("stroke-width", 1);
        }
        if (!!renderConfig["x condition"]["lower than"]) {
          this.svg.select("#axisGroup").append('line').attr('style', "stroke-dasharray: 3,3").attr('x1', this.x(renderConfig["x condition"]["lower than"])).attr('y1', margin.top).attr('x2', this.x(renderConfig["x condition"]["lower than"])).attr('y2', margin.top + height).attr("stroke", "#cccccc").style("stroke-width", 1);
        }
      }
      if (!!renderConfig["y condition"]) {
        if (!!renderConfig["y condition"]["greater than"]) {
          this.svg.select("#axisGroup").append('line').attr('style', "stroke-dasharray: 3,3").attr('x1', margin.left).attr('y1', this.y(renderConfig["y condition"]["greater than"])).attr('x2', margin.left + width).attr('y2', this.y(renderConfig["y condition"]["greater than"])).attr("stroke", "#cccccc").style("stroke-width", 1);
        }
        if (!!renderConfig["y condition"]["lower than"]) {
          this.svg.select("#axisGroup").append('line').attr('style', "stroke-dasharray: 3,3").attr('x1', margin.left).attr('y1', this.y(renderConfig["y condition"]["lower than"])).attr('x2', margin.left + width).attr('y2', this.y(renderConfig["y condition"]["lower than"])).attr("stroke", "#cccccc").style("stroke-width", 1);
        }
      }

      // render circle or triangle
      sumstat.map(function (d) {
        var fillScore = 0;
        var xFieldVal;
        if (!!renderConfig["x condition"]) {
          var xCondiCombi = renderConfig["x condition"].combination;
          xFieldVal = d.value.x;
          if (xCondiCombi == "greater than" && xFieldVal > renderConfig["x condition"]["greater than"]) {
            fillScore++;
          }
          if (xCondiCombi == "lower than" && xFieldVal < renderConfig["x condition"]["lower than"]) {
            fillScore++;
          }
          if (xCondiCombi == "and" && xFieldVal > renderConfig["x condition"]["greater than"] && xFieldVal < renderConfig["x condition"]["lower than"]) {
            fillScore++;
          }
          if (xCondiCombi == "or" && xFieldVal > renderConfig["x condition"]["greater than"] || xFieldVal < renderConfig["x condition"]["lower than"]) {
            fillScore++;
          }
        }
        if (!!renderConfig["y condition"]) {
          var yCondiCombi = renderConfig["y condition"].combination;
          var yFieldVal = d.value.y;
          if (yCondiCombi == "greater than" && yFieldVal > renderConfig["y condition"]["greater than"]) {
            fillScore++;
          }
          if (yCondiCombi == "lower than" && yFieldVal < renderConfig["y condition"]["lower than"]) {
            fillScore++;
          }
          if (yCondiCombi == "and" && yFieldVal > renderConfig["y condition"]["greater than"] && yFieldVal < renderConfig["y condition"]["lower than"]) {
            fillScore++;
          }
          if (yCondiCombi == "or" && yFieldVal > renderConfig["y condition"]["greater than"] || yFieldVal < renderConfig["y condition"]["lower than"]) {
            fillScore++;
          }
        }
        var fillColor;
        switch (fillScore) {
          case 0:
            fillColor = "#00000050";
            break;
          case 1:
            fillColor = renderConfig["dot label score"] > 1 ? "#00000050" : "#09910980";
            break;
          case 2:
            fillColor = xFieldVal > 0 ? "#ff00c750" : "#12bdfe50";
            break;
        }
        _this.svg.select("#axisGroup").append('circle').attr('cx', _this.x(d.value.x)).attr('cy', _this.y(d.value.y)).attr('r', 2).style('fill', fillColor).attr("id", d.key).attr("class", _this.dataToClass(d.value));

        //draw labels
        /*
        const labels = ["RRAGA","ATP1B3","TUBA4B","PNISR","CIR1","GOLGB1"]
        if(labels.includes(d.key)){
            console.log(d.key);
            this.svg.select("#axisGroup")
            .append('text')
            .attr('text-anchor', 'middle')
            .attr("x", this.x(d.value.x) - 20)
            .attr("y", this.y(d.value.y) - 5)
            .style("font-family", "Arial").style("font-size", 10)
            .text(d.key);
        }
        */
      });
      this.svg.selectAll("circle.dataCircle").on("mouseover", function (g) {
        return _this.hoverDot(g);
      }).on("mouseleave", function (g) {
        return _components_researchPortal_singleCellBrowser_mouseTooltip_js__WEBPACK_IMPORTED_MODULE_35__["default"].hide();
      }).on("click", function (g) {
        return _this.clickDot(g);
      });
    },
    hoverDot: function hoverDot(dot) {
      var gene = d3__WEBPACK_IMPORTED_MODULE_31__["event"].target.id;
      var data = this.classToData(d3__WEBPACK_IMPORTED_MODULE_31__["event"].target.classList);
      var xData = this.tpmFormatter(parseFloat(data[0]));
      var yData = this.tpmFormatter(parseFloat(data[1]));
      var hover = "<strong>".concat(gene, "</strong>");
      hover = hover.concat("<div>".concat(this.renderConfig['x axis label'], ": ").concat(xData, "</div>"));
      hover = hover.concat("<div>".concat(this.renderConfig['y axis label'], ": ").concat(yData, "</div>"));
      _components_researchPortal_singleCellBrowser_mouseTooltip_js__WEBPACK_IMPORTED_MODULE_35__["default"].show(hover);
    },
    clickDot: function clickDot(dot) {
      var gene = d3__WEBPACK_IMPORTED_MODULE_31__["event"].target.id;
      this.$emit("highlight", gene);
    },
    highlightDot: function highlightDot(gene) {
      var _this2 = this;
      this.svg.select("#axisGroup").selectAll(".highlightCircle, .highlightLabel").remove();
      //let dataItem = this.plotData.find(d => d.GENE === gene);
      var dataItem = this.geneMap.get(gene);
      var geneVal = {
        x: dataItem[this.xAxisField],
        y: dataItem[this.yAxisField]
      };
      var classes = "".concat(this.dataToClass(geneVal), " highlightCircle");
      this.svg.select("#axisGroup").append('circle').attr('cx', this.x(geneVal.x)).attr('cy', this.y(geneVal.y)).attr('r', 6).style('fill', "#0000C6").style('stroke', 'white').attr("id", gene).attr("class", classes).on("mouseover", function (g) {
        return _this2.hoverDot(g);
      }).on("mouseleave", function (g) {
        return _components_researchPortal_singleCellBrowser_mouseTooltip_js__WEBPACK_IMPORTED_MODULE_35__["default"].hide();
      }).on("click", function (g) {
        return _this2.clickDot(g);
      });

      //label position
      var dotXpos = this.x(geneVal.x) - this.margin.left;
      var plotWidth = this.chartWidth - this.margin.left;
      var xLabelAnchor = "end";
      var xLabelOffset = -10;
      if (dotXpos < 50) {
        xLabelAnchor = "start";
        xLabelOffset = 10;
      }
      this.svg.select("#axisGroup").append('text').attr('text-anchor', xLabelAnchor).attr("x", this.x(geneVal.x) + xLabelOffset).attr("y", this.y(geneVal.y) + 4).attr("class", "highlightLabel").style("font-family", "Arial").style("font-size", 10).style("text-shadow", "1px 1px 1px white").text(gene);
    },
    dataToClass: function dataToClass(value) {
      var valX = "valX_".concat(value.x).replaceAll(".", "dot");
      var valY = "valY_".concat(value.y).replaceAll(".", "dot");
      return "".concat(valX, " ").concat(valY, " dataCircle");
    },
    classToData: function classToData(classList) {
      var xVal = classList[0];
      var yVal = classList[1];
      var valueFlag = new RegExp(/val[XY]_/);
      xVal = xVal.replace(valueFlag, "").replace("dot", ".");
      yVal = yVal.replace(valueFlag, "").replace("dot", ".");
      return [xVal, yVal];
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/views/Expression/Template.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Autocomplete.vue?vue&type=template&id=e7c95fd0":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Autocomplete.vue?vue&type=template&id=e7c95fd0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("vue-typeahead-bootstrap", {
    ref: "autocomplete",
    attrs: {
      data: _vm.lookupOptions,
      disabled: _vm.disabled,
      placeholder: _vm.placeholder,
      serializer: _vm.labelFormatter,
      showOnFocus: true,
      maxMatches: 1000
    },
    on: {
      hit: function hit($event) {
        return _vm.onAutoCompleteItemSelected($event);
      },
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.onUserEnterNonAutoCompleteItem.apply(null, arguments);
      }
    },
    scopedSlots: _vm._u([{
      key: "suggestion",
      fn: function fn(_ref) {
        var data = _ref.data,
          htmlText = _ref.htmlText;
        return [_c("span", {
          domProps: {
            innerHTML: _vm._s(htmlText)
          }
        }), _vm._v("  "), _vm.secondaryKey ? _c("small", {
          staticClass: "text-secondary"
        }, [_vm._v(_vm._s(data[_vm.secondaryKey]))]) : _vm._e()];
      }
    }]),
    model: {
      value: _vm.userInput,
      callback: function callback($$v) {
        _vm.userInput = $$v;
      },
      expression: "userInput"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DataDownload.vue?vue&type=template&id=f64e24fc":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataDownload.vue?vue&type=template&id=f64e24fc ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("b-dropdown", {
    attrs: {
      variant: "secondary",
      right: "",
      size: "sm",
      text: "Download data"
    }
  }, [_c("b-dropdown-text", [_vm._v("Save file as")]), _c("b-dropdown-divider"), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        return _vm.downloadCsv();
      }
    }
  }, [_vm._v("CSV")]), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        return _vm.downloadTsv();
      }
    }
  }, [_vm._v("TSV")]), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        return _vm.downloadJson();
      }
    }
  }, [_vm._v("JSON")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=template&id=65872d36":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DownloadChart.vue?vue&type=template&id=65872d36 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("b-dropdown", {
    staticClass: "download-chart",
    attrs: {
      variant: "secondary",
      right: "",
      size: "sm",
      text: "Download chart"
    }
  }, [_c("b-dropdown-text", [_vm._v("Save chart as")]), _c("b-dropdown-divider"), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        return _vm.downloadSvg();
      }
    }
  }, [_vm._v("SVG")]), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        return _vm.downloadPng();
      }
    }
  }, [_vm._v("PNG")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/GeneSelectPicker.vue?vue&type=template&id=0f4cf50f":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GeneSelectPicker.vue?vue&type=template&id=0f4cf50f ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("autocomplete", {
    ref: "geneSelect",
    attrs: {
      placeholder: !_vm.$store.state.geneToQuery ? "Search gene" : _vm.$store.state.geneToQuery,
      matches: _vm.matchingGenes
    },
    on: {
      "input-change": function inputChange($event) {
        return _vm.lookupGenes($event);
      },
      "item-select": function itemSelect($event) {
        return _vm.selectGene($event);
      }
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    ref: "tooltip",
    staticClass: "mouse-tooltip"
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_vm._m(0), _c("div", {
    class: "vector-wrapper-" + _vm.canvasId,
    attrs: {
      id: "vector_wrapper_" + _vm.sectionId
    }
  })]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "legends",
    staticStyle: {
      display: "flex",
      gap: "5px"
    }
  }, [_c("div", {
    staticClass: "legend",
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "margin-top": "10px",
      "align-items": "center"
    }
  }, [_c("span", {
    staticClass: "group-legend-box",
    staticStyle: {
      "background-color": "#000000"
    }
  }, [_vm._v(" ")]), _c("span", {
    staticClass: "group-legend-name"
  }, [_vm._v("Not significant")]), _c("span", {
    staticClass: "group-legend-box",
    staticStyle: {
      "background-color": "#12bdfe"
    }
  }, [_vm._v(" ")]), _c("span", {
    staticClass: "group-legend-name"
  }, [_vm._v("Down regulated")]), _c("span", {
    staticClass: "group-legend-box",
    staticStyle: {
      "background-color": "#ff00c7"
    }
  }, [_vm._v(" ")]), _c("span", {
    staticClass: "group-legend-name"
  }, [_vm._v("Up regulated")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=template&id=68dca546&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/views/Expression/Template.vue?vue&type=template&id=68dca546&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sysbio f-layout"
  }, [_c("sysbio-header"), _c("div", {
    staticClass: "sysbio-body"
  }, [_vm.$parent.pageInfo ? _c("div", {
    staticStyle: {
      margin: "0 0 40px"
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.$parent.pageInfo.title))]), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.$parent.pageInfo.body)
    }
  })]) : _vm._e(), _c("h4", [_vm._v("Differential gene expression across AMP programs")]), _vm.$parent.deData ? _c("div", {
    staticClass: "f-row",
    staticStyle: {
      gap: "50px",
      margin: "10px 0 0"
    }
  }, [_c("div", {
    staticClass: "f-col",
    staticStyle: {
      gap: "10px"
    }
  }, [_c("div", {
    staticClass: "f-row fill-width spread-out align-v-bottom"
  }, [_c("div", {
    staticClass: "f-row",
    staticStyle: {
      gap: "20px"
    }
  }, [_c("div", {
    staticClass: "f-col"
  }, [_c("div", {
    staticClass: "bold"
  }, [_vm._v("Find Gene")]), _c("gene-selectpicker", {
    staticClass: "search",
    on: {
      onGeneChange: function onGeneChange(gene) {
        return _vm.$parent.highlight(gene);
      }
    }
  })], 1), _c("div", {
    staticClass: "f-col"
  }, [_c("div", {
    staticClass: "bold"
  }, [_vm._v("-log10(P) threshold")]), _c("div", {
    staticClass: "f-row",
    staticStyle: {
      gap: "5px",
      height: "26px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.$parent.pValThreshold,
      expression: "$parent.pValThreshold"
    }],
    attrs: {
      type: "range",
      min: _vm.$parent.pValMin,
      max: _vm.$parent.pValMax,
      step: "0.1"
    },
    domProps: {
      value: _vm.$parent.pValThreshold
    },
    on: {
      __r: function __r($event) {
        return _vm.$set(_vm.$parent, "pValThreshold", $event.target.value);
      }
    }
  }), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.$parent.pValThreshold,
      expression: "$parent.pValThreshold"
    }],
    staticClass: "slider-input",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.$parent.pValThreshold
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.$parent, "pValThreshold", $event.target.value);
      }
    }
  })])])]), _c("download-chart", {
    staticClass: "download",
    staticStyle: {
      width: "125px",
      "align-self": "flex-end"
    },
    attrs: {
      chartId: "vector_volcano_plot__bulk"
    }
  })], 1), _vm.$parent.deData ? _c("bulk-volcano-plot", {
    attrs: {
      renderData: _vm.$parent.deData,
      renderConfig: _vm.$parent.bulkVolcanoConfig,
      margin: _vm.$parent.margin,
      sectionId: "_bulk",
      selectedGene: _vm.$parent.highlightGene
    },
    on: {
      highlight: function highlight(gene) {
        return _vm.$parent.highlight(gene);
      }
    }
  }) : _vm._e()], 1), _c("div", {
    staticClass: "f-col",
    staticStyle: {
      flex: "1",
      gap: "10px"
    }
  }, [_c("div", {
    staticClass: "f-row fill-width spread-out align-v-bottom"
  }, [_c("div", {
    staticClass: "f-col"
  }, [_c("div", {
    staticClass: "bold"
  }, [_vm._v("Filter Genes:")]), _c("div", {
    staticClass: "f-row",
    staticStyle: {
      gap: "10px"
    }
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.$parent.showGenes,
      expression: "$parent.showGenes"
    }],
    attrs: {
      type: "radio",
      name: "radio-group",
      value: "",
      checked: ""
    },
    domProps: {
      checked: _vm._q(_vm.$parent.showGenes, "")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.$parent, "showGenes", "");
      }
    }
  }), _vm._v("All Genes")]), _c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.$parent.showGenes,
      expression: "$parent.showGenes"
    }],
    attrs: {
      type: "radio",
      name: "radio-group"
    },
    domProps: {
      value: _vm.$parent.down,
      checked: _vm._q(_vm.$parent.showGenes, _vm.$parent.down)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.$parent, "showGenes", _vm.$parent.down);
      }
    }
  }), _vm._v("Downregulated")]), _c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.$parent.showGenes,
      expression: "$parent.showGenes"
    }],
    attrs: {
      type: "radio",
      name: "radio-group"
    },
    domProps: {
      value: _vm.$parent.up,
      checked: _vm._q(_vm.$parent.showGenes, _vm.$parent.up)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.$parent, "showGenes", _vm.$parent.up);
      }
    }
  }), _vm._v("Upregulated")])])]), _c("data-download", {
    staticClass: "download",
    staticStyle: {
      width: "125px",
      "align-self": "flex-end"
    },
    attrs: {
      data: _vm.$parent.deData,
      filename: "sysbio_dge"
    }
  })], 1), _c("b-table", {
    staticStyle: {
      margin: "10px 0 0"
    },
    attrs: {
      small: "",
      hover: "",
      responsive: "sm",
      items: _vm.$parent.tableData,
      fields: _vm.$parent.deTableFields,
      sortBy: _vm.$parent.currentSort.sortBy,
      sortDesc: _vm.$parent.currentSort.sortDesc,
      "sort-icon-left": true,
      "per-page": 10,
      "current-page": _vm.$parent.dePage,
      "tbody-tr-class": _vm.$parent.rowClasses
    },
    on: {
      filtered: _vm.$parent.onFiltered,
      "sort-changed": _vm.$parent.onSortChanged
    },
    scopedSlots: _vm._u([{
      key: "cell(GENE)",
      fn: function fn(data) {
        return [_c("span", {
          staticClass: "clickable-cell",
          on: {
            click: function click($event) {
              return _vm.$parent.highlight(data.value);
            }
          }
        }, [_vm._v(" " + _vm._s(data.value) + " ")])];
      }
    }], null, false, 4155560149)
  }), _c("b-pagination", {
    staticClass: "pagination-sm justify-content-center",
    attrs: {
      "total-rows": _vm.$parent.rows,
      "per-page": 10
    },
    model: {
      value: _vm.$parent.dePage,
      callback: function callback($$v) {
        _vm.$set(_vm.$parent, "dePage", $$v);
      },
      expression: "$parent.dePage"
    }
  })], 1)]) : _vm._e()]), _c("sysbio-footer")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.download-chart {\n    float: right;\n    margin-bottom: 25px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.mouse-tooltip[data-v-07718cb2]{\n    position:fixed;\n    top:-10000px;\n    left:-10000px;\n    background: white;\n    padding: 5px 10px;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.5) -4px 9px 25px -6px;\n            box-shadow: rgba(0, 0, 0, 0.5) -4px 9px 25px -6px;\n    z-index: 5000;\n    opacity:0;\n}\n.mouse-tooltip.show[data-v-07718cb2]{\n    opacity: 1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.legends[data-v-3c78e7cb] {\n    gap: 20px;\n}\n.legend[data-v-3c78e7cb] {\n    margin: 0 10px 0 0;\n    gap:1px;\n}\n.legend .label[data-v-3c78e7cb] {\n    font-size: 11px !important;\n    line-height: 11px;\n}\n.legend .gradient[data-v-3c78e7cb] {\n    height: 20px;\n    width: 200px;\n    border-radius: 20px;\n}\n.legend span[data-v-3c78e7cb] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.group-legend-box[data-v-3c78e7cb] {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    padding: 0 !important;\n    border-radius: 50%;\n}\n.group-legend-name[data-v-3c78e7cb] {\n    padding-left: 5px !important;\n    padding-right: 15px !important;\n    vertical-align: text-bottom;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n/* download button */\n.download[data-v-68dca546] {\n    margin: 0;\n    float: unset;\n    margin: 0;\n    float: unset;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n[data-v-68dca546] .download button{\n    color: black;\n    background-color: white;\n    padding: 0.25rem 0.5rem;\n    border: 0;\n    -webkit-box-shadow: 0px 1px 2px 0 black;\n            box-shadow: 0px 1px 2px 0 black;\n    font-size: 12px;\n}\n[data-v-68dca546] .download button:hover{\n    color: black;\n    background-color: #ccc;\n}\n/* search input */\n[data-v-68dca546] .search input {\n    font-size: 12px;\n    line-height: unset;\n    padding: 0.25rem 0.5rem;\n    height: unset;\n    border:0;\n    -webkit-box-shadow: 0px 1px 2px 0 black;\n            box-shadow: 0px 1px 2px 0 black;\n}\n/* de table rows */\n.clickable-cell[data-v-68dca546]{\n    cursor:pointer;\n}\n[data-v-68dca546] tr.downregulated {\n    border-left: 5px solid #12bdfe !important;\n}\n[data-v-68dca546] tr.upregulated {\n    border-left: 5px solid #ff00c7 !important;\n}\n[data-v-68dca546] .row-highlight{\n    background-color:#eee;\n}\n.slider-input[data-v-68dca546]{\n    font-size: 12px;\n    padding: 0;\n    width: 30px;\n    background: none;\n    border: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3bc3c6c9", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2b53c818", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("165d1fbf", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("843cc0a0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/Autocomplete.vue":
/*!*****************************************!*\
  !*** ./src/components/Autocomplete.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autocomplete_vue_vue_type_template_id_e7c95fd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete.vue?vue&type=template&id=e7c95fd0 */ "./src/components/Autocomplete.vue?vue&type=template&id=e7c95fd0");
/* harmony import */ var _Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Autocomplete.vue?vue&type=script&lang=js */ "./src/components/Autocomplete.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Autocomplete_vue_vue_type_template_id_e7c95fd0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Autocomplete_vue_vue_type_template_id_e7c95fd0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Autocomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Autocomplete.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/Autocomplete.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Autocomplete.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Autocomplete.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Autocomplete.vue?vue&type=template&id=e7c95fd0":
/*!***********************************************************************!*\
  !*** ./src/components/Autocomplete.vue?vue&type=template&id=e7c95fd0 ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_e7c95fd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Autocomplete.vue?vue&type=template&id=e7c95fd0 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Autocomplete.vue?vue&type=template&id=e7c95fd0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_e7c95fd0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocomplete_vue_vue_type_template_id_e7c95fd0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/DataDownload.vue":
/*!*****************************************!*\
  !*** ./src/components/DataDownload.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataDownload_vue_vue_type_template_id_f64e24fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataDownload.vue?vue&type=template&id=f64e24fc */ "./src/components/DataDownload.vue?vue&type=template&id=f64e24fc");
/* harmony import */ var _DataDownload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataDownload.vue?vue&type=script&lang=js */ "./src/components/DataDownload.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataDownload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataDownload_vue_vue_type_template_id_f64e24fc__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataDownload_vue_vue_type_template_id_f64e24fc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DataDownload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DataDownload.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/DataDownload.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataDownload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DataDownload.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DataDownload.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataDownload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DataDownload.vue?vue&type=template&id=f64e24fc":
/*!***********************************************************************!*\
  !*** ./src/components/DataDownload.vue?vue&type=template&id=f64e24fc ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataDownload_vue_vue_type_template_id_f64e24fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DataDownload.vue?vue&type=template&id=f64e24fc */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DataDownload.vue?vue&type=template&id=f64e24fc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataDownload_vue_vue_type_template_id_f64e24fc__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataDownload_vue_vue_type_template_id_f64e24fc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/DownloadChart.vue":
/*!******************************************!*\
  !*** ./src/components/DownloadChart.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownloadChart_vue_vue_type_template_id_65872d36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadChart.vue?vue&type=template&id=65872d36 */ "./src/components/DownloadChart.vue?vue&type=template&id=65872d36");
/* harmony import */ var _DownloadChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownloadChart.vue?vue&type=script&lang=js */ "./src/components/DownloadChart.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _DownloadChart_vue_vue_type_style_index_0_id_65872d36_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css */ "./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DownloadChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DownloadChart_vue_vue_type_template_id_65872d36__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DownloadChart_vue_vue_type_template_id_65872d36__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DownloadChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DownloadChart.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/DownloadChart.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DownloadChart.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css":
/*!**************************************************************************************!*\
  !*** ./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_style_index_0_id_65872d36_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=style&index=0&id=65872d36&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_style_index_0_id_65872d36_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_style_index_0_id_65872d36_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_style_index_0_id_65872d36_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_style_index_0_id_65872d36_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/DownloadChart.vue?vue&type=template&id=65872d36":
/*!************************************************************************!*\
  !*** ./src/components/DownloadChart.vue?vue&type=template&id=65872d36 ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_template_id_65872d36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DownloadChart.vue?vue&type=template&id=65872d36 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DownloadChart.vue?vue&type=template&id=65872d36");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_template_id_65872d36__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadChart_vue_vue_type_template_id_65872d36__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/GeneSelectPicker.vue":
/*!*********************************************!*\
  !*** ./src/components/GeneSelectPicker.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneSelectPicker_vue_vue_type_template_id_0f4cf50f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneSelectPicker.vue?vue&type=template&id=0f4cf50f */ "./src/components/GeneSelectPicker.vue?vue&type=template&id=0f4cf50f");
/* harmony import */ var _GeneSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneSelectPicker.vue?vue&type=script&lang=js */ "./src/components/GeneSelectPicker.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneSelectPicker_vue_vue_type_template_id_0f4cf50f__WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneSelectPicker_vue_vue_type_template_id_0f4cf50f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/GeneSelectPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/GeneSelectPicker.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/GeneSelectPicker.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./GeneSelectPicker.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/GeneSelectPicker.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/GeneSelectPicker.vue?vue&type=template&id=0f4cf50f":
/*!***************************************************************************!*\
  !*** ./src/components/GeneSelectPicker.vue?vue&type=template&id=0f4cf50f ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneSelectPicker_vue_vue_type_template_id_0f4cf50f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./GeneSelectPicker.vue?vue&type=template&id=0f4cf50f */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/GeneSelectPicker.vue?vue&type=template&id=0f4cf50f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneSelectPicker_vue_vue_type_template_id_0f4cf50f__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneSelectPicker_vue_vue_type_template_id_0f4cf50f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue":
/*!**********************************************************************************!*\
  !*** ./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResearchMouseTooltip_vue_vue_type_template_id_07718cb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true */ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true");
/* harmony import */ var _ResearchMouseTooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResearchMouseTooltip.vue?vue&type=script&lang=js */ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _ResearchMouseTooltip_vue_vue_type_style_index_0_id_07718cb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css */ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResearchMouseTooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResearchMouseTooltip_vue_vue_type_template_id_07718cb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResearchMouseTooltip_vue_vue_type_template_id_07718cb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07718cb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchMouseTooltip.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_style_index_0_id_07718cb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=style&index=0&id=07718cb2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_style_index_0_id_07718cb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_style_index_0_id_07718cb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_style_index_0_id_07718cb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_style_index_0_id_07718cb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_template_id_07718cb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue?vue&type=template&id=07718cb2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_template_id_07718cb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchMouseTooltip_vue_vue_type_template_id_07718cb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/researchPortal/singleCellBrowser/mouseTooltip.js":
/*!*************************************************************************!*\
  !*** ./src/components/researchPortal/singleCellBrowser/mouseTooltip.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_researchPortal_singleCellBrowser_ResearchMouseTooltip_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue */ "./src/components/researchPortal/singleCellBrowser/ResearchMouseTooltip.vue");



/*
creates a tooltip which follows the mouse cursor
tooltip will always stay within bounds of viewport
and will follow cursor until hidden

you only need to provide the tooltip with the content to display (html ok)
this component tracks mouse position on its own, regardless of how many
components instantiate this service on the page.

usage:
import mouseTooltip from '@/components/researchPortal/singleCellBrowser/mouseTooltip.js';

to show tooltip call
mouseTooltip.show(your_content_string_html);

to hide tooltip call
mouseTooltip.hide();

the tooltip will keep following mouse until hide() is called
*/

var tooltipInstance;
var isTrackingMouse = false;
function initTooltip() {
  if (!tooltipInstance) {
    var TooltipConstructor = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend(_components_researchPortal_singleCellBrowser_ResearchMouseTooltip_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    tooltipInstance = new TooltipConstructor();
    tooltipInstance.$mount(document.createElement("div"));
    document.body.appendChild(tooltipInstance.$el);
  }
}
function trackMousePosition(e) {
  if (tooltipInstance) {
    tooltipInstance.updateMousePosition(e.clientX, e.clientY);
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  show: function show(content) {
    initTooltip();
    tooltipInstance.showTooltip(content);

    // add a single global event listener
    if (!isTrackingMouse) {
      document.addEventListener("mousemove", trackMousePosition);
      isTrackingMouse = true;
    }
  },
  hide: function hide() {
    if (tooltipInstance) tooltipInstance.hideTooltip();
    if (isTrackingMouse) {
      document.removeEventListener("mousemove", trackMousePosition);
      isTrackingMouse = false;
    }
  }
});

/***/ }),

/***/ "./src/portals/SysBio/components/BulkVolcanoPlot.vue":
/*!***********************************************************!*\
  !*** ./src/portals/SysBio/components/BulkVolcanoPlot.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BulkVolcanoPlot_vue_vue_type_template_id_3c78e7cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true */ "./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true");
/* harmony import */ var _BulkVolcanoPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulkVolcanoPlot.vue?vue&type=script&lang=js */ "./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _BulkVolcanoPlot_vue_vue_type_style_index_0_id_3c78e7cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css */ "./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BulkVolcanoPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BulkVolcanoPlot_vue_vue_type_template_id_3c78e7cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _BulkVolcanoPlot_vue_vue_type_template_id_3c78e7cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c78e7cb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/portals/SysBio/components/BulkVolcanoPlot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkVolcanoPlot.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_style_index_0_id_3c78e7cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=style&index=0&id=3c78e7cb&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_style_index_0_id_3c78e7cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_style_index_0_id_3c78e7cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_style_index_0_id_3c78e7cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_style_index_0_id_3c78e7cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_template_id_3c78e7cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/BulkVolcanoPlot.vue?vue&type=template&id=3c78e7cb&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_template_id_3c78e7cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkVolcanoPlot_vue_vue_type_template_id_3c78e7cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/portals/SysBio/views/Expression/Template.vue":
/*!**********************************************************!*\
  !*** ./src/portals/SysBio/views/Expression/Template.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Template_vue_vue_type_template_id_68dca546_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template.vue?vue&type=template&id=68dca546&scoped=true */ "./src/portals/SysBio/views/Expression/Template.vue?vue&type=template&id=68dca546&scoped=true");
/* harmony import */ var _Template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template.vue?vue&type=script&lang=js */ "./src/portals/SysBio/views/Expression/Template.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Template_vue_vue_type_style_index_0_id_68dca546_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css */ "./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Template_vue_vue_type_template_id_68dca546_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Template_vue_vue_type_template_id_68dca546_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68dca546",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/portals/SysBio/views/Expression/Template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/portals/SysBio/views/Expression/Template.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./src/portals/SysBio/views/Expression/Template.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_68dca546_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=style&index=0&id=68dca546&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_68dca546_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_68dca546_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_68dca546_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_68dca546_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/portals/SysBio/views/Expression/Template.vue?vue&type=template&id=68dca546&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/portals/SysBio/views/Expression/Template.vue?vue&type=template&id=68dca546&scoped=true ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_68dca546_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=template&id=68dca546&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Expression/Template.vue?vue&type=template&id=68dca546&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_68dca546_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_68dca546_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/portals/SysBio/views/Expression/main.js":
/*!*****************************************************!*\
  !*** ./src/portals/SysBio/views/Expression/main.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Template_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Template.vue */ "./src/portals/SysBio/views/Expression/Template.vue");
/* harmony import */ var _css_f_layout_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../css/f-layout.css */ "./src/portals/SysBio/css/f-layout.css");
/* harmony import */ var _css_f_layout_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_f_layout_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _css_sysbio_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../css/sysbio.css */ "./src/portals/SysBio/css/sysbio.css");
/* harmony import */ var _css_sysbio_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_css_sysbio_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mixins_sysbioMixin_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../mixins/sysbioMixin.js */ "./src/portals/SysBio/mixins/sysbioMixin.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _components_BulkVolcanoPlot_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/BulkVolcanoPlot.vue */ "./src/portals/SysBio/components/BulkVolcanoPlot.vue");
/* harmony import */ var _utils_dataConvert__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/utils/dataConvert */ "./src/utils/dataConvert.js");
/* harmony import */ var _components_DownloadChart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/DownloadChart */ "./src/components/DownloadChart.vue");
/* harmony import */ var _components_DataDownload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/DataDownload */ "./src/components/DataDownload.vue");
/* harmony import */ var _components_GeneSelectPicker_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/GeneSelectPicker.vue */ "./src/components/GeneSelectPicker.vue");
/* harmony import */ var _portals_SysBio_utils_content_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/portals/SysBio/utils/content.js */ "./src/portals/SysBio/utils/content.js");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/utils/formatters */ "./src/utils/formatters.js");
/* harmony import */ var _utils_keyParams__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/utils/keyParams */ "./src/utils/keyParams.js");





























new vue__WEBPACK_IMPORTED_MODULE_15__["default"]({
  mixins: [_mixins_sysbioMixin_js__WEBPACK_IMPORTED_MODULE_19__["sysbioMixin"]],
  components: {
    BulkVolcanoPlot: _components_BulkVolcanoPlot_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
    DataDownload: _components_DataDownload__WEBPACK_IMPORTED_MODULE_24__["default"],
    DownloadChart: _components_DownloadChart__WEBPACK_IMPORTED_MODULE_23__["default"],
    GeneSelectPicker: _components_GeneSelectPicker_vue__WEBPACK_IMPORTED_MODULE_25__["default"]
  },
  data: function data() {
    return {
      pageInfo: null,
      deData: null,
      dePage: 1,
      highlightGene: null,
      pValMin: 0,
      pValMax: 1,
      pValThreshold: 5.8,
      bulkVolcanoConfig: {
        "type": "volcano plot",
        "label": "This is a Test",
        "legend": "This is a Test",
        "render by": "GENE",
        "x axis field": "BETA",
        "x axis label": "standardized beta",
        "y axis field": "neg_log10_p",
        "y axis label": "-log10(p-value)",
        "width": 600,
        "height": 400,
        "x condition": {
          "combination": "or",
          "greater than": 0.001,
          "lower than": -0.001
        },
        //combination for condition can be "greater than", "lower than", "or" and "and."
        "y condition": {
          "combination": "greater than",
          "greater than": 5.8
        },
        "dot label score": 2
        //number of conditions that the value of each dot to meet to have labeled
      },
      margin: {
        top: 10,
        bottom: 60,
        left: 60,
        right: 10,
        bump: 0,
        middleSpacing: 0,
        legendSpacing: 35
      },
      deTableFields: [{
        key: 'GENE',
        label: "Gene",
        sortable: true
      }, {
        key: 'BETA',
        label: 'Standardized beta',
        sortable: true,
        tdClass: 'text-right',
        formatter: function formatter(value) {
          return value.toFixed(2);
        }
      }, {
        key: 'neg_log10_p',
        label: '-log10(P)',
        sortable: true,
        tdClass: 'text-right',
        formatter: function formatter(value) {
          return value.toFixed(2);
        }
      }, {
        key: 'P',
        label: 'P-value',
        sortable: true,
        tdClass: 'text-right',
        formatter: function formatter(value) {
          return _utils_formatters__WEBPACK_IMPORTED_MODULE_27__["default"].pValueFormatter(value);
        }
      }],
      filteredRows: [],
      showGenes: "",
      up: "upregulated",
      down: "downregulated",
      currentSort: {
        sortBy: "P",
        sortDesc: false
      }
    };
  },
  watch: {
    pValThreshold: function pValThreshold() {
      this.bulkVolcanoConfig["y condition"]["greater than"] = this.pValThreshold;
    }
  },
  computed: {
    rows: function rows() {
      return this.tableData.length || 0;
    },
    tableData: function tableData() {
      var _this = this;
      var data = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.deData);
      if (this.filter) {
        data = data.filter(this.filter);
      }
      if (this.showGenes) {
        data = data.filter(function (item) {
          return _this.showRegulation(item) === _this.showGenes;
        });
      }
      return data;
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.fetchData();
    this.fetchInfo();
  },
  methods: {
    fetchData: function fetchData() {
      var _this2 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var datasetFile, response, text;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              datasetFile = 'https://bioindex-dev.hugeamp.org/api/raw/file/sysbio/volcano.csv.gz';
              _context.next = 3;
              return fetch(datasetFile);
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.text();
            case 6:
              text = _context.sent;
              _this2.deData = _utils_dataConvert__WEBPACK_IMPORTED_MODULE_22__["default"].csv2Json(text);
              _this2.pValMin = d3__WEBPACK_IMPORTED_MODULE_20__["min"](_this2.deData, function (d) {
                return d.neg_log10_p;
              });
              _this2.pValMax = d3__WEBPACK_IMPORTED_MODULE_20__["max"](_this2.deData, function (d) {
                return d.neg_log10_p;
              });
              _this2.pValThreshold = 5.8;
              if (_utils_keyParams__WEBPACK_IMPORTED_MODULE_28__["default"].gene) {
                _this2.highlightGene = _utils_keyParams__WEBPACK_IMPORTED_MODULE_28__["default"].gene;
              }
              _this2.onFiltered(_this2.deData);
              _this2.onSortChanged(_this2.currentSort);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    fetchInfo: function fetchInfo() {
      var _this3 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_portals_SysBio_utils_content_js__WEBPACK_IMPORTED_MODULE_26__["getTextContent"])("sysbiofairplex_geneexpressionbrowser", true);
            case 2:
              _this3.pageInfo = _context2.sent;
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onFiltered: function onFiltered(filteredItems) {
      this.filteredRows = filteredItems;
    },
    onSortChanged: function onSortChanged(sort) {
      var _this4 = this;
      this.currentSort = sort;
      this.filteredRows.sort(function (a, b) {
        if (!_this4.currentSort.sortBy) return 0;
        var sortKey = _this4.currentSort.sortBy;
        var order = _this4.currentSort.sortDesc ? -1 : 1;
        return a[sortKey] > b[sortKey] ? order : a[sortKey] < b[sortKey] ? -order : 0;
      });
    },
    goToHighlightedRow: function goToHighlightedRow(gene) {
      var _this5 = this;
      if (!this.highlightGene || !this.filteredRows) return;
      var index = this.filteredRows.findIndex(function (item) {
        return item.GENE === _this5.highlightGene;
      });
      if (index !== -1) {
        var page = Math.floor(index / 10) + 1;
        this.dePage = page;
      }
    },
    highlight: function highlight(highlightedGene) {
      var _this6 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this6.highlightGene = highlightedGene;
              _this6.goToHighlightedRow(highlightedGene);
              _utils_keyParams__WEBPACK_IMPORTED_MODULE_28__["default"].set({
                gene: highlightedGene
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    rowClasses: function rowClasses(item) {
      var classString = this.isHighlightedGene(item).concat(this.showRegulation(item));
      ;
      return classString;
    },
    isHighlightedGene: function isHighlightedGene(item) {
      return item.GENE === this.highlightGene ? "row-highlight " : "";
    },
    showRegulation: function showRegulation(item) {
      if (item[this.bulkVolcanoConfig["y axis field"]] < this.bulkVolcanoConfig["y condition"]["greater than"]) {
        return "";
      }
      if (item[this.bulkVolcanoConfig["x axis field"]] <= this.bulkVolcanoConfig["x condition"]["lower than"]) {
        return this.down;
      }
      if (item[this.bulkVolcanoConfig["x axis field"]] >= this.bulkVolcanoConfig["x condition"]["greater than"]) {
        return this.up;
      }
      return "";
    }
  },
  render: function render(createElement, context) {
    return createElement(_Template_vue__WEBPACK_IMPORTED_MODULE_16__["default"]);
  }
}).$mount("#app");

/***/ }),

/***/ "./src/utils/regionUtils.js":
/*!**********************************!*\
  !*** ./src/utils/regionUtils.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/bioIndexUtils */ "./src/utils/bioIndexUtils.js");








/**
 * Ensembl REST calls
 */



// matches a string to a region string (same as used in BioIndex)
var REGION_REGEXP = /^(?:chr)?(1\d?|2[0-2]?|[3-9]|x|y|xy|mt?)[:_](\d+)(?:([+/-])(\d+))?$/i;

// parse a region as either a gene name, ENS ID, or chr:start-stop
function parseRegion(_x) {
  return _parseRegion.apply(this, arguments);
}
function _parseRegion() {
  _parseRegion = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(s) {
    var allowGeneLookup,
      geneRegionExpand,
      match,
      chr,
      start,
      end,
      n,
      expand,
      region,
      _args = arguments;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          allowGeneLookup = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
          geneRegionExpand = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
          match = s.trim().replace(/,/g, '').match(REGION_REGEXP); // region matched, return chrom, start, and stop
          if (!match) {
            _context.next = 21;
            break;
          }
          chr = match[1];
          start = parseInt(match[2]);
          end = start + 1; // is it an offset, around, or absolute position?
          if (!match[3]) {
            _context.next = 19;
            break;
          }
          n = parseInt(match[4]);
          _context.t0 = match[3];
          _context.next = _context.t0 === '-' ? 12 : _context.t0 === '+' ? 14 : _context.t0 === '/' ? 16 : 19;
          break;
        case 12:
          end = Math.max(n, start);
          return _context.abrupt("break", 19);
        case 14:
          end = start + n;
          return _context.abrupt("break", 19);
        case 16:
          end = start + n;
          start = start - n;
          return _context.abrupt("break", 19);
        case 19:
          // minimum region size
          if (end - start < geneRegionExpand) {
            expand = geneRegionExpand - (end - start);
            start -= Math.floor(expand / 2);
            end += Math.ceil(expand / 2);
          }

          // parsed region
          return _context.abrupt("return", {
            chr: chr,
            start: start,
            end: end
          });
        case 21:
          if (!allowGeneLookup) {
            _context.next = 26;
            break;
          }
          _context.next = 24;
          return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_8__["BIO_INDEX_HOST"], "/api/bio/query/gene?q=").concat(s)).then(function (resp) {
            return resp.json();
          }).then(function (json) {
            if (json.count == 0) {
              return null;
            }
            return {
              chr: json.data[0].chromosome,
              start: Math.max(json.data[0].start - geneRegionExpand, 0),
              end: json.data[0].end + geneRegionExpand,
              gene: s
            };
          });
        case 24:
          region = _context.sent;
          return _context.abrupt("return", region);
        case 26:
          return _context.abrupt("return", null);
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _parseRegion.apply(this, arguments);
}
function geneSymbol(_x2) {
  return _geneSymbol.apply(this, arguments);
}
function _geneSymbol() {
  _geneSymbol = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(KEY) {
    var geneJson;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_8__["BIO_INDEX_HOST"], "/api/bio/query/gene?q=").concat(KEY)).then(function (resp) {
            return resp.json();
          }).then(function (json) {
            if (json.count == 0) {
              return null;
            }
            return json.data[0].symbol;
          });
        case 2:
          geneJson = _context2.sent;
          return _context2.abrupt("return", geneJson);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _geneSymbol.apply(this, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  parseRegion: parseRegion,
  geneSymbol: geneSymbol
});

/***/ }),

/***/ 3:
/*!***********************************************************!*\
  !*** multi ./src/portals/SysBio/views/Expression/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/dig-dug-portal/dig-dug-portal/src/portals/SysBio/views/Expression/main.js */"./src/portals/SysBio/views/Expression/main.js");


/***/ })

/******/ });
//# sourceMappingURL=expression.js.map