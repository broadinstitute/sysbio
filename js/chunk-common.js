(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-common"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _portals_SysBio_assets_sysbioMenu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/portals/SysBio/assets/sysbioMenu.json */ "./src/portals/SysBio/assets/sysbioMenu.json");
var _portals_SysBio_assets_sysbioMenu_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/portals/SysBio/assets/sysbioMenu.json */ "./src/portals/SysBio/assets/sysbioMenu.json", 1);


/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("sysbioFooter", {
  components: {},
  props: {},
  data: function data() {
    return {
      nav: _portals_SysBio_assets_sysbioMenu_json__WEBPACK_IMPORTED_MODULE_1__
    };
  },
  computed: {},
  created: function created() {},
  methods: {}
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _portals_SysBio_assets_sysbioMenu_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/portals/SysBio/assets/sysbioMenu.json */ "./src/portals/SysBio/assets/sysbioMenu.json");
var _portals_SysBio_assets_sysbioMenu_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/portals/SysBio/assets/sysbioMenu.json */ "./src/portals/SysBio/assets/sysbioMenu.json", 1);




var menuItemActive = false;
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].component("sysbio-header", {
  components: {},
  props: {},
  data: function data() {
    return {
      nav: _portals_SysBio_assets_sysbioMenu_json__WEBPACK_IMPORTED_MODULE_3__
    };
  },
  computed: {},
  created: function created() {
    this.injectFavicon("https://hugeampkpncms.org/sites/default/files/images/sysbio/logos/sb-color-icon.svg");
    this.injectFont("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  },
  methods: {
    injectFavicon: function injectFavicon(faviconUrl) {
      //todo: make util
      //faviconUrl eg: https://hugeampkpncms.org/sites/default/files/users/user32/matkp/favicon-32x32.png
      var favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.setAttribute("rel", "icon");
        favicon.setAttribute("type", "image/png");
        document.head.appendChild(favicon);
      }
      favicon.setAttribute("href", faviconUrl);
    },
    injectFont: function injectFont(fontUrl) {
      //todo: make util
      //fontUrl eg: https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap
      var linkTag = document.createElement("link");
      linkTag.rel = "stylesheet";
      linkTag.href = fontUrl;
      document.head.appendChild(linkTag);
      linkTag.onload = function () {};
    },
    isActive: function isActive(path) {
      //compare menu item's path to current path to set active
      //but only the first instance
      if (menuItemActive) return false;
      var currentPath = window.location.pathname + '' + window.location.search;
      if (path === currentPath) {
        menuItemActive = true;
        return true;
      } else {
        return false;
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "footer"
  }, [_c("div", {
    staticClass: "footer-top"
  }, [_vm._m(0), _c("div", {
    staticClass: "menu"
  }, _vm._l(_vm.nav.menuItems, function (item) {
    return _c("div", {
      staticClass: "menu-item-wrapper"
    }, [_c("a", {
      staticClass: "menu-item",
      attrs: {
        href: item.path || null,
        target: item.external ? "_blank" : null
      }
    }, [_vm._v(" " + _vm._s(item.label) + " ")]), item.subMenuItems ? _c("div", {
      staticClass: "submenu"
    }, _vm._l(item.subMenuItems, function (subItem) {
      return _c("a", {
        staticClass: "submenu-item",
        attrs: {
          href: subItem.path || null,
          target: subItem.external ? "_blank" : null
        }
      }, [_vm._v(" " + _vm._s(subItem.label) + " ")]);
    }), 0) : _vm._e()]);
  }), 0), _vm._m(1)]), _c("div", {
    staticClass: "colophon"
  }, [_vm._v(" Sysbio FAIRplex is supported by the NIH Common Fund under Award Number OT2OD037975 as part of the Common Fund's Venture Program SysBio Initiative. ")])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "footer-contact"
  }, [_c("div", {
    staticClass: "footer-title"
  }, [_vm._v("Get in Touch")]), _c("div", [_vm._v("We welcome any questions or feedback, invite collaborations, and value input about SysBio FAIRplex.")]), _c("a", {
    attrs: {
      href: "mailto:support@sysbio-fairplex.org"
    }
  }, [_vm._v("support@sysbio-fairplex.org")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "footer-logo"
  }, [_c("img", {
    attrs: {
      src: "https://hugeampkpncms.org/sites/default/files/images/sysbio/logos/sb-white-v.svg"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "header f-row align-v-center spread-out"
  }, [_vm._m(0), _c("div", {
    staticClass: "beta"
  }, [_vm._v("beta")]), _c("div", {
    staticClass: "menu f-row"
  }, _vm._l(_vm.nav.menuItems, function (item) {
    return _c("div", {
      staticClass: "menu-item-wrapper",
      class: {
        active: _vm.isActive(item.path)
      }
    }, [_c("a", {
      staticClass: "menu-item",
      attrs: {
        href: item.path || null,
        target: item.external ? "_blank" : null
      }
    }, [_vm._v(" " + _vm._s(item.label) + " ")]), item.subMenuItems ? _c("div", {
      staticClass: "submenu"
    }, _vm._l(item.subMenuItems, function (subItem) {
      return _c("a", {
        staticClass: "submenu-item",
        class: {
          active: _vm.isActive(subItem.path)
        },
        attrs: {
          href: subItem.path || null,
          target: subItem.external ? "_blank" : null
        }
      }, [_vm._v(" " + _vm._s(subItem.label) + " ")]);
    }), 0) : _vm._e()]);
  }), 0)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("a", {
    staticClass: "logo f-row align-v-center",
    attrs: {
      href: "/"
    }
  }, [_c("img", {
    attrs: {
      src: "https://hugeampkpncms.org/sites/default/files/images/sysbio/logos/sb-color-h.svg"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/portals/SysBio/css/f-layout.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??ref--7-oneOf-3-2!./src/portals/SysBio/css/f-layout.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".f-layout{\n    /* LAYOUT STYLES */\n    .no-events{\n        pointer-events: none;\n    }\n    .yes-events{\n        pointer-events: all;\n    }\n    .f-col{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n    .f-row{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n    }\n\n    .f-col.align-v-center{\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n    }\n    .f-row.align-v-center{\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n    }\n\n    .f-col.align-h-center{\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n    }\n    .f-row.align-h-center{\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n    }\n\n    .f-col.align-v-bottom{\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n    }\n    .f-row.align-v-bottom{\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n    }\n\n    .f-col.align-h-bottom{\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n    }\n    .f-row.align-h-bottom{\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n    }\n\n    .f-col.spread-out,\n    .f-row.spread-out{\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n    }\n\n    .fill-height{\n        height: -webkit-fill-available;\n        height: -moz-available;\n        height: stretch;\n        height: 100%;\n    }\n    .fill-width{\n        width: -webkit-fill-available;\n        width: -moz-available;\n        width: stretch;\n        width: 100%;\n    }\n    .hug-height{\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n    }\n    .hug-width{\n        width: -webkit-fit-content;\n        width: -moz-fit-content;\n        width: fit-content\n    }\n    \n    .grow-children>*{\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n    }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/portals/SysBio/css/sysbio.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??ref--7-oneOf-3-2!./src/portals/SysBio/css/sysbio.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n    --sysbio-black: #000000;\n    --sysbio-blue: #0000C6;\n    --sysbio-light-blue: #02b9ff;\n    --sysbio-pink: #ff00c6;\n    --sysbio-white-blue: #efefff;\n}\n\nbody,\nbody.kp-default {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-family: Roboto, Arial, sans-serif;\n    background-color: #fafafa;\n    font-size: 14px;\n}\n\n.sysbio {\n    width: 100vw;\n    height: 100vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n\n    * {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n    }\n\n    h1 {\n        font-size: 1.7rem;\n    }\n\n    h2 {\n        font-size: 1.4rem;\n    }\n\n    h3 {\n        font-size: 1.2rem;\n    }\n\n    h4 {\n        font-size: 1.1rem;\n    }\n\n    a,\n    a:visited {\n        color: var(--sysbio-blue) !important;\n    }\n    \n\n    label{\n        margin:0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        gap: 3px;\n    }\n\n    .hidden {\n        display: none !important;\n    }\n\n    .bold {\n        font-weight: bold;\n    }\n\n    .italic {\n        font-style: italic;\n    }\n\n    .num {\n        font-family: monospace;\n    }\n\n    .sysbio-body {\n        min-width: 800px;\n        max-width: 1400px;\n        width: 90vw;\n        padding: 115px 0 80px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -ms-flex-item-align: center;\n            align-self: center;\n    }\n\n    /* static information pages */\n    h2.static-header {\n        line-height: 2.75em;\n        font-size: 1.75em;\n    }\n\n    p.leading-p {\n        font-size: 1.25em;\n        font-weight: 500;\n    }\n\n    .pagination{\n        li.page-item .page-link, \n        li.page-item.active .page-link, \n        li.page-item.disabled .page-link {\n            border: 0;\n            color:black;\n        }\n\n        li.page-item .page-link {\n            background-color:transparent;\n        }\n        li.page-item:not(.disabled, .active):hover .page-link {\n            background-color: #eee;\n            border-radius: 5px;\n        }\n        li.page-item.disabled .page-link{\n            background-color: transparent;\n            color: #ddd;\n        }\n        li.page-item.active .page-link {\n            color: black;\n            background-color: white;\n            border-radius: 5px;\n            font-weight: bold;\n            -webkit-box-shadow: 0px 1px 2px 0 black;\n                    box-shadow: 0px 1px 2px 0 black;\n        }\n    }\n\n    table thead th{\n        background-color: #eee;\n    }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.footer[data-v-1fb2951c] {\n    width: 100%;\n    background: var(--sysbio-blue);\n    color: var(--sysbio-white-blue);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 40px 40px;\n    margin-top: auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 40px;\n    font-size: 14px;\n.footer-top[data-v-1fb2951c]{\n        display:-webkit-box;\n        display:-ms-flexbox;\n        display:flex;\n        width: 100%;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n.footer-title[data-v-1fb2951c]{\n        font-size: 18px;\n        font-weight: bold;\n}\n.footer-logo[data-v-1fb2951c]{\n        width: 250px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n}\n.footer-logo img[data-v-1fb2951c] {\n        height: 100px;\n        mix-blend-mode: hard-light;\n}\n.footer-contact[data-v-1fb2951c]{\n        width:250px;\n}\n.footer-contact a[data-v-1fb2951c], .footer-contact a[data-v-1fb2951c]:visited {\n        margin-top:10px;\n        color: var(--sysbio-white-blue) !important;\n        font-weight: bold;\n}\n.footer-contact a[data-v-1fb2951c]:hover{\n        text-decoration: underline;\n}\n.menu[data-v-1fb2951c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        gap: 50px;\n}\n.menu a[data-v-1fb2951c], .menu a[data-v-1fb2951c]:visited {\n        color: var(--sysbio-white-blue) !important;\n}\n.menu a[data-v-1fb2951c]:hover{\n        text-decoration: none;\n}\n.menu a[href][data-v-1fb2951c]:not([href=\"\"]):hover{\n        text-decoration: underline;\n}\n.menu-item-wrapper[data-v-1fb2951c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n}\n.menu-item[data-v-1fb2951c]{\n        font-weight: bold;\n}\n.submenu[data-v-1fb2951c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n}\na.submenu-item[data-v-1fb2951c] {\n        font-weight: normal;\n}\n.colophon[data-v-1fb2951c]{\n        font-size: 12px;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.header[data-v-40e4f90e] {\n    padding: 0 40px;\n    background: white;\n    -webkit-box-shadow: 0 2px 2px 0px black;\n            box-shadow: 0 2px 2px 0px black;\n    position:fixed;\n    z-index: 100;\n    width:100%;\n.beta[data-v-40e4f90e] {\n        font-size: 12px;\n        position: absolute;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        background: var(--sysbio-light-blue);\n        color: white;\n        width: 75px;\n        height: 40px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        right: -28px;\n        top: -10px;\n}\na[data-v-40e4f90e], a[data-v-40e4f90e]:visited {\n        color: black !important;\n        text-decoration: none;\n}\n.logo[data-v-40e4f90e] {\n        height: 75px;\n        padding: 10px 0;\n        gap: 10px;\n        font-size: 22px;\n}\n.logo img[data-v-40e4f90e] {\n        height: 100%;\n}\n\n    /* menu */\n.menu[data-v-40e4f90e] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 14px;\n        letter-spacing: .2px;\n        z-index: 5000;\n}\n.menu-item-wrapper[data-v-40e4f90e] {\n        position: relative;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.main-menu-items[data-v-40e4f90e] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        position: relative;\n        padding-right: 2px;\n}\n.main-menu-items[data-v-40e4f90e]:after {\n        content: \"\";\n        position: absolute;\n        top: 7px;\n        right: 0px;\n        width: 2px;\n        height: 50%;\n}\n.menu-item[data-v-40e4f90e] {\n        position: relative;\n        padding: 15px 10px;\n        cursor: pointer;\n        border-radius: 10px;\n        font-weight: 600;\n        color: var(--sysbio-black);\n        font-weight: bold;\n}\n.menu-item-wrapper:has(.submenu) .menu-item[data-v-40e4f90e]{\n        border-radius: 10px 10px 0 0;\n}\n.menu-item.menu-item-main[data-v-40e4f90e] {\n        color: var(--sysbio-blue) !important;\n}\n.menu-item.menu-item-selected[data-v-40e4f90e] {\n        color: var(--sysbio-blue);\n}\n.menu-item-wrapper:hover .menu-item[data-v-40e4f90e],\n    .menu-item-wrapper.active .menu-item[data-v-40e4f90e],\n    .menu-item-wrapper:has(.submenu-item.active) .menu-item[data-v-40e4f90e],\n    .menu-item-wrapper .submenu-item.active[data-v-40e4f90e],\n    .menu-item-wrapper .submenu-item[data-v-40e4f90e]:hover {\n        color: var(--sysbio-blue) !important;\n}\n.menu-item-wrapper:hover .menu-item[data-v-40e4f90e],\n    .menu-item-wrapper:hover .submenu[data-v-40e4f90e]{\n        background: white;\n        -webkit-box-shadow: 0 2px 2px 0px black;\n                box-shadow: 0 2px 2px 0px black;\n}\n.menu-item-wrapper:hover > .submenu[data-v-40e4f90e] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.submenu[data-v-40e4f90e] {\n        position: absolute;\n        top: 100%;\n        right: 0;\n        padding: 10px 10px 15px 15px;\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        gap: 5px;\n        display: none;\n        border-radius: 5px 0 5px 5px;\n}\n.submenu-item[data-v-40e4f90e] {\n        color: black;\n        width: -webkit-fill-available;\n        text-align: right;\n        font-weight: normal\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("937ff988", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f4cc4048", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/modules/bioPortal.js":
/*!**********************************!*\
  !*** ./src/modules/bioPortal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_hostUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/hostUtils */ "./src/utils/hostUtils.js");
/* harmony import */ var _utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/bioIndexUtils */ "./src/utils/bioIndexUtils.js");










/* This module tracks all portal-specific data, which is determined by the
 * sub-domain of the page.
 *
 * It knows the sub-domain (portal), the description of the portal, what
 * phenotypes are available to it, all the data about those phenotypes, etc.
 *
 * It also has functions for changing the disease group (portal) to another
 * and transfering the location to it.
 */




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  // tracks the *current* portal (from subdomain) and available phenotypes
  state: function state() {
    return {
      host: _utils_hostUtils__WEBPACK_IMPORTED_MODULE_11__["default"],
      diseaseSystems: [],
      diseaseGroups: [],
      phenotypes: [],
      ancestries: [],
      complications: [],
      datasets: [],
      phenotypeMap: {},
      complicationsMap: {},
      datasetMap: {},
      documentations: {},
      user: "",
      links: [],
      defaultPortal: ""
    };
  },
  mutations: {
    setDiseaseSystems: function setDiseaseSystems(state, data) {
      state.diseaseSystems = data;
    },
    setDiseaseGroups: function setDiseaseGroups(state, data) {
      state.diseaseGroups = data;
    },
    setPhenotypes: function setPhenotypes(state, data) {
      state.phenotypes = data;
      state.phenotypeMap = {};

      // create a map of the phenotypes by name for fast lookup
      for (var i in state.phenotypes) {
        state.phenotypeMap[state.phenotypes[i].name] = state.phenotypes[i];
      }
    },
    setDocumentations: function setDocumentations(state, data) {
      state.documentations = {};
      for (var i in data) {
        state.documentations[data[i].name] = data[i];
      }
    },
    setAncestries: function setAncestries(state, data) {
      state.ancestries = data;
      state.ancestryMap = {};
      for (var i in state.ancestries) {
        state.ancestryMap[state.ancestries[i].name] = state.ancestries[i];
      }
    },
    setComplications: function setComplications(state, data) {
      state.complications = data;
      state.complicationsMap = {};
      // create a map of the phenotypes by name for fast lookup
      for (var i in state.complications) {
        state.complicationsMap[state.complications[i].name] = state.complications[i];
      }
    },
    setDatasets: function setDatasets(state, data) {
      state.datasets = data;
      state.datasetMap = {};

      // create a map of the dataset name for fast lookup
      for (var i in state.datasets) {
        state.datasetMap[state.datasets[i].name] = state.datasets[i];
      }
    },
    setDocumentation: function setDocumentation(state, data) {
      state.documentation = data;
    },
    setUser: function setUser(state, user) {
      state.user = user;
    },
    setLinks: function setLinks(state, data) {
      state.links = data;
    },
    setDefaultPortal: function setDefaultPortal(state, portal) {
      state.defaultPortal = portal;
    }
  },
  getters: {
    defaultGroup: function defaultGroup(state) {
      if (state.diseaseGroups.length > 0) {
        //if defaultPortal is set, use that
        if (state.defaultPortal || Object({"VUE_APP_GA4_ID":"G-FCLX0CH4C7","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEFAULT_PORTAL) {
          var portalToUse = state.defaultPortal || Object({"VUE_APP_GA4_ID":"G-FCLX0CH4C7","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEFAULT_PORTAL;
          for (var i in state.diseaseGroups) {
            var group = state.diseaseGroups[i];
            if (group.name == portalToUse) {
              return group;
            }
          }
        } else return state.diseaseGroups.filter(function (g) {
          return g.default;
        })[0];
      }
    },
    diseaseGroup: function diseaseGroup(state, getters) {
      for (var i in state.diseaseGroups) {
        var _state$host$subDomain;
        var group = state.diseaseGroups[i];
        if (group.name == ((_state$host$subDomain = state.host.subDomain) === null || _state$host$subDomain === void 0 ? void 0 : _state$host$subDomain.replace(/\.?dev/, ""))) {
          return group;
        }
      }

      // find the default
      return getters.defaultGroup;
    },
    //this is the root portal, display all data for group
    isRootPortal: function isRootPortal(state, getters) {
      var _state$host$subDomain2;
      if (!((_state$host$subDomain2 = state.host.subDomain) !== null && _state$host$subDomain2 !== void 0 && _state$host$subDomain2.replace(/\.?dev/, "")))
        //no subdomain found, assume main portal
        return true;else {
        return state.host.subDomain === getters.diseaseGroup.portalGroup;
      }
    }
  },
  actions: {
    // fetch all disease systems with phenotypes
    getDiseaseSystems: function getDiseaseSystems(_ref) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var commit, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/systems")).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context.sent;
              // set the portal list
              commit("setDiseaseSystems", json.data);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // fetch all disease groups from the bio index
    getDiseaseGroups: function getDiseaseGroups(_ref2) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var commit, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/groups")).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context2.sent;
              // set the portal list
              commit("setDiseaseGroups", json.data);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // fetch all the phenotypes for this portal
    getPhenotypes: function getPhenotypes(_ref3) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var _state$host$subDomain3;
        var state, commit, qs, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              state = _ref3.state, commit = _ref3.commit;
              qs = query_string__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({
                q: state.defaultPortal || Object({"VUE_APP_GA4_ID":"G-FCLX0CH4C7","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEFAULT_PORTAL || ((_state$host$subDomain3 = state.host.subDomain) === null || _state$host$subDomain3 === void 0 ? void 0 : _state$host$subDomain3.replace(/\.?dev/, "")) || "md"
              }, {
                skipNull: true
              });
              _context3.next = 4;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/phenotypes?").concat(qs)).then(function (resp) {
                return resp.json();
              });
            case 4:
              json = _context3.sent;
              // set the list of phenotypes
              commit("setPhenotypes", json.data);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getDocumentations: function getDocumentations(_ref4) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var _state$host$subDomain4;
        var state, commit, qs, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              state = _ref4.state, commit = _ref4.commit;
              qs = query_string__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({
                q: state.defaultPortal || Object({"VUE_APP_GA4_ID":"G-FCLX0CH4C7","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEFAULT_PORTAL || ((_state$host$subDomain4 = state.host.subDomain) === null || _state$host$subDomain4 === void 0 ? void 0 : _state$host$subDomain4.replace(/\.?dev/, "")) || "md"
              }, {
                skipNull: true
              });
              _context4.next = 4;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/documentations?").concat(qs)).then(function (resp) {
                return resp.json();
              });
            case 4:
              json = _context4.sent;
              // set the list of documentations
              commit("setDocumentations", json.data);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getAncestries: function getAncestries(_ref5) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee5() {
        var _state$host$subDomain5;
        var state, commit, qs, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              state = _ref5.state, commit = _ref5.commit;
              qs = query_string__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({
                q: state.defaultPortal || Object({"VUE_APP_GA4_ID":"G-FCLX0CH4C7","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEFAULT_PORTAL || ((_state$host$subDomain5 = state.host.subDomain) === null || _state$host$subDomain5 === void 0 ? void 0 : _state$host$subDomain5.replace(/\.?dev/, "")) || "md"
              }, {
                skipNull: true
              });
              _context5.next = 4;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/ancestries?").concat(qs)).then(function (resp) {
                return resp.json();
              });
            case 4:
              json = _context5.sent;
              commit("setAncestries", json.data);
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // fetch all the complicaitons for given disease group
    getComplications: function getComplications(_ref6) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee6() {
        var _state$host$subDomain6;
        var state, commit, qs, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              state = _ref6.state, commit = _ref6.commit;
              qs = query_string__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({
                q: state.defaultPortal || Object({"VUE_APP_GA4_ID":"G-FCLX0CH4C7","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEFAULT_PORTAL || ((_state$host$subDomain6 = state.host.subDomain) === null || _state$host$subDomain6 === void 0 ? void 0 : _state$host$subDomain6.replace(/\.?dev/, "")) || "md"
              }, {
                skipNull: true
              });
              _context6.next = 4;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/complications")).then(function (resp) {
                return resp.json();
              });
            case 4:
              json = _context6.sent;
              // set the list of phenotypes
              commit("setComplications", json.data);
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // fetch all datasets for this portal
    getDatasets: function getDatasets(_ref7) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee7() {
        var _state$host$subDomain7;
        var state, commit, qs, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              state = _ref7.state, commit = _ref7.commit;
              qs = query_string__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({
                q: state.defaultPortal || Object({"VUE_APP_GA4_ID":"G-FCLX0CH4C7","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEFAULT_PORTAL || ((_state$host$subDomain7 = state.host.subDomain) === null || _state$host$subDomain7 === void 0 ? void 0 : _state$host$subDomain7.replace(/\.?dev/, "")) || "md"
              }, {
                skipNull: true
              });
              _context7.next = 4;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/datasets?").concat(qs)).then(function (resp) {
                return resp.json();
              });
            case 4:
              json = _context7.sent;
              // set the list of datasets
              commit("setDatasets", json.data);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    getUser: function getUser(context, access_token) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee8() {
        var data;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return fetch("https://oauth2.googleapis.com/tokeninfo?access_token=" + access_token).then(function (response) {
                return response.json();
              });
            case 2:
              data = _context8.sent;
              context.commit("setUser", data.email);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    // fetch all old links that need to be redirected
    getLinks: function getLinks(_ref8) {
      return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee9() {
        var state, commit, json;
        return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              state = _ref8.state, commit = _ref8.commit;
              _context9.next = 3;
              return fetch("".concat(_utils_bioIndexUtils__WEBPACK_IMPORTED_MODULE_12__["BIO_INDEX_HOST"], "/api/portal/links")).then(function (resp) {
                return resp.json();
              });
            case 3:
              json = _context9.sent;
              commit("setLinks", json.data);
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    }
  }
});

/***/ }),

/***/ "./src/portals/SysBio/assets/sysbioMenu.json":
/*!***************************************************!*\
  !*** ./src/portals/SysBio/assets/sysbioMenu.json ***!
  \***************************************************/
/*! exports provided: menuItems, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menuItems\":[{\"label\":\"Home\",\"path\":\"/\"},{\"label\":\"Resources\",\"path\":\"\",\"subMenuItems\":[{\"label\":\"Workbench\",\"path\":\"https://workbench.verily.com\",\"external\":true},{\"label\":\"Gene Expression Browser\",\"path\":\"/expression.html\"}]},{\"label\":\"About\",\"path\":\"\",\"subMenuItems\":[{\"label\":\"About Us\",\"path\":\"/about.html?page=about\"},{\"label\":\"Meet the Team\",\"path\":\"/about.html?page=team\"},{\"label\":\"How To Access AMP Data Directly\",\"path\":\"/about.html?page=access\"},{\"label\":\"Policies\",\"path\":\"/about.html?page=policies\"}]},{\"label\":\"Help\",\"path\":\"\",\"subMenuItems\":[{\"label\":\"Contact\",\"path\":\"/about.html?page=contact\"},{\"label\":\"Collaborate\",\"path\":\"/about.html?page=collaborate\"}]}]}");

/***/ }),

/***/ "./src/portals/SysBio/components/sysbioFooter.vue":
/*!********************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioFooter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sysbioFooter_vue_vue_type_template_id_1fb2951c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true */ "./src/portals/SysBio/components/sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true");
/* harmony import */ var _sysbioFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sysbioFooter.vue?vue&type=script&lang=js */ "./src/portals/SysBio/components/sysbioFooter.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _sysbioFooter_vue_vue_type_style_index_0_id_1fb2951c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css */ "./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sysbioFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _sysbioFooter_vue_vue_type_template_id_1fb2951c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sysbioFooter_vue_vue_type_template_id_1fb2951c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1fb2951c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/portals/SysBio/components/sysbioFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/portals/SysBio/components/sysbioFooter.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioFooter.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioFooter.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_style_index_0_id_1fb2951c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=style&index=0&id=1fb2951c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_style_index_0_id_1fb2951c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_style_index_0_id_1fb2951c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_style_index_0_id_1fb2951c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_style_index_0_id_1fb2951c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/portals/SysBio/components/sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_template_id_1fb2951c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioFooter.vue?vue&type=template&id=1fb2951c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_template_id_1fb2951c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioFooter_vue_vue_type_template_id_1fb2951c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/portals/SysBio/components/sysbioHeader.vue":
/*!********************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioHeader.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sysbioHeader_vue_vue_type_template_id_40e4f90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true */ "./src/portals/SysBio/components/sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true");
/* harmony import */ var _sysbioHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sysbioHeader.vue?vue&type=script&lang=js */ "./src/portals/SysBio/components/sysbioHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _sysbioHeader_vue_vue_type_style_index_0_id_40e4f90e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css */ "./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sysbioHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _sysbioHeader_vue_vue_type_template_id_40e4f90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sysbioHeader_vue_vue_type_template_id_40e4f90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40e4f90e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/portals/SysBio/components/sysbioHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/portals/SysBio/components/sysbioHeader.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioHeader.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioHeader.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_style_index_0_id_40e4f90e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=style&index=0&id=40e4f90e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_style_index_0_id_40e4f90e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_style_index_0_id_40e4f90e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_style_index_0_id_40e4f90e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_style_index_0_id_40e4f90e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/portals/SysBio/components/sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/portals/SysBio/components/sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_template_id_40e4f90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"19372b24-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"19372b24-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/portals/SysBio/components/sysbioHeader.vue?vue&type=template&id=40e4f90e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_template_id_40e4f90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_19372b24_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sysbioHeader_vue_vue_type_template_id_40e4f90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/portals/SysBio/css/f-layout.css":
/*!*********************************************!*\
  !*** ./src/portals/SysBio/css/f-layout.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!../../../../node_modules/postcss-loader/src??ref--7-oneOf-3-2!./f-layout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/portals/SysBio/css/f-layout.css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("44737435", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/portals/SysBio/css/sysbio.css":
/*!*******************************************!*\
  !*** ./src/portals/SysBio/css/sysbio.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!../../../../node_modules/postcss-loader/src??ref--7-oneOf-3-2!./sysbio.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/portals/SysBio/css/sysbio.css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("41ae88c9", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/portals/SysBio/mixins/sysbioMixin.js":
/*!**************************************************!*\
  !*** ./src/portals/SysBio/mixins/sysbioMixin.js ***!
  \**************************************************/
/*! exports provided: sysbioMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sysbioMixin", function() { return sysbioMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sysbioStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sysbioStore.js */ "./src/portals/SysBio/mixins/sysbioStore.js");
/* harmony import */ var _portals_SysBio_components_sysbioHeader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/portals/SysBio/components/sysbioHeader.vue */ "./src/portals/SysBio/components/sysbioHeader.vue");
/* harmony import */ var _portals_SysBio_components_sysbioFooter_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/portals/SysBio/components/sysbioFooter.vue */ "./src/portals/SysBio/components/sysbioFooter.vue");







vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BootstrapVue"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BootstrapVueIcons"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].config.productionTip = false;
var sysbioMixin = {
  store: _sysbioStore_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  components: {
    sysbioHeader: _portals_SysBio_components_sysbioHeader_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    sysbioFooter: _portals_SysBio_components_sysbioFooter_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
};

/***/ }),

/***/ "./src/portals/SysBio/mixins/sysbioStore.js":
/*!**************************************************!*\
  !*** ./src/portals/SysBio/mixins/sysbioStore.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_bioPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/bioPortal */ "./src/modules/bioPortal.js");



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    bioPortal: _modules_bioPortal__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
}));

/***/ }),

/***/ "./src/portals/SysBio/utils/content.js":
/*!*********************************************!*\
  !*** ./src/portals/SysBio/utils/content.js ***!
  \*********************************************/
/*! exports provided: getTextContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextContent", function() { return getTextContent; });
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);




var CONTENT_URL = "https://hugeampkpncms.org/rest/byor_content?id=";
function getTextContent(_x) {
  return _getTextContent.apply(this, arguments);
}
function _getTextContent() {
  _getTextContent = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(contentId) {
    var getBody,
      getAll,
      resourceUrl,
      jsonContent,
      _args = arguments;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          getBody = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          getAll = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
          resourceUrl = "".concat(CONTENT_URL).concat(contentId);
          _context.next = 5;
          return fetch(resourceUrl).then(function (resp) {
            return resp.json();
          });
        case 5:
          jsonContent = _context.sent;
          if (!(jsonContent.length === 0)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", null);
        case 8:
          return _context.abrupt("return", jsonContent[0]);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getTextContent.apply(this, arguments);
}

/***/ }),

/***/ "./src/utils/bioIndexUtils.js":
/*!************************************!*\
  !*** ./src/utils/bioIndexUtils.js ***!
  \************************************/
/*! exports provided: BIO_INDEX_HOST, BIO_INDEX_HOST_PRIVATE, apiUrl, rawUrl, request, query, match, DEFAULT_SIGMA, DEFAULT_GENESET_SIZE, DEFAULT_TRAIT_GROUP, TRAIT_GROUPS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIO_INDEX_HOST", function() { return BIO_INDEX_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIO_INDEX_HOST_PRIVATE", function() { return BIO_INDEX_HOST_PRIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rawUrl", function() { return rawUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SIGMA", function() { return DEFAULT_SIGMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GENESET_SIZE", function() { return DEFAULT_GENESET_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRAIT_GROUP", function() { return DEFAULT_TRAIT_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAIT_GROUPS", function() { return TRAIT_GROUPS; });
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_9__);








/* BioIndex Utilities
   - Data and methods useful for BioIndex that aren't worth keeping within a Vuex store
   - Includes constants like hostname (which can still be set via an environmental variable)
*/




// set cookie for authenticated requests
var session_cookie = undefined;

// lookup the one in the document
if (!!document.cookie) {
  session_cookie = cookie__WEBPACK_IMPORTED_MODULE_9___default.a.parse(document.cookie).session;
}

// updated at compile-time to the dev or production BioIndex server
var BIO_INDEX_HOST = "https://bioindex.hugeamp.org";
var BIO_INDEX_HOST_PRIVATE = "https://bioindex.hugeamp.org";

/* Returns the path for any BioIndex API end-point.
 */
function apiUrl(path) {
  var query_private = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (path.startsWith("/")) {
    path = path.substr(1);
  }
  if (query_private) {
    console.log("query_private:", query_private, path);
    return "".concat(BIO_INDEX_HOST_PRIVATE, "/").concat(path);
  } else {
    console.log("query_private is false:", query_private, path);
    return "".concat(BIO_INDEX_HOST, "/").concat(path);
  }
}

/* Useful for /api/raw end-points with query parameters.
 */
function rawUrl(path, query_params) {
  var qs = query_string__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(query_params, {
    skipNull: true
  });
  return "".concat(apiUrl(path)).concat(qs ? "?" + qs : "");
}

/* Build a generic request to a BioIndex end-point.
 */
function request(_x, _x2) {
  return _request.apply(this, arguments);
}

/* Perform a BioIndex query.
 */
function _request() {
  _request = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(path, query_params) {
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch(rawUrl(path, query_params), {
            headers: {
              "x-bioindex-access-token": session_cookie
            }
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _request.apply(this, arguments);
}
function query(_x3, _x4) {
  return _query.apply(this, arguments);
}

/* Perform a BioIndex match.
 */
function _query() {
  _query = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(index, q) {
    var opts,
      limit,
      onResolve,
      onError,
      onLoad,
      limitWhile,
      req,
      _args2 = arguments;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          opts = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
          limit = opts.limit, onResolve = opts.onResolve, onError = opts.onError, onLoad = opts.onLoad, limitWhile = opts.limitWhile;
          req = request("/api/bio/query/".concat(index), {
            q: q,
            limit: limit
          });
          _context2.next = 5;
          return processRequest(req, onResolve, onError, onLoad, limitWhile);
        case 5:
          return _context2.abrupt("return", _context2.sent);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _query.apply(this, arguments);
}
function match(_x5, _x6) {
  return _match.apply(this, arguments);
}

/* Alters the json to filter results and stop continuing.
 */
function _match() {
  _match = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3(index, q) {
    var opts,
      limit,
      onLoad,
      onResolve,
      onError,
      req,
      _args3 = arguments;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          opts = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
          limit = opts.limit, onLoad = opts.onLoad, onResolve = opts.onResolve, onError = opts.onError;
          req = request("/api/bio/match/".concat(index), {
            q: q,
            limit: limit
          }); // perform the fetch, make sure it succeeds
          _context3.next = 5;
          return processRequest(req, onResolve, onError, onLoad);
        case 5:
          return _context3.abrupt("return", _context3.sent);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _match.apply(this, arguments);
}
function limitRecordsWhile(json, limitWhile) {
  var data = json.data;
  if (!!limitWhile) {
    data = json.data.filter(limitWhile);

    // no continuations if less data
    if (data.length < json.count) {
      json.continuation = null;
    }
  }
  return data;
}

/* Follow continuations and continue reading all data.
 */
function processRequest(_x7, _x8, _x9, _x10, _x11) {
  return _processRequest.apply(this, arguments);
}
function _processRequest() {
  _processRequest = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4(req, onResolve, onError, onLoad, limitWhile) {
    var resp, json, data, _req;
    return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return req;
        case 2:
          resp = _context4.sent;
          _context4.next = 5;
          return resp.json();
        case 5:
          json = _context4.sent;
          data = []; // The `limitWhile` parameter assumes that the results of the
          // query are ordered in some way (e.g. by pValue), so that
          // when the test fails, we know that no more records will meet
          // the criteria either.
          // resolve or error
          if (!(resp.status === 200)) {
            _context4.next = 22;
            break;
          }
          data = limitRecordsWhile(json, limitWhile);
          if (!!onResolve) {
            onResolve(json);
          }

          // this will also fail if resp.status !== 200
        case 10:
          if (!json.continuation) {
            _context4.next = 21;
            break;
          }
          _req = request("/api/bio/cont", {
            token: json.continuation
          }); // follow the continuation
          _context4.next = 14;
          return _req;
        case 14:
          resp = _context4.sent;
          _context4.next = 17;
          return resp.json();
        case 17:
          json = _context4.sent;
          if (resp.status === 200) {
            data = data.concat(limitRecordsWhile(json, limitWhile));
            if (!!onResolve) {
              onResolve(json);
            }
          }
          _context4.next = 10;
          break;
        case 21:
          // done
          if (!!onLoad) {
            onLoad(json);
          }
        case 22:
          if (resp.status !== 200) {
            if (!!onError) {
              onError(json);
            }
          }
          return _context4.abrupt("return", data);
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _processRequest.apply(this, arguments);
}
var DEFAULT_SIGMA = 2;
var DEFAULT_GENESET_SIZE = "small";
var DEFAULT_TRAIT_GROUP = "all";
var TRAIT_GROUPS = ["portal", "gcat_trait", "rare_v2"];
/* harmony default export */ __webpack_exports__["default"] = ({
  query: query,
  match: match,
  apiUrl: apiUrl,
  request: request,
  rawUrl: rawUrl,
  BIO_INDEX_HOST: BIO_INDEX_HOST,
  BIO_INDEX_HOST_PRIVATE: BIO_INDEX_HOST_PRIVATE,
  DEFAULT_SIGMA: DEFAULT_SIGMA,
  DEFAULT_GENESET_SIZE: DEFAULT_GENESET_SIZE,
  DEFAULT_TRAIT_GROUP: DEFAULT_TRAIT_GROUP,
  TRAIT_GROUPS: TRAIT_GROUPS
});

/***/ }),

/***/ "./src/utils/dataConvert.js":
/*!**********************************!*\
  !*** ./src/utils/dataConvert.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray.js */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.iterator.for-each.js */ "./node_modules/core-js/modules/es.iterator.for-each.js");
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.iterator.reduce.js */ "./node_modules/core-js/modules/es.iterator.reduce.js");
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.math.log10.js */ "./node_modules/core-js/modules/es.math.log10.js");
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_36__);





































var convertData = function convertData(CONVERT, DATA, PHENOTYPE_MAP) {
  var convertedData = [];
  var joinValues = function joinValues(FIELDS, jBy, fData) {
    var fieldValue = "";
    var fieldsLength = FIELDS.length;
    for (var i = 0; i < fieldsLength; i++) {
      if (i < fieldsLength - 1) {
        fieldValue += fData[FIELDS[i]] + jBy;
      } else {
        fieldValue += fData[FIELDS[i]];
      }
    }
    return fieldValue;
  };
  var joinMultiValues = function joinMultiValues(FIELDS, jBy, fData) {
    var fieldValue = "";
    var fieldsLength = FIELDS.length;
    for (var i = 0; i < fieldsLength; i++) {
      if (i < fieldsLength - 1) {
        fieldValue += fData[FIELDS[i]] + jBy[i];
      } else {
        fieldValue += fData[FIELDS[i]];
      }
    }
    if (jBy.length >= FIELDS.length) {
      var startIndex = jBy.length - (jBy.length - FIELDS.length + 1);
      for (var _i2 = startIndex; _i2 < jBy.length; _i2++) {
        fieldValue += jBy[_i2];
      }
    }
    return fieldValue;
  };
  var scoreColumns = function scoreColumns(FIELDS, scoreBy, fData) {
    var fieldValue = 0;
    var fieldsLength = FIELDS.length;
    FIELDS.map(function (fName) {
      var scoreType = scoreBy[fName].type;
      switch (scoreType) {
        case "boolean":
          var value2Score = scoreBy[fName]["value to score"][fData[fName]];
          fieldValue += value2Score;
          break;
      }
    });
    return fieldValue / fieldsLength;
  };
  var formatLocus = function formatLocus(CHR, START, END, fData) {
    var locus = fData[CHR] + ':';
    locus += Math.ceil((fData[START] + fData[END]) / 2);
    return locus;
  };
  var array2String = function array2String(CONTENT, SEPARATOR) {
    var string = "";
    CONTENT.map(function (c) {
      string += c + SEPARATOR;
    });
    return string.slice(0, -1);
  };
  var getParameterByName = function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  var applyConvert = function applyConvert(d, CONVERT, PHENOTYPE_MAP) {
    var tempObj = {};
    CONVERT.map(function (c) {
      var cType = c.type;
      var rawValue = !!d[c["raw field"]] ? d[c["raw field"]] : !!c["if no value"] ? c["if no value"] : null;
      if (d[c["raw field"]] === 0) {
        rawValue = "0";
      }
      switch (cType) {
        case "from parameter":
          var param = c["parameter"];
          tempObj[c["field name"]] = getParameterByName(param);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "sub to top":
          var subList = d;
          if (!!c["sub path"]) {
            c["sub path"].map(function (path) {
              subList = subList[path];
            });
          }
          if (!!subList) {
            var subRow;
            if (!!c["copy by"]) {
              switch (c["copy by"]) {
                case "condition":
                  if (c["condition"]["type"] == "equal to") {
                    subList.map(function (row) {
                      if (row[c["condition"]["field"]] == c["condition"]["value"]) {
                        subRow = row;
                      }
                    });
                  }
                  break;
              }
            }
            tempObj[c["field name"]] = subRow[c["raw field"]];
          }
          break;
        case "join":
          tempObj[c["field name"]] = joinValues(c["fields to join"], c["join by"], d);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "join multi":
          tempObj[c["field name"]] = joinMultiValues(c["fields to join"], c["join by"], d);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "split":
          var newFields = c["field name"];
          var newFieldValues = [];
          var string2Split = !!tempObj[c["field to split"]] ? tempObj[c["field to split"]] : d[c["field to split"]];
          if (!!string2Split) {
            var loopIndex = 1;
            c["split by"].map(function (s) {
              var _string2Split$split = string2Split.split(s),
                _string2Split$split2 = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_string2Split$split),
                key = _string2Split$split2[0],
                rest = _string2Split$split2.slice(1);
              string2Split = rest.join(s);
              if (loopIndex < c["split by"].length) {
                newFieldValues.push(key);
              } else if (loopIndex = c["split by"].length) {
                newFieldValues.push(key);
                newFieldValues.push(rest.join(s));
              }
              loopIndex++;
            });
            loopIndex = 0;
            newFields.map(function (f) {
              tempObj[f] = newFieldValues[loopIndex];
              d[f] = tempObj[f];
              loopIndex++;
            });

            //console.log(tempObj);
          }
          break;
        case "get locus":
          tempObj[c["field name"]] = formatLocus(c["chromosome"], c["start"], c["end"], d);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "calculate":
          var calType = c["calculation type"];
          switch (calType) {
            case "-log10":
              tempObj[c["field name"]] = -Math.log10(d[c["raw field"]]);
              d[c["field name"]] = tempObj[c["field name"]];
              break;
            case "math":
              var calcString = "";
              c["expression"].map(function (e) {
                var eValue = !!["+", "-", "*", "/", "(", ")"].includes(e) ? e : typeof e === 'number' ? e : !!tempObj[e] || tempObj[e] === 0 ? tempObj[e] === 0 ? 0 : tempObj[e] : d[e] === 0 ? 0 : d[e];
                calcString += eValue;
              });
              tempObj[c["field name"]] = eval(calcString);
              if ((!!c['min number'] || c['min number'] === 0) && tempObj[c["field name"]] < c['min number']) {
                tempObj[c["field name"]] = c['min number'];
              }
              if ((!!c['max number'] || c['max number'] === 0) && tempObj[c["field name"]] > c['max number']) {
                tempObj[c["field name"]] = c['max number'];
              }
              d[c["field name"]] = tempObj[c["field name"]];
          }
          break;
        case "js math":
          var calFunc = c["method"];
          tempObj[c["field name"]] = Math[calFunc](d[c["raw field"]]);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "raw":
          if (!!rawValue) {
            tempObj[c["field name"]] = rawValue;
            d[c["field name"]] = tempObj[c["field name"]];
          }
          break;
        case "map name":
          tempObj[c["field name"]] = c["map"][rawValue];
          break;
        case "string to number":
          tempObj[c["field name"]] = Number(d[c["raw field"]]);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "score columns":
          tempObj[c["field name"]] = scoreColumns(c["fields to score"], c["score by"], d);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "array to string":
          tempObj[c["field name"]] = array2String(d[c["raw field"]], c["separate by"]);
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "string to array":
          var sArray = d[c["raw field"]].split(c["separate by"]);
          var takeIndex = c["take index"] === 0 || !!c["take index"] ? sArray[c["take index"]] : null;
          if (takeIndex) {
            tempObj[c["field name"]] = sArray[c["take index"]];
          } else {
            tempObj[c["field name"]] = sArray;
          }
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "replace characters":
          var replaceArr = c["replace"];
          var rawString = d[c["raw field"]];
          var newString = "";
          var sIndex = 0;
          replaceArr.map(function (r) {
            newString = sIndex == 0 ? rawString : newString;
            if (!!rawString) {
              newString = newString.replaceAll(r.from, r.to);
            }
            sIndex++;
          });
          tempObj[c["field name"]] = newString;
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "kp phenotype name":
          var pID = d[c["raw field"]];
          tempObj[c["field name"]] = !!PHENOTYPE_MAP[pID] ? PHENOTYPE_MAP[pID].description : pID;
          d[c["field name"]] = tempObj[c["field name"]];
          break;
        case "boolean to string":
          var value = d[c["raw field"]] === true || d[c["raw field"]] == 1 ? "true" : d[c["raw field"]] === false || d[c["raw field"]] === 0 ? "false" : "";
          tempObj[c["field name"]] = value;
          break;
      }
    });
    return tempObj;
  };
  var _flatten = function flatten(obj) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (!(obj instanceof Object)) return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, path.replace(/\.$/g, ''), obj);
    return Object.keys(obj).reduce(function (output, key) {
      return obj instanceof Array ? Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, output), _flatten(obj[key], path + '[' + key + '].')) : Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, output), _flatten(obj[key], path + key + '.'));
    }, {});
  };
  if (CONVERT != "no convert") {
    var data2Rows = CONVERT.filter(function (c) {
      return c.type == "data to rows";
    });
    if (data2Rows.length > 0) {
      var rowsData = [];
      data2Rows.map(function (f) {
        DATA.map(function (d) {
          var row = d[f["raw field"]];
          var orgList = f["group by"];
          if (!!row) {
            var rowData = {};
            orgList.map(function (field, fIndex) {
              rowData[field] = [];
              rowData["_key" + fIndex] = [];
            });
            // first, flatten data, then get the list of flatten keys
            var flattenRow = _flatten(row);
            var flattenKeys = Object.keys(flattenRow);
            flattenKeys.map(function (key) {
              orgList.map(function (field, fIndex) {
                if (!!key.includes(field)) {
                  rowData[field].push(flattenRow[key]);
                  rowData["_key" + fIndex].push(key);
                }
              });
            });
            var rowsLength = rowData[orgList[0]].length;
            var _loop = function _loop(i) {
              var tempObj = {};
              orgList.map(function (field, fIndex) {
                tempObj[field] = rowData[field][i];
                tempObj["_key" + fIndex] = rowData["_key" + fIndex][i];
              });
              rowsData.push(tempObj);
            };
            for (var i = 0; i < rowsLength; i++) {
              _loop(i);
            }
          }
        });
      });
      DATA = rowsData;
    }
    DATA.map(function (d) {
      var tempObj = applyConvert(d, CONVERT, PHENOTYPE_MAP);

      // Apply data convert to feature data level
      var dKeys = Object.keys(tempObj);
      var newTempObj = {};

      // here is the problem
      dKeys.map(function (dKey) {
        if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tempObj[dKey]) == "object" && Array.isArray(tempObj[dKey]) == true && tempObj[dKey].length > 0) {
          var tempArr = [];
          tempObj[dKey].map(function (fd) {
            if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fd) == "object" && Array.isArray(fd) == false) {
              var tempFDObj = applyConvert(fd, CONVERT, PHENOTYPE_MAP);
              tempArr.push(tempFDObj);
            }
          });
          newTempObj[dKey] = tempArr;
        } else {
          newTempObj[dKey] = tempObj[dKey];
        }
      });
      convertedData.push(tempObj);
    });
  } else {
    convertedData = DATA;
  }
  return convertedData;
};
var csv2Json = function csv2Json(DATA) {
  var csvArr = CSVToArray(DATA, ",");
  var jsonHeader = csvArr[0];
  csvArr.shift();
  var jsonData = [];
  csvArr.map(function (i) {
    if (i.length > 1) {
      var tempObj = {};
      for (var h = 0; h < i.length; h++) {
        tempObj[jsonHeader[h]] = testNumber(i[h]) == true ? Number(i[h]) : breakLines(i[h]);
      }
      jsonData.push(tempObj);
    }
  });
  return jsonData;
};
var tsv2Json = function tsv2Json(DATA) {
  var lines = DATA.split('\n');
  var headers = lines.shift().split('\t');
  var jsonArray = [];
  var ifNumber = function ifNumber(str) {
    return !isNaN(str) && str.trim() !== '' ? Number(str) : str;
  };
  lines.forEach(function (line) {
    var values = line.split('\t');
    var obj = {};
    headers.forEach(function (header, index) {
      obj[header] = ifNumber(values[index]);
    });
    jsonArray.push(obj);
  });
  return jsonArray;
};
var flatJson = function flatJson(DATA) {
  /// first wrap values with comma

  var wrappedData = [];
  DATA.map(function (row) {
    var wrappedObj = {};
    for (var _i3 = 0, _Object$entries = Object.entries(row); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i3], 2),
        dKey = _Object$entries$_i[0],
        dValue = _Object$entries$_i[1];
      if (typeof dValue == 'string' && dValue.includes(',')) {
        wrappedObj[dKey] = '"' + dValue + '"';
      } else if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dValue) == 'object') {
        var obj2Sting = JSON.stringify(dValue);
        obj2Sting = obj2Sting.replaceAll('"', '');
        if (obj2Sting.includes(',')) {
          obj2Sting = '"' + obj2Sting + '"';
        }
        wrappedObj[dKey] = obj2Sting;
      } else {
        wrappedObj[dKey] = dValue;
      }
    }
    wrappedData.push(wrappedObj);
  });
  var flatJson = [];
  wrappedData.map(function (row) {
    var flatObj = _flatten2(row);
    flatJson.push(flatObj);
  });
  return flatJson;
};
var _flatten2 = function flatten(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!(obj instanceof Object)) return Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, path.replace(/\.$/g, ''), obj);
  return Object.keys(obj).reduce(function (output, key) {
    return obj instanceof Array ? Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, output), _flatten2(obj[key], path + '[' + key + '].')) : Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, output), _flatten2(obj[key], path + key + '.'));
  }, {});
};
var testNumber = function testNumber(STR) {
  var reg = /^-?[\d.]+(?:e-?\d+)?$/;
  return reg.test(STR);
};
var breakLines = function breakLines(STR) {
  if (!!STR) {
    var cleanText = STR.replaceAll("\n", "<br>");
    return cleanText;
  }
};
var CSVToArray = function CSVToArray(strData, strDelimiter) {
  strDelimiter = strDelimiter || ",";
  var objPattern = new RegExp(
  // Delimiters.
  "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
  // Quoted fields.
  "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
  // Standard fields.
  "([^\"\\" + strDelimiter + "\\r\\n]*))", "gi");

  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec(strData)) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }
    var strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
    } else {
      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];
    }

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return arrData;
};
var object2Array = function object2Array(DATASET, COMPARECONFIG, KEY) {
  var arrayedObject = [];
  var groupField = COMPARECONFIG["fields to compare"][0];
  var comapredF = COMPARECONFIG["fields to compare"];
  var _loop2 = function _loop2() {
    var _Object$entries2$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries2[_i4], 2),
      dKey = _Object$entries2$_i[0],
      dValue = _Object$entries2$_i[1];
    var groups = Object.keys(dValue[groupField]);
    groups.map(function (group) {
      var tempObj = {};
      for (var _i5 = 0, _Object$entries3 = Object.entries(dValue); _i5 < _Object$entries3.length; _i5++) {
        var _Object$entries3$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries3[_i5], 2),
          iKey = _Object$entries3$_i[0],
          iValue = _Object$entries3$_i[1];
        if (!!comapredF.includes(iKey)) {
          tempObj[iKey] = iValue[group];
        } else {
          tempObj[iKey] = iValue;
        }
      }
      arrayedObject.push(tempObj);
    });
  };
  for (var _i4 = 0, _Object$entries2 = Object.entries(DATASET); _i4 < _Object$entries2.length; _i4++) {
    _loop2();
  }
  return arrayedObject;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  convertData: convertData,
  csv2Json: csv2Json,
  tsv2Json: tsv2Json,
  object2Array: object2Array,
  flatJson: flatJson
});

