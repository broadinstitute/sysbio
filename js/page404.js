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
/******/ 		"page404": 0
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
/******/ 	deferredModules.push([1,"chunk-vendors","chunk-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Alert.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Alert.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default, postAlert, postAlertError, postAlertNotice, closeAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAlert", function() { return postAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAlertError", function() { return postAlertError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAlertNotice", function() { return postAlertNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAlert", function() { return closeAlert; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.for-each.js */ "./node_modules/core-js/modules/es.iterator.for-each.js");
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_idCounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/idCounter */ "./src/utils/idCounter.js");
/* harmony import */ var _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/eventBus */ "./src/utils/eventBus.js");
/* harmony import */ var _utils_gaUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/gaUtils */ "./src/utils/gaUtils.js");









/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_5__["default"].component("alert", {
  data: function data() {
    return {
      message: null
    };
  },
  mounted: function mounted() {
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$on("ALERT", this.pushAlert);
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$on("CLOSE_ALERT", this.popAlert);
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$on("UPDATE_ALERT", this.processAlertQueue);
  },
  methods: {
    showAlert: function showAlert(alert) {
      var title = {
        info: "Information",
        success: "Success",
        warning: "Warning",
        danger: "Error!",
        primary: "Notice",
        secondary: "Status"
      };
      this.$bvToast.toast(alert.message, {
        id: alert.params ? alert.params.id : null,
        variant: alert.type,
        title: "".concat(title[alert.type]),
        solid: true,
        toaster: "b-toaster-bottom-right",
        autoHideDelay: 10000,
        noAutoHide: alert.params ? alert.params.noHide : false,
        appendToast: true,
        noCloseButton: alert.params ? alert.params.noClose : false
      });
    },
    closeAlert: function closeAlert(id) {
      /* This is using a setTimeout because it's possible to post
       * the alert and close faster than the toast can be added
       * to the DOM. If that happens, the toast will stay up and
       * never close. By waiting 100 ms, the DOM has enough time
       * to add it, and then we can close it.
       */
      var that = this;
      setTimeout(function () {
        return that.$bvToast.hide(id);
      }, 200);
    },
    pushAlert: function pushAlert(alert) {
      var _this = this;
      alertQueue.push(function () {
        return _this.showAlert(alert);
      });
    },
    popAlert: function popAlert(id) {
      var _this2 = this;
      alertQueue.push(function () {
        return _this2.closeAlert(id);
      });
    },
    processAlertQueue: function processAlertQueue() {
      alertQueue.forEach(function (f) {
        return f();
      });
      alertQueue = [];
    }
  }
}));
var alertQueue = [];
// https://stackoverflow.com/a/5927432
// http://www.javascriptkit.com/javatutors/requestanimationframe.shtml (cf "Slowing down or cancelling requestAnimationFrame")
var fps = 60;
function animateAlert() {
  updateAlert();
  setTimeout(function () {
    //throttle requestAnimationFrame to 45fps
    requestAnimationFrame(animateAlert);
  }, 1000 / fps);
}
requestAnimationFrame(animateAlert);
var postAlert = function postAlert(type, message, params) {
  _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$emit("ALERT", {
    type: type,
    message: message,
    params: params
  });
};

/**
 * Post an application "Error" alert.
 * Note: 'context' could be more explicit than simply "danger"?
 *
 * @param {string} [message]
 * @param {string} [context]
 * @return {string} unique numeric identifier of the alert
 * @public
 */
var postAlertError = function postAlertError(message, context) {
  var id = _utils_idCounter__WEBPACK_IMPORTED_MODULE_6__["default"].getUniqueId("alert");
  context = context ? context : "danger";
  _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$emit("ALERT", {
    type: context,
    //"danger",
    message: message,
    params: {
      noHide: true,
      id: id
    }
  });

  // Logging this alert to Google Analytics
  Object(_utils_gaUtils__WEBPACK_IMPORTED_MODULE_8__["default"])(context, message);
  return id;
};
var postAlertNotice = function postAlertNotice(message) {
  var id = _utils_idCounter__WEBPACK_IMPORTED_MODULE_6__["default"].getUniqueId("alert");
  //console.log(`Requesting creation of toast #${id}`);
  _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$emit("ALERT", {
    type: "secondary",
    message: message,
    params: {
      noHide: true,
      noClose: true,
      id: id
    }
  });
  return id;
};
var closeAlert = function closeAlert(id) {
  //console.log(`Requesting close of toast #${id}`);
  _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$emit("CLOSE_ALERT", id);
};
var updateAlert = function updateAlert() {
  _utils_eventBus__WEBPACK_IMPORTED_MODULE_7__["default"].$emit("UPDATE_ALERT");
};


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiseaseSystems.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.iterator.for-each.js */ "./node_modules/core-js/modules/es.iterator.for-each.js");
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
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
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/utils/uiUtils.js */ "./src/utils/uiUtils.js");
/* harmony import */ var _utils_keyParams__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/utils/keyParams */ "./src/utils/keyParams.js");
/* harmony import */ var _utils_userUtils_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/utils/userUtils.js */ "./src/utils/userUtils.js");
/* harmony import */ var _utils_sessionUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @/utils/sessionUtils.js */ "./src/utils/sessionUtils.js");
/* harmony import */ var _utils_sortUtils_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @/utils/sortUtils.js */ "./src/utils/sortUtils.js");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @/utils/formatters */ "./src/utils/formatters.js");
/* harmony import */ var _components_PhenotypeSelectPicker_vue__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @/components/PhenotypeSelectPicker.vue */ "./src/components/PhenotypeSelectPicker.vue");









































/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_33__["default"].component("disease-systems", {
  props: ["page", "phenotypes", "phenotypeCorrelation", "diseases", "diseaseGroups", "diseaseInSession"],
  data: function data() {
    return {
      diseaseSystems: [],
      selectedSystem: null,
      selectedDisease: null,
      selectedGroups: [],
      focusBy: null,
      pCorPValue: 0.05,
      pCorCorrelation: null,
      pCorDirection: "pValue",
      PBuilderDSystem: null
    };
  },
  components: {
    PhenotypeSelectPicker: _components_PhenotypeSelectPicker_vue__WEBPACK_IMPORTED_MODULE_40__["default"]
  },
  mounted: function mounted() {
    this.setDiseaseSystems();
    this.getCustomPhenotypes();
  },
  computed: {
    phenotypGroups: function phenotypGroups() {
      if (!!this.phenotypes) {
        var phGroups = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(this.phenotypes.map(function (p) {
          return p.group;
        }).sort()));
        return phGroups;
      } else {
        return null;
      }
    },
    phenotypeNames: function phenotypeNames() {
      if (!!this.phenotypes) {
        var content = {};
        this.phenotypes.map(function (p) {
          content[p.name] = p.description;
        });
        return content;
      } else {
        return null;
      }
    },
    correlatedPhenotypes: function correlatedPhenotypes() {
      var _this = this;
      if (!!this.phenotypeCorrelation) {
        var content = !!this.pCorPValue && this.pCorPValue != "" ? this.phenotypeCorrelation.data.filter(function (p) {
          return p.pValue <= _this.pCorPValue;
        }) : this.phenotypeCorrelation.data;
        if (!!this.pCorCorrelation && this.pCorCorrelation != "") {
          content = content.filter(function (p) {
            return p.rg >= _this.pCorCorrelation;
          });
        }
        if (this.pCorDirection == "rg") {
          content = _utils_sortUtils_js__WEBPACK_IMPORTED_MODULE_38__["default"].sort(content, "rg", true, null);
        }
        return content;
      } else {
        return null;
      }
    }
  },
  methods: Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_sessionUtils_js__WEBPACK_IMPORTED_MODULE_37__["default"]), _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_34__["default"]), _utils_sortUtils_js__WEBPACK_IMPORTED_MODULE_38__["default"]), _utils_userUtils_js__WEBPACK_IMPORTED_MODULE_36__["default"]), _utils_formatters__WEBPACK_IMPORTED_MODULE_39__["default"]), _utils_keyParams__WEBPACK_IMPORTED_MODULE_35__["default"]), {}, {
    currentFocus: function currentFocus() {
      var customPhsSet = _utils_userUtils_js__WEBPACK_IMPORTED_MODULE_36__["default"].getPhenotypes();
      if (!!customPhsSet) {
        var content = {
          system: null,
          disease: null,
          groups: null,
          phenotypes: []
        };
        var focusLabel = customPhsSet.id.split(": ");
        switch (focusLabel[0]) {
          case "Disease system":
            content.system = focusLabel[1];
            break;
          case "Disease":
            content.system = this.diseases.filter(function (d) {
              return d.disease == focusLabel[1];
            })[0]["system"];
            content.disease = focusLabel[1];
            break;
          case "Phenotype groups":
            content.groups = focusLabel[1].slice(0, -1).split(",");
            break;
          case "Phenotype correlation":
            break;
        }
        content.phenotypes = customPhsSet.list;
        return content;
      } else {
        return null;
      }
    },
    formatValue: function formatValue(FORMATTER, VALUE) {
      return _utils_formatters__WEBPACK_IMPORTED_MODULE_39__["default"][FORMATTER](VALUE);
    },
    addRemovePhenotypeGroup: function addRemovePhenotypeGroup(GROUP) {
      var index = this.selectedGroups.indexOf(GROUP);
      if (index > -1) {
        this.selectedGroups.splice(index, 1);
      } else {
        this.selectedGroups.push(GROUP);
      }
    },
    getCustomPhenotypes: function getCustomPhenotypes() {
      var customPhsSet = _utils_userUtils_js__WEBPACK_IMPORTED_MODULE_36__["default"].getPhenotypes();
      var selectedDisease = !!customPhsSet ? customPhsSet.id : null;
      var selectedPhs = !!customPhsSet ? customPhsSet.list : null;
      if (!!selectedDisease && !!selectedDisease.includes("Phenotype group")) {
        var groupArr = selectedDisease.split(":");
        var groups = groupArr[1].split(",");
        if (groups.length > 2) {
          selectedDisease = "Phenotype groups:" + groups[0] + "+" + (groups.length - 2);
        } else {
          selectedDisease = "Phenotype group:" + groups[0];
        }
      }
      this.selectedDisease = selectedDisease;
      this.$store.dispatch("diseaseInSession", selectedDisease);
      this.$store.dispatch("phenotypesInSession", selectedPhs);
    },
    resetCustomPhenotypes: function resetCustomPhenotypes() {
      _utils_userUtils_js__WEBPACK_IMPORTED_MODULE_36__["default"].clearPhenotypes();
      this.getCustomPhenotypes();
      _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_34__["default"].hideElement("pheno_list_builder");
    },
    saveCustomPhenotypes: function saveCustomPhenotypes(TYPE, ACTION) {
      switch (TYPE) {
        case "system":
          this.selectedDisease = "Disease system: " + this.selectedDisease;
          break;
        case "disease":
          this.selectedDisease = "Disease: " + this.selectedDisease;
          break;
        case "group":
          var groups = "";
          this.selectedGroups.map(function (g) {
            groups += g + ",";
          });
          this.selectedDisease = "Phenotype groups: " + groups;
          break;
        case "correlation":
          this.selectedDisease = "Phenotype correlation: " + this.phenotypeNames[this.correlatedPhenotypes[0].phenotype];
          break;
      }
      var id = this.selectedDisease;
      var phenotypeIds = [];
      var phenotypesChkboxes = document.querySelectorAll(".phenotype-chkbox");
      phenotypesChkboxes.forEach(function (chkbox) {
        if (!!chkbox.checked) {
          phenotypeIds.push(chkbox.value);
        }
      });
      var phList = [];
      this.phenotypes.map(function (p) {
        phenotypeIds.map(function (id) {
          if (p.name == id) {
            phList.push(p);
          }
        });
      });
      var customPhList = {
        id: id,
        list: phList
      };
      _utils_userUtils_js__WEBPACK_IMPORTED_MODULE_36__["default"].savePhenotypes(customPhList);
      if (!!id.includes("Phenotype group")) {
        var groupArr = id.split(":");
        var _groups = groupArr[1].split(",");
        if (_groups.length > 2) {
          id = "Phenotype groups:" + _groups[0] + "+" + (_groups.length - 2);
        } else {
          id = "Phenotype group:" + _groups[0];
        }
      }
      this.$store.dispatch("phenotypesInSession", phList);
      this.$store.dispatch("diseaseInSession", id);
      this.selectedDisease = null;
      _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_34__["default"].hideElement("pheno_list_builder");
      var currentUrl = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_34__["default"].getUrl();
      if (!!currentUrl.pathname.includes("region.html")) {
        //console.log(keyParams.chr, keyParams.start, keyParams.end);

        var nextUrl = currentUrl.pathname + "?chr=" + _utils_keyParams__WEBPACK_IMPORTED_MODULE_35__["default"].chr + "&start=" + _utils_keyParams__WEBPACK_IMPORTED_MODULE_35__["default"].start + "&end=" + _utils_keyParams__WEBPACK_IMPORTED_MODULE_35__["default"].end;
        location.href = nextUrl;
      }
    },
    closePhenotypesBuilder: function closePhenotypesBuilder() {
      _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_34__["default"].hideElement("pheno_list_builder");
    },
    openPhenotypesBuilder: function openPhenotypesBuilder(TYPE, PARAMS, EVENT) {
      var _this2 = this;
      this.focusBy = TYPE;
      //console.log("TYPE", TYPE);
      //console.log("currentFocus", this.currentFocus());

      var params = !!PARAMS ? PARAMS : this.currentFocus();
      switch (TYPE) {
        case "system":
          if (!!params && !!params.system || !!EVENT) {
            this.selectedDisease = !!EVENT ? EVENT.target.value : params.system.replaceAll(" system", "");
          }
          break;
        case "disease":
          if (!!params && !!params.system && !!params.disease || !!EVENT) {
            this.selectedDisease = !!EVENT ? EVENT.target.value : params.disease;
            this.PBuilderDSystem = !!EVENT ? this.diseases.filter(function (d) {
              return d.disease == EVENT.target.value;
            })[0]["system"].replaceAll(" system", "") : params.system.replaceAll(" system", "");
          }
          break;
        case "group":
          if (!!params && !!params.groups) {
            params.groups.map(function (g) {
              if (g != "") {
                _this2.selectedGroups.push(g.trim());
              }
            });
          }
          break;
        case "correlation":
          break;
      }

      //open phenotype Builder
      _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_34__["default"].showElement("pheno_list_builder");
    },
    getPhenotypes: function getPhenotypes() {
      var _this3 = this;
      var phAssoDisease;
      if (this.focusBy == "system") {
        phAssoDisease = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(this.$store.state.bioPortal.diseaseSystems.filter(function (d) {
          return !!d.system.includes(_this3.selectedDisease);
        }).map(function (d) {
          return d.phenotype;
        })));
      }
      if (this.focusBy == "disease") {
        phAssoDisease = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(this.$store.state.bioPortal.diseaseSystems.filter(function (d) {
          return d.disease == _this3.selectedDisease;
        }).map(function (d) {
          return d.phenotype;
        })));
      }
      var rawPhs = this.phenotypes;
      var filteredPhs = [];
      if (this.focusBy == "system" || this.focusBy == "disease") {
        phAssoDisease.map(function (p) {
          rawPhs.map(function (rp) {
            if (rp.name.toLowerCase() == p.toLowerCase()) {
              filteredPhs.push(rp);
            }
          });
        });
      }
      if (this.focusBy == "group") {
        this.selectedGroups.map(function (g) {
          rawPhs.map(function (rp) {
            if (rp.group.toLowerCase() == g.toLowerCase()) {
              filteredPhs.push(rp);
            }
          });
        });
      }
      _utils_sortUtils_js__WEBPACK_IMPORTED_MODULE_38__["default"].sort(filteredPhs, "description", false, true);
      _utils_sortUtils_js__WEBPACK_IMPORTED_MODULE_38__["default"].sort(filteredPhs, "group", false, true);
      return filteredPhs;
    },
    setDiseaseSystems: function setDiseaseSystems() {
      var _this4 = this;
      this.diseaseSystems = [];
      var diseaseSystems = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(this.diseases.map(function (d) {
        return d.system;
      }))).sort();
      diseaseSystems.map(function (d) {
        var shortName = d.replaceAll(" system", "");
        _this4.diseaseSystems.push(shortName);
      });
    },
    communityPortalLink: function communityPortalLink(ID) {
      var host = window.location.host.split(".");
      if (!!window.location.host.includes("localhost")) {
        host = host.length == 2 ? host[1] : host[0];
      } else {
        host = host.length == 3 ? host[1] + "." + host[2] : host[0] + "." + host[1];
      }
      return "https://" + ID + "." + host;
    },
    diseaseOptions: function diseaseOptions(ID) {
      //console.log("id", ID);
      var diseaseSystems = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(this.diseases.filter(function (d) {
        return d.system == ID + " system";
      }).map(function (d) {
        return d.disease;
      })));

      //console.log("diseaseSystems", diseaseSystems);

      return diseaseSystems;
    },
    kpDiseasePair: function kpDiseasePair(SYSTEM, DISEASE) {
      var _this5 = this;
      var kpList = "";
      this.diseases.map(function (d) {
        if (d.system.replaceAll(" system", "") == SYSTEM) {
          kpList = d.portals;
        }
      });
      var kps = [];
      if (kpList != "" && !!kpList) {
        kpList.split(",").map(function (c) {
          var tempArr = _this5.diseaseGroups.filter(function (dg) {
            return dg.name == c;
          });
          kps.push(tempArr[0]);
        });
      }
      return kps;
    }
  })
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Documentation.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_documentationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/documentationUtils */ "./src/utils/documentationUtils.js");



