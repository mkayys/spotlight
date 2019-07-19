/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/spotlight.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let canvas = document.querySelector('canvas');\n// console.log(canvas);\n\nlet ctx = canvas.getContext('2d');\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n\nctx.fillStyle = \"purple\";\nctx.fillRect(0, 0, innerWidth, innerHeight);\n\nlet img = new Image();\nimg.src = './girl_running.png';\n\nlet spriteWidth = 480 / 8;\nlet spriteHeight = 240 / 4;\nlet spritePos = { x: 0, y: 0 };\nlet canvasPos = { x: 200, y: 200 };\n// console.dir(img);\n\nlet count = 0;\n\nfunction rightDraw() {\n    ctx.drawImage(\n        img,\n        spritePos.x,\n        (spritePos.y + (spriteHeight * 2)),\n        // (spritePos.y + (spriteHeight)),\n        // spritePos.y,\n        spriteWidth,\n        spriteHeight,\n        canvasPos.x,\n        canvasPos.y,\n        (spriteWidth * 1.4),\n        (spriteHeight * 1.4)\n    );\n}\n\n\nfunction rightShow() {\n    ctx.clearRect(0, 0, innerWidth, innerHeight);\n    ctx.fillRect(0, 0, innerWidth, innerHeight);\n\n    rightDraw();\n\n    if (count % 8 === 0) {\n        if (spritePos.x < 420) {\n            spritePos.x += spriteWidth;\n        } else {\n            spritePos.x = 0;\n        };\n    }\n\n    count++;\n    if (canvasPos.x < (innerWidth - 60)) {\n        canvasPos.x += 2;\n    } else {\n        canvasPos.x = -2;\n    }\n    requestAnimationFrame(rightShow);\n}\n\ndocument.addEventListener(\"keydown\", e => {\n    // console.log(e.key);\n    switch (e.key) {\n        case \"ArrowLeft\":\n            // new spritePos.y = (spritePos.y + (spriteHeight))\n            // new spritePos.x = spriteWidth (480) <-- actually might be okay (no need to change?)\n            // canvasPos.x -= 2\n\n            leftShow();\n        case \"ArrowRight\":\n            //new spritePos.y = (spritePos.y + (spriteHeight * 2))\n            // canvasPos.x += 2\n            rightShow();\n\n        // case \"ArrowUp\":\n\n        // case \"ArrowDown\":\n\n    }\n});\n\nlet count1 = 0;\n\nfunction leftDraw() {\n    ctx.drawImage(\n        img,\n        spritePos.x,\n        // (spritePos.y + (spriteHeight * 2)),\n        (spritePos.y + (spriteHeight)),\n        // spritePos.y,\n        spriteWidth,\n        spriteHeight,\n        canvasPos.x,\n        canvasPos.y,\n        (spriteWidth * 1.4),\n        (spriteHeight * 1.4)\n    );\n}\n\n\nfunction leftShow() {\n    ctx.clearRect(0, 0, innerWidth, innerHeight);\n    leftDraw();\n\n    if (count1 % 8 === 0) {\n        if (spritePos.x < 420) {\n            spritePos.x += spriteWidth;\n        } else {\n            spritePos.x = 0;\n        };\n    }\n\n    count1++;\n    if (canvasPos.x > 0) {\n        canvasPos.x -= 2;\n    } else {\n        canvasPos.x = innerWidth + 1;\n    }\n    requestAnimationFrame(leftShow);\n}\n\n\n\n\n\n// export const canvas = () => {\n\n//     var charSprite = new Image();\n//     charSprite.src = \"../adventurer-Sheet.png\";\n\n//     function sprite(options) {\n\n//         var that = {};\n\n//         that.context = options.context;\n//         that.width = options.width;\n//         that.height = options.height;\n//         that.image = options.image;\n//         that.render = function () {\n    \n//             that.context.drawImage(\n//                 that.image,\n//                 0,\n//                 0,\n//                 that.width,\n//                 that.height,\n//                 0,\n//                 0,\n//                 (that.width * 3),\n//                 (that.height * 3)\n//             );\n//         }\n//         return that;\n//     };\n\n//     let canvas = document.getElementById('canvas');\n\n//     let character = sprite({\n//         context: canvas.getContext(\"2d\"),\n//         width: 100,\n//         height: 37,\n//         image: charSprite\n//     });\n    \n//     character.render();\n//     // character.context.drawImage(image, 0, 0, 100, 37, 0, 0, 100, 37);\n\n// }\n\n    \n\n\n   \n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/spotlight.js":
/*!**************************!*\
  !*** ./src/spotlight.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_canvas_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    Object(_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"])();\n});\n\n//# sourceURL=webpack:///./src/spotlight.js?");

/***/ })

/******/ });