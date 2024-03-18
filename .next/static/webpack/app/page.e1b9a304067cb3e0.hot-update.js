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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ \"(app-pages-browser)/./src/app/components/Column.tsx\");\n/* harmony import */ var _CreateCardButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateCardButton */ \"(app-pages-browser)/./src/app/components/CreateCardButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Board = (param)=>{\n    let { boardId } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(boardId));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    const moveCard = async (dragIndex, hoverIndex, state)=>{\n        const dragCard = data[dragIndex];\n        const newCards = [\n            ...data\n        ];\n        newCards.splice(dragIndex, 1);\n        newCards.splice(hoverIndex, 0, dragCard);\n        setData(newCards);\n        try {\n            await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(dragCard._id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    state\n                })\n            });\n        } catch (error) {\n            console.error(\"Error updating card state:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-bf7d91968c4f2cc5\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_5__.DndProvider, {\n                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__.HTML5Backend,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"To Do\",\n                        cards: data.filter((task)=>task.state === \"do\"),\n                        moveCard: moveCard,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateCardButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"In Progress\",\n                        cards: data.filter((task)=>task.state === \"progress\"),\n                        moveCard: moveCard,\n                        children: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Done\",\n                        cards: data.filter((task)=>task.state === \"done\"),\n                        moveCard: moveCard\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bf7d91968c4f2cc5\",\n                children: \".container.jsx-bf7d91968c4f2cc5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;max-width:1200px}.column.jsx-bf7d91968c4f2cc5{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px}h2.jsx-bf7d91968c4f2cc5{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQ2U7QUFDekI7QUFDb0I7QUFvQmxELE1BQU1PLFFBQXlCO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQVUsRUFBRTtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDUixlQUFlVTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FBdUQsT0FBUkw7Z0JBRWpELE1BQU1DLE9BQU8sTUFBTUcsU0FBU0UsSUFBSTtnQkFFaENKLFFBQVFEO1lBQ1YsRUFBRSxPQUFPTSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBQ0FKO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sV0FBVyxPQUNmQyxXQUNBQyxZQUNBQztRQUVBLE1BQU1DLFdBQVdaLElBQUksQ0FBQ1MsVUFBVTtRQUNoQyxNQUFNSSxXQUFXO2VBQUliO1NBQUs7UUFDMUJhLFNBQVNDLE1BQU0sQ0FBQ0wsV0FBVztRQUMzQkksU0FBU0MsTUFBTSxDQUFDSixZQUFZLEdBQUdFO1FBQy9CWCxRQUFRWTtRQUNSLElBQUk7WUFDRixNQUFNVCxNQUNKLHFEQUFrRSxPQUFiUSxTQUFTRyxHQUFHLEdBQ2pFO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVQ7Z0JBQU07WUFDL0I7UUFFSixFQUFFLE9BQU9MLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTtrREFBYzs7MEJBQ2IsOERBQUMzQixrREFBV0E7Z0JBQUM0QixTQUFTM0IsaUVBQVlBOztrQ0FDaEMsOERBQUNDLCtDQUFNQTt3QkFDTDJCLE9BQU07d0JBQ05DLE9BQU94QixLQUFLeUIsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtmLEtBQUssS0FBSzt3QkFDNUNILFVBQVVBO2tDQUVWLDRFQUFDWCx5REFBZ0JBOzs7Ozs7Ozs7O2tDQUVuQiw4REFBQ0QsK0NBQU1BO3dCQUNMMkIsT0FBTTt3QkFDTkMsT0FBT3hCLEtBQUt5QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2YsS0FBSyxLQUFLO3dCQUM1Q0gsVUFBVUE7a0NBRVQ7Ozs7OztrQ0FFSCw4REFBQ1osK0NBQU1BO3dCQUNMMkIsT0FBTTt3QkFDTkMsT0FBT3hCLEtBQUt5QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2YsS0FBSyxLQUFLO3dCQUM1Q0gsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnBCO0dBekZNVjtLQUFBQTtBQTJGTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQm9hcmQudHN4PzQ3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiO1xyXG5pbXBvcnQgQ29sdW1uIGZyb20gXCIuL0NvbHVtblwiO1xyXG5pbXBvcnQgQ3JlYXRlQ2FyZEJ1dHRvbiBmcm9tIFwiLi9DcmVhdGVDYXJkQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlDYXJkcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjYXJkczogaVRhc2tbXTtcclxuICBtb3ZlQ2FyZDogKGRyYWdJbmRleDogbnVtYmVyLCBob3ZlckluZGV4OiBudW1iZXIsIHN0YXRlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpVGFzayB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHN0YXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGJvYXJkSWQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQm9hcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGJvYXJkSWQgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGlUYXNrW10+KFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9tYW5hZ2VtZW4tYm9hcmRzLm9ucmVuZGVyLmNvbS9jYXJkcy8ke2JvYXJkSWR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1vdmVDYXJkID0gYXN5bmMgKFxyXG4gICAgZHJhZ0luZGV4OiBudW1iZXIsXHJcbiAgICBob3ZlckluZGV4OiBudW1iZXIsXHJcbiAgICBzdGF0ZTogc3RyaW5nXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBkcmFnQ2FyZCA9IGRhdGFbZHJhZ0luZGV4XTtcclxuICAgIGNvbnN0IG5ld0NhcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgbmV3Q2FyZHMuc3BsaWNlKGRyYWdJbmRleCwgMSk7XHJcbiAgICBuZXdDYXJkcy5zcGxpY2UoaG92ZXJJbmRleCwgMCwgZHJhZ0NhcmQpO1xyXG4gICAgc2V0RGF0YShuZXdDYXJkcyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9tYW5hZ2VtZW4tYm9hcmRzLm9ucmVuZGVyLmNvbS91cGRhdGUtY2FyZC8ke2RyYWdDYXJkLl9pZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzdGF0ZSB9KSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FyZCBzdGF0ZTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cclxuICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICB0aXRsZT1cIlRvIERvXCJcclxuICAgICAgICAgIGNhcmRzPXtkYXRhLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0ZSA9PT0gXCJkb1wiKX1cclxuICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q3JlYXRlQ2FyZEJ1dHRvbiAvPlxyXG4gICAgICAgIDwvQ29sdW1uPlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiSW4gUHJvZ3Jlc3NcIlxyXG4gICAgICAgICAgY2FyZHM9e2RhdGEuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXRlID09PSBcInByb2dyZXNzXCIpfVxyXG4gICAgICAgICAgbW92ZUNhcmQ9e21vdmVDYXJkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgIDwvQ29sdW1uPlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiRG9uZVwiXHJcbiAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwiZG9uZVwiKX1cclxuICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICA+PC9Db2x1bW4+XHJcbiAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRuZFByb3ZpZGVyIiwiSFRNTDVCYWNrZW5kIiwiQ29sdW1uIiwiQ3JlYXRlQ2FyZEJ1dHRvbiIsIkJvYXJkIiwiYm9hcmRJZCIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtb3ZlQ2FyZCIsImRyYWdJbmRleCIsImhvdmVySW5kZXgiLCJzdGF0ZSIsImRyYWdDYXJkIiwibmV3Q2FyZHMiLCJzcGxpY2UiLCJfaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJiYWNrZW5kIiwidGl0bGUiLCJjYXJkcyIsImZpbHRlciIsInRhc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Board.tsx\n"));

/***/ })

});