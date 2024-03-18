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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ \"(app-pages-browser)/./src/app/components/Column.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Board = (param)=>{\n    let { boardId } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await fetch(\"https://managemen-boards.onrender.com/cards/\".concat(boardId));\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    const moveCard = async (dragIndex, hoverIndex, state)=>{\n        const dragCard = data[dragIndex];\n        const newCards = [\n            ...data\n        ];\n        newCards.splice(dragIndex, 1);\n        newCards.splice(hoverIndex, 0, dragCard);\n        setData(newCards);\n        try {\n            await fetch(\"https://managemen-boards.onrender.com/update-card/\".concat(dragCard._id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    state\n                })\n            });\n        } catch (error) {\n            console.error(\"Error updating card state:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-bf7d91968c4f2cc5\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_4__.DndProvider, {\n                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__.HTML5Backend,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"To Do\",\n                        cards: data.filter((task)=>task.state === \"do\"),\n                        moveCard: moveCard\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"In Progress\",\n                        cards: data.filter((task)=>task.state === \"progress\"),\n                        moveCard: moveCard\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Done\",\n                        cards: data.filter((task)=>task.state === \"done\"),\n                        moveCard: moveCard\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bf7d91968c4f2cc5\",\n                children: \".container.jsx-bf7d91968c4f2cc5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin:0 auto;max-width:1200px}.column.jsx-bf7d91968c4f2cc5{background-color:#f0f0f0;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:10px;margin:20px}h2.jsx-bf7d91968c4f2cc5{font-size:18px;margin-bottom:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Managemen_Boards_Front-end\\\\src\\\\app\\\\components\\\\Board.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Cb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDZTtBQUN6QjtBQW1COUIsTUFBTU0sUUFBeUI7UUFBQyxFQUFFQyxPQUFPLEVBQUU7O0lBQ3pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQzVDRCxnREFBU0EsQ0FBQztRQUNSLGVBQWVTO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLCtDQUF1RCxPQUFSTDtnQkFFakQsTUFBTUMsT0FBTyxNQUFNRyxTQUFTRSxJQUFJO2dCQUVoQ0osUUFBUUQ7WUFDVixFQUFFLE9BQU9NLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTSxXQUFXLE9BQ2ZDLFdBQ0FDLFlBQ0FDO1FBRUEsTUFBTUMsV0FBV1osSUFBSSxDQUFDUyxVQUFVO1FBQ2hDLE1BQU1JLFdBQVc7ZUFBSWI7U0FBSztRQUMxQmEsU0FBU0MsTUFBTSxDQUFDTCxXQUFXO1FBQzNCSSxTQUFTQyxNQUFNLENBQUNKLFlBQVksR0FBR0U7UUFDL0JYLFFBQVFZO1FBQ1IsSUFBSTtZQUNGLE1BQU1ULE1BQ0oscURBQWtFLE9BQWJRLFNBQVNHLEdBQUcsR0FDakU7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFVDtnQkFBTTtZQUMvQjtRQUVKLEVBQUUsT0FBT0wsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtRQUM5QztJQUNGO0lBRUEscUJBQ0UsOERBQUNlO2tEQUFjOzswQkFDYiw4REFBQzFCLGtEQUFXQTtnQkFBQzJCLFNBQVMxQixpRUFBWUE7O2tDQUNoQyw4REFBQ0MsK0NBQU1BO3dCQUNMMEIsT0FBTTt3QkFDTkMsT0FBT3hCLEtBQUt5QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2YsS0FBSyxLQUFLO3dCQUM1Q0gsVUFBVUE7Ozs7OztrQ0FFWiw4REFBQ1gsK0NBQU1BO3dCQUNMMEIsT0FBTTt3QkFDTkMsT0FBT3hCLEtBQUt5QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2YsS0FBSyxLQUFLO3dCQUM1Q0gsVUFBVUE7Ozs7OztrQ0FFWiw4REFBQ1gsK0NBQU1BO3dCQUNMMEIsT0FBTTt3QkFDTkMsT0FBT3hCLEtBQUt5QixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS2YsS0FBSyxLQUFLO3dCQUM1Q0gsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnBCO0dBckZNVjtLQUFBQTtBQXVGTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQm9hcmQudHN4PzQ3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiO1xyXG5pbXBvcnQgQ29sdW1uIGZyb20gXCIuL0NvbHVtblwiO1xyXG5pbXBvcnQgQ3JlYXRlQ2FyZEJ1dHRvbiBmcm9tIFwiLi9DcmVhdGVDYXJkQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlDYXJkcyB7XHJcbiAgY2FyZHM6IGlUYXNrW107XHJcbiAgbW92ZUNhcmQ6IChkcmFnSW5kZXg6IG51bWJlciwgaG92ZXJJbmRleDogbnVtYmVyLCBzdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlUYXNrIHtcclxuICBfaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgc3RhdGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgYm9hcmRJZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCb2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYm9hcmRJZCB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8aVRhc2tbXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL2NhcmRzLyR7Ym9hcmRJZH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbW92ZUNhcmQgPSBhc3luYyAoXHJcbiAgICBkcmFnSW5kZXg6IG51bWJlcixcclxuICAgIGhvdmVySW5kZXg6IG51bWJlcixcclxuICAgIHN0YXRlOiBzdHJpbmdcclxuICApID0+IHtcclxuICAgIGNvbnN0IGRyYWdDYXJkID0gZGF0YVtkcmFnSW5kZXhdO1xyXG4gICAgY29uc3QgbmV3Q2FyZHMgPSBbLi4uZGF0YV07XHJcbiAgICBuZXdDYXJkcy5zcGxpY2UoZHJhZ0luZGV4LCAxKTtcclxuICAgIG5ld0NhcmRzLnNwbGljZShob3ZlckluZGV4LCAwLCBkcmFnQ2FyZCk7XHJcbiAgICBzZXREYXRhKG5ld0NhcmRzKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL21hbmFnZW1lbi1ib2FyZHMub25yZW5kZXIuY29tL3VwZGF0ZS1jYXJkLyR7ZHJhZ0NhcmQuX2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlIH0pLCAvLyDQmNC30LzQtdC90LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtSDQutCw0YDRgtC+0YfQutC4XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhcmQgc3RhdGU6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XHJcbiAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgdGl0bGU9XCJUbyBEb1wiXHJcbiAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwiZG9cIil9XHJcbiAgICAgICAgICBtb3ZlQ2FyZD17bW92ZUNhcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICB0aXRsZT1cIkluIFByb2dyZXNzXCJcclxuICAgICAgICAgIGNhcmRzPXtkYXRhLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0ZSA9PT0gXCJwcm9ncmVzc1wiKX1cclxuICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiRG9uZVwiXHJcbiAgICAgICAgICBjYXJkcz17ZGF0YS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdGUgPT09IFwiZG9uZVwiKX1cclxuICAgICAgICAgIG1vdmVDYXJkPXttb3ZlQ2FyZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0RuZFByb3ZpZGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEbmRQcm92aWRlciIsIkhUTUw1QmFja2VuZCIsIkNvbHVtbiIsIkJvYXJkIiwiYm9hcmRJZCIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtb3ZlQ2FyZCIsImRyYWdJbmRleCIsImhvdmVySW5kZXgiLCJzdGF0ZSIsImRyYWdDYXJkIiwibmV3Q2FyZHMiLCJzcGxpY2UiLCJfaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJiYWNrZW5kIiwidGl0bGUiLCJjYXJkcyIsImZpbHRlciIsInRhc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Board.tsx\n"));

/***/ })

});