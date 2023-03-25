"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books",{

/***/ "./src/components/UI/BookCard/BookCard.tsx":
/*!*************************************************!*\
  !*** ./src/components/UI/BookCard/BookCard.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_bookCardModal_BookCardModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/bookCardModal/BookCardModal */ \"./src/components/bookCardModal/BookCardModal.tsx\");\n/* harmony import */ var _components_function_Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/function/Portal */ \"./src/components/function/Portal.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/** @jsxImportSource @emotion/react */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: \",\n        \";\\n    height: \",\n        \";\\n    \",\n        \";\\n    \",\n        \";\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: \",\n        \";\\n    height: \",\n        \";\\n    \",\n        \";\\n    \",\n        \";\\n    position: relative;\\n    overflow: hidden;\\n    border-radius: 10px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: 3vw;\\n  min-height: 36px;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  position: absolute;\\n  bottom: 0;\\n  pointer-events: none;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: auto;\\n  height: 100%;\\n  transition: transform 0.3s;\\n  &:hover {\\n    transform: scale(1.1);\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    height: 100%;\\n    transition-property: opacity;\\n    transition-duration: 0.3s;\\n    border-radius: 10px;\\n    background-color: rgb(200, 200, 200);\\n    position: absolute;\\n    opacity: \",\n        \";\\n    pointer-events: none;\\n  \"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 36px;\\n    height: auto;\\n    margin: 10px;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BookCard = (param)=>{\n    let { bookData , showPlatform , width , height , minWidth , minHeight  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setUser(()=>navigator.userAgent);\n    }, []);\n    const isMobile = ()=>{\n        let is_mobile = false;\n        if (user !== undefined && user.length > 0 && user.indexOf(\"iPhone\") > -1 || user.indexOf(\"Android\") > -1 || user.indexOf(\"iPad\") > -1 || user.indexOf(\"iPod\") > -1) {\n            is_mobile = true;\n        }\n        return is_mobile;\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [modalToggler, setModalToggler] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMouseOn, setIsMouseOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hrefArr, setHrefArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const platformBase = [\n        \"https://comic.naver.com/\",\n        \"https://series.naver.com/\",\n        \"https://page.kakao.com/\",\n        \"https://ridibooks.com/\"\n    ];\n    const showModal = ()=>{\n        setTimeout(function() {\n            setModalToggler(()=>true);\n        }, 400);\n        setIsMouseOn(()=>true);\n    };\n    const hideModal = ()=>{\n        setIsMouseOn(()=>false);\n        setTimeout(function() {\n            setModalToggler(()=>false);\n        }, 500);\n    };\n    const instantlyRedirect = ()=>{\n        if (isMobile() === true) {\n            // 모바일에서 Detail 페이지로 바로 이동\n            router.push(\"/books/\".concat(bookData.bookId));\n        }\n    };\n    const platformRender = hrefArr.map((el, idx)=>{\n        const findPlatform = (element)=>{\n            if (el.includes(element)) {\n                return true;\n            }\n        };\n        const result = platformBase.findIndex(findPlatform);\n        return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: result === 0 && \"/assets/platform_naver_webtoon.webp\" || result === 1 && \"/assets/platform_naver_series.webp\" || result === 2 && \"/assets/platform_kakao_page.png\" || result === 3 && \"/assets/platform_ridi.webp\" || \"\",\n            css: platformIconCSS\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n            lineNumber: 104,\n            columnNumber: 9\n        }, undefined);\n    });\n    const modal = /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_function_Portal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        selector: \".overlay-root\",\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_bookCardModal_BookCardModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            modalToggler: modalToggler,\n            isMouseOn: isMouseOn,\n            setModalToggler: setModalToggler,\n            bookData: bookData,\n            parentRef: wrapperRef,\n            imgHeight: height,\n            imgMinHeight: minHeight\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, undefined);\n    const platformBar = /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        css: platformBarCSS,\n        children: platformRender\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n        lineNumber: 124,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"bookcard-outer-wrapper\",\n        css: cardOuterWrapper({\n            width,\n            height,\n            minWidth,\n            minHeight\n        }),\n        ref: wrapperRef,\n        onClick: instantlyRedirect,\n        onMouseOver: (event)=>{\n            event.stopPropagation();\n            showModal();\n        },\n        onMouseLeave: hideModal,\n        children: [\n            user !== null && isMobile() === false && modalToggler && modal,\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                className: \"bookcard-inner-wrapper\",\n                css: cardInnerWrapperCSS({\n                    width,\n                    height,\n                    minWidth,\n                    minHeight\n                }),\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                        css: skeletonLoadingTagCSS({\n                            state: bookData !== \"LOADING\" ? true : false\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n                        className: \"img\",\n                        src: bookData && bookData.thumbnail,\n                        alt: bookData && bookData.title,\n                        css: imageCSS\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, undefined),\n                    showPlatform && bookData !== \"LOADING\" && platformBar\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DongJu\\\\Desktop\\\\S08P22D203\\\\client\\\\src\\\\components\\\\UI\\\\BookCard\\\\BookCard.tsx\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BookCard, \"QE91PNuxxt1Luy5EPIIXh9uBmUY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = BookCard;\nconst cardOuterWrapper = (param)=>{\n    let { width , height , minWidth , minHeight  } = param;\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)(_templateObject(), width !== undefined ? width : \"auto\", height !== undefined ? height : \"100%\", minWidth && \"min-width: \".concat(minWidth), minHeight && \"min-height: \".concat(minHeight));\n};\nconst cardInnerWrapperCSS = (param)=>{\n    let { width , height , minWidth , minHeight  } = param;\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)(_templateObject1(), width !== undefined ? width : \"auto\", height !== undefined ? height : \"100%\", minWidth && \"min-width: \".concat(minWidth), minHeight && \"min-height: \".concat(minHeight));\n};\nconst platformBarCSS = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)(_templateObject2());\nconst imageCSS = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)(_templateObject3());\nconst skeletonLoadingTagCSS = (param)=>{\n    let { state  } = param;\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)(_templateObject4(), state ? \"0\" : \"255\");\n};\nconst platformIconCSS = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)(_templateObject5());\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookCard);\nvar _c;\n$RefreshReg$(_c, \"BookCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9Cb29rQ2FyZC9Cb29rQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ007QUFDVTtBQU9pQjtBQUNuQjtBQUNYO0FBbUJ2QyxNQUFNTyxXQUFXLFNBT0o7UUFQSyxFQUNoQkMsU0FBUSxFQUNSQyxhQUFZLEVBQ1pDLE1BQUssRUFDTEMsT0FBTSxFQUNOQyxTQUFRLEVBQ1JDLFVBQVMsRUFDSDs7SUFFTixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQU0sSUFBSTtJQUMxQ0UsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxRQUFRLElBQU1DLFVBQVVDLFNBQVM7SUFDbkMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsV0FBVyxJQUFNO1FBQ3JCLElBQUlDLFlBQVksS0FBSztRQUNyQixJQUNFLFNBQVVDLGFBQWFOLEtBQUtPLE1BQU0sR0FBRyxLQUFLUCxLQUFLUSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQ3BFUixLQUFLUSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQzNCUixLQUFLUSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQ3hCUixLQUFLUSxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQ3hCO1lBQ0FILFlBQVksSUFBSTtRQUNsQixDQUFDO1FBQ0QsT0FBT0E7SUFDVDtJQUdBLE1BQU1JLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTWtCLGFBQWF0Qiw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUM5QyxNQUFNLENBQUN1QixjQUFjQyxnQkFBZ0IsR0FBR3pCLCtDQUFRQSxDQUFVLEtBQUs7SUFDL0QsTUFBTSxDQUFDMEIsV0FBV0MsYUFBYSxHQUFHM0IsK0NBQVFBLENBQVUsS0FBSztJQUN6RCxNQUFNLENBQUM0QixTQUFTQyxXQUFXLEdBQUc3QiwrQ0FBUUE7SUFDdEMsTUFBTThC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QkFDQ1UsVUFBVVUsWUFBWVYsUUFBUSxNQUFNLEVBQ25DQyxXQUFXUyxZQUFZVCxTQUFTLE1BQU0sRUFDOUNDLFlBQVksY0FBdUIsT0FBVEEsV0FDMUJDLGFBQWEsZUFBeUIsT0FBVkE7QUFRbEM7QUFFQSxNQUFNNEMsaUJBQWlCekQsbURBQUdBO0FBVTFCLE1BQU13RSxXQUFXeEUsbURBQUdBO0FBYXBCLE1BQU1tRSx3QkFBd0IsU0FBMkM7UUFBMUMsRUFBRUMsTUFBSyxFQUE4QjtJQUNsRSxPQUFPcEUsbURBQUdBLHFCQVFHb0UsUUFBUSxNQUFNLEtBQUs7QUFHbEM7QUFHQSxNQUFNbkIsa0JBQWtCakQsbURBQUdBO0FBTTNCLCtEQUFlTyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL0Jvb2tDYXJkL0Jvb2tDYXJkLnRzeD81ZDZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHJpZGkgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9wbGF0Zm9ybV9yaWRpLndlYnBcIjtcclxuaW1wb3J0IG5hdmVyU2VyaWVzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcGxhdGZvcm1fbmF2ZXJfc2VyaWVzLndlYnBcIjtcclxuaW1wb3J0IG5hdmVyV2VidG9vbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3BsYXRmb3JtX25hdmVyX3dlYnRvb24ud2VicFwiO1xyXG5pbXBvcnQga2FrYW9QYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcGxhdGZvcm1fa2FrYW9fcGFnZS5wbmdcIjtcclxuXHJcbmltcG9ydCBCb29rQ2FyZE1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvYm9va0NhcmRNb2RhbC9Cb29rQ2FyZE1vZGFsXCI7XHJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIkAvY29tcG9uZW50cy9mdW5jdGlvbi9Qb3J0YWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmltcG9ydCB7IGJvb2tDb250ZW50VHlwZSB9IGZyb20gXCJAL3R5cGVzL2Jvb2tzXCI7XHJcblxyXG5pbnRlcmZhY2UgQm9va0RhdGEge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgcGxhdGZvcm06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBib29rRGF0YT86IGFueTtcclxuICBzaG93UGxhdGZvcm06IGJvb2xlYW47XHJcbiAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgaGVpZ2h0Pzogc3RyaW5nO1xyXG4gIG1pbldpZHRoPzogc3RyaW5nO1xyXG4gIG1pbkhlaWdodD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQm9va0NhcmQgPSAoe1xyXG4gIGJvb2tEYXRhLFxyXG4gIHNob3dQbGF0Zm9ybSxcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgbWluV2lkdGgsXHJcbiAgbWluSGVpZ2h0LFxyXG59OiBQcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRVc2VyKCgpID0+IG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgaXNfbW9iaWxlID0gZmFsc2U7XHJcbiAgICBpZiAoXHJcbiAgICAgICh1c2VyICE9PSB1bmRlZmluZWQgJiYgdXNlci5sZW5ndGggPiAwICYmIHVzZXIuaW5kZXhPZihcImlQaG9uZVwiKSA+IC0xKSB8fFxyXG4gICAgICB1c2VyLmluZGV4T2YoXCJBbmRyb2lkXCIpID4gLTEgfHxcclxuICAgICAgdXNlci5pbmRleE9mKFwiaVBhZFwiKSA+IC0xIHx8XHJcbiAgICAgIHVzZXIuaW5kZXhPZihcImlQb2RcIikgPiAtMVxyXG4gICAgKSB7XHJcbiAgICAgIGlzX21vYmlsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNfbW9iaWxlO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbFRvZ2dsZXIsIHNldE1vZGFsVG9nZ2xlcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW91c2VPbiwgc2V0SXNNb3VzZU9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbaHJlZkFyciwgc2V0SHJlZkFycl0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oKVxyXG4gIGNvbnN0IHBsYXRmb3JtQmFzZSA9IFtcImh0dHBzOi8vY29taWMubmF2ZXIuY29tL1wiLCBcImh0dHBzOi8vc2VyaWVzLm5hdmVyLmNvbS9cIiwgXCJodHRwczovL3BhZ2Uua2FrYW8uY29tL1wiLCBcImh0dHBzOi8vcmlkaWJvb2tzLmNvbS9cIl1cclxuXHJcbiBcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldE1vZGFsVG9nZ2xlcigoKSA9PiB0cnVlKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgICBzZXRJc01vdXNlT24oKCkgPT4gdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb3VzZU9uKCgpID0+IGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRNb2RhbFRvZ2dsZXIoKCkgPT4gZmFsc2UpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbnN0YW50bHlSZWRpcmVjdCA9ICgpID0+IHtcclxuICAgIGlmIChpc01vYmlsZSgpID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIOuqqOuwlOydvOyXkOyEnCBEZXRhaWwg7Y6Y7J207KeA66GcIOuwlOuhnCDsnbTrj5lcclxuICAgICAgcm91dGVyLnB1c2goYC9ib29rcy8ke2Jvb2tEYXRhLmJvb2tJZH1gKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgXHJcbiAgY29uc3QgcGxhdGZvcm1SZW5kZXIgPSBocmVmQXJyLm1hcCgoZWwsIGlkeCkgPT4ge1xyXG4gICAgICBjb25zdCBmaW5kUGxhdGZvcm0gPSAoZWxlbWVudDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5jbHVkZXMoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXRmb3JtQmFzZS5maW5kSW5kZXgoZmluZFBsYXRmb3JtKVxyXG4gICAgICByZXR1cm4gKFxyXG5cclxuXHJcbiAgICAgICAgPGltZyBzcmM9eyhyZXN1bHQgPT09IDAgJiYgXCIvYXNzZXRzL3BsYXRmb3JtX25hdmVyX3dlYnRvb24ud2VicFwiKSB8fCAocmVzdWx0ID09PSAxICYmIFwiL2Fzc2V0cy9wbGF0Zm9ybV9uYXZlcl9zZXJpZXMud2VicFwiKSB8fCAocmVzdWx0ID09PSAyICYmIFwiL2Fzc2V0cy9wbGF0Zm9ybV9rYWthb19wYWdlLnBuZ1wiKSB8fCAocmVzdWx0ID09PSAzICYmIFwiL2Fzc2V0cy9wbGF0Zm9ybV9yaWRpLndlYnBcIikgfHwgJyd9IGNzcz17cGxhdGZvcm1JY29uQ1NTfSAvPlxyXG5cclxuXHJcbiAgICAgIClcclxuICB9KVxyXG5cclxuICBjb25zdCBtb2RhbCA9IChcclxuICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIub3ZlcmxheS1yb290XCI+XHJcbiAgICAgIDxCb29rQ2FyZE1vZGFsXHJcbiAgICAgICAgbW9kYWxUb2dnbGVyPXttb2RhbFRvZ2dsZXJ9XHJcbiAgICAgICAgaXNNb3VzZU9uPXtpc01vdXNlT259XHJcbiAgICAgICAgc2V0TW9kYWxUb2dnbGVyPXtzZXRNb2RhbFRvZ2dsZXJ9XHJcbiAgICAgICAgYm9va0RhdGE9e2Jvb2tEYXRhfVxyXG4gICAgICAgIHBhcmVudFJlZj17d3JhcHBlclJlZn1cclxuICAgICAgICBpbWdIZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICBpbWdNaW5IZWlnaHQ9e21pbkhlaWdodH1cclxuICAgICAgLz5cclxuICAgIDwvUG9ydGFsPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHBsYXRmb3JtQmFyID0gPGRpdiBjc3M9e3BsYXRmb3JtQmFyQ1NTfT57cGxhdGZvcm1SZW5kZXJ9PC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1wiYm9va2NhcmQtb3V0ZXItd3JhcHBlclwifVxyXG4gICAgICBjc3M9e2NhcmRPdXRlcldyYXBwZXIoeyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0IH0pfVxyXG4gICAgICByZWY9e3dyYXBwZXJSZWZ9XHJcbiAgICAgIG9uQ2xpY2s9e2luc3RhbnRseVJlZGlyZWN0fVxyXG4gICAgICBvbk1vdXNlT3Zlcj17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgc2hvd01vZGFsKCk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17aGlkZU1vZGFsfVxyXG4gICAgPlxyXG4gICAgICB7dXNlciAhPT0gbnVsbCAmJiBpc01vYmlsZSgpID09PSBmYWxzZSAmJiBtb2RhbFRvZ2dsZXIgJiYgbW9kYWx9XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcImJvb2tjYXJkLWlubmVyLXdyYXBwZXJcIn1cclxuICAgICAgICBjc3M9e2NhcmRJbm5lcldyYXBwZXJDU1MoeyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0IH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY3NzPXtza2VsZXRvbkxvYWRpbmdUYWdDU1Moe1xyXG4gICAgICAgICAgICBzdGF0ZTogYm9va0RhdGEgIT09IFwiTE9BRElOR1wiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1wiaW1nXCJ9XHJcbiAgICAgICAgICBzcmM9e2Jvb2tEYXRhICYmIGJvb2tEYXRhLnRodW1ibmFpbH1cclxuICAgICAgICAgIGFsdD17Ym9va0RhdGEgJiYgYm9va0RhdGEudGl0bGV9XHJcbiAgICAgICAgICBjc3M9e2ltYWdlQ1NTfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3Nob3dQbGF0Zm9ybSAmJiBib29rRGF0YSAhPT0gXCJMT0FESU5HXCIgJiYgcGxhdGZvcm1CYXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBjYXJkT3V0ZXJXcmFwcGVyUHJvcHMge1xyXG4gIHdpZHRoOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgbWluV2lkdGg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBtaW5IZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuY29uc3QgY2FyZE91dGVyV3JhcHBlciA9ICh7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIG1pbldpZHRoLFxyXG4gIG1pbkhlaWdodCxcclxufTogY2FyZE91dGVyV3JhcHBlclByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIGNzc2BcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAke3dpZHRoICE9PSB1bmRlZmluZWQgPyB3aWR0aCA6IFwiYXV0b1wifTtcclxuICAgIGhlaWdodDogJHtoZWlnaHQgIT09IHVuZGVmaW5lZCA/IGhlaWdodCA6IFwiMTAwJVwifTtcclxuICAgICR7bWluV2lkdGggJiYgYG1pbi13aWR0aDogJHttaW5XaWR0aH1gfTtcclxuICAgICR7bWluSGVpZ2h0ICYmIGBtaW4taGVpZ2h0OiAke21pbkhlaWdodH1gfTtcclxuICBgO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIENhcmRJbm5lcldyYXBwZXJQcm9wcyB7XHJcbiAgd2lkdGg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBoZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBtaW5XaWR0aDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIG1pbkhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5jb25zdCBjYXJkSW5uZXJXcmFwcGVyQ1NTID0gKHtcclxuICB3aWR0aCxcclxuICBoZWlnaHQsXHJcbiAgbWluV2lkdGgsXHJcbiAgbWluSGVpZ2h0LFxyXG59OiBDYXJkSW5uZXJXcmFwcGVyUHJvcHMpID0+IHtcclxuICByZXR1cm4gY3NzYFxyXG4gICAgd2lkdGg6ICR7d2lkdGggIT09IHVuZGVmaW5lZCA/IHdpZHRoIDogXCJhdXRvXCJ9O1xyXG4gICAgaGVpZ2h0OiAke2hlaWdodCAhPT0gdW5kZWZpbmVkID8gaGVpZ2h0IDogXCIxMDAlXCJ9O1xyXG4gICAgJHttaW5XaWR0aCAmJiBgbWluLXdpZHRoOiAke21pbldpZHRofWB9O1xyXG4gICAgJHttaW5IZWlnaHQgJiYgYG1pbi1oZWlnaHQ6ICR7bWluSGVpZ2h0fWB9O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGA7XHJcbn07XHJcblxyXG5jb25zdCBwbGF0Zm9ybUJhckNTUyA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDN2dztcclxuICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgaW1hZ2VDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBza2VsZXRvbkxvYWRpbmdUYWdDU1NQcm9wcyB7XHJcbiAgc3RhdGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IHNrZWxldG9uTG9hZGluZ1RhZ0NTUyA9ICh7IHN0YXRlIH06IHNrZWxldG9uTG9hZGluZ1RhZ0NTU1Byb3BzKSA9PiB7XHJcbiAgcmV0dXJuIGNzc2BcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogJHtzdGF0ZSA/IFwiMFwiIDogXCIyNTVcIn07XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBgO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHBsYXRmb3JtSWNvbkNTUyA9IGNzc2BcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rQ2FyZDtcclxuIl0sIm5hbWVzIjpbImNzcyIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQm9va0NhcmRNb2RhbCIsIlBvcnRhbCIsInVzZVJvdXRlciIsIkJvb2tDYXJkIiwiYm9va0RhdGEiLCJzaG93UGxhdGZvcm0iLCJ3aWR0aCIsImhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwidXNlciIsInNldFVzZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc01vYmlsZSIsImlzX21vYmlsZSIsInVuZGVmaW5lZCIsImxlbmd0aCIsImluZGV4T2YiLCJyb3V0ZXIiLCJ3cmFwcGVyUmVmIiwibW9kYWxUb2dnbGVyIiwic2V0TW9kYWxUb2dnbGVyIiwiaXNNb3VzZU9uIiwic2V0SXNNb3VzZU9uIiwiaHJlZkFyciIsInNldEhyZWZBcnIiLCJwbGF0Zm9ybUJhc2UiLCJzaG93TW9kYWwiLCJzZXRUaW1lb3V0IiwiaGlkZU1vZGFsIiwiaW5zdGFudGx5UmVkaXJlY3QiLCJwdXNoIiwiYm9va0lkIiwicGxhdGZvcm1SZW5kZXIiLCJtYXAiLCJlbCIsImlkeCIsImZpbmRQbGF0Zm9ybSIsImVsZW1lbnQiLCJpbmNsdWRlcyIsInJlc3VsdCIsImZpbmRJbmRleCIsImltZyIsInNyYyIsInBsYXRmb3JtSWNvbkNTUyIsIm1vZGFsIiwic2VsZWN0b3IiLCJwYXJlbnRSZWYiLCJpbWdIZWlnaHQiLCJpbWdNaW5IZWlnaHQiLCJwbGF0Zm9ybUJhciIsImRpdiIsInBsYXRmb3JtQmFyQ1NTIiwiY2xhc3NOYW1lIiwiY2FyZE91dGVyV3JhcHBlciIsInJlZiIsIm9uQ2xpY2siLCJvbk1vdXNlT3ZlciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwib25Nb3VzZUxlYXZlIiwiY2FyZElubmVyV3JhcHBlckNTUyIsInNrZWxldG9uTG9hZGluZ1RhZ0NTUyIsInN0YXRlIiwidGh1bWJuYWlsIiwiYWx0IiwidGl0bGUiLCJpbWFnZUNTUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UI/BookCard/BookCard.tsx\n"));

/***/ })

});