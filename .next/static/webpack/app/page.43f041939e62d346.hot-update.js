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

/***/ "(app-pages-browser)/./src/app/components/Column.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Column.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ItemTypes: function() { return /* binding */ ItemTypes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"(app-pages-browser)/./src/app/components/Card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ItemTypes = {\n    CARD: \"task\"\n};\nconst Column = (param)=>{\n    let { title, cards, moveCard } = param;\n    _s();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop)({\n        accept: ItemTypes.CARD,\n        drop: (item, monitor)=>{\n            const dragIndex = item.index;\n            const hoverIndex = cards.length;\n            const state = item.state;\n            moveCard(dragIndex, hoverIndex, state);\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-f7161b623f40daf9\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: drop,\n                className: \"jsx-f7161b623f40daf9\" + \" \" + \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-f7161b623f40daf9\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    cards.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: task._id,\n                            task: task,\n                            index: index,\n                            moveCard: moveCard\n                        }, task._id, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)),\n                    react__WEBPACK_IMPORTED_MODULE_2__.Children,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f7161b623f40daf9\",\n                children: \".container.jsx-f7161b623f40daf9{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin:0 auto;max-width:1200px}.column.jsx-f7161b623f40daf9{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px}h2.jsx-f7161b623f40daf9{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Column, \"9166pYLrZ/JzF75YDim8ZjfICTM=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop\n    ];\n});\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDVjtBQUluQixNQUFNSSxZQUFZO0lBQ3ZCQyxNQUFNO0FBQ1IsRUFBRTtBQUVGLE1BQU1DLFNBQTJCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTs7SUFDMUQsTUFBTSxDQUFDLEVBQUVDLE1BQU0sRUFBRSxFQUFFQyxLQUFLLEdBQUdULGtEQUFPQSxDQUFDO1FBQ2pDVSxRQUFRUixVQUFVQyxJQUFJO1FBQ3RCTSxNQUFNLENBQUNFLE1BQVdDO1lBQ2hCLE1BQU1DLFlBQVlGLEtBQUtHLEtBQUs7WUFDNUIsTUFBTUMsYUFBYVQsTUFBTVUsTUFBTTtZQUMvQixNQUFNQyxRQUFRTixLQUFLTSxLQUFLO1lBQ3hCVixTQUFTTSxXQUFXRSxZQUFZRTtRQUNsQztRQUNBQyxTQUFTLENBQUNOLFVBQWE7Z0JBQ3JCSixRQUFRSSxRQUFRSixNQUFNO1lBQ3hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7a0RBQWM7OzBCQUNiLDhEQUFDQTtnQkFBSUMsS0FBS1g7MERBQWdCOztrQ0FDeEIsOERBQUNZOztrQ0FBSWhCOzs7Ozs7b0JBQ0pDLE1BQU1nQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVQsc0JBQ2hCLDhEQUFDYiw2Q0FBSUE7NEJBRUh1QixJQUFJRCxLQUFLRSxHQUFHOzRCQUNaRixNQUFNQTs0QkFDTlQsT0FBT0E7NEJBQ1BQLFVBQVVBOzJCQUpMZ0IsS0FBS0UsR0FBRzs7Ozs7b0JBT2hCMUIsMkNBQVFBO29CQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQTBCbkI7R0FyRE1LOztRQUN1QkosOENBQU9BOzs7S0FEOUJJO0FBdUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db2x1bW4udHN4P2UwOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHsgaUNhcmRzIH0gZnJvbSBcIi4vQm9hcmRcIjtcclxuaW1wb3J0IENyZWF0ZUNhcmRCdXR0b24gZnJvbSBcIi4vQ3JlYXRlQ2FyZEJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1UeXBlcyA9IHtcclxuICBDQVJEOiBcInRhc2tcIixcclxufTtcclxuXHJcbmNvbnN0IENvbHVtbjogUmVhY3QuRkM8aUNhcmRzPiA9ICh7IHRpdGxlLCBjYXJkcywgbW92ZUNhcmQgfSkgPT4ge1xyXG4gIGNvbnN0IFt7IGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3Aoe1xyXG4gICAgYWNjZXB0OiBJdGVtVHlwZXMuQ0FSRCxcclxuICAgIGRyb3A6IChpdGVtOiBhbnksIG1vbml0b3IpID0+IHtcclxuICAgICAgY29uc3QgZHJhZ0luZGV4ID0gaXRlbS5pbmRleDtcclxuICAgICAgY29uc3QgaG92ZXJJbmRleCA9IGNhcmRzLmxlbmd0aDtcclxuICAgICAgY29uc3Qgc3RhdGUgPSBpdGVtLnN0YXRlO1xyXG4gICAgICBtb3ZlQ2FyZChkcmFnSW5kZXgsIGhvdmVySW5kZXgsIHN0YXRlKTtcclxuICAgIH0sXHJcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IHJlZj17ZHJvcH0gY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIHtjYXJkcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxyXG4gICAgICAgICAgICBpZD17dGFzay5faWR9XHJcbiAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgbW92ZUNhcmQ9e21vdmVDYXJkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICB7Q2hpbGRyZW59e1wiIFwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICBnYXA6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJ1c2VEcm9wIiwiQ2FyZCIsIkl0ZW1UeXBlcyIsIkNBUkQiLCJDb2x1bW4iLCJ0aXRsZSIsImNhcmRzIiwibW92ZUNhcmQiLCJpc092ZXIiLCJkcm9wIiwiYWNjZXB0IiwiaXRlbSIsIm1vbml0b3IiLCJkcmFnSW5kZXgiLCJpbmRleCIsImhvdmVySW5kZXgiLCJsZW5ndGgiLCJzdGF0ZSIsImNvbGxlY3QiLCJkaXYiLCJyZWYiLCJoMiIsIm1hcCIsInRhc2siLCJpZCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Column.tsx\n"));

/***/ })

});