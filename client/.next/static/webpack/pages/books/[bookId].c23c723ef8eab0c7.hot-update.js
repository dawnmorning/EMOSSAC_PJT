"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books/[bookId]",{

/***/ "./src/components/bookDetail/TagList.tsx":
/*!***********************************************!*\
  !*** ./src/components/bookDetail/TagList.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/** @jsxImportSource @emotion/react */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    height: 48px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\nposition: absolute;\\n  margin-top: 12px;\\n    width: 100%;\\n    overflow: scroll;\\n    padding-left: 50px;\\n    /* padding-right: -20px; */\\n    margin-left: -50px;\\n    -webkit-mask-image: linear-gradient(\\n        to right,\\n        rgba(0, 0, 0, 0) 0%,\\n        var(--back-color) 5%,\\n        var(--back-color) 90%,\\n        rgba(0, 0, 0, 0) 100%\\n    );\\n    mask-image: linear-gradient(\\n        to right,\\n        rgba(0, 0, 0, 0) 0%,\\n        var(--back-color) 5%,\\n        var(--back-color) 90%,\\n        rgba(0, 0, 0, 0) 100%\\n    );\\n\\n    &::-webkit-scrollbar {\\n    display: none; /* Chrome, Safari, Opera*/\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  /* border-radius: 20px; */\\n  /* background-color: var(--main-color); */\\n  /* padding: 14px; */\\n  margin-right: 14px;\\n  /* margin-bottom: 14px; */\\n  color: black;\\n  white-space:pre;;\\n  color: var(--text-color-4);\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst TagList = (param)=>{\n    let { tag  } = param;\n    const renderTags = tag.split(\" \").map((el, idx)=>{\n        if (el.trim() !== \"\") {\n            return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                css: tagWrapperCSS,\n                children: [\n                    el,\n                    \",\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\bookDetail\\\\TagList.tsx\",\n                lineNumber: 12,\n                columnNumber: 16\n            }, undefined);\n        }\n    });\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        css: outerWrapperCSS,\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            css: tagListWrapperCSS,\n            children: renderTags\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\bookDetail\\\\TagList.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\bookDetail\\\\TagList.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TagList;\nconst outerWrapperCSS = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject());\nconst tagListWrapperCSS = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject1());\nconst tagWrapperCSS = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject2());\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagList);\nvar _c;\n$RefreshReg$(_c, \"TagList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib29rRGV0YWlsL1RhZ0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ007QUFNMUMsTUFBTUMsVUFBVSxTQUEyQjtRQUExQixFQUFFQyxJQUFHLEVBQWdCO0lBRXBDLE1BQU1DLGFBQWFELElBQUlFLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSUMsTUFBUTtRQUNqRCxJQUFJRCxHQUFHRSxJQUFJLE9BQU8sSUFBSTtZQUNsQixxQkFBTyx1RUFBQ0M7Z0JBQUlULEtBQUtVOztvQkFBZ0JKO29CQUFHOzs7Ozs7O1FBQ3hDLENBQUM7SUFFSDtJQUNBLHFCQUNFLHVFQUFDRztRQUFJVCxLQUFLVztrQkFDTixxRkFBQ0Y7WUFBSVQsS0FBS1k7c0JBQW9CVDs7Ozs7Ozs7Ozs7QUFJdEM7S0FkTUY7QUFnQk4sTUFBTVUsa0JBQWtCWCxtREFBR0E7QUFLM0IsTUFBTVksb0JBQW9CWixtREFBR0E7QUE2QjdCLE1BQU1VLGdCQUFnQlYsbURBQUdBO0FBV3pCLCtEQUFlQyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Jvb2tEZXRhaWwvVGFnTGlzdC50c3g/OWNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFRhZ0xpc3RQcm9wcyB7XHJcbiAgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRhZ0xpc3QgPSAoeyB0YWcgfTogVGFnTGlzdFByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhZ3MgPSB0YWcuc3BsaXQoXCIgXCIpLm1hcCgoZWwsIGlkeCkgPT4ge1xyXG4gICAgaWYgKGVsLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjc3M9e3RhZ1dyYXBwZXJDU1N9PntlbH0sPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtvdXRlcldyYXBwZXJDU1N9PlxyXG4gICAgICAgIDxkaXYgY3NzPXt0YWdMaXN0V3JhcHBlckNTU30+e3JlbmRlclRhZ3N9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBvdXRlcldyYXBwZXJDU1MgPSBjc3NgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbmBcclxuXHJcbmNvbnN0IHRhZ0xpc3RXcmFwcGVyQ1NTID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgLyogcGFkZGluZy1yaWdodDogLTIwcHg7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxyXG4gICAgICAgIHZhcigtLWJhY2stY29sb3IpIDUlLFxyXG4gICAgICAgIHZhcigtLWJhY2stY29sb3IpIDkwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDEwMCVcclxuICAgICk7XHJcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcclxuICAgICAgICB2YXIoLS1iYWNrLWNvbG9yKSA1JSxcclxuICAgICAgICB2YXIoLS1iYWNrLWNvbG9yKSA5MCUsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSAxMDAlXHJcbiAgICApO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdGFnV3JhcHBlckNTUyA9IGNzc2BcclxuICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpOyAqL1xyXG4gIC8qIHBhZGRpbmc6IDE0cHg7ICovXHJcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDE0cHg7ICovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdoaXRlLXNwYWNlOnByZTs7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItNCk7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdMaXN0O1xyXG4iXSwibmFtZXMiOlsiY3NzIiwiVGFnTGlzdCIsInRhZyIsInJlbmRlclRhZ3MiLCJzcGxpdCIsIm1hcCIsImVsIiwiaWR4IiwidHJpbSIsImRpdiIsInRhZ1dyYXBwZXJDU1MiLCJvdXRlcldyYXBwZXJDU1MiLCJ0YWdMaXN0V3JhcHBlckNTUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/bookDetail/TagList.tsx\n"));

/***/ })

});