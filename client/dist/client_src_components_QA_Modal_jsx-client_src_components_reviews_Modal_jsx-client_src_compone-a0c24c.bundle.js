/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstarfire_project_catwalk"] = self["webpackChunkstarfire_project_catwalk"] || []).push([["client_src_components_QA_Modal_jsx-client_src_components_reviews_Modal_jsx-client_src_compone-a0c24c"],{

/***/ "./client/src/components/QA/Modal.jsx":
/*!********************************************!*\
  !*** ./client/src/components/QA/Modal.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionList.module.css */ \"./client/src/components/QA/QuestionList.module.css\");\n\n\n\nvar Modal = function Modal(props) {\n  var modalContentStyle = props.size ? _QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__.default.modalContentWide : _QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__.default.modalContent;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__.default.backgroundModal\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__.default.modalWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: modalContentStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__.default.closeIcon,\n    onClick: props.closeOnClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-times\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, props.children)))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://starfire-project-catwalk/./client/src/components/QA/Modal.jsx?");

/***/ }),

/***/ "./client/src/components/reviews/Modal.jsx":
/*!*************************************************!*\
  !*** ./client/src/components/reviews/Modal.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar modalRoot = document.getElementById(\"modal-root\");\n\nvar Modal = /*#__PURE__*/function (_React$Component) {\n  _inherits(Modal, _React$Component);\n\n  var _super = _createSuper(Modal);\n\n  function Modal(props) {\n    var _this;\n\n    _classCallCheck(this, Modal);\n\n    _this = _super.call(this, props);\n    _this.el = document.createElement(\"div\");\n    return _this;\n  }\n\n  _createClass(Modal, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      modalRoot.appendChild(this.el);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      modalRoot.removeChild(this.el);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(this.props.children, this.el);\n    }\n  }]);\n\n  return Modal;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://starfire-project-catwalk/./client/src/components/reviews/Modal.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/QA/QuestionList.module.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/QA/QuestionList.module.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"._3lnYk-QqJsI2IxTmPA-I4n{color:grey;display:flex;align-items:center;padding:40px 250px!important;color:var(--text-color)}._3lnYk-QqJsI2IxTmPA-I4n>*{flex:1 100%}.ZiHh1Zu9IpexqUhOHbcgp{overflow:auto;max-height:60vh;min-height:10vh}._32J4jbpgGfMJDWCgy1sdgc{font-weight:400;font-size:20px;margin-bottom:35px;font-size:18px}.Qrd8KQyzBwafFv4m9s4Hj{border:solid 1px var(--text-color);text-align:start;font-weight:400;margin-bottom:35px;display:flex}._3DIfQNtkIbzQGLRn-B-xGI{width:90%;padding:12px 10px;margin:8px 10px;box-sizing:border-box;border:hidden;background-color:var(--bg-color);font-size:18px;font-weight:500;outline:0}::placeholder{color:var(--text-color);opacity:1}._1FnI5LvUIp5CIHa2kyA2ZT{margin-top:10px;font-size:40px}._3l6_qTfPVx8BgYckYSN29E{display:flex;font-size:16px;justify-content:space-between;margin-bottom:20px}._325h4iKOdDsSt0Om4Xp9L0{font-weight:700;margin-right:5px;font-size:20px}._3f8HoL0dZyzFZk7GE6eJSb{font-weight:700;font-size:20px;flex-grow:2}._34OzSk9FTRB-TOUQehdT0G{font-weight:500;margin-left:20px}.dqOzR7HyOlF9FMMRv8yJo{font-weight:400;color:#d96c06;text-decoration:underline;margin-left:20px;cursor:pointer}._3fG0VHMHBrfe1fDxuMLslA{font-weight:400;color:#d96c06;text-decoration:underline;margin-left:20px;cursor:pointer}._3L_8SLeRs5sKn-wl1tQeh0{display:flex;margin-top:20px}._2vR4hT614VjSG1OWx7VL-U{font-weight:400;font-size:20px}.x8FlJQBdgK9TNqwqgY2UD{display:flex}._2A2AKNG4E5m-i3oz2onsgh{display:flex;margin:10px 10px 10px 20px;font-size:16px}._2R0n6dBGhUYCYUw-NbedWI{font-weight:400}._3tV8rAoWYQOFFUNPOqdYud{font-weight:700}._2PAXgqfhoWUSFP8t2jd9OO{font-weight:500;margin-right:5px;font-size:18px}.Sb9PhPJkk8g4zjtT3cJ8z{font-weight:500;margin-right:5px;font-size:18px}._3HZr72WgI0jQyxRWAwHbvp{margin-left:20px}._1ErSPLE2eBE5r2peEhF9My{margin-left:20px;font-weight:500}._2aaIeWD1NcNB0IE7-rq5tb{margin-left:20px;color:#d96c06;text-decoration:underline;cursor:pointer}.ZYa8gkWuHuOexQ8yTJx1t{margin-left:20px;text-decoration:underline;font-weight:400;color:#d96c06}._3bPewzRi8qvDnQ1My5gd9Q{margin-left:20px;font-style:italic;font-weight:700;color:var(--text-color)}._3Aq1BZHAC6WIsg1z47Npd1{display:flex;margin-bottom:5px;margin-left:20px}.m3zQG50CJzVVJbDLMVGlh{margin-top:10px;margin-right:10px;height:70px;width:70px}._3uQJqs2eumpCp06shhvUzP{margin:20px 0 20px 20px;font-weight:400;font-size:18px;text-decoration:underline}._24qU8k6nBGhjcdBYatZ9_h{position:fixed;padding-top:50px;padding-bottom:50px;top:0;left:0;width:100%;height:100%;overflow-y:scroll;background-color:#000;background-color:rgba(0,0,0,.5)}.KZlNBrCdvVEZLbfvRN0cF{border-radius:10px;position:relative;background-color:#fff;padding:20px;margin:auto;width:30%;-webkit-animation-name:_3pEcnBUfsvvtaJMqZ28omU;-webkit-animation-duration:.4s;animation-name:_3pEcnBUfsvvtaJMqZ28omU;animation-duration:.4s}._1UOij9PMCZobSWZl9d8YPx{position:relative;background-color:#fff;padding:20px;margin:auto;width:50%;height:80%;overflow-y:scroll;-webkit-animation-name:_3pEcnBUfsvvtaJMqZ28omU;-webkit-animation-duration:.4s;animation-name:_3pEcnBUfsvvtaJMqZ28omU;animation-duration:.4s}@-webkit-keyframes _3pEcnBUfsvvtaJMqZ28omU{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes _3pEcnBUfsvvtaJMqZ28omU{from{top:-300px;opacity:0}to{top:0;opacity:1}}.v67tNSaM0HHFXEEftdmf9{cursor:pointer;color:grey;text-align:right}._1aZqJACq00Z7vSfcgzzjm{width:80%}._2aPKerQxvrvRyf1AL0jpZD{margin:auto;padding:15px;color:grey;overflow:auto}._2MBD3Vr-kYY2uK-mP5ppf7{margin:auto;padding:10px;text-align:center}.uRddvOkfZdRUDykInTI7K{margin:auto;width:100%}._3n8ScfuWCz7_bzO_lLXiQQ{margin:auto;width:100%}._2bqS-gLJs8RsjvigQcYkLE{margin:auto;width:100%;height:200px;font-family:Roboto,sans-serif}._2R1VNgdmdiAl5_EvQAQKwE{text-align:left;font-size:16px}._19lToDf8LDVPuWizq4-E7r{margin:10px 0}.oQLuDEGNfTKQ7cxJKhDVt{padding-bottom:15px}._2n6rjhq6Rut9KMFkfqhTuS{text-align:left;font-style:italic;font-weight:300;font-size:12px;padding-top:5px;padding-bottom:15px}._3N9BeC_yFjDhv-DXEU5mgs{text-align:left;font-style:italic;font-weight:400;font-size:12px;margin:5px 0 0 0}._2lkXvyDf99L0GYrQKD5DWK{margin-right:10px}._154jwgkVfEdH6tFM4CzQWA{font-weight:500}._3a9R6UPdY6M-MgIGjRk4jY{color:red;font-size:12px;font-style:italic}._2HqLJ2KT2vgEHgapJWofiC{padding:12px 30px;width:350px;border:red 1px solid;transition:outline .6s linear}._13ozYans0GiIM8J5cHMUsX{border:red 1px solid;padding:12px 30px;width:350px;height:200px;font-family:Roboto,sans-serif;transition:outline .6s linear}._3ADipUc7NtwTYtY34xl62Q{background-color:var(--highlight-color)}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"qaSection\": \"_3lnYk-QqJsI2IxTmPA-I4n\",\n\t\"qaList\": \"ZiHh1Zu9IpexqUhOHbcgp\",\n\t\"qaTitle\": \"_32J4jbpgGfMJDWCgy1sdgc\",\n\t\"searchBoxSection\": \"Qrd8KQyzBwafFv4m9s4Hj\",\n\t\"searchBar\": \"_3DIfQNtkIbzQGLRn-B-xGI\",\n\t\"searchIcon\": \"_1FnI5LvUIp5CIHa2kyA2ZT\",\n\t\"questionBody\": \"_3l6_qTfPVx8BgYckYSN29E\",\n\t\"questionLetter\": \"_325h4iKOdDsSt0Om4Xp9L0\",\n\t\"questionText\": \"_3f8HoL0dZyzFZk7GE6eJSb\",\n\t\"questionHelpful\": \"_34OzSk9FTRB-TOUQehdT0G\",\n\t\"questionHelpfulness\": \"dqOzR7HyOlF9FMMRv8yJo\",\n\t\"questionAddAnswer\": \"_3fG0VHMHBrfe1fDxuMLslA\",\n\t\"questionListButtons\": \"_3L_8SLeRs5sKn-wl1tQeh0\",\n\t\"answerSection\": \"_2vR4hT614VjSG1OWx7VL-U\",\n\t\"answerBody\": \"x8FlJQBdgK9TNqwqgY2UD\",\n\t\"answerMeta\": \"_2A2AKNG4E5m-i3oz2onsgh\",\n\t\"answerName\": \"_2R0n6dBGhUYCYUw-NbedWI\",\n\t\"answerNameBold\": \"_3tV8rAoWYQOFFUNPOqdYud\",\n\t\"answerLetter\": \"_2PAXgqfhoWUSFP8t2jd9OO\",\n\t\"answerText\": \"Sb9PhPJkk8g4zjtT3cJ8z\",\n\t\"answerDate\": \"_3HZr72WgI0jQyxRWAwHbvp\",\n\t\"answerHelpful\": \"_1ErSPLE2eBE5r2peEhF9My\",\n\t\"answerHelpfulness\": \"_2aaIeWD1NcNB0IE7-rq5tb\",\n\t\"answerReport\": \"ZYa8gkWuHuOexQ8yTJx1t\",\n\t\"answerReportBold\": \"_3bPewzRi8qvDnQ1My5gd9Q\",\n\t\"thumbails\": \"_3Aq1BZHAC6WIsg1z47Npd1\",\n\t\"smallImg\": \"m3zQG50CJzVVJbDLMVGlh\",\n\t\"loadMoreAnswers\": \"_3uQJqs2eumpCp06shhvUzP\",\n\t\"modalWrapper\": \"_24qU8k6nBGhjcdBYatZ9_h\",\n\t\"modalContent\": \"KZlNBrCdvVEZLbfvRN0cF\",\n\t\"animatetop\": \"_3pEcnBUfsvvtaJMqZ28omU\",\n\t\"modalContentWide\": \"_1UOij9PMCZobSWZl9d8YPx\",\n\t\"closeIcon\": \"v67tNSaM0HHFXEEftdmf9\",\n\t\"inputContainer\": \"_1aZqJACq00Z7vSfcgzzjm\",\n\t\"form\": \"_2aPKerQxvrvRyf1AL0jpZD\",\n\t\"formButton\": \"_2MBD3Vr-kYY2uK-mP5ppf7\",\n\t\"formName\": \"uRddvOkfZdRUDykInTI7K\",\n\t\"formEmail\": \"_3n8ScfuWCz7_bzO_lLXiQQ\",\n\t\"formBody\": \"_2bqS-gLJs8RsjvigQcYkLE\",\n\t\"labelForm\": \"_2R1VNgdmdiAl5_EvQAQKwE\",\n\t\"formWrapper\": \"_19lToDf8LDVPuWizq4-E7r\",\n\t\"productNameWrapper\": \"oQLuDEGNfTKQ7cxJKhDVt\",\n\t\"charCount\": \"_2n6rjhq6Rut9KMFkfqhTuS\",\n\t\"finePrint\": \"_3N9BeC_yFjDhv-DXEU5mgs\",\n\t\"submittedForm\": \"_2lkXvyDf99L0GYrQKD5DWK\",\n\t\"charCountBold\": \"_154jwgkVfEdH6tFM4CzQWA\",\n\t\"danger\": \"_3a9R6UPdY6M-MgIGjRk4jY\",\n\t\"dangerOutline\": \"_2HqLJ2KT2vgEHgapJWofiC\",\n\t\"dangerBodyOutline\": \"_13ozYans0GiIM8J5cHMUsX\",\n\t\"highlightText\": \"_3ADipUc7NtwTYtY34xl62Q\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://starfire-project-catwalk/./client/src/components/QA/QuestionList.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/reviews/Reviews.module.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/reviews/Reviews.module.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".g3purg_XsFK82A9g2l02q{color:var(--text-color);font-size:18px;display:grid;width:75%;padding-bottom:50px;margin:auto;column-gap:5%;grid-template-columns:1fr 1.6fr;grid-template-rows:auto;grid-template-areas:\\\"Product-Breakdown Reviews-List .\\\" \\\". . .\\\" \\\". . .\\\"}._1du2PPB00DRyIuh8i85D-0{grid-area:Reviews-List;max-height:800px;min-height:55vh;overflow-y:auto;overflow-x:hidden}.OFyYBwgJECKxbFmn1niyI{grid-area:Product-Breakdown;padding-top:35px;text-align:left}._3jv4I8D7xjL3drljYu9hH9{width:95%;border-bottom:1px solid grey;padding-bottom:20px;padding-top:10px;margin-bottom:20px}.kiXBXipsKoE06amjHF38t{display:in-line;margin-top:20px;margin-right:20px;margin-bottom:0;padding:20px;color:#fff;font-size:15px;line-height:20px;background-color:#26a7ba}._26ze8pvpLj2M4Ihbi8_g9e{font-size:20px;font-weight:700;margin-bottom:10px}._1DRSGrKuNRz4RwIGVzFrSe{font-size:12px;text-align:right;opacity:80%;margin-bottom:15px;padding-right:5px}._3Nkwcdmqc3-P4Hb_irR6iq{display:inline}._2JNrKME2bVL6R4d8vEf8tx{display:inline;margin-top:10px;margin-right:10px}._1v_MB7GfXK0dWgUSEhrJCf{text-decoration:underline;cursor:pointer}._3kA9xL0A4QlqJplqOcnYQ{background-color:rgba(0,0,0,.5);position:fixed;height:100%;width:100%;top:0;left:0;display:flex;align-items:center;justify-content:center}._283oflFgO6cKRqt4lUsD8O{color:#d3d3d3;margin:10px;text-align:right;cursor:pointer;display:block}._26xJNjNA0wgp0eCy_GASmE{color:grey;margin:20px}._1azbgPqwpzOEAeLKR_r6Dj{margin-bottom:10px;margin-top:10px}.dIZ_bkm8Sk2QSWWVJf6id{font-family:Roboto,sans-serif}.N47sTMkrAIv6C5qxlmvOM{-webkit-appearance:none;color:grey;border:none;background-color:#f5efed;font-family:Roboto,sans-serif;font-size:18px;text-decoration:underline}._25EaVK18wSmO4hza9nsFt2{height:20px;width:20px;display:inline-block;vertical-align:top;margin-top:15px}.CTx9nQgXQqoVXiQlz6v6P{height:20px;width:20px}._3G-2fqu0KyDrroT4A-LDqC{width:100%}._3SAaXEjQRifkG3zoszYD8T{padding:0;display:inline-block;vertical-align:middle;background-color:#d3d3d3;margin:0;height:20px;width:80%;border-radius:50px;padding-bottom:5px}._2uAxyvcc0NDnEy4dTUIOkC{color:rgba(255,255,255,.75);text-align:center;background:#d96c06;height:100%;border-radius:inherit;padding-bottom:5px}._26dxt5FSpbF1CjnRCtcLJ_{margin:20px 0;transition:transform .3s;cursor:pointer}._26dxt5FSpbF1CjnRCtcLJ_:hover{transform:scale(1.1)}.uETed98tWuY0VxiW7cKtB{padding:20px;margin:10px 0;background-color:#d3d3d3}._2ifGi0SjuDHZr1zrnr8GaG{width:90%;display:flex}.nQhxSXn12OCx7g6CMCctJ{margin-left:auto;margin-right:0}._3-BIQ2aSMxb-BlONDPNwZ5{padding:5px;font-size:14px;color:#d96c06}._1NQCKtTF7QlYKXqxCCq9yg{height:100%;border-radius:inherit;color:var(--icon-color)}#_3cCR7Y8E0QE-L9Ab4QdQAF{scroll-behavior:smooth}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"gridContainer\": \"g3purg_XsFK82A9g2l02q\",\n\t\"reviewsList\": \"_1du2PPB00DRyIuh8i85D-0\",\n\t\"productBreakdown\": \"OFyYBwgJECKxbFmn1niyI\",\n\t\"reviewTile\": \"_3jv4I8D7xjL3drljYu9hH9\",\n\t\"reviewButtons\": \"kiXBXipsKoE06amjHF38t\",\n\t\"reviewSummary\": \"_26ze8pvpLj2M4Ihbi8_g9e\",\n\t\"userDate\": \"_1DRSGrKuNRz4RwIGVzFrSe\",\n\t\"thumbnails\": \"_3Nkwcdmqc3-P4Hb_irR6iq\",\n\t\"smallImg\": \"_2JNrKME2bVL6R4d8vEf8tx\",\n\t\"showMore\": \"_1v_MB7GfXK0dWgUSEhrJCf\",\n\t\"modal\": \"_3kA9xL0A4QlqJplqOcnYQ\",\n\t\"exit\": \"_283oflFgO6cKRqt4lUsD8O\",\n\t\"reviewForm\": \"_26xJNjNA0wgp0eCy_GASmE\",\n\t\"formTitle\": \"_1azbgPqwpzOEAeLKR_r6Dj\",\n\t\"fields\": \"dIZ_bkm8Sk2QSWWVJf6id\",\n\t\"dropDown\": \"N47sTMkrAIv6C5qxlmvOM\",\n\t\"stars\": \"_25EaVK18wSmO4hza9nsFt2\",\n\t\"star\": \"CTx9nQgXQqoVXiQlz6v6P\",\n\t\"ratingFilters\": \"_3G-2fqu0KyDrroT4A-LDqC\",\n\t\"bar\": \"_3SAaXEjQRifkG3zoszYD8T\",\n\t\"filler\": \"_2uAxyvcc0NDnEy4dTUIOkC\",\n\t\"ratingBar\": \"_26dxt5FSpbF1CjnRCtcLJ_\",\n\t\"response\": \"uETed98tWuY0VxiW7cKtB\",\n\t\"characteristicRow\": \"_2ifGi0SjuDHZr1zrnr8GaG\",\n\t\"characteristic\": \"nQhxSXn12OCx7g6CMCctJ\",\n\t\"characteristicSelection\": \"_3-BIQ2aSMxb-BlONDPNwZ5\",\n\t\"icon\": \"_1NQCKtTF7QlYKXqxCCq9yg\",\n\t\"reviews\": \"_3cCR7Y8E0QE-L9Ab4QdQAF\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://starfire-project-catwalk/./client/src/components/reviews/Reviews.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./client/src/components/QA/QuestionList.module.css":
/*!**********************************************************!*\
  !*** ./client/src/components/QA/QuestionList.module.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./QuestionList.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/QA/QuestionList.module.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_QuestionList_module_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://starfire-project-catwalk/./client/src/components/QA/QuestionList.module.css?");

/***/ }),

/***/ "./client/src/components/reviews/Reviews.module.css":
/*!**********************************************************!*\
  !*** ./client/src/components/reviews/Reviews.module.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Reviews.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./client/src/components/reviews/Reviews.module.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://starfire-project-catwalk/./client/src/components/reviews/Reviews.module.css?");

/***/ })

}]);