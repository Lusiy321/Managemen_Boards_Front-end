"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/CreateCardButton.tsx":
/*!*************************************************!*\
  !*** ./src/app/components/CreateCardButton.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/addCard.module.css */ \"(app-pages-browser)/./src/styles/addCard.module.css\");\n/* harmony import */ var _styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateCardButton = ()=>{\n    _s();\n    const [showModal, setshowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleCreate = ()=>{\n        setTitle(\"\");\n        setDescription(\"\");\n        setshowModal(false);\n    };\n    const handleCard = ()=>{\n        setshowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().editButton),\n                    onClick: handleCard,\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClose: ()=>setshowModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            children: \"Create Card\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                type: \"text\",\n                                placeholder: \"Enter title...\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Enter description...\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            onClick: handleCreate,\n                            children: \"Create\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateCardButton, \"blytAci53Dya8O2To2I3Q0tbCfM=\");\n_c = CreateCardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCardButton);\nvar _c;\n$RefreshReg$(_c, \"CreateCardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVDYXJkQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUztBQUNyQjtBQUU1QixNQUFNSSxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1VLGVBQWU7UUFDbkJILFNBQVM7UUFDVEUsZUFBZTtRQUNmSixhQUFhO0lBQ2Y7SUFDQSxNQUFNTSxhQUFhO1FBQ2pCTixhQUFhO0lBQ2Y7SUFDQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBV1osd0VBQVc7OzBCQUN6Qiw4REFBQ1c7Z0JBQUlDLFdBQVdaLDRFQUFlOzBCQUM3Qiw0RUFBQ2U7b0JBQU9ILFdBQVdaLDhFQUFpQjtvQkFBRWlCLFNBQVNQOzhCQUFZOzs7Ozs7Ozs7OztZQUk1RFAsMkJBQ0MsOERBQUNGLDhDQUFLQTtnQkFBQ2lCLFNBQVMsSUFBTWQsYUFBYTswQkFDakMsNEVBQUNPO29CQUFJQyxXQUFXWiw0RUFBZTs7c0NBQzdCLDhEQUFDbUI7NEJBQUdQLFdBQVdaLHlFQUFZO3NDQUFFOzs7Ozs7c0NBQzdCLDhEQUFDVztzQ0FDQyw0RUFBQ1M7Z0NBQ0NSLFdBQVdaLHlFQUFZO2dDQUN2QnFCLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9sQjtnQ0FDUG1CLFVBQVUsQ0FBQ0MsSUFBTW5CLFNBQVNtQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7O3NDQUc1Qyw4REFBQ1o7c0NBQ0MsNEVBQUNnQjtnQ0FDQ0wsYUFBWTtnQ0FDWkMsT0FBT2hCO2dDQUNQaUIsVUFBVSxDQUFDQyxJQUFNakIsZUFBZWlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7c0NBSWxELDhEQUFDUjs0QkFBT0gsV0FBV1oseUVBQVk7NEJBQUVpQixTQUFTUjtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEU7R0FsRE1QO0tBQUFBO0FBb0ROLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUNhcmRCdXR0b24udHN4PzlhYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL2FkZENhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbmNvbnN0IENyZWF0ZUNhcmRCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0c2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgc2V0c2hvd01vZGFsKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNhcmQgPSAoKSA9PiB7XHJcbiAgICBzZXRzaG93TW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQm9keX0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0QnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDYXJkfT5cclxuICAgICAgICAgICtcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbCBvbkNsb3NlPXsoKSA9PiBzZXRzaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJvZHl9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNyZWF0ZSBDYXJkPC9oMj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aXRsZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVzY3JpcHRpb24uLi5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBvbkNsaWNrPXtoYW5kbGVDcmVhdGV9PlxyXG4gICAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ2FyZEJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNb2RhbCIsIkNyZWF0ZUNhcmRCdXR0b24iLCJzaG93TW9kYWwiLCJzZXRzaG93TW9kYWwiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImhhbmRsZUNyZWF0ZSIsImhhbmRsZUNhcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiY2FyZEJvZHkiLCJidXR0b24iLCJlZGl0QnV0dG9uIiwib25DbGljayIsIm9uQ2xvc2UiLCJoMiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateCardButton.tsx\n"));

/***/ })

});