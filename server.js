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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(2);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(6);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _bodyParser = __webpack_require__(7);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _tcgClock = __webpack_require__(8);

var _tcgClock2 = _interopRequireDefault(_tcgClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

//TCG clock return the angle between two clock hands
app.get('/tcg/getClockAngle', function (req, res, next) {
    var calcAngle = (0, _tcgClock.calculcateAngleBetweenTwoClockHands)(req.body);
    var jsonObj = { "clockAngle": calcAngle };

    res.send(jsonObj);
});

//RUN
app.listen(3000, function () {
    console.log('Server is listening on port: 3000');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculcateAngleBetweenTwoClockHands = calculcateAngleBetweenTwoClockHands;
function calculcateAngleBetweenTwoClockHands(data) {
    var dataJson = JSON.stringify(data);
    console.log("dataJson=" + dataJson); //remove in PROD

    var clock = data;
    if (clock == null) {
        return 'Error: input is null.';
    }

    if (clock.hour < 0 || clock.minute < 0 || clock.hour > 12 || clock.minute > 60) {
        return 'Error: wrong input.';
    }
    var hour = clock.hour;
    var minute = clock.minute;

    //check the input hour
    if (hour == 12) {
        hour = 0;
    }
    //check input minute
    if (minute == 60) {
        minute = 0;
        hour += 1;
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    //calc the angle moved by the hour and minute hands
    var hourAngle = (hour * 60 + minute) * 0.5;
    var minuteAngle = minute * 6;

    //difference between two angles  
    var clockAngle = Math.abs(hourAngle - minuteAngle);

    //the smaller angle of two possible angles  
    var angle = Math.min(360 - clockAngle, clockAngle);

    return angle;
}

/***/ })
/******/ ]);