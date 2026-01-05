(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 75254, e => {
    "use strict";
    e.s(["default", () => a], 75254);
    var t = e.i(71645);
    let r = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        n = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var l = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let o = (0, t.forwardRef)(({
            color: e = "currentColor",
            size: r = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: a,
            className: i = "",
            children: s,
            iconNode: u,
            ...d
        }, c) => (0, t.createElement)("svg", {
            ref: c,
            ...l,
            width: r,
            height: r,
            stroke: e,
            strokeWidth: a ? 24 * Number(o) / Number(r) : o,
            className: n("lucide", i),
            ...!s && !(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
            })(d) && {
                "aria-hidden": "true"
            },
            ...d
        }, [...u.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(s) ? s : [s]])),
        a = (e, l) => {
            let a = (0, t.forwardRef)(({
                className: a,
                ...i
            }, s) => (0, t.createElement)(o, {
                ref: s,
                iconNode: l,
                className: n(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, a),
                ...i
            }));
            return a.displayName = r(e), a
        }
}, 67881, e => {
    "use strict";
    e.s(["Button", () => h], 67881);
    var t = e.i(43476),
        r = e.i(71645);

    function n(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    var l = Symbol.for("react.lazy"),
        o = r[" use ".trim().toString()];

    function a(e) {
        var t;
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === l && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t
    }
    var i = function(e) {
            let l = function(e) {
                    let t = r.forwardRef((e, t) => {
                        let {
                            children: l,
                            ...i
                        } = e;
                        if (a(l) && "function" == typeof o && (l = o(l._payload)), r.isValidElement(l)) {
                            var s;
                            let e, o, a = (s = l, (o = (e = Object.getOwnPropertyDescriptor(s.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? s.ref : (o = (e = Object.getOwnPropertyDescriptor(s, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? s.props.ref : s.props.ref || s.ref),
                                u = function(e, t) {
                                    let r = { ...t
                                    };
                                    for (let n in t) {
                                        let l = e[n],
                                            o = t[n];
                                        /^on[A-Z]/.test(n) ? l && o ? r[n] = (...e) => {
                                            let t = o(...e);
                                            return l(...e), t
                                        } : l && (r[n] = l) : "style" === n ? r[n] = { ...l,
                                            ...o
                                        } : "className" === n && (r[n] = [l, o].filter(Boolean).join(" "))
                                    }
                                    return { ...e,
                                        ...r
                                    }
                                }(i, l.props);
                            return l.type !== r.Fragment && (u.ref = t ? function(...e) {
                                return t => {
                                    let r = !1,
                                        l = e.map(e => {
                                            let l = n(e, t);
                                            return r || "function" != typeof l || (r = !0), l
                                        });
                                    if (r) return () => {
                                        for (let t = 0; t < l.length; t++) {
                                            let r = l[t];
                                            "function" == typeof r ? r() : n(e[t], null)
                                        }
                                    }
                                }
                            }(t, a) : a), r.cloneElement(l, u)
                        }
                        return r.Children.count(l) > 1 ? r.Children.only(null) : null
                    });
                    return t.displayName = `${e}.SlotClone`, t
                }(e),
                i = r.forwardRef((e, n) => {
                    let {
                        children: i,
                        ...s
                    } = e;
                    a(i) && "function" == typeof o && (i = o(i._payload));
                    let d = r.Children.toArray(i),
                        c = d.find(u);
                    if (c) {
                        let e = c.props.children,
                            o = d.map(t => t !== c ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                        return (0, t.jsx)(l, { ...s,
                            ref: n,
                            children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                        })
                    }
                    return (0, t.jsx)(l, { ...s,
                        ref: n,
                        children: i
                    })
                });
            return i.displayName = `${e}.Slot`, i
        }("Slot"),
        s = Symbol("radix.slottable");

    function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
    }
    var d = e.i(7670);
    let c = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        f = d.clsx;
    var p = e.i(47163);
    let m = ((e, t) => r => {
            var n;
            if ((null == t ? void 0 : t.variants) == null) return f(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {
                variants: l,
                defaultVariants: o
            } = t, a = Object.keys(l).map(e => {
                let t = null == r ? void 0 : r[e],
                    n = null == o ? void 0 : o[e];
                if (null === t) return null;
                let a = c(t) || c(n);
                return l[e][a]
            }), i = r && Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e
            }, {});
            return f(e, a, null == t || null == (n = t.compoundVariants) ? void 0 : n.reduce((e, t) => {
                let {
                    class: r,
                    className: n,
                    ...l
                } = t;
                return Object.entries(l).every(e => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...o,
                        ...i
                    }[t]) : ({ ...o,
                        ...i
                    })[t] === r
                }) ? [...e, r, n] : e
            }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        })("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
            variants: {
                variant: {
                    default: "bg-blue-600 text-white button-shadow-- hover:bg-blue-500",
                    destructive: "bg-destructive text-destructive-foreground button-shadow hover:bg-destructive/90",
                    outline: "border border-input bg-background button-shadow hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground button-shadow hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline",
                    customGreen: "bg-custom-green text-custom-green-foreground button-shadow hover:bg-custom-green/80"
                },
                size: {
                    default: "h-10 sm:h-14 px-6 sm:px-8 text-base font-normal",
                    sm: "h-10 rounded-md px-6 text-sm",
                    lg: "h-12 rounded-md px-8 text-lg",
                    icon: "h-9 w-9 text-sm"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        }),
        h = r.default.forwardRef(({
            className: e,
            variant: r,
            size: n,
            asChild: l = !1,
            ...o
        }, a) => (0, t.jsx)(l ? i : "button", {
            className: (0, p.cn)(m({
                variant: r,
                size: n,
                className: e
            })),
            ref: a,
            ...o
        }));
    h.displayName = "Button"
}, 9912, e => {
    "use strict";
    e.s(["Rocket", () => t], 9912);
    let t = (0, e.i(75254).default)("rocket", [
        ["path", {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }],
        ["path", {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }],
        ["path", {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }],
        ["path", {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }]
    ])
}, 67585, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(32061);

    function l(e) {
        let {
            reason: t,
            children: r
        } = e;
        if ("undefined" == typeof window) throw Object.defineProperty(new n.BailoutToCSRError(t), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return r
    }
}, 9885, (e, t, r) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 52157, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(43476),
        l = e.r(74080),
        o = e.r(63599),
        a = e.r(9885);

    function i(e) {
        let {
            moduleIds: t
        } = e;
        if ("undefined" != typeof window) return null;
        let r = o.workAsyncStorage.getStore();
        if (void 0 === r) return null;
        let i = [];
        if (r.reactLoadableManifest && t) {
            let e = r.reactLoadableManifest;
            for (let r of t) {
                if (!e[r]) continue;
                let t = e[r].files;
                i.push(...t)
            }
        }
        return 0 === i.length ? null : (0, n.jsx)(n.Fragment, {
            children: i.map(e => {
                let t = r.assetPrefix + "/_next/" + (0, a.encodeURIPath)(e) + "?dpl=dpl_996Za76GD53qEsLJWdkhk2hCHg76";
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: t,
                    rel: "stylesheet",
                    as: "style"
                }, e) : ((0, l.preload)(t, {
                    as: "script",
                    fetchPriority: "low"
                }), null)
            })
        })
    }
}, 69093, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(43476),
        l = e.r(71645),
        o = e.r(67585),
        a = e.r(52157);

    function i(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let s = {
            loader: () => Promise.resolve(i(() => null)),
            loading: null,
            ssr: !0
        },
        u = function(e) {
            let t = { ...s,
                    ...e
                },
                r = (0, l.lazy)(() => t.loader().then(i)),
                u = t.loading;

            function d(e) {
                let i = u ? (0, n.jsx)(u, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    s = !t.ssr || !!t.loading,
                    d = s ? l.Suspense : l.Fragment,
                    c = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["undefined" == typeof window ? (0, n.jsx)(a.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(r, { ...e
                        })]
                    }) : (0, n.jsx)(o.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(r, { ...e
                        })
                    });
                return (0, n.jsx)(d, { ...s ? {
                        fallback: i
                    } : {},
                    children: c
                })
            }
            return d.displayName = "LoadableComponent", d
        }
}, 70703, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(55682)._(e.r(69093));

    function l(e, t) {
        var r;
        let l = {};
        "function" == typeof e && (l.loader = e);
        let o = { ...l,
            ...t
        };
        return (0, n.default)({ ...o,
            modules: null == (r = o.loadableGenerated) ? void 0 : r.modules
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 63178, e => {
    "use strict";
    e.s(["useTheme", () => o]);
    var t = e.i(71645),
        r = (e, t, r, n, l, o, a, i) => {
            let s = document.documentElement,
                u = ["light", "dark"];

            function d(t) {
                var r;
                (Array.isArray(e) ? e : [e]).forEach(e => {
                    let r = "class" === e,
                        n = r && o ? l.map(e => o[e] || e) : l;
                    r ? (s.classList.remove(...n), s.classList.add(o && o[t] ? o[t] : t)) : s.setAttribute(e, t)
                }), r = t, i && u.includes(r) && (s.style.colorScheme = r)
            }
            if (n) d(n);
            else try {
                let e = localStorage.getItem(t) || r,
                    n = a && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                d(n)
            } catch (e) {}
        },
        n = t.createContext(void 0),
        l = {
            setTheme: e => {},
            themes: []
        },
        o = () => {
            var e;
            return null != (e = t.useContext(n)) ? e : l
        };
    t.memo(({
        forcedTheme: e,
        storageKey: n,
        attribute: l,
        enableSystem: o,
        enableColorScheme: a,
        defaultTheme: i,
        value: s,
        themes: u,
        nonce: d,
        scriptProps: c
    }) => {
        let f = JSON.stringify([l, n, i, e, u, s, o, a]).slice(1, -1);
        return t.createElement("script", { ...c,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? d : "",
            dangerouslySetInnerHTML: {
                __html: `(${r.toString()})(${f})`
            }
        })
    })
}, 94557, e => {
    e.v(t => Promise.all(["static/chunks/a4b272a4f4b86cde.js"].map(t => e.l(t))).then(() => t(29724)))
}, 73076, e => {
    e.v(t => Promise.all(["static/chunks/5caca1b0822c8ffd.js", "static/chunks/d56123b1e1e7f8f2.js"].map(t => e.l(t))).then(() => t(86010)))
}, 79946, e => {
    e.v(t => Promise.all(["static/chunks/d041525721e306c5.js"].map(t => e.l(t))).then(() => t(75746)))
}, 75817, e => {
    e.v(t => Promise.all(["static/chunks/33600352b232631a.js"].map(t => e.l(t))).then(() => t(95499)))
}]);