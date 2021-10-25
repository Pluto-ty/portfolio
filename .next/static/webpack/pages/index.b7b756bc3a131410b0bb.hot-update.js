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
        rel: "icon",
        href: "/images/Logo.svg"
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
                    className: "js",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#F0DB4F",
                      d: "M1.408 1.408h125.184v125.185H1.408z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 34
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#323330",
                      d: "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 34
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "node",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#83CD29",
                      d: "M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "jquery",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#0868AC",
                      d: "M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "firebase",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#f58220",
                      d: "M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("g", {
                      fill: "#11479e",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("circle", {
                        cx: "64",
                        cy: "64",
                        r: "11.4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 122,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
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
                        lineNumber: 127,
                        columnNumber: 37
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
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
            lineNumber: 140,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-next-prev-projects",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects1,
              className: "c-projects-1 c-group-button-projects active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects2,
              className: "c-projects-2 c-group-button-projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-box",
            id: "js-box",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/Next-Level-Week-Heat.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Next Level Week Heat"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Uma aplica\xE7\xE3o de login e autentica\xE7\xE3o com github para o envio e recebimento de mensagem em tempo real."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 28
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Next-Level-Week-Heat",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 31
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/devfinance.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Dev$finance"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Dev$finance \xE9 um projeto feito durante uma maratona da Rocketseat, utilizando Html, Css e Javascript e sua fun\xE7\xE3o \xE9 ajudar na organiza\xE7\xE3o de gastos mensais, tudo utilizando LocalStorage para n\xE3o perder os dados."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
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
                      lineNumber: 197,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
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
                      lineNumber: 204,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/fancy-border-radius.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Fancy Border Radius"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Fancy Border radius \xE9 um projeto baseado em um dos desafios do reposit\xF3rio App Ideas no github. Nele temos que criar uma interface que o usu\xE1rio possa modificar o border-radius do elemento a vontade e conseguir copia-lo pronto para usar no seu projeto."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
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
                      lineNumber: 233,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/Border-radius-Previewer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/faq.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "FAQ Template"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Este projeto \xE9 um template b\xE1sico de um FAQ baseado do site FrontendMentor, dele temos que recriar o design o mais fielmente poss\xEDvel ao prot\xF3tipo recebido e que esteja responsivo para maioria dos dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
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
                      lineNumber: 264,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/faq-accordion-card-main",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/spliter.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Splitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Slitter \xE9 um aplicativo para calculo de gorjeta, com o calculo em si, uma \xE1rea para valores da gorjeta escolhida pelo usu\xE1rio e um bot\xE3o para zerar tudo, outro projeto baseado do site FrontendMentor."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
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
                      lineNumber: 295,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/tip-calculator-app-main",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/wildbeast.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Wildbeast"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Wildbeast \xE9 um template feito para a pr\xE1tica de grid layout, utilizando todos os seus conceitos para criar um layout responsivo para todos os tipos de dispositivos."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
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
                      lineNumber: 325,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Wildbeast",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
              lineNumber: 339,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-about-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: "SOBRE MIM"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "Sou um programador em busca de uma oportunidade para entrar no mercado. J\xE1 tenho experi\xEAncia na cria\xE7\xE3o de sites responsivos e estou sempre buscando aprender novas ferramentas para melhorar o meu trabalho, com 40+ horas em cursos e 100+ horas em pr\xE1tica. Atualmente estou focando meus estudos em back-ending com Node e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: ["Voc\xEA pode encontrar mais sobre meus projetos e minha rotina de estudos em minha conta no \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  target: "_blank",
                  href: "https://github.com/ThyagoAraujoM",
                  children: "Github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 28
                }, this), "."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "./assets/CV.pdf",
                download: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  children: "CURR\xCDCULO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 28
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "c-email",
                children: ["thyagoaraujomotta@gmail.com", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  onClick: copyText,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "./images/copy-icon.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
                    columnNumber: 31
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "c-copy",
                    children: "e-mail copiado"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 369,
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
                    lineNumber: 381,
                    columnNumber: 31
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 28
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 22
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-details-2",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjdiNzU2YmMzYTEzMTQxMGIwYmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHLElBQWhCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsSUFBSUMsV0FBSjtBQUNBLElBQUlDLFVBQVUsR0FBRyxLQUFqQjtBQUNBLElBQUlDLE9BQUo7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7O0FBQ0EsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUNiUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDYk0sSUFBQUEsT0FBTyxHQUFHRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLENBQVY7QUFDQU4sSUFBQUEsV0FBVyxHQUFHTyxNQUFNLENBQUNGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0NFLE1BQXhDLEdBQWlELENBQWxELENBQXBCOztBQUZhLCtDQUdDTixPQUhEO0FBQUE7O0FBQUE7QUFHYiwwREFBdUI7QUFBQSxZQUFkTyxDQUFjO0FBQ3BCQSxRQUFBQSxDQUFDLENBQUNDLGdCQUFGLENBQW1CLFlBQW5CLEVBQWlDLFlBQU07QUFDcENDLFVBQUFBLFVBQVU7QUFDWixTQUZEO0FBSUFGLFFBQUFBLENBQUMsQ0FBQ0MsZ0JBQUYsQ0FBbUIsVUFBbkIsRUFBK0IsWUFBTTtBQUNsQ0UsVUFBQUEsUUFBUTtBQUNWLFNBRkQ7QUFHRjtBQVhZO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYWJDLElBQUFBLFdBQVcsQ0FBQyxZQUFNO0FBQ2YsVUFBSSxDQUFDWixVQUFMLEVBQWlCO0FBQ2QsWUFBSWEsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQzFCLGNBQUloQixjQUFjLElBQUlDLFdBQXRCLEVBQW1DO0FBQ2hDRCxZQUFBQSxjQUFjLEdBQUcsQ0FBakI7QUFDQU0s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QUFDLENBQUNxQixTQUFGLENBQVlDLE1BQVosQ0FBbUIsUUFBbkI7QUFDRixHQUZEO0FBR0ExQixFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLG1CQUExQixFQUErQ3VCLE9BQS9DLENBQXVELFVBQUNwQixDQUFELEVBQU87QUFDM0RBLElBQUFBLENBQUMsQ0FBQ3FCLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixRQUFuQjtBQUNGLEdBRkQ7O0FBR0EsTUFBSTVCLGFBQWEsR0FBR0QsT0FBcEIsRUFBNkI7QUFDMUJHLElBQUFBLFFBQVEsQ0FDSlcsYUFESixDQUNrQixTQURsQixFQUVJQyxRQUZKLENBRWEsT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZiLEVBRThDLENBRjlDO0FBR0YsR0FKRCxNQUlPO0FBQ0pFLElBQUFBLFFBQVEsQ0FDSlcsYUFESixDQUNrQixTQURsQixFQUVJQyxRQUZKLENBRWEsT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZiLEVBRThDLENBRjlDO0FBR0Y7O0FBQ0RBLEVBQUFBLGFBQWEsR0FBR0QsT0FBaEI7O0FBRUEsTUFBSUEsT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDZkcsSUFBQUEsUUFBUSxDQUFDVyxhQUFULENBQXVCLGVBQXZCLEVBQXdDYyxTQUF4QyxDQUFrREUsR0FBbEQsQ0FBc0QsUUFBdEQ7QUFDRixHQUZELE1BRU8sSUFBSTlCLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ3RCRyxJQUFBQSxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NjLFNBQXhDLENBQWtERSxHQUFsRCxDQUFzRCxRQUF0RDtBQUNGO0FBQ0g7O0FBRUQsK0RBQWU1QixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmxldCBub3RNb2JpbGUgPSB0cnVlO1xyXG5sZXQgY3VycmVudFByb2plY3QgPSAwO1xyXG5sZXQgbWF4UHJvamVjdHM7XHJcbmxldCBtb3VzZWVudGVyID0gZmFsc2U7XHJcbmxldCBwcm9qZWN0O1xyXG5sZXQgbGFzdENvbnRhaW5lciA9IDA7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtcHJvamVjdFwiKTtcclxuICAgICAgbWF4UHJvamVjdHMgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXByb2plY3RcIikubGVuZ3RoIC0gMSk7XHJcbiAgICAgIGZvciAobGV0IGkgb2YgcHJvamVjdCkge1xyXG4gICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbW91c2VFbnRlcigpO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbW91c2VPdXQoKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgaWYgKCFtb3VzZWVudGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QgPj0gbWF4UHJvamVjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbEJ5KC0yNDUgKiBtYXhQcm9qZWN0cywgMCk7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpLnNjcm9sbEJ5KDI0NSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0Kys7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgbm90TW9iaWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW5vdE1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKS5zY3JvbGxCeSgtOTAwLCAwKTtcclxuICAgICAgICAgICAgICAgbm90TW9iaWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0sIDQwMDApO1xyXG4gICB9LCBbXSk7XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD0nVVRGLTgnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9J1gtVUEtQ29tcGF0aWJsZScgY29udGVudD0nSUU9ZWRnZScgLz5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgbmFtZT0ndmlld3BvcnQnXHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0ncHJlY29ubmVjdCcgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgcmVsPSdwcmVjb25uZWN0J1xyXG4gICAgICAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJ1xyXG4gICAgICAgICAgICAgICBjcm9zc29yaWdpblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjp3Z2h0QDQwMDs3MDAmZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJ1xyXG4gICAgICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2ltYWdlcy9Mb2dvLnN2ZycgLz5cclxuICAgICAgICAgICAgPHRpdGxlPlRoeWFnbyBBcmF1am8gUG9ydGbDs2xpbzwvdGl0bGU+XHJcbiAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWNvbnRhaW5lci1nZXJhbCc+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWNvbXB1dGVyLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL2NvbXB1dGFkb3Iuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtY29udGFpbmVyLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYy1sb2dvJyBzcmM9Jy4vaW1hZ2VzL0xvZ28uc3ZnJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtaW50cm9kdWN0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE9sw6EsIGV1IHNvdXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjLW5hbWUnPlRoeWFnbyBBcmF1am8sPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2MtdGl0bGUnPkRFU0VOVk9MVkVET1IgRlJPTlQtRU5EPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgcHJvY3VyYSBkZSB1bWEgb3BvcnR1bmlkYWRlIG5hIMOhcmVhIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2Vudm9sdmltZW50byAtIEhUTUwsIENTUywgSmF2YXNjcmlwdCBlIFJlYWN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjLXByb2plY3RzLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyNwcm9qZXRvcyc+UFJPSkVUT1M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Mtc2tpbGxzLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXNraWxscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5IYWJpbGlkYWRlczo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nanMnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI0YwREI0RidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTEuNDA4IDEuNDA4aDEyNS4xODR2MTI1LjE4NUgxLjQwOHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzMyMzMzMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTExNi4zNDcgOTYuNzM2Yy0uOTE3LTUuNzExLTQuNjQxLTEwLjUwOC0xNS42NzItMTQuOTgxLTMuODMyLTEuNzYxLTguMTA0LTMuMDIyLTkuMzc3LTUuOTI2LS40NTItMS42OS0uNTEyLTIuNjQyLS4yMjYtMy42NjUuODIxLTMuMzIgNC43ODQtNC4zNTUgNy45MjUtMy40MDMgMi4wMjMuNjc4IDMuOTM4IDIuMjM3IDUuMDkzIDQuNzI0IDUuNDAyLTMuNDk4IDUuMzkxLTMuNDc1IDkuMTYzLTUuODc5LTEuMzgxLTIuMTQxLTIuMTE4LTMuMTI5LTMuMDIyLTQuMDQ1LTMuMjQ5LTMuNjI5LTcuNjc2LTUuNDk4LTE0Ljc1Ni01LjM1NWwtMy42ODguNDc3Yy0zLjUzNC44OTMtNi45MDIgMi43NDgtOC44NzcgNS4yMzUtNS45MjYgNi43MjQtNC4yMzYgMTguNDkyIDIuOTc1IDIzLjMzNSA3LjEwNCA1LjMzMiAxNy41NCA2LjU0NSAxOC44NzMgMTEuNTMxIDEuMjk3IDYuMTA0LTQuNDg2IDguMDgtMTAuMjM0IDcuMzc4LTQuMjM2LS44ODEtNi41OTItMy4wMzQtOS4xMzktNi45NDktNC42ODggMi43MTMtNC42ODggMi43MTMtOS41MDggNS40ODUgMS4xNDMgMi40OTkgMi4zNDQgMy42MyA0LjI2IDUuNzk1IDkuMDY4IDkuMTk4IDMxLjc2IDguNzQ2IDM1LjgzLTUuMTc2LjE2NS0uNDc4IDEuMjYxLTMuNjY2LjM4LTguNTgxek02OS40NjIgNTguOTQzSDU3Ljc1M2wtLjA0OCAzMC4yNzJjMCA2LjQzOC4zMzMgMTIuMzQtLjcxNCAxNC4xNDktMS43MTMgMy41NTgtNi4xNTIgMy4xMTctOC4xNzUgMi40MjctMi4wNTktMS4wMTItMy4xMDYtMi40NTEtNC4zMTktNC40ODUtLjMzMy0uNTg0LS41ODMtMS4wMzYtLjY2Ny0xLjA3MWwtOS41MiA1LjgzYzEuNTgzIDMuMjQ5IDMuOTE1IDYuMDY5IDYuOTAyIDcuOTAxIDQuNDYyIDIuNjc4IDEwLjQ1OSAzLjQ5OSAxNi43MzEgMi4wNTkgNC4wODItMS4xODkgNy42MDQtMy42NTIgOS40NDgtNy40MDEgMi42NjYtNC45MTUgMi4wOTQtMTAuODY0IDIuMDctMTcuNDQ0LjA2LTEwLjczNS4wMDEtMjEuNDY4LjAwMS0zMi4yMzd6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nbm9kZScgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjODNDRDI5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTEyLjc3MSAzMC4zMzRMNjguNjc0IDQuNzI5Yy0yLjc4MS0xLjU4NC02LjQwMi0xLjU4NC05LjIwNSAwTDE0LjkwMSAzMC4zMzRDMTIuMDMxIDMxLjk4NSAxMCAzNS4wODggMTAgMzguNDA3djUxLjE0MmMwIDMuMzE5IDIuMDg0IDYuNDIzIDQuOTU0IDguMDgzbDExLjc3NSA2LjY4OGM1LjYyOCAyLjc3MiA3LjYxNyAyLjc3MiAxMC4xNzggMi43NzIgOC4zMzMgMCAxMy4wOTMtNS4wMzkgMTMuMDkzLTEzLjgyOHYtNTAuNDljMC0uNzEzLS4zNzEtMS43NzQtMS4wNzEtMS43NzRoLTUuNjIzQzQyLjU5NCA0MSA0MSA0Mi4wNjEgNDEgNDIuNzczdjUwLjQ5YzAgMy44OTYtMy41MjQgNy43NzMtMTAuMTEgNC40OEwxOC43MjMgOTAuNzNjLS40MjQtLjIzLS43MjMtLjY5My0uNzIzLTEuMTgxVjM4LjQwN2MwLS40ODIuNTU1LS45NjYuOTgyLTEuMjEzbDQ0LjQyNC0yNS41NjFjLjQxNS0uMjM1IDEuMDI1LS4yMzUgMS40MzkgMGw0My44ODIgMjUuNTU1Yy40Mi4yNTMuMjcyLjcyMi4yNzIgMS4yMTl2NTEuMTQyYzAgLjQ4OC4xODMuOTYzLS4yMzIgMS4xOThsLTQ0LjA4NiAyNS41NzZjLS4zNzguMjI3LS44NDcuMjI3LTEuMjYxIDBsLTExLjMwNy02Ljc0OWMtLjM0MS0uMTk4LS43NDYtLjI2OS0xLjA3My0uMDg2LTMuMTQ2IDEuNzgzLTMuNzI2IDIuMDItNi42NzcgMy4wNDMtLjcyNi4yNTMtMS43OTcuNjkyLjQxIDEuOTI5bDE0Ljc5OCA4Ljc1NGE5LjI5NCA5LjI5NCAwIDAwNC42NDcgMS4yNDZjMS42NDIgMCAzLjI1LS40MjYgNC42NjctMS4yNDZsNDMuODg1LTI1LjU4MmMyLjg3LTEuNjcyIDQuMjMtNC43NjQgNC4yMy04LjA4M1YzOC40MDdjMC0zLjMxOS0xLjM2LTYuNDE0LTQuMjI5LTguMDczek03Ny45MSA4MS40NDVjLTExLjcyNiAwLTE0LjMwOS0zLjIzNS0xNS4xNy05LjA2Ni0uMS0uNjI4LS42MzMtMS4zNzktMS4yNzItMS4zNzloLTUuNzMxYy0uNzA5IDAtMS4yNzkuODYtMS4yNzkgMS41NjYgMCA3LjQ2NiA0LjA1OSAxNi41MTIgMjMuNDUzIDE2LjUxMiAxNC4wMzkgMCAyMi4wODgtNS40NTUgMjIuMDg4LTE1LjEwOSAwLTkuNTcyLTYuNDY3LTEyLjA4NC0yMC4wODItMTMuODg2LTEzLjc2Mi0xLjgxOS0xNS4xNi0yLjczOC0xNS4xNi01Ljk2MiAwLTIuNjU4IDEuMTg0LTYuMjAzIDExLjM3NC02LjIwMyA5LjEwNSAwIDEyLjQ2MSAxLjk1NCAxMy44NDIgOC4wOTEuMTE4LjU3Ny42NDUuOTkxIDEuMjQuOTkxaDUuNzU0Yy4zNTQgMCAuNjkyLS4xNDMuOTQtLjM5Ni4yNC0uMjcyLjM2Ny0uNjEzLjMzNS0uOTc5LS44OTEtMTAuNTY4LTcuOTEyLTE1LjQ5My0yMi4xMTItMTUuNDkzLTEyLjYzMSAwLTIwLjE2NiA1LjMzNC0yMC4xNjYgMTQuMjc1IDAgOS42OTggNy40OTcgMTIuMzc4IDE5LjYyMiAxMy41NzcgMTQuNTA1IDEuNDIyIDE1LjYzMyAzLjU0MiAxNS42MzMgNi4zOTUgMCA0Ljk1NS0zLjk3OCA3LjA2Ni0xMy4zMDkgNy4wNjZ6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nanF1ZXJ5JyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyMwODY4QUMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J005LjYyNSAzMi4xODFDLTEuNDA0IDQ4LjAzMi0uMDMxIDY4LjY1NyA4LjM5NCA4NS41MDFjLjIuNDA0LjQxLjgwMS42MTcgMS4xOThsLjM5NC43NTkuMjQ2LjQzNy40MzkuNzg2Yy4yNjIuNDYxLjUzLjkyLjgwNCAxLjM3OWwuNDU5Ljc1NmMuMzA0LjQ5MS42MTUuOTc2LjkzMyAxLjQ2bC4zOTguNjE0Yy40MzkuNjU1Ljg4OCAxLjMwOSAxLjM1MiAxLjk1MWwuMDM5LjA1LjIyOC4zMDhjLjQwMS41NTMuODE0IDEuMDk5IDEuMjMyIDEuNjM5bC40NjQuNTljLjM3My40NjkuNzUyLjkzNSAxLjEzOCAxLjM5OWwuNDM1LjUyYTc1LjI3IDc1LjI3IDAgMDAxLjU4NiAxLjgxMmwuMDMzLjAzMy4wNjEuMDY4YTgwLjQ0IDgwLjQ0IDAgMDAxLjYxMiAxLjY5OWwuNTE3LjUyMWMuNDIzLjQyNi44NTMuODQ1IDEuMjg3IDEuMjYybC41MjcuNWMuNTguNTQ3IDEuMTY2IDEuMDgzIDEuNzY0IDEuNjA3bC4wMjguMDIyLjMwNy4yNjJjLjUyNy40NTYgMS4wNjMuOTA5IDEuNjAzIDEuMzUzbC42NjQuNTI5Yy40NDEuMzU0Ljg4Ny43MDIgMS4zMzYgMS4wNDRsLjcxNC41NDNjLjQ5Ni4zNjUuOTk1LjcyNCAxLjQ5OSAxLjA3NWwuNTQ2LjM4Ny4xNS4xMDdjLjQ3OC4zMjkuOTY3LjY0NiAxLjQ1Ni45NjNsLjYzLjQyYy43NS40NzQgMS41MS45NDMgMi4yNzkgMS4zOTZsLjYzLjM1NWMuNTY1LjMyNiAxLjEzNC42NDYgMS43MS45NTkuMzEyLjE2OC42MzIuMzI3Ljk0Ni40ODguNDA3LjIxMy44MTEuNDI5IDEuMjI1LjYzNmwuMjgzLjEzNy41MDEuMjQyYy42NDEuMzA2IDEuMjg3LjYwNyAxLjk0Ljg5N2wuNDEuMTg0YTY2LjkyIDY2LjkyIDAgMDAyLjI2My45NDFsLjU1MS4yMTdjLjcwNC4yNzEgMS40MTguNTM5IDIuMTM1Ljc5MWwuMjY4LjA5M2MuNzg3LjI3NSAxLjU4MS41MyAyLjM4MS43NzlsLjU3NS4xNzJjLjgxNC4yNDUgMS42MTkuNTM4IDIuNDU4LjY5MyA1My4zMzkgOS43MjcgNjguODMzLTMyLjA1MyA2OC44MzMtMzIuMDUzLTEzLjAxMyAxNi45NTMtMzYuMTExIDIxLjQyNS01Ny45OTYgMTYuNDQ2LS44MjktLjE4Ny0xLjYzMy0uNDQ2LTIuNDQyLS42ODVsLS42MDktLjE4NWE3Mi40OTggNzIuNDk4IDAgMDEtMi4zNTItLjc2NWwtLjMyMy0uMTE3YTcyLjI0NSA3Mi4yNDUgMCAwMS0yLjA3NC0uNzY5bC0uNTgyLS4yMjljLS43NTItLjI5Ny0xLjUtLjYwNy0yLjIzOS0uOTMxbC0uNDQ3LS4xOThhOTIuODU3IDkyLjg1NyAwIDAxLTEuODg5LS44NzlsLS41NDYtLjI2MmMtLjQ5MS0uMjM5LS45NzctLjQ5My0xLjQ2MS0uNzQzLS4zMjQtLjE3MS0uNjU0LS4zMzItLjk3NS0uNTFhNTguNTkxIDU4LjU5MSAwIDAxLTEuNzUxLS45ODJsLS41OTEtLjMzYTgxLjIyMSA4MS4yMjEgMCAwMS0yLjI4LTEuMzk3bC0uNjE1LS40MWE1OS4yODMgNTkuMjgzIDAgMDEtMS42MjMtMS4wNzlsLS41MjItLjM2N2E4OS4yODcgODkuMjg3IDAgMDEtMS41MzQtMS4xMDlsLS42NzktLjUxNGE2NC40NzMgNjQuNDczIDAgMDEtMS4zODQtMS4wODJsLS42MTctLjQ5NWE4Mi42OTMgODIuNjkzIDAgMDEtMS43MjQtMS40NTNsLS4xODktLjE1OWE4My40NjYgODMuNDY2IDAgMDEtMS44MTItMS42NDdsLS41MTEtLjQ5MWMtLjQ0MS0uNDItLjg3NS0uODQzLTEuMzAyLTEuMjc3bC0uNTEtLjUwOWE3MC41NDEgNzAuNTQxIDAgMDEtMS41OTgtMS42OWwtLjA3OS0uMDg0YTY3LjM5IDY3LjM5IDAgMDEtMS42MjEtMS44NDRsLS40MjQtLjUwNGE3MC42MDIgNzAuNjAyIDAgMDEtMS4xNjctMS40NDJsLS40MjctLjUzMmE3OC40MDYgNzguNDA2IDAgMDEtMS4zNDctMS43OTRjLTEyLjE1LTE2LjU3NC0xNi41MTYtMzkuNDMyLTYuODA1LTU4LjIwNG0yNS42MjktMi40MzRjLTcuOTc3IDExLjQ3OC03LjU0MyAyNi44NDQtMS4zMjEgMzguOTgzYTUwLjU4MSA1MC41ODEgMCAwMDMuNTI4IDUuODg5YzEuMTk1IDEuNzEzIDIuNTIgMy43NTEgNC4xMDYgNS4xMjdhNDguMTExIDQ4LjExMSAwIDAwMS43OSAxLjg1OGwuNDcyLjQ2NWE1MS42OSA1MS42OSAwIDAwMS44MjggMS42OThsLjA3NC4wNjQuMDE4LjAxOGE1NS4yNjggNTUuMjY4IDAgMDAyLjEzNSAxLjc2N2wuNDg1LjM3OGE1NC4wOCA1NC4wOCAwIDAwMi4yMzMgMS42MzFsLjA2NS4wNDljLjMzNi4yMzIuNjc4LjQ0OCAxLjAxOS42NzJsLjQ4My4zMTljLjU0NC4zNDkgMS4wOTUuNjg5IDEuNjU1IDEuMDE1bC4yMzUuMTM2Yy40ODMuMjc4Ljk3Mi41NTIgMS40NjMuODE4bC41MjEuMjcxYy4zMzkuMTc3LjY3OC4zNTggMS4wMjMuNTNsLjE1NS4wN2MuNzAzLjM0NiAxLjQxMi42OCAyLjEzNi45OTVsLjQ3Mi4xOTRjLjU3OS4yNDYgMS4xNjQuNDg2IDEuNzUuNzFsLjc1LjI3NWMuNTMzLjE5OCAxLjA2OC4zNzggMS42MDcuNTU5bC43MjcuMjMzYy43NjcuMjM4IDEuNTI1LjUzOSAyLjMyNC42NzIgNDEuMTgzIDYuODIzIDUwLjY5MS0yNC44ODYgNTAuNjkxLTI0Ljg4Ni04LjU3IDEyLjM0My0yNS4xNjggMTguMjMzLTQyLjg3OSAxMy42MzVhNTAuMzc2IDUwLjM3NiAwIDAxLTIuMzMzLS42NzRsLS43MDEtLjIyN2E0NS40MjMgNDUuNDIzIDAgMDEtMS42MzEtLjU2MmwtLjczNi0uMjc0YTU2LjQxOCA1Ni40MTggMCAwMS0xLjc1Ni0uNzA4bC0uNDczLS4yYTQ3LjcyOCA0Ny43MjggMCAwMS0yLjE0OC0uOTk5Yy0uMzYzLS4xNzctLjcyLS4zNjQtMS4wNzgtLjU0OGwtLjYyMi0uMzJhNDQuNTAyIDQ0LjUwMiAwIDAxLTEuMzYzLS43N2wtLjMyNi0uMTg1YTQ3Ljg0NCA0Ny44NDQgMCAwMS0xLjY1MS0xLjAwOGwtLjQ5OC0uMzMyYTYxLjc1OSA2MS43NTkgMCAwMS0xLjA2OS0uNzA3IDU3LjQ1NiA1Ny40NTYgMCAwMS0yLjIyNi0xLjYyOGwtLjUwMS0uMzk1Yy03Ljc1Mi02LjEyLTEzLjg5OC0xNC40ODYtMTYuODE5LTIzLjk3MS0zLjA2Mi05LjgzNi0yLjQwMi0yMC44NzggMi45MDMtMjkuODRtMjIuMjc4LS43NzVjLTQuNzAyIDYuOTItNS4xNjQgMTUuNTE0LTEuOTAxIDIzLjE1NiAzLjQ0MSA4LjExMyAxMC40OTEgMTQuNDc2IDE4LjcyIDE3LjQ5NS4zMzkuMTI1LjY3OS4yMzcgMS4wMjIuMzU0bC40NTEuMTQzYy40ODUuMTUyLjk2Ni4zMjkgMS40NjcuNDI0IDIyLjc0IDQuMzk0IDI4LjkwOC0xMS42NjkgMzAuNTQ5LTE0LjAzNC01LjQwMiA3Ljc3OS0xNC40ODIgOS42NDYtMjUuNjIzIDYuOTQyLS44OC0uMjEzLTEuODQ3LS41MzEtMi42OTUtLjgzMmEzMy4yNDIgMzMuMjQyIDAgMDEtMy4yMDEtMS4zMjkgMzMuMjE1IDMzLjIxNSAwIDAxLTUuNjEyLTMuNDI0Yy05Ljk2OS03LjU2NS0xNi4xNjItMjEuOTk0LTkuNjU3LTMzLjc0NSc+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2ZpcmViYXNlJyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNmNTgyMjAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00yNy4zNSA4MC41MmwxMC42OC02OC40NGMuMzctMi4zMyAzLjUtMi44OSA0LjYtLjhsMTEuNDggMjEuNDgtMjYuNzYgNDcuNzZ6bTc1Ljk0IDE2LjYzTDkzLjEgMzQuMTFjLS4zMS0xLjk2LTIuNzYtMi43Ni00LjE3LTEuMzVMMjQuNzEgOTcuMTVsMzUuNTQgMTkuOTVhNy40NDcgNy40NDcgMCAwMDcuMTggMGwzNS44Ni0xOS45NXptLTI4Ljg1LTU1TDY2LjIxIDI2LjVjLS45Mi0xLjc4LTMuNDQtMS43OC00LjM2IDBMMjUuNyA5MC45NWw0OC43NC00OC44eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPScjMTE0NzllJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0nNjQnIGN5PSc2NCcgcj0nMTEuNCc+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMDcuMyA0NS4yYy0yLjItLjgtNC41LTEuNi02LjktMi4zLjYtMi40IDEuMS00LjggMS41LTcuMSAyLjEtMTMuMi0uMi0yMi41LTYuNi0yNi4xLTEuOS0xLjEtNC0xLjYtNi40LTEuNi03IDAtMTUuOSA1LjItMjQuOSAxMy45LTktOC43LTE3LjktMTMuOS0yNC45LTEzLjktMi40IDAtNC41LjUtNi40IDEuNi02LjQgMy43LTguNyAxMy02LjYgMjYuMS40IDIuMy45IDQuNyAxLjUgNy4xLTIuNC43LTQuNyAxLjQtNi45IDIuM0M4LjIgNTAgMS40IDU2LjYgMS40IDY0czYuOSAxNCAxOS4zIDE4LjhjMi4yLjggNC41IDEuNiA2LjkgMi4zLS42IDIuNC0xLjEgNC44LTEuNSA3LjEtMi4xIDEzLjIuMiAyMi41IDYuNiAyNi4xIDEuOSAxLjEgNCAxLjYgNi40IDEuNiA3LjEgMCAxNi01LjIgMjQuOS0xMy45IDkgOC43IDE3LjkgMTMuOSAyNC45IDEzLjkgMi40IDAgNC41LS41IDYuNC0xLjYgNi40LTMuNyA4LjctMTMgNi42LTI2LjEtLjQtMi4zLS45LTQuNy0xLjUtNy4xIDIuNC0uNyA0LjctMS40IDYuOS0yLjMgMTIuNS00LjggMTkuMy0xMS40IDE5LjMtMTguOHMtNi44LTE0LTE5LjMtMTguOHpNOTIuNSAxNC43YzQuMSAyLjQgNS41IDkuOCAzLjggMjAuMy0uMyAyLjEtLjggNC4zLTEuNCA2LjYtNS4yLTEuMi0xMC43LTItMTYuNS0yLjUtMy40LTQuOC02LjktOS4xLTEwLjQtMTMgNy40LTcuMyAxNC45LTEyLjMgMjEtMTIuMyAxLjMgMCAyLjUuMyAzLjUuOXpNODEuMyA3NGMtMS44IDMuMi0zLjkgNi40LTYuMSA5LjYtMy43LjMtNy40LjQtMTEuMi40LTMuOSAwLTcuNi0uMS0xMS4yLS40LTIuMi0zLjItNC4yLTYuNC02LTkuNi0xLjktMy4zLTMuNy02LjctNS4zLTEwIDEuNi0zLjMgMy40LTYuNyA1LjMtMTAgMS44LTMuMiAzLjktNi40IDYuMS05LjYgMy43LS4zIDcuNC0uNCAxMS4yLS40IDMuOSAwIDcuNi4xIDExLjIuNCAyLjIgMy4yIDQuMiA2LjQgNiA5LjYgMS45IDMuMyAzLjcgNi43IDUuMyAxMC0xLjcgMy4zLTMuNCA2LjYtNS4zIDEwem04LjMtMy4zYzEuNSAzLjUgMi43IDYuOSAzLjggMTAuMy0zLjQuOC03IDEuNC0xMC44IDEuOSAxLjItMS45IDIuNS0zLjkgMy42LTYgMS4yLTIuMSAyLjMtNC4yIDMuNC02LjJ6TTY0IDk3LjhjLTIuNC0yLjYtNC43LTUuNC02LjktOC4zIDIuMy4xIDQuNi4yIDYuOS4yIDIuMyAwIDQuNi0uMSA2LjktLjItMi4yIDIuOS00LjUgNS43LTYuOSA4LjN6bS0xOC42LTE1Yy0zLjgtLjUtNy40LTEuMS0xMC44LTEuOSAxLjEtMy4zIDIuMy02LjggMy44LTEwLjMgMS4xIDIgMi4yIDQuMSAzLjQgNi4xIDEuMiAyLjIgMi40IDQuMSAzLjYgNi4xem0tNy0yNS41Yy0xLjUtMy41LTIuNy02LjktMy44LTEwLjMgMy40LS44IDctMS40IDEwLjgtMS45LTEuMiAxLjktMi41IDMuOS0zLjYgNi0xLjIgMi4xLTIuMyA0LjItMy40IDYuMnpNNjQgMzAuMmMyLjQgMi42IDQuNyA1LjQgNi45IDguMy0yLjMtLjEtNC42LS4yLTYuOS0uMi0yLjMgMC00LjYuMS02LjkuMiAyLjItMi45IDQuNS01LjcgNi45LTguM3ptMjIuMiAyMWwtMy42LTZjMy44LjUgNy40IDEuMSAxMC44IDEuOS0xLjEgMy4zLTIuMyA2LjgtMy44IDEwLjMtMS4xLTIuMS0yLjItNC4yLTMuNC02LjJ6TTMxLjcgMzVjLTEuNy0xMC41LS4zLTE3LjkgMy44LTIwLjMgMS0uNiAyLjItLjkgMy41LS45IDYgMCAxMy41IDQuOSAyMSAxMi4zLTMuNSAzLjgtNyA4LjItMTAuNCAxMy01LjguNS0xMS4zIDEuNC0xNi41IDIuNS0uNi0yLjMtMS00LjUtMS40LTYuNnpNNyA2NGMwLTQuNyA1LjctOS43IDE1LjctMTMuNCAyLS44IDQuMi0xLjUgNi40LTIuMSAxLjYgNSAzLjYgMTAuMyA2IDE1LjYtMi40IDUuMy00LjUgMTAuNS02IDE1LjVDMTUuMyA3NS42IDcgNjkuNiA3IDY0em0yOC41IDQ5LjNjLTQuMS0yLjQtNS41LTkuOC0zLjgtMjAuMy4zLTIuMS44LTQuMyAxLjQtNi42IDUuMiAxLjIgMTAuNyAyIDE2LjUgMi41IDMuNCA0LjggNi45IDkuMSAxMC40IDEzLTcuNCA3LjMtMTQuOSAxMi4zLTIxIDEyLjMtMS4zIDAtMi41LS4zLTMuNS0uOXpNOTYuMyA5M2MxLjcgMTAuNS4zIDE3LjktMy44IDIwLjMtMSAuNi0yLjIuOS0zLjUuOS02IDAtMTMuNS00LjktMjEtMTIuMyAzLjUtMy44IDctOC4yIDEwLjQtMTMgNS44LS41IDExLjMtMS40IDE2LjUtMi41LjYgMi4zIDEgNC41IDEuNCA2LjZ6bTktMTUuNmMtMiAuOC00LjIgMS41LTYuNCAyLjEtMS42LTUtMy42LTEwLjMtNi0xNS42IDIuNC01LjMgNC41LTEwLjUgNi0xNS41IDEzLjggNCAyMi4xIDEwIDIyLjEgMTUuNiAwIDQuNy01LjggOS43LTE1LjcgMTMuNHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J3JlYWN0JyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9JyM2MURBRkInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSc2NCcgY3k9JzY0JyByPScxMS40Jz48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEwNy4zIDQ1LjJjLTIuMi0uOC00LjUtMS42LTYuOS0yLjMuNi0yLjQgMS4xLTQuOCAxLjUtNy4xIDIuMS0xMy4yLS4yLTIyLjUtNi42LTI2LjEtMS45LTEuMS00LTEuNi02LjQtMS42LTcgMC0xNS45IDUuMi0yNC45IDEzLjktOS04LjctMTcuOS0xMy45LTI0LjktMTMuOS0yLjQgMC00LjUuNS02LjQgMS42LTYuNCAzLjctOC43IDEzLTYuNiAyNi4xLjQgMi4zLjkgNC43IDEuNSA3LjEtMi40LjctNC43IDEuNC02LjkgMi4zQzguMiA1MCAxLjQgNTYuNiAxLjQgNjRzNi45IDE0IDE5LjMgMTguOGMyLjIuOCA0LjUgMS42IDYuOSAyLjMtLjYgMi40LTEuMSA0LjgtMS41IDcuMS0yLjEgMTMuMi4yIDIyLjUgNi42IDI2LjEgMS45IDEuMSA0IDEuNiA2LjQgMS42IDcuMSAwIDE2LTUuMiAyNC45LTEzLjkgOSA4LjcgMTcuOSAxMy45IDI0LjkgMTMuOSAyLjQgMCA0LjUtLjUgNi40LTEuNiA2LjQtMy43IDguNy0xMyA2LjYtMjYuMS0uNC0yLjMtLjktNC43LTEuNS03LjEgMi40LS43IDQuNy0xLjQgNi45LTIuMyAxMi41LTQuOCAxOS4zLTExLjQgMTkuMy0xOC44cy02LjgtMTQtMTkuMy0xOC44ek05Mi41IDE0LjdjNC4xIDIuNCA1LjUgOS44IDMuOCAyMC4zLS4zIDIuMS0uOCA0LjMtMS40IDYuNi01LjItMS4yLTEwLjctMi0xNi41LTIuNS0zLjQtNC44LTYuOS05LjEtMTAuNC0xMyA3LjQtNy4zIDE0LjktMTIuMyAyMS0xMi4zIDEuMyAwIDIuNS4zIDMuNS45ek04MS4zIDc0Yy0xLjggMy4yLTMuOSA2LjQtNi4xIDkuNi0zLjcuMy03LjQuNC0xMS4yLjQtMy45IDAtNy42LS4xLTExLjItLjQtMi4yLTMuMi00LjItNi40LTYtOS42LTEuOS0zLjMtMy43LTYuNy01LjMtMTAgMS42LTMuMyAzLjQtNi43IDUuMy0xMCAxLjgtMy4yIDMuOS02LjQgNi4xLTkuNiAzLjctLjMgNy40LS40IDExLjItLjQgMy45IDAgNy42LjEgMTEuMi40IDIuMiAzLjIgNC4yIDYuNCA2IDkuNiAxLjkgMy4zIDMuNyA2LjcgNS4zIDEwLTEuNyAzLjMtMy40IDYuNi01LjMgMTB6bTguMy0zLjNjMS41IDMuNSAyLjcgNi45IDMuOCAxMC4zLTMuNC44LTcgMS40LTEwLjggMS45IDEuMi0xLjkgMi41LTMuOSAzLjYtNiAxLjItMi4xIDIuMy00LjIgMy40LTYuMnpNNjQgOTcuOGMtMi40LTIuNi00LjctNS40LTYuOS04LjMgMi4zLjEgNC42LjIgNi45LjIgMi4zIDAgNC42LS4xIDYuOS0uMi0yLjIgMi45LTQuNSA1LjctNi45IDguM3ptLTE4LjYtMTVjLTMuOC0uNS03LjQtMS4xLTEwLjgtMS45IDEuMS0zLjMgMi4zLTYuOCAzLjgtMTAuMyAxLjEgMiAyLjIgNC4xIDMuNCA2LjEgMS4yIDIuMiAyLjQgNC4xIDMuNiA2LjF6bS03LTI1LjVjLTEuNS0zLjUtMi43LTYuOS0zLjgtMTAuMyAzLjQtLjggNy0xLjQgMTAuOC0xLjktMS4yIDEuOS0yLjUgMy45LTMuNiA2LTEuMiAyLjEtMi4zIDQuMi0zLjQgNi4yek02NCAzMC4yYzIuNCAyLjYgNC43IDUuNCA2LjkgOC4zLTIuMy0uMS00LjYtLjItNi45LS4yLTIuMyAwLTQuNi4xLTYuOS4yIDIuMi0yLjkgNC41LTUuNyA2LjktOC4zem0yMi4yIDIxbC0zLjYtNmMzLjguNSA3LjQgMS4xIDEwLjggMS45LTEuMSAzLjMtMi4zIDYuOC0zLjggMTAuMy0xLjEtMi4xLTIuMi00LjItMy40LTYuMnpNMzEuNyAzNWMtMS43LTEwLjUtLjMtMTcuOSAzLjgtMjAuMyAxLS42IDIuMi0uOSAzLjUtLjkgNiAwIDEzLjUgNC45IDIxIDEyLjMtMy41IDMuOC03IDguMi0xMC40IDEzLTUuOC41LTExLjMgMS40LTE2LjUgMi41LS42LTIuMy0xLTQuNS0xLjQtNi42ek03IDY0YzAtNC43IDUuNy05LjcgMTUuNy0xMy40IDItLjggNC4yLTEuNSA2LjQtMi4xIDEuNiA1IDMuNiAxMC4zIDYgMTUuNi0yLjQgNS4zLTQuNSAxMC41LTYgMTUuNUMxNS4zIDc1LjYgNyA2OS42IDcgNjR6bTI4LjUgNDkuM2MtNC4xLTIuNC01LjUtOS44LTMuOC0yMC4zLjMtMi4xLjgtNC4zIDEuNC02LjYgNS4yIDEuMiAxMC43IDIgMTYuNSAyLjUgMy40IDQuOCA2LjkgOS4xIDEwLjQgMTMtNy40IDcuMy0xNC45IDEyLjMtMjEgMTIuMy0xLjMgMC0yLjUtLjMtMy41LS45ek05Ni4zIDkzYzEuNyAxMC41LjMgMTcuOS0zLjggMjAuMy0xIC42LTIuMi45LTMuNS45LTYgMC0xMy41LTQuOS0yMS0xMi4zIDMuNS0zLjggNy04LjIgMTAuNC0xMyA1LjgtLjUgMTEuMy0xLjQgMTYuNS0yLjUuNiAyLjMgMSA0LjUgMS40IDYuNnptOS0xNS42Yy0yIC44LTQuMiAxLjUtNi40IDIuMS0xLjYtNS0zLjYtMTAuMy02LTE1LjYgMi40LTUuMyA0LjUtMTAuNSA2LTE1LjUgMTMuOCA0IDIyLjEgMTAgMjIuMSAxNS42IDAgNC43LTUuOCA5LjctMTUuNyAxMy40eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3Nhc3Mvc2Fzcy1vcmlnaW5hbC5zdmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy90eXBlc2NyaXB0L3R5cGVzY3JpcHQtb3JpZ2luYWwuc3ZnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgaWQ9J3Byb2pldG9zJyBjbGFzc05hbWU9J2MtcHJvamVjdHMnPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+UFJPSkVUT1M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1uZXh0LXByZXYtcHJvamVjdHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRQcmV2UHJvamVjdHMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdHMtMSBjLWdyb3VwLWJ1dHRvbi1wcm9qZWN0cyBhY3RpdmUnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRQcmV2UHJvamVjdHMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdHMtMiBjLWdyb3VwLWJ1dHRvbi1wcm9qZWN0cyc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1ib3gnIGlkPSdqcy1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvTmV4dC1MZXZlbC1XZWVrLUhlYXQuZ2lmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5leHQgTGV2ZWwgV2VlayBIZWF0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVtYSBhcGxpY2HDp8OjbyBkZSBsb2dpbiBlIGF1dGVudGljYcOnw6NvIGNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXRodWIgcGFyYSBvIGVudmlvIGUgcmVjZWJpbWVudG8gZGUgbWVuc2FnZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW0gdGVtcG8gcmVhbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9OZXh0LUxldmVsLVdlZWstSGVhdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYnRuLWdpdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdJVEhVQlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0IGJnLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9kZXZmaW5hbmNlLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXYkZmluYW5jZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXYkZmluYW5jZSDDqSB1bSBwcm9qZXRvIGZlaXRvIGR1cmFudGUgdW1hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmF0b25hIGRhIFJvY2tldHNlYXQsIHV0aWxpemFuZG8gSHRtbCwgQ3NzIGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmF2YXNjcmlwdCBlIHN1YSBmdW7Dp8OjbyDDqSBhanVkYXIgbmEgb3JnYW5pemHDp8Ojb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBnYXN0b3MgbWVuc2FpcywgdHVkbyB1dGlsaXphbmRvIExvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhIG7Do28gcGVyZGVyIG9zIGRhZG9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vRGV2LWZpbmFuY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2J0bi1zaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0lURVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vRGV2LWZpbmFuY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2J0bi1naXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHSVRIVUJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9mYW5jeS1ib3JkZXItcmFkaXVzLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GYW5jeSBCb3JkZXIgUmFkaXVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbmN5IEJvcmRlciByYWRpdXMgw6kgdW0gcHJvamV0byBiYXNlYWRvIGVtIHVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyBkZXNhZmlvcyBkbyByZXBvc2l0w7NyaW8gQXBwIElkZWFzIG5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpdGh1Yi4gTmVsZSB0ZW1vcyBxdWUgY3JpYXIgdW1hIGludGVyZmFjZSBxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyB1c3XDoXJpbyBwb3NzYSBtb2RpZmljYXIgbyBib3JkZXItcmFkaXVzIGRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRvIGEgdm9udGFkZSBlIGNvbnNlZ3VpciBjb3BpYS1sbyBwcm9udG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSB1c2FyIG5vIHNldSBwcm9qZXRvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vUHJhdGljYW5kby10ZW1wbGF0ZXMvaW5pY2lhbnRlL0JvcmRlci1yYWRpdXMtUHJldmlld2VyL2luZGV4Lmh0bWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vUHJhdGljYW5kby10ZW1wbGF0ZXMvdHJlZS9tYWluL2luaWNpYW50ZS9Cb3JkZXItcmFkaXVzLVByZXZpZXdlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvZmFxLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GQVEgVGVtcGxhdGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0ZSBwcm9qZXRvIMOpIHVtIHRlbXBsYXRlIGLDoXNpY28gZGUgdW0gRkFRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VhZG8gZG8gc2l0ZSBGcm9udGVuZE1lbnRvciwgZGVsZSB0ZW1vcyBxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjcmlhciBvIGRlc2lnbiBvIG1haXMgZmllbG1lbnRlIHBvc3PDrXZlbCBhb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90w7N0aXBvIHJlY2ViaWRvIGUgcXVlIGVzdGVqYSByZXNwb25zaXZvIHBhcmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpb3JpYSBkb3MgZGlzcG9zaXRpdm9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vUHJhdGljYW5kby10ZW1wbGF0ZXMvaW5pY2lhbnRlL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluL2luZGV4Lmh0bWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vUHJhdGljYW5kby10ZW1wbGF0ZXMvdHJlZS9tYWluL2luaWNpYW50ZS9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0IGJnLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9zcGxpdGVyLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TcGxpdHRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbGl0dGVyIMOpIHVtIGFwbGljYXRpdm8gcGFyYSBjYWxjdWxvIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvcmpldGEsIGNvbSBvIGNhbGN1bG8gZW0gc2ksIHVtYSDDoXJlYSBwYXJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbG9yZXMgZGEgZ29yamV0YSBlc2NvbGhpZGEgcGVsbyB1c3XDoXJpbyBlIHVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdMOjbyBwYXJhIHplcmFyIHR1ZG8sIG91dHJvIHByb2pldG8gYmFzZWFkbyBkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIEZyb250ZW5kTWVudG9yLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vUHJhdGljYW5kby10ZW1wbGF0ZXMvaW5pY2lhbnRlL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluL2luZGV4Lmh0bWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vUHJhdGljYW5kby10ZW1wbGF0ZXMvdHJlZS9tYWluL2luaWNpYW50ZS90aXAtY2FsY3VsYXRvci1hcHAtbWFpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL3dpbGRiZWFzdC5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+V2lsZGJlYXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpbGRiZWFzdCDDqSB1bSB0ZW1wbGF0ZSBmZWl0byBwYXJhIGEgcHLDoXRpY2EgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZCBsYXlvdXQsIHV0aWxpemFuZG8gdG9kb3Mgb3Mgc2V1cyBjb25jZWl0b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBjcmlhciB1bSBsYXlvdXQgcmVzcG9uc2l2byBwYXJhIHRvZG9zIG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9zIGRlIGRpc3Bvc2l0aXZvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL1dpbGRiZWFzdC8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vV2lsZGJlYXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1naXQnPkdJVEhVQjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2MtYWJvdXQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1kZXRhaWxzLTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvZGV0YWlscy5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1hYm91dC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNPQlJFIE1JTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTb3UgdW0gcHJvZ3JhbWFkb3IgZW0gYnVzY2EgZGUgdW1hIG9wb3J0dW5pZGFkZSBwYXJhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJhciBubyBtZXJjYWRvLiBKw6EgdGVuaG8gZXhwZXJpw6puY2lhIG5hIGNyaWHDp8OjbyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlcyByZXNwb25zaXZvcyBlIGVzdG91IHNlbXByZSBidXNjYW5kbyBhcHJlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub3ZhcyBmZXJyYW1lbnRhcyBwYXJhIG1lbGhvcmFyIG8gbWV1IHRyYWJhbGhvLCBjb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgNDArIGhvcmFzIGVtIGN1cnNvcyBlIDEwMCsgaG9yYXMgZW0gcHLDoXRpY2EuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dWFsbWVudGUgZXN0b3UgZm9jYW5kbyBtZXVzIGVzdHVkb3MgZW0gYmFjay1lbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tIE5vZGUgZSBSZWFjdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9jw6ogcG9kZSBlbmNvbnRyYXIgbWFpcyBzb2JyZSBtZXVzIHByb2pldG9zIGUgbWluaGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90aW5hIGRlIGVzdHVkb3MgZW0gbWluaGEgY29udGEgbm8gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScuL2Fzc2V0cy9DVi5wZGYnIGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNVUlLDjUNVTE88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjLWVtYWlsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh5YWdvYXJhdWpvbW90dGFAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvcHlUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vaW1hZ2VzL2NvcHktaWNvbi5zdmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYy1jb3B5Jz5lLW1haWwgY29waWFkbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoMjcpIDkgOTk3NS01Njg0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1Mjc5OTk3NTU2ODQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vaW1hZ2VzL3doYXRzLWljb24uc3ZnJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1kZXRhaWxzLTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvZGV0YWlscy5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5VGV4dCgpIHtcclxuICAgbGV0IHRleHQgPSBcInRoeWFnb2FyYXVqb21vdHRhQGdtYWlsLmNvbVwiO1xyXG4gICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcclxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLWNvcHlcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLWNvcHlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICB9LCAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VFbnRlcigpIHtcclxuICAgbW91c2VlbnRlciA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3V0KCkge1xyXG4gICBtb3VzZWVudGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQcmV2UHJvamVjdHMxKCkge1xyXG4gICBuZXh0UHJldlByb2plY3RzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0UHJldlByb2plY3RzMigpIHtcclxuICAgbmV4dFByZXZQcm9qZWN0cygyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFByZXZQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1ncm91cC1idXR0b24tcHJvamVjdHNcIikuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgIH0pO1xyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtZ3JvdXAtcHJvamVjdHNcIikuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgIH0pO1xyXG4gICBpZiAobGFzdENvbnRhaW5lciA8IHByb2plY3QpIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpXHJcbiAgICAgICAgIC5zY3JvbGxCeSg5MDAgKiAocHJvamVjdCAtIGxhc3RDb250YWluZXIpLCAwKTtcclxuICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpXHJcbiAgICAgICAgIC5zY3JvbGxCeSg5MDAgKiAocHJvamVjdCAtIGxhc3RDb250YWluZXIpLCAwKTtcclxuICAgfVxyXG4gICBsYXN0Q29udGFpbmVyID0gcHJvamVjdDtcclxuXHJcbiAgIGlmIChwcm9qZWN0ID09IDEpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLXByb2plY3RzLTFcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgfSBlbHNlIGlmIChwcm9qZWN0ID09IDIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLXByb2plY3RzLTJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSGVhZCIsIm5vdE1vYmlsZSIsImN1cnJlbnRQcm9qZWN0IiwibWF4UHJvamVjdHMiLCJtb3VzZWVudGVyIiwicHJvamVjdCIsImxhc3RDb250YWluZXIiLCJIb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTnVtYmVyIiwibGVuZ3RoIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZUVudGVyIiwibW91c2VPdXQiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsQnkiLCJuZXh0UHJldlByb2plY3RzMSIsIm5leHRQcmV2UHJvamVjdHMyIiwiY29weVRleHQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsIm5leHRQcmV2UHJvamVjdHMiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==