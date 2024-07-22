(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[921],{

/***/ 4741:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/About",
      function () {
        return __webpack_require__(4992);
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

/***/ 4992:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_About; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./src/components/AnimatedText.js
var AnimatedText = __webpack_require__(4339);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(2362);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./public/images/profile/comic-pic.png
var comic_pic = __webpack_require__(5594);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var use_motion_value = __webpack_require__(4960);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-spring.mjs
var use_spring = __webpack_require__(4002);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-in-view.mjs + 1 modules
var use_in_view = __webpack_require__(6893);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 151 modules
var motion = __webpack_require__(5330);
;// CONCATENATED MODULE: ./src/components/Skills.js



const Skill = (param)=>{
    let { value, x, y } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.div, {
        className: "flex items-center justify-center rounded-full bg-dark py-3 px-6 shadow-dark absolute ",
        style: {
            color: "white",
            fontWeight: "bold"
        },
        whileHover: {
            scale: 1.05
        },
        initial: {
            x: 0,
            y: 0
        },
        whileInView: {
            x: x,
            y: y
        },
        transition: {
            duration: 3
        },
        children: value
    });
};
const Skills = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "mt-32 w-full text-center",
                style: {
                    fontSize: "50px",
                    fontWeight: "bold"
                },
                children: "Skills"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.div, {
                        className: "flex items-center justify-center rounded-full bg-dark p-8 shadow-dark",
                        style: {
                            color: "white",
                            fontWeight: "bold"
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        children: "Web"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "HTML",
                        x: "-22vw",
                        y: "-2vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "CSS",
                        x: "-5vw",
                        y: "-10vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "JavaScript",
                        x: "20vw",
                        y: "6vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "ReactJS",
                        x: "0vw",
                        y: "12vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "NextJS",
                        x: "-20vw",
                        y: "-15vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "NodeJS",
                        x: "15vw",
                        y: "-12vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "Azure Cloud",
                        x: "32vw",
                        y: "-5vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "AWS",
                        x: "0vw",
                        y: "-20vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "Python",
                        x: "-25vw",
                        y: "18vw"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skill, {
                        value: "Machine Learning",
                        x: "18vw",
                        y: "18vw"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var components_Skills = (Skills);

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 11 modules
var use_scroll = __webpack_require__(9645);
;// CONCATENATED MODULE: ./src/components/LiIcon.js



const LiIcon = (param)=>{
    let { reference } = param;
    const { scrollYProgress } = (0,use_scroll/* useScroll */.v)({
        target: reference,
        offset: [
            "center end",
            "center center"
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("figure", {
        className: "absolute left-0 stroke-dark",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "75",
            height: "75",
            viewBox: "0 0 100 100",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.circle, {
                    cx: "75",
                    cy: "50",
                    r: "20",
                    className: "stroke-primary stroke-1 fill-none"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.circle, {
                    cx: "75",
                    cy: "50",
                    r: "20",
                    className: "stroke-[5px] fill-light",
                    style: {
                        pathLength: scrollYProgress
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.circle, {
                    cx: "75",
                    cy: "50",
                    r: "10",
                    className: "animate-pulse stroke-1 fill-primary"
                })
            ]
        })
    });
};
/* harmony default export */ var components_LiIcon = (LiIcon);

;// CONCATENATED MODULE: ./src/components/Experience.js




const Details = (param)=>{
    let { position, company, time, address, work } = param;
    const ref = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        ref: ref,
        className: "my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_LiIcon, {
                reference: ref
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(motion/* motion */.E.div, {
                initial: {
                    y: 50
                },
                whileInView: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    type: "spring"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                        className: "",
                        style: {
                            fontWeight: "bold",
                            fontSize: "25px"
                        },
                        children: [
                            position,
                            "\xa0@",
                            company
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "",
                        style: {
                            fontWeight: "bold",
                            color: "black",
                            opacity: "75"
                        },
                        children: [
                            time,
                            " | ",
                            address
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                        className: "w-full",
                        children: work.split("•").map((bullet, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                className: "p-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: "•  "
                                        }),
                                        bullet
                                    ]
                                })
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};
const Experience = ()=>{
    const ref = (0,react.useRef)(null);
    const { scrollYProgress } = (0,use_scroll/* useScroll */.v)({
        target: ref,
        offset: [
            "start end",
            "center start"
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mt-32",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "w-full text-center",
                style: {
                    fontSize: "50px",
                    fontWeight: "bold"
                },
                children: "Experience"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: ref,
                className: "w-[75%] mx-auto relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.div, {
                        style: {
                            scaleY: scrollYProgress
                        },
                        className: "absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "w-full flex flex-col items-start justify-between ml-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Details, {
                                position: "Data Analyst",
                                company: "Decision Neuroscience Lab",
                                time: "Nov 2022 – Present",
                                address: "Ontario, Canada",
                                work: "Implemented data pipelines in Python, pulling data from an SQL database, and transforming it to given needs reducing manual workload by 50%.  • Used LLMs via Python to calculate text similarity similarity on data sets of over 20,000 goal responses enabling investigation into human goal setting behaviors. • Communicated findings from data analysis to stakeholders in plain language with appropriate visuals generated with Python attesting to communication skills.  • Fine-tuned machine learning models (transformers) with PyTorch/TensorFlow to label qualitative data achieving 82% accuracy. "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Details, {
                                position: "Frontend Developer Intern",
                                company: "University of Alberta",
                                time: "Jan 2023 – Apr 2023",
                                address: "Alberta, Canada",
                                work: "Developed a course scheduling web app following MVC architecture, integrating a JavaScript (ReactJS) front-end with a Java SpringBoot backend (REST API). • Created a MySQL database of courses from unstructured course data (obtained from web scraping using Python) enhancing data accessibility by 50%. • Set up a CI/CD pipeline using GitHub Actions for deployment on DockerHub (frontend) and AWS EC2 (backend) reducing deployment times by 60%.  • Utilized version control (Git/GitHub) and followed Agile methodologies including the code review process ensuring smooth collaboration and feature development. "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Details, {
                                position: "Coop – Research Assistant",
                                company: "Baycrest Hospital",
                                time: "Aug 2022 – Dec 2022",
                                address: "Toronto, ON, Canada",
                                work: "Designed web based interactive study paradigms using JavaScript.  • Managed a MySQL data base to efficiently store and retrieve healthcare data. • Created Linux tcsh/bash & C++ scripts for neuroimaging data processing "
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var components_Experience = (Experience);

;// CONCATENATED MODULE: ./src/components/Education.js




const EduDetails = (param)=>{
    let { type, time, place, info } = param;
    const ref = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        ref: ref,
        className: "my-8 w-[80%] mx-auto flex flex-col items-left justify-between p-left-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_LiIcon, {
                reference: ref
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(motion/* motion */.E.div, {
                initial: {
                    y: 50
                },
                whileInView: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    type: "spring"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "",
                        style: {
                            fontWeight: "bold",
                            fontSize: "25px"
                        },
                        children: type
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "",
                        style: {
                            fontWeight: "bold",
                            color: "black",
                            opacity: "75"
                        },
                        children: [
                            time,
                            " | ",
                            place
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                        className: "w-full",
                        children: info.split(";").map((bullet, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    style: {
                                        textAlign: "justify"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: "-  "
                                        }),
                                        bullet
                                    ]
                                })
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};
const Education = ()=>{
    const ref = (0,react.useRef)(null);
    const { scrollYProgress } = (0,use_scroll/* useScroll */.v)({
        target: ref,
        offset: [
            "start end",
            "center start"
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mt-32",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "w-full text-center",
                style: {
                    fontSize: "50px",
                    fontWeight: "bold"
                },
                children: "Education"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: ref,
                className: "w-[75%] mx-auto relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.div, {
                        style: {
                            scaleY: scrollYProgress
                        },
                        className: "absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "w-full flex flex-col items-start justify-between ml-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EduDetails, {
                                type: "HBSc in Computer Science & Neuroscience",
                                time: "2020-2024",
                                place: "University of Toronto",
                                info: "cGPA: 3.94; Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EduDetails, {
                                type: "Masters in Data Science",
                                time: "2024-2025",
                                place: "University of British Columbia",
                                info: "cGPA: N/A"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var components_Education = (Education);

;// CONCATENATED MODULE: ./src/pages/About.js











const AnimatedNumbers = (param)=>{
    let { value } = param;
    const ref = (0,react.useRef)(null);
    const motionValue = (0,use_motion_value/* useMotionValue */.c)(0);
    const springValue = (0,use_spring/* useSpring */.q)(motionValue, {
        duration: 3000
    });
    const isInView = (0,use_in_view/* useInView */.Y)(ref, {
        once: true
    });
    (0,react.useEffect)(()=>{
        if (isInView) {
            motionValue.set(value);
        }
    }, [
        motionValue,
        value,
        isInView
    ]);
    (0,react.useEffect)(()=>{
        springValue.on("change", (latest)=>{
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [
        springValue,
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ref: ref
    });
};
const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: " Farhan | About Page "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        description: "any"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                className: "flex w-full flex-col items-center justify-center self-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* Layout */.A, {
                    className: "pt-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedText/* AnimatedText */.V, {
                            text: "Passion Fuels Purpose",
                            className: "mb-16",
                            fontSize: "60px",
                            textAlign: "center"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid w-full grid-cols-8 gap-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-3 flex flex-col items-start justify-start",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "mb-4",
                                            style: {
                                                fontWeight: "bold",
                                                opacity: "70%"
                                            },
                                            children: "BIOGRAPHY"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            style: {
                                                font: "medium",
                                                textAlign: "justify"
                                            },
                                            children: "Hi, I'm Farhan, a full stack developer with a strong passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience,  I am always looking for new and innovative ways to bring my clients' visions to life"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "my-4",
                                            style: {
                                                font: "medium",
                                                textAlign: "justify"
                                            },
                                            children: "In addition to web development, I have delved a lot into data science. In doing so, I have honed my skills in implementing data pipelines, analyzing large datasets, data visualization, and fine-tuning machine learning models."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "",
                                            style: {
                                                font: "medium",
                                                textAlign: "justify"
                                            },
                                            children: "Whether I'm working on a website, mobile app, or other data pipelines, I bring my whole hearted commitment to every project I work on."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-light",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute top-0 -right-3 z-[-10] w-[102%] h-[103%] rounded-[2rem] bg-dark"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                            src: comic_pic/* default */.Z,
                                            alt: "_blank",
                                            className: "w-full h-auto rounded-2xl"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-2 flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "items-end flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "inline-block",
                                                    style: {
                                                        fontWeight: "bold",
                                                        fontSize: "50px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedNumbers, {
                                                            value: 10
                                                        }),
                                                        "+"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                    children: "Satisfied Clients"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "items-end flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "inline-block",
                                                    style: {
                                                        fontWeight: "bold",
                                                        fontSize: "50px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedNumbers, {
                                                            value: 10
                                                        }),
                                                        "+"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                    children: "Projects Completed"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "items-end flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "inline-block",
                                                    style: {
                                                        fontWeight: "bold",
                                                        fontSize: "50px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedNumbers, {
                                                            value: 2
                                                        }),
                                                        "+"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                    children: "years  experience"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Skills, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Experience, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Education, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var pages_About = (About);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [675,384,888,774,179], function() { return __webpack_exec__(4741); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);