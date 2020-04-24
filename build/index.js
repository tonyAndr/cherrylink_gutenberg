/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Suggestions/Suggestions.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar/Suggestions/Suggestions.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".suggestion-panel {\r\n    display: block;\r\n    /* position: absolute; */\r\n    background: white;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* z-index: 99; */\r\n}\r\n.suggestion-panel button {\r\n    margin: 10px;\r\n    display: block;\r\n    border: none;\r\n    background: #007cba;\r\n    color: white;\r\n    cursor: pointer;    \r\n    border-radius: 3px;\r\n    padding: 8px;\r\n}\r\n/* .suggestion-panel button:before {\r\n    background-image: url(/wp-content/plugins/cherrylink/assets/gutenberg/tab-links.png);\r\n    background-size: 15px, 15px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    display: inline-block;\r\n    width: 25px;\r\n    height: 20px;\r\n    content: \"\";\r\n} */\r\n.suggestion-block {\r\n    padding: 10px;\r\n    margin: 10px;\r\n    border: 1px solid grey;\r\n    border-radius: 3px;\r\n}\r\n.suggestion-block:hover {\r\n    cursor: pointer;\r\n    background: rgb(206, 215, 255);\r\n}\r\n.suggestion-block .block-name {\r\n    background: aliceblue;\r\n    border-bottom: 1px solid rgb(182, 182, 182);\r\n    font-weight: bold;\r\n}\r\n.suggestion-list li:nth-child(odd) {\r\n    background: #fff0fb;\r\n}\r\n.suggestion-list li:nth-child(even) {\r\n    background: cornsilk;\r\n}\r\n.suggestion-hint {\r\n    margin: 10px;\r\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Links/Filters/FiltersPanel.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Links/Filters/FiltersPanel.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cherry-filters-toggles {\r\n    display: flex;\r\n    flex-flow: nowrap row;\r\n}\r\n\r\n.cherry-filters-toggles > div {\r\n    flex-grow: 1;\r\n}\r\n\r\n.filter-terms-container {\r\n    border: 1px solid lightslategrey; \r\n    border-radius: 5px;\r\n}\r\n\r\n.subheader {\r\n    font-size: 13px;\r\n    color: #7d8186;\r\n    margin-bottom: 0.5em;\r\n    margin-top: 1.0em;\r\n    font-weight: bold;\r\n}\r\n\r\n.term-checkbox-child {\r\n    margin-left: 10px;\r\n}\r\n.term-checkbox-toplvl {\r\n    margin-left: 0;\r\n}\r\n.filter-terms-container {\r\n    padding: 5px;\r\n    height: 200px;\r\n    overflow: auto;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Links/LinksToolbar.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Links/LinksToolbar.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-item-container {\r\n    position: relative;\r\n    height: 70px;\r\n    padding: 5px;\r\n    border-bottom: 1px solid lightgrey;\r\n}\r\n.link-item-container:nth-child(odd) {\r\n    /* border-left: 3px solid rgb(199, 199, 199); */\r\n    background: #f3f4f5;\r\n}\r\n/* .link-item-container:nth-child(even) {\r\n    border-left: 3px solid rgb(168, 168, 168);\r\n} */\r\n.link-item-container > span  {\r\n    display: block;\r\n    overflow: hidden;\r\n    max-height: 60px;\r\n    line-height: 20px;\r\n}\r\n\r\n.link-item-container.inArticle {\r\n    border-left: 3px solid rgb(218, 92, 92);\r\n}\r\n\r\n.link-toolbar-overlay {\r\n    position: absolute;\r\n    padding: 3px;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    opacity: 0.05;\r\n    background: #00000000;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    -moz-transition: all 0.3s ease-in-out;\r\n    -ms-transition: all 0.3s ease-in-out;\r\n    -o-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.link-toolbar-overlay:hover {\r\n    opacity: 1;\r\n    background: #ffffff96;\r\n    cursor: pointer;\r\n}\r\n\r\n.toolbar-actions { \r\n    grid-area: 2 / 1 / 3 / 2; \r\n}\r\n.toolbar-article { \r\n    grid-area: 1 / 2 / 2 / 3; \r\n    justify-self: end;\r\n}\r\n.toolbar-stats { \r\n    grid-area: 2 / 2 / 3 / 3; \r\n    justify-self: end;\r\n}\r\n\r\n.toolbar-actions > div,\r\n.toolbar-article > div, \r\n.toolbar-stats > div {\r\n    border: 1px dashed #007cba;\r\n    width: 26px;\r\n    height: 26px;\r\n    background: #ffffffa6;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    margin: 1px;\r\n}\r\n.toolbar-actions > div:hover,\r\n.toolbar-article > div:hover {\r\n    border: 2px solid #007cba;\r\n    cursor: pointer;\r\n}\r\n\r\n.toolbar-stats > div {\r\n    width: auto;\r\n    line-height: 26px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row;\r\n    align-content: stretch;\r\n    align-items: stretch;\r\n}\r\n.toolbar-stats > div > div {\r\n    min-width: 25px;\r\n    padding-right: 3px;\r\n}\r\n/*incoming*/\r\n.toolbar-stats > div > div:last-child {\r\n    background: #9bd0ff;\r\n}\r\n/*outgoing*/\r\n.toolbar-stats > div > div:first-child {\r\n    background: #ffb1b1;\r\n}\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Stats/StatsTab.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Stats/StatsTab.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cherry-incoming li > *,\r\n.cherry-stats li > *{\r\n    display: block;\r\n\r\n}\r\n.cherry-stats li > span{\r\n    overflow-wrap: break-word;\r\n    \r\n}\r\n\r\n.cherry-stats li > a{\r\n    color:lightcoral;  \r\n}\r\n\r\n.cherry-stats-container {\r\n    padding: 5px;\r\n}\r\n\r\n.cherry-incoming-ankor {\r\n    color:lightcoral;  \r\n}\r\n\r\n.cherry-stats-container {\r\n    padding: 16px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Terms/Terms.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Terms/Terms.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".terms-tab-spinner {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 20px;\r\n}\r\n\r\n.term-divider {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    padding: 5px;\r\n    background: #007cba;\r\n    color: white;\r\n}\r\n\r\n.term-item-container {\r\n    position: relative;\r\n    height: 35px;\r\n    padding: 5px;\r\n    border-bottom: 1px solid lightgrey;\r\n}\r\n/* .link-item-container:nth-child(odd) {\r\n    background: #f3f4f5;\r\n} */\r\n/* .link-item-container:nth-child(even) {\r\n    border-left: 3px solid rgb(168, 168, 168);\r\n} */\r\n.term-item-container > span  {\r\n    display: block;\r\n    overflow: hidden;\r\n    max-height: 60px;\r\n    line-height: 20px;\r\n}\r\n\r\n.term-item-container.inArticle {\r\n    border-left: 3px solid rgb(218, 92, 92);\r\n}\r\n\r\n.term-toolbar-overlay {\r\n    position: absolute;\r\n    padding: 3px;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(1, 1fr);\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    opacity: 0.10;\r\n    background: #00000000;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    -moz-transition: all 0.3s ease-in-out;\r\n    -ms-transition: all 0.3s ease-in-out;\r\n    -o-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.term-toolbar-overlay:hover {\r\n    opacity: 1;\r\n    background: #ffffff96;\r\n    cursor: pointer;\r\n}\r\n\r\n.toolbar-actions { \r\n    grid-area: 1 / 1 / 2 / 2; \r\n}\r\n.toolbar-article { \r\n    grid-area: 1 / 2 / 2 / 3; \r\n    justify-self: end;\r\n}\r\n\r\n.toolbar-actions > div,\r\n.toolbar-article > div {\r\n    border: 1px dashed #007cba;\r\n    width: 26px;\r\n    height: 26px;\r\n    background: #ffffffa6;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    margin: 1px;\r\n}\r\n.toolbar-actions > div:hover,\r\n.toolbar-article > div:hover {\r\n    border: 2px solid #007cba;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Wrapper.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar/Wrapper.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".get-data-button {\r\n    position: absolute;\r\n    left:0;\r\n    right:0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.get-data-button > button {\r\n    min-width: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    flex-grow: 1;\r\n    background: lightcoral;\r\n    color: white;\r\n    padding: 5px;\r\n}\r\n\r\n.get-data-button > button:hover{\r\n    background: #da5c5c;\r\n    color: white;\r\n}\r\n\r\n.cherrylink-tabs-panel {\r\n    background:#f3f4f5;\r\n    border-bottom: 1px solid #e2e4e7;\r\n}\r\n.cherrylink-tabs-panel button:focus {\r\n    box-shadow: inset 0 -3px #007cba !important;\r\n    outline: 1px dotted #555d66 !important;\r\n}\r\n.cherrylink-tabs-panel button {\r\n    height: 35px;\r\n    flex-grow: 1;\r\n    border-radius: 0;\r\n}\r\n.cherrylink-tabs-panel > div[role=\"tablist\"]  {\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    align-items: stretch;\r\n    align-content: stretch;\r\n}\r\n\r\n.tab-general-style {\r\n    border: none;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    padding: 3px 15px;\r\n    margin-left: 0;\r\n    font-weight: 400;\r\n    color: #191e23;\r\n    outline-offset: -1px;\r\n    transition: box-shadow .1s linear;\r\n}\r\n\r\n.tab-general-active {\r\n    box-shadow: inset 0 -3px #007cba;\r\n    font-weight: 600;\r\n    position: relative;\r\n}\r\n\r\n.tab-links,\r\n.tab-taxonomies,\r\n.tab-stats,\r\n.tab-blocklinks {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: 24px;\r\n}\r\n\r\n.tab-links {\r\n    background-image: url(/wp-content/plugins/cherrylink/assets/gutenberg/tab-links.png);\r\n}\r\n\r\n.tab-taxonomies {\r\n    background-image: url(/wp-content/plugins/cherrylink/assets/gutenberg/tab-taxonomies.png);\r\n}\r\n\r\n.tab-stats {\r\n    background-image: url(/wp-content/plugins/cherrylink/assets/gutenberg/tab-stats.png);\r\n}\r\n\r\n.tab-blocklinks {\r\n    background-image: url(/wp-content/plugins/cherrylink/assets/gutenberg/tab-block.png);\r\n}\r\n\r\n.error-text {\r\n    padding: 10px;\r\n    color: tomato;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/mark.js/dist/mark.js":
/*!*******************************************!*\
  !*** ./node_modules/mark.js/dist/mark.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DOMIterator = function () {
  function DOMIterator(ctx) {
    var iframes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var iframesTimeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
    classCallCheck(this, DOMIterator);

    this.ctx = ctx;
    this.iframes = iframes;
    this.exclude = exclude;
    this.iframesTimeout = iframesTimeout;
  }

  createClass(DOMIterator, [{
    key: 'getContexts',
    value: function getContexts() {
      var ctx = void 0,
          filteredCtx = [];
      if (typeof this.ctx === 'undefined' || !this.ctx) {
        ctx = [];
      } else if (NodeList.prototype.isPrototypeOf(this.ctx)) {
        ctx = Array.prototype.slice.call(this.ctx);
      } else if (Array.isArray(this.ctx)) {
        ctx = this.ctx;
      } else if (typeof this.ctx === 'string') {
        ctx = Array.prototype.slice.call(document.querySelectorAll(this.ctx));
      } else {
        ctx = [this.ctx];
      }
      ctx.forEach(function (ctx) {
        var isDescendant = filteredCtx.filter(function (contexts) {
          return contexts.contains(ctx);
        }).length > 0;
        if (filteredCtx.indexOf(ctx) === -1 && !isDescendant) {
          filteredCtx.push(ctx);
        }
      });
      return filteredCtx;
    }
  }, {
    key: 'getIframeContents',
    value: function getIframeContents(ifr, successFn) {
      var errorFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      var doc = void 0;
      try {
        var ifrWin = ifr.contentWindow;
        doc = ifrWin.document;
        if (!ifrWin || !doc) {
          throw new Error('iframe inaccessible');
        }
      } catch (e) {
        errorFn();
      }
      if (doc) {
        successFn(doc);
      }
    }
  }, {
    key: 'isIframeBlank',
    value: function isIframeBlank(ifr) {
      var bl = 'about:blank',
          src = ifr.getAttribute('src').trim(),
          href = ifr.contentWindow.location.href;
      return href === bl && src !== bl && src;
    }
  }, {
    key: 'observeIframeLoad',
    value: function observeIframeLoad(ifr, successFn, errorFn) {
      var _this = this;

      var called = false,
          tout = null;
      var listener = function listener() {
        if (called) {
          return;
        }
        called = true;
        clearTimeout(tout);
        try {
          if (!_this.isIframeBlank(ifr)) {
            ifr.removeEventListener('load', listener);
            _this.getIframeContents(ifr, successFn, errorFn);
          }
        } catch (e) {
          errorFn();
        }
      };
      ifr.addEventListener('load', listener);
      tout = setTimeout(listener, this.iframesTimeout);
    }
  }, {
    key: 'onIframeReady',
    value: function onIframeReady(ifr, successFn, errorFn) {
      try {
        if (ifr.contentWindow.document.readyState === 'complete') {
          if (this.isIframeBlank(ifr)) {
            this.observeIframeLoad(ifr, successFn, errorFn);
          } else {
            this.getIframeContents(ifr, successFn, errorFn);
          }
        } else {
          this.observeIframeLoad(ifr, successFn, errorFn);
        }
      } catch (e) {
        errorFn();
      }
    }
  }, {
    key: 'waitForIframes',
    value: function waitForIframes(ctx, done) {
      var _this2 = this;

      var eachCalled = 0;
      this.forEachIframe(ctx, function () {
        return true;
      }, function (ifr) {
        eachCalled++;
        _this2.waitForIframes(ifr.querySelector('html'), function () {
          if (! --eachCalled) {
            done();
          }
        });
      }, function (handled) {
        if (!handled) {
          done();
        }
      });
    }
  }, {
    key: 'forEachIframe',
    value: function forEachIframe(ctx, filter, each) {
      var _this3 = this;

      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var ifr = ctx.querySelectorAll('iframe'),
          open = ifr.length,
          handled = 0;
      ifr = Array.prototype.slice.call(ifr);
      var checkEnd = function checkEnd() {
        if (--open <= 0) {
          end(handled);
        }
      };
      if (!open) {
        checkEnd();
      }
      ifr.forEach(function (ifr) {
        if (DOMIterator.matches(ifr, _this3.exclude)) {
          checkEnd();
        } else {
          _this3.onIframeReady(ifr, function (con) {
            if (filter(ifr)) {
              handled++;
              each(con);
            }
            checkEnd();
          }, checkEnd);
        }
      });
    }
  }, {
    key: 'createIterator',
    value: function createIterator(ctx, whatToShow, filter) {
      return document.createNodeIterator(ctx, whatToShow, filter, false);
    }
  }, {
    key: 'createInstanceOnIframe',
    value: function createInstanceOnIframe(contents) {
      return new DOMIterator(contents.querySelector('html'), this.iframes);
    }
  }, {
    key: 'compareNodeIframe',
    value: function compareNodeIframe(node, prevNode, ifr) {
      var compCurr = node.compareDocumentPosition(ifr),
          prev = Node.DOCUMENT_POSITION_PRECEDING;
      if (compCurr & prev) {
        if (prevNode !== null) {
          var compPrev = prevNode.compareDocumentPosition(ifr),
              after = Node.DOCUMENT_POSITION_FOLLOWING;
          if (compPrev & after) {
            return true;
          }
        } else {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'getIteratorNode',
    value: function getIteratorNode(itr) {
      var prevNode = itr.previousNode();
      var node = void 0;
      if (prevNode === null) {
        node = itr.nextNode();
      } else {
        node = itr.nextNode() && itr.nextNode();
      }
      return {
        prevNode: prevNode,
        node: node
      };
    }
  }, {
    key: 'checkIframeFilter',
    value: function checkIframeFilter(node, prevNode, currIfr, ifr) {
      var key = false,
          handled = false;
      ifr.forEach(function (ifrDict, i) {
        if (ifrDict.val === currIfr) {
          key = i;
          handled = ifrDict.handled;
        }
      });
      if (this.compareNodeIframe(node, prevNode, currIfr)) {
        if (key === false && !handled) {
          ifr.push({
            val: currIfr,
            handled: true
          });
        } else if (key !== false && !handled) {
          ifr[key].handled = true;
        }
        return true;
      }
      if (key === false) {
        ifr.push({
          val: currIfr,
          handled: false
        });
      }
      return false;
    }
  }, {
    key: 'handleOpenIframes',
    value: function handleOpenIframes(ifr, whatToShow, eCb, fCb) {
      var _this4 = this;

      ifr.forEach(function (ifrDict) {
        if (!ifrDict.handled) {
          _this4.getIframeContents(ifrDict.val, function (con) {
            _this4.createInstanceOnIframe(con).forEachNode(whatToShow, eCb, fCb);
          });
        }
      });
    }
  }, {
    key: 'iterateThroughNodes',
    value: function iterateThroughNodes(whatToShow, ctx, eachCb, filterCb, doneCb) {
      var _this5 = this;

      var itr = this.createIterator(ctx, whatToShow, filterCb);
      var ifr = [],
          elements = [],
          node = void 0,
          prevNode = void 0,
          retrieveNodes = function retrieveNodes() {
        var _getIteratorNode = _this5.getIteratorNode(itr);

        prevNode = _getIteratorNode.prevNode;
        node = _getIteratorNode.node;

        return node;
      };
      while (retrieveNodes()) {
        if (this.iframes) {
          this.forEachIframe(ctx, function (currIfr) {
            return _this5.checkIframeFilter(node, prevNode, currIfr, ifr);
          }, function (con) {
            _this5.createInstanceOnIframe(con).forEachNode(whatToShow, function (ifrNode) {
              return elements.push(ifrNode);
            }, filterCb);
          });
        }
        elements.push(node);
      }
      elements.forEach(function (node) {
        eachCb(node);
      });
      if (this.iframes) {
        this.handleOpenIframes(ifr, whatToShow, eachCb, filterCb);
      }
      doneCb();
    }
  }, {
    key: 'forEachNode',
    value: function forEachNode(whatToShow, each, filter) {
      var _this6 = this;

      var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var contexts = this.getContexts();
      var open = contexts.length;
      if (!open) {
        done();
      }
      contexts.forEach(function (ctx) {
        var ready = function ready() {
          _this6.iterateThroughNodes(whatToShow, ctx, each, filter, function () {
            if (--open <= 0) {
              done();
            }
          });
        };
        if (_this6.iframes) {
          _this6.waitForIframes(ctx, ready);
        } else {
          ready();
        }
      });
    }
  }], [{
    key: 'matches',
    value: function matches(element, selector) {
      var selectors = typeof selector === 'string' ? [selector] : selector,
          fn = element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector;
      if (fn) {
        var match = false;
        selectors.every(function (sel) {
          if (fn.call(element, sel)) {
            match = true;
            return false;
          }
          return true;
        });
        return match;
      } else {
        return false;
      }
    }
  }]);
  return DOMIterator;
}();

var Mark$1 = function () {
  function Mark(ctx) {
    classCallCheck(this, Mark);

    this.ctx = ctx;
    this.ie = false;
    var ua = window.navigator.userAgent;
    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
      this.ie = true;
    }
  }

  createClass(Mark, [{
    key: 'log',
    value: function log(msg) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'debug';

      var log = this.opt.log;
      if (!this.opt.debug) {
        return;
      }
      if ((typeof log === 'undefined' ? 'undefined' : _typeof(log)) === 'object' && typeof log[level] === 'function') {
        log[level]('mark.js: ' + msg);
      }
    }
  }, {
    key: 'escapeStr',
    value: function escapeStr(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
  }, {
    key: 'createRegExp',
    value: function createRegExp(str) {
      if (this.opt.wildcards !== 'disabled') {
        str = this.setupWildcardsRegExp(str);
      }
      str = this.escapeStr(str);
      if (Object.keys(this.opt.synonyms).length) {
        str = this.createSynonymsRegExp(str);
      }
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      if (this.opt.diacritics) {
        str = this.createDiacriticsRegExp(str);
      }
      str = this.createMergedBlanksRegExp(str);
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.createJoinersRegExp(str);
      }
      if (this.opt.wildcards !== 'disabled') {
        str = this.createWildcardsRegExp(str);
      }
      str = this.createAccuracyRegExp(str);
      return str;
    }
  }, {
    key: 'createSynonymsRegExp',
    value: function createSynonymsRegExp(str) {
      var syn = this.opt.synonyms,
          sens = this.opt.caseSensitive ? '' : 'i',
          joinerPlaceholder = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? '\0' : '';
      for (var index in syn) {
        if (syn.hasOwnProperty(index)) {
          var value = syn[index],
              k1 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(index) : this.escapeStr(index),
              k2 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(value) : this.escapeStr(value);
          if (k1 !== '' && k2 !== '') {
            str = str.replace(new RegExp('(' + this.escapeStr(k1) + '|' + this.escapeStr(k2) + ')', 'gm' + sens), joinerPlaceholder + ('(' + this.processSynomyms(k1) + '|') + (this.processSynomyms(k2) + ')') + joinerPlaceholder);
          }
        }
      }
      return str;
    }
  }, {
    key: 'processSynomyms',
    value: function processSynomyms(str) {
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      return str;
    }
  }, {
    key: 'setupWildcardsRegExp',
    value: function setupWildcardsRegExp(str) {
      str = str.replace(/(?:\\)*\?/g, function (val) {
        return val.charAt(0) === '\\' ? '?' : '\x01';
      });
      return str.replace(/(?:\\)*\*/g, function (val) {
        return val.charAt(0) === '\\' ? '*' : '\x02';
      });
    }
  }, {
    key: 'createWildcardsRegExp',
    value: function createWildcardsRegExp(str) {
      var spaces = this.opt.wildcards === 'withSpaces';
      return str.replace(/\u0001/g, spaces ? '[\\S\\s]?' : '\\S?').replace(/\u0002/g, spaces ? '[\\S\\s]*?' : '\\S*');
    }
  }, {
    key: 'setupIgnoreJoinersRegExp',
    value: function setupIgnoreJoinersRegExp(str) {
      return str.replace(/[^(|)\\]/g, function (val, indx, original) {
        var nextChar = original.charAt(indx + 1);
        if (/[(|)\\]/.test(nextChar) || nextChar === '') {
          return val;
        } else {
          return val + '\0';
        }
      });
    }
  }, {
    key: 'createJoinersRegExp',
    value: function createJoinersRegExp(str) {
      var joiner = [];
      var ignorePunctuation = this.opt.ignorePunctuation;
      if (Array.isArray(ignorePunctuation) && ignorePunctuation.length) {
        joiner.push(this.escapeStr(ignorePunctuation.join('')));
      }
      if (this.opt.ignoreJoiners) {
        joiner.push('\\u00ad\\u200b\\u200c\\u200d');
      }
      return joiner.length ? str.split(/\u0000+/).join('[' + joiner.join('') + ']*') : str;
    }
  }, {
    key: 'createDiacriticsRegExp',
    value: function createDiacriticsRegExp(str) {
      var sens = this.opt.caseSensitive ? '' : 'i',
          dct = this.opt.caseSensitive ? ['aàáảãạăằắẳẵặâầấẩẫậäåāą', 'AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćč', 'CÇĆČ', 'dđď', 'DĐĎ', 'eèéẻẽẹêềếểễệëěēę', 'EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïī', 'IÌÍỈĨỊÎÏĪ', 'lł', 'LŁ', 'nñňń', 'NÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøō', 'OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rř', 'RŘ', 'sšśșş', 'SŠŚȘŞ', 'tťțţ', 'TŤȚŢ', 'uùúủũụưừứửữựûüůū', 'UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿ', 'YÝỲỶỸỴŸ', 'zžżź', 'ZŽŻŹ'] : ['aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ', 'cçćčCÇĆČ', 'dđďDĐĎ', 'eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ', 'iìíỉĩịîïīIÌÍỈĨỊÎÏĪ', 'lłLŁ', 'nñňńNÑŇŃ', 'oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ', 'rřRŘ', 'sšśșşSŠŚȘŞ', 'tťțţTŤȚŢ', 'uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ', 'yýỳỷỹỵÿYÝỲỶỸỴŸ', 'zžżźZŽŻŹ'];
      var handled = [];
      str.split('').forEach(function (ch) {
        dct.every(function (dct) {
          if (dct.indexOf(ch) !== -1) {
            if (handled.indexOf(dct) > -1) {
              return false;
            }
            str = str.replace(new RegExp('[' + dct + ']', 'gm' + sens), '[' + dct + ']');
            handled.push(dct);
          }
          return true;
        });
      });
      return str;
    }
  }, {
    key: 'createMergedBlanksRegExp',
    value: function createMergedBlanksRegExp(str) {
      return str.replace(/[\s]+/gmi, '[\\s]+');
    }
  }, {
    key: 'createAccuracyRegExp',
    value: function createAccuracyRegExp(str) {
      var _this = this;

      var chars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~¡¿';
      var acc = this.opt.accuracy,
          val = typeof acc === 'string' ? acc : acc.value,
          ls = typeof acc === 'string' ? [] : acc.limiters,
          lsJoin = '';
      ls.forEach(function (limiter) {
        lsJoin += '|' + _this.escapeStr(limiter);
      });
      switch (val) {
        case 'partially':
        default:
          return '()(' + str + ')';
        case 'complementary':
          lsJoin = '\\s' + (lsJoin ? lsJoin : this.escapeStr(chars));
          return '()([^' + lsJoin + ']*' + str + '[^' + lsJoin + ']*)';
        case 'exactly':
          return '(^|\\s' + lsJoin + ')(' + str + ')(?=$|\\s' + lsJoin + ')';
      }
    }
  }, {
    key: 'getSeparatedKeywords',
    value: function getSeparatedKeywords(sv) {
      var _this2 = this;

      var stack = [];
      sv.forEach(function (kw) {
        if (!_this2.opt.separateWordSearch) {
          if (kw.trim() && stack.indexOf(kw) === -1) {
            stack.push(kw);
          }
        } else {
          kw.split(' ').forEach(function (kwSplitted) {
            if (kwSplitted.trim() && stack.indexOf(kwSplitted) === -1) {
              stack.push(kwSplitted);
            }
          });
        }
      });
      return {
        'keywords': stack.sort(function (a, b) {
          return b.length - a.length;
        }),
        'length': stack.length
      };
    }
  }, {
    key: 'isNumeric',
    value: function isNumeric(value) {
      return Number(parseFloat(value)) == value;
    }
  }, {
    key: 'checkRanges',
    value: function checkRanges(array) {
      var _this3 = this;

      if (!Array.isArray(array) || Object.prototype.toString.call(array[0]) !== '[object Object]') {
        this.log('markRanges() will only accept an array of objects');
        this.opt.noMatch(array);
        return [];
      }
      var stack = [];
      var last = 0;
      array.sort(function (a, b) {
        return a.start - b.start;
      }).forEach(function (item) {
        var _callNoMatchOnInvalid = _this3.callNoMatchOnInvalidRanges(item, last),
            start = _callNoMatchOnInvalid.start,
            end = _callNoMatchOnInvalid.end,
            valid = _callNoMatchOnInvalid.valid;

        if (valid) {
          item.start = start;
          item.length = end - start;
          stack.push(item);
          last = end;
        }
      });
      return stack;
    }
  }, {
    key: 'callNoMatchOnInvalidRanges',
    value: function callNoMatchOnInvalidRanges(range, last) {
      var start = void 0,
          end = void 0,
          valid = false;
      if (range && typeof range.start !== 'undefined') {
        start = parseInt(range.start, 10);
        end = start + parseInt(range.length, 10);
        if (this.isNumeric(range.start) && this.isNumeric(range.length) && end - last > 0 && end - start > 0) {
          valid = true;
        } else {
          this.log('Ignoring invalid or overlapping range: ' + ('' + JSON.stringify(range)));
          this.opt.noMatch(range);
        }
      } else {
        this.log('Ignoring invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'checkWhitespaceRanges',
    value: function checkWhitespaceRanges(range, originalLength, string) {
      var end = void 0,
          valid = true,
          max = string.length,
          offset = originalLength - max,
          start = parseInt(range.start, 10) - offset;
      start = start > max ? max : start;
      end = start + parseInt(range.length, 10);
      if (end > max) {
        end = max;
        this.log('End range automatically set to the max value of ' + max);
      }
      if (start < 0 || end - start < 0 || start > max || end > max) {
        valid = false;
        this.log('Invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      } else if (string.substring(start, end).replace(/\s+/g, '') === '') {
        valid = false;
        this.log('Skipping whitespace only range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'getTextNodes',
    value: function getTextNodes(cb) {
      var _this4 = this;

      var val = '',
          nodes = [];
      this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function (node) {
        nodes.push({
          start: val.length,
          end: (val += node.textContent).length,
          node: node
        });
      }, function (node) {
        if (_this4.matchesExclude(node.parentNode)) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, function () {
        cb({
          value: val,
          nodes: nodes
        });
      });
    }
  }, {
    key: 'matchesExclude',
    value: function matchesExclude(el) {
      return DOMIterator.matches(el, this.opt.exclude.concat(['script', 'style', 'title', 'head', 'html']));
    }
  }, {
    key: 'wrapRangeInTextNode',
    value: function wrapRangeInTextNode(node, start, end) {
      var hEl = !this.opt.element ? 'mark' : this.opt.element,
          startNode = node.splitText(start),
          ret = startNode.splitText(end - start);
      var repl = document.createElement(hEl);
      repl.setAttribute('data-markjs', 'true');
      if (this.opt.className) {
        repl.setAttribute('class', this.opt.className);
      }
      repl.textContent = startNode.textContent;
      startNode.parentNode.replaceChild(repl, startNode);
      return ret;
    }
  }, {
    key: 'wrapRangeInMappedTextNode',
    value: function wrapRangeInMappedTextNode(dict, start, end, filterCb, eachCb) {
      var _this5 = this;

      dict.nodes.every(function (n, i) {
        var sibl = dict.nodes[i + 1];
        if (typeof sibl === 'undefined' || sibl.start > start) {
          if (!filterCb(n.node)) {
            return false;
          }
          var s = start - n.start,
              e = (end > n.end ? n.end : end) - n.start,
              startStr = dict.value.substr(0, n.start),
              endStr = dict.value.substr(e + n.start);
          n.node = _this5.wrapRangeInTextNode(n.node, s, e);
          dict.value = startStr + endStr;
          dict.nodes.forEach(function (k, j) {
            if (j >= i) {
              if (dict.nodes[j].start > 0 && j !== i) {
                dict.nodes[j].start -= e;
              }
              dict.nodes[j].end -= e;
            }
          });
          end -= e;
          eachCb(n.node.previousSibling, n.start);
          if (end > n.end) {
            start = n.end;
          } else {
            return false;
          }
        }
        return true;
      });
    }
  }, {
    key: 'wrapMatches',
    value: function wrapMatches(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this6 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        dict.nodes.forEach(function (node) {
          node = node.node;
          var match = void 0;
          while ((match = regex.exec(node.textContent)) !== null && match[matchIdx] !== '') {
            if (!filterCb(match[matchIdx], node)) {
              continue;
            }
            var pos = match.index;
            if (matchIdx !== 0) {
              for (var i = 1; i < matchIdx; i++) {
                pos += match[i].length;
              }
            }
            node = _this6.wrapRangeInTextNode(node, pos, pos + match[matchIdx].length);
            eachCb(node.previousSibling);
            regex.lastIndex = 0;
          }
        });
        endCb();
      });
    }
  }, {
    key: 'wrapMatchesAcrossElements',
    value: function wrapMatchesAcrossElements(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this7 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        var match = void 0;
        while ((match = regex.exec(dict.value)) !== null && match[matchIdx] !== '') {
          var start = match.index;
          if (matchIdx !== 0) {
            for (var i = 1; i < matchIdx; i++) {
              start += match[i].length;
            }
          }
          var end = start + match[matchIdx].length;
          _this7.wrapRangeInMappedTextNode(dict, start, end, function (node) {
            return filterCb(match[matchIdx], node);
          }, function (node, lastIndex) {
            regex.lastIndex = lastIndex;
            eachCb(node);
          });
        }
        endCb();
      });
    }
  }, {
    key: 'wrapRangeFromIndex',
    value: function wrapRangeFromIndex(ranges, filterCb, eachCb, endCb) {
      var _this8 = this;

      this.getTextNodes(function (dict) {
        var originalLength = dict.value.length;
        ranges.forEach(function (range, counter) {
          var _checkWhitespaceRange = _this8.checkWhitespaceRanges(range, originalLength, dict.value),
              start = _checkWhitespaceRange.start,
              end = _checkWhitespaceRange.end,
              valid = _checkWhitespaceRange.valid;

          if (valid) {
            _this8.wrapRangeInMappedTextNode(dict, start, end, function (node) {
              return filterCb(node, range, dict.value.substring(start, end), counter);
            }, function (node) {
              eachCb(node, range);
            });
          }
        });
        endCb();
      });
    }
  }, {
    key: 'unwrapMatches',
    value: function unwrapMatches(node) {
      var parent = node.parentNode;
      var docFrag = document.createDocumentFragment();
      while (node.firstChild) {
        docFrag.appendChild(node.removeChild(node.firstChild));
      }
      parent.replaceChild(docFrag, node);
      if (!this.ie) {
        parent.normalize();
      } else {
        this.normalizeTextNode(parent);
      }
    }
  }, {
    key: 'normalizeTextNode',
    value: function normalizeTextNode(node) {
      if (!node) {
        return;
      }
      if (node.nodeType === 3) {
        while (node.nextSibling && node.nextSibling.nodeType === 3) {
          node.nodeValue += node.nextSibling.nodeValue;
          node.parentNode.removeChild(node.nextSibling);
        }
      } else {
        this.normalizeTextNode(node.firstChild);
      }
      this.normalizeTextNode(node.nextSibling);
    }
  }, {
    key: 'markRegExp',
    value: function markRegExp(regexp, opt) {
      var _this9 = this;

      this.opt = opt;
      this.log('Searching with expression "' + regexp + '"');
      var totalMatches = 0,
          fn = 'wrapMatches';
      var eachCb = function eachCb(element) {
        totalMatches++;
        _this9.opt.each(element);
      };
      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      this[fn](regexp, this.opt.ignoreGroups, function (match, node) {
        return _this9.opt.filter(node, match, totalMatches);
      }, eachCb, function () {
        if (totalMatches === 0) {
          _this9.opt.noMatch(regexp);
        }
        _this9.opt.done(totalMatches);
      });
    }
  }, {
    key: 'mark',
    value: function mark(sv, opt) {
      var _this10 = this;

      this.opt = opt;
      var totalMatches = 0,
          fn = 'wrapMatches';

      var _getSeparatedKeywords = this.getSeparatedKeywords(typeof sv === 'string' ? [sv] : sv),
          kwArr = _getSeparatedKeywords.keywords,
          kwArrLen = _getSeparatedKeywords.length,
          sens = this.opt.caseSensitive ? '' : 'i',
          handler = function handler(kw) {
        var regex = new RegExp(_this10.createRegExp(kw), 'gm' + sens),
            matches = 0;
        _this10.log('Searching with expression "' + regex + '"');
        _this10[fn](regex, 1, function (term, node) {
          return _this10.opt.filter(node, kw, totalMatches, matches);
        }, function (element) {
          matches++;
          totalMatches++;
          _this10.opt.each(element);
        }, function () {
          if (matches === 0) {
            _this10.opt.noMatch(kw);
          }
          if (kwArr[kwArrLen - 1] === kw) {
            _this10.opt.done(totalMatches);
          } else {
            handler(kwArr[kwArr.indexOf(kw) + 1]);
          }
        });
      };

      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      if (kwArrLen === 0) {
        this.opt.done(totalMatches);
      } else {
        handler(kwArr[0]);
      }
    }
  }, {
    key: 'markRanges',
    value: function markRanges(rawRanges, opt) {
      var _this11 = this;

      this.opt = opt;
      var totalMatches = 0,
          ranges = this.checkRanges(rawRanges);
      if (ranges && ranges.length) {
        this.log('Starting to mark with the following ranges: ' + JSON.stringify(ranges));
        this.wrapRangeFromIndex(ranges, function (node, range, match, counter) {
          return _this11.opt.filter(node, range, match, counter);
        }, function (element, range) {
          totalMatches++;
          _this11.opt.each(element, range);
        }, function () {
          _this11.opt.done(totalMatches);
        });
      } else {
        this.opt.done(totalMatches);
      }
    }
  }, {
    key: 'unmark',
    value: function unmark(opt) {
      var _this12 = this;

      this.opt = opt;
      var sel = this.opt.element ? this.opt.element : '*';
      sel += '[data-markjs]';
      if (this.opt.className) {
        sel += '.' + this.opt.className;
      }
      this.log('Removal selector "' + sel + '"');
      this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function (node) {
        _this12.unwrapMatches(node);
      }, function (node) {
        var matchesSel = DOMIterator.matches(node, sel),
            matchesExclude = _this12.matchesExclude(node);
        if (!matchesSel || matchesExclude) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, this.opt.done);
    }
  }, {
    key: 'opt',
    set: function set$$1(val) {
      this._opt = _extends({}, {
        'element': '',
        'className': '',
        'exclude': [],
        'iframes': false,
        'iframesTimeout': 5000,
        'separateWordSearch': true,
        'diacritics': true,
        'synonyms': {},
        'accuracy': 'partially',
        'acrossElements': false,
        'caseSensitive': false,
        'ignoreJoiners': false,
        'ignoreGroups': 0,
        'ignorePunctuation': [],
        'wildcards': 'disabled',
        'each': function each() {},
        'noMatch': function noMatch() {},
        'filter': function filter() {
          return true;
        },
        'done': function done() {},
        'debug': false,
        'log': window.console
      }, val);
    },
    get: function get$$1() {
      return this._opt;
    }
  }, {
    key: 'iterator',
    get: function get$$1() {
      return new DOMIterator(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout);
    }
  }]);
  return Mark;
}();

