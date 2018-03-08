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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/js/app.js":
/*!******************************!*\
  !*** ./client/src/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./client/src/js/helpers.js\");\n/* harmony import */ var _fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchAPI.js */ \"./client/src/js/fetchAPI.js\");\n/*jshint esversion: 6 */\n\n\n\nObject(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".get\").addEventListener(\"click\", _fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"fetchTodos\"]); // get button\nObject(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".add\").addEventListener(\"click\", _fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"addTodo\"]);    // add button\n\n\n//# sourceURL=webpack:///./client/src/js/app.js?");

/***/ }),

/***/ "./client/src/js/fetchAPI.js":
/*!***********************************!*\
  !*** ./client/src/js/fetchAPI.js ***!
  \***********************************/
/*! exports provided: fetchTodos, addTodo, deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchTodos\", function() { return fetchTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodo\", function() { return deleteTodo; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./client/src/js/helpers.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ \"./client/src/js/template.js\");\n/*jshint esversion: 6 */\n\n\n\n\nconst url = \"/api/todo\"; // setting the api path\n\nconst fetchTodos = () => { // GET TODOS function\n    fetch(url)             // FetchAPI GET\n    .then(res => res.json())\n    .then(todos => {\n        Object(_template_js__WEBPACK_IMPORTED_MODULE_1__[\"getList\"])(todos);\n        const buttons = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$$\"])(\".delete\"); // after getting the list add event listeners fo delete buttons\n        buttons.forEach((button) => {\n            button.addEventListener(\"click\", deleteTodo);\n        });\n    });\n};\n\n\nconst addTodo = (e) => {                 // POST TODO function\n    e.preventDefault();                  // prevent page reload\n    const todoValue = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".input\").value; // get the input value of the new todo\n    fetch(url, {                         // FetchAPI POST\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json\",\n            \"Content-Type\": 'application/json'\n        },\n        body: JSON.stringify({todo: todoValue})\n    })\n    .then(fetchTodos()); // after inserting new todo get the whole list\n};\n\nconst deleteTodo = (e) => {    // DELETE TODO function\n    e.preventDefault();        // prevent page reload\n    const id = e.target.value; // get the id of the todo to be deleted\n    fetch(url, {               // FetchAPI DELETE\n        method: \"DELETE\",\n        headers: {\n            \"Accept\": \"application/json\",\n            \"Content-Type\": 'application/json'\n        },\n        body: JSON.stringify({id: id})\n    })\n    .then(fetchTodos()); // after deleting a todo get the whole list\n};\n\n\n\n//# sourceURL=webpack:///./client/src/js/fetchAPI.js?");

/***/ }),

/***/ "./client/src/js/helpers.js":
/*!**********************************!*\
  !*** ./client/src/js/helpers.js ***!
  \**********************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\n/*jshint esversion: 6 */\nconst $  = (selector) => document.querySelector(selector);\nconst $$ = (selector) => document.querySelectorAll(selector);\n\n\n\n//# sourceURL=webpack:///./client/src/js/helpers.js?");

/***/ }),

/***/ "./client/src/js/template.js":
/*!***********************************!*\
  !*** ./client/src/js/template.js ***!
  \***********************************/
/*! exports provided: getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getList\", function() { return getList; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./client/src/js/helpers.js\");\n/*jshint esversion: 6 */\n\n\nconst todoTemplate = (todo, id) => {\n    return `\n    <li>\n        <form action=\"api/todo\" method=\"DELETE\">\n            ${todo}\n            <button type=\"submit\" value=\"${id}\" class=\"delete\">X</button>\n        </form>\n    </li>\n    `;\n};\n\nconst getList = (data) => {\n    let template = \"\";\n    for(let item in data.todos) {\n        const currentTodo = data.todos[item].todo;\n        const currentId = data.todos[item]._id;\n\n        template += todoTemplate(currentTodo, currentId);\n    }\n    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".todos\").innerHTML = template;\n};\n\n\n\n\n//# sourceURL=webpack:///./client/src/js/template.js?");

/***/ })

/******/ });