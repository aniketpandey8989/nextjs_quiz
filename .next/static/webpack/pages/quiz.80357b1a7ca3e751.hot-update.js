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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _quiz_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz.json */ \"./pages/quiz/quiz.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ShowQuiz = function(quiz, onSubmit, handleAnswer, handleNext, questionNumber) {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bgcolor\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"card_center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                maxW: \"5xl\",\n                borderWidth: \"1px\",\n                borderRadius: \"lg\",\n                p: 6,\n                boxShadow: \"xl\",\n                className: \"cardstyle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            as: \"h2\",\n                            className: \"headingtext\",\n                            children: quiz.question\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                            columns: 2,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            mt: 5,\n                            children: quiz.answers.map(function(dt, index) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    onClick: function() {\n                                        return handleAnswer(index);\n                                    },\n                                    className: quiz.correctIndex === index ? \"centerimg redbox\" : \"centerimg greenbox\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                            src: dt.img,\n                                            alt: \"logo\",\n                                            className: \"quizstyle\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, index, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                            columns: 1,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"btnstyle\",\n                                children: questionNumber === _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions.length - 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: onSubmit,\n                                    colorScheme: \"blue\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: handleNext,\n                                    colorScheme: \"blue\",\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_c = ShowQuiz;\nvar SingleQuiz = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), questionNumber = ref[0], setQuestionNumber = ref[1];\n    var quiz = _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions[questionNumber];\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {\n            return _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {\n                            console.log(values);\n                        } catch (error) {\n                            console.log('error', error);\n                        } finally{\n                            console.log(\"finally\");\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(values) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleAnswer = function(index) {\n        console.log(\"handleAnswer clicked\", index);\n    };\n    var handleNext = function() {\n        console.log(\"handle next clicked\", questionNumber);\n        if (questionNumber < _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions.length - 1) {\n            setQuestionNumber(questionNumber + 1);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: quiz && ShowQuiz(quiz, onSubmit, handleAnswer, handleNext, questionNumber)\n    }, void 0, false));\n};\n_s(SingleQuiz, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = SingleQuiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleQuiz);\nvar _c, _c1;\n$RefreshReg$(_c, \"ShowQuiz\");\n$RefreshReg$(_c1, \"SingleQuiz\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs0QkFDVEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUzt3QkFDdkIsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQzt3QkFSS2hDLFFBQVEsQ0FBVThCLE1BQU07Ozs7SUFVOUIsR0FBSyxDQUFDN0IsWUFBWSxHQUFHLFFBQVEsQ0FBUG1CLEtBQUssRUFBSyxDQUFDO1FBQy9CVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFzQix1QkFBQ1osS0FBSztJQUMxQyxDQUFDO0lBRUQsR0FBSyxDQUFDbEIsVUFBVSxHQUFHLFFBQ3JCLEdBRDJCLENBQUM7UUFDeEI2QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxQixzQkFBQzdCLGNBQWM7UUFDaEQsRUFBRSxFQUFDQSxjQUFjLEdBQUdOLHdEQUFnQixHQUFFLENBQUMsRUFBQyxDQUFDO1lBQ3ZDZ0MsaUJBQWlCLENBQUMxQixjQUFjLEdBQUcsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU07a0JBQUlKLElBQUksSUFBSUQsUUFBUSxDQUFDQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFDQyxVQUFVLEVBQUNDLGNBQWM7O0FBQ25GLENBQUM7R0EzQkt5QixVQUFVO01BQVZBLFVBQVU7QUE4QmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei9pbmRleC5qcz9hY2M3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBIZWFkaW5nLFxuICBTaW1wbGVHcmlkLFxuICBCb3gsXG4gIEltYWdlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBxdWVzdGlvbnMgfSBmcm9tIFwiLi9xdWl6Lmpzb25cIjtcblxuY29uc3QgU2hvd1F1aXogPSAocXVpeiwgb25TdWJtaXQsIGhhbmRsZUFuc3dlciwgaGFuZGxlTmV4dCxxdWVzdGlvbk51bWJlcikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdjb2xvclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2NlbnRlclwiPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgbWF4Vz1cIjV4bFwiXG4gICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgICBwPXs2fVxuICAgICAgICAgIGJveFNoYWRvdz1cInhsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkc3R5bGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBjbGFzc05hbWU9XCJoZWFkaW5ndGV4dFwiPlxuICAgICAgICAgICAgIHtxdWl6LnF1ZXN0aW9ufVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZ1g9XCI0MHB4XCIgc3BhY2luZ1k9XCIyMHB4XCIgbXQ9ezV9PlxuICAgICAgICAgICAge3F1aXouYW5zd2Vycy5tYXAoKGR0LGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKGluZGV4KX0gY2xhc3NOYW1lPSB7cXVpei5jb3JyZWN0SW5kZXggPT09IGluZGV4ID8gXCJjZW50ZXJpbWcgcmVkYm94XCIgOiBcImNlbnRlcmltZyBncmVlbmJveFwifT5cbiAgICAgICAgICAgICAgICA8Qm94ID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2R0LmltZ31cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1aXpzdHlsZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17MX0gc3BhY2luZ1g9XCI0MHB4XCIgc3BhY2luZ1k9XCIyMHB4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuc3R5bGVcIj5cbiAgICAgICAgICAgICAge3F1ZXN0aW9uTnVtYmVyID09PSBxdWVzdGlvbnMubGVuZ3RoLTEgPyBcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBjb2xvclNjaGVtZT1cImJsdWVcIj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fSBjb2xvclNjaGVtZT1cImJsdWVcIj5OZXh0PC9CdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTaW5nbGVRdWl6ID0gKCkgPT4ge1xuICBjb25zdCBbcXVlc3Rpb25OdW1iZXIsIHNldFF1ZXN0aW9uTnVtYmVyXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgcXVpeiA9IHF1ZXN0aW9uc1txdWVzdGlvbk51bWJlcl07XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmFsbHlcIilcbiAgICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbnN3ZXIgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZUFuc3dlciBjbGlja2VkXCIsaW5kZXgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIG5leHQgY2xpY2tlZFwiLHF1ZXN0aW9uTnVtYmVyKVxuICAgIGlmKHF1ZXN0aW9uTnVtYmVyIDwgcXVlc3Rpb25zLmxlbmd0aCAtMSl7XG4gICAgICBzZXRRdWVzdGlvbk51bWJlcihxdWVzdGlvbk51bWJlciArIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDw+e3F1aXogJiYgU2hvd1F1aXoocXVpeiwgb25TdWJtaXQsIGhhbmRsZUFuc3dlcixoYW5kbGVOZXh0LHF1ZXN0aW9uTnVtYmVyKX08Lz47XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVF1aXo7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIlNpbXBsZUdyaWQiLCJCb3giLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJxdWVzdGlvbnMiLCJTaG93UXVpeiIsInF1aXoiLCJvblN1Ym1pdCIsImhhbmRsZUFuc3dlciIsImhhbmRsZU5leHQiLCJxdWVzdGlvbk51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsIm1heFciLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsInAiLCJib3hTaGFkb3ciLCJhcyIsInF1ZXN0aW9uIiwiY29sdW1ucyIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJtdCIsImFuc3dlcnMiLCJtYXAiLCJkdCIsImluZGV4Iiwib25DbGljayIsImNvcnJlY3RJbmRleCIsInNyYyIsImltZyIsImFsdCIsImxlbmd0aCIsImNvbG9yU2NoZW1lIiwiU2luZ2xlUXVpeiIsInNldFF1ZXN0aW9uTnVtYmVyIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz/index.js\n");

/***/ })

});