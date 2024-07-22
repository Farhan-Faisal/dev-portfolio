(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[649],{

/***/ 4817:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/Research",
      function () {
        return __webpack_require__(6496);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ AnimatedText; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5330);



const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
};
const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};
const AnimatedText = (param)=>{
    let { text, className = "", fontSize = "", textAlign = "" } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "".concat(className, " w-full py-0 mx-auto flex items-center justify-center text-center overflow-hidden"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.h1, {
            style: {
                textColor: "black",
                fontWeight: "bold",
                fontSize: "".concat(fontSize),
                textAlign: "".concat(textAlign)
            },
            className: "w-full inline-block capitalize",
            variants: quote,
            initial: "initial",
            animate: "animate",
            children: text.split(" ").map((word, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.span, {
                    className: "inline-block",
                    variants: singleWord,
                    children: [
                        word,
                        "\xa0"
                    ]
                }, word + "-" + index))
        })
    });
};


/***/ }),

/***/ 6496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_Research; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/AnimatedText.js
var AnimatedText = __webpack_require__(4339);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(2362);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/articles/pagination component in reactjs.jpg
/* harmony default export */ var pagination_component_in_reactjs = ({"src":"/_next/static/media/pagination component in reactjs.030eba6a.jpg","height":720,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGwn//EABYQAQEBAAAAAAAAAAAAAAAAAAIEA//aAAgBAQABBQLCxq//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAYEAADAQEAAAAAAAAAAAAAAAABAhEAIv/aAAgBAQAGPwILB00O/8QAFxAAAwEAAAAAAAAAAAAAAAAAAREhAP/aAAgBAQABPyEkqJq1d//aAAwDAQACAAMAAAAQ9//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/EI//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxCv/8QAGBABAQEBAQAAAAAAAAAAAAAAARExAGH/2gAIAQEAAT8QJ7KykGC3PM7/2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 151 modules
var motion = __webpack_require__(5330);
;// CONCATENATED MODULE: ./src/pages/Research.js









const Framerimage = (0,motion/* motion */.E)((image_default()));
const FeaturedArticle = (param)=>{
    let { img, title, summary, link } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: "relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: link,
                target: "_blank",
                className: "w-full inline-block ursor-pointer overflow-hidden rounded-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Framerimage, {
                    src: img,
                    alt: title,
                    className: "w-full h-auto",
                    whileHover: {
                        scale: 1.1
                    },
                    transition: {
                        duration: 0.2
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: link,
                target: "_blank",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                    className: "my-2 w-full text-left",
                    style: {
                        fontWeight: "bold",
                        fontSize: "25px"
                    },
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "mb-2",
                style: {
                    fontSize: "15px"
                },
                children: summary
            })
        ]
    });
};
const Article = (param)=>{
    let { img, title, date, link } = param;
    return /*#__PURE__*/ _jsx("li", {});
};
const Research = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: " Farhan | Research Page "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        description: "Farhan's Research"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                className: "w-full mb-16 flex flex-col items-center justify-center self-center overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* Layout */.A, {
                    className: "pt-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedText/* AnimatedText */.V, {
                            text: "My Research Works",
                            className: "mb-16",
                            fontSize: "60px",
                            textAlign: "center"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "grid grid-cols-2 gap-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturedArticle, {
                                    title: "Build A Custom Pagination Component In Reactjs From Scratch",
                                    summary: " Learn how to build a custom pagination component in ReactJS from scratch.  Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
                                    link: "/",
                                    img: pagination_component_in_reactjs
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturedArticle, {
                                    title: "Build A Custom Pagination Component In Reactjs From Scratch",
                                    summary: " Learn how to build a custom pagination component in ReactJS from scratch.  Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
                                    link: "/",
                                    img: pagination_component_in_reactjs
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "w-full text-center my-16 mt-32",
                            style: {
                                fontSize: "25px",
                                fontWeight: "bold"
                            },
                            children: "All Articles"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var pages_Research = (Research);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [675,888,774,179], function() { return __webpack_exec__(4817); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);