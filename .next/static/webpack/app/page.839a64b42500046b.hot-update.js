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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ItemTypes: function() { return /* binding */ ItemTypes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"(app-pages-browser)/./src/app/components/Card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ItemTypes = {\n    CARD: \"cards\"\n};\nconst Column = (param)=>{\n    let { title, cards, moveCard, children } = param;\n    _s();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop)({\n        accept: ItemTypes.CARD,\n        drop: (item, monitor)=>{\n            const hoverIndex = cards.length;\n            moveCard(title, item);\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d2c9679f9197239b\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: drop,\n                className: \"jsx-d2c9679f9197239b\" + \" \" + \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-d2c9679f9197239b\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    cards.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: task._id,\n                            task: task,\n                            index: index,\n                            moveCard: moveCard\n                        }, task._id, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d2c9679f9197239b\",\n                children: \".container.jsx-d2c9679f9197239b{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin:0 auto;max-width:1200px}.column.jsx-d2c9679f9197239b{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px;width:360px}h2.jsx-d2c9679f9197239b{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Column, \"9166pYLrZ/JzF75YDim8ZjfICTM=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop\n    ];\n});\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDVjtBQUluQixNQUFNRyxZQUFZO0lBQ3ZCQyxNQUFNO0FBQ1IsRUFBRTtBQUVGLE1BQU1DLFNBQTJCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFOztJQUNwRSxNQUFNLENBQUMsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLEtBQUssR0FBR1Ysa0RBQU9BLENBQUM7UUFDakNXLFFBQVFULFVBQVVDLElBQUk7UUFDdEJPLE1BQU0sQ0FBQ0UsTUFBV0M7WUFDaEIsTUFBTUMsYUFBYVIsTUFBTVMsTUFBTTtZQUMvQlIsU0FBU0YsT0FBT087UUFDbEI7UUFDQUksU0FBUyxDQUFDSCxVQUFhO2dCQUNyQkosUUFBUUksUUFBUUosTUFBTTtZQUN4QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNRO2tEQUFjOzswQkFDYiw4REFBQ0E7Z0JBQUlDLEtBQUtSOzBEQUFnQjs7a0NBQ3hCLDhEQUFDUzs7a0NBQUlkOzs7Ozs7b0JBQ0pDLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNyQiw2Q0FBSUE7NEJBRUhzQixJQUFJRixLQUFLRyxHQUFHOzRCQUNaSCxNQUFNQTs0QkFDTkMsT0FBT0E7NEJBQ1BmLFVBQVVBOzJCQUpMYyxLQUFLRyxHQUFHOzs7OztvQkFPaEJoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQlQ7R0FwRE1KOztRQUN1QkosOENBQU9BOzs7S0FEOUJJO0FBc0ROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db2x1bW4udHN4P2UwOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyBpQ2FyZHMgfSBmcm9tIFwiLi9Cb2FyZFwiO1xyXG5pbXBvcnQgQ3JlYXRlQ2FyZEJ1dHRvbiBmcm9tIFwiLi9DcmVhdGVDYXJkQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbVR5cGVzID0ge1xyXG4gIENBUkQ6IFwiY2FyZHNcIixcclxufTtcclxuXHJcbmNvbnN0IENvbHVtbjogUmVhY3QuRkM8aUNhcmRzPiA9ICh7IHRpdGxlLCBjYXJkcywgbW92ZUNhcmQsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbeyBpc092ZXIgfSwgZHJvcF0gPSB1c2VEcm9wKHtcclxuICAgIGFjY2VwdDogSXRlbVR5cGVzLkNBUkQsXHJcbiAgICBkcm9wOiAoaXRlbTogYW55LCBtb25pdG9yOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgaG92ZXJJbmRleCA9IGNhcmRzLmxlbmd0aDtcclxuICAgICAgbW92ZUNhcmQodGl0bGUsIGl0ZW0pO1xyXG4gICAgfSxcclxuICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgcmVmPXtkcm9wfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAge2NhcmRzLm1hcCgodGFzaywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGtleT17dGFzay5faWR9XHJcbiAgICAgICAgICAgIGlkPXt0YXNrLl9pZH1cclxuICAgICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURyb3AiLCJDYXJkIiwiSXRlbVR5cGVzIiwiQ0FSRCIsIkNvbHVtbiIsInRpdGxlIiwiY2FyZHMiLCJtb3ZlQ2FyZCIsImNoaWxkcmVuIiwiaXNPdmVyIiwiZHJvcCIsImFjY2VwdCIsIml0ZW0iLCJtb25pdG9yIiwiaG92ZXJJbmRleCIsImxlbmd0aCIsImNvbGxlY3QiLCJkaXYiLCJyZWYiLCJoMiIsIm1hcCIsInRhc2siLCJpbmRleCIsImlkIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Column.tsx\n"));

/***/ })

});