/***/ }),

/***/ "./src/utils/formatters.js":
/*!*********************************!*\
  !*** ./src/utils/formatters.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.iterator.for-each.js */ "./node_modules/core-js/modules/es.iterator.for-each.js");
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.math.log10.js */ "./node_modules/core-js/modules/es.math.log10.js");
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_to_exponential_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.to-exponential.js */ "./node_modules/core-js/modules/es.number.to-exponential.js");
/* harmony import */ var core_js_modules_es_number_to_exponential_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_exponential_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_38__);







































function alleleFormatter(reference, alt) {
  if (reference.length > 3) {
    reference = reference.substr(0, 3) + "...";
  }
  if (alt.length > 3) {
    alt = alt.substr(0, 3) + "...";
  }
  return "".concat(reference, "/").concat(alt);
}
function dataTypeFormatter(s) {
  var types = {
    GWAS: "GWAS",
    ExChip: "Exome chip",
    ExSeq: "Exome sequence analysis",
    WGS: "Whole genome sequencing",
    IChip: "IChip"
  };
  return types[s];
}
function ancestryFormatter(s) {
  var ancestries = {
    ABA: "Aboriginal Australian",
    AA: "African American or Afro-Caribbean",
    AF: "African unspecified",
    SSAF: "Sub-Saharan African",
    ASUN: "Asian unspecified",
    CA: "Central Asian",
    EA: "East Asian",
    SA: "South Asian",
    SEA: "South East Asian",
    EU: "European",
    GME: "Greater Middle Eastern (Middle Eastern, North African, or Persian)",
    HS: "Hispanic or Latin American",
    NAM: "Native American",
    NR: "Not reported",
    OC: "Oceanian",
    OTH: "Other",
    OAD: "Other admixed ancestry",
    Mixed: "Mixed ancestry"
  };
  return ancestries[s];
}
function snakeFormatter(s) {
  if (s) {
    return s.replace(/(^|_|\s)([a-z])/g, function (m, t, s) {
      return "".concat(t.length > 0 ? " " : "").concat(s.toUpperCase());
    });
  }
}
function toSnakeFormatter(s) {
  if (s) {
    return s.trim().toLowerCase().replaceAll(' ', '_');
  }
}
function annotationFormatter(s) {
  return snakeFormatter(s);
}
function bioTypeFormatter(s) {
  return capitalizedFormatter(s);
}
function capitalizedFormatter(s) {
  return snakeFormatter(s);
}
function consequenceFormatter(s) {
  return capitalizedFormatter(s);
}
function consequenceMeaning(s) {
  var consequences = {
    transcript_ablation: "It deletes a region that includes a transcript feature.",
    splice_donor_variant: "It is a splice variant that changes the 2-base region at the 5' end of an intron.",
    splice_acceptor_variant: "It is a splice variant that changes the 2-base region at the 3' end of an intron.",
    stop_gained: "It is a sequence variant that introduces a stop codon, leading to a shortened transcript.",
    frameshift_variant: "It causes a frameshift, disrupting the translational reading frame because the number of nucleotides inserted or deleted is not a multiple of three.",
    stop_lost: "It is a sequence variant that changes a stop codon, resulting in an elongated transcript.",
    initiator_codon_variant: "It changes the first codon of a transcript.",
    inframe_insertion: "It is an inframe non-synonymous variant that inserts bases into the coding sequence.",
    inframe_deletion: "It is an inframe non-synonymous variant that deletes bases from the coding sequence.",
    missense_variant: "It results in a different amino acid sequence but preserves length.",
    transript_amplification: "It amplifies a region containing a transcript.",
    splice_region_variant: "It is a sequence variant in which a change has occurred within the region of a splice site, either within 1-3 bases of the exon or 3-8 bases of the intron.",
    incomplete_terminal_codon_variant: "It is a sequence variant that changes at least one base of the final codon of an incompletely annotated transcript.",
    synonymous_variant: "It does not cause any change to the encoded amino acid.",
    stop_retained_variant: "It changes the set of bases in a stop codon, but the stop codon itself remains functional.",
    coding_sequence_variant: "It changes the coding sequence.",
    mature_miRNA_variant: "It is a transcript variant located with the sequence of the mature miRNA.",
    "5_prime_UTR_variant": "It is found in the 5' untranslated region.",
    "3_prime_UTR_variant": "It is found in the 3' untranslated region.",
    non_coding_exon_variant: "It changes the non-coding exon sequence.",
    nc_transcript_variant: "It is a transcript variant of a non-coding RNA.",
    intron_variant: "It is a transcript variant occurring within an intron.",
    nmd_transcript_variant: "It falls in a transcript that is the target of nonsense-mediated decay.",
    upstream_gene_variant: "It is located upstream (5') of the gene.",
    downstream_gene_variant: "It is located downstream (3') of the gene.",
    tfbs_ablation: "It deletes a region that includes a transcription factor binding site.",
    tfbs_amplification: "It amplifies a region that includes a transcription factor binding site.",
    tf_binding_site_variant: "It is located within a transcription factor binding site.",
    regulatory_region_variant: "It is located within a regulatory region.",
    regulatory_region_ablation: "It deletes a regulatory region.",
    regulatory_region_amplification: "It amplifies a regulatory region.",
    feature_elongation: "It causes the extension of a genomic feature with regard to the reference sequence.",
    feature_truncation: "It causes the truncation of a genomic feature with regard to the reference sequence.",
    intergenic_variant: "It is located in an intergenic region (between genes)."
  };
  return consequences[s] || "Unknown";
}
function dbSNPFormatter(dbSNP) {
  return dbSNP;
}
function floatFormatter(value) {
  if (!value) {
    return "-";
  }
  return Number.parseFloat(value).toFixed(2);
}
function tpmFormatter(value) {
  return Number.isNaN(Number.parseFloat(value)) ? "-" : Number.parseFloat(value).toFixed(3);
}
function pValueFormatter(value) {
  if (!value) {
    return "-";
  }
  var x = Number.parseFloat(value);
  if (x < 1e-5) {
    return x.toExponential(2);
  } else {
    var num = (x.toFixed(7) * 1).toString(); // remove trailing zeroes using string hacks
    return num;
  }
}
function effectFormatter(value) {
  if (!value) {
    return "-";
  }
  return Number.parseFloat(value).toFixed(4);
}
function intFormatter(value) {
  return value ? Number.parseInt(value).toLocaleString() : "-";
}
function igvLocusFormatter(igvLocus) {
  var chromosome = igvLocus.chr.charAt(3);
  var start = igvLocus.start.replace(/,/g, "");
  var end = igvLocus.end.replace(/,/g, "");
  return locusFormatter(chromosome, start, end);
}
function locusFormatter(chromosome, position) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  if (end) {
    return "".concat(chromosome, ":").concat(intFormatter(position), "-").concat(intFormatter(end));
  }
  return "".concat(chromosome, ":").concat(intFormatter(position));
}
function phenotypeFormatter(phenotype) {
  return phenotype ? phenotype.description : "-";
}
function methodFormatter(method) {
  if (!method) {
    return "-";
  }
  return capitalizedFormatter(method);
}
function tissueFormatter(tissue) {
  return snakeFormatter(tissue);
}
function pValueCss(value, max) {
  if (value === max) return 100;
  var maxWidth = Math.log(-Math.log10(max));
  var barWidth = Math.log(-Math.log10(value));
  var calculated = barWidth / maxWidth * 100;
  return calculated > 100 ? 100 : calculated;
}
function decimalFormatter(NUM, DECIMAL) {
  var decimal = DECIMAL == 0 ? 1 : DECIMAL * 10;
  var newNum = Math.round(NUM * decimal) / decimal;
  return newNum;
}
function maskFormatter(mask) {
  var maskLookup = {
    LoF_HC: {
      description: "LofTee",
      sort: 0
    },
    loftee: {
      description: "LofTee",
      sort: 0
    },
    "16of16": {
      description: "16/16",
      sort: 1
    },
    ns_severe: {
      description: "16/16",
      sort: 1
    },
    "11of11": {
      description: "11/11 ",
      sort: 2
    },
    ns_stringent: {
      description: "11/11 ",
      sort: 2
    },
    "5of5": {
      description: "5/5",
      sort: 3
    },
    ns_strict: {
      description: "5/5",
      sort: 3
    },
    "5of5_LoF_LC": {
      description: "5/5 + LofTee LC",
      sort: 4
    },
    ns_strict_fp_ptvs: {
      description: "5/5 + LofTee LC",
      sort: 4
    },
    "1of5_1pct": {
      description: "5/5 + 1/5 1%",
      sort: 5
    },
    ns_strict_ns_broad_1pct: {
      description: "5/5 + 1/5 1%",
      sort: 5
    },
    "0of5_1pct": {
      description: "5/5 + 0/5 1%",
      sort: 6
    },
    ns_strict_ns_1pct: {
      description: "5/5 + 0/5 1%",
      sort: 6
    },
    hclof_noflag_canonical: {
      description: "Rare LoF",
      sort: 7
    },
    "hclof_noflag_missense0.8_canonical": {
      description: "Rare LoF + Missense",
      sort: 7
    },
    "missense0.5_canonical": {
      description: "Ultra-rare Missense",
      sort: 7
    }
  };
  if (maskLookup[mask]) {
    return maskLookup[mask];
  }
  return {
    description: mask,
    sort: 7
  };
}
function ssColumnFormat(ROW_DATA, FORMAT, VALUE) {
  var content;
  switch (FORMAT.type) {
    case "link":
      var href = FORMAT.link;
      FORMAT.parameters.map(function (p) {
        href = href.replace('$' + p, ROW_DATA[p]);
      });
      /*for (const [rKey, rValue] of Object.entries(ROW_DATA)) {
           href = href.replace('$' + rKey, rValue);
      }*/

      content = "<a href='" + href + "'>" + VALUE + "</a>";
      break;
    case "scientific notation":
      content = pValueFormatter(VALUE);
      content = content == "-" ? 0 : content;
      break;
    case "ancestry":
      content = ancestryFormatter(VALUE);
      break;
  }
  return content;
}
function formatCellValues(VALUE, columnKeyObj, formatTypes, linkToNewTab, KEY, CONFIG, PMAP, DATA_SCORES) {
  var cellValue = VALUE;
  formatTypes.map(function (type) {
    var linkString, linkLabel, fieldValue, weight, weightClasses;
    switch (type) {
      case "js math":
        var calFunc = columnKeyObj["method"];
        cellValue = Math[calFunc](VALUE);
        break;
      case "scientific notation":
        cellValue = pValueFormatter(VALUE);
        cellValue = cellValue == "-" ? 0 : cellValue;
        break;
      case "fixed 2":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 10) / 10;
        break;
      case "fixed 3":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 100) / 100;
        break;
      case "fixed 4":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 1000) / 1000;
        break;
      case "fixed 5":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 10000) / 10000;
        break;
      case "fixed 6":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 100000) / 100000;
        break;
      case "fixed 7":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 1000000) / 1000000;
        break;
      case "fixed 8":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 10000000) / 10000000;
        break;
      case "fixed 9":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 100000000) / 100000000;
        break;
      case "fixed 10":
        cellValue = VALUE == "-" ? 0 : Math.round(Number.parseFloat(VALUE) * 1000000000) / 1000000000;
        break;
      case "kp phenotype link":
        var phenotypeName = PMAP[cellValue] ? PMAP[cellValue].description : cellValue;
        linkString = "<a href='" + columnKeyObj["link to"] + cellValue;
        linkString += !!columnKeyObj["link type"] && columnKeyObj["link type"] == "button" ? "' class='btn btn-sm btn-outline-secondary link-button" : "";
        linkLabel = columnKeyObj["link label"] ? columnKeyObj["link label"] : phenotypeName;
        linkString += linkToNewTab == "true" ? "' target='_blank'>" + linkLabel + "</a>" : "'>" + linkLabel + "</a>";
        cellValue = linkString;
        break;
      case "link":
        if (!!cellValue && cellValue != "") {
          var linksArr = [];
          var cellVals = typeof cellValue == "string" ? cellValue.split(",") : Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cellValue) == "object" && !!cellValue.isArray() ? cellValue : [cellValue];
          cellVals.map(function (v) {
            var link = "<a href='" + columnKeyObj["link to"] + v;
            link += !!columnKeyObj["link type"] && columnKeyObj["link type"] == "button" ? "' class='btn btn-sm btn-outline-secondary link-button" : "";
            linkLabel = columnKeyObj["link label"] ? columnKeyObj["link label"] : v;
            link += linkToNewTab == "true" ? "' target='_blank'>" + linkLabel + "</a>" : "'>" + linkLabel + "</a>";
            linksArr.push(link);
          });
          linkString = linksArr.join();
        }
        cellValue = !!cellValue && cellValue != "" ? linkString : cellValue;
        break;
      case "map name":
        var tempValue = cellValue;
        cellValue = columnKeyObj["map"][cellValue];
        if (!!columnKeyObj["link to"]) {
          cellValue = "<a href='" + tempValue + "'>" + cellValue + "</a>";
        }
        break;
      case "as link":
        cellValue = "<a href='" + cellValue + "'>" + cellValue + "</a>";
        break;
      case "image":
        if (!!cellValue && cellValue != "") {
          cellValue = '<img width="' + columnKeyObj["width"] + '" height="' + columnKeyObj["height"] + '" src="' + cellValue + '" />';
        }
        break;
      case "video":
        if (!!cellValue && cellValue != "") {
          cellValue = '<video width="' + columnKeyObj["width"] + '" height="' + columnKeyObj["height"] + '" controls><source src="' + cellValue + '" type="video/mp4" >\
                            Your browser does not support the video tag.</video>';
        }
        break;
      case "list":
        if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cellValue) != "object") {
          cellValue = "<div class=\"list-item\">".concat(cellValue, "</div>");
        } else if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cellValue) === "object" && Array.isArray(cellValue)) {
          var cellValueString = "<ul>";
          cellValue.map(function (value) {
            cellValueString += "<li>".concat(value, "</li>");
          });
          cellValueString += "</ul>";
          cellValue = cellValueString;
        }
        break;
      case "value in class":
        if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cellValue) != "object") {
          var _colorize = formatTypes.includes('colorize');
          cellValue = "<span class=\"".concat(cellValue, " ").concat(_colorize ? 'do-color' : '', "\">").concat(cellValue, "</span>");
        } else if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cellValue) == "object" && !!Array.isArray(cellValue)) {
          var _cellValueString = "";
          cellValue.map(function (value) {
            _cellValueString += "<span class=\"".concat(value, " ").concat(colorize ? 'do-color' : '', "\">").concat(value, "</span>");
          });
          cellValue = _cellValueString;
        }
        break;
      case "render background percent":
        fieldValue = typeof VALUE != "number" ? columnKeyObj["percent if empty"] : VALUE;
        weight = Math.floor((Number(fieldValue) - DATA_SCORES[KEY].low) / (DATA_SCORES[KEY].high - DATA_SCORES[KEY].low) * 100);
        weightClasses = "cell-weight-" + weight + " ";
        weightClasses += VALUE < 0 ? "weight-negative" : "weight-positive";
        cellValue = "<span class='" + weightClasses + "'>" + cellValue + "</span>";
        break;
      case "render background percent negative":
        fieldValue = typeof VALUE != "number" ? columnKeyObj["percent if empty"] : VALUE;
        weight = 100 - Math.floor((Number(fieldValue) - DATA_SCORES[KEY].low) / (DATA_SCORES[KEY].high - DATA_SCORES[KEY].low) * 100);
        weightClasses = "cell-weight-" + weight + " ";
        weightClasses += VALUE < 0 ? "weight-negative" : "weight-positive";
        cellValue = "<span class='" + weightClasses + "'>" + cellValue + "</span>";
        break;
      case "direction triangle":
        cellValue = cellValue > 0 ? '<span class="direction-positive">&#x25B2;</span>' + cellValue : '<span class="direction-negative">&#x25BC;</span>' + cellValue;
        break;
      case "direction triangle opposite":
        cellValue = cellValue > 0 ? '<span class="direction-positive">&#x25BC;</span>' + cellValue : '<span class="direction-negative">&#x25B2;</span>' + cellValue;
        break;
      case "shorten":
        var shortenTo = columnKeyObj["shorten to"];
        var shortString = columnKeyObj["shorten anchor"] == "start" ? cellValue.substring(0, shortenTo) : cellValue.substring(cellValue.length - shortenTo, cellValue.length);
        cellValue = columnKeyObj["shorten anchor"] == "start" ? "<span class='byor-shortened-string'><span class='raw-string'>" + cellValue + "</span>" + shortString + "...</span>" : "<span class='byor-shortened-string'><span class='raw-string'>" + cellValue + "</span>..." + shortString + "</span>";
    }
  });
  return cellValue;
}
function getHoverValue(VALUE) {
  var formatted;
  if (typeof VALUE == 'number' && !isNaN(VALUE)) {
    formatted = pValueFormatter(VALUE);
  } else {
    formatted = VALUE;
  }
  return formatted;
}
function BYORColumnFormatter(VALUE, KEY, CONFIG, PMAP, DATA_SCORES) {
  if (CONFIG["column formatting"] != undefined && CONFIG["column formatting"][KEY] != undefined) {
    var columnKeyObj = CONFIG["column formatting"][KEY];
    var formatTypes = columnKeyObj["type"];
    var linkToNewTab = columnKeyObj["new tab"] ? columnKeyObj["new tab"] : null;
    var cellValue;
    if (formatTypes.includes("cfde-datatypes")) console.log(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(VALUE), Array.isArray(VALUE));
    if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(VALUE) != "object") {
      //console.log('...not object')
      if (formatTypes.includes("youtube")) {
        var cellValueString = "\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/".concat(VALUE, "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>\n                ");
        cellValue = cellValueString;
      } else {
        cellValue = formatCellValues(VALUE, columnKeyObj, formatTypes, linkToNewTab, KEY, CONFIG, PMAP, DATA_SCORES);
      }
    } else if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(VALUE) == "object" && !!Array.isArray(VALUE)) {
      //console.log('...is array')
      if (formatTypes.includes("object to mini-card")) {
        var _cellValueString2 = "";
        VALUE.map(function (aValue) {
          _cellValueString2 += "<div class='mini-card'>";
          var valueKeys = Object.keys(aValue);
          //console.log(aValue["title"]);
          _cellValueString2 += "<div class=\"mini-card-video\">\n                            <video src=\"".concat(aValue["video"], "\" poster=\"").concat(aValue["screenshot"], "\" autoplay muted playsinline>\n                        </div>");
          _cellValueString2 += "<div class=\"mini-card-info\">\n                            <a class=\"mini-card-title\" href=\"".concat(aValue["link"], "\" target=\"_blank\">").concat(aValue["title"], "<span>&nearr;</span></a>\n                            <div class=\"mini-card-description\">").concat(aValue["description"], "</div>\n                        </div>");
          _cellValueString2 += "</div>";
        });
        cellValue = _cellValueString2;
      } else if (formatTypes.includes("custom-citation")) {
        var _cellValueString3 = '';
        VALUE.forEach(function (item) {
          if (!item.title || item.title === "") return;
          var citation = "\n                    <div class=\"citation\">\n                        <div><strong>".concat(item.title, "</strong></div>\n                        <div>").concat(item.authors, " <i>").concat(item.publication, "</i></div>\n                        <div class=\"citation-links\">\n                            <div>DOI: <a href=\"https://doi.org/").concat(item.doi, "\" target=\"_blank\">").concat(item.doi, "</a></div>\n                            <div style=\"display:").concat(item.pmid === "" ? 'none' : 'block', "\">PMID: <a href=\"http://www.ncbi.nlm.nih.gov/pubmed/").concat(item.pmid, "\" target=\"_blank\">").concat(item.pmid, "</a></div>\n                            <div style=\"display:").concat(item.pmcid === "" ? 'none' : 'block', "\">PMCID: <a href=\"http://www.ncbi.nlm.nih.gov/pubmed/").concat(item.pmcid, "\" target=\"_blank\">").concat(item.pmcid, "</a></div>\n                        </div>\n                        <div class=\"citation-notes\">").concat(item.description, "</div>\n                    </div>\n                    ");
          _cellValueString3 += citation;
        });
        cellValue = _cellValueString3;
        //console.log('make citation', VALUE);
      } else {
        //console.log('...something else')
        var _cellValueString4 = !!formatTypes.includes("image") && VALUE != "" ? "<div class='imgs_wrapper'>" : "";
        VALUE.map(function (value) {
          _cellValueString4 += formatCellValues(value, columnKeyObj, formatTypes, linkToNewTab, KEY, CONFIG, PMAP, DATA_SCORES);
        });
        _cellValueString4 += !!formatTypes.includes("image") && VALUE != "" ? "</div>" : "";
        cellValue = _cellValueString4;
      }
    } else {
      if (formatTypes.includes("custom-extra")) {
        cellValue = "<div class=\"\"><div class=\"\">".concat(VALUE["description"], "</div><a href=\"").concat(VALUE["link"], "\" target=\"_blank\">").concat(VALUE["link label"], "</a></div>");
      }
      if (formatTypes.includes("cfde-datatypes")) {
        console.log("data type!");
        var _cellValueString5 = '<div style="display:flex;flex-direction:column; gap:10px;">';
        for (var _i = 0, _Object$entries = Object.entries(VALUE); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (value.trim() != '') {
            var k = key.replaceAll('_', ' ');
            _cellValueString5 += "<div style=\"".concat(k === 'note' ? 'display:flex;gap:5px;font-style:italic;' : '', "\">\n                        <div style=\"font-weight:bold;text-transform:capitalize\">").concat(k, "</div>\n                        <div>").concat(value, "</div>\n                        </div>\n                        ");
          }
        }
        _cellValueString5 != '</div>';
        cellValue = _cellValueString5;
      }
    }
    return cellValue;
  } else {
    return VALUE;
  }
}
function getShortName(STR) {
  var formatted;
  formatted = STR.length >= 15 ? "<span class='byor-shortened-string'><span class='raw-string'>" + STR + "</span>" + STR.substring(0, 14) + "...</span>" : STR;
  return formatted;
}
function replaceWithParams(STR, PARAMS) {
  var paramKeys = !!PARAMS ? Object.keys(PARAMS) : [];
  var replacedSTR = STR;
  if (!!replacedSTR) {
    var url = window.location.href;
    var queryParams = {};
    var urlObj = new URL(url);
    var searchParams = urlObj.searchParams;
    var _iterator = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(searchParams.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];
        queryParams[key] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    Object.keys(queryParams).map(function (key) {
      if (paramKeys.includes(key)) {
        var replaceTo = !!PARAMS[key].values ? PARAMS[key].values[queryParams[key]] : queryParams[key];
        replacedSTR = replacedSTR.replaceAll('$' + key, replaceTo);
      }
    });
    replacedSTR = replacedSTR.replaceAll('$', '<small style="background-color: #cccccc; padding: 0 0.1em; font-size:0.65em; vertical-align: text-top; margin-right: 0.2em;">parameter</small>');
  }
  return replacedSTR;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  alleleFormatter: alleleFormatter,
  ancestryFormatter: ancestryFormatter,
  dataTypeFormatter: dataTypeFormatter,
  annotationFormatter: annotationFormatter,
  bioTypeFormatter: bioTypeFormatter,
  capitalizedFormatter: capitalizedFormatter,
  consequenceFormatter: consequenceFormatter,
  consequenceMeaning: consequenceMeaning,
  dbSNPFormatter: dbSNPFormatter,
  floatFormatter: floatFormatter,
  tpmFormatter: tpmFormatter,
  intFormatter: intFormatter,
  locusFormatter: locusFormatter,
  igvLocusFormatter: igvLocusFormatter,
  maskFormatter: maskFormatter,
  phenotypeFormatter: phenotypeFormatter,
  snakeFormatter: snakeFormatter,
  toSnakeFormatter: toSnakeFormatter,
  tissueFormatter: tissueFormatter,
  methodFormatter: methodFormatter,
  pValueFormatter: pValueFormatter,
  effectFormatter: effectFormatter,
  pValueCss: pValueCss,
  decimalFormatter: decimalFormatter,
  BYORColumnFormatter: BYORColumnFormatter,
  getHoverValue: getHoverValue,
  getShortName: getShortName,
  ssColumnFormat: ssColumnFormat,
  replaceWithParams: replaceWithParams
});