function Mark(ctx) {
  var _this = this;

  var instance = new Mark$1(ctx);
  this.mark = function (sv, opt) {
    instance.mark(sv, opt);
    return _this;
  };
  this.markRegExp = function (sv, opt) {
    instance.markRegExp(sv, opt);
    return _this;
  };
  this.markRanges = function (sv, opt) {
    instance.markRanges(sv, opt);
    return _this;
  };
  this.unmark = function (opt) {
    instance.unmark(opt);
    return _this;
  };
  return this;
}

return Mark;

})));


/***/ }),

/***/ "./node_modules/snowball/stemmer/lib/Snowball.js":
/*!*******************************************************!*\
  !*** ./node_modules/snowball/stemmer/lib/Snowball.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

module.exports = Snowball;
function Snowball(lng) {
	function Among(s, substring_i, result, method) {
		this.s_size = s.length;
		this.s = this.toCharArray(s);
		this.substring_i = substring_i;
		this.result = result;
		this.method = method;
	}
	Among.prototype.toCharArray = function(s) {
		var sLength = s.length, charArr = new Array(sLength);
		for (var i = 0; i < sLength; i++)
			charArr[i] = s.charCodeAt(i);
		return charArr;
	}
	function SnowballProgram() {
		var current;
		return {
			b : 0,
			k : 0,
			l : 0,
			c : 0,
			lb : 0,
			s_c : function(word) {
				current = word;
				this.c = 0;
				this.l = word.length;
				this.lb = 0;
				this.b = this.c;
				this.k = this.l;
			},
			g_c : function() {
				var result = current;
				current = null;
				return result;
			},
			i_g : function(s, min, max) {
				if (this.c < this.l) {
					var ch = current.charCodeAt(this.c);
					if (ch <= max && ch >= min) {
						ch -= min;
						if (s[ch >> 3] & (0X1 << (ch & 0X7))) {
							this.c++;
							return true;
						}
					}
				}
				return false;
			},
			i_g_b : function(s, min, max) {
				if (this.c > this.lb) {
					var ch = current.charCodeAt(this.c - 1);
					if (ch <= max && ch >= min) {
						ch -= min;
						if (s[ch >> 3] & (0X1 << (ch & 0X7))) {
							this.c--;
							return true;
						}
					}
				}
				return false;
			},
			o_g : function(s, min, max) {
				if (this.c < this.l) {
					var ch = current.charCodeAt(this.c);
					if (ch > max || ch < min) {
						this.c++;
						return true;
					}
					ch -= min;
					if (!(s[ch >> 3] & (0X1 << (ch & 0X7)))) {
						this.c++;
						return true;
					}
				}
				return false;
			},
			o_g_b : function(s, min, max) {
				if (this.c > this.lb) {
					var ch = current.charCodeAt(this.c - 1);
					if (ch > max || ch < min) {
						this.c--;
						return true;
					}
					ch -= min;
					if (!(s[ch >> 3] & (0X1 << (ch & 0X7)))) {
						this.c--;
						return true;
					}
				}
				return false;
			},
			e_s : function(s_size, s) {
				if (this.l - this.c < s_size)
					return false;
				for (var i = 0; i < s_size; i++)
					if (current.charCodeAt(this.c + i) != s.charCodeAt(i))
						return false;
				this.c += s_size;
				return true;
			},
			e_s_b : function(s_size, s) {
				if (this.c - this.lb < s_size)
					return false;
				for (var i = 0; i < s_size; i++)
					if (current.charCodeAt(this.c - s_size + i) != s
							.charCodeAt(i))
						return false;
				this.c -= s_size;
				return true;
			},
			f_a : function(v, v_size) {
				var i = 0, j = v_size, c = this.c, l = this.l, common_i = 0, common_j = 0, first_key_inspected = false;
				while (true) {
					var k = i + ((j - i) >> 1), diff = 0, common = common_i < common_j
							? common_i
							: common_j, w = v[k];
					for (var i2 = common; i2 < w.s_size; i2++) {
						if (c + common == l) {
							diff = -1;
							break;
						}
						diff = current.charCodeAt(c + common) - w.s[i2];
						if (diff)
							break;
						common++;
					}
					if (diff < 0) {
						j = k;
						common_j = common;
					} else {
						i = k;
						common_i = common;
					}
					if (j - i <= 1) {
						if (i > 0 || j == i || first_key_inspected)
							break;
						first_key_inspected = true;
					}
				}
				while (true) {
					var w = v[i];
					if (common_i >= w.s_size) {
						this.c = c + w.s_size;
						if (!w.method)
							return w.result;
						var res = w.method();
						this.c = c + w.s_size;
						if (res)
							return w.result;
					}
					i = w.substring_i;
					if (i < 0)
						return 0;
				}
			},
			f_a_b : function(v, v_size) {
				var i = 0, j = v_size, c = this.c, lb = this.lb, common_i = 0, common_j = 0, first_key_inspected = false;
				while (true) {
					var k = i + ((j - i) >> 1), diff = 0, common = common_i < common_j
							? common_i
							: common_j, w = v[k];
					for (var i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
						if (c - common == lb) {
							diff = -1;
							break;
						}
						diff = current.charCodeAt(c - 1 - common) - w.s[i2];
						if (diff)
							break;
						common++;
					}
					if (diff < 0) {
						j = k;
						common_j = common;
					} else {
						i = k;
						common_i = common;
					}
					if (j - i <= 1) {
						if (i > 0 || j == i || first_key_inspected)
							break;
						first_key_inspected = true;
					}
				}
				while (true) {
					var w = v[i];
					if (common_i >= w.s_size) {
						this.c = c - w.s_size;
						if (!w.method)
							return w.result;
						var res = w.method();
						this.c = c - w.s_size;
						if (res)
							return w.result;
					}
					i = w.substring_i;
					if (i < 0)
						return 0;
				}
			},
			r_s : function(c_bra, c_ket, s) {
				var adjustment = s.length - (c_ket - c_bra), left = current
						.substring(0, c_bra), right = current.substring(c_ket);
				current = left + s + right;
				this.l += adjustment;
				if (this.c >= c_ket)
					this.c += adjustment;
				else if (this.c > c_bra)
					this.c = c_bra;
				return adjustment;
			},
			s_ch : function() {
				if (this.b < 0 || this.b > this.k || this.k > this.l
						|| this.l > current.length)
					throw ("faulty slice operation");
			},
			s_f : function(s) {
				this.s_ch();
				this.r_s(this.b, this.k, s);
			},
			s_d : function() {
				this.s_f("");
			},
			i_ : function(c_bra, c_ket, s) {
				var adjustment = this.r_s(c_bra, c_ket, s);
				if (c_bra <= this.b)
					this.b += adjustment;
				if (c_bra <= this.k)
					this.k += adjustment;
			},
			s_t : function() {
				this.s_ch();
				return current.substring(this.b, this.k);
			},
			e_v_b : function(s) {
				return this.e_s_b(s.length, s);
			}
		};
	}
	var stemFactory = {
		DanishStemmer : function() {
			var a_0 = [new Among("hed", -1, 1), new Among("ethed", 0, 1),
					new Among("ered", -1, 1), new Among("e", -1, 1),
					new Among("erede", 3, 1), new Among("ende", 3, 1),
					new Among("erende", 5, 1), new Among("ene", 3, 1),
					new Among("erne", 3, 1), new Among("ere", 3, 1),
					new Among("en", -1, 1), new Among("heden", 10, 1),
					new Among("eren", 10, 1), new Among("er", -1, 1),
					new Among("heder", 13, 1), new Among("erer", 13, 1),
					new Among("s", -1, 2), new Among("heds", 16, 1),
					new Among("es", 16, 1), new Among("endes", 18, 1),
					new Among("erendes", 19, 1), new Among("enes", 18, 1),
					new Among("ernes", 18, 1), new Among("eres", 18, 1),
					new Among("ens", 16, 1), new Among("hedens", 24, 1),
					new Among("erens", 24, 1), new Among("ers", 16, 1),
					new Among("ets", 16, 1), new Among("erets", 28, 1),
					new Among("et", -1, 1), new Among("eret", 30, 1)], a_1 = [
					new Among("gd", -1, -1), new Among("dt", -1, -1),
					new Among("gt", -1, -1), new Among("kt", -1, -1)], a_2 = [
					new Among("ig", -1, 1), new Among("lig", 0, 1),
					new Among("elig", 1, 1), new Among("els", -1, 1),
					new Among("l\u00F8st", -1, 2)], g_v = [17, 65, 16, 1, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128], g_s_ending = [
					239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16], I_x, I_p1, S_ch, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_mark_regions() {
				var v_1, c = sbp.c + 3;
				I_p1 = sbp.l;
				if (0 <= c && c <= sbp.l) {
					I_x = c;
					while (true) {
						v_1 = sbp.c;
						if (sbp.i_g(g_v, 97, 248)) {
							sbp.c = v_1;
							break;
						}
						sbp.c = v_1;
						if (v_1 >= sbp.l)
							return;
						sbp.c++;
					}
					while (!sbp.o_g(g_v, 97, 248)) {
						if (sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
					I_p1 = sbp.c;
					if (I_p1 < I_x)
						I_p1 = I_x;
				}
			}
			function r_main_suffix() {
				var a_v, v_1;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_0, 32);
					sbp.lb = v_1;
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								if (sbp.i_g_b(g_s_ending, 97, 229))
									sbp.s_d();
								break;
						}
					}
				}
			}
			function r_consonant_pair() {
				var v_1 = sbp.l - sbp.c, v_2;
				if (sbp.c >= I_p1) {
					v_2 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					if (sbp.f_a_b(a_1, 4)) {
						sbp.b = sbp.c;
						sbp.lb = v_2;
						sbp.c = sbp.l - v_1;
						if (sbp.c > sbp.lb) {
							sbp.c--;
							sbp.b = sbp.c;
							sbp.s_d();
						}
					} else
						sbp.lb = v_2;
				}
			}
			function r_other_suffix() {
				var a_v, v_1 = sbp.l - sbp.c, v_2, v_3;
				sbp.k = sbp.c;
				if (sbp.e_s_b(2, "st")) {
					sbp.b = sbp.c;
					if (sbp.e_s_b(2, "ig"))
						sbp.s_d();
				}
				sbp.c = sbp.l - v_1;
				if (sbp.c >= I_p1) {
					v_2 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_2, 5);
					sbp.lb = v_2;
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_d();
								v_3 = sbp.l - sbp.c;
								r_consonant_pair();
								sbp.c = sbp.l - v_3;
								break;
							case 2 :
								sbp.s_f("l\u00F8s");
								break;
						}
					}
				}
			}
			function r_undouble() {
				var v_1;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					if (sbp.o_g_b(g_v, 97, 248)) {
						sbp.b = sbp.c;
						S_ch = sbp.s_t(S_ch);
						sbp.lb = v_1;
						if (sbp.e_v_b(S_ch))
							sbp.s_d();
					} else
						sbp.lb = v_1;
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_main_suffix();
				sbp.c = sbp.l;
				r_consonant_pair();
				sbp.c = sbp.l;
				r_other_suffix();
				sbp.c = sbp.l;
				r_undouble();
				return true;
			}
		},
		DutchStemmer : function() {
			var a_0 = [new Among("", -1, 6), new Among("\u00E1", 0, 1),
					new Among("\u00E4", 0, 1), new Among("\u00E9", 0, 2),
					new Among("\u00EB", 0, 2), new Among("\u00ED", 0, 3),
					new Among("\u00EF", 0, 3), new Among("\u00F3", 0, 4),
					new Among("\u00F6", 0, 4), new Among("\u00FA", 0, 5),
					new Among("\u00FC", 0, 5)], a_1 = [new Among("", -1, 3),
					new Among("I", 0, 2), new Among("Y", 0, 1)], a_2 = [
					new Among("dd", -1, -1), new Among("kk", -1, -1),
					new Among("tt", -1, -1)], a_3 = [new Among("ene", -1, 2),
					new Among("se", -1, 3), new Among("en", -1, 2),
					new Among("heden", 2, 1), new Among("s", -1, 3)], a_4 = [
					new Among("end", -1, 1), new Among("ig", -1, 2),
					new Among("ing", -1, 1), new Among("lijk", -1, 3),
					new Among("baar", -1, 4), new Among("bar", -1, 5)], a_5 = [
					new Among("aa", -1, -1), new Among("ee", -1, -1),
					new Among("oo", -1, -1), new Among("uu", -1, -1)], g_v = [
					17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128], g_v_I = [
					1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					128], g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 128], I_p2, I_p1, B_e_found, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_prelude() {
				var a_v, v_1 = sbp.c, v_2, v_3;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_0, 11);
					if (a_v) {
						sbp.k = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_f("a");
								continue;
							case 2 :
								sbp.s_f("e");
								continue;
							case 3 :
								sbp.s_f("i");
								continue;
							case 4 :
								sbp.s_f("o");
								continue;
							case 5 :
								sbp.s_f("u");
								continue;
							case 6 :
								if (sbp.c >= sbp.l)
									break;
								sbp.c++;
								continue;
						}
					}
					break;
				}
				sbp.c = v_1;
				sbp.b = v_1;
				if (sbp.e_s(1, "y")) {
					sbp.k = sbp.c;
					sbp.s_f("Y");
				} else
					sbp.c = v_1;
				while (true) {
					v_2 = sbp.c;
					if (sbp.i_g(g_v, 97, 232)) {
						v_3 = sbp.c;
						sbp.b = v_3;
						if (sbp.e_s(1, "i")) {
							sbp.k = sbp.c;
							if (sbp.i_g(g_v, 97, 232)) {
								sbp.s_f("I");
								sbp.c = v_2;
							}
						} else {
							sbp.c = v_3;
							if (sbp.e_s(1, "y")) {
								sbp.k = sbp.c;
								sbp.s_f("Y");
								sbp.c = v_2;
							} else if (habr1(v_2))
								break;
						}
					} else if (habr1(v_2))
						break;
				}
			}
			function habr1(v_1) {
				sbp.c = v_1;
				if (v_1 >= sbp.l)
					return true;
				sbp.c++;
				return false;
			}
			function r_mark_regions() {
				I_p1 = sbp.l;
				I_p2 = I_p1;
				if (!habr2()) {
					I_p1 = sbp.c;
					if (I_p1 < 3)
						I_p1 = 3;
					if (!habr2())
						I_p2 = sbp.c;
				}
			}
			function habr2() {
				while (!sbp.i_g(g_v, 97, 232)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 232)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				return false;
			}
			function r_postlude() {
				var a_v;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_1, 3);
					if (a_v) {
						sbp.k = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_f("y");
								break;
							case 2 :
								sbp.s_f("i");
								break;
							case 3 :
								if (sbp.c >= sbp.l)
									return;
								sbp.c++;
								break;
						}
					}
				}
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_undouble() {
				var v_1 = sbp.l - sbp.c;
				if (sbp.f_a_b(a_2, 3)) {
					sbp.c = sbp.l - v_1;
					sbp.k = sbp.c;
					if (sbp.c > sbp.lb) {
						sbp.c--;
						sbp.b = sbp.c;
						sbp.s_d();
					}
				}
			}
			function r_e_ending() {
				var v_1;
				B_e_found = false;
				sbp.k = sbp.c;
				if (sbp.e_s_b(1, "e")) {
					sbp.b = sbp.c;
					if (r_R1()) {
						v_1 = sbp.l - sbp.c;
						if (sbp.o_g_b(g_v, 97, 232)) {
							sbp.c = sbp.l - v_1;
							sbp.s_d();
							B_e_found = true;
							r_undouble();
						}
					}
				}
			}
			function r_en_ending() {
				var v_1;
				if (r_R1()) {
					v_1 = sbp.l - sbp.c;
					if (sbp.o_g_b(g_v, 97, 232)) {
						sbp.c = sbp.l - v_1;
						if (!sbp.e_s_b(3, "gem")) {
							sbp.c = sbp.l - v_1;
							sbp.s_d();
							r_undouble();
						}
					}
				}
			}
			function r_standard_suffix() {
				var a_v, v_1 = sbp.l - sbp.c, v_2, v_3, v_4, v_5, v_6;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_3, 5);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							if (r_R1())
								sbp.s_f("heid");
							break;
						case 2 :
							r_en_ending();
							break;
						case 3 :
							if (r_R1() && sbp.o_g_b(g_v_j, 97, 232))
								sbp.s_d();
							break;
					}
				}
				sbp.c = sbp.l - v_1;
				r_e_ending();
				sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				if (sbp.e_s_b(4, "heid")) {
					sbp.b = sbp.c;
					if (r_R2()) {
						v_2 = sbp.l - sbp.c;
						if (!sbp.e_s_b(1, "c")) {
							sbp.c = sbp.l - v_2;
							sbp.s_d();
							sbp.k = sbp.c;
							if (sbp.e_s_b(2, "en")) {
								sbp.b = sbp.c;
								r_en_ending();
							}
						}
					}
				}
				sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_4, 6);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							if (r_R2()) {
								sbp.s_d();
								v_3 = sbp.l - sbp.c;
								sbp.k = sbp.c;
								if (sbp.e_s_b(2, "ig")) {
									sbp.b = sbp.c;
									if (r_R2()) {
										v_4 = sbp.l - sbp.c;
										if (!sbp.e_s_b(1, "e")) {
											sbp.c = sbp.l - v_4;
											sbp.s_d();
											break;
										}
									}
								}
								sbp.c = sbp.l - v_3;
								r_undouble();
							}
							break;
						case 2 :
							if (r_R2()) {
								v_5 = sbp.l - sbp.c;
								if (!sbp.e_s_b(1, "e")) {
									sbp.c = sbp.l - v_5;
									sbp.s_d();
								}
							}
							break;
						case 3 :
							if (r_R2()) {
								sbp.s_d();
								r_e_ending();
							}
							break;
						case 4 :
							if (r_R2())
								sbp.s_d();
							break;
						case 5 :
							if (r_R2() && B_e_found)
								sbp.s_d();
							break;
					}
				}
				sbp.c = sbp.l - v_1;
				if (sbp.o_g_b(g_v_I, 73, 232)) {
					v_6 = sbp.l - sbp.c;
					if (sbp.f_a_b(a_5, 4)
							&& sbp.o_g_b(g_v, 97, 232)) {
						sbp.c = sbp.l - v_6;
						sbp.k = sbp.c;
						if (sbp.c > sbp.lb) {
							sbp.c--;
							sbp.b = sbp.c;
							sbp.s_d();
						}
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_prelude();
				sbp.c = v_1;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_standard_suffix();
				sbp.c = sbp.lb;
				r_postlude();
				return true;
			}
		},
		EnglishStemmer : function() {
			var a_0 = [new Among("arsen", -1, -1), new Among("commun", -1, -1),
					new Among("gener", -1, -1)], a_1 = [new Among("'", -1, 1),
					new Among("'s'", 0, 1), new Among("'s", -1, 1)], a_2 = [
					new Among("ied", -1, 2), new Among("s", -1, 3),
					new Among("ies", 1, 2), new Among("sses", 1, 1),
					new Among("ss", 1, -1), new Among("us", 1, -1)], a_3 = [
					new Among("", -1, 3), new Among("bb", 0, 2),
					new Among("dd", 0, 2), new Among("ff", 0, 2),
					new Among("gg", 0, 2), new Among("bl", 0, 1),
					new Among("mm", 0, 2), new Among("nn", 0, 2),
					new Among("pp", 0, 2), new Among("rr", 0, 2),
					new Among("at", 0, 1), new Among("tt", 0, 2),
					new Among("iz", 0, 1)], a_4 = [new Among("ed", -1, 2),
					new Among("eed", 0, 1), new Among("ing", -1, 2),
					new Among("edly", -1, 2), new Among("eedly", 3, 1),
					new Among("ingly", -1, 2)], a_5 = [
					new Among("anci", -1, 3), new Among("enci", -1, 2),
					new Among("ogi", -1, 13), new Among("li", -1, 16),
					new Among("bli", 3, 12), new Among("abli", 4, 4),
					new Among("alli", 3, 8), new Among("fulli", 3, 14),
					new Among("lessli", 3, 15), new Among("ousli", 3, 10),
					new Among("entli", 3, 5), new Among("aliti", -1, 8),
					new Among("biliti", -1, 12), new Among("iviti", -1, 11),
					new Among("tional", -1, 1), new Among("ational", 14, 7),
					new Among("alism", -1, 8), new Among("ation", -1, 7),
					new Among("ization", 17, 6), new Among("izer", -1, 6),
					new Among("ator", -1, 7), new Among("iveness", -1, 11),
					new Among("fulness", -1, 9), new Among("ousness", -1, 10)], a_6 = [
					new Among("icate", -1, 4), new Among("ative", -1, 6),
					new Among("alize", -1, 3), new Among("iciti", -1, 4),
					new Among("ical", -1, 4), new Among("tional", -1, 1),
					new Among("ational", 5, 2), new Among("ful", -1, 5),
					new Among("ness", -1, 5)], a_7 = [new Among("ic", -1, 1),
					new Among("ance", -1, 1), new Among("ence", -1, 1),
					new Among("able", -1, 1), new Among("ible", -1, 1),
					new Among("ate", -1, 1), new Among("ive", -1, 1),
					new Among("ize", -1, 1), new Among("iti", -1, 1),
					new Among("al", -1, 1), new Among("ism", -1, 1),
					new Among("ion", -1, 2), new Among("er", -1, 1),
					new Among("ous", -1, 1), new Among("ant", -1, 1),
					new Among("ent", -1, 1), new Among("ment", 15, 1),
					new Among("ement", 16, 1)], a_8 = [new Among("e", -1, 1),
					new Among("l", -1, 2)], a_9 = [
					new Among("succeed", -1, -1), new Among("proceed", -1, -1),
					new Among("exceed", -1, -1), new Among("canning", -1, -1),
					new Among("inning", -1, -1), new Among("earring", -1, -1),
					new Among("herring", -1, -1), new Among("outing", -1, -1)], a_10 = [
					new Among("andes", -1, -1), new Among("atlas", -1, -1),
					new Among("bias", -1, -1), new Among("cosmos", -1, -1),
					new Among("dying", -1, 3), new Among("early", -1, 9),
					new Among("gently", -1, 7), new Among("howe", -1, -1),
					new Among("idly", -1, 6), new Among("lying", -1, 4),
					new Among("news", -1, -1), new Among("only", -1, 10),
					new Among("singly", -1, 11), new Among("skies", -1, 2),
					new Among("skis", -1, 1), new Among("sky", -1, -1),
					new Among("tying", -1, 5), new Among("ugly", -1, 8)], g_v = [
					17, 65, 16, 1], g_v_WXY = [1, 17, 65, 208, 1], g_valid_LI = [
					55, 141, 2], B_Y_found, I_p2, I_p1, habr = [r_Step_1b,
					r_Step_1c, r_Step_2, r_Step_3, r_Step_4, r_Step_5], sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_prelude() {
				var v_1 = sbp.c, v_2;
				B_Y_found = false;
				sbp.b = sbp.c;
				if (sbp.e_s(1, "'")) {
					sbp.k = sbp.c;
					sbp.s_d();
				}
				sbp.c = v_1;
				sbp.b = v_1;
				if (sbp.e_s(1, "y")) {
					sbp.k = sbp.c;
					sbp.s_f("Y");
					B_Y_found = true;
				}
				sbp.c = v_1;
				while (true) {
					v_2 = sbp.c;
					if (sbp.i_g(g_v, 97, 121)) {
						sbp.b = sbp.c;
						if (sbp.e_s(1, "y")) {
							sbp.k = sbp.c;
							sbp.c = v_2;
							sbp.s_f("Y");
							B_Y_found = true;
							continue;
						}
					}
					if (v_2 >= sbp.l) {
						sbp.c = v_1;
						return;
					}
					sbp.c = v_2 + 1;
				}
			}
			function r_mark_regions() {
				var v_1 = sbp.c;
				I_p1 = sbp.l;
				I_p2 = I_p1;
				if (!sbp.f_a(a_0, 3)) {
					sbp.c = v_1;
					if (habr1()) {
						sbp.c = v_1;
						return;
					}
				}
				I_p1 = sbp.c;
				if (!habr1())
					I_p2 = sbp.c;
			}
			function habr1() {
				while (!sbp.i_g(g_v, 97, 121)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 121)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				return false;
			}
			function r_shortv() {
				var v_1 = sbp.l - sbp.c;
				if (!(sbp.o_g_b(g_v_WXY, 89, 121)
						&& sbp.i_g_b(g_v, 97, 121) && sbp.o_g_b(g_v, 97, 121))) {
					sbp.c = sbp.l - v_1;
					if (!sbp.o_g_b(g_v, 97, 121)
							|| !sbp.i_g_b(g_v, 97, 121)
							|| sbp.c > sbp.lb)
						return false;
				}
				return true;
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_Step_1a() {
				var a_v, v_1 = sbp.l - sbp.c;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_1, 3);
				if (a_v) {
					sbp.b = sbp.c;
					if (a_v == 1)
						sbp.s_d();
				} else
					sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_2, 6);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							sbp.s_f("ss");
							break;
						case 2 :
							var c = sbp.c - 2;
							if (sbp.lb > c || c > sbp.l) {
								sbp.s_f("ie");
								break;
							}
							sbp.c = c;
							sbp.s_f("i");
							break;
						case 3 :
							do {
								if (sbp.c <= sbp.lb)
									return;
								sbp.c--;
							} while (!sbp.i_g_b(g_v, 97, 121));
							sbp.s_d();
							break;
					}
				}
			}
			function r_Step_1b() {
				var a_v, v_1, v_3, v_4;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_4, 6);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							if (r_R1())
								sbp.s_f("ee");
							break;
						case 2 :
							v_1 = sbp.l - sbp.c;
							while (!sbp.i_g_b(g_v, 97, 121)) {
								if (sbp.c <= sbp.lb)
									return;
								sbp.c--;
							}
							sbp.c = sbp.l - v_1;
							sbp.s_d();
							v_3 = sbp.l - sbp.c;
							a_v = sbp.f_a_b(a_3, 13);
							if (a_v) {
								sbp.c = sbp.l - v_3;
								switch (a_v) {
									case 1 :
										var c = sbp.c;
										sbp.i_(sbp.c, sbp.c, "e");
										sbp.c = c;
										break;
									case 2 :
										sbp.k = sbp.c;
										if (sbp.c > sbp.lb) {
											sbp.c--;
											sbp.b = sbp.c;
											sbp.s_d();
										}
										break;
									case 3 :
										if (sbp.c == I_p1) {
											v_4 = sbp.l - sbp.c;
											if (r_shortv()) {
												sbp.c = sbp.l - v_4;
												var c = sbp.c;
												sbp.i_(sbp.c, sbp.c, "e");
												sbp.c = c;
											}
										}
										break;
								}
							}
							break;
					}
				}
			}
			function r_Step_1c() {
				var v_1 = sbp.l - sbp.c;
				sbp.k = sbp.c;
				if (!sbp.e_s_b(1, "y")) {
					sbp.c = sbp.l - v_1;
					if (!sbp.e_s_b(1, "Y"))
						return;
				}
				sbp.b = sbp.c;
				if (sbp.o_g_b(g_v, 97, 121) && sbp.c > sbp.lb)
					sbp.s_f("i");
			}
			function r_Step_2() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_5, 24);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_f("tion");
								break;
							case 2 :
								sbp.s_f("ence");
								break;
							case 3 :
								sbp.s_f("ance");
								break;
							case 4 :
								sbp.s_f("able");
								break;
							case 5 :
								sbp.s_f("ent");
								break;
							case 6 :
								sbp.s_f("ize");
								break;
							case 7 :
								sbp.s_f("ate");
								break;
							case 8 :
								sbp.s_f("al");
								break;
							case 9 :
								sbp.s_f("ful");
								break;
							case 10 :
								sbp.s_f("ous");
								break;
							case 11 :
								sbp.s_f("ive");
								break;
							case 12 :
								sbp.s_f("ble");
								break;
							case 13 :
								if (sbp.e_s_b(1, "l"))
									sbp.s_f("og");
								break;
							case 14 :
								sbp.s_f("ful");
								break;
							case 15 :
								sbp.s_f("less");
								break;
							case 16 :
								if (sbp.i_g_b(g_valid_LI, 99, 116))
									sbp.s_d();
								break;
						}
					}
				}
			}
			function r_Step_3() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_6, 9);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_f("tion");
								break;
							case 2 :
								sbp.s_f("ate");
								break;
							case 3 :
								sbp.s_f("al");
								break;
							case 4 :
								sbp.s_f("ic");
								break;
							case 5 :
								sbp.s_d();
								break;
							case 6 :
								if (r_R2())
									sbp.s_d();
								break;
						}
					}
				}
			}
			function r_Step_4() {
				var a_v, v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_7, 18);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R2()) {
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								v_1 = sbp.l - sbp.c;
								if (!sbp.e_s_b(1, "s")) {
									sbp.c = sbp.l - v_1;
									if (!sbp.e_s_b(1, "t"))
										return;
								}
								sbp.s_d();
								break;
						}
					}
				}
			}
			function r_Step_5() {
				var a_v, v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_8, 2);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							v_1 = sbp.l - sbp.c;
							if (!r_R2()) {
								sbp.c = sbp.l - v_1;
								if (!r_R1() || r_shortv())
									return;
								sbp.c = sbp.l - v_1;
							}
							sbp.s_d();
							break;
						case 2 :
							if (!r_R2() || !sbp.e_s_b(1, "l"))
								return;
							sbp.s_d();
							break;
					}
				}
			}
			function r_exception2() {
				sbp.k = sbp.c;
				if (sbp.f_a_b(a_9, 8)) {
					sbp.b = sbp.c;
					return sbp.c <= sbp.lb;
				}
				return false;
			}
			function r_exception1() {
				var a_v;
				sbp.b = sbp.c;
				a_v = sbp.f_a(a_10, 18);
				if (a_v) {
					sbp.k = sbp.c;
					if (sbp.c >= sbp.l) {
						switch (a_v) {
							case 1 :
								sbp.s_f("ski");
								break;
							case 2 :
								sbp.s_f("sky");
								break;
							case 3 :
								sbp.s_f("die");
								break;
							case 4 :
								sbp.s_f("lie");
								break;
							case 5 :
								sbp.s_f("tie");
								break;
							case 6 :
								sbp.s_f("idl");
								break;
							case 7 :
								sbp.s_f("gentl");
								break;
							case 8 :
								sbp.s_f("ugli");
								break;
							case 9 :
								sbp.s_f("earli");
								break;
							case 10 :
								sbp.s_f("onli");
								break;
							case 11 :
								sbp.s_f("singl");
								break;
						}
						return true;
					}
				}
				return false;
			}
			function r_postlude() {
				var v_1;
				if (B_Y_found) {
					while (true) {
						v_1 = sbp.c;
						sbp.b = v_1;
						if (sbp.e_s(1, "Y")) {
							sbp.k = sbp.c;
							sbp.c = v_1;
							sbp.s_f("y");
							continue;
						}
						sbp.c = v_1;
						if (sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				if (!r_exception1()) {
					sbp.c = v_1;
					var c = sbp.c + 3;
					if (0 <= c && c <= sbp.l) {
						sbp.c = v_1;
						r_prelude();
						sbp.c = v_1;
						r_mark_regions();
						sbp.lb = v_1;
						sbp.c = sbp.l;
						r_Step_1a();
						sbp.c = sbp.l;
						if (!r_exception2())
							for (var i = 0; i < habr.length; i++) {
								sbp.c = sbp.l;
								habr[i]();
							}
						sbp.c = sbp.lb;
						r_postlude();
					}
				}
				return true;
			}
		},
		FinnishStemmer : function() {
			var a_0 = [new Among("pa", -1, 1), new Among("sti", -1, 2),
					new Among("kaan", -1, 1), new Among("han", -1, 1),
					new Among("kin", -1, 1), new Among("h\u00E4n", -1, 1),
					new Among("k\u00E4\u00E4n", -1, 1), new Among("ko", -1, 1),
					new Among("p\u00E4", -1, 1), new Among("k\u00F6", -1, 1)], a_1 = [
					new Among("lla", -1, -1), new Among("na", -1, -1),
					new Among("ssa", -1, -1), new Among("ta", -1, -1),
					new Among("lta", 3, -1), new Among("sta", 3, -1)], a_2 = [
					new Among("ll\u00E4", -1, -1),
					new Among("n\u00E4", -1, -1),
					new Among("ss\u00E4", -1, -1),
					new Among("t\u00E4", -1, -1), new Among("lt\u00E4", 3, -1),
					new Among("st\u00E4", 3, -1)], a_3 = [
					new Among("lle", -1, -1), new Among("ine", -1, -1)], a_4 = [
					new Among("nsa", -1, 3), new Among("mme", -1, 3),
					new Among("nne", -1, 3), new Among("ni", -1, 2),
					new Among("si", -1, 1), new Among("an", -1, 4),
					new Among("en", -1, 6), new Among("\u00E4n", -1, 5),
					new Among("ns\u00E4", -1, 3)], a_5 = [
					new Among("aa", -1, -1), new Among("ee", -1, -1),
					new Among("ii", -1, -1), new Among("oo", -1, -1),
					new Among("uu", -1, -1), new Among("\u00E4\u00E4", -1, -1),
					new Among("\u00F6\u00F6", -1, -1)], a_6 = [
					new Among("a", -1, 8), new Among("lla", 0, -1),
					new Among("na", 0, -1), new Among("ssa", 0, -1),
					new Among("ta", 0, -1), new Among("lta", 4, -1),
					new Among("sta", 4, -1), new Among("tta", 4, 9),
					new Among("lle", -1, -1), new Among("ine", -1, -1),
					new Among("ksi", -1, -1), new Among("n", -1, 7),
					new Among("han", 11, 1), new Among("den", 11, -1, r_VI),
					new Among("seen", 11, -1, r_LONG), new Among("hen", 11, 2),
					new Among("tten", 11, -1, r_VI), new Among("hin", 11, 3),
					new Among("siin", 11, -1, r_VI), new Among("hon", 11, 4),
					new Among("h\u00E4n", 11, 5), new Among("h\u00F6n", 11, 6),
					new Among("\u00E4", -1, 8), new Among("ll\u00E4", 22, -1),
					new Among("n\u00E4", 22, -1),
					new Among("ss\u00E4", 22, -1),
					new Among("t\u00E4", 22, -1),
					new Among("lt\u00E4", 26, -1),
					new Among("st\u00E4", 26, -1), new Among("tt\u00E4", 26, 9)], a_7 = [
					new Among("eja", -1, -1), new Among("mma", -1, 1),
					new Among("imma", 1, -1), new Among("mpa", -1, 1),
					new Among("impa", 3, -1), new Among("mmi", -1, 1),
					new Among("immi", 5, -1), new Among("mpi", -1, 1),
					new Among("impi", 7, -1), new Among("ej\u00E4", -1, -1),
					new Among("mm\u00E4", -1, 1),
					new Among("imm\u00E4", 10, -1),
					new Among("mp\u00E4", -1, 1),
					new Among("imp\u00E4", 12, -1)], a_8 = [
					new Among("i", -1, -1), new Among("j", -1, -1)], a_9 = [
					new Among("mma", -1, 1), new Among("imma", 0, -1)], g_AEI = [
					17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8], g_V1 = [
					17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32], g_V2 = [
					17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32], g_particle_end = [
					17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32], B_ending_removed, S_x, I_p2, I_p1, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_mark_regions() {
				I_p1 = sbp.l;
				I_p2 = I_p1;
				if (!habr1()) {
					I_p1 = sbp.c;
					if (!habr1())
						I_p2 = sbp.c;
				}
			}
			function habr1() {
				var v_1;
				while (true) {
					v_1 = sbp.c;
					if (sbp.i_g(g_V1, 97, 246))
						break;
					sbp.c = v_1;
					if (v_1 >= sbp.l)
						return true;
					sbp.c++;
				}
				sbp.c = v_1;
				while (!sbp.o_g(g_V1, 97, 246)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				return false;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_particle_etc() {
				var a_v, v_1;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_0, 10);
					if (a_v) {
						sbp.b = sbp.c;
						sbp.lb = v_1;
						switch (a_v) {
							case 1 :
								if (!sbp.i_g_b(g_particle_end, 97, 246))
									return;
								break;
							case 2 :
								if (!r_R2())
									return;
								break;
						}
						sbp.s_d();
					} else
						sbp.lb = v_1;
				}
			}
			function r_possessive() {
				var a_v, v_1, v_2;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_4, 9);
					if (a_v) {
						sbp.b = sbp.c;
						sbp.lb = v_1;
						switch (a_v) {
							case 1 :
								v_2 = sbp.l - sbp.c;
								if (!sbp.e_s_b(1, "k")) {
									sbp.c = sbp.l - v_2;
									sbp.s_d();
								}
								break;
							case 2 :
								sbp.s_d();
								sbp.k = sbp.c;
								if (sbp.e_s_b(3, "kse")) {
									sbp.b = sbp.c;
									sbp.s_f("ksi");
								}
								break;
							case 3 :
								sbp.s_d();
								break;
							case 4 :
								if (sbp.f_a_b(a_1, 6))
									sbp.s_d();
								break;
							case 5 :
								if (sbp.f_a_b(a_2, 6))
									sbp.s_d();
								break;
							case 6 :
								if (sbp.f_a_b(a_3, 2))
									sbp.s_d();
								break;
						}
					} else
						sbp.lb = v_1;
				}
			}
			function r_LONG() {
				return sbp.f_a_b(a_5, 7);
			}
			function r_VI() {
				return sbp.e_s_b(1, "i") && sbp.i_g_b(g_V2, 97, 246);
			}
			function r_case_ending() {
				var a_v, v_1, v_2;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_6, 30);
					if (a_v) {
						sbp.b = sbp.c;
						sbp.lb = v_1;
						switch (a_v) {
							case 1 :
								if (!sbp.e_s_b(1, "a"))
									return;
								break;
							case 2 :
							case 9 :
								if (!sbp.e_s_b(1, "e"))
									return;
								break;
							case 3 :
								if (!sbp.e_s_b(1, "i"))
									return;
								break;
							case 4 :
								if (!sbp.e_s_b(1, "o"))
									return;
								break;
							case 5 :
								if (!sbp.e_s_b(1, "\u00E4"))
									return;
								break;
							case 6 :
								if (!sbp.e_s_b(1, "\u00F6"))
									return;
								break;
							case 7 :
								v_2 = sbp.l - sbp.c;
								if (!r_LONG()) {
									sbp.c = sbp.l - v_2;
									if (!sbp.e_s_b(2, "ie")) {
										sbp.c = sbp.l - v_2;
										break;
									}
								}
								sbp.c = sbp.l - v_2;
								if (sbp.c <= sbp.lb) {
									sbp.c = sbp.l - v_2;
									break;
								}
								sbp.c--;
								sbp.b = sbp.c;
								break;
							case 8 :
								if (!sbp.i_g_b(g_V1, 97, 246)
										|| !sbp.o_g_b(g_V1, 97, 246))
									return;
								break;
						}
						sbp.s_d();
						B_ending_removed = true;
					} else
						sbp.lb = v_1;
				}
			}
			function r_other_endings() {
				var a_v, v_1, v_2;
				if (sbp.c >= I_p2) {
					v_1 = sbp.lb;
					sbp.lb = I_p2;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_7, 14);
					if (a_v) {
						sbp.b = sbp.c;
						sbp.lb = v_1;
						if (a_v == 1) {
							v_2 = sbp.l - sbp.c;
							if (sbp.e_s_b(2, "po"))
								return;
							sbp.c = sbp.l - v_2;
						}
						sbp.s_d();
					} else
						sbp.lb = v_1;
				}
			}
			function r_i_plural() {
				var v_1;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					if (sbp.f_a_b(a_8, 2)) {
						sbp.b = sbp.c;
						sbp.lb = v_1;
						sbp.s_d();
					} else
						sbp.lb = v_1;
				}
			}
			function r_t_plural() {
				var a_v, v_1, v_2, v_3, v_4, v_5;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					if (sbp.e_s_b(1, "t")) {
						sbp.b = sbp.c;
						v_2 = sbp.l - sbp.c;
						if (sbp.i_g_b(g_V1, 97, 246)) {
							sbp.c = sbp.l - v_2;
							sbp.s_d();
							sbp.lb = v_1;
							v_3 = sbp.l - sbp.c;
							if (sbp.c >= I_p2) {
								sbp.c = I_p2;
								v_4 = sbp.lb;
								sbp.lb = sbp.c;
								sbp.c = sbp.l - v_3;
								sbp.k = sbp.c;
								a_v = sbp.f_a_b(a_9, 2);
								if (a_v) {
									sbp.b = sbp.c;
									sbp.lb = v_4;
									if (a_v == 1) {
										v_5 = sbp.l - sbp.c;
										if (sbp.e_s_b(2, "po"))
											return;
										sbp.c = sbp.l - v_5;
									}
									sbp.s_d();
									return;
								}
							}
						}
					}
					sbp.lb = v_1;
				}
			}
			function r_tidy() {
				var v_1, v_2, v_3, v_4;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					v_2 = sbp.l - sbp.c;
					if (r_LONG()) {
						sbp.c = sbp.l - v_2;
						sbp.k = sbp.c;
						if (sbp.c > sbp.lb) {
							sbp.c--;
							sbp.b = sbp.c;
							sbp.s_d();
						}
					}
					sbp.c = sbp.l - v_2;
					sbp.k = sbp.c;
					if (sbp.i_g_b(g_AEI, 97, 228)) {
						sbp.b = sbp.c;
						if (sbp.o_g_b(g_V1, 97, 246))
							sbp.s_d();
					}
					sbp.c = sbp.l - v_2;
					sbp.k = sbp.c;
					if (sbp.e_s_b(1, "j")) {
						sbp.b = sbp.c;
						v_3 = sbp.l - sbp.c;
						if (!sbp.e_s_b(1, "o")) {
							sbp.c = sbp.l - v_3;
							if (sbp.e_s_b(1, "u"))
								sbp.s_d();
						} else
							sbp.s_d();
					}
					sbp.c = sbp.l - v_2;
					sbp.k = sbp.c;
					if (sbp.e_s_b(1, "o")) {
						sbp.b = sbp.c;
						if (sbp.e_s_b(1, "j"))
							sbp.s_d();
					}
					sbp.c = sbp.l - v_2;
					sbp.lb = v_1;
					while (true) {
						v_4 = sbp.l - sbp.c;
						if (sbp.o_g_b(g_V1, 97, 246)) {
							sbp.c = sbp.l - v_4;
							break;
						}
						sbp.c = sbp.l - v_4;
						if (sbp.c <= sbp.lb)
							return;
						sbp.c--;
					}
					sbp.k = sbp.c;
					if (sbp.c > sbp.lb) {
						sbp.c--;
						sbp.b = sbp.c;
						S_x = sbp.s_t();
						if (sbp.e_v_b(S_x))
							sbp.s_d();
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_mark_regions();
				B_ending_removed = false;
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_particle_etc();
				sbp.c = sbp.l;
				r_possessive();
				sbp.c = sbp.l;
				r_case_ending();
				sbp.c = sbp.l;
				r_other_endings();
				sbp.c = sbp.l;
				if (B_ending_removed) {
					r_i_plural();
					sbp.c = sbp.l;
				} else {
					sbp.c = sbp.l;
					r_t_plural();
					sbp.c = sbp.l;
				}
				r_tidy();
				return true;
			}
		},
		FrenchStemmer : function() {
			var a_0 = [new Among("col", -1, -1), new Among("par", -1, -1),
					new Among("tap", -1, -1)], a_1 = [new Among("", -1, 4),
					new Among("I", 0, 1), new Among("U", 0, 2),
					new Among("Y", 0, 3)], a_2 = [new Among("iqU", -1, 3),
					new Among("abl", -1, 3), new Among("I\u00E8r", -1, 4),
					new Among("i\u00E8r", -1, 4), new Among("eus", -1, 2),
					new Among("iv", -1, 1)], a_3 = [new Among("ic", -1, 2),
					new Among("abil", -1, 1), new Among("iv", -1, 3)], a_4 = [
					new Among("iqUe", -1, 1), new Among("atrice", -1, 2),
					new Among("ance", -1, 1), new Among("ence", -1, 5),
					new Among("logie", -1, 3), new Among("able", -1, 1),
					new Among("isme", -1, 1), new Among("euse", -1, 11),
					new Among("iste", -1, 1), new Among("ive", -1, 8),
					new Among("if", -1, 8), new Among("usion", -1, 4),
					new Among("ation", -1, 2), new Among("ution", -1, 4),
					new Among("ateur", -1, 2), new Among("iqUes", -1, 1),
					new Among("atrices", -1, 2), new Among("ances", -1, 1),
					new Among("ences", -1, 5), new Among("logies", -1, 3),
					new Among("ables", -1, 1), new Among("ismes", -1, 1),
					new Among("euses", -1, 11), new Among("istes", -1, 1),
					new Among("ives", -1, 8), new Among("ifs", -1, 8),
					new Among("usions", -1, 4), new Among("ations", -1, 2),
					new Among("utions", -1, 4), new Among("ateurs", -1, 2),
					new Among("ments", -1, 15), new Among("ements", 30, 6),
					new Among("issements", 31, 12),
					new Among("it\u00E9s", -1, 7), new Among("ment", -1, 15),
					new Among("ement", 34, 6), new Among("issement", 35, 12),
					new Among("amment", 34, 13), new Among("emment", 34, 14),
					new Among("aux", -1, 10), new Among("eaux", 39, 9),
					new Among("eux", -1, 1), new Among("it\u00E9", -1, 7)], a_5 = [
					new Among("ira", -1, 1), new Among("ie", -1, 1),
					new Among("isse", -1, 1), new Among("issante", -1, 1),
					new Among("i", -1, 1), new Among("irai", 4, 1),
					new Among("ir", -1, 1), new Among("iras", -1, 1),
					new Among("ies", -1, 1), new Among("\u00EEmes", -1, 1),
					new Among("isses", -1, 1), new Among("issantes", -1, 1),
					new Among("\u00EEtes", -1, 1), new Among("is", -1, 1),
					new Among("irais", 13, 1), new Among("issais", 13, 1),
					new Among("irions", -1, 1), new Among("issions", -1, 1),
					new Among("irons", -1, 1), new Among("issons", -1, 1),
					new Among("issants", -1, 1), new Among("it", -1, 1),
					new Among("irait", 21, 1), new Among("issait", 21, 1),
					new Among("issant", -1, 1), new Among("iraIent", -1, 1),
					new Among("issaIent", -1, 1), new Among("irent", -1, 1),
					new Among("issent", -1, 1), new Among("iront", -1, 1),
					new Among("\u00EEt", -1, 1), new Among("iriez", -1, 1),
					new Among("issiez", -1, 1), new Among("irez", -1, 1),
					new Among("issez", -1, 1)], a_6 = [new Among("a", -1, 3),
					new Among("era", 0, 2), new Among("asse", -1, 3),
					new Among("ante", -1, 3), new Among("\u00E9e", -1, 2),
					new Among("ai", -1, 3), new Among("erai", 5, 2),
					new Among("er", -1, 2), new Among("as", -1, 3),
					new Among("eras", 8, 2), new Among("\u00E2mes", -1, 3),
					new Among("asses", -1, 3), new Among("antes", -1, 3),
					new Among("\u00E2tes", -1, 3),
					new Among("\u00E9es", -1, 2), new Among("ais", -1, 3),
					new Among("erais", 15, 2), new Among("ions", -1, 1),
					new Among("erions", 17, 2), new Among("assions", 17, 3),
					new Among("erons", -1, 2), new Among("ants", -1, 3),
					new Among("\u00E9s", -1, 2), new Among("ait", -1, 3),
					new Among("erait", 23, 2), new Among("ant", -1, 3),
					new Among("aIent", -1, 3), new Among("eraIent", 26, 2),
					new Among("\u00E8rent", -1, 2), new Among("assent", -1, 3),
					new Among("eront", -1, 2), new Among("\u00E2t", -1, 3),
					new Among("ez", -1, 2), new Among("iez", 32, 2),
					new Among("eriez", 33, 2), new Among("assiez", 33, 3),
					new Among("erez", 32, 2), new Among("\u00E9", -1, 2)], a_7 = [
					new Among("e", -1, 3), new Among("I\u00E8re", 0, 2),
					new Among("i\u00E8re", 0, 2), new Among("ion", -1, 1),
					new Among("Ier", -1, 2), new Among("ier", -1, 2),
					new Among("\u00EB", -1, 4)], a_8 = [
					new Among("ell", -1, -1), new Among("eill", -1, -1),
					new Among("enn", -1, -1), new Among("onn", -1, -1),
					new Among("ett", -1, -1)], g_v = [17, 65, 16, 1, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103, 8, 5], g_keep_with_s = [
					1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128], I_p2, I_p1, I_pV, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function habr1(c1, c2, v_1) {
				if (sbp.e_s(1, c1)) {
					sbp.k = sbp.c;
					if (sbp.i_g(g_v, 97, 251)) {
						sbp.s_f(c2);
						sbp.c = v_1;
						return true;
					}
				}
				return false;
			}
			function habr2(c1, c2, v_1) {
				if (sbp.e_s(1, c1)) {
					sbp.k = sbp.c;
					sbp.s_f(c2);
					sbp.c = v_1;
					return true;
				}
				return false;
			}
			function r_prelude() {
				var v_1, v_2;
				while (true) {
					v_1 = sbp.c;
					if (sbp.i_g(g_v, 97, 251)) {
						sbp.b = sbp.c;
						v_2 = sbp.c;
						if (habr1("u", "U", v_1))
							continue;
						sbp.c = v_2;
						if (habr1("i", "I", v_1))
							continue;
						sbp.c = v_2;
						if (habr2("y", "Y", v_1))
							continue;
					}
					sbp.c = v_1;
					sbp.b = v_1;
					if (!habr1("y", "Y", v_1)) {
						sbp.c = v_1;
						if (sbp.e_s(1, "q")) {
							sbp.b = sbp.c;
							if (habr2("u", "U", v_1))
								continue;
						}
						sbp.c = v_1;
						if (v_1 >= sbp.l)
							return;
						sbp.c++;
					}
				}
			}
			function habr3() {
				while (!sbp.i_g(g_v, 97, 251)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 251)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				return false;
			}
			function r_mark_regions() {
				var v_1 = sbp.c;
				I_pV = sbp.l;
				I_p1 = I_pV;
				I_p2 = I_pV;
				if (sbp.i_g(g_v, 97, 251)
						&& sbp.i_g(g_v, 97, 251) && sbp.c < sbp.l)
					sbp.c++;
				else {
					sbp.c = v_1;
					if (!sbp.f_a(a_0, 3)) {
						sbp.c = v_1;
						do {
							if (sbp.c >= sbp.l) {
								sbp.c = I_pV;
								break;
							}
							sbp.c++;
						} while (!sbp.i_g(g_v, 97, 251));
					}
				}
				I_pV = sbp.c;
				sbp.c = v_1;
				if (!habr3()) {
					I_p1 = sbp.c;
					if (!habr3())
						I_p2 = sbp.c;
				}
			}
			function r_postlude() {
				var a_v, v_1;
				while (true) {
					v_1 = sbp.c;
					sbp.b = v_1;
					a_v = sbp.f_a(a_1, 4);
					if (!a_v)
						break;
					sbp.k = sbp.c;
					switch (a_v) {
						case 1 :
							sbp.s_f("i");
							break;
						case 2 :
							sbp.s_f("u");
							break;
						case 3 :
							sbp.s_f("y");
							break;
						case 4 :
							if (sbp.c >= sbp.l)
								return;
							sbp.c++;
							break;
					}
				}
			}
			function r_RV() {
				return I_pV <= sbp.c;
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_standard_suffix() {
				var a_v, v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_4, 43);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							if (!r_R2())
								return false;
							sbp.s_d();
							break;
						case 2 :
							if (!r_R2())
								return false;
							sbp.s_d();
							sbp.k = sbp.c;
							if (sbp.e_s_b(2, "ic")) {
								sbp.b = sbp.c;
								if (!r_R2())
									sbp.s_f("iqU");
								else
									sbp.s_d();
							}
							break;
						case 3 :
							if (!r_R2())
								return false;
							sbp.s_f("log");
							break;
						case 4 :
							if (!r_R2())
								return false;
							sbp.s_f("u");
							break;
						case 5 :
							if (!r_R2())
								return false;
							sbp.s_f("ent");
							break;
						case 6 :
							if (!r_RV())
								return false;
							sbp.s_d();
							sbp.k = sbp.c;
							a_v = sbp.f_a_b(a_2, 6);
							if (a_v) {
								sbp.b = sbp.c;
								switch (a_v) {
									case 1 :
										if (r_R2()) {
											sbp.s_d();
											sbp.k = sbp.c;
											if (sbp.e_s_b(2, "at")) {
												sbp.b = sbp.c;
												if (r_R2())
													sbp.s_d();
											}
										}
										break;
									case 2 :
										if (r_R2())
											sbp.s_d();
										else if (r_R1())
											sbp.s_f("eux");
										break;
									case 3 :
										if (r_R2())
											sbp.s_d();
										break;
									case 4 :
										if (r_RV())
											sbp.s_f("i");
										break;
								}
							}
							break;
						case 7 :
							if (!r_R2())
								return false;
							sbp.s_d();
							sbp.k = sbp.c;
							a_v = sbp.f_a_b(a_3, 3);
							if (a_v) {
								sbp.b = sbp.c;
								switch (a_v) {
									case 1 :
										if (r_R2())
											sbp.s_d();
										else
											sbp.s_f("abl");
										break;
									case 2 :
										if (r_R2())
											sbp.s_d();
										else
											sbp.s_f("iqU");
										break;
									case 3 :
										if (r_R2())
											sbp.s_d();
										break;
								}
							}
							break;
						case 8 :
							if (!r_R2())
								return false;
							sbp.s_d();
							sbp.k = sbp.c;
							if (sbp.e_s_b(2, "at")) {
								sbp.b = sbp.c;
								if (r_R2()) {
									sbp.s_d();
									sbp.k = sbp.c;
									if (sbp.e_s_b(2, "ic")) {
										sbp.b = sbp.c;
										if (r_R2())
											sbp.s_d();
										else
											sbp.s_f("iqU");
										break;
									}
								}
							}
							break;
						case 9 :
							sbp.s_f("eau");
							break;
						case 10 :
							if (!r_R1())
								return false;
							sbp.s_f("al");
							break;
						case 11 :
							if (r_R2())
								sbp.s_d();
							else if (!r_R1())
								return false;
							else
								sbp.s_f("eux");
							break;
						case 12 :
							if (!r_R1() || !sbp.o_g_b(g_v, 97, 251))
								return false;
							sbp.s_d();
							break;
						case 13 :
							if (r_RV())
								sbp.s_f("ant");
							return false;
						case 14 :
							if (r_RV())
								sbp.s_f("ent");
							return false;
						case 15 :
							v_1 = sbp.l - sbp.c;
							if (sbp.i_g_b(g_v, 97, 251) && r_RV()) {
								sbp.c = sbp.l - v_1;
								sbp.s_d();
							}
							return false;
					}
					return true;
				}
				return false;
			}
			function r_i_verb_suffix() {
				var a_v, v_1;
				if (sbp.c < I_pV)
					return false;
				v_1 = sbp.lb;
				sbp.lb = I_pV;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_5, 35);
				if (!a_v) {
					sbp.lb = v_1;
					return false;
				}
				sbp.b = sbp.c;
				if (a_v == 1) {
					if (!sbp.o_g_b(g_v, 97, 251)) {
						sbp.lb = v_1;
						return false;
					}
					sbp.s_d();
				}
				sbp.lb = v_1;
				return true;
			}
			function r_verb_suffix() {
				var a_v, v_2, v_3;
				if (sbp.c < I_pV)
					return false;
				v_2 = sbp.lb;
				sbp.lb = I_pV;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_6, 38);
				if (!a_v) {
					sbp.lb = v_2;
					return false;
				}
				sbp.b = sbp.c;
				switch (a_v) {
					case 1 :
						if (!r_R2()) {
							sbp.lb = v_2;
							return false;
						}
						sbp.s_d();
						break;
					case 2 :
						sbp.s_d();
						break;
					case 3 :
						sbp.s_d();
						v_3 = sbp.l - sbp.c;
						sbp.k = sbp.c;
						if (sbp.e_s_b(1, "e")) {
							sbp.b = sbp.c;
							sbp.s_d();
						} else
							sbp.c = sbp.l - v_3;
						break;
				}
				sbp.lb = v_2;
				return true;
			}
			function r_residual_suffix() {
				var a_v, v_1 = sbp.l - sbp.c, v_2, v_4, v_5;
				sbp.k = sbp.c;
				if (sbp.e_s_b(1, "s")) {
					sbp.b = sbp.c;
					v_2 = sbp.l - sbp.c;
					if (sbp.o_g_b(g_keep_with_s, 97, 232)) {
						sbp.c = sbp.l - v_2;
						sbp.s_d();
					} else
						sbp.c = sbp.l - v_1;
				} else
					sbp.c = sbp.l - v_1;
				if (sbp.c >= I_pV) {
					v_4 = sbp.lb;
					sbp.lb = I_pV;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_7, 7);
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								if (r_R2()) {
									v_5 = sbp.l - sbp.c;
									if (!sbp.e_s_b(1, "s")) {
										sbp.c = sbp.l - v_5;
										if (!sbp.e_s_b(1, "t"))
											break;
									}
									sbp.s_d();
								}
								break;
							case 2 :
								sbp.s_f("i");
								break;
							case 3 :
								sbp.s_d();
								break;
							case 4 :
								if (sbp.e_s_b(2, "gu"))
									sbp.s_d();
								break;
						}
					}
					sbp.lb = v_4;
				}
			}
			function r_un_double() {
				var v_1 = sbp.l - sbp.c;
				if (sbp.f_a_b(a_8, 5)) {
					sbp.c = sbp.l - v_1;
					sbp.k = sbp.c;
					if (sbp.c > sbp.lb) {
						sbp.c--;
						sbp.b = sbp.c;
						sbp.s_d();
					}
				}
			}
			function r_un_accent() {
				var v_1, v_2 = 1;
				while (sbp.o_g_b(g_v, 97, 251))
					v_2--;
				if (v_2 <= 0) {
					sbp.k = sbp.c;
					v_1 = sbp.l - sbp.c;
					if (!sbp.e_s_b(1, "\u00E9")) {
						sbp.c = sbp.l - v_1;
						if (!sbp.e_s_b(1, "\u00E8"))
							return;
					}
					sbp.b = sbp.c;
					sbp.s_f("e");
				}
			}
			function habr5() {
				if (!r_standard_suffix()) {
					sbp.c = sbp.l;
					if (!r_i_verb_suffix()) {
						sbp.c = sbp.l;
						if (!r_verb_suffix()) {
							sbp.c = sbp.l;
							r_residual_suffix();
							return;
						}
					}
				}
				sbp.c = sbp.l;
				sbp.k = sbp.c;
				if (sbp.e_s_b(1, "Y")) {
					sbp.b = sbp.c;
					sbp.s_f("i");
				} else {
					sbp.c = sbp.l;
					if (sbp.e_s_b(1, "\u00E7")) {
						sbp.b = sbp.c;
						sbp.s_f("c");
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_prelude();
				sbp.c = v_1;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				habr5();
				sbp.c = sbp.l;
				r_un_double();
				sbp.c = sbp.l;
				r_un_accent();
				sbp.c = sbp.lb;
				r_postlude();
				return true;
			}
		},
		GermanStemmer : function() {
			var a_0 = [new Among("", -1, 6), new Among("U", 0, 2),
					new Among("Y", 0, 1), new Among("\u00E4", 0, 3),
					new Among("\u00F6", 0, 4), new Among("\u00FC", 0, 5)], a_1 = [
					new Among("e", -1, 2), new Among("em", -1, 1),
					new Among("en", -1, 2), new Among("ern", -1, 1),
					new Among("er", -1, 1), new Among("s", -1, 3),
					new Among("es", 5, 2)], a_2 = [new Among("en", -1, 1),
					new Among("er", -1, 1), new Among("st", -1, 2),
					new Among("est", 2, 1)], a_3 = [new Among("ig", -1, 1),
					new Among("lich", -1, 1)], a_4 = [new Among("end", -1, 1),
					new Among("ig", -1, 2), new Among("ung", -1, 1),
					new Among("lich", -1, 3), new Among("isch", -1, 2),
					new Among("ik", -1, 2), new Among("heit", -1, 3),
					new Among("keit", -1, 4)], g_v = [17, 65, 16, 1, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8], g_s_ending = [117,
					30, 5], g_st_ending = [117, 30, 4], I_x, I_p2, I_p1, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function habr1(c1, c2, v_1) {
				if (sbp.e_s(1, c1)) {
					sbp.k = sbp.c;
					if (sbp.i_g(g_v, 97, 252)) {
						sbp.s_f(c2);
						sbp.c = v_1;
						return true;
					}
				}
				return false;
			}
			function r_prelude() {
				var v_1 = sbp.c, v_2, v_3, v_4, v_5;
				while (true) {
					v_2 = sbp.c;
					sbp.b = v_2;
					if (sbp.e_s(1, "\u00DF")) {
						sbp.k = sbp.c;
						sbp.s_f("ss");
					} else {
						if (v_2 >= sbp.l)
							break;
						sbp.c = v_2 + 1;
					}
				}
				sbp.c = v_1;
				while (true) {
					v_3 = sbp.c;
					while (true) {
						v_4 = sbp.c;
						if (sbp.i_g(g_v, 97, 252)) {
							v_5 = sbp.c;
							sbp.b = v_5;
							if (habr1("u", "U", v_4))
								break;
							sbp.c = v_5;
							if (habr1("y", "Y", v_4))
								break;
						}
						if (v_4 >= sbp.l) {
							sbp.c = v_3;
							return;
						}
						sbp.c = v_4 + 1;
					}
				}
			}
			function habr2() {
				while (!sbp.i_g(g_v, 97, 252)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 252)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				return false;
			}
			function r_mark_regions() {
				I_p1 = sbp.l;
				I_p2 = I_p1;
				var c = sbp.c + 3;
				if (0 <= c && c <= sbp.l) {
					I_x = c;
					if (!habr2()) {
						I_p1 = sbp.c;
						if (I_p1 < I_x)
							I_p1 = I_x;
						if (!habr2())
							I_p2 = sbp.c;
					}
				}
			}
			function r_postlude() {
				var a_v, v_1;
				while (true) {
					v_1 = sbp.c;
					sbp.b = v_1;
					a_v = sbp.f_a(a_0, 6);
					if (!a_v)
						return;
					sbp.k = sbp.c;
					switch (a_v) {
						case 1 :
							sbp.s_f("y");
							break;
						case 2 :
						case 5 :
							sbp.s_f("u");
							break;
						case 3 :
							sbp.s_f("a");
							break;
						case 4 :
							sbp.s_f("o");
							break;
						case 6 :
							if (sbp.c >= sbp.l)
								return;
							sbp.c++;
							break;
					}
				}
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_standard_suffix() {
				var a_v, v_1 = sbp.l - sbp.c, v_2, v_3, v_4;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_1, 7);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								sbp.s_d();
								sbp.k = sbp.c;
								if (sbp.e_s_b(1, "s")) {
									sbp.b = sbp.c;
									if (sbp.e_s_b(3, "nis"))
										sbp.s_d();
								}
								break;
							case 3 :
								if (sbp.i_g_b(g_s_ending, 98, 116))
									sbp.s_d();
								break;
						}
					}
				}
				sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_2, 4);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								if (sbp.i_g_b(g_st_ending, 98, 116)) {
									var c = sbp.c - 3;
									if (sbp.lb <= c && c <= sbp.l) {
										sbp.c = c;
										sbp.s_d();
									}
								}
								break;
						}
					}
				}
				sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_4, 8);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R2()) {
						switch (a_v) {
							case 1 :
								sbp.s_d();
								sbp.k = sbp.c;
								if (sbp.e_s_b(2, "ig")) {
									sbp.b = sbp.c;
									v_2 = sbp.l - sbp.c;
									if (!sbp.e_s_b(1, "e")) {
										sbp.c = sbp.l - v_2;
										if (r_R2())
											sbp.s_d();
									}
								}
								break;
							case 2 :
								v_3 = sbp.l - sbp.c;
								if (!sbp.e_s_b(1, "e")) {
									sbp.c = sbp.l - v_3;
									sbp.s_d();
								}
								break;
							case 3 :
								sbp.s_d();
								sbp.k = sbp.c;
								v_4 = sbp.l - sbp.c;
								if (!sbp.e_s_b(2, "er")) {
									sbp.c = sbp.l - v_4;
									if (!sbp.e_s_b(2, "en"))
										break;
								}
								sbp.b = sbp.c;
								if (r_R1())
									sbp.s_d();
								break;
							case 4 :
								sbp.s_d();
								sbp.k = sbp.c;
								a_v = sbp.f_a_b(a_3, 2);
								if (a_v) {
									sbp.b = sbp.c;
									if (r_R2() && a_v == 1)
										sbp.s_d();
								}
								break;
						}
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_prelude();
				sbp.c = v_1;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_standard_suffix();
				sbp.c = sbp.lb;
				r_postlude();
				return true;
			}
		},
		HungarianStemmer : function() {
			var a_0 = [new Among("cs", -1, -1), new Among("dzs", -1, -1),
					new Among("gy", -1, -1), new Among("ly", -1, -1),
					new Among("ny", -1, -1), new Among("sz", -1, -1),
					new Among("ty", -1, -1), new Among("zs", -1, -1)], a_1 = [
					new Among("\u00E1", -1, 1), new Among("\u00E9", -1, 2)], a_2 = [
					new Among("bb", -1, -1), new Among("cc", -1, -1),
					new Among("dd", -1, -1), new Among("ff", -1, -1),
					new Among("gg", -1, -1), new Among("jj", -1, -1),
					new Among("kk", -1, -1), new Among("ll", -1, -1),
					new Among("mm", -1, -1), new Among("nn", -1, -1),
					new Among("pp", -1, -1), new Among("rr", -1, -1),
					new Among("ccs", -1, -1), new Among("ss", -1, -1),
					new Among("zzs", -1, -1), new Among("tt", -1, -1),
					new Among("vv", -1, -1), new Among("ggy", -1, -1),
					new Among("lly", -1, -1), new Among("nny", -1, -1),
					new Among("tty", -1, -1), new Among("ssz", -1, -1),
					new Among("zz", -1, -1)], a_3 = [new Among("al", -1, 1),
					new Among("el", -1, 2)], a_4 = [new Among("ba", -1, -1),
					new Among("ra", -1, -1), new Among("be", -1, -1),
					new Among("re", -1, -1), new Among("ig", -1, -1),
					new Among("nak", -1, -1), new Among("nek", -1, -1),
					new Among("val", -1, -1), new Among("vel", -1, -1),
					new Among("ul", -1, -1), new Among("n\u00E1l", -1, -1),
					new Among("n\u00E9l", -1, -1),
					new Among("b\u00F3l", -1, -1),
					new Among("r\u00F3l", -1, -1),
					new Among("t\u00F3l", -1, -1),
					new Among("b\u00F5l", -1, -1),
					new Among("r\u00F5l", -1, -1),
					new Among("t\u00F5l", -1, -1),
					new Among("\u00FCl", -1, -1), new Among("n", -1, -1),
					new Among("an", 19, -1), new Among("ban", 20, -1),
					new Among("en", 19, -1), new Among("ben", 22, -1),
					new Among("k\u00E9ppen", 22, -1), new Among("on", 19, -1),
					new Among("\u00F6n", 19, -1),
					new Among("k\u00E9pp", -1, -1), new Among("kor", -1, -1),
					new Among("t", -1, -1), new Among("at", 29, -1),
					new Among("et", 29, -1), new Among("k\u00E9nt", 29, -1),
					new Among("ank\u00E9nt", 32, -1),
					new Among("enk\u00E9nt", 32, -1),
					new Among("onk\u00E9nt", 32, -1), new Among("ot", 29, -1),
					new Among("\u00E9rt", 29, -1),
					new Among("\u00F6t", 29, -1), new Among("hez", -1, -1),
					new Among("hoz", -1, -1), new Among("h\u00F6z", -1, -1),
					new Among("v\u00E1", -1, -1), new Among("v\u00E9", -1, -1)], a_5 = [
					new Among("\u00E1n", -1, 2), new Among("\u00E9n", -1, 1),
					new Among("\u00E1nk\u00E9nt", -1, 3)], a_6 = [
					new Among("stul", -1, 2), new Among("astul", 0, 1),
					new Among("\u00E1stul", 0, 3),
					new Among("st\u00FCl", -1, 2),
					new Among("est\u00FCl", 3, 1),
					new Among("\u00E9st\u00FCl", 3, 4)], a_7 = [
					new Among("\u00E1", -1, 1), new Among("\u00E9", -1, 2)], a_8 = [
					new Among("k", -1, 7), new Among("ak", 0, 4),
					new Among("ek", 0, 6), new Among("ok", 0, 5),
					new Among("\u00E1k", 0, 1), new Among("\u00E9k", 0, 2),
					new Among("\u00F6k", 0, 3)], a_9 = [
					new Among("\u00E9i", -1, 7),
					new Among("\u00E1\u00E9i", 0, 6),
					new Among("\u00E9\u00E9i", 0, 5),
					new Among("\u00E9", -1, 9), new Among("k\u00E9", 3, 4),
					new Among("ak\u00E9", 4, 1), new Among("ek\u00E9", 4, 1),
					new Among("ok\u00E9", 4, 1),
					new Among("\u00E1k\u00E9", 4, 3),
					new Among("\u00E9k\u00E9", 4, 2),
					new Among("\u00F6k\u00E9", 4, 1),
					new Among("\u00E9\u00E9", 3, 8)], a_10 = [
					new Among("a", -1, 18), new Among("ja", 0, 17),
					new Among("d", -1, 16), new Among("ad", 2, 13),
					new Among("ed", 2, 13), new Among("od", 2, 13),
					new Among("\u00E1d", 2, 14), new Among("\u00E9d", 2, 15),
					new Among("\u00F6d", 2, 13), new Among("e", -1, 18),
					new Among("je", 9, 17), new Among("nk", -1, 4),
					new Among("unk", 11, 1), new Among("\u00E1nk", 11, 2),
					new Among("\u00E9nk", 11, 3), new Among("\u00FCnk", 11, 1),
					new Among("uk", -1, 8), new Among("juk", 16, 7),
					new Among("\u00E1juk", 17, 5), new Among("\u00FCk", -1, 8),
					new Among("j\u00FCk", 19, 7),
					new Among("\u00E9j\u00FCk", 20, 6), new Among("m", -1, 12),
					new Among("am", 22, 9), new Among("em", 22, 9),
					new Among("om", 22, 9), new Among("\u00E1m", 22, 10),
					new Among("\u00E9m", 22, 11), new Among("o", -1, 18),
					new Among("\u00E1", -1, 19), new Among("\u00E9", -1, 20)], a_11 = [
					new Among("id", -1, 10), new Among("aid", 0, 9),
					new Among("jaid", 1, 6), new Among("eid", 0, 9),
					new Among("jeid", 3, 6), new Among("\u00E1id", 0, 7),
					new Among("\u00E9id", 0, 8), new Among("i", -1, 15),
					new Among("ai", 7, 14), new Among("jai", 8, 11),
					new Among("ei", 7, 14), new Among("jei", 10, 11),
					new Among("\u00E1i", 7, 12), new Among("\u00E9i", 7, 13),
					new Among("itek", -1, 24), new Among("eitek", 14, 21),
					new Among("jeitek", 15, 20),
					new Among("\u00E9itek", 14, 23), new Among("ik", -1, 29),
					new Among("aik", 18, 26), new Among("jaik", 19, 25),
					new Among("eik", 18, 26), new Among("jeik", 21, 25),
					new Among("\u00E1ik", 18, 27),
					new Among("\u00E9ik", 18, 28), new Among("ink", -1, 20),
					new Among("aink", 25, 17), new Among("jaink", 26, 16),
					new Among("eink", 25, 17), new Among("jeink", 28, 16),
					new Among("\u00E1ink", 25, 18),
					new Among("\u00E9ink", 25, 19), new Among("aitok", -1, 21),
					new Among("jaitok", 32, 20),
					new Among("\u00E1itok", -1, 22), new Among("im", -1, 5),
					new Among("aim", 35, 4), new Among("jaim", 36, 1),
					new Among("eim", 35, 4), new Among("jeim", 38, 1),
					new Among("\u00E1im", 35, 2), new Among("\u00E9im", 35, 3)], g_v = [
					17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17,
					52, 14], I_p1, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_mark_regions() {
				var v_1 = sbp.c, v_2;
				I_p1 = sbp.l;
				if (sbp.i_g(g_v, 97, 252)) {
					while (true) {
						v_2 = sbp.c;
						if (sbp.o_g(g_v, 97, 252)) {
							sbp.c = v_2;
							if (!sbp.f_a(a_0, 8)) {
								sbp.c = v_2;
								if (v_2 < sbp.l)
									sbp.c++;
							}
							I_p1 = sbp.c;
							return;
						}
						sbp.c = v_2;
						if (v_2 >= sbp.l) {
							I_p1 = v_2;
							return;
						}
						sbp.c++;
					}
				}
				sbp.c = v_1;
				if (sbp.o_g(g_v, 97, 252)) {
					while (!sbp.i_g(g_v, 97, 252)) {
						if (sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
					I_p1 = sbp.c;
				}
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_v_ending() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_1, 2);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_f("a");
								break;
							case 2 :
								sbp.s_f("e");
								break;
						}
					}
				}
			}
			function r_double() {
				var v_1 = sbp.l - sbp.c;
				if (!sbp.f_a_b(a_2, 23))
					return false;
				sbp.c = sbp.l - v_1;
				return true;
			}
			function r_undouble() {
				if (sbp.c > sbp.lb) {
					sbp.c--;
					sbp.k = sbp.c;
					var c = sbp.c - 1;
					if (sbp.lb <= c && c <= sbp.l) {
						sbp.c = c;
						sbp.b = c;
						sbp.s_d();
					}
				}
			}
			function r_instrum() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_3, 2);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						if (a_v == 1 || a_v == 2)
							if (!r_double())
								return;
						sbp.s_d();
						r_undouble();
					}
				}
			}
			function r_case() {
				sbp.k = sbp.c;
				if (sbp.f_a_b(a_4, 44)) {
					sbp.b = sbp.c;
					if (r_R1()) {
						sbp.s_d();
						r_v_ending();
					}
				}
			}
			function r_case_special() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_5, 3);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_f("e");
								break;
							case 2 :
							case 3 :
								sbp.s_f("a");
								break;
						}
					}
				}
			}
			function r_case_other() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_6, 6);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
							case 2 :
								sbp.s_d();
								break;
							case 3 :
								sbp.s_f("a");
								break;
							case 4 :
								sbp.s_f("e");
								break;
						}
					}
				}
			}
			function r_factive() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_7, 2);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						if (a_v == 1 || a_v == 2)
							if (!r_double())
								return;
						sbp.s_d();
						r_undouble()
					}
				}
			}
			function r_plural() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_8, 7);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_f("a");
								break;
							case 2 :
								sbp.s_f("e");
								break;
							case 3 :
							case 4 :
							case 5 :
							case 6 :
							case 7 :
								sbp.s_d();
								break;
						}
					}
				}
			}
			function r_owned() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_9, 12);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
							case 4 :
							case 7 :
							case 9 :
								sbp.s_d();
								break;
							case 2 :
							case 5 :
							case 8 :
								sbp.s_f("e");
								break;
							case 3 :
							case 6 :
								sbp.s_f("a");
								break;
						}
					}
				}
			}
			function r_sing_owner() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_10, 31);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
							case 4 :
							case 7 :
							case 8 :
							case 9 :
							case 12 :
							case 13 :
							case 16 :
							case 17 :
							case 18 :
								sbp.s_d();
								break;
							case 2 :
							case 5 :
							case 10 :
							case 14 :
							case 19 :
								sbp.s_f("a");
								break;
							case 3 :
							case 6 :
							case 11 :
							case 15 :
							case 20 :
								sbp.s_f("e");
								break;
						}
					}
				}
			}
			function r_plur_owner() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_11, 42);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
							case 4 :
							case 5 :
							case 6 :
							case 9 :
							case 10 :
							case 11 :
							case 14 :
							case 15 :
							case 16 :
							case 17 :
							case 20 :
							case 21 :
							case 24 :
							case 25 :
							case 26 :
							case 29 :
								sbp.s_d();
								break;
							case 2 :
							case 7 :
							case 12 :
							case 18 :
							case 22 :
							case 27 :
								sbp.s_f("a");
								break;
							case 3 :
							case 8 :
							case 13 :
							case 19 :
							case 23 :
							case 28 :
								sbp.s_f("e");
								break;
						}
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_instrum();
				sbp.c = sbp.l;
				r_case();
				sbp.c = sbp.l;
				r_case_special();
				sbp.c = sbp.l;
				r_case_other();
				sbp.c = sbp.l;
				r_factive();
				sbp.c = sbp.l;
				r_owned();
				sbp.c = sbp.l;
				r_sing_owner();
				sbp.c = sbp.l;
				r_plur_owner();
				sbp.c = sbp.l;
				r_plural();
				return true;
			}
		},
		ItalianStemmer : function() {
			var a_0 = [new Among("", -1, 7), new Among("qu", 0, 6),
					new Among("\u00E1", 0, 1), new Among("\u00E9", 0, 2),
					new Among("\u00ED", 0, 3), new Among("\u00F3", 0, 4),
					new Among("\u00FA", 0, 5)], a_1 = [new Among("", -1, 3),
					new Among("I", 0, 1), new Among("U", 0, 2)], a_2 = [
					new Among("la", -1, -1), new Among("cela", 0, -1),
					new Among("gliela", 0, -1), new Among("mela", 0, -1),
					new Among("tela", 0, -1), new Among("vela", 0, -1),
					new Among("le", -1, -1), new Among("cele", 6, -1),
					new Among("gliele", 6, -1), new Among("mele", 6, -1),
					new Among("tele", 6, -1), new Among("vele", 6, -1),
					new Among("ne", -1, -1), new Among("cene", 12, -1),
					new Among("gliene", 12, -1), new Among("mene", 12, -1),
					new Among("sene", 12, -1), new Among("tene", 12, -1),
					new Among("vene", 12, -1), new Among("ci", -1, -1),
					new Among("li", -1, -1), new Among("celi", 20, -1),
					new Among("glieli", 20, -1), new Among("meli", 20, -1),
					new Among("teli", 20, -1), new Among("veli", 20, -1),
					new Among("gli", 20, -1), new Among("mi", -1, -1),
					new Among("si", -1, -1), new Among("ti", -1, -1),
					new Among("vi", -1, -1), new Among("lo", -1, -1),
					new Among("celo", 31, -1), new Among("glielo", 31, -1),
					new Among("melo", 31, -1), new Among("telo", 31, -1),
					new Among("velo", 31, -1)], a_3 = [
					new Among("ando", -1, 1), new Among("endo", -1, 1),
					new Among("ar", -1, 2), new Among("er", -1, 2),
					new Among("ir", -1, 2)], a_4 = [new Among("ic", -1, -1),
					new Among("abil", -1, -1), new Among("os", -1, -1),
					new Among("iv", -1, 1)], a_5 = [new Among("ic", -1, 1),
					new Among("abil", -1, 1), new Among("iv", -1, 1)], a_6 = [
					new Among("ica", -1, 1), new Among("logia", -1, 3),
					new Among("osa", -1, 1), new Among("ista", -1, 1),
					new Among("iva", -1, 9), new Among("anza", -1, 1),
					new Among("enza", -1, 5), new Among("ice", -1, 1),
					new Among("atrice", 7, 1), new Among("iche", -1, 1),
					new Among("logie", -1, 3), new Among("abile", -1, 1),
					new Among("ibile", -1, 1), new Among("usione", -1, 4),
					new Among("azione", -1, 2), new Among("uzione", -1, 4),
					new Among("atore", -1, 2), new Among("ose", -1, 1),
					new Among("ante", -1, 1), new Among("mente", -1, 1),
					new Among("amente", 19, 7), new Among("iste", -1, 1),
					new Among("ive", -1, 9), new Among("anze", -1, 1),
					new Among("enze", -1, 5), new Among("ici", -1, 1),
					new Among("atrici", 25, 1), new Among("ichi", -1, 1),
					new Among("abili", -1, 1), new Among("ibili", -1, 1),
					new Among("ismi", -1, 1), new Among("usioni", -1, 4),
					new Among("azioni", -1, 2), new Among("uzioni", -1, 4),
					new Among("atori", -1, 2), new Among("osi", -1, 1),
					new Among("anti", -1, 1), new Among("amenti", -1, 6),
					new Among("imenti", -1, 6), new Among("isti", -1, 1),
					new Among("ivi", -1, 9), new Among("ico", -1, 1),
					new Among("ismo", -1, 1), new Among("oso", -1, 1),
					new Among("amento", -1, 6), new Among("imento", -1, 6),
					new Among("ivo", -1, 9), new Among("it\u00E0", -1, 8),
					new Among("ist\u00E0", -1, 1),
					new Among("ist\u00E8", -1, 1),
					new Among("ist\u00EC", -1, 1)], a_7 = [
					new Among("isca", -1, 1), new Among("enda", -1, 1),
					new Among("ata", -1, 1), new Among("ita", -1, 1),
					new Among("uta", -1, 1), new Among("ava", -1, 1),
					new Among("eva", -1, 1), new Among("iva", -1, 1),
					new Among("erebbe", -1, 1), new Among("irebbe", -1, 1),
					new Among("isce", -1, 1), new Among("ende", -1, 1),
					new Among("are", -1, 1), new Among("ere", -1, 1),
					new Among("ire", -1, 1), new Among("asse", -1, 1),
					new Among("ate", -1, 1), new Among("avate", 16, 1),
					new Among("evate", 16, 1), new Among("ivate", 16, 1),
					new Among("ete", -1, 1), new Among("erete", 20, 1),
					new Among("irete", 20, 1), new Among("ite", -1, 1),
					new Among("ereste", -1, 1), new Among("ireste", -1, 1),
					new Among("ute", -1, 1), new Among("erai", -1, 1),
					new Among("irai", -1, 1), new Among("isci", -1, 1),
					new Among("endi", -1, 1), new Among("erei", -1, 1),
					new Among("irei", -1, 1), new Among("assi", -1, 1),
					new Among("ati", -1, 1), new Among("iti", -1, 1),
					new Among("eresti", -1, 1), new Among("iresti", -1, 1),
					new Among("uti", -1, 1), new Among("avi", -1, 1),
					new Among("evi", -1, 1), new Among("ivi", -1, 1),
					new Among("isco", -1, 1), new Among("ando", -1, 1),
					new Among("endo", -1, 1), new Among("Yamo", -1, 1),
					new Among("iamo", -1, 1), new Among("avamo", -1, 1),
					new Among("evamo", -1, 1), new Among("ivamo", -1, 1),
					new Among("eremo", -1, 1), new Among("iremo", -1, 1),
					new Among("assimo", -1, 1), new Among("ammo", -1, 1),
					new Among("emmo", -1, 1), new Among("eremmo", 54, 1),
					new Among("iremmo", 54, 1), new Among("immo", -1, 1),
					new Among("ano", -1, 1), new Among("iscano", 58, 1),
					new Among("avano", 58, 1), new Among("evano", 58, 1),
					new Among("ivano", 58, 1), new Among("eranno", -1, 1),
					new Among("iranno", -1, 1), new Among("ono", -1, 1),
					new Among("iscono", 65, 1), new Among("arono", 65, 1),
					new Among("erono", 65, 1), new Among("irono", 65, 1),
					new Among("erebbero", -1, 1), new Among("irebbero", -1, 1),
					new Among("assero", -1, 1), new Among("essero", -1, 1),
					new Among("issero", -1, 1), new Among("ato", -1, 1),
					new Among("ito", -1, 1), new Among("uto", -1, 1),
					new Among("avo", -1, 1), new Among("evo", -1, 1),
					new Among("ivo", -1, 1), new Among("ar", -1, 1),
					new Among("ir", -1, 1), new Among("er\u00E0", -1, 1),
					new Among("ir\u00E0", -1, 1), new Among("er\u00F2", -1, 1),
					new Among("ir\u00F2", -1, 1)], g_v = [17, 65, 16, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1], g_AEIO = [
					17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8,
					2], g_CG = [17], I_p2, I_p1, I_pV, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function habr1(c1, c2, v_1) {
				if (sbp.e_s(1, c1)) {
					sbp.k = sbp.c;
					if (sbp.i_g(g_v, 97, 249)) {
						sbp.s_f(c2);
						sbp.c = v_1;
						return true;
					}
				}
				return false;
			}
			function r_prelude() {
				var a_v, v_1 = sbp.c, v_2, v_3, v_4;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_0, 7);
					if (a_v) {
						sbp.k = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_f("\u00E0");
								continue;
							case 2 :
								sbp.s_f("\u00E8");
								continue;
							case 3 :
								sbp.s_f("\u00EC");
								continue;
							case 4 :
								sbp.s_f("\u00F2");
								continue;
							case 5 :
								sbp.s_f("\u00F9");
								continue;
							case 6 :
								sbp.s_f("qU");
								continue;
							case 7 :
								if (sbp.c >= sbp.l)
									break;
								sbp.c++;
								continue;
						}
					}
					break;
				}
				sbp.c = v_1;
				while (true) {
					v_2 = sbp.c;
					while (true) {
						v_3 = sbp.c;
						if (sbp.i_g(g_v, 97, 249)) {
							sbp.b = sbp.c;
							v_4 = sbp.c;
							if (habr1("u", "U", v_3))
								break;
							sbp.c = v_4;
							if (habr1("i", "I", v_3))
								break;
						}
						sbp.c = v_3;
						if (sbp.c >= sbp.l) {
							sbp.c = v_2;
							return;
						}
						sbp.c++;
					}
				}
			}
			function habr2(v_1) {
				sbp.c = v_1;
				if (!sbp.i_g(g_v, 97, 249))
					return false;
				while (!sbp.o_g(g_v, 97, 249)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				return true;
			}
			function habr3() {
				if (sbp.i_g(g_v, 97, 249)) {
					var v_1 = sbp.c;
					if (sbp.o_g(g_v, 97, 249)) {
						while (!sbp.i_g(g_v, 97, 249)) {
							if (sbp.c >= sbp.l)
								return habr2(v_1);
							sbp.c++;
						}
						return true;
					}
					return habr2(v_1);
				}
				return false;
			}
			function habr4() {
				var v_1 = sbp.c, v_2;
				if (!habr3()) {
					sbp.c = v_1;
					if (!sbp.o_g(g_v, 97, 249))
						return;
					v_2 = sbp.c;
					if (sbp.o_g(g_v, 97, 249)) {
						while (!sbp.i_g(g_v, 97, 249)) {
							if (sbp.c >= sbp.l) {
								sbp.c = v_2;
								if (sbp.i_g(g_v, 97, 249)
										&& sbp.c < sbp.l)
									sbp.c++;
								return;
							}
							sbp.c++;
						}
						I_pV = sbp.c;
						return;
					}
					sbp.c = v_2;
					if (!sbp.i_g(g_v, 97, 249) || sbp.c >= sbp.l)
						return;
					sbp.c++;
				}
				I_pV = sbp.c;
			}
			function habr5() {
				while (!sbp.i_g(g_v, 97, 249)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 249)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				return true;
			}
			function r_mark_regions() {
				var v_1 = sbp.c;
				I_pV = sbp.l;
				I_p1 = I_pV;
				I_p2 = I_pV;
				habr4();
				sbp.c = v_1;
				if (habr5()) {
					I_p1 = sbp.c;
					if (habr5())
						I_p2 = sbp.c;
				}
			}
			function r_postlude() {
				var a_v;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_1, 3);
					if (!a_v)
						break;
					sbp.k = sbp.c;
					switch (a_v) {
						case 1 :
							sbp.s_f("i");
							break;
						case 2 :
							sbp.s_f("u");
							break;
						case 3 :
							if (sbp.c >= sbp.l)
								return;
							sbp.c++;
							break;
					}
				}
			}
			function r_RV() {
				return I_pV <= sbp.c;
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_attached_pronoun() {
				var a_v;
				sbp.k = sbp.c;
				if (sbp.f_a_b(a_2, 37)) {
					sbp.b = sbp.c;
					a_v = sbp.f_a_b(a_3, 5);
					if (a_v && r_RV()) {
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								sbp.s_f("e");
								break;
						}
					}
				}
			}
			function r_standard_suffix() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_6, 51);
				if (!a_v)
					return false;
				sbp.b = sbp.c;
				switch (a_v) {
					case 1 :
						if (!r_R2())
							return false;
						sbp.s_d();
						break;
					case 2 :
						if (!r_R2())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						if (sbp.e_s_b(2, "ic")) {
							sbp.b = sbp.c;
							if (r_R2())
								sbp.s_d();
						}
						break;
					case 3 :
						if (!r_R2())
							return false;
						sbp.s_f("log");
						break;
					case 4 :
						if (!r_R2())
							return false;
						sbp.s_f("u");
						break;
					case 5 :
						if (!r_R2())
							return false;
						sbp.s_f("ente");
						break;
					case 6 :
						if (!r_RV())
							return false;
						sbp.s_d();
						break;
					case 7 :
						if (!r_R1())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						a_v = sbp.f_a_b(a_4, 4);
						if (a_v) {
							sbp.b = sbp.c;
							if (r_R2()) {
								sbp.s_d();
								if (a_v == 1) {
									sbp.k = sbp.c;
									if (sbp.e_s_b(2, "at")) {
										sbp.b = sbp.c;
										if (r_R2())
											sbp.s_d();
									}
								}
							}
						}
						break;
					case 8 :
						if (!r_R2())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						a_v = sbp.f_a_b(a_5, 3);
						if (a_v) {
							sbp.b = sbp.c;
							if (a_v == 1)
								if (r_R2())
									sbp.s_d();
						}
						break;
					case 9 :
						if (!r_R2())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						if (sbp.e_s_b(2, "at")) {
							sbp.b = sbp.c;
							if (r_R2()) {
								sbp.s_d();
								sbp.k = sbp.c;
								if (sbp.e_s_b(2, "ic")) {
									sbp.b = sbp.c;
									if (r_R2())
										sbp.s_d();
								}
							}
						}
						break;
				}
				return true;
			}
			function r_verb_suffix() {
				var a_v, v_1;
				if (sbp.c >= I_pV) {
					v_1 = sbp.lb;
					sbp.lb = I_pV;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_7, 87);
					if (a_v) {
						sbp.b = sbp.c;
						if (a_v == 1)
							sbp.s_d();
					}
					sbp.lb = v_1;
				}
			}
			function habr6() {
				var v_1 = sbp.l - sbp.c;
				sbp.k = sbp.c;
				if (sbp.i_g_b(g_AEIO, 97, 242)) {
					sbp.b = sbp.c;
					if (r_RV()) {
						sbp.s_d();
						sbp.k = sbp.c;
						if (sbp.e_s_b(1, "i")) {
							sbp.b = sbp.c;
							if (r_RV()) {
								sbp.s_d();
								return;
							}
						}
					}
				}
				sbp.c = sbp.l - v_1;
			}
			function r_vowel_suffix() {
				habr6();
				sbp.k = sbp.c;
				if (sbp.e_s_b(1, "h")) {
					sbp.b = sbp.c;
					if (sbp.i_g_b(g_CG, 99, 103))
						if (r_RV())
							sbp.s_d();
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_prelude();
				sbp.c = v_1;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_attached_pronoun();
				sbp.c = sbp.l;
				if (!r_standard_suffix()) {
					sbp.c = sbp.l;
					r_verb_suffix();
				}
				sbp.c = sbp.l;
				r_vowel_suffix();
				sbp.c = sbp.lb;
				r_postlude();
				return true;
			}
		},
		NorwegianStemmer : function() {
			var a_0 = [new Among("a", -1, 1), new Among("e", -1, 1),
					new Among("ede", 1, 1), new Among("ande", 1, 1),
					new Among("ende", 1, 1), new Among("ane", 1, 1),
					new Among("ene", 1, 1), new Among("hetene", 6, 1),
					new Among("erte", 1, 3), new Among("en", -1, 1),
					new Among("heten", 9, 1), new Among("ar", -1, 1),
					new Among("er", -1, 1), new Among("heter", 12, 1),
					new Among("s", -1, 2), new Among("as", 14, 1),
					new Among("es", 14, 1), new Among("edes", 16, 1),
					new Among("endes", 16, 1), new Among("enes", 16, 1),
					new Among("hetenes", 19, 1), new Among("ens", 14, 1),
					new Among("hetens", 21, 1), new Among("ers", 14, 1),
					new Among("ets", 14, 1), new Among("et", -1, 1),
					new Among("het", 25, 1), new Among("ert", -1, 3),
					new Among("ast", -1, 1)], a_1 = [new Among("dt", -1, -1),
					new Among("vt", -1, -1)], a_2 = [new Among("leg", -1, 1),
					new Among("eleg", 0, 1), new Among("ig", -1, 1),
					new Among("eig", 2, 1), new Among("lig", 2, 1),
					new Among("elig", 4, 1), new Among("els", -1, 1),
					new Among("lov", -1, 1), new Among("elov", 7, 1),
					new Among("slov", 7, 1), new Among("hetslov", 9, 1)], g_v = [
					17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0,
					128], g_s_ending = [119, 125, 149, 1], I_x, I_p1, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_mark_regions() {
				var v_1, c = sbp.c + 3;
				I_p1 = sbp.l;
				if (0 <= c || c <= sbp.l) {
					I_x = c;
					while (true) {
						v_1 = sbp.c;
						if (sbp.i_g(g_v, 97, 248)) {
							sbp.c = v_1;
							break;
						}
						if (v_1 >= sbp.l)
							return;
						sbp.c = v_1 + 1;
					}
					while (!sbp.o_g(g_v, 97, 248)) {
						if (sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
					I_p1 = sbp.c;
					if (I_p1 < I_x)
						I_p1 = I_x;
				}
			}
			function r_main_suffix() {
				var a_v, v_1, v_2;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_0, 29);
					sbp.lb = v_1;
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								v_2 = sbp.l - sbp.c;
								if (sbp.i_g_b(g_s_ending, 98, 122))
									sbp.s_d();
								else {
									sbp.c = sbp.l - v_2;
									if (sbp.e_s_b(1, "k")
											&& sbp.o_g_b(g_v, 97, 248))
										sbp.s_d();
								}
								break;
							case 3 :
								sbp.s_f("er");
								break;
						}
					}
				}
			}
			function r_consonant_pair() {
				var v_1 = sbp.l - sbp.c, v_2;
				if (sbp.c >= I_p1) {
					v_2 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					if (sbp.f_a_b(a_1, 2)) {
						sbp.b = sbp.c;
						sbp.lb = v_2;
						sbp.c = sbp.l - v_1;
						if (sbp.c > sbp.lb) {
							sbp.c--;
							sbp.b = sbp.c;
							sbp.s_d();
						}
					} else
						sbp.lb = v_2;
				}
			}
			function r_other_suffix() {
				var a_v, v_1;
				if (sbp.c >= I_p1) {
					v_1 = sbp.lb;
					sbp.lb = I_p1;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_2, 11);
					if (a_v) {
						sbp.b = sbp.c;
						sbp.lb = v_1;
						if (a_v == 1)
							sbp.s_d();
					} else
						sbp.lb = v_1;
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_main_suffix();
				sbp.c = sbp.l;
				r_consonant_pair();
				sbp.c = sbp.l;
				r_other_suffix();
				return true;
			}
		},
		PortugueseStemmer : function() {
			var a_0 = [new Among("", -1, 3), new Among("\u00E3", 0, 1),
					new Among("\u00F5", 0, 2)], a_1 = [new Among("", -1, 3),
					new Among("a~", 0, 1), new Among("o~", 0, 2)], a_2 = [
					new Among("ic", -1, -1), new Among("ad", -1, -1),
					new Among("os", -1, -1), new Among("iv", -1, 1)], a_3 = [
					new Among("ante", -1, 1), new Among("avel", -1, 1),
					new Among("\u00EDvel", -1, 1)], a_4 = [
					new Among("ic", -1, 1), new Among("abil", -1, 1),
					new Among("iv", -1, 1)], a_5 = [new Among("ica", -1, 1),
					new Among("\u00E2ncia", -1, 1),
					new Among("\u00EAncia", -1, 4), new Among("ira", -1, 9),
					new Among("adora", -1, 1), new Among("osa", -1, 1),
					new Among("ista", -1, 1), new Among("iva", -1, 8),
					new Among("eza", -1, 1), new Among("log\u00EDa", -1, 2),
					new Among("idade", -1, 7), new Among("ante", -1, 1),
					new Among("mente", -1, 6), new Among("amente", 12, 5),
					new Among("\u00E1vel", -1, 1),
					new Among("\u00EDvel", -1, 1),
					new Among("uci\u00F3n", -1, 3), new Among("ico", -1, 1),
					new Among("ismo", -1, 1), new Among("oso", -1, 1),
					new Among("amento", -1, 1), new Among("imento", -1, 1),
					new Among("ivo", -1, 8), new Among("a\u00E7a~o", -1, 1),
					new Among("ador", -1, 1), new Among("icas", -1, 1),
					new Among("\u00EAncias", -1, 4), new Among("iras", -1, 9),
					new Among("adoras", -1, 1), new Among("osas", -1, 1),
					new Among("istas", -1, 1), new Among("ivas", -1, 8),
					new Among("ezas", -1, 1), new Among("log\u00EDas", -1, 2),
					new Among("idades", -1, 7), new Among("uciones", -1, 3),
					new Among("adores", -1, 1), new Among("antes", -1, 1),
					new Among("a\u00E7o~es", -1, 1), new Among("icos", -1, 1),
					new Among("ismos", -1, 1), new Among("osos", -1, 1),
					new Among("amentos", -1, 1), new Among("imentos", -1, 1),
					new Among("ivos", -1, 8)], a_6 = [new Among("ada", -1, 1),
					new Among("ida", -1, 1), new Among("ia", -1, 1),
					new Among("aria", 2, 1), new Among("eria", 2, 1),
					new Among("iria", 2, 1), new Among("ara", -1, 1),
					new Among("era", -1, 1), new Among("ira", -1, 1),
					new Among("ava", -1, 1), new Among("asse", -1, 1),
					new Among("esse", -1, 1), new Among("isse", -1, 1),
					new Among("aste", -1, 1), new Among("este", -1, 1),
					new Among("iste", -1, 1), new Among("ei", -1, 1),
					new Among("arei", 16, 1), new Among("erei", 16, 1),
					new Among("irei", 16, 1), new Among("am", -1, 1),
					new Among("iam", 20, 1), new Among("ariam", 21, 1),
					new Among("eriam", 21, 1), new Among("iriam", 21, 1),
					new Among("aram", 20, 1), new Among("eram", 20, 1),
					new Among("iram", 20, 1), new Among("avam", 20, 1),
					new Among("em", -1, 1), new Among("arem", 29, 1),
					new Among("erem", 29, 1), new Among("irem", 29, 1),
					new Among("assem", 29, 1), new Among("essem", 29, 1),
					new Among("issem", 29, 1), new Among("ado", -1, 1),
					new Among("ido", -1, 1), new Among("ando", -1, 1),
					new Among("endo", -1, 1), new Among("indo", -1, 1),
					new Among("ara~o", -1, 1), new Among("era~o", -1, 1),
					new Among("ira~o", -1, 1), new Among("ar", -1, 1),
					new Among("er", -1, 1), new Among("ir", -1, 1),
					new Among("as", -1, 1), new Among("adas", 47, 1),
					new Among("idas", 47, 1), new Among("ias", 47, 1),
					new Among("arias", 50, 1), new Among("erias", 50, 1),
					new Among("irias", 50, 1), new Among("aras", 47, 1),
					new Among("eras", 47, 1), new Among("iras", 47, 1),
					new Among("avas", 47, 1), new Among("es", -1, 1),
					new Among("ardes", 58, 1), new Among("erdes", 58, 1),
					new Among("irdes", 58, 1), new Among("ares", 58, 1),
					new Among("eres", 58, 1), new Among("ires", 58, 1),
					new Among("asses", 58, 1), new Among("esses", 58, 1),
					new Among("isses", 58, 1), new Among("astes", 58, 1),
					new Among("estes", 58, 1), new Among("istes", 58, 1),
					new Among("is", -1, 1), new Among("ais", 71, 1),
					new Among("eis", 71, 1), new Among("areis", 73, 1),
					new Among("ereis", 73, 1), new Among("ireis", 73, 1),
					new Among("\u00E1reis", 73, 1),
					new Among("\u00E9reis", 73, 1),
					new Among("\u00EDreis", 73, 1),
					new Among("\u00E1sseis", 73, 1),
					new Among("\u00E9sseis", 73, 1),
					new Among("\u00EDsseis", 73, 1),
					new Among("\u00E1veis", 73, 1),
					new Among("\u00EDeis", 73, 1),
					new Among("ar\u00EDeis", 84, 1),
					new Among("er\u00EDeis", 84, 1),
					new Among("ir\u00EDeis", 84, 1), new Among("ados", -1, 1),
					new Among("idos", -1, 1), new Among("amos", -1, 1),
					new Among("\u00E1ramos", 90, 1),
					new Among("\u00E9ramos", 90, 1),
					new Among("\u00EDramos", 90, 1),
					new Among("\u00E1vamos", 90, 1),
					new Among("\u00EDamos", 90, 1),
					new Among("ar\u00EDamos", 95, 1),
					new Among("er\u00EDamos", 95, 1),
					new Among("ir\u00EDamos", 95, 1), new Among("emos", -1, 1),
					new Among("aremos", 99, 1), new Among("eremos", 99, 1),
					new Among("iremos", 99, 1),
					new Among("\u00E1ssemos", 99, 1),
					new Among("\u00EAssemos", 99, 1),
					new Among("\u00EDssemos", 99, 1), new Among("imos", -1, 1),
					new Among("armos", -1, 1), new Among("ermos", -1, 1),
					new Among("irmos", -1, 1), new Among("\u00E1mos", -1, 1),
					new Among("ar\u00E1s", -1, 1),
					new Among("er\u00E1s", -1, 1),
					new Among("ir\u00E1s", -1, 1), new Among("eu", -1, 1),
					new Among("iu", -1, 1), new Among("ou", -1, 1),
					new Among("ar\u00E1", -1, 1), new Among("er\u00E1", -1, 1),
					new Among("ir\u00E1", -1, 1)], a_7 = [
					new Among("a", -1, 1), new Among("i", -1, 1),
					new Among("o", -1, 1), new Among("os", -1, 1),
					new Among("\u00E1", -1, 1), new Among("\u00ED", -1, 1),
					new Among("\u00F3", -1, 1)], a_8 = [new Among("e", -1, 1),
					new Among("\u00E7", -1, 2), new Among("\u00E9", -1, 1),
					new Among("\u00EA", -1, 1)], g_v = [17, 65, 16, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2], I_p2, I_p1, I_pV, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_prelude() {
				var a_v;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_0, 3);
					if (a_v) {
						sbp.k = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_f("a~");
								continue;
							case 2 :
								sbp.s_f("o~");
								continue;
							case 3 :
								if (sbp.c >= sbp.l)
									break;
								sbp.c++;
								continue;
						}
					}
					break;
				}
			}
			function habr2() {
				if (sbp.o_g(g_v, 97, 250)) {
					while (!sbp.i_g(g_v, 97, 250)) {
						if (sbp.c >= sbp.l)
							return true;
						sbp.c++;
					}
					return false;
				}
				return true;
			}
			function habr3() {
				if (sbp.i_g(g_v, 97, 250)) {
					while (!sbp.o_g(g_v, 97, 250)) {
						if (sbp.c >= sbp.l)
							return false;
						sbp.c++;
					}
				}
				I_pV = sbp.c;
				return true;
			}
			function habr4() {
				var v_1 = sbp.c, v_2, v_3;
				if (sbp.i_g(g_v, 97, 250)) {
					v_2 = sbp.c;
					if (habr2()) {
						sbp.c = v_2;
						if (habr3())
							return;
					} else
						I_pV = sbp.c;
				}
				sbp.c = v_1;
				if (sbp.o_g(g_v, 97, 250)) {
					v_3 = sbp.c;
					if (habr2()) {
						sbp.c = v_3;
						if (!sbp.i_g(g_v, 97, 250) || sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
					I_pV = sbp.c;
				}
			}
			function habr5() {
				while (!sbp.i_g(g_v, 97, 250)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 250)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				return true;
			}
			function r_mark_regions() {
				var v_1 = sbp.c;
				I_pV = sbp.l;
				I_p1 = I_pV;
				I_p2 = I_pV;
				habr4();
				sbp.c = v_1;
				if (habr5()) {
					I_p1 = sbp.c;
					if (habr5())
						I_p2 = sbp.c;
				}
			}
			function r_postlude() {
				var a_v;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_1, 3);
					if (a_v) {
						sbp.k = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_f("\u00E3");
								continue;
							case 2 :
								sbp.s_f("\u00F5");
								continue;
							case 3 :
								if (sbp.c >= sbp.l)
									break;
								sbp.c++;
								continue;
						}
					}
					break;
				}
			}
			function r_RV() {
				return I_pV <= sbp.c;
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_standard_suffix() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_5, 45);
				if (!a_v)
					return false;
				sbp.b = sbp.c;
				switch (a_v) {
					case 1 :
						if (!r_R2())
							return false;
						sbp.s_d();
						break;
					case 2 :
						if (!r_R2())
							return false;
						sbp.s_f("log");
						break;
					case 3 :
						if (!r_R2())
							return false;
						sbp.s_f("u");
						break;
					case 4 :
						if (!r_R2())
							return false;
						sbp.s_f("ente");
						break;
					case 5 :
						if (!r_R1())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						a_v = sbp.f_a_b(a_2, 4);
						if (a_v) {
							sbp.b = sbp.c;
							if (r_R2()) {
								sbp.s_d();
								if (a_v == 1) {
									sbp.k = sbp.c;
									if (sbp.e_s_b(2, "at")) {
										sbp.b = sbp.c;
										if (r_R2())
											sbp.s_d();
									}
								}
							}
						}
						break;
					case 6 :
						if (!r_R2())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						a_v = sbp.f_a_b(a_3, 3);
						if (a_v) {
							sbp.b = sbp.c;
							if (a_v == 1)
								if (r_R2())
									sbp.s_d();
						}
						break;
					case 7 :
						if (!r_R2())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						a_v = sbp.f_a_b(a_4, 3);
						if (a_v) {
							sbp.b = sbp.c;
							if (a_v == 1)
								if (r_R2())
									sbp.s_d();
						}
						break;
					case 8 :
						if (!r_R2())
							return false;
						sbp.s_d();
						sbp.k = sbp.c;
						if (sbp.e_s_b(2, "at")) {
							sbp.b = sbp.c;
							if (r_R2())
								sbp.s_d();
						}
						break;
					case 9 :
						if (!r_RV() || !sbp.e_s_b(1, "e"))
							return false;
						sbp.s_f("ir");
						break;
				}
				return true;
			}
			function r_verb_suffix() {
				var a_v, v_1;
				if (sbp.c >= I_pV) {
					v_1 = sbp.lb;
					sbp.lb = I_pV;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_6, 120);
					if (a_v) {
						sbp.b = sbp.c;
						if (a_v == 1)
							sbp.s_d();
						sbp.lb = v_1;
						return true;
					}
					sbp.lb = v_1;
				}
				return false;
			}
			function r_residual_suffix() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_7, 7);
				if (a_v) {
					sbp.b = sbp.c;
					if (a_v == 1)
						if (r_RV())
							sbp.s_d();
				}
			}
			function habr6(c1, c2) {
				if (sbp.e_s_b(1, c1)) {
					sbp.b = sbp.c;
					var v_1 = sbp.l - sbp.c;
					if (sbp.e_s_b(1, c2)) {
						sbp.c = sbp.l - v_1;
						if (r_RV())
							sbp.s_d();
						return false;
					}
				}
				return true;
			}
			function r_residual_form() {
				var a_v, v_1, v_2, v_3;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_8, 4);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							if (r_RV()) {
								sbp.s_d();
								sbp.k = sbp.c;
								v_1 = sbp.l - sbp.c;
								if (habr6("u", "g"))
									habr6("i", "c")
							}
							break;
						case 2 :
							sbp.s_f("c");
							break;
					}
				}
			}
			function habr1() {
				if (!r_standard_suffix()) {
					sbp.c = sbp.l;
					if (!r_verb_suffix()) {
						sbp.c = sbp.l;
						r_residual_suffix();
						return;
					}
				}
				sbp.c = sbp.l;
				sbp.k = sbp.c;
				if (sbp.e_s_b(1, "i")) {
					sbp.b = sbp.c;
					if (sbp.e_s_b(1, "c")) {
						sbp.c = sbp.l;
						if (r_RV())
							sbp.s_d();
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_prelude();
				sbp.c = v_1;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				habr1();
				sbp.c = sbp.l;
				r_residual_form();
				sbp.c = sbp.lb;
				r_postlude();
				return true;
			}
		},
		RomanianStemmer : function() {
			var a_0 = [new Among("", -1, 3), new Among("I", 0, 1),
					new Among("U", 0, 2)], a_1 = [new Among("ea", -1, 3),
					new Among("a\u0163ia", -1, 7), new Among("aua", -1, 2),
					new Among("iua", -1, 4), new Among("a\u0163ie", -1, 7),
					new Among("ele", -1, 3), new Among("ile", -1, 5),
					new Among("iile", 6, 4), new Among("iei", -1, 4),
					new Among("atei", -1, 6), new Among("ii", -1, 4),
					new Among("ului", -1, 1), new Among("ul", -1, 1),
					new Among("elor", -1, 3), new Among("ilor", -1, 4),
					new Among("iilor", 14, 4)], a_2 = [
					new Among("icala", -1, 4), new Among("iciva", -1, 4),
					new Among("ativa", -1, 5), new Among("itiva", -1, 6),
					new Among("icale", -1, 4), new Among("a\u0163iune", -1, 5),
					new Among("i\u0163iune", -1, 6),
					new Among("atoare", -1, 5), new Among("itoare", -1, 6),
					new Among("\u0103toare", -1, 5),
					new Among("icitate", -1, 4), new Among("abilitate", -1, 1),
					new Among("ibilitate", -1, 2), new Among("ivitate", -1, 3),
					new Among("icive", -1, 4), new Among("ative", -1, 5),
					new Among("itive", -1, 6), new Among("icali", -1, 4),
					new Among("atori", -1, 5), new Among("icatori", 18, 4),
					new Among("itori", -1, 6), new Among("\u0103tori", -1, 5),
					new Among("icitati", -1, 4), new Among("abilitati", -1, 1),
					new Among("ivitati", -1, 3), new Among("icivi", -1, 4),
					new Among("ativi", -1, 5), new Among("itivi", -1, 6),
					new Among("icit\u0103i", -1, 4),
					new Among("abilit\u0103i", -1, 1),
					new Among("ivit\u0103i", -1, 3),
					new Among("icit\u0103\u0163i", -1, 4),
					new Among("abilit\u0103\u0163i", -1, 1),
					new Among("ivit\u0103\u0163i", -1, 3),
					new Among("ical", -1, 4), new Among("ator", -1, 5),
					new Among("icator", 35, 4), new Among("itor", -1, 6),
					new Among("\u0103tor", -1, 5), new Among("iciv", -1, 4),
					new Among("ativ", -1, 5), new Among("itiv", -1, 6),
					new Among("ical\u0103", -1, 4),
					new Among("iciv\u0103", -1, 4),
					new Among("ativ\u0103", -1, 5),
					new Among("itiv\u0103", -1, 6)], a_3 = [
					new Among("ica", -1, 1), new Among("abila", -1, 1),
					new Among("ibila", -1, 1), new Among("oasa", -1, 1),
					new Among("ata", -1, 1), new Among("ita", -1, 1),
					new Among("anta", -1, 1), new Among("ista", -1, 3),
					new Among("uta", -1, 1), new Among("iva", -1, 1),
					new Among("ic", -1, 1), new Among("ice", -1, 1),
					new Among("abile", -1, 1), new Among("ibile", -1, 1),
					new Among("isme", -1, 3), new Among("iune", -1, 2),
					new Among("oase", -1, 1), new Among("ate", -1, 1),
					new Among("itate", 17, 1), new Among("ite", -1, 1),
					new Among("ante", -1, 1), new Among("iste", -1, 3),
					new Among("ute", -1, 1), new Among("ive", -1, 1),
					new Among("ici", -1, 1), new Among("abili", -1, 1),
					new Among("ibili", -1, 1), new Among("iuni", -1, 2),
					new Among("atori", -1, 1), new Among("osi", -1, 1),
					new Among("ati", -1, 1), new Among("itati", 30, 1),
					new Among("iti", -1, 1), new Among("anti", -1, 1),
					new Among("isti", -1, 3), new Among("uti", -1, 1),
					new Among("i\u015Fti", -1, 3), new Among("ivi", -1, 1),
					new Among("it\u0103i", -1, 1),
					new Among("o\u015Fi", -1, 1),
					new Among("it\u0103\u0163i", -1, 1),
					new Among("abil", -1, 1), new Among("ibil", -1, 1),
					new Among("ism", -1, 3), new Among("ator", -1, 1),
					new Among("os", -1, 1), new Among("at", -1, 1),
					new Among("it", -1, 1), new Among("ant", -1, 1),
					new Among("ist", -1, 3), new Among("ut", -1, 1),
					new Among("iv", -1, 1), new Among("ic\u0103", -1, 1),
					new Among("abil\u0103", -1, 1),
					new Among("ibil\u0103", -1, 1),
					new Among("oas\u0103", -1, 1),
					new Among("at\u0103", -1, 1), new Among("it\u0103", -1, 1),
					new Among("ant\u0103", -1, 1),
					new Among("ist\u0103", -1, 3),
					new Among("ut\u0103", -1, 1), new Among("iv\u0103", -1, 1)], a_4 = [
					new Among("ea", -1, 1), new Among("ia", -1, 1),
					new Among("esc", -1, 1), new Among("\u0103sc", -1, 1),
					new Among("ind", -1, 1), new Among("\u00E2nd", -1, 1),
					new Among("are", -1, 1), new Among("ere", -1, 1),
					new Among("ire", -1, 1), new Among("\u00E2re", -1, 1),
					new Among("se", -1, 2), new Among("ase", 10, 1),
					new Among("sese", 10, 2), new Among("ise", 10, 1),
					new Among("use", 10, 1), new Among("\u00E2se", 10, 1),
					new Among("e\u015Fte", -1, 1),
					new Among("\u0103\u015Fte", -1, 1),
					new Among("eze", -1, 1), new Among("ai", -1, 1),
					new Among("eai", 19, 1), new Among("iai", 19, 1),
					new Among("sei", -1, 2), new Among("e\u015Fti", -1, 1),
					new Among("\u0103\u015Fti", -1, 1), new Among("ui", -1, 1),
					new Among("ezi", -1, 1), new Among("\u00E2i", -1, 1),
					new Among("a\u015Fi", -1, 1),
					new Among("se\u015Fi", -1, 2),
					new Among("ase\u015Fi", 29, 1),
					new Among("sese\u015Fi", 29, 2),
					new Among("ise\u015Fi", 29, 1),
					new Among("use\u015Fi", 29, 1),
					new Among("\u00E2se\u015Fi", 29, 1),
					new Among("i\u015Fi", -1, 1), new Among("u\u015Fi", -1, 1),
					new Among("\u00E2\u015Fi", -1, 1),
					new Among("a\u0163i", -1, 2),
					new Among("ea\u0163i", 38, 1),
					new Among("ia\u0163i", 38, 1),
					new Among("e\u0163i", -1, 2), new Among("i\u0163i", -1, 2),
					new Among("\u00E2\u0163i", -1, 2),
					new Among("ar\u0103\u0163i", -1, 1),
					new Among("ser\u0103\u0163i", -1, 2),
					new Among("aser\u0103\u0163i", 45, 1),
					new Among("seser\u0103\u0163i", 45, 2),
					new Among("iser\u0103\u0163i", 45, 1),
					new Among("user\u0103\u0163i", 45, 1),
					new Among("\u00E2ser\u0103\u0163i", 45, 1),
					new Among("ir\u0103\u0163i", -1, 1),
					new Among("ur\u0103\u0163i", -1, 1),
					new Among("\u00E2r\u0103\u0163i", -1, 1),
					new Among("am", -1, 1), new Among("eam", 54, 1),
					new Among("iam", 54, 1), new Among("em", -1, 2),
					new Among("asem", 57, 1), new Among("sesem", 57, 2),
					new Among("isem", 57, 1), new Among("usem", 57, 1),
					new Among("\u00E2sem", 57, 1), new Among("im", -1, 2),
					new Among("\u00E2m", -1, 2), new Among("\u0103m", -1, 2),
					new Among("ar\u0103m", 65, 1),
					new Among("ser\u0103m", 65, 2),
					new Among("aser\u0103m", 67, 1),
					new Among("seser\u0103m", 67, 2),
					new Among("iser\u0103m", 67, 1),
					new Among("user\u0103m", 67, 1),
					new Among("\u00E2ser\u0103m", 67, 1),
					new Among("ir\u0103m", 65, 1),
					new Among("ur\u0103m", 65, 1),
					new Among("\u00E2r\u0103m", 65, 1), new Among("au", -1, 1),
					new Among("eau", 76, 1), new Among("iau", 76, 1),
					new Among("indu", -1, 1), new Among("\u00E2ndu", -1, 1),
					new Among("ez", -1, 1), new Among("easc\u0103", -1, 1),
					new Among("ar\u0103", -1, 1),
					new Among("ser\u0103", -1, 2),
					new Among("aser\u0103", 84, 1),
					new Among("seser\u0103", 84, 2),
					new Among("iser\u0103", 84, 1),
					new Among("user\u0103", 84, 1),
					new Among("\u00E2ser\u0103", 84, 1),
					new Among("ir\u0103", -1, 1), new Among("ur\u0103", -1, 1),
					new Among("\u00E2r\u0103", -1, 1),
					new Among("eaz\u0103", -1, 1)], a_5 = [
					new Among("a", -1, 1), new Among("e", -1, 1),
					new Among("ie", 1, 1), new Among("i", -1, 1),
					new Among("\u0103", -1, 1)], g_v = [17, 65, 16, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4], B_standard_suffix_removed, I_p2, I_p1, I_pV, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function habr1(c1, c2) {
				if (sbp.e_s(1, c1)) {
					sbp.k = sbp.c;
					if (sbp.i_g(g_v, 97, 259))
						sbp.s_f(c2);
				}
			}
			function r_prelude() {
				var v_1, v_2;
				while (true) {
					v_1 = sbp.c;
					if (sbp.i_g(g_v, 97, 259)) {
						v_2 = sbp.c;
						sbp.b = v_2;
						habr1("u", "U");
						sbp.c = v_2;
						habr1("i", "I");
					}
					sbp.c = v_1;
					if (sbp.c >= sbp.l) {
						break;
					}
					sbp.c++;
				}
			}
			function habr2() {
				if (sbp.o_g(g_v, 97, 259)) {
					while (!sbp.i_g(g_v, 97, 259)) {
						if (sbp.c >= sbp.l)
							return true;
						sbp.c++;
					}
					return false;
				}
				return true;
			}
			function habr3() {
				if (sbp.i_g(g_v, 97, 259)) {
					while (!sbp.o_g(g_v, 97, 259)) {
						if (sbp.c >= sbp.l)
							return true;
						sbp.c++;
					}
				}
				return false;
			}
			function habr4() {
				var v_1 = sbp.c, v_2, v_3;
				if (sbp.i_g(g_v, 97, 259)) {
					v_2 = sbp.c;
					if (habr2()) {
						sbp.c = v_2;
						if (!habr3()) {
							I_pV = sbp.c;
							return;
						}
					} else {
						I_pV = sbp.c;
						return;
					}
				}
				sbp.c = v_1;
				if (sbp.o_g(g_v, 97, 259)) {
					v_3 = sbp.c;
					if (habr2()) {
						sbp.c = v_3;
						if (sbp.i_g(g_v, 97, 259) && sbp.c < sbp.l)
							sbp.c++;
					}
					I_pV = sbp.c;
				}
			}
			function habr5() {
				while (!sbp.i_g(g_v, 97, 259)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 259)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				return true;
			}
			function r_mark_regions() {
				var v_1 = sbp.c;
				I_pV = sbp.l;
				I_p1 = I_pV;
				I_p2 = I_pV;
				habr4();
				sbp.c = v_1;
				if (habr5()) {
					I_p1 = sbp.c;
					if (habr5())
						I_p2 = sbp.c;
				}
			}
			function r_postlude() {
				var a_v;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_0, 3);
					if (a_v) {
						sbp.k = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_f("i");
								continue;
							case 2 :
								sbp.s_f("u");
								continue;
							case 3 :
								if (sbp.c >= sbp.l)
									break;
								sbp.c++;
								continue;
						}
					}
					break;
				}
			}
			function r_RV() {
				return I_pV <= sbp.c;
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_step_0() {
				var a_v, v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_1, 16);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								sbp.s_f("a");
								break;
							case 3 :
								sbp.s_f("e");
								break;
							case 4 :
								sbp.s_f("i");
								break;
							case 5 :
								v_1 = sbp.l - sbp.c;
								if (!sbp.e_s_b(2, "ab")) {
									sbp.c = sbp.l - v_1;
									sbp.s_f("i");
								}
								break;
							case 6 :
								sbp.s_f("at");
								break;
							case 7 :
								sbp.s_f("a\u0163i");
								break;
						}
					}
				}
			}
			function r_combo_suffix() {
				var a_v, v_1 = sbp.l - sbp.c;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_2, 46);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R1()) {
						switch (a_v) {
							case 1 :
								sbp.s_f("abil");
								break;
							case 2 :
								sbp.s_f("ibil");
								break;
							case 3 :
								sbp.s_f("iv");
								break;
							case 4 :
								sbp.s_f("ic");
								break;
							case 5 :
								sbp.s_f("at");
								break;
							case 6 :
								sbp.s_f("it");
								break;
						}
						B_standard_suffix_removed = true;
						sbp.c = sbp.l - v_1;
						return true;
					}
				}
				return false;
			}
			function r_standard_suffix() {
				var a_v, v_1;
				B_standard_suffix_removed = false;
				while (true) {
					v_1 = sbp.l - sbp.c;
					if (!r_combo_suffix()) {
						sbp.c = sbp.l - v_1;
						break;
					}
				}
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_3, 62);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R2()) {
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								if (sbp.e_s_b(1, "\u0163")) {
									sbp.b = sbp.c;
									sbp.s_f("t");
								}
								break;
							case 3 :
								sbp.s_f("ist");
								break;
						}
						B_standard_suffix_removed = true;
					}
				}
			}
			function r_verb_suffix() {
				var a_v, v_1, v_2;
				if (sbp.c >= I_pV) {
					v_1 = sbp.lb;
					sbp.lb = I_pV;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_4, 94);
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								v_2 = sbp.l - sbp.c;
								if (!sbp.o_g_b(g_v, 97, 259)) {
									sbp.c = sbp.l - v_2;
									if (!sbp.e_s_b(1, "u"))
										break;
								}
							case 2 :
								sbp.s_d();
								break;
						}
					}
					sbp.lb = v_1;
				}
			}
			function r_vowel_suffix() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_5, 5);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_RV() && a_v == 1)
						sbp.s_d();
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_prelude();
				sbp.c = v_1;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_step_0();
				sbp.c = sbp.l;
				r_standard_suffix();
				sbp.c = sbp.l;
				if (!B_standard_suffix_removed) {
					sbp.c = sbp.l;
					r_verb_suffix();
					sbp.c = sbp.l;
				}
				r_vowel_suffix();
				sbp.c = sbp.lb;
				r_postlude();
				return true;
			}
		},
		RussianStemmer : function() {
			var a_0 = [new Among("\u0432", -1, 1),
					new Among("\u0438\u0432", 0, 2),
					new Among("\u044B\u0432", 0, 2),
					new Among("\u0432\u0448\u0438", -1, 1),
					new Among("\u0438\u0432\u0448\u0438", 3, 2),
					new Among("\u044B\u0432\u0448\u0438", 3, 2),
					new Among("\u0432\u0448\u0438\u0441\u044C", -1, 1),
					new Among("\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2),
					new Among("\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2)], a_1 = [
					new Among("\u0435\u0435", -1, 1),
					new Among("\u0438\u0435", -1, 1),
					new Among("\u043E\u0435", -1, 1),
					new Among("\u044B\u0435", -1, 1),
					new Among("\u0438\u043C\u0438", -1, 1),
					new Among("\u044B\u043C\u0438", -1, 1),
					new Among("\u0435\u0439", -1, 1),
					new Among("\u0438\u0439", -1, 1),
					new Among("\u043E\u0439", -1, 1),
					new Among("\u044B\u0439", -1, 1),
					new Among("\u0435\u043C", -1, 1),
					new Among("\u0438\u043C", -1, 1),
					new Among("\u043E\u043C", -1, 1),
					new Among("\u044B\u043C", -1, 1),
					new Among("\u0435\u0433\u043E", -1, 1),
					new Among("\u043E\u0433\u043E", -1, 1),
					new Among("\u0435\u043C\u0443", -1, 1),
					new Among("\u043E\u043C\u0443", -1, 1),
					new Among("\u0438\u0445", -1, 1),
					new Among("\u044B\u0445", -1, 1),
					new Among("\u0435\u044E", -1, 1),
					new Among("\u043E\u044E", -1, 1),
					new Among("\u0443\u044E", -1, 1),
					new Among("\u044E\u044E", -1, 1),
					new Among("\u0430\u044F", -1, 1),
					new Among("\u044F\u044F", -1, 1)], a_2 = [
					new Among("\u0435\u043C", -1, 1),
					new Among("\u043D\u043D", -1, 1),
					new Among("\u0432\u0448", -1, 1),
					new Among("\u0438\u0432\u0448", 2, 2),
					new Among("\u044B\u0432\u0448", 2, 2),
					new Among("\u0449", -1, 1),
					new Among("\u044E\u0449", 5, 1),
					new Among("\u0443\u044E\u0449", 6, 2)], a_3 = [
					new Among("\u0441\u044C", -1, 1),
					new Among("\u0441\u044F", -1, 1)], a_4 = [
					new Among("\u043B\u0430", -1, 1),
					new Among("\u0438\u043B\u0430", 0, 2),
					new Among("\u044B\u043B\u0430", 0, 2),
					new Among("\u043D\u0430", -1, 1),
					new Among("\u0435\u043D\u0430", 3, 2),
					new Among("\u0435\u0442\u0435", -1, 1),
					new Among("\u0438\u0442\u0435", -1, 2),
					new Among("\u0439\u0442\u0435", -1, 1),
					new Among("\u0435\u0439\u0442\u0435", 7, 2),
					new Among("\u0443\u0439\u0442\u0435", 7, 2),
					new Among("\u043B\u0438", -1, 1),
					new Among("\u0438\u043B\u0438", 10, 2),
					new Among("\u044B\u043B\u0438", 10, 2),
					new Among("\u0439", -1, 1),
					new Among("\u0435\u0439", 13, 2),
					new Among("\u0443\u0439", 13, 2),
					new Among("\u043B", -1, 1),
					new Among("\u0438\u043B", 16, 2),
					new Among("\u044B\u043B", 16, 2),
					new Among("\u0435\u043C", -1, 1),
					new Among("\u0438\u043C", -1, 2),
					new Among("\u044B\u043C", -1, 2),
					new Among("\u043D", -1, 1),
					new Among("\u0435\u043D", 22, 2),
					new Among("\u043B\u043E", -1, 1),
					new Among("\u0438\u043B\u043E", 24, 2),
					new Among("\u044B\u043B\u043E", 24, 2),
					new Among("\u043D\u043E", -1, 1),
					new Among("\u0435\u043D\u043E", 27, 2),
					new Among("\u043D\u043D\u043E", 27, 1),
					new Among("\u0435\u0442", -1, 1),
					new Among("\u0443\u0435\u0442", 30, 2),
					new Among("\u0438\u0442", -1, 2),
					new Among("\u044B\u0442", -1, 2),
					new Among("\u044E\u0442", -1, 1),
					new Among("\u0443\u044E\u0442", 34, 2),
					new Among("\u044F\u0442", -1, 2),
					new Among("\u043D\u044B", -1, 1),
					new Among("\u0435\u043D\u044B", 37, 2),
					new Among("\u0442\u044C", -1, 1),
					new Among("\u0438\u0442\u044C", 39, 2),
					new Among("\u044B\u0442\u044C", 39, 2),
					new Among("\u0435\u0448\u044C", -1, 1),
					new Among("\u0438\u0448\u044C", -1, 2),
					new Among("\u044E", -1, 2),
					new Among("\u0443\u044E", 44, 2)], a_5 = [
					new Among("\u0430", -1, 1),
					new Among("\u0435\u0432", -1, 1),
					new Among("\u043E\u0432", -1, 1),
					new Among("\u0435", -1, 1),
					new Among("\u0438\u0435", 3, 1),
					new Among("\u044C\u0435", 3, 1),
					new Among("\u0438", -1, 1),
					new Among("\u0435\u0438", 6, 1),
					new Among("\u0438\u0438", 6, 1),
					new Among("\u0430\u043C\u0438", 6, 1),
					new Among("\u044F\u043C\u0438", 6, 1),
					new Among("\u0438\u044F\u043C\u0438", 10, 1),
					new Among("\u0439", -1, 1),
					new Among("\u0435\u0439", 12, 1),
					new Among("\u0438\u0435\u0439", 13, 1),
					new Among("\u0438\u0439", 12, 1),
					new Among("\u043E\u0439", 12, 1),
					new Among("\u0430\u043C", -1, 1),
					new Among("\u0435\u043C", -1, 1),
					new Among("\u0438\u0435\u043C", 18, 1),
					new Among("\u043E\u043C", -1, 1),
					new Among("\u044F\u043C", -1, 1),
					new Among("\u0438\u044F\u043C", 21, 1),
					new Among("\u043E", -1, 1), new Among("\u0443", -1, 1),
					new Among("\u0430\u0445", -1, 1),
					new Among("\u044F\u0445", -1, 1),
					new Among("\u0438\u044F\u0445", 26, 1),
					new Among("\u044B", -1, 1), new Among("\u044C", -1, 1),
					new Among("\u044E", -1, 1),
					new Among("\u0438\u044E", 30, 1),
					new Among("\u044C\u044E", 30, 1),
					new Among("\u044F", -1, 1),
					new Among("\u0438\u044F", 33, 1),
					new Among("\u044C\u044F", 33, 1)], a_6 = [
					new Among("\u043E\u0441\u0442", -1, 1),
					new Among("\u043E\u0441\u0442\u044C", -1, 1)], a_7 = [
					new Among("\u0435\u0439\u0448\u0435", -1, 1),
					new Among("\u043D", -1, 2),
					new Among("\u0435\u0439\u0448", -1, 1),
					new Among("\u044C", -1, 3)], g_v = [33, 65, 8, 232], I_p2, I_pV, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function habr3() {
				while (!sbp.i_g(g_v, 1072, 1103)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				return true;
			}
			function habr4() {
				while (!sbp.o_g(g_v, 1072, 1103)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				return true;
			}
			function r_mark_regions() {
				I_pV = sbp.l;
				I_p2 = I_pV;
				if (habr3()) {
					I_pV = sbp.c;
					if (habr4())
						if (habr3())
							if (habr4())
								I_p2 = sbp.c;
				}
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function habr2(a, n) {
				var a_v, v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a, n);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							v_1 = sbp.l - sbp.c;
							if (!sbp.e_s_b(1, "\u0430")) {
								sbp.c = sbp.l - v_1;
								if (!sbp.e_s_b(1, "\u044F"))
									return false;
							}
						case 2 :
							sbp.s_d();
							break;
					}
					return true;
				}
				return false;
			}
			function r_perfective_gerund() {
				return habr2(a_0, 9);
			}
			function habr1(a, n) {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a, n);
				if (a_v) {
					sbp.b = sbp.c;
					if (a_v == 1)
						sbp.s_d();
					return true;
				}
				return false;
			}
			function r_adjective() {
				return habr1(a_1, 26);
			}
			function r_adjectival() {
				var a_v;
				if (r_adjective()) {
					habr2(a_2, 8);
					return true;
				}
				return false;
			}
			function r_reflexive() {
				return habr1(a_3, 2);
			}
			function r_verb() {
				return habr2(a_4, 46);
			}
			function r_noun() {
				habr1(a_5, 36);
			}
			function r_derivational() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_6, 2);
				if (a_v) {
					sbp.b = sbp.c;
					if (r_R2() && a_v == 1)
						sbp.s_d();
				}
			}
			function r_tidy_up() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_7, 4);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							sbp.s_d();
							sbp.k = sbp.c;
							if (!sbp.e_s_b(1, "\u043D"))
								break;
							sbp.b = sbp.c;
						case 2 :
							if (!sbp.e_s_b(1, "\u043D"))
								break;
						case 3 :
							sbp.s_d();
							break;
					}
				}
			}
			this.stem = function() {
				r_mark_regions();
				sbp.c = sbp.l;
				if (sbp.c < I_pV)
					return false;
				sbp.lb = I_pV;
				if (!r_perfective_gerund()) {
					sbp.c = sbp.l;
					if (!r_reflexive())
						sbp.c = sbp.l;
					if (!r_adjectival()) {
						sbp.c = sbp.l;
						if (!r_verb()) {
							sbp.c = sbp.l;
							r_noun();
						}
					}
				}
				sbp.c = sbp.l;
				sbp.k = sbp.c;
				if (sbp.e_s_b(1, "\u0438")) {
					sbp.b = sbp.c;
					sbp.s_d();
				} else
					sbp.c = sbp.l;
				r_derivational();
				sbp.c = sbp.l;
				r_tidy_up();
				return true;
			}
		},
		SpanishStemmer : function() {
			var a_0 = [new Among("", -1, 6), new Among("\u00E1", 0, 1),
					new Among("\u00E9", 0, 2), new Among("\u00ED", 0, 3),
					new Among("\u00F3", 0, 4), new Among("\u00FA", 0, 5)], a_1 = [
					new Among("la", -1, -1), new Among("sela", 0, -1),
					new Among("le", -1, -1), new Among("me", -1, -1),
					new Among("se", -1, -1), new Among("lo", -1, -1),
					new Among("selo", 5, -1), new Among("las", -1, -1),
					new Among("selas", 7, -1), new Among("les", -1, -1),
					new Among("los", -1, -1), new Among("selos", 10, -1),
					new Among("nos", -1, -1)], a_2 = [new Among("ando", -1, 6),
					new Among("iendo", -1, 6), new Among("yendo", -1, 7),
					new Among("\u00E1ndo", -1, 2),
					new Among("i\u00E9ndo", -1, 1), new Among("ar", -1, 6),
					new Among("er", -1, 6), new Among("ir", -1, 6),
					new Among("\u00E1r", -1, 3), new Among("\u00E9r", -1, 4),
					new Among("\u00EDr", -1, 5)], a_3 = [
					new Among("ic", -1, -1), new Among("ad", -1, -1),
					new Among("os", -1, -1), new Among("iv", -1, 1)], a_4 = [
					new Among("able", -1, 1), new Among("ible", -1, 1),
					new Among("ante", -1, 1)], a_5 = [new Among("ic", -1, 1),
					new Among("abil", -1, 1), new Among("iv", -1, 1)], a_6 = [
					new Among("ica", -1, 1), new Among("ancia", -1, 2),
					new Among("encia", -1, 5), new Among("adora", -1, 2),
					new Among("osa", -1, 1), new Among("ista", -1, 1),
					new Among("iva", -1, 9), new Among("anza", -1, 1),
					new Among("log\u00EDa", -1, 3), new Among("idad", -1, 8),
					new Among("able", -1, 1), new Among("ible", -1, 1),
					new Among("ante", -1, 2), new Among("mente", -1, 7),
					new Among("amente", 13, 6), new Among("aci\u00F3n", -1, 2),
					new Among("uci\u00F3n", -1, 4), new Among("ico", -1, 1),
					new Among("ismo", -1, 1), new Among("oso", -1, 1),
					new Among("amiento", -1, 1), new Among("imiento", -1, 1),
					new Among("ivo", -1, 9), new Among("ador", -1, 2),
					new Among("icas", -1, 1), new Among("ancias", -1, 2),
					new Among("encias", -1, 5), new Among("adoras", -1, 2),
					new Among("osas", -1, 1), new Among("istas", -1, 1),
					new Among("ivas", -1, 9), new Among("anzas", -1, 1),
					new Among("log\u00EDas", -1, 3),
					new Among("idades", -1, 8), new Among("ables", -1, 1),
					new Among("ibles", -1, 1), new Among("aciones", -1, 2),
					new Among("uciones", -1, 4), new Among("adores", -1, 2),
					new Among("antes", -1, 2), new Among("icos", -1, 1),
					new Among("ismos", -1, 1), new Among("osos", -1, 1),
					new Among("amientos", -1, 1), new Among("imientos", -1, 1),
					new Among("ivos", -1, 9)], a_7 = [new Among("ya", -1, 1),
					new Among("ye", -1, 1), new Among("yan", -1, 1),
					new Among("yen", -1, 1), new Among("yeron", -1, 1),
					new Among("yendo", -1, 1), new Among("yo", -1, 1),
					new Among("yas", -1, 1), new Among("yes", -1, 1),
					new Among("yais", -1, 1), new Among("yamos", -1, 1),
					new Among("y\u00F3", -1, 1)], a_8 = [
					new Among("aba", -1, 2), new Among("ada", -1, 2),
					new Among("ida", -1, 2), new Among("ara", -1, 2),
					new Among("iera", -1, 2), new Among("\u00EDa", -1, 2),
					new Among("ar\u00EDa", 5, 2), new Among("er\u00EDa", 5, 2),
					new Among("ir\u00EDa", 5, 2), new Among("ad", -1, 2),
					new Among("ed", -1, 2), new Among("id", -1, 2),
					new Among("ase", -1, 2), new Among("iese", -1, 2),
					new Among("aste", -1, 2), new Among("iste", -1, 2),
					new Among("an", -1, 2), new Among("aban", 16, 2),
					new Among("aran", 16, 2), new Among("ieran", 16, 2),
					new Among("\u00EDan", 16, 2),
					new Among("ar\u00EDan", 20, 2),
					new Among("er\u00EDan", 20, 2),
					new Among("ir\u00EDan", 20, 2), new Among("en", -1, 1),
					new Among("asen", 24, 2), new Among("iesen", 24, 2),
					new Among("aron", -1, 2), new Among("ieron", -1, 2),
					new Among("ar\u00E1n", -1, 2),
					new Among("er\u00E1n", -1, 2),
					new Among("ir\u00E1n", -1, 2), new Among("ado", -1, 2),
					new Among("ido", -1, 2), new Among("ando", -1, 2),
					new Among("iendo", -1, 2), new Among("ar", -1, 2),
					new Among("er", -1, 2), new Among("ir", -1, 2),
					new Among("as", -1, 2), new Among("abas", 39, 2),
					new Among("adas", 39, 2), new Among("idas", 39, 2),
					new Among("aras", 39, 2), new Among("ieras", 39, 2),
					new Among("\u00EDas", 39, 2),
					new Among("ar\u00EDas", 45, 2),
					new Among("er\u00EDas", 45, 2),
					new Among("ir\u00EDas", 45, 2), new Among("es", -1, 1),
					new Among("ases", 49, 2), new Among("ieses", 49, 2),
					new Among("abais", -1, 2), new Among("arais", -1, 2),
					new Among("ierais", -1, 2), new Among("\u00EDais", -1, 2),
					new Among("ar\u00EDais", 55, 2),
					new Among("er\u00EDais", 55, 2),
					new Among("ir\u00EDais", 55, 2), new Among("aseis", -1, 2),
					new Among("ieseis", -1, 2), new Among("asteis", -1, 2),
					new Among("isteis", -1, 2), new Among("\u00E1is", -1, 2),
					new Among("\u00E9is", -1, 1),
					new Among("ar\u00E9is", 64, 2),
					new Among("er\u00E9is", 64, 2),
					new Among("ir\u00E9is", 64, 2), new Among("ados", -1, 2),
					new Among("idos", -1, 2), new Among("amos", -1, 2),
					new Among("\u00E1bamos", 70, 2),
					new Among("\u00E1ramos", 70, 2),
					new Among("i\u00E9ramos", 70, 2),
					new Among("\u00EDamos", 70, 2),
					new Among("ar\u00EDamos", 74, 2),
					new Among("er\u00EDamos", 74, 2),
					new Among("ir\u00EDamos", 74, 2), new Among("emos", -1, 1),
					new Among("aremos", 78, 2), new Among("eremos", 78, 2),
					new Among("iremos", 78, 2),
					new Among("\u00E1semos", 78, 2),
					new Among("i\u00E9semos", 78, 2), new Among("imos", -1, 2),
					new Among("ar\u00E1s", -1, 2),
					new Among("er\u00E1s", -1, 2),
					new Among("ir\u00E1s", -1, 2), new Among("\u00EDs", -1, 2),
					new Among("ar\u00E1", -1, 2), new Among("er\u00E1", -1, 2),
					new Among("ir\u00E1", -1, 2), new Among("ar\u00E9", -1, 2),
					new Among("er\u00E9", -1, 2), new Among("ir\u00E9", -1, 2),
					new Among("i\u00F3", -1, 2)], a_9 = [new Among("a", -1, 1),
					new Among("e", -1, 2), new Among("o", -1, 1),
					new Among("os", -1, 1), new Among("\u00E1", -1, 1),
					new Among("\u00E9", -1, 2), new Among("\u00ED", -1, 1),
					new Among("\u00F3", -1, 1)], g_v = [17, 65, 16, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10], I_p2, I_p1, I_pV, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function habr1() {
				if (sbp.o_g(g_v, 97, 252)) {
					while (!sbp.i_g(g_v, 97, 252)) {
						if (sbp.c >= sbp.l)
							return true;
						sbp.c++;
					}
					return false;
				}
				return true;
			}
			function habr2() {
				if (sbp.i_g(g_v, 97, 252)) {
					var v_1 = sbp.c;
					if (habr1()) {
						sbp.c = v_1;
						if (!sbp.i_g(g_v, 97, 252))
							return true;
						while (!sbp.o_g(g_v, 97, 252)) {
							if (sbp.c >= sbp.l)
								return true;
							sbp.c++;
						}
					}
					return false;
				}
				return true;
			}
			function habr3() {
				var v_1 = sbp.c, v_2;
				if (habr2()) {
					sbp.c = v_1;
					if (!sbp.o_g(g_v, 97, 252))
						return;
					v_2 = sbp.c;
					if (habr1()) {
						sbp.c = v_2;
						if (!sbp.i_g(g_v, 97, 252) || sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
				}
				I_pV = sbp.c;
			}
			function habr4() {
				while (!sbp.i_g(g_v, 97, 252)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				while (!sbp.o_g(g_v, 97, 252)) {
					if (sbp.c >= sbp.l)
						return false;
					sbp.c++;
				}
				return true;
			}
			function r_mark_regions() {
				var v_1 = sbp.c;
				I_pV = sbp.l;
				I_p1 = I_pV;
				I_p2 = I_pV;
				habr3();
				sbp.c = v_1;
				if (habr4()) {
					I_p1 = sbp.c;
					if (habr4())
						I_p2 = sbp.c;
				}
			}
			function r_postlude() {
				var a_v;
				while (true) {
					sbp.b = sbp.c;
					a_v = sbp.f_a(a_0, 6);
					if (a_v) {
						sbp.k = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_f("a");
								continue;
							case 2 :
								sbp.s_f("e");
								continue;
							case 3 :
								sbp.s_f("i");
								continue;
							case 4 :
								sbp.s_f("o");
								continue;
							case 5 :
								sbp.s_f("u");
								continue;
							case 6 :
								if (sbp.c >= sbp.l)
									break;
								sbp.c++;
								continue;
						}
					}
					break;
				}
			}
			function r_RV() {
				return I_pV <= sbp.c;
			}
			function r_R1() {
				return I_p1 <= sbp.c;
			}
			function r_R2() {
				return I_p2 <= sbp.c;
			}
			function r_attached_pronoun() {
				var a_v;
				sbp.k = sbp.c;
				if (sbp.f_a_b(a_1, 13)) {
					sbp.b = sbp.c;
					a_v = sbp.f_a_b(a_2, 11);
					if (a_v && r_RV())
						switch (a_v) {
							case 1 :
								sbp.b = sbp.c;
								sbp.s_f("iendo");
								break;
							case 2 :
								sbp.b = sbp.c;
								sbp.s_f("ando");
								break;
							case 3 :
								sbp.b = sbp.c;
								sbp.s_f("ar");
								break;
							case 4 :
								sbp.b = sbp.c;
								sbp.s_f("er");
								break;
							case 5 :
								sbp.b = sbp.c;
								sbp.s_f("ir");
								break;
							case 6 :
								sbp.s_d();
								break;
							case 7 :
								if (sbp.e_s_b(1, "u"))
									sbp.s_d();
								break;
						}
				}
			}
			function habr5(a, n) {
				if (!r_R2())
					return true;
				sbp.s_d();
				sbp.k = sbp.c;
				var a_v = sbp.f_a_b(a, n);
				if (a_v) {
					sbp.b = sbp.c;
					if (a_v == 1 && r_R2())
						sbp.s_d();
				}
				return false;
			}
			function habr6(c1) {
				if (!r_R2())
					return true;
				sbp.s_d();
				sbp.k = sbp.c;
				if (sbp.e_s_b(2, c1)) {
					sbp.b = sbp.c;
					if (r_R2())
						sbp.s_d();
				}
				return false;
			}
			function r_standard_suffix() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_6, 46);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							if (!r_R2())
								return false;
							sbp.s_d();
							break;
						case 2 :
							if (habr6("ic"))
								return false;
							break;
						case 3 :
							if (!r_R2())
								return false;
							sbp.s_f("log");
							break;
						case 4 :
							if (!r_R2())
								return false;
							sbp.s_f("u");
							break;
						case 5 :
							if (!r_R2())
								return false;
							sbp.s_f("ente");
							break;
						case 6 :
							if (!r_R1())
								return false;
							sbp.s_d();
							sbp.k = sbp.c;
							a_v = sbp.f_a_b(a_3, 4);
							if (a_v) {
								sbp.b = sbp.c;
								if (r_R2()) {
									sbp.s_d();
									if (a_v == 1) {
										sbp.k = sbp.c;
										if (sbp.e_s_b(2, "at")) {
											sbp.b = sbp.c;
											if (r_R2())
												sbp.s_d();
										}
									}
								}
							}
							break;
						case 7 :
							if (habr5(a_4, 3))
								return false;
							break;
						case 8 :
							if (habr5(a_5, 3))
								return false;
							break;
						case 9 :
							if (habr6("at"))
								return false;
							break;
					}
					return true;
				}
				return false;
			}
			function r_y_verb_suffix() {
				var a_v, v_1;
				if (sbp.c >= I_pV) {
					v_1 = sbp.lb;
					sbp.lb = I_pV;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_7, 12);
					sbp.lb = v_1;
					if (a_v) {
						sbp.b = sbp.c;
						if (a_v == 1) {
							if (!sbp.e_s_b(1, "u"))
								return false;
							sbp.s_d();
						}
						return true;
					}
				}
				return false;
			}
			function r_verb_suffix() {
				var a_v, v_1, v_2, v_3;
				if (sbp.c >= I_pV) {
					v_1 = sbp.lb;
					sbp.lb = I_pV;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_8, 96);
					sbp.lb = v_1;
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								v_2 = sbp.l - sbp.c;
								if (sbp.e_s_b(1, "u")) {
									v_3 = sbp.l - sbp.c;
									if (sbp.e_s_b(1, "g"))
										sbp.c = sbp.l - v_3;
									else
										sbp.c = sbp.l - v_2;
								} else
									sbp.c = sbp.l - v_2;
								sbp.b = sbp.c;
							case 2 :
								sbp.s_d();
								break;
						}
					}
				}
			}
			function r_residual_suffix() {
				var a_v, v_1;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_9, 8);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							if (r_RV())
								sbp.s_d();
							break;
						case 2 :
							if (r_RV()) {
								sbp.s_d();
								sbp.k = sbp.c;
								if (sbp.e_s_b(1, "u")) {
									sbp.b = sbp.c;
									v_1 = sbp.l - sbp.c;
									if (sbp.e_s_b(1, "g")) {
										sbp.c = sbp.l - v_1;
										if (r_RV())
											sbp.s_d();
									}
								}
							}
							break;
					}
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_attached_pronoun();
				sbp.c = sbp.l;
				if (!r_standard_suffix()) {
					sbp.c = sbp.l;
					if (!r_y_verb_suffix()) {
						sbp.c = sbp.l;
						r_verb_suffix();
					}
				}
				sbp.c = sbp.l;
				r_residual_suffix();
				sbp.c = sbp.lb;
				r_postlude();
				return true;
			}
		},
		SwedishStemmer : function() {
			var a_0 = [new Among("a", -1, 1), new Among("arna", 0, 1),
					new Among("erna", 0, 1), new Among("heterna", 2, 1),
					new Among("orna", 0, 1), new Among("ad", -1, 1),
					new Among("e", -1, 1), new Among("ade", 6, 1),
					new Among("ande", 6, 1), new Among("arne", 6, 1),
					new Among("are", 6, 1), new Among("aste", 6, 1),
					new Among("en", -1, 1), new Among("anden", 12, 1),
					new Among("aren", 12, 1), new Among("heten", 12, 1),
					new Among("ern", -1, 1), new Among("ar", -1, 1),
					new Among("er", -1, 1), new Among("heter", 18, 1),
					new Among("or", -1, 1), new Among("s", -1, 2),
					new Among("as", 21, 1), new Among("arnas", 22, 1),
					new Among("ernas", 22, 1), new Among("ornas", 22, 1),
					new Among("es", 21, 1), new Among("ades", 26, 1),
					new Among("andes", 26, 1), new Among("ens", 21, 1),
					new Among("arens", 29, 1), new Among("hetens", 29, 1),
					new Among("erns", 21, 1), new Among("at", -1, 1),
					new Among("andet", -1, 1), new Among("het", -1, 1),
					new Among("ast", -1, 1)], a_1 = [new Among("dd", -1, -1),
					new Among("gd", -1, -1), new Among("nn", -1, -1),
					new Among("dt", -1, -1), new Among("gt", -1, -1),
					new Among("kt", -1, -1), new Among("tt", -1, -1)], a_2 = [
					new Among("ig", -1, 1), new Among("lig", 0, 1),
					new Among("els", -1, 1), new Among("fullt", -1, 3),
					new Among("l\u00F6st", -1, 2)], g_v = [17, 65, 16, 1, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32], g_s_ending = [
					119, 127, 149], I_x, I_p1, sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function r_mark_regions() {
				var v_1, c = sbp.c + 3;
				I_p1 = sbp.l;
				if (0 <= c || c <= sbp.l) {
					I_x = c;
					while (true) {
						v_1 = sbp.c;
						if (sbp.i_g(g_v, 97, 246)) {
							sbp.c = v_1;
							break;
						}
						sbp.c = v_1;
						if (sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
					while (!sbp.o_g(g_v, 97, 246)) {
						if (sbp.c >= sbp.l)
							return;
						sbp.c++;
					}
					I_p1 = sbp.c;
					if (I_p1 < I_x)
						I_p1 = I_x;
				}
			}
			function r_main_suffix() {
				var a_v, v_2 = sbp.lb;
				if (sbp.c >= I_p1) {
					sbp.lb = I_p1;
					sbp.c = sbp.l;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_0, 37);
					sbp.lb = v_2;
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								if (sbp.i_g_b(g_s_ending, 98, 121))
									sbp.s_d();
								break;
						}
					}
				}
			}
			function r_consonant_pair() {
				var v_1 = sbp.lb;
				if (sbp.c >= I_p1) {
					sbp.lb = I_p1;
					sbp.c = sbp.l;
					if (sbp.f_a_b(a_1, 7)) {
						sbp.c = sbp.l;
						sbp.k = sbp.c;
						if (sbp.c > sbp.lb) {
							sbp.b = --sbp.c;
							sbp.s_d();
						}
					}
					sbp.lb = v_1;
				}
			}
			function r_other_suffix() {
				var a_v, v_2;
				if (sbp.c >= I_p1) {
					v_2 = sbp.lb;
					sbp.lb = I_p1;
					sbp.c = sbp.l;
					sbp.k = sbp.c;
					a_v = sbp.f_a_b(a_2, 5);
					if (a_v) {
						sbp.b = sbp.c;
						switch (a_v) {
							case 1 :
								sbp.s_d();
								break;
							case 2 :
								sbp.s_f("l\u00F6s");
								break;
							case 3 :
								sbp.s_f("full");
								break;
						}
					}
					sbp.lb = v_2;
				}
			}
			this.stem = function() {
				var v_1 = sbp.c;
				r_mark_regions();
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_main_suffix();
				sbp.c = sbp.l;
				r_consonant_pair();
				sbp.c = sbp.l;
				r_other_suffix();
				return true;
			}
		},
		TurkishStemmer : function() {
			var a_0 = [new Among("m", -1, -1), new Among("n", -1, -1),
					new Among("miz", -1, -1), new Among("niz", -1, -1),
					new Among("muz", -1, -1), new Among("nuz", -1, -1),
					new Among("m\u00FCz", -1, -1),
					new Among("n\u00FCz", -1, -1),
					new Among("m\u0131z", -1, -1),
					new Among("n\u0131z", -1, -1)], a_1 = [
					new Among("leri", -1, -1), new Among("lar\u0131", -1, -1)], a_2 = [
					new Among("ni", -1, -1), new Among("nu", -1, -1),
					new Among("n\u00FC", -1, -1), new Among("n\u0131", -1, -1)], a_3 = [
					new Among("in", -1, -1), new Among("un", -1, -1),
					new Among("\u00FCn", -1, -1), new Among("\u0131n", -1, -1)], a_4 = [
					new Among("a", -1, -1), new Among("e", -1, -1)], a_5 = [
					new Among("na", -1, -1), new Among("ne", -1, -1)], a_6 = [
					new Among("da", -1, -1), new Among("ta", -1, -1),
					new Among("de", -1, -1), new Among("te", -1, -1)], a_7 = [
					new Among("nda", -1, -1), new Among("nde", -1, -1)], a_8 = [
					new Among("dan", -1, -1), new Among("tan", -1, -1),
					new Among("den", -1, -1), new Among("ten", -1, -1)], a_9 = [
					new Among("ndan", -1, -1), new Among("nden", -1, -1)], a_10 = [
					new Among("la", -1, -1), new Among("le", -1, -1)], a_11 = [
					new Among("ca", -1, -1), new Among("ce", -1, -1)], a_12 = [
					new Among("im", -1, -1), new Among("um", -1, -1),
					new Among("\u00FCm", -1, -1), new Among("\u0131m", -1, -1)], a_13 = [
					new Among("sin", -1, -1), new Among("sun", -1, -1),
					new Among("s\u00FCn", -1, -1),
					new Among("s\u0131n", -1, -1)], a_14 = [
					new Among("iz", -1, -1), new Among("uz", -1, -1),
					new Among("\u00FCz", -1, -1), new Among("\u0131z", -1, -1)], a_15 = [
					new Among("siniz", -1, -1), new Among("sunuz", -1, -1),
					new Among("s\u00FCn\u00FCz", -1, -1),
					new Among("s\u0131n\u0131z", -1, -1)], a_16 = [
					new Among("lar", -1, -1), new Among("ler", -1, -1)], a_17 = [
					new Among("niz", -1, -1), new Among("nuz", -1, -1),
					new Among("n\u00FCz", -1, -1),
					new Among("n\u0131z", -1, -1)], a_18 = [
					new Among("dir", -1, -1), new Among("tir", -1, -1),
					new Among("dur", -1, -1), new Among("tur", -1, -1),
					new Among("d\u00FCr", -1, -1),
					new Among("t\u00FCr", -1, -1),
					new Among("d\u0131r", -1, -1),
					new Among("t\u0131r", -1, -1)], a_19 = [
					new Among("cas\u0131na", -1, -1),
					new Among("cesine", -1, -1)], a_20 = [
					new Among("di", -1, -1), new Among("ti", -1, -1),
					new Among("dik", -1, -1), new Among("tik", -1, -1),
					new Among("duk", -1, -1), new Among("tuk", -1, -1),
					new Among("d\u00FCk", -1, -1),
					new Among("t\u00FCk", -1, -1),
					new Among("d\u0131k", -1, -1),
					new Among("t\u0131k", -1, -1), new Among("dim", -1, -1),
					new Among("tim", -1, -1), new Among("dum", -1, -1),
					new Among("tum", -1, -1), new Among("d\u00FCm", -1, -1),
					new Among("t\u00FCm", -1, -1),
					new Among("d\u0131m", -1, -1),
					new Among("t\u0131m", -1, -1), new Among("din", -1, -1),
					new Among("tin", -1, -1), new Among("dun", -1, -1),
					new Among("tun", -1, -1), new Among("d\u00FCn", -1, -1),
					new Among("t\u00FCn", -1, -1),
					new Among("d\u0131n", -1, -1),
					new Among("t\u0131n", -1, -1), new Among("du", -1, -1),
					new Among("tu", -1, -1), new Among("d\u00FC", -1, -1),
					new Among("t\u00FC", -1, -1), new Among("d\u0131", -1, -1),
					new Among("t\u0131", -1, -1)], a_21 = [
					new Among("sa", -1, -1), new Among("se", -1, -1),
					new Among("sak", -1, -1), new Among("sek", -1, -1),
					new Among("sam", -1, -1), new Among("sem", -1, -1),
					new Among("san", -1, -1), new Among("sen", -1, -1)], a_22 = [
					new Among("mi\u015F", -1, -1),
					new Among("mu\u015F", -1, -1),
					new Among("m\u00FC\u015F", -1, -1),
					new Among("m\u0131\u015F", -1, -1)], a_23 = [
					new Among("b", -1, 1), new Among("c", -1, 2),
					new Among("d", -1, 3), new Among("\u011F", -1, 4)], g_vowel = [
					17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					32, 8, 0, 0, 0, 0, 0, 0, 1], g_U = [1, 16, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1], g_vowel1 = [
					1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 1], g_vowel2 = [17, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130], g_vowel3 = [1, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 1], g_vowel4 = [17], g_vowel5 = [65], g_vowel6 = [65], B_c_s_n_s, I_strlen, g_habr = [
					["a", g_vowel1, 97, 305], ["e", g_vowel2, 101, 252],
					["\u0131", g_vowel3, 97, 305], ["i", g_vowel4, 101, 105],
					["o", g_vowel5, 111, 117], ["\u00F6", g_vowel6, 246, 252],
					["u", g_vowel5, 111, 117]], sbp = new SnowballProgram();
			this.setCurrent = function(word) {
				sbp.s_c(word);
			};
			this.getCurrent = function() {
				return sbp.g_c();
			};
			function habr1(g_v, n1, n2) {
				while (true) {
					var v_1 = sbp.l - sbp.c;
					if (sbp.i_g_b(g_v, n1, n2)) {
						sbp.c = sbp.l - v_1;
						break;
					}
					sbp.c = sbp.l - v_1;
					if (sbp.c <= sbp.lb)
						return false;
					sbp.c--;
				}
				return true;
			}
			function r_check_vowel_harmony() {
				var v_1, v_2;
				v_1 = sbp.l - sbp.c;
				habr1(g_vowel, 97, 305);
				for (var i = 0; i < g_habr.length; i++) {
					v_2 = sbp.l - sbp.c;
					var habr = g_habr[i];
					if (sbp.e_s_b(1, habr[0])
							&& habr1(habr[1], habr[2], habr[3])) {
						sbp.c = sbp.l - v_1;
						return true;
					}
					sbp.c = sbp.l - v_2;
				}
				sbp.c = sbp.l - v_2;
				if (!sbp.e_s_b(1, "\u00FC") || !habr1(g_vowel6, 246, 252))
					return false;
				sbp.c = sbp.l - v_1;
				return true;
			}
			function habr2(f1, f2) {
				var v_1 = sbp.l - sbp.c, v_2;
				if (f1()) {
					sbp.c = sbp.l - v_1;
					if (sbp.c > sbp.lb) {
						sbp.c--;
						v_2 = sbp.l - sbp.c;
						if (f2()) {
							sbp.c = sbp.l - v_2;
							return true;
						}
					}
				}
				sbp.c = sbp.l - v_1;
				if (f1()) {
					sbp.c = sbp.l - v_1;
					return false;
				}
				sbp.c = sbp.l - v_1;
				if (sbp.c <= sbp.lb)
					return false;
				sbp.c--;
				if (!f2())
					return false;
				sbp.c = sbp.l - v_1;
				return true;
			}
			function habr3(f1) {
				return habr2(f1, function() {
							return sbp.i_g_b(g_vowel, 97, 305);
						});
			}
			function r_mark_suffix_with_optional_n_consonant() {
				return habr3(function() {
							return sbp.e_s_b(1, "n");
						});
			}
			function r_mark_suffix_with_optional_s_consonant() {
				return habr3(function() {
							return sbp.e_s_b(1, "s");
						});
			}
			function r_mark_suffix_with_optional_y_consonant() {
				return habr3(function() {
							return sbp.e_s_b(1, "y");
						});
			}
			function r_mark_suffix_with_optional_U_vowel() {
				return habr2(function() {
							return sbp.i_g_b(g_U, 105, 305);
						}, function() {
							return sbp.o_g_b(g_vowel, 97, 305);
						});
			}
			function r_mark_possessives() {
				return sbp.f_a_b(a_0, 10)
						&& r_mark_suffix_with_optional_U_vowel();
			}
			function r_mark_sU() {
				return r_check_vowel_harmony()
						&& sbp.i_g_b(g_U, 105, 305)
						&& r_mark_suffix_with_optional_s_consonant();
			}
			function r_mark_lArI() {
				return sbp.f_a_b(a_1, 2);
			}
			function r_mark_yU() {
				return r_check_vowel_harmony()
						&& sbp.i_g_b(g_U, 105, 305)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_nU() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_2, 4);
			}
			function r_mark_nUn() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_3, 4)
						&& r_mark_suffix_with_optional_n_consonant();
			}
			function r_mark_yA() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_4, 2)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_nA() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_5, 2);
			}
			function r_mark_DA() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_6, 4);
			}
			function r_mark_ndA() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_7, 2);
			}
			function r_mark_DAn() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_8, 4);
			}
			function r_mark_ndAn() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_9, 2);
			}
			function r_mark_ylA() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_10, 2)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_ki() {
				return sbp.e_s_b(2, "ki");
			}
			function r_mark_ncA() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_11, 2)
						&& r_mark_suffix_with_optional_n_consonant();
			}
			function r_mark_yUm() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_12, 4)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_sUn() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_13, 4);
			}
			function r_mark_yUz() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_14, 4)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_sUnUz() {
				return sbp.f_a_b(a_15, 4);
			}
			function r_mark_lAr() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_16, 2);
			}
			function r_mark_nUz() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_17, 4);
			}
			function r_mark_DUr() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_18, 8);
			}
			function r_mark_cAsInA() {
				return sbp.f_a_b(a_19, 2);
			}
			function r_mark_yDU() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_20, 32)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_ysA() {
				return sbp.f_a_b(a_21, 8)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_ymUs_() {
				return r_check_vowel_harmony() && sbp.f_a_b(a_22, 4)
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function r_mark_yken() {
				return sbp.e_s_b(3, "ken")
						&& r_mark_suffix_with_optional_y_consonant();
			}
			function habr4() {
				var v_1 = sbp.l - sbp.c;
				if (!r_mark_ymUs_()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_yDU()) {
						sbp.c = sbp.l - v_1;
						if (!r_mark_ysA()) {
							sbp.c = sbp.l - v_1;
							if (!r_mark_yken())
								return true;
						}
					}
				}
				return false;
			}
			function habr5() {
				if (r_mark_cAsInA()) {
					var v_1 = sbp.l - sbp.c;
					if (!r_mark_sUnUz()) {
						sbp.c = sbp.l - v_1;
						if (!r_mark_lAr()) {
							sbp.c = sbp.l - v_1;
							if (!r_mark_yUm()) {
								sbp.c = sbp.l - v_1;
								if (!r_mark_sUn()) {
									sbp.c = sbp.l - v_1;
									if (!r_mark_yUz())
										sbp.c = sbp.l - v_1;
								}
							}
						}
					}
					if (r_mark_ymUs_())
						return false;
				}
				return true;
			}
			function habr6() {
				if (r_mark_lAr()) {
					sbp.b = sbp.c;
					sbp.s_d();
					var v_1 = sbp.l - sbp.c;
					sbp.k = sbp.c;
					if (!r_mark_DUr()) {
						sbp.c = sbp.l - v_1;
						if (!r_mark_yDU()) {
							sbp.c = sbp.l - v_1;
							if (!r_mark_ysA()) {
								sbp.c = sbp.l - v_1;
								if (!r_mark_ymUs_())
									sbp.c = sbp.l - v_1;
							}
						}
					}
					B_c_s_n_s = false;
					return false;
				}
				return true;
			}
			function habr7() {
				if (!r_mark_nUz())
					return true;
				var v_1 = sbp.l - sbp.c;
				if (!r_mark_yDU()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_ysA())
						return true;
				}
				return false;
			}
			function habr8() {
				var v_1 = sbp.l - sbp.c, v_2;
				if (!r_mark_sUnUz()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_yUz()) {
						sbp.c = sbp.l - v_1;
						if (!r_mark_sUn()) {
							sbp.c = sbp.l - v_1;
							if (!r_mark_yUm())
								return true;
						}
					}
				}
				sbp.b = sbp.c;
				sbp.s_d();
				v_2 = sbp.l - sbp.c;
				sbp.k = sbp.c;
				if (!r_mark_ymUs_())
					sbp.c = sbp.l - v_2;
				return false;
			}
			function r_stem_nominal_verb_suffixes() {
				var v_1 = sbp.l - sbp.c, v_2;
				sbp.k = sbp.c;
				B_c_s_n_s = true;
				if (habr4()) {
					sbp.c = sbp.l - v_1;
					if (habr5()) {
						sbp.c = sbp.l - v_1;
						if (habr6()) {
							sbp.c = sbp.l - v_1;
							if (habr7()) {
								sbp.c = sbp.l - v_1;
								if (habr8()) {
									sbp.c = sbp.l - v_1;
									if (!r_mark_DUr())
										return;
									sbp.b = sbp.c;
									sbp.s_d();
									sbp.k = sbp.c;
									v_2 = sbp.l - sbp.c;
									if (!r_mark_sUnUz()) {
										sbp.c = sbp.l - v_2;
										if (!r_mark_lAr()) {
											sbp.c = sbp.l - v_2;
											if (!r_mark_yUm()) {
												sbp.c = sbp.l - v_2;
												if (!r_mark_sUn()) {
													sbp.c = sbp.l - v_2;
													if (!r_mark_yUz())
														sbp.c = sbp.l - v_2;
												}
											}
										}
									}
									if (!r_mark_ymUs_())
										sbp.c = sbp.l - v_2;
								}
							}
						}
					}
				}
				sbp.b = sbp.c;
				sbp.s_d();
			}
			function r_stem_suffix_chain_before_ki() {
				var v_1, v_2, v_3, v_4;
				sbp.k = sbp.c;
				if (r_mark_ki()) {
					v_1 = sbp.l - sbp.c;
					if (r_mark_DA()) {
						sbp.b = sbp.c;
						sbp.s_d();
						v_2 = sbp.l - sbp.c;
						sbp.k = sbp.c;
						if (r_mark_lAr()) {
							sbp.b = sbp.c;
							sbp.s_d();
							r_stem_suffix_chain_before_ki();
						} else {
							sbp.c = sbp.l - v_2;
							if (r_mark_possessives()) {
								sbp.b = sbp.c;
								sbp.s_d();
								sbp.k = sbp.c;
								if (r_mark_lAr()) {
									sbp.b = sbp.c;
									sbp.s_d();
									r_stem_suffix_chain_before_ki();
								}
							}
						}
						return true;
					}
					sbp.c = sbp.l - v_1;
					if (r_mark_nUn()) {
						sbp.b = sbp.c;
						sbp.s_d();
						sbp.k = sbp.c;
						v_3 = sbp.l - sbp.c;
						if (r_mark_lArI()) {
							sbp.b = sbp.c;
							sbp.s_d();
						} else {
							sbp.c = sbp.l - v_3;
							sbp.k = sbp.c;
							if (!r_mark_possessives()) {
								sbp.c = sbp.l - v_3;
								if (!r_mark_sU()) {
									sbp.c = sbp.l - v_3;
									if (!r_stem_suffix_chain_before_ki())
										return true;
								}
							}
							sbp.b = sbp.c;
							sbp.s_d();
							sbp.k = sbp.c;
							if (r_mark_lAr()) {
								sbp.b = sbp.c;
								sbp.s_d();
								r_stem_suffix_chain_before_ki()
							}
						}
						return true;
					}
					sbp.c = sbp.l - v_1;
					if (r_mark_ndA()) {
						v_4 = sbp.l - sbp.c;
						if (r_mark_lArI()) {
							sbp.b = sbp.c;
							sbp.s_d();
						} else {
							sbp.c = sbp.l - v_4;
							if (r_mark_sU()) {
								sbp.b = sbp.c;
								sbp.s_d();
								sbp.k = sbp.c;
								if (r_mark_lAr()) {
									sbp.b = sbp.c;
									sbp.s_d();
									r_stem_suffix_chain_before_ki();
								}
							} else {
								sbp.c = sbp.l - v_4;
								if (!r_stem_suffix_chain_before_ki())
									return false;
							}
						}
						return true;
					}
				}
				return false;
			}
			function habr9(v_1) {
				sbp.k = sbp.c;
				if (!r_mark_ndA()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_nA())
						return false;
				}
				var v_2 = sbp.l - sbp.c;
				if (r_mark_lArI()) {
					sbp.b = sbp.c;
					sbp.s_d();
				} else {
					sbp.c = sbp.l - v_2;
					if (r_mark_sU()) {
						sbp.b = sbp.c;
						sbp.s_d();
						sbp.k = sbp.c;
						if (r_mark_lAr()) {
							sbp.b = sbp.c;
							sbp.s_d();
							r_stem_suffix_chain_before_ki();
						}
					} else {
						sbp.c = sbp.l - v_2;
						if (!r_stem_suffix_chain_before_ki())
							return false;
					}
				}
				return true;
			}
			function habr10(v_1) {
				sbp.k = sbp.c;
				if (!r_mark_ndAn()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_nU())
						return false;
				}
				var v_2 = sbp.l - sbp.c;
				if (!r_mark_sU()) {
					sbp.c = sbp.l - v_2;
					if (!r_mark_lArI())
						return false;
				}
				sbp.b = sbp.c;
				sbp.s_d();
				sbp.k = sbp.c;
				if (r_mark_lAr()) {
					sbp.b = sbp.c;
					sbp.s_d();
					r_stem_suffix_chain_before_ki();
				}
				return true;
			}
			function habr11() {
				var v_1 = sbp.l - sbp.c, v_2;
				sbp.k = sbp.c;
				if (!r_mark_nUn()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_ylA())
						return false;
				}
				sbp.b = sbp.c;
				sbp.s_d();
				v_2 = sbp.l - sbp.c;
				sbp.k = sbp.c;
				if (r_mark_lAr()) {
					sbp.b = sbp.c;
					sbp.s_d();
					if (r_stem_suffix_chain_before_ki())
						return true;
				}
				sbp.c = sbp.l - v_2;
				sbp.k = sbp.c;
				if (!r_mark_possessives()) {
					sbp.c = sbp.l - v_2;
					if (!r_mark_sU()) {
						sbp.c = sbp.l - v_2;
						if (!r_stem_suffix_chain_before_ki())
							return true;
					}
				}
				sbp.b = sbp.c;
				sbp.s_d();
				sbp.k = sbp.c;
				if (r_mark_lAr()) {
					sbp.b = sbp.c;
					sbp.s_d();
					r_stem_suffix_chain_before_ki();
				}
				return true;
			}
			function habr12() {
				var v_1 = sbp.l - sbp.c, v_2, v_3;
				sbp.k = sbp.c;
				if (!r_mark_DA()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_yU()) {
						sbp.c = sbp.l - v_1;
						if (!r_mark_yA())
							return false;
					}
				}
				sbp.b = sbp.c;
				sbp.s_d();
				sbp.k = sbp.c;
				v_2 = sbp.l - sbp.c;
				if (r_mark_possessives()) {
					sbp.b = sbp.c;
					sbp.s_d();
					v_3 = sbp.l - sbp.c;
					sbp.k = sbp.c;
					if (!r_mark_lAr())
						sbp.c = sbp.l - v_3;
				} else {
					sbp.c = sbp.l - v_2;
					if (!r_mark_lAr())
						return true;
				}
				sbp.b = sbp.c;
				sbp.s_d();
				sbp.k = sbp.c;
				r_stem_suffix_chain_before_ki();
				return true;
			}
			function r_stem_noun_suffixes() {
				var v_1 = sbp.l - sbp.c, v_2, v_3;
				sbp.k = sbp.c;
				if (r_mark_lAr()) {
					sbp.b = sbp.c;
					sbp.s_d();
					r_stem_suffix_chain_before_ki();
					return;
				}
				sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				if (r_mark_ncA()) {
					sbp.b = sbp.c;
					sbp.s_d();
					v_2 = sbp.l - sbp.c;
					sbp.k = sbp.c;
					if (r_mark_lArI()) {
						sbp.b = sbp.c;
						sbp.s_d();
					} else {
						sbp.c = sbp.l - v_2;
						sbp.k = sbp.c;
						if (!r_mark_possessives()) {
							sbp.c = sbp.l - v_2;
							if (!r_mark_sU()) {
								sbp.c = sbp.l - v_2;
								sbp.k = sbp.c;
								if (!r_mark_lAr())
									return;
								sbp.b = sbp.c;
								sbp.s_d();
								if (!r_stem_suffix_chain_before_ki())
									return;
							}
						}
						sbp.b = sbp.c;
						sbp.s_d();
						sbp.k = sbp.c;
						if (r_mark_lAr()) {
							sbp.b = sbp.c;
							sbp.s_d();
							r_stem_suffix_chain_before_ki();
						}
					}
					return;
				}
				sbp.c = sbp.l - v_1;
				if (habr9(v_1))
					return;
				sbp.c = sbp.l - v_1;
				if (habr10(v_1))
					return;
				sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				if (r_mark_DAn()) {
					sbp.b = sbp.c;
					sbp.s_d();
					sbp.k = sbp.c;
					v_3 = sbp.l - sbp.c;
					if (r_mark_possessives()) {
						sbp.b = sbp.c;
						sbp.s_d();
						sbp.k = sbp.c;
						if (r_mark_lAr()) {
							sbp.b = sbp.c;
							sbp.s_d();
							r_stem_suffix_chain_before_ki();
						}
					} else {
						sbp.c = sbp.l - v_3;
						if (r_mark_lAr()) {
							sbp.b = sbp.c;
							sbp.s_d();
							r_stem_suffix_chain_before_ki();
						} else {
							sbp.c = sbp.l - v_3;
							r_stem_suffix_chain_before_ki();
						}
					}
					return;
				}
				sbp.c = sbp.l - v_1;
				if (habr11())
					return;
				sbp.c = sbp.l - v_1;
				if (r_mark_lArI()) {
					sbp.b = sbp.c;
					sbp.s_d();
					return;
				}
				sbp.c = sbp.l - v_1;
				if (r_stem_suffix_chain_before_ki())
					return;
				sbp.c = sbp.l - v_1;
				if (habr12())
					return;
				sbp.c = sbp.l - v_1;
				sbp.k = sbp.c;
				if (!r_mark_possessives()) {
					sbp.c = sbp.l - v_1;
					if (!r_mark_sU())
						return;
				}
				sbp.b = sbp.c;
				sbp.s_d();
				sbp.k = sbp.c;
				if (r_mark_lAr()) {
					sbp.b = sbp.c;
					sbp.s_d();
					r_stem_suffix_chain_before_ki();
				}
			}
			function r_post_process_last_consonants() {
				var a_v;
				sbp.k = sbp.c;
				a_v = sbp.f_a_b(a_23, 4);
				if (a_v) {
					sbp.b = sbp.c;
					switch (a_v) {
						case 1 :
							sbp.s_f("p");
							break;
						case 2 :
							sbp.s_f("\u00E7");
							break;
						case 3 :
							sbp.s_f("t");
							break;
						case 4 :
							sbp.s_f("k");
							break;
					}
				}
			}
			function habr13() {
				while (true) {
					var v_1 = sbp.l - sbp.c;
					if (sbp.i_g_b(g_vowel, 97, 305)) {
						sbp.c = sbp.l - v_1;
						break;
					}
					sbp.c = sbp.l - v_1;
					if (sbp.c <= sbp.lb)
						return false;
					sbp.c--;
				}
				return true;
			}
			function habr14(v_1, c1, c2) {
				sbp.c = sbp.l - v_1;
				if (habr13()) {
					var v_2 = sbp.l - sbp.c;
					if (!sbp.e_s_b(1, c1)) {
						sbp.c = sbp.l - v_2;
						if (!sbp.e_s_b(1, c2))
							return true;
					}
					sbp.c = sbp.l - v_1;
					var c = sbp.c;
					sbp.i_(sbp.c, sbp.c, c2);
					sbp.c = c;
					return false;
				}
				return true;
			}
			function r_append_U_to_stems_ending_with_d_or_g() {
				var v_1 = sbp.l - sbp.c;
				if (!sbp.e_s_b(1, "d")) {
					sbp.c = sbp.l - v_1;
					if (!sbp.e_s_b(1, "g"))
						return;
				}
				if (habr14(v_1, "a", "\u0131"))
					if (habr14(v_1, "e", "i"))
						if (habr14(v_1, "o", "u"))
							habr14(v_1, "\u00F6", "\u00FC")
			}
			function r_more_than_one_syllable_word() {
				var v_1 = sbp.c, v_2 = 2, v_3;
				while (true) {
					v_3 = sbp.c;
					while (!sbp.i_g(g_vowel, 97, 305)) {
						if (sbp.c >= sbp.l) {
							sbp.c = v_3;
							if (v_2 > 0)
								return false;
							sbp.c = v_1;
							return true;
						}
						sbp.c++;
					}
					v_2--;
				}
			}
			function habr15(v_1, n1, c1) {
				while (!sbp.e_s(n1, c1)) {
					if (sbp.c >= sbp.l)
						return true;
					sbp.c++;
				}
				I_strlen = n1;
				if (I_strlen != sbp.l)
					return true;
				sbp.c = v_1;
				return false;
			}
			function r_is_reserved_word() {
				var v_1 = sbp.c;
				if (habr15(v_1, 2, "ad")) {
					sbp.c = v_1;
					if (habr15(v_1, 5, "soyad"))
						return false;
				}
				return true;
			}
			function r_postlude() {
				var v_1 = sbp.c;
				if (r_is_reserved_word())
					return false;
				sbp.lb = v_1;
				sbp.c = sbp.l;
				r_append_U_to_stems_ending_with_d_or_g();
				sbp.c = sbp.l;
				r_post_process_last_consonants();
				return true;
			}
			this.stem = function() {
				if (r_more_than_one_syllable_word()) {
					sbp.lb = sbp.c;
					sbp.c = sbp.l;
					r_stem_nominal_verb_suffixes();
					sbp.c = sbp.l;
					if (B_c_s_n_s) {
						r_stem_noun_suffixes();
						sbp.c = sbp.lb;
						if (r_postlude())
							return true;
					}
				}
				return false;
			}
		}
	}
	var stemName = lng.substring(0, 1).toUpperCase()
			+ lng.substring(1).toLowerCase() + "Stemmer";
	return new stemFactory[stemName]();
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/Wrapper */ "./src/sidebar/Wrapper.js");

