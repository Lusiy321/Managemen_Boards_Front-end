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

/***/ "(app-pages-browser)/./src/app/components/Board.tsx":
/*!**************************************!*\
  !*** ./src/app/components/Board.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"(app-pages-browser)/./src/app/components/Card.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Board = (param)=>{\n    let { boardId } = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/find\");\n                const data = await response.json();\n                setTasks(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"To Do\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        tasks.filter((task)=>task.state === \"do\").map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                task: task\n                            }, task._id, false, {\n                                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"In Progress\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        tasks.filter((task)=>task.state === \"progress\").map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                task: task\n                            }, task._id, false, {\n                                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Done\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        tasks.filter((task)=>task.state === \"done\").map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                task: task\n                            }, task._id, false, {\n                                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"bBd6yqkqV9dlkj9ENgRyXKaiXpk=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQUNHO0FBQzVCO0FBYTFCLE1BQU1PLFFBQXlCO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUN2QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVUsRUFBRTtJQUM5Q0QsZ0RBQVNBLENBQUM7UUFDVixlQUFlVTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDTCxTQUFTSTtZQUNYLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEM7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUNILHFCQUNBLDhEQUFDUixnR0FBU0E7a0JBQ1IsNEVBQUNDLGdHQUFHQTs7OEJBQ0YsOERBQUNDLGdHQUFHQTs7c0NBQ0YsOERBQUNhO3NDQUFHOzs7Ozs7d0JBQ0hULE1BQU1VLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsS0FBSyxLQUFLLE1BQU1DLEdBQUcsQ0FBQ0YsQ0FBQUEscUJBQzdDLDhEQUFDZCw2Q0FBSUE7Z0NBQWdCYyxNQUFNQTsrQkFBaEJBLEtBQUtHLEdBQUc7Ozs7Ozs7Ozs7OzhCQUd2Qiw4REFBQ2xCLGdHQUFHQTs7c0NBQ0YsOERBQUNhO3NDQUFHOzs7Ozs7d0JBQ0hULE1BQU1VLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsS0FBSyxLQUFLLFlBQVlDLEdBQUcsQ0FBQ0YsQ0FBQUEscUJBQ25ELDhEQUFDZCw2Q0FBSUE7Z0NBQWdCYyxNQUFNQTsrQkFBaEJBLEtBQUtHLEdBQUc7Ozs7Ozs7Ozs7OzhCQUd2Qiw4REFBQ2xCLGdHQUFHQTs7c0NBQ0YsOERBQUNhO3NDQUFHOzs7Ozs7d0JBQ0hULE1BQU1VLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsS0FBSyxLQUFLLFFBQVFDLEdBQUcsQ0FBQ0YsQ0FBQUEscUJBQy9DLDhEQUFDZCw2Q0FBSUE7Z0NBQWdCYyxNQUFNQTsrQkFBaEJBLEtBQUtHLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0I7R0F2Q01oQjtLQUFBQTtBQXlDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQm9hcmQudHN4PzQ3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpVGFzayAge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHN0YXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgYm9hcmRJZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCb2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYm9hcmRJZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPGlUYXNrW10+KFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9tYW5hZ2VtZW4tYm9hcmRzLm9ucmVuZGVyLmNvbS9jYXJkcy9maW5kJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgICAgIFxyXG4gICAgICAgIHNldFRhc2tzKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gICAgcmV0dXJuICggICAgICBcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxoMj5UbyBEbzwvaDI+XHJcbiAgICAgICAgICB7dGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0ZSA9PT0gJ2RvJykubWFwKHRhc2sgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZCBrZXk9e3Rhc2suX2lkfSB0YXNrPXt0YXNrfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxoMj5JbiBQcm9ncmVzczwvaDI+XHJcbiAgICAgICAgICB7dGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0ZSA9PT0gJ3Byb2dyZXNzJykubWFwKHRhc2sgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZCBrZXk9e3Rhc2suX2lkfSB0YXNrPXt0YXNrfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxoMj5Eb25lPC9oMj5cclxuICAgICAgICAgIHt0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnN0YXRlID09PSAnZG9uZScpLm1hcCh0YXNrID0+IChcclxuICAgICAgICAgICAgPENhcmQga2V5PXt0YXNrLl9pZH0gdGFzaz17dGFza30gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiQm9hcmQiLCJib2FyZElkIiwidGFza3MiLCJzZXRUYXNrcyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImgyIiwiZmlsdGVyIiwidGFzayIsInN0YXRlIiwibWFwIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Board.tsx\n"));

/***/ })

});