/***/ }),

/***/ "./src/utils/hostUtils.js":
/*!********************************!*\
  !*** ./src/utils/hostUtils.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_2__);




// The url, parsed as an object.
var url = url_parse__WEBPACK_IMPORTED_MODULE_2___default()(window.location.href);

// extract the domain from the url
var parts = url.hostname.split('.');
var host = parts.pop();

// strip the full domain name (handle localhost)
if (host !== 'localhost') {
  host = "".concat(parts.pop(), ".").concat(host);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  url: url,
  // the domain name
  domain: host,
  // the sub domain from the host
  subDomain: parts.length > 0 ? parts.join('.') : null,
  // return a new Url object replacing the sub domain of the current
  urlWithSubdomain: function urlWithSubdomain(s) {
    if (s) {
      url.set('hostname', "".concat(s, ".").concat(host));
    } else {
      url.set('hostname', host);
    }
    return url;
  }
});

/***/ }),

/***/ "./src/utils/keyParams.js":
/*!********************************!*\
  !*** ./src/utils/keyParams.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.for-each.js */ "./node_modules/core-js/modules/es.iterator.for-each.js");
/* harmony import */ var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);








/* Importing this module will automatically parse the query string in the
 * current href for any parameters this page should use. For example:
 *
 * HREF: http://localhost:8090/page.html?chr=X&start=1000000&phenotype=T2D
 *
 * import keyParams from "@/utils/keyParams";
 *
 * console.log(keyParams);
 *
 * // The above should output:
 * // {'chr': 'X', 'start': 1000000, 'phenotype': 'T2D'}
 */