Object(_sidebar_Wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/sidebar/Data/GetAllTerms.js":
/*!*****************************************!*\
  !*** ./src/sidebar/Data/GetAllTerms.js ***!
  \*****************************************/
/*! exports provided: GetAllTerms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllTerms", function() { return GetAllTerms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GetAllTerms = /*#__PURE__*/function (_React$Component) {
  _inherits(GetAllTerms, _React$Component);

  function GetAllTerms(props) {
    var _this;

    _classCallCheck(this, GetAllTerms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetAllTerms).call(this, props));
    _this.getTerms = _this.getTerms.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GetAllTerms, [{
    key: "getTerms",
    value: function getTerms() {
      var handleUpdate = this.props.onTermsChange;
      var url = ajax_var.url + '?action=linkate_gutenberg_hierarchical_terms_json'; // &post_id='+this_id+'&offset=0&is_term='+is_term

      handleUpdate({
        inProgress: true
      });
      fetch(url, {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        // console.log(response);
        handleUpdate(response);
      })["catch"](function (error) {
        handleUpdate({
          isError: true
        });
        console.error(error);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.currentTerms.length === 0) this.getTerms();
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
  }]);

  return GetAllTerms;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Data/GetArticleStats.js":
/*!*********************************************!*\
  !*** ./src/sidebar/Data/GetArticleStats.js ***!
  \*********************************************/
/*! exports provided: GetArticleStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArticleStats", function() { return GetArticleStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GetArticleStats = /*#__PURE__*/function (_React$Component) {
  _inherits(GetArticleStats, _React$Component);

  function GetArticleStats() {
    _classCallCheck(this, GetArticleStats);

    return _possibleConstructorReturn(this, _getPrototypeOf(GetArticleStats).apply(this, arguments));
  }

  _createClass(GetArticleStats, [{
    key: "componentDidMount",
    // WATCH POST DATA UPDATE
    value: function componentDidMount() {
      var _this = this;

      var postContent = wp.data.select('core/editor').getEditedPostAttribute('content');
      this.collectStatistics(postContent);
      wp.data.subscribe(function () {
        var updatedContent = wp.data.select('core/editor').getEditedPostAttribute('content');

        if (postContent !== updatedContent) {
          postContent = updatedContent;

          _this.collectStatistics(updatedContent);
        }
      });
    }
  }, {
    key: "collectStatistics",
    value: function collectStatistics(content) {
      console.log('~~~ updating stats');
      var foundLinks = this.fcl_collectAllLinksFromContent(content);
      console.log(foundLinks);
      this.props.onChange(foundLinks);
    } // Collect all hrefs using regex

  }, {
    key: "fcl_collectAllLinksFromContent",
    value: function fcl_collectAllLinksFromContent(text) {
      var reg = /<a.+?href=['"](.*?)['"].*?>(.*?)<\/a>/gi;
      var match;
      var matches = [];

      while (match = reg.exec(text)) {
        match[1] = this.props.convertUrl(match[1]);

        if (!this.fcl_fileTypeChecker(match[1])) {
          matches.push({
            url: match[1],
            keyword: this.decodeHtml(match[2]),
            offset: this.countSimilar(matches, match[1])
          });
        }
      }

      return matches;
    }
  }, {
    key: "countSimilar",
    value: function countSimilar(array, url) {
      if (array.length > 0) {
        var count = 0;
        array.forEach(function (x) {
          if (x.url === url) {
            count++;
          }
        });
        return count;
      }

      return 0;
    }
  }, {
    key: "decodeHtml",
    value: function decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }, {
    key: "fcl_fileTypeChecker",
    value: function fcl_fileTypeChecker(url) {
      // cuz we don't want to count media as int/ext links
      if (url === undefined) return true;
      var prohibited = ['.jpg', '.jpeg', '.tiff', '.bmp', '.psd', '.png', '.gif', '.webp', '.doc', '.docx', '.xlsx', '.xls', '.odt', '.pdf', '.ods', '.odf', '.ppt', '.pptx', '.txt', '.rtf', '.mp3', '.mp4', '.wav', '.avi', '.ogg', '.zip', '.7z', '.tar', '.gz', '.rar', '#'];

      for (var i = prohibited.length - 1; i >= 0; i--) {
        if (url.indexOf(prohibited[i]) != -1) {
          return true;
        }
      }

      return false;
    } // NOT RENDER

  }, {
    key: "render",
    value: function render() {
      return false;
    }
  }]);

  return GetArticleStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Data/GetData.js":
/*!*************************************!*\
  !*** ./src/sidebar/Data/GetData.js ***!
  \*************************************/
/*! exports provided: GetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetData", function() { return GetData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notices */ "./src/sidebar/Notices.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GetData = /*#__PURE__*/function (_React$Component) {
  _inherits(GetData, _React$Component);

  function GetData(props) {
    var _this;

    _classCallCheck(this, GetData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetData).call(this, props));
    _this.loadData = _this.loadData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GetData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.currentData.data.length === 0) this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      var _this$props = this.props,
          currentData = _this$props.currentData,
          handleDataUpdate = _this$props.onDataChange; // const handleDataUpdate = this.props.onDataChange;

      var this_id = cherrylink_options['post_id'].length == 0 || cherrylink_options['post_id'] == 0 ? window.location.href.match(/tag_ID=(\d+)\&/i)[1] : cherrylink_options['post_id'];
      var is_term = window.location.href.indexOf('term.php') > -1 ? 1 : 0;
      var url = ajax_var.url + '?action=getLinkateLinks'; // &post_id='+this_id+'&offset=0&is_term='+is_term

      var payload = {
        post_id: this_id,
        offset: currentData.dataOffset,
        is_term: is_term
      };
      var newData = {
        data: currentData.data,
        dataOffset: currentData.dataOffset,
        loadLimit: currentData.loadLimit,
        loadFunc: this.loadData,
        dataStatus: currentData.dataStatus,
        inProgress: true
      }; // mark inProgress

      handleDataUpdate(newData);
      fetch(url, {
        method: 'POST',
        // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(payload) // body data type must match "Content-Type" header

      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        newData.data = newData.data.concat(JSON.parse(response.links));
        newData.dataOffset = newData.dataOffset + response.count; //dataStatus 0: first render; 1: success; 2: end reached; 3: not found

        if (response.count > 0 && response.count === newData.loadLimit) {
          newData.dataStatus = 1;
        } else if (response.count === -1) {
          newData.dataStatus = 3;
        } else if (response.count > 0 && response.count < newData.loadLimit) {
          newData.dataStatus = 2;
        }

        if (newData.data.length > 0) {
          _this2.getLinkStats(newData, handleDataUpdate);
        } else {
          newData.inProgress = false;
          handleDataUpdate(newData);
        }
      })["catch"](function (error) {
        console.log(error);
        Object(_Notices__WEBPACK_IMPORTED_MODULE_1__["showNotice"])('Произошла ошибка при загрузке (подробности в консоли)');
        newData.inProgress = false;
        handleDataUpdate(newData);
      });
    }
  }, {
    key: "getLinkStats",
    value: function getLinkStats(currentData, updateCallback) {
      var ids = [];

      for (var i = 0; i < currentData.data.length; i++) {
        var element = currentData.data[i];
        if (element['data-incoming'] === undefined) ids.push("'".concat(element['data-postid'], "'"));
      } // get stats


      var url = ajax_var.url + '?action=linkate_generate_csv_or_json_prettyfied';
      var payload = {
        'from_editor': true,
        'post_ids': ids.join(",")
      };
      fetch(url, {
        method: 'POST',
        // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(payload) // body data type must match "Content-Type" header

      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log(response);
        var newData = currentData.data.map(function (obj) {
          var key = "\"id_".concat(obj["data-postid"], "\"");

          if (response[key] !== undefined) {
            return _objectSpread({}, obj, {
              "data-incoming": response[key][1],
              "data-outgoing": response[key][0]
            });
          } else {
            return obj;
          }
        } // response["id_"+obj["data-postid"]] !== undefined ? { ...obj, "data-incoming": response["id_"+obj["data-postid"]][1], "data-outgoing": response["id_"+obj["data-postid"]][0] } : 
        );
        currentData.data = newData;
        currentData.inProgress = false;
        updateCallback(currentData);
      })["catch"](function (error) {
        console.log(error);
        currentData.inProgress = false;
        updateCallback(currentData);
        Object(_Notices__WEBPACK_IMPORTED_MODULE_1__["showNotice"])('Произошла ошибка при загрузке (подробности в консоли)');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return GetData;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Data/GetIncomingLinks.js":
/*!**********************************************!*\
  !*** ./src/sidebar/Data/GetIncomingLinks.js ***!
  \**********************************************/
/*! exports provided: GetIncomingLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetIncomingLinks", function() { return GetIncomingLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GetIncomingLinks = /*#__PURE__*/function (_React$Component) {
  _inherits(GetIncomingLinks, _React$Component);

  function GetIncomingLinks(props) {
    _classCallCheck(this, GetIncomingLinks);

    return _possibleConstructorReturn(this, _getPrototypeOf(GetIncomingLinks).call(this, props)); // this.getLinkStats = this.getLinkStats.bind(this);
  }

  _createClass(GetIncomingLinks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getLinkStats();
    }
  }, {
    key: "getLinkStats",
    value: function getLinkStats() {
      var _this = this;

      // get stats
      var url = ajax_var.url + '?action=linkate_generate_json';
      var payload = {
        'this_id': wp.data.select("core/editor").getCurrentPostId(),
        'this_type': 'post'
      };
      fetch(url, {
        method: 'POST',
        // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(payload) // body data type must match "Content-Type" header

      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log(response);

        _this.props.onChange(response);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
  }]);

  return GetIncomingLinks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/GetMoreBtn.js":
/*!***********************************!*\
  !*** ./src/sidebar/GetMoreBtn.js ***!
  \***********************************/
/*! exports provided: GetMoreBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMoreBtn", function() { return GetMoreBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GetMoreBtn = /*#__PURE__*/function (_Component) {
  _inherits(GetMoreBtn, _Component);

  function GetMoreBtn() {
    _classCallCheck(this, GetMoreBtn);

    return _possibleConstructorReturn(this, _getPrototypeOf(GetMoreBtn).apply(this, arguments));
  }

  _createClass(GetMoreBtn, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProgress = _this$props.inProgress,
          dataStatus = _this$props.dataStatus,
          loadFunc = _this$props.loadFunc;

      if (inProgress) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "terms-tab-spinner"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null));
      } else if (dataStatus !== undefined && dataStatus <= 1) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "get-data-button"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: loadFunc
        }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"));
      }

      return null;
    }
  }]);

  return GetMoreBtn;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/sidebar/HOC/withLinkInsert.js":
