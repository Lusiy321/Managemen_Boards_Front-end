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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ \"(app-pages-browser)/./src/app/components/Column.tsx\");\n/* harmony import */ var _CreateCardButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateCardButton */ \"(app-pages-browser)/./src/app/components/CreateCardButton.tsx\");\n/* harmony import */ var _styles_board_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/board.module.css */ \"(app-pages-browser)/./src/styles/board.module.css\");\n/* harmony import */ var _styles_board_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_board_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Board = (param)=>{\n    let { board } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(board._id));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    const moveCard = async (title, state)=>{\n        if (title === \"To Do\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"do\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        if (title === \"In Progress\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"progress\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        if (title === \"Done\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"done\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(board._id));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-52c4d2420af6202b\" + \" \" + ((_styles_board_module_css__WEBPACK_IMPORTED_MODULE_5___default().container) || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-52c4d2420af6202b\" + \" \" + ((_styles_board_module_css__WEBPACK_IMPORTED_MODULE_5___default().column) || \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-52c4d2420af6202b\" + \" \" + ((_styles_board_module_css__WEBPACK_IMPORTED_MODULE_5___default().title) || \"\"),\n                    children: board.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-52c4d2420af6202b\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_6__.DndProvider, {\n                    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__.HTML5Backend,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: \"To Do\",\n                            cards: data.filter((task)=>task.state === \"do\"),\n                            moveCard: moveCard,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateCardButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: \"In Progress\",\n                            cards: data.filter((task)=>task.state === \"progress\"),\n                            moveCard: moveCard,\n                            children: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: \"Done\",\n                            cards: data.filter((task)=>task.state === \"done\"),\n                            moveCard: moveCard,\n                            children: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"52c4d2420af6202b\",\n                children: \".container.jsx-52c4d2420af6202b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;max-width:1200px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDZTtBQUN6QjtBQUNvQjtBQUNIO0FBb0IvQyxNQUFNUSxRQUF5QjtRQUFDLEVBQUVDLEtBQUssRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFVLEVBQUU7SUFDNUNELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVc7WUFDYixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0NBQXlELE9BQVZMLE1BQU1NLEdBQUc7Z0JBRTFELE1BQU1MLE9BQU8sTUFBTUcsU0FBU0csSUFBSTtnQkFDaENMLFFBQVFEO1lBQ1YsRUFBRSxPQUFPTyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBQ0FMO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sV0FBVyxPQUFPQyxPQUFlQztRQUNyQyxJQUFJRCxVQUFVLFNBQVM7WUFDckIsSUFBSTtnQkFDRixNQUFNTixNQUNKLHFEQUErRCxPQUFWTyxNQUFNTixHQUFHLEdBQzlEO29CQUNFTyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUwsT0FBTztvQkFBSztnQkFDckM7WUFFSixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFDQSxJQUFJRyxVQUFVLGVBQWU7WUFDM0IsSUFBSTtnQkFDRixNQUFNTixNQUNKLHFEQUErRCxPQUFWTyxNQUFNTixHQUFHLEdBQzlEO29CQUNFTyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUwsT0FBTztvQkFBVztnQkFDM0M7WUFFSixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFDQSxJQUFJRyxVQUFVLFFBQVE7WUFDcEIsSUFBSTtnQkFDRixNQUFNTixNQUNKLHFEQUErRCxPQUFWTyxNQUFNTixHQUFHLEdBQzlEO29CQUNFTyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUwsT0FBTztvQkFBTztnQkFDdkM7WUFFSixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQSxlQUFlTDtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FBeUQsT0FBVkwsTUFBTU0sR0FBRztnQkFFMUQsTUFBTUwsT0FBTyxNQUFNRyxTQUFTRyxJQUFJO2dCQUVoQ0wsUUFBUUQ7WUFDVixFQUFFLE9BQU9PLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFDQUw7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTttREFBZXBCLDJFQUFnQjs7MEJBQzlCLDhEQUFDb0I7MkRBQWVwQix3RUFBYTswQkFDM0IsNEVBQUN1QjsrREFBY3ZCLHVFQUFZOzhCQUFHRSxNQUFNc0IsSUFBSTs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDSjs7MEJBQ0MsNEVBQUN4QixrREFBV0E7b0JBQUM2QixTQUFTNUIsaUVBQVlBOztzQ0FDaEMsOERBQUNDLCtDQUFNQTs0QkFDTGUsT0FBTTs0QkFDTmEsT0FBT3ZCLEtBQUt3QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2QsS0FBSyxLQUFLOzRCQUM1Q0YsVUFBVUE7c0NBRVYsNEVBQUNiLHlEQUFnQkE7Ozs7Ozs7Ozs7c0NBRW5CLDhEQUFDRCwrQ0FBTUE7NEJBQ0xlLE9BQU07NEJBQ05hLE9BQU92QixLQUFLd0IsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtkLEtBQUssS0FBSzs0QkFDNUNGLFVBQVVBO3NDQUVUOzs7Ozs7c0NBRUgsOERBQUNkLCtDQUFNQTs0QkFDTGUsT0FBTTs0QkFDTmEsT0FBT3ZCLEtBQUt3QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2QsS0FBSyxLQUFLOzRCQUM1Q0YsVUFBVUE7c0NBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNiO0dBMUhNWDtLQUFBQTtBQTRITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQm9hcmQudHN4PzQ3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiO1xyXG5pbXBvcnQgQ29sdW1uIGZyb20gXCIuL0NvbHVtblwiO1xyXG5pbXBvcnQgQ3JlYXRlQ2FyZEJ1dHRvbiBmcm9tIFwiLi9DcmVhdGVDYXJkQnV0dG9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL2JvYXJkLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaUNhcmRzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNhcmRzOiBpVGFza1tdO1xyXG4gIG1vdmVDYXJkOiAodGl0bGU6IHN0cmluZywgc3RhdGU6IGlUYXNrKSA9PiB2b2lkO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaVRhc2sge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBib2FyZDogeyBfaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBib2FyZCB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8aVRhc2tbXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL2NhcmRzLyR7Ym9hcmQuX2lkfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1vdmVDYXJkID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHN0YXRlOiBpVGFzaykgPT4ge1xyXG4gICAgaWYgKHRpdGxlID09PSBcIlRvIERvXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL3VwZGF0ZS1jYXJkLyR7c3RhdGUuX2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlOiBcImRvXCIgfSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FyZCBzdGF0ZTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGl0bGUgPT09IFwiSW4gUHJvZ3Jlc3NcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vbWFuYWdlbWVuLWJvYXJkcy5vbnJlbmRlci5jb20vdXBkYXRlLWNhcmQvJHtzdGF0ZS5faWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdGU6IFwicHJvZ3Jlc3NcIiB9KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBjYXJkIHN0YXRlOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aXRsZSA9PT0gXCJEb25lXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL3VwZGF0ZS1jYXJkLyR7c3RhdGUuX2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlOiBcImRvbmVcIiB9KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBjYXJkIHN0YXRlOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL2NhcmRzLyR7Ym9hcmQuX2lkfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2JvYXJkLm5hbWV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiVG8gRG9cIlxyXG4gICAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwiZG9cIil9XHJcbiAgICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENyZWF0ZUNhcmRCdXR0b24gLz5cclxuICAgICAgICAgIDwvQ29sdW1uPlxyXG4gICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICB0aXRsZT1cIkluIFByb2dyZXNzXCJcclxuICAgICAgICAgICAgY2FyZHM9e2RhdGEuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXRlID09PSBcInByb2dyZXNzXCIpfVxyXG4gICAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRG9uZVwiXHJcbiAgICAgICAgICAgIGNhcmRzPXtkYXRhLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0ZSA9PT0gXCJkb25lXCIpfVxyXG4gICAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEbmRQcm92aWRlciIsIkhUTUw1QmFja2VuZCIsIkNvbHVtbiIsIkNyZWF0ZUNhcmRCdXR0b24iLCJzdHlsZXMiLCJCb2FyZCIsImJvYXJkIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiX2lkIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1vdmVDYXJkIiwidGl0bGUiLCJzdGF0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNvbnRhaW5lciIsImNvbHVtbiIsImgxIiwibmFtZSIsImJhY2tlbmQiLCJjYXJkcyIsImZpbHRlciIsInRhc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Board.tsx\n"));

/***/ })

});