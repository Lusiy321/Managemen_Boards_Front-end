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

/***/ "(app-pages-browser)/./src/app/components/SearchBar.tsx":
/*!******************************************!*\
  !*** ./src/app/components/SearchBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SearchBar = (param)=>{\n    let { onSearch } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearch = async ()=>{\n        try {\n            const response = await fetch(\"https://managemen-boards.onrender.com/\".concat(name));\n            if (response.ok) {\n                const data = await response.json();\n                onSearch(data._id); // Передаем ID найденной доски в родительский компонент\n            } else {\n                console.error(\"Board not found\");\n            }\n        } catch (error) {\n            console.error(\"Error searching for board:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter the name of board...\",\n                value: name,\n                onChange: (e)=>setName(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\SearchBar.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleSearch,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\SearchBar.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\SearchBar.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"/PAWDgWx7+Y6BmsFMUKcdrcX5eM=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDQztBQUV6QyxNQUFNRyxZQUFZO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFFakMsTUFBTU0sZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHlDQUE4QyxPQUFMSjtZQUN0RSxJQUFJRyxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2YsTUFBTUMsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO2dCQUNoQ1IsU0FBU08sS0FBS0UsR0FBRyxHQUFHLHVEQUF1RDtZQUM3RSxPQUFPO2dCQUNMQyxRQUFRQyxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPZjtnQkFDUGdCLFVBQVUsQ0FBQ0MsSUFBTWhCLFFBQVFnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFekMsOERBQUNsQixxRkFBTUE7Z0JBQUNzQixTQUFTakI7MEJBQWM7Ozs7Ozs7Ozs7OztBQUdyQztHQTVCTUo7S0FBQUE7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NlYXJjaEJhci50c3g/ZThmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAoeyBvblNlYXJjaCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tLyR7bmFtZX1gKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBvblNlYXJjaChkYXRhLl9pZCk7IC8vINCf0LXRgNC10LTQsNC10LwgSUQg0L3QsNC50LTQtdC90L3QvtC5INC00L7RgdC60Lgg0LIg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INC60L7QvNC/0L7QvdC10L3RglxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0JvYXJkIG5vdCBmb3VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZWFyY2hpbmcgZm9yIGJvYXJkOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG5hbWUgb2YgYm9hcmQuLi5cIlxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJTZWFyY2hCYXIiLCJvblNlYXJjaCIsIm5hbWUiLCJzZXROYW1lIiwiaGFuZGxlU2VhcmNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJfaWQiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SearchBar.tsx\n"));

/***/ })

});