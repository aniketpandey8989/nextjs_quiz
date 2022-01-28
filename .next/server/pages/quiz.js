"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/quiz";
exports.ids = ["pages/quiz"];
exports.modules = {

/***/ "./pages/quiz/index.js":
/*!*****************************!*\
  !*** ./pages/quiz/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _quiz_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz.json */ \"./pages/quiz/quiz.json\");\n\n\n\n\nconst ShowQuiz = (quiz, onSubmit, handleAnswer, handleNext, questionNumber)=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bgcolor\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card_center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                maxW: \"5xl\",\n                borderWidth: \"1px\",\n                borderRadius: \"lg\",\n                p: 6,\n                boxShadow: \"xl\",\n                className: \"cardstyle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                            as: \"h2\",\n                            className: \"headingtext\",\n                            children: quiz.question\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n                            columns: 2,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            mt: 5,\n                            children: quiz.answers.map((dt, index)=>{\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>handleAnswer(index)\n                                    ,\n                                    className: quiz.correctIndex === index ? \"centerimg redbox\" : \"centerimg greenbox\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                                src: dt.img,\n                                                alt: \"logo\",\n                                                className: \"quizstyle\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                                src: \"https://www.linkpicture.com/q/checked-1.png\",\n                                                alt: \"quizimg\",\n                                                className: \"checkright\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 2\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, undefined));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n                            columns: 1,\n                            spacingX: \"40px\",\n                            spacingY: \"20px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btnstyle\",\n                                children: questionNumber === _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions.length - 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    onClick: onSubmit,\n                                    colorScheme: \"blue\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    onClick: handleNext,\n                                    colorScheme: \"blue\",\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/webiwork24/nextjs_quiz/pages/quiz/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined));\n};\nconst SingleQuiz = ()=>{\n    const { 0: questionNumber , 1: setQuestionNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const quiz = _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions[questionNumber];\n    const onSubmit = async (values)=>{\n        try {\n            console.log(values);\n        } catch (error) {\n            console.log('error', error);\n        } finally{\n            console.log(\"finally\");\n        }\n    };\n    const handleAnswer = (index)=>{\n        console.log(\"handleAnswer clicked\", index);\n    };\n    const handleNext = ()=>{\n        console.log(\"handle next clicked\", questionNumber);\n        if (questionNumber < _quiz_json__WEBPACK_IMPORTED_MODULE_3__.questions.length - 1) {\n            setQuestionNumber(questionNumber + 1);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: quiz && ShowQuiz(quiz, onSubmit, handleAnswer, handleNext, questionNumber)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleQuiz);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMvQixZQUFZLElBQUltQixLQUFLLEdBQUssQ0FBQztRQUMvQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBc0IsdUJBQUNaLEtBQUs7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQ2xCLFVBQVUsT0FBUyxDQUFDO1FBQ3hCNkIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBcUIsc0JBQUM3QixjQUFjO1FBQ2hELEVBQUUsRUFBQ0EsY0FBYyxHQUFHTix3REFBZ0IsR0FBRSxDQUFDLEVBQUMsQ0FBQztZQUN2Q2dDLGlCQUFpQixDQUFDMUIsY0FBYyxHQUFHLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNO2tCQUFJSixJQUFJLElBQUlELFFBQVEsQ0FBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBQ0MsVUFBVSxFQUFDQyxjQUFjOztBQUNuRixDQUFDO0FBR0QsaUVBQWV5QixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfcXVpei8uL3BhZ2VzL3F1aXovaW5kZXguanM/YWNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgSGVhZGluZyxcbiAgU2ltcGxlR3JpZCxcbiAgQm94LFxuICBJbWFnZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcXVlc3Rpb25zIH0gZnJvbSBcIi4vcXVpei5qc29uXCI7XG5cbmNvbnN0IFNob3dRdWl6ID0gKHF1aXosIG9uU3VibWl0LCBoYW5kbGVBbnN3ZXIsIGhhbmRsZU5leHQscXVlc3Rpb25OdW1iZXIpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnY29sb3JcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9jZW50ZXJcIj5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFc9XCI1eGxcIlxuICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgICAgcD17Nn1cbiAgICAgICAgICBib3hTaGFkb3c9XCJ4bFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZHN0eWxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgY2xhc3NOYW1lPVwiaGVhZGluZ3RleHRcIj5cbiAgICAgICAgICAgICB7cXVpei5xdWVzdGlvbn1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IHNwYWNpbmdYPVwiNDBweFwiIHNwYWNpbmdZPVwiMjBweFwiIG10PXs1fT5cbiAgICAgICAgICAgIHtxdWl6LmFuc3dlcnMubWFwKChkdCxpbmRleCkgPT4ge1xuICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihpbmRleCl9IGNsYXNzTmFtZT0ge3F1aXouY29ycmVjdEluZGV4ID09PSBpbmRleCA/IFwiY2VudGVyaW1nIHJlZGJveFwiIDogXCJjZW50ZXJpbWcgZ3JlZW5ib3hcIn0+XG4gICAgICAgICAgICAgICAgPEJveCA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkdC5pbWd9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWl6c3R5bGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cubGlua3BpY3R1cmUuY29tL3EvY2hlY2tlZC0xLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInF1aXppbWdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja3JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsxfSBzcGFjaW5nWD1cIjQwcHhcIiBzcGFjaW5nWT1cIjIwcHhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zdHlsZVwiPlxuICAgICAgICAgICAgICB7cXVlc3Rpb25OdW1iZXIgPT09IHF1ZXN0aW9ucy5sZW5ndGgtMSA/IFxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25TdWJtaXR9IGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9IGNvbG9yU2NoZW1lPVwiYmx1ZVwiPk5leHQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNpbmdsZVF1aXogPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVzdGlvbk51bWJlciwgc2V0UXVlc3Rpb25OdW1iZXJdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBxdWl6ID0gcXVlc3Rpb25zW3F1ZXN0aW9uTnVtYmVyXTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmluYWxseVwiKVxuICAgICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFuc3dlciA9IChpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlQW5zd2VyIGNsaWNrZWRcIixpbmRleClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgbmV4dCBjbGlja2VkXCIscXVlc3Rpb25OdW1iZXIpXG4gICAgaWYocXVlc3Rpb25OdW1iZXIgPCBxdWVzdGlvbnMubGVuZ3RoIC0xKXtcbiAgICAgIHNldFF1ZXN0aW9uTnVtYmVyKHF1ZXN0aW9uTnVtYmVyICsgMSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPD57cXVpeiAmJiBTaG93UXVpeihxdWl6LCBvblN1Ym1pdCwgaGFuZGxlQW5zd2VyLGhhbmRsZU5leHQscXVlc3Rpb25OdW1iZXIpfTwvPjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUXVpejtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkJveCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9ucyIsIlNob3dRdWl6IiwicXVpeiIsIm9uU3VibWl0IiwiaGFuZGxlQW5zd2VyIiwiaGFuZGxlTmV4dCIsInF1ZXN0aW9uTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWF4VyIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwicCIsImJveFNoYWRvdyIsImFzIiwicXVlc3Rpb24iLCJjb2x1bW5zIiwic3BhY2luZ1giLCJzcGFjaW5nWSIsIm10IiwiYW5zd2VycyIsIm1hcCIsImR0IiwiaW5kZXgiLCJvbkNsaWNrIiwiY29ycmVjdEluZGV4Iiwic3JjIiwiaW1nIiwiYWx0IiwibGVuZ3RoIiwiY29sb3JTY2hlbWUiLCJTaW5nbGVRdWl6Iiwic2V0UXVlc3Rpb25OdW1iZXIiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quiz/index.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./pages/quiz/quiz.json":
/*!******************************!*\
  !*** ./pages/quiz/quiz.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"questions":[{"question":"which one is a dog?","answers":[{"img":"https://www.linkpicture.com/q/dog_6.jpg"},{"img":"https://www.linkpicture.com/q/cat_8.jpg"}],"correctIndex":1},{"question":"How does moon look like?","answers":[{"img":"https://www.linkpicture.com/q/sun.jpg"},{"img":"https://www.linkpicture.com/q/moon_1.jpg"}],"correctIndex":1},{"question":"Who has played the role of iron man?","answers":[{"img":"https://www.linkpicture.com/q/thor.webp"},{"img":"https://www.linkpicture.com/q/ironman.jpg"}],"correctIndex":1},{"question":"Who is Elon Musk?","answers":[{"img":"https://www.linkpicture.com/q/elon_1.jpeg"},{"img":"https://www.linkpicture.com/q/captain_america.jpg"}],"correctIndex":0},{"question":"Which one is logo of tesla?","answers":[{"img":"https://www.linkpicture.com/q/tesla_1.jpg"},{"img":"https://www.linkpicture.com/q/toyota.png"}],"correctIndex":0},{"question":"Which of these is a cybertruck?","answers":[{"img":"https://www.linkpicture.com/q/cybertruck.jpg"},{"img":"https://www.linkpicture.com/q/f150.jpeg"}],"correctIndex":0},{"question":"Which one is flag of india?","answers":[{"img":"https://www.linkpicture.com/q/india.png"},{"img":"https://www.linkpicture.com/q/hungary.jpg"}],"correctIndex":0},{"question":"How does a mountain looks like?","answers":[{"img":"https://www.linkpicture.com/q/mountain.jpeg"},{"img":"https://www.linkpicture.com/q/beach_1.jpg"}],"correctIndex":0},{"question":"Which one is macdonald\'s logo?","answers":[{"img":"https://www.linkpicture.com/q/macd.png"},{"img":"https://www.linkpicture.com/q/Dominos.png"}],"correctIndex":0},{"question":"Which is the real Spotify logo?","answers":[{"img":"https://www.linkpicture.com/q/Spotify-a.png"},{"img":"https://www.linkpicture.com/q/Spotify-b.png"}],"correctIndex":0},{"question":"Which is the real Google logo?","answers":[{"img":"https://www.linkpicture.com/q/Google-a.png"},{"img":"https://www.linkpicture.com/q/Google-b.png"}],"correctIndex":1},{"question":"which indicates snapchat?","answers":[{"img":"https://www.linkpicture.com/q/snap_1.jpg"},{"img":"https://www.linkpicture.com/q/twitter.jpg"}],"correctIndex":0},{"question":"which one is current logo of instagram?","answers":[{"img":"https://www.linkpicture.com/q/insta-old_1.jpeg"},{"img":"https://www.linkpicture.com/q/instagram.jpeg"}],"correctIndex":1},{"question":"which one is logo of ferrari?","answers":[{"img":"https://www.linkpicture.com/q/ferrari_1.png"},{"img":"https://www.linkpicture.com/q/cadini.jpg"}],"correctIndex":0},{"question":"which one is logo of bank of america?","answers":[{"img":"https://www.linkpicture.com/q/boa1.jpg"},{"img":"https://www.linkpicture.com/q/canada.png"}],"correctIndex":0}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/quiz/index.js"));
module.exports = __webpack_exports__;

})();