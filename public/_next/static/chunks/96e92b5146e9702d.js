(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 16015, (e, t, s) => {}, 98547, (e, t, s) => {
    var n = e.i(18392);
    e.r(16015);
    var r = e.r(71645),
        a = function(e) {
            return e && "object" == typeof e && "default" in e ? e : {
                default: e
            }
        }(r),
        i = void 0 !== n.default && n.default.env && !0,
        o = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        l = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    s = t.name,
                    n = void 0 === s ? "stylesheet" : s,
                    r = t.optimizeForSpeed,
                    a = void 0 === r ? i : r;
                c(o(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", c("boolean" == typeof a, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = a, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = l ? l.getAttribute("content") : null
            }
            var t, s = e.prototype;
            return s.setOptimizeForSpeed = function(e) {
                    c("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, s.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, s.inject = function() {
                    var e = this;
                    if (c(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (i || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, s) {
                            return "number" == typeof s ? e._serverSheet.cssRules[s] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), s
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, s.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, s.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, s.insertRule = function(e, t) {
                    if (c(o(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var s = this.getSheet();
                        "number" != typeof t && (t = s.cssRules.length);
                        try {
                            s.insertRule(e, t)
                        } catch (t) {
                            return i || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var n = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, n))
                    }
                    return this._rulesCount++
                }, s.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var s = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !s.cssRules[e]) return e;
                        s.deleteRule(e);
                        try {
                            s.insertRule(t, e)
                        } catch (n) {
                            i || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), s.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var n = this._tags[e];
                        c(n, "old rule at index `" + e + "` not found"), n.textContent = t
                    }
                    return e
                }, s.deleteRule = function(e) {
                    if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        c(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, s.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, s.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, s) {
                        return s ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, s.makeStyleTag = function(e, t, s) {
                    t && c(o(t), "makeStyleTag accepts only strings as second parameter");
                    var n = document.createElement("style");
                    this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
                    var r = document.head || document.getElementsByTagName("head")[0];
                    return s ? r.insertBefore(n, s) : r.appendChild(n), n
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var s = 0; s < t.length; s++) {
                        var n = t[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(e.prototype, t), e
        }();

    function c(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var d = function(e) {
            for (var t = 5381, s = e.length; s;) t = 33 * t ^ e.charCodeAt(--s);
            return t >>> 0
        },
        u = {};

    function m(e, t) {
        if (!t) return "jsx-" + e;
        var s = String(t),
            n = e + s;
        return u[n] || (u[n] = "jsx-" + d(e + "-" + s)), u[n]
    }

    function h(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var s = e + t;
        return u[s] || (u[s] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[s]
    }
    var f = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    s = t.styleSheet,
                    n = void 0 === s ? null : s,
                    r = t.optimizeForSpeed,
                    a = void 0 !== r && r;
                this._sheet = n || new l({
                    name: "styled-jsx",
                    optimizeForSpeed: a
                }), this._sheet.inject(), n && "boolean" == typeof a && (this._sheet.setOptimizeForSpeed(a), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var s = this.getIdAndRules(e),
                    n = s.styleId,
                    r = s.rules;
                if (n in this._instancesCounts) {
                    this._instancesCounts[n] += 1;
                    return
                }
                var a = r.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[n] = a, this._instancesCounts[n] = 1
            }, t.remove = function(e) {
                var t = this,
                    s = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(s in this._instancesCounts, "styleId: `" + s + "` not found"), this._instancesCounts[s] -= 1, this._instancesCounts[s] < 1) {
                    var n = this._fromServer && this._fromServer[s];
                    n ? (n.parentNode.removeChild(n), delete this._fromServer[s]) : (this._indices[s].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[s]), delete this._instancesCounts[s]
                }
            }, t.update = function(e, t) {
                this.add(t), this.remove(e)
            }, t.flush = function() {
                this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }, t.cssRules = function() {
                var e = this,
                    t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                        return [t, e._fromServer[t]]
                    }) : [],
                    s = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return s[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, s;
                return t = this.cssRules(), void 0 === (s = e) && (s = {}), t.map(function(e) {
                    var t = e[0],
                        n = e[1];
                    return a.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: s.nonce ? s.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    s = e.dynamic,
                    n = e.id;
                if (s) {
                    var r = m(n, s);
                    return {
                        styleId: r,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return h(r, e)
                        }) : [h(r, t)]
                    }
                }
                return {
                    styleId: m(n),
                    rules: Array.isArray(t) ? t : [t]
                }
            }, t.selectFromServer = function() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }, e
        }(),
        p = r.createContext(null);

    function g() {
        return new f
    }

    function x() {
        return r.useContext(p)
    }
    p.displayName = "StyleSheetContext";
    var y = a.default.useInsertionEffect || a.default.useLayoutEffect,
        v = "undefined" != typeof window ? g() : void 0;

    function b(e) {
        var t = v || x();
        return t && ("undefined" == typeof window ? t.add(e) : y(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    b.dynamic = function(e) {
        return e.map(function(e) {
            return m(e[0], e[1])
        }).join(" ")
    }, s.StyleRegistry = function(e) {
        var t = e.registry,
            s = e.children,
            n = r.useContext(p),
            i = r.useState(function() {
                return n || t || g()
            })[0];
        return a.default.createElement(p.Provider, {
            value: i
        }, s)
    }, s.createStyleRegistry = g, s.style = b, s.useStyleRegistry = x
}, 37902, (e, t, s) => {
    t.exports = e.r(98547).style
}, 36181, e => {
    "use strict";
    e.s(["default", () => i]);
    var t = e.i(43476),
        s = e.i(57688),
        n = e.i(22016),
        r = e.i(71645),
        a = e.i(47176);

    function i({
        videoSrc: e,
        bgImageSrc: i,
        logoSrc: o,
        heading: l,
        subtext: c,
        links: d = [],
        gradientOverlay: u,
        headingColor: m,
        subtextColor: h
    }) {
        let [f, p] = (0, r.useState)(!1);
        return (0, t.jsxs)("section", {
            className: `relative flex flex-col items-center justify-center min-h-[auto] sm:min-h-screen md:min-h-screen text-center px-4 py-16 sm:px-6 md:px-6 overflow-hidden transition-colors duration-700 ${f?"bg-transparent":"bg-black"}`,
            children: [e ? (0, t.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                onLoadedData: () => p(!0),
                className: "absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-700",
                children: (0, t.jsx)("source", {
                    src: (0, a.normalizeImage)(e ? ? ""),
                    type: "video/mp4"
                })
            }) : (0, t.jsx)("div", {
                className: "absolute inset-0 w-full h-full z-[0]",
                children: (0, t.jsx)(s.default, {
                    src: (0, a.normalizeImage)(i ? ? "") || "",
                    alt: "Background",
                    fill: !0,
                    className: "object-cover transition-opacity duration-700",
                    onLoad: () => p(!0),
                    priority: !0
                })
            }), (0, t.jsx)("div", {
                className: `absolute inset-0 z-[2] ${u||"bg-gradient-to-b from-background via-background/90 to-background/95"}`
            }), (0, t.jsxs)("div", {
                className: "relative z-[3] flex flex-col items-center py-16 sm:py-20",
                children: [o && (0, t.jsx)("div", {
                    className: "w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gray-900 rounded-full flex items-center justify-center mb-6 sm:mb-8 md:mb-10 ",
                    children: (0, t.jsx)(s.default, {
                        src: (0, a.normalizeImage)(o) || "",
                        alt: "Logo",
                        width: 96,
                        height: 96,
                        className: "object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24"
                    })
                }), (0, t.jsx)("h1", {
                    className: `lg:leading-snug max-w-7xl font-bold text-xl sm:text-4xl md:text-6xl lg:text-7xl text-center mb-4  ${!m?"text-gradient":""}`,
                    style: m ? {
                        color: m
                    } : void 0,
                    children: l
                }), (0, t.jsx)("p", {
                    className: "text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-6 max-w-5xl  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                    style: {
                        color: h || void 0
                    },
                    dangerouslySetInnerHTML: {
                        __html: String(c ? ? "")
                    }
                }), (0, t.jsx)("div", {
                    className: "flex sm:flex-row flex-col gap-4 sm:gap-6 justify-center",
                    children: d.map((e, s) => (0, t.jsxs)(n.default, {
                        href: e.href,
                        className: `${e.className||"link_button_blue"} inline-flex items-center justify-center`,
                        rel: "noopener noreferrer",
                        onClick: t => {
                            if (e.href.startsWith("#")) {
                                t.preventDefault();
                                let s = document.querySelector(e.href);
                                s && s.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }
                        },
                        children: [e.label, " ", e.icon && e.icon]
                    }, s))
                })]
            })]
        })
    }
}, 56329, e => {
    "use strict";
    e.s(["default", () => o]);
    var t = e.i(43476),
        s = e.i(57688),
        n = e.i(70065),
        r = e.i(47176),
        a = e.i(71645);
    let i = [{
        src: "/partners/Coinccino.webp",
        alt: "Coinccino"
    }, {
        src: "/partners/Phantashma.webp",
        alt: "phantasma"
    }, {
        src: "/partners/SeedX.webp",
        alt: "seedx"
    }, {
        src: "/partners/INRx.webp",
        alt: "Inrx"
    }, {
        src: "/partners/Tarality.webp",
        alt: "tarality"
    }, {
        src: "/partners/O3Swap.webp",
        alt: "Q3o-Swap"
    }, {
        src: "/partners/Merckel-Chain.webp",
        alt: "MarkleChain"
    }, {
        src: "/partners/Certick.webp",
        alt: "certik"
    }, {
        src: "/partners/spectrum.webp",
        alt: "spectrum-logo"
    }];

    function o() {
        let e = (0, a.useRef)(null),
            [o, l] = (0, a.useState)(!1),
            [c, d] = (0, a.useState)(0),
            [u, m] = (0, a.useState)(0),
            h = () => {
                l(!1), e.current && (e.current.style.cursor = "grab")
            };
        return (0, t.jsxs)("section", {
            className: "relative ",
            children: [(0, t.jsxs)("div", {
                className: "flex items-center justify-center gap-4 mb-4 px-4 mx-auto max-w-4xl",
                children: [(0, t.jsx)("div", {
                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                }), (0, t.jsx)("h2", {
                    className: "text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 text-center",
                    children: "Trusted by 100,000+ Businesses across 57 Countries"
                }), (0, t.jsx)("div", {
                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                })]
            }), (0, t.jsx)("div", {
                ref: e,
                className: "relative max-w-7xl mx-auto overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide",
                onMouseDown: t => {
                    e.current && (l(!0), d(t.pageX - e.current.offsetLeft), m(e.current.scrollLeft), e.current.style.cursor = "grabbing")
                },
                onMouseMove: t => {
                    if (!o || !e.current) return;
                    t.preventDefault();
                    let s = t.pageX - e.current.offsetLeft;
                    e.current.scrollLeft = u - (s - c) * 1.5
                },
                onMouseUp: h,
                onMouseLeave: h,
                onTouchStart: t => {
                    e.current && (l(!0), d(t.touches[0].pageX - e.current.offsetLeft), m(e.current.scrollLeft))
                },
                onTouchMove: t => {
                    if (!o || !e.current) return;
                    let s = t.touches[0].pageX - e.current.offsetLeft;
                    e.current.scrollLeft = u - (s - c) * 1.5
                },
                onTouchEnd: () => {
                    l(!1)
                },
                children: (0, t.jsx)("div", {
                    className: "flex gap-8 w-max py-3 px-4 select-none",
                    children: i.map((e, a) => (0, t.jsx)(n.Card, {
                        className: "flex-shrink-0 rounded-full bg-transparent flex items-center justify-center p-3 h-12 md:h-16 lg:h-14 w-32 md:w-36 lg:w-40 shadow-sm dark:shadow-none transition-transform duration-200 hover:scale-105",
                        children: (0, t.jsx)(s.default, {
                            src: (0, r.normalizeImage)(e.src) || "",
                            alt: e.alt,
                            width: 140,
                            height: 80,
                            sizes: "(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px",
                            className: "w-20 h-6 md:w-24 md:h-10 lg:w-28 lg:h-12 object-contain dark:invert dark:brightness-0",
                            onError: e => {
                                e.currentTarget.style.display = "none"
                            }
                        })
                    }, a))
                })
            })]
        })
    }
}, 70065, e => {
    "use strict";
    e.s(["Card", () => r, "CardContent", () => a]);
    var t = e.i(43476),
        s = e.i(71645),
        n = e.i(47163);
    let r = s.forwardRef(({
        className: e,
        ...s
    }, r) => (0, t.jsx)("div", {
        ref: r,
        className: (0, n.cn)("rounded-xl bg-card text-card-foreground card-shadow", e),
        ...s
    }));
    r.displayName = "Card", s.forwardRef(({
        className: e,
        ...s
    }, r) => (0, t.jsx)("div", {
        ref: r,
        className: (0, n.cn)("flex flex-col space-y-1.5 p-6", e),
        ...s
    })).displayName = "CardHeader", s.forwardRef(({
        className: e,
        ...s
    }, r) => (0, t.jsx)("div", {
        ref: r,
        className: (0, n.cn)("font-semibold leading-none tracking-tight", e),
        ...s
    })).displayName = "CardTitle", s.forwardRef(({
        className: e,
        ...s
    }, r) => (0, t.jsx)("div", {
        ref: r,
        className: (0, n.cn)("text-sm text-muted-foreground", e),
        ...s
    })).displayName = "CardDescription";
    let a = s.forwardRef(({
        className: e,
        ...s
    }, r) => (0, t.jsx)("div", {
        ref: r,
        className: (0, n.cn)("p-0 pt-0", e),
        ...s
    }));
    a.displayName = "CardContent", s.forwardRef(({
        className: e,
        ...s
    }, r) => (0, t.jsx)("div", {
        ref: r,
        className: (0, n.cn)("flex items-center p-6 pt-0", e),
        ...s
    })).displayName = "CardFooter"
}, 37332, e => {
    "use strict";
    e.s(["default", () => a]);
    var t = e.i(43476),
        s = e.i(11583),
        n = e.i(71645),
        r = e.i(10936);

    function a({
        title: e = "Frequently Asked Questions",
        faqs: a = [],
        twoColumn: i = !0,
        widthWrapper: o = "max-w-7xl"
    }) {
        let [l, c] = (0, n.useState)(null), d = i ? a.slice(0, Math.ceil(a.length / 2)) : a, u = i ? a.slice(Math.ceil(a.length / 2)) : [], m = (e, n) => (0, t.jsx)("div", {
            className: "lg:space-y-6 space-y-2",
            children: e.map((e, a) => (0, t.jsx)("div", {
                className: "",
                style: {
                    animationDelay: `${100*a}ms`
                },
                children: (0, t.jsxs)("div", {
                    className: "accordion-item bg-card rounded-lg card-shadow overflow-hidden",
                    children: [(0, t.jsxs)("button", {
                        className: "accordion-trigger",
                        onClick: () => ((e, t) => {
                            let s = `${t}-${e}`;
                            c(l === s ? null : s)
                        })(a, n),
                        children: [(0, t.jsx)("h3", {
                            className: "font-normal text-base md:font-medium md:text-base",
                            children: e.question
                        }), (0, t.jsx)("div", {
                            className: "flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center rounded-md",
                            children: (0, t.jsx)("div", {
                                className: "w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none rounded-md ",
                                children: (0, t.jsx)(r.IoMdArrowDropdown, {
                                    className: `w-6 h-6 transition-transform duration-300 ${l===`${n}-${a}`?"rotate-180":""}`
                                })
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: `accordion-content px-6 overflow-hidden transition-all duration-300 ${l===`${n}-${a}`?"max-h-96 py-4":"max-h-0"}`,
                        children: (0, t.jsx)("div", {
                            className: "text-muted-foreground  [&_a]:text-blue-600 [&_ul]:list-disc  [&_ul]:ml-5  [&_ol]:list-decimal  [&_ol]:ml-5 [&_a:hover]:underline ",
                            dangerouslySetInnerHTML: {
                                __html: (0, s.decode)(e.answer) || ""
                            }
                        })
                    })]
                })
            }, `${n}-${a}`))
        });
        return (0, t.jsx)("section", {
            className: "w-full lg:py-16 py-16 px-4",
            children: (0, t.jsxs)("div", {
                className: `${o} mx-auto`,
                children: [(0, t.jsx)("h2", {
                    className: "text-center gradient-text font-medium text-xl sm:text-4xl lg:mb-12 mb-6",
                    children: e
                }), (0, t.jsxs)("div", {
                    className: `grid lg:gap-6 gap-4 ${i?"grid-cols-1 lg:grid-cols-2":"grid-cols-1"}`,
                    children: [m(d, "left"), i && m(u, "right")]
                })]
            })
        })
    }
}, 11845, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        s = e.i(71645),
        n = e.i(10936);
    let r = ({
        title: e,
        subtitle: r,
        items: a,
        widthWrapper: i = "max-w-7xl"
    }) => {
        let [o, l] = (0, s.useState)(0);
        return (0, t.jsx)("section", {
            className: "w-full py-6 sm:py-16 px-4",
            children: (0, t.jsxs)("div", {
                className: `${i} mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-10`,
                children: [(e || r) && (0, t.jsxs)("div", {
                    className: "mb-8 lg:mb-0 lg:w-5/12 space-y-4 sm:space-y-6",
                    children: [e && (0, t.jsx)("h2", {
                        className: "text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug",
                        children: e
                    }), r && (0, t.jsx)("p", {
                        className: "text-sm sm:text-base text-foreground/90 max-w-md [&_a]:text-blue-600",
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    })]
                }), (0, t.jsx)("div", {
                    className: "lg:w-7/12 space-y-4",
                    children: a.map((e, s) => {
                        let r = o === s;
                        return (0, t.jsxs)("div", {
                            className: "bg-card rounded-xl card-shadow overflow-hidden transition-all duration-300",
                            children: [(0, t.jsxs)("button", {
                                onClick: () => (e => {
                                    l(o === e ? null : e)
                                })(s),
                                className: "w-full flex justify-between items-center pt-3 pb-2 px-4 sm:px-8 focus:outline-none",
                                children: [(0, t.jsx)("h3", {
                                    className: "text-base text-left sm:text-lg font-semibold",
                                    children: e.title
                                }), (0, t.jsx)("div", {
                                    className: `w-9 h-9 ${r?"":"bg-card card-shadow"} flex items-center justify-center`,
                                    children: !r && (0, t.jsx)("div", {
                                        className: "w-7 h-7 flex items-center justify-center bg-card card-shadow",
                                        children: (0, t.jsx)(n.IoMdArrowDropdown, {
                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                        })
                                    })
                                })]
                            }), r && (0, t.jsx)("div", {
                                className: "p-4 sm:px-8 sm:pb-4 sm:pt-0 pt-0 text-sm sm:text-base  [&_a]:text-blue-600",
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            })]
                        }, s)
                    })
                })]
            })
        })
    }
}, 18718, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        s = e.i(57688),
        n = e.i(71645);
    let r = () => {
        let e = [{
                year: 2017,
                content: "Nadcab Labs was founded in the year 2017 with the vision to revolutionize blockchain development in India. Starting with a small team, we focused on research-oriented services in smart contracts, ICOs, and custom token creation, providing a base to advance solutions when the Indian market was still warming up to decentralized technologies.",
                image: "/year/2017.jpg"
            }, {
                year: 2018,
                content: "With the exponential rise in global demand, Nadcab broadened the spectrum of its services to international clients. Our team designed secure, scalable blockchain networks for startups and began working on Ethereum-based token platforms. Strategic partnerships and consistent delivery helped build early credibility across industries like fintech, supply chain, and healthcare.",
                image: "/year/2018.jpg"
            }, {
                year: 2019,
                content: "In 2019, Nadcab Labs moved beyond services into product R&D, developing proprietary blockchain development tools and frameworks. Our team launched MVPs for DApps, exchanges, and wallet services. This year also marked our successful entry into the DeFi space, as the company placed itself at the junction of innovation and utility.",
                image: "/year/2019.jpeg"
            }, {
                year: 2020,
                content: "Despite the global pandemic, Nadcab Labs doubled down on tech talent and remote operations. The company launched several white-label DeFi solutions, NFT marketplaces, and a resilient tokenomics advisory wing. Innovations in security auditing and blockchain consulting made us a trusted name for projects seeking launch-readiness during the crisis.",
                image: "/year/2020.jpg"
            }, {
                year: 2021,
                content: "This year saw exponential team growth and the opening of a dedicated R&D division. Nadcab Labs onboarded clients from the U.S., UAE, and Southeast Asia. It launched governance solutions for DAOs and cross-chain DEXs. Industry awards and blockchain community recognition followed, cementing our role as the most trustworthy and reliable blockchain development company.",
                image: "/year/2021.webp"
            }, {
                year: 2022,
                content: "With Web3 taking the main stage, Nadcab Labs continued its innovation and introduced development services for the metaverse and smart contract automation tools. Custom blockchain networks and NFT 2.0 platforms were launched. The company also expanded into Layer 2 solutions and began offering cross-chain integrations to improve dApp interoperability.",
                image: "/year/2022.jpg"
            }, {
                year: 2023,
                content: "Nadcab Labs started integrating AI into its blockchain services, offering predictive tokenomics, autonomous NFT interactions, and intelligent auditing systems. We also introduced blockchain-based real-world asset tokenization, AI chatbots for crypto platforms, and seamless Web3 onboarding tools, establishing ourselves as an innovative hub for decentralized tech.",
                image: "/year/2023.png"
            }, {
                year: 2024,
                content: "Nadcab Labs focused on ecosystem building, launching incubator programs, educational workshops, and blockchain-as-a-service platforms. Our vision for 2025 is to enable 500+ global businesses with modern blockchain infrastructure, expand AI in DeFi, and lead real-world asset tokenization with large-scale business integration as the key growth catalyst.",
                image: "/year/2024.jpg"
            }, {
                year: 2025,
                content: "In 2025, Nadcab Labs aims to integrate advanced AI frameworks and real-world asset tokenization at scale, enabling enterprises to onboard seamlessly into the decentralized future while accelerating innovation across Web3 industries.",
                image: "/year/2025.jpg"
            }],
            [r, a] = (0, n.useState)(e[0].year),
            i = e.find(e => e.year === r);
        return (0, t.jsxs)("div", {
            className: "flex items-center justify-center lg:py-10 lg:p-4 p-0 text-white",
            children: [(0, t.jsx)("style", {
                children: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-content {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        
        .animate-year {
          animation: fadeInDown 0.5s ease-out 0.2s forwards;
          opacity: 0;
        }
      `
            }), (0, t.jsxs)("div", {
                className: "max-w-7xl relative w-full",
                children: [i && (0, t.jsx)("div", {
                    className: "mt-8 lg:p-8 p-4",
                    children: (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
                        children: [(0, t.jsxs)("div", {
                            className: "relative flex justify-center md:justify-start items-center",
                            children: [(0, t.jsx)(s.default, {
                                src: i.image,
                                alt: `Year ${i.year}`,
                                className: "w-72 h-72 object-cover rounded-xl shadow-xl -rotate-[10deg] transition-transform duration-500 hover:scale-105 animate-content"
                            }), (0, t.jsx)("div", {
                                className: "absolute top-10 left-1/2 transform -translate-x-1/2 text-7xl md:text-8xl font-extrabold text-blue-500 opacity-90 drop-shadow-lg animate-year",
                                children: i.year
                            })]
                        }), (0, t.jsx)("div", {
                            className: "text-sm lg:text-lg leading-relaxed animate-content",
                            children: i.content
                        })]
                    })
                }, i.year), (0, t.jsx)("div", {
                    className: "relative mt-20 flex flex-col items-center",
                    children: (0, t.jsx)("div", {
                        className: "w-full h-[2px] bg-gray-600 relative",
                        children: (0, t.jsx)("div", {
                            className: "absolute top-[-10px] left-0 w-full flex justify-between",
                            children: e.map(e => (0, t.jsxs)("div", {
                                className: "flex flex-col items-center cursor-pointer select-none group",
                                onClick: () => a(e.year),
                                children: [(0, t.jsx)("div", {
                                    className: `lg:w-10 lg:h-6 w-5 h-2 rounded-full border-2 transition-all duration-300 group-hover:scale-110 group-active:scale-90 ${r===e.year?"border-blue-500 bg-blue-500":"border-blue-500 bg-[#000]"}`
                                }), (0, t.jsx)("span", {
                                    className: `hidden sm:block mt-3 text-sm transition-all duration-300 ${r===e.year?"text-blue-400 font-semibold":"text-gray-400"}`,
                                    children: e.year
                                })]
                            }, e.year))
                        })
                    })
                })]
            })]
        })
    }
}, 40162, e => {
    "use strict";
    e.s(["VerticalMasonryMarquee", () => a, "default", () => i]);
    var t = e.i(43476),
        s = e.i(37902),
        n = e.i(57688);
    let r = ["team-nadcab.jpg", "event.jpeg", "festival1.jpeg", "chrismas.jpg", "festival3.jpeg", "festival2.jpeg", "nadcab-anniversary-celebrate.png", "team2.jpg", "nadcab-diwali.png", "festival4.jpeg", "team2-nadcab.jpg"],
        a = () => {
            let e = [
                [],
                [],
                [],
                []
            ];
            r.forEach((t, s) => e[s % 4].push(t));
            let a = e.map(e => [...e, ...e, ...e]);
            return (0, t.jsxs)("div", {
                className: "jsx-fab30f2170be9259 flex gap-4 overflow-hidden h-[500px]",
                children: [a.map((e, s) => (0, t.jsx)("div", {
                    style: {
                        animationDirection: s % 2 == 0 ? "normal" : "reverse",
                        animationDuration: "10s"
                    },
                    className: "jsx-fab30f2170be9259 flex flex-col gap-4 animate-marquee flex-shrink-0",
                    children: e.map((e, s) => (0, t.jsx)("div", {
                        className: "jsx-fab30f2170be9259 relative w-48 md:w-72",
                        children: (0, t.jsx)(n.default, {
                            src: `/about/${e}`,
                            alt: `Gallery image ${s}`,
                            width: 500,
                            height: 500,
                            className: "w-full h-auto rounded-lg object-cover"
                        })
                    }, s))
                }, s)), (0, t.jsx)(s.default, {
                    id: "fab30f2170be9259",
                    children: "@keyframes marquee{0%{transform:translateY(0)}to{transform:translateY(-33.33%)}}.animate-marquee.jsx-fab30f2170be9259{animation-name:marquee;animation-timing-function:linear;animation-iteration-count:infinite}"
                })]
            })
        },
        i = a
}]);