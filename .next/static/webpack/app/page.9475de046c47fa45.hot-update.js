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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst CreateBoardButton = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [boardName, setBoardName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleOpenModal = ()=>{\n        setShowModal(true);\n    };\n    const handleCloseModal = ()=>{\n        setShowModal(false);\n        setBoardName(\"\"); // Очищаем значение имени доски при закрытии модального окна\n    };\n    const handleInputChange = (e)=>{\n        setBoardName(e.target.value);\n    };\n    const handleCreateBoard = ()=>{\n        // Здесь вы можете выполнить действия по созданию доски с указанным именем\n        console.log(\"Создание доски:\", boardName);\n        handleCloseModal(); // Закрываем модальное окно после создания доски\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"create-board-button\",\n                onClick: handleOpenModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Create dashboard\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClose: handleCloseModal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Enter board name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: boardName,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleCreateBoard,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CreateBoardButton, \"Bc3XbXae0q60UH0yhEHZnDnvVHA=\");\n_c = CreateBoardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBoardButton);\nvar _c;\n$RefreshReg$(_c, \"CreateBoardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb2FyZEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNaO0FBRzVCLE1BQU1HLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNTyxrQkFBa0I7UUFDdEJILGFBQWE7SUFDZjtJQUVBLE1BQU1JLG1CQUFtQjtRQUN2QkosYUFBYTtRQUNiRSxhQUFhLEtBQUssNERBQTREO0lBQ2hGO0lBRUEsTUFBTUcsb0JBQW9CLENBQUNDO1FBR3pCSixhQUFhSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNQyxvQkFBb0I7UUFDeEIsMEVBQTBFO1FBQzFFQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CVjtRQUMvQkcsb0JBQW9CLGdEQUFnRDtJQUN0RTtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1E7Z0JBQU9DLFdBQVU7Z0JBQXNCQyxTQUFTWDswQkFDL0MsNEVBQUNZOzhCQUFHOzs7Ozs7Ozs7OztZQUVMaEIsMkJBQ0MsOERBQUNGLDhDQUFLQTtnQkFBQ21CLFNBQVNaOztrQ0FDZCw4REFBQ1c7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0U7d0JBQU1DLE1BQUs7d0JBQU9WLE9BQU9QO3dCQUFXa0IsVUFBVWQ7Ozs7OztrQ0FDL0MsOERBQUNPO3dCQUFPRSxTQUFTTDtrQ0FBbUI7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBdkNNWDtLQUFBQTtBQXlDTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb2FyZEJ1dHRvbi50c3g/ODNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1wiO1xyXG5cclxuY29uc3QgQ3JlYXRlQm9hcmRCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9hcmROYW1lLCBzZXRCb2FyZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgIHNldEJvYXJkTmFtZShcIlwiKTsgLy8g0J7Rh9C40YnQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC80LXQvdC4INC00L7RgdC60Lgg0L/RgNC4INC30LDQutGA0YvRgtC40Lgg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiB7XHJcbiAgICB0YXJnZXQ6IHsgdmFsdWU6IFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz4gfTtcclxuICB9KSA9PiB7XHJcbiAgICBzZXRCb2FyZE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgLy8g0JfQtNC10YHRjCDQstGLINC80L7QttC10YLQtSDQstGL0L/QvtC70L3QuNGC0Ywg0LTQtdC50YHRgtCy0LjRjyDQv9C+INGB0L7Qt9C00LDQvdC40Y4g0LTQvtGB0LrQuCDRgSDRg9C60LDQt9Cw0L3QvdGL0Lwg0LjQvNC10L3QtdC8XHJcbiAgICBjb25zb2xlLmxvZyhcItCh0L7Qt9C00LDQvdC40LUg0LTQvtGB0LrQuDpcIiwgYm9hcmROYW1lKTtcclxuICAgIGhhbmRsZUNsb3NlTW9kYWwoKTsgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQv9C+0YHQu9C1INGB0L7Qt9C00LDQvdC40Y8g0LTQvtGB0LrQuFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNyZWF0ZS1ib2FyZC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVuTW9kYWx9PlxyXG4gICAgICAgIDxoMj5DcmVhdGUgZGFzaGJvYXJkPC9oMj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbCBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICAgIDxoMj5FbnRlciBib2FyZCBuYW1lPC9oMj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtib2FyZE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlQm9hcmR9PkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQm9hcmRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJDcmVhdGVCb2FyZEJ1dHRvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImJvYXJkTmFtZSIsInNldEJvYXJkTmFtZSIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZUJvYXJkIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMiIsIm9uQ2xvc2UiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateBoardButton.tsx\n"));

/***/ })

});