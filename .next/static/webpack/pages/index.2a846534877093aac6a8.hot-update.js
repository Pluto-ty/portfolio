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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        charset: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Thyago Araujo Portf\xF3lio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("body", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "c-container-geral",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "c-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            className: "c-computer-image",
            src: "./images/computador.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-container-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-logo",
              src: "./images/Logo.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-introduction",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                children: ["Ol\xE1, eu sou", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "c-name",
                  children: "Thyago Araujo,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
                className: "c-title",
                children: "DESENVOLVEDOR FRONT-END"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "A procura de uma oportunidade na \xE1rea de desenvolvimento - HTML, CSS, Javascript e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                className: "c-projects-button",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "#projetos",
                  children: "PROJETOS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 28
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-skills-container",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-skills",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                  children: "Habilidades:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "html5",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#E44D26",
                      d: "M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#F16529",
                      d: "M64 116.8l36.378-10.086 8.559-95.878H64z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#EBEBEB",
                      d: "M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#fff",
                      d: "M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 34
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "css",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#1572B6",
                      d: "M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#33A9DC",
                      d: "M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#fff",
                      d: "M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#EBEBEB",
                      d: "M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#fff",
                      d: "M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#EBEBEB",
                      d: "M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 34
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "js",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#F0DB4F",
                      d: "M1.408 1.408h125.184v125.185H1.408z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#323330",
                      d: "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 34
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "bootstrap",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#5B4282",
                      d: "M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024H9.531v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zm21.886-.878c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zm24.667 0c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zm17.688 6.704h-2.835v-11.012h-3.631v-2.36h10.097v2.36H57.09v11.012zm13.581-3.713c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107a4.158 4.158 0 01-.979-1.234c-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613a5.69 5.69 0 00-1.376-.174c-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zm7.583 3.713h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zm8.524-5.131v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826H91.48l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zm17.716 7.436l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561a1027.84 1027.84 0 01-1.514-4.893 13.862 13.862 0 01-.242-.896c-.201.78-.777 2.71-1.729 5.789h3.485zm15.622-3.64c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122H113c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zm-38.116-62.12c-1.983-.653-4.838-.759-8.565-.759H52v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zm-2.056-8.612c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809H52v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126C117 8.324 110.675 2 102.873 2H25.127C17.325 2 11 8.324 11 16.126v77.748C11 101.676 17.325 108 25.127 108h77.746c7.802 0 14.127-6.324 14.127-14.126V16.126zM86.57 73.27c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098A38.022 38.022 0 0166.424 83H44V24h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "jquery",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#0868AC",
                      d: "M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "react",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("g", {
                      fill: "#61DAFB",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("circle", {
                        cx: "64",
                        cy: "64",
                        r: "11.4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "node",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#83CD29",
                      d: "M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "firebase",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#f58220",
                      d: "M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          id: "projetos",
          className: "c-projects",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
            children: "PROJETOS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-next-prev-projects",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects1,
              className: "c-projects-1 c-group-button-projects active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects2,
              className: "c-projects-2 c-group-button-projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-box",
            id: "js-box",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/devfinance.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Dev$finance"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Dev$finance \xE9 um projeto feito durante uma maratona da Rocketseat, utilizando Html, Css e Javascript e sua fun\xE7\xE3o \xE9 ajudar na organiza\xE7\xE3o de gastos mensais, tudo utilizando LocalStorage para n\xE3o perder os dados."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Dev-finance",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Dev-finance",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/fancy-border-radius.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Fancy Border Radius"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Fancy Border radius \xE9 um projeto baseado em um dos desafios do reposit\xF3rio App Ideas no github. Nele temos que criar uma interface que o usu\xE1rio possa modificar o border-radius do elemento a vontade e conseguir copia-lo pronto para usar no seu projeto."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Praticando-templates/iniciante/Border-radius-Previewer/index.html",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/Border-radius-Previewer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/faq.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "FAQ Template"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Este projeto \xE9 um template b\xE1sico de um FAQ baseado do site FrontendMentor, dele temos que recriar o design o mais fielmente poss\xEDvel ao prot\xF3tipo recebido e que esteja responsivo para maioria dos dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Praticando-templates/iniciante/faq-accordion-card-main/index.html",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/faq-accordion-card-main",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 273,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/spliter.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Splitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Slitter \xE9 um aplicativo para calculo de gorjeta, com o calculo em si, uma \xE1rea para valores da gorjeta escolhida pelo usu\xE1rio e um bot\xE3o para zerar tudo, outro projeto baseado do site FrontendMentor."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Praticando-templates/iniciante/tip-calculator-app-main/index.html",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/tip-calculator-app-main",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 304,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/wildbeast.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Wildbeast"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Wildbeast \xE9 um template feito para a pr\xE1tica de grid layout, utilizando todos os seus conceitos para criar um layout responsivo para todos os tipos de dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Wildbeast/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Wildbeast",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 325,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/project1.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "FlexBox"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Flexbox \xE9 um template feito para trinar flexbox como o pr\xF3prio nome diz, feito com todos os seus princ\xEDpios de flexibilidade para criar um layout responsivo para todos os tipos de dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/FlexBlog/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/FlexBlog",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 365,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 362,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("footer", {
          className: "c-about-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-about",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-details-1",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-about-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: "SOBRE MIM"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "Sou um programador em busca de uma oportunidade para entrar no mercado. J\xE1 tenho experi\xEAncia na cria\xE7\xE3o de sites responsivos e estou sempre buscando aprender novas ferramentas para melhorar o meu trabalho, com 40+ horas em cursos e 100+ horas em pr\xE1tica. Atualmente estou focando meus estudos em back-ending com Node e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: ["Voc\xEA pode encontrar mais sobre meus projetos e minha rotina de estudos em minha conta no \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  target: "_blank",
                  href: "https://github.com/ThyagoAraujoM",
                  children: "Github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 393,
                  columnNumber: 28
                }, this), "."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "./assets/CV.pdf",
                download: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  children: "CURR\xCDCULO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 401,
                  columnNumber: 28
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "c-email",
                children: ["thyagoaraujomotta@gmail.com", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  onClick: copyText,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "./images/copy-icon.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "c-copy",
                    children: "e-mail copiado"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: ["(27) 9 9975-5684", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://api.whatsapp.com/send?phone=5527999755684",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "./images/whats-icon.svg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 416,
                    columnNumber: 31
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 413,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-details-2",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE4NDY1MzQ4NzcwOTNhYWM2YTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHLElBQWhCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsSUFBSUMsV0FBSjtBQUNBLElBQUlDLFVBQVUsR0FBRyxLQUFqQjtBQUNBLElBQUlDLE9BQUo7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7O0FBQ0EsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUNiUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDYk0sSUFBQUEsT0FBTyxHQUFHRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLENBQVY7QUFDQU4sSUFBQUEsV0FBVyxHQUFHTyxNQUFNLENBQUNGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0NFLE1BQXhDLEdBQWlELENBQWxELENBQXBCOztBQUZhLCtDQUdDTixPQUhEO0FBQUE7O0FBQUE7QUFHYiwwREFBdUI7QUFBQSxZQUFkTyxDQUFjO0FBQ3BCQSxRQUFBQSxDQUFDLENBQUNDLGdCQUFGLENBQW1CLFlBQW5CLEVBQWlDLFlBQU07QUFDcENDLFVBQUFBLFVBQVU7QUFDWixTQUZEO0FBSUFGLFFBQUFBLENBQUMsQ0FBQ0MsZ0JBQUYsQ0FBbUIsVUFBbkIsRUFBK0IsWUFBTTtBQUNsQ0UsVUFBQUEsUUFBUTtBQUNWLFNBRkQ7QUFHRjtBQVhZO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYWJDLElBQUFBLFdBQVcsQ0FBQyxZQUFNO0FBQ2YsVUFBSSxDQUFDWixVQUFMLEVBQWlCO0FBQ2QsWUFBSWEsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQzFCLGNBQUloQixjQUFjLElBQUlDLFdBQXRCLEVBQW1DO0FBQ2hDRCxZQUFBQSxjQUFjLEdBQUcsQ0FBakI7QUFDQU0s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QUExQixFQUErQ3VCLE9BQS9DLENBQXVELFVBQUNwQixDQUFELEVBQU87QUFDM0RBLElBQUFBLENBQUMsQ0FBQ3FCLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixRQUFuQjtBQUNGLEdBRkQ7O0FBR0EsTUFBSTVCLGFBQWEsR0FBR0QsT0FBcEIsRUFBNkI7QUFDMUJHLElBQUFBLFFBQVEsQ0FDSlcsYUFESixDQUNrQixTQURsQixFQUVJQyxRQUZKLENBRWEsT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZiLEVBRThDLENBRjlDO0FBR0YsR0FKRCxNQUlPO0FBQ0pFLElBQUFBLFFBQVEsQ0FDSlcsYUFESixDQUNrQixTQURsQixFQUVJQyxRQUZKLENBRWEsT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZiLEVBRThDLENBRjlDO0FBR0Y7O0FBQ0RBLEVBQUFBLGFBQWEsR0FBR0QsT0FBaEI7O0FBRUEsTUFBSUEsT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDZkcsSUFBQUEsUUFBUSxDQUFDVyxhQUFULENBQXVCLGVBQXZCLEVBQXdDYyxTQUF4QyxDQUFrREUsR0FBbEQsQ0FBc0QsUUFBdEQ7QUFDRixHQUZELE1BRU8sSUFBSTlCLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ3RCRyxJQUFBQSxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NjLFNBQXhDLENBQWtERSxHQUFsRCxDQUFzRCxRQUF0RDtBQUNGO0FBQ0g7O0FBRUQsK0RBQWU1QixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmxldCBub3RNb2JpbGUgPSB0cnVlO1xyXG5sZXQgY3VycmVudFByb2plY3QgPSAwO1xyXG5sZXQgbWF4UHJvamVjdHM7XHJcbmxldCBtb3VzZWVudGVyID0gZmFsc2U7XHJcbmxldCBwcm9qZWN0O1xyXG5sZXQgbGFzdENvbnRhaW5lciA9IDA7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtcHJvamVjdFwiKTtcclxuICAgICAgbWF4UHJvamVjdHMgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXByb2plY3RcIikubGVuZ3RoIC0gMSk7XHJcbiAgICAgIGZvciAobGV0IGkgb2YgcHJvamVjdCkge1xyXG4gICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbW91c2VFbnRlcigpO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbW91c2VPdXQoKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgaWYgKCFtb3VzZWVudGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QgPj0gbWF4UHJvamVjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbEJ5KC0yNDUgKiBtYXhQcm9qZWN0cywgMCk7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpLnNjcm9sbEJ5KDI0NSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0Kys7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgbm90TW9iaWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW5vdE1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKS5zY3JvbGxCeSgtOTAwLCAwKTtcclxuICAgICAgICAgICAgICAgbm90TW9iaWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0sIDQwMDApO1xyXG4gICB9LCBbXSk7XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD0nVVRGLTgnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9J1gtVUEtQ29tcGF0aWJsZScgY29udGVudD0nSUU9ZWRnZScgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgbmFtZT0ndmlld3BvcnQnXHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0ncHJlY29ubmVjdCcgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgcmVsPSdwcmVjb25uZWN0J1xyXG4gICAgICAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJ1xyXG4gICAgICAgICAgICAgICBjcm9zc29yaWdpblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjp3Z2h0QDQwMDs3MDAmZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJ1xyXG4gICAgICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj0nZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5UaHlhZ28gQXJhdWpvIFBvcnRmw7NsaW88L3RpdGxlPlxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1jb250YWluZXItZ2VyYWwnPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1jb21wdXRlci1pbWFnZSdcclxuICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9jb21wdXRhZG9yLnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWNvbnRhaW5lci1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2MtbG9nbycgc3JjPScuL2ltYWdlcy9Mb2dvLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWludHJvZHVjdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBPbMOhLCBldSBzb3V7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYy1uYW1lJz5UaHlhZ28gQXJhdWpvLDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjLXRpdGxlJz5ERVNFTlZPTFZFRE9SIEZST05ULUVORDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBBIHByb2N1cmEgZGUgdW1hIG9wb3J0dW5pZGFkZSBuYSDDoXJlYSBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNlbnZvbHZpbWVudG8gLSBIVE1MLCBDU1MsIEphdmFzY3JpcHQgZSBSZWFjdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYy1wcm9qZWN0cy1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjcHJvamV0b3MnPlBST0pFVE9TPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXNraWxscy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1za2lsbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SGFiaWxpZGFkZXM6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2h0bWw1JyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNFNDREMjYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xOS4wMzcgMTEzLjg3Nkw5LjAzMiAxLjY2MWgxMDkuOTM2bC0xMC4wMTYgMTEyLjE5OC00NS4wMTkgMTIuNDh6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNGMTY1MjknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J002NCAxMTYuOGwzNi4zNzgtMTAuMDg2IDguNTU5LTk1Ljg3OEg2NHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI0VCRUJFQidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTY0IDUyLjQ1NUg0NS43ODhMNDQuNTMgMzguMzYxSDY0VjI0LjU5OUgyOS40ODlsLjMzIDMuNjkyIDMuMzgyIDM3LjkyN0g2NHptMCAzNS43NDNsLS4wNjEuMDE3LTE1LjMyNy00LjE0LS45NzktMTAuOTc1SDMzLjgxNmwxLjkyOCAyMS42MDkgMjguMTkzIDcuODI2LjA2My0uMDE3eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjZmZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNNjMuOTUyIDUyLjQ1NXYxMy43NjNoMTYuOTQ3bC0xLjU5NyAxNy44NDktMTUuMzUgNC4xNDN2MTQuMzE5bDI4LjIxNS03LjgyLjIwNy0yLjMyNSAzLjIzNC0zNi4yMzMuMzM1LTMuNjk2aC0zLjcwOHptMC0yNy44NTZ2MTMuNzYyaDMzLjI0NGwuMjc2LTMuMDkyLjYyOC02Ljk3OC4zMjktMy42OTJ6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nY3NzJyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyMxNTcyQjYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xOC44MTQgMTE0LjEyM0w4Ljc2IDEuMzUyaDExMC40OGwtMTAuMDY0IDExMi43NTQtNDUuMjQzIDEyLjU0My00NS4xMTktMTIuNTI2eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjMzNBOURDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNNjQuMDAxIDExNy4wNjJsMzYuNTU5LTEwLjEzNiA4LjYwMS05Ni4zNTRoLTQ1LjE2djEwNi40OXonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI2ZmZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTY0LjAwMSA1MS40MjloMTguMzAybDEuMjY0LTE0LjE2M0g2NC4wMDFWMjMuNDM1aDM0LjY4MmwtLjMzMiAzLjcxMS0zLjQgMzguMTE0aC0zMC45NVY1MS40Mjl6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNFQkVCRUInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J002NC4wODMgODcuMzQ5bC0uMDYxLjAxOC0xNS40MDMtNC4xNTktLjk4NS0xMS4wMzFIMzMuNzUybDEuOTM3IDIxLjcxNyAyOC4zMzEgNy44NjMuMDYzLS4wMTh2LTE0LjM5eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjZmZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNODEuMTI3IDY0LjY3NWwtMS42NjYgMTguNTIyLTE1LjQyNiA0LjE2NHYxNC4zOWwyOC4zNTQtNy44NTguMjA4LTIuMzM3IDIuNDA2LTI2Ljg4MUg4MS4xMjd6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNFQkVCRUInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J002NC4wNDggMjMuNDM1djEzLjgzMUgzMC42NGwtLjI3Ny0zLjEwOC0uNjMtNy4wMTItLjMzMS0zLjcxMWgzNC42NDZ6bS0uMDQ3IDI3Ljk5NnYxMy44MzFINDguNzkybC0uMjc3LTMuMTA4LS42MzEtNy4wMTItLjMzLTMuNzExaDE2LjQ0N3onPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdqcycgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjRjBEQjRGJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMS40MDggMS40MDhoMTI1LjE4NHYxMjUuMTg1SDEuNDA4eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjMzIzMzMwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTE2LjM0NyA5Ni43MzZjLS45MTctNS43MTEtNC42NDEtMTAuNTA4LTE1LjY3Mi0xNC45ODEtMy44MzItMS43NjEtOC4xMDQtMy4wMjItOS4zNzctNS45MjYtLjQ1Mi0xLjY5LS41MTItMi42NDItLjIyNi0zLjY2NS44MjEtMy4zMiA0Ljc4NC00LjM1NSA3LjkyNS0zLjQwMyAyLjAyMy42NzggMy45MzggMi4yMzcgNS4wOTMgNC43MjQgNS40MDItMy40OTggNS4zOTEtMy40NzUgOS4xNjMtNS44NzktMS4zODEtMi4xNDEtMi4xMTgtMy4xMjktMy4wMjItNC4wNDUtMy4yNDktMy42MjktNy42NzYtNS40OTgtMTQuNzU2LTUuMzU1bC0zLjY4OC40NzdjLTMuNTM0Ljg5My02LjkwMiAyLjc0OC04Ljg3NyA1LjIzNS01LjkyNiA2LjcyNC00LjIzNiAxOC40OTIgMi45NzUgMjMuMzM1IDcuMTA0IDUuMzMyIDE3LjU0IDYuNTQ1IDE4Ljg3MyAxMS41MzEgMS4yOTcgNi4xMDQtNC40ODYgOC4wOC0xMC4yMzQgNy4zNzgtNC4yMzYtLjg4MS02LjU5Mi0zLjAzNC05LjEzOS02Ljk0OS00LjY4OCAyLjcxMy00LjY4OCAyLjcxMy05LjUwOCA1LjQ4NSAxLjE0MyAyLjQ5OSAyLjM0NCAzLjYzIDQuMjYgNS43OTUgOS4wNjggOS4xOTggMzEuNzYgOC43NDYgMzUuODMtNS4xNzYuMTY1LS40NzggMS4yNjEtMy42NjYuMzgtOC41ODF6TTY5LjQ2MiA1OC45NDNINTcuNzUzbC0uMDQ4IDMwLjI3MmMwIDYuNDM4LjMzMyAxMi4zNC0uNzE0IDE0LjE0OS0xLjcxMyAzLjU1OC02LjE1MiAzLjExNy04LjE3NSAyLjQyNy0yLjA1OS0xLjAxMi0zLjEwNi0yLjQ1MS00LjMxOS00LjQ4NS0uMzMzLS41ODQtLjU4My0xLjAzNi0uNjY3LTEuMDcxbC05LjUyIDUuODNjMS41ODMgMy4yNDkgMy45MTUgNi4wNjkgNi45MDIgNy45MDEgNC40NjIgMi42NzggMTAuNDU5IDMuNDk5IDE2LjczMSAyLjA1OSA0LjA4Mi0xLjE4OSA3LjYwNC0zLjY1MiA5LjQ0OC03LjQwMSAyLjY2Ni00LjkxNSAyLjA5NC0xMC44NjQgMi4wNy0xNy40NDQuMDYtMTAuNzM1LjAwMS0yMS40NjguMDAxLTMyLjIzN3onPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdib290c3RyYXAnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzVCNDI4MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTkuNTMxIDExMi41ODZoNC4xNjFjMS44OTYgMCAzLjI3My4yNyA0LjEyOS44MS44NTcuNTQgMS4yODUgMS4zOTggMS4yODUgMi41NzUgMCAuNzk5LS4xODggMS40NTQtLjU2MyAxLjk2NnMtLjg3NC44Mi0xLjQ5Ni45MjR2LjA5MWMuODQ4LjE4OSAxLjQ1OS41NDMgMS44MzQgMS4wNjFzLjU2MyAxLjIwNy41NjMgMi4wNjdjMCAxLjIyLS40NCAyLjE3MS0xLjMyMiAyLjg1NC0uODgxLjY4My0yLjA3OCAxLjAyNC0zLjU5IDEuMDI0SDkuNTMxdi0xMy4zNzJ6bTIuODM1IDUuMjk2aDEuNjQ2Yy43NjggMCAxLjMyNS0uMTE5IDEuNjY5LS4zNTYuMzQ1LS4yMzguNTE3LS42MzEuNTE3LTEuMTggMC0uNTEyLS4xODctLjg3OS0uNTYyLTEuMTAycy0uOTY4LS4zMzQtMS43NzktLjMzNGgtMS40OTF2Mi45NzJ6bTAgMi4yNXYzLjQ4NWgxLjg0OGMuNzggMCAxLjM1Ni0uMTQ5IDEuNzI5LS40NDhzLjU1OC0uNzU2LjU1OC0xLjM3MmMwLTEuMTA5LS43OTMtMS42NjUtMi4zNzgtMS42NjVoLTEuNzU3em0yMS44ODYtLjg3OGMwIDIuMjEzLS41NDkgMy45MTUtMS42NDYgNS4xMDRzLTIuNjcgMS43ODQtNC43MTkgMS43ODQtMy42MjItLjU5NS00LjcxOS0xLjc4NGMtMS4wOTgtMS4xODktMS42NDYtMi44OTYtMS42NDYtNS4xMjJzLjU1LTMuOTI1IDEuNjUxLTUuMDk5IDIuNjc4LTEuNzYxIDQuNzMzLTEuNzYxIDMuNjI2LjU5MiA0LjcxNSAxLjc3NGMxLjA4NyAxLjE4MyAxLjYzMSAyLjg4NSAxLjYzMSA1LjEwNHptLTkuNzU4IDBjMCAxLjQ5NC4yODMgMi42MTkuODUxIDMuMzc1LjU2Ny43NTYgMS40MTQgMS4xMzQgMi41NDIgMS4xMzQgMi4yNjIgMCAzLjM5My0xLjUwMyAzLjM5My00LjUwOSAwLTMuMDEyLTEuMTI1LTQuNTE4LTMuMzc1LTQuNTE4LTEuMTI4IDAtMS45NzkuMzc5LTIuNTUyIDEuMTM5cy0uODU5IDEuODg1LS44NTkgMy4zNzl6bTI0LjY2NyAwYzAgMi4yMTMtLjU0OSAzLjkxNS0xLjY0NiA1LjEwNHMtMi42NyAxLjc4NC00LjcxOSAxLjc4NC0zLjYyMi0uNTk1LTQuNzE5LTEuNzg0Yy0xLjA5OC0xLjE4OS0xLjY0Ni0yLjg5Ni0xLjY0Ni01LjEyMnMuNTUtMy45MjUgMS42NTEtNS4wOTkgMi42NzgtMS43NjEgNC43MzMtMS43NjEgMy42MjYuNTkyIDQuNzE1IDEuNzc0YzEuMDg2IDEuMTgzIDEuNjMxIDIuODg1IDEuNjMxIDUuMTA0em0tOS43NTkgMGMwIDEuNDk0LjI4MyAyLjYxOS44NTEgMy4zNzUuNTY3Ljc1NiAxLjQxNCAxLjEzNCAyLjU0MiAxLjEzNCAyLjI2MiAwIDMuMzkzLTEuNTAzIDMuMzkzLTQuNTA5IDAtMy4wMTItMS4xMjUtNC41MTgtMy4zNzUtNC41MTgtMS4xMjggMC0xLjk3OS4zNzktMi41NTIgMS4xMzlzLS44NTkgMS44ODUtLjg1OSAzLjM3OXptMTcuNjg4IDYuNzA0aC0yLjgzNXYtMTEuMDEyaC0zLjYzMXYtMi4zNmgxMC4wOTd2Mi4zNkg1Ny4wOXYxMS4wMTJ6bTEzLjU4MS0zLjcxM2MwIDEuMjA4LS40MzQgMi4xNTktMS4zMDMgMi44NTQtLjg2OS42OTUtMi4wNzggMS4wNDMtMy42MjYgMS4wNDMtMS40MjcgMC0yLjY4OS0uMjY5LTMuNzg2LS44MDV2LTIuNjM0Yy45MDIuNDAyIDEuNjY2LjY4NiAyLjI5MS44NTFzMS4xOTYuMjQ3IDEuNzE1LjI0N2MuNjIyIDAgMS4wOTktLjExOSAxLjQzMS0uMzU2LjMzMy0uMjM4LjQ5OS0uNTkxLjQ5OS0xLjA2MSAwLS4yNjItLjA3My0uNDk1LS4yMTktLjctLjE0Ni0uMjA0LS4zNjEtLjQwMS0uNjQ1LS41OXMtLjg2MS0uNDkxLTEuNzMzLS45MDVjLS44MTctLjM4NC0xLjQzLS43NTMtMS44MzgtMS4xMDdhNC4xNTggNC4xNTggMCAwMS0uOTc5LTEuMjM0Yy0uMjQ0LS40Ny0uMzY2LTEuMDE5LS4zNjYtMS42NDYgMC0xLjE4My40MDEtMi4xMTMgMS4yMDMtMi43OXMxLjkxLTEuMDE1IDMuMzI1LTEuMDE1Yy42OTUgMCAxLjM1OC4wODIgMS45ODkuMjQ3LjYzMS4xNjUgMS4yOTEuMzk2IDEuOTguNjk1bC0uOTE1IDIuMjA0Yy0uNzEzLS4yOTItMS4zMDMtLjQ5Ny0xLjc3LS42MTNhNS42OSA1LjY5IDAgMDAtMS4zNzYtLjE3NGMtLjUzNyAwLS45NDguMTI1LTEuMjM1LjM3NS0uMjg3LjI1LS40My41NzYtLjQzLjk3OSAwIC4yNS4wNTguNDY4LjE3NC42NTQuMTE2LjE4Ni4zLjM2Ni41NTMuNTQuMjUzLjE3NC44NTIuNDg2IDEuNzk3LjkzOCAxLjI1LjU5OCAyLjEwNyAxLjE5NyAyLjU3IDEuNzk3cy42OTQgMS4zMzQuNjk0IDIuMjA2em03LjU4MyAzLjcxM2gtMi44MzV2LTExLjAxMmgtMy42MzF2LTIuMzZoMTAuMDk3djIuMzZoLTMuNjMxdjExLjAxMnptOC41MjQtNS4xMzF2NS4xMzFoLTIuODM1di0xMy4zNzJoMy44OTZjMS44MTcgMCAzLjE2MS4zMzEgNC4wMzMuOTkyLjg3Mi42NjIgMS4zMDggMS42NjcgMS4zMDggMy4wMTQgMCAuNzg3LS4yMTYgMS40ODYtLjY0OSAyLjA5OXMtMS4wNDYgMS4wOTMtMS44MzggMS40NGMyLjAxMiAzLjAwNiAzLjMyMyA0Ljk0OCAzLjkzMyA1LjgyNkg5MS40OGwtMy4xOTItNS4xMzFoLTEuNTF6bTAtMi4zMDVoLjkxNWMuODk2IDAgMS41NTgtLjE0OSAxLjk4NS0uNDQ4cy42NC0uNzY5LjY0LTEuNDA5YzAtLjYzNC0uMjE4LTEuMDg1LS42NTQtMS4zNTQtLjQzNi0uMjY4LTEuMTExLS40MDItMi4wMjYtLjQwMmgtLjg2djMuNjEzem0xNy43MTYgNy40MzZsLS45Ny0zLjE4M2gtNC44NzVsLS45NyAzLjE4M2gtMy4wNTVsNC43MTktMTMuNDI2aDMuNDY2bDQuNzM4IDEzLjQyNmgtMy4wNTN6bS0xLjY0Ny01LjU2MWExMDI3Ljg0IDEwMjcuODQgMCAwMS0xLjUxNC00Ljg5MyAxMy44NjIgMTMuODYyIDAgMDEtLjI0Mi0uODk2Yy0uMjAxLjc4LS43NzcgMi43MS0xLjcyOSA1Ljc4OWgzLjQ4NXptMTUuNjIyLTMuNjRjMCAxLjQzOS0uNDUgMi41NC0xLjM0OSAzLjMwMS0uODk5Ljc2My0yLjE3OCAxLjE0NC0zLjgzNyAxLjE0NGgtMS4yMTZ2NC43NTZoLTIuODM1di0xMy4zNzJoNC4yNzFjMS42MjIgMCAyLjg1NS4zNDkgMy43IDEuMDQ3Ljg0NC42OTkgMS4yNjYgMS43NCAxLjI2NiAzLjEyNHptLTYuNDAyIDIuMTIySDExM2MuODcyIDAgMS41MjQtLjE3MiAxLjk1Ny0uNTE3LjQzMy0uMzQ1LjY0OS0uODQ2LjY0OS0xLjUwNCAwLS42NjUtLjE4Mi0xLjE1Ni0uNTQ0LTEuNDczLS4zNjMtLjMxNy0uOTMyLS40NzYtMS43MDYtLjQ3NmgtMS4yOXYzLjk3em0tMzguMTE2LTYyLjEyYy0xLjk4My0uNjUzLTQuODM4LS43NTktOC41NjUtLjc1OUg1MnYyMGgxNC40MjRjMi41MDIgMCA0LjI1OS0uMjQ5IDUuMjcxLS40MzcgMS43ODMtLjMxOCAzLjI3NC0uOTMgNC40NzItMS42NzYgMS4xOTgtLjc0NCAyLjE4My0xLjg2OSAyLjk1NS0zLjI5My43NzEtMS40MjQgMS4xNTgtMy4wODcgMS4xNTgtNC45NTEgMC0yLjE4NC0uNTU5LTMuOTgtMS42NzctNS41OS0xLjExNy0xLjYxMS0yLjY2OC0yLjY0Mi00LjY1Mi0zLjI5NHptLTIuMDU2LTguNjEyYzEuOTctLjU4NiAzLjQ1NS0xLjY0NiA0LjQ1Mi0zLjAwMy45OTktMS4zNTcgMS40OTgtMy4xMDMgMS40OTgtNS4xNTQgMC0xLjk0My0uNDY2LTMuNjc1LTEuMzk4LTUuMTU0LS45MzItMS40NzgtMi4yNjMtMi40ODEtMy45OTItMy4wMjctMS43MzItLjU0NC00LjctLjgwOS04LjkwNi0uODA5SDUydjE4aDEyLjUwN2MzLjQzNSAwIDUuODk3LS4zOTkgNy4zODgtLjg1M3pNMTE3IDE2LjEyNkMxMTcgOC4zMjQgMTEwLjY3NSAyIDEwMi44NzMgMkgyNS4xMjdDMTcuMzI1IDIgMTEgOC4zMjQgMTEgMTYuMTI2djc3Ljc0OEMxMSAxMDEuNjc2IDE3LjMyNSAxMDggMjUuMTI3IDEwOGg3Ny43NDZjNy44MDIgMCAxNC4xMjctNi4zMjQgMTQuMTI3LTE0LjEyNlYxNi4xMjZ6TTg2LjU3IDczLjI3Yy0xLjE1NyAyLjM1Ni0yLjU4OSA0LjE3My00LjI5MiA1LjQ1MS0xLjcwNCAxLjI3Ny0zLjg0MSAyLjQ0Ni02LjQxIDMuMDk4QTM4LjAyMiAzOC4wMjIgMCAwMTY2LjQyNCA4M0g0NFYyNGgyMi4wNjVjNC40NzMgMCA4LjA1OS42MiAxMC43NjEgMS44MDQgMi43MDMgMS4xODUgNC44MTggMy4wMjEgNi4zNTEgNS40ODMgMS41MyAyLjQ2MyAyLjI5NiA1LjA0NiAyLjI5NiA3LjczNSAwIDIuNTAyLS42OCA0Ljg2MS0yLjAzNiA3LjA3MS0xLjM1OCAyLjIxLTMuNDA4IDMuOTk1LTYuMTUgNS4zNTIgMy41NCAxLjAzOCA2LjI2MyAyLjgxMSA4LjE2NiA1LjMxMyAxLjkwMyAyLjUwMyAyLjg1NSA1LjQ1OCAyLjg1NSA4Ljg2Ni0uMDAxIDIuNzQyLS41NzkgNS4yOTEtMS43MzggNy42NDZ6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2pxdWVyeScgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjMDg2OEFDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNOS42MjUgMzIuMTgxQy0xLjQwNCA0OC4wMzItLjAzMSA2OC42NTcgOC4zOTQgODUuNTAxYy4yLjQwNC40MS44MDEuNjE3IDEuMTk4bC4zOTQuNzU5LjI0Ni40MzcuNDM5Ljc4NmMuMjYyLjQ2MS41My45Mi44MDQgMS4zNzlsLjQ1OS43NTZjLjMwNC40OTEuNjE1Ljk3Ni45MzMgMS40NmwuMzk4LjYxNGMuNDM5LjY1NS44ODggMS4zMDkgMS4zNTIgMS45NTFsLjAzOS4wNS4yMjguMzA4Yy40MDEuNTUzLjgxNCAxLjA5OSAxLjIzMiAxLjYzOWwuNDY0LjU5Yy4zNzMuNDY5Ljc1Mi45MzUgMS4xMzggMS4zOTlsLjQzNS41MmE3NS4yNyA3NS4yNyAwIDAwMS41ODYgMS44MTJsLjAzMy4wMzMuMDYxLjA2OGE4MC40NCA4MC40NCAwIDAwMS42MTIgMS42OTlsLjUxNy41MjFjLjQyMy40MjYuODUzLjg0NSAxLjI4NyAxLjI2MmwuNTI3LjVjLjU4LjU0NyAxLjE2NiAxLjA4MyAxLjc2NCAxLjYwN2wuMDI4LjAyMi4zMDcuMjYyYy41MjcuNDU2IDEuMDYzLjkwOSAxLjYwMyAxLjM1M2wuNjY0LjUyOWMuNDQxLjM1NC44ODcuNzAyIDEuMzM2IDEuMDQ0bC43MTQuNTQzYy40OTYuMzY1Ljk5NS43MjQgMS40OTkgMS4wNzVsLjU0Ni4zODcuMTUuMTA3Yy40NzguMzI5Ljk2Ny42NDYgMS40NTYuOTYzbC42My40MmMuNzUuNDc0IDEuNTEuOTQzIDIuMjc5IDEuMzk2bC42My4zNTVjLjU2NS4zMjYgMS4xMzQuNjQ2IDEuNzEuOTU5LjMxMi4xNjguNjMyLjMyNy45NDYuNDg4LjQwNy4yMTMuODExLjQyOSAxLjIyNS42MzZsLjI4My4xMzcuNTAxLjI0MmMuNjQxLjMwNiAxLjI4Ny42MDcgMS45NC44OTdsLjQxLjE4NGE2Ni45MiA2Ni45MiAwIDAwMi4yNjMuOTQxbC41NTEuMjE3Yy43MDQuMjcxIDEuNDE4LjUzOSAyLjEzNS43OTFsLjI2OC4wOTNjLjc4Ny4yNzUgMS41ODEuNTMgMi4zODEuNzc5bC41NzUuMTcyYy44MTQuMjQ1IDEuNjE5LjUzOCAyLjQ1OC42OTMgNTMuMzM5IDkuNzI3IDY4LjgzMy0zMi4wNTMgNjguODMzLTMyLjA1My0xMy4wMTMgMTYuOTUzLTM2LjExMSAyMS40MjUtNTcuOTk2IDE2LjQ0Ni0uODI5LS4xODctMS42MzMtLjQ0Ni0yLjQ0Mi0uNjg1bC0uNjA5LS4xODVhNzIuNDk4IDcyLjQ5OCAwIDAxLTIuMzUyLS43NjVsLS4zMjMtLjExN2E3Mi4yNDUgNzIuMjQ1IDAgMDEtMi4wNzQtLjc2OWwtLjU4Mi0uMjI5Yy0uNzUyLS4yOTctMS41LS42MDctMi4yMzktLjkzMWwtLjQ0Ny0uMTk4YTkyLjg1NyA5Mi44NTcgMCAwMS0xLjg4OS0uODc5bC0uNTQ2LS4yNjJjLS40OTEtLjIzOS0uOTc3LS40OTMtMS40NjEtLjc0My0uMzI0LS4xNzEtLjY1NC0uMzMyLS45NzUtLjUxYTU4LjU5MSA1OC41OTEgMCAwMS0xLjc1MS0uOTgybC0uNTkxLS4zM2E4MS4yMjEgODEuMjIxIDAgMDEtMi4yOC0xLjM5N2wtLjYxNS0uNDFhNTkuMjgzIDU5LjI4MyAwIDAxLTEuNjIzLTEuMDc5bC0uNTIyLS4zNjdhODkuMjg3IDg5LjI4NyAwIDAxLTEuNTM0LTEuMTA5bC0uNjc5LS41MTRhNjQuNDczIDY0LjQ3MyAwIDAxLTEuMzg0LTEuMDgybC0uNjE3LS40OTVhODIuNjkzIDgyLjY5MyAwIDAxLTEuNzI0LTEuNDUzbC0uMTg5LS4xNTlhODMuNDY2IDgzLjQ2NiAwIDAxLTEuODEyLTEuNjQ3bC0uNTExLS40OTFjLS40NDEtLjQyLS44NzUtLjg0My0xLjMwMi0xLjI3N2wtLjUxLS41MDlhNzAuNTQxIDcwLjU0MSAwIDAxLTEuNTk4LTEuNjlsLS4wNzktLjA4NGE2Ny4zOSA2Ny4zOSAwIDAxLTEuNjIxLTEuODQ0bC0uNDI0LS41MDRhNzAuNjAyIDcwLjYwMiAwIDAxLTEuMTY3LTEuNDQybC0uNDI3LS41MzJhNzguNDA2IDc4LjQwNiAwIDAxLTEuMzQ3LTEuNzk0Yy0xMi4xNS0xNi41NzQtMTYuNTE2LTM5LjQzMi02LjgwNS01OC4yMDRtMjUuNjI5LTIuNDM0Yy03Ljk3NyAxMS40NzgtNy41NDMgMjYuODQ0LTEuMzIxIDM4Ljk4M2E1MC41ODEgNTAuNTgxIDAgMDAzLjUyOCA1Ljg4OWMxLjE5NSAxLjcxMyAyLjUyIDMuNzUxIDQuMTA2IDUuMTI3YTQ4LjExMSA0OC4xMTEgMCAwMDEuNzkgMS44NThsLjQ3Mi40NjVhNTEuNjkgNTEuNjkgMCAwMDEuODI4IDEuNjk4bC4wNzQuMDY0LjAxOC4wMThhNTUuMjY4IDU1LjI2OCAwIDAwMi4xMzUgMS43NjdsLjQ4NS4zNzhhNTQuMDggNTQuMDggMCAwMDIuMjMzIDEuNjMxbC4wNjUuMDQ5Yy4zMzYuMjMyLjY3OC40NDggMS4wMTkuNjcybC40ODMuMzE5Yy41NDQuMzQ5IDEuMDk1LjY4OSAxLjY1NSAxLjAxNWwuMjM1LjEzNmMuNDgzLjI3OC45NzIuNTUyIDEuNDYzLjgxOGwuNTIxLjI3MWMuMzM5LjE3Ny42NzguMzU4IDEuMDIzLjUzbC4xNTUuMDdjLjcwMy4zNDYgMS40MTIuNjggMi4xMzYuOTk1bC40NzIuMTk0Yy41NzkuMjQ2IDEuMTY0LjQ4NiAxLjc1LjcxbC43NS4yNzVjLjUzMy4xOTggMS4wNjguMzc4IDEuNjA3LjU1OWwuNzI3LjIzM2MuNzY3LjIzOCAxLjUyNS41MzkgMi4zMjQuNjcyIDQxLjE4MyA2LjgyMyA1MC42OTEtMjQuODg2IDUwLjY5MS0yNC44ODYtOC41NyAxMi4zNDMtMjUuMTY4IDE4LjIzMy00Mi44NzkgMTMuNjM1YTUwLjM3NiA1MC4zNzYgMCAwMS0yLjMzMy0uNjc0bC0uNzAxLS4yMjdhNDUuNDIzIDQ1LjQyMyAwIDAxLTEuNjMxLS41NjJsLS43MzYtLjI3NGE1Ni40MTggNTYuNDE4IDAgMDEtMS43NTYtLjcwOGwtLjQ3My0uMmE0Ny43MjggNDcuNzI4IDAgMDEtMi4xNDgtLjk5OWMtLjM2My0uMTc3LS43Mi0uMzY0LTEuMDc4LS41NDhsLS42MjItLjMyYTQ0LjUwMiA0NC41MDIgMCAwMS0xLjM2My0uNzdsLS4zMjYtLjE4NWE0Ny44NDQgNDcuODQ0IDAgMDEtMS42NTEtMS4wMDhsLS40OTgtLjMzMmE2MS43NTkgNjEuNzU5IDAgMDEtMS4wNjktLjcwNyA1Ny40NTYgNTcuNDU2IDAgMDEtMi4yMjYtMS42MjhsLS41MDEtLjM5NWMtNy43NTItNi4xMi0xMy44OTgtMTQuNDg2LTE2LjgxOS0yMy45NzEtMy4wNjItOS44MzYtMi40MDItMjAuODc4IDIuOTAzLTI5Ljg0bTIyLjI3OC0uNzc1Yy00LjcwMiA2LjkyLTUuMTY0IDE1LjUxNC0xLjkwMSAyMy4xNTYgMy40NDEgOC4xMTMgMTAuNDkxIDE0LjQ3NiAxOC43MiAxNy40OTUuMzM5LjEyNS42NzkuMjM3IDEuMDIyLjM1NGwuNDUxLjE0M2MuNDg1LjE1Mi45NjYuMzI5IDEuNDY3LjQyNCAyMi43NCA0LjM5NCAyOC45MDgtMTEuNjY5IDMwLjU0OS0xNC4wMzQtNS40MDIgNy43NzktMTQuNDgyIDkuNjQ2LTI1LjYyMyA2Ljk0Mi0uODgtLjIxMy0xLjg0Ny0uNTMxLTIuNjk1LS44MzJhMzMuMjQyIDMzLjI0MiAwIDAxLTMuMjAxLTEuMzI5IDMzLjIxNSAzMy4yMTUgMCAwMS01LjYxMi0zLjQyNGMtOS45NjktNy41NjUtMTYuMTYyLTIxLjk5NC05LjY1Ny0zMy43NDUnPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdyZWFjdCcgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPScjNjFEQUZCJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0nNjQnIGN5PSc2NCcgcj0nMTEuNCc+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMDcuMyA0NS4yYy0yLjItLjgtNC41LTEuNi02LjktMi4zLjYtMi40IDEuMS00LjggMS41LTcuMSAyLjEtMTMuMi0uMi0yMi41LTYuNi0yNi4xLTEuOS0xLjEtNC0xLjYtNi40LTEuNi03IDAtMTUuOSA1LjItMjQuOSAxMy45LTktOC43LTE3LjktMTMuOS0yNC45LTEzLjktMi40IDAtNC41LjUtNi40IDEuNi02LjQgMy43LTguNyAxMy02LjYgMjYuMS40IDIuMy45IDQuNyAxLjUgNy4xLTIuNC43LTQuNyAxLjQtNi45IDIuM0M4LjIgNTAgMS40IDU2LjYgMS40IDY0czYuOSAxNCAxOS4zIDE4LjhjMi4yLjggNC41IDEuNiA2LjkgMi4zLS42IDIuNC0xLjEgNC44LTEuNSA3LjEtMi4xIDEzLjIuMiAyMi41IDYuNiAyNi4xIDEuOSAxLjEgNCAxLjYgNi40IDEuNiA3LjEgMCAxNi01LjIgMjQuOS0xMy45IDkgOC43IDE3LjkgMTMuOSAyNC45IDEzLjkgMi40IDAgNC41LS41IDYuNC0xLjYgNi40LTMuNyA4LjctMTMgNi42LTI2LjEtLjQtMi4zLS45LTQuNy0xLjUtNy4xIDIuNC0uNyA0LjctMS40IDYuOS0yLjMgMTIuNS00LjggMTkuMy0xMS40IDE5LjMtMTguOHMtNi44LTE0LTE5LjMtMTguOHpNOTIuNSAxNC43YzQuMSAyLjQgNS41IDkuOCAzLjggMjAuMy0uMyAyLjEtLjggNC4zLTEuNCA2LjYtNS4yLTEuMi0xMC43LTItMTYuNS0yLjUtMy40LTQuOC02LjktOS4xLTEwLjQtMTMgNy40LTcuMyAxNC45LTEyLjMgMjEtMTIuMyAxLjMgMCAyLjUuMyAzLjUuOXpNODEuMyA3NGMtMS44IDMuMi0zLjkgNi40LTYuMSA5LjYtMy43LjMtNy40LjQtMTEuMi40LTMuOSAwLTcuNi0uMS0xMS4yLS40LTIuMi0zLjItNC4yLTYuNC02LTkuNi0xLjktMy4zLTMuNy02LjctNS4zLTEwIDEuNi0zLjMgMy40LTYuNyA1LjMtMTAgMS44LTMuMiAzLjktNi40IDYuMS05LjYgMy43LS4zIDcuNC0uNCAxMS4yLS40IDMuOSAwIDcuNi4xIDExLjIuNCAyLjIgMy4yIDQuMiA2LjQgNiA5LjYgMS45IDMuMyAzLjcgNi43IDUuMyAxMC0xLjcgMy4zLTMuNCA2LjYtNS4zIDEwem04LjMtMy4zYzEuNSAzLjUgMi43IDYuOSAzLjggMTAuMy0zLjQuOC03IDEuNC0xMC44IDEuOSAxLjItMS45IDIuNS0zLjkgMy42LTYgMS4yLTIuMSAyLjMtNC4yIDMuNC02LjJ6TTY0IDk3LjhjLTIuNC0yLjYtNC43LTUuNC02LjktOC4zIDIuMy4xIDQuNi4yIDYuOS4yIDIuMyAwIDQuNi0uMSA2LjktLjItMi4yIDIuOS00LjUgNS43LTYuOSA4LjN6bS0xOC42LTE1Yy0zLjgtLjUtNy40LTEuMS0xMC44LTEuOSAxLjEtMy4zIDIuMy02LjggMy44LTEwLjMgMS4xIDIgMi4yIDQuMSAzLjQgNi4xIDEuMiAyLjIgMi40IDQuMSAzLjYgNi4xem0tNy0yNS41Yy0xLjUtMy41LTIuNy02LjktMy44LTEwLjMgMy40LS44IDctMS40IDEwLjgtMS45LTEuMiAxLjktMi41IDMuOS0zLjYgNi0xLjIgMi4xLTIuMyA0LjItMy40IDYuMnpNNjQgMzAuMmMyLjQgMi42IDQuNyA1LjQgNi45IDguMy0yLjMtLjEtNC42LS4yLTYuOS0uMi0yLjMgMC00LjYuMS02LjkuMiAyLjItMi45IDQuNS01LjcgNi45LTguM3ptMjIuMiAyMWwtMy42LTZjMy44LjUgNy40IDEuMSAxMC44IDEuOS0xLjEgMy4zLTIuMyA2LjgtMy44IDEwLjMtMS4xLTIuMS0yLjItNC4yLTMuNC02LjJ6TTMxLjcgMzVjLTEuNy0xMC41LS4zLTE3LjkgMy44LTIwLjMgMS0uNiAyLjItLjkgMy41LS45IDYgMCAxMy41IDQuOSAyMSAxMi4zLTMuNSAzLjgtNyA4LjItMTAuNCAxMy01LjguNS0xMS4zIDEuNC0xNi41IDIuNS0uNi0yLjMtMS00LjUtMS40LTYuNnpNNyA2NGMwLTQuNyA1LjctOS43IDE1LjctMTMuNCAyLS44IDQuMi0xLjUgNi40LTIuMSAxLjYgNSAzLjYgMTAuMyA2IDE1LjYtMi40IDUuMy00LjUgMTAuNS02IDE1LjVDMTUuMyA3NS42IDcgNjkuNiA3IDY0em0yOC41IDQ5LjNjLTQuMS0yLjQtNS41LTkuOC0zLjgtMjAuMy4zLTIuMS44LTQuMyAxLjQtNi42IDUuMiAxLjIgMTAuNyAyIDE2LjUgMi41IDMuNCA0LjggNi45IDkuMSAxMC40IDEzLTcuNCA3LjMtMTQuOSAxMi4zLTIxIDEyLjMtMS4zIDAtMi41LS4zLTMuNS0uOXpNOTYuMyA5M2MxLjcgMTAuNS4zIDE3LjktMy44IDIwLjMtMSAuNi0yLjIuOS0zLjUuOS02IDAtMTMuNS00LjktMjEtMTIuMyAzLjUtMy44IDctOC4yIDEwLjQtMTMgNS44LS41IDExLjMtMS40IDE2LjUtMi41LjYgMi4zIDEgNC41IDEuNCA2LjZ6bTktMTUuNmMtMiAuOC00LjIgMS41LTYuNCAyLjEtMS42LTUtMy42LTEwLjMtNi0xNS42IDIuNC01LjMgNC41LTEwLjUgNi0xNS41IDEzLjggNCAyMi4xIDEwIDIyLjEgMTUuNiAwIDQuNy01LjggOS43LTE1LjcgMTMuNHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J25vZGUnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzgzQ0QyOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTExMi43NzEgMzAuMzM0TDY4LjY3NCA0LjcyOWMtMi43ODEtMS41ODQtNi40MDItMS41ODQtOS4yMDUgMEwxNC45MDEgMzAuMzM0QzEyLjAzMSAzMS45ODUgMTAgMzUuMDg4IDEwIDM4LjQwN3Y1MS4xNDJjMCAzLjMxOSAyLjA4NCA2LjQyMyA0Ljk1NCA4LjA4M2wxMS43NzUgNi42ODhjNS42MjggMi43NzIgNy42MTcgMi43NzIgMTAuMTc4IDIuNzcyIDguMzMzIDAgMTMuMDkzLTUuMDM5IDEzLjA5My0xMy44Mjh2LTUwLjQ5YzAtLjcxMy0uMzcxLTEuNzc0LTEuMDcxLTEuNzc0aC01LjYyM0M0Mi41OTQgNDEgNDEgNDIuMDYxIDQxIDQyLjc3M3Y1MC40OWMwIDMuODk2LTMuNTI0IDcuNzczLTEwLjExIDQuNDhMMTguNzIzIDkwLjczYy0uNDI0LS4yMy0uNzIzLS42OTMtLjcyMy0xLjE4MVYzOC40MDdjMC0uNDgyLjU1NS0uOTY2Ljk4Mi0xLjIxM2w0NC40MjQtMjUuNTYxYy40MTUtLjIzNSAxLjAyNS0uMjM1IDEuNDM5IDBsNDMuODgyIDI1LjU1NWMuNDIuMjUzLjI3Mi43MjIuMjcyIDEuMjE5djUxLjE0MmMwIC40ODguMTgzLjk2My0uMjMyIDEuMTk4bC00NC4wODYgMjUuNTc2Yy0uMzc4LjIyNy0uODQ3LjIyNy0xLjI2MSAwbC0xMS4zMDctNi43NDljLS4zNDEtLjE5OC0uNzQ2LS4yNjktMS4wNzMtLjA4Ni0zLjE0NiAxLjc4My0zLjcyNiAyLjAyLTYuNjc3IDMuMDQzLS43MjYuMjUzLTEuNzk3LjY5Mi40MSAxLjkyOWwxNC43OTggOC43NTRhOS4yOTQgOS4yOTQgMCAwMDQuNjQ3IDEuMjQ2YzEuNjQyIDAgMy4yNS0uNDI2IDQuNjY3LTEuMjQ2bDQzLjg4NS0yNS41ODJjMi44Ny0xLjY3MiA0LjIzLTQuNzY0IDQuMjMtOC4wODNWMzguNDA3YzAtMy4zMTktMS4zNi02LjQxNC00LjIyOS04LjA3M3pNNzcuOTEgODEuNDQ1Yy0xMS43MjYgMC0xNC4zMDktMy4yMzUtMTUuMTctOS4wNjYtLjEtLjYyOC0uNjMzLTEuMzc5LTEuMjcyLTEuMzc5aC01LjczMWMtLjcwOSAwLTEuMjc5Ljg2LTEuMjc5IDEuNTY2IDAgNy40NjYgNC4wNTkgMTYuNTEyIDIzLjQ1MyAxNi41MTIgMTQuMDM5IDAgMjIuMDg4LTUuNDU1IDIyLjA4OC0xNS4xMDkgMC05LjU3Mi02LjQ2Ny0xMi4wODQtMjAuMDgyLTEzLjg4Ni0xMy43NjItMS44MTktMTUuMTYtMi43MzgtMTUuMTYtNS45NjIgMC0yLjY1OCAxLjE4NC02LjIwMyAxMS4zNzQtNi4yMDMgOS4xMDUgMCAxMi40NjEgMS45NTQgMTMuODQyIDguMDkxLjExOC41NzcuNjQ1Ljk5MSAxLjI0Ljk5MWg1Ljc1NGMuMzU0IDAgLjY5Mi0uMTQzLjk0LS4zOTYuMjQtLjI3Mi4zNjctLjYxMy4zMzUtLjk3OS0uODkxLTEwLjU2OC03LjkxMi0xNS40OTMtMjIuMTEyLTE1LjQ5My0xMi42MzEgMC0yMC4xNjYgNS4zMzQtMjAuMTY2IDE0LjI3NSAwIDkuNjk4IDcuNDk3IDEyLjM3OCAxOS42MjIgMTMuNTc3IDE0LjUwNSAxLjQyMiAxNS42MzMgMy41NDIgMTUuNjMzIDYuMzk1IDAgNC45NTUtMy45NzggNy4wNjYtMTMuMzA5IDcuMDY2eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2ZpcmViYXNlJyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNmNTgyMjAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00yNy4zNSA4MC41MmwxMC42OC02OC40NGMuMzctMi4zMyAzLjUtMi44OSA0LjYtLjhsMTEuNDggMjEuNDgtMjYuNzYgNDcuNzZ6bTc1Ljk0IDE2LjYzTDkzLjEgMzQuMTFjLS4zMS0xLjk2LTIuNzYtMi43Ni00LjE3LTEuMzVMMjQuNzEgOTcuMTVsMzUuNTQgMTkuOTVhNy40NDcgNy40NDcgMCAwMDcuMTggMGwzNS44Ni0xOS45NXptLTI4Ljg1LTU1TDY2LjIxIDI2LjVjLS45Mi0xLjc4LTMuNDQtMS43OC00LjM2IDBMMjUuNyA5MC45NWw0OC43NC00OC44eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGlkPSdwcm9qZXRvcycgY2xhc3NOYW1lPSdjLXByb2plY3RzJz5cclxuICAgICAgICAgICAgICAgICAgPGgyPlBST0pFVE9TPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtbmV4dC1wcmV2LXByb2plY3RzJz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0UHJldlByb2plY3RzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3RzLTEgYy1ncm91cC1idXR0b24tcHJvamVjdHMgYWN0aXZlJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0UHJldlByb2plY3RzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3RzLTIgYy1ncm91cC1idXR0b24tcHJvamVjdHMnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYm94JyBpZD0nanMtYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL2RldmZpbmFuY2UucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRldiRmaW5hbmNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldiRmaW5hbmNlIMOpIHVtIHByb2pldG8gZmVpdG8gZHVyYW50ZSB1bWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyYXRvbmEgZGEgUm9ja2V0c2VhdCwgdXRpbGl6YW5kbyBIdG1sLCBDc3MgZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKYXZhc2NyaXB0IGUgc3VhIGZ1bsOnw6NvIMOpIGFqdWRhciBuYSBvcmdhbml6YcOnw6NvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlIGdhc3RvcyBtZW5zYWlzLCB0dWRvIHV0aWxpemFuZG8gTG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEgbsOjbyBwZXJkZXIgb3MgZGFkb3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly90aHlhZ29hcmF1am9tLmdpdGh1Yi5pby9EZXYtZmluYW5jZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTSVRFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9EZXYtZmluYW5jZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYnRuLWdpdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdJVEhVQlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0IGJnLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9mYW5jeS1ib3JkZXItcmFkaXVzLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GYW5jeSBCb3JkZXIgUmFkaXVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbmN5IEJvcmRlciByYWRpdXMgw6kgdW0gcHJvamV0byBiYXNlYWRvIGVtIHVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyBkZXNhZmlvcyBkbyByZXBvc2l0w7NyaW8gQXBwIElkZWFzIG5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpdGh1Yi4gTmVsZSB0ZW1vcyBxdWUgY3JpYXIgdW1hIGludGVyZmFjZSBxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyB1c3XDoXJpbyBwb3NzYSBtb2RpZmljYXIgbyBib3JkZXItcmFkaXVzIGRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRvIGEgdm9udGFkZSBlIGNvbnNlZ3VpciBjb3BpYS1sbyBwcm9udG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSB1c2FyIG5vIHNldSBwcm9qZXRvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vUHJhdGljYW5kby10ZW1wbGF0ZXMvaW5pY2lhbnRlL0JvcmRlci1yYWRpdXMtUHJldmlld2VyL2luZGV4Lmh0bWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vUHJhdGljYW5kby10ZW1wbGF0ZXMvdHJlZS9tYWluL2luaWNpYW50ZS9Cb3JkZXItcmFkaXVzLVByZXZpZXdlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvZmFxLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GQVEgVGVtcGxhdGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0ZSBwcm9qZXRvIMOpIHVtIHRlbXBsYXRlIGLDoXNpY28gZGUgdW0gRkFRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VhZG8gZG8gc2l0ZSBGcm9udGVuZE1lbnRvciwgZGVsZSB0ZW1vcyBxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjcmlhciBvIGRlc2lnbiBvIG1haXMgZmllbG1lbnRlIHBvc3PDrXZlbCBhb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90w7N0aXBvIHJlY2ViaWRvIGUgcXVlIGVzdGVqYSByZXNwb25zaXZvIHBhcmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpb3JpYSBkb3MgZGlzcG9zaXRpdm9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vUHJhdGljYW5kby10ZW1wbGF0ZXMvaW5pY2lhbnRlL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluL2luZGV4Lmh0bWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vUHJhdGljYW5kby10ZW1wbGF0ZXMvdHJlZS9tYWluL2luaWNpYW50ZS9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvc3BsaXRlci5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U3BsaXR0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2xpdHRlciDDqSB1bSBhcGxpY2F0aXZvIHBhcmEgY2FsY3VsbyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb3JqZXRhLCBjb20gbyBjYWxjdWxvIGVtIHNpLCB1bWEgw6FyZWEgcGFyYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxvcmVzIGRhIGdvcmpldGEgZXNjb2xoaWRhIHBlbG8gdXN1w6FyaW8gZSB1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3TDo28gcGFyYSB6ZXJhciB0dWRvLCBvdXRybyBwcm9qZXRvIGJhc2VhZG8gZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSBGcm9udGVuZE1lbnRvci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL1ByYXRpY2FuZG8tdGVtcGxhdGVzL2luaWNpYW50ZS90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi9pbmRleC5odG1sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1zaXRlJz5TSVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL1ByYXRpY2FuZG8tdGVtcGxhdGVzL3RyZWUvbWFpbi9pbmljaWFudGUvdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCBiZy0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvd2lsZGJlYXN0LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XaWxkYmVhc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lsZGJlYXN0IMOpIHVtIHRlbXBsYXRlIGZlaXRvIHBhcmEgYSBwcsOhdGljYSBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkIGxheW91dCwgdXRpbGl6YW5kbyB0b2RvcyBvcyBzZXVzIGNvbmNlaXRvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhIGNyaWFyIHVtIGxheW91dCByZXNwb25zaXZvIHBhcmEgdG9kb3Mgb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb3MgZGUgZGlzcG9zaXRpdm9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vV2lsZGJlYXN0Lyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tc2l0ZSc+U0lURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9XaWxkYmVhc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3QxLmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GbGV4Qm94PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZsZXhib3ggw6kgdW0gdGVtcGxhdGUgZmVpdG8gcGFyYSB0cmluYXIgZmxleGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21vIG8gcHLDs3ByaW8gbm9tZSBkaXosIGZlaXRvIGNvbSB0b2RvcyBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXVzIHByaW5jw61waW9zIGRlIGZsZXhpYmlsaWRhZGUgcGFyYSBjcmlhciB1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQgcmVzcG9uc2l2byBwYXJhIHRvZG9zIG9zIHRpcG9zIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3Bvc2l0aXZvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL0ZsZXhCbG9nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tc2l0ZSc+U0lURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9GbGV4QmxvZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdjLWFib3V0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWFib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtZGV0YWlscy0xJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL2RldGFpbHMuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYWJvdXQtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TT0JSRSBNSU08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgU291IHVtIHByb2dyYW1hZG9yIGVtIGJ1c2NhIGRlIHVtYSBvcG9ydHVuaWRhZGUgcGFyYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyYXIgbm8gbWVyY2Fkby4gSsOhIHRlbmhvIGV4cGVyacOqbmNpYSBuYSBjcmlhw6fDo28gZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZXMgcmVzcG9uc2l2b3MgZSBlc3RvdSBzZW1wcmUgYnVzY2FuZG8gYXByZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbm92YXMgZmVycmFtZW50YXMgcGFyYSBtZWxob3JhciBvIG1ldSB0cmFiYWxobywgY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwKyBob3JhcyBlbSBjdXJzb3MgZSAxMDArIGhvcmFzIGVtIHByw6F0aWNhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBBdHVhbG1lbnRlIGVzdG91IGZvY2FuZG8gbWV1cyBlc3R1ZG9zIGVtIGJhY2stZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbSBOb2RlIGUgUmVhY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvY8OqIHBvZGUgZW5jb250cmFyIG1haXMgc29icmUgbWV1cyBwcm9qZXRvcyBlIG1pbmhhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGluYSBkZSBlc3R1ZG9zIGVtIG1pbmhhIGNvbnRhIG5vICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXRodWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLi9hc3NldHMvQ1YucGRmJyBkb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5DVVJSw41DVUxPPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYy1lbWFpbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoeWFnb2FyYXVqb21vdHRhQGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjb3B5VGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2ltYWdlcy9jb3B5LWljb24uc3ZnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2MtY29weSc+ZS1tYWlsIGNvcGlhZG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKDI3KSA5IDk5NzUtNTY4NFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTI3OTk5NzU1Njg0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2ltYWdlcy93aGF0cy1pY29uLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtZGV0YWlscy0yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL2RldGFpbHMuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weVRleHQoKSB7XHJcbiAgIGxldCB0ZXh0ID0gXCJ0aHlhZ29hcmF1am9tb3R0YUBnbWFpbC5jb21cIjtcclxuICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XHJcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYy1jb3B5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cclxuICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYy1jb3B5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlRW50ZXIoKSB7XHJcbiAgIG1vdXNlZW50ZXIgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZU91dCgpIHtcclxuICAgbW91c2VlbnRlciA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0UHJldlByb2plY3RzMSgpIHtcclxuICAgbmV4dFByZXZQcm9qZWN0cygxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFByZXZQcm9qZWN0czIoKSB7XHJcbiAgIG5leHRQcmV2UHJvamVjdHMoMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQcmV2UHJvamVjdHMocHJvamVjdCkge1xyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtZ3JvdXAtYnV0dG9uLXByb2plY3RzXCIpLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICB9KTtcclxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLWdyb3VwLXByb2plY3RzXCIpLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICB9KTtcclxuICAgaWYgKGxhc3RDb250YWluZXIgPCBwcm9qZWN0KSB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKVxyXG4gICAgICAgICAuc2Nyb2xsQnkoOTAwICogKHByb2plY3QgLSBsYXN0Q29udGFpbmVyKSwgMCk7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKVxyXG4gICAgICAgICAuc2Nyb2xsQnkoOTAwICogKHByb2plY3QgLSBsYXN0Q29udGFpbmVyKSwgMCk7XHJcbiAgIH1cclxuICAgbGFzdENvbnRhaW5lciA9IHByb2plY3Q7XHJcblxyXG4gICBpZiAocHJvamVjdCA9PSAxKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYy1wcm9qZWN0cy0xXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgIH0gZWxzZSBpZiAocHJvamVjdCA9PSAyKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYy1wcm9qZWN0cy0yXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkhlYWQiLCJub3RNb2JpbGUiLCJjdXJyZW50UHJvamVjdCIsIm1heFByb2plY3RzIiwibW91c2VlbnRlciIsInByb2plY3QiLCJsYXN0Q29udGFpbmVyIiwiSG9tZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIk51bWJlciIsImxlbmd0aCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VFbnRlciIsIm1vdXNlT3V0Iiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEJ5IiwibmV4dFByZXZQcm9qZWN0czEiLCJuZXh0UHJldlByb2plY3RzMiIsImNvcHlUZXh0IiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJuZXh0UHJldlByb2plY3RzIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=