// get the query string
var qs = window.location.search;
var params = query_string__WEBPACK_IMPORTED_MODULE_8___default.a.parse(qs, {
  parseNumbers: true,
  parseBooleans: true
});
var paramsWrapper = {
  set: function set(paramMap) {
    var url = url_parse__WEBPACK_IMPORTED_MODULE_9___default()(window.location.href);
    //let params = queryString.parse(url.query);

    // update the params, remove undefined
    Object.assign(params, paramMap);
    Object.keys(params).forEach(function (key) {
      if (!params[key]) {
        delete params[key];
      }
    });

    // update the query string in the url
    url.set('query', query_string__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(params));

    // update the url
    if (window.history && window.history.pushState) {
      jquery__WEBPACK_IMPORTED_MODULE_10___default()(window).on('popstate', function () {
        var hashLocation = location.hash;
        var hashSplit = hashLocation.split("#!/");
        var hashName = hashSplit[1];
        if (hashName !== '') {
          var hash = window.location.hash;
          if (hash === '') {
            //alert('Back button was pressed.');

            location.reload(true);
          }
        }
      });
    }
    window.history.pushState({
      path: url.href
    }, '', url.href);
  }
};
Object.setPrototypeOf(paramsWrapper, params);

// Parse the query string of the URL to get the parameters of this page.
/* harmony default export */ __webpack_exports__["default"] = (paramsWrapper);

