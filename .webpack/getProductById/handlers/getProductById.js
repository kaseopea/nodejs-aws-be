(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./handlers/getProductById.js":
/*!************************************!*\
  !*** ./handlers/getProductById.js ***!
  \************************************/
/*! namespace exports */
/*! export handler [provided] [maybe used in handlers/getProductById (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in handlers/getProductById (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handler": () => /* binding */ handler
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/products */ "./mock/products.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var handler = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {
    var product;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            product = _mock_products__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_MOCK.find(function (product) {
              return product.id === event.id;
            });
            _context.next = 4;
            return Promise.resolve(product);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            handleError(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function handler(_x) {
    return _ref.apply(this, arguments);
  };
}();

function handleError(err) {
  console.log(err);
}

/***/ }),

/***/ "./mock/products.js":
/*!**************************!*\
  !*** ./mock/products.js ***!
  \**************************/
/*! namespace exports */
/*! export PRODUCTS_MOCK [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCTS_MOCK": () => /* binding */ PRODUCTS_MOCK
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

var PRODUCTS_MOCK = [{
  "count": 4,
  "description": "Travel, Wedding & Events, Portrait, Family",
  "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
  "photo": "sigma_50_1_4.jpg",
  "price": 949,
  "title": "Sigma 50mm F1.4 DG ART"
}, {
  "count": 6,
  "description": "Travel, Wedding & Events, Portrait, Specialty",
  "id": "c162ca00-2d1b-46b4-b5d5-a48991ec76e2",
  "photo": "sigma_35_1_4.jpg",
  "price": 799,
  "title": "Sigma 35mm F1.4 DG"
}, {
  "count": 7,
  "description": "Creative, Travel, Landscape, Wedding & Events, Nature & Wildlife",
  "id": "3d807895-8f69-4d58-ba69-9c3b37826413",
  "photo": "sigma_24_1_4.jpg",
  "price": 849,
  "title": "Sigma 24mm F1.4 DG HSM"
}, {
  "count": 12,
  "description": "Creative, Travel, Wedding & Events, Portrait, Family, Specialty",
  "id": "b5cb5059-895d-4361-bda7-1dd4fcc05589",
  "photo": "sigma_35_1_2.jpg",
  "price": 1499,
  "title": "Sigma 35mm F1.2 DG DN"
}, {
  "count": 7,
  "description": "Creative, Travel, Landscape, Wedding & Events, Family, Nature & Wildlife, Specialty",
  "id": "2336175e-36d9-4411-9940-5bf1d42be247",
  "photo": "sigma_14_24_2_8.jpg",
  "price": 1399,
  "title": "Sigma 14-24mm F2.8 DG DN"
}, {
  "count": 8,
  "description": "Creative, Travel, Landscape, Wedding & Events, Family, Specialty",
  "id": "4efef041-d4f5-4f41-920f-2a7e32deeafe",
  "photo": "sigma_40_1_4.jpg",
  "price": 1399,
  "title": "Sigma 40mm F1.4 DG HSM"
}, {
  "count": 2,
  "description": "Creative, Travel, Landscape, Wedding & Events, Portrait, Family, Specialty",
  "id": "880a8fca-4e41-461d-bc4a-6499348cfa49",
  "photo": "sigma_24_70_2_8.jpg",
  "price": 1099,
  "title": "Sigma 24-70mm F2.8 DG"
}, {
  "count": 3,
  "description": "Travel, Portrait, Family, Nature & Wildlife",
  "id": "89ff091b-efe1-43d8-afb6-444dc5bb5818",
  "photo": "sigma_24_105_4.jpg",
  "price": 849,
  "title": "Sigma 24-105mm F4 DG"
}, {
  "count": 2,
  "description": "Creative, Wedding & Events, Portrait, Sports & Action, Specialty",
  "id": "e1948835-42ba-4e74-a539-2bf57b5df56b",
  "photo": "sigma_105_1_4.jpg",
  "price": 1599,
  "title": "Sigma 105mm F1.4 DG HSM"
}];

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./handlers/getProductById.js");
/******/ })()

));
//# sourceMappingURL=getProductById.js.map