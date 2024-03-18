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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ \"(app-pages-browser)/./src/app/components/Column.tsx\");\n/* harmony import */ var _CreateCardButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateCardButton */ \"(app-pages-browser)/./src/app/components/CreateCardButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Board = (param)=>{\n    let { boardId } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(boardId));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    const moveCard = async (dragIndex, hoverIndex, state)=>{\n        const dragCard = data[dragIndex];\n        const newCards = [\n            ...data\n        ];\n        newCards.splice(dragIndex, 1);\n        newCards.splice(hoverIndex, 0, dragCard);\n        setData(newCards);\n        try {\n            await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(dragCard._id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    state\n                })\n            });\n        } catch (error) {\n            console.error(\"Error updating card state:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-bf7d91968c4f2cc5\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-bf7d91968c4f2cc5\",\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_5__.DndProvider, {\n                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__.HTML5Backend,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"To Do\",\n                        cards: data.filter((task)=>task.state === \"do\"),\n                        moveCard: moveCard,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateCardButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"In Progress\",\n                        cards: data.filter((task)=>task.state === \"progress\"),\n                        moveCard: moveCard,\n                        children: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Done\",\n                        cards: data.filter((task)=>task.state === \"done\"),\n                        moveCard: moveCard,\n                        children: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bf7d91968c4f2cc5\",\n                children: \".container.jsx-bf7d91968c4f2cc5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;max-width:1200px}.column.jsx-bf7d91968c4f2cc5{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px}h2.jsx-bf7d91968c4f2cc5{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQ2U7QUFDekI7QUFDb0I7QUFvQmxELE1BQU1PLFFBQXlCO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUN6QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQVUsRUFBRTtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDUixlQUFlVTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FBdUQsT0FBUkw7Z0JBRWpELE1BQU1DLE9BQU8sTUFBTUcsU0FBU0UsSUFBSTtnQkFFaENKLFFBQVFEO1lBQ1YsRUFBRSxPQUFPTSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBQ0FKO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sV0FBVyxPQUNmQyxXQUNBQyxZQUNBQztRQUVBLE1BQU1DLFdBQVdaLElBQUksQ0FBQ1MsVUFBVTtRQUNoQyxNQUFNSSxXQUFXO2VBQUliO1NBQUs7UUFDMUJhLFNBQVNDLE1BQU0sQ0FBQ0wsV0FBVztRQUMzQkksU0FBU0MsTUFBTSxDQUFDSixZQUFZLEdBQUdFO1FBQy9CWCxRQUFRWTtRQUNSLElBQUk7WUFDRixNQUFNVCxNQUNKLHFEQUFrRSxPQUFiUSxTQUFTRyxHQUFHLEdBQ2pFO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVQ7Z0JBQU07WUFDL0I7UUFFSixFQUFFLE9BQU9MLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTtrREFBYzs7MEJBQ2IsOERBQUNDOzswQkFBSUM7Ozs7OzswQkFDTCw4REFBQzdCLGtEQUFXQTtnQkFBQzhCLFNBQVM3QixpRUFBWUE7O2tDQUNoQyw4REFBQ0MsK0NBQU1BO3dCQUNMNkIsT0FBTTt3QkFDTkMsT0FBTzFCLEtBQUsyQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2pCLEtBQUssS0FBSzt3QkFDNUNILFVBQVVBO2tDQUVWLDRFQUFDWCx5REFBZ0JBOzs7Ozs7Ozs7O2tDQUVuQiw4REFBQ0QsK0NBQU1BO3dCQUNMNkIsT0FBTTt3QkFDTkMsT0FBTzFCLEtBQUsyQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2pCLEtBQUssS0FBSzt3QkFDNUNILFVBQVVBO2tDQUVUOzs7Ozs7a0NBRUgsOERBQUNaLCtDQUFNQTt3QkFDTDZCLE9BQU07d0JBQ05DLE9BQU8xQixLQUFLMkIsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtqQixLQUFLLEtBQUs7d0JBQzVDSCxVQUFVQTtrQ0FFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCWDtHQTVGTVY7S0FBQUE7QUE4Rk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0JvYXJkLnRzeD80N2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tIFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIjtcclxuaW1wb3J0IENvbHVtbiBmcm9tIFwiLi9Db2x1bW5cIjtcclxuaW1wb3J0IENyZWF0ZUNhcmRCdXR0b24gZnJvbSBcIi4vQ3JlYXRlQ2FyZEJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpQ2FyZHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2FyZHM6IGlUYXNrW107XHJcbiAgbW92ZUNhcmQ6IChkcmFnSW5kZXg6IG51bWJlciwgaG92ZXJJbmRleDogbnVtYmVyLCBzdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaVRhc2sge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBib2FyZElkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBib2FyZElkIH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxpVGFza1tdPihbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vbWFuYWdlbWVuLWJvYXJkcy5vbnJlbmRlci5jb20vY2FyZHMvJHtib2FyZElkfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBtb3ZlQ2FyZCA9IGFzeW5jIChcclxuICAgIGRyYWdJbmRleDogbnVtYmVyLFxyXG4gICAgaG92ZXJJbmRleDogbnVtYmVyLFxyXG4gICAgc3RhdGU6IHN0cmluZ1xyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgZHJhZ0NhcmQgPSBkYXRhW2RyYWdJbmRleF07XHJcbiAgICBjb25zdCBuZXdDYXJkcyA9IFsuLi5kYXRhXTtcclxuICAgIG5ld0NhcmRzLnNwbGljZShkcmFnSW5kZXgsIDEpO1xyXG4gICAgbmV3Q2FyZHMuc3BsaWNlKGhvdmVySW5kZXgsIDAsIGRyYWdDYXJkKTtcclxuICAgIHNldERhdGEobmV3Q2FyZHMpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vbWFuYWdlbWVuLWJvYXJkcy5vbnJlbmRlci5jb20vdXBkYXRlLWNhcmQvJHtkcmFnQ2FyZC5faWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdGUgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhcmQgc3RhdGU6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiVG8gRG9cIlxyXG4gICAgICAgICAgY2FyZHM9e2RhdGEuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXRlID09PSBcImRvXCIpfVxyXG4gICAgICAgICAgbW92ZUNhcmQ9e21vdmVDYXJkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDcmVhdGVDYXJkQnV0dG9uIC8+XHJcbiAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgdGl0bGU9XCJJbiBQcm9ncmVzc1wiXHJcbiAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwicHJvZ3Jlc3NcIil9XHJcbiAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiXCJ9XHJcbiAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgdGl0bGU9XCJEb25lXCJcclxuICAgICAgICAgIGNhcmRzPXtkYXRhLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0ZSA9PT0gXCJkb25lXCIpfVxyXG4gICAgICAgICAgbW92ZUNhcmQ9e21vdmVDYXJkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcIlwifVxyXG4gICAgICAgIDwvQ29sdW1uPlxyXG4gICAgICA8L0RuZFByb3ZpZGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEbmRQcm92aWRlciIsIkhUTUw1QmFja2VuZCIsIkNvbHVtbiIsIkNyZWF0ZUNhcmRCdXR0b24iLCJCb2FyZCIsImJvYXJkSWQiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibW92ZUNhcmQiLCJkcmFnSW5kZXgiLCJob3ZlckluZGV4Iiwic3RhdGUiLCJkcmFnQ2FyZCIsIm5ld0NhcmRzIiwic3BsaWNlIiwiX2lkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiaDEiLCJuYW1lIiwiYmFja2VuZCIsInRpdGxlIiwiY2FyZHMiLCJmaWx0ZXIiLCJ0YXNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Board.tsx\n"));

/***/ })

});