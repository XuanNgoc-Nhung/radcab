(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 61207, e => {
    "use strict";
    e.s(["default", () => p], 61207);
    var t = e.i(43476),
        a = e.i(71645),
        l = e.i(70703),
        r = e.i(57688),
        n = e.i(22016),
        s = e.i(50719),
        i = e.i(40141);

    function o(e) {
        return (0, i.GenIcon)({
            tag: "svg",
            attr: {
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                "aria-hidden": "true"
            },
            child: [{
                tag: "path",
                attr: {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                },
                child: []
            }]
        })(e)
    }
    var c = e.i(92199),
        d = e.i(63178),
        u = e.i(18566);
    let m = (0, l.default)(() => e.A(94557), {
            loadableGenerated: {
                modules: [29724]
            },
            ssr: !1
        }),
        f = (0, l.default)(() => e.A(73076), {
            loadableGenerated: {
                modules: [86010]
            },
            ssr: !1
        });

    function p({
        menuItems: e,
        megaMenuData: l
    }) {
        let [i, p] = (0, a.useState)(!1), [h, g] = (0, a.useState)(!1), [x, w] = (0, a.useState)(null), [b, v] = (0, a.useState)(null), [y, j] = (0, a.useState)("Blockchain"), [k, N] = (0, a.useState)([]), {
            theme: E
        } = (0, d.useTheme)(), [A, S] = (0, a.useState)(!1), L = (0, a.useRef)(null), R = (0, a.useRef)(null), $ = (0, a.useRef)(null), T = (0, a.useRef)(null), P = (0, u.usePathname)();
        (0, a.useEffect)(() => S(!0), []), (0, a.useEffect)(() => (i ? (document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.width = "100%") : (document.body.style.overflow = "", document.body.style.position = "", document.body.style.width = ""), () => {
            document.body.style.overflow = "", document.body.style.position = "", document.body.style.width = ""
        }), [i]);
        let C = (0, a.useCallback)(() => {
            g(window.scrollY > 10)
        }, []);
        (0, a.useEffect)(() => {
            let e, t, a = function(...a) {
                t ? (clearTimeout(e), e = setTimeout(() => {
                    Date.now() - t >= 100 && (C.apply(this, a), t = Date.now())
                }, 100 - (Date.now() - t))) : (C.apply(this, a), t = Date.now())
            };
            return window.addEventListener("scroll", a), () => window.removeEventListener("scroll", a)
        }, [C]), (0, a.useEffect)(() => {
            let e = e => {
                R.current && !R.current.contains(e.target) && w(null), !$.current || $.current.contains(e.target) || e.target.closest('button[aria-label="Toggle menu"]') || (p(!1), v(null), N([]))
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
        }, []);
        let _ = e => {
                L.current && clearTimeout(L.current), w(e)
            },
            I = () => {
                L.current = setTimeout(() => w(null), 300)
            },
            B = (0, a.useCallback)(e => {
                w(t => t === e ? null : e)
            }, [w]),
            M = (0, a.useCallback)(e => {
                v(t => (("Services" !== e || t === e) && N([]), t === e ? null : e))
            }, []),
            U = (0, a.useCallback)(() => {
                p(!1), v(null), w(null), N([])
            }, []);
        return (0, t.jsxs)("header", {
            ref: T,
            className: `fixed w-full bg-white  dark:bg-black z-50 ${h?"border-b border-muted shadow-lg":""}`,
            style: {
                minHeight: "64px"
            },
            children: [(0, t.jsxs)("div", {
                className: "flex items-center justify-between px-6 lg:px-16 h-16 min-h-16 relative z-50 bg-white dark:bg-black dark:text-white",
                children: [(0, t.jsx)(n.default, {
                    href: "/",
                    onClick: U,
                    className: "shrink-0",
                    children: (0, t.jsx)("div", {
                        className: "relative h-10 w-40 shrink-0",
                        children: (0, t.jsx)(r.default, {
                            src: "dark" === E ? "https://img.nadcab.com/wp-content/uploads/2025/11/new-logo.svg" : "https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg",
                            alt: "Nadcab logo",
                            width: 160,
                            height: 40,
                            className: "object-contain",
                            priority: !0,
                            sizes: "160px"
                        })
                    })
                }), (0, t.jsx)("div", {
                    className: "hidden lg:flex items-center relative",
                    children: (0, t.jsx)("nav", {
                        className: "flex items-center space-x-4 lg:space-x-6 xl:space-x-8",
                        children: e.map(e => {
                            let a = !!l[e.name];
                            return (0, t.jsx)("div", {
                                className: "relative",
                                onMouseEnter: () => a && _(e.name),
                                onMouseLeave: I,
                                children: (0, t.jsx)(n.default, {
                                    href: a ? "#" : e.href,
                                    className: `inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white ${a?"pr-4 lg:pr-6":""} hover:text-primary whitespace-nowrap`,
                                    "aria-haspopup": a,
                                    "aria-expanded": a && x === e.name,
                                    onClick: () => a && B(e.name),
                                    children: e.name
                                })
                            }, e.name)
                        })
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, t.jsxs)("div", {
                        className: "lg:hidden flex items-center gap-3",
                        children: [(0, t.jsx)(n.default, {
                            href: "tel:+919870635001",
                            "aria-label": "Call Veridaxlabs",
                            children: (0, t.jsx)("div", {
                                className: "w-10 h-10 flex items-center justify-center bg-black text-white shadow-lg rounded-lg",
                                children: (0, t.jsx)(c.FiPhone, {
                                    size: 20
                                })
                            })
                        }), (0, t.jsx)("button", {
                            onClick: () => p(e => !e),
                            className: "focus:outline-none bg-card card-shadow px-2 py-1.5 rounded-lg",
                            "aria-label": "Toggle menu",
                            "aria-expanded": i,
                            children: i ? (0, t.jsx)(s.HiX, {
                                size: 28
                            }) : (0, t.jsx)(o, {
                                size: 28
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: "hidden lg:flex items-center gap-4",
                        children: (0, t.jsx)(n.default, {
                            href: "/contact",
                            className: "px-5 py-3 text-xs font-semibold bg-gray-900 dark:bg-white rounded-md text-white dark:text-black",
                            children: "Consult Our Expert"
                        })
                    })]
                })]
            }), x ? (0, t.jsx)("div", {
                className: "hidden lg:block absolute top-0 left-0 right-0 max-w-7xl mx-auto bg-white border-t rounded-b-lg border-gray-200 shadow-2xl z-40 pt-16",
                onMouseEnter: () => _(x),
                onMouseLeave: I,
                ref: R,
                style: {
                    minHeight: "400px"
                },
                children: (0, t.jsx)("div", {
                    className: "container mx-auto px-6 lg:px-16 py-8",
                    children: (0, t.jsx)(m, {
                        activeMegaMenu: x,
                        megaMenuData: l,
                        activeServiceTab: y,
                        onChangeServiceTab: j,
                        pathname: P,
                        onNavigate: () => w(null)
                    })
                })
            }) : null, i ? (0, t.jsx)(f, {
                ref: $,
                isOpen: i,
                menuItems: e,
                megaMenuData: l,
                activeMobileMenu: b,
                onToggleMenu: M,
                expandedServiceItems: k,
                onToggleServiceItem: e => {
                    N(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                },
                onClose: U,
                mounted: A,
                theme: E
            }) : null]
        })
    }
}, 57215, e => {
    "use strict";
    e.s(["SpeedInsights", () => o]);
    var t = e.i(18392),
        a = e.i(71645),
        l = e.i(18566);

    function r() {
        return false
    }

    function n(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)
    }

    function s(e) {
        (0, a.useEffect)(() => {
            var t;
            e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend))
        }, [e.beforeSend]);
        let l = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            if (l.current) e.route && l.current(e.route);
            else {
                let a = function(e = {}) {
                    var t;
                    if ("undefined" == typeof window || null === e.route) return null;
                    window.si || (window.si = function(...e) {
                        (window.siq = window.siq || []).push(e)
                    });
                    let a = e.scriptSrc ? e.scriptSrc : r() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : e.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : e.basePath ? `${e.basePath}/speed-insights/script.js` : "/_vercel/speed-insights/script.js";
                    if (document.head.querySelector(`script[src*="${a}"]`)) return null;
                    e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend));
                    let l = document.createElement("script");
                    return l.src = a, l.defer = !0, l.dataset.sdkn = "@vercel/speed-insights" + (e.framework ? `/${e.framework}` : ""), l.dataset.sdkv = "1.3.1", e.sampleRate && (l.dataset.sampleRate = e.sampleRate.toString()), e.route && (l.dataset.route = e.route), e.endpoint ? l.dataset.endpoint = e.endpoint : e.basePath && (l.dataset.endpoint = `${e.basePath}/speed-insights/vitals`), e.dsn && (l.dataset.dsn = e.dsn), r() && !1 === e.debug && (l.dataset.debug = "false"), l.onerror = () => {
                        console.log(`[Vercel Speed Insights] Failed to load script from ${a}. Please check if any content blockers are enabled and try again.`)
                    }, document.head.appendChild(l), {
                        setRoute: e => {
                            l.dataset.route = e ? ? void 0
                        }
                    }
                }({
                    framework: e.framework ? ? "react",
                    basePath: e.basePath ? ? function() {
                        if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                    }(),
                    ...e
                });
                a && (l.current = a.setRoute)
            }
        }, [e.route]), null
    }

    function i(e) {
        let r = (() => {
            let e = (0, l.useParams)(),
                t = (0, l.useSearchParams)() || new URLSearchParams,
                a = (0, l.usePathname)();
            return e ? function(e, t) {
                if (!e || !t) return e;
                let a = e;
                try {
                    let e = Object.entries(t);
                    for (let [t, l] of e)
                        if (!Array.isArray(l)) {
                            let e = n(l);
                            e.test(a) && (a = a.replace(e, `/[${t}]`))
                        }
                    for (let [t, l] of e)
                        if (Array.isArray(l)) {
                            let e = n(l.join("/"));
                            e.test(a) && (a = a.replace(e, `/[...${t}]`))
                        }
                    return a
                } catch (t) {
                    return e
                }
            }(a, Object.keys(e).length ? e : Object.fromEntries(t.entries())) : null
        })();
        return a.default.createElement(s, {
            route: r,
            ...e,
            framework: "next",
            basePath: function() {
                if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
            }()
        })
    }

    function o(e) {
        return a.default.createElement(a.Suspense, {
            fallback: null
        }, a.default.createElement(i, { ...e
        }))
    }
}, 2355, e => {
    "use strict";
    e.s(["Analytics", () => d]);
    var t = e.i(18392),
        a = e.i(71645),
        l = e.i(18566);

    function r() {
        return "undefined" != typeof window
    }

    function n() {
        return "production"
    }

    function s() {
        return "development" === ((r() ? window.vam : n()) || "production")
    }

    function i(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)
    }

    function o(e) {
        return (0, a.useEffect)(() => {
            var t;
            e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))
        }, [e.beforeSend]), (0, a.useEffect)(() => {
            ! function(e = {
                debug: !0
            }) {
                var t;
                if (!r()) return;
                ! function(e = "auto") {
                    if ("auto" === e) {
                        window.vam = n();
                        return
                    }
                    window.vam = e
                }(e.mode), window.va || (window.va = function(...e) {
                    (window.vaq = window.vaq || []).push(e)
                }), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                let a = e.scriptSrc ? e.scriptSrc : s() ? "https://va.vercel-scripts.com/v1/script.debug.js" : e.basePath ? `${e.basePath}/insights/script.js` : "/_vercel/insights/script.js";
                if (document.head.querySelector(`script[src*="${a}"]`)) return;
                let l = document.createElement("script");
                l.src = a, l.defer = !0, l.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""), l.dataset.sdkv = "1.6.1", e.disableAutoTrack && (l.dataset.disableAutoTrack = "1"), e.endpoint ? l.dataset.endpoint = e.endpoint : e.basePath && (l.dataset.endpoint = `${e.basePath}/insights`), e.dsn && (l.dataset.dsn = e.dsn), l.onerror = () => {
                    let e = s() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                    console.log(`[Vercel Web Analytics] Failed to load script from ${a}. ${e}`)
                }, s() && !1 === e.debug && (l.dataset.debug = "false"), document.head.appendChild(l)
            }({
                framework: e.framework || "react",
                basePath: e.basePath ? ? function() {
                    if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                }(),
                ...void 0 !== e.route && {
                    disableAutoTrack: !0
                },
                ...e
            })
        }, []), (0, a.useEffect)(() => {
            e.route && e.path && function({
                route: e,
                path: t
            }) {
                var a;
                null == (a = window.va) || a.call(window, "pageview", {
                    route: e,
                    path: t
                })
            }({
                route: e.route,
                path: e.path
            })
        }, [e.route, e.path]), null
    }

    function c(e) {
        let {
            route: r,
            path: n
        } = (() => {
            let e = (0, l.useParams)(),
                t = (0, l.useSearchParams)(),
                a = (0, l.usePathname)();
            return e ? {
                route: function(e, t) {
                    if (!e || !t) return e;
                    let a = e;
                    try {
                        let e = Object.entries(t);
                        for (let [t, l] of e)
                            if (!Array.isArray(l)) {
                                let e = i(l);
                                e.test(a) && (a = a.replace(e, `/[${t}]`))
                            }
                        for (let [t, l] of e)
                            if (Array.isArray(l)) {
                                let e = i(l.join("/"));
                                e.test(a) && (a = a.replace(e, `/[...${t}]`))
                            }
                        return a
                    } catch (t) {
                        return e
                    }
                }(a, Object.keys(e).length ? e : Object.fromEntries(t.entries())),
                path: a
            } : {
                route: null,
                path: a
            }
        })();
        return a.default.createElement(o, {
            path: n,
            route: r,
            ...e,
            basePath: function() {
                if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
            }(),
            framework: "next"
        })
    }

    function d(e) {
        return a.default.createElement(a.Suspense, {
            fallback: null
        }, a.default.createElement(c, { ...e
        }))
    }
}, 74979, e => {
    "use strict";
    e.s(["default", () => a]);
    var t = e.i(71645);

    function a({
        scripts: e
    }) {
        return (0, t.useEffect)(() => {
            let t = () => {
                e.forEach(e => {
                    let t = document.createElement("script");
                    t.src = e, t.async = !0, t.onload = () => {
                        e.includes("gtag") && window.dispatchEvent(new Event("ga-loaded")), e.includes("gtm.js") && window.dispatchEvent(new Event("gtm-loaded"))
                    }, document.body.appendChild(t)
                }), window.removeEventListener("scroll", t)
            };
            return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t)
        }, [e]), null
    }
}, 38863, e => {
    "use strict";
    e.s(["default", () => v], 38863);
    var t = e.i(43476),
        a = e.i(70703),
        l = e.i(57688),
        r = e.i(22016),
        n = e.i(71645),
        s = e.i(10936),
        i = e.i(40141);

    function o(e) {
        return (0, i.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 448 512"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                },
                child: []
            }]
        })(e)
    }

    function c(e) {
        return (0, i.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 512 512"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                },
                child: []
            }]
        })(e)
    }

    function d(e) {
        return (0, i.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 512 512"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                },
                child: []
            }]
        })(e)
    }
    var u = e.i(47176);
    (0, a.default)(() => e.A(79946), {
        loadableGenerated: {
            modules: [75746]
        },
        ssr: !1
    });
    let m = (0, a.default)(() => e.A(75817), {
            loadableGenerated: {
                modules: [95499]
            },
            ssr: !1,
            loading: () => (0, t.jsx)("div", {
                className: "h-24 w-full bg-[#1E1E1E]"
            })
        }),
        f = e => !!(e && "string" == typeof e.title && "string" == typeof e.url),
        p = [{
            title: "Company",
            links: [{
                title: "About Us",
                url: "/about"
            }, {
                title: "Veridaxlabs Team",
                url: "/nadcab-team"
            }, {
                title: "Career",
                url: "/career"
            }, {
                title: "Partner with us",
                url: "/partners"
            }, {
                title: "Press Release",
                url: "/press-release"
            }]
        }, {
            title: "Services",
            links: [{
                title: "Blockchain Technology",
                url: "/blockchain-development-company"
            }, {
                title: "Cryptocurrency Exchange",
                url: "/cryptocurrency-exchange-developers"
            }, {
                title: "Real Estate Tokenization",
                url: "/real-estate-tokenization-company"
            }, {
                title: "AI Development",
                url: "/ai-application-developers"
            }, {
                title: "IoT Development",
                url: "/iot-app-development-company"
            }]
        }, {
            title: "Industries",
            links: [{
                title: "Healthcare",
                url: "/healthcare-software-development"
            }, {
                title: "Supply Chain",
                url: "/supply-chain-software-development"
            }, {
                title: "BFSI",
                url: "/bfsi-software-development-company"
            }, {
                title: "Identity Management",
                url: "/blockchain-identity-management"
            }, {
                title: "DePIN",
                url: "/depin-development-company"
            }]
        }, {
            title: "Hire",
            links: [{
                title: "Smart Contract Developer",
                url: "/hire-solidity-developers"
            }, {
                title: "LLM Engineer",
                url: "/hire-llm-engineers"
            }, {
                title: "DevOps",
                url: "/hire-devops-engineers"
            }, {
                title: "UI/UX Designer",
                url: "/hire-ui-ux-designers"
            }, {
                title: "Game Engineer",
                url: "/hire-game-developers"
            }]
        }, {
            title: "Resources",
            links: [{
                title: "Blog",
                url: "/blog"
            }, {
                title: "Case Study",
                url: "/case-study"
            }, {
                title: "Glossary",
                url: "/glossary"
            }, {
                title: "Hackathon",
                url: "/hackathon"
            }, {
                title: "Testimonials",
                url: "/testimonial"
            }]
        }],
        h = [{
            title: "Privacy Policy",
            url: "/privacy-policy"
        }, {
            title: "Terms & Conditions",
            url: "/terms-conditions"
        }, {
            title: "Help",
            url: "/help"
        }],
        g = {
            US: {
                phone: "+1 646 665 9735",
                phoneRaw: "+16466659735",
                whatsapp: "+1 646 665 9735",
                whatsappRaw: "16466659735",
                email: "info@nadcab.com"
            },
            AU: {
                phone: "+61 488 841 730",
                phoneRaw: "+61488841730",
                whatsapp: "+61 488 841 730",
                whatsappRaw: "61488841730",
                email: "info@nadcab.com"
            },
            IN: {
                phone: "+91 987 063 5001",
                phoneRaw: "+919870635001",
                whatsapp: "+91 798 520 2681",
                whatsappRaw: "917985202681",
                email: "info@nadcab.com"
            },
            GB: {
                phone: "+44 7453379563",
                phoneRaw: "+447453379563",
                whatsapp: "+44 7453379563",
                whatsappRaw: "447453379563",
                email: "info@nadcab.com"
            },
            DEFAULT: {
                phone: "+91 987 063 5001",
                phoneRaw: "+919870635001",
                whatsapp: "+91 798 520 2681",
                whatsappRaw: "917985202681",
                email: "info@nadcab.com"
            }
        },
        x = e => {
            let a = g[e] || g.DEFAULT;
            return [{
                title: a.phone,
                url: `tel:${a.phoneRaw}`,
                icon: (0, t.jsx)(d, {}),
                color: "bg-blue-600"
            }, {
                title: a.email,
                url: `mailto:${a.email}`,
                icon: (0, t.jsx)(c, {}),
                color: "bg-indigo-800"
            }, {
                title: a.whatsapp,
                url: `https://wa.me/${a.whatsappRaw}`,
                icon: (0, t.jsx)(o, {}),
                color: "from-green-600 to-emerald-600"
            }]
        },
        w = e => {
            let a = g[e] || g.DEFAULT;
            return [{
                title: "Call",
                url: `tel:${a.phoneRaw}`,
                icon: (0, t.jsx)(d, {}),
                color: "bg-blue-600"
            }, {
                title: "Mail",
                url: `mailto:${a.email}`,
                icon: (0, t.jsx)(c, {}),
                color: "bg-indigo-800"
            }, {
                title: "WhatsApp",
                url: `https://wa.me/${a.whatsappRaw}`,
                icon: (0, t.jsx)(o, {}),
                color: "from-green-600 to-emerald-600"
            }]
        },
        b = e => ({
            title: e ? .column_title || e ? .title || "Links",
            links: Array.isArray(e ? .links) ? e.links.filter(f) : []
        });

    function v({
        footerResponse: e
    }) {
        let [a, i] = (0, n.useState)("DEFAULT"), [o, c] = (0, n.useState)(!0), [d, g] = (0, n.useState)(x("DEFAULT")), [v, y] = (0, n.useState)(w("DEFAULT"));
        (0, n.useEffect)(() => {
            (async () => {
                try {
                    c(!0);
                    let e = null;
                    try {
                        let t = await fetch("https://ipapi.co/json/", {
                            signal: AbortSignal.timeout(5e3)
                        });
                        t.ok && (e = await t.json())
                    } catch (e) {
                        console.log("ipapi.co failed, trying backup...")
                    }
                    if (!e || !e.country_code) try {
                        let t = await fetch("http://ip-api.com/json/", {
                            signal: AbortSignal.timeout(5e3)
                        });
                        if (t.ok) {
                            let a = await t.json();
                            e = {
                                country_code: a.countryCode,
                                country_name: a.country
                            }
                        }
                    } catch (e) {
                        console.log("ip-api.com also failed")
                    }
                    let t = "DEFAULT";
                    if (e ? .country_code) {
                        let a = e.country_code.toUpperCase();
                        "US" === a ? t = "US" : "AU" === a ? t = "AU" : "IN" === a && (t = "IN"), console.log(`Location detected: ${a} -> ${t}`)
                    } else console.log("Could not detect location, using default");
                    i(t), g(x(t)), y(w(t))
                } catch (e) {
                    console.error("Error detecting location:", e)
                } finally {
                    c(!1)
                }
            })()
        }, []);
        let j = e ? .footer ? ? {},
            k = (Array.isArray(j.footer_menu) ? j.footer_menu : []).slice(0, 5).map(b),
            N = k.filter(e => e.links.length).length > 0 ? k : p,
            E = Array.isArray(j.bottom_links) ? j.bottom_links.filter(f) : [],
            A = Array.isArray(j.footer_links) && j.footer_links.length ? j.footer_links.filter(f) : h,
            S = Array.isArray(j.social_icons) ? j.social_icons.filter(e => !!e ? .icon) : [],
            L = Array.isArray(e ? .footer.legal_clarity_logos) ? j.legal_clarity_logos.filter(e => !!e ? .image ? .url) : [],
            R = j ? .region ? .text || "Region: International || India",
            $ = j ? .made_with || "Made with ❤️ by Veridaxlabs",
            T = j ? .copyright || "© Veridaxlabs. All Rights Reserved.";
        return (0, t.jsxs)("footer", {
            className: "bg-white dark:bg-black text-center lg:text-left text-foreground",
            children: [(0, t.jsx)("section", {
                className: "relative w-full overflow-hidden bg-[#1E1E1E]",
                children: (0, t.jsx)(m, {})
            }), (0, t.jsx)("div", {
                className: "container mx-auto py-6 lg:pt-12 px-6",
                children: (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-2",
                    children: [(0, t.jsx)("div", {
                        className: "hidden lg:grid lg:col-span-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
                        children: N.map((e, a) => (0, t.jsxs)("div", {
                            className: "text-left min-h-[180px]",
                            children: [(0, t.jsx)("h3", {
                                className: "font-semibold text-base lg:text-xl mb-4",
                                children: e.title
                            }), (0, t.jsx)("nav", {
                                className: "space-y-2",
                                children: e.links.map((e, a) => (0, t.jsx)(r.default, {
                                    href: e.url,
                                    className: "block text-muted-foreground text-sm lg:text-base hover:text-foreground transition-colors",
                                    children: e.title
                                }, `${e.title}-${a}`))
                            })]
                        }, a))
                    }), (0, t.jsxs)("div", {
                        className: "hidden lg:flex lg:flex-col lg:col-span-2 text-left",
                        children: [(0, t.jsx)("h3", {
                            className: "font-semibold text-xl mb-5 text-gray-900 dark:text-gray-100",
                            children: "Contact Us"
                        }), (0, t.jsx)("div", {
                            className: "flex flex-col gap-3",
                            children: o ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    className: "w-60 h-12 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
                                }), (0, t.jsx)("div", {
                                    className: "w-60 h-12 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
                                }), (0, t.jsx)("div", {
                                    className: "w-60 h-12 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
                                })]
                            }) : d.map((e, a) => (0, t.jsxs)("a", {
                                href: e.url,
                                className: `flex items-center gap-3 px-4 py-2 text-white rounded-md bg-gradient-to-r justify-center text-sm sm:text-base transition
                    ${e.color} hover:opacity-90 w-full sm:w-auto`,
                                children: [(0, t.jsx)("span", {
                                    className: "text-xl",
                                    children: e.icon
                                }), (0, t.jsx)("span", {
                                    children: e.title
                                })]
                            }, `${e.url}-${a}`))
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "lg:hidden flex flex-col gap-4",
                        children: [
                            [...N, {
                                title: "Mail Us",
                                links: E
                            }].map((e, a) => (0, t.jsxs)("details", {
                                className: "group border-b border-gray-200 dark:border-gray-700",
                                children: [(0, t.jsxs)("summary", {
                                    className: "w-full flex items-center justify-between pb-2 px-2 text-left font-semibold text-base cursor-pointer list-none",
                                    children: [e.title, (0, t.jsxs)("span", {
                                        className: "flex items-center text-xl",
                                        children: [(0, t.jsx)(s.IoMdArrowDropdown, {
                                            className: "group-open:hidden"
                                        }), (0, t.jsx)(s.IoMdArrowDropup, {
                                            className: "hidden group-open:block"
                                        })]
                                    })]
                                }), (0, t.jsx)("nav", {
                                    className: "pl-2 pb-3 text-left space-y-2",
                                    children: e.links && e.links.length > 0 ? e.links.map(e => (0, t.jsx)(r.default, {
                                        href: e.url,
                                        className: "block text-muted-foreground text-sm hover:text-foreground transition-colors",
                                        children: e.title
                                    }, e.url)) : (0, t.jsx)("span", {
                                        className: "text-muted-foreground text-sm",
                                        children: "No links available"
                                    })
                                })]
                            }, a)), (0, t.jsxs)("div", {
                                className: "text-center mt-4",
                                children: [(0, t.jsx)("h3", {
                                    className: "font-bold text-base mb-4",
                                    children: "Contact Us"
                                }), o ? (0, t.jsxs)("div", {
                                    className: "flex flex-row gap-3 flex-wrap sm:flex-nowrap justify-center items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "w-24 h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
                                    }), (0, t.jsx)("div", {
                                        className: "w-24 h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
                                    }), (0, t.jsx)("div", {
                                        className: "w-24 h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
                                    })]
                                }) : (0, t.jsx)("div", {
                                    className: "flex flex-row gap-3 flex-wrap sm:flex-nowrap justify-center items-center",
                                    children: v.map((e, a) => (0, t.jsxs)("a", {
                                        href: e.url,
                                        className: `flex items-center gap-2 px-2 py-2 min-w-[70px] text-white rounded-md bg-gradient-to-r justify-center text-sm ${e.color} hover:opacity-90 transition`,
                                        children: [(0, t.jsx)("span", {
                                            className: "text-sm",
                                            children: e.icon
                                        }), (0, t.jsx)("span", {
                                            className: "text-sm",
                                            children: e.title
                                        })]
                                    }, `${e.url}-${a}`))
                                })]
                            })
                        ]
                    })]
                })
            }), (0, t.jsxs)("div", {
                className: "container mx-auto px-6 lg:px-0 lg:pb-8 text-center lg:text-left mb-6",
                children: [(0, t.jsx)("div", {
                    className: "h-[1px] w-full mb-6 lg:my-6",
                    style: {
                        background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, #888888 50%, rgba(0,0,0,0) 100%)"
                    }
                }), (0, t.jsx)("div", {
                    className: "flex flex-wrap items-center gap-3 justify-center max-w-7xl mx-auto",
                    children: L && L.map((e, a) => (0, t.jsx)("div", {
                        className: "w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center",
                        children: (0, t.jsx)(l.default, {
                            alt: e ? .image ? .alt || "",
                            src: (0, u.normalizeImage)(e ? .image ? .url ? ? ""),
                            width: 80,
                            height: 90
                        })
                    }))
                })]
            }), (0, t.jsx)("div", {
                className: "container mx-auto px-6  text-center lg:text-left",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8",
                    children: [(0, t.jsx)("div", {
                        className: "flex items-center gap-4 justify-center flex-wrap",
                        children: S.map((e, a) => (0, t.jsx)(r.default, {
                            href: e.url || "#",
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            "aria-label": e ? .title || "Social link",
                            className: "hover:opacity-80 transition-opacity",
                            children: (0, t.jsx)(l.default, {
                                className: `${e.className||""} dark:invert`,
                                alt: e ? .title || "social icon",
                                src: (0, u.normalizeImage)(e.icon) || "",
                                width: 24,
                                height: 24
                            })
                        }, `${e.url}-${a}`))
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-2 text-muted-foreground text-sm",
                        children: [(0, t.jsx)(l.default, {
                            className: "dark:invert",
                            alt: "Globe icon",
                            src: "/icons/globe.svg",
                            width: 16,
                            height: 16
                        }), (0, t.jsx)("span", {
                            children: R
                        })]
                    })]
                })
            }), (0, t.jsx)("div", {
                className: "bg-muted/20 py-4 mt-4",
                children: (0, t.jsxs)("div", {
                    className: "container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 text-sm text-muted-foreground",
                    children: [(0, t.jsx)("div", {
                        className: "flex items-center gap-2",
                        children: (0, t.jsx)("span", {
                            children: $
                        })
                    }), (0, t.jsx)("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: A.map(e => (0, t.jsx)(r.default, {
                            href: e.url,
                            className: "hover:text-foreground transition-colors",
                            children: e.title
                        }, e.url))
                    }), (0, t.jsx)("span", {
                        children: T
                    })]
                })
            })]
        })
    }
}, 65095, e => {
    "use strict";
    e.s(["default", () => a]);
    var t = e.i(71645);

    function a() {
        return (0, t.useEffect)(() => {
            let e = e => {
                let t = e ? .message || e ? .reason ? .message || "";
                (t.includes("Loading chunk") || t.includes("ChunkLoadError") || t.includes("Failed to fetch dynamically imported module")) && window.location.reload()
            };
            return window.addEventListener("error", e), window.addEventListener("unhandledrejection", e), () => {
                window.removeEventListener("error", e), window.removeEventListener("unhandledrejection", e)
            }
        }, []), null
    }
}]);