/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].component("documentation", {
  props: ["name", "contentFill", "contentMap"],
  data: function data(context) {
    return {};
  },
  computed: {
    documentationContent: function documentationContent() {
      if (!!this.contentMap && !!this.contentMap[this.name]) {
        var content = this.contentMap[this.name].content;
        var contentFill = this.contentFill || {};
        var converter = _utils_documentationUtils__WEBPACK_IMPORTED_MODULE_2__["default"].makeConverter(content, contentFill, this.name);
        return converter.makeHtml(content);
      }
      return "";
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuItem.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_documentationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/documentationUtils */ "./src/utils/documentationUtils.js");



/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].component("menu-item", {
  props: ["name", "contentFill", "contentMap"],
  data: function data(context) {
    return {};
  },
  computed: {
    menuContent: function menuContent() {
      if (!!this.contentMap && !!this.contentMap[this.name]) {
        var content = this.contentMap[this.name].content;
        var contentFill = this.contentFill || {};
        var converter = _utils_documentationUtils__WEBPACK_IMPORTED_MODULE_2__["default"].makeConverter(content, contentFill, this.name);
        return converter.makeHtml(content);
      }
      return "";
    }
  },
  watch: {},
  methods: {}
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageFooter.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("page-footer", {
  props: ["diseaseGroup"],
  data: function data() {
    return {};
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-cookies */ "./node_modules/vue-cookies/vue-cookies.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_hostUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/hostUtils */ "./src/utils/hostUtils.js");
/* harmony import */ var _components_analytics_GoogleAnalytics4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/analytics/GoogleAnalytics4 */ "./src/components/analytics/GoogleAnalytics4.vue");
/* harmony import */ var _components_MenuItem_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/MenuItem.vue */ "./src/components/MenuItem.vue");
/* harmony import */ var _components_DiseaseSystems_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/DiseaseSystems.vue */ "./src/components/DiseaseSystems.vue");
/* harmony import */ var _utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/bioIndexUtils */ "./src/utils/bioIndexUtils.js");
/* harmony import */ var _mixins_userMixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/mixins/userMixin */ "./src/mixins/userMixin.js");





//import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";





vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_cookies__WEBPACK_IMPORTED_MODULE_3___default.a);
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].component("page-header", {
  props: ["diseaseGroup", "frontContents", "rawPhenotypes", "page"],
  components: {
    GoogleAnalytics: _components_analytics_GoogleAnalytics4__WEBPACK_IMPORTED_MODULE_5__["default"],
    MenuItem: _components_MenuItem_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DiseaseSystems: _components_DiseaseSystems_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixins_userMixin__WEBPACK_IMPORTED_MODULE_9__["userMixin"]],
  data: function data() {
    return {
      bioindex_dev: false
    };
  },
  computed: {
    currentPage: function currentPage() {
      return window.location.pathname;
    },
    url2Md: function url2Md() {
      if (!!this.diseaseGroup && !!this.diseaseGroup.portalGroup) {
        return _utils_hostUtils__WEBPACK_IMPORTED_MODULE_4__["default"].urlWithSubdomain(this.diseaseGroup.portalGroup).href;
      } else {
        return _utils_hostUtils__WEBPACK_IMPORTED_MODULE_4__["default"].urlWithSubdomain().href;
      }
    }
  },
  watch: {
    diseaseGroup: function diseaseGroup(group) {
      if (!!group && !!group.title) {
        var s = document.title.split(" | ");

        // NB: If the <title> changes in index.html to use a different
        //     separator other than ' - ', please update this code.
        s[s.length - 1] = group.title;
        document.title = s.join(" | ");
        // find the shortcut icon
        var links = document.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
          if (links[i].rel == "shortcut icon") {
            links[i].href = "/images/favicons/".concat(group.name, "/ico.png");
          }
          if (links[i].rel == "icon") {
            links[i].href = "/images/favicons/".concat(group.name, "/ico.svg");
          }
        }
      }
    }
  },
  created: function created() {
    if (vue__WEBPACK_IMPORTED_MODULE_2__["default"].$cookies.isKey("session")) {
      this.$store.dispatch("bioPortal/getUser", vue__WEBPACK_IMPORTED_MODULE_2__["default"].$cookies.get("session"));
    }
    if (_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_8__["BIO_INDEX_HOST"].indexOf("dev") != -1) this.bioindex_dev = true;
    this.$store.dispatch("bioPortal/getDocumentations");
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PhenotypeSelectPicker.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PhenotypeSelectPicker.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_typeahead_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-typeahead-bootstrap */ "./node_modules/vue-typeahead-bootstrap/src/components/VueTypeaheadBootstrap.vue");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_11__);












