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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ItemTypes: function() { return /* binding */ ItemTypes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"(app-pages-browser)/./src/app/components/Card.tsx\");\n/* harmony import */ var _styles_column_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/column.module.css */ \"(app-pages-browser)/./src/styles/column.module.css\");\n/* harmony import */ var _styles_column_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_column_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ItemTypes = {\n    CARD: \"cards\"\n};\nconst Column = (param)=>{\n    let { title, cards, moveCard, children } = param;\n    _s();\n    const [, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrop)({\n        accept: ItemTypes.CARD,\n        drop: (item, monitor)=>{\n            moveCard(title, item);\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_column_module_css__WEBPACK_IMPORTED_MODULE_4___default().columnContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: drop,\n            className: (_styles_column_module_css__WEBPACK_IMPORTED_MODULE_4___default().column),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_column_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                cards.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: task._id,\n                        task: task,\n                        index: index,\n                        moveCard: moveCard\n                    }, task._id, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Column, \"hdmCamxlwL9WeSdzgzIVyaE48AI=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrop\n    ];\n});\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUNWO0FBRXNCO0FBRXpDLE1BQU1JLFlBQVk7SUFDdkJDLE1BQU07QUFDUixFQUFFO0FBRUYsTUFBTUMsU0FBMkI7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7O0lBQ3BFLE1BQU0sR0FBR0MsS0FBSyxHQUFHVixrREFBT0EsQ0FBQztRQUN2QlcsUUFBUVIsVUFBVUMsSUFBSTtRQUN0Qk0sTUFBTSxDQUFDRSxNQUFXQztZQUNoQkwsU0FBU0YsT0FBT007UUFDbEI7UUFDQUUsU0FBUyxDQUFDRCxVQUFhO2dCQUNyQkUsUUFBUUYsUUFBUUUsTUFBTTtZQUN4QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdmLGtGQUFzQjtrQkFDcEMsNEVBQUNjO1lBQUlHLEtBQUtUO1lBQU1PLFdBQVdmLHlFQUFhOzs4QkFDdEMsOERBQUNtQjtvQkFBR0osV0FBV2Ysd0VBQVk7OEJBQUdJOzs7Ozs7Z0JBQzdCQyxNQUFNZSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDdkIsNkNBQUlBO3dCQUVId0IsSUFBSUYsS0FBS0csR0FBRzt3QkFDWkgsTUFBTUE7d0JBQ05DLE9BQU9BO3dCQUNQaEIsVUFBVUE7dUJBSkxlLEtBQUtHLEdBQUc7Ozs7O2dCQU9oQmpCOzs7Ozs7Ozs7Ozs7QUFJVDtHQTVCTUo7O1FBQ2FMLDhDQUFPQTs7O0tBRHBCSztBQThCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ29sdW1uLnRzeD9lMDk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyBpQ2FyZHMgfSBmcm9tIFwiLi9Cb2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9jb2x1bW4ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1UeXBlcyA9IHtcclxuICBDQVJEOiBcImNhcmRzXCIsXHJcbn07XHJcblxyXG5jb25zdCBDb2x1bW46IFJlYWN0LkZDPGlDYXJkcz4gPSAoeyB0aXRsZSwgY2FyZHMsIG1vdmVDYXJkLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgWywgZHJvcF0gPSB1c2VEcm9wKHtcclxuICAgIGFjY2VwdDogSXRlbVR5cGVzLkNBUkQsXHJcbiAgICBkcm9wOiAoaXRlbTogYW55LCBtb25pdG9yOiBhbnkpID0+IHtcclxuICAgICAgbW92ZUNhcmQodGl0bGUsIGl0ZW0pO1xyXG4gICAgfSxcclxuICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1uQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiByZWY9e2Ryb3B9IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9oMj5cclxuICAgICAgICB7Y2FyZHMubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAga2V5PXt0YXNrLl9pZH1cclxuICAgICAgICAgICAgaWQ9e3Rhc2suX2lkfVxyXG4gICAgICAgICAgICB0YXNrPXt0YXNrfVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURyb3AiLCJDYXJkIiwic3R5bGVzIiwiSXRlbVR5cGVzIiwiQ0FSRCIsIkNvbHVtbiIsInRpdGxlIiwiY2FyZHMiLCJtb3ZlQ2FyZCIsImNoaWxkcmVuIiwiZHJvcCIsImFjY2VwdCIsIml0ZW0iLCJtb25pdG9yIiwiY29sbGVjdCIsImlzT3ZlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbHVtbkNvbnRhaW5lciIsInJlZiIsImNvbHVtbiIsImgyIiwibWFwIiwidGFzayIsImluZGV4IiwiaWQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Column.tsx\n"));

/***/ })

});