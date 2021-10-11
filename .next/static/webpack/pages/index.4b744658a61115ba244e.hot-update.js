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
        href: "./images/Logo.ico",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGI3NDQ2NThhNjExMTViYTI0NGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxJQUFJQyxXQUFKO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsSUFBSUMsT0FBSjtBQUNBLElBQUlDLGFBQWEsR0FBRyxDQUFwQjs7QUFDQSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQ2JQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNiSyxJQUFBQSxPQUFPLEdBQUdHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBVjtBQUNBTixJQUFBQSxXQUFXLEdBQUdPLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q0UsTUFBeEMsR0FBaUQsQ0FBbEQsQ0FBcEI7O0FBRmEsK0NBR0NOLE9BSEQ7QUFBQTs7QUFBQTtBQUdiLDBEQUF1QjtBQUFBLFlBQWRPLENBQWM7QUFDcEJBLFFBQUFBLENBQUMsQ0FBQ0MsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUMsWUFBTTtBQUNwQ0MsVUFBQUEsVUFBVTtBQUNaLFNBRkQ7QUFJQUYsUUFBQUEsQ0FBQyxDQUFDQyxnQkFBRixDQUFtQixVQUFuQixFQUErQixZQUFNO0FBQ2xDRSxVQUFBQSxRQUFRO0FBQ1YsU0FGRDtBQUdGO0FBWFk7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhYkMsSUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDZixVQUFJLENBQUNaLFVBQUwsRUFBaUI7QUFDZCxZQUFJYSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDMUIsY0FBSWhCLGNBQWMsSUFBSUMsV0FBdEIsRUFBbUM7QUFDaENELFlBQUFBLGNBQWMsR0FBRyxDQUFqQjtBQUNBTSxZQUFBQSxR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QUExQixFQUErQ3VCLE9BQS9DLENBQXVELFVBQUNwQixDQUFELEVBQU87QUFDM0RBLElBQUFBLENBQUMsQ0FBQ3FCLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixRQUFuQjtBQUNGLEdBRkQ7O0FBR0EsTUFBSTVCLGFBQWEsR0FBR0QsT0FBcEIsRUFBNkI7QUFDMUJHLElBQUFBLFFBQVEsQ0FDSlcsYUFESixDQUNrQixTQURsQixFQUVJQyxRQUZKLENBRWEsT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZiLEVBRThDLENBRjlDO0FBR0YsR0FKRCxNQUlPO0FBQ0pFLElBQUFBLFFBQVEsQ0FDSlcsYUFESixDQUNrQixTQURsQixFQUVJQyxRQUZKLENBRWEsT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZiLEVBRThDLENBRjlDO0FBR0Y7O0FBQ0RBLEVBQUFBLGFBQWEsR0FBR0QsT0FBaEI7O0FBRUEsTUFBSUEsT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDZkcsSUFBQUEsUUFBUSxDQUFDVyxhQUFULENBQXVCLGVBQXZCLEVBQXdDYyxTQUF4QyxDQUFrREUsR0FBbEQsQ0FBc0QsUUFBdEQ7QUFDRixHQUZELE1BRU8sSUFBSTlCLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ3RCRyxJQUFBQSxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NjLFNBQXhDLENBQWtERSxHQUFsRCxDQUFzRCxRQUF0RDtBQUNGO0FBQ0g7O0FBRUQsK0RBQWU1QixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IG5vdE1vYmlsZSA9IHRydWU7XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IDA7XHJcbmxldCBtYXhQcm9qZWN0cztcclxubGV0IG1vdXNlZW50ZXIgPSBmYWxzZTtcclxubGV0IHByb2plY3Q7XHJcbmxldCBsYXN0Q29udGFpbmVyID0gMDtcclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1wcm9qZWN0XCIpO1xyXG4gICAgICBtYXhQcm9qZWN0cyA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtcHJvamVjdFwiKS5sZW5ndGggLSAxKTtcclxuICAgICAgZm9yIChsZXQgaSBvZiBwcm9qZWN0KSB7XHJcbiAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb3VzZUVudGVyKCk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb3VzZU91dCgpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICBpZiAoIW1vdXNlZW50ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdCA+PSBtYXhQcm9qZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsQnkoLTI0NSAqIG1heFByb2plY3RzLCAwKTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIikuc2Nyb2xsQnkoMjQ1LCAwKTtcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QrKztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBub3RNb2JpbGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghbm90TW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpLnNjcm9sbEJ5KC05MDAsIDApO1xyXG4gICAgICAgICAgICAgICBub3RNb2JpbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfSwgNDAwMCk7XHJcbiAgIH0sIFtdKTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PSdVVEYtOCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0nWC1VQS1Db21wYXRpYmxlJyBjb250ZW50PSdJRT1lZGdlJyAvPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICBuYW1lPSd2aWV3cG9ydCdcclxuICAgICAgICAgICAgICAgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdwcmVjb25uZWN0JyBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICByZWw9J3ByZWNvbm5lY3QnXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nXHJcbiAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOndnaHRANDAwOzcwMCZmYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnXHJcbiAgICAgICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgcmVsPSdzaG9ydGN1dCBpY29uJ1xyXG4gICAgICAgICAgICAgICBocmVmPScuL2ltYWdlcy9Mb2dvLmljbydcclxuICAgICAgICAgICAgICAgdHlwZT0naW1hZ2UveC1pY29uJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+VGh5YWdvIEFyYXVqbyBQb3J0ZsOzbGlvPC90aXRsZT5cclxuICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtY29udGFpbmVyLWdlcmFsJz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtY29tcHV0ZXItaW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvY29tcHV0YWRvci5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1jb250YWluZXItY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjLWxvZ28nIHNyYz0nLi9pbWFnZXMvTG9nby5zdmcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1pbnRyb2R1Y3Rpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgT2zDoSwgZXUgc291e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2MtbmFtZSc+VGh5YWdvIEFyYXVqbyw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nYy10aXRsZSc+REVTRU5WT0xWRURPUiBGUk9OVC1FTkQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBwcm9jdXJhIGRlIHVtYSBvcG9ydHVuaWRhZGUgbmEgw6FyZWEgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZW52b2x2aW1lbnRvIC0gSFRNTCwgQ1NTLCBKYXZhc2NyaXB0IGUgUmVhY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2MtcHJvamVjdHMtYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nI3Byb2pldG9zJz5QUk9KRVRPUzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1za2lsbHMtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Mtc2tpbGxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkhhYmlsaWRhZGVzOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdodG1sNScgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjRTQ0RDI2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTkuMDM3IDExMy44NzZMOS4wMzIgMS42NjFoMTA5LjkzNmwtMTAuMDE2IDExMi4xOTgtNDUuMDE5IDEyLjQ4eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjRjE2NTI5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNNjQgMTE2LjhsMzYuMzc4LTEwLjA4NiA4LjU1OS05NS44NzhINjR6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNFQkVCRUInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J002NCA1Mi40NTVINDUuNzg4TDQ0LjUzIDM4LjM2MUg2NFYyNC41OTlIMjkuNDg5bC4zMyAzLjY5MiAzLjM4MiAzNy45MjdINjR6bTAgMzUuNzQzbC0uMDYxLjAxNy0xNS4zMjctNC4xNC0uOTc5LTEwLjk3NUgzMy44MTZsMS45MjggMjEuNjA5IDI4LjE5MyA3LjgyNi4wNjMtLjAxN3onPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI2ZmZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTYzLjk1MiA1Mi40NTV2MTMuNzYzaDE2Ljk0N2wtMS41OTcgMTcuODQ5LTE1LjM1IDQuMTQzdjE0LjMxOWwyOC4yMTUtNy44Mi4yMDctMi4zMjUgMy4yMzQtMzYuMjMzLjMzNS0zLjY5NmgtMy43MDh6bTAtMjcuODU2djEzLjc2MmgzMy4yNDRsLjI3Ni0zLjA5Mi42MjgtNi45NzguMzI5LTMuNjkyeic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2Nzcycgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjMTU3MkI2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTguODE0IDExNC4xMjNMOC43NiAxLjM1MmgxMTAuNDhsLTEwLjA2NCAxMTIuNzU0LTQ1LjI0MyAxMi41NDMtNDUuMTE5LTEyLjUyNnonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzMzQTlEQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTY0LjAwMSAxMTcuMDYybDM2LjU1OS0xMC4xMzYgOC42MDEtOTYuMzU0aC00NS4xNnYxMDYuNDl6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNmZmYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J002NC4wMDEgNTEuNDI5aDE4LjMwMmwxLjI2NC0xNC4xNjNINjQuMDAxVjIzLjQzNWgzNC42ODJsLS4zMzIgMy43MTEtMy40IDM4LjExNGgtMzAuOTVWNTEuNDI5eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjRUJFQkVCJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNNjQuMDgzIDg3LjM0OWwtLjA2MS4wMTgtMTUuNDAzLTQuMTU5LS45ODUtMTEuMDMxSDMzLjc1MmwxLjkzNyAyMS43MTcgMjguMzMxIDcuODYzLjA2My0uMDE4di0xNC4zOXonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI2ZmZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTgxLjEyNyA2NC42NzVsLTEuNjY2IDE4LjUyMi0xNS40MjYgNC4xNjR2MTQuMzlsMjguMzU0LTcuODU4LjIwOC0yLjMzNyAyLjQwNi0yNi44ODFIODEuMTI3eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjRUJFQkVCJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNNjQuMDQ4IDIzLjQzNXYxMy44MzFIMzAuNjRsLS4yNzctMy4xMDgtLjYzLTcuMDEyLS4zMzEtMy43MTFoMzQuNjQ2em0tLjA0NyAyNy45OTZ2MTMuODMxSDQ4Ljc5MmwtLjI3Ny0zLjEwOC0uNjMxLTcuMDEyLS4zMy0zLjcxMWgxNi40NDd6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nanMnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI0YwREI0RidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTEuNDA4IDEuNDA4aDEyNS4xODR2MTI1LjE4NUgxLjQwOHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzMyMzMzMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTExNi4zNDcgOTYuNzM2Yy0uOTE3LTUuNzExLTQuNjQxLTEwLjUwOC0xNS42NzItMTQuOTgxLTMuODMyLTEuNzYxLTguMTA0LTMuMDIyLTkuMzc3LTUuOTI2LS40NTItMS42OS0uNTEyLTIuNjQyLS4yMjYtMy42NjUuODIxLTMuMzIgNC43ODQtNC4zNTUgNy45MjUtMy40MDMgMi4wMjMuNjc4IDMuOTM4IDIuMjM3IDUuMDkzIDQuNzI0IDUuNDAyLTMuNDk4IDUuMzkxLTMuNDc1IDkuMTYzLTUuODc5LTEuMzgxLTIuMTQxLTIuMTE4LTMuMTI5LTMuMDIyLTQuMDQ1LTMuMjQ5LTMuNjI5LTcuNjc2LTUuNDk4LTE0Ljc1Ni01LjM1NWwtMy42ODguNDc3Yy0zLjUzNC44OTMtNi45MDIgMi43NDgtOC44NzcgNS4yMzUtNS45MjYgNi43MjQtNC4yMzYgMTguNDkyIDIuOTc1IDIzLjMzNSA3LjEwNCA1LjMzMiAxNy41NCA2LjU0NSAxOC44NzMgMTEuNTMxIDEuMjk3IDYuMTA0LTQuNDg2IDguMDgtMTAuMjM0IDcuMzc4LTQuMjM2LS44ODEtNi41OTItMy4wMzQtOS4xMzktNi45NDktNC42ODggMi43MTMtNC42ODggMi43MTMtOS41MDggNS40ODUgMS4xNDMgMi40OTkgMi4zNDQgMy42MyA0LjI2IDUuNzk1IDkuMDY4IDkuMTk4IDMxLjc2IDguNzQ2IDM1LjgzLTUuMTc2LjE2NS0uNDc4IDEuMjYxLTMuNjY2LjM4LTguNTgxek02OS40NjIgNTguOTQzSDU3Ljc1M2wtLjA0OCAzMC4yNzJjMCA2LjQzOC4zMzMgMTIuMzQtLjcxNCAxNC4xNDktMS43MTMgMy41NTgtNi4xNTIgMy4xMTctOC4xNzUgMi40MjctMi4wNTktMS4wMTItMy4xMDYtMi40NTEtNC4zMTktNC40ODUtLjMzMy0uNTg0LS41ODMtMS4wMzYtLjY2Ny0xLjA3MWwtOS41MiA1LjgzYzEuNTgzIDMuMjQ5IDMuOTE1IDYuMDY5IDYuOTAyIDcuOTAxIDQuNDYyIDIuNjc4IDEwLjQ1OSAzLjQ5OSAxNi43MzEgMi4wNTkgNC4wODItMS4xODkgNy42MDQtMy42NTIgOS40NDgtNy40MDEgMi42NjYtNC45MTUgMi4wOTQtMTAuODY0IDIuMDctMTcuNDQ0LjA2LTEwLjczNS4wMDEtMjEuNDY4LjAwMS0zMi4yMzd6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nYm9vdHN0cmFwJyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyM1QjQyODInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J005LjUzMSAxMTIuNTg2aDQuMTYxYzEuODk2IDAgMy4yNzMuMjcgNC4xMjkuODEuODU3LjU0IDEuMjg1IDEuMzk4IDEuMjg1IDIuNTc1IDAgLjc5OS0uMTg4IDEuNDU0LS41NjMgMS45NjZzLS44NzQuODItMS40OTYuOTI0di4wOTFjLjg0OC4xODkgMS40NTkuNTQzIDEuODM0IDEuMDYxcy41NjMgMS4yMDcuNTYzIDIuMDY3YzAgMS4yMi0uNDQgMi4xNzEtMS4zMjIgMi44NTQtLjg4MS42ODMtMi4wNzggMS4wMjQtMy41OSAxLjAyNEg5LjUzMXYtMTMuMzcyem0yLjgzNSA1LjI5NmgxLjY0NmMuNzY4IDAgMS4zMjUtLjExOSAxLjY2OS0uMzU2LjM0NS0uMjM4LjUxNy0uNjMxLjUxNy0xLjE4IDAtLjUxMi0uMTg3LS44NzktLjU2Mi0xLjEwMnMtLjk2OC0uMzM0LTEuNzc5LS4zMzRoLTEuNDkxdjIuOTcyem0wIDIuMjV2My40ODVoMS44NDhjLjc4IDAgMS4zNTYtLjE0OSAxLjcyOS0uNDQ4cy41NTgtLjc1Ni41NTgtMS4zNzJjMC0xLjEwOS0uNzkzLTEuNjY1LTIuMzc4LTEuNjY1aC0xLjc1N3ptMjEuODg2LS44NzhjMCAyLjIxMy0uNTQ5IDMuOTE1LTEuNjQ2IDUuMTA0cy0yLjY3IDEuNzg0LTQuNzE5IDEuNzg0LTMuNjIyLS41OTUtNC43MTktMS43ODRjLTEuMDk4LTEuMTg5LTEuNjQ2LTIuODk2LTEuNjQ2LTUuMTIycy41NS0zLjkyNSAxLjY1MS01LjA5OSAyLjY3OC0xLjc2MSA0LjczMy0xLjc2MSAzLjYyNi41OTIgNC43MTUgMS43NzRjMS4wODcgMS4xODMgMS42MzEgMi44ODUgMS42MzEgNS4xMDR6bS05Ljc1OCAwYzAgMS40OTQuMjgzIDIuNjE5Ljg1MSAzLjM3NS41NjcuNzU2IDEuNDE0IDEuMTM0IDIuNTQyIDEuMTM0IDIuMjYyIDAgMy4zOTMtMS41MDMgMy4zOTMtNC41MDkgMC0zLjAxMi0xLjEyNS00LjUxOC0zLjM3NS00LjUxOC0xLjEyOCAwLTEuOTc5LjM3OS0yLjU1MiAxLjEzOXMtLjg1OSAxLjg4NS0uODU5IDMuMzc5em0yNC42NjcgMGMwIDIuMjEzLS41NDkgMy45MTUtMS42NDYgNS4xMDRzLTIuNjcgMS43ODQtNC43MTkgMS43ODQtMy42MjItLjU5NS00LjcxOS0xLjc4NGMtMS4wOTgtMS4xODktMS42NDYtMi44OTYtMS42NDYtNS4xMjJzLjU1LTMuOTI1IDEuNjUxLTUuMDk5IDIuNjc4LTEuNzYxIDQuNzMzLTEuNzYxIDMuNjI2LjU5MiA0LjcxNSAxLjc3NGMxLjA4NiAxLjE4MyAxLjYzMSAyLjg4NSAxLjYzMSA1LjEwNHptLTkuNzU5IDBjMCAxLjQ5NC4yODMgMi42MTkuODUxIDMuMzc1LjU2Ny43NTYgMS40MTQgMS4xMzQgMi41NDIgMS4xMzQgMi4yNjIgMCAzLjM5My0xLjUwMyAzLjM5My00LjUwOSAwLTMuMDEyLTEuMTI1LTQuNTE4LTMuMzc1LTQuNTE4LTEuMTI4IDAtMS45NzkuMzc5LTIuNTUyIDEuMTM5cy0uODU5IDEuODg1LS44NTkgMy4zNzl6bTE3LjY4OCA2LjcwNGgtMi44MzV2LTExLjAxMmgtMy42MzF2LTIuMzZoMTAuMDk3djIuMzZINTcuMDl2MTEuMDEyem0xMy41ODEtMy43MTNjMCAxLjIwOC0uNDM0IDIuMTU5LTEuMzAzIDIuODU0LS44NjkuNjk1LTIuMDc4IDEuMDQzLTMuNjI2IDEuMDQzLTEuNDI3IDAtMi42ODktLjI2OS0zLjc4Ni0uODA1di0yLjYzNGMuOTAyLjQwMiAxLjY2Ni42ODYgMi4yOTEuODUxczEuMTk2LjI0NyAxLjcxNS4yNDdjLjYyMiAwIDEuMDk5LS4xMTkgMS40MzEtLjM1Ni4zMzMtLjIzOC40OTktLjU5MS40OTktMS4wNjEgMC0uMjYyLS4wNzMtLjQ5NS0uMjE5LS43LS4xNDYtLjIwNC0uMzYxLS40MDEtLjY0NS0uNTlzLS44NjEtLjQ5MS0xLjczMy0uOTA1Yy0uODE3LS4zODQtMS40My0uNzUzLTEuODM4LTEuMTA3YTQuMTU4IDQuMTU4IDAgMDEtLjk3OS0xLjIzNGMtLjI0NC0uNDctLjM2Ni0xLjAxOS0uMzY2LTEuNjQ2IDAtMS4xODMuNDAxLTIuMTEzIDEuMjAzLTIuNzlzMS45MS0xLjAxNSAzLjMyNS0xLjAxNWMuNjk1IDAgMS4zNTguMDgyIDEuOTg5LjI0Ny42MzEuMTY1IDEuMjkxLjM5NiAxLjk4LjY5NWwtLjkxNSAyLjIwNGMtLjcxMy0uMjkyLTEuMzAzLS40OTctMS43Ny0uNjEzYTUuNjkgNS42OSAwIDAwLTEuMzc2LS4xNzRjLS41MzcgMC0uOTQ4LjEyNS0xLjIzNS4zNzUtLjI4Ny4yNS0uNDMuNTc2LS40My45NzkgMCAuMjUuMDU4LjQ2OC4xNzQuNjU0LjExNi4xODYuMy4zNjYuNTUzLjU0LjI1My4xNzQuODUyLjQ4NiAxLjc5Ny45MzggMS4yNS41OTggMi4xMDcgMS4xOTcgMi41NyAxLjc5N3MuNjk0IDEuMzM0LjY5NCAyLjIwNnptNy41ODMgMy43MTNoLTIuODM1di0xMS4wMTJoLTMuNjMxdi0yLjM2aDEwLjA5N3YyLjM2aC0zLjYzMXYxMS4wMTJ6bTguNTI0LTUuMTMxdjUuMTMxaC0yLjgzNXYtMTMuMzcyaDMuODk2YzEuODE3IDAgMy4xNjEuMzMxIDQuMDMzLjk5Mi44NzIuNjYyIDEuMzA4IDEuNjY3IDEuMzA4IDMuMDE0IDAgLjc4Ny0uMjE2IDEuNDg2LS42NDkgMi4wOTlzLTEuMDQ2IDEuMDkzLTEuODM4IDEuNDRjMi4wMTIgMy4wMDYgMy4zMjMgNC45NDggMy45MzMgNS44MjZIOTEuNDhsLTMuMTkyLTUuMTMxaC0xLjUxem0wLTIuMzA1aC45MTVjLjg5NiAwIDEuNTU4LS4xNDkgMS45ODUtLjQ0OHMuNjQtLjc2OS42NC0xLjQwOWMwLS42MzQtLjIxOC0xLjA4NS0uNjU0LTEuMzU0LS40MzYtLjI2OC0xLjExMS0uNDAyLTIuMDI2LS40MDJoLS44NnYzLjYxM3ptMTcuNzE2IDcuNDM2bC0uOTctMy4xODNoLTQuODc1bC0uOTcgMy4xODNoLTMuMDU1bDQuNzE5LTEzLjQyNmgzLjQ2Nmw0LjczOCAxMy40MjZoLTMuMDUzem0tMS42NDctNS41NjFhMTAyNy44NCAxMDI3Ljg0IDAgMDEtMS41MTQtNC44OTMgMTMuODYyIDEzLjg2MiAwIDAxLS4yNDItLjg5NmMtLjIwMS43OC0uNzc3IDIuNzEtMS43MjkgNS43ODloMy40ODV6bTE1LjYyMi0zLjY0YzAgMS40MzktLjQ1IDIuNTQtMS4zNDkgMy4zMDEtLjg5OS43NjMtMi4xNzggMS4xNDQtMy44MzcgMS4xNDRoLTEuMjE2djQuNzU2aC0yLjgzNXYtMTMuMzcyaDQuMjcxYzEuNjIyIDAgMi44NTUuMzQ5IDMuNyAxLjA0Ny44NDQuNjk5IDEuMjY2IDEuNzQgMS4yNjYgMy4xMjR6bS02LjQwMiAyLjEyMkgxMTNjLjg3MiAwIDEuNTI0LS4xNzIgMS45NTctLjUxNy40MzMtLjM0NS42NDktLjg0Ni42NDktMS41MDQgMC0uNjY1LS4xODItMS4xNTYtLjU0NC0xLjQ3My0uMzYzLS4zMTctLjkzMi0uNDc2LTEuNzA2LS40NzZoLTEuMjl2My45N3ptLTM4LjExNi02Mi4xMmMtMS45ODMtLjY1My00LjgzOC0uNzU5LTguNTY1LS43NTlINTJ2MjBoMTQuNDI0YzIuNTAyIDAgNC4yNTktLjI0OSA1LjI3MS0uNDM3IDEuNzgzLS4zMTggMy4yNzQtLjkzIDQuNDcyLTEuNjc2IDEuMTk4LS43NDQgMi4xODMtMS44NjkgMi45NTUtMy4yOTMuNzcxLTEuNDI0IDEuMTU4LTMuMDg3IDEuMTU4LTQuOTUxIDAtMi4xODQtLjU1OS0zLjk4LTEuNjc3LTUuNTktMS4xMTctMS42MTEtMi42NjgtMi42NDItNC42NTItMy4yOTR6bS0yLjA1Ni04LjYxMmMxLjk3LS41ODYgMy40NTUtMS42NDYgNC40NTItMy4wMDMuOTk5LTEuMzU3IDEuNDk4LTMuMTAzIDEuNDk4LTUuMTU0IDAtMS45NDMtLjQ2Ni0zLjY3NS0xLjM5OC01LjE1NC0uOTMyLTEuNDc4LTIuMjYzLTIuNDgxLTMuOTkyLTMuMDI3LTEuNzMyLS41NDQtNC43LS44MDktOC45MDYtLjgwOUg1MnYxOGgxMi41MDdjMy40MzUgMCA1Ljg5Ny0uMzk5IDcuMzg4LS44NTN6TTExNyAxNi4xMjZDMTE3IDguMzI0IDExMC42NzUgMiAxMDIuODczIDJIMjUuMTI3QzE3LjMyNSAyIDExIDguMzI0IDExIDE2LjEyNnY3Ny43NDhDMTEgMTAxLjY3NiAxNy4zMjUgMTA4IDI1LjEyNyAxMDhoNzcuNzQ2YzcuODAyIDAgMTQuMTI3LTYuMzI0IDE0LjEyNy0xNC4xMjZWMTYuMTI2ek04Ni41NyA3My4yN2MtMS4xNTcgMi4zNTYtMi41ODkgNC4xNzMtNC4yOTIgNS40NTEtMS43MDQgMS4yNzctMy44NDEgMi40NDYtNi40MSAzLjA5OEEzOC4wMjIgMzguMDIyIDAgMDE2Ni40MjQgODNINDRWMjRoMjIuMDY1YzQuNDczIDAgOC4wNTkuNjIgMTAuNzYxIDEuODA0IDIuNzAzIDEuMTg1IDQuODE4IDMuMDIxIDYuMzUxIDUuNDgzIDEuNTMgMi40NjMgMi4yOTYgNS4wNDYgMi4yOTYgNy43MzUgMCAyLjUwMi0uNjggNC44NjEtMi4wMzYgNy4wNzEtMS4zNTggMi4yMS0zLjQwOCAzLjk5NS02LjE1IDUuMzUyIDMuNTQgMS4wMzggNi4yNjMgMi44MTEgOC4xNjYgNS4zMTMgMS45MDMgMi41MDMgMi44NTUgNS40NTggMi44NTUgOC44NjYtLjAwMSAyLjc0Mi0uNTc5IDUuMjkxLTEuNzM4IDcuNjQ2eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdqcXVlcnknIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzA4NjhBQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTkuNjI1IDMyLjE4MUMtMS40MDQgNDguMDMyLS4wMzEgNjguNjU3IDguMzk0IDg1LjUwMWMuMi40MDQuNDEuODAxLjYxNyAxLjE5OGwuMzk0Ljc1OS4yNDYuNDM3LjQzOS43ODZjLjI2Mi40NjEuNTMuOTIuODA0IDEuMzc5bC40NTkuNzU2Yy4zMDQuNDkxLjYxNS45NzYuOTMzIDEuNDZsLjM5OC42MTRjLjQzOS42NTUuODg4IDEuMzA5IDEuMzUyIDEuOTUxbC4wMzkuMDUuMjI4LjMwOGMuNDAxLjU1My44MTQgMS4wOTkgMS4yMzIgMS42MzlsLjQ2NC41OWMuMzczLjQ2OS43NTIuOTM1IDEuMTM4IDEuMzk5bC40MzUuNTJhNzUuMjcgNzUuMjcgMCAwMDEuNTg2IDEuODEybC4wMzMuMDMzLjA2MS4wNjhhODAuNDQgODAuNDQgMCAwMDEuNjEyIDEuNjk5bC41MTcuNTIxYy40MjMuNDI2Ljg1My44NDUgMS4yODcgMS4yNjJsLjUyNy41Yy41OC41NDcgMS4xNjYgMS4wODMgMS43NjQgMS42MDdsLjAyOC4wMjIuMzA3LjI2MmMuNTI3LjQ1NiAxLjA2My45MDkgMS42MDMgMS4zNTNsLjY2NC41MjljLjQ0MS4zNTQuODg3LjcwMiAxLjMzNiAxLjA0NGwuNzE0LjU0M2MuNDk2LjM2NS45OTUuNzI0IDEuNDk5IDEuMDc1bC41NDYuMzg3LjE1LjEwN2MuNDc4LjMyOS45NjcuNjQ2IDEuNDU2Ljk2M2wuNjMuNDJjLjc1LjQ3NCAxLjUxLjk0MyAyLjI3OSAxLjM5NmwuNjMuMzU1Yy41NjUuMzI2IDEuMTM0LjY0NiAxLjcxLjk1OS4zMTIuMTY4LjYzMi4zMjcuOTQ2LjQ4OC40MDcuMjEzLjgxMS40MjkgMS4yMjUuNjM2bC4yODMuMTM3LjUwMS4yNDJjLjY0MS4zMDYgMS4yODcuNjA3IDEuOTQuODk3bC40MS4xODRhNjYuOTIgNjYuOTIgMCAwMDIuMjYzLjk0MWwuNTUxLjIxN2MuNzA0LjI3MSAxLjQxOC41MzkgMi4xMzUuNzkxbC4yNjguMDkzYy43ODcuMjc1IDEuNTgxLjUzIDIuMzgxLjc3OWwuNTc1LjE3MmMuODE0LjI0NSAxLjYxOS41MzggMi40NTguNjkzIDUzLjMzOSA5LjcyNyA2OC44MzMtMzIuMDUzIDY4LjgzMy0zMi4wNTMtMTMuMDEzIDE2Ljk1My0zNi4xMTEgMjEuNDI1LTU3Ljk5NiAxNi40NDYtLjgyOS0uMTg3LTEuNjMzLS40NDYtMi40NDItLjY4NWwtLjYwOS0uMTg1YTcyLjQ5OCA3Mi40OTggMCAwMS0yLjM1Mi0uNzY1bC0uMzIzLS4xMTdhNzIuMjQ1IDcyLjI0NSAwIDAxLTIuMDc0LS43NjlsLS41ODItLjIyOWMtLjc1Mi0uMjk3LTEuNS0uNjA3LTIuMjM5LS45MzFsLS40NDctLjE5OGE5Mi44NTcgOTIuODU3IDAgMDEtMS44ODktLjg3OWwtLjU0Ni0uMjYyYy0uNDkxLS4yMzktLjk3Ny0uNDkzLTEuNDYxLS43NDMtLjMyNC0uMTcxLS42NTQtLjMzMi0uOTc1LS41MWE1OC41OTEgNTguNTkxIDAgMDEtMS43NTEtLjk4MmwtLjU5MS0uMzNhODEuMjIxIDgxLjIyMSAwIDAxLTIuMjgtMS4zOTdsLS42MTUtLjQxYTU5LjI4MyA1OS4yODMgMCAwMS0xLjYyMy0xLjA3OWwtLjUyMi0uMzY3YTg5LjI4NyA4OS4yODcgMCAwMS0xLjUzNC0xLjEwOWwtLjY3OS0uNTE0YTY0LjQ3MyA2NC40NzMgMCAwMS0xLjM4NC0xLjA4MmwtLjYxNy0uNDk1YTgyLjY5MyA4Mi42OTMgMCAwMS0xLjcyNC0xLjQ1M2wtLjE4OS0uMTU5YTgzLjQ2NiA4My40NjYgMCAwMS0xLjgxMi0xLjY0N2wtLjUxMS0uNDkxYy0uNDQxLS40Mi0uODc1LS44NDMtMS4zMDItMS4yNzdsLS41MS0uNTA5YTcwLjU0MSA3MC41NDEgMCAwMS0xLjU5OC0xLjY5bC0uMDc5LS4wODRhNjcuMzkgNjcuMzkgMCAwMS0xLjYyMS0xLjg0NGwtLjQyNC0uNTA0YTcwLjYwMiA3MC42MDIgMCAwMS0xLjE2Ny0xLjQ0MmwtLjQyNy0uNTMyYTc4LjQwNiA3OC40MDYgMCAwMS0xLjM0Ny0xLjc5NGMtMTIuMTUtMTYuNTc0LTE2LjUxNi0zOS40MzItNi44MDUtNTguMjA0bTI1LjYyOS0yLjQzNGMtNy45NzcgMTEuNDc4LTcuNTQzIDI2Ljg0NC0xLjMyMSAzOC45ODNhNTAuNTgxIDUwLjU4MSAwIDAwMy41MjggNS44ODljMS4xOTUgMS43MTMgMi41MiAzLjc1MSA0LjEwNiA1LjEyN2E0OC4xMTEgNDguMTExIDAgMDAxLjc5IDEuODU4bC40NzIuNDY1YTUxLjY5IDUxLjY5IDAgMDAxLjgyOCAxLjY5OGwuMDc0LjA2NC4wMTguMDE4YTU1LjI2OCA1NS4yNjggMCAwMDIuMTM1IDEuNzY3bC40ODUuMzc4YTU0LjA4IDU0LjA4IDAgMDAyLjIzMyAxLjYzMWwuMDY1LjA0OWMuMzM2LjIzMi42NzguNDQ4IDEuMDE5LjY3MmwuNDgzLjMxOWMuNTQ0LjM0OSAxLjA5NS42ODkgMS42NTUgMS4wMTVsLjIzNS4xMzZjLjQ4My4yNzguOTcyLjU1MiAxLjQ2My44MThsLjUyMS4yNzFjLjMzOS4xNzcuNjc4LjM1OCAxLjAyMy41M2wuMTU1LjA3Yy43MDMuMzQ2IDEuNDEyLjY4IDIuMTM2Ljk5NWwuNDcyLjE5NGMuNTc5LjI0NiAxLjE2NC40ODYgMS43NS43MWwuNzUuMjc1Yy41MzMuMTk4IDEuMDY4LjM3OCAxLjYwNy41NTlsLjcyNy4yMzNjLjc2Ny4yMzggMS41MjUuNTM5IDIuMzI0LjY3MiA0MS4xODMgNi44MjMgNTAuNjkxLTI0Ljg4NiA1MC42OTEtMjQuODg2LTguNTcgMTIuMzQzLTI1LjE2OCAxOC4yMzMtNDIuODc5IDEzLjYzNWE1MC4zNzYgNTAuMzc2IDAgMDEtMi4zMzMtLjY3NGwtLjcwMS0uMjI3YTQ1LjQyMyA0NS40MjMgMCAwMS0xLjYzMS0uNTYybC0uNzM2LS4yNzRhNTYuNDE4IDU2LjQxOCAwIDAxLTEuNzU2LS43MDhsLS40NzMtLjJhNDcuNzI4IDQ3LjcyOCAwIDAxLTIuMTQ4LS45OTljLS4zNjMtLjE3Ny0uNzItLjM2NC0xLjA3OC0uNTQ4bC0uNjIyLS4zMmE0NC41MDIgNDQuNTAyIDAgMDEtMS4zNjMtLjc3bC0uMzI2LS4xODVhNDcuODQ0IDQ3Ljg0NCAwIDAxLTEuNjUxLTEuMDA4bC0uNDk4LS4zMzJhNjEuNzU5IDYxLjc1OSAwIDAxLTEuMDY5LS43MDcgNTcuNDU2IDU3LjQ1NiAwIDAxLTIuMjI2LTEuNjI4bC0uNTAxLS4zOTVjLTcuNzUyLTYuMTItMTMuODk4LTE0LjQ4Ni0xNi44MTktMjMuOTcxLTMuMDYyLTkuODM2LTIuNDAyLTIwLjg3OCAyLjkwMy0yOS44NG0yMi4yNzgtLjc3NWMtNC43MDIgNi45Mi01LjE2NCAxNS41MTQtMS45MDEgMjMuMTU2IDMuNDQxIDguMTEzIDEwLjQ5MSAxNC40NzYgMTguNzIgMTcuNDk1LjMzOS4xMjUuNjc5LjIzNyAxLjAyMi4zNTRsLjQ1MS4xNDNjLjQ4NS4xNTIuOTY2LjMyOSAxLjQ2Ny40MjQgMjIuNzQgNC4zOTQgMjguOTA4LTExLjY2OSAzMC41NDktMTQuMDM0LTUuNDAyIDcuNzc5LTE0LjQ4MiA5LjY0Ni0yNS42MjMgNi45NDItLjg4LS4yMTMtMS44NDctLjUzMS0yLjY5NS0uODMyYTMzLjI0MiAzMy4yNDIgMCAwMS0zLjIwMS0xLjMyOSAzMy4yMTUgMzMuMjE1IDAgMDEtNS42MTItMy40MjRjLTkuOTY5LTcuNTY1LTE2LjE2Mi0yMS45OTQtOS42NTctMzMuNzQ1Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0ncmVhY3QnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD0nIzYxREFGQic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9JzY0JyBjeT0nNjQnIHI9JzExLjQnPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTA3LjMgNDUuMmMtMi4yLS44LTQuNS0xLjYtNi45LTIuMy42LTIuNCAxLjEtNC44IDEuNS03LjEgMi4xLTEzLjItLjItMjIuNS02LjYtMjYuMS0xLjktMS4xLTQtMS42LTYuNC0xLjYtNyAwLTE1LjkgNS4yLTI0LjkgMTMuOS05LTguNy0xNy45LTEzLjktMjQuOS0xMy45LTIuNCAwLTQuNS41LTYuNCAxLjYtNi40IDMuNy04LjcgMTMtNi42IDI2LjEuNCAyLjMuOSA0LjcgMS41IDcuMS0yLjQuNy00LjcgMS40LTYuOSAyLjNDOC4yIDUwIDEuNCA1Ni42IDEuNCA2NHM2LjkgMTQgMTkuMyAxOC44YzIuMi44IDQuNSAxLjYgNi45IDIuMy0uNiAyLjQtMS4xIDQuOC0xLjUgNy4xLTIuMSAxMy4yLjIgMjIuNSA2LjYgMjYuMSAxLjkgMS4xIDQgMS42IDYuNCAxLjYgNy4xIDAgMTYtNS4yIDI0LjktMTMuOSA5IDguNyAxNy45IDEzLjkgMjQuOSAxMy45IDIuNCAwIDQuNS0uNSA2LjQtMS42IDYuNC0zLjcgOC43LTEzIDYuNi0yNi4xLS40LTIuMy0uOS00LjctMS41LTcuMSAyLjQtLjcgNC43LTEuNCA2LjktMi4zIDEyLjUtNC44IDE5LjMtMTEuNCAxOS4zLTE4LjhzLTYuOC0xNC0xOS4zLTE4Ljh6TTkyLjUgMTQuN2M0LjEgMi40IDUuNSA5LjggMy44IDIwLjMtLjMgMi4xLS44IDQuMy0xLjQgNi42LTUuMi0xLjItMTAuNy0yLTE2LjUtMi41LTMuNC00LjgtNi45LTkuMS0xMC40LTEzIDcuNC03LjMgMTQuOS0xMi4zIDIxLTEyLjMgMS4zIDAgMi41LjMgMy41Ljl6TTgxLjMgNzRjLTEuOCAzLjItMy45IDYuNC02LjEgOS42LTMuNy4zLTcuNC40LTExLjIuNC0zLjkgMC03LjYtLjEtMTEuMi0uNC0yLjItMy4yLTQuMi02LjQtNi05LjYtMS45LTMuMy0zLjctNi43LTUuMy0xMCAxLjYtMy4zIDMuNC02LjcgNS4zLTEwIDEuOC0zLjIgMy45LTYuNCA2LjEtOS42IDMuNy0uMyA3LjQtLjQgMTEuMi0uNCAzLjkgMCA3LjYuMSAxMS4yLjQgMi4yIDMuMiA0LjIgNi40IDYgOS42IDEuOSAzLjMgMy43IDYuNyA1LjMgMTAtMS43IDMuMy0zLjQgNi42LTUuMyAxMHptOC4zLTMuM2MxLjUgMy41IDIuNyA2LjkgMy44IDEwLjMtMy40LjgtNyAxLjQtMTAuOCAxLjkgMS4yLTEuOSAyLjUtMy45IDMuNi02IDEuMi0yLjEgMi4zLTQuMiAzLjQtNi4yek02NCA5Ny44Yy0yLjQtMi42LTQuNy01LjQtNi45LTguMyAyLjMuMSA0LjYuMiA2LjkuMiAyLjMgMCA0LjYtLjEgNi45LS4yLTIuMiAyLjktNC41IDUuNy02LjkgOC4zem0tMTguNi0xNWMtMy44LS41LTcuNC0xLjEtMTAuOC0xLjkgMS4xLTMuMyAyLjMtNi44IDMuOC0xMC4zIDEuMSAyIDIuMiA0LjEgMy40IDYuMSAxLjIgMi4yIDIuNCA0LjEgMy42IDYuMXptLTctMjUuNWMtMS41LTMuNS0yLjctNi45LTMuOC0xMC4zIDMuNC0uOCA3LTEuNCAxMC44LTEuOS0xLjIgMS45LTIuNSAzLjktMy42IDYtMS4yIDIuMS0yLjMgNC4yLTMuNCA2LjJ6TTY0IDMwLjJjMi40IDIuNiA0LjcgNS40IDYuOSA4LjMtMi4zLS4xLTQuNi0uMi02LjktLjItMi4zIDAtNC42LjEtNi45LjIgMi4yLTIuOSA0LjUtNS43IDYuOS04LjN6bTIyLjIgMjFsLTMuNi02YzMuOC41IDcuNCAxLjEgMTAuOCAxLjktMS4xIDMuMy0yLjMgNi44LTMuOCAxMC4zLTEuMS0yLjEtMi4yLTQuMi0zLjQtNi4yek0zMS43IDM1Yy0xLjctMTAuNS0uMy0xNy45IDMuOC0yMC4zIDEtLjYgMi4yLS45IDMuNS0uOSA2IDAgMTMuNSA0LjkgMjEgMTIuMy0zLjUgMy44LTcgOC4yLTEwLjQgMTMtNS44LjUtMTEuMyAxLjQtMTYuNSAyLjUtLjYtMi4zLTEtNC41LTEuNC02LjZ6TTcgNjRjMC00LjcgNS43LTkuNyAxNS43LTEzLjQgMi0uOCA0LjItMS41IDYuNC0yLjEgMS42IDUgMy42IDEwLjMgNiAxNS42LTIuNCA1LjMtNC41IDEwLjUtNiAxNS41QzE1LjMgNzUuNiA3IDY5LjYgNyA2NHptMjguNSA0OS4zYy00LjEtMi40LTUuNS05LjgtMy44LTIwLjMuMy0yLjEuOC00LjMgMS40LTYuNiA1LjIgMS4yIDEwLjcgMiAxNi41IDIuNSAzLjQgNC44IDYuOSA5LjEgMTAuNCAxMy03LjQgNy4zLTE0LjkgMTIuMy0yMSAxMi4zLTEuMyAwLTIuNS0uMy0zLjUtLjl6TTk2LjMgOTNjMS43IDEwLjUuMyAxNy45LTMuOCAyMC4zLTEgLjYtMi4yLjktMy41LjktNiAwLTEzLjUtNC45LTIxLTEyLjMgMy41LTMuOCA3LTguMiAxMC40LTEzIDUuOC0uNSAxMS4zLTEuNCAxNi41LTIuNS42IDIuMyAxIDQuNSAxLjQgNi42em05LTE1LjZjLTIgLjgtNC4yIDEuNS02LjQgMi4xLTEuNi01LTMuNi0xMC4zLTYtMTUuNiAyLjQtNS4zIDQuNS0xMC41IDYtMTUuNSAxMy44IDQgMjIuMSAxMCAyMi4xIDE1LjYgMCA0LjctNS44IDkuNy0xNS43IDEzLjR6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdub2RlJyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyM4M0NEMjknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xMTIuNzcxIDMwLjMzNEw2OC42NzQgNC43MjljLTIuNzgxLTEuNTg0LTYuNDAyLTEuNTg0LTkuMjA1IDBMMTQuOTAxIDMwLjMzNEMxMi4wMzEgMzEuOTg1IDEwIDM1LjA4OCAxMCAzOC40MDd2NTEuMTQyYzAgMy4zMTkgMi4wODQgNi40MjMgNC45NTQgOC4wODNsMTEuNzc1IDYuNjg4YzUuNjI4IDIuNzcyIDcuNjE3IDIuNzcyIDEwLjE3OCAyLjc3MiA4LjMzMyAwIDEzLjA5My01LjAzOSAxMy4wOTMtMTMuODI4di01MC40OWMwLS43MTMtLjM3MS0xLjc3NC0xLjA3MS0xLjc3NGgtNS42MjNDNDIuNTk0IDQxIDQxIDQyLjA2MSA0MSA0Mi43NzN2NTAuNDljMCAzLjg5Ni0zLjUyNCA3Ljc3My0xMC4xMSA0LjQ4TDE4LjcyMyA5MC43M2MtLjQyNC0uMjMtLjcyMy0uNjkzLS43MjMtMS4xODFWMzguNDA3YzAtLjQ4Mi41NTUtLjk2Ni45ODItMS4yMTNsNDQuNDI0LTI1LjU2MWMuNDE1LS4yMzUgMS4wMjUtLjIzNSAxLjQzOSAwbDQzLjg4MiAyNS41NTVjLjQyLjI1My4yNzIuNzIyLjI3MiAxLjIxOXY1MS4xNDJjMCAuNDg4LjE4My45NjMtLjIzMiAxLjE5OGwtNDQuMDg2IDI1LjU3NmMtLjM3OC4yMjctLjg0Ny4yMjctMS4yNjEgMGwtMTEuMzA3LTYuNzQ5Yy0uMzQxLS4xOTgtLjc0Ni0uMjY5LTEuMDczLS4wODYtMy4xNDYgMS43ODMtMy43MjYgMi4wMi02LjY3NyAzLjA0My0uNzI2LjI1My0xLjc5Ny42OTIuNDEgMS45MjlsMTQuNzk4IDguNzU0YTkuMjk0IDkuMjk0IDAgMDA0LjY0NyAxLjI0NmMxLjY0MiAwIDMuMjUtLjQyNiA0LjY2Ny0xLjI0Nmw0My44ODUtMjUuNTgyYzIuODctMS42NzIgNC4yMy00Ljc2NCA0LjIzLTguMDgzVjM4LjQwN2MwLTMuMzE5LTEuMzYtNi40MTQtNC4yMjktOC4wNzN6TTc3LjkxIDgxLjQ0NWMtMTEuNzI2IDAtMTQuMzA5LTMuMjM1LTE1LjE3LTkuMDY2LS4xLS42MjgtLjYzMy0xLjM3OS0xLjI3Mi0xLjM3OWgtNS43MzFjLS43MDkgMC0xLjI3OS44Ni0xLjI3OSAxLjU2NiAwIDcuNDY2IDQuMDU5IDE2LjUxMiAyMy40NTMgMTYuNTEyIDE0LjAzOSAwIDIyLjA4OC01LjQ1NSAyMi4wODgtMTUuMTA5IDAtOS41NzItNi40NjctMTIuMDg0LTIwLjA4Mi0xMy44ODYtMTMuNzYyLTEuODE5LTE1LjE2LTIuNzM4LTE1LjE2LTUuOTYyIDAtMi42NTggMS4xODQtNi4yMDMgMTEuMzc0LTYuMjAzIDkuMTA1IDAgMTIuNDYxIDEuOTU0IDEzLjg0MiA4LjA5MS4xMTguNTc3LjY0NS45OTEgMS4yNC45OTFoNS43NTRjLjM1NCAwIC42OTItLjE0My45NC0uMzk2LjI0LS4yNzIuMzY3LS42MTMuMzM1LS45NzktLjg5MS0xMC41NjgtNy45MTItMTUuNDkzLTIyLjExMi0xNS40OTMtMTIuNjMxIDAtMjAuMTY2IDUuMzM0LTIwLjE2NiAxNC4yNzUgMCA5LjY5OCA3LjQ5NyAxMi4zNzggMTkuNjIyIDEzLjU3NyAxNC41MDUgMS40MjIgMTUuNjMzIDMuNTQyIDE1LjYzMyA2LjM5NSAwIDQuOTU1LTMuOTc4IDcuMDY2LTEzLjMwOSA3LjA2NnonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdmaXJlYmFzZScgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjZjU4MjIwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMjcuMzUgODAuNTJsMTAuNjgtNjguNDRjLjM3LTIuMzMgMy41LTIuODkgNC42LS44bDExLjQ4IDIxLjQ4LTI2Ljc2IDQ3Ljc2em03NS45NCAxNi42M0w5My4xIDM0LjExYy0uMzEtMS45Ni0yLjc2LTIuNzYtNC4xNy0xLjM1TDI0LjcxIDk3LjE1bDM1LjU0IDE5Ljk1YTcuNDQ3IDcuNDQ3IDAgMDA3LjE4IDBsMzUuODYtMTkuOTV6bS0yOC44NS01NUw2Ni4yMSAyNi41Yy0uOTItMS43OC0zLjQ0LTEuNzgtNC4zNiAwTDI1LjcgOTAuOTVsNDguNzQtNDguOHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBpZD0ncHJvamV0b3MnIGNsYXNzTmFtZT0nYy1wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5QUk9KRVRPUzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLW5leHQtcHJldi1wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV4dFByZXZQcm9qZWN0czF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0cy0xIGMtZ3JvdXAtYnV0dG9uLXByb2plY3RzIGFjdGl2ZSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV4dFByZXZQcm9qZWN0czJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0cy0yIGMtZ3JvdXAtYnV0dG9uLXByb2plY3RzJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJveCcgaWQ9J2pzLWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9kZXZmaW5hbmNlLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXYkZmluYW5jZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXYkZmluYW5jZSDDqSB1bSBwcm9qZXRvIGZlaXRvIGR1cmFudGUgdW1hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmF0b25hIGRhIFJvY2tldHNlYXQsIHV0aWxpemFuZG8gSHRtbCwgQ3NzIGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmF2YXNjcmlwdCBlIHN1YSBmdW7Dp8OjbyDDqSBhanVkYXIgbmEgb3JnYW5pemHDp8Ojb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBnYXN0b3MgbWVuc2FpcywgdHVkbyB1dGlsaXphbmRvIExvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhIG7Do28gcGVyZGVyIG9zIGRhZG9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vRGV2LWZpbmFuY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2J0bi1zaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0lURVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vRGV2LWZpbmFuY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2J0bi1naXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHSVRIVUJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCBiZy0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvZmFuY3ktYm9yZGVyLXJhZGl1cy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RmFuY3kgQm9yZGVyIFJhZGl1czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYW5jeSBCb3JkZXIgcmFkaXVzIMOpIHVtIHByb2pldG8gYmFzZWFkbyBlbSB1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgZGVzYWZpb3MgZG8gcmVwb3NpdMOzcmlvIEFwcCBJZGVhcyBub1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXRodWIuIE5lbGUgdGVtb3MgcXVlIGNyaWFyIHVtYSBpbnRlcmZhY2UgcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gdXN1w6FyaW8gcG9zc2EgbW9kaWZpY2FyIG8gYm9yZGVyLXJhZGl1cyBkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50byBhIHZvbnRhZGUgZSBjb25zZWd1aXIgY29waWEtbG8gcHJvbnRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEgdXNhciBubyBzZXUgcHJvamV0by5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL1ByYXRpY2FuZG8tdGVtcGxhdGVzL2luaWNpYW50ZS9Cb3JkZXItcmFkaXVzLVByZXZpZXdlci9pbmRleC5odG1sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1zaXRlJz5TSVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL1ByYXRpY2FuZG8tdGVtcGxhdGVzL3RyZWUvbWFpbi9pbmljaWFudGUvQm9yZGVyLXJhZGl1cy1QcmV2aWV3ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL2ZhcS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RkFRIFRlbXBsYXRlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGUgcHJvamV0byDDqSB1bSB0ZW1wbGF0ZSBiw6FzaWNvIGRlIHVtIEZBUVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlYWRvIGRvIHNpdGUgRnJvbnRlbmRNZW50b3IsIGRlbGUgdGVtb3MgcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3JpYXIgbyBkZXNpZ24gbyBtYWlzIGZpZWxtZW50ZSBwb3Nzw612ZWwgYW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdMOzdGlwbyByZWNlYmlkbyBlIHF1ZSBlc3RlamEgcmVzcG9uc2l2byBwYXJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW9yaWEgZG9zIGRpc3Bvc2l0aXZvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL1ByYXRpY2FuZG8tdGVtcGxhdGVzL2luaWNpYW50ZS9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbi9pbmRleC5odG1sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1zaXRlJz5TSVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL1ByYXRpY2FuZG8tdGVtcGxhdGVzL3RyZWUvbWFpbi9pbmljaWFudGUvZmFxLWFjY29yZGlvbi1jYXJkLW1haW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL3NwbGl0ZXIucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNwbGl0dGVyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNsaXR0ZXIgw6kgdW0gYXBsaWNhdGl2byBwYXJhIGNhbGN1bG8gZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29yamV0YSwgY29tIG8gY2FsY3VsbyBlbSBzaSwgdW1hIMOhcmVhIHBhcmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsb3JlcyBkYSBnb3JqZXRhIGVzY29saGlkYSBwZWxvIHVzdcOhcmlvIGUgdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90w6NvIHBhcmEgemVyYXIgdHVkbywgb3V0cm8gcHJvamV0byBiYXNlYWRvIGRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUgRnJvbnRlbmRNZW50b3IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly90aHlhZ29hcmF1am9tLmdpdGh1Yi5pby9QcmF0aWNhbmRvLXRlbXBsYXRlcy9pbmljaWFudGUvdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4vaW5kZXguaHRtbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tc2l0ZSc+U0lURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9QcmF0aWNhbmRvLXRlbXBsYXRlcy90cmVlL21haW4vaW5pY2lhbnRlL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1naXQnPkdJVEhVQjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QgYmctMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL3dpbGRiZWFzdC5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+V2lsZGJlYXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpbGRiZWFzdCDDqSB1bSB0ZW1wbGF0ZSBmZWl0byBwYXJhIGEgcHLDoXRpY2EgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZCBsYXlvdXQsIHV0aWxpemFuZG8gdG9kb3Mgb3Mgc2V1cyBjb25jZWl0b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBjcmlhciB1bSBsYXlvdXQgcmVzcG9uc2l2byBwYXJhIHRvZG9zIG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9zIGRlIGRpc3Bvc2l0aXZvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL1dpbGRiZWFzdC8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vV2lsZGJlYXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1naXQnPkdJVEhVQjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0MS5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RmxleEJveDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbGV4Ym94IMOpIHVtIHRlbXBsYXRlIGZlaXRvIHBhcmEgdHJpbmFyIGZsZXhib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbyBvIHByw7NwcmlvIG5vbWUgZGl6LCBmZWl0byBjb20gdG9kb3Mgb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V1cyBwcmluY8OtcGlvcyBkZSBmbGV4aWJpbGlkYWRlIHBhcmEgY3JpYXIgdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0IHJlc3BvbnNpdm8gcGFyYSB0b2RvcyBvcyB0aXBvcyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NpdGl2b3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly90aHlhZ29hcmF1am9tLmdpdGh1Yi5pby9GbGV4QmxvZy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vRmxleEJsb2cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT0nYy1hYm91dC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWRldGFpbHMtMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9kZXRhaWxzLnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWFib3V0LWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+U09CUkUgTUlNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvdSB1bSBwcm9ncmFtYWRvciBlbSBidXNjYSBkZSB1bWEgb3BvcnR1bmlkYWRlIHBhcmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmFyIG5vIG1lcmNhZG8uIErDoSB0ZW5obyBleHBlcmnDqm5jaWEgbmEgY3JpYcOnw6NvIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVzIHJlc3BvbnNpdm9zIGUgZXN0b3Ugc2VtcHJlIGJ1c2NhbmRvIGFwcmVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdmFzIGZlcnJhbWVudGFzIHBhcmEgbWVsaG9yYXIgbyBtZXUgdHJhYmFsaG8sIGNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA0MCsgaG9yYXMgZW0gY3Vyc29zIGUgMTAwKyBob3JhcyBlbSBwcsOhdGljYS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQXR1YWxtZW50ZSBlc3RvdSBmb2NhbmRvIG1ldXMgZXN0dWRvcyBlbSBiYWNrLWVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb20gTm9kZSBlIFJlYWN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBWb2PDqiBwb2RlIGVuY29udHJhciBtYWlzIHNvYnJlIG1ldXMgcHJvamV0b3MgZSBtaW5oYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3RpbmEgZGUgZXN0dWRvcyBlbSBtaW5oYSBjb250YSBubyAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy4vYXNzZXRzL0NWLnBkZicgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q1VSUsONQ1VMTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2MtZW1haWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aHlhZ29hcmF1am9tb3R0YUBnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Y29weVRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9pbWFnZXMvY29weS1pY29uLnN2ZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjLWNvcHknPmUtbWFpbCBjb3BpYWRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICgyNykgOSA5OTc1LTU2ODRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUyNzk5OTc1NTY4NCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9pbWFnZXMvd2hhdHMtaWNvbi5zdmcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWRldGFpbHMtMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9kZXRhaWxzLnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvYm9keT5cclxuICAgICAgPC9kaXY+XHJcbiAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlUZXh0KCkge1xyXG4gICBsZXQgdGV4dCA9IFwidGh5YWdvYXJhdWpvbW90dGFAZ21haWwuY29tXCI7XHJcbiAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtY29weVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtY29weVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgIH0sIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZUVudGVyKCkge1xyXG4gICBtb3VzZWVudGVyID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VPdXQoKSB7XHJcbiAgIG1vdXNlZW50ZXIgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFByZXZQcm9qZWN0czEoKSB7XHJcbiAgIG5leHRQcmV2UHJvamVjdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQcmV2UHJvamVjdHMyKCkge1xyXG4gICBuZXh0UHJldlByb2plY3RzKDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0UHJldlByb2plY3RzKHByb2plY3QpIHtcclxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLWdyb3VwLWJ1dHRvbi1wcm9qZWN0c1wiKS5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgfSk7XHJcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1ncm91cC1wcm9qZWN0c1wiKS5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgfSk7XHJcbiAgIGlmIChsYXN0Q29udGFpbmVyIDwgcHJvamVjdCkge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIilcclxuICAgICAgICAgLnNjcm9sbEJ5KDkwMCAqIChwcm9qZWN0IC0gbGFzdENvbnRhaW5lciksIDApO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIilcclxuICAgICAgICAgLnNjcm9sbEJ5KDkwMCAqIChwcm9qZWN0IC0gbGFzdENvbnRhaW5lciksIDApO1xyXG4gICB9XHJcbiAgIGxhc3RDb250YWluZXIgPSBwcm9qZWN0O1xyXG5cclxuICAgaWYgKHByb2plY3QgPT0gMSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtcHJvamVjdHMtMVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICB9IGVsc2UgaWYgKHByb2plY3QgPT0gMikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtcHJvamVjdHMtMlwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJub3RNb2JpbGUiLCJjdXJyZW50UHJvamVjdCIsIm1heFByb2plY3RzIiwibW91c2VlbnRlciIsInByb2plY3QiLCJsYXN0Q29udGFpbmVyIiwiSG9tZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIk51bWJlciIsImxlbmd0aCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VFbnRlciIsIm1vdXNlT3V0Iiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEJ5IiwibmV4dFByZXZQcm9qZWN0czEiLCJuZXh0UHJldlByb2plY3RzMiIsImNvcHlUZXh0IiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJuZXh0UHJldlByb2plY3RzIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=