vue__WEBPACK_IMPORTED_MODULE_7__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BootstrapVue"]);
vue__WEBPACK_IMPORTED_MODULE_7__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["IconsPlugin"]);
vue__WEBPACK_IMPORTED_MODULE_7__["default"].component("vue-typeahead-bootstrap", vue_typeahead_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_7__["default"].component("phenotype-selectpicker", {
  props: ["phenotypes", "clearOnSelected", "defaultPhenotype", "placeholder", "useInLocal", "localPlace"],
  data: function data() {
    return {
      userText: this.defaultPhenotype || ""
    };
  },
  computed: {
    phenotypeOptions: function phenotypeOptions() {
      if (!this.phenotypes) {
        return [];
      }
      return this.phenotypes.sort(function (a, b) {
        if (a.group < b.group) return -1;
        if (b.group < a.group) return 1;
        if (a.description < b.description) return -1;
        if (b.description < a.description) return 1;
        return 0;
      });
    }
  },
  methods: {
    onPhenotypeSelected: function onPhenotypeSelected(event) {
      if (!!this.useInLocal) {
        switch (this.localPlace) {
          case "diseaseSystems":
            this.getPhenotypeCorrelation(event.name);
            break;
        }
      } else {
        this.$store.dispatch("onPhenotypeChange", event);
        if (this.clearOnSelected) {
          this.userText = "";
          this.$refs.phenotypeSelect.inputValue = "";
        }
      }
    },
    setFocus: function setFocus() {
      var _this = this;
      this.$nextTick(function () {
        _this.$refs.phenotypeSelect.$refs.input.focus();
      });
    },
    getPhenotypeCorrelation: function getPhenotypeCorrelation(phenotype) {
      var _this2 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var searchPoint, correlationJson;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              searchPoint = "https://bioindex-dev.hugeamp.org/api/bio/query/genetic-correlation?q=" + phenotype;
              _context.next = 3;
              return fetch(searchPoint).then(function (resp) {
                return resp.json();
              });
            case 3:
              correlationJson = _context.sent;
              if (correlationJson.error == null) {
                _this2.$store.dispatch("phenotypeCorrelation", correlationJson);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TooltipDocumentation.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_documentationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/documentationUtils */ "./src/utils/documentationUtils.js");
/* harmony import */ var _components_Documentation_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Documentation.vue */ "./src/components/Documentation.vue");
/* harmony import */ var _utils_uiUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/uiUtils */ "./src/utils/uiUtils.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");








vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BootstrapVue"]);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BootstrapVueIcons"]);
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_3__["default"].component("tooltip-documentation", {
  props: ["name", "group", "contentFill", "contentMap", "isHover", "noIcon", "supplyText"],
  components: {
    Documentation: _components_Documentation_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data(context) {
    return {
      content: null,
      converter: null,
      show: false
    };
  },
  computed: {
    tooltipDocumentationContent: function tooltipDocumentationContent() {
      if (!!this.contentMap && !!this.contentMap[this.name]) {
        var content = this.contentMap[this.name].content;
        var contentFill = this.contentFill || {};
        var converter = _utils_documentationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].makeConverter(content, contentFill, this.name);
        return converter.makeHtml(content);
      }
      return "";
    },
    contentID: function contentID() {
      if (!!this.name) {
        var content = this.name + "_" + Math.random();
        return content.split(".").join("_");
      }
    },
    wrapperClass: function wrapperClass() {
      var content = this.isHover == true ? "help-content hover " : "help-content ";
      content += this.noIcon == true ? "no-icon-true" : "no-icon-false";
      return content;
    }
  },
  methods: Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_uiUtils__WEBPACK_IMPORTED_MODULE_6__["default"]), {}, {
    showHideHelpContent: function showHideHelpContent(ELEMENT) {
      _utils_uiUtils__WEBPACK_IMPORTED_MODULE_6__["default"].showHideHelpContent(ELEMENT);
    },
    getToolTipPosition: function getToolTipPosition(ELEMENT) {
      _utils_uiUtils__WEBPACK_IMPORTED_MODULE_6__["default"].getToolTipPosition(ELEMENT);
    }
  })
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/analytics/GoogleAnalytics4.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/analytics/GoogleAnalytics4.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-gtag */ "./node_modules/vue-gtag/dist/vue-gtag.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_gtag__WEBPACK_IMPORTED_MODULE_1__["default"], {
  config: {
    id: "G-FCLX0CH4C7" || false,
    params: {
      send_page_view: true
    }
  },
  appName: "HuGeAMP",
  pageTrackerScreenviewEnabled: true
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GoogleAnalytics"
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Alert.vue?vue&type=template&id=d0c93148":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Alert.vue?vue&type=template&id=d0c93148 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);










var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_vm.page != "front" ? _c("div", {
    staticClass: "disease-systems-sub-pages"
  }, [_c("div", {
    staticClass: "select-disease-wrapper"
  }, [!!_vm.diseaseInSession && _vm.diseaseInSession != "" ? _c("label", [_vm._v(_vm._s(_vm.diseaseInSession))]) : _vm._e(), !_vm.diseaseInSession || _vm.diseaseInSession == "" ? _c("label", [_vm._v("Set focus")]) : _vm._e(), _c("div", {
    staticClass: "select-disease"
  }, [_c("span", {
    staticClass: "menu-arrow"
  }, [_vm._v(">")]), _c("div", {
    staticClass: "options-wrapper"
  }, [_c("div", {
    staticClass: "option",
    on: {
      click: function click($event) {
        return _vm.openPhenotypesBuilder("system");
      }
    }
  }, [_vm._v(" By organ system ")]), _c("div", {
    staticClass: "option",
    on: {
      click: function click($event) {
        return _vm.openPhenotypesBuilder("disease");
      }
    }
  }, [_vm._v(" By disease ")]), _c("div", {
    staticClass: "option",
    on: {
      click: function click($event) {
        return _vm.openPhenotypesBuilder("group");
      }
    }
  }, [_vm._v(" By Phenotype groups ")]), _c("div", {
    staticClass: "option",
    on: {
      click: function click($event) {
        return _vm.openPhenotypesBuilder("correlation");
      }
    }
  }, [_vm._v(" By Phenotype correlation ")]), _c("div", {
    staticClass: "option reset",
    on: {
      click: function click($event) {
        return _vm.resetCustomPhenotypes();
      }
    }
  }, [_vm._v(" Remove focus ")])])])])]) : _vm._e(), _vm.page == "front" ? _c("div", {
    staticClass: "row disease-systems-front"
  }, [_c("div", {
    staticClass: "disease-systems-tree col-md-12"
  }, [_vm._l(_vm.diseaseSystems, function (system) {
    return [_c("div", {
      key: system,
      staticClass: "disease-system col-md-2"
    }, [_c("img", {
      staticClass: "disease-systems-icon",
      attrs: {
        src: "https://kp4cd.org/sites/default/files/images/disease_systems/" + system.toLowerCase().split(" ")[0] + ".svg"
      }
    }), _c("div", [_vm._v(_vm._s(system))]), _c("div", {
      staticClass: "disease-system-options",
      attrs: {
        id: system.split(" ")[0] + "_options"
      }
    }, [_c("h6", [_c("a", {
      attrs: {
        href: "javascript:;"
      },
      on: {
        click: function click($event) {
          return _vm.openPhenotypesBuilder("system", {
            system: system
          });
        }
      }
    }, [_vm._v(_vm._s("Select " + system.toLowerCase() + " system"))])]), _c("h6", [_vm._v("Or select by disease")]), _vm._l(_vm.diseaseOptions(system), function (disease) {
      return _c("div", {
        key: disease,
        staticClass: "disease-name"
      }, [_c("a", {
        attrs: {
          href: "javascript:;"
        },
        on: {
          click: function click($event) {
            return _vm.openPhenotypesBuilder("disease", {
              system: system,
              disease: disease
            });
          }
        }
      }, [_vm._v(_vm._s(disease))])]);
    }), _c("p"), _vm.kpDiseasePair(system).length > 0 ? _c("h6", [_vm._v(" Or visit a community portal ")]) : _vm._e(), _vm._l(_vm.kpDiseasePair(system), function (kp) {
      return _c("div", {
        key: kp.name,
        staticClass: "community-portal"
      }, [_c("a", {
        attrs: {
          href: _vm.communityPortalLink(kp.name)
        }
      }, [_c("img", {
        attrs: {
          src: "https://kp4cd.org/sites/default/files/images/disease_systems/" + kp.name + "kp.svg"
        }
      })])]);
    })], 2)])];
  }), _c("div", {
    staticClass: "disease-system col-md-2"
  }, [_c("img", {
    staticClass: "disease-systems-icon",
    attrs: {
      src: "https://kp4cd.org/sites/default/files/images/disease_systems/correlation.svg"
    }
  }), _c("div", {
    staticClass: "disease-system-options"
  }, [_c("h6", [_c("a", {
    attrs: {
      href: "javascript:;"
    },
    on: {
      click: function click($event) {
        return _vm.openPhenotypesBuilder("group");
      }
    }
  }, [_vm._v("By Phenotype group ")])]), _c("h6", [_c("a", {
    attrs: {
      href: "javascript:;"
    },
    on: {
      click: function click($event) {
        return _vm.openPhenotypesBuilder("correlation");
      }
    }
  }, [_vm._v("By Phenotype Correlation ")])])]), _c("span", [_vm._v("By Phenotype")])]), _c("button", {
    class: !this.$store.state.diseaseInSession ? "hidden" : "btn btn-sm btn-warning reset-button",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.resetCustomPhenotypes();
      }
    }
  }, [_vm._v(" Remove focus ")])], 2)]) : _vm._e(), _c("div", {
    staticClass: "custom-phenotypes-list-builder hidden",
    attrs: {
      id: "pheno_list_builder"
    }
  }, [_vm.focusBy == "system" ? _c("div", {
    staticClass: "ph-builder-filters-wrapper filtering-ui-wrapper"
  }, [_c("div", {
    staticClass: "filtering-ui-content"
  }, [_c("div", {
    staticClass: "col filter-col-md"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Select disease system")]), _c("select", {
    staticClass: "select-disease form-control form-control-sm",
    on: {
      change: function change($event) {
        return _vm.openPhenotypesBuilder("system", null, $event);
      }
    }
  }, [!_vm.diseaseSystems.includes(_vm.selectedDisease) ? _c("option", {
    staticClass: "disease-name",
    attrs: {
      value: ""
    }
  }, [_vm._v(" Select one ")]) : _vm._e(), _vm._l(_vm.diseaseSystems, function (system) {
    return [_c("option", {
      staticClass: "disease-name",
      domProps: {
        value: system,
        selected: system == _vm.selectedDisease ? true : false
      }
    }, [_vm._v(" " + _vm._s(system) + " ")])];
  })], 2)])])]) : _vm._e(), _vm.focusBy == "disease" ? _c("div", {
    staticClass: "ph-builder-filters-wrapper filtering-ui-wrapper"
  }, [_c("div", {
    staticClass: "filtering-ui-content"
  }, [_c("div", {
    staticClass: "col filter-col-md"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Select disease system")]), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PBuilderDSystem,
      expression: "PBuilderDSystem"
    }],
    staticClass: "select-disease form-control form-control-sm",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.PBuilderDSystem = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    staticClass: "disease-name",
    attrs: {
      value: ""
    }
  }, [_vm._v(" Select one ")]), _vm._l(_vm.diseaseSystems, function (system) {
    return [_c("option", {
      staticClass: "disease-name",
      domProps: {
        value: system
      }
    }, [_vm._v(" " + _vm._s(system) + " ")])];
  })], 2)]), _c("div", {
    staticClass: "col filter-col-md"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Select disease")]), _c("select", {
    staticClass: "select-disease form-control form-control-sm",
    on: {
      change: function change($event) {
        return _vm.openPhenotypesBuilder("disease", null, $event);
      }
    }
  }, [_c("option", {
    staticClass: "disease-name",
    attrs: {
      value: ""
    }
  }, [_vm._v(" Select one ")]), _vm._l(_vm.diseaseOptions(_vm.PBuilderDSystem), function (disease) {
    return _c("option", {
      key: disease,
      staticClass: "disease-name",
      domProps: {
        value: disease,
        selected: disease == _vm.selectedDisease ? true : false
      }
    }, [_vm._v(" " + _vm._s(disease) + " ")]);
  })], 2)])])]) : _vm._e(), _vm.focusBy == "group" ? _c("div", {
    staticClass: "ph-builder-filters-wrapper filtering-ui-wrapper"
  }, [_vm._m(0), _vm._l(_vm.phenotypGroups, function (group) {
    return _c("div", {
      key: group,
      staticClass: "ph-group-option"
    }, [_c("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        value: group,
        checked: !!_vm.selectedGroups.includes(group)
      },
      on: {
        click: function click($event) {
          return _vm.addRemovePhenotypeGroup(group);
        }
      }
    }), _vm._v(" " + _vm._s(group) + " ")]);
  })], 2) : _vm._e(), _vm.focusBy == "system" || _vm.focusBy == "disease" || _vm.focusBy == "group" ? [_c("strong", {
    staticClass: "number-of-phenotypes"
  }, [_vm._v("Number of phenotypes: " + _vm._s(_vm.getPhenotypes().length))]), _c("div", {
    staticClass: "table-wrapper",
    class: _vm.focusBy
  }, [_c("table", {
    staticClass: "table table-striped table-sm"
  }, [_vm._m(1), _c("tbody", _vm._l(_vm.getPhenotypes(), function (phenotype) {
    return _c("tr", [_c("td", [_c("input", {
      staticClass: "phenotype-chkbox",
      attrs: {
        type: "checkbox",
        checked: ""
      },
      domProps: {
        value: phenotype.name
      }
    })]), _c("td", {
      staticClass: "phenotype-name"
    }, [_vm._v(" " + _vm._s(phenotype.description) + " ")]), _c("td", {
      staticClass: "phenotype-group"
    }, [_vm._v(" " + _vm._s(phenotype.group) + " ")]), _c("td", {
      staticClass: "phenotype-dichotomous"
    }, [_vm._v(" " + _vm._s(phenotype.dichotomous) + " ")])]);
  }), 0)])]), _c("div", {
    staticClass: "session-info"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.saveCustomPhenotypes(_vm.focusBy, "set");
      }
    }
  }, [_vm._v(" Set focus ")]), _c("button", {
    staticClass: "btn btn-warning btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.closePhenotypesBuilder();
      }
    }
  }, [_vm._v(" Cancel ")])])] : _vm._e(), _vm.focusBy == "correlation" ? _c("div", {
    staticClass: "ph-builder-filters-wrapper filtering-ui-wrapper"
  }, [_c("div", {
    staticClass: "filtering-ui-content"
  }, [_c("div", {
    staticClass: "col filter-col-md"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Select phenotype")]), !!_vm.phenotypes ? _c("phenotype-selectpicker", {
    attrs: {
      phenotypes: _vm.phenotypes,
      clearOnSelected: true,
      useInLocal: true,
      localPlace: "diseaseSystems"
    }
  }) : _vm._e()], 1), _c("div", {
    staticClass: "col filter-col-sm"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("P-Value(<=)")]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pCorPValue,
      expression: "pCorPValue"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.pCorPValue
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.pCorPValue = $event.target.value;
      }
    }
  })]), _c("div", {
    staticClass: "col filter-col-sm"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Correlation(>=)")]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pCorCorrelation,
      expression: "pCorCorrelation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.pCorCorrelation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.pCorCorrelation = $event.target.value;
      }
    }
  })]), _c("div", {
    staticClass: "col filter-col-sm"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v("Sort by")]), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pCorDirection,
      expression: "pCorDirection"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.pCorDirection = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "pValue"
    }
  }, [_vm._v("P-Value")]), _c("option", {
    attrs: {
      value: "rg"
    }
  }, [_vm._v("Correlation")])])])])]) : _vm._e(), _vm.focusBy == "correlation" && !!_vm.correlatedPhenotypes ? _c("strong", {
    staticClass: "number-of-phenotypes"
  }, [_vm._v("Number of phenotypes: " + _vm._s(_vm.correlatedPhenotypes.length))]) : _vm._e(), _vm.focusBy == "correlation" && !!_vm.correlatedPhenotypes ? _c("div", {
    staticClass: "table-wrapper"
  }, [_c("table", {
    staticClass: "table table-striped table-sm"
  }, [_vm._m(2), _c("tbody", _vm._l(_vm.correlatedPhenotypes, function (phenotype) {
    return _c("tr", [!!_vm.phenotypeNames[phenotype.other_phenotype] ? [_c("td", [_c("input", {
      staticClass: "phenotype-chkbox",
      attrs: {
        type: "checkbox",
        checked: ""
      },
      domProps: {
        value: phenotype.other_phenotype
      }
    })]), _c("td", {
      staticClass: "phenotype-name"
    }, [_vm._v(" " + _vm._s(_vm.phenotypeNames[phenotype.other_phenotype]) + " ")]), _c("td", {
      staticClass: "phenotype-name"
    }, [_vm._v(" " + _vm._s(_vm.formatValue("pValueFormatter", phenotype.pValue)) + " ")]), _c("td", {
      staticClass: "phenotype-name"
    }, [_vm._v(" " + _vm._s(_vm.formatValue("pValueFormatter", phenotype.rg)) + " ")]), _c("td", {
      staticClass: "phenotype-name"
    }, [_vm._v(" " + _vm._s(_vm.formatValue("pValueFormatter", phenotype.stdErr)) + " ")])] : _vm._e()], 2);
  }), 0)])]) : _vm._e(), _vm.focusBy == "correlation" ? _c("div", {
    staticClass: "session-info"
  }, [!!_vm.correlatedPhenotypes ? _c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.saveCustomPhenotypes("correlation", "set");
      }
    }
  }, [_vm._v(" Set focus ")]) : _vm._e(), _c("button", {
    staticClass: "btn btn-warning btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.closePhenotypesBuilder();
      }
    }
  }, [_vm._v(" Cancel ")])]) : _vm._e()], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_c("strong", [_vm._v("Select phenotype groups")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("thead", [_c("tr", [_c("th"), _c("th", [_vm._v("Phenotype")]), _c("th", [_vm._v("Group")]), _c("th", [_vm._v("Dichotomous")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("thead", [_c("tr", [_c("th"), _c("th", [_vm._v("Phenotype")]), _c("th", [_vm._v("P-Value")]), _c("th", [_vm._v("Correlation")]), _c("th", [_vm._v("Standard error")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=template&id=38e80c8c&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Documentation.vue?vue&type=template&id=38e80c8c&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    domProps: {
      innerHTML: _vm._s(_vm.documentationContent)
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=template&id=318d8442&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuItem.vue?vue&type=template&id=318d8442&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "portal-menu-wrapper",
    domProps: {
      innerHTML: _vm._s(_vm.menuContent)
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageFooter.vue?vue&type=template&id=efe9bb8c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=template&id=efe9bb8c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.diseaseGroup ? _c("div", [_c("div", {
    class: "container-fluid " + _vm.diseaseGroup.name + "kp-footer"
  }, [_vm._m(0)])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_c("a", {
    staticStyle: {
      color: "#fff !important"
    },
    attrs: {
      href: "https://kp4cd.org/"
    }
  }, [_vm._v(" Powered by the "), _c("span", {
    staticStyle: {
      "font-weight": "500",
      "font-size": "1.2em",
      "vertical-align": "-.1em"
    }
  }, [_vm._v("HuGeAMP")]), _c("span", {
    staticClass: "registered-mark"
  }, [_vm._v("   |  ACCELERATING MEDICINES PARTNERSHIP and AMP are registered service marks of the U.S. Department of Health and Human Services. ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_vm.bioindex_dev ? _c("img", {
    staticClass: "dev-flag",
    attrs: {
      src: "/images/dev_flag.svg"
    }
  }) : _vm._e(), _c("google-analytics"), _c("alert"), _vm.diseaseGroup ? _c("div", {
    staticClass: "container-fluid"
  }, [_vm.diseaseGroup.default ? _c("div", {
    staticClass: "row amp-banner-2021"
  }, [_c("a", {
    attrs: {
      href: "https://www.nih.gov/research-training/accelerating-medicines-partnership-amp/common-metabolic-diseases"
    }
  }, [_c("img", {
    staticStyle: {
      width: "500px",
      "margin-left": "15px",
      "margin-top": "15px"
    },
    attrs: {
      src: "//kp4cd.org/sites/default/files/vueportal/amp_text.svg"
    }
  })])]) : _vm._e(), !!_vm.diseaseGroup.portalGroup && _vm.diseaseGroup.portalGroup != _vm.diseaseGroup.name ? _c("div", {
    staticClass: "row amp-banner-2021",
    staticStyle: {
      height: "50px",
      display: "block"
    }
  }, [_c("a", {
    attrs: {
      href: _vm.url2Md
    }
  }, [_c("div", {
    staticStyle: {
      padding: "5px",
      "text-align": "center",
      height: "50px"
    }
  }, [_c("img", {
    class: "portals-2-mdkp-logo",
    attrs: {
      src: "//kp4cd.org/sites/default/files/vueportal/portals2mdkp_banner.svg"
    }
  })])])]) : _vm._e(), _c("div", {
    class: "row " + _vm.diseaseGroup.name + "kp-header"
  }, [_c("div", {
    class: _vm.diseaseGroup.name + "kp-logo-wrapper col-md-4"
  }, [_c("a", {
    attrs: {
      href: "/"
    }
  }, [_vm.frontContents.field_banner_logo ? _c("img", {
    class: _vm.diseaseGroup.name + "kp-logo",
    attrs: {
      src: "//kp4cd.org/sites/default/files/vueportal/" + _vm.frontContents.field_banner_logo
    }
  }) : _c("img", {
    staticClass: "mdkp-logo",
    attrs: {
      src: "//kp4cd.org/sites/default/files/vueportal/mdkp_header_logo.svg"
    }
  })]), _vm.diseaseGroup.name == "a2f" ? [_vm.page == "front" ? _c("span", {
    staticClass: "disease-in-session"
  }, [_vm._v(_vm._s(_vm.$store.state.diseaseInSession))]) : _vm._e(), _vm.page != "front" && _vm.$store.state.bioPortal.diseaseSystems.length > 0 ? _c("disease-systems", {
    attrs: {
      page: _vm.page,
      diseases: _vm.$store.state.bioPortal.diseaseSystems,
      "disease-groups": _vm.$store.state.bioPortal.diseaseGroups,
      phenotypes: _vm.rawPhenotypes,
      "disease-in-session": _vm.$store.state.diseaseInSession,
      "phenotype-correlation": _vm.$store.state.phenotypeCorrelation
    }
  }) : _vm._e()] : _vm._e()], 2), _c("div", {
    class: "kp-menu-wrapper col-md-8"
  }, [!!_vm.diseaseGroup.name ? _c("menu-item", {
    attrs: {
      group: _vm.diseaseGroup.name,
      name: "header.menu",
      contentMap: _vm.$store.state.bioPortal.documentations
    }
  }) : _vm._e(), _c("div", {
    staticClass: "login-menu-wrapper"
  }, [_c("ul", [!!_vm.user ? _c("li", [_c("a", {
    class: _vm.diseaseGroup.name + "kp-login",
    attrs: {
      href: "/logout",
      title: _vm.user
    }
  }, [_vm._v("Logout")])]) : _c("li", [_c("a", {
    class: _vm.diseaseGroup.name + "kp-login",
    attrs: {
      href: "/login"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.loginUser.apply(null, arguments);
      }
    }
  }, [_vm._v("Login")])])])])], 1)])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PhenotypeSelectPicker.vue?vue&type=template&id=419727f2":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PhenotypeSelectPicker.vue?vue&type=template&id=419727f2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);


var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("vue-typeahead-bootstrap", {
    ref: "phenotypeSelect",
    attrs: {
      placeholder: _vm.placeholder || "Type in a phenotype ...",
      data: _vm.phenotypeOptions,
      serializer: function serializer(s) {
        return s.description;
      },
      maxMatches: 1000,
      minMatchingChars: 0,
      showOnFocus: true
    },
    on: {
      hit: function hit($event) {
        return _vm.onPhenotypeSelected($event);
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
        }), _vm._v("  "), _c("small", {
          staticClass: "text-secondary"
        }, [_vm._v(_vm._s(data.group))])];
      }
    }]),
    model: {
      value: _vm.userText,
      callback: function callback($$v) {
        _vm.userText = $$v;
      },
      expression: "userText"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=template&id=44aa8827":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TooltipDocumentation.vue?vue&type=template&id=44aa8827 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    class: this.wrapperClass + " " + _vm.contentID
  }, [this.isHover == false ? _c("span", {
    class: "help-content-caller no-icon-" + this.noIcon,
    on: {
      click: function click($event) {
        return _vm.showHideHelpContent(_vm.contentID);
      }
    }
  }, [_c("b-icon-plus-circle-fill")], 1) : _vm._e(), this.isHover == true ? _c("span", {
    class: "help-content-caller hover no-icon-" + this.noIcon,
    on: {
      mouseover: function mouseover($event) {
        return _vm.getToolTipPosition(_vm.contentID);
      }
    }
  }, [_c("b-icon-info-circle-fill")], 1) : _vm._e(), this.isHover == false ? _c("div", {
    staticClass: "help-content-modal hidden",
    attrs: {
      id: _vm.contentID
    }
  }, [_c("span", {
    staticClass: "help-content-close",
    on: {
      click: function click($event) {
        return _vm.showHideHelpContent(_vm.contentID);
      }
    }
  }, [_vm._v("+")]), _c("div", {
    staticClass: "help-content-wrapper",
    domProps: {
      innerHTML: _vm._s(_vm.tooltipDocumentationContent)
    }
  })]) : _vm._e(), this.isHover == true ? _c("div", {
    class: "help-hover-content-modal no-icon-" + this.noIcon,
    attrs: {
      id: _vm.contentID
    }
  }, [_c("div", {
    staticClass: "help-content-wrapper",
    domProps: {
      innerHTML: _vm._s(!!_vm.supplyText ? _vm.supplyText : _vm.tooltipDocumentationContent)
    }
  })]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/analytics/GoogleAnalytics4.vue?vue&type=template&id=542d4bc0":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/analytics/GoogleAnalytics4.vue?vue&type=template&id=542d4bc0 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "analytics"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404/Template.vue?vue&type=template&id=2191242b":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404/Template.vue?vue&type=template&id=2191242b ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("page-header", {
    attrs: {
      "disease-group": _vm.$parent.diseaseGroup,
      "front-contents": _vm.$parent.frontContents
    }
  }), _c("div", {
    staticClass: "container-fluid mdkp-body notfound"
  }, [_c("div", {
    staticClass: "card mdkp-card"
  }, [_c("div", {
    staticClass: "row card-body"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(0), _c("div", {
    staticClass: "notice"
  }, [_c("h4", [_vm._v("Page Not Found")]), _c("div", [_c("div", [_vm._v(" We couldn't find the page you're looking for. ")]), _c("div", [_vm._v(" The requested link "), _c("span", {
    staticClass: "path"
  }, [_vm._v(_vm._s(_vm.$parent.currentPath))]), _vm._v(" is not found on this site. ")]), _c("div", {
    staticClass: "button"
  }, [_c("b-button", {
    attrs: {
      pill: "",
      variant: "outline-success",
      href: "/"
    }
  }, [_vm._v("Home")]), _c("b-button", {
    attrs: {
      pill: "",
      variant: "outline-warning",
      href: "//kp4cd.org/contact"
    }
  }, [_vm._v("Contact")])], 1)])])])])])]), _c("page-footer", {
    attrs: {
      "disease-group": _vm.$parent.diseaseGroup
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "page"
  }, [_c("span", {
    staticClass: "number"
  }, [_vm._v("4")]), _c("div", {
    staticClass: "DNA"
  }, [_c("div", {
    staticClass: "helix"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases ta"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases gc"
  }), _c("div", {
    staticClass: "bases ta"
  }), _c("div", {
    staticClass: "bases gc"
  }), _c("div", {
    staticClass: "bases gc"
  }), _c("div", {
    staticClass: "bases gc"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases ta"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases gc"
  }), _c("div", {
    staticClass: "bases gc"
  }), _c("div", {
    staticClass: "bases cg"
  }), _c("div", {
    staticClass: "bases gc"
  }), _c("div", {
    staticClass: "bases at"
  }), _c("div", {
    staticClass: "bases ta"
  }), _c("div", {
    staticClass: "bases ta"
  }), _c("div", {
    staticClass: "bases cg"
  }), _c("div", {
    staticClass: "bases cg"
  })]), _c("span", {
    staticClass: "number"
  }, [_vm._v("4")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.ph-builder-filters-wrapper[data-v-44a43d90] {\n\tmargin-bottom: 20px;\n}\n.ph-group-option[data-v-44a43d90] {\n\tfont-size: 14px;\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n}\n.ph-group-option input[type=\"checkbox\"][data-v-44a43d90] {\n\twidth: 14px;\n\theight: 14px;\n}\n.disease-systems-sub-pages .select-disease-wrapper[data-v-44a43d90] {\n\tposition: absolute;\n\tz-index: 200;\n\ttop: 16px;\n\tleft: 140px;\n\tcolor: #fff;\n}\n.select-disease-wrapper label[data-v-44a43d90] {\n\tdisplay: inline-block !important;\n\tmargin: 0 !important;\n\tmargin-bottom: 0.5rem !important;\n}\n.disease-systems-sub-pages .select-disease[data-v-44a43d90] {\n\twidth: 15px;\n\tfont-size: 14px;\n\tbackground: #fff;\n\tborder: solid 0px #fff;\n\tborder-radius: 10px;\n\tcolor: #f7835c;\n\tpadding: 0 8px;\n\theight: 16px;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tmargin-left: 5px;\n\tvertical-align: -2px;\n\tposition: relative;\n}\n.disease-systems-sub-pages .select-disease[data-v-44a43d90]:hover {\n\tcursor: pointer;\n}\n.disease-systems-sub-pages .select-disease .menu-arrow[data-v-44a43d90] {\n\tdisplay: block;\n\tfont-weight: bold;\n\tposition: absolute;\n\ttop: -2px;\n\tleft: 5px;\n}\n.disease-systems-sub-pages .select-disease:hover .menu-arrow[data-v-44a43d90] {\n\tleft: 8px;\n}\n.select-disease .options-wrapper[data-v-44a43d90] {\n\tdisplay: none;\n\tposition: absolute;\n\tmargin-left: -90px;\n\tmargin-top: 8px;\n\t-webkit-box-shadow: 3px 3px 3px 3px rgb(0 0 0 / 20%);\n\t        box-shadow: 3px 3px 3px 3px rgb(0 0 0 / 20%);\n}\n.select-disease:hover .options-wrapper[data-v-44a43d90] {\n\tdisplay: block;\n}\n.select-disease .option[data-v-44a43d90] {\n\tcolor: #666666;\n\tbackground-color: #ffffff;\n\twidth: 200px;\n\tfont-size: 14px;\n\tborder-bottom: solid 1px #ddd;\n\ttext-align: left;\n\tpadding: 3px 10px;\n}\n.select-disease .option.reset[data-v-44a43d90] {\n\tbackground-color: #ffdddd;\n}\n.select-disease .option[data-v-44a43d90]:hover {\n\tcursor: pointer;\n\tcolor: #000000;\n}\n.disease-systems-front .select-disease[data-v-44a43d90] {\n\tmargin: 5px 5% 20px 5%;\n\twidth: 90%;\n}\n.select-disease-label[data-v-44a43d90] {\n\tdisplay: block;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\ttext-align: left;\n\tpadding-left: 5%;\n\tmargin: 0;\n}\n.custom-phenotypes-list-builder[data-v-44a43d90] {\n\tposition: fixed;\n\ttop: 15%;\n\tleft: calc(50% - 380px);\n\twidth: 760px;\n\theight: 75%;\n\ttext-align: left;\n\tbackground-color: #fff;\n\tpadding: 15px;\n\t-webkit-box-shadow: 0px 10px 10px 10px rgb(0 0 0 / 20%);\n\tbox-shadow: 0px 10px 10px 10px rgb(0 0 0 / 20%);\n\tborder-radius: 5px;\n\tz-index: 101;\n\ttext-align: center;\n}\n.custom-phenotypes-list-builder .table-wrapper[data-v-44a43d90] {\n\twidth: 100%;\n\theight: calc(100% - 160px);\n\toverflow-y: auto;\n\tmargin-bottom: 15px;\n\tborder: solid 1px #ddd;\n\tfont-size: 14px;\n}\n.custom-phenotypes-list-builder .table-wrapper.group[data-v-44a43d90] {\n\theight: calc(100% - 260px);\n}\n.custom-phenotypes-list-builder .table-wrapper table[data-v-44a43d90] {\n\tmargin-top: -1px;\n}\n.custom-phenotypes-list-builder table td.phenotype-name[data-v-44a43d90] {\n\ttext-align: left;\n}\n.custom-phenotypes-list-builder table td.phenotype-group[data-v-44a43d90] {\n\tbackground: none !important;\n}\n.session-info[data-v-44a43d90] {\n\twidth: 100%;\n}\n.session-info button[data-v-44a43d90] {\n\tmargin: 0 5px 0 5px;\n}\n.reset-button[data-v-44a43d90] {\n\tfont-size: 16px;\n\tpadding: 0 10px;\n\tborder-radius: 15px;\n\tmargin-top: 20px;\n\t/*position: absolute;\n\ttop: -40px;\n\tright: 20px;*/\n}\n\n/* For front page */\n.disease-systems-front .disease-systems-tree[data-v-44a43d90] {\n\ttext-align: center;\n\tdisplay: block;\n\tmax-width: 760px !important;\n\tcolor: #fff;\n\tmargin-top: 10px;\n\tposition: relative;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.disease-systems-front .disease-system[data-v-44a43d90] {\n\twidth: 100px;\n\ttext-align: center;\n\tfont-size: 14px;\n\tdisplay: inline-grid;\n\tvertical-align: top;\n\tmargin: 0 30px 5px -10px;\n}\n.disease-systems-front .disease-systems-icon[data-v-44a43d90] {\n\twidth: 100px;\n\theight: 100px;\n}\n\n/* For sub page */\n.disease-systems-sub-pages .disease-systems-tree[data-v-44a43d90] {\n\ttext-align: center;\n\tdisplay: block;\n\twidth: 100%;\n\tcolor: #fff;\n\tmargin-top: 10px;\n\tposition: relative;\n}\n.disease-systems-sub-pages .disease-system[data-v-44a43d90] {\n\twidth: 100px;\n\ttext-align: center;\n\tfont-size: 14px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tmargin: 0 10px 0px 10px;\n}\n.disease-systems-sub-pages .disease-systems-icon[data-v-44a43d90] {\n\twidth: 40px;\n\theight: 40px;\n}\n\n/* for options part */\n.disease-system-options[data-v-44a43d90] {\n\tvisibility: hidden;\n\tcolor: #000;\n\ttext-align: left;\n\tposition: absolute;\n\twidth: 400px;\n\theight: auto;\n\tborder-radius: 5px;\n\tbackground-color: #fff;\n\tz-index: 100;\n\ttop: 100px;\n\tleft: -140px;\n\tpadding: 15px;\n\t-webkit-box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.2);\n\t        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.2);\n}\n.disease-system:hover > .disease-system-options[data-v-44a43d90] {\n\tvisibility: visible;\n}\ndiv.disease-name[data-v-44a43d90] {\n\tpadding-left: 5px;\n\tfont-size: 14px;\n}\n.community-portal[data-v-44a43d90] {\n\tmargin-bottom: 10px;\n\tpadding-left: 5px;\n}\n.community-portal img[data-v-44a43d90] {\n\theight: 40px !important;\n\twidth: auto !important;\n}\n.number-of-phenotypes[data-v-44a43d90] {\n\tfont-size: 12px;\n\tfloat: left;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tooltip[data-v-38e80c8c] {\n    display: block !important;\n    z-index: 10000;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tooltip[data-v-318d8442] {\n    display: block !important;\n    z-index: 10000;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.disease-in-session[data-v-ad84f3a8] {\n    color: #fff;\n    margin-left: 10px;\n    vertical-align: -4px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(/css/tooltipDocumentation.css);"]);
// Module
exports.push([module.i, "\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(/css/404.css);"]);
// Module
exports.push([module.i, "\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("312057fc", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("eba577fe", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("27c572cd", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0b905bbc", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("14f4cc6a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=style&index=0&id=2191242b&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("383086db", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/Alert.vue":
/*!**********************************!*\
  !*** ./src/components/Alert.vue ***!
  \**********************************/
/*! exports provided: postAlert, postAlertError, postAlertNotice, closeAlert, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_d0c93148__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=d0c93148 */ "./src/components/Alert.vue?vue&type=template&id=d0c93148");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js */ "./src/components/Alert.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAlert", function() { return _Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["postAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAlertError", function() { return _Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["postAlertError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAlertNotice", function() { return _Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["postAlertNotice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeAlert", function() { return _Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["closeAlert"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_d0c93148__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_d0c93148__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Alert.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/Alert.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default, postAlert, postAlertError, postAlertNotice, closeAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Alert.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAlert", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["postAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAlertError", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["postAlertError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postAlertNotice", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["postAlertNotice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeAlert", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["closeAlert"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Alert.vue?vue&type=template&id=d0c93148":
/*!****************************************************************!*\
  !*** ./src/components/Alert.vue?vue&type=template&id=d0c93148 ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_d0c93148__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=d0c93148 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Alert.vue?vue&type=template&id=d0c93148");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_d0c93148__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_d0c93148__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/DiseaseSystems.vue":
/*!*******************************************!*\
  !*** ./src/components/DiseaseSystems.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiseaseSystems_vue_vue_type_template_id_44a43d90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true */ "./src/components/DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true");
/* harmony import */ var _DiseaseSystems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiseaseSystems.vue?vue&type=script&lang=js */ "./src/components/DiseaseSystems.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _DiseaseSystems_vue_vue_type_style_index_0_id_44a43d90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css */ "./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DiseaseSystems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiseaseSystems_vue_vue_type_template_id_44a43d90_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiseaseSystems_vue_vue_type_template_id_44a43d90_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44a43d90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DiseaseSystems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DiseaseSystems.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/DiseaseSystems.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DiseaseSystems.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_style_index_0_id_44a43d90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=style&index=0&id=44a43d90&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_style_index_0_id_44a43d90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_style_index_0_id_44a43d90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_style_index_0_id_44a43d90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_style_index_0_id_44a43d90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/components/DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_template_id_44a43d90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DiseaseSystems.vue?vue&type=template&id=44a43d90&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_template_id_44a43d90_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiseaseSystems_vue_vue_type_template_id_44a43d90_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Documentation.vue":
/*!******************************************!*\
  !*** ./src/components/Documentation.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documentation_vue_vue_type_template_id_38e80c8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documentation.vue?vue&type=template&id=38e80c8c&scoped=true */ "./src/components/Documentation.vue?vue&type=template&id=38e80c8c&scoped=true");
/* harmony import */ var _Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documentation.vue?vue&type=script&lang=js */ "./src/components/Documentation.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Documentation_vue_vue_type_style_index_0_id_38e80c8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css */ "./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documentation_vue_vue_type_template_id_38e80c8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documentation_vue_vue_type_template_id_38e80c8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38e80c8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Documentation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Documentation.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/Documentation.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Documentation.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_style_index_0_id_38e80c8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=style&index=0&id=38e80c8c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_style_index_0_id_38e80c8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_style_index_0_id_38e80c8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_style_index_0_id_38e80c8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_style_index_0_id_38e80c8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/Documentation.vue?vue&type=template&id=38e80c8c&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/Documentation.vue?vue&type=template&id=38e80c8c&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_template_id_38e80c8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Documentation.vue?vue&type=template&id=38e80c8c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Documentation.vue?vue&type=template&id=38e80c8c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_template_id_38e80c8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_template_id_38e80c8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/MenuItem.vue":
/*!*************************************!*\
  !*** ./src/components/MenuItem.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItem_vue_vue_type_template_id_318d8442_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=template&id=318d8442&scoped=true */ "./src/components/MenuItem.vue?vue&type=template&id=318d8442&scoped=true");
/* harmony import */ var _MenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=script&lang=js */ "./src/components/MenuItem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuItem_vue_vue_type_style_index_0_id_318d8442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css */ "./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuItem_vue_vue_type_template_id_318d8442_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuItem_vue_vue_type_template_id_318d8442_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "318d8442",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MenuItem.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/MenuItem.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css":
/*!*********************************************************************************************!*\
  !*** ./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_318d8442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=style&index=0&id=318d8442&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_318d8442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_318d8442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_318d8442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_318d8442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/MenuItem.vue?vue&type=template&id=318d8442&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/components/MenuItem.vue?vue&type=template&id=318d8442&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_318d8442_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./MenuItem.vue?vue&type=template&id=318d8442&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuItem.vue?vue&type=template&id=318d8442&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_318d8442_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_318d8442_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/PageFooter.vue":
/*!***************************************!*\
  !*** ./src/components/PageFooter.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageFooter_vue_vue_type_template_id_efe9bb8c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageFooter.vue?vue&type=template&id=efe9bb8c */ "./src/components/PageFooter.vue?vue&type=template&id=efe9bb8c");
/* harmony import */ var _PageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageFooter.vue?vue&type=script&lang=js */ "./src/components/PageFooter.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageFooter_vue_vue_type_template_id_efe9bb8c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageFooter_vue_vue_type_template_id_efe9bb8c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/PageFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/PageFooter.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/PageFooter.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PageFooter.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageFooter.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/PageFooter.vue?vue&type=template&id=efe9bb8c":
/*!*********************************************************************!*\
  !*** ./src/components/PageFooter.vue?vue&type=template&id=efe9bb8c ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_efe9bb8c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PageFooter.vue?vue&type=template&id=efe9bb8c */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageFooter.vue?vue&type=template&id=efe9bb8c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_efe9bb8c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_efe9bb8c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/PageHeader.vue":
/*!***************************************!*\
  !*** ./src/components/PageHeader.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_ad84f3a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true */ "./src/components/PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js */ "./src/components/PageHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _PageHeader_vue_vue_type_style_index_0_id_ad84f3a8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css */ "./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_ad84f3a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageHeader_vue_vue_type_template_id_ad84f3a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad84f3a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/PageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/PageHeader.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/PageHeader.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css":
/*!***********************************************************************************************!*\
  !*** ./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_ad84f3a8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=style&index=0&id=ad84f3a8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_ad84f3a8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_ad84f3a8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_ad84f3a8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_ad84f3a8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_ad84f3a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PageHeader.vue?vue&type=template&id=ad84f3a8&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_ad84f3a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_ad84f3a8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/PhenotypeSelectPicker.vue":
/*!**************************************************!*\
  !*** ./src/components/PhenotypeSelectPicker.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhenotypeSelectPicker_vue_vue_type_template_id_419727f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhenotypeSelectPicker.vue?vue&type=template&id=419727f2 */ "./src/components/PhenotypeSelectPicker.vue?vue&type=template&id=419727f2");
/* harmony import */ var _PhenotypeSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhenotypeSelectPicker.vue?vue&type=script&lang=js */ "./src/components/PhenotypeSelectPicker.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhenotypeSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhenotypeSelectPicker_vue_vue_type_template_id_419727f2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhenotypeSelectPicker_vue_vue_type_template_id_419727f2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/PhenotypeSelectPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/PhenotypeSelectPicker.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/PhenotypeSelectPicker.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhenotypeSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PhenotypeSelectPicker.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PhenotypeSelectPicker.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhenotypeSelectPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/PhenotypeSelectPicker.vue?vue&type=template&id=419727f2":
/*!********************************************************************************!*\
  !*** ./src/components/PhenotypeSelectPicker.vue?vue&type=template&id=419727f2 ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhenotypeSelectPicker_vue_vue_type_template_id_419727f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./PhenotypeSelectPicker.vue?vue&type=template&id=419727f2 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PhenotypeSelectPicker.vue?vue&type=template&id=419727f2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhenotypeSelectPicker_vue_vue_type_template_id_419727f2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhenotypeSelectPicker_vue_vue_type_template_id_419727f2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TooltipDocumentation.vue":
/*!*************************************************!*\
  !*** ./src/components/TooltipDocumentation.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TooltipDocumentation_vue_vue_type_template_id_44aa8827__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TooltipDocumentation.vue?vue&type=template&id=44aa8827 */ "./src/components/TooltipDocumentation.vue?vue&type=template&id=44aa8827");
/* harmony import */ var _TooltipDocumentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TooltipDocumentation.vue?vue&type=script&lang=js */ "./src/components/TooltipDocumentation.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _TooltipDocumentation_vue_vue_type_style_index_0_id_44aa8827_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css */ "./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TooltipDocumentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TooltipDocumentation_vue_vue_type_template_id_44aa8827__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TooltipDocumentation_vue_vue_type_template_id_44aa8827__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TooltipDocumentation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TooltipDocumentation.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/components/TooltipDocumentation.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TooltipDocumentation.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css":
/*!*********************************************************************************************!*\
  !*** ./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_style_index_0_id_44aa8827_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=style&index=0&id=44aa8827&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_style_index_0_id_44aa8827_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_style_index_0_id_44aa8827_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_style_index_0_id_44aa8827_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_style_index_0_id_44aa8827_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/TooltipDocumentation.vue?vue&type=template&id=44aa8827":
/*!*******************************************************************************!*\
  !*** ./src/components/TooltipDocumentation.vue?vue&type=template&id=44aa8827 ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_template_id_44aa8827__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./TooltipDocumentation.vue?vue&type=template&id=44aa8827 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TooltipDocumentation.vue?vue&type=template&id=44aa8827");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_template_id_44aa8827__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipDocumentation_vue_vue_type_template_id_44aa8827__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/analytics/GoogleAnalytics4.vue":
/*!*******************************************************!*\
  !*** ./src/components/analytics/GoogleAnalytics4.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleAnalytics4_vue_vue_type_template_id_542d4bc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleAnalytics4.vue?vue&type=template&id=542d4bc0 */ "./src/components/analytics/GoogleAnalytics4.vue?vue&type=template&id=542d4bc0");
/* harmony import */ var _GoogleAnalytics4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleAnalytics4.vue?vue&type=script&lang=js */ "./src/components/analytics/GoogleAnalytics4.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoogleAnalytics4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleAnalytics4_vue_vue_type_template_id_542d4bc0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleAnalytics4_vue_vue_type_template_id_542d4bc0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/analytics/GoogleAnalytics4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/analytics/GoogleAnalytics4.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/components/analytics/GoogleAnalytics4.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleAnalytics4.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/analytics/GoogleAnalytics4.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/analytics/GoogleAnalytics4.vue?vue&type=template&id=542d4bc0":
/*!*************************************************************************************!*\
  !*** ./src/components/analytics/GoogleAnalytics4.vue?vue&type=template&id=542d4bc0 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics4_vue_vue_type_template_id_542d4bc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleAnalytics4.vue?vue&type=template&id=542d4bc0 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/analytics/GoogleAnalytics4.vue?vue&type=template&id=542d4bc0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics4_vue_vue_type_template_id_542d4bc0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics4_vue_vue_type_template_id_542d4bc0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/mixins/pageMixin.js":
/*!*********************************!*\
  !*** ./src/mixins/pageMixin.js ***!
  \*********************************/
/*! exports provided: pageMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageMixin", function() { return pageMixin; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PageHeader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageHeader.vue */ "./src/components/PageHeader.vue");
/* harmony import */ var _components_PageFooter_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PageFooter.vue */ "./src/components/PageFooter.vue");
/* harmony import */ var _components_Documentation_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Documentation.vue */ "./src/components/Documentation.vue");
/* harmony import */ var _components_TooltipDocumentation_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/TooltipDocumentation.vue */ "./src/components/TooltipDocumentation.vue");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Alert */ "./src/components/Alert.vue");










vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BootstrapVue"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BootstrapVueIcons"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].config.productionTip = false;
var pageMixin = {
  components: {
    PageHeader: _components_PageHeader_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    PageFooter: _components_PageFooter_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Alert: _components_Alert__WEBPACK_IMPORTED_MODULE_9__["default"],
    Documentation: _components_Documentation_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    TooltipDocumentation: _components_TooltipDocumentation_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  computed: {
    deployment: function deployment() {
      return "development" || false;
    },
    frontContents: function frontContents() {
      var contents = this.$store.state.kp4cd.frontContents;
      if (contents.length === 0) {
        return {};
      }
      return contents[0];
    },
    diseaseGroup: function diseaseGroup() {
      return this.$store.getters["bioPortal/diseaseGroup"] || {};
    }
  },
  watch: {
    diseaseGroup: function diseaseGroup(group) {
      this.$store.dispatch("kp4cd/getFrontContents", group.name);
    }
  },
  methods: {
    postAlert: _components_Alert__WEBPACK_IMPORTED_MODULE_9__["postAlert"],
    postAlertNotice: _components_Alert__WEBPACK_IMPORTED_MODULE_9__["postAlertNotice"],
    postAlertError: _components_Alert__WEBPACK_IMPORTED_MODULE_9__["postAlertError"],
    closeAlert: _components_Alert__WEBPACK_IMPORTED_MODULE_9__["closeAlert"]
  }
};

/***/ }),

/***/ "./src/mixins/userMixin.js":
/*!*********************************!*\
  !*** ./src/mixins/userMixin.js ***!
  \*********************************/
/*! exports provided: userMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userMixin", function() { return userMixin; });
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-cookies */ "./node_modules/vue-cookies/vue-cookies.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_hostUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/hostUtils */ "./src/utils/hostUtils.js");
/* harmony import */ var _utils_gaUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/gaUtils */ "./src/utils/gaUtils.js");






vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_cookies__WEBPACK_IMPORTED_MODULE_3___default.a);
var userMixin = {
  computed: {
    user: function user() {
      return this.$store.state.bioPortal.user;
    }
  },
  methods: {
    saveCurrentPage: function saveCurrentPage() {
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].$cookies.set("whereAmI", location.href, "", "", _utils_hostUtils__WEBPACK_IMPORTED_MODULE_4__["default"].domain);
    },
    loginUser: function loginUser() {
      var _this = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.saveCurrentPage();
              _context.next = 3;
              return _utils_gaUtils__WEBPACK_IMPORTED_MODULE_5__["default"].logPageView(window.location.protocol + '//' + window.location.host + "/login", location.href);
            case 3:
              window.location.href = "/login";
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
};

/***/ }),

/***/ "./src/modules/kp4cd.js":
/*!******************************!*\
  !*** ./src/modules/kp4cd.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * This is the module that is used to pull the news feed for KPN website

 */

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  // initial module state
  state: function state() {
    return {
      newsFeed: [],
      frontContents: [],
      datasetsInfo: [],
      datasetInfo: [],
      pageInfo: [],
      newFeatures: [],
      resources: [],
      researchMethod: [],
      eglSummaries: [],
      eglData: [],
      researchData: [],
      researchDataPage: [],
      eglConfig: [],
      paperMenu: [],
      forestPlotData: {},
      staticContent: [],
      portals: [],
      helpBook: [],
      helpBookSearch: [],
      contentByID: []
    };
  },
  // commit methods
  mutations: {
    setNewsFeed: function setNewsFeed(state, newsFeed) {
      state.newsFeed = newsFeed;
    },
    setFrontContents: function setFrontContents(state, frontContents) {
      state.frontContents = frontContents;
    },
    setDatasetsInfo: function setDatasetsInfo(state, datasetsInfo) {
      state.datasetsInfo = datasetsInfo;
    },
    setDatasetInfo: function setDatasetInfo(state, datasetInfo) {
      state.datasetInfo = datasetInfo;
    },
    setPageInfo: function setPageInfo(state, pageInfo) {
      state.pageInfo = pageInfo;
    },
    setNewFeatures: function setNewFeatures(state, newFeatures) {
      state.newFeatures = newFeatures;
    },
    setResources: function setResources(state, resources) {
      state.resources = resources;
    },
    setEglSummaries: function setEglSummaries(state, eglSummaries) {
      state.eglSummaries = eglSummaries;
    },
    setResearchMethod: function setResearchMethod(state, researchMethod) {
      state.researchMethod = researchMethod;
    },
    setEglData: function setEglData(state, data) {
      state.eglData = data;
    },
    setResearchData: function setResearchData(state, data) {
      state.researchData = data;
    },
    setResearchDataPage: function setResearchDataPage(state, data) {
      state.researchDataPage = data;
    },
    setEglConfig: function setEglConfig(state, config) {
      state.eglConfig = config;
    },
    setForestPlotData: function setForestPlotData(state, data) {
      state.forestPlotData = data;
    },
    setStaticContent: function setStaticContent(state, data) {
      state.staticContent = data;
    },
    setPaperMenu: function setPaperMenu(state, menu) {
      state.paperMenu = menu;
    },
    setPortals: function setPortals(state, portals) {
      state.portals = portals;
    },
    setHelpBook: function setHelpBook(state, book) {
      state.helpBook = book;
    },
    setHelpBookSearch: function setHelpBookSearch(state, searchReturn) {
      state.helpBookSearch = searchReturn;
    },
    setContentByID: function setContentByID(state, content) {
      state.contentByID = content;
    }
  },
  // dispatch methods
  actions: {
    getNewsFeed: function getNewsFeed(context, selectedDiseaseGroup) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var portal, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              portal = selectedDiseaseGroup || "md";
              _context.next = 3;
              return fetch("https://kp4cd.org/rest/views/news2vueportal?portal=" + portal).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context.sent;
              // set the data
              context.commit("setNewsFeed", json);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getFrontContents: function getFrontContents(context, selectedDiseaseGroup) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var portal, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              portal = selectedDiseaseGroup || "md";
              _context2.next = 3;
              return fetch("https://kp4cd.org/reset/views/portal_front?portal=" + portal).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context2.sent;
              // set the data
              context.commit("setFrontContents", json);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getDatasetsInfo: function getDatasetsInfo(context, selectedDiseaseGroup) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var portal, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              portal = selectedDiseaseGroup == "md" ? "" : selectedDiseaseGroup;
              _context3.next = 3;
              return fetch("https://kp4cd.org/rest/views/kpdatasets?portal=" + portal).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context3.sent;
              // set the data
              context.commit("setDatasetsInfo", json);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getDatasetInfo: function getDatasetInfo(context, datasetId) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch("https://kp4cd.org/rest/views/datasetinfo?datasetid=" + datasetId).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context4.sent;
              // set the data
              context.commit("setDatasetInfo", json);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getPageInfo: function getPageInfo(context, query) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee5() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch("https://kp4cd.org/rest/views/" + query.page + "?portal=" + query.portal).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context5.sent;
              // set the data
              context.commit("setPageInfo", json);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    getNewFeatures: function getNewFeatures(context, selectedDiseaseGroup) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee6() {
        var portal, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              portal = selectedDiseaseGroup || "md";
              _context6.next = 3;
              return fetch("https://kp4cd.org/rest/views/newfeatures?portal=" + selectedDiseaseGroup).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context6.sent;
              // set the data
              context.commit("setNewFeatures", json);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    getResources: function getResources(context, selectedDiseaseGroup) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee7() {
        var portal, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              portal = selectedDiseaseGroup || "md";
              _context7.next = 3;
              return fetch("https://kp4cd.org/rest/views/newresources?portal=" + selectedDiseaseGroup).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context7.sent;
              // set the data
              context.commit("setResources", json);
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    getResearchMethod: function getResearchMethod(context, methodFrom) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee8() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return fetch("https://kp4cd.org/rest/views/eglmethod?from=" + methodFrom).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context8.sent;
              // set the data
              context.commit("setResearchMethod", json);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    getEglSummaries: function getEglSummaries(context, selectedDiseaseGroup) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee9() {
        var portal, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              portal = selectedDiseaseGroup || "md";
              _context9.next = 3;
              return fetch("https://kp4cd.org/rest/views/eglmethodsperportal?portal=" + selectedDiseaseGroup).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context9.sent;
              // set the data
              context.commit("setEglSummaries", json);
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    getEglData: function getEglData(context, targetData) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee10() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return fetch("https://kp4cd.org/egldata/dataset?dataset=" + targetData.dataset + "&trait=" + targetData.trait).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context10.sent;
              context.commit("setEglData", json);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    getResearchData: function getResearchData(context, targetDataPoint) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee11() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return fetch(targetDataPoint).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context11.sent;
              context.commit("setResearchData", json);
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    },
    getResearchDataPage: function getResearchDataPage(context, param) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee12() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return fetch("https://kp4cd.org/rest/views/research_data?dataid=" + param.pageID + "&&reviewerid=" + param.reviewerID + "&&reviewercode=" + param.reviewerCode).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context12.sent;
              // set the data
              context.commit("setResearchDataPage", json);
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }))();
    },
    getEglConfig: function getEglConfig(context, targetData) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee13() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return fetch("https://kp4cd.org/egldata/config?dataset=" + targetData.dataset + "&trait=" + targetData.trait).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context13.sent;
              context.commit("setEglConfig", json);
            case 4:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }))();
    },
    getForestPlotData: function getForestPlotData(context) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee14() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return fetch("https://raw.githubusercontent.com/statgen/locuszoom/develop/examples/data/phewas_forest.json").then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context14.sent;
              context.commit("setForestPlotData", json);
            case 4:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }))();
    },
    getStaticContent: function getStaticContent(context, page) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee15() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return fetch("https://kp4cd.org/rest/views/static_content?field_page=" + page).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context15.sent;
              // set the data
              context.commit("setStaticContent", json);
            case 4:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }))();
    },
    getPaperMenu: function getPaperMenu(context, paperPage) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee16() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return fetch("https://kp4cd.org/rest/views/paperheadermenu?paper=" + paperPage).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context16.sent;
              // set the data
              context.commit("setPaperMenu", json);
            case 4:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }))();
    },
    getPortals: function getPortals(context) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee17() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return fetch("https://kp4cd.org/rest/views/a2f_community_kps").then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context17.sent;
              // set the data
              context.commit("setPortals", json);
            case 4:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }))();
    },
    getHelpBook: function getHelpBook(context) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee18() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return fetch("https://kp4cd.org/rest/views/help_book").then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context18.sent;
              // set the data
              context.commit("setHelpBook", json);
            case 4:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }))();
    },
    getContentByID: function getContentByID(context, nid) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee19() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return fetch("https://kp4cd.org/rest/views/content_by_id?nid=" + nid).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context19.sent;
              // set the data
              context.commit("setContentByID", json);
            case 4:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }))();
    },
    getHelpBookSearch: function getHelpBookSearch(context, searchKey) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee20() {
        var json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return fetch("https://kp4cd.org/rest/views/help_book_search?body=" + searchKey).then(function (resp) {
                return resp.json();
              });
            case 2:
              json = _context20.sent;
              // set the data
              context.commit("setHelpBookSearch", json);
            case 4:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }))();
    }
  }
});

