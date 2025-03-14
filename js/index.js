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
/******/ 		"index": 0
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
/******/ 	deferredModules.push([0,"chunk-vendors","chunk-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _components_researchPortal_vectorPlots_ResearchBarPlotVector_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue */ "./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue");














vue__WEBPACK_IMPORTED_MODULE_9__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BootstrapVueIcons"]);

/* Example config:
{
  "is multi section": "true",
  "sections": [
    {
      "section id": "plotTest",
      "header": "Bar in cell plot test",
      "data point": {
        "type": "api",
        "url": "https://hugeampkpncms.org/rest/directcsv?id=sysbio_program_x_tissue",
        "data type": "csv",
        "data wrapper": [
          0,
          "field_data_points"
        ]
      },
      "visualizer": {
        "type": "bar in cell plot",
        "label": "Plot name",
        "x axis field": "Tissue Type",
        "y axis field": "Program",
        "bars in cell": [
          {
            "field": "Number of Control",
            "color": "#ff0000",
            "value type": "number"
          },
          {
            "field": "Number of Treatment",
            "color": "#0000ff",
            "value type": "number"
          },
          {
            "field": "Assay Type",
            "color": "#666666",
            "value type": "string"
          }
        ],
        "bar width": 100,
        "bar height": 20,
        "plot margin": {
          "left": 270,
          "right": 30,
          "top": 50,
          "bottom": 40,
          "bump": 10
        }
      }
    }
  ]
}

*/

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_9__["default"].component("research-bar-in-cell-plot", {
  props: ["canvasId", "plotData", "plotConfig", "plotMargin", "utils"],
  data: function data() {
    return {
      barData: null,
      barPosData: {},
      spaceBy: 7,
      trigger: 0,
      hoverItems: {},
      showCanvas: true
    };
  },
  modules: {},
  components: {
    barPlotVector: _components_researchPortal_vectorPlots_ResearchBarPlotVector_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  created: function created() {
    this.renderPlot();
  },
  mounted: function mounted() {
    window.addEventListener("resize", this.onResize);
    this.renderPlot();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    adjPlotMargin: function adjPlotMargin() {
      var customPlotMargin = !!this.plotConfig["plot margin"] ? this.plotConfig["plot margin"] : null;
      var plotMargin = !!customPlotMargin ? {
        left: customPlotMargin.left,
        right: customPlotMargin.right,
        top: customPlotMargin.top,
        bottom: customPlotMargin.bottom,
        bump: !!customPlotMargin.bump ? customPlotMargin.bump : 10
      } : {
        left: this.plotMargin.leftMargin,
        right: this.plotMargin.rightMargin,
        top: this.plotMargin.topMargin,
        bottom: this.plotMargin.bottomMargin,
        bump: this.plotMargin.bump
      };
      return plotMargin;
    },
    plotGroups: function plotGroups() {
      var plotGroups = {
        xAxis: [],
        yAxis: [],
        barFields: {},
        barFieldsType: {},
        max: null,
        min: null
      };
      var xAxis = this.plotConfig["x axis field"];
      var yAxis = this.plotConfig["y axis field"];
      var barFields = this.plotConfig["bars in cell"];
      var _iterator = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(barFields),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var obj = _step.value;
          plotGroups.barFields[obj['field']] = obj['color'];
          plotGroups.barFieldsType[obj['field']] = obj['value type'];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.plotData.map(function (item) {
        if (!!item[xAxis]) {
          if (!plotGroups.xAxis.includes(item[xAxis])) plotGroups.xAxis.push(item[xAxis]);
        }
        if (!!item[yAxis]) {
          if (!plotGroups.yAxis.includes(item[yAxis])) plotGroups.yAxis.push(item[yAxis]);
        }
        Object.keys(plotGroups.barFields).map(function (field) {
          var fValue = item[field];
          plotGroups.max = !fValue ? plotGroups.max : !plotGroups.max || plotGroups.max < fValue ? fValue : plotGroups.max;
          plotGroups.min = !fValue ? plotGroups.min : !plotGroups.min || plotGroups.min > fValue ? fValue : plotGroups.min;
        });
      });
      plotGroups.min = plotGroups.min > 0 ? 0 : plotGroups.min;
      return plotGroups;
    },
    renderData: function renderData() {
      return this.plotData;
    }
  },
  watch: {
    renderData: function renderData(content) {
      this.renderPlot();
    }
  },
  methods: {
    onResize: function onResize() {
      this.renderPlot();
    },
    renderPlot: function renderPlot() {
      var wrapper = document.querySelector("#" + this.canvasId + "barInCellPlotWrapper");
      var canvas = document.querySelector("#" + this.canvasId + "barInCellPlot");
      var margin = this.adjPlotMargin;
      var groups = this.plotGroups;
      var config = this.plotConfig;
      var barWidth = config['bar width'];
      var barHeight = config['bar height'];
      var columnWidth = barWidth * Object.keys(groups.barFields).length + margin.bump;
      var columnHeight = barHeight + margin.bump;
      var xPixel = barWidth / groups.max;
      var xPosStart = margin.left * 2 + margin.bump;
      var yPosStart = margin.top * 2 + margin.bump;
      if (!!canvas && !!wrapper) {
        var canvasWidth = (margin.left + margin.right + groups.xAxis.length * columnWidth) * 2;
        var canvasHeight = (margin.top + margin.bottom + groups.yAxis.length * columnHeight) * 2;
        var ctx;
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        canvas.setAttribute("style", "width:" + canvasWidth / 2 + "px;height:" + canvasHeight / 2 + "px;");
        ctx = canvas.getContext("2d");
        var getWidth = function getWidth(text, fontSize, fontFace) {
          ctx.font = fontSize + 'px ' + fontFace;
          return ctx.measureText(text).width;
        };
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        this.barPosData = {};

        /// render legends

        var legendXpos = margin.bump * 2;
        Object.keys(groups.barFields).map(function (bar) {
          ctx.fillStyle = groups.barFields[bar];
          ctx.fillRect(legendXpos, margin.bump * 2, 24, 24);
          legendXpos += 24 + margin.bump;
          ctx.textAlign = "start";
          ctx.font = "26px Arial";
          ctx.fillStyle = "#000000";
          ctx.fillText(bar, legendXpos, margin.bump * 2 + 24);
          legendXpos += getWidth(bar, 26, "Arial") + margin.bump * 2;
        });

        /// first render y axis labels

        ctx.font = "26px Arial";
        ctx.fillStyle = "#000000";
        groups.yAxis.map(function (label, labelIndex) {
          var yPos = yPosStart + columnHeight * 2 * labelIndex;
          ctx.textAlign = "end";
          ctx.fillText(label, margin.left * 2 - margin.bump / 2, yPos + (barHeight * 2 - margin.bump));
          ctx.moveTo(xPosStart - margin.bump / 2 + columnWidth * 2 * labelIndex, yPosStart - margin.bump / 2);
          ctx.lineTo(xPosStart - margin.bump / 2 + columnWidth * 2 * labelIndex, yPosStart + (groups.yAxis.length * (columnHeight * 2) - margin.bump / 2));
          ctx.strokeStyle = "#666666";
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        /// then render x axis labels

        groups.xAxis.map(function (label, labelIndex) {
          ctx.textAlign = "center";
          ctx.fillText(label, margin.left * 2 + columnWidth * 2 * (labelIndex + 1) - columnWidth, margin.top * 2 - margin.bump);
        });
        var maxWidth = xPixel * groups.max * 2;
        groups.xAxis.map(function (x, xIndex) {
          groups.yAxis.map(function (y, yIndex) {
            Object.keys(groups.barFields).map(function (bar, barIndex) {
              var yPos = yPosStart + columnHeight * 2 * yIndex,
                xPos = xPosStart + columnWidth * 2 * xIndex + barWidth * 2 * barIndex;
              ctx.fillStyle = "#999999";
              ctx.fillRect(xPos, yPos + barHeight, maxWidth, 2);
            });
          });
        });
        this.plotData.map(function (item) {
          var xIndex = groups.xAxis.indexOf(item[config['x axis field']]),
            yIndex = groups.yAxis.indexOf(item[config['y axis field']]);
          Object.keys(groups.barFields).map(function (bar, barIndex) {
            var yPos = yPosStart + columnHeight * 2 * yIndex,
              xPos = xPosStart + columnWidth * 2 * xIndex + barWidth * 2 * barIndex,
              eachBarWidth = xPixel * item[bar] * 2;

            ///first cleanup the bar space
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(xPos, yPos, maxWidth, barHeight * 2);
            if (groups.barFieldsType[bar] == "number") {
              ctx.fillStyle = "#eeeeee";
              ctx.fillRect(xPos, yPos, maxWidth, barHeight * 2);
              ctx.fillStyle = groups.barFields[bar];
              ctx.fillRect(xPos, yPos, eachBarWidth, barHeight * 2);
              var valueWidth = getWidth(item[bar], 26, "Arial");
              if (valueWidth + eachBarWidth > maxWidth) {
                ctx.textAlign = "end";
                ctx.fillStyle = "#ffffff";
                ctx.fillText(item[bar], xPos + eachBarWidth - margin.bump, yPos + (barHeight * 2 - margin.bump));
              } else {
                ctx.textAlign = "start";
                ctx.fillStyle = "#000000";
                ctx.fillText(item[bar], xPos + eachBarWidth + margin.bump, yPos + (barHeight * 2 - margin.bump));
              }
            } else if (groups.barFieldsType[bar] == "string") {
              ctx.textAlign = "start";
              ctx.fillStyle = groups.barFields[bar];
              ctx.fillText(item[bar], xPos + margin.bump, yPos + (barHeight * 2 - margin.bump));
            }
          });
        });

        /// render label
        ctx.textAlign = "center";
        ctx.font = "700 30px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText(config.label, canvasWidth / 2, canvasHeight - margin.bump);
      }
    }
  }
}));
jquery__WEBPACK_IMPORTED_MODULE_10___default()(function () {});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.iterator.reduce.js */ "./node_modules/core-js/modules/es.iterator.reduce.js");
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.log10.js */ "./node_modules/core-js/modules/es.math.log10.js");
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
































vue__WEBPACK_IMPORTED_MODULE_27__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_31__["BootstrapVueIcons"]);
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_27__["default"].component("research-bar-plot-vector", {
  props: ["renderData", "renderConfig", "colors", "margin", "sectionId", "utils"],
  data: function data() {
    return {};
  },
  modules: {},
  components: {},
  created: function created() {},
  mounted: function mounted() {
    //this.renderPlot(this.margin)
  },
  beforeDestroy: function beforeDestroy() {},
  computed: {
    canvasId: function canvasId() {
      var canvasId = this.sectionId.replaceAll("_", "-").toLowerCase();
      return canvasId;
    }
  },
  watch: {
    canvasId: function canvasId(ID) {
      //this.renderBarPlot()
    }
  },
  methods: {
    renderPlot: function renderPlot() {
      var _this = this;
      var wrapperClass = ".vector-wrapper-".concat(this.canvasId);
      var bitmapWrapper = document.querySelector("#" + this.sectionId + "barPlotWrapper");
      var margin = {
        left: this.margin.left / 2,
        right: this.margin.right / 2,
        top: this.margin.top / 2,
        bottom: this.margin.bottom / 2,
        bump: this.margin.bump / 2
      };
      var width = !!this.renderConfig['width'] ? this.renderConfig['width'] : bitmapWrapper.clientWidth - (margin.left + margin.right);
      var height = !!this.renderConfig['height'] ? this.renderConfig['height'] - (margin.top + margin.bottom) : 150;
      var svg = d3__WEBPACK_IMPORTED_MODULE_29__["select"](wrapperClass).append("svg").attr("id", "vector_bar_plot_" + this.sectionId).attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      var sumstat = [],
        yField = this.renderConfig['y axis field'],
        groupField = this.renderConfig['group by'],
        renderField = this.renderConfig['render by'];
      var sumstatIndex = 0;
      var _loop = function _loop() {
        var _Object$entries$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        value.map(function (v) {
          var tempObj = {
            key: sumstatIndex,
            value: {}
          };
          tempObj.value['value'] = _this.renderConfig["convert y -log10"] == true || _this.renderConfig["convert y -log10"] == "true" ? -Math.log10(v[yField]) : v[yField];
          tempObj.value['name'] = !!_this.renderConfig["phenotype map"] && _this.renderConfig["phenotype map"] == "kp phenotype map" ? _this.phenotypeMap[v[renderField]]["description"] : v[renderField];
          tempObj.value['group'] = key;
          sumstat.push(tempObj);
          sumstatIndex++;
        });
      };
      for (var _i = 0, _Object$entries = Object.entries(this.renderData); _i < _Object$entries.length; _i++) {
        _loop();
      }
      var yVals = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(sumstat.map(function (d) {
          return d.value.value;
        }))),
        groupVals = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(sumstat.map(function (d) {
          return d.value.group;
        }))),
        colors = this.colors;
      var maxVal = Math.ceil(yVals.reduce(function (prev, next) {
          return prev > next ? prev : next;
        })),
        minVal = Math.floor(yVals.reduce(function (prev, next) {
          return prev < next ? prev : next;
        }));

      //render axis labels

      svg.append("text").attr("x", margin.left + width / 2).attr("y", height + margin.top + margin.bottom - 20).style("font-family", "Arial").style("font-size", 12).style("text-anchor", "middle").text(this.renderConfig['x axis label']);
      svg.append("text").attr("transform", function (d) {
        return "translate(20," + (margin.top + height / 2) + ")rotate(-90)";
      }).attr("x", 0).attr("y", 0).style("font-family", "Arial").style("font-size", 12).style("text-anchor", "middle").text(this.renderConfig['y axis label']);
      var x = d3__WEBPACK_IMPORTED_MODULE_29__["scaleBand"]().range([margin.left, margin.left + width]).domain(sumstat.map(function (s) {
        return s.key;
      })).paddingInner(1).paddingOuter(.5);
      var y = d3__WEBPACK_IMPORTED_MODULE_29__["scaleLinear"]().domain([minVal, maxVal]).range([+margin.top + height, margin.top]);
      svg.attr("transform", "translate(0,0)").append("g").attr("id", "axisGroup");
      svg.select("#axisGroup").append("g").attr("transform", function (d) {
        return "translate(" + (margin.left - margin.bump) + ",0)";
      }).call(d3__WEBPACK_IMPORTED_MODULE_29__["axisLeft"](y).ticks(5));

      /// render x axis line
      svg.select("#axisGroup").append("line").attr("x1", margin.left - margin.bump).attr("x2", margin.left + width).attr("y1", margin.top + height + margin.bump).attr("y2", margin.top + height + margin.bump).attr("stroke", "#000000").style("stroke-width", 1);

      ///render group Label
      var groupName = "";
      sumstat.map(function (d) {
        var keyIndex = groupVals.indexOf(d.value.group) % colors.length,
          fillColor = colors[keyIndex];
        if (d.value.group != groupName) {
          groupName = d.value.group;
          svg.select("#axisGroup").append("line").attr("x1", x(d.key)).attr("x2", x(d.key)).attr("y1", margin.top + height + margin.bump).attr("y2", margin.top + height + margin.bump * 2).attr("stroke", "#000000").style("stroke-width", 1);
          svg.select("#axisGroup").append("text").attr("transform", "translate(" + (x(d.key) - 6) + "," + (y(minVal) + 18) + ")rotate(45)").attr("x", 0).attr("y", 0).style("font-family", "Arial").style("font-size", 11).style("fill", fillColor).text(groupName);
        }
      });
      var baseline = minVal < 0 ? y(0) : y(minVal);

      //render baseline
      svg.select("#axisGroup").append("line").attr("x1", margin.left - margin.bump).attr("x2", margin.left + width).attr("y1", baseline).attr("y2", baseline).attr("stroke", "#999999").style("stroke-width", 1);

      // render bars

      var barWidth = width / sumstat.length - 6;
      barWidth = barWidth <= 4 ? 4 : barWidth >= 40 ? 40 : barWidth;
      sumstat.map(function (d) {
        var keyIndex = groupVals.indexOf(d.value.group) % colors.length,
          fillColor = colors[keyIndex];
        var barHeight = minVal < 0 ? y(d.value.value) - y(0) : y(d.value.value) - y(minVal);
        var labelYPos = barHeight < 0 ? baseline + barHeight : baseline;
        if (barHeight < 0) {
          barHeight *= -1;
          svg.select("#axisGroup").append("rect").attr("x", x(d.key) - barWidth / 2).attr("y", baseline - barHeight).attr("height", barHeight).attr("width", barWidth).style("fill", fillColor);
        } else {
          svg.select("#axisGroup").append("rect").attr("x", x(d.key) - barWidth / 2).attr("y", baseline).attr("height", barHeight).attr("width", barWidth).style("fill", fillColor);
        }
        svg.select("#axisGroup").append("line").attr("x1", x(d.key)).attr("x2", x(d.key)).attr("y1", labelYPos - 3).attr("y2", labelYPos - 8).attr("stroke", "#999999").style("stroke-width", 1);
        svg.select("#axisGroup").append("text").attr("transform", "translate(" + (x(d.key) + 3) + "," + (labelYPos - 11) + ")rotate(-90)").attr("x", 0).attr("y", 0).style("font-family", "Arial").style("font-size", 11).text(d.value.name);
      });
    }
  }
}));
jquery__WEBPACK_IMPORTED_MODULE_28___default()(function () {});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=template&id=13476208":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=template&id=13476208 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mbm-plot-content row"
  }, [_c("div", {
    staticClass: "col-md-12 bar-plot-wrapper"
  }, [_c("div", {
    staticClass: "col-md-12",
    staticStyle: {
      display: "inline-block"
    },
    attrs: {
      id: _vm.canvasId + "barInCellPlotWrapper"
    }
  }, [_c("canvas", {
    attrs: {
      hidden: !_vm.showCanvas,
      id: _vm.canvasId + "barInCellPlot",
      width: "",
      height: ""
    }
  })])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("div", {
    class: "vector-wrapper-" + _vm.canvasId,
    attrs: {
      id: "vector_wrapper_" + _vm.sectionId
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Index/Template.vue?vue&type=template&id=4fa406bb&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/views/Index/Template.vue?vue&type=template&id=4fa406bb&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sysbio f-layout"
  }, [_c("sysbio-header"), _c("div", {
    staticClass: "sysbio-body",
    staticStyle: {
      gap: "70px"
    }
  }, [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Resources")]), _c("div", [_vm._v("Explore data from programs across the Accelerating Medicines Partnership (AMP)")]), _c("div", {
    staticClass: "section-body"
  }, [_c("div", {
    staticClass: "f-row"
  }, [_c("div", {
    staticClass: "tabs f-col"
  }, [_c("div", {
    staticClass: "tab f-col active",
    attrs: {
      "data-tab": "composition"
    },
    on: {
      click: function click($event) {
        return _vm.$parent.showTab($event);
      }
    }
  }, [_c("div", {
    staticClass: "tab-title"
  }, [_vm._v("Data Composition")]), _c("div", {
    staticClass: "tab-body"
  }, [_vm._v("Distribution of samples by assay, tissue, and disease status")])]), _c("div", {
    staticClass: "tab f-col",
    attrs: {
      "data-tab": "expression"
    },
    on: {
      click: function click($event) {
        return _vm.$parent.showTab($event);
      }
    }
  }, [_c("div", {
    staticClass: "tab-title"
  }, [_vm._v("Gene Expression")]), _c("div", {
    staticClass: "tab-body"
  }, [_vm._v("Differential gene expression across AMP programs")])]), _c("div", {
    staticClass: "tab f-col",
    attrs: {
      "data-tab": "clustering"
    },
    on: {
      click: function click($event) {
        return _vm.$parent.showTab($event);
      }
    }
  }, [_c("div", {
    staticClass: "tab-title"
  }, [_vm._v("Sample Clustering")]), _c("div", {
    staticClass: "tab-body"
  }, [_vm._v("PCA of cases and controls")])])]), _c("div", {
    staticClass: "tab-contents f-col"
  }, [_c("div", {
    staticClass: "tab-content active f-col",
    attrs: {
      "data-tab": "composition"
    }
  }, [!!_vm.$parent.dataComposition.data ? _c("research-bar-in-cell-plot", {
    attrs: {
      plotData: _vm.$parent.dataComposition.data,
      plotMargin: _vm.$parent.dataComposition.plotMargin,
      plotConfig: _vm.$parent.dataComposition.plotConfig,
      canvasId: _vm.$parent.dataComposition.id,
      utils: null
    }
  }) : _vm._e()], 1), _vm._m(1), _vm._m(2)])])])]), _c("div", {
    staticClass: "section"
  }, [_vm._m(3), _vm._m(4), _c("div", {
    staticClass: "section-body"
  }, [_c("div", {
    staticClass: "section-items f-row"
  }, _vm._l(_vm.$parent.content.amps.rows, function (item) {
    return _c("div", {
      staticClass: "section-item",
      class: [item.type, item.comingSoon ? "soon" : ""]
    }, [_c("div", {
      staticClass: "item-copy"
    }, [_c("div", {
      staticClass: "item-title"
    }, [_vm._v(_vm._s(item.title))]), _c("div", {
      staticClass: "item-body",
      domProps: {
        innerHTML: _vm._s(item.body)
      }
    }), _c("a", {
      staticClass: "item-btn",
      staticStyle: {
        "margin-top": "auto"
      },
      attrs: {
        href: item.linkUrl
      }
    }, [_vm._v(_vm._s(item.linkLabel) + " ❯")])]), _c("div", {
      staticClass: "item-bg contain"
    }, [_c("img", {
      attrs: {
        src: item.bgImage
      }
    })])]);
  }), 0)])]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("SysBio FAIRplex Consortium")]), _c("div", {
    staticClass: "section-body"
  }, [_c("div", {
    staticClass: "partners"
  }, _vm._l(_vm.$parent.content.partners.list, function (item) {
    return _c("div", {
      staticClass: "partner-logo"
    }, [_c("a", {
      attrs: {
        href: item.url || null,
        target: "_blank"
      }
    }, [_c("img", {
      attrs: {
        src: item.logo
      }
    })])]);
  }), 0)])]), _c("div", {
    staticClass: "f-row grow-children",
    staticStyle: {
      gap: "40px"
    }
  }, [_c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("News")]), _c("div", {
    staticClass: "section-body"
  }, [_vm.$parent.newsFeed ? _c("div", {
    staticClass: "news-items"
  }, [_vm._l(_vm.$parent.newsFeed, function (item) {
    return _c("div", {
      staticClass: "news-item f-row"
    }, [_c("div", {
      staticClass: "news-thumbnail contain",
      domProps: {
        innerHTML: _vm._s(item.field_thumbnail_image)
      }
    }), _c("div", {
      staticClass: "f-col"
    }, [_c("a", {
      attrs: {
        href: "".concat(_vm.$parent.content.news.newsItemUrl).concat(item.nid)
      }
    }, [_c("div", {}, [_vm._v(_vm._s(item.title))])]), _c("div", {
      domProps: {
        innerHTML: _vm._s(item.body)
      }
    })])]);
  }), _c("a", {
    staticStyle: {
      "align-self": "flex-end"
    },
    attrs: {
      href: "".concat(_vm.$parent.content.news.newsUrl)
    }
  }, [_vm._v("See All News ❯")])], 2) : _vm._e()])]), _vm._m(5)])]), _c("sysbio-footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section hero f-row grow-children align-v-center",
    staticStyle: {
      gap: "50px"
    }
  }, [_c("div", {
    staticClass: "f-col",
    staticStyle: {
      gap: "20px",
      "margin-top": "-100px"
    }
  }, [_c("div", {
    staticClass: "f-col"
  }, [_c("div", {
    staticClass: "hero-title"
  }, [_vm._v("SysBio FAIRplex")]), _c("h4", {
    staticStyle: {
      "line-height": "1em"
    }
  }, [_vm._v(" a FAIR PLatform for EXploration"), _c("br"), _vm._v(" of Systems Biology ")])]), _c("div", [_vm._v(" Integrated multi-tissue and multi-modal data from"), _c("br"), _vm._v(" the Accelerating Medicines Partnership"), _c("sup", [_vm._v("®")]), _vm._v(" (AMP"), _c("sup", [_vm._v("®")]), _vm._v(") ecosystem"), _c("br"), _vm._v(" to generate novel insights.")]), _c("a", {
    staticClass: "bold",
    staticStyle: {
      color: "#FFFFFF !important"
    },
    attrs: {
      href: "/about.html?page=about"
    }
  }, [_vm._v("Learn More ❯")])]), _c("div", {
    staticClass: "f-col",
    staticStyle: {
      gap: "20px",
      "align-self": "flex-end",
      "padding-bottom": "10px"
    }
  }, [_c("input", {
    staticClass: "hero-search",
    attrs: {
      type: "text",
      placeholder: "Search gene"
    }
  }), _c("div", {
    staticClass: "f-row spread-out",
    staticStyle: {
      gap: "15px"
    }
  }, [_c("div", {
    staticClass: "stat f-row"
  }, [_c("div", {
    staticClass: "stat-num"
  }, [_vm._v("08")]), _c("div", {
    staticClass: "stat-txt"
  }, [_vm._v("AMP® Programs")])]), _c("div", {
    staticClass: "stat f-row"
  }, [_c("div", {
    staticClass: "stat-num"
  }, [_vm._v("40")]), _c("div", {
    staticClass: "stat-txt"
  }, [_vm._v("Datasets")])]), _c("div", {
    staticClass: "stat f-row"
  }, [_c("div", {
    staticClass: "stat-num"
  }, [_vm._v("14")]), _c("div", {
    staticClass: "stat-txt"
  }, [_vm._v("Tissues")])]), _c("div", {
    staticClass: "stat f-row"
  }, [_c("div", {
    staticClass: "stat-num"
  }, [_vm._v("23")]), _c("div", {
    staticClass: "stat-txt"
  }, [_vm._v("Disease States")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "tab-content f-col",
    attrs: {
      "data-tab": "expression"
    }
  }, [_c("div", [_vm._v("Explore visualizations of differential gene expression within human tissues derived from the Accelerating Medicines Partnership (AMP) programs. Differential expression analyses were performed on blood-derived bulk RNA sequencing datasets from individuals with common metabolic disorders versus blood-derived pseudobulk RNA sequencing datasets from individuals with Parkinson's disease. The volcano plot shows all differentially expressed genes between the two groups.")]), _c("div", {
    staticClass: "tab-content-img-wrapper"
  }, [_c("img", {
    staticStyle: {
      width: "450px"
    },
    attrs: {
      src: "https://hugeampkpncms.org/sites/default/files/images/sysbio/images/sysbio_volcano.jpg"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "tab-content f-col",
    attrs: {
      "data-tab": "clustering"
    }
  }, [_c("div", [_vm._v("Explore principal component analyses (PCA) of cases and controls derived from the following Accelerating Medicines Partnership (AMP) programs: AMP AD, AMP PD, and AMP CMD. ")]), _c("div", {
    staticClass: "tab-content-img-wrapper"
  }, [_c("img", {
    staticStyle: {
      width: "850px"
    },
    attrs: {
      src: "https://hugeampkpncms.org/sites/default/files/images/sysbio/images/sysbio_pca_collected.jpg"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h2", [_vm._v("Accelerating Medicines Partnership"), _c("sup", [_vm._v("®")]), _vm._v(" (AMP"), _c("sup", [_vm._v("®")]), _vm._v(") Programs")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("Learn more about the AMP"), _c("sup", [_vm._v("®")]), _vm._v(" Programs")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Releases")]), _c("div", {
    staticClass: "section-body"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.hero[data-v-4fa406bb]{\n    background: #eee;\n    height: 500px;\n    margin: -40px -5vw 0;\n    padding: 100px;\n    background-image: url('https://hugeampkpncms.org/sites/default/files/images/sysbio/images/sysbio_hero.png');\n    background-size: cover;\n    background-position: bottom center;\n    color: white;\n}\n.hero a[data-v-4fa406bb]{\n    color:white !important;\n}\n.hero-title[data-v-4fa406bb]{\n    font-size: 2.15rem;\n    font-weight: bold;\n}\n.hero-search[data-v-4fa406bb] {\n    padding: 7px 15px;\n    border-radius: 5px;\n    border: 0;\n    -webkit-box-shadow: 2px 2px 2px 0 black;\n            box-shadow: 2px 2px 2px 0 black;\n}\n.stat[data-v-4fa406bb]{\n    gap:5px;\n}\n.stat-num[data-v-4fa406bb] {\n    font-size: 50px;\n    line-height: 35px;\n    font-weight: bold;\n}\n.stat-txt[data-v-4fa406bb] {\n    width: -webkit-min-content;\n    width: -moz-min-content;\n    width: min-content;\n    line-height: 14px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    font-weight: bold;\n    color: #e6e6e6;\n}\n.section-body[data-v-4fa406bb]{\n    padding: 20px 0 0;\n}\n.section-items[data-v-4fa406bb] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 20px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.section-item[data-v-4fa406bb] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #fbfbfb;\n    border: 1px solid #eee;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    position: relative;\n    min-width: calc(25% - 20px);\n}\n.item-copy[data-v-4fa406bb] {\n    width: -webkit-fill-available;\n    max-width: 200px;\n    padding: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 5px;\n}\n.item-title[data-v-4fa406bb] {\n    font-weight: bold;\n    font-size: 1.1em;\n}\n.item-bg[data-v-4fa406bb] {\n    width: 100%;\n    height: 300px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    mix-blend-mode: darken;\n    overflow: hidden;\n}\n[data-v-4fa406bb] .contain img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n    padding: 7%;\n}\n[data-v-4fa406bb] .cover img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.section-item.medium[data-v-4fa406bb] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n.item-copy[data-v-4fa406bb] {\n        width: -webkit-fill-available;\n        max-width: unset;\n        padding: 20px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n.item-title[data-v-4fa406bb] {\n        font-weight: bold;\n        font-size: 1.2em;\n}\n.item-bg[data-v-4fa406bb] {\n        width: auto;\n        height: 150px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        mix-blend-mode: darken;\n        overflow: hidden;\n}\n}\n.partners[data-v-4fa406bb] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 20px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 20px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background: #eee;\n    margin: 0 -5vw;\n}\n.partners-title[data-v-4fa406bb] {\n    -ms-flex-item-align: center;\n        align-self: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: #ccc;\n}\n.partner-logo[data-v-4fa406bb] {\n    height: 50px;\n    mix-blend-mode: darken;\n}\n.partner-logo img[data-v-4fa406bb] {\n    height: 50px;\n}\n.tabs[data-v-4fa406bb] {\n    width: 300px;\n    gap: 1px;\n}\n.tab[data-v-4fa406bb] {\n    padding: 20px;\n    background: #eee;\n    margin: 0 0 0 5px;\n    border-radius: 5px 0 0 5px;\n    cursor: pointer;\n}\n.tab.active[data-v-4fa406bb] {\n    background: white;\n    -webkit-box-shadow: 2px 2px 2px 0 black;\n            box-shadow: 2px 2px 2px 0 black;\n    z-index: 1;\n    margin: 0;\n    cursor: default;\n}\n.tab-contents[data-v-4fa406bb] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background: white;\n    z-index: 1;\n    min-height: 100%;\n    padding: 20px;\n    border-radius: 0 5px 5px 0;\n    -webkit-box-shadow: 2px 2px 2px 0 black;\n            box-shadow: 2px 2px 2px 0 black;\n}\n.tab-content[data-v-4fa406bb]{\n    display:none !important;\n}\n.tab-content.active[data-v-4fa406bb]{\n    display:-webkit-box !important;\n    display:-ms-flexbox !important;\n    display:flex !important;\n}\n.tab-title[data-v-4fa406bb]{\n    font-weight: bold;\n    font-size: 1.1em;\n}\n.tab-content-img-wrapper[data-v-4fa406bb] {\n    text-align: center;\n    padding-top: 15px;\n}\n.news-items[data-v-4fa406bb] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 10px;\n}\n.news-item[data-v-4fa406bb] {\n    gap: 10px;\n}\n.news-thumbnail[data-v-4fa406bb] {\n    min-width: 200px;\n    height: 100px;\n    background: #fbfbfb;\n    border: 1px solid #eee;\n}\n.news-thumbnail img[data-v-4fa406bb] {\n    mix-blend-mode: darken;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("69182554", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/researchPortal/ResearchBarInCellPlot.vue":
/*!*****************************************************************!*\
  !*** ./src/components/researchPortal/ResearchBarInCellPlot.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResearchBarInCellPlot_vue_vue_type_template_id_13476208__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResearchBarInCellPlot.vue?vue&type=template&id=13476208 */ "./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=template&id=13476208");
/* harmony import */ var _ResearchBarInCellPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResearchBarInCellPlot.vue?vue&type=script&lang=js */ "./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResearchBarInCellPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResearchBarInCellPlot_vue_vue_type_template_id_13476208__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResearchBarInCellPlot_vue_vue_type_template_id_13476208__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/researchPortal/ResearchBarInCellPlot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarInCellPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchBarInCellPlot.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarInCellPlot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=template&id=13476208":
/*!***********************************************************************************************!*\
  !*** ./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=template&id=13476208 ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarInCellPlot_vue_vue_type_template_id_13476208__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchBarInCellPlot.vue?vue&type=template&id=13476208 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/ResearchBarInCellPlot.vue?vue&type=template&id=13476208");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarInCellPlot_vue_vue_type_template_id_13476208__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarInCellPlot_vue_vue_type_template_id_13476208__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue":
/*!*****************************************************************************!*\
  !*** ./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResearchBarPlotVector_vue_vue_type_template_id_5ab56a04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04 */ "./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04");
/* harmony import */ var _ResearchBarPlotVector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResearchBarPlotVector.vue?vue&type=script&lang=js */ "./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResearchBarPlotVector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResearchBarPlotVector_vue_vue_type_template_id_5ab56a04__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResearchBarPlotVector_vue_vue_type_template_id_5ab56a04__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarPlotVector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchBarPlotVector.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarPlotVector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04":
/*!***********************************************************************************************************!*\
  !*** ./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04 ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarPlotVector_vue_vue_type_template_id_5ab56a04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/researchPortal/vectorPlots/ResearchBarPlotVector.vue?vue&type=template&id=5ab56a04");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarPlotVector_vue_vue_type_template_id_5ab56a04__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchBarPlotVector_vue_vue_type_template_id_5ab56a04__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/portals/SysBio/views/Index/Template.vue":
/*!*****************************************************!*\
  !*** ./src/portals/SysBio/views/Index/Template.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Template_vue_vue_type_template_id_4fa406bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template.vue?vue&type=template&id=4fa406bb&scoped=true */ "./src/portals/SysBio/views/Index/Template.vue?vue&type=template&id=4fa406bb&scoped=true");
/* harmony import */ var _Template_vue_vue_type_style_index_0_id_4fa406bb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css */ "./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _Template_vue_vue_type_template_id_4fa406bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Template_vue_vue_type_template_id_4fa406bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fa406bb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/portals/SysBio/views/Index/Template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_4fa406bb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Index/Template.vue?vue&type=style&index=0&id=4fa406bb&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_4fa406bb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_4fa406bb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_4fa406bb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_style_index_0_id_4fa406bb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/portals/SysBio/views/Index/Template.vue?vue&type=template&id=4fa406bb&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/portals/SysBio/views/Index/Template.vue?vue&type=template&id=4fa406bb&scoped=true ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_4fa406bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=template&id=4fa406bb&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/views/Index/Template.vue?vue&type=template&id=4fa406bb&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_4fa406bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_4fa406bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/portals/SysBio/views/Index/main.js":
/*!************************************************!*\
  !*** ./src/portals/SysBio/views/Index/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.iterator.for-each.js */ "./node_modules/core-js/modules/es.iterator.for-each.js");
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Template_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Template.vue */ "./src/portals/SysBio/views/Index/Template.vue");
/* harmony import */ var _css_f_layout_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../css/f-layout.css */ "./src/portals/SysBio/css/f-layout.css");
/* harmony import */ var _css_f_layout_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_f_layout_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _css_sysbio_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../css/sysbio.css */ "./src/portals/SysBio/css/sysbio.css");
/* harmony import */ var _css_sysbio_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_css_sysbio_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mixins_sysbioMixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../mixins/sysbioMixin.js */ "./src/portals/SysBio/mixins/sysbioMixin.js");
/* harmony import */ var _components_researchPortal_ResearchBarInCellPlot_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/researchPortal/ResearchBarInCellPlot.vue */ "./src/components/researchPortal/ResearchBarInCellPlot.vue");
/* harmony import */ var _utils_dataConvert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/utils/dataConvert */ "./src/utils/dataConvert.js");




















new vue__WEBPACK_IMPORTED_MODULE_13__["default"]({
  components: {
    ResearchBarInCellPlot: _components_researchPortal_ResearchBarInCellPlot_vue__WEBPACK_IMPORTED_MODULE_18__["default"]
  },
  mixins: [_mixins_sysbioMixin_js__WEBPACK_IMPORTED_MODULE_17__["sysbioMixin"]],
  data: {
    newsFeed: null,
    content: {
      news: {
        feedUrl: "https://hugeampkpncms.org/rest/news_list?project=sysbio",
        newsUrl: "/about.html?page=news",
        newsItemUrl: "/about.html?page=news&id="
      },
      amps: {
        title: "Tools and Workflows",
        subtitle: "Analyses you can do on PanKbase",
        rows: [{
          title: "AMP® AD Alzheimer's Disease",
          body: "Leveraging precision medicine to validate existing targets and discover novel targets and biomarkers.",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amp-alzheimers-disease-2-0/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_AD.png",
          type: "medium"
        }, {
          title: "AMP® ALS Amyotrophic Lateral Sclerosis",
          body: "Identifying biomarkers, therapeutic targets, and clinical outcome assessments for ALS.",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amyotrophic-lateral-sclerosis/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_ALS.png",
          type: "medium"
        }, {
          title: "AMP® AIM Autoimmune and Immune-Mediated Diseases",
          body: "Understanding the cellular and molecular interactions that lead to AIM.",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amp-autoimmune-immune-mediated-diseases/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_AIM.jpg",
          type: "medium"
        }, {
          title: "AMP® CMD Common Metabolic Diseases",
          body: "Identifying targets for six common metabolic diseases: liver diseases, kidney diseases, obesity, cardiovascular diseases, type 2 diabetes/prediabetes, and type 1 diabetes.",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amp-common-metabolic-disorders/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_CMD.png",
          type: "medium"
        }, {
          title: "AMP® PD Parkinson’s Disease",
          body: "Identifying biomarkers and therapies for Parkinson’s Disease.",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amp-parkinsons-disease/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_PD.png",
          type: "medium"
        }, {
          title: "AMP® RA/SLE Rheumatoid Arthritis and Systemic Lupus Erythematosus",
          body: "Performing single cell-level analyses of tissue and blood samples from people with rheumatoid arthritis and systemic lupus erythematosus to pinpoint genes, proteins, pathways, and signaling networks. ",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amp-rheumatoid-arthritis-and-lupus/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_RA-SLE.png",
          type: "medium"
        }, {
          title: "AMP® SCZ Schizophrenia",
          body: "Developing effective early-stage treatments for individuals at risk for schizophrenia, understanding disease pathways, and identifying targets for treatment.",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amp-schizophrenia/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_SCZ.png",
          type: "medium"
        }, {
          title: "AMP® HF Heart Failure",
          body: "Investigating heart failure with preserved ejection fraction (HFpEF) through deep phenotyping and data analysis.",
          linkLabel: "Learn More",
          linkUrl: "https://fnih.org/our-programs/accelerating-medicines-partnership-amp/amp-heart-failure/",
          bgImage: "https://hugeampkpncms.org/sites/default/files/images/sysbio_amp_programs/AMP_HF.png",
          type: "medium"
        }]
      },
      partners: {
        title: "Our Partners",
        list: [{
          url: "",
          logo: "https://hugeampkpncms.org/sites/default/files/images/sysbio_consortium/verily.png"
        }, {
          url: "",
          logo: "https://hugeampkpncms.org/sites/default/files/images/sysbio_consortium/technome.png"
        }, {
          url: "",
          logo: "https://hugeampkpncms.org/sites/default/files/images/sysbio_consortium/datatecnica.png"
        }, {
          url: "",
          logo: "https://hugeampkpncms.org/sites/default/files/images/sysbio_consortium/sage.png"
        }, {
          url: "",
          logo: "https://hugeampkpncms.org/sites/default/files/images/sysbio_consortium/Broad.png"
        }, {
          url: "",
          logo: "https://hugeampkpncms.org/sites/default/files/images/sysbio_consortium/northwestern.png"
        }, {
          url: "",
          logo: "https://hugeampkpncms.org/sites/default/files/images/sysbio_consortium/vanderbilt.png"
        }]
      }
    },
    dataComposition: {
      data: null,
      plotMargin: {
        leftMargin: 150,
        rightMargin: 40,
        topMargin: 20,
        bottomMargin: 100,
        bump: 11
      },
      plotConfig: {
        "label": "",
        "x axis field": "Tissue Type",
        "y axis field": "Program",
        "bars in cell": [{
          "field": "Number of Control",
          "color": "#ff00c6",
          "value type": "number"
        }, {
          "field": "Number of Treatment",
          "color": "#02b9ff",
          "value type": "number"
        }, {
          "field": "Assay Type",
          "color": "#666666",
          "value type": "string"
        }],
        "bar width": 100,
        "bar height": 20,
        "plot margin": {
          "left": 250,
          "right": 50,
          "top": 80,
          "bottom": 5,
          "bump": 10
        }
      },
      id: "sysBioDataComposition"
    }
  },
  created: function created() {
    var _this = this;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.getNews();
            _this.getDataComposition();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_dataConvert__WEBPACK_IMPORTED_MODULE_19__["default"]), {}, {
    getNews: function getNews() {
      var _this2 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var newsFeedUrl, newsFeed;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              newsFeedUrl = _this2.content.news.feedUrl;
              _context2.next = 3;
              return fetch(newsFeedUrl).then(function (resp) {
                return resp.json();
              });
            case 3:
              newsFeed = _context2.sent;
              //trim feed to 5 items
              if (newsFeed.length > 5) newsFeed.length = 5;
              newsFeed.forEach(function (item) {
                var _DOMParser$parseFromS;
                //extract only the img element frforom thumbnail, wysiwyg html can be polluted sometimes
                item.field_thumbnail_image = ((_DOMParser$parseFromS = new DOMParser().parseFromString(item.field_thumbnail_image, "text/html").querySelector("img")) === null || _DOMParser$parseFromS === void 0 ? void 0 : _DOMParser$parseFromS.outerHTML) || "";
              });
              _this2.newsFeed = newsFeed;
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getDataComposition: function getDataComposition() {
      var _this3 = this;
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee3() {
        var dataUrl, contentJson, data;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              dataUrl = "https://hugeampkpncms.org/rest/directcsv?id=sysbio_program_x_tissue";
              _context3.next = 3;
              return fetch(dataUrl).then(function (resp) {
                return resp.json();
              });
            case 3:
              contentJson = _context3.sent;
              if (contentJson.error == null) {
                data = contentJson[0]['field_data_points'];
                _this3.dataComposition.data = _utils_dataConvert__WEBPACK_IMPORTED_MODULE_19__["default"].csv2Json(data);
              }
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    showTab: function showTab(e) {
      var el = e.currentTarget;
      var tab = el.dataset.tab;
      var parent = el.parentElement;
      var tabs = Array.from(parent.children);
      tabs.forEach(function (tab) {
        tab.classList.remove('active');
      });
      el.classList.add('active');
      var tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(function (tabContent) {
        tabContent.classList.remove('active');
      });
      var tabContent = document.querySelector(".tab-content[data-tab=\"".concat(tab, "\"]"));
      tabContent.classList.add('active');
    }
  }),
  render: function render(h) {
    return h(_Template_vue__WEBPACK_IMPORTED_MODULE_14__["default"]);
  }
}).$mount("#app");

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/portals/SysBio/views/Index/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/dig-dug-portal/dig-dug-portal/src/portals/SysBio/views/Index/main.js */"./src/portals/SysBio/views/Index/main.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map