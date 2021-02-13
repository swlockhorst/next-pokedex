webpackHotUpdate_N_E("pages/[name]",{

/***/ "./pages/[name].tsx":
/*!**************************!*\
  !*** ./pages/[name].tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/stevenlockhorst/Projects/next-pokedex/pages/[name].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Detail() {\n  _s();\n\n  var _data$sprites,\n      _data$species,\n      _data$abilities,\n      _this = this,\n      _data$stats,\n      _data$types;\n\n  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  console.log(router.query.name);\n  var data = null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: data.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n          className: \"p-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n              lg: \"5\",\n              className: \"mb-3\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n                className: \"p-2\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Img, {\n                  variant: \"top\",\n                  src: (_data$sprites = data.sprites) === null || _data$sprites === void 0 ? void 0 : _data$sprites.other.dream_world.front_default\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 27,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Body, {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Title, {\n                    children: data.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 32,\n                    columnNumber: 23\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Text, {\n                    children: [\"Species: \", (_data$species = data.species) === null || _data$species === void 0 ? void 0 : _data$species.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 36,\n                      columnNumber: 25\n                    }, this), \"Base XP: \", data.base_experience, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 38,\n                      columnNumber: 25\n                    }, this), \"Height: \", data.height, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 40,\n                      columnNumber: 25\n                    }, this), \"Weight: \", data.weight]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 34,\n                    columnNumber: 23\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 31,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Table\"], {\n                striped: true,\n                bordered: true,\n                hover: true,\n                size: \"sm\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Name\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 51,\n                      columnNumber: 25\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Hidden\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 52,\n                      columnNumber: 25\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Slot\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 53,\n                      columnNumber: 25\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 50,\n                    columnNumber: 23\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n                  children: (_data$abilities = data.abilities) === null || _data$abilities === void 0 ? void 0 : _data$abilities.map(function (item, index) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.ability.name\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 60,\n                        columnNumber: 29\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.is_hidden ? \"Yes\" : \"No\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 61,\n                        columnNumber: 29\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.slot\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 62,\n                        columnNumber: 29\n                      }, _this)]\n                    }, index, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 59,\n                      columnNumber: 27\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Table\"], {\n                striped: true,\n                bordered: true,\n                hover: true,\n                size: \"sm\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Name\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 25\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Base State\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 25\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Effort\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 74,\n                      columnNumber: 25\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 23\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n                  children: (_data$stats = data.stats) === null || _data$stats === void 0 ? void 0 : _data$stats.map(function (item, index) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.stat.name\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 81,\n                        columnNumber: 29\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.base_stat\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 82,\n                        columnNumber: 29\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.effort\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 83,\n                        columnNumber: 29\n                      }, _this)]\n                    }, index, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 80,\n                      columnNumber: 27\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Table\"], {\n                striped: true,\n                bordered: true,\n                hover: true,\n                size: \"sm\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Slot\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 93,\n                      columnNumber: 25\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                      children: \"Type\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 94,\n                      columnNumber: 25\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 23\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n                  children: (_data$types = data.types) === null || _data$types === void 0 ? void 0 : _data$types.map(function (item, index) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.slot\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 101,\n                        columnNumber: 29\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                        children: item.type.name\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 102,\n                        columnNumber: 29\n                      }, _this)]\n                    }, index, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 100,\n                      columnNumber: 27\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Detail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdLnRzeD80NTUyIl0sIm5hbWVzIjpbIkRldGFpbCIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsIm5hbWUiLCJkYXRhIiwic3ByaXRlcyIsIm90aGVyIiwiZHJlYW1fd29ybGQiLCJmcm9udF9kZWZhdWx0Iiwic3BlY2llcyIsImJhc2VfZXhwZXJpZW5jZSIsImhlaWdodCIsIndlaWdodCIsImFiaWxpdGllcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImFiaWxpdHkiLCJpc19oaWRkZW4iLCJzbG90Iiwic3RhdHMiLCJzdGF0IiwiYmFzZV9zdGF0IiwiZWZmb3J0IiwidHlwZXMiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSSxLQUFQLENBQWFDLElBQXpCO0FBRUEsTUFBTUMsSUFBSSxHQUFHLElBQWI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsY0FDR0EsSUFBSSxpQkFDSDtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBUUEsSUFBSSxDQUFDRDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUFXLG1CQUFTLEVBQUMsS0FBckI7QUFBQSxpQ0FDRSxxRUFBQyxtREFBRDtBQUFBLG9D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VDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGO0FBTUQsbUJBUEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1R0Q7O0dBOUdRbkIsTTtVQUNRRSxpRTs7O0tBRFJGLE07QUFnSE1BLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW25hbWVdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ29sLCBDb250YWluZXIsIFJvdywgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIERldGFpbCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5Lm5hbWUpO1xuXG4gIGNvbnN0IGRhdGEgPSBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57ZGF0YS5uYW1lfTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI1XCIgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZ1xuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5zcHJpdGVzPy5vdGhlci5kcmVhbV93b3JsZC5mcm9udF9kZWZhdWx0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPntkYXRhLm5hbWV9PC9DYXJkLlRpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNwZWNpZXM6IHtkYXRhLnNwZWNpZXM/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJhc2UgWFA6IHtkYXRhLmJhc2VfZXhwZXJpZW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGVpZ2h0OiB7ZGF0YS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlaWdodDoge2RhdGEud2VpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IaWRkZW48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNsb3Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5hYmlsaXRpZXM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uYWJpbGl0eS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmlzX2hpZGRlbiA/IFwiWWVzXCIgOiBcIk5vXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uc2xvdH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJhc2UgU3RhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVmZm9ydDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXRzPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnN0YXQubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5iYXNlX3N0YXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZWZmb3J0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cblxuICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2xvdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnR5cGVzPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnNsb3R9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udHlwZS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[name].tsx\n");

/***/ })

})