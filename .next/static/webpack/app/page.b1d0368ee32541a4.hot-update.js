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

/***/ "(app-pages-browser)/./src/app/components/CreateBoardButton.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/CreateBoardButton.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.tsx\");\n/* harmony import */ var _styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/createBoardButton.module.css */ \"(app-pages-browser)/./src/styles/createBoardButton.module.css\");\n/* harmony import */ var _styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateBoardButton = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [boardName, setBoardName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleOpenModal = ()=>{\n        setShowModal(true);\n    };\n    const handleCloseModal = ()=>{\n        setShowModal(false);\n        setBoardName(\"\"); // Очищаем значение имени доски при закрытии модального окна\n    };\n    const handleInputChange = (e)=>{\n        setBoardName(e.target.value);\n    };\n    const handleCreateBoard = ()=>{\n        // Здесь вы можете выполнить действия по созданию доски с указанным именем\n        console.log(\"Создание доски:\", boardName);\n        handleCloseModal();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().createBoardButton),\n                onClick: handleOpenModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Create dashboard\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClose: handleCloseModal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Enter board name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                        type: \"text\",\n                        value: boardName,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        onClick: handleCreateBoard,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CreateBoardButton, \"Bc3XbXae0q60UH0yhEHZnDnvVHA=\");\n_c = CreateBoardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBoardButton);\nvar _c;\n$RefreshReg$(_c, \"CreateBoardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb2FyZEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ1o7QUFDK0I7QUFFM0QsTUFBTUksb0JBQW9COztJQUN4QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1RLGtCQUFrQjtRQUN0QkgsYUFBYTtJQUNmO0lBRUEsTUFBTUksbUJBQW1CO1FBQ3ZCSixhQUFhO1FBQ2JFLGFBQWEsS0FBSyw0REFBNEQ7SUFDaEY7SUFFQSxNQUFNRyxvQkFBb0IsQ0FBQ0M7UUFHekJKLGFBQWFJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QiwwRUFBMEU7UUFDMUVDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJWO1FBQy9CRztJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDUTtnQkFBT0MsV0FBV2hCLCtGQUF3QjtnQkFBRWtCLFNBQVNaOzBCQUNwRCw0RUFBQ2E7OEJBQUc7Ozs7Ozs7Ozs7O1lBRUxqQiwyQkFDQyw4REFBQ0gsOENBQUtBO2dCQUFDcUIsU0FBU2I7O2tDQUNkLDhEQUFDWTt3QkFBR0gsV0FBV2hCLG1GQUFZO2tDQUFFOzs7Ozs7a0NBQzdCLDhEQUFDc0I7d0JBQ0NOLFdBQVdoQixtRkFBWTt3QkFDdkJ1QixNQUFLO3dCQUNMWixPQUFPUDt3QkFDUG9CLFVBQVVoQjs7Ozs7O2tDQUVaLDhEQUFDTzt3QkFBT0MsV0FBV2hCLG9GQUFhO3dCQUFFa0IsU0FBU047a0NBQW1COzs7Ozs7Ozs7Ozs7OztBQU94RTtHQTlDTVg7S0FBQUE7QUFnRE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ3JlYXRlQm9hcmRCdXR0b24udHN4PzgzYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9jcmVhdGVCb2FyZEJ1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDcmVhdGVCb2FyZEJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtib2FyZE5hbWUsIHNldEJvYXJkTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0Qm9hcmROYW1lKFwiXCIpOyAvLyDQntGH0LjRidCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC40LzQtdC90Lgg0LTQvtGB0LrQuCDQv9GA0Lgg0LfQsNC60YDRi9GC0LjQuCDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IHtcclxuICAgIHRhcmdldDogeyB2YWx1ZTogUmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPiB9O1xyXG4gIH0pID0+IHtcclxuICAgIHNldEJvYXJkTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQm9hcmQgPSAoKSA9PiB7XHJcbiAgICAvLyDQl9C00LXRgdGMINCy0Ysg0LzQvtC20LXRgtC1INCy0YvQv9C+0LvQvdC40YLRjCDQtNC10LnRgdGC0LLQuNGPINC/0L4g0YHQvtC30LTQsNC90LjRjiDQtNC+0YHQutC4INGBINGD0LrQsNC30LDQvdC90YvQvCDQuNC80LXQvdC10LxcclxuICAgIGNvbnNvbGUubG9nKFwi0KHQvtC30LTQsNC90LjQtSDQtNC+0YHQutC4OlwiLCBib2FyZE5hbWUpO1xyXG4gICAgaGFuZGxlQ2xvc2VNb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUJvYXJkQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVPcGVuTW9kYWx9PlxyXG4gICAgICAgIDxoMj5DcmVhdGUgZGFzaGJvYXJkPC9oMj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbCBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RW50ZXIgYm9hcmQgbmFtZTwvaDI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2JvYXJkTmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDcmVhdGVCb2FyZH0+XHJcbiAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVCb2FyZEJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsInN0eWxlcyIsIkNyZWF0ZUJvYXJkQnV0dG9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYm9hcmROYW1lIiwic2V0Qm9hcmROYW1lIiwiaGFuZGxlT3Blbk1vZGFsIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlQm9hcmQiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiY3JlYXRlQm9hcmRCdXR0b24iLCJvbkNsaWNrIiwiaDIiLCJvbkNsb3NlIiwidGl0bGUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateBoardButton.tsx\n"));

/***/ })

});