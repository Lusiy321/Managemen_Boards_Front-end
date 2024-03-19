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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/addCard.module.css */ \"(app-pages-browser)/./src/styles/addCard.module.css\");\n/* harmony import */ var _styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateCardButton = ()=>{\n    _s();\n    const [showModal, setshowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleCreate = ()=>{\n        setTitle(\"\");\n        setDescription(\"\");\n        setshowModal(false);\n    };\n    const handleCard = ()=>{\n        setshowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().editButton),\n                    onClick: handleCard,\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClose: ()=>setshowModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            children: \"Create Card\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_addCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"text\",\n                            placeholder: \"Enter title...\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Enter description...\",\n                            value: description,\n                            onChange: (e)=>setDescription(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCreate,\n                            children: \"Create\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateCardButton.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateCardButton, \"blytAci53Dya8O2To2I3Q0tbCfM=\");\n_c = CreateCardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCardButton);\nvar _c;\n$RefreshReg$(_c, \"CreateCardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVDYXJkQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUztBQUNyQjtBQUU1QixNQUFNSSxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1VLGVBQWU7UUFDbkJILFNBQVM7UUFDVEUsZUFBZTtRQUNmSixhQUFhO0lBQ2Y7SUFDQSxNQUFNTSxhQUFhO1FBQ2pCTixhQUFhO0lBQ2Y7SUFDQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBV1osd0VBQVc7OzBCQUN6Qiw4REFBQ1c7Z0JBQUlDLFdBQVdaLDRFQUFlOzBCQUM3Qiw0RUFBQ2U7b0JBQU9ILFdBQVdaLDhFQUFpQjtvQkFBRWlCLFNBQVNQOzhCQUFZOzs7Ozs7Ozs7OztZQUk1RFAsMkJBQ0MsOERBQUNGLDhDQUFLQTtnQkFBQ2lCLFNBQVMsSUFBTWQsYUFBYTswQkFDakMsNEVBQUNPOztzQ0FDQyw4REFBQ1E7NEJBQUdQLFdBQVdaLHlFQUFZO3NDQUFFOzs7Ozs7c0NBQzdCLDhEQUFDb0I7NEJBQ0NSLFdBQVdaLHlFQUFZOzRCQUN2QnFCLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE9BQU9sQjs0QkFDUG1CLFVBQVUsQ0FBQ0MsSUFBTW5CLFNBQVNtQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztzQ0FFMUMsOERBQUNJOzRCQUNDTCxhQUFZOzRCQUNaQyxPQUFPaEI7NEJBQ1BpQixVQUFVLENBQUNDLElBQU1qQixlQUFlaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBRWhELDhEQUFDUjs0QkFBT0UsU0FBU1I7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDO0dBM0NNUDtLQUFBQTtBQTZDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVDYXJkQnV0dG9uLnRzeD85YWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9hZGRDYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5jb25zdCBDcmVhdGVDYXJkQnV0dG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldHNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHNldHNob3dNb2RhbChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDYXJkID0gKCkgPT4ge1xyXG4gICAgc2V0c2hvd01vZGFsKHRydWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJvZHl9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZWRpdEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2FyZH0+XHJcbiAgICAgICAgICArXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICA8TW9kYWwgb25DbG9zZT17KCkgPT4gc2V0c2hvd01vZGFsKGZhbHNlKX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNyZWF0ZSBDYXJkPC9oMj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGl0bGUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXNjcmlwdGlvbi4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZX0+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNhcmRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTW9kYWwiLCJDcmVhdGVDYXJkQnV0dG9uIiwic2hvd01vZGFsIiwic2V0c2hvd01vZGFsIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJoYW5kbGVDcmVhdGUiLCJoYW5kbGVDYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImNhcmRCb2R5IiwiYnV0dG9uIiwiZWRpdEJ1dHRvbiIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateCardButton.tsx\n"));

/***/ })

});