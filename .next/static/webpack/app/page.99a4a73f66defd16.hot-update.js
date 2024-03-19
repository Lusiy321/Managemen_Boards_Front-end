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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./src/app/components/Modal.tsx\");\n/* harmony import */ var _styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/createBoardButton.module.css */ \"(app-pages-browser)/./src/styles/createBoardButton.module.css\");\n/* harmony import */ var _styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateBoardButton = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [boardName, setBoardName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleOpenModal = ()=>{\n        setShowModal(true);\n    };\n    const handleCloseModal = ()=>{\n        setShowModal(false);\n        setBoardName(\"\"); // Очищаем значение имени доски при закрытии модального окна\n    };\n    const handleInputChange = (e)=>{\n        setBoardName(e.target.value);\n    };\n    const handleCreateBoard = async ()=>{\n        try {\n            const response = await fetch(\"https://managemen-boards.onrender.com/\".concat(name));\n            if (response.ok) {\n                const data = await response.json();\n                onSearch(data);\n            } else {\n                console.error(\"Board not found\");\n            }\n        } catch (error) {\n            console.error(\"Error searching for board:\", error);\n        }\n        console.log(\"Создание доски:\", boardName);\n        handleCloseModal();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().createBoardButton),\n                onClick: handleOpenModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Create dashboard\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClose: handleCloseModal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Enter board name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                        type: \"text\",\n                        value: boardName,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_createBoardButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        onClick: handleCreateBoard,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\CreateBoardButton.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CreateBoardButton, \"Bc3XbXae0q60UH0yhEHZnDnvVHA=\");\n_c = CreateBoardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBoardButton);\nvar _c;\n$RefreshReg$(_c, \"CreateBoardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb2FyZEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ1o7QUFDK0I7QUFFM0QsTUFBTUksb0JBQW9COztJQUN4QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1RLGtCQUFrQjtRQUN0QkgsYUFBYTtJQUNmO0lBRUEsTUFBTUksbUJBQW1CO1FBQ3ZCSixhQUFhO1FBQ2JFLGFBQWEsS0FBSyw0REFBNEQ7SUFDaEY7SUFFQSxNQUFNRyxvQkFBb0IsQ0FBQ0M7UUFHekJKLGFBQWFJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQix5Q0FBOEMsT0FBTEM7WUFFM0MsSUFBSUYsU0FBU0csRUFBRSxFQUFFO2dCQUNmLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFDaENDLFNBQVNGO1lBQ1gsT0FBTztnQkFDTEcsUUFBUUMsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO1FBQ0FELFFBQVFFLEdBQUcsQ0FBQyxtQkFBbUJsQjtRQUMvQkc7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2dCO2dCQUFPQyxXQUFXeEIsK0ZBQXdCO2dCQUFFMEIsU0FBU3BCOzBCQUNwRCw0RUFBQ3FCOzhCQUFHOzs7Ozs7Ozs7OztZQUVMekIsMkJBQ0MsOERBQUNILDhDQUFLQTtnQkFBQzZCLFNBQVNyQjs7a0NBQ2QsOERBQUNvQjt3QkFBR0gsV0FBV3hCLG1GQUFZO2tDQUFFOzs7Ozs7a0NBQzdCLDhEQUFDOEI7d0JBQ0NOLFdBQVd4QixtRkFBWTt3QkFDdkIrQixNQUFLO3dCQUNMcEIsT0FBT1A7d0JBQ1A0QixVQUFVeEI7Ozs7OztrQ0FFWiw4REFBQ2U7d0JBQU9DLFdBQVd4QixvRkFBYTt3QkFBRTBCLFNBQVNkO2tDQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUFPeEU7R0ExRE1YO0tBQUFBO0FBNEROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJvYXJkQnV0dG9uLnRzeD84M2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvY3JlYXRlQm9hcmRCdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ3JlYXRlQm9hcmRCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9hcmROYW1lLCBzZXRCb2FyZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgIHNldEJvYXJkTmFtZShcIlwiKTsgLy8g0J7Rh9C40YnQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC80LXQvdC4INC00L7RgdC60Lgg0L/RgNC4INC30LDQutGA0YvRgtC40Lgg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiB7XHJcbiAgICB0YXJnZXQ6IHsgdmFsdWU6IFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz4gfTtcclxuICB9KSA9PiB7XHJcbiAgICBzZXRCb2FyZE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9tYW5hZ2VtZW4tYm9hcmRzLm9ucmVuZGVyLmNvbS8ke25hbWV9YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIG9uU2VhcmNoKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCb2FyZCBub3QgZm91bmRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZWFyY2hpbmcgZm9yIGJvYXJkOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcItCh0L7Qt9C00LDQvdC40LUg0LTQvtGB0LrQuDpcIiwgYm9hcmROYW1lKTtcclxuICAgIGhhbmRsZUNsb3NlTW9kYWwoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVCb2FyZEJ1dHRvbn0gb25DbGljaz17aGFuZGxlT3Blbk1vZGFsfT5cclxuICAgICAgICA8aDI+Q3JlYXRlIGRhc2hib2FyZDwvaDI+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICA8TW9kYWwgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkVudGVyIGJvYXJkIG5hbWU8L2gyPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtib2FyZE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ3JlYXRlQm9hcmR9PlxyXG4gICAgICAgICAgICBDcmVhdGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQm9hcmRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJzdHlsZXMiLCJDcmVhdGVCb2FyZEJ1dHRvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImJvYXJkTmFtZSIsInNldEJvYXJkTmFtZSIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNyZWF0ZUJvYXJkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm5hbWUiLCJvayIsImRhdGEiLCJqc29uIiwib25TZWFyY2giLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJidXR0b24iLCJjbGFzc05hbWUiLCJjcmVhdGVCb2FyZEJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsIm9uQ2xvc2UiLCJ0aXRsZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateBoardButton.tsx\n"));

/***/ })

});