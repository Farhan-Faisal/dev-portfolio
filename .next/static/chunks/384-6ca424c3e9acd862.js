"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[384],{

/***/ 7301:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ resolveElements; }
/* harmony export */ });
/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5487);


function resolveElements(elements, scope, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        let root = document;
        if (scope) {
            (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(Boolean(scope.current), "Scope provided, but no element detected.");
            root = scope.current;
        }
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = root.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = root.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}




/***/ }),

/***/ 6893:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: function() { return /* binding */ useInView; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs
var resolve_element = __webpack_require__(7301);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs


const thresholds = {
    some: 0,
    all: 1,
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0,resolve_element/* resolveElements */.I)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries) => {
        entries.forEach((entry) => {
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */
            if (entry.isIntersecting === Boolean(onEnd))
                return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                }
                else {
                    observer.unobserve(entry.target);
                }
            }
            else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount],
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-in-view.mjs



function useInView(ref, { root, margin, amount, once = false } = {}) {
    const [isInView, setInView] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
        if (!ref.current || (once && isInView))
            return;
        const onEnter = () => {
            setInView(true);
            return once ? undefined : () => setInView(false);
        };
        const options = {
            root: (root && root.current) || undefined,
            margin,
            amount,
        };
        return inView(ref.current, onEnter, options);
    }, [root, ref, margin, once, amount]);
    return isInView;
}




/***/ }),

/***/ 4960:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ useMotionValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3234);
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6014);
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6681);





/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    const value = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useConstant */ .h)(() => (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__/* .motionValue */ .BX)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__/* .MotionConfigContext */ ._);
    if (isStatic) {
        const [, setLatest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
}




/***/ }),

/***/ 9645:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: function() { return /* binding */ useScroll; }
});

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/index.mjs
var value = __webpack_require__(3234);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(6681);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs
var resolve_element = __webpack_require__(7301);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs


const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return { width: inlineSize, height: blockSize };
    }
    else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    }
    else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight,
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize, }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
        handler({
            target,
            contentSize: contentRect,
            get size() {
                return getElementSize(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = (0,resolve_element/* resolveElements */.I)(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const size = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const info = {
            target: window,
            size,
            contentSize: size,
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs



function resize(a, b) {
    return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = __webpack_require__(3967);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
var velocity_per_second = __webpack_require__(3038);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs



/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
});
const createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo(),
});
const keys = {
    x: {
        length: "Width",
        position: "Left",
    },
    y: {
        length: "Height",
        position: "Top",
    },
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element["scroll" + position];
    axis.scrollLength = element["scroll" + length] - element["client" + length];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0,progress/* progress */.Y)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity =
        elapsed > maxElapsed
            ? 0
            : (0,velocity_per_second/* velocityPerSecond */.R)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
    const inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        }
        else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */
            const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        }
        else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while (!svg) {
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        }
        else {
            break;
        }
    }
    return inset;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
const ScrollOffset = {
    Enter: [
        [0, 1],
        [1, 1],
    ],
    Exit: [
        [0, 0],
        [1, 0],
    ],
    Any: [
        [1, 0],
        [0, 1],
    ],
    All: [
        [0, 0],
        [1, 1],
    ],
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1,
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */
    if (namedEdges[edge] !== undefined) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */
    if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        }
        else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        }
        else if (edge.endsWith("vw")) {
            delta = (asNumber / 100) * document.documentElement.clientWidth;
        }
        else if (edge.endsWith("vh")) {
            delta = (asNumber / 100) * document.documentElement.clientHeight;
        }
        else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */
    if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs


