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

/***/ "(app-pages-browser)/./src/app/components/Card.tsx":
/*!*************************************!*\
  !*** ./src/app/components/Card.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ \"(app-pages-browser)/./src/app/components/Column.tsx\");\n/* harmony import */ var _styles_card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/card.module.css */ \"(app-pages-browser)/./src/styles/card.module.css\");\n/* harmony import */ var _styles_card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Card = (param)=>{\n    let { task, index, id, moveCard } = param;\n    _s();\n    const [{ isDragging }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrag)({\n        type: _Column__WEBPACK_IMPORTED_MODULE_2__.ItemTypes.CARD,\n        item: task,\n        collect: (monitor)=>({\n                isDragging: monitor.isDragging()\n            })\n    });\n    const opacity = isDragging ? 0.5 : 1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        ref: drag,\n        style: {\n            opacity\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardBody),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: task.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Card.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: task.description\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Card.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttons),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().editButton),\n                            children: \"Edit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Card.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().deleteButton),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Card.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Card.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Card.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Card.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"wuumsFp4qAni9XRJfRhQAZjuD/k=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrag\n    ];\n});\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ1U7QUFDQztBQUNTO0FBVTlDLE1BQU1JLE9BQTJCO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEVBQUUsRUFBRUMsUUFBUSxFQUFFOztJQUM3RCxNQUFNLENBQUMsRUFBRUMsVUFBVSxFQUFFLEVBQUVDLEtBQUssR0FBR1Qsa0RBQU9BLENBQUM7UUFDckNVLE1BQU1ULDhDQUFTQSxDQUFDVSxJQUFJO1FBQ3BCQyxNQUFNUjtRQUNOUyxTQUFTLENBQUNDLFVBQWE7Z0JBQ3JCTixZQUFZTSxRQUFRTixVQUFVO1lBQ2hDO0lBQ0Y7SUFFQSxNQUFNTyxVQUFVUCxhQUFhLE1BQU07SUFFbkMscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVdmLHFFQUFXO1FBQUVpQixLQUFLVjtRQUFNVyxPQUFPO1lBQUVMO1FBQVE7a0JBQ3ZELDRFQUFDQztZQUFJQyxXQUFXZix5RUFBZTs7OEJBQzdCLDhEQUFDb0I7OEJBQUlsQixLQUFLbUIsS0FBSzs7Ozs7OzhCQUNmLDhEQUFDQzs4QkFBR3BCLEtBQUtxQixXQUFXOzs7Ozs7OEJBQ3BCLDhEQUFDVDtvQkFBSUMsV0FBV2Ysd0VBQWM7O3NDQUM1Qiw4REFBQ3lCOzRCQUFPVixXQUFXZiwyRUFBaUI7c0NBQUU7Ozs7OztzQ0FDdEMsOERBQUN5Qjs0QkFBT1YsV0FBV2YsNkVBQW1CO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRDtHQXZCTUM7O1FBQzJCSCw4Q0FBT0E7OztLQURsQ0c7QUF5Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NhcmQudHN4P2QwNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tIFwiLi9Db2x1bW5cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvY2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGlUYXNrIH0gZnJvbSBcIi4vQm9hcmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUNhcmQge1xyXG4gIHRhc2s6IGlUYXNrO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgaWQ6IHN0cmluZztcclxuICBtb3ZlQ2FyZDogKHRpdGxlOiBzdHJpbmcsIGhvdmVySW5kZXg6IG51bWJlciwgc3RhdGU6IGlUYXNrKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxNb3ZlQ2FyZD4gPSAoeyB0YXNrLCBpbmRleCwgaWQsIG1vdmVDYXJkIH0pID0+IHtcclxuICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZyh7XHJcbiAgICB0eXBlOiBJdGVtVHlwZXMuQ0FSRCxcclxuICAgIGl0ZW06IHRhc2ssXHJcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb3BhY2l0eSA9IGlzRHJhZ2dpbmcgPyAwLjUgOiAxO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSByZWY9e2RyYWd9IHN0eWxlPXt7IG9wYWNpdHkgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJvZHl9PlxyXG4gICAgICAgIDxoMj57dGFzay50aXRsZX08L2gyPlxyXG4gICAgICAgIDxwPnt0YXNrLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0QnV0dG9ufT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUJ1dHRvbn0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURyYWciLCJJdGVtVHlwZXMiLCJzdHlsZXMiLCJDYXJkIiwidGFzayIsImluZGV4IiwiaWQiLCJtb3ZlQ2FyZCIsImlzRHJhZ2dpbmciLCJkcmFnIiwidHlwZSIsIkNBUkQiLCJpdGVtIiwiY29sbGVjdCIsIm1vbml0b3IiLCJvcGFjaXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsInJlZiIsInN0eWxlIiwiY2FyZEJvZHkiLCJoMiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsImJ1dHRvbiIsImVkaXRCdXR0b24iLCJkZWxldGVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Card.tsx\n"));

/***/ })

});