/***/ }),

/***/ "./src/utils/documentationUtils.js":
/*!*****************************************!*\
  !*** ./src/utils/documentationUtils.js ***!
  \*****************************************/
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_match_all_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.match-all.js */ "./node_modules/core-js/modules/es.string.match-all.js");
/* harmony import */ var core_js_modules_es_string_match_all_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_all_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_19__);




















function findTemplateTagsFromContent(content) {
  var regexp = /{{([A-Za-z]+)}}/g;

  // we use a slice here because some browsers (firefox) don't support named capture groups in regexp
  // we are able to use a slice here because the structure is always padded by both `{{` and `}}`
  return content ? Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content.matchAll(regexp)).map(function (m) {
    return m[0] ? m[0].slice(2, -2) : "?";
  }) : [];
}
function makeExtensions(contentFill, valid_tags) {
  var replacements = Object.entries(contentFill || {});
  if (!!valid_tags) {
    replacements = replacements.filter(function (fill) {
      return valid_tags.includes(fill[0]);
    });
  }
  return replacements.map(function (filler) {
    return {
      type: "lang",
      regex: "{{".concat(filler[0], "}}"),
      replace: filler[1]
    };
  });
}
function make_name_and_class_extensions(name) {
  var classMap = {
    h1: "doc large-header",
    h2: "doc medium-header",
    h3: "doc small-header",
    h4: "doc x-small-header",
    p: "doc content",
    ul: "doc list",
    li: "doc item",
    em: "doc italic",
    strong: "doc bold",
    a: "doc link"
  };
  var name_and_class_extensions = Object.keys(classMap).map(function (key) {
    return {
      type: "output",
      regex: new RegExp("<".concat(key, "(.*)>"), "g"),
      replace: "<".concat(key, " id=\"").concat(name, "\" class=\"").concat(classMap[key], "\" $1>")
    };
  });
  return name_and_class_extensions;
}
function makeConverter(content, contentFill, name) {
  var valid_tags = findTemplateTagsFromContent(content);
  var fill_extensions = makeExtensions(contentFill, valid_tags);
  var name_and_class_extensions = make_name_and_class_extensions(name);
  var converter = new showdown__WEBPACK_IMPORTED_MODULE_19__["Converter"]({
    extensions: [].concat(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fill_extensions), Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name_and_class_extensions))
  });

  //converter.setOption('openLinksInNewWindow', true);

  return converter;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  makeExtensions: makeExtensions,
  findTemplateTagsFromContent: findTemplateTagsFromContent,
  makeConverter: makeConverter
});

