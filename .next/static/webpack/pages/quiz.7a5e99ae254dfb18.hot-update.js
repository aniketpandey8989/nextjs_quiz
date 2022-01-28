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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _quiz_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz.json */ \"./pages/quiz/quiz.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ShowQuiz = function(quiz, onSubmit, handleAnswer, handleNext) {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bgcolor\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"card_center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                maxW: \"5xl\",\n                borderWidth: \"1px\",\n                borderRadius: \"lg\",\n                p: 6,\n                boxShadow: \"xl\",\n                className: \"cardstyle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                            as: \"h2\",\n                            className: \"headingtext\",\n                            children: quiz.question\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                            columns: 2,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            mt: 5,\n                            children: quiz.answers.map(function(dt, index) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    onClick: function() {\n                                        return handleAnswer(index);\n                                    },\n                                    className: quiz.correctIndex === index ? \"centerimg redbox\" : \"centerimg greenbox\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                            src: dt.img,\n                                            alt: \"logo\",\n                                            className: \"quizstyle\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, index, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                            columns: 1,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"btnstyle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: handleNext,\n                                    colorScheme: \"blue\",\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_c = ShowQuiz;\nvar SingleQuiz = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), questionNumber = ref[0], setQuestionNumber = ref[1];\n    var quiz = _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions[questionNumber];\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {\n            return _home_webiwork24_nextjs_quiz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {\n                            console.log(values);\n                        } catch (error) {\n                            console.log('error', error);\n                        } finally{\n                            console.log(\"finally\");\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(values) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleAnswer = function(index) {\n        console.log(\"handleAnswer clicked\", index);\n    };\n    var handleNext = function() {\n        console.log(\"handle next clicked\");\n        setQuestionNumber(questionNumber + 1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: quiz && ShowQuiz(quiz, onSubmit, handleAnswer, handleNext)\n    }, void 0, false));\n};\n_s(SingleQuiz, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = SingleQuiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleQuiz);\nvar _c, _c1;\n$RefreshReg$(_c, \"ShowQuiz\");\n$RefreshReg$(_c1, \"SingleQuiz\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQVBrQixLQUFLLEVBQUssQ0FBQztRQUMvQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBc0IsdUJBQUNaLEtBQUs7SUFDMUMsQ0FBQztJQUVELEdBQUssQ0FBQ2pCLFVBQVUsR0FBRyxRQUNyQixHQUQyQixDQUFDO1FBQ3hCNEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBcUI7UUFDakNILGlCQUFpQixDQUFDRCxjQUFjLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTTtrQkFBSTVCLElBQUksSUFBSUQsUUFBUSxDQUFDQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFDQyxVQUFVOztBQUNwRSxDQUFDO0dBekJLd0IsVUFBVTtNQUFWQSxVQUFVO0FBNEJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXovaW5kZXguanM/YWNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgSGVhZGluZyxcbiAgU2ltcGxlR3JpZCxcbiAgQm94LFxuICBJbWFnZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcXVlc3Rpb25zIH0gZnJvbSBcIi4vcXVpei5qc29uXCI7XG5cbmNvbnN0IFNob3dRdWl6ID0gKHF1aXosIG9uU3VibWl0LCBoYW5kbGVBbnN3ZXIsIGhhbmRsZU5leHQpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnY29sb3JcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9jZW50ZXJcIj5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFc9XCI1eGxcIlxuICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgICAgcD17Nn1cbiAgICAgICAgICBib3hTaGFkb3c9XCJ4bFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZHN0eWxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgY2xhc3NOYW1lPVwiaGVhZGluZ3RleHRcIj5cbiAgICAgICAgICAgICB7cXVpei5xdWVzdGlvbn1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IHNwYWNpbmdYPVwiNDBweFwiIHNwYWNpbmdZPVwiMjBweFwiIG10PXs1fT5cbiAgICAgICAgICAgIHtxdWl6LmFuc3dlcnMubWFwKChkdCxpbmRleCkgPT4ge1xuICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihpbmRleCl9IGNsYXNzTmFtZT0ge3F1aXouY29ycmVjdEluZGV4ID09PSBpbmRleCA/IFwiY2VudGVyaW1nIHJlZGJveFwiIDogXCJjZW50ZXJpbWcgZ3JlZW5ib3hcIn0+XG4gICAgICAgICAgICAgICAgPEJveCA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkdC5pbWd9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWl6c3R5bGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezF9IHNwYWNpbmdYPVwiNDBweFwiIHNwYWNpbmdZPVwiMjBweFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fSBjb2xvclNjaGVtZT1cImJsdWVcIj5OZXh0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2luZ2xlUXVpeiA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXN0aW9uTnVtYmVyLCBzZXRRdWVzdGlvbk51bWJlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHF1aXogPSBxdWVzdGlvbnNbcXVlc3Rpb25OdW1iZXJdO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5hbGx5XCIpXG4gICAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVBbnN3ZXIgY2xpY2tlZFwiLGluZGV4KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBuZXh0IGNsaWNrZWRcIilcbiAgICBzZXRRdWVzdGlvbk51bWJlcihxdWVzdGlvbk51bWJlciArIDEpXG4gIH1cblxuICByZXR1cm4gPD57cXVpeiAmJiBTaG93UXVpeihxdWl6LCBvblN1Ym1pdCwgaGFuZGxlQW5zd2VyLGhhbmRsZU5leHQpfTwvPjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUXVpejtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkJveCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9ucyIsIlNob3dRdWl6IiwicXVpeiIsIm9uU3VibWl0IiwiaGFuZGxlQW5zd2VyIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsIm1heFciLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsInAiLCJib3hTaGFkb3ciLCJhcyIsInF1ZXN0aW9uIiwiY29sdW1ucyIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJtdCIsImFuc3dlcnMiLCJtYXAiLCJkdCIsImluZGV4Iiwib25DbGljayIsImNvcnJlY3RJbmRleCIsInNyYyIsImltZyIsImFsdCIsImNvbG9yU2NoZW1lIiwiU2luZ2xlUXVpeiIsInF1ZXN0aW9uTnVtYmVyIiwic2V0UXVlc3Rpb25OdW1iZXIiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quiz/index.js\n");

/***/ })

});