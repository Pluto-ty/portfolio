"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "G:\\Tudo Thyago\\Coisas pessoais\\Cursos e Programa\xE7\xE3o em Geral\\projetos\\portfolio\\pages\\index.js",
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var notMobile = true;
var currentProject = 0;
var maxProjects;
var mouseenter = false;
var project;
var lastContainer = 0;

function Home() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    project = document.querySelectorAll(".c-project");
    maxProjects = Number(document.querySelectorAll(".c-project").length - 1);

    var _iterator = _createForOfIteratorHelper(project),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        i.addEventListener("mouseenter", function () {
          mouseEnter();
        });
        i.addEventListener("mouseout", function () {
          mouseOut();
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setInterval(function () {
      if (!mouseenter) {
        if (window.innerWidth < 768) {
          if (currentProject >= maxProjects) {
            currentProject = 0;
            document.querySelector("#js-box").scrollBy(-245 * maxProjects, 0);
          } else {
            document.querySelector("#js-box").scrollBy(245, 0);
            currentProject++;
          }

          notMobile = false;
        } else if (!notMobile) {
          document.querySelector("#js-box").scrollBy(-900, 0);
          notMobile = true;
        }
      }
    }, 4000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("head", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        charset: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "./favicon.ico",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "Thyago Araujo Portf\xF3lio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("body", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "c-container-geral",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "c-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            className: "c-computer-image",
            src: "./images/computador.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "c-container-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              className: "c-logo",
              src: "./images/Logo.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-introduction",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                children: ["Ol\xE1, eu sou", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  className: "c-name",
                  children: "Thyago Araujo,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                className: "c-title",
                children: "DESENVOLVEDOR FRONT-END"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: "A procura de uma oportunidade na \xE1rea de desenvolvimento - HTML, CSS, Javascript e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "c-projects-button",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  href: "#projetos",
                  children: "PROJETOS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 28
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-skills-container",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "c-skills",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  children: "Habilidades:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "html5",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#E44D26",
                      d: "M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#F16529",
                      d: "M64 116.8l36.378-10.086 8.559-95.878H64z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#EBEBEB",
                      d: "M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#fff",
                      d: "M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 34
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "css",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#1572B6",
                      d: "M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#33A9DC",
                      d: "M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#fff",
                      d: "M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#EBEBEB",
                      d: "M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#fff",
                      d: "M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#EBEBEB",
                      d: "M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 34
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "js",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#F0DB4F",
                      d: "M1.408 1.408h125.184v125.185H1.408z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#323330",
                      d: "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 34
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "bootstrap",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#5B4282",
                      d: "M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024H9.531v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zm21.886-.878c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zm24.667 0c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zm17.688 6.704h-2.835v-11.012h-3.631v-2.36h10.097v2.36H57.09v11.012zm13.581-3.713c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107a4.158 4.158 0 01-.979-1.234c-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613a5.69 5.69 0 00-1.376-.174c-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zm7.583 3.713h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zm8.524-5.131v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826H91.48l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zm17.716 7.436l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561a1027.84 1027.84 0 01-1.514-4.893 13.862 13.862 0 01-.242-.896c-.201.78-.777 2.71-1.729 5.789h3.485zm15.622-3.64c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122H113c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zm-38.116-62.12c-1.983-.653-4.838-.759-8.565-.759H52v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zm-2.056-8.612c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809H52v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126C117 8.324 110.675 2 102.873 2H25.127C17.325 2 11 8.324 11 16.126v77.748C11 101.676 17.325 108 25.127 108h77.746c7.802 0 14.127-6.324 14.127-14.126V16.126zM86.57 73.27c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098A38.022 38.022 0 0166.424 83H44V24h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "jquery",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#0868AC",
                      d: "M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "react",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                      fill: "#61DAFB",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("circle", {
                        cx: "64",
                        cy: "64",
                        r: "11.4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "node",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#83CD29",
                      d: "M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                    className: "firebase",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                      fill: "#f58220",
                      d: "M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          id: "projetos",
          className: "c-projects",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
            children: "PROJETOS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "c-next-prev-projects",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              onClick: nextPrevProjects1,
              className: "c-projects-1 c-group-button-projects active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              onClick: nextPrevProjects2,
              className: "c-projects-2 c-group-button-projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "c-box",
            id: "js-box",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/devfinance.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: "Dev$finance"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "Dev$finance \xE9 um projeto feito durante uma maratona da Rocketseat, utilizando Html, Css e Javascript e sua fun\xE7\xE3o \xE9 ajudar na organiza\xE7\xE3o de gastos mensais, tudo utilizando LocalStorage para n\xE3o perder os dados."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Dev-finance",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Dev-finance",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/fancy-border-radius.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: "Fancy Border Radius"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "Fancy Border radius \xE9 um projeto baseado em um dos desafios do reposit\xF3rio App Ideas no github. Nele temos que criar uma interface que o usu\xE1rio possa modificar o border-radius do elemento a vontade e conseguir copia-lo pronto para usar no seu projeto."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Praticando-templates/iniciante/Border-radius-Previewer/index.html",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 241,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/Border-radius-Previewer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/faq.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: "FAQ Template"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "Este projeto \xE9 um template b\xE1sico de um FAQ baseado do site FrontendMentor, dele temos que recriar o design o mais fielmente poss\xEDvel ao prot\xF3tipo recebido e que esteja responsivo para maioria dos dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Praticando-templates/iniciante/faq-accordion-card-main/index.html",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 272,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/faq-accordion-card-main",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/spliter.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: "Splitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "Slitter \xE9 um aplicativo para calculo de gorjeta, com o calculo em si, uma \xE1rea para valores da gorjeta escolhida pelo usu\xE1rio e um bot\xE3o para zerar tudo, outro projeto baseado do site FrontendMentor."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Praticando-templates/iniciante/tip-calculator-app-main/index.html",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/tip-calculator-app-main",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 308,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/wildbeast.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: "Wildbeast"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "Wildbeast \xE9 um template feito para a pr\xE1tica de grid layout, utilizando todos os seus conceitos para criar um layout responsivo para todos os tipos de dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Wildbeast/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Wildbeast",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 338,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/project1.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: "FlexBox"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "Flexbox \xE9 um template feito para trinar flexbox como o pr\xF3prio nome diz, feito com todos os seus princ\xEDpios de flexibilidade para criar um layout responsivo para todos os tipos de dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 352,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/FlexBlog/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 364,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/FlexBlog",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 369,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
          className: "c-about-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "c-about",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              className: "c-details-1",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "c-about-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "SOBRE MIM"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: "Sou um programador em busca de uma oportunidade para entrar no mercado. J\xE1 tenho experi\xEAncia na cria\xE7\xE3o de sites responsivos e estou sempre buscando aprender novas ferramentas para melhorar o meu trabalho, com 40+ horas em cursos e 100+ horas em pr\xE1tica. Atualmente estou focando meus estudos em back-ending com Node e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 385,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["Voc\xEA pode encontrar mais sobre meus projetos e minha rotina de estudos em minha conta no \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  target: "_blank",
                  href: "https://github.com/ThyagoAraujoM",
                  children: "Github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 28
                }, this), "."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 394,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "./assets/CV.pdf",
                download: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  children: "CURR\xCDCULO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 28
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "c-email",
                children: ["thyagoaraujomotta@gmail.com", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  onClick: copyText,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: "./images/copy-icon.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 411,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    className: "c-copy",
                    children: "e-mail copiado"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 412,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 410,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 408,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["(27) 9 9975-5684", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  href: "https://api.whatsapp.com/send?phone=5527999755684",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: "./images/whats-icon.svg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 420,
                    columnNumber: 31
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 417,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 415,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              className: "c-details-2",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, this);
}

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;

function copyText() {
  var text = "thyagoaraujomotta@gmail.com";
  navigator.clipboard.writeText(text);
  document.querySelector(".c-copy").style.display = "inline-block";
  setTimeout(function () {
    document.querySelector(".c-copy").style.display = "none";
  }, 1000);
}

function mouseEnter() {
  mouseenter = true;
}

function mouseOut() {
  mouseenter = false;
}

function nextPrevProjects1() {
  nextPrevProjects(1);
}

function nextPrevProjects2() {
  nextPrevProjects(2);
}

function nextPrevProjects(project) {
  document.querySelectorAll(".c-group-button-projects").forEach(function (i) {
    i.classList.remove("active");
  });
  document.querySelectorAll(".c-group-projects").forEach(function (i) {
    i.classList.remove("active");
  });

  if (lastContainer < project) {
    document.querySelector("#js-box").scrollBy(900 * (project - lastContainer), 0);
  } else {
    document.querySelector("#js-box").scrollBy(900 * (project - lastContainer), 0);
  }

  lastContainer = project;

  if (project == 1) {
    document.querySelector(".c-projects-1").classList.add("active");
  } else if (project == 2) {
    document.querySelector(".c-projects-2").classList.add("active");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ1MTU4ZTY1YjgzMmFhMTgxNjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxJQUFJQyxXQUFKO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsSUFBSUMsT0FBSjtBQUNBLElBQUlDLGFBQWEsR0FBRyxDQUFwQjs7QUFDQSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQ2JQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNiSyxJQUFBQSxPQUFPLEdBQUdHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBVjtBQUNBTixJQUFBQSxXQUFXLEdBQUdPLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q0UsTUFBeEMsR0FBaUQsQ0FBbEQsQ0FBcEI7O0FBRmEsK0NBR0NOLE9BSEQ7QUFBQTs7QUFBQTtBQUdiLDBEQUF1QjtBQUFBLFlBQWRPLENBQWM7QUFDcEJBLFFBQUFBLENBQUMsQ0FBQ0MsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUMsWUFBTTtBQUNwQ0MsVUFBQUEsVUFBVTtBQUNaLFNBRkQ7QUFJQUYsUUFBQUEsQ0FBQyxDQUFDQyxnQkFBRixDQUFtQixVQUFuQixFQUErQixZQUFNO0FBQ2xDRSxVQUFBQSxRQUFRO0FBQ1YsU0FGRDtBQUdGO0FBWFk7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhYkMsSUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDZixVQUFJLENBQUNaLFVBQUwsRUFBaUI7QUFDZCxZQUFJYSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDMUIsY0FBSWhCLGNBQWMsSUFBSUMsV0FBdEIsRUFBbUM7QUFDaENELFlBQUFBLGNBQWMsR0FBRyxDQUFqQjtBQUNBTSxZQUFBQSxR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QTFCLEVBQStDdUIsT0FBL0MsQ0FBdUQsVUFBQ3BCLENBQUQsRUFBTztBQUMzREEsSUFBQUEsQ0FBQyxDQUFDcUIsU0FBRixDQUFZQyxNQUFaLENBQW1CLFFBQW5CO0FBQ0YsR0FGRDs7QUFHQSxNQUFJNUIsYUFBYSxHQUFHRCxPQUFwQixFQUE2QjtBQUMxQkcsSUFBQUEsUUFBUSxDQUNKVyxhQURKLENBQ2tCLFNBRGxCLEVBRUlDLFFBRkosQ0FFYSxPQUFPZixPQUFPLEdBQUdDLGFBQWpCLENBRmIsRUFFOEMsQ0FGOUM7QUFHRixHQUpELE1BSU87QUFDSkUsSUFBQUEsUUFBUSxDQUNKVyxhQURKLENBQ2tCLFNBRGxCLEVBRUlDLFFBRkosQ0FFYSxPQUFPZixPQUFPLEdBQUdDLGFBQWpCLENBRmIsRUFFOEMsQ0FGOUM7QUFHRjs7QUFDREEsRUFBQUEsYUFBYSxHQUFHRCxPQUFoQjs7QUFFQSxNQUFJQSxPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNmRyxJQUFBQSxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NjLFNBQXhDLENBQWtERSxHQUFsRCxDQUFzRCxRQUF0RDtBQUNGLEdBRkQsTUFFTyxJQUFJOUIsT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDdEJHLElBQUFBLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixlQUF2QixFQUF3Q2MsU0FBeEMsQ0FBa0RFLEdBQWxELENBQXNELFFBQXREO0FBQ0Y7QUFDSDs7QUFFRCwrREFBZTVCLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5sZXQgbm90TW9iaWxlID0gdHJ1ZTtcclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gMDtcclxubGV0IG1heFByb2plY3RzO1xyXG5sZXQgbW91c2VlbnRlciA9IGZhbHNlO1xyXG5sZXQgcHJvamVjdDtcclxubGV0IGxhc3RDb250YWluZXIgPSAwO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXByb2plY3RcIik7XHJcbiAgICAgIG1heFByb2plY3RzID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1wcm9qZWN0XCIpLmxlbmd0aCAtIDEpO1xyXG4gICAgICBmb3IgKGxldCBpIG9mIHByb2plY3QpIHtcclxuICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vdXNlRW50ZXIoKTtcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vdXNlT3V0KCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgIGlmICghbW91c2VlbnRlcikge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID49IG1heFByb2plY3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5zY3JvbGxCeSgtMjQ1ICogbWF4UHJvamVjdHMsIDApO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKS5zY3JvbGxCeSgyNDUsIDApO1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCsrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIG5vdE1vYmlsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFub3RNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIikuc2Nyb2xsQnkoLTkwMCwgMCk7XHJcbiAgICAgICAgICAgICAgIG5vdE1vYmlsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9LCA0MDAwKTtcclxuICAgfSwgW10pO1xyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9J1VURi04JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PSdYLVVBLUNvbXBhdGlibGUnIGNvbnRlbnQ9J0lFPWVkZ2UnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgIG5hbWU9J3ZpZXdwb3J0J1xyXG4gICAgICAgICAgICAgICBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J3ByZWNvbm5lY3QnIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIC8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgIHJlbD0ncHJlY29ubmVjdCdcclxuICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbSdcclxuICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEA0MDA7NzAwJmZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCdcclxuICAgICAgICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICByZWw9J3Nob3J0Y3V0IGljb24nXHJcbiAgICAgICAgICAgICAgIGhyZWY9Jy4vZmF2aWNvbi5pY28nXHJcbiAgICAgICAgICAgICAgIHR5cGU9J2ltYWdlL3gtaWNvbidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHRpdGxlPlRoeWFnbyBBcmF1am8gUG9ydGbDs2xpbzwvdGl0bGU+XHJcbiAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWNvbnRhaW5lci1nZXJhbCc+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWNvbXB1dGVyLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL2NvbXB1dGFkb3Iuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtY29udGFpbmVyLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYy1sb2dvJyBzcmM9Jy4vaW1hZ2VzL0xvZ28uc3ZnJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtaW50cm9kdWN0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE9sw6EsIGV1IHNvdXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjLW5hbWUnPlRoeWFnbyBBcmF1am8sPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2MtdGl0bGUnPkRFU0VOVk9MVkVET1IgRlJPTlQtRU5EPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgcHJvY3VyYSBkZSB1bWEgb3BvcnR1bmlkYWRlIG5hIMOhcmVhIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2Vudm9sdmltZW50byAtIEhUTUwsIENTUywgSmF2YXNjcmlwdCBlIFJlYWN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjLXByb2plY3RzLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyNwcm9qZXRvcyc+UFJPSkVUT1M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Mtc2tpbGxzLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXNraWxscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5IYWJpbGlkYWRlczo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0naHRtbDUnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI0U0NEQyNidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTE5LjAzNyAxMTMuODc2TDkuMDMyIDEuNjYxaDEwOS45MzZsLTEwLjAxNiAxMTIuMTk4LTQ1LjAxOSAxMi40OHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI0YxNjUyOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTY0IDExNi44bDM2LjM3OC0xMC4wODYgOC41NTktOTUuODc4SDY0eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjRUJFQkVCJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNNjQgNTIuNDU1SDQ1Ljc4OEw0NC41MyAzOC4zNjFINjRWMjQuNTk5SDI5LjQ4OWwuMzMgMy42OTIgMy4zODIgMzcuOTI3SDY0em0wIDM1Ljc0M2wtLjA2MS4wMTctMTUuMzI3LTQuMTQtLjk3OS0xMC45NzVIMzMuODE2bDEuOTI4IDIxLjYwOSAyOC4xOTMgNy44MjYuMDYzLS4wMTd6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNmZmYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J002My45NTIgNTIuNDU1djEzLjc2M2gxNi45NDdsLTEuNTk3IDE3Ljg0OS0xNS4zNSA0LjE0M3YxNC4zMTlsMjguMjE1LTcuODIuMjA3LTIuMzI1IDMuMjM0LTM2LjIzMy4zMzUtMy42OTZoLTMuNzA4em0wLTI3Ljg1NnYxMy43NjJoMzMuMjQ0bC4yNzYtMy4wOTIuNjI4LTYuOTc4LjMyOS0zLjY5MnonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdjc3MnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzE1NzJCNidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTE4LjgxNCAxMTQuMTIzTDguNzYgMS4zNTJoMTEwLjQ4bC0xMC4wNjQgMTEyLjc1NC00NS4yNDMgMTIuNTQzLTQ1LjExOS0xMi41MjZ6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyMzM0E5REMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J002NC4wMDEgMTE3LjA2MmwzNi41NTktMTAuMTM2IDguNjAxLTk2LjM1NGgtNDUuMTZ2MTA2LjQ5eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjZmZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNNjQuMDAxIDUxLjQyOWgxOC4zMDJsMS4yNjQtMTQuMTYzSDY0LjAwMVYyMy40MzVoMzQuNjgybC0uMzMyIDMuNzExLTMuNCAzOC4xMTRoLTMwLjk1VjUxLjQyOXonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI0VCRUJFQidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTY0LjA4MyA4Ny4zNDlsLS4wNjEuMDE4LTE1LjQwMy00LjE1OS0uOTg1LTExLjAzMUgzMy43NTJsMS45MzcgMjEuNzE3IDI4LjMzMSA3Ljg2My4wNjMtLjAxOHYtMTQuMzl6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNmZmYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J004MS4xMjcgNjQuNjc1bC0xLjY2NiAxOC41MjItMTUuNDI2IDQuMTY0djE0LjM5bDI4LjM1NC03Ljg1OC4yMDgtMi4zMzcgMi40MDYtMjYuODgxSDgxLjEyN3onPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI0VCRUJFQidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTY0LjA0OCAyMy40MzV2MTMuODMxSDMwLjY0bC0uMjc3LTMuMTA4LS42My03LjAxMi0uMzMxLTMuNzExaDM0LjY0NnptLS4wNDcgMjcuOTk2djEzLjgzMUg0OC43OTJsLS4yNzctMy4xMDgtLjYzMS03LjAxMi0uMzMtMy43MTFoMTYuNDQ3eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2pzJyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNGMERCNEYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xLjQwOCAxLjQwOGgxMjUuMTg0djEyNS4xODVIMS40MDh6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyMzMjMzMzAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xMTYuMzQ3IDk2LjczNmMtLjkxNy01LjcxMS00LjY0MS0xMC41MDgtMTUuNjcyLTE0Ljk4MS0zLjgzMi0xLjc2MS04LjEwNC0zLjAyMi05LjM3Ny01LjkyNi0uNDUyLTEuNjktLjUxMi0yLjY0Mi0uMjI2LTMuNjY1LjgyMS0zLjMyIDQuNzg0LTQuMzU1IDcuOTI1LTMuNDAzIDIuMDIzLjY3OCAzLjkzOCAyLjIzNyA1LjA5MyA0LjcyNCA1LjQwMi0zLjQ5OCA1LjM5MS0zLjQ3NSA5LjE2My01Ljg3OS0xLjM4MS0yLjE0MS0yLjExOC0zLjEyOS0zLjAyMi00LjA0NS0zLjI0OS0zLjYyOS03LjY3Ni01LjQ5OC0xNC43NTYtNS4zNTVsLTMuNjg4LjQ3N2MtMy41MzQuODkzLTYuOTAyIDIuNzQ4LTguODc3IDUuMjM1LTUuOTI2IDYuNzI0LTQuMjM2IDE4LjQ5MiAyLjk3NSAyMy4zMzUgNy4xMDQgNS4zMzIgMTcuNTQgNi41NDUgMTguODczIDExLjUzMSAxLjI5NyA2LjEwNC00LjQ4NiA4LjA4LTEwLjIzNCA3LjM3OC00LjIzNi0uODgxLTYuNTkyLTMuMDM0LTkuMTM5LTYuOTQ5LTQuNjg4IDIuNzEzLTQuNjg4IDIuNzEzLTkuNTA4IDUuNDg1IDEuMTQzIDIuNDk5IDIuMzQ0IDMuNjMgNC4yNiA1Ljc5NSA5LjA2OCA5LjE5OCAzMS43NiA4Ljc0NiAzNS44My01LjE3Ni4xNjUtLjQ3OCAxLjI2MS0zLjY2Ni4zOC04LjU4MXpNNjkuNDYyIDU4Ljk0M0g1Ny43NTNsLS4wNDggMzAuMjcyYzAgNi40MzguMzMzIDEyLjM0LS43MTQgMTQuMTQ5LTEuNzEzIDMuNTU4LTYuMTUyIDMuMTE3LTguMTc1IDIuNDI3LTIuMDU5LTEuMDEyLTMuMTA2LTIuNDUxLTQuMzE5LTQuNDg1LS4zMzMtLjU4NC0uNTgzLTEuMDM2LS42NjctMS4wNzFsLTkuNTIgNS44M2MxLjU4MyAzLjI0OSAzLjkxNSA2LjA2OSA2LjkwMiA3LjkwMSA0LjQ2MiAyLjY3OCAxMC40NTkgMy40OTkgMTYuNzMxIDIuMDU5IDQuMDgyLTEuMTg5IDcuNjA0LTMuNjUyIDkuNDQ4LTcuNDAxIDIuNjY2LTQuOTE1IDIuMDk0LTEwLjg2NCAyLjA3LTE3LjQ0NC4wNi0xMC43MzUuMDAxLTIxLjQ2OC4wMDEtMzIuMjM3eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2Jvb3RzdHJhcCcgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjNUI0MjgyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNOS41MzEgMTEyLjU4Nmg0LjE2MWMxLjg5NiAwIDMuMjczLjI3IDQuMTI5LjgxLjg1Ny41NCAxLjI4NSAxLjM5OCAxLjI4NSAyLjU3NSAwIC43OTktLjE4OCAxLjQ1NC0uNTYzIDEuOTY2cy0uODc0LjgyLTEuNDk2LjkyNHYuMDkxYy44NDguMTg5IDEuNDU5LjU0MyAxLjgzNCAxLjA2MXMuNTYzIDEuMjA3LjU2MyAyLjA2N2MwIDEuMjItLjQ0IDIuMTcxLTEuMzIyIDIuODU0LS44ODEuNjgzLTIuMDc4IDEuMDI0LTMuNTkgMS4wMjRIOS41MzF2LTEzLjM3MnptMi44MzUgNS4yOTZoMS42NDZjLjc2OCAwIDEuMzI1LS4xMTkgMS42NjktLjM1Ni4zNDUtLjIzOC41MTctLjYzMS41MTctMS4xOCAwLS41MTItLjE4Ny0uODc5LS41NjItMS4xMDJzLS45NjgtLjMzNC0xLjc3OS0uMzM0aC0xLjQ5MXYyLjk3MnptMCAyLjI1djMuNDg1aDEuODQ4Yy43OCAwIDEuMzU2LS4xNDkgMS43MjktLjQ0OHMuNTU4LS43NTYuNTU4LTEuMzcyYzAtMS4xMDktLjc5My0xLjY2NS0yLjM3OC0xLjY2NWgtMS43NTd6bTIxLjg4Ni0uODc4YzAgMi4yMTMtLjU0OSAzLjkxNS0xLjY0NiA1LjEwNHMtMi42NyAxLjc4NC00LjcxOSAxLjc4NC0zLjYyMi0uNTk1LTQuNzE5LTEuNzg0Yy0xLjA5OC0xLjE4OS0xLjY0Ni0yLjg5Ni0xLjY0Ni01LjEyMnMuNTUtMy45MjUgMS42NTEtNS4wOTkgMi42NzgtMS43NjEgNC43MzMtMS43NjEgMy42MjYuNTkyIDQuNzE1IDEuNzc0YzEuMDg3IDEuMTgzIDEuNjMxIDIuODg1IDEuNjMxIDUuMTA0em0tOS43NTggMGMwIDEuNDk0LjI4MyAyLjYxOS44NTEgMy4zNzUuNTY3Ljc1NiAxLjQxNCAxLjEzNCAyLjU0MiAxLjEzNCAyLjI2MiAwIDMuMzkzLTEuNTAzIDMuMzkzLTQuNTA5IDAtMy4wMTItMS4xMjUtNC41MTgtMy4zNzUtNC41MTgtMS4xMjggMC0xLjk3OS4zNzktMi41NTIgMS4xMzlzLS44NTkgMS44ODUtLjg1OSAzLjM3OXptMjQuNjY3IDBjMCAyLjIxMy0uNTQ5IDMuOTE1LTEuNjQ2IDUuMTA0cy0yLjY3IDEuNzg0LTQuNzE5IDEuNzg0LTMuNjIyLS41OTUtNC43MTktMS43ODRjLTEuMDk4LTEuMTg5LTEuNjQ2LTIuODk2LTEuNjQ2LTUuMTIycy41NS0zLjkyNSAxLjY1MS01LjA5OSAyLjY3OC0xLjc2MSA0LjczMy0xLjc2MSAzLjYyNi41OTIgNC43MTUgMS43NzRjMS4wODYgMS4xODMgMS42MzEgMi44ODUgMS42MzEgNS4xMDR6bS05Ljc1OSAwYzAgMS40OTQuMjgzIDIuNjE5Ljg1MSAzLjM3NS41NjcuNzU2IDEuNDE0IDEuMTM0IDIuNTQyIDEuMTM0IDIuMjYyIDAgMy4zOTMtMS41MDMgMy4zOTMtNC41MDkgMC0zLjAxMi0xLjEyNS00LjUxOC0zLjM3NS00LjUxOC0xLjEyOCAwLTEuOTc5LjM3OS0yLjU1MiAxLjEzOXMtLjg1OSAxLjg4NS0uODU5IDMuMzc5em0xNy42ODggNi43MDRoLTIuODM1di0xMS4wMTJoLTMuNjMxdi0yLjM2aDEwLjA5N3YyLjM2SDU3LjA5djExLjAxMnptMTMuNTgxLTMuNzEzYzAgMS4yMDgtLjQzNCAyLjE1OS0xLjMwMyAyLjg1NC0uODY5LjY5NS0yLjA3OCAxLjA0My0zLjYyNiAxLjA0My0xLjQyNyAwLTIuNjg5LS4yNjktMy43ODYtLjgwNXYtMi42MzRjLjkwMi40MDIgMS42NjYuNjg2IDIuMjkxLjg1MXMxLjE5Ni4yNDcgMS43MTUuMjQ3Yy42MjIgMCAxLjA5OS0uMTE5IDEuNDMxLS4zNTYuMzMzLS4yMzguNDk5LS41OTEuNDk5LTEuMDYxIDAtLjI2Mi0uMDczLS40OTUtLjIxOS0uNy0uMTQ2LS4yMDQtLjM2MS0uNDAxLS42NDUtLjU5cy0uODYxLS40OTEtMS43MzMtLjkwNWMtLjgxNy0uMzg0LTEuNDMtLjc1My0xLjgzOC0xLjEwN2E0LjE1OCA0LjE1OCAwIDAxLS45NzktMS4yMzRjLS4yNDQtLjQ3LS4zNjYtMS4wMTktLjM2Ni0xLjY0NiAwLTEuMTgzLjQwMS0yLjExMyAxLjIwMy0yLjc5czEuOTEtMS4wMTUgMy4zMjUtMS4wMTVjLjY5NSAwIDEuMzU4LjA4MiAxLjk4OS4yNDcuNjMxLjE2NSAxLjI5MS4zOTYgMS45OC42OTVsLS45MTUgMi4yMDRjLS43MTMtLjI5Mi0xLjMwMy0uNDk3LTEuNzctLjYxM2E1LjY5IDUuNjkgMCAwMC0xLjM3Ni0uMTc0Yy0uNTM3IDAtLjk0OC4xMjUtMS4yMzUuMzc1LS4yODcuMjUtLjQzLjU3Ni0uNDMuOTc5IDAgLjI1LjA1OC40NjguMTc0LjY1NC4xMTYuMTg2LjMuMzY2LjU1My41NC4yNTMuMTc0Ljg1Mi40ODYgMS43OTcuOTM4IDEuMjUuNTk4IDIuMTA3IDEuMTk3IDIuNTcgMS43OTdzLjY5NCAxLjMzNC42OTQgMi4yMDZ6bTcuNTgzIDMuNzEzaC0yLjgzNXYtMTEuMDEyaC0zLjYzMXYtMi4zNmgxMC4wOTd2Mi4zNmgtMy42MzF2MTEuMDEyem04LjUyNC01LjEzMXY1LjEzMWgtMi44MzV2LTEzLjM3MmgzLjg5NmMxLjgxNyAwIDMuMTYxLjMzMSA0LjAzMy45OTIuODcyLjY2MiAxLjMwOCAxLjY2NyAxLjMwOCAzLjAxNCAwIC43ODctLjIxNiAxLjQ4Ni0uNjQ5IDIuMDk5cy0xLjA0NiAxLjA5My0xLjgzOCAxLjQ0YzIuMDEyIDMuMDA2IDMuMzIzIDQuOTQ4IDMuOTMzIDUuODI2SDkxLjQ4bC0zLjE5Mi01LjEzMWgtMS41MXptMC0yLjMwNWguOTE1Yy44OTYgMCAxLjU1OC0uMTQ5IDEuOTg1LS40NDhzLjY0LS43NjkuNjQtMS40MDljMC0uNjM0LS4yMTgtMS4wODUtLjY1NC0xLjM1NC0uNDM2LS4yNjgtMS4xMTEtLjQwMi0yLjAyNi0uNDAyaC0uODZ2My42MTN6bTE3LjcxNiA3LjQzNmwtLjk3LTMuMTgzaC00Ljg3NWwtLjk3IDMuMTgzaC0zLjA1NWw0LjcxOS0xMy40MjZoMy40NjZsNC43MzggMTMuNDI2aC0zLjA1M3ptLTEuNjQ3LTUuNTYxYTEwMjcuODQgMTAyNy44NCAwIDAxLTEuNTE0LTQuODkzIDEzLjg2MiAxMy44NjIgMCAwMS0uMjQyLS44OTZjLS4yMDEuNzgtLjc3NyAyLjcxLTEuNzI5IDUuNzg5aDMuNDg1em0xNS42MjItMy42NGMwIDEuNDM5LS40NSAyLjU0LTEuMzQ5IDMuMzAxLS44OTkuNzYzLTIuMTc4IDEuMTQ0LTMuODM3IDEuMTQ0aC0xLjIxNnY0Ljc1NmgtMi44MzV2LTEzLjM3Mmg0LjI3MWMxLjYyMiAwIDIuODU1LjM0OSAzLjcgMS4wNDcuODQ0LjY5OSAxLjI2NiAxLjc0IDEuMjY2IDMuMTI0em0tNi40MDIgMi4xMjJIMTEzYy44NzIgMCAxLjUyNC0uMTcyIDEuOTU3LS41MTcuNDMzLS4zNDUuNjQ5LS44NDYuNjQ5LTEuNTA0IDAtLjY2NS0uMTgyLTEuMTU2LS41NDQtMS40NzMtLjM2My0uMzE3LS45MzItLjQ3Ni0xLjcwNi0uNDc2aC0xLjI5djMuOTd6bS0zOC4xMTYtNjIuMTJjLTEuOTgzLS42NTMtNC44MzgtLjc1OS04LjU2NS0uNzU5SDUydjIwaDE0LjQyNGMyLjUwMiAwIDQuMjU5LS4yNDkgNS4yNzEtLjQzNyAxLjc4My0uMzE4IDMuMjc0LS45MyA0LjQ3Mi0xLjY3NiAxLjE5OC0uNzQ0IDIuMTgzLTEuODY5IDIuOTU1LTMuMjkzLjc3MS0xLjQyNCAxLjE1OC0zLjA4NyAxLjE1OC00Ljk1MSAwLTIuMTg0LS41NTktMy45OC0xLjY3Ny01LjU5LTEuMTE3LTEuNjExLTIuNjY4LTIuNjQyLTQuNjUyLTMuMjk0em0tMi4wNTYtOC42MTJjMS45Ny0uNTg2IDMuNDU1LTEuNjQ2IDQuNDUyLTMuMDAzLjk5OS0xLjM1NyAxLjQ5OC0zLjEwMyAxLjQ5OC01LjE1NCAwLTEuOTQzLS40NjYtMy42NzUtMS4zOTgtNS4xNTQtLjkzMi0xLjQ3OC0yLjI2My0yLjQ4MS0zLjk5Mi0zLjAyNy0xLjczMi0uNTQ0LTQuNy0uODA5LTguOTA2LS44MDlINTJ2MThoMTIuNTA3YzMuNDM1IDAgNS44OTctLjM5OSA3LjM4OC0uODUzek0xMTcgMTYuMTI2QzExNyA4LjMyNCAxMTAuNjc1IDIgMTAyLjg3MyAySDI1LjEyN0MxNy4zMjUgMiAxMSA4LjMyNCAxMSAxNi4xMjZ2NzcuNzQ4QzExIDEwMS42NzYgMTcuMzI1IDEwOCAyNS4xMjcgMTA4aDc3Ljc0NmM3LjgwMiAwIDE0LjEyNy02LjMyNCAxNC4xMjctMTQuMTI2VjE2LjEyNnpNODYuNTcgNzMuMjdjLTEuMTU3IDIuMzU2LTIuNTg5IDQuMTczLTQuMjkyIDUuNDUxLTEuNzA0IDEuMjc3LTMuODQxIDIuNDQ2LTYuNDEgMy4wOThBMzguMDIyIDM4LjAyMiAwIDAxNjYuNDI0IDgzSDQ0VjI0aDIyLjA2NWM0LjQ3MyAwIDguMDU5LjYyIDEwLjc2MSAxLjgwNCAyLjcwMyAxLjE4NSA0LjgxOCAzLjAyMSA2LjM1MSA1LjQ4MyAxLjUzIDIuNDYzIDIuMjk2IDUuMDQ2IDIuMjk2IDcuNzM1IDAgMi41MDItLjY4IDQuODYxLTIuMDM2IDcuMDcxLTEuMzU4IDIuMjEtMy40MDggMy45OTUtNi4xNSA1LjM1MiAzLjU0IDEuMDM4IDYuMjYzIDIuODExIDguMTY2IDUuMzEzIDEuOTAzIDIuNTAzIDIuODU1IDUuNDU4IDIuODU1IDguODY2LS4wMDEgMi43NDItLjU3OSA1LjI5MS0xLjczOCA3LjY0NnonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nanF1ZXJ5JyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyMwODY4QUMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J005LjYyNSAzMi4xODFDLTEuNDA0IDQ4LjAzMi0uMDMxIDY4LjY1NyA4LjM5NCA4NS41MDFjLjIuNDA0LjQxLjgwMS42MTcgMS4xOThsLjM5NC43NTkuMjQ2LjQzNy40MzkuNzg2Yy4yNjIuNDYxLjUzLjkyLjgwNCAxLjM3OWwuNDU5Ljc1NmMuMzA0LjQ5MS42MTUuOTc2LjkzMyAxLjQ2bC4zOTguNjE0Yy40MzkuNjU1Ljg4OCAxLjMwOSAxLjM1MiAxLjk1MWwuMDM5LjA1LjIyOC4zMDhjLjQwMS41NTMuODE0IDEuMDk5IDEuMjMyIDEuNjM5bC40NjQuNTljLjM3My40NjkuNzUyLjkzNSAxLjEzOCAxLjM5OWwuNDM1LjUyYTc1LjI3IDc1LjI3IDAgMDAxLjU4NiAxLjgxMmwuMDMzLjAzMy4wNjEuMDY4YTgwLjQ0IDgwLjQ0IDAgMDAxLjYxMiAxLjY5OWwuNTE3LjUyMWMuNDIzLjQyNi44NTMuODQ1IDEuMjg3IDEuMjYybC41MjcuNWMuNTguNTQ3IDEuMTY2IDEuMDgzIDEuNzY0IDEuNjA3bC4wMjguMDIyLjMwNy4yNjJjLjUyNy40NTYgMS4wNjMuOTA5IDEuNjAzIDEuMzUzbC42NjQuNTI5Yy40NDEuMzU0Ljg4Ny43MDIgMS4zMzYgMS4wNDRsLjcxNC41NDNjLjQ5Ni4zNjUuOTk1LjcyNCAxLjQ5OSAxLjA3NWwuNTQ2LjM4Ny4xNS4xMDdjLjQ3OC4zMjkuOTY3LjY0NiAxLjQ1Ni45NjNsLjYzLjQyYy43NS40NzQgMS41MS45NDMgMi4yNzkgMS4zOTZsLjYzLjM1NWMuNTY1LjMyNiAxLjEzNC42NDYgMS43MS45NTkuMzEyLjE2OC42MzIuMzI3Ljk0Ni40ODguNDA3LjIxMy44MTEuNDI5IDEuMjI1LjYzNmwuMjgzLjEzNy41MDEuMjQyYy42NDEuMzA2IDEuMjg3LjYwNyAxLjk0Ljg5N2wuNDEuMTg0YTY2LjkyIDY2LjkyIDAgMDAyLjI2My45NDFsLjU1MS4yMTdjLjcwNC4yNzEgMS40MTguNTM5IDIuMTM1Ljc5MWwuMjY4LjA5M2MuNzg3LjI3NSAxLjU4MS41MyAyLjM4MS43NzlsLjU3NS4xNzJjLjgxNC4yNDUgMS42MTkuNTM4IDIuNDU4LjY5MyA1My4zMzkgOS43MjcgNjguODMzLTMyLjA1MyA2OC44MzMtMzIuMDUzLTEzLjAxMyAxNi45NTMtMzYuMTExIDIxLjQyNS01Ny45OTYgMTYuNDQ2LS44MjktLjE4Ny0xLjYzMy0uNDQ2LTIuNDQyLS42ODVsLS42MDktLjE4NWE3Mi40OTggNzIuNDk4IDAgMDEtMi4zNTItLjc2NWwtLjMyMy0uMTE3YTcyLjI0NSA3Mi4yNDUgMCAwMS0yLjA3NC0uNzY5bC0uNTgyLS4yMjljLS43NTItLjI5Ny0xLjUtLjYwNy0yLjIzOS0uOTMxbC0uNDQ3LS4xOThhOTIuODU3IDkyLjg1NyAwIDAxLTEuODg5LS44NzlsLS41NDYtLjI2MmMtLjQ5MS0uMjM5LS45NzctLjQ5My0xLjQ2MS0uNzQzLS4zMjQtLjE3MS0uNjU0LS4zMzItLjk3NS0uNTFhNTguNTkxIDU4LjU5MSAwIDAxLTEuNzUxLS45ODJsLS41OTEtLjMzYTgxLjIyMSA4MS4yMjEgMCAwMS0yLjI4LTEuMzk3bC0uNjE1LS40MWE1OS4yODMgNTkuMjgzIDAgMDEtMS42MjMtMS4wNzlsLS41MjItLjM2N2E4OS4yODcgODkuMjg3IDAgMDEtMS41MzQtMS4xMDlsLS42NzktLjUxNGE2NC40NzMgNjQuNDczIDAgMDEtMS4zODQtMS4wODJsLS42MTctLjQ5NWE4Mi42OTMgODIuNjkzIDAgMDEtMS43MjQtMS40NTNsLS4xODktLjE1OWE4My40NjYgODMuNDY2IDAgMDEtMS44MTItMS42NDdsLS41MTEtLjQ5MWMtLjQ0MS0uNDItLjg3NS0uODQzLTEuMzAyLTEuMjc3bC0uNTEtLjUwOWE3MC41NDEgNzAuNTQxIDAgMDEtMS41OTgtMS42OWwtLjA3OS0uMDg0YTY3LjM5IDY3LjM5IDAgMDEtMS42MjEtMS44NDRsLS40MjQtLjUwNGE3MC42MDIgNzAuNjAyIDAgMDEtMS4xNjctMS40NDJsLS40MjctLjUzMmE3OC40MDYgNzguNDA2IDAgMDEtMS4zNDctMS43OTRjLTEyLjE1LTE2LjU3NC0xNi41MTYtMzkuNDMyLTYuODA1LTU4LjIwNG0yNS42MjktMi40MzRjLTcuOTc3IDExLjQ3OC03LjU0MyAyNi44NDQtMS4zMjEgMzguOTgzYTUwLjU4MSA1MC41ODEgMCAwMDMuNTI4IDUuODg5YzEuMTk1IDEuNzEzIDIuNTIgMy43NTEgNC4xMDYgNS4xMjdhNDguMTExIDQ4LjExMSAwIDAwMS43OSAxLjg1OGwuNDcyLjQ2NWE1MS42OSA1MS42OSAwIDAwMS44MjggMS42OThsLjA3NC4wNjQuMDE4LjAxOGE1NS4yNjggNTUuMjY4IDAgMDAyLjEzNSAxLjc2N2wuNDg1LjM3OGE1NC4wOCA1NC4wOCAwIDAwMi4yMzMgMS42MzFsLjA2NS4wNDljLjMzNi4yMzIuNjc4LjQ0OCAxLjAxOS42NzJsLjQ4My4zMTljLjU0NC4zNDkgMS4wOTUuNjg5IDEuNjU1IDEuMDE1bC4yMzUuMTM2Yy40ODMuMjc4Ljk3Mi41NTIgMS40NjMuODE4bC41MjEuMjcxYy4zMzkuMTc3LjY3OC4zNTggMS4wMjMuNTNsLjE1NS4wN2MuNzAzLjM0NiAxLjQxMi42OCAyLjEzNi45OTVsLjQ3Mi4xOTRjLjU3OS4yNDYgMS4xNjQuNDg2IDEuNzUuNzFsLjc1LjI3NWMuNTMzLjE5OCAxLjA2OC4zNzggMS42MDcuNTU5bC43MjcuMjMzYy43NjcuMjM4IDEuNTI1LjUzOSAyLjMyNC42NzIgNDEuMTgzIDYuODIzIDUwLjY5MS0yNC44ODYgNTAuNjkxLTI0Ljg4Ni04LjU3IDEyLjM0My0yNS4xNjggMTguMjMzLTQyLjg3OSAxMy42MzVhNTAuMzc2IDUwLjM3NiAwIDAxLTIuMzMzLS42NzRsLS43MDEtLjIyN2E0NS40MjMgNDUuNDIzIDAgMDEtMS42MzEtLjU2MmwtLjczNi0uMjc0YTU2LjQxOCA1Ni40MTggMCAwMS0xLjc1Ni0uNzA4bC0uNDczLS4yYTQ3LjcyOCA0Ny43MjggMCAwMS0yLjE0OC0uOTk5Yy0uMzYzLS4xNzctLjcyLS4zNjQtMS4wNzgtLjU0OGwtLjYyMi0uMzJhNDQuNTAyIDQ0LjUwMiAwIDAxLTEuMzYzLS43N2wtLjMyNi0uMTg1YTQ3Ljg0NCA0Ny44NDQgMCAwMS0xLjY1MS0xLjAwOGwtLjQ5OC0uMzMyYTYxLjc1OSA2MS43NTkgMCAwMS0xLjA2OS0uNzA3IDU3LjQ1NiA1Ny40NTYgMCAwMS0yLjIyNi0xLjYyOGwtLjUwMS0uMzk1Yy03Ljc1Mi02LjEyLTEzLjg5OC0xNC40ODYtMTYuODE5LTIzLjk3MS0zLjA2Mi05LjgzNi0yLjQwMi0yMC44NzggMi45MDMtMjkuODRtMjIuMjc4LS43NzVjLTQuNzAyIDYuOTItNS4xNjQgMTUuNTE0LTEuOTAxIDIzLjE1NiAzLjQ0MSA4LjExMyAxMC40OTEgMTQuNDc2IDE4LjcyIDE3LjQ5NS4zMzkuMTI1LjY3OS4yMzcgMS4wMjIuMzU0bC40NTEuMTQzYy40ODUuMTUyLjk2Ni4zMjkgMS40NjcuNDI0IDIyLjc0IDQuMzk0IDI4LjkwOC0xMS42NjkgMzAuNTQ5LTE0LjAzNC01LjQwMiA3Ljc3OS0xNC40ODIgOS42NDYtMjUuNjIzIDYuOTQyLS44OC0uMjEzLTEuODQ3LS41MzEtMi42OTUtLjgzMmEzMy4yNDIgMzMuMjQyIDAgMDEtMy4yMDEtMS4zMjkgMzMuMjE1IDMzLjIxNSAwIDAxLTUuNjEyLTMuNDI0Yy05Ljk2OS03LjU2NS0xNi4xNjItMjEuOTk0LTkuNjU3LTMzLjc0NSc+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J3JlYWN0JyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9JyM2MURBRkInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSc2NCcgY3k9JzY0JyByPScxMS40Jz48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEwNy4zIDQ1LjJjLTIuMi0uOC00LjUtMS42LTYuOS0yLjMuNi0yLjQgMS4xLTQuOCAxLjUtNy4xIDIuMS0xMy4yLS4yLTIyLjUtNi42LTI2LjEtMS45LTEuMS00LTEuNi02LjQtMS42LTcgMC0xNS45IDUuMi0yNC45IDEzLjktOS04LjctMTcuOS0xMy45LTI0LjktMTMuOS0yLjQgMC00LjUuNS02LjQgMS42LTYuNCAzLjctOC43IDEzLTYuNiAyNi4xLjQgMi4zLjkgNC43IDEuNSA3LjEtMi40LjctNC43IDEuNC02LjkgMi4zQzguMiA1MCAxLjQgNTYuNiAxLjQgNjRzNi45IDE0IDE5LjMgMTguOGMyLjIuOCA0LjUgMS42IDYuOSAyLjMtLjYgMi40LTEuMSA0LjgtMS41IDcuMS0yLjEgMTMuMi4yIDIyLjUgNi42IDI2LjEgMS45IDEuMSA0IDEuNiA2LjQgMS42IDcuMSAwIDE2LTUuMiAyNC45LTEzLjkgOSA4LjcgMTcuOSAxMy45IDI0LjkgMTMuOSAyLjQgMCA0LjUtLjUgNi40LTEuNiA2LjQtMy43IDguNy0xMyA2LjYtMjYuMS0uNC0yLjMtLjktNC43LTEuNS03LjEgMi40LS43IDQuNy0xLjQgNi45LTIuMyAxMi41LTQuOCAxOS4zLTExLjQgMTkuMy0xOC44cy02LjgtMTQtMTkuMy0xOC44ek05Mi41IDE0LjdjNC4xIDIuNCA1LjUgOS44IDMuOCAyMC4zLS4zIDIuMS0uOCA0LjMtMS40IDYuNi01LjItMS4yLTEwLjctMi0xNi41LTIuNS0zLjQtNC44LTYuOS05LjEtMTAuNC0xMyA3LjQtNy4zIDE0LjktMTIuMyAyMS0xMi4zIDEuMyAwIDIuNS4zIDMuNS45ek04MS4zIDc0Yy0xLjggMy4yLTMuOSA2LjQtNi4xIDkuNi0zLjcuMy03LjQuNC0xMS4yLjQtMy45IDAtNy42LS4xLTExLjItLjQtMi4yLTMuMi00LjItNi40LTYtOS42LTEuOS0zLjMtMy43LTYuNy01LjMtMTAgMS42LTMuMyAzLjQtNi43IDUuMy0xMCAxLjgtMy4yIDMuOS02LjQgNi4xLTkuNiAzLjctLjMgNy40LS40IDExLjItLjQgMy45IDAgNy42LjEgMTEuMi40IDIuMiAzLjIgNC4yIDYuNCA2IDkuNiAxLjkgMy4zIDMuNyA2LjcgNS4zIDEwLTEuNyAzLjMtMy40IDYuNi01LjMgMTB6bTguMy0zLjNjMS41IDMuNSAyLjcgNi45IDMuOCAxMC4zLTMuNC44LTcgMS40LTEwLjggMS45IDEuMi0xLjkgMi41LTMuOSAzLjYtNiAxLjItMi4xIDIuMy00LjIgMy40LTYuMnpNNjQgOTcuOGMtMi40LTIuNi00LjctNS40LTYuOS04LjMgMi4zLjEgNC42LjIgNi45LjIgMi4zIDAgNC42LS4xIDYuOS0uMi0yLjIgMi45LTQuNSA1LjctNi45IDguM3ptLTE4LjYtMTVjLTMuOC0uNS03LjQtMS4xLTEwLjgtMS45IDEuMS0zLjMgMi4zLTYuOCAzLjgtMTAuMyAxLjEgMiAyLjIgNC4xIDMuNCA2LjEgMS4yIDIuMiAyLjQgNC4xIDMuNiA2LjF6bS03LTI1LjVjLTEuNS0zLjUtMi43LTYuOS0zLjgtMTAuMyAzLjQtLjggNy0xLjQgMTAuOC0xLjktMS4yIDEuOS0yLjUgMy45LTMuNiA2LTEuMiAyLjEtMi4zIDQuMi0zLjQgNi4yek02NCAzMC4yYzIuNCAyLjYgNC43IDUuNCA2LjkgOC4zLTIuMy0uMS00LjYtLjItNi45LS4yLTIuMyAwLTQuNi4xLTYuOS4yIDIuMi0yLjkgNC41LTUuNyA2LjktOC4zem0yMi4yIDIxbC0zLjYtNmMzLjguNSA3LjQgMS4xIDEwLjggMS45LTEuMSAzLjMtMi4zIDYuOC0zLjggMTAuMy0xLjEtMi4xLTIuMi00LjItMy40LTYuMnpNMzEuNyAzNWMtMS43LTEwLjUtLjMtMTcuOSAzLjgtMjAuMyAxLS42IDIuMi0uOSAzLjUtLjkgNiAwIDEzLjUgNC45IDIxIDEyLjMtMy41IDMuOC03IDguMi0xMC40IDEzLTUuOC41LTExLjMgMS40LTE2LjUgMi41LS42LTIuMy0xLTQuNS0xLjQtNi42ek03IDY0YzAtNC43IDUuNy05LjcgMTUuNy0xMy40IDItLjggNC4yLTEuNSA2LjQtMi4xIDEuNiA1IDMuNiAxMC4zIDYgMTUuNi0yLjQgNS4zLTQuNSAxMC41LTYgMTUuNUMxNS4zIDc1LjYgNyA2OS42IDcgNjR6bTI4LjUgNDkuM2MtNC4xLTIuNC01LjUtOS44LTMuOC0yMC4zLjMtMi4xLjgtNC4zIDEuNC02LjYgNS4yIDEuMiAxMC43IDIgMTYuNSAyLjUgMy40IDQuOCA2LjkgOS4xIDEwLjQgMTMtNy40IDcuMy0xNC45IDEyLjMtMjEgMTIuMy0xLjMgMC0yLjUtLjMtMy41LS45ek05Ni4zIDkzYzEuNyAxMC41LjMgMTcuOS0zLjggMjAuMy0xIC42LTIuMi45LTMuNS45LTYgMC0xMy41LTQuOS0yMS0xMi4zIDMuNS0zLjggNy04LjIgMTAuNC0xMyA1LjgtLjUgMTEuMy0xLjQgMTYuNS0yLjUuNiAyLjMgMSA0LjUgMS40IDYuNnptOS0xNS42Yy0yIC44LTQuMiAxLjUtNi40IDIuMS0xLjYtNS0zLjYtMTAuMy02LTE1LjYgMi40LTUuMyA0LjUtMTAuNSA2LTE1LjUgMTMuOCA0IDIyLjEgMTAgMjIuMSAxNS42IDAgNC43LTUuOCA5LjctMTUuNyAxMy40eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nbm9kZScgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjODNDRDI5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTEyLjc3MSAzMC4zMzRMNjguNjc0IDQuNzI5Yy0yLjc4MS0xLjU4NC02LjQwMi0xLjU4NC05LjIwNSAwTDE0LjkwMSAzMC4zMzRDMTIuMDMxIDMxLjk4NSAxMCAzNS4wODggMTAgMzguNDA3djUxLjE0MmMwIDMuMzE5IDIuMDg0IDYuNDIzIDQuOTU0IDguMDgzbDExLjc3NSA2LjY4OGM1LjYyOCAyLjc3MiA3LjYxNyAyLjc3MiAxMC4xNzggMi43NzIgOC4zMzMgMCAxMy4wOTMtNS4wMzkgMTMuMDkzLTEzLjgyOHYtNTAuNDljMC0uNzEzLS4zNzEtMS43NzQtMS4wNzEtMS43NzRoLTUuNjIzQzQyLjU5NCA0MSA0MSA0Mi4wNjEgNDEgNDIuNzczdjUwLjQ5YzAgMy44OTYtMy41MjQgNy43NzMtMTAuMTEgNC40OEwxOC43MjMgOTAuNzNjLS40MjQtLjIzLS43MjMtLjY5My0uNzIzLTEuMTgxVjM4LjQwN2MwLS40ODIuNTU1LS45NjYuOTgyLTEuMjEzbDQ0LjQyNC0yNS41NjFjLjQxNS0uMjM1IDEuMDI1LS4yMzUgMS40MzkgMGw0My44ODIgMjUuNTU1Yy40Mi4yNTMuMjcyLjcyMi4yNzIgMS4yMTl2NTEuMTQyYzAgLjQ4OC4xODMuOTYzLS4yMzIgMS4xOThsLTQ0LjA4NiAyNS41NzZjLS4zNzguMjI3LS44NDcuMjI3LTEuMjYxIDBsLTExLjMwNy02Ljc0OWMtLjM0MS0uMTk4LS43NDYtLjI2OS0xLjA3My0uMDg2LTMuMTQ2IDEuNzgzLTMuNzI2IDIuMDItNi42NzcgMy4wNDMtLjcyNi4yNTMtMS43OTcuNjkyLjQxIDEuOTI5bDE0Ljc5OCA4Ljc1NGE5LjI5NCA5LjI5NCAwIDAwNC42NDcgMS4yNDZjMS42NDIgMCAzLjI1LS40MjYgNC42NjctMS4yNDZsNDMuODg1LTI1LjU4MmMyLjg3LTEuNjcyIDQuMjMtNC43NjQgNC4yMy04LjA4M1YzOC40MDdjMC0zLjMxOS0xLjM2LTYuNDE0LTQuMjI5LTguMDczek03Ny45MSA4MS40NDVjLTExLjcyNiAwLTE0LjMwOS0zLjIzNS0xNS4xNy05LjA2Ni0uMS0uNjI4LS42MzMtMS4zNzktMS4yNzItMS4zNzloLTUuNzMxYy0uNzA5IDAtMS4yNzkuODYtMS4yNzkgMS41NjYgMCA3LjQ2NiA0LjA1OSAxNi41MTIgMjMuNDUzIDE2LjUxMiAxNC4wMzkgMCAyMi4wODgtNS40NTUgMjIuMDg4LTE1LjEwOSAwLTkuNTcyLTYuNDY3LTEyLjA4NC0yMC4wODItMTMuODg2LTEzLjc2Mi0xLjgxOS0xNS4xNi0yLjczOC0xNS4xNi01Ljk2MiAwLTIuNjU4IDEuMTg0LTYuMjAzIDExLjM3NC02LjIwMyA5LjEwNSAwIDEyLjQ2MSAxLjk1NCAxMy44NDIgOC4wOTEuMTE4LjU3Ny42NDUuOTkxIDEuMjQuOTkxaDUuNzU0Yy4zNTQgMCAuNjkyLS4xNDMuOTQtLjM5Ni4yNC0uMjcyLjM2Ny0uNjEzLjMzNS0uOTc5LS44OTEtMTAuNTY4LTcuOTEyLTE1LjQ5My0yMi4xMTItMTUuNDkzLTEyLjYzMSAwLTIwLjE2NiA1LjMzNC0yMC4xNjYgMTQuMjc1IDAgOS42OTggNy40OTcgMTIuMzc4IDE5LjYyMiAxMy41NzcgMTQuNTA1IDEuNDIyIDE1LjYzMyAzLjU0MiAxNS42MzMgNi4zOTUgMCA0Ljk1NS0zLjk3OCA3LjA2Ni0xMy4zMDkgNy4wNjZ6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nZmlyZWJhc2UnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI2Y1ODIyMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTI3LjM1IDgwLjUybDEwLjY4LTY4LjQ0Yy4zNy0yLjMzIDMuNS0yLjg5IDQuNi0uOGwxMS40OCAyMS40OC0yNi43NiA0Ny43NnptNzUuOTQgMTYuNjNMOTMuMSAzNC4xMWMtLjMxLTEuOTYtMi43Ni0yLjc2LTQuMTctMS4zNUwyNC43MSA5Ny4xNWwzNS41NCAxOS45NWE3LjQ0NyA3LjQ0NyAwIDAwNy4xOCAwbDM1Ljg2LTE5Ljk1em0tMjguODUtNTVMNjYuMjEgMjYuNWMtLjkyLTEuNzgtMy40NC0xLjc4LTQuMzYgMEwyNS43IDkwLjk1bDQ4Ljc0LTQ4Ljh6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgaWQ9J3Byb2pldG9zJyBjbGFzc05hbWU9J2MtcHJvamVjdHMnPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+UFJPSkVUT1M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1uZXh0LXByZXYtcHJvamVjdHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRQcmV2UHJvamVjdHMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdHMtMSBjLWdyb3VwLWJ1dHRvbi1wcm9qZWN0cyBhY3RpdmUnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRQcmV2UHJvamVjdHMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdHMtMiBjLWdyb3VwLWJ1dHRvbi1wcm9qZWN0cyc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1ib3gnIGlkPSdqcy1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvZGV2ZmluYW5jZS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGV2JGZpbmFuY2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV2JGZpbmFuY2Ugw6kgdW0gcHJvamV0byBmZWl0byBkdXJhbnRlIHVtYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJhdG9uYSBkYSBSb2NrZXRzZWF0LCB1dGlsaXphbmRvIEh0bWwsIENzcyBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEphdmFzY3JpcHQgZSBzdWEgZnVuw6fDo28gw6kgYWp1ZGFyIG5hIG9yZ2FuaXphw6fDo29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgZ2FzdG9zIG1lbnNhaXMsIHR1ZG8gdXRpbGl6YW5kbyBMb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBuw6NvIHBlcmRlciBvcyBkYWRvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL0Rldi1maW5hbmNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdidG4tc2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNJVEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL0Rldi1maW5hbmNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdidG4tZ2l0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR0lUSFVCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QgYmctMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL2ZhbmN5LWJvcmRlci1yYWRpdXMucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZhbmN5IEJvcmRlciBSYWRpdXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFuY3kgQm9yZGVyIHJhZGl1cyDDqSB1bSBwcm9qZXRvIGJhc2VhZG8gZW0gdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9zIGRlc2FmaW9zIGRvIHJlcG9zaXTDs3JpbyBBcHAgSWRlYXMgbm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2l0aHViLiBOZWxlIHRlbW9zIHF1ZSBjcmlhciB1bWEgaW50ZXJmYWNlIHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvIHVzdcOhcmlvIHBvc3NhIG1vZGlmaWNhciBvIGJvcmRlci1yYWRpdXMgZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudG8gYSB2b250YWRlIGUgY29uc2VndWlyIGNvcGlhLWxvIHByb250b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhIHVzYXIgbm8gc2V1IHByb2pldG8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly90aHlhZ29hcmF1am9tLmdpdGh1Yi5pby9QcmF0aWNhbmRvLXRlbXBsYXRlcy9pbmljaWFudGUvQm9yZGVyLXJhZGl1cy1QcmV2aWV3ZXIvaW5kZXguaHRtbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tc2l0ZSc+U0lURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9QcmF0aWNhbmRvLXRlbXBsYXRlcy90cmVlL21haW4vaW5pY2lhbnRlL0JvcmRlci1yYWRpdXMtUHJldmlld2VyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1naXQnPkdJVEhVQjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9mYXEucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZBUSBUZW1wbGF0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3RlIHByb2pldG8gw6kgdW0gdGVtcGxhdGUgYsOhc2ljbyBkZSB1bSBGQVFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZWFkbyBkbyBzaXRlIEZyb250ZW5kTWVudG9yLCBkZWxlIHRlbW9zIHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNyaWFyIG8gZGVzaWduIG8gbWFpcyBmaWVsbWVudGUgcG9zc8OtdmVsIGFvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3TDs3RpcG8gcmVjZWJpZG8gZSBxdWUgZXN0ZWphIHJlc3BvbnNpdm8gcGFyYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlvcmlhIGRvcyBkaXNwb3NpdGl2b3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly90aHlhZ29hcmF1am9tLmdpdGh1Yi5pby9QcmF0aWNhbmRvLXRlbXBsYXRlcy9pbmljaWFudGUvZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vaW5kZXguaHRtbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tc2l0ZSc+U0lURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9QcmF0aWNhbmRvLXRlbXBsYXRlcy90cmVlL21haW4vaW5pY2lhbnRlL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1naXQnPkdJVEhVQjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9zcGxpdGVyLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TcGxpdHRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbGl0dGVyIMOpIHVtIGFwbGljYXRpdm8gcGFyYSBjYWxjdWxvIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvcmpldGEsIGNvbSBvIGNhbGN1bG8gZW0gc2ksIHVtYSDDoXJlYSBwYXJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbG9yZXMgZGEgZ29yamV0YSBlc2NvbGhpZGEgcGVsbyB1c3XDoXJpbyBlIHVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdMOjbyBwYXJhIHplcmFyIHR1ZG8sIG91dHJvIHByb2pldG8gYmFzZWFkbyBkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIEZyb250ZW5kTWVudG9yLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vUHJhdGljYW5kby10ZW1wbGF0ZXMvaW5pY2lhbnRlL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluL2luZGV4Lmh0bWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vUHJhdGljYW5kby10ZW1wbGF0ZXMvdHJlZS9tYWluL2luaWNpYW50ZS90aXAtY2FsY3VsYXRvci1hcHAtbWFpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0IGJnLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy93aWxkYmVhc3QucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPldpbGRiZWFzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaWxkYmVhc3Qgw6kgdW0gdGVtcGxhdGUgZmVpdG8gcGFyYSBhIHByw6F0aWNhIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQgbGF5b3V0LCB1dGlsaXphbmRvIHRvZG9zIG9zIHNldXMgY29uY2VpdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEgY3JpYXIgdW0gbGF5b3V0IHJlc3BvbnNpdm8gcGFyYSB0b2RvcyBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvcyBkZSBkaXNwb3NpdGl2b3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly90aHlhZ29hcmF1am9tLmdpdGh1Yi5pby9XaWxkYmVhc3QvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1zaXRlJz5TSVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL1dpbGRiZWFzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdDEuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZsZXhCb3g8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxleGJveCDDqSB1bSB0ZW1wbGF0ZSBmZWl0byBwYXJhIHRyaW5hciBmbGV4Ym94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW8gbyBwcsOzcHJpbyBub21lIGRpeiwgZmVpdG8gY29tIHRvZG9zIG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldXMgcHJpbmPDrXBpb3MgZGUgZmxleGliaWxpZGFkZSBwYXJhIGNyaWFyIHVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dCByZXNwb25zaXZvIHBhcmEgdG9kb3Mgb3MgdGlwb3MgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zaXRpdm9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vRmxleEJsb2cvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1zaXRlJz5TSVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL0ZsZXhCbG9nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1naXQnPkdJVEhVQjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2MtYWJvdXQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1kZXRhaWxzLTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvZGV0YWlscy5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1hYm91dC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNPQlJFIE1JTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTb3UgdW0gcHJvZ3JhbWFkb3IgZW0gYnVzY2EgZGUgdW1hIG9wb3J0dW5pZGFkZSBwYXJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJhciBubyBtZXJjYWRvLiBKw6EgdGVuaG8gZXhwZXJpw6puY2lhIG5hIGNyaWHDp8OjbyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlcyByZXNwb25zaXZvcyBlIGVzdG91IHNlbXByZSBidXNjYW5kbyBhcHJlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub3ZhcyBmZXJyYW1lbnRhcyBwYXJhIG1lbGhvcmFyIG8gbWV1IHRyYWJhbGhvLCBjb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgNDArIGhvcmFzIGVtIGN1cnNvcyBlIDEwMCsgaG9yYXMgZW0gcHLDoXRpY2EuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dWFsbWVudGUgZXN0b3UgZm9jYW5kbyBtZXVzIGVzdHVkb3MgZW0gYmFjay1lbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tIE5vZGUgZSBSZWFjdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9jw6ogcG9kZSBlbmNvbnRyYXIgbWFpcyBzb2JyZSBtZXVzIHByb2pldG9zIGUgbWluaGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90aW5hIGRlIGVzdHVkb3MgZW0gbWluaGEgY29udGEgbm8gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScuL2Fzc2V0cy9DVi5wZGYnIGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNVUlLDjUNVTE88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjLWVtYWlsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh5YWdvYXJhdWpvbW90dGFAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvcHlUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vaW1hZ2VzL2NvcHktaWNvbi5zdmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYy1jb3B5Jz5lLW1haWwgY29waWFkbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoMjcpIDkgOTk3NS01Njg0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1Mjc5OTk3NTU2ODQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vaW1hZ2VzL3doYXRzLWljb24uc3ZnJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1kZXRhaWxzLTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvZGV0YWlscy5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5VGV4dCgpIHtcclxuICAgbGV0IHRleHQgPSBcInRoeWFnb2FyYXVqb21vdHRhQGdtYWlsLmNvbVwiO1xyXG4gICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcclxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLWNvcHlcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLWNvcHlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICB9LCAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VFbnRlcigpIHtcclxuICAgbW91c2VlbnRlciA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3V0KCkge1xyXG4gICBtb3VzZWVudGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQcmV2UHJvamVjdHMxKCkge1xyXG4gICBuZXh0UHJldlByb2plY3RzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0UHJldlByb2plY3RzMigpIHtcclxuICAgbmV4dFByZXZQcm9qZWN0cygyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFByZXZQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1ncm91cC1idXR0b24tcHJvamVjdHNcIikuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgIH0pO1xyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtZ3JvdXAtcHJvamVjdHNcIikuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgIH0pO1xyXG4gICBpZiAobGFzdENvbnRhaW5lciA8IHByb2plY3QpIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpXHJcbiAgICAgICAgIC5zY3JvbGxCeSg5MDAgKiAocHJvamVjdCAtIGxhc3RDb250YWluZXIpLCAwKTtcclxuICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpXHJcbiAgICAgICAgIC5zY3JvbGxCeSg5MDAgKiAocHJvamVjdCAtIGxhc3RDb250YWluZXIpLCAwKTtcclxuICAgfVxyXG4gICBsYXN0Q29udGFpbmVyID0gcHJvamVjdDtcclxuXHJcbiAgIGlmIChwcm9qZWN0ID09IDEpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLXByb2plY3RzLTFcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgfSBlbHNlIGlmIChwcm9qZWN0ID09IDIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLXByb2plY3RzLTJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0Iiwibm90TW9iaWxlIiwiY3VycmVudFByb2plY3QiLCJtYXhQcm9qZWN0cyIsIm1vdXNlZW50ZXIiLCJwcm9qZWN0IiwibGFzdENvbnRhaW5lciIsIkhvbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJOdW1iZXIiLCJsZW5ndGgiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRW50ZXIiLCJtb3VzZU91dCIsInNldEludGVydmFsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxCeSIsIm5leHRQcmV2UHJvamVjdHMxIiwibmV4dFByZXZQcm9qZWN0czIiLCJjb3B5VGV4dCIsInRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwibmV4dFByZXZQcm9qZWN0cyIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9