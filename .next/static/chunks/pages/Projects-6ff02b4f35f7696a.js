(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[375],{

/***/ 9284:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/Projects",
      function () {
        return __webpack_require__(5560);
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

/***/ 5560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_Projects; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/AnimatedText.js
var AnimatedText = __webpack_require__(4339);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Icons.js
var Icons = __webpack_require__(7441);
;// CONCATENATED MODULE: ./public/images/projects/crypto-screener-cover-image.jpg
/* harmony default export */ var crypto_screener_cover_image = ({"src":"/_next/static/media/crypto-screener-cover-image.5d2f6c4e.jpg","height":720,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABmxYv/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAQABBQJVp//EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAgBAwEBPwFYf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAyH/2gAIAQIBAT8BmsP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAWEAADAAAAAAAAAAAAAAAAAAAAAYH/2gAIAQEAAT8hZJ//2gAMAwEAAgADAAAAEPv/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPxBpP//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/ECL/AP/EABcQAQEBAQAAAAAAAAAAAAAAAAERIQD/2gAIAQEAAT8QZbQ1Lj3/2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 151 modules
var motion = __webpack_require__(5330);
;// CONCATENATED MODULE: ./src/pages/Projects.js










const Framerimage = (0,motion/* motion */.E)((image_default()));
const FeaturedProject = (param)=>{
    let { type, title, summary, img, link, githubLink } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "w-full flex items-center justify-between rounded-3xl  border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: link,
                target: "_blank",
                className: "w-1/2 cursor-pointer overflow-hidden rounded-lg",
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-1/2 flex flex-col items-start justify-between pl-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        style: {
                            fontWeight: "medium",
                            fontSize: "20px",
                            color: "purple"
                        },
                        children: type
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: link,
                        target: "_blank",
                        className: "hover:underline underline-offset-2",
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
                        className: "my-2",
                        children: summary
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-2 flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: githubLink,
                                className: "w-10",
                                target: "_blank",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* GithubIcon */.ET, {}),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: link,
                                target: "_blank",
                                className: "ml-4 rounded-lg p-2 px-6 bg-dark",
                                style: {
                                    fontSize: "20px",
                                    color: "white",
                                    fontWeight: "semibold"
                                },
                                children: "Visit Project"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Project = (param)=>{
    let { type, title, img, link, githubLink } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "w-full flex-col flex items-center justify-center rounded-2xl  border border-solid border-dark bg-light shadow-2xl p-6 relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: link,
                target: "_blank",
                className: "w-full cursor-pointer overflow-hidden rounded-lg",
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full flex flex-col items-start justify-between mt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        style: {
                            fontWeight: "medium",
                            fontSize: "25px",
                            color: "purple"
                        },
                        children: type
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: link,
                        target: "_blank",
                        className: "hover:underline underline-offset-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "my-2 w-full text-left",
                            style: {
                                fontWeight: "bold",
                                fontSize: "25px"
                            },
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-2 flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: githubLink,
                                className: "w-10",
                                target: "_blank",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* GithubIcon */.ET, {}),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: link,
                                target: "_blank",
                                className: "ml-4 rounded-lg p-2 px-6 bg-dark",
                                style: {
                                    fontSize: "20px",
                                    color: "white",
                                    fontWeight: "semibold"
                                },
                                children: "Visit"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Projects = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: " Farhan | Projects Page "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        description: "project list full stack developer"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                className: "mb-16 flex w-full flex-col items-center justify-center self-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* Layout */.A, {
                    className: "pt-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedText/* AnimatedText */.V, {
                            text: "Imagination Trumps Knowledge!",
                            className: "mb-16",
                            fontSize: "60px",
                            textAlign: "center"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-12 gap-24",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-span-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturedProject, {
                                        title: "Air Quality Monitoring Dashboard",
                                        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your  local currency.",
                                        link: "/",
                                        githubLink: "/",
                                        type: "Featured Project",
                                        img: crypto_screener_cover_image
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-span-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Project, {
                                        title: "Air Quality Monitoring Dashboard",
                                        link: "/",
                                        githubLink: "/",
                                        type: "Project",
                                        img: crypto_screener_cover_image
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-span-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Project, {
                                        title: "Air Quality Monitoring Dashboard",
                                        link: "/",
                                        githubLink: "/",
                                        type: "Project",
                                        img: crypto_screener_cover_image
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-span-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturedProject, {
                                        title: "Air Quality Monitoring Dashboard",
                                        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your  local currency.",
                                        link: "/",
                                        githubLink: "/",
                                        type: "Featured Project",
                                        img: crypto_screener_cover_image
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-span-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Project, {
                                        title: "Air Quality Monitoring Dashboard",
                                        link: "/",
                                        githubLink: "/",
                                        type: "Project",
                                        img: crypto_screener_cover_image
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-span-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Project, {
                                        title: "Air Quality Monitoring Dashboard",
                                        link: "/",
                                        githubLink: "/",
                                        type: "Project",
                                        img: crypto_screener_cover_image
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var pages_Projects = (Projects);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [675,888,774,179], function() { return __webpack_exec__(9284); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);