/***/ }),

/***/ "./src/utils/eventBus.js":
/*!*******************************!*\
  !*** ./src/utils/eventBus.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ __webpack_exports__["default"] = (EventBus);

/***/ }),

/***/ "./src/utils/gaUtils.js":
/*!******************************!*\
  !*** ./src/utils/gaUtils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);








// Defined Actions
var GA_TEST_EVENT_ACTION = "Google Analytics Test Action";

// Defined Categories
var GA_TEST_CATEGORY = "Google Analytics Test Category";
var GA_APPLICATION_ERROR_EVENT_CATEGORY = "Application Error";

// Defined Labels
var GA_TEST_LABEL = "Google Analytics Test Label";
var GA_MESSAGE_LABEL = "Message";
var ERROR_ENDPOINT_NAME = 'eventLog';
var EVENT_ENDPOINT_NAME = 'errorLog';

/**
 * Issue an Event Log notification for Google Analytics reporting, to the
 * dig-dug-server endpoint of form '/eventlog?action=<action>&category=<category>&label=<label>&value=<value>'
 *
 * For information about Event data, see
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 *
 * TODO: this function should capture the local portal page context of the event for forwarding to the /eventlog service
 *
 * @param {string} [category] - typically the object that was interacted with (e.g. 'Video'), independent reporting tag
 * @param {string} [action] - The type of interaction (e.g. 'play'), independent reporting tag
 * @param {string} [label] - (Optional) Useful for categorizing events (e.g. 'Fall Campaign'), independent reporting tag
 * @param {number} [value] - (Optional) A numeric value associated with the event (e.g. 42, a timestamp, etc.)
 * @return null
 * @public
 */