const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */
        offsetDefinition = [offset, offset];
    }
    else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        }
        else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */
            offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
        }
    }
    targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
    containerPoint = resolveEdge(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/interpolate.mjs + 3 modules
var interpolate = __webpack_require__(4606);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/default.mjs + 1 modules
var offsets_default = __webpack_require__(533);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs






const point = { x: 0, y: 0 };
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg"
        ? target.getBBox()
        : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
    let { offset: offsetDefinition = ScrollOffset.All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? calcInset(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */
    const targetSize = target === container
        ? { width: container.scrollWidth, height: container.scrollHeight }
        : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight,
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */
    info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
        const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */
    if (hasChanged) {
        info[axis].interpolate = (0,interpolate/* interpolate */.s)(info[axis].offset, (0,offsets_default/* defaultOffset */.Y)(offsetDefinition));
        info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs




function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while (node && node !== container) {
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength =
        target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength =
        target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */
    if (false) {}
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: () => measure(element, options.target, info),
        update: (time) => {
            updateScrollInfo(element, info, time);
            if (options.offset || options.target) {
                resolveOffsets(element, info, options);
            }
        },
        notify: () => onScroll(info),
    };
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/frame.mjs + 2 modules
var frameloop_frame = __webpack_require__(2074);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs





const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element) => element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */
    if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */
    const info = createScrollInfo();
    const containerHandler = createOnScrollHandler(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */
    if (!scrollListeners.has(container)) {
        const measureAll = () => {
            for (const handler of containerHandlers)
                handler.measure();
        };
        const updateAll = () => {
            for (const handler of containerHandlers) {
                handler.update(frameloop_frame.frameData.timestamp);
            }
        };
        const notifyAll = () => {
            for (const handler of containerHandlers)
                handler.notify();
        };
        const listener = () => {
            frameloop_frame/* frame */.Wi.read(measureAll, false, true);
            frameloop_frame/* frame */.Wi.read(updateAll, false, true);
            frameloop_frame/* frame */.Wi.update(notifyAll, false, true);
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, { passive: true });
        if (container !== document.documentElement) {
            resizeListeners.set(container, resize(container, listener));
        }
        target.addEventListener("scroll", listener, { passive: true });
    }
    const listener = scrollListeners.get(container);
    frameloop_frame/* frame */.Wi.read(listener, false, true);
    return () => {
        var _a;
        (0,frameloop_frame/* cancelFrame */.Pn)(listener);
        /**
         * Check if we even have any handlers for this container.
         */
        const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers)
            return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size)
            return;
        /**
         * If no more handlers, remove the scroll listener too.
         */
        const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", scrollListener);
        }
    };
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(8868);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs







function refWarning(name, ref) {
    (0,errors/* warning */.K)(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const createScrollMotionValues = () => ({
    scrollX: (0,value/* motionValue */.BX)(0),
    scrollY: (0,value/* motionValue */.BX)(0),
    scrollXProgress: (0,value/* motionValue */.BX)(0),
    scrollYProgress: (0,value/* motionValue */.BX)(0),
});
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
    const values = (0,use_constant/* useConstant */.h)(createScrollMotionValues);
    const useLifecycleEffect = layoutEffect
        ? use_isomorphic_effect/* useIsomorphicLayoutEffect */.L
        : react.useEffect;
    useLifecycleEffect(() => {
        refWarning("target", target);
        refWarning("container", container);
        return scrollInfo(({ x, y }) => {
            values.scrollX.set(x.current);
            values.scrollXProgress.set(x.progress);
            values.scrollY.set(y.current);
            values.scrollYProgress.set(y.progress);
        }, {
            ...options,
            container: (container === null || container === void 0 ? void 0 : container.current) || undefined,
            target: (target === null || target === void 0 ? void 0 : target.current) || undefined,
        });
    }, [container, target, JSON.stringify(options.offset)]);
    return values;
}




/***/ }),

/***/ 4002:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ useSpring; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(406);
/* harmony import */ var _use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4960);
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6014);
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8868);
/* harmony import */ var _animation_animators_js_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72);
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6917);
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2074);









/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config = {}) {
    const { isStatic } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_1__/* .MotionConfigContext */ ._);
    const activeSpringAnimation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const value = (0,_use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMotionValue */ .c)((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__/* .isMotionValue */ .i)(source) ? source.get() : source);
    const stopAnimation = () => {
        if (activeSpringAnimation.current) {
            activeSpringAnimation.current.stop();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => {
        return value.attach((v, set) => {
            /**
             * A more hollistic approach to this might be to use isStatic to fix VisualElement animations
             * at that level, but this will work for now
             */
            if (isStatic)
                return set(v);
            stopAnimation();
            activeSpringAnimation.current = (0,_animation_animators_js_index_mjs__WEBPACK_IMPORTED_MODULE_4__/* .animateValue */ .y)({
                keyframes: [value.get(), v],
                velocity: value.getVelocity(),
                type: "spring",
                restDelta: 0.001,
                restSpeed: 0.01,
                ...config,
                onUpdate: set,
            });
            /**
             * If we're between frames, resync the animation to the frameloop.
             */
            if (!_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_5__.frameData.isProcessing) {
                const delta = performance.now() - _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_5__.frameData.timestamp;
                if (delta < 30) {
                    activeSpringAnimation.current.time =
                        (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_6__/* .millisecondsToSeconds */ .X)(delta);
                }
            }
            return value.get();
        }, stopAnimation);
    }, [JSON.stringify(config)]);
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_7__/* .useIsomorphicLayoutEffect */ .L)(() => {
        if ((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__/* .isMotionValue */ .i)(source)) {
            return source.on("change", (v) => value.set(parseFloat(v)));
        }
    }, [value]);
    return value;
}




/***/ })

}]);