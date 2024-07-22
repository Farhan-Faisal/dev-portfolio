(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 4045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3480)


/***/ }),

/***/ 5557:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(7140);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 5594:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = ({"src":"/_next/static/media/comic-pic.71d69d58.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEWupY6dkID97dBrZV3u38TQwar//+O5pYvs39Lm3sj//+XoyarHqY/VuJ7ryqxMaXFqVjdfX1j///80HBiAZlb/7s24fF/g0Lafj3zRx685NzdHOC7Ck1KXhXe0n4ktLjHEt5388NEvMjO+spyjmojOs5mmnYv/2Ir34bcu+SfDAAAAIHRSTlP+Rzn9/f5T/Q0yQFz9WEcA/UsB/fzj/m35amqI/H7o+wWV/yQAAAAJcEhZcwAACxMAAAsTAQCanBgAAABJSURBVHicBcGHAoAQAAXAh4witHeh+f9f2B0cFaKgeQ3VXYzHLEcRU8MzVNjetQ8yECzef8A5YU4Ha8dnANmlNOYu4ZTVurTqB5DjBC9bC9ZpAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

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

/***/ 7140:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(2362);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/images/profile/comic-pic.png
var comic_pic = __webpack_require__(5594);
;// CONCATENATED MODULE: ./public/images/svgs/miscellaneous_icons_1.svg
/* harmony default export */ var miscellaneous_icons_1 = ({"src":"/_next/static/media/miscellaneous_icons_1.cd3c5e27.svg","height":65,"width":38,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/AnimatedText.js
var AnimatedText = __webpack_require__(4339);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Icons.js
var Icons = __webpack_require__(7441);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/Link.js
var Link = __webpack_require__(4045);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
;// CONCATENATED MODULE: ./src/components/HireMe.js




const HireMe = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "fixed left-4 bottom-4 flex items-center justify-center overflow-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "w-48 h-auto flexitems-center justify-center relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* CircularText */.bY, {
                    className: "fill-dark animate-spin-slow"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)((Link_default()), {
                    href: "mailto:developer.dmitri@gmail.com",
                    className: "flex items-center justify-center absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark border-solid border-dark w-20 h-20 rounded-full",
                    style: {
                        color: "white"
                    },
                    children: "Hire Me"
                })
            ]
        })
    });
};
/* harmony default export */ var components_HireMe = (HireMe);

;// CONCATENATED MODULE: ./src/pages/index.js











function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Farhan's Portfolio Homepage"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "flex items-center text-dark w-full min-h-screen",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* Layout */.A, {
                        className: "pt-0 mt-0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between w-full",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-5/12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                        src: comic_pic/* default */.Z,
                                        alt: "_blank",
                                        className: "w-9/10 h-auto"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "w-7/12 h-full flex flex-col item-center self-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedText/* AnimatedText */.V, {
                                            text: "Turning Vision Into Reality With Code And Design",
                                            fontSize: "60px",
                                            textAlign: "left"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "my-4 text-base font-medium items-start",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    style: {
                                                        display: "block"
                                                    },
                                                    children: "• As a full-stack developer, I am dedicated to turning ideas into innovative web applications. "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    style: {
                                                        display: "block"
                                                    },
                                                    children: "• As a data analyst, I can also cater to your data insight needs. "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    style: {
                                                        display: "block"
                                                    },
                                                    children: "• Explore my latest projects, showcasing my expertise in development and analysis. "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center self-start mt-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "/dummy.pdf",
                                                    download: true,
                                                    target: "_blank",
                                                    className: "flex items-start bg-dark p-2.5 px-6 rounded-lg text-lg hover:bg-light mx-2",
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "Resume ➚"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "mailto:developer.dmitri@gmail.com",
                                                    target: "_blank",
                                                    className: "flex items-start bg-dark p-2.5 px-6 rounded-lg text-lg hover:bg-light mx-2",
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "Contact"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_HireMe, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute right-8 botton-8 inline-block w-24",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                            src: miscellaneous_icons_1,
                            alt: "_blank",
                            className: "w-full h-auto"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [675,888,774,179], function() { return __webpack_exec__(5557); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);