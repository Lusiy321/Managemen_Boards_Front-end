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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ \"(app-pages-browser)/./src/app/components/Column.tsx\");\n/* harmony import */ var _CreateCardButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateCardButton */ \"(app-pages-browser)/./src/app/components/CreateCardButton.tsx\");\n/* harmony import */ var _styles_board_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/board.module.css */ \"(app-pages-browser)/./src/styles/board.module.css\");\n/* harmony import */ var _styles_board_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_board_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Board = (param)=>{\n    let { board } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handlerFetchData = (data)=>{\n        setData(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(board._id));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    const moveCard = async (title, state)=>{\n        if (title === \"To Do\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"do\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        if (title === \"In Progress\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"progress\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        if (title === \"Done\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"done\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(board._id));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_board_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_board_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_board_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: board.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_board_module_css__WEBPACK_IMPORTED_MODULE_4___default().column),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_5__.DndProvider, {\n                    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__.HTML5Backend,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"To Do\",\n                            cards: data.filter((task)=>task.state === \"do\"),\n                            moveCard: moveCard,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateCardButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                board: board,\n                                onFetch: handlerFetchData\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"In Progress\",\n                            cards: data.filter((task)=>task.state === \"progress\"),\n                            moveCard: moveCard,\n                            children: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Done\",\n                            cards: data.filter((task)=>task.state === \"done\"),\n                            moveCard: moveCard,\n                            children: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDZTtBQUN6QjtBQUNvQjtBQUNIO0FBb0IvQyxNQUFNUSxRQUF5QjtRQUFDLEVBQUVDLEtBQUssRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFVLEVBQUU7SUFFNUMsTUFBTVUsbUJBQW1CLENBQUNGO1FBQ3hCQyxRQUFRRDtJQUNWO0lBRUFULGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVk7WUFDYixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0NBQXlELE9BQVZOLE1BQU1PLEdBQUc7Z0JBRTFELE1BQU1OLE9BQU8sTUFBTUksU0FBU0csSUFBSTtnQkFDaENOLFFBQVFEO1lBQ1YsRUFBRSxPQUFPUSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBQ0FMO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sV0FBVyxPQUFPQyxPQUFlQztRQUNyQyxJQUFJRCxVQUFVLFNBQVM7WUFDckIsSUFBSTtnQkFDRixNQUFNTixNQUNKLHFEQUErRCxPQUFWTyxNQUFNTixHQUFHLEdBQzlEO29CQUNFTyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUwsT0FBTztvQkFBSztnQkFDckM7WUFFSixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFDQSxJQUFJRyxVQUFVLGVBQWU7WUFDM0IsSUFBSTtnQkFDRixNQUFNTixNQUNKLHFEQUErRCxPQUFWTyxNQUFNTixHQUFHLEdBQzlEO29CQUNFTyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUwsT0FBTztvQkFBVztnQkFDM0M7WUFFSixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFDQSxJQUFJRyxVQUFVLFFBQVE7WUFDcEIsSUFBSTtnQkFDRixNQUFNTixNQUNKLHFEQUErRCxPQUFWTyxNQUFNTixHQUFHLEdBQzlEO29CQUNFTyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUwsT0FBTztvQkFBTztnQkFDdkM7WUFFSixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQSxlQUFlTDtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FBeUQsT0FBVk4sTUFBTU8sR0FBRztnQkFFMUQsTUFBTU4sT0FBTyxNQUFNSSxTQUFTRyxJQUFJO2dCQUVoQ04sUUFBUUQ7WUFDVixFQUFFLE9BQU9RLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFDQUw7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFXdEIsMkVBQWdCOzswQkFDOUIsOERBQUNxQjtnQkFBSUMsV0FBV3RCLHNFQUFXOzBCQUN6Qiw0RUFBQ3lCO29CQUFHSCxXQUFXdEIsdUVBQVk7OEJBQUdFLE1BQU13QixJQUFJOzs7Ozs7Ozs7OzswQkFFMUMsOERBQUNMO2dCQUFJQyxXQUFXdEIsd0VBQWE7MEJBQzNCLDRFQUFDSixrREFBV0E7b0JBQUNnQyxTQUFTL0IsaUVBQVlBOztzQ0FDaEMsOERBQUNDLCtDQUFNQTs0QkFDTGdCLE9BQU07NEJBQ05lLE9BQU8xQixLQUFLMkIsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtoQixLQUFLLEtBQUs7NEJBQzVDRixVQUFVQTtzQ0FFViw0RUFBQ2QseURBQWdCQTtnQ0FBQ0csT0FBT0E7Z0NBQU84QixTQUFTM0I7Ozs7Ozs7Ozs7O3NDQUUzQyw4REFBQ1AsK0NBQU1BOzRCQUNMZ0IsT0FBTTs0QkFDTmUsT0FBTzFCLEtBQUsyQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2hCLEtBQUssS0FBSzs0QkFDNUNGLFVBQVVBO3NDQUVUOzs7Ozs7c0NBRUgsOERBQUNmLCtDQUFNQTs0QkFDTGdCLE9BQU07NEJBQ05lLE9BQU8xQixLQUFLMkIsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtoQixLQUFLLEtBQUs7NEJBQzVDRixVQUFVQTtzQ0FFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQXZITVo7S0FBQUE7QUF5SE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0JvYXJkLnRzeD80N2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tIFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIjtcclxuaW1wb3J0IENvbHVtbiBmcm9tIFwiLi9Db2x1bW5cIjtcclxuaW1wb3J0IENyZWF0ZUNhcmRCdXR0b24gZnJvbSBcIi4vQ3JlYXRlQ2FyZEJ1dHRvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9ib2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlDYXJkcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjYXJkczogaVRhc2tbXTtcclxuICBtb3ZlQ2FyZDogKHRpdGxlOiBzdHJpbmcsIHN0YXRlOiBpVGFzaykgPT4gdm9pZDtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlUYXNrIHtcclxuICBfaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgc3RhdGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgYm9hcmQ6IHsgX2lkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9O1xyXG59XHJcblxyXG5jb25zdCBCb2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYm9hcmQgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGlUYXNrW10+KFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlckZldGNoRGF0YSA9IChkYXRhOiBpVGFza1tdKSA9PiB7XHJcbiAgICBzZXREYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL2NhcmRzLyR7Ym9hcmQuX2lkfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1vdmVDYXJkID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHN0YXRlOiBpVGFzaykgPT4ge1xyXG4gICAgaWYgKHRpdGxlID09PSBcIlRvIERvXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL3VwZGF0ZS1jYXJkLyR7c3RhdGUuX2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlOiBcImRvXCIgfSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FyZCBzdGF0ZTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGl0bGUgPT09IFwiSW4gUHJvZ3Jlc3NcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vbWFuYWdlbWVuLWJvYXJkcy5vbnJlbmRlci5jb20vdXBkYXRlLWNhcmQvJHtzdGF0ZS5faWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdGU6IFwicHJvZ3Jlc3NcIiB9KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBjYXJkIHN0YXRlOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aXRsZSA9PT0gXCJEb25lXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL3VwZGF0ZS1jYXJkLyR7c3RhdGUuX2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlOiBcImRvbmVcIiB9KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBjYXJkIHN0YXRlOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL2NhcmRzLyR7Ym9hcmQuX2lkfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntib2FyZC5uYW1lfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XHJcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiVG8gRG9cIlxyXG4gICAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwiZG9cIil9XHJcbiAgICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENyZWF0ZUNhcmRCdXR0b24gYm9hcmQ9e2JvYXJkfSBvbkZldGNoPXtoYW5kbGVyRmV0Y2hEYXRhfSAvPlxyXG4gICAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiSW4gUHJvZ3Jlc3NcIlxyXG4gICAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwicHJvZ3Jlc3NcIil9XHJcbiAgICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1wiXCJ9XHJcbiAgICAgICAgICA8L0NvbHVtbj5cclxuICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgdGl0bGU9XCJEb25lXCJcclxuICAgICAgICAgICAgY2FyZHM9e2RhdGEuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXRlID09PSBcImRvbmVcIil9XHJcbiAgICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1wiXCJ9XHJcbiAgICAgICAgICA8L0NvbHVtbj5cclxuICAgICAgICA8L0RuZFByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEbmRQcm92aWRlciIsIkhUTUw1QmFja2VuZCIsIkNvbHVtbiIsIkNyZWF0ZUNhcmRCdXR0b24iLCJzdHlsZXMiLCJCb2FyZCIsImJvYXJkIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVyRmV0Y2hEYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIl9pZCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtb3ZlQ2FyZCIsInRpdGxlIiwic3RhdGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoZWFkIiwiaDEiLCJuYW1lIiwiY29sdW1uIiwiYmFja2VuZCIsImNhcmRzIiwiZmlsdGVyIiwidGFzayIsIm9uRmV0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Board.tsx\n"));

/***/ })

});