var logAnalyticsEvent = /*#__PURE__*/function () {
  var _ref = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(category, action, params) {
    var qs;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          qs = query_string__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            action: action,
            category: category
          }, params), {
            skipNull: true
          });
          _context.next = 3;
          return fetch("/eventLog?".concat(qs)).then(function (response) {
            if (response) {
              return response.data;
            } else {
              throw new Error("Unknown outcome of Google Analytics Events Logging?");
            }
          }).catch(function (error) {
            console.log(error);
          });
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function logAnalyticsEvent(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Issue an Application Error Event Log notification for Google Analytics (GA) reporting, to the server.
 * The "context" of the event specifies the GA event "category" and the message is sent as the
 * GA event value for a hard coded label "message".
 * TODO: need to further disambiguate the semantics of 'context' and 'page'; 'page' not currently used in logErrorEvent
 *
 * @param {string} [context]
 * @param {string} [message]
 * @return null
 * @public
 */
var logErrorEvent = /*#__PURE__*/function () {
  var _ref2 = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(context, message, page) {
    var params;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          params = {
            page: page,
            label: message
          };
          logAnalyticsEvent(GA_APPLICATION_ERROR_EVENT_CATEGORY, context, params);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function logErrorEvent(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Issue an Pageview notification for Google Analytics (GA) reporting, to the server.
 * `URI` is passed in by whoever is logging the pageview. Should usually be equal to whatever `window.location.href` returns.
 *
 * @param {string} [currentPage]
 * @param {string} [previousPage]
 * @return null
 * @public
 */
var logPageView = /*#__PURE__*/function () {
  var _ref3 = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3(currentPage, previousPage) {
    var qs;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          qs = query_string__WEBPACK_IMPORTED_MODULE_6___default.a.stringify({
            currentPage: currentPage,
            previousPage: previousPage
          }, {
            skipNull: true
          });
          _context3.next = 3;
          return fetch("/pageview", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              currentPage: currentPage,
              previousPage: previousPage
            })
          }).then(function (response) {
            if (response) {
              return response.data;
            } else {
              throw new Error("Unknown outcome of Google Analytics Pageview Logging?");
            }
          }).catch(function (error) {
            console.log(error);
          });
        case 3:
          return _context3.abrupt("return", _context3.sent);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function logPageView(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = ({
  logAnalyticsEvent: logAnalyticsEvent,
  logErrorEvent: logErrorEvent,
  logPageView: logPageView
});

/***/ }),

/***/ "./src/utils/idCounter.js":
/*!********************************!*\
  !*** ./src/utils/idCounter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

var COUNTER_ID = 1;
/* harmony default export */ __webpack_exports__["default"] = ({
  getUniqueId: function getUniqueId(prefix) {
    var id = "".concat(!!prefix ? prefix : "", "_").concat(Date.now(), "_").concat(COUNTER_ID);
    COUNTER_ID += 1;
    return id;
  }
});

/***/ }),

