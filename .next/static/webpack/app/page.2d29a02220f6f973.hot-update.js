/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/CreateBoardButton.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/CreateBoardButton.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n // Предполагается, что у вас есть компонент Modal\nconst CreateBoardButton = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [boardName, setBoardName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleOpenModal = ()=>{\n        setShowModal(true);\n    };\n    const handleCloseModal = ()=>{\n        setShowModal(false);\n        setBoardName(\"\"); // Очищаем значение имени доски при закрытии модального окна\n    };\n    const handleInputChange = (e)=>{\n        setBoardName(e.target.value);\n    };\n    const handleCreateBoard = ()=>{\n        // Здесь вы можете выполнить действия по созданию доски с указанным именем\n        console.log(\"Создание доски:\", boardName);\n        handleCloseModal(); // Закрываем модальное окно после создания доски\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleOpenModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fas fa-plus\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n                onClose: handleCloseModal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Enter board name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: boardName,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleCreateBoard,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CreateBoardButton, \"at9HZWbB0r20fSKJDr8AOtnFivQ=\");\n_c = CreateBoardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBoardButton);\nvar _c;\n$RefreshReg$(_c, \"CreateBoardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb2FyZEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDWixDQUFDLGlEQUFpRDtBQUU5RSxNQUFNRyxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0MsTUFBTU8sa0JBQWtCO1FBQ3RCSCxhQUFhO0lBQ2Y7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkJKLGFBQWE7UUFDYkUsYUFBYSxLQUFLLDREQUE0RDtJQUNoRjtJQUVBLE1BQU1HLG9CQUFvQixDQUFDQztRQUN6QkosYUFBYUksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLDBFQUEwRTtRQUMxRUMsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlY7UUFDL0JHLG9CQUFvQixnREFBZ0Q7SUFDdEU7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNRO2dCQUFPQyxTQUFTVjswQkFDZiw0RUFBQ1c7b0JBQUVDLFdBQVU7Ozs7Ozs7Ozs7O1lBRWRoQiwyQkFDQyw4REFBQ0YsK0NBQUtBO2dCQUFDbUIsU0FBU1o7O2tDQUNkLDhEQUFDYTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT1gsT0FBT1A7d0JBQVdtQixVQUFVZjs7Ozs7O2tDQUMvQyw4REFBQ087d0JBQU9DLFNBQVNKO2tDQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7R0FyQ01YO0tBQUFBO0FBdUNOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJvYXJkQnV0dG9uLnRzeD84M2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnOyAvLyDQn9GA0LXQtNC/0L7Qu9Cw0LPQsNC10YLRgdGPLCDRh9GC0L4g0YMg0LLQsNGBINC10YHRgtGMINC60L7QvNC/0L7QvdC10L3RgiBNb2RhbFxyXG5cclxuY29uc3QgQ3JlYXRlQm9hcmRCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9hcmROYW1lLCBzZXRCb2FyZE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgICBzZXRCb2FyZE5hbWUoJycpOyAvLyDQntGH0LjRidCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC40LzQtdC90Lgg0LTQvtGB0LrQuCDQv9GA0Lgg0LfQsNC60YDRi9GC0LjQuCDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEJvYXJkTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQm9hcmQgPSAoKSA9PiB7XHJcbiAgICAvLyDQl9C00LXRgdGMINCy0Ysg0LzQvtC20LXRgtC1INCy0YvQv9C+0LvQvdC40YLRjCDQtNC10LnRgdGC0LLQuNGPINC/0L4g0YHQvtC30LTQsNC90LjRjiDQtNC+0YHQutC4INGBINGD0LrQsNC30LDQvdC90YvQvCDQuNC80LXQvdC10LxcclxuICAgIGNvbnNvbGUubG9nKCfQodC+0LfQtNCw0L3QuNC1INC00L7RgdC60Lg6JywgYm9hcmROYW1lKTtcclxuICAgIGhhbmRsZUNsb3NlTW9kYWwoKTsgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQv9C+0YHQu9C1INGB0L7Qt9C00LDQvdC40Y8g0LTQvtGB0LrQuFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5Nb2RhbH0+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICA8TW9kYWwgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICA8aDI+RW50ZXIgYm9hcmQgbmFtZTwvaDI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Ym9hcmROYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUJvYXJkfT5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUJvYXJkQnV0dG9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJDcmVhdGVCb2FyZEJ1dHRvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImJvYXJkTmFtZSIsInNldEJvYXJkTmFtZSIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZUJvYXJkIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpIiwiY2xhc3NOYW1lIiwib25DbG9zZSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateBoardButton.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/Modal.tsx":
/*!**************************************!*\
  !*** ./src/app/components/Modal.tsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});