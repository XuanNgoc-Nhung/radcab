(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 8341, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), ! function(e, t) {
        for (var l in t) Object.defineProperty(e, l, {
            enumerable: !0,
            get: t[l]
        })
    }(l, {
        cancelIdleCallback: function() {
            return r
        },
        requestIdleCallback: function() {
            return a
        }
    });
    let a = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof l.default || "object" == typeof l.default && null !== l.default) && void 0 === l.default.__esModule && (Object.defineProperty(l.default, "__esModule", {
        value: !0
    }), Object.assign(l.default, l), t.exports = l.default)
}, 79520, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), ! function(e, t) {
        for (var l in t) Object.defineProperty(e, l, {
            enumerable: !0,
            get: t[l]
        })
    }(l, {
        default: function() {
            return b
        },
        handleClientScriptLoad: function() {
            return x
        },
        initScriptLoader: function() {
            return h
        }
    });
    let a = e.r(55682),
        r = e.r(90809),
        s = e.r(43476),
        i = a._(e.r(74080)),
        n = r._(e.r(71645)),
        d = e.r(42732),
        c = e.r(22737),
        o = e.r(8341),
        u = new Map,
        m = new Set,
        f = e => {
            let {
                src: t,
                id: l,
                onLoad: a = () => {},
                onReady: r = null,
                dangerouslySetInnerHTML: s,
                children: n = "",
                strategy: d = "afterInteractive",
                onError: o,
                stylesheets: f
            } = e, x = l || t;
            if (x && m.has(x)) return;
            if (u.has(t)) {
                m.add(x), u.get(t).then(a, o);
                return
            }
            let h = () => {
                    r && r(), m.add(x)
                },
                p = document.createElement("script"),
                b = new Promise((e, t) => {
                    p.addEventListener("load", function(t) {
                        e(), a && a.call(this, t), h()
                    }), p.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    o && o(e)
                });
            s ? (p.innerHTML = s.__html || "", h()) : n ? (p.textContent = "string" == typeof n ? n : Array.isArray(n) ? n.join("") : "", h()) : t && (p.src = t, u.set(t, b)), (0, c.setAttributesFromProps)(p, e), "worker" === d && p.setAttribute("type", "text/partytown"), p.setAttribute("data-nscript", d), f && (e => {
                if (i.default.preinit) return e.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("undefined" != typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let l = document.createElement("link");
                        l.type = "text/css", l.rel = "stylesheet", l.href = e, t.appendChild(l)
                    })
                }
            })(f), document.body.appendChild(p)
        };

    function x(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, o.requestIdleCallback)(() => f(e))
        }) : f(e)
    }

    function h(e) {
        e.forEach(x), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            m.add(t)
        })
    }

    function p(e) {
        let {
            id: t,
            src: l = "",
            onLoad: a = () => {},
            onReady: r = null,
            strategy: c = "afterInteractive",
            onError: u,
            stylesheets: x,
            ...h
        } = e, {
            updateScripts: p,
            scripts: b,
            getIsSsr: y,
            appDir: g,
            nonce: v
        } = (0, n.useContext)(d.HeadManagerContext);
        v = h.nonce || v;
        let w = (0, n.useRef)(!1);
        (0, n.useEffect)(() => {
            let e = t || l;
            w.current || (r && e && m.has(e) && r(), w.current = !0)
        }, [r, t, l]);
        let j = (0, n.useRef)(!1);
        if ((0, n.useEffect)(() => {
                if (!j.current) {
                    if ("afterInteractive" === c) f(e);
                    else "lazyOnload" === c && ("complete" === document.readyState ? (0, o.requestIdleCallback)(() => f(e)) : window.addEventListener("load", () => {
                        (0, o.requestIdleCallback)(() => f(e))
                    }));
                    j.current = !0
                }
            }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (p ? (b[c] = (b[c] || []).concat([{
                id: t,
                src: l,
                onLoad: a,
                onReady: r,
                onError: u,
                ...h,
                nonce: v
            }]), p(b)) : y && y() ? m.add(t || l) : y && !y() && f({ ...e,
                nonce: v
            })), g) {
            if (x && x.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === c)
                if (!l) return h.dangerouslySetInnerHTML && (h.children = h.dangerouslySetInnerHTML.__html, delete h.dangerouslySetInnerHTML), (0, s.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...h,
                            id: t
                        }]) + ")"
                    }
                });
                else return i.default.preload(l, h.integrity ? {
                    as: "script",
                    integrity: h.integrity,
                    nonce: v,
                    crossOrigin: h.crossOrigin
                } : {
                    as: "script",
                    nonce: v,
                    crossOrigin: h.crossOrigin
                }), (0, s.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([l, { ...h,
                            id: t
                        }]) + ")"
                    }
                });
            "afterInteractive" === c && l && i.default.preload(l, h.integrity ? {
                as: "script",
                integrity: h.integrity,
                nonce: v,
                crossOrigin: h.crossOrigin
            } : {
                as: "script",
                nonce: v,
                crossOrigin: h.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(p, "__nextScript", {
        value: !0
    });
    let b = p;
    ("function" == typeof l.default || "object" == typeof l.default && null !== l.default) && void 0 === l.default.__esModule && (Object.defineProperty(l.default, "__esModule", {
        value: !0
    }), Object.assign(l.default, l), t.exports = l.default)
}, 31343, e => {
    "use strict";
    e.s(["Play", () => t], 31343);
    let t = (0, e.i(75254).default)("play", [
        ["path", {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }]
    ])
}, 95242, 82373, 35116, e => {
    "use strict";
    e.s(["Pause", () => l], 95242);
    var t = e.i(75254);
    let l = (0, t.default)("pause", [
        ["rect", {
            x: "14",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "kaeet6"
        }],
        ["rect", {
            x: "5",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "1wsw3u"
        }]
    ]);
    e.s(["Volume2", () => a], 82373);
    let a = (0, t.default)("volume-2", [
        ["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }],
        ["path", {
            d: "M16 9a5 5 0 0 1 0 6",
            key: "1q6k2b"
        }],
        ["path", {
            d: "M19.364 18.364a9 9 0 0 0 0-12.728",
            key: "ijwkga"
        }]
    ]);
    e.s(["VolumeX", () => r], 35116);
    let r = (0, t.default)("volume-x", [
        ["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "9",
            y2: "15",
            key: "1ewh16"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "9",
            y2: "15",
            key: "5ykzw1"
        }]
    ])
}, 69790, e => {
    "use strict";
    e.s(["default", () => b], 69790);
    var t = e.i(43476),
        l = e.i(71645),
        a = e.i(31343),
        r = e.i(95242),
        s = e.i(82373),
        i = e.i(35116),
        n = e.i(75254);
    let d = (0, n.default)("quote", [
            ["path", {
                d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
                key: "rib7q0"
            }],
            ["path", {
                d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
                key: "1ymkrd"
            }]
        ]),
        c = (0, n.default)("x", [
            ["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }],
            ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]
        ]);
    var o = e.i(9912);
    let u = (0, n.default)("users", [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["path", {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }]
    ]);
    var m = e.i(57688),
        f = e.i(22016),
        x = e.i(47176),
        h = e.i(11583);

    function p({
        videoUrl: e,
        poster: n,
        clientName: d,
        isOpen: o,
        onClose: u
    }) {
        let [m, f] = (0, l.useState)(!0), [h, p] = (0, l.useState)(!0), [b, y] = (0, l.useState)({
            width: 16,
            height: 9
        }), g = (0, l.useRef)(null);
        return ((0, l.useEffect)(() => {
            let e = e => {
                "Escape" === e.key && u()
            };
            return o && (document.addEventListener("keydown", e), document.body.style.overflow = "hidden"), () => {
                document.removeEventListener("keydown", e), document.body.style.overflow = "unset"
            }
        }, [o, u]), (0, l.useEffect)(() => {
            g.current && (o && m ? g.current.play() : g.current ? .pause())
        }, [o, m]), o) ? (0, t.jsx)("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",
            onClick: u,
            children: (0, t.jsxs)("div", {
                className: "relative",
                onClick: e => e.stopPropagation(),
                style: {
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    aspectRatio: `${b.width} / ${b.height}`
                },
                children: [(0, t.jsx)("button", {
                    onClick: u,
                    className: "absolute -top-12 right-0 z-50 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all hover:scale-110",
                    children: (0, t.jsx)(c, {
                        className: "w-6 h-6"
                    })
                }), (0, t.jsxs)("div", {
                    className: "relative w-full h-full bg-black rounded-xl overflow-hidden shadow-2xl",
                    children: [(0, t.jsx)("video", {
                        ref: g,
                        src: (0, x.normalizeImage)(e ? ? "") || "",
                        poster: n,
                        className: "w-full h-full object-contain",
                        controls: !1,
                        autoPlay: !0,
                        muted: h,
                        playsInline: !0,
                        onLoadedMetadata: () => {
                            if (g.current) {
                                let {
                                    videoWidth: e,
                                    videoHeight: t
                                } = g.current;
                                e && t && y({
                                    width: e,
                                    height: t
                                })
                            }
                        },
                        children: (0, t.jsx)("source", {
                            src: e,
                            type: "video/mp4"
                        })
                    }), (0, t.jsx)("div", {
                        className: "absolute bottom-0 left-0 right-0 w-full px-0",
                        children: (0, t.jsx)("div", {
                            className: " rounded px-2 py-2 flex flex-col items-center gap-3 w-full",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-center justify-between gap-6 w-full",
                                children: [(0, t.jsx)("button", {
                                    onClick: () => f(!m),
                                    className: "p-4 bg-black rounded-full  flex-shrink-0",
                                    children: m ? (0, t.jsx)(r.Pause, {
                                        className: "w-6 h-6 text-white"
                                    }) : (0, t.jsx)(a.Play, {
                                        className: "w-6 h-6 text-white ml-0.5"
                                    })
                                }), (0, t.jsx)("button", {
                                    onClick: () => p(!h),
                                    className: "p-4 bg-black rounded-full  flex-shrink-0",
                                    children: h ? (0, t.jsx)(i.VolumeX, {
                                        className: "w-6 h-6 text-white"
                                    }) : (0, t.jsx)(s.Volume2, {
                                        className: "w-6 h-6 text-white"
                                    })
                                })]
                            })
                        })
                    })]
                })]
            })
        }) : null
    }

    function b({
        testimonialsData: e
    }) {
        let [r, s] = (0, l.useState)(null), [i, n] = (0, l.useState)(null), c = (0, l.useRef)(null);
        if (!e || !e.client_card) return null;
        let {
            title: b,
            description: y,
            button: g,
            client_card: v
        } = e;
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("section", {
                ref: c,
                className: "relative overflow-hidden",
                children: [(0, t.jsx)("div", {
                    className: "relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-500 pt-28 pb-5 lg:pt-28 lg:pb-10",
                    children: (0, t.jsx)("div", {
                        className: "container mx-auto px-4 relative z-10",
                        children: (0, t.jsxs)("div", {
                            className: "max-w-7xl mx-auto text-center",
                            children: [(0, t.jsx)("div", {
                                className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20",
                                children: (0, t.jsx)("span", {
                                    className: "text-sm font-medium text-white",
                                    children: "Trusted by Industry Leaders"
                                })
                            }), (0, t.jsx)("h1", {
                                className: "text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight",
                                children: b || "Trusted by Industry Leaders Worldwide"
                            }), (0, t.jsx)("div", {
                                className: "text-base lg:text-xl md:text-xl text-blue-100 mb-8 leading-relaxed max-w-5xl mx-auto  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                                dangerouslySetInnerHTML: {
                                    __html: y || "<p>Empowering innovators with reliable, future-ready blockchain solutions.</p>"
                                }
                            })]
                        })
                    })
                }), (0, t.jsx)("div", {
                    className: "px-4",
                    id: "reviewsAll",
                    children: (0, t.jsxs)("div", {
                        className: "max-w-7xl mx-auto",
                        children: [(0, t.jsxs)("div", {
                            className: "text-left lg:mb-16 pt-12",
                            children: [(0, t.jsxs)("div", {
                                className: "inline-flex items-center gap-2 text-blue-600 mb-4",
                                children: [(0, t.jsx)(d, {
                                    className: "w-6 h-6"
                                }), (0, t.jsx)("span", {
                                    className: "font-semibold",
                                    children: "Real Stories, Real Success"
                                })]
                            }), (0, t.jsx)("h2", {
                                className: "text-3xl md:text-4xl font-bold mb-4",
                                children: "Hear From Our Amazing Clients"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
                            children: v.map((e, l) => {
                                let r = e.client_video ? .url;
                                return (0, t.jsxs)("div", {
                                    className: "group bg-black text-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 cursor-pointer",
                                    onClick: () => {
                                        var t;
                                        return r && (t = e.client_video.url, void s({
                                            url: t,
                                            poster: e.client_image && "boolean" != typeof e.client_image ? e.client_image.url : void 0,
                                            clientName: e.card_title
                                        }))
                                    },
                                    children: [(0, t.jsx)("div", {
                                        className: "w-full aspect-[2/3] bg-gray-900 overflow-hidden rounded-t-2xl flex items-center justify-center relative",
                                        children: r ? (0, t.jsxs)(t.Fragment, {
                                            children: [e.client_image && "boolean" != typeof e.client_image ? (0, t.jsx)(m.default, {
                                                src: (0, x.normalizeImage)(e.client_image.url ? ? "") || "",
                                                alt: e.client_image.alt || (0, h.decode)(e.card_title || ""),
                                                fill: !0,
                                                className: "w-full h-full object-cover",
                                                sizes: "(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                                            }) : (0, t.jsx)("div", {
                                                className: "w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center",
                                                children: (0, t.jsx)(a.Play, {
                                                    className: "w-12 h-12 md:w-16 md:h-16 text-white opacity-60"
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                children: (0, t.jsx)("div", {
                                                    className: "w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300",
                                                    children: (0, t.jsx)(a.Play, {
                                                        className: "w-8 h-8 md:w-10 md:h-10 text-blue-600 ml-1"
                                                    })
                                                })
                                            })]
                                        }) : (0, t.jsx)("div", {
                                            className: "w-full h-full bg-gray-200 flex items-center justify-center",
                                            children: (0, t.jsx)(d, {
                                                className: "w-12 h-12 md:w-16 md:h-16 text-gray-400"
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "p-2 md:p-6",
                                        children: [(0, t.jsx)("h3", {
                                            className: "text-base md:text-xl font-bold mb-1",
                                            children: e.card_title
                                        }), (0, t.jsx)("div", {
                                            className: "text-xs md:text-sm text-gray-300 mt-1 leading-relaxed",
                                            dangerouslySetInnerHTML: {
                                                __html: e.card_description || ""
                                            }
                                        })]
                                    })]
                                }, l)
                            })
                        }), (0, t.jsx)("div", {
                            className: "mb-12 mt-12 md:mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden",
                            children: (0, t.jsxs)("div", {
                                className: "relative z-10",
                                children: [(0, t.jsx)("h2", {
                                    className: "text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4",
                                    children: "Ready to Become Our Next Success Story?"
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8",
                                    children: [(0, t.jsxs)(f.default, {
                                        href: "/contact",
                                        className: "inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-bold rounded-xl text-sm md:text-base",
                                        children: ["Start Your Journey ", (0, t.jsx)(o.Rocket, {
                                            className: "w-4 h-4 md:w-5 md:h-5"
                                        })]
                                    }), (0, t.jsxs)(f.default, {
                                        href: "/case-study",
                                        className: "inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all text-sm md:text-base",
                                        children: ["View Case Studies ", (0, t.jsx)(u, {
                                            className: "w-4 h-4 md:w-5 md:h-5"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                })]
            }), r && (0, t.jsx)(p, {
                videoUrl: r.url,
                poster: r.poster,
                clientName: r.clientName,
                isOpen: !!r,
                onClose: () => s(null)
            })]
        })
    }
}]);