/***/ "./src/utils/sessionUtils.js":
/*!***********************************!*\
  !*** ./src/utils/sessionUtils.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array-buffer.detached.js */ "./node_modules/core-js/modules/es.array-buffer.detached.js");
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer.js */ "./node_modules/core-js/modules/es.array-buffer.transfer.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer-to-fixed-length.js */ "./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint16-array.js */ "./node_modules/core-js/modules/es.typed-array.uint16-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ "./node_modules/core-js/modules/es.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ "./node_modules/core-js/modules/es.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ "./node_modules/core-js/modules/es.typed-array.with.js");
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_44__);













































var generate = function generate() {
  var sessionId = fourHexDigits(new Date().getTime() % 65536) + fourHexDigits(window.crypto.getRandomValues(new Uint16Array(1))[0]);
  //this.setSessionId(sessionId, false);
  return sessionId;
};
var fourHexDigits = function fourHexDigits(num) {
  return ("000" + num.toString(16)).slice(-4);
};
var getInSession = function getInSession(RAW, INSESSION, COLUMN) {
  var inSessionPhs = INSESSION.map(function (p) {
    return p.name;
  });
  var newData = [];
  RAW.map(function (d) {
    if (inSessionPhs.includes(d[COLUMN])) {
      newData.push(d);
    }
  });
  return newData;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  generate: generate,
  getInSession: getInSession
});