/*!*******************************************!*\
  !*** ./src/sidebar/HOC/withLinkInsert.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notices */ "./src/sidebar/Notices.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var BlockAttributes = {
  'core/paragraph': ['content'],
  'core/pullquote': ['citation', 'value'],
  'core/heading': ['content'],
  'core/list': ['values'],
  'core/image': ['caption'],
  'core/quote': ['value', 'citation'],
  'core/gallery': ['caption'],
  // problem
  'core/audio': ['caption'],
  'core/preformatted': ['content'],
  'core/table': [],
  // problem
  'core/verse': ['content']
};

var LinkWithInsertAction = function LinkWithInsertAction(OriginalComponent) {
  var NewComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(NewComponent, _React$Component);

    function NewComponent(props) {
      var _this;

      _classCallCheck(this, NewComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NewComponent).call(this, props));
      _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
      _this.getSelection = _this.getSelection.bind(_assertThisInitialized(_this));
      _this.insertLink = _this.insertLink.bind(_assertThisInitialized(_this));
      _this.copyLink = _this.copyLink.bind(_assertThisInitialized(_this)); // this.hideError = this.hideError.bind(this)

      return _this;
    }

    _createClass(NewComponent, [{
      key: "handleClick",
      value: function handleClick(e) {
        e.preventDefault();

        if (e.target.classList.contains("insert-allowed")) {
          var currentSelection = this.getSelection(e); // update block

          if (currentSelection) {
            var template = this.chooseTemplate(event);
            this.insertLink(template, currentSelection);
          }
        }
      }
    }, {
      key: "getSelection",
      value: function getSelection(event) {
        var selectionStart = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/block-editor').getSelectionStart();
        var selectionEnd = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/block-editor').getSelectionEnd();
        var blockId = selectionStart.clientId;
        if (blockId === undefined) return false;
        var attributeKey = selectionStart.attributeKey;
        var block = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/block-editor').getBlock(blockId);

        if (attributeKey === undefined || !BlockAttributes.hasOwnProperty(block.name)) {
          Object(_Notices__WEBPACK_IMPORTED_MODULE_2__["showNotice"])('Данный тип блоков пока не поддерживается. Вы можете воспользоваться кнопкой "Скопировать ссылку" в панели перелинковки.');
          console.log("Block \"".concat(block.name, "\" isn't supported yet"));
          return false;
        }

        var startOffset = selectionStart.offset;
        var endOffset = selectionEnd.offset; // text ne videlen

        if (startOffset === endOffset && !(event.ctrlKey || event.metaKey)) {
          // this.setState()
          // this.context({showError: true, message: "Текст не выделен"})
          Object(_Notices__WEBPACK_IMPORTED_MODULE_2__["showNotice"])("Выделите текст или используйте CTRL/CMD+Click для альтернативного шаблона");
          return false;
        }

        if (typeof attributeKey === 'string' || attributeKey instanceof String) {
          // tyt vse ez
          console.log("AttributeKey is standart: ".concat(attributeKey));
        } else {
          var probableAttributes = BlockAttributes[block.name]; // if attributeKey === number

          var selection = window.getSelection();
          var ankorParentInnerText = selection.anchorNode.parentNode.innerText.replace(/\n/g, ' ').trim();
          var ankorText = selection.toString();
          probableAttributes.forEach(function (attr) {
            var richElement = wp.richText.create({
              html: block.attributes[attr]
            });
            var simpleText = wp.richText.getTextContent(richElement).replace(/\n/g, ' ').trim();

            if (simpleText.toLowerCase() === ankorParentInnerText.toLowerCase() && simpleText.substring(startOffset, endOffset).toLowerCase() === ankorText.toLowerCase()) {
              attributeKey = attr;
              console.log("AttributeKey found: ".concat(attr));
            }
          });

          if (typeof attributeKey !== 'string' && !(attributeKey instanceof String)) {
            console.log("Cannot find attributeKey...");
            Object(_Notices__WEBPACK_IMPORTED_MODULE_2__["showNotice"])('Данный тип блоков пока не поддерживается. Вы можете воспользоваться кнопкой "Скопировать ссылку" в панели перелинковки.');
            return false;
          }
        }

        var blockContent = block.attributes[attributeKey];
        var returnObject = {
          block: block,
          blockId: blockId,
          attributeKey: attributeKey,
          startOffset: startOffset,
          endOffset: endOffset,
          blockContent: blockContent
        };
        console.log(returnObject);
        return returnObject;
      }
    }, {
      key: "insertLink",
      value: function insertLink(linkTemplate, curSel) {
        var postId = "";
        var url = "";
        var title = "";
        var titleseo = "";
        var category = "";
        var date = "";
        var author = "";
        var anons = "";
        var imagesrc = "";

        if (OriginalComponent.name === "LinkItem" || OriginalComponent.name === "SuggestionInsert") {
          var linkObj = this.props.linkObj;
          postId = linkObj["data-postid"];
          url = linkObj["data-url"];
          title = linkObj["data-title"];
          titleseo = linkObj["data-titleseo"];
          category = linkObj["data-category"];
          date = linkObj["data-date"];
          author = linkObj["data-author"];
          anons = linkObj["data-anons"];
          imagesrc = linkObj["data-imagesrc"];
        } else {
          var _this$props = this.props,
              termName = _this$props.termName,
              termUrl = _this$props.termUrl;
          url = termUrl;
          title = termName;
        } // dolboebizm, no legche metoda net


        var blockContent = ''; // for lists and poems we have to add newline char to fix offsets

        if (curSel.block.name === "core/list") {
          blockContent = curSel.blockContent.replace(/<\/li>/g, "</li>↵"); //↵¤
        } else if (curSel.block.name === "core/verse") {
          blockContent = curSel.blockContent.replace(/(<br>|<BR>)/g, "<br>↵"); //↵¤
        } else {
          blockContent = curSel.blockContent;
        } // remove html entities like &nbsp;


        blockContent = this.decodeHtml(blockContent);
        var richElement = wp.richText.create({
          html: blockContent
        });
        var simpleText = wp.richText.getTextContent(richElement);

        var _this$getHtmlPosition = this.getHtmlPositions(simpleText, blockContent, curSel.startOffset, curSel.endOffset),
            _this$getHtmlPosition2 = _slicedToArray(_this$getHtmlPosition, 2),
            htmlStart = _this$getHtmlPosition2[0],
            htmlEnd = _this$getHtmlPosition2[1];

        var selectedAnkor = blockContent.substring(htmlStart, htmlEnd); // Move last space outside

        var addSpaceAfter = '';

        if (selectedAnkor.charAt(selectedAnkor.length - 1) === ' ') {
          addSpaceAfter = ' ';
        } // Create new content attribute


        var newContent = blockContent.substring(0, htmlStart) + linkTemplate.replace("{url}", url).replace("{title}", title).replace("{titleseo}", titleseo).replace("{category}", category).replace("{date}", date).replace("{author}", author).replace("{imagesrc}", imagesrc).replace("{anons}", anons).replace("{selectedAnkor}", selectedAnkor.trim()) + addSpaceAfter + blockContent.substring(htmlStart + selectedAnkor.length, curSel.length); // removing temporary spec char for lists

        newContent = newContent.replace(/↵/g, '');
        console.log(newContent); // replace original block with updated attributes

        var originalAttributes = curSel.block.attributes;
        originalAttributes[curSel.attributeKey] = newContent;
        curSel.block.attributes = originalAttributes;
        Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])('core/block-editor').updateBlock(curSel.blockId, curSel.block);
        Object(_Notices__WEBPACK_IMPORTED_MODULE_2__["showNotice"])('Ссылка вставлена');
      }
    }, {
      key: "chooseTemplate",
      value: function chooseTemplate(event) {
        if (!cherrylink_options) {
          return "<a href=\"{url}\" title=\"{title}\">{selectedAnkor}</a>";
        }

        var alt = false;
        var type = 'link';

        if (event.ctrlKey || event.metaKey) {
          alt = true;
        }

        if (OriginalComponent.name === 'TermItem') type = 'term';
        var template = alt ? cherrylink_options.templates[type].alt : cherrylink_options.templates[type].before + "{selectedAnkor}" + cherrylink_options.templates[type].after;
        return this.urldecode(template);
      }
    }, {
      key: "urldecode",
      value: function urldecode(url) {
        return decodeURIComponent(url.replace(/\+/g, ' ')).replace(/\\\"/g, '\"');
      }
    }, {
      key: "decodeHtml",
      value: function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      } // Get real ankor positions ommiting html tags

    }, {
      key: "getHtmlPositions",
      value: function getHtmlPositions(text, html, textStart, textEnd) {
        var htmlStart,
            htmlEnd,
            textIndex = 0,
            insideTag = false;

        for (var i = 0; i < html.length; i++) {
          if (textIndex === textStart) {
            htmlStart = i;
          }

          if (textIndex === textEnd) {
            htmlEnd = i;
            break;
          }

          if (html[i] === '<' && text[textIndex] !== html[i]) {
            insideTag = true;
          }

          if (!insideTag) {
            textIndex++;
          }

          if (html[i] === '>') {
            insideTag = false;
          }
        }

        return [htmlStart, htmlEnd];
      }
    }, {
      key: "fcl_convertRelativeUrl",
      value: function fcl_convertRelativeUrl(url) {
        if (url.indexOf("http") !== -1) return url;
        var host = location.host;
        var proto = location.protocol;

        if (url.length > 0) {
          if (url.indexOf(host) === -1) {
            url = "//" + host + url;
          }

          if (url.indexOf(proto) === -1) {
            url = proto + url;
          }
        }

        return url;
      }
    }, {
      key: "copyLink",
      value: function copyLink(url) {
        var preparedUrl = this.fcl_convertRelativeUrl(url);

        if (window.clipboardData && window.clipboardData.setData) {
          // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
          return clipboardData.setData("Text", preparedUrl);
        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
          var textarea = document.createElement("textarea");
          textarea.textContent = preparedUrl;
          textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.

          document.body.appendChild(textarea);
          textarea.select();

          try {
            Object(_Notices__WEBPACK_IMPORTED_MODULE_2__["showNotice"])("Ссылка скопирована в буфер обмена");
            return document.execCommand("copy"); // Security exception may be thrown by some browsers.
          } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
          } finally {
            document.body.removeChild(textarea);
          }
        }
      }
    }, {
      key: "changeBlockLinks",
      value: function changeBlockLinks(postId, title, postMeta, updateCallback) {
        var blockLinks = postMeta.blockLinks,
            manualEdit = postMeta.manualEdit,
            showAfter = postMeta.showAfter;
        var wasInBlock = false;
        var index = 0;
        blockLinks.forEach(function (element, i) {
          if (element.post_id === postId) {
            wasInBlock = true;
            index = i;
          }
        });

        if (!wasInBlock) {
          blockLinks.push({
            post_id: postId,
            keyword: title,
            m_keyword: "",
            use_manual: "false"
          });
          Object(_Notices__WEBPACK_IMPORTED_MODULE_2__["showNotice"])('Ссылка добавлена в блок');
        } else {
          blockLinks.splice(index, 1);
          Object(_Notices__WEBPACK_IMPORTED_MODULE_2__["showNotice"])('Ссылка удалена из блока');
        }

        updateCallback({
          blockLinks: blockLinks,
          manualEdit: manualEdit,
          showAfter: showAfter
        });
      } // hideError () {
      //     this.setState({showError: false, message: ""})
      // }
      // componentDidMount() {
      //     let context = this.context;
      //     console.log(context)
      // }

    }, {
      key: "render",
      value: function render() {
        var passedProps = this.props;
        passedProps.clickHandler = this.handleClick;
        passedProps.copyLink = this.copyLink;
        passedProps.changeBlockLinks = this.changeBlockLinks;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OriginalComponent, passedProps));
      }
    }]);

    return NewComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // OriginalComponent.contextType = NoticeContext;
  // NewComponent.contextType = NoticeContext;


  return NewComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (LinkWithInsertAction);

