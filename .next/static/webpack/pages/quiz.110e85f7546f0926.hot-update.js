"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./pages/quiz/index.js":
/*!*****************************!*\
  !*** ./pages/quiz/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _quiz_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz.json */ \"./pages/quiz/quiz.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar ShowQuiz = function(quiz, onSubmit) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bgcolor\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"card_center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                maxW: \"5xl\",\n                borderWidth: \"1px\",\n                borderRadius: \"lg\",\n                p: 6,\n                boxShadow: \"xl\",\n                className: \"cardstyle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            as: \"h2\",\n                            className: \"headingtext\",\n                            children: quiz.question\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                            columns: 2,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            mt: 5,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"centerimg redbox\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                            src: \"https://www.linkpicture.com/q/moon_1.jpg\",\n                                            alt: \"quizimg\",\n                                            className: \"quizstyle\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"centerimg greenbox\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                            src: \"https://www.linkpicture.com/q/boa1.jpg\",\n                                            alt: \"quizimg\",\n                                            className: \"quizstyle\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                            columns: 1,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"btnstyle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    colorScheme: \"blue\",\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_c = ShowQuiz;\nvar SingleQuiz = function() {\n    var quiz = _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions[0];\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, actions) {\n            return _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {\n                            console.log(values);\n                        } catch (error) {\n                            console.log('error', error);\n                        } finally{\n                            console.log(\"finally\");\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(values, actions) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: quiz && ShowQuiz(quiz, onSubmit)\n    }, void 0, false));\n};\n_c1 = SingleQuiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleQuiz);\nvar _c, _c1;\n$RefreshReg$(_c, \"ShowQuiz\");\n$RefreshReg$(_c1, \"SingleQuiz\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU95QjtBQUNBO0FBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsR0FBSyxDQUFDUSxRQUFRLEdBQUcsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLFFBQVEsRUFBSyxDQUFDO0lBQ3BDLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVM7OEZBQ3JCRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFhO2tHQUN6QlgsdURBQVM7Z0JBQ1JZLElBQUksRUFBQyxDQUFLO2dCQUNWQyxXQUFXLEVBQUMsQ0FBSztnQkFDakJDLFlBQVksRUFBQyxDQUFJO2dCQUNqQkMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0pDLFNBQVMsRUFBQyxDQUFJO2dCQUNkTCxTQUFTLEVBQUMsQ0FBVztzR0FFcEJELENBQUc7O29HQUNEVCxxREFBTzs0QkFBQ2dCLEVBQUUsRUFBQyxDQUFJOzRCQUFDTixTQUFTLEVBQUMsQ0FBYTtzQ0FDdENILElBQUksQ0FBQ1UsUUFBUTs7Ozs7O29HQUVkaEIsd0RBQVU7NEJBQUNpQixPQUFPLEVBQUUsQ0FBQzs0QkFBRUMsUUFBUSxFQUFDLENBQU07NEJBQUNDLFFBQVEsRUFBQyxDQUFNOzRCQUFDQyxFQUFFLEVBQUUsQ0FBQzs7NEdBQzFEWixDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBa0I7MEhBQzlCUixpREFBRzs4SEFDREMsbURBQUs7NENBQ0ptQixHQUFHLEVBQUMsQ0FBMEM7NENBQzlDQyxHQUFHLEVBQUMsQ0FBUzs0Q0FDYmIsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7NEdBSTFCRCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBb0I7MEhBQ2hDUixpREFBRzs4SEFDREMsbURBQUs7NENBQ0ptQixHQUFHLEVBQUMsQ0FBd0M7NENBQzVDQyxHQUFHLEVBQUMsQ0FBUzs0Q0FDYmIsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBSzVCVCx3REFBVTs0QkFBQ2lCLE9BQU8sRUFBRSxDQUFDOzRCQUFFQyxRQUFRLEVBQUMsQ0FBTTs0QkFBQ0MsUUFBUSxFQUFDLENBQU07a0hBQ3BEWCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBVTtzSEFDdEJaLG9EQUFNO29DQUFDMEIsV0FBVyxFQUFDLENBQU07OENBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEvQyxDQUFDO0tBOUNLbEIsUUFBUTtBQWdEZCxHQUFLLENBQUNtQixVQUFVLEdBQUcsUUFDbkIsR0FEeUIsQ0FBQztJQUV4QixHQUFLLENBQUNsQixJQUFJLEdBQUdGLG9EQUFZO0lBRXpCLEdBQUssQ0FBQ0csUUFBUTs2S0FBRyxRQUFRLFNBQURrQixNQUFNLEVBQUVDLE9BQU8sRUFBSyxDQUFDOzs7O3dCQUN6QyxHQUFHLENBQUMsQ0FBQzs0QkFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU07d0JBQ3BCLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEtBQUssRUFBRSxDQUFDOzRCQUNmRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPLFFBQUVDLEtBQUs7d0JBQzVCLENBQUMsUUFBUyxDQUFDOzRCQUNURixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTO3dCQUN2QixDQUFDOzs7Ozs7UUFDTCxDQUFDO3dCQVJLckIsUUFBUSxDQUFVa0IsTUFBTSxFQUFFQyxPQUFPOzs7O0lBVXZDLE1BQU07a0JBQUlwQixJQUFJLElBQUlELFFBQVEsQ0FBQ0MsSUFBSSxFQUFFQyxRQUFROztBQUMzQyxDQUFDO01BZktpQixVQUFVO0FBa0JoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXovaW5kZXguanM/YWNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgSGVhZGluZyxcbiAgU2ltcGxlR3JpZCxcbiAgQm94LFxuICBJbWFnZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHF1ZXN0aW9ucyB9IGZyb20gXCIuL3F1aXouanNvblwiO1xuXG5jb25zdCBTaG93UXVpeiA9IChxdWl6LCBvblN1Ym1pdCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdjb2xvclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2NlbnRlclwiPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgbWF4Vz1cIjV4bFwiXG4gICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgICBwPXs2fVxuICAgICAgICAgIGJveFNoYWRvdz1cInhsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkc3R5bGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBjbGFzc05hbWU9XCJoZWFkaW5ndGV4dFwiPlxuICAgICAgICAgICAgIHtxdWl6LnF1ZXN0aW9ufVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZ1g9XCI0MHB4XCIgc3BhY2luZ1k9XCIyMHB4XCIgbXQ9ezV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmltZyByZWRib3hcIj5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmxpbmtwaWN0dXJlLmNvbS9xL21vb25fMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJxdWl6aW1nXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVpenN0eWxlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmltZyBncmVlbmJveFwiPlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cubGlua3BpY3R1cmUuY29tL3EvYm9hMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJxdWl6aW1nXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVpenN0eWxlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17MX0gc3BhY2luZ1g9XCI0MHB4XCIgc3BhY2luZ1k9XCIyMHB4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuc3R5bGVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPk5leHQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTaW5nbGVRdWl6ID0gKCkgPT4ge1xuXG4gIGNvbnN0IHF1aXogPSBxdWVzdGlvbnNbMF07XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmFsbHlcIilcbiAgICAgIH1cbiAgfTtcblxuICByZXR1cm4gPD57cXVpeiAmJiBTaG93UXVpeihxdWl6LCBvblN1Ym1pdCl9PC8+O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVRdWl6O1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiQm94IiwiSW1hZ2UiLCJSZWFjdCIsInF1ZXN0aW9ucyIsIlNob3dRdWl6IiwicXVpeiIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWF4VyIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwicCIsImJveFNoYWRvdyIsImFzIiwicXVlc3Rpb24iLCJjb2x1bW5zIiwic3BhY2luZ1giLCJzcGFjaW5nWSIsIm10Iiwic3JjIiwiYWx0IiwiY29sb3JTY2hlbWUiLCJTaW5nbGVRdWl6IiwidmFsdWVzIiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz/index.js\n");

/***/ })

});