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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ItemTypes: function() { return /* binding */ ItemTypes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"(app-pages-browser)/./src/app/components/Card.tsx\");\n/* harmony import */ var _CreateCardButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateCardButton */ \"(app-pages-browser)/./src/app/components/CreateCardButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ItemTypes = {\n    CARD: \"task\"\n};\nconst Column = (param)=>{\n    let { cards, moveCard } = param;\n    _s();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop)({\n        accept: ItemTypes.CARD,\n        drop: (item, monitor)=>{\n            const dragIndex = item.index;\n            const hoverIndex = cards.length;\n            const state = item.state;\n            moveCard(dragIndex, hoverIndex, state);\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    console.log(cards);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-f7161b623f40daf9\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: drop,\n                className: \"jsx-f7161b623f40daf9\" + \" \" + \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-f7161b623f40daf9\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    cards.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: task._id,\n                            task: task,\n                            index: index,\n                            moveCard: moveCard\n                        }, task._id, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateCardButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f7161b623f40daf9\",\n                children: \".container.jsx-f7161b623f40daf9{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin:0 auto;max-width:1200px}.column.jsx-f7161b623f40daf9{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px}h2.jsx-f7161b623f40daf9{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Column, \"9166pYLrZ/JzF75YDim8ZjfICTM=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop\n    ];\n});\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNVO0FBQ1Y7QUFFd0I7QUFFM0MsTUFBTUksWUFBWTtJQUN2QkMsTUFBTTtBQUNSLEVBQUU7QUFFRixNQUFNQyxTQUEyQjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFOztJQUNuRCxNQUFNLENBQUMsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLEtBQUssR0FBR1Qsa0RBQU9BLENBQUM7UUFDakNVLFFBQVFQLFVBQVVDLElBQUk7UUFDdEJLLE1BQU0sQ0FBQ0UsTUFBV0M7WUFDaEIsTUFBTUMsWUFBWUYsS0FBS0csS0FBSztZQUM1QixNQUFNQyxhQUFhVCxNQUFNVSxNQUFNO1lBQy9CLE1BQU1DLFFBQVFOLEtBQUtNLEtBQUs7WUFDeEJWLFNBQVNNLFdBQVdFLFlBQVlFO1FBQ2xDO1FBQ0FDLFNBQVMsQ0FBQ04sVUFBYTtnQkFDckJKLFFBQVFJLFFBQVFKLE1BQU07WUFDeEI7SUFDRjtJQUNBVyxRQUFRQyxHQUFHLENBQUNkO0lBQ1oscUJBQ0UsOERBQUNlO2tEQUFjOzswQkFDYiw4REFBQ0E7Z0JBQUlDLEtBQUtiOzBEQUFnQjs7a0NBQ3hCLDhEQUFDYzs7Ozs7OztvQkFDQWpCLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVgsc0JBQ2hCLDhEQUFDYiw2Q0FBSUE7NEJBRUh5QixJQUFJRCxLQUFLRSxHQUFHOzRCQUNaRixNQUFNQTs0QkFDTlgsT0FBT0E7NEJBQ1BQLFVBQVVBOzJCQUpMa0IsS0FBS0UsR0FBRzs7Ozs7a0NBT2pCLDhEQUFDekIseURBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUR6QjtHQWxGTUc7O1FBQ3VCTCw4Q0FBT0E7OztLQUQ5Qks7QUFvRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NvbHVtbi50c3g/ZTA5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHsgaUNhcmRzIH0gZnJvbSBcIi4vQm9hcmRcIjtcclxuaW1wb3J0IENyZWF0ZUNhcmRCdXR0b24gZnJvbSBcIi4vQ3JlYXRlQ2FyZEJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1UeXBlcyA9IHtcclxuICBDQVJEOiBcInRhc2tcIixcclxufTtcclxuXHJcbmNvbnN0IENvbHVtbjogUmVhY3QuRkM8aUNhcmRzPiA9ICh7IGNhcmRzLCBtb3ZlQ2FyZCB9KSA9PiB7XHJcbiAgY29uc3QgW3sgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCh7XHJcbiAgICBhY2NlcHQ6IEl0ZW1UeXBlcy5DQVJELFxyXG4gICAgZHJvcDogKGl0ZW06IGFueSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICBjb25zdCBkcmFnSW5kZXggPSBpdGVtLmluZGV4O1xyXG4gICAgICBjb25zdCBob3ZlckluZGV4ID0gY2FyZHMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IGl0ZW0uc3RhdGU7XHJcbiAgICAgIG1vdmVDYXJkKGRyYWdJbmRleCwgaG92ZXJJbmRleCwgc3RhdGUpO1xyXG4gICAgfSxcclxuICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXHJcbiAgICB9KSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhjYXJkcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgcmVmPXtkcm9wfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aDI+PC9oMj5cclxuICAgICAgICB7Y2FyZHMubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAga2V5PXt0YXNrLl9pZH1cclxuICAgICAgICAgICAgaWQ9e3Rhc2suX2lkfVxyXG4gICAgICAgICAgICB0YXNrPXt0YXNrfVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPENyZWF0ZUNhcmRCdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aDI+SW4gUHJvZ3Jlc3M8L2gyPlxyXG4gICAgICAgIHtjYXJkc1xyXG4gICAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0ZSA9PT0gXCJwcm9ncmVzc1wiKVxyXG4gICAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxyXG4gICAgICAgICAgICAgIGlkPXt0YXNrLl9pZH1cclxuICAgICAgICAgICAgICB0YXNrPXt0YXNrfVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGgyPkRvbmU8L2gyPlxyXG4gICAgICAgIHtjYXJkc1xyXG4gICAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0ZSA9PT0gXCJkb25lXCIpXHJcbiAgICAgICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIGtleT17dGFzay5faWR9XHJcbiAgICAgICAgICAgICAgaWQ9e3Rhc2suX2lkfVxyXG4gICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURyb3AiLCJDYXJkIiwiQ3JlYXRlQ2FyZEJ1dHRvbiIsIkl0ZW1UeXBlcyIsIkNBUkQiLCJDb2x1bW4iLCJjYXJkcyIsIm1vdmVDYXJkIiwiaXNPdmVyIiwiZHJvcCIsImFjY2VwdCIsIml0ZW0iLCJtb25pdG9yIiwiZHJhZ0luZGV4IiwiaW5kZXgiLCJob3ZlckluZGV4IiwibGVuZ3RoIiwic3RhdGUiLCJjb2xsZWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsInJlZiIsImgyIiwibWFwIiwidGFzayIsImlkIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Column.tsx\n"));

/***/ })

});