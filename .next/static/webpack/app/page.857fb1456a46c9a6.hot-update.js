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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ItemTypes: function() { return /* binding */ ItemTypes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"(app-pages-browser)/./src/app/components/Card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ItemTypes = {\n    CARD: \"cards\"\n};\nconst Column = (param)=>{\n    let { title, cards, moveCard, children } = param;\n    _s();\n    const [card, setCard] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [drag, setDrag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop)({\n        accept: ItemTypes.CARD,\n        drop: (cards, monitor)=>{\n            const dragIndex = cards.index;\n            const hoverIndex = cards.length;\n            const state = cards.state;\n            console.log(cards);\n            moveCard(title, hoverIndex, cards);\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d2c9679f9197239b\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: drop,\n                className: \"jsx-d2c9679f9197239b\" + \" \" + \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-d2c9679f9197239b\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    cards.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: task._id,\n                            task: task,\n                            index: index,\n                            moveCard: moveCard\n                        }, task._id, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d2c9679f9197239b\",\n                children: \".container.jsx-d2c9679f9197239b{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin:0 auto;max-width:1200px}.column.jsx-d2c9679f9197239b{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px;width:360px}h2.jsx-d2c9679f9197239b{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Column.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Column, \"F/mR5cEHdVDINa/sSaQdcRVIw6Q=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop\n    ];\n});\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDVjtBQUluQixNQUFNSSxZQUFZO0lBQ3ZCQyxNQUFNO0FBQ1IsRUFBRTtBQUVGLE1BQU1DLFNBQTJCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFOztJQUNwRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNLENBQUMsRUFBRWMsTUFBTSxFQUFFLEVBQUVDLEtBQUssR0FBR2Qsa0RBQU9BLENBQUM7UUFDakNlLFFBQVFiLFVBQVVDLElBQUk7UUFDdEJXLE1BQU0sQ0FBQ1IsT0FBWVU7WUFDakIsTUFBTUMsWUFBWVgsTUFBTVksS0FBSztZQUM3QixNQUFNQyxhQUFhYixNQUFNYyxNQUFNO1lBQy9CLE1BQU1DLFFBQVFmLE1BQU1lLEtBQUs7WUFDekJDLFFBQVFDLEdBQUcsQ0FBQ2pCO1lBQ1pDLFNBQVNGLE9BQU9jLFlBQVliO1FBQzlCO1FBQ0FrQixTQUFTLENBQUNSLFVBQWE7Z0JBQ3JCSCxRQUFRRyxRQUFRSCxNQUFNO1lBQ3hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1k7a0RBQWM7OzBCQUNiLDhEQUFDQTtnQkFBSUMsS0FBS1o7MERBQWdCOztrQ0FDeEIsOERBQUNhOztrQ0FBSXRCOzs7Ozs7b0JBQ0pDLE1BQU1zQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVgsc0JBQ2hCLDhEQUFDakIsNkNBQUlBOzRCQUVINkIsSUFBSUQsS0FBS0UsR0FBRzs0QkFDWkYsTUFBTUE7NEJBQ05YLE9BQU9BOzRCQUNQWCxVQUFVQTsyQkFKTHNCLEtBQUtFLEdBQUc7Ozs7O29CQU9oQnZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQTJCVDtHQTFETUo7O1FBSXVCSiw4Q0FBT0E7OztLQUo5Qkk7QUE0RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NvbHVtbi50c3g/ZTA5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7IGlDYXJkcyB9IGZyb20gXCIuL0JvYXJkXCI7XHJcbmltcG9ydCBDcmVhdGVDYXJkQnV0dG9uIGZyb20gXCIuL0NyZWF0ZUNhcmRCdXR0b25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtVHlwZXMgPSB7XHJcbiAgQ0FSRDogXCJjYXJkc1wiLFxyXG59O1xyXG5cclxuY29uc3QgQ29sdW1uOiBSZWFjdC5GQzxpQ2FyZHM+ID0gKHsgdGl0bGUsIGNhcmRzLCBtb3ZlQ2FyZCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXJkLCBzZXRDYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZHJhZywgc2V0RHJhZ10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFt7IGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3Aoe1xyXG4gICAgYWNjZXB0OiBJdGVtVHlwZXMuQ0FSRCxcclxuICAgIGRyb3A6IChjYXJkczogYW55LCBtb25pdG9yOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgZHJhZ0luZGV4ID0gY2FyZHMuaW5kZXg7XHJcbiAgICAgIGNvbnN0IGhvdmVySW5kZXggPSBjYXJkcy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gY2FyZHMuc3RhdGU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuICAgICAgbW92ZUNhcmQodGl0bGUsIGhvdmVySW5kZXgsIGNhcmRzKTtcclxuICAgIH0sXHJcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IHJlZj17ZHJvcH0gY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIHtjYXJkcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxyXG4gICAgICAgICAgICBpZD17dGFzay5faWR9XHJcbiAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgbW92ZUNhcmQ9e21vdmVDYXJkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICAgIGdhcDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZURyb3AiLCJDYXJkIiwiSXRlbVR5cGVzIiwiQ0FSRCIsIkNvbHVtbiIsInRpdGxlIiwiY2FyZHMiLCJtb3ZlQ2FyZCIsImNoaWxkcmVuIiwiY2FyZCIsInNldENhcmQiLCJkcmFnIiwic2V0RHJhZyIsImlzT3ZlciIsImRyb3AiLCJhY2NlcHQiLCJtb25pdG9yIiwiZHJhZ0luZGV4IiwiaW5kZXgiLCJob3ZlckluZGV4IiwibGVuZ3RoIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29sbGVjdCIsImRpdiIsInJlZiIsImgyIiwibWFwIiwidGFzayIsImlkIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Column.tsx\n"));

/***/ })

});