/***/ }),

/***/ "./src/sidebar/HOC/withPostMeta.js":
/*!*****************************************!*\
  !*** ./src/sidebar/HOC/withPostMeta.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var withPostMeta = function withPostMeta(OriginalComponent) {
  var NewComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(NewComponent, _React$Component);

    function NewComponent(props) {
      var _this;

      _classCallCheck(this, NewComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NewComponent).call(this, props));
      _this.getPostMeta = _this.getPostMeta.bind(_assertThisInitialized(_this));
      _this.updatePostMeta = _this.updatePostMeta.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(NewComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "getPostMeta",
      value: function getPostMeta() {
        var _select$getCurrentPos = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])("core/editor").getCurrentPost(),
            meta = _select$getCurrentPos.meta;

        var metaEdited = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])("core/editor").getEditedPostAttribute("meta");
        var blockLinksRaw, manualEditRaw, showAfterRaw, showAfterChangedRaw;

        if (metaEdited.updated) {
          blockLinksRaw = metaEdited["crb-meta-links"];
          manualEditRaw = metaEdited["crb-meta-use-manual"];
          showAfterRaw = metaEdited["crb-meta-show"];
          showAfterChangedRaw = metaEdited["crb-meta-show-edited"];
        } else {
          blockLinksRaw = meta["crb-meta-links"];
          manualEditRaw = meta["crb-meta-use-manual"];
          showAfterRaw = meta["crb-meta-show"];
          showAfterChangedRaw = meta["crb-meta-show-edited"];
        }

        var links = blockLinksRaw.length > 0 ? blockLinksRaw.split("\n").map(function (x) {
          var y = x.split("[|]");
          return {
            post_id: y[0],
            keyword: y[1],
            m_keyword: y[2],
            use_manual: y[3]
          };
        }) : [];
        var manualEdit = manualEditRaw === "checked";
        var showAfter = showAfterRaw === "checked";
        var showAfterChanged = showAfterChangedRaw === "checked";
        return {
          blockLinks: links,
          manualEdit: manualEdit,
          showAfter: showAfter,
          showAfterChanged: showAfterChanged
        };
      }
    }, {
      key: "updatePostMeta",
      value: function updatePostMeta(updatedMeta) {
        var prevMeta = this.getPostMeta();
        var newMeta = {};

        if (updatedMeta.blockLinks) {
          newMeta['crb-meta-links'] = updatedMeta.blockLinks.map(function (x) {
            return x.post_id + "[|]" + x.keyword + "[|]" + x.m_keyword + "[|]" + x.use_manual;
          }).join("\n");
        }

        if (updatedMeta.manualEdit !== undefined) {
          newMeta["crb-meta-use-manual"] = updatedMeta.manualEdit ? "checked" : "off";
        }

        if (updatedMeta.showAfter !== undefined) {
          if (prevMeta.showAfter !== updatedMeta.showAfter) {
            newMeta["crb-meta-show"] = updatedMeta.showAfter ? "checked" : "off";
            newMeta["crb-meta-show-edited"] = "checked";
          } else {
            newMeta["crb-meta-show"] = prevMeta.showAfter ? "checked" : "off";
            newMeta["crb-meta-show-edited"] = prevMeta.showAfterChanged ? "checked" : "off";
          }
        }

        wp.data.dispatch("core/editor").editPost({
          meta: {
            'crb-meta-links': newMeta['crb-meta-links'],
            'crb-meta-use-manual': newMeta['crb-meta-use-manual'],
            'crb-meta-show': newMeta['crb-meta-show'],
            'crb-meta-show-edited': newMeta['crb-meta-show-edited'],
            'updated': true
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OriginalComponent, _extends({}, this.props, {
          getMeta: this.getPostMeta,
          updateMeta: this.updatePostMeta
        }));
      }
    }]);

    return NewComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return NewComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (withPostMeta);

/***/ }),

