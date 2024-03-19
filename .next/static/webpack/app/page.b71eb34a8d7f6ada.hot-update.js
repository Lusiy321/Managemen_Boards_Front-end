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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ \"(app-pages-browser)/./src/app/components/Column.tsx\");\n/* harmony import */ var _CreateCardButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateCardButton */ \"(app-pages-browser)/./src/app/components/CreateCardButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Board = (param)=>{\n    let { board } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(board._id));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    const moveCard = async (title, state)=>{\n        if (title === \"To Do\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"do\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        if (title === \"In Progress\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"progress\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        if (title === \"Done\") {\n            try {\n                await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(state._id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        state: \"done\"\n                    })\n                });\n            } catch (error) {\n                console.error(\"Error updating card state:\", error);\n            }\n        }\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(board._id));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-bf7d91968c4f2cc5\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-bf7d91968c4f2cc5\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-bf7d91968c4f2cc5\",\n                        children: board.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_5__.DndProvider, {\n                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__.HTML5Backend,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"To Do\",\n                        cards: data.filter((task)=>task.state === \"do\"),\n                        moveCard: moveCard,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateCardButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"In Progress\",\n                        cards: data.filter((task)=>task.state === \"progress\"),\n                        moveCard: moveCard,\n                        children: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Done\",\n                        cards: data.filter((task)=>task.state === \"done\"),\n                        moveCard: moveCard,\n                        children: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bf7d91968c4f2cc5\",\n                children: \".container.jsx-bf7d91968c4f2cc5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;max-width:1200px}.column.jsx-bf7d91968c4f2cc5{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px}h2.jsx-bf7d91968c4f2cc5{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQ2U7QUFDekI7QUFDb0I7QUFvQmxELE1BQU1PLFFBQXlCO1FBQUMsRUFBRUMsS0FBSyxFQUFFOztJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQVUsRUFBRTtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDUixlQUFlVTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FBeUQsT0FBVkwsTUFBTU0sR0FBRztnQkFFMUQsTUFBTUwsT0FBTyxNQUFNRyxTQUFTRyxJQUFJO2dCQUNoQ0wsUUFBUUQ7WUFDVixFQUFFLE9BQU9PLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFDQUw7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTyxXQUFXLE9BQU9DLE9BQWVDO1FBQ3JDLElBQUlELFVBQVUsU0FBUztZQUNyQixJQUFJO2dCQUNGLE1BQU1OLE1BQ0oscURBQStELE9BQVZPLE1BQU1OLEdBQUcsR0FDOUQ7b0JBQ0VPLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUFFTCxPQUFPO29CQUFLO2dCQUNyQztZQUVKLEVBQUUsT0FBT0osT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDOUM7UUFDRjtRQUNBLElBQUlHLFVBQVUsZUFBZTtZQUMzQixJQUFJO2dCQUNGLE1BQU1OLE1BQ0oscURBQStELE9BQVZPLE1BQU1OLEdBQUcsR0FDOUQ7b0JBQ0VPLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUFFTCxPQUFPO29CQUFXO2dCQUMzQztZQUVKLEVBQUUsT0FBT0osT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDOUM7UUFDRjtRQUNBLElBQUlHLFVBQVUsUUFBUTtZQUNwQixJQUFJO2dCQUNGLE1BQU1OLE1BQ0oscURBQStELE9BQVZPLE1BQU1OLEdBQUcsR0FDOUQ7b0JBQ0VPLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUFFTCxPQUFPO29CQUFPO2dCQUN2QztZQUVKLEVBQUUsT0FBT0osT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDOUM7UUFDRjtRQUVBLGVBQWVMO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLCtDQUF5RCxPQUFWTCxNQUFNTSxHQUFHO2dCQUUxRCxNQUFNTCxPQUFPLE1BQU1HLFNBQVNHLElBQUk7Z0JBRWhDTCxRQUFRRDtZQUNWLEVBQUUsT0FBT08sT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEM7UUFDRjtRQUNBTDtJQUNGO0lBRUEscUJBQ0UsOERBQUNlO2tEQUFjOzswQkFDYiw4REFBQ0E7OztvQkFDRTtrQ0FDRCw4REFBQ0M7O2tDQUFJbkIsTUFBTW9CLElBQUk7Ozs7Ozs7Ozs7OzswQkFFakIsOERBQUN6QixrREFBV0E7Z0JBQUMwQixTQUFTekIsaUVBQVlBOztrQ0FDaEMsOERBQUNDLCtDQUFNQTt3QkFDTGMsT0FBTTt3QkFDTlcsT0FBT3JCLEtBQUtzQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1osS0FBSyxLQUFLO3dCQUM1Q0YsVUFBVUE7a0NBRVYsNEVBQUNaLHlEQUFnQkE7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDRCwrQ0FBTUE7d0JBQ0xjLE9BQU07d0JBQ05XLE9BQU9yQixLQUFLc0IsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtaLEtBQUssS0FBSzt3QkFDNUNGLFVBQVVBO2tDQUVUOzs7Ozs7a0NBRUgsOERBQUNiLCtDQUFNQTt3QkFDTGMsT0FBTTt3QkFDTlcsT0FBT3JCLEtBQUtzQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1osS0FBSyxLQUFLO3dCQUM1Q0YsVUFBVUE7a0NBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Qlg7R0FySU1YO0tBQUFBO0FBdUlOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3g/NDdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1kbmRcIjtcclxuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSBcInJlYWN0LWRuZC1odG1sNS1iYWNrZW5kXCI7XHJcbmltcG9ydCBDb2x1bW4gZnJvbSBcIi4vQ29sdW1uXCI7XHJcbmltcG9ydCBDcmVhdGVDYXJkQnV0dG9uIGZyb20gXCIuL0NyZWF0ZUNhcmRCdXR0b25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaUNhcmRzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNhcmRzOiBpVGFza1tdO1xyXG4gIG1vdmVDYXJkOiAodGl0bGU6IHN0cmluZywgc3RhdGU6IGlUYXNrKSA9PiB2b2lkO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaVRhc2sge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBib2FyZDogeyBfaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBib2FyZCB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8aVRhc2tbXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL2NhcmRzLyR7Ym9hcmQuX2lkfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1vdmVDYXJkID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHN0YXRlOiBpVGFzaykgPT4ge1xyXG4gICAgaWYgKHRpdGxlID09PSBcIlRvIERvXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL3VwZGF0ZS1jYXJkLyR7c3RhdGUuX2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlOiBcImRvXCIgfSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FyZCBzdGF0ZTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGl0bGUgPT09IFwiSW4gUHJvZ3Jlc3NcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vbWFuYWdlbWVuLWJvYXJkcy5vbnJlbmRlci5jb20vdXBkYXRlLWNhcmQvJHtzdGF0ZS5faWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdGU6IFwicHJvZ3Jlc3NcIiB9KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBjYXJkIHN0YXRlOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aXRsZSA9PT0gXCJEb25lXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL3VwZGF0ZS1jYXJkLyR7c3RhdGUuX2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlOiBcImRvbmVcIiB9KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBjYXJkIHN0YXRlOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL2NhcmRzLyR7Ym9hcmQuX2lkfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIDxoMT57Ym9hcmQubmFtZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XHJcbiAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgdGl0bGU9XCJUbyBEb1wiXHJcbiAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwiZG9cIil9XHJcbiAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENyZWF0ZUNhcmRCdXR0b24gLz5cclxuICAgICAgICA8L0NvbHVtbj5cclxuICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICB0aXRsZT1cIkluIFByb2dyZXNzXCJcclxuICAgICAgICAgIGNhcmRzPXtkYXRhLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0ZSA9PT0gXCJwcm9ncmVzc1wiKX1cclxuICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XCJcIn1cclxuICAgICAgICA8L0NvbHVtbj5cclxuICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICB0aXRsZT1cIkRvbmVcIlxyXG4gICAgICAgICAgY2FyZHM9e2RhdGEuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXRlID09PSBcImRvbmVcIil9XHJcbiAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiXCJ9XHJcbiAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRuZFByb3ZpZGVyIiwiSFRNTDVCYWNrZW5kIiwiQ29sdW1uIiwiQ3JlYXRlQ2FyZEJ1dHRvbiIsIkJvYXJkIiwiYm9hcmQiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJfaWQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibW92ZUNhcmQiLCJ0aXRsZSIsInN0YXRlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiaDEiLCJuYW1lIiwiYmFja2VuZCIsImNhcmRzIiwiZmlsdGVyIiwidGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Board.tsx\n"));

/***/ })

});