/***/ }),

/***/ "./src/utils/uiUtils.js":
/*!******************************!*\
  !*** ./src/utils/uiUtils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.math.log10.js */ "./node_modules/core-js/modules/es.math.log10.js");
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_25__);


























var popOutElement = function popOutElement(ELEMENT) {
  var element = checkExist(ELEMENT);
  element.classList.toggle("popped-out");
};
var hideElement = function hideElement(ELEMENT) {
  var element = checkExist(ELEMENT);
  if (!!element) {
    element.classList.add("hidden");
  }
};
var showElement = function showElement(ELEMENT, SEARCHBOX) {
  var element = checkExist(ELEMENT);
  if (!!element) {
    element.classList.remove("hidden");
    if (!!SEARCHBOX) {
      var searchInput = checkExist(SEARCHBOX);
      if (!!searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  }
};
var showHideSvg = function showHideSvg(ELEMENT) {
  var element = checkExist(ELEMENT);
  if (!!element) {
    if (element.classList.contains("hidden-svg")) {
      showSvg(ELEMENT);
    } else {
      hideSvg(ELEMENT);
    }
  }
};
var showSvg = function showSvg(ELEMENT) {
  var element = checkExist(ELEMENT);
  if (!!element) {
    element.classList.remove("hidden-svg");
  }
};
var hideSvg = function hideSvg(ELEMENT) {
  var element = checkExist(ELEMENT);
  if (!!element) {
    element.classList.add("hidden-svg");
  }
};
var showHideElement = function showHideElement(ELEMENT, SEARCHBOX) {
  var element = checkExist(ELEMENT);
  if (!!element) {
    if (element.classList.contains("hidden")) {
      showElement(ELEMENT, SEARCHBOX);
    } else {
      hideElement(ELEMENT);
    }
  }
};
var addRemoveClass = function addRemoveClass(ELEMENT, CLASS) {
  var element = checkExist(ELEMENT);
  if (!!element) {
    if (element.classList.contains(CLASS)) {
      element.classList.remove(CLASS);
    } else {
      element.classList.add(CLASS);
    }
  }
};
var showHideHelpContent = function showHideHelpContent(ELEMENT) {
  var element = checkExist(ELEMENT);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
  getToolTipPosition(ELEMENT);
};
var getToolTipPosition = function getToolTipPosition(ELEMENT) {
  var caller = document.getElementsByClassName(ELEMENT)[0];
  var viewer = document.getElementById(ELEMENT);
  var intViewportWidth = window.innerWidth;
  var elementWidth = viewer.offsetWidth;
  var location = getOffset(caller);
  var elementLeft = location.left > intViewportWidth - elementWidth ? -elementWidth + "px" : "1.0em";
  viewer.style.setProperty("left", elementLeft);
  /*
      console.log(ELEMENT);
      console.log(" intViewportWidth: " + intViewportWidth);
      console.log(" elementWidth: " + elementWidth);
      console.log(" locatin.left: " + location.left);
      */
};
var getOffset = function getOffset(ELEMENT) {
  var _x = 0;
  var _y = 0;
  while (ELEMENT && !isNaN(ELEMENT.offsetLeft) && !isNaN(ELEMENT.offsetTop)) {
    _x += ELEMENT.offsetLeft - ELEMENT.scrollLeft;
    _y += ELEMENT.offsetTop - ELEMENT.scrollTop;
    ELEMENT = ELEMENT.offsetParent;
  }
  return {
    top: _y,
    left: _x
  };
};
var switchViews = function switchViews(VIEWS, BUTTONTEXT) {
  var x = VIEWS.length;
  var currentElement;
  for (var i = 0; i < x; i++) {
    var element = checkExist(VIEWS[i]);
    if (element.classList.contains("hidden") == false) {
      element.classList.add("hidden");
      currentElement = i + 1 == x ? 0 : i + 1;
    }
  }
  var celement = checkExist(VIEWS[currentElement]);
  event.target.innerHTML = BUTTONTEXT[currentElement];
  celement.classList.remove("hidden");
};
var switchPlotViews = function switchPlotViews(VIEWS, BUTTONTEXT) {
  var x = VIEWS.length;
  var currentElement;
  for (var i = 0; i < x; i++) {
    var element = checkExist(VIEWS[i]);
    if (element.classList.contains("hidden-svg") == false) {
      element.classList.add("hidden-svg");
      currentElement = i + 1 == x ? 0 : i + 1;
    }
  }
  var celement = checkExist(VIEWS[currentElement]);
  event.target.innerHTML = BUTTONTEXT[currentElement];
  celement.classList.remove("hidden-svg");
};
var openPage = function openPage(PAGE, PARAMETERS) {
  var redirectURL = "./" + PAGE + "?";
  for (var _i = 0, _Object$entries = Object.entries(PARAMETERS); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    redirectURL += key + "=" + value + "&";
  }
  window.location.href = redirectURL;
};
var checkExist = function checkExist(ELEMENT) {
  var element = document.getElementById(ELEMENT);
  if (typeof element == "undefined" || element == null) {
    element = document.getElementsByClassName(ELEMENT)[0];
  }
  return element;
};
var showHideByClass = function showHideByClass(CLASS) {
  var element = document.getElementsByClassName(CLASS);
  var x = element.length;
  for (var i = 0; i <= x; i++) {
    element[i].classList.toggle("hidden");
  }
};
var onScroll = function onScroll(e) {
  var windowTop = window.top.scrollY;
  var element = document.getElementsByClassName("search-header")[0];
  if (windowTop > this.tableTop) {
    if (!element.classList.contains("fixed-header")) {
      element.classList.add("fixed-header");
    }
  } else {
    if (element.classList.contains("fixed-header")) {
      element.classList.remove("fixed-header");
    }
  }
};
var saveByorCsv = function saveByorCsv(DATA, FILENAME) {
  var topRows = [];
  var features = {};
  var downloadFilename = FILENAME || "download";
  DATA.map(function (d) {
    for (var _i2 = 0, _Object$entries2 = Object.entries(d); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];
      if (key != "features") {
        if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) == "object" && !value.length) {
          for (var _i3 = 0, _Object$entries3 = Object.entries(value); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries3[_i3], 2),
              vKey = _Object$entries3$_i[0],
              vValue = _Object$entries3$_i[1];
            var headerKey = key + "__" + vKey;
            if (!topRows.includes(headerKey)) {
              topRows.push(headerKey);
            }
          }
        } else {
          if (!topRows.includes(key)) {
            topRows.push(key);
          }
        }
      } else {
        for (var _i4 = 0, _Object$entries4 = Object.entries(value); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries4[_i4], 2),
            fKey = _Object$entries4$_i[0],
            fValue = _Object$entries4$_i[1];
          if (!features[fKey]) {
            features[fKey] = [];
          }
          for (var _i5 = 0, _Object$entries5 = Object.entries(fValue[0]); _i5 < _Object$entries5.length; _i5++) {
            var _Object$entries5$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries5[_i5], 2),
              fVKey = _Object$entries5$_i[0],
              fVValue = _Object$entries5$_i[1];
            if (!features[fKey].includes(fVKey)) {
              features[fKey].push(fVKey);
            }
          }
        }
      }
    }
  });
  var csvData = [];
  if (Object.keys(features).length > 0) {
    DATA.map(function (d) {
      for (var _i6 = 0, _Object$entries6 = Object.entries(features); _i6 < _Object$entries6.length; _i6++) {
        var _Object$entries6$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries6[_i6], 2),
          fKey = _Object$entries6$_i[0],
          fValue = _Object$entries6$_i[1];
        var _loop = function _loop(i) {
          var dArr = [];
          topRows.map(function (t) {
            var path = t.split("__");
            if (path.length == 2) {
              var cValue = d[path[0]][path[1]] !== null ? d[path[0]][path[1]] === 0 ? 0 : d[path[0]][path[1]] : "";
              dArr.push(cValue);
            } else {
              var _cValue = d[path[0]] !== null ? d[path[0]] === 0 ? 0 : d[path[0]] : "";
              dArr.push(_cValue);
            }
          });
          var _loop2 = function _loop2() {
            var _Object$entries7$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries7[_i7], 2),
              fRKey = _Object$entries7$_i[0],
              fRValue = _Object$entries7$_i[1];
            if (fRKey == fKey) {
              features[fRKey].map(function (cKey) {
                dArr.push(d.features[fRKey][i][cKey]);
              });
            } else {
              features[fRKey].map(function (cKey) {
                dArr.push("");
              });
            }
          };
          for (var _i7 = 0, _Object$entries7 = Object.entries(features); _i7 < _Object$entries7.length; _i7++) {
            _loop2();
          }
          csvData.push(dArr);
        };
        for (var i = 0; i < d.features[fKey].length; i++) {
          _loop(i);
        }
      }
    });
  } else if (Object.keys(features).length == 0) {
    DATA.map(function (d) {
      var dArr = [];
      topRows.map(function (t) {
        var path = t.split("__");
        if (path.length == 2) {
          var cValue = d[path[0]][path[1]] !== null ? d[path[0]][path[1]] === 0 ? 0 : d[path[0]][path[1]] : "";
          dArr.push(cValue);
        } else {
          var _cValue2 = d[path[0]] !== null ? d[path[0]] === 0 ? 0 : d[path[0]] : "";
          dArr.push(_cValue2);
        }
      });
      csvData.push(dArr);
    });
  }
  var header = topRows;
  var _loop3 = function _loop3() {
    var _Object$entries8$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries8[_i8], 2),
      fKey = _Object$entries8$_i[0],
      fValue = _Object$entries8$_i[1];
    fValue.map(function (fCKey) {
      header.push("feature__" + fKey + "__" + fCKey);
    });
  };
  for (var _i8 = 0, _Object$entries8 = Object.entries(features); _i8 < _Object$entries8.length; _i8++) {
    _loop3();
  }
  var csv = [header.join(",")].concat(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(csvData.map(function (row) {
    return row.join(",");
  }))).join("\r\n");
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\uFEFF", csv]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = downloadFilename + ".csv"; //Name the file here
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
var saveByorTsv = function saveByorTsv(DATA, FILENAME) {
  var topRows = [];
  var features = {};
  var downloadFilename = FILENAME || "download";
  DATA.map(function (d) {
    for (var _i9 = 0, _Object$entries9 = Object.entries(d); _i9 < _Object$entries9.length; _i9++) {
      var _Object$entries9$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries9[_i9], 2),
        key = _Object$entries9$_i[0],
        value = _Object$entries9$_i[1];
      if (key != "features") {
        if (Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) == "object" && !value.length) {
          for (var _i10 = 0, _Object$entries10 = Object.entries(value); _i10 < _Object$entries10.length; _i10++) {
            var _Object$entries10$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries10[_i10], 2),
              vKey = _Object$entries10$_i[0],
              vValue = _Object$entries10$_i[1];
            var headerKey = key + "__" + vKey;
            if (!topRows.includes(headerKey)) {
              topRows.push(headerKey);
            }
          }
        } else {
          if (!topRows.includes(key)) {
            topRows.push(key);
          }
        }
      } else {
        for (var _i11 = 0, _Object$entries11 = Object.entries(value); _i11 < _Object$entries11.length; _i11++) {
          var _Object$entries11$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries11[_i11], 2),
            fKey = _Object$entries11$_i[0],
            fValue = _Object$entries11$_i[1];
          if (!features[fKey]) {
            features[fKey] = [];
          }
          for (var _i12 = 0, _Object$entries12 = Object.entries(fValue[0]); _i12 < _Object$entries12.length; _i12++) {
            var _Object$entries12$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries12[_i12], 2),
              fVKey = _Object$entries12$_i[0],
              fVValue = _Object$entries12$_i[1];
            if (!features[fKey].includes(fVKey)) {
              features[fKey].push(fVKey);
            }
          }
        }
      }
    }
  });
  var csvData = [];
  if (Object.keys(features).length > 0) {
    DATA.map(function (d) {
      for (var _i13 = 0, _Object$entries13 = Object.entries(features); _i13 < _Object$entries13.length; _i13++) {
        var _Object$entries13$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries13[_i13], 2),
          fKey = _Object$entries13$_i[0],
          fValue = _Object$entries13$_i[1];
        var _loop4 = function _loop4(i) {
          var dArr = [];
          topRows.map(function (t) {
            var path = t.split("__");
            if (path.length == 2) {
              var cValue = d[path[0]][path[1]] !== null ? d[path[0]][path[1]] === 0 ? 0 : d[path[0]][path[1]] : "";
              dArr.push(cValue);
            } else {
              var _cValue3 = d[path[0]] !== null ? d[path[0]] === 0 ? 0 : d[path[0]] : "";
              dArr.push(_cValue3);
            }
          });
          var _loop5 = function _loop5() {
            var _Object$entries14$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries14[_i14], 2),
              fRKey = _Object$entries14$_i[0],
              fRValue = _Object$entries14$_i[1];
            if (fRKey == fKey) {
              features[fRKey].map(function (cKey) {
                dArr.push(d.features[fRKey][i][cKey]);
              });
            } else {
              features[fRKey].map(function (cKey) {
                dArr.push("");
              });
            }
          };
          for (var _i14 = 0, _Object$entries14 = Object.entries(features); _i14 < _Object$entries14.length; _i14++) {
            _loop5();
          }
          csvData.push(dArr);
        };
        for (var i = 0; i < d.features[fKey].length; i++) {
          _loop4(i);
        }
      }
    });
  } else if (Object.keys(features).length == 0) {
    DATA.map(function (d) {
      var dArr = [];
      topRows.map(function (t) {
        var path = t.split("__");
        if (path.length == 2) {
          var cValue = d[path[0]][path[1]] !== null ? d[path[0]][path[1]] === 0 ? 0 : d[path[0]][path[1]] : "";
          dArr.push(cValue);
        } else {
          var _cValue4 = d[path[0]] !== null ? d[path[0]] === 0 ? 0 : d[path[0]] : "";
          dArr.push(_cValue4);
        }
      });
      csvData.push(dArr);
    });
  }
  var header = topRows;
  var _loop6 = function _loop6() {
    var _Object$entries15$_i = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries15[_i15], 2),
      fKey = _Object$entries15$_i[0],
      fValue = _Object$entries15$_i[1];
    fValue.map(function (fCKey) {
      header.push("feature__" + fKey + "__" + fCKey);
    });
  };
  for (var _i15 = 0, _Object$entries15 = Object.entries(features); _i15 < _Object$entries15.length; _i15++) {
    _loop6();
  }
  var csv = [header.join("\t")].concat(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(csvData.map(function (row) {
    return row.join("\t");
  }))).join("\r\n");
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\uFEFF", csv]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = downloadFilename + ".tsv"; //Name the file here
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
var convertJson2Csv = function convertJson2Csv(DATA, FILENAME) {
  var items = DATA;
  var downloadFilename = FILENAME || "download";
  var replacer = function replacer(key, value) {
    return value === null ? "" : value;
  }; // specify how you want to handle null values here
  var header = Object.keys(items[0]);
  var csv = [header.join(",")].concat(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(items.map(function (row) {
    return header.map(function (fieldName) {
      return JSON.stringify(row[fieldName], replacer);
    }).join(",");
  }))).join("\r\n");
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\uFEFF", csv]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = downloadFilename + ".csv"; //Name the file here
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
var convertJson2Tsv = function convertJson2Tsv(DATA, FILENAME) {
  var items = DATA;
  var downloadFilename = FILENAME || "download";
  var replacer = function replacer(key, value) {
    return value === null ? "" : value;
  }; // specify how you want to handle null values here
  var header = Object.keys(items[0]);
  var tsv = [header.join("\t")].concat(Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(items.map(function (row) {
    return header.map(function (fieldName) {
      return JSON.stringify(row[fieldName], replacer);
    }).join("\t");
  }))).join("\r\n");
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\uFEFF", tsv]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = downloadFilename + ".tsv"; //Name the file here
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
var saveJson = function saveJson(DATA, FILENAME) {
  var downloadFilename = FILENAME || "download";
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\uFEFF", JSON.stringify(DATA), null, 4]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = downloadFilename + ".json"; //Name the file here
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
var getAxisTicks = function getAxisTicks(lo, hi) {
  var step = Math.pow(10, Math.round(Math.log10(hi - lo)) - 1);
  var value = (Math.floor((lo + step) / step) - 1) * step;
  var halfStep = step / 2;
  //console.log("step", step, "half", halfStep);
  var ticks = {};
  // update the actual lo to be the initial value
  lo = value;
  // adjust the step so there's only 5 ticks
  step = Math.floor((Math.floor((hi - value) / step) / 5 * step + halfStep) / halfStep) * halfStep;
  // adjust the hi value to extend to the next step if needed
  hi = Math.floor((hi + halfStep) / step) * step;
  do {
    ticks[value] = (value - lo) / (hi - lo);
    value += step;
  } while (value <= hi + halfStep);
  return {
    lo: lo,
    hi: hi,
    step: step,
    ticks: ticks
  };
};
var showTabContent = function showTabContent(TAB, CONTENT, TAB_WRAPPER, CONTENT_WRAPPER) {
  var tabList = document.querySelectorAll(".kp-tabs#" + TAB_WRAPPER + " .kp-tab");
  var contentList = document.querySelectorAll(".kp-tabs-contents#" + CONTENT_WRAPPER + " .kp-tab-content");
  for (var i = 0; i < tabList.length; i++) {
    tabList[i].classList.remove("active");
  }
  for (var _i17 = 0; _i17 < contentList.length; _i17++) {
    contentList[_i17].classList.remove("active");
  }
  document.getElementById(TAB).classList.add("active");
  document.getElementById(CONTENT).classList.add("active");
};
var removeOnMouseOut = function removeOnMouseOut(BOXID, TIME) {
  var wrapper = document.getElementById(BOXID);
  setTimeout(function () {
    wrapper.classList.remove("fixed");
    wrapper.classList.add("hidden");
  }, TIME);
};
var isIdFixed = function isIdFixed(ID) {
  var element = document.querySelector(ID);
  var isFixed = !!element && element.getAttribute("class").includes("fixed") == true ? true : false;
  return isFixed;
};
function biDomain() {
  var url = url_parse__WEBPACK_IMPORTED_MODULE_25___default()(window.location.href);
  var content = url.port == "" ? "https://bioindex.hugeamp.org" : "https://bioindex-dev.hugeamp.org";
  return content;
}
function getUrl() {
  var url = url_parse__WEBPACK_IMPORTED_MODULE_25___default()(window.location.href);
  return url;
}
function checkIfNumeric(VALUE) {
  var checkNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "e", "E", "-", "."];
  var ifNumber = true;
  if (typeof VALUE == "string") {
    VALUE.split("").map(function (d) {
      if (!checkNumbers.includes(d)) {
        ifNumber = false;
      }
    });
  }
  return ifNumber;
}
var setTabActive = function setTabActive(TARGETTAB, UIWRAPPERID, TARGETCONTENT, CONTENTWRAPPERID, IF_PLOT) {
  // Set IF_PLOT parameter true if function calling tab is in Plots group
  var tabsWrapper = document.getElementById(UIWRAPPERID),
    tabsChildren = tabsWrapper.getElementsByClassName("tab-ui-tab");
  for (var i = 0; i < tabsChildren.length; i++) {
    var tab = tabsChildren[i];
    var classes = tab.getAttribute("class");
    classes.includes("loading") ? tab.setAttribute("class", "tab-ui-tab loading") : tab.setAttribute("class", "tab-ui-tab");
  }
  document.getElementById(TARGETTAB).setAttribute("class", "tab-ui-tab active");
  var contentsWrapper = document.getElementById(CONTENTWRAPPERID),
    contentsChildren = !!IF_PLOT ? contentsWrapper.getElementsByClassName("plot-tab-content-wrapper") : contentsWrapper.getElementsByClassName("tab-content-wrapper");
  for (var _i19 = 0; _i19 < contentsChildren.length; _i19++) {
    var _tab = contentsChildren[_i19];
    !!IF_PLOT ? _tab.setAttribute("class", "plot-tab-content-wrapper hidden-content") : _tab.setAttribute("class", "tab-content-wrapper hidden-content");
  }
  !!IF_PLOT ? document.getElementById(TARGETCONTENT).setAttribute("class", "plot-tab-content-wrapper") : document.getElementById(TARGETCONTENT).setAttribute("class", "tab-content-wrapper");
};
var toggleFixedSummarySection = function toggleFixedSummarySection(UIWRAPPERID) {
  var tabsGroup = document.getElementById(UIWRAPPERID).closest(".tabgroup-fixed-bottom");
  if (tabsGroup.classList.contains("open")) {
    tabsGroup.classList.remove("open");
  } else {
    tabsGroup.classList.add("open");
    tabsGroup.querySelector(".fixed-group-toggle").classList.remove("has-updates");
  }
};
var showHidePanel = function showHidePanel(PANEL) {
  console.log(PANEL);
  var wrapper = document.querySelector(PANEL);
  if (wrapper.classList.contains("hidden")) {
    wrapper.classList.remove("hidden");
  } else {
    wrapper.classList.add("hidden");
  }
};
var downloadImg = function downloadImg(ID, name, type, svgImage) {
  var imgElement = document.getElementById(ID);
  var link = document.createElement('a');
  var dataURL;
  if (type == 'svg') {
    //ref.renderBoxPlot(); // firstly, render the svg image

    var newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var attributesToCopy = ["width", "height", "viewBox"];
    for (var _i20 = 0, _attributesToCopy = attributesToCopy; _i20 < _attributesToCopy.length; _i20++) {
      var attr = _attributesToCopy[_i20];
      if (imgElement.hasAttribute(attr)) {
        newSVG.setAttribute(attr, imgElement.getAttribute(attr));
      }
    }
    var _iterator = Object(_home_runner_work_dig_dug_portal_dig_dug_portal_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imgElement.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        if (child.nodeName.toLowerCase() !== "script") {
          newSVG.appendChild(child.cloneNode(true));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var svgData = new XMLSerializer().serializeToString(newSVG);
    dataURL = new Blob([svgData], {
      type: "image/svg+xml"
    });
  } else if (type == 'png') {
    dataURL = imgElement.toDataURL("image/png");
  }
  link.href = type == 'svg' ? URL.createObjectURL(dataURL) : dataURL;
  link.download = type == 'svg' ? name + '.svg' : name + ".png";
  link.click();
  URL.revokeObjectURL(link.href);
  if (type == 'svg') {
    var svgImg = document.getElementById(svgImage);
    svgImg.remove();
  }
};
var downloadChart = function downloadChart(URL, FILENAME) {
  // Create a link element and programmatically click it to start the download
  var link = document.createElement("a");
  link.href = URL;
  link.download = FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
var copy2Clipboard = function copy2Clipboard(CONTENT) {
  window.navigator.clipboard.writeText(CONTENT);
};
var copyCanvasToDiv = function copyCanvasToDiv(CANVAS, divId, title) {
  // Get the canvas element
  var canvasId = CANVAS.id;
  var canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error("Canvas element with ID '" + canvasId + "' not found.");
    return;
  }

  // Get the div element
  var div = document.getElementById(divId + '_wrapper');
  if (!div) {
    console.error("Div element with ID '" + divId + "' not found.");
    return;
  } else {
    //Create a wrapper div to hold the image
    var wrapperId = canvasId + "_wrapper";
    var imgWrapper = document.getElementById(wrapperId);
    if (!imgWrapper) {
      imgWrapper = document.createElement('div');
      imgWrapper.setAttribute("id", wrapperId);
    }
    imgWrapper.innerHTML = "";

    /*
    const titleWrapper = document.createElement('div');
    titleWrapper.innerHTML = "<h6>" + title + "</h6>"
     imgWrapper.appendChild(titleWrapper)
     */

    // Create a temporary canvas to hold the image data. This is important to avoid issues with modifying the original canvas.
    var tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    var tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(canvas, 0, 0);

    // Convert the canvas content to a data URL (PNG by default)
    var dataURL = tempCanvas.toDataURL(); // Or toDataURL('image/jpeg', 0.9); for JPEG with quality 0.9

    // Create an image element
    var img = document.createElement('img');
    img.setAttribute("width", CANVAS.width);
    img.setAttribute("height", CANVAS.height);
    img.src = dataURL;
    img.alt = "Canvas Image"; // Set an alt attribute for accessibility

    // Clear the wrapper's content and append the image.  This removes any existing content in the div.

    imgWrapper.appendChild(img);
    div.innerHTML = "";
    div.appendChild(imgWrapper);
  }
};
var moveElement = function moveElement(element, destinationDivId) {
  // Get the element
  var ELEMENT = document.getElementById(element);
  if (!ELEMENT) {
    console.error("Element with ID '" + element + "' not found.");
    return;
  }
  // Get the source and destination divs
  //const sourceDiv = document.getElementById(sourceDivId);
  var destinationDiv = document.getElementById(destinationDivId);

  // Check if the element is already a child of the destination div
  if (ELEMENT.parentNode === destinationDiv) {
    console.warn("Element is already in the destination div.");
    return; // Or you could optionally move it back to the source
  }

  // Remove the element from its current parent (if it has one)
  if (ELEMENT.parentNode) {
    ELEMENT.parentNode.removeChild(ELEMENT);
  }

  // Append the element to the destination div
  destinationDiv.appendChild(ELEMENT);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  addRemoveClass: addRemoveClass,
  popOutElement: popOutElement,
  hideElement: hideElement,
  showElement: showElement,
  showHideElement: showHideElement,
  showHideSvg: showHideSvg,
  showHideHelpContent: showHideHelpContent,
  openPage: openPage,
  showHideByClass: showHideByClass,
  switchViews: switchViews,
  switchPlotViews: switchPlotViews,
  getToolTipPosition: getToolTipPosition,
  onScroll: onScroll,
  convertJson2Csv: convertJson2Csv,
  convertJson2Tsv: convertJson2Tsv,
  saveByorCsv: saveByorCsv,
  saveByorTsv: saveByorTsv,
  saveJson: saveJson,
  getAxisTicks: getAxisTicks,
  showTabContent: showTabContent,
  removeOnMouseOut: removeOnMouseOut,
  isIdFixed: isIdFixed,
  biDomain: biDomain,
  getUrl: getUrl,
  checkIfNumeric: checkIfNumeric,
  setTabActive: setTabActive,
  toggleFixedSummarySection: toggleFixedSummarySection,
  showHidePanel: showHidePanel,
  downloadImg: downloadImg,
  downloadChart: downloadChart,
  copy2Clipboard: copy2Clipboard,
  copyCanvasToDiv: copyCanvasToDiv,
  moveElement: moveElement
});

/***/ })

}]);
//# sourceMappingURL=chunk-common.js.map