/***/ "./src/sidebar/Icons.js":
/*!******************************!*\
  !*** ./src/sidebar/Icons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var icons = {};
icons.main = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "class": "custom-icon custom-icon-cherrylink",
  width: "24.013",
  height: "24.013",
  viewBox: "0 0 512 512"
}, React.createElement("path", {
  d: "M316.003,296.552c-52.07-57.354-41.622-144.066-19.375-218.22c9.58,12.701,20.185,21.595,20.255,21.419\r c-10.478,26.195-0.84,56.979,24.035,72.146c25.447,15.523,94.269,8.888,123.336,6.229\r c-10.517-26.007-36.292-91.167-61.968-106.819c-21.724-13.256-48.717-10.738-67.532,4.315\r c-8.272-7.011-14.932-15.797-19.722-23.286c15.945-8.896,33.149-17.074,51.601-24.53L355.395,0\r C195.239,64.732,130.486,184.281,138.808,297.712c-51.52,8.058-91.062,52.74-91.062,106.479\r c0,86.92,97.741,137.376,168.547,89.023c-43.766-51.394-43.255-127.249,0-178.045c-14.057-9.608-30.294-15.807-47.441-17.937\r c-5.866-70.718,22.828-150.842,93.642-209.309c-19.439,71.789-24.012,155.903,20.436,215.578\r c-68.807,26.325-91.61,112.814-44.451,169.487c63.927,77.024,190.753,32.507,190.753-68.797\r C429.231,342.836,377.961,293.469,316.003,296.552z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/sidebar/Notices.js":
/*!********************************!*\
  !*** ./src/sidebar/Notices.js ***!
  \********************************/
