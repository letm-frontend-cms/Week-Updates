/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/ui-library/src/Alert.tsx"
/*!*******************************************!*\
  !*** ./packages/ui-library/src/Alert.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Alert({ children, type = "info", onClose }) {
    const styles = {
        info: "bg-blue-50 border-blue-300 text-blue-800",
        success: "bg-green-50 border-green-300 text-green-800",
        warning: "bg-yellow-50 border-yellow-300 text-yellow-800",
        error: "bg-red-50 border-red-300 text-red-800",
    };
    const icons = {
        info: "ℹ️",
        success: "✅",
        warning: "⚠️",
        error: "❌",
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `border-l-4 p-4 rounded ${styles[type]} relative` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-start" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-2xl mr-3" }, icons[type]),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-1" }, children),
            onClose && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: onClose, className: "ml-4 text-gray-500 hover:text-gray-700" }, "\u2715")))));
}


/***/ },

/***/ "./packages/ui-library/src/Button.tsx"
/*!********************************************!*\
  !*** ./packages/ui-library/src/Button.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Button({ children, onClick, variant = "primary", size = "md", disabled = false, }) {
    const baseStyles = "font-semibold rounded transition-colors duration-200";
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
    };
    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: onClick, disabled: disabled, className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}` },
        children,
        "111"));
}
// Add metadata for documentation
Button.displayName = "Button";


/***/ },

/***/ "./packages/ui-library/src/Card.tsx"
/*!******************************************!*\
  !*** ./packages/ui-library/src/Card.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Card({ children, title, footer, className = "" }) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${className}` },
        title && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-6 py-4 border-b border-gray-200 bg-gray-50" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-lg font-semibold text-gray-900" }, title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-6 py-4" }, children),
        footer && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-6 py-4 border-t border-gray-200 bg-gray-50" }, footer))));
}


/***/ },

/***/ "./packages/ui-library/src/index.ts"
/*!******************************************!*\
  !*** ./packages/ui-library/src/index.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* reexport safe */ _Alert__WEBPACK_IMPORTED_MODULE_2__.Alert),
/* harmony export */   Button: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   Card: () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_1__.Card),
/* harmony export */   UI_LIBRARY_VERSION: () => (/* binding */ UI_LIBRARY_VERSION)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./packages/ui-library/src/Button.tsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./packages/ui-library/src/Card.tsx");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert */ "./packages/ui-library/src/Alert.tsx");
// Export all components



// Package version
const UI_LIBRARY_VERSION = "1.0.0";


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = React;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./packages/ui-library/src/browser.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./packages/ui-library/src/index.ts");
/**
 * Browser entry: attaches UI library to window.GRFF_UI for runtime loading.
 * Built separately; host app provides React/ReactDOM via window before loading this script.
 */

window.GRFF_UI = {
    Button: _index__WEBPACK_IMPORTED_MODULE_0__.Button,
    Card: _index__WEBPACK_IMPORTED_MODULE_0__.Card,
    Alert: _index__WEBPACK_IMPORTED_MODULE_0__.Alert,
    version: _index__WEBPACK_IMPORTED_MODULE_0__.UI_LIBRARY_VERSION,
};

})();

/******/ })()
;
//# sourceMappingURL=grff-ui-library.js.map