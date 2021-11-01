"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\Tudo Thyago\\Coisas pessoais\\Cursos e Programa\xE7\xE3o em Geral\\projetos\\portfolio\\pages\\index.js";



let notMobile = true;
let currentProject = 0;
let maxProjects;
let mouseenter = false;
let project;
let lastContainer = 0;

function Home() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    project = document.querySelectorAll(".c-project");
    maxProjects = Number(document.querySelectorAll(".c-project").length - 1);

    for (let i of project) {
      i.addEventListener("mouseenter", () => {
        mouseEnter();
      });
      i.addEventListener("mouseout", () => {
        mouseOut();
      });
    }

    setInterval(() => {
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
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "icon",
        href: "/images/Logo.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Thyago Araujo Portf\xF3lio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
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
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-container-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-logo",
              src: "./images/Logo.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-introduction",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                children: ["Ol\xE1, eu sou ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "c-name",
                  children: "Thyago Araujo,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 31
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
                className: "c-title",
                children: "DESENVOLVEDOR FRONT-END"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "A procura de uma oportunidade na \xE1rea de desenvolvimento - HTML, CSS, Javascript e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                className: "c-projects-button",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "#projetos",
                  children: "PROJETOS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-skills-container",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-skills",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                  children: "Habilidades:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "js",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#F0DB4F",
                      d: "M1.408 1.408h125.184v125.185H1.408z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#323330",
                      d: "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "node",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#83CD29",
                      d: "M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "jquery",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#0868AC",
                      d: "M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "firebase",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#f58220",
                      d: "M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
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
                        lineNumber: 111,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
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
                        lineNumber: 117,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 118,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          id: "projetos",
          className: "c-projects",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
            children: "PROJETOS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-next-prev-projects",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects1,
              className: "c-projects-1 c-group-button-projects active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects2,
              className: "c-projects-2 c-group-button-projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-box",
            id: "js-box",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/letmeask.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Letmeask"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Letmeask \xE9 uma aplica\xE7\xE3o para tirar d\xFAvidas em que o usu\xE1rio precisa logar com o google para mandar as suas d\xFAvidas e o administrador em uma aula online ou stream responde, podendo marcar as respostas sendo responsidas no momento, marcar como respondida ou apagar. Utilizando react, typescript e firebase."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://letmeask-2c222.web.app",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/letmeask",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/devfinance.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Dev$finance"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Dev$finance \xE9 um projeto feito durante uma maratona da Rocketseat, utilizando Html, Css e Javascript e sua fun\xE7\xE3o \xE9 ajudar na organiza\xE7\xE3o de gastos mensais, tudo utilizando LocalStorage para n\xE3o perder os dados."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
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
                      lineNumber: 190,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Dev-finance",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/Next-Level-Week-Heat.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Next Level Week Heat"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Uma aplica\xE7\xE3o de login e autentica\xE7\xE3o com github para o envio e recebimento de mensagem em tempo real. Utilizando React, Typescript, Sass, Axios e Socket IO para o Front-End, Prisma, Express e JWT no Back-End, React Native, Expo e Moti no mobile."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
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
                      lineNumber: 225,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/e-diarista.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "E-diaristas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "E-diaristas \xE9 um projeto simples com react e react native com uma p\xE1gina que consume uma api e depois renderiza na tela os dados recebidos. O uso da aplica\xE7\xE3o \xE9 para procurar diaristas dispon\xEDveis na regi\xE3o."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/E-diaristas",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/spliter.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Splitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Slitter \xE9 um aplicativo para calculo de gorjeta, com o calculo em si, uma \xE1rea para valores da gorjeta escolhida pelo usu\xE1rio e um bot\xE3o para zerar tudo, outro projeto baseado do site FrontendMentor."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 19
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
                      lineNumber: 279,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/tip-calculator-app-main",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/fancy-border-radius.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Fancy Border Radius"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Fancy Border radius \xE9 um projeto baseado em um dos desafios do reposit\xF3rio App Ideas no github. Nele temos que criar uma interface que o usu\xE1rio possa modificar o border-radius do elemento a vontade e conseguir copia-lo pronto para usar no seu projeto."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 19
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
                      lineNumber: 310,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/Border-radius-Previewer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 315,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 312,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
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
              lineNumber: 324,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-about-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: "SOBRE MIM"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "Sou um programador em busca de uma oportunidade para entrar no mercado. J\xE1 tenho experi\xEAncia na cria\xE7\xE3o de sites responsivos e estou sempre buscando aprender novas ferramentas para melhorar o meu trabalho, com 40+ horas em cursos e 100+ horas em pr\xE1tica. Atualmente estou focando meus estudos em back-ending com Node e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: ["Voc\xEA pode encontrar mais sobre meus projetos e minha rotina de estudos em minha conta no \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  target: "_blank",
                  href: "https://github.com/ThyagoAraujoM",
                  children: "Github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 19
                }, this), "."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 335,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "./assets/CV.pdf",
                download: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  children: "CURR\xCDCULO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "c-email",
                children: ["thyagoaraujomotta@gmail.com", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  onClick: copyText,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "./images/copy-icon.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "c-copy",
                    children: "e-mail copiado"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: ["(27) 9 9975-5684", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://api.whatsapp.com/send?phone=5527999755684",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "./images/whats-icon.svg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-details-2",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

function copyText() {
  let text = "thyagoaraujomotta@gmail.com";
  navigator.clipboard.writeText(text);
  document.querySelector(".c-copy").style.display = "inline-block";
  setTimeout(() => {
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
  document.querySelectorAll(".c-group-button-projects").forEach(i => {
    i.classList.remove("active");
  });
  document.querySelectorAll(".c-group-projects").forEach(i => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUdDLFFBRkgsQ0FFWSxPQUFPZixPQUFPLEdBQUdDLGFBQWpCLENBRlosRUFFNkMsQ0FGN0M7QUFHRCxHQUpELE1BSU87QUFDTEUsSUFBQUEsUUFBUSxDQUNMVyxhQURILENBQ2lCLFNBRGpCLEVBRUdDLFFBRkgsQ0FFWSxPQUFPZixPQUFPLEdBQUdDLGFBQWpCLENBRlosRUFFNkMsQ0FGN0M7QUFHRDs7QUFDREEsRUFBQUEsYUFBYSxHQUFHRCxPQUFoQjs7QUFFQSxNQUFJQSxPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNoQkcsSUFBQUEsUUFBUSxDQUFDVyxhQUFULENBQXVCLGVBQXZCLEVBQXdDYyxTQUF4QyxDQUFrREUsR0FBbEQsQ0FBc0QsUUFBdEQ7QUFDRCxHQUZELE1BRU8sSUFBSTlCLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ3ZCRyxJQUFBQSxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NjLFNBQXhDLENBQWtERSxHQUFsRCxDQUFzRCxRQUF0RDtBQUNEO0FBQ0Y7O0FBRUQsaUVBQWU1QixJQUFmOzs7Ozs7Ozs7O0FDdGFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxubGV0IG5vdE1vYmlsZSA9IHRydWU7XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IDA7XHJcbmxldCBtYXhQcm9qZWN0cztcclxubGV0IG1vdXNlZW50ZXIgPSBmYWxzZTtcclxubGV0IHByb2plY3Q7XHJcbmxldCBsYXN0Q29udGFpbmVyID0gMDtcclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1wcm9qZWN0XCIpO1xyXG4gICAgbWF4UHJvamVjdHMgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXByb2plY3RcIikubGVuZ3RoIC0gMSk7XHJcbiAgICBmb3IgKGxldCBpIG9mIHByb2plY3QpIHtcclxuICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgbW91c2VFbnRlcigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICBtb3VzZU91dCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICghbW91c2VlbnRlcikge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID49IG1heFByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gMDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIikuc2Nyb2xsQnkoLTI0NSAqIG1heFByb2plY3RzLCAwKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpLnNjcm9sbEJ5KDI0NSwgMCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBub3RNb2JpbGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFub3RNb2JpbGUpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpLnNjcm9sbEJ5KC05MDAsIDApO1xyXG4gICAgICAgICAgbm90TW9iaWxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDQwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9J1VURi04JyAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9J1gtVUEtQ29tcGF0aWJsZScgY29udGVudD0nSUU9ZWRnZScgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cclxuICAgICAgICA8bGluayByZWw9J3ByZWNvbm5lY3QnIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdwcmVjb25uZWN0JyBocmVmPSdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyBjcm9zc29yaWdpbiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjp3Z2h0QDQwMDs3MDAmZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJ1xyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvaW1hZ2VzL0xvZ28uc3ZnJyAvPlxyXG4gICAgICAgIDx0aXRsZT5UaHlhZ28gQXJhdWpvIFBvcnRmw7NsaW88L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWNvbnRhaW5lci1nZXJhbCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWNvbXB1dGVyLWltYWdlJ1xyXG4gICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvY29tcHV0YWRvci5zdmcnXHJcbiAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWNvbnRhaW5lci1jb250ZW50Jz5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYy1sb2dvJyBzcmM9Jy4vaW1hZ2VzL0xvZ28uc3ZnJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1pbnRyb2R1Y3Rpb24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIE9sw6EsIGV1IHNvdSA8c3BhbiBjbGFzc05hbWU9J2MtbmFtZSc+VGh5YWdvIEFyYXVqbyw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjLXRpdGxlJz5ERVNFTlZPTFZFRE9SIEZST05ULUVORDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgQSBwcm9jdXJhIGRlIHVtYSBvcG9ydHVuaWRhZGUgbmEgw6FyZWEgZGUgZGVzZW52b2x2aW1lbnRvIC1cclxuICAgICAgICAgICAgICAgICAgSFRNTCwgQ1NTLCBKYXZhc2NyaXB0IGUgUmVhY3QuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYy1wcm9qZWN0cy1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScjcHJvamV0b3MnPlBST0pFVE9TPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Mtc2tpbGxzLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1za2lsbHMnPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+SGFiaWxpZGFkZXM6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nanMnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNGMERCNEYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xLjQwOCAxLjQwOGgxMjUuMTg0djEyNS4xODVIMS40MDh6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjMzIzMzMwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPSdNMTE2LjM0NyA5Ni43MzZjLS45MTctNS43MTEtNC42NDEtMTAuNTA4LTE1LjY3Mi0xNC45ODEtMy44MzItMS43NjEtOC4xMDQtMy4wMjItOS4zNzctNS45MjYtLjQ1Mi0xLjY5LS41MTItMi42NDItLjIyNi0zLjY2NS44MjEtMy4zMiA0Ljc4NC00LjM1NSA3LjkyNS0zLjQwMyAyLjAyMy42NzggMy45MzggMi4yMzcgNS4wOTMgNC43MjQgNS40MDItMy40OTggNS4zOTEtMy40NzUgOS4xNjMtNS44NzktMS4zODEtMi4xNDEtMi4xMTgtMy4xMjktMy4wMjItNC4wNDUtMy4yNDktMy42MjktNy42NzYtNS40OTgtMTQuNzU2LTUuMzU1bC0zLjY4OC40NzdjLTMuNTM0Ljg5My02LjkwMiAyLjc0OC04Ljg3NyA1LjIzNS01LjkyNiA2LjcyNC00LjIzNiAxOC40OTIgMi45NzUgMjMuMzM1IDcuMTA0IDUuMzMyIDE3LjU0IDYuNTQ1IDE4Ljg3MyAxMS41MzEgMS4yOTcgNi4xMDQtNC40ODYgOC4wOC0xMC4yMzQgNy4zNzgtNC4yMzYtLjg4MS02LjU5Mi0zLjAzNC05LjEzOS02Ljk0OS00LjY4OCAyLjcxMy00LjY4OCAyLjcxMy05LjUwOCA1LjQ4NSAxLjE0MyAyLjQ5OSAyLjM0NCAzLjYzIDQuMjYgNS43OTUgOS4wNjggOS4xOTggMzEuNzYgOC43NDYgMzUuODMtNS4xNzYuMTY1LS40NzggMS4yNjEtMy42NjYuMzgtOC41ODF6TTY5LjQ2MiA1OC45NDNINTcuNzUzbC0uMDQ4IDMwLjI3MmMwIDYuNDM4LjMzMyAxMi4zNC0uNzE0IDE0LjE0OS0xLjcxMyAzLjU1OC02LjE1MiAzLjExNy04LjE3NSAyLjQyNy0yLjA1OS0xLjAxMi0zLjEwNi0yLjQ1MS00LjMxOS00LjQ4NS0uMzMzLS41ODQtLjU4My0xLjAzNi0uNjY3LTEuMDcxbC05LjUyIDUuODNjMS41ODMgMy4yNDkgMy45MTUgNi4wNjkgNi45MDIgNy45MDEgNC40NjIgMi42NzggMTAuNDU5IDMuNDk5IDE2LjczMSAyLjA1OSA0LjA4Mi0xLjE4OSA3LjYwNC0zLjY1MiA5LjQ0OC03LjQwMSAyLjY2Ni00LjkxNSAyLjA5NC0xMC44NjQgMi4wNy0xNy40NDQuMDYtMTAuNzM1LjAwMS0yMS40NjguMDAxLTMyLjIzN3onPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nbm9kZScgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzgzQ0QyOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTExMi43NzEgMzAuMzM0TDY4LjY3NCA0LjcyOWMtMi43ODEtMS41ODQtNi40MDItMS41ODQtOS4yMDUgMEwxNC45MDEgMzAuMzM0QzEyLjAzMSAzMS45ODUgMTAgMzUuMDg4IDEwIDM4LjQwN3Y1MS4xNDJjMCAzLjMxOSAyLjA4NCA2LjQyMyA0Ljk1NCA4LjA4M2wxMS43NzUgNi42ODhjNS42MjggMi43NzIgNy42MTcgMi43NzIgMTAuMTc4IDIuNzcyIDguMzMzIDAgMTMuMDkzLTUuMDM5IDEzLjA5My0xMy44Mjh2LTUwLjQ5YzAtLjcxMy0uMzcxLTEuNzc0LTEuMDcxLTEuNzc0aC01LjYyM0M0Mi41OTQgNDEgNDEgNDIuMDYxIDQxIDQyLjc3M3Y1MC40OWMwIDMuODk2LTMuNTI0IDcuNzczLTEwLjExIDQuNDhMMTguNzIzIDkwLjczYy0uNDI0LS4yMy0uNzIzLS42OTMtLjcyMy0xLjE4MVYzOC40MDdjMC0uNDgyLjU1NS0uOTY2Ljk4Mi0xLjIxM2w0NC40MjQtMjUuNTYxYy40MTUtLjIzNSAxLjAyNS0uMjM1IDEuNDM5IDBsNDMuODgyIDI1LjU1NWMuNDIuMjUzLjI3Mi43MjIuMjcyIDEuMjE5djUxLjE0MmMwIC40ODguMTgzLjk2My0uMjMyIDEuMTk4bC00NC4wODYgMjUuNTc2Yy0uMzc4LjIyNy0uODQ3LjIyNy0xLjI2MSAwbC0xMS4zMDctNi43NDljLS4zNDEtLjE5OC0uNzQ2LS4yNjktMS4wNzMtLjA4Ni0zLjE0NiAxLjc4My0zLjcyNiAyLjAyLTYuNjc3IDMuMDQzLS43MjYuMjUzLTEuNzk3LjY5Mi40MSAxLjkyOWwxNC43OTggOC43NTRhOS4yOTQgOS4yOTQgMCAwMDQuNjQ3IDEuMjQ2YzEuNjQyIDAgMy4yNS0uNDI2IDQuNjY3LTEuMjQ2bDQzLjg4NS0yNS41ODJjMi44Ny0xLjY3MiA0LjIzLTQuNzY0IDQuMjMtOC4wODNWMzguNDA3YzAtMy4zMTktMS4zNi02LjQxNC00LjIyOS04LjA3M3pNNzcuOTEgODEuNDQ1Yy0xMS43MjYgMC0xNC4zMDktMy4yMzUtMTUuMTctOS4wNjYtLjEtLjYyOC0uNjMzLTEuMzc5LTEuMjcyLTEuMzc5aC01LjczMWMtLjcwOSAwLTEuMjc5Ljg2LTEuMjc5IDEuNTY2IDAgNy40NjYgNC4wNTkgMTYuNTEyIDIzLjQ1MyAxNi41MTIgMTQuMDM5IDAgMjIuMDg4LTUuNDU1IDIyLjA4OC0xNS4xMDkgMC05LjU3Mi02LjQ2Ny0xMi4wODQtMjAuMDgyLTEzLjg4Ni0xMy43NjItMS44MTktMTUuMTYtMi43MzgtMTUuMTYtNS45NjIgMC0yLjY1OCAxLjE4NC02LjIwMyAxMS4zNzQtNi4yMDMgOS4xMDUgMCAxMi40NjEgMS45NTQgMTMuODQyIDguMDkxLjExOC41NzcuNjQ1Ljk5MSAxLjI0Ljk5MWg1Ljc1NGMuMzU0IDAgLjY5Mi0uMTQzLjk0LS4zOTYuMjQtLjI3Mi4zNjctLjYxMy4zMzUtLjk3OS0uODkxLTEwLjU2OC03LjkxMi0xNS40OTMtMjIuMTEyLTE1LjQ5My0xMi42MzEgMC0yMC4xNjYgNS4zMzQtMjAuMTY2IDE0LjI3NSAwIDkuNjk4IDcuNDk3IDEyLjM3OCAxOS42MjIgMTMuNTc3IDE0LjUwNSAxLjQyMiAxNS42MzMgMy41NDIgMTUuNjMzIDYuMzk1IDAgNC45NTUtMy45NzggNy4wNjYtMTMuMzA5IDcuMDY2eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdqcXVlcnknIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyMwODY4QUMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9J005LjYyNSAzMi4xODFDLTEuNDA0IDQ4LjAzMi0uMDMxIDY4LjY1NyA4LjM5NCA4NS41MDFjLjIuNDA0LjQxLjgwMS42MTcgMS4xOThsLjM5NC43NTkuMjQ2LjQzNy40MzkuNzg2Yy4yNjIuNDYxLjUzLjkyLjgwNCAxLjM3OWwuNDU5Ljc1NmMuMzA0LjQ5MS42MTUuOTc2LjkzMyAxLjQ2bC4zOTguNjE0Yy40MzkuNjU1Ljg4OCAxLjMwOSAxLjM1MiAxLjk1MWwuMDM5LjA1LjIyOC4zMDhjLjQwMS41NTMuODE0IDEuMDk5IDEuMjMyIDEuNjM5bC40NjQuNTljLjM3My40NjkuNzUyLjkzNSAxLjEzOCAxLjM5OWwuNDM1LjUyYTc1LjI3IDc1LjI3IDAgMDAxLjU4NiAxLjgxMmwuMDMzLjAzMy4wNjEuMDY4YTgwLjQ0IDgwLjQ0IDAgMDAxLjYxMiAxLjY5OWwuNTE3LjUyMWMuNDIzLjQyNi44NTMuODQ1IDEuMjg3IDEuMjYybC41MjcuNWMuNTguNTQ3IDEuMTY2IDEuMDgzIDEuNzY0IDEuNjA3bC4wMjguMDIyLjMwNy4yNjJjLjUyNy40NTYgMS4wNjMuOTA5IDEuNjAzIDEuMzUzbC42NjQuNTI5Yy40NDEuMzU0Ljg4Ny43MDIgMS4zMzYgMS4wNDRsLjcxNC41NDNjLjQ5Ni4zNjUuOTk1LjcyNCAxLjQ5OSAxLjA3NWwuNTQ2LjM4Ny4xNS4xMDdjLjQ3OC4zMjkuOTY3LjY0NiAxLjQ1Ni45NjNsLjYzLjQyYy43NS40NzQgMS41MS45NDMgMi4yNzkgMS4zOTZsLjYzLjM1NWMuNTY1LjMyNiAxLjEzNC42NDYgMS43MS45NTkuMzEyLjE2OC42MzIuMzI3Ljk0Ni40ODguNDA3LjIxMy44MTEuNDI5IDEuMjI1LjYzNmwuMjgzLjEzNy41MDEuMjQyYy42NDEuMzA2IDEuMjg3LjYwNyAxLjk0Ljg5N2wuNDEuMTg0YTY2LjkyIDY2LjkyIDAgMDAyLjI2My45NDFsLjU1MS4yMTdjLjcwNC4yNzEgMS40MTguNTM5IDIuMTM1Ljc5MWwuMjY4LjA5M2MuNzg3LjI3NSAxLjU4MS41MyAyLjM4MS43NzlsLjU3NS4xNzJjLjgxNC4yNDUgMS42MTkuNTM4IDIuNDU4LjY5MyA1My4zMzkgOS43MjcgNjguODMzLTMyLjA1MyA2OC44MzMtMzIuMDUzLTEzLjAxMyAxNi45NTMtMzYuMTExIDIxLjQyNS01Ny45OTYgMTYuNDQ2LS44MjktLjE4Ny0xLjYzMy0uNDQ2LTIuNDQyLS42ODVsLS42MDktLjE4NWE3Mi40OTggNzIuNDk4IDAgMDEtMi4zNTItLjc2NWwtLjMyMy0uMTE3YTcyLjI0NSA3Mi4yNDUgMCAwMS0yLjA3NC0uNzY5bC0uNTgyLS4yMjljLS43NTItLjI5Ny0xLjUtLjYwNy0yLjIzOS0uOTMxbC0uNDQ3LS4xOThhOTIuODU3IDkyLjg1NyAwIDAxLTEuODg5LS44NzlsLS41NDYtLjI2MmMtLjQ5MS0uMjM5LS45NzctLjQ5My0xLjQ2MS0uNzQzLS4zMjQtLjE3MS0uNjU0LS4zMzItLjk3NS0uNTFhNTguNTkxIDU4LjU5MSAwIDAxLTEuNzUxLS45ODJsLS41OTEtLjMzYTgxLjIyMSA4MS4yMjEgMCAwMS0yLjI4LTEuMzk3bC0uNjE1LS40MWE1OS4yODMgNTkuMjgzIDAgMDEtMS42MjMtMS4wNzlsLS41MjItLjM2N2E4OS4yODcgODkuMjg3IDAgMDEtMS41MzQtMS4xMDlsLS42NzktLjUxNGE2NC40NzMgNjQuNDczIDAgMDEtMS4zODQtMS4wODJsLS42MTctLjQ5NWE4Mi42OTMgODIuNjkzIDAgMDEtMS43MjQtMS40NTNsLS4xODktLjE1OWE4My40NjYgODMuNDY2IDAgMDEtMS44MTItMS42NDdsLS41MTEtLjQ5MWMtLjQ0MS0uNDItLjg3NS0uODQzLTEuMzAyLTEuMjc3bC0uNTEtLjUwOWE3MC41NDEgNzAuNTQxIDAgMDEtMS41OTgtMS42OWwtLjA3OS0uMDg0YTY3LjM5IDY3LjM5IDAgMDEtMS42MjEtMS44NDRsLS40MjQtLjUwNGE3MC42MDIgNzAuNjAyIDAgMDEtMS4xNjctMS40NDJsLS40MjctLjUzMmE3OC40MDYgNzguNDA2IDAgMDEtMS4zNDctMS43OTRjLTEyLjE1LTE2LjU3NC0xNi41MTYtMzkuNDMyLTYuODA1LTU4LjIwNG0yNS42MjktMi40MzRjLTcuOTc3IDExLjQ3OC03LjU0MyAyNi44NDQtMS4zMjEgMzguOTgzYTUwLjU4MSA1MC41ODEgMCAwMDMuNTI4IDUuODg5YzEuMTk1IDEuNzEzIDIuNTIgMy43NTEgNC4xMDYgNS4xMjdhNDguMTExIDQ4LjExMSAwIDAwMS43OSAxLjg1OGwuNDcyLjQ2NWE1MS42OSA1MS42OSAwIDAwMS44MjggMS42OThsLjA3NC4wNjQuMDE4LjAxOGE1NS4yNjggNTUuMjY4IDAgMDAyLjEzNSAxLjc2N2wuNDg1LjM3OGE1NC4wOCA1NC4wOCAwIDAwMi4yMzMgMS42MzFsLjA2NS4wNDljLjMzNi4yMzIuNjc4LjQ0OCAxLjAxOS42NzJsLjQ4My4zMTljLjU0NC4zNDkgMS4wOTUuNjg5IDEuNjU1IDEuMDE1bC4yMzUuMTM2Yy40ODMuMjc4Ljk3Mi41NTIgMS40NjMuODE4bC41MjEuMjcxYy4zMzkuMTc3LjY3OC4zNTggMS4wMjMuNTNsLjE1NS4wN2MuNzAzLjM0NiAxLjQxMi42OCAyLjEzNi45OTVsLjQ3Mi4xOTRjLjU3OS4yNDYgMS4xNjQuNDg2IDEuNzUuNzFsLjc1LjI3NWMuNTMzLjE5OCAxLjA2OC4zNzggMS42MDcuNTU5bC43MjcuMjMzYy43NjcuMjM4IDEuNTI1LjUzOSAyLjMyNC42NzIgNDEuMTgzIDYuODIzIDUwLjY5MS0yNC44ODYgNTAuNjkxLTI0Ljg4Ni04LjU3IDEyLjM0My0yNS4xNjggMTguMjMzLTQyLjg3OSAxMy42MzVhNTAuMzc2IDUwLjM3NiAwIDAxLTIuMzMzLS42NzRsLS43MDEtLjIyN2E0NS40MjMgNDUuNDIzIDAgMDEtMS42MzEtLjU2MmwtLjczNi0uMjc0YTU2LjQxOCA1Ni40MTggMCAwMS0xLjc1Ni0uNzA4bC0uNDczLS4yYTQ3LjcyOCA0Ny43MjggMCAwMS0yLjE0OC0uOTk5Yy0uMzYzLS4xNzctLjcyLS4zNjQtMS4wNzgtLjU0OGwtLjYyMi0uMzJhNDQuNTAyIDQ0LjUwMiAwIDAxLTEuMzYzLS43N2wtLjMyNi0uMTg1YTQ3Ljg0NCA0Ny44NDQgMCAwMS0xLjY1MS0xLjAwOGwtLjQ5OC0uMzMyYTYxLjc1OSA2MS43NTkgMCAwMS0xLjA2OS0uNzA3IDU3LjQ1NiA1Ny40NTYgMCAwMS0yLjIyNi0xLjYyOGwtLjUwMS0uMzk1Yy03Ljc1Mi02LjEyLTEzLjg5OC0xNC40ODYtMTYuODE5LTIzLjk3MS0zLjA2Mi05LjgzNi0yLjQwMi0yMC44NzggMi45MDMtMjkuODRtMjIuMjc4LS43NzVjLTQuNzAyIDYuOTItNS4xNjQgMTUuNTE0LTEuOTAxIDIzLjE1NiAzLjQ0MSA4LjExMyAxMC40OTEgMTQuNDc2IDE4LjcyIDE3LjQ5NS4zMzkuMTI1LjY3OS4yMzcgMS4wMjIuMzU0bC40NTEuMTQzYy40ODUuMTUyLjk2Ni4zMjkgMS40NjcuNDI0IDIyLjc0IDQuMzk0IDI4LjkwOC0xMS42NjkgMzAuNTQ5LTE0LjAzNC01LjQwMiA3Ljc3OS0xNC40ODIgOS42NDYtMjUuNjIzIDYuOTQyLS44OC0uMjEzLTEuODQ3LS41MzEtMi42OTUtLjgzMmEzMy4yNDIgMzMuMjQyIDAgMDEtMy4yMDEtMS4zMjkgMzMuMjE1IDMzLjIxNSAwIDAxLTUuNjEyLTMuNDI0Yy05Ljk2OS03LjU2NS0xNi4xNjItMjEuOTk0LTkuNjU3LTMzLjc0NSc+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdmaXJlYmFzZScgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nI2Y1ODIyMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTI3LjM1IDgwLjUybDEwLjY4LTY4LjQ0Yy4zNy0yLjMzIDMuNS0yLjg5IDQuNi0uOGwxMS40OCAyMS40OC0yNi43NiA0Ny43NnptNzUuOTQgMTYuNjNMOTMuMSAzNC4xMWMtLjMxLTEuOTYtMi43Ni0yLjc2LTQuMTctMS4zNUwyNC43MSA5Ny4xNWwzNS41NCAxOS45NWE3LjQ0NyA3LjQ0NyAwIDAwNy4xOCAwbDM1Ljg2LTE5Ljk1em0tMjguODUtNTVMNjYuMjEgMjYuNWMtLjkyLTEuNzgtMy40NC0xLjc4LTQuMzYgMEwyNS43IDkwLjk1bDQ4Ljc0LTQ4Ljh6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD0nIzExNDc5ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9JzY0JyBjeT0nNjQnIHI9JzExLjQnPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTA3LjMgNDUuMmMtMi4yLS44LTQuNS0xLjYtNi45LTIuMy42LTIuNCAxLjEtNC44IDEuNS03LjEgMi4xLTEzLjItLjItMjIuNS02LjYtMjYuMS0xLjktMS4xLTQtMS42LTYuNC0xLjYtNyAwLTE1LjkgNS4yLTI0LjkgMTMuOS05LTguNy0xNy45LTEzLjktMjQuOS0xMy45LTIuNCAwLTQuNS41LTYuNCAxLjYtNi40IDMuNy04LjcgMTMtNi42IDI2LjEuNCAyLjMuOSA0LjcgMS41IDcuMS0yLjQuNy00LjcgMS40LTYuOSAyLjNDOC4yIDUwIDEuNCA1Ni42IDEuNCA2NHM2LjkgMTQgMTkuMyAxOC44YzIuMi44IDQuNSAxLjYgNi45IDIuMy0uNiAyLjQtMS4xIDQuOC0xLjUgNy4xLTIuMSAxMy4yLjIgMjIuNSA2LjYgMjYuMSAxLjkgMS4xIDQgMS42IDYuNCAxLjYgNy4xIDAgMTYtNS4yIDI0LjktMTMuOSA5IDguNyAxNy45IDEzLjkgMjQuOSAxMy45IDIuNCAwIDQuNS0uNSA2LjQtMS42IDYuNC0zLjcgOC43LTEzIDYuNi0yNi4xLS40LTIuMy0uOS00LjctMS41LTcuMSAyLjQtLjcgNC43LTEuNCA2LjktMi4zIDEyLjUtNC44IDE5LjMtMTEuNCAxOS4zLTE4LjhzLTYuOC0xNC0xOS4zLTE4Ljh6TTkyLjUgMTQuN2M0LjEgMi40IDUuNSA5LjggMy44IDIwLjMtLjMgMi4xLS44IDQuMy0xLjQgNi42LTUuMi0xLjItMTAuNy0yLTE2LjUtMi41LTMuNC00LjgtNi45LTkuMS0xMC40LTEzIDcuNC03LjMgMTQuOS0xMi4zIDIxLTEyLjMgMS4zIDAgMi41LjMgMy41Ljl6TTgxLjMgNzRjLTEuOCAzLjItMy45IDYuNC02LjEgOS42LTMuNy4zLTcuNC40LTExLjIuNC0zLjkgMC03LjYtLjEtMTEuMi0uNC0yLjItMy4yLTQuMi02LjQtNi05LjYtMS45LTMuMy0zLjctNi43LTUuMy0xMCAxLjYtMy4zIDMuNC02LjcgNS4zLTEwIDEuOC0zLjIgMy45LTYuNCA2LjEtOS42IDMuNy0uMyA3LjQtLjQgMTEuMi0uNCAzLjkgMCA3LjYuMSAxMS4yLjQgMi4yIDMuMiA0LjIgNi40IDYgOS42IDEuOSAzLjMgMy43IDYuNyA1LjMgMTAtMS43IDMuMy0zLjQgNi42LTUuMyAxMHptOC4zLTMuM2MxLjUgMy41IDIuNyA2LjkgMy44IDEwLjMtMy40LjgtNyAxLjQtMTAuOCAxLjkgMS4yLTEuOSAyLjUtMy45IDMuNi02IDEuMi0yLjEgMi4zLTQuMiAzLjQtNi4yek02NCA5Ny44Yy0yLjQtMi42LTQuNy01LjQtNi45LTguMyAyLjMuMSA0LjYuMiA2LjkuMiAyLjMgMCA0LjYtLjEgNi45LS4yLTIuMiAyLjktNC41IDUuNy02LjkgOC4zem0tMTguNi0xNWMtMy44LS41LTcuNC0xLjEtMTAuOC0xLjkgMS4xLTMuMyAyLjMtNi44IDMuOC0xMC4zIDEuMSAyIDIuMiA0LjEgMy40IDYuMSAxLjIgMi4yIDIuNCA0LjEgMy42IDYuMXptLTctMjUuNWMtMS41LTMuNS0yLjctNi45LTMuOC0xMC4zIDMuNC0uOCA3LTEuNCAxMC44LTEuOS0xLjIgMS45LTIuNSAzLjktMy42IDYtMS4yIDIuMS0yLjMgNC4yLTMuNCA2LjJ6TTY0IDMwLjJjMi40IDIuNiA0LjcgNS40IDYuOSA4LjMtMi4zLS4xLTQuNi0uMi02LjktLjItMi4zIDAtNC42LjEtNi45LjIgMi4yLTIuOSA0LjUtNS43IDYuOS04LjN6bTIyLjIgMjFsLTMuNi02YzMuOC41IDcuNCAxLjEgMTAuOCAxLjktMS4xIDMuMy0yLjMgNi44LTMuOCAxMC4zLTEuMS0yLjEtMi4yLTQuMi0zLjQtNi4yek0zMS43IDM1Yy0xLjctMTAuNS0uMy0xNy45IDMuOC0yMC4zIDEtLjYgMi4yLS45IDMuNS0uOSA2IDAgMTMuNSA0LjkgMjEgMTIuMy0zLjUgMy44LTcgOC4yLTEwLjQgMTMtNS44LjUtMTEuMyAxLjQtMTYuNSAyLjUtLjYtMi4zLTEtNC41LTEuNC02LjZ6TTcgNjRjMC00LjcgNS43LTkuNyAxNS43LTEzLjQgMi0uOCA0LjItMS41IDYuNC0yLjEgMS42IDUgMy42IDEwLjMgNiAxNS42LTIuNCA1LjMtNC41IDEwLjUtNiAxNS41QzE1LjMgNzUuNiA3IDY5LjYgNyA2NHptMjguNSA0OS4zYy00LjEtMi40LTUuNS05LjgtMy44LTIwLjMuMy0yLjEuOC00LjMgMS40LTYuNiA1LjIgMS4yIDEwLjcgMiAxNi41IDIuNSAzLjQgNC44IDYuOSA5LjEgMTAuNCAxMy03LjQgNy4zLTE0LjkgMTIuMy0yMSAxMi4zLTEuMyAwLTIuNS0uMy0zLjUtLjl6TTk2LjMgOTNjMS43IDEwLjUuMyAxNy45LTMuOCAyMC4zLTEgLjYtMi4yLjktMy41LjktNiAwLTEzLjUtNC45LTIxLTEyLjMgMy41LTMuOCA3LTguMiAxMC40LTEzIDUuOC0uNSAxMS4zLTEuNCAxNi41LTIuNS42IDIuMyAxIDQuNSAxLjQgNi42em05LTE1LjZjLTIgLjgtNC4yIDEuNS02LjQgMi4xLTEuNi01LTMuNi0xMC4zLTYtMTUuNiAyLjQtNS4zIDQuNS0xMC41IDYtMTUuNSAxMy44IDQgMjIuMSAxMCAyMi4xIDE1LjYgMCA0LjctNS44IDkuNy0xNS43IDEzLjR6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J3JlYWN0JyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPScjNjFEQUZCJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0nNjQnIGN5PSc2NCcgcj0nMTEuNCc+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMDcuMyA0NS4yYy0yLjItLjgtNC41LTEuNi02LjktMi4zLjYtMi40IDEuMS00LjggMS41LTcuMSAyLjEtMTMuMi0uMi0yMi41LTYuNi0yNi4xLTEuOS0xLjEtNC0xLjYtNi40LTEuNi03IDAtMTUuOSA1LjItMjQuOSAxMy45LTktOC43LTE3LjktMTMuOS0yNC45LTEzLjktMi40IDAtNC41LjUtNi40IDEuNi02LjQgMy43LTguNyAxMy02LjYgMjYuMS40IDIuMy45IDQuNyAxLjUgNy4xLTIuNC43LTQuNyAxLjQtNi45IDIuM0M4LjIgNTAgMS40IDU2LjYgMS40IDY0czYuOSAxNCAxOS4zIDE4LjhjMi4yLjggNC41IDEuNiA2LjkgMi4zLS42IDIuNC0xLjEgNC44LTEuNSA3LjEtMi4xIDEzLjIuMiAyMi41IDYuNiAyNi4xIDEuOSAxLjEgNCAxLjYgNi40IDEuNiA3LjEgMCAxNi01LjIgMjQuOS0xMy45IDkgOC43IDE3LjkgMTMuOSAyNC45IDEzLjkgMi40IDAgNC41LS41IDYuNC0xLjYgNi40LTMuNyA4LjctMTMgNi42LTI2LjEtLjQtMi4zLS45LTQuNy0xLjUtNy4xIDIuNC0uNyA0LjctMS40IDYuOS0yLjMgMTIuNS00LjggMTkuMy0xMS40IDE5LjMtMTguOHMtNi44LTE0LTE5LjMtMTguOHpNOTIuNSAxNC43YzQuMSAyLjQgNS41IDkuOCAzLjggMjAuMy0uMyAyLjEtLjggNC4zLTEuNCA2LjYtNS4yLTEuMi0xMC43LTItMTYuNS0yLjUtMy40LTQuOC02LjktOS4xLTEwLjQtMTMgNy40LTcuMyAxNC45LTEyLjMgMjEtMTIuMyAxLjMgMCAyLjUuMyAzLjUuOXpNODEuMyA3NGMtMS44IDMuMi0zLjkgNi40LTYuMSA5LjYtMy43LjMtNy40LjQtMTEuMi40LTMuOSAwLTcuNi0uMS0xMS4yLS40LTIuMi0zLjItNC4yLTYuNC02LTkuNi0xLjktMy4zLTMuNy02LjctNS4zLTEwIDEuNi0zLjMgMy40LTYuNyA1LjMtMTAgMS44LTMuMiAzLjktNi40IDYuMS05LjYgMy43LS4zIDcuNC0uNCAxMS4yLS40IDMuOSAwIDcuNi4xIDExLjIuNCAyLjIgMy4yIDQuMiA2LjQgNiA5LjYgMS45IDMuMyAzLjcgNi43IDUuMyAxMC0xLjcgMy4zLTMuNCA2LjYtNS4zIDEwem04LjMtMy4zYzEuNSAzLjUgMi43IDYuOSAzLjggMTAuMy0zLjQuOC03IDEuNC0xMC44IDEuOSAxLjItMS45IDIuNS0zLjkgMy42LTYgMS4yLTIuMSAyLjMtNC4yIDMuNC02LjJ6TTY0IDk3LjhjLTIuNC0yLjYtNC43LTUuNC02LjktOC4zIDIuMy4xIDQuNi4yIDYuOS4yIDIuMyAwIDQuNi0uMSA2LjktLjItMi4yIDIuOS00LjUgNS43LTYuOSA4LjN6bS0xOC42LTE1Yy0zLjgtLjUtNy40LTEuMS0xMC44LTEuOSAxLjEtMy4zIDIuMy02LjggMy44LTEwLjMgMS4xIDIgMi4yIDQuMSAzLjQgNi4xIDEuMiAyLjIgMi40IDQuMSAzLjYgNi4xem0tNy0yNS41Yy0xLjUtMy41LTIuNy02LjktMy44LTEwLjMgMy40LS44IDctMS40IDEwLjgtMS45LTEuMiAxLjktMi41IDMuOS0zLjYgNi0xLjIgMi4xLTIuMyA0LjItMy40IDYuMnpNNjQgMzAuMmMyLjQgMi42IDQuNyA1LjQgNi45IDguMy0yLjMtLjEtNC42LS4yLTYuOS0uMi0yLjMgMC00LjYuMS02LjkuMiAyLjItMi45IDQuNS01LjcgNi45LTguM3ptMjIuMiAyMWwtMy42LTZjMy44LjUgNy40IDEuMSAxMC44IDEuOS0xLjEgMy4zLTIuMyA2LjgtMy44IDEwLjMtMS4xLTIuMS0yLjItNC4yLTMuNC02LjJ6TTMxLjcgMzVjLTEuNy0xMC41LS4zLTE3LjkgMy44LTIwLjMgMS0uNiAyLjItLjkgMy41LS45IDYgMCAxMy41IDQuOSAyMSAxMi4zLTMuNSAzLjgtNyA4LjItMTAuNCAxMy01LjguNS0xMS4zIDEuNC0xNi41IDIuNS0uNi0yLjMtMS00LjUtMS40LTYuNnpNNyA2NGMwLTQuNyA1LjctOS43IDE1LjctMTMuNCAyLS44IDQuMi0xLjUgNi40LTIuMSAxLjYgNSAzLjYgMTAuMyA2IDE1LjYtMi40IDUuMy00LjUgMTAuNS02IDE1LjVDMTUuMyA3NS42IDcgNjkuNiA3IDY0em0yOC41IDQ5LjNjLTQuMS0yLjQtNS41LTkuOC0zLjgtMjAuMy4zLTIuMS44LTQuMyAxLjQtNi42IDUuMiAxLjIgMTAuNyAyIDE2LjUgMi41IDMuNCA0LjggNi45IDkuMSAxMC40IDEzLTcuNCA3LjMtMTQuOSAxMi4zLTIxIDEyLjMtMS4zIDAtMi41LS4zLTMuNS0uOXpNOTYuMyA5M2MxLjcgMTAuNS4zIDE3LjktMy44IDIwLjMtMSAuNi0yLjIuOS0zLjUuOS02IDAtMTMuNS00LjktMjEtMTIuMyAzLjUtMy44IDctOC4yIDEwLjQtMTMgNS44LS41IDExLjMtMS40IDE2LjUtMi41LjYgMi4zIDEgNC41IDEuNCA2LjZ6bTktMTUuNmMtMiAuOC00LjIgMS41LTYuNCAyLjEtMS42LTUtMy42LTEwLjMtNi0xNS42IDIuNC01LjMgNC41LTEwLjUgNi0xNS41IDEzLjggNCAyMi4xIDEwIDIyLjEgMTUuNiAwIDQuNy01LjggOS43LTE1LjcgMTMuNHonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3Nhc3Mvc2Fzcy1vcmlnaW5hbC5zdmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC1vcmlnaW5hbC5zdmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPSdwcm9qZXRvcycgY2xhc3NOYW1lPSdjLXByb2plY3RzJz5cclxuICAgICAgICAgICAgPGgyPlBST0pFVE9TPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtbmV4dC1wcmV2LXByb2plY3RzJz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0UHJldlByb2plY3RzMX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0cy0xIGMtZ3JvdXAtYnV0dG9uLXByb2plY3RzIGFjdGl2ZSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bmV4dFByZXZQcm9qZWN0czJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdHMtMiBjLWdyb3VwLWJ1dHRvbi1wcm9qZWN0cyc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1ib3gnIGlkPSdqcy1ib3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QgJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL2xldG1lYXNrLmdpZidcclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TGV0bWVhc2s8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGV0bWVhc2sgw6kgdW1hIGFwbGljYcOnw6NvIHBhcmEgdGlyYXIgZMO6dmlkYXMgZW0gcXVlIG9cclxuICAgICAgICAgICAgICAgICAgICAgIHVzdcOhcmlvIHByZWNpc2EgbG9nYXIgY29tIG8gZ29vZ2xlIHBhcmEgbWFuZGFyIGFzIHN1YXNcclxuICAgICAgICAgICAgICAgICAgICAgIGTDunZpZGFzIGUgbyBhZG1pbmlzdHJhZG9yIGVtIHVtYSBhdWxhIG9ubGluZSBvdSBzdHJlYW1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbmRlLCBwb2RlbmRvIG1hcmNhciBhcyByZXNwb3N0YXMgc2VuZG8gcmVzcG9uc2lkYXMgbm9cclxuICAgICAgICAgICAgICAgICAgICAgIG1vbWVudG8sIG1hcmNhciBjb21vIHJlc3BvbmRpZGEgb3UgYXBhZ2FyLiBVdGlsaXphbmRvXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWFjdCwgdHlwZXNjcmlwdCBlIGZpcmViYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL2xldG1lYXNrLTJjMjIyLndlYi5hcHAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1zaXRlJz5TSVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL2xldG1lYXNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCBiZy0yJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL2RldmZpbmFuY2UucG5nJ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EZXYkZmluYW5jZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZXYkZmluYW5jZSDDqSB1bSBwcm9qZXRvIGZlaXRvIGR1cmFudGUgdW1hIG1hcmF0b25hIGRhXHJcbiAgICAgICAgICAgICAgICAgICAgICBSb2NrZXRzZWF0LCB1dGlsaXphbmRvIEh0bWwsIENzcyBlIEphdmFzY3JpcHQgZSBzdWEgZnVuw6fDo29cclxuICAgICAgICAgICAgICAgICAgICAgIMOpIGFqdWRhciBuYSBvcmdhbml6YcOnw6NvIGRlIGdhc3RvcyBtZW5zYWlzLCB0dWRvIHV0aWxpemFuZG9cclxuICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZSBwYXJhIG7Do28gcGVyZGVyIG9zIGRhZG9zLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vRGV2LWZpbmFuY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdidG4tc2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNJVEVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9EZXYtZmluYW5jZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2J0bi1naXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHSVRIVUJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0Jz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL05leHQtTGV2ZWwtV2Vlay1IZWF0LmdpZidcclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TmV4dCBMZXZlbCBXZWVrIEhlYXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVW1hIGFwbGljYcOnw6NvIGRlIGxvZ2luIGUgYXV0ZW50aWNhw6fDo28gY29tIGdpdGh1YiBwYXJhIG9cclxuICAgICAgICAgICAgICAgICAgICAgIGVudmlvIGUgcmVjZWJpbWVudG8gZGUgbWVuc2FnZW0gZW0gdGVtcG8gcmVhbC4gVXRpbGl6YW5kb1xyXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QsIFR5cGVzY3JpcHQsIFNhc3MsIEF4aW9zIGUgU29ja2V0IElPIHBhcmEgb1xyXG4gICAgICAgICAgICAgICAgICAgICAgRnJvbnQtRW5kLCBQcmlzbWEsIEV4cHJlc3MgZSBKV1Qgbm8gQmFjay1FbmQsIFJlYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBOYXRpdmUsIEV4cG8gZSBNb3RpIG5vIG1vYmlsZS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9OZXh0LUxldmVsLVdlZWstSGVhdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2J0bi1naXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHSVRIVUJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIERpdmlzw6NvICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvZS1kaWFyaXN0YS5naWYnXHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkUtZGlhcmlzdGFzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIEUtZGlhcmlzdGFzIMOpIHVtIHByb2pldG8gc2ltcGxlcyBjb20gcmVhY3QgZSByZWFjdCBuYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbSB1bWEgcMOhZ2luYSBxdWUgY29uc3VtZSB1bWEgYXBpIGUgZGVwb2lzIHJlbmRlcml6YSBuYVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGVsYSBvcyBkYWRvcyByZWNlYmlkb3MuIE8gdXNvIGRhIGFwbGljYcOnw6NvIMOpIHBhcmFcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2N1cmFyIGRpYXJpc3RhcyBkaXNwb27DrXZlaXMgbmEgcmVnacOjby5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9FLWRpYXJpc3Rhcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QgYmctMic+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9zcGxpdGVyLnBuZydcclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+U3BsaXR0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2xpdHRlciDDqSB1bSBhcGxpY2F0aXZvIHBhcmEgY2FsY3VsbyBkZSBnb3JqZXRhLCBjb20gb1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FsY3VsbyBlbSBzaSwgdW1hIMOhcmVhIHBhcmEgdmFsb3JlcyBkYSBnb3JqZXRhIGVzY29saGlkYVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGVsbyB1c3XDoXJpbyBlIHVtIGJvdMOjbyBwYXJhIHplcmFyIHR1ZG8sIG91dHJvIHByb2pldG9cclxuICAgICAgICAgICAgICAgICAgICAgIGJhc2VhZG8gZG8gc2l0ZSBGcm9udGVuZE1lbnRvci5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3RoeWFnb2FyYXVqb20uZ2l0aHViLmlvL1ByYXRpY2FuZG8tdGVtcGxhdGVzL2luaWNpYW50ZS90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi9pbmRleC5odG1sJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tc2l0ZSc+U0lURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9QcmF0aWNhbmRvLXRlbXBsYXRlcy90cmVlL21haW4vaW5pY2lhbnRlL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCAnPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvZmFuY3ktYm9yZGVyLXJhZGl1cy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkZhbmN5IEJvcmRlciBSYWRpdXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRmFuY3kgQm9yZGVyIHJhZGl1cyDDqSB1bSBwcm9qZXRvIGJhc2VhZG8gZW0gdW0gZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNhZmlvcyBkbyByZXBvc2l0w7NyaW8gQXBwIElkZWFzIG5vIGdpdGh1Yi4gTmVsZSB0ZW1vc1xyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlIGNyaWFyIHVtYSBpbnRlcmZhY2UgcXVlIG8gdXN1w6FyaW8gcG9zc2EgbW9kaWZpY2FyIG9cclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgZG8gZWxlbWVudG8gYSB2b250YWRlIGUgY29uc2VndWlyIGNvcGlhLWxvXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9udG8gcGFyYSB1c2FyIG5vIHNldSBwcm9qZXRvLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vUHJhdGljYW5kby10ZW1wbGF0ZXMvaW5pY2lhbnRlL0JvcmRlci1yYWRpdXMtUHJldmlld2VyL2luZGV4Lmh0bWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1zaXRlJz5TSVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL1ByYXRpY2FuZG8tdGVtcGxhdGVzL3RyZWUvbWFpbi9pbmljaWFudGUvQm9yZGVyLXJhZGl1cy1QcmV2aWV3ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1naXQnPkdJVEhVQjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdjLWFib3V0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWFib3V0Jz5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYy1kZXRhaWxzLTEnIHNyYz0nLi9pbWFnZXMvZGV0YWlscy5zdmcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWFib3V0LWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPlNPQlJFIE1JTTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgU291IHVtIHByb2dyYW1hZG9yIGVtIGJ1c2NhIGRlIHVtYSBvcG9ydHVuaWRhZGUgcGFyYSBlbnRyYXIgbm9cclxuICAgICAgICAgICAgICAgICAgbWVyY2Fkby4gSsOhIHRlbmhvIGV4cGVyacOqbmNpYSBuYSBjcmlhw6fDo28gZGUgc2l0ZXMgcmVzcG9uc2l2b3NcclxuICAgICAgICAgICAgICAgICAgZSBlc3RvdSBzZW1wcmUgYnVzY2FuZG8gYXByZW5kZXIgbm92YXMgZmVycmFtZW50YXMgcGFyYVxyXG4gICAgICAgICAgICAgICAgICBtZWxob3JhciBvIG1ldSB0cmFiYWxobywgY29tIDQwKyBob3JhcyBlbSBjdXJzb3MgZSAxMDArIGhvcmFzXHJcbiAgICAgICAgICAgICAgICAgIGVtIHByw6F0aWNhLiBBdHVhbG1lbnRlIGVzdG91IGZvY2FuZG8gbWV1cyBlc3R1ZG9zIGVtXHJcbiAgICAgICAgICAgICAgICAgIGJhY2stZW5kaW5nIGNvbSBOb2RlIGUgUmVhY3QuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVm9jw6ogcG9kZSBlbmNvbnRyYXIgbWFpcyBzb2JyZSBtZXVzIHByb2pldG9zIGUgbWluaGEgcm90aW5hIGRlXHJcbiAgICAgICAgICAgICAgICAgIGVzdHVkb3MgZW0gbWluaGEgY29udGEgbm8gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTSc+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLi9hc3NldHMvQ1YucGRmJyBkb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5DVVJSw41DVUxPPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjLWVtYWlsJz5cclxuICAgICAgICAgICAgICAgICAgdGh5YWdvYXJhdWpvbW90dGFAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvcHlUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9pbWFnZXMvY29weS1pY29uLnN2ZycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2MtY29weSc+ZS1tYWlsIGNvcGlhZG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAoMjcpIDkgOTk3NS01Njg0XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUyNzk5OTc1NTY4NCdcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vaW1hZ2VzL3doYXRzLWljb24uc3ZnJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjLWRldGFpbHMtMicgc3JjPScuL2ltYWdlcy9kZXRhaWxzLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlUZXh0KCkge1xyXG4gIGxldCB0ZXh0ID0gXCJ0aHlhZ29hcmF1am9tb3R0YUBnbWFpbC5jb21cIjtcclxuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtY29weVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtY29weVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlRW50ZXIoKSB7XHJcbiAgbW91c2VlbnRlciA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3V0KCkge1xyXG4gIG1vdXNlZW50ZXIgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFByZXZQcm9qZWN0czEoKSB7XHJcbiAgbmV4dFByZXZQcm9qZWN0cygxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFByZXZQcm9qZWN0czIoKSB7XHJcbiAgbmV4dFByZXZQcm9qZWN0cygyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFByZXZQcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLWdyb3VwLWJ1dHRvbi1wcm9qZWN0c1wiKS5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLWdyb3VwLXByb2plY3RzXCIpLmZvckVhY2goKGkpID0+IHtcclxuICAgIGkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBpZiAobGFzdENvbnRhaW5lciA8IHByb2plY3QpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKVxyXG4gICAgICAuc2Nyb2xsQnkoOTAwICogKHByb2plY3QgLSBsYXN0Q29udGFpbmVyKSwgMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKVxyXG4gICAgICAuc2Nyb2xsQnkoOTAwICogKHByb2plY3QgLSBsYXN0Q29udGFpbmVyKSwgMCk7XHJcbiAgfVxyXG4gIGxhc3RDb250YWluZXIgPSBwcm9qZWN0O1xyXG5cclxuICBpZiAocHJvamVjdCA9PSAxKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtcHJvamVjdHMtMVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSBpZiAocHJvamVjdCA9PSAyKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtcHJvamVjdHMtMlwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSGVhZCIsIm5vdE1vYmlsZSIsImN1cnJlbnRQcm9qZWN0IiwibWF4UHJvamVjdHMiLCJtb3VzZWVudGVyIiwicHJvamVjdCIsImxhc3RDb250YWluZXIiLCJIb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiTnVtYmVyIiwibGVuZ3RoIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZUVudGVyIiwibW91c2VPdXQiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsQnkiLCJuZXh0UHJldlByb2plY3RzMSIsIm5leHRQcmV2UHJvamVjdHMyIiwiY29weVRleHQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsIm5leHRQcmV2UHJvamVjdHMiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==