/*! exports provided: showNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNotice", function() { return showNotice; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

var showNotice = function showNotice(message) {
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("core/notices").createSuccessNotice(message, {
    type: "snackbar"
  });
};

/***/ }),

/***/ "./src/sidebar/Suggestions/SugestionsPanel.js":
/*!****************************************************!*\
  !*** ./src/sidebar/Suggestions/SugestionsPanel.js ***!
  \****************************************************/
/*! exports provided: SuggestionsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsPanel", function() { return SuggestionsPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuggestionList */ "./src/sidebar/Suggestions/SuggestionList.js");
/* harmony import */ var snowball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! snowball */ "./node_modules/snowball/stemmer/lib/Snowball.js");
/* harmony import */ var snowball__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(snowball__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mark.js */ "./node_modules/mark.js/dist/mark.js");
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mark_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Notices */ "./src/sidebar/Notices.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BlockAttributes = {
  'core/paragraph': ['content'],
  'core/pullquote': ['citation', 'value'],
  // 'core/heading': ['content'],
  'core/list': ['values'],
  'core/image': ['caption'],
  'core/quote': ['value', 'citation'],
  // 'core/gallery': ['caption'], // problem
  'core/audio': ['caption'],
  'core/preformatted': ['content'],
  // 'core/table': [], // problem
  'core/verse': ['content']
};
var SuggestionsPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(SuggestionsPanel, _React$Component);

  function SuggestionsPanel(props) {
    var _this;

    _classCallCheck(this, SuggestionsPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SuggestionsPanel).call(this, props));
    _this.state = {
      suggestions: {},
      item: {}
    };
    _this.closePanel = _this.closePanel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SuggestionsPanel, [{
    key: "stemmKeywords",
    value: function stemmKeywords(rawData) {
      var words = rawData.trim().split(" ");
      var stemmer = new snowball__WEBPACK_IMPORTED_MODULE_2___default.a('Russian');
      words = words.map(function (x) {
        stemmer.setCurrent(x);
        stemmer.stem();
        return stemmer.getCurrent();
      });
      return words;
    }
  }, {
    key: "searchSuggestions",
    value: function searchSuggestions(rawItemData) {
      var addSingleWords = cherrylink_options.singleword_suggestions === "true";
      var keywords = this.stemmKeywords(rawItemData);
      var nodeLinks = {
        single: [],
        multi: []
      }; // TODO remove blacklisted
      // create pairs

      var keysLen = keywords.length;
      var setOfPairsRegexes = [];
      keywords.map(function (x, i) {
        // let set = [];
        for (var j = 0; j < keysLen; j++) {
          if (j !== i) {
            setOfPairsRegexes.push(new RegExp("(?<=^|\\s)(".concat(x, "[^\\n\\.,\\(\\)\\[\\]]*?").concat(keywords[j], "[\u0410-\u042F\u0401A-Z]*)"), 'gmiu'));
          }
        }
      }); // TODO: add switcher
      // if (addWords) {
      //     keywords = pairs.concat(keywords);
      // } else {
      //     keywords = pairs;
      // }

      var editor = document.getElementsByClassName("edit-post-visual-editor")[0];
      var context = new mark_js__WEBPACK_IMPORTED_MODULE_3___default.a(editor);
      context.unmark();

      for (var _i = 0, _setOfPairsRegexes = setOfPairsRegexes; _i < _setOfPairsRegexes.length; _i++) {
        var _kw = _setOfPairsRegexes[_i];
        context.markRegExp(_kw, {
          // accuracy: "complementary",
          // wildcards: "withSpaces",
          exclude: ["h1", "h2", "h3", "h4", "h5", "a", ".ignore", "textarea", ".editor-post-title"],
          each: function each(element) {
            nodeLinks.multi.push(element);
          }
        });
      }

      if (addSingleWords) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = keywords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var kw = _step.value;
            context.mark(kw, {
              accuracy: "complementary",
              exclude: ["h1", "h2", "h3", "h4", "h5", "a", ".ignore", "textarea", ".editor-post-title", "mark"],
              each: function each(element) {
                nodeLinks.single.push(element);
              }
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return nodeLinks;
    }
  }, {
    key: "getBlockContent",
    value: function getBlockContent(block) {
      var content = ""; // const attrs = BlockAttributes[block.name];
      // for (const attr of attrs) {
      //     content += block.attributes[attr];
      // }

      content = block.originalContent;
      content = content.replace(/(<([^>]+)>)/ig, "");
      return content;
    }
  }, {
    key: "getTextCut",
    value: function getTextCut(content, word, index) {
      return {
        before: content.slice(index - 20, index),
        word: content.slice(index, index + word.length),
        after: content.slice(index + word.length, index + word.length + 20)
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var suggestionsData = this.props.suggestionsData;
      console.log("Raw Suggestions");
      console.log(suggestionsData.rawKeywords);
      console.log("Repared Suggestions");

      if (suggestionsData.rawKeywords) {
        var newState = this.searchSuggestions(suggestionsData.rawKeywords);
        if (newState) this.setState({
          suggestions: newState,
          linkItem: suggestionsData.linkItem
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// clean suggestions
    }
  }, {
    key: "closePanel",
    value: function closePanel() {
      // empty string will close it
      var editor = document.getElementsByClassName("edit-post-visual-editor")[0];
      var context = new mark_js__WEBPACK_IMPORTED_MODULE_3___default.a(editor);
      context.unmark();
      this.props.toggleSuggestionsPanel(false);
    }
  }, {
    key: "render",
    value: function render() {
      var className = "suggestion-panel";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.closePanel
      }, "\uD83E\uDC70 \u041D\u0430\u0437\u0430\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestionList__WEBPACK_IMPORTED_MODULE_1__["SuggestionList"], this.state));
    }
  }]);

  return SuggestionsPanel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Suggestions/SuggestionCopy.js":
/*!***************************************************!*\
  !*** ./src/sidebar/Suggestions/SuggestionCopy.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/withLinkInsert */ "./src/sidebar/HOC/withLinkInsert.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SuggestionCopy = /*#__PURE__*/function (_Component) {
  _inherits(SuggestionCopy, _Component);

  function SuggestionCopy() {
    _classCallCheck(this, SuggestionCopy);

    return _possibleConstructorReturn(this, _getPrototypeOf(SuggestionCopy).apply(this, arguments));
  }

  _createClass(SuggestionCopy, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          copyLink = _this$props.copyLink,
          url = _this$props.url;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        className: "",
        isSecondary: true,
        onClick: function onClick() {
          return copyLink(url);
        }
      }, "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443");
    }
  }]);

  return SuggestionCopy;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // SuggestionInsert.contextType = NoticeContext;


/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_2__["default"])(SuggestionCopy));

/***/ }),

/***/ "./src/sidebar/Suggestions/SuggestionInsert.js":
/*!*****************************************************!*\
  !*** ./src/sidebar/Suggestions/SuggestionInsert.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/withLinkInsert */ "./src/sidebar/HOC/withLinkInsert.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SuggestionInsert = /*#__PURE__*/function (_Component) {
  _inherits(SuggestionInsert, _Component);

  function SuggestionInsert() {
    _classCallCheck(this, SuggestionInsert);

    return _possibleConstructorReturn(this, _getPrototypeOf(SuggestionInsert).apply(this, arguments));
  }

  _createClass(SuggestionInsert, [{
    key: "render",
    value: function render() {
      var clickHandler = this.props.clickHandler;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        className: "insert-allowed",
        isSecondary: true,
        onClick: clickHandler
      }, "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443");
    }
  }]);

  return SuggestionInsert;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // SuggestionInsert.contextType = NoticeContext;


/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_2__["default"])(SuggestionInsert));

/***/ }),

/***/ "./src/sidebar/Suggestions/SuggestionList.js":
/*!***************************************************!*\
  !*** ./src/sidebar/Suggestions/SuggestionList.js ***!
  \***************************************************/
/*! exports provided: SuggestionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionList", function() { return SuggestionList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Suggestions_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suggestions.css */ "./src/sidebar/Suggestions/Suggestions.css");
/* harmony import */ var _Suggestions_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Suggestions_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mark.js */ "./node_modules/mark.js/dist/mark.js");
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mark_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SuggestionInsert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestionInsert */ "./src/sidebar/Suggestions/SuggestionInsert.js");
/* harmony import */ var _SuggestionCopy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuggestionCopy */ "./src/sidebar/Suggestions/SuggestionCopy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var SuggestionList = /*#__PURE__*/function (_React$Component) {
  _inherits(SuggestionList, _React$Component);

  function SuggestionList() {
    _classCallCheck(this, SuggestionList);

    return _possibleConstructorReturn(this, _getPrototypeOf(SuggestionList).apply(this, arguments));
  }

  _createClass(SuggestionList, [{
    key: "gotoNode",
    value: function gotoNode(isSingle, index) {
      var suggestions = this.props.suggestions;

      if (isSingle) {
        suggestions.single[index].scrollIntoView({
          block: 'center'
        });
        this.selectBlock(suggestions.single[index]);
      } else {
        suggestions.multi[index].scrollIntoView({
          block: 'center'
        });
        this.selectBlock(suggestions.multi[index]);
      }
    }
  }, {
    key: "selectBlock",
    value: function selectBlock(node) {
      var parent = node.closest("div.wp-block");

      if (parent) {
        var uid = parent.getAttribute("data-block");
        wp.data.dispatch("core/block-editor").selectBlock(uid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          suggestions = _this$props.suggestions,
          linkItem = _this$props.linkItem; // const className = "suggestion-panel-open";

      if (suggestions.multi === undefined || suggestions.multi.length === 0 && suggestions.single.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "suggestion-hint"
        }, "\u0414\u043B\u044F \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          target: "_blank",
          href: window.location.origin + "/wp-admin/options-general.php?page=linkate-posts&subpage=other"
        }, "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u043D\u0434\u0435\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "suggestion-hint"
        }, "\u0415\u0441\u043B\u0438 \u0432\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043B\u0438 \u0441\u0442\u0430\u0442\u044C\u044E \u0438\u0437 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430 \u0432 \u0431\u043B\u043E\u043A\u0438, \u0435\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C (\u043A\u043D\u043E\u043F\u043A\u0430 \u0432\u044B\u0448\u0435), \u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443."));
      }

      var listMulti = suggestions.multi.map(function (x, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          onMouseDown: function onMouseDown() {
            _this.gotoNode(false, i);
          }
        }, x.innerText);
      });
      var listSingle = suggestions.single.map(function (x, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          onMouseDown: function onMouseDown() {
            _this.gotoNode(true, i);
          }
        }, x.innerText);
      });
      var output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, listMulti.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "suggestion-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "block-name"
      }, "\u0424\u0440\u0430\u0437\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "suggestion-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, listMulti))), listSingle.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "suggestion-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "block-name"
      }, "\u0421\u043B\u043E\u0432\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "suggestion-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, listSingle))));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestionCopy__WEBPACK_IMPORTED_MODULE_4__["default"], {
        url: linkItem["data-url"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestionInsert__WEBPACK_IMPORTED_MODULE_3__["default"], {
        linkObj: linkItem
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "suggestion-hint"
      }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0431\u043B\u043E\u043A \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435."), output);
    }
  }]);

  return SuggestionList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Suggestions/Suggestions.css":
/*!*************************************************!*\
  !*** ./src/sidebar/Suggestions/Suggestions.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Suggestions.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Suggestions/Suggestions.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/sidebar/Tab_BlockLinks/BlockLinksList.js":
/*!******************************************************!*\
  !*** ./src/sidebar/Tab_BlockLinks/BlockLinksList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOC/withLinkInsert */ "./src/sidebar/HOC/withLinkInsert.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BlockLinksList = /*#__PURE__*/function (_React$Component) {
  _inherits(BlockLinksList, _React$Component);

  function BlockLinksList(props) {
    var _this;

    _classCallCheck(this, BlockLinksList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlockLinksList).call(this, props));
    _this.state = {
      timeoutId: false,
      blockLinks: false
    };
    return _this;
  }

  _createClass(BlockLinksList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var postMeta = this.props.postMeta;
      this.setState({
        blockLinks: postMeta.blockLinks
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.blockLinks === false || prevProps.postMeta.blockLinks !== this.props.postMeta.blockLinks) {
        var postMeta = this.props.postMeta;
        this.setState({
          blockLinks: postMeta.blockLinks
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.updateBlockLinks(this.state.blockLinks);
      clearTimeout(this.state.timeoutId);
    }
  }, {
    key: "onTyping",
    value: function onTyping(index, text) {
      var _this2 = this;

      var _this$state = this.state,
          blockLinks = _this$state.blockLinks,
          timeoutId = _this$state.timeoutId;
      blockLinks[index].m_keyword = text;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        _this2.props.updateBlockLinks(blockLinks);

        console.log("BlockLinks updated");
      }, 500);
      this.setState({
        blockLinks: blockLinks,
        timeoutId: timeoutId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          changeBlockLinks = _this$props.changeBlockLinks,
          postMeta = _this$props.postMeta,
          updateMetaState = _this$props.updateMetaState;
      var blockLinks = this.state.blockLinks;
      var output;

      if (blockLinks !== false && blockLinks.length > 0) {
        var links = blockLinks.map(function (x, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
            text: "\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u043D\u043A\u043E\u0440: ".concat(x.keyword)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: ""
          }, "ID: ", x.post_id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            isLink: true,
            isSmall: true,
            isDestructive: true,
            onClick: function onClick() {
              return changeBlockLinks(x.post_id, x.keyword, postMeta, updateMetaState);
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, postMeta.manualEdit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
            value: x.m_keyword,
            onChange: function onChange(text) {
              return _this3.onTyping(i, text);
            }
          }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Disabled"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
            value: x.keyword
          }))));
        });
        output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, postMeta.manualEdit ? "Введите желаемые анкоры в поля ниже. Если анкор не введен будет использоваться заголовок статьи." : "Включите редактор анкоров для ручного ввода."), links);
      } else {
        output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u044B. \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0442\u0430\u0431 \u0441\u043E \u0441\u0441\u044B\u043B\u043A\u0430\u043C\u0438 \u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u044B\u0435 \u0432 \u044D\u0442\u043E\u0442 \u0441\u043F\u0438\u0441\u043E\u043A.");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438"), output);
    }
  }]);

  return BlockLinksList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_2__["default"])(BlockLinksList));

/***/ }),

/***/ "./src/sidebar/Tab_BlockLinks/BlockLinksOptions.js":
/*!*********************************************************!*\
  !*** ./src/sidebar/Tab_BlockLinks/BlockLinksOptions.js ***!
  \*********************************************************/
/*! exports provided: BlockLinksOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockLinksOptions", function() { return BlockLinksOptions; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var BlockLinksOptions = function BlockLinksOptions(props) {
  return React.createElement(React.Fragment, null, React.createElement("h2", null, "\u041E\u043F\u0446\u0438\u0438 \u0431\u043B\u043E\u043A\u0430 \u0441\u0441\u044B\u043B\u043E\u043A"), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["CheckboxControl"], {
    label: "\u0412\u044B\u0432\u043E\u0434 \u0431\u043B\u043E\u043A\u0430 \u043F\u043E\u0434 \u0441\u0442\u0430\u0442\u044C\u0435\u0439",
    help: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0434\u0430\u043D\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438",
    checked: props.showAfter,
    onChange: props.updateShowAfter
  }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["HorizontalRule"], null), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["CheckboxControl"], {
    label: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0430\u043D\u043A\u043E\u0440\u043E\u0432",
    help: "\u041F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u043E\u0440\u044B \u0441\u0441\u044B\u043B\u043E\u043A \u0432 \u0431\u043B\u043E\u043A\u0435 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E",
    checked: props.manualEdit,
    onChange: props.updateManualEdit
  }));
};

/***/ }),

/***/ "./src/sidebar/Tab_BlockLinks/BlockLinksPanel.js":
/*!*******************************************************!*\
  !*** ./src/sidebar/Tab_BlockLinks/BlockLinksPanel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlockLinksOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockLinksOptions */ "./src/sidebar/Tab_BlockLinks/BlockLinksOptions.js");
