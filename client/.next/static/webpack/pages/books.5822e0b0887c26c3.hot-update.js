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

/***/ "./src/api/book/getBookDetail.ts":
/*!***************************************!*\
  !*** ./src/api/book/getBookDetail.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBookDetail\": function() { return /* binding */ getBookDetail; }\n/* harmony export */ });\n/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ \"./src/api/instance.ts\");\n// import { defaultAxiosInstance } from \"../instance\";\n// import { AxiosResponse } from \"axios\";\n// type bookDataType = {\n//     \"bookId\": number,\n//     \"platform\": number,\n//     \"thumbnail\": string,\n//     \"title\": string,\n//     \"author\": string,\n//     \"href\": string,\n//     \"story\": string,\n//     \"tag\": string,\n//     \"genre\": string,\n//     \"regist\": string,\n//     \"grade\": string,\n//     \"avgScore\": number,\n//     \"hit\": number,\n//     \"day\": string,\n//     \"bookmark\": boolean,\n//     \"read\": boolean,\n//     \"myScore\": number\n// }[]\n// interface bookDataResponse {\n//   status: number;\n//   message: string;\n//   data: bookDataType;\n// }\n// // export async function getBookDetail(\n// //   bookId: number\n// // ): Promise<bookDataType | null> {\n// //   try {\n// //     const { data }: { data: bookDataResponse } = await defaultAxiosInstance.get(\n// //       `/books/${bookId}`\n// //     );\n// //     if (data.status === 200) {\n// //       return data.data;\n// //     } else {\n// //       return null;\n// //     }\n// //   } catch (error) {\n// //     console.log(error);\n// //     throw error\n// //   }\n// // }\n// import axios from \"axios\";\n// export const getBookDetail = async (bookId: number): Promise<bookDataType> => {\n//   return await axios({\n//     method: \"get\",\n//     url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${bookId}`,\n//     headers: {\n//       Authorization: \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNjc5MzU5MDQwLCJleHAiOjE2ODAyMjMwNDB9.5rJDelPFgBQRZclfOF5KE7teD-xIKTGyMkPEw7BQRJtETqM36wUqOaEnmNN12cIwz1drC9SOo03gLshlqGhuLw\",\n//     },\n//   }).then((res: AxiosResponse<bookDataResponse>) => {\n//     return res.data.data;\n//   });\n// };\n\nasync function getBookDetail(param) {\n    let { bookId  } = param;\n    try {\n        const { data  } = await _instance__WEBPACK_IMPORTED_MODULE_0__.defaultAxiosInstance.get(\"/books/genre/\".concat(genreCode, \"?typeCode=\").concat(typeCode).concat(prevId !== undefined ? \"&prevId=\".concat(prevId) : \"\").concat(prevScore !== undefined ? \"&prevScore=\".concat(prevScore) : \"\").concat(size !== undefined ? \"&size=\".concat(size) : \"\"));\n        return data.data;\n    } catch (error) {\n        console.log(error);\n        throw error;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2Jvb2svZ2V0Qm9va0RldGFpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFzRDtBQUV0RCx5Q0FBeUM7QUFFekMsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLHdCQUF3QjtBQUN4Qix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUVOLCtCQUErQjtBQUMvQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUosMENBQTBDO0FBQzFDLHNCQUFzQjtBQUN0Qix1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLG9DQUFvQztBQUNwQyw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsU0FBUztBQUNULE9BQU87QUFHUCw2QkFBNkI7QUFFN0Isa0ZBQWtGO0FBQ2xGLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsc0VBQXNFO0FBQ3RFLGlCQUFpQjtBQUNqQiwwTUFBME07QUFDMU0sU0FBUztBQUNULHdEQUF3RDtBQUN4RCw0QkFBNEI7QUFDNUIsUUFBUTtBQUNSLEtBQUs7QUFFOEM7QUF3QjVDLGVBQWVDLGNBQWMsS0FBb0IsRUFDMUI7UUFETSxFQUFDQyxPQUFNLEVBQWEsR0FBcEI7SUFFbEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQTJCLE1BQU1ILCtEQUF3QixDQUNyRSxnQkFBc0NLLE9BQXRCQyxXQUFVLGNBQXVCQyxPQUFYRixVQUE2REcsT0FBbERELFdBQVdFLFlBQVksV0FBa0IsT0FBUEYsVUFBVyxFQUFFLEVBQThERyxPQUEzREYsY0FBY0MsWUFBWSxjQUF3QixPQUFWRCxhQUFjLEVBQUUsRUFBNkMsT0FBMUNFLFNBQVNELFlBQVksU0FBYyxPQUFMQyxRQUFTLEVBQUU7UUFFek0sT0FBT1AsS0FBS0EsSUFBSTtJQUNsQixFQUFFLE9BQU9RLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE1BQU1BLE1BQUs7SUFDYjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9ib29rL2dldEJvb2tEZXRhaWwudHM/NGU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBkZWZhdWx0QXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi9pbnN0YW5jZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gdHlwZSBib29rRGF0YVR5cGUgPSB7XHJcbi8vICAgICBcImJvb2tJZFwiOiBudW1iZXIsXHJcbi8vICAgICBcInBsYXRmb3JtXCI6IG51bWJlcixcclxuLy8gICAgIFwidGh1bWJuYWlsXCI6IHN0cmluZyxcclxuLy8gICAgIFwidGl0bGVcIjogc3RyaW5nLFxyXG4vLyAgICAgXCJhdXRob3JcIjogc3RyaW5nLFxyXG4vLyAgICAgXCJocmVmXCI6IHN0cmluZyxcclxuLy8gICAgIFwic3RvcnlcIjogc3RyaW5nLFxyXG4vLyAgICAgXCJ0YWdcIjogc3RyaW5nLFxyXG4vLyAgICAgXCJnZW5yZVwiOiBzdHJpbmcsXHJcbi8vICAgICBcInJlZ2lzdFwiOiBzdHJpbmcsXHJcbi8vICAgICBcImdyYWRlXCI6IHN0cmluZyxcclxuLy8gICAgIFwiYXZnU2NvcmVcIjogbnVtYmVyLFxyXG4vLyAgICAgXCJoaXRcIjogbnVtYmVyLFxyXG4vLyAgICAgXCJkYXlcIjogc3RyaW5nLFxyXG4vLyAgICAgXCJib29rbWFya1wiOiBib29sZWFuLFxyXG4vLyAgICAgXCJyZWFkXCI6IGJvb2xlYW4sXHJcbi8vICAgICBcIm15U2NvcmVcIjogbnVtYmVyXHJcbi8vIH1bXVxyXG5cclxuLy8gaW50ZXJmYWNlIGJvb2tEYXRhUmVzcG9uc2Uge1xyXG4vLyAgIHN0YXR1czogbnVtYmVyO1xyXG4vLyAgIG1lc3NhZ2U6IHN0cmluZztcclxuLy8gICBkYXRhOiBib29rRGF0YVR5cGU7XHJcbi8vIH1cclxuXHJcbi8vIC8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29rRGV0YWlsKFxyXG4vLyAvLyAgIGJvb2tJZDogbnVtYmVyXHJcbi8vIC8vICk6IFByb21pc2U8Ym9va0RhdGFUeXBlIHwgbnVsbD4ge1xyXG4vLyAvLyAgIHRyeSB7XHJcbi8vIC8vICAgICBjb25zdCB7IGRhdGEgfTogeyBkYXRhOiBib29rRGF0YVJlc3BvbnNlIH0gPSBhd2FpdCBkZWZhdWx0QXhpb3NJbnN0YW5jZS5nZXQoXHJcbi8vIC8vICAgICAgIGAvYm9va3MvJHtib29rSWR9YFxyXG4vLyAvLyAgICAgKTtcclxuLy8gLy8gICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gMjAwKSB7XHJcbi8vIC8vICAgICAgIHJldHVybiBkYXRhLmRhdGE7XHJcbi8vIC8vICAgICB9IGVsc2Uge1xyXG4vLyAvLyAgICAgICByZXR1cm4gbnVsbDtcclxuLy8gLy8gICAgIH1cclxuLy8gLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAvLyAgICAgdGhyb3cgZXJyb3JcclxuLy8gLy8gICB9XHJcbi8vIC8vIH1cclxuXHJcblxyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0Qm9va0RldGFpbCA9IGFzeW5jIChib29rSWQ6IG51bWJlcik6IFByb21pc2U8Ym9va0RhdGFUeXBlPiA9PiB7XHJcbi8vICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcclxuLy8gICAgIG1ldGhvZDogXCJnZXRcIixcclxuLy8gICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMfS9ib29rcy8ke2Jvb2tJZH1gLFxyXG4vLyAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBleUpoYkdjaU9pSklVelV4TWlKOS5leUp6ZFdJaU9pSTRJaXdpYVdGMElqb3hOamM1TXpVNU1EUXdMQ0psZUhBaU9qRTJPREF5TWpNd05EQjkuNXJKRGVsUEZnQlFSWmNsZk9GNUtFN3RlRC14SUtUR3lNa1BFdzdCUVJKdEVUcU0zNndVcU9hRW5tTk4xMmNJd3oxZHJDOVNPbzAzZ0xzaGxxR2h1THdcIixcclxuLy8gICAgIH0sXHJcbi8vICAgfSkudGhlbigocmVzOiBBeGlvc1Jlc3BvbnNlPGJvb2tEYXRhUmVzcG9uc2U+KSA9PiB7XHJcbi8vICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YTtcclxuLy8gICB9KTtcclxuLy8gfTtcclxuXHJcbmltcG9ydCB7IGRlZmF1bHRBeGlvc0luc3RhbmNlIH0gZnJvbSBcIi4uL2luc3RhbmNlXCI7XHJcbmltcG9ydCB7IGJvb2tEZXRhaWxUeXBlICB9IGZyb20gXCJAL3R5cGVzL2Jvb2tzXCI7XHJcblxyXG5cclxudHlwZSBwYXJhbXNUeXBlID0ge1xyXG4gIGJvb2tJZDogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIHJldHVyblR5cGUgPSBib29rRGV0YWlsVHlwZVxyXG4vLyB0eXBlIHJldHVyblR5cGUgPSB7XHJcbi8vICAgICBcImNvbnRlbnRcIjogYm9va0NvbnRlbnRUeXBlW107XHJcbi8vICAgICBcInBhZ2VcIjogbnVtYmVyO1xyXG4vLyAgICAgXCJzaXplXCI6IG51bWJlcjtcclxuLy8gICAgIFwiZmlyc3RcIjogYm9vbGVhbjtcclxuLy8gICAgIFwibGFzdFwiOiBib29sZWFuO1xyXG4vLyAgICAgXCJoYXNOZXh0XCI6IGJvb2xlYW47XHJcbi8vIH1cclxuXHJcbnR5cGUgcmVzcG9uc2VUeXBlID0ge1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBkYXRhOiByZXR1cm5UeXBlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va0RldGFpbCh7Ym9va0lkfTogcGFyYW1zVHlwZVxyXG4pOiBQcm9taXNlPHJldHVyblR5cGUgfCBudWxsPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IHJlc3BvbnNlVHlwZSB9ID0gYXdhaXQgZGVmYXVsdEF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICBgL2Jvb2tzL2dlbnJlLyR7Z2VucmVDb2RlfT90eXBlQ29kZT0ke3R5cGVDb2RlfSR7cHJldklkICE9PSB1bmRlZmluZWQgPyBgJnByZXZJZD0ke3ByZXZJZH1gIDogJyd9JHtwcmV2U2NvcmUgIT09IHVuZGVmaW5lZCA/IGAmcHJldlNjb3JlPSR7cHJldlNjb3JlfWAgOiAnJ30ke3NpemUgIT09IHVuZGVmaW5lZCA/IGAmc2l6ZT0ke3NpemV9YCA6ICcnfWBcclxuICAgICk7XHJcbiAgICByZXR1cm4gZGF0YS5kYXRhXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRlZmF1bHRBeGlvc0luc3RhbmNlIiwiZ2V0Qm9va0RldGFpbCIsImJvb2tJZCIsImRhdGEiLCJnZXQiLCJ0eXBlQ29kZSIsImdlbnJlQ29kZSIsInByZXZJZCIsInByZXZTY29yZSIsInVuZGVmaW5lZCIsInNpemUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/book/getBookDetail.ts\n"));

/***/ })

});