/***/ }),

/***/ "./src/utils/sortUtils.js":
/*!********************************!*\
  !*** ./src/utils/sortUtils.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.iterator.reduce.js */ "./node_modules/core-js/modules/es.iterator.reduce.js");
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);



















var sort = function sort(data, key, isNumeric, isAscending) {
  return data.sort(function (a, b) {
    var x = isNumeric ? a[key] : a[key].toLowerCase();
    var y = isNumeric ? b[key] : b[key].toLowerCase();
    if (isNumeric) {
      if (typeof x == 'string') {
        x = Number(x.replace(/\,/g, ""));
      }
      if (typeof y == 'string') {
        y = Number(y.replace(/\,/g, ""));
      }
    }
    if (isAscending) {
      return x < y ? -1 : x > y ? 1 : 0;
    } else {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
};
var sortEGLTableData = function sortEGLTableData(data, key, isNumeric, isAscending) {
  var direction = isAscending ? "asc" : "desc";
  if (isNumeric) {
    return sortArrOfObjects(data, key, 'number', direction);
  } else {
    var withNumbers = [];
    var withStrings = [];
    var withNoValue = [];
    data.map(function (d) {
      if (!d[key]) {
        withNoValue.push(d);
      } else {
        // console.log("d[key]: ", d[key], typeof d[key])
        if (typeof d[key] == "number" || d[key] === 0) {
          withNumbers.push(d);
        } else if (typeof d[key] == "string") {
          withStrings.push(d);
        }
      }
    });
    var wNumbersSorted = sortArrOfObjects(withNumbers, key, 'number', direction);
    var wStringsSorted = sortArrOfObjects(withStrings, key, 'alphabetical', direction);
    if (direction == "asc") {
      return wNumbersSorted.concat(wStringsSorted).concat(withNoValue);
    } else {
      return wStringsSorted.concat(wNumbersSorted).concat(withNoValue);
    }
  }
};
var sortLocusField = function sortLocusField(data, key, isAscending) {
  var direction = isAscending ? "asc" : "desc";
  data.map(function (g) {
    var locusArr = g[key].split(":");
    var chrNum = locusArr[0].trim();
    var bpNum;
    if (!!locusArr[1]) {
      bpNum = locusArr[1].includes("-") == true ? (Number(locusArr[1].split("-")[0].trim()) + Number(locusArr[1].split("-")[1].trim())) / 2 : Number(locusArr[1]);
    } else {
      bpNum = 0;
    }
    g["chr"] = chrNum != "X" && chrNum != "Y" ? Number(chrNum) : chrNum == "X" ? 23 : 24;
    g["bp"] = bpNum;
  });
  sortEGLTableData(data, "bp", true, direction);
  sortEGLTableData(data, "chr", true, direction);
  return data;
};
var uniqBy = function uniqBy(arr, predicate) {
  var cb = typeof predicate === 'function' ? predicate : function (o) {
    return o[predicate];
  };
  return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr.reduce(function (map, item) {
    var key = item === null || item === undefined ? item : cb(item);
    map.has(key) || map.set(key, item);
    return map;
  }, new Map()).values());
};

/// Sort array of objects by a property (data, property, sorting value type, direction)
var sortArrOfObjects = function sortArrOfObjects(DATA, PRPT, TYPE, DIRECTION) {
  var sorted;
  if (TYPE == 'number') {
    sorted = DIRECTION == "asc" ? DATA.sort(function (a, b) {
      return a[PRPT] - b[PRPT];
    }) : DATA.sort(function (a, b) {
      return b[PRPT] - a[PRPT];
    });
  }
  if (TYPE == 'alphabetical') {
    sorted = DIRECTION == "asc" ? DATA.sort(function (a, b) {
      return a[PRPT] > b[PRPT] ? 1 : b[PRPT] > a[PRPT] ? -1 : 0;
    }) : DATA.sort(function (a, b) {
      return a[PRPT] < b[PRPT] ? 1 : b[PRPT] < a[PRPT] ? -1 : 0;
    });
  }
  return sorted;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  sort: sort,
  sortEGLTableData: sortEGLTableData,
  sortLocusField: sortLocusField,
  uniqBy: uniqBy,
  sortArrOfObjects: sortArrOfObjects
});

/***/ }),

/***/ "./src/utils/userUtils.js":
/*!********************************!*\
  !*** ./src/utils/userUtils.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);






// Utility functions for custom user data

//function to save custom phenotype list for user
function savePhenotypes(phenotypes) {
  localStorage.setItem("_phenotypes", JSON.stringify(phenotypes));
}

//function to get custom phenotype list for user
function getPhenotypes() {
  return JSON.parse(localStorage.getItem("_phenotypes"));
}

//function to clear custom phenotype list for user
function clearPhenotypes() {
  localStorage.removeItem("_phenotypes");
}

//function to add a phenotype to the custom phenotype list for user
//phenotype: object with name and id
function addPhenotype(phenotype) {
  if (!!phenotype) {
    //check if phenotype have name and id
    if (!phenotype.name || !phenotype.id) {
      console.error("Phenotype input is missing name or id");
      return;
    }
    var phenotypes = getPhenotypes();
    if (phenotypes === null) {
      phenotypes = [];
    }
    var index = phenotypes.findIndex(function (p) {
      return p.id === phenotype.id;
    });
    if (index === -1) {
      phenotypes.push(phenotype);
      savePhenotypes(phenotypes);
    } else {
      console.error("Phenotype already exists");
    }
  } else {
    console.error("Phenotype is null");
    return;
  }
}

//function to remove a phenotype from the custom phenotype list for user
//phenotype: object with name and id
function removePhenotype(phenotype) {
  if (!!phenotype) {
    var phenotypes = getPhenotypes();
    if (phenotypes === null) {
      phenotypes = [];
    }
    var index = phenotypes.findIndex(function (p) {
      return p.id === phenotype.id;
    });
    if (index > -1) {
      phenotypes.splice(index, 1);
      savePhenotypes(phenotypes);
    }
  } else {
    console.error("Phenotype is null");
    return;
  }
}
function saveContext(GROUP, context) {
  console.log(GROUP, context);
  localStorage.setItem(GROUP, JSON.stringify(context));
}
function getContext(GROUP) {
  console.log(GROUP);
  return JSON.parse(localStorage.getItem(GROUP));
}
function clearContext(GROUP) {
  console.log(GROUP);
  localStorage.removeItem(GROUP);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  savePhenotypes: savePhenotypes,
  getPhenotypes: getPhenotypes,
  clearPhenotypes: clearPhenotypes,
  addPhenotype: addPhenotype,
  removePhenotype: removePhenotype,
  saveContext: saveContext,
  getContext: getContext,
  clearContext: clearContext
});

/***/ }),

/***/ "./src/views/404/Template.vue":
/*!************************************!*\
  !*** ./src/views/404/Template.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Template_vue_vue_type_template_id_2191242b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template.vue?vue&type=template&id=2191242b */ "./src/views/404/Template.vue?vue&type=template&id=2191242b");
/* harmony import */ var _Template_vue_vue_type_style_index_0_id_2191242b_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template.vue?vue&type=style&index=0&id=2191242b&lang=css */ "./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _Template_vue_vue_type_template_id_2191242b__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Template_vue_vue_type_template_id_2191242b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/404/Template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css":
/*!********************************************************************************!*\
  !*** ./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_2191242b_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=style&index=0&id=2191242b&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404/Template.vue?vue&type=style&index=0&id=2191242b&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_2191242b_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_2191242b_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_2191242b_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_2191242b_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/404/Template.vue?vue&type=template&id=2191242b":
/*!******************************************************************!*\
  !*** ./src/views/404/Template.vue?vue&type=template&id=2191242b ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_2191242b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=template&id=2191242b */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/404/Template.vue?vue&type=template&id=2191242b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_2191242b__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_2191242b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/404/main.js":
/*!*******************************!*\
  !*** ./src/views/404/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.iterator.find.js */ "./node_modules/core-js/modules/es.iterator.find.js");
/* harmony import */ var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Template_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Template.vue */ "./src/views/404/Template.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store.js */ "./src/views/404/store.js");
/* harmony import */ var _mixins_pageMixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/mixins/pageMixin */ "./src/mixins/pageMixin.js");












vue__WEBPACK_IMPORTED_MODULE_8__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_8__["default"]({
  store: _store_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  mixins: [_mixins_pageMixin__WEBPACK_IMPORTED_MODULE_11__["pageMixin"]],
  created: function created() {
    //get links for redirects
    this.$store.dispatch("bioPortal/getLinks");

    // get the disease group and set of phenotypes available
    this.$store.dispatch("bioPortal/getDiseaseGroups");
  },
  render: function render(createElement) {
    return createElement(_Template_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
  },
  computed: {
    currentPath: function currentPath() {
      return window.location.pathname;
    },
    links: function links() {
      return this.$store.state.bioPortal.links;
    },
    redirectLink: function redirectLink() {
      if (this.links) {
        var oldLink = this.currentPath;
        var foundLink = this.links.find(function (link) {
          return link.path == oldLink;
        });
        if (!!foundLink) {
          return foundLink.redirect;
        }
      }
    }
  },
  watch: {
    redirectLink: function redirectLink(href) {
      if (!!href) {
        window.location.href = href;
      }
    }
  }
}).$mount("#app");

/***/ }),

/***/ "./src/views/404/store.js":
/*!********************************!*\
  !*** ./src/views/404/store.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_bioPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/bioPortal */ "./src/modules/bioPortal.js");
/* harmony import */ var _modules_kp4cd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/kp4cd */ "./src/modules/kp4cd.js");




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    bioPortal: _modules_bioPortal__WEBPACK_IMPORTED_MODULE_2__["default"],
    kp4cd: _modules_kp4cd__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}));

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./src/views/404/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/dig-dug-portal/dig-dug-portal/src/views/404/main.js */"./src/views/404/main.js");


/***/ })

/******/ });
//# sourceMappingURL=page404.js.map