/* harmony import */ var _BlockLinksList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockLinksList */ "./src/sidebar/Tab_BlockLinks/BlockLinksList.js");
/* harmony import */ var _HOC_withPostMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HOC/withPostMeta */ "./src/sidebar/HOC/withPostMeta.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var BlockLinks = /*#__PURE__*/function (_React$Component) {
  _inherits(BlockLinks, _React$Component);

  function BlockLinks(props) {
    var _this;

    _classCallCheck(this, BlockLinks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlockLinks).call(this, props));
    _this.state = {
      showAfter: false,
      manualEdit: false,
      blockLinks: []
    };
    _this.updateManualEdit = _this.updateManualEdit.bind(_assertThisInitialized(_this));
    _this.updateShowAfter = _this.updateShowAfter.bind(_assertThisInitialized(_this));
    _this.updateBlockLinks = _this.updateBlockLinks.bind(_assertThisInitialized(_this));
    _this.updateOptions = _this.updateOptions.bind(_assertThisInitialized(_this));
    _this.updateMetaState = _this.updateMetaState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BlockLinks, [{
    key: "updateShowAfter",
    value: function updateShowAfter(showAfter) {
      this.updateOptions("showAfter", showAfter);
    }
  }, {
    key: "updateManualEdit",
    value: function updateManualEdit(manualEdit) {
      this.updateOptions("manualEdit", manualEdit);
    }
  }, {
    key: "updateBlockLinks",
    value: function updateBlockLinks(blockLinks) {
      this.updateOptions("blockLinks", blockLinks);
    } // key == option name, value == bool/object

  }, {
    key: "updateOptions",
    value: function updateOptions(key, value) {
      var _this$props$getMeta = this.props.getMeta(),
          blockLinks = _this$props$getMeta.blockLinks,
          manualEdit = _this$props$getMeta.manualEdit,
          showAfter = _this$props$getMeta.showAfter;

      if (key === "blockLinks") {
        blockLinks = value;
      }

      if (key === "showAfter") {
        showAfter = value;
      }

      if (key === "manualEdit") {
        manualEdit = value;
      }

      var newState = {
        blockLinks: blockLinks,
        manualEdit: manualEdit,
        showAfter: showAfter
      }; // this.props.updateMeta(newState)

      this.updateMetaState(newState);
    }
  }, {
    key: "updateMetaState",
    value: function updateMetaState(newState) {
      var _this2 = this;

      if (newState !== undefined) {
        this.props.updateMeta(newState);
        this.setState(function (prevState) {
          return newState;
        });
      } else {
        this.setState(function (prevState) {
          var meta = _this2.props.getMeta();

          return meta;
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateMetaState();
    } // metaUpdate() {
    //     const { showAfter, showAfterChanged, manualEdit, blockLinks } = this.state;
    //     let optionShowAfter = "";
    //     if (showAfterChanged && showAfter)
    //         optionShowAfter = "checked";
    //     else if (showAfterChanged && !showAfter)
    //         optionShowAfter = "off";
    //     else 
    //         optionShowAfter = "";
    //     wp.data.dispatch("core/editor").editPost({
    //         meta: {
    //             'crb-meta-links': blockLinks.map(x => {
    //                             return x.post_id + "[|]" + x.keyword + "[|]" + x.m_keyword + "[|]" + x.use_manual;
    //                         }).join("\n"),
    //             'crb-meta-show': optionShowAfter,
    //             'crb-meta-show-edited': showAfterChanged ? "checked" : "",
    //             'crb-meta-use-manual': manualEdit ? "checked" : ""
    //         }
    //     })
    //     console.log("Block Link options updated")
    // }

  }, {
    key: "render",
    value: function render() {
      // const testData = [
      //     {post_id: "24233", keyword: "Default title here", m_keyword: "Manual title goes here"},
      //     {post_id: "341", keyword: "Default title here", m_keyword: ""},
      //     {post_id: "231", keyword: "Default title here", m_keyword: "Manual adw wa"},
      //     {post_id: "546", keyword: "Default title here", m_keyword: ""},
      //     {post_id: "786", keyword: "Default title here", m_keyword: "Manual ada wdawd"},
      //     {post_id: "678768", keyword: "Default title here", m_keyword: ""},
      // ];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlockLinksOptions__WEBPACK_IMPORTED_MODULE_2__["BlockLinksOptions"], _extends({}, this.state, {
        updateShowAfter: this.updateShowAfter,
        updateManualEdit: this.updateManualEdit
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlockLinksList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        postMeta: this.state,
        updateBlockLinks: this.updateBlockLinks,
        updateMetaState: this.updateMetaState
      }))));
    }
  }]);

  return BlockLinks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withPostMeta__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockLinks));

/***/ }),

/***/ "./src/sidebar/Tab_Links/Filters/FilterTermItem.js":
/*!*********************************************************!*\
  !*** ./src/sidebar/Tab_Links/Filters/FilterTermItem.js ***!
  \*********************************************************/
/*! exports provided: FilterTermItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTermItem", function() { return FilterTermItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var FilterTermItem = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterTermItem, _React$Component);

  function FilterTermItem(props) {
    var _this;

    _classCallCheck(this, FilterTermItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterTermItem).call(this, props));
    _this.state = {
      checked: false
    };
    _this.changeState = _this.changeState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterTermItem, [{
    key: "changeState",
    value: function changeState(newState) {
      this.setState({
        checked: newState
      });
      this.props.onChange(this.props.catName, newState, this.props.parentName);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isChecked) this.setState({
        checked: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.isChild ? 'term-checkbox-child' : 'term-checkbox-toplvl';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CheckboxControl"], {
        label: this.props.catName,
        checked: this.state.checked,
        onChange: this.changeState
      }), this.props.children.length > 0 && this.props.children);
    }
  }]);

  return FilterTermItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Tab_Links/Filters/FilterTermsList.js":
/*!**********************************************************!*\
  !*** ./src/sidebar/Tab_Links/Filters/FilterTermsList.js ***!
  \**********************************************************/
/*! exports provided: FilterTermsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTermsList", function() { return FilterTermsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterTermItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterTermItem */ "./src/sidebar/Tab_Links/Filters/FilterTermItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var FilterTermsList = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterTermsList, _React$Component);

  function FilterTermsList(props) {
    var _this;

    _classCallCheck(this, FilterTermsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterTermsList).call(this, props));
    _this.createTermsList = _this.createTermsList.bind(_assertThisInitialized(_this));
    _this.updateCheckedTerms = _this.updateCheckedTerms.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterTermsList, [{
    key: "createTermsList",
    value: function createTermsList() {
      var checkedCategories = this.props.checkedCategories;
      var termsList = this.props.terms;
      var listToRender = [];

      for (var i = 0; i < termsList.length; i++) {
        if (termsList[i].is_divider === "no" && termsList[i].taxonomy === "category") listToRender.push(this.convertToJSX(termsList[i], false, checkedCategories));
      }

      return listToRender;
    }
  }, {
    key: "updateCheckedTerms",
    value: function updateCheckedTerms(termName, isChecked) {
      var checkedCategories = this.props.checkedCategories;
      var updatedCategories = [];

      if (isChecked) {
        if (!checkedCategories.includes(termName)) {
          updatedCategories = checkedCategories.slice();
          updatedCategories.push(termName);
        }
      } else {
        if (checkedCategories.includes(termName)) {
          updatedCategories = checkedCategories.filter(function (item) {
            return item !== termName;
          });
        }
      }

      this.props.onChange({
        checkedCategories: updatedCategories
      });
    }
  }, {
    key: "convertToJSX",
    value: function convertToJSX(term, isChild, checkedCategories, parentName) {
      parentName = parentName || "";
      var children = [];

      if (term.children.length > 0) {
        for (var i = 0; i < term.children.length; i++) {
          children.push(this.convertToJSX(term.children[i], true, checkedCategories, term.name));
        }
      }

      var isChecked = checkedCategories.includes(term.name) ? true : false;
      var jsxTerm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterTermItem__WEBPACK_IMPORTED_MODULE_1__["FilterTermItem"], {
        catName: term.name,
        parentName: parentName,
        children: children,
        isChild: isChild,
        isChecked: isChecked,
        onChange: this.updateCheckedTerms
      });
      return jsxTerm;
    } // componentDidMount() {
    //     const currentState = Object.assign({}, this.state);
    //     currentState.terms = this.props.terms;
    //     currentState.checkedTerms = this.props.currentFilters.subCategory;
    //     this.setState(currentState)
    // }

  }, {
    key: "render",
    value: function render() {
      var termsToRender = this.createTermsList();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-terms-container"
      }, termsToRender));
    }
  }]);

  return FilterTermsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Tab_Links/Filters/FiltersPanel.css":
/*!********************************************************!*\
  !*** ./src/sidebar/Tab_Links/Filters/FiltersPanel.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./FiltersPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Links/Filters/FiltersPanel.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/sidebar/Tab_Links/Filters/FiltersPanel.js":
/*!*******************************************************!*\
  !*** ./src/sidebar/Tab_Links/Filters/FiltersPanel.js ***!
  \*******************************************************/
/*! exports provided: FiltersPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPanel", function() { return FiltersPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextFilter */ "./src/sidebar/Tab_Links/Filters/TextFilter.js");
/* harmony import */ var _FilterTermsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterTermsList */ "./src/sidebar/Tab_Links/Filters/FilterTermsList.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FiltersPanel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FiltersPanel.css */ "./src/sidebar/Tab_Links/Filters/FiltersPanel.css");
/* harmony import */ var _FiltersPanel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FiltersPanel_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var FiltersPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(FiltersPanel, _React$Component);

  function FiltersPanel(props) {
    var _this;

    _classCallCheck(this, FiltersPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FiltersPanel).call(this, props));
    _this.updateFilters = _this.updateFilters.bind(_assertThisInitialized(_this));
    _this.updateShowUsed = _this.updateShowUsed.bind(_assertThisInitialized(_this));
    _this.updateShowNotUsed = _this.updateShowNotUsed.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FiltersPanel, [{
    key: "updateFilters",
    value: function updateFilters(updatedFilters) {
      var textFilter = updatedFilters.textFilter,
          showUsed = updatedFilters.showUsed,
          showNotUsed = updatedFilters.showNotUsed,
          checkedCategories = updatedFilters.checkedCategories;
      var updateNeeded = false;
      var propsFilters = Object.assign({}, this.props.currentFilters);

      if (textFilter !== undefined && textFilter !== propsFilters.textFilter) {
        propsFilters.textFilter = textFilter;
        updateNeeded = true;
      }

      if (checkedCategories !== undefined && checkedCategories !== propsFilters.subCategory) {
        propsFilters.checkedCategories = checkedCategories;
        updateNeeded = true;
      }

      if (showUsed !== undefined && showUsed !== propsFilters.showUsed) {
        propsFilters.showUsed = showUsed;
        updateNeeded = true;
      }

      if (showNotUsed !== undefined && showNotUsed !== propsFilters.showNotUsed) {
        propsFilters.showNotUsed = showNotUsed;
        updateNeeded = true;
      }

      if (updateNeeded) this.props.handleFiltersUpdate(propsFilters);
    }
  }, {
    key: "updateShowUsed",
    value: function updateShowUsed(isChecked) {
      this.updateFilters({
        showUsed: isChecked
      });
    }
  }, {
    key: "updateShowNotUsed",
    value: function updateShowNotUsed(isChecked) {
      this.updateFilters({
        showNotUsed: isChecked
      });
    } // в пропс имеем текст и список ссылок
    // из детей получаем фильтры
    // определить вердикт по фильтрам для каждой ссылки
    // заслать список ссылок обратно

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentFilters = _this$props.currentFilters,
          currentTerms = _this$props.currentTerms;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
        initialOpen: false
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subheader"
      }, "\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0432 \u0442\u0435\u043A\u0441\u0442\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cherry-filters-toggles"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "\u0415\u0441\u0442\u044C",
        checked: currentFilters.showUsed,
        onChange: this.updateShowUsed
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "\u041D\u0435\u0442",
        checked: currentFilters.showNotUsed,
        onChange: this.updateShowNotUsed
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subheader"
      }, "\u041F\u043E \u0441\u043B\u043E\u0432\u0443 \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextFilter__WEBPACK_IMPORTED_MODULE_1__["TextFilter"], {
        restoredText: currentFilters.textFilter,
        onChange: this.updateFilters
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "subheader"
      }, "\u041F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterTermsList__WEBPACK_IMPORTED_MODULE_2__["FilterTermsList"], {
        terms: currentTerms,
        checkedCategories: currentFilters.checkedCategories,
        onChange: this.updateFilters
      })))));
    }
  }]);

  return FiltersPanel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Tab_Links/Filters/TextFilter.js":
/*!*****************************************************!*\
  !*** ./src/sidebar/Tab_Links/Filters/TextFilter.js ***!
  \*****************************************************/
/*! exports provided: TextFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFilter", function() { return TextFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // const TextFilter = withState( {
//     className: '',
// } )( ( { className, setState } ) => ( 
//     <TextControl
//         label="Additional CSS Class"
//         value={ className }
//         onChange={ ( className ) => setState( { className } ) }
//     />
// ) );

var TextFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(TextFilter, _React$Component);

  function TextFilter(props) {
    var _this;

    _classCallCheck(this, TextFilter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextFilter).call(this, props));
    _this.handleONChange = _this.handleONChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextFilter, [{
    key: "handleONChange",
    value: function handleONChange(text) {
      this.props.onChange({
        textFilter: text
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentFilter = this.props.currentFilter;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
        value: currentFilter,
        onChange: this.handleONChange
      });
    }
  }]);

  return TextFilter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Tab_Links/LinkItem.js":
/*!*******************************************!*\
  !*** ./src/sidebar/Tab_Links/LinkItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/withLinkInsert */ "./src/sidebar/HOC/withLinkInsert.js");
/* harmony import */ var _Notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notices */ "./src/sidebar/Notices.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var LinkItem = /*#__PURE__*/function (_React$Component) {
  _inherits(LinkItem, _React$Component);

  function LinkItem(props) {
    _classCallCheck(this, LinkItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinkItem).call(this, props));
  }

  _createClass(LinkItem, [{
    key: "findSuggestions",
    value: function findSuggestions(sugg) {
      var _this$props = this.props,
          showSuggestions = _this$props.showSuggestions,
          linkObj = _this$props.linkObj; // Saving scroll position of links list to be able to return 
      // to the same place after suggestions will be closed

      var scrollPos = document.querySelector(".edit-post-sidebar").scrollTop;
      showSuggestions({
        rawKeywords: sugg,
        linkItem: linkObj
      }, scrollPos);
    }
  }, {
    key: "decodeHtml",
    value: function decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          linkObj = _this$props2.linkObj,
          editUrl = _this$props2.editUrl,
          clickHandler = _this$props2.clickHandler,
          copyLink = _this$props2.copyLink,
          postMeta = _this$props2.postMeta,
          inArticle = _this$props2.inArticle,
          changeBlockLinks = _this$props2.changeBlockLinks,
          onMetaChange = _this$props2.onMetaChange;
      var postId = linkObj["data-postid"],
          url = linkObj["data-url"],
          title = cherrylink_options.templates.isH1 === "true" ? this.decodeHtml(linkObj["data-title"]) : this.decodeHtml(linkObj["data-titleseo"]),
          incoming = linkObj["data-incoming"],
          outgoing = linkObj["data-outgoing"],
          sugg = linkObj["data-suggestions"];
      var inBlock = false;
      postMeta.blockLinks.forEach(function (element) {
        if (element.post_id === postId) {
          inBlock = true;
        }
      });
      var containerClass = inArticle ? "link-item-container insert-allowed inArticle" : "link-item-container insert-allowed";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onMouseDown: clickHandler,
        className: containerClass
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "link-toolbar-overlay  insert-allowed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "toolbar-actions"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "insert-allowed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "insert-allowed",
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/insert_link.png",
        title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onMouseDown: function onMouseDown(e) {
          e.stopPropagation();

          _this.findSuggestions(sugg);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/find_suggestions.png",
        title: "\u041D\u0430\u0439\u0442\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438",
        alt: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onMouseDown: function onMouseDown() {
          return changeBlockLinks(postId, title, postMeta, onMetaChange);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: inBlock ? "/wp-content/plugins/cherrylink/assets/gutenberg/del_from_block2.png" : "/wp-content/plugins/cherrylink/assets/gutenberg/add_to_block2.png",
        title: inBlock ? "Убрать из блока ссылок" : "Добавить в блок ссылок",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "toolbar-article"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onMouseDown: function onMouseDown() {
          return copyLink(url);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/copy_link.png",
        title: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: url
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/look_page.png",
        title: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u0442\u0430\u0442\u044C\u0438",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "".concat(editUrl, "?post=").concat(postId, "&action=edit")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/edit_page.png",
        title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",
        alt: ""
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "toolbar-stats"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        title: "\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438"
      }, "\uD83E\uDC05 ", outgoing), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        title: "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438"
      }, "\uD83E\uDC07 ", incoming)))));
    }
  }]);

  return LinkItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_1__["default"])(LinkItem));

/***/ }),

/***/ "./src/sidebar/Tab_Links/LinksList.js":
/*!********************************************!*\
  !*** ./src/sidebar/Tab_Links/LinksList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinksToolbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinksToolbar.css */ "./src/sidebar/Tab_Links/LinksToolbar.css");
/* harmony import */ var _LinksToolbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LinksToolbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkItem */ "./src/sidebar/Tab_Links/LinkItem.js");
/* harmony import */ var _HOC_withPostMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HOC/withPostMeta */ "./src/sidebar/HOC/withPostMeta.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var LinksList = /*#__PURE__*/function (_React$Component) {
  _inherits(LinksList, _React$Component);

  function LinksList(props) {
    var _this;

    _classCallCheck(this, LinksList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinksList).call(this, props));
    _this.state = {
      blockLinks: [],
      manualEdit: false,
      showAfter: false,
      showAfterChanged: false
    };
    _this.updateMetaState = _this.updateMetaState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LinksList, [{
    key: "isInArticle",
    value: function isInArticle(item, stats) {
      var inAricle = false;
      var convertedUrl = this.props.convertUrl(item['data-url']);

      for (var i in stats) {
        if (convertedUrl === stats[i].url) {
          inAricle = true;
          break;
        }
      }

      return inAricle;
    }
  }, {
    key: "shouldBeShown",
    value: function shouldBeShown(item, filters, inAricle) {
      // const currData = this.props.currentData;
      var hasText, hasCategory, showToggles;

      if (!filters.textFilter || item['data-title'].indexOf(filters.textFilter) !== -1) {
        hasText = true;
      } else {
        hasText = false;
      }

      var itemCats = item['data-category'].split(",");
      var intersection = itemCats.filter(function (x) {
        return filters.checkedCategories.includes(x);
      }).length > 0;

      if (filters.checkedCategories.length === 0 || intersection) {
        hasCategory = true;
      } else {
        hasCategory = false;
      }

      if (inAricle && filters.showUsed || !inAricle && filters.showNotUsed) {
        showToggles = true;
      } else {
        showToggles = false;
      }

      return hasText && hasCategory && showToggles;
    }
  }, {
    key: "updateMetaState",
    value: function updateMetaState(newState) {
      var _this2 = this;

      if (newState !== undefined) {
        this.props.updateMeta(newState);
        this.setState(function (prevState) {
          return newState;
        });
      } else {
        this.setState(function (prevState) {
          var meta = _this2.props.getMeta();

          return meta;
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateMetaState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.scrollPos) {
        document.querySelector(".edit-post-sidebar").scrollTop = this.props.scrollPos;
        this.props.updateScrollPos(0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          filters = _this$props.filters,
          data = _this$props.data,
          stats = _this$props.stats,
          showSuggestions = _this$props.showSuggestions,
          convertUrl = _this$props.convertUrl;
      var editUrl = "".concat(window.location.origin, "/wp-admin/post.php");
      var links = [];

      if (data instanceof Array && data.length > 0) {
        links = data.map(function (x) {
          // добавить фильтрацию
          var inAricle = _this3.isInArticle(x, stats);

          var isVisible = _this3.shouldBeShown(x, filters, inAricle);

          if (isVisible) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            editUrl: editUrl,
            linkObj: x,
            showSuggestions: showSuggestions,
            inArticle: inAricle,
            postMeta: _this3.state,
            convertUrl: convertUrl,
            onMetaChange: _this3.updateMetaState
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, links);
    }
  }]);

  return LinksList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withPostMeta__WEBPACK_IMPORTED_MODULE_3__["default"])(LinksList));

/***/ }),

/***/ "./src/sidebar/Tab_Links/LinksToolbar.css":
/*!************************************************!*\
  !*** ./src/sidebar/Tab_Links/LinksToolbar.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./LinksToolbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Links/LinksToolbar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/sidebar/Tab_Stats/StatsTab.css":
/*!********************************************!*\
  !*** ./src/sidebar/Tab_Stats/StatsTab.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./StatsTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Stats/StatsTab.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/sidebar/Tab_Stats/StatsTab.js":
/*!*******************************************!*\
  !*** ./src/sidebar/Tab_Stats/StatsTab.js ***!
  \*******************************************/
/*! exports provided: StatsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsTab", function() { return StatsTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StatsTab_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatsTab.css */ "./src/sidebar/Tab_Stats/StatsTab.css");
/* harmony import */ var _StatsTab_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_StatsTab_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StatsTab = /*#__PURE__*/function (_React$Component) {
  _inherits(StatsTab, _React$Component);

  function StatsTab(props) {
    var _this;

    _classCallCheck(this, StatsTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatsTab).call(this, props));
    _this.scrollInto = _this.scrollInto.bind(_assertThisInitialized(_this));
    _this.findNode = _this.findNode.bind(_assertThisInitialized(_this));
    return _this;
  } // search for the needed node in the editors div


  _createClass(StatsTab, [{
    key: "findNode",
    value: function findNode(href, ankor) {
      var stats = this.props.stats;
      var nodes = document.querySelector(".edit-post-visual-editor").querySelectorAll('a[href*="' + href + '"]');
      var offset = stats[ankor].offset; // for (let n of nodes) {
      //     if (n.innerText === ankor) {
      //         console.log(n);
      //         return n;
      //     }
      // }

      console.log("Target offset: " + offset);
      return nodes[offset];
    } // goto node if found

  }, {
    key: "scrollInto",
    value: function scrollInto(e) {
      e.preventDefault();
      var href = e.target.href; // let ankor = e.target.innerText;

      var ankor = parseInt(e.target.attributes["data-index"].value);

      if (!href) {
        return;
      } // try 1


      var node = this.findNode(href, ankor);
      if (this.showToUser(node)) return; // try 2

      var proto = location.protocol + "//";
      href = href.replace(proto, '');
      node = this.findNode(href, ankor);
      if (this.showToUser(node)) return; // try 3

      var host = location.host;
      href = href.replace(host, '');
      node = this.findNode(href, ankor);
      if (this.showToUser(node)) return; // Give up

      console.log("Ссылка не найдена в тексте");
    }
  }, {
    key: "showToUser",
    value: function showToUser(node) {
      if (node) {
        var selection = document.getSelection();
        selection.setBaseAndExtent(node, 0, node, 1);
        node.scrollIntoView({
          block: 'center'
        });
        this.selectBlock(node);
        return true;
      }

      return false;
    }
  }, {
    key: "selectBlock",
    value: function selectBlock(node) {
      var parent = node.closest("div.wp-block");

      if (parent) {
        var uid = parent.getAttribute("data-block");
        wp.data.dispatch("core/block-editor").selectBlock(uid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          stats = _this$props.stats,
          incoming = _this$props.incoming;
      var placeholder = "Ссылок пока нет...";
      var statsView, incomingView; // stats

      if (stats.length > 0) {
        statsView = stats.map(function (x, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: i
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: x.url,
            target: "_blank",
            "data-index": i,
            onClick: _this2.scrollInto,
            title: "\u041D\u0430\u0439\u0442\u0438 \u0432 \u0442\u0435\u043A\u0441\u0442\u0435"
          }, x.keyword), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0421\u0441\u044B\u043B\u0430\u0435\u0442\u0441\u044F \u043D\u0430 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: x.url,
            target: "_blank",
            title: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435"
          }, x.url)));
        });
        statsView = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
          className: "cherry-stats"
        }, statsView);
      } else {
        statsView = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, placeholder);
      } // incoming


      if (incoming.count > 0) {
        incomingView = incoming.links.map(function (x, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: i
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0421\u0441\u044B\u043B\u043A\u0430 \u0441 \u0430\u043D\u043A\u043E\u0440\u043E\u043C: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
            className: "cherry-incoming-ankor"
          }, x.ankor)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0418\u0437 \u0441\u0442\u0430\u0442\u044C\u0438: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: x.source_url,
            target: "_blank",
            title: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435"
          }, x.source_url)));
        });
        incomingView = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
          className: "cherry-incoming"
        }, incomingView);
      } else {
        incomingView = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, placeholder);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cherry-stats-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438"), incomingView, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["HorizontalRule"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438"), statsView);
    }
  }]);

  return StatsTab;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/sidebar/Tab_Terms/TermItem.js":
/*!*******************************************!*\
  !*** ./src/sidebar/Tab_Terms/TermItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HOC/withLinkInsert */ "./src/sidebar/HOC/withLinkInsert.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TermItem = /*#__PURE__*/function (_React$Component) {
  _inherits(TermItem, _React$Component);

  function TermItem(props) {
    _classCallCheck(this, TermItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TermItem).call(this, props));
  }

  _createClass(TermItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isChild = _this$props.isChild,
          inArticle = _this$props.inArticle,
          termName = _this$props.termName,
          termUrl = _this$props.termUrl,
          children = _this$props.children,
          copyLink = _this$props.copyLink,
          clickHandler = _this$props.clickHandler;
      var className = isChild ? 'term-checkbox-child' : 'term-checkbox-toplvl';
      var containerClass = inArticle ? "term-item-container insert-allowed inArticle" : "term-item-container insert-allowed";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: containerClass,
        onMouseDown: clickHandler
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, termName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "term-toolbar-overlay insert-allowed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "toolbar-actions insert-allowed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " insert-allowed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "insert-allowed",
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/insert_link.png",
        title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "toolbar-article"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onMouseDown: function onMouseDown() {
          return copyLink(termUrl);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/copy_link.png",
        title: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: termUrl
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/wp-content/plugins/cherrylink/assets/gutenberg/look_page.png",
        title: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0420\u0443\u0431\u0440\u0438\u043A\u0438",
        alt: ""
      })))))), children.length > 0 && children);
    }
  }]);

  return TermItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withLinkInsert__WEBPACK_IMPORTED_MODULE_1__["default"])(TermItem));

/***/ }),

/***/ "./src/sidebar/Tab_Terms/Terms.css":
/*!*****************************************!*\
  !*** ./src/sidebar/Tab_Terms/Terms.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Terms.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Tab_Terms/Terms.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/sidebar/Tab_Terms/TermsList.js":
/*!********************************************!*\
  !*** ./src/sidebar/Tab_Terms/TermsList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Terms_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Terms.css */ "./src/sidebar/Tab_Terms/Terms.css");
/* harmony import */ var _Terms_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Terms_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TermItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TermItem */ "./src/sidebar/Tab_Terms/TermItem.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TermsList = /*#__PURE__*/function (_React$Component) {
  _inherits(TermsList, _React$Component);

  function TermsList(props) {
    _classCallCheck(this, TermsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(TermsList).call(this, props));
  }

  _createClass(TermsList, [{
    key: "isInArticle",
    value: function isInArticle(item) {
      var _this$props = this.props,
          convertUrl = _this$props.convertUrl,
          stats = _this$props.stats;
      var inAricle = false;
      var convertedUrl = convertUrl(item.url);

      for (var i in stats) {
        if (convertedUrl === stats[i].url) {
          inAricle = true;
          break;
        }
      }

      return inAricle;
    }
  }, {
    key: "createTermsList",
    value: function createTermsList(termsList) {
      var listToRender = [];

      for (var i = 0; i < termsList.length; i++) {
        if (termsList[i].is_divider === "no") {
          var inArticle = this.isInArticle(termsList[i]);
          listToRender.push(this.convertToJSX(termsList[i], false, inArticle));
        } else {
          listToRender.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "term-divider"
          }, termsList[i].name));
        }
      }

      return listToRender;
    }
  }, {
    key: "convertToJSX",
    value: function convertToJSX(term, isChild, inArticle) {
      var children = [];

      if (term.children.length > 0) {
        for (var i = 0; i < term.children.length; i++) {
          var _inArticle = this.isInArticle(term.children[i]);

          children.push(this.convertToJSX(term.children[i], true, _inArticle));
        }
      }

      var jsxTerm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TermItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        termName: term.name,
        termUrl: term.url,
        children: children,
        isChild: isChild,
        inArticle: inArticle
      });
      return jsxTerm;
    }
  }, {
    key: "render",
    value: function render() {
      var terms = this.props.terms;
      var jsxTerms = this.createTermsList(terms);
      var output;

      if (terms.inProgress) {
        output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "terms-tab-spinner"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null));
      } else if (terms.isError) {
        output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438...");
      } else if (terms.length === 0 && jsxTerms.length === 0) {
        output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "error-text"
        }, "\u0420\u0443\u0431\u0440\u0438\u043A\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
      } else {
        output = jsxTerms;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, output);
    }
  }]);

  return TermsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TermsList);

/***/ }),

/***/ "./src/sidebar/TabsPanel.js":
/*!**********************************!*\
  !*** ./src/sidebar/TabsPanel.js ***!
  \**********************************/
/*! exports provided: TabsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPanel", function() { return TabsPanel; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);


var onSelect = function onSelect(tabName) {
  console.log('Selecting tab', tabName);
};

var TabsPanel = function TabsPanel(props) {
  return React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["TabPanel"], {
    className: "cherrylink-tabs-panel",
    activeClass: "tab-general-active",
    onSelect: props.onChange,
    orientation: "horizontal",
    tabs: [{
      name: 'tab-links',
      title: '',
      className: 'tab-general-style tab-links'
    }, {
      name: 'tab-tax',
      title: '',
      className: 'tab-general-style tab-taxonomies'
    }, {
      name: 'tab-stats',
      title: '',
      className: 'tab-general-style tab-stats'
    }, {
      name: 'tab-block',
      title: '',
      className: 'tab-general-style tab-blocklinks'
    }]
  }, function (tab) {
    return React.createElement(React.Fragment, null);
  });
};

/***/ }),

/***/ "./src/sidebar/Wrapper.css":
/*!*********************************!*\
  !*** ./src/sidebar/Wrapper.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Wrapper.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar/Wrapper.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/sidebar/Wrapper.js":
/*!********************************!*\
  !*** ./src/sidebar/Wrapper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editPost */ "@wordpress/editPost");
/* harmony import */ var _wordpress_editPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Data_GetData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Data/GetData */ "./src/sidebar/Data/GetData.js");
/* harmony import */ var _Tab_Links_LinksList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tab_Links/LinksList */ "./src/sidebar/Tab_Links/LinksList.js");
/* harmony import */ var _Tab_Terms_TermsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tab_Terms/TermsList */ "./src/sidebar/Tab_Terms/TermsList.js");
/* harmony import */ var _Tab_Links_Filters_FiltersPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tab_Links/Filters/FiltersPanel */ "./src/sidebar/Tab_Links/Filters/FiltersPanel.js");
/* harmony import */ var _TabsPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabsPanel */ "./src/sidebar/TabsPanel.js");
/* harmony import */ var _Data_GetAllTerms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Data/GetAllTerms */ "./src/sidebar/Data/GetAllTerms.js");
/* harmony import */ var _Data_GetArticleStats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Data/GetArticleStats */ "./src/sidebar/Data/GetArticleStats.js");
/* harmony import */ var _Tab_Stats_StatsTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tab_Stats/StatsTab */ "./src/sidebar/Tab_Stats/StatsTab.js");
/* harmony import */ var _Suggestions_SugestionsPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Suggestions/SugestionsPanel */ "./src/sidebar/Suggestions/SugestionsPanel.js");
/* harmony import */ var _Tab_BlockLinks_BlockLinksPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Tab_BlockLinks/BlockLinksPanel */ "./src/sidebar/Tab_BlockLinks/BlockLinksPanel.js");
/* harmony import */ var _Data_GetIncomingLinks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Data/GetIncomingLinks */ "./src/sidebar/Data/GetIncomingLinks.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Icons */ "./src/sidebar/Icons.js");
/* harmony import */ var _Wrapper_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Wrapper.css */ "./src/sidebar/Wrapper.css");
/* harmony import */ var _Wrapper_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Wrapper_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _GetMoreBtn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./GetMoreBtn */ "./src/sidebar/GetMoreBtn.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





















var CherryLinkSidebar = /*#__PURE__*/function (_React$Component) {
  _inherits(CherryLinkSidebar, _React$Component);

  function CherryLinkSidebar(props) {
    var _this;

    _classCallCheck(this, CherryLinkSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CherryLinkSidebar).call(this, props));
    _this.state = {
      currentData: {
        dataOffset: 0,
        data: [],
        loadLimit: parseInt(cherrylink_options['get_data_limit']),
        dataStatus: 0,
        // 0: first render; 1: success; 2: end reached; 3: not found
        inProgress: false,
        loadFunc: function loadFunc() {}
      },
      currentTab: 'tab1',
      currentTerms: [],
      currentFilters: {
        textFilter: '',
        showUsed: true,
        showNotUsed: true,
        checkedCategories: []
      },
      articleStats: [],
      incomingLinks: {},
      suggestionsData: false,
      scrollPos: false
    };
    _this.updateLinksData = _this.updateLinksData.bind(_assertThisInitialized(_this));
    _this.changeTab = _this.changeTab.bind(_assertThisInitialized(_this));
    _this.updateTermsData = _this.updateTermsData.bind(_assertThisInitialized(_this));
    _this.updateCurrentFilters = _this.updateCurrentFilters.bind(_assertThisInitialized(_this));
    _this.updateArticleStats = _this.updateArticleStats.bind(_assertThisInitialized(_this));
    _this.updateIncomingLinks = _this.updateIncomingLinks.bind(_assertThisInitialized(_this));
    _this.updateSuggestions = _this.updateSuggestions.bind(_assertThisInitialized(_this));
    _this.updateScrollPos = _this.updateScrollPos.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CherryLinkSidebar, [{
    key: "updateLinksData",
    value: function updateLinksData(newData) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          currentData: newData
        });
      });
    }
  }, {
    key: "updateTermsData",
    value: function updateTermsData(termsList) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          currentTerms: termsList
        });
      });
    }
  }, {
    key: "updateCurrentFilters",
    value: function updateCurrentFilters(filters) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          currentFilters: filters
        });
      });
    }
  }, {
    key: "updateArticleStats",
    value: function updateArticleStats(stats) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          articleStats: stats
        });
      });
    }
  }, {
    key: "updateIncomingLinks",
    value: function updateIncomingLinks(incoming) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          incomingLinks: incoming
        });
      });
    }
  }, {
    key: "updateSuggestions",
    value: function updateSuggestions(sugg) {
      var scrollPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          suggestionsData: sugg
        });
      });

      if (scrollPos) {
        this.updateScrollPos(scrollPos);
      }
    }
  }, {
    key: "updateScrollPos",
    value: function updateScrollPos(scrollPos) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          scrollPos: scrollPos
        });
      });
    }
  }, {
    key: "changeTab",
    value: function changeTab(tabName) {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          tabName: tabName
        });
      });
    }
  }, {
    key: "fcl_convertRelativeUrl",
    value: function fcl_convertRelativeUrl(url) {
      if (url.indexOf("http") !== -1) return url;
      var host = location.host;
      var proto = location.protocol;

      if (url.length > 0) {
        if (url.indexOf(host) === -1) {
          url = "//" + host + url;
        }

        if (url.indexOf(proto) === -1) {
          url = proto + url;
        }
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var tabToRender = this.state.tabName;
      var suggestionsData = this.state.suggestionsData;
      var renderPanel;

      if (suggestionsData) {
        // show suggestions panel if corresponding state exists
        renderPanel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Suggestions_SugestionsPanel__WEBPACK_IMPORTED_MODULE_13__["SuggestionsPanel"], {
          suggestionsData: suggestionsData,
          toggleSuggestionsPanel: this.updateSuggestions
        });
      } else {
        // show tabs/links
        renderPanel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabsPanel__WEBPACK_IMPORTED_MODULE_9__["TabsPanel"], {
          onChange: this.changeTab
        }), (!tabToRender || tabToRender === 'tab-links') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab_Links_Filters_FiltersPanel__WEBPACK_IMPORTED_MODULE_8__["FiltersPanel"], {
          currentData: this.state.currentData,
          currentFilters: this.state.currentFilters,
          currentTerms: this.state.currentTerms,
          handleDataUpdate: this.updateLinksData,
          handleFiltersUpdate: this.updateCurrentFilters
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab_Links_LinksList__WEBPACK_IMPORTED_MODULE_6__["default"], {
          data: this.state.currentData.data,
          scrollPos: this.state.scrollPos,
          updateScrollPos: this.updateScrollPos,
          filters: this.state.currentFilters,
          stats: this.state.articleStats,
          convertUrl: this.fcl_convertRelativeUrl,
          showSuggestions: this.updateSuggestions,
          blockLinks: this.state.blockLinks
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GetMoreBtn__WEBPACK_IMPORTED_MODULE_18__["GetMoreBtn"], this.state.currentData)), tabToRender === 'tab-tax' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab_Terms_TermsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          terms: this.state.currentTerms,
          convertUrl: this.fcl_convertRelativeUrl,
          stats: this.state.articleStats
        }), tabToRender === 'tab-stats' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab_Stats_StatsTab__WEBPACK_IMPORTED_MODULE_12__["StatsTab"], {
          stats: this.state.articleStats,
          incoming: this.state.incomingLinks
        }), tabToRender === 'tab-block' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab_BlockLinks_BlockLinksPanel__WEBPACK_IMPORTED_MODULE_14__["default"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editPost__WEBPACK_IMPORTED_MODULE_1__["PluginSidebarMoreMenuItem"], {
        target: "cherrylink-sidebar"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("CherryLink", "cherrylink")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editPost__WEBPACK_IMPORTED_MODULE_1__["PluginSidebar"], {
        name: "cherrylink-sidebar",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("CherryLink", "cherrylink")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Data_GetData__WEBPACK_IMPORTED_MODULE_5__["GetData"], {
        onDataChange: this.updateLinksData,
        currentData: this.state.currentData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Data_GetArticleStats__WEBPACK_IMPORTED_MODULE_11__["GetArticleStats"], {
        onChange: this.updateArticleStats,
        convertUrl: this.fcl_convertRelativeUrl
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Data_GetAllTerms__WEBPACK_IMPORTED_MODULE_10__["GetAllTerms"], {
        onTermsChange: this.updateTermsData,
        currentTerms: this.state.currentTerms
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Data_GetIncomingLinks__WEBPACK_IMPORTED_MODULE_15__["GetIncomingLinks"], {
        onChange: this.updateIncomingLinks
      }), renderPanel));
    }
  }]);

  return CherryLinkSidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var RegisterCherryLinkSidebar = function RegisterCherryLinkSidebar() {
  Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__["registerPlugin"])("cherrylink-sidebar", {
    icon: _Icons__WEBPACK_IMPORTED_MODULE_16__["default"].main,
    render: CherryLinkSidebar
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterCherryLinkSidebar);

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/editPost":
/*!*******************************************!*\
  !*** external {"this":["wp","editPost"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map