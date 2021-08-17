"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksteffandkevin"] = self["webpackChunksteffandkevin"] || []).push([["modal"],{

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Modal {\r\n    constructor() {\r\n        this.injectHTML()\r\n        this.modal = document.querySelector(\".modal\")\r\n        this.closeModal = document.querySelector(\".modal__close\")\r\n        this.events()\r\n    }\r\n\r\n    events() {\r\n\r\n        //listen for close modal button being clicked\r\n        this.closeModal.addEventListener(\"click\", () => this.closeTheModal())\r\n\r\n        //pushes any key\r\n        document.addEventListener(\"keyup\", e => this.keyPressHandler(e))\r\n    }\r\n\r\n    keyPressHandler(e) {\r\n        if (e.keyCode == 27) {\r\n            this.closeTheModal()\r\n            \r\n        }\r\n    }\r\n    \r\n    openTheModal() {\r\n        this.modal.classList.add(\"modal--is-visible\")\r\n    }\r\n\r\n    closeTheModal() {\r\n        this.modal.classList.remove(\"modal--is-visible\")\r\n    }\r\n\r\n    injectHTML() {\r\n        document.body.insertAdjacentHTML('beforeend', `\r\n        <div class=\"modal\">\r\n        <div class=\"modal__inner\">\r\n        <h2 class=\"section-title section-title--less-margin\">Get in <strong>Touch</strong></h2>\r\n        <div class=\"wrapper wrapper--narrow\">\r\n        <p class=\"modal__description\">Got a question? Want to drop us a quick line? <a href=\"mailto:wedding@steffandkevin.com\">Send us a message</a></p>\r\n        <div class=\"modal__close\">X</div>\r\n        `)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://steffandkevin/./app/assets/scripts/modules/Modal.js?");

/***/ })

}]);