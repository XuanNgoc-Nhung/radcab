(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 70065, e => {
    "use strict";
    e.s(["Card", () => i, "CardContent", () => a]);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(47163);
    let i = n.forwardRef(({
        className: e,
        ...n
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, r.cn)("rounded-xl bg-card text-card-foreground card-shadow", e),
        ...n
    }));
    i.displayName = "Card", n.forwardRef(({
        className: e,
        ...n
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, r.cn)("flex flex-col space-y-1.5 p-6", e),
        ...n
    })).displayName = "CardHeader", n.forwardRef(({
        className: e,
        ...n
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, r.cn)("font-semibold leading-none tracking-tight", e),
        ...n
    })).displayName = "CardTitle", n.forwardRef(({
        className: e,
        ...n
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, r.cn)("text-sm text-muted-foreground", e),
        ...n
    })).displayName = "CardDescription";
    let a = n.forwardRef(({
        className: e,
        ...n
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, r.cn)("p-0 pt-0", e),
        ...n
    }));
    a.displayName = "CardContent", n.forwardRef(({
        className: e,
        ...n
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, r.cn)("flex items-center p-6 pt-0", e),
        ...n
    })).displayName = "CardFooter"
}, 56329, e => {
    "use strict";
    e.s(["default", () => s]);
    var t = e.i(43476),
        n = e.i(57688),
        r = e.i(70065),
        i = e.i(47176),
        a = e.i(71645);
    let o = [{
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

    function s() {
        let e = (0, a.useRef)(null),
            [s, l] = (0, a.useState)(!1),
            [c, u] = (0, a.useState)(0),
            [d, f] = (0, a.useState)(0),
            m = () => {
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
                    e.current && (l(!0), u(t.pageX - e.current.offsetLeft), f(e.current.scrollLeft), e.current.style.cursor = "grabbing")
                },
                onMouseMove: t => {
                    if (!s || !e.current) return;
                    t.preventDefault();
                    let n = t.pageX - e.current.offsetLeft;
                    e.current.scrollLeft = d - (n - c) * 1.5
                },
                onMouseUp: m,
                onMouseLeave: m,
                onTouchStart: t => {
                    e.current && (l(!0), u(t.touches[0].pageX - e.current.offsetLeft), f(e.current.scrollLeft))
                },
                onTouchMove: t => {
                    if (!s || !e.current) return;
                    let n = t.touches[0].pageX - e.current.offsetLeft;
                    e.current.scrollLeft = d - (n - c) * 1.5
                },
                onTouchEnd: () => {
                    l(!1)
                },
                children: (0, t.jsx)("div", {
                    className: "flex gap-8 w-max py-3 px-4 select-none",
                    children: o.map((e, a) => (0, t.jsx)(r.Card, {
                        className: "flex-shrink-0 rounded-full bg-transparent flex items-center justify-center p-3 h-12 md:h-16 lg:h-14 w-32 md:w-36 lg:w-40 shadow-sm dark:shadow-none transition-transform duration-200 hover:scale-105",
                        children: (0, t.jsx)(n.default, {
                            src: (0, i.normalizeImage)(e.src) || "",
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
}, 46349, e => {
    "use strict";
    e.s(["default", () => t]);
    let t = (0, e.i(75254).default)("chevron-right", [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ])
}, 30013, e => {
    "use strict";
    e.s(["default", () => N], 30013);
    var t = e.i(71645);

    function n(e) {
        return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
    }

    function r(e, t) {
        let i = Object.keys(e),
            a = Object.keys(t);
        return i.length === a.length && JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && i.every(i => {
            let a = e[i],
                o = t[i];
            return "function" == typeof a ? `${a}` == `${o}` : n(a) && n(o) ? r(a, o) : a === o
        })
    }

    function i(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
    }

    function a(e) {
        return "number" == typeof e
    }

    function o(e) {
        return "string" == typeof e
    }

    function s(e) {
        return "boolean" == typeof e
    }

    function l(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        return Math.abs(e)
    }

    function u(e) {
        return Math.sign(e)
    }

    function d(e) {
        return g(e).map(Number)
    }

    function f(e) {
        return e[m(e)]
    }

    function m(e) {
        return Math.max(0, e.length - 1)
    }

    function p(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n)
    }

    function g(e) {
        return Object.keys(e)
    }

    function h(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
    }

    function x() {
        let e = [],
            t = {
                add: function(n, r, i, a = {
                    passive: !0
                }) {
                    let o;
                    return "addEventListener" in n ? (n.addEventListener(r, i, a), o = () => n.removeEventListener(r, i, a)) : (n.addListener(i), o = () => n.removeListener(i)), e.push(o), t
                },
                clear: function() {
                    e = e.filter(e => e())
                }
            };
        return t
    }

    function b(e = 0, t = 0) {
        let n = c(e - t);

        function r(n) {
            return n < e || n > t
        }
        return {
            length: n,
            max: t,
            min: e,
            constrain: function(n) {
                return r(n) ? n < e ? e : t : n
            },
            reachedAny: r,
            reachedMax: function(e) {
                return e > t
            },
            reachedMin: function(t) {
                return t < e
            },
            removeOffset: function(e) {
                return n ? e - n * Math.ceil((e - t) / n) : e
            }
        }
    }

    function v(e) {
        let t = e;

        function n(e) {
            return a(e) ? e : e.get()
        }
        return {
            get: function() {
                return t
            },
            set: function(e) {
                t = n(e)
            },
            add: function(e) {
                t += n(e)
            },
            subtract: function(e) {
                t -= n(e)
            }
        }
    }

    function y(e, t) {
        let n = "x" === e.scroll ? function(e) {
                return `translate3d(${e}px,0px,0px)`
            } : function(e) {
                return `translate3d(0px,${e}px,0px)`
            },
            r = t.style,
            i = null,
            a = !1;
        return {
            clear: function() {
                !a && (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
            },
            to: function(t) {
                if (a) return;
                let o = Math.round(100 * e.direction(t)) / 100;
                o !== i && (r.transform = n(o), i = o)
            },
            toggleActive: function(e) {
                a = !e
            }
        }
    }
    let w = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
    };

    function j(e, t, n) {
        let r, i, N, k, S, C = e.ownerDocument,
            L = C.defaultView,
            M = function(e) {
                function t(e, t) {
                    return function e(t, n) {
                        return [t, n].reduce((t, n) => (g(n).forEach(r => {
                            let i = t[r],
                                a = n[r],
                                o = l(i) && l(a);
                            t[r] = o ? e(i, a) : a
                        }), t), {})
                    }(e, t || {})
                }
                return {
                    mergeOptions: t,
                    optionsAtMedia: function(n) {
                        let r = n.breakpoints || {},
                            i = g(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
                        return t(n, i)
                    },
                    optionsMediaQueries: function(t) {
                        return t.map(e => g(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                    }
                }
            }(L),
            E = (S = [], {
                init: function(e, t) {
                    return (S = t.filter(({
                        options: e
                    }) => !1 !== M.optionsAtMedia(e).active)).forEach(t => t.init(e, M)), t.reduce((e, t) => Object.assign(e, {
                        [t.name]: t
                    }), {})
                },
                destroy: function() {
                    S = S.filter(e => e.destroy())
                }
            }),
            I = x(),
            O = function() {
                let e, t = {},
                    n = {
                        init: function(t) {
                            e = t
                        },
                        emit: function(r) {
                            return (t[r] || []).forEach(t => t(e, r)), n
                        },
                        off: function(e, r) {
                            return t[e] = (t[e] || []).filter(e => e !== r), n
                        },
                        on: function(e, r) {
                            return t[e] = (t[e] || []).concat([r]), n
                        },
                        clear: function() {
                            t = {}
                        }
                    };
                return n
            }(),
            {
                mergeOptions: T,
                optionsAtMedia: D,
                optionsMediaQueries: _
            } = M,
            {
                on: A,
                off: F,
                emit: R
            } = O,
            z = !1,
            H = T(w, j.globalOptions),
            P = T(H),
            $ = [];

        function B(t, n) {
            if (z) return;
            P = D(H = T(H, t)), $ = n || $;
            let {
                container: l,
                slides: w
            } = P;
            N = (o(l) ? e.querySelector(l) : l) || e.children[0];
            let j = o(w) ? N.querySelectorAll(w) : w;
            k = [].slice.call(j || N.children), r = function t(n) {
                let r = function(e, t, n, r, i, l, w) {
                    let j, N, {
                            align: k,
                            axis: S,
                            direction: C,
                            startIndex: L,
                            loop: M,
                            duration: E,
                            dragFree: I,
                            dragThreshold: O,
                            inViewThreshold: T,
                            slidesToScroll: D,
                            skipSnaps: _,
                            containScroll: A,
                            watchResize: F,
                            watchSlides: R,
                            watchDrag: z,
                            watchFocus: H
                        } = l,
                        P = {
                            measure: function(e) {
                                let {
                                    offsetTop: t,
                                    offsetLeft: n,
                                    offsetWidth: r,
                                    offsetHeight: i
                                } = e;
                                return {
                                    top: t,
                                    right: n + r,
                                    bottom: t + i,
                                    left: n,
                                    width: r,
                                    height: i
                                }
                            }
                        },
                        $ = P.measure(t),
                        B = n.map(P.measure),
                        V = function(e, t) {
                            let n = "rtl" === t,
                                r = "y" === e,
                                i = !r && n ? -1 : 1;
                            return {
                                scroll: r ? "y" : "x",
                                cross: r ? "x" : "y",
                                startEdge: r ? "top" : n ? "right" : "left",
                                endEdge: r ? "bottom" : n ? "left" : "right",
                                measureSize: function(e) {
                                    let {
                                        height: t,
                                        width: n
                                    } = e;
                                    return r ? t : n
                                },
                                direction: function(e) {
                                    return e * i
                                }
                            }
                        }(S, C),
                        U = V.measureSize($),
                        X = {
                            measure: function(e) {
                                return e / 100 * U
                            }
                        },
                        q = function(e, t) {
                            let n = {
                                start: function() {
                                    return 0
                                },
                                center: function(e) {
                                    return (t - e) / 2
                                },
                                end: function(e) {
                                    return t - e
                                }
                            };
                            return {
                                measure: function(r, i) {
                                    return o(e) ? n[e](r) : e(t, r, i)
                                }
                            }
                        }(k, U),
                        W = !M && !!A,
                        {
                            slideSizes: J,
                            slideSizesWithGaps: K,
                            startGap: Q,
                            endGap: Y
                        } = function(e, t, n, r, i, a) {
                            let {
                                measureSize: o,
                                startEdge: s,
                                endEdge: l
                            } = e, u = n[0] && i, d = function() {
                                if (!u) return 0;
                                let e = n[0];
                                return c(t[s] - e[s])
                            }(), p = u ? parseFloat(a.getComputedStyle(f(r)).getPropertyValue(`margin-${l}`)) : 0, g = n.map(o), h = n.map((e, t, n) => {
                                let r = t === m(n);
                                return t ? r ? g[t] + p : n[t + 1][s] - e[s] : g[t] + d
                            }).map(c);
                            return {
                                slideSizes: g,
                                slideSizesWithGaps: h,
                                startGap: d,
                                endGap: p
                            }
                        }(V, $, B, n, M || !!A, i),
                        G = function(e, t, n, r, i, o, s, l, u) {
                            let {
                                startEdge: p,
                                endEdge: g,
                                direction: h
                            } = e, x = a(n);
                            return {
                                groupSlides: function(e) {
                                    return x ? d(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? d(e).reduce((n, a, u) => {
                                        let d = f(n) || 0,
                                            x = a === m(e),
                                            b = i[p] - o[d][p],
                                            v = i[p] - o[a][g],
                                            y = r || 0 !== d ? 0 : h(s),
                                            w = c(v - (!r && x ? h(l) : 0) - (b + y));
                                        return u && w > t + 2 && n.push(a), x && n.push(e.length), n
                                    }, []).map((t, n, r) => {
                                        let i = Math.max(r[n - 1] || 0);
                                        return e.slice(i, t)
                                    }) : []
                                }
                            }
                        }(V, U, D, M, $, B, Q, Y, 0),
                        {
                            snaps: Z,
                            snapsAligned: ee
                        } = function(e, t, n, r, i) {
                            let {
                                startEdge: a,
                                endEdge: o
                            } = e, {
                                groupSlides: s
                            } = i, l = s(r).map(e => f(e)[o] - e[0][a]).map(c).map(t.measure), u = r.map(e => n[a] - e[a]).map(e => -c(e)), d = s(u).map(e => e[0]).map((e, t) => e + l[t]);
                            return {
                                snaps: u,
                                snapsAligned: d
                            }
                        }(V, q, $, B, G),
                        et = -f(Z) + f(K),
                        {
                            snapsContained: en,
                            scrollContainLimit: er
                        } = function(e, t, n, r, i) {
                            let a = b(-t + e, 0),
                                o = n.map((e, t) => {
                                    let {
                                        min: r,
                                        max: i
                                    } = a, o = a.constrain(e), s = t === m(n);
                                    return t ? s || function(e, t) {
                                        return 1 >= c(e - t)
                                    }(r, o) ? r : function(e, t) {
                                        return 1 >= c(e - t)
                                    }(i, o) ? i : o : i
                                }).map(e => parseFloat(e.toFixed(3))),
                                s = function() {
                                    let e = o[0],
                                        t = f(o);
                                    return b(o.lastIndexOf(e), o.indexOf(t) + 1)
                                }();
                            return {
                                snapsContained: function() {
                                    if (t <= e + 2) return [a.max];
                                    if ("keepSnaps" === r) return o;
                                    let {
                                        min: n,
                                        max: i
                                    } = s;
                                    return o.slice(n, i)
                                }(),
                                scrollContainLimit: s
                            }
                        }(U, et, ee, A, 0),
                        ei = W ? en : ee,
                        {
                            limit: ea
                        } = function(e, t, n) {
                            let r = t[0];
                            return {
                                limit: b(n ? r - e : f(t), r)
                            }
                        }(et, ei, M),
                        eo = function e(t, n, r) {
                            let {
                                constrain: i
                            } = b(0, t), a = t + 1, o = s(n);

                            function s(e) {
                                return r ? c((a + e) % a) : i(e)
                            }

                            function l() {
                                return e(t, o, r)
                            }
                            let u = {
                                get: function() {
                                    return o
                                },
                                set: function(e) {
                                    return o = s(e), u
                                },
                                add: function(e) {
                                    return l().set(o + e)
                                },
                                clone: l
                            };
                            return u
                        }(m(ei), L, M),
                        es = eo.clone(),
                        el = d(n),
                        ec = function(e, t, n, r) {
                            let i = x(),
                                a = 1e3 / 60,
                                o = null,
                                s = 0,
                                l = 0;

                            function c(e) {
                                if (!l) return;
                                o || (o = e, n(), n());
                                let i = e - o;
                                for (o = e, s += i; s >= a;) n(), s -= a;
                                r(s / a), l && (l = t.requestAnimationFrame(c))
                            }

                            function u() {
                                t.cancelAnimationFrame(l), o = null, s = 0, l = 0
                            }
                            return {
                                init: function() {
                                    i.add(e, "visibilitychange", () => {
                                        e.hidden && (o = null, s = 0)
                                    })
                                },
                                destroy: function() {
                                    u(), i.clear()
                                },
                                start: function() {
                                    l || (l = t.requestAnimationFrame(c))
                                },
                                stop: u,
                                update: n,
                                render: r
                            }
                        }(r, i, () => (({
                            dragHandler: e,
                            scrollBody: t,
                            scrollBounds: n,
                            options: {
                                loop: r
                            }
                        }) => {
                            r || n.constrain(e.pointerDown()), t.seek()
                        })(eN), e => (({
                            scrollBody: e,
                            translate: t,
                            location: n,
                            offsetLocation: r,
                            previousLocation: i,
                            scrollLooper: a,
                            slideLooper: o,
                            dragHandler: s,
                            animation: l,
                            eventHandler: c,
                            scrollBounds: u,
                            options: {
                                loop: d
                            }
                        }, f) => {
                            let m = e.settled(),
                                p = !u.shouldConstrain(),
                                g = d ? m : m && p,
                                h = g && !s.pointerDown();
                            h && l.stop();
                            let x = n.get() * f + i.get() * (1 - f);
                            r.set(x), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), h && c.emit("settle"), g || c.emit("scroll")
                        })(eN, e)),
                        eu = ei[eo.get()],
                        ed = v(eu),
                        ef = v(eu),
                        em = v(eu),
                        ep = v(eu),
                        eg = function(e, t, n, r, i, a) {
                            let o = 0,
                                s = 0,
                                l = i,
                                d = .68,
                                f = e.get(),
                                m = 0;

                            function p(e) {
                                return l = e, h
                            }

                            function g(e) {
                                return d = e, h
                            }
                            let h = {
                                direction: function() {
                                    return s
                                },
                                duration: function() {
                                    return l
                                },
                                velocity: function() {
                                    return o
                                },
                                seek: function() {
                                    let t = r.get() - e.get(),
                                        i = 0;
                                    return l ? (n.set(e), o += t / l, o *= d, f += o, e.add(o), i = f - m) : (o = 0, n.set(r), e.set(r), i = t), s = u(i), m = f, h
                                },
                                settled: function() {
                                    return .001 > c(r.get() - t.get())
                                },
                                useBaseFriction: function() {
                                    return g(.68)
                                },
                                useBaseDuration: function() {
                                    return p(i)
                                },
                                useFriction: g,
                                useDuration: p
                            };
                            return h
                        }(ed, em, ef, ep, E, .68),
                        eh = function(e, t, n, r, i) {
                            let {
                                reachedAny: a,
                                removeOffset: o,
                                constrain: s
                            } = r;

                            function l(e) {
                                return e.concat().sort((e, t) => c(e) - c(t))[0]
                            }

                            function d(t, r) {
                                let i = [t, t + n, t - n];
                                if (!e) return t;
                                if (!r) return l(i);
                                let a = i.filter(e => u(e) === r);
                                return a.length ? l(a) : f(i) - n
                            }
                            return {
                                byDistance: function(n, r) {
                                    let l = i.get() + n,
                                        {
                                            index: u,
                                            distance: f
                                        } = function(n) {
                                            let r = e ? o(n) : s(n),
                                                {
                                                    index: i
                                                } = t.map((e, t) => ({
                                                    diff: d(e - r, 0),
                                                    index: t
                                                })).sort((e, t) => c(e.diff) - c(t.diff))[0];
                                            return {
                                                index: i,
                                                distance: r
                                            }
                                        }(l),
                                        m = !e && a(l);
                                    if (!r || m) return {
                                        index: u,
                                        distance: n
                                    };
                                    let p = n + d(t[u] - f, 0);
                                    return {
                                        index: u,
                                        distance: p
                                    }
                                },
                                byIndex: function(e, n) {
                                    let r = d(t[e] - i.get(), n);
                                    return {
                                        index: e,
                                        distance: r
                                    }
                                },
                                shortcut: d
                            }
                        }(M, ei, et, ea, ep),
                        ex = function(e, t, n, r, i, a, o) {
                            function s(i) {
                                let s = i.distance,
                                    l = i.index !== t.get();
                                a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (n.set(t.get()), t.set(i.index), o.emit("select"))
                            }
                            return {
                                distance: function(e, t) {
                                    s(i.byDistance(e, t))
                                },
                                index: function(e, n) {
                                    let r = t.clone().set(e);
                                    s(i.byIndex(r.get(), n))
                                }
                            }
                        }(ec, eo, es, eg, eh, ep, w),
                        eb = function(e) {
                            let {
                                max: t,
                                length: n
                            } = e;
                            return {
                                get: function(e) {
                                    return n ? -((e - t) / n) : 0
                                }
                            }
                        }(ea),
                        ev = x(),
                        ey = function(e, t, n, r) {
                            let i, a = {},
                                o = null,
                                s = null,
                                l = !1;
                            return {
                                init: function() {
                                    i = new IntersectionObserver(e => {
                                        l || (e.forEach(e => {
                                            a[t.indexOf(e.target)] = e
                                        }), o = null, s = null, n.emit("slidesInView"))
                                    }, {
                                        root: e.parentElement,
                                        threshold: r
                                    }), t.forEach(e => i.observe(e))
                                },
                                destroy: function() {
                                    i && i.disconnect(), l = !0
                                },
                                get: function(e = !0) {
                                    if (e && o) return o;
                                    if (!e && s) return s;
                                    let t = g(a).reduce((t, n) => {
                                        let r = parseInt(n),
                                            {
                                                isIntersecting: i
                                            } = a[r];
                                        return (e && i || !e && !i) && t.push(r), t
                                    }, []);
                                    return e && (o = t), e || (s = t), t
                                }
                            }
                        }(t, n, w, T),
                        {
                            slideRegistry: ew
                        } = function(e, t, n, r, i, a) {
                            let {
                                groupSlides: o
                            } = i, {
                                min: s,
                                max: l
                            } = r;
                            return {
                                slideRegistry: function() {
                                    let r = o(a);
                                    return 1 === n.length ? [a] : e && "keepSnaps" !== t ? r.slice(s, l).map((e, t, n) => {
                                        let r = t === m(n);
                                        return t ? r ? p(m(a) - f(n)[0] + 1, f(n)[0]) : e : p(f(n[0]) + 1)
                                    }) : r
                                }()
                            }
                        }(W, A, ei, er, G, el),
                        ej = function(e, t, n, r, i, o, l, c) {
                            let u = {
                                    passive: !0,
                                    capture: !0
                                },
                                d = 0;

                            function f(e) {
                                "Tab" === e.code && (d = new Date().getTime())
                            }
                            return {
                                init: function(m) {
                                    c && (o.add(document, "keydown", f, !1), t.forEach((t, f) => {
                                        o.add(t, "focus", t => {
                                            (s(c) || c(m, t)) && function(t) {
                                                if (new Date().getTime() - d > 10) return;
                                                l.emit("slideFocusStart"), e.scrollLeft = 0;
                                                let o = n.findIndex(e => e.includes(t));
                                                a(o) && (i.useDuration(0), r.index(o, 0), l.emit("slideFocus"))
                                            }(f)
                                        }, u)
                                    }))
                                }
                            }
                        }(e, n, ew, ex, eg, ev, w, H),
                        eN = {
                            ownerDocument: r,
                            ownerWindow: i,
                            eventHandler: w,
                            containerRect: $,
                            slideRects: B,
                            animation: ec,
                            axis: V,
                            dragHandler: function(e, t, n, r, i, a, o, l, d, f, m, p, g, v, y, w, j, N, k) {
                                let {
                                    cross: S,
                                    direction: C
                                } = e, L = ["INPUT", "SELECT", "TEXTAREA"], M = {
                                    passive: !1
                                }, E = x(), I = x(), O = b(50, 225).constrain(v.measure(20)), T = {
                                    mouse: 300,
                                    touch: 400
                                }, D = {
                                    mouse: 500,
                                    touch: 600
                                }, _ = y ? 43 : 25, A = !1, F = 0, R = 0, z = !1, H = !1, P = !1, $ = !1;

                                function B(e) {
                                    if (!h(e, r) && e.touches.length >= 2) return V(e);
                                    let t = a.readPoint(e),
                                        n = a.readPoint(e, S),
                                        o = c(t - F),
                                        s = c(n - R);
                                    if (!H && !$ && (!e.cancelable || !(H = o > s))) return V(e);
                                    let u = a.pointerMove(e);
                                    o > w && (P = !0), f.useFriction(.3).useDuration(.75), l.start(), i.add(C(u)), e.preventDefault()
                                }

                                function V(e) {
                                    let t = m.byDistance(0, !1).index !== p.get(),
                                        n = a.pointerUp(e) * (y ? D : T)[$ ? "mouse" : "touch"],
                                        r = function(e, t) {
                                            let n = p.add(-1 * u(e)),
                                                r = m.byDistance(e, !y).distance;
                                            return y || c(e) < O ? r : j && t ? .5 * r : m.byIndex(n.get(), 0).distance
                                        }(C(n), t),
                                        i = function(e, t) {
                                            var n, r;
                                            if (0 === e || 0 === t || c(e) <= c(t)) return 0;
                                            let i = (n = c(e), r = c(t), c(n - r));
                                            return c(i / e)
                                        }(n, r);
                                    H = !1, z = !1, I.clear(), f.useDuration(_ - 10 * i).useFriction(.68 + i / 50), d.distance(r, !y), $ = !1, g.emit("pointerUp")
                                }

                                function U(e) {
                                    P && (e.stopPropagation(), e.preventDefault(), P = !1)
                                }
                                return {
                                    init: function(e) {
                                        k && E.add(t, "dragstart", e => e.preventDefault(), M).add(t, "touchmove", () => void 0, M).add(t, "touchend", () => void 0).add(t, "touchstart", l).add(t, "mousedown", l).add(t, "touchcancel", V).add(t, "contextmenu", V).add(t, "click", U, !0);

                                        function l(l) {
                                            (s(k) || k(e, l)) && function(e) {
                                                let s = h(e, r);
                                                if (($ = s, P = y && s && !e.buttons && A, A = c(i.get() - o.get()) >= 2, !s || 0 === e.button) && ! function(e) {
                                                        let t = e.nodeName || "";
                                                        return L.includes(t)
                                                    }(e.target)) {
                                                    z = !0, a.pointerDown(e), f.useFriction(0).useDuration(0), i.set(o);
                                                    let r = $ ? n : t;
                                                    I.add(r, "touchmove", B, M).add(r, "touchend", V).add(r, "mousemove", B, M).add(r, "mouseup", V), F = a.readPoint(e), R = a.readPoint(e, S), g.emit("pointerDown")
                                                }
                                            }(l)
                                        }
                                    },
                                    destroy: function() {
                                        E.clear(), I.clear()
                                    },
                                    pointerDown: function() {
                                        return z
                                    }
                                }
                            }(V, e, r, i, ep, function(e, t) {
                                let n, r;

                                function i(e) {
                                    return e.timeStamp
                                }

                                function a(n, r) {
                                    let i = r || e.scroll,
                                        a = `client${"x"===i?"X":"Y"}`;
                                    return (h(n, t) ? n : n.touches[0])[a]
                                }
                                return {
                                    pointerDown: function(e) {
                                        return n = e, r = e, a(e)
                                    },
                                    pointerMove: function(e) {
                                        let t = a(e) - a(r),
                                            o = i(e) - i(n) > 170;
                                        return r = e, o && (n = e), t
                                    },
                                    pointerUp: function(e) {
                                        if (!n || !r) return 0;
                                        let t = a(r) - a(n),
                                            o = i(e) - i(n),
                                            s = i(e) - i(r) > 170,
                                            l = t / o;
                                        return o && !s && c(l) > .1 ? l : 0
                                    },
                                    readPoint: a
                                }
                            }(V, i), ed, ec, ex, eg, eh, eo, w, X, I, O, _, 0, z),
                            eventStore: ev,
                            percentOfView: X,
                            index: eo,
                            indexPrevious: es,
                            limit: ea,
                            location: ed,
                            offsetLocation: em,
                            previousLocation: ef,
                            options: l,
                            resizeHandler: function(e, t, n, r, i, a, o) {
                                let l, u, d = [e].concat(r),
                                    f = [],
                                    m = !1;

                                function p(e) {
                                    return i.measureSize(o.measure(e))
                                }
                                return {
                                    init: function(i) {
                                        a && (u = p(e), f = r.map(p), l = new ResizeObserver(n => {
                                            (s(a) || a(i, n)) && function(n) {
                                                for (let a of n) {
                                                    if (m) return;
                                                    let n = a.target === e,
                                                        o = r.indexOf(a.target),
                                                        s = n ? u : f[o];
                                                    if (c(p(n ? e : r[o]) - s) >= .5) {
                                                        i.reInit(), t.emit("resize");
                                                        break
                                                    }
                                                }
                                            }(n)
                                        }), n.requestAnimationFrame(() => {
                                            d.forEach(e => l.observe(e))
                                        }))
                                    },
                                    destroy: function() {
                                        m = !0, l && l.disconnect()
                                    }
                                }
                            }(t, w, i, n, V, F, P),
                            scrollBody: eg,
                            scrollBounds: function(e, t, n, r, i) {
                                let a = i.measure(10),
                                    o = i.measure(50),
                                    s = b(.1, .99),
                                    l = !1;

                                function u() {
                                    return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
                                }
                                return {
                                    shouldConstrain: u,
                                    constrain: function(i) {
                                        if (!u()) return;
                                        let l = e.reachedMin(t.get()) ? "min" : "max",
                                            d = c(e[l] - t.get()),
                                            f = n.get() - t.get(),
                                            m = s.constrain(d / o);
                                        n.subtract(f * m), !i && c(f) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(e) {
                                        l = !e
                                    }
                                }
                            }(ea, em, ep, eg, X),
                            scrollLooper: function(e, t, n, r) {
                                let {
                                    reachedMin: i,
                                    reachedMax: a
                                } = b(t.min + .1, t.max + .1);
                                return {
                                    loop: function(t) {
                                        if (!(1 === t ? a(n.get()) : -1 === t && i(n.get()))) return;
                                        let o = -1 * t * e;
                                        r.forEach(e => e.add(o))
                                    }
                                }
                            }(et, ea, em, [ed, em, ef, ep]),
                            scrollProgress: eb,
                            scrollSnapList: ei.map(eb.get),
                            scrollSnaps: ei,
                            scrollTarget: eh,
                            scrollTo: ex,
                            slideLooper: function(e, t, n, r, i, a, o, s, l) {
                                let c = d(i),
                                    u = d(i).reverse(),
                                    f = g(p(u, o[0]), n, !1).concat(g(p(c, t - o[0] - 1), -n, !0));

                                function m(e, t) {
                                    return e.reduce((e, t) => e - i[t], t)
                                }

                                function p(e, t) {
                                    return e.reduce((e, n) => m(e, t) > 0 ? e.concat([n]) : e, [])
                                }

                                function g(i, o, c) {
                                    let u = a.map((e, n) => ({
                                        start: e - r[n] + .5 + o,
                                        end: e + t - .5 + o
                                    }));
                                    return i.map(t => {
                                        let r = c ? 0 : -n,
                                            i = c ? n : 0,
                                            a = u[t][c ? "end" : "start"];
                                        return {
                                            index: t,
                                            loopPoint: a,
                                            slideLocation: v(-1),
                                            translate: y(e, l[t]),
                                            target: () => s.get() > a ? r : i
                                        }
                                    })
                                }
                                return {
                                    canLoop: function() {
                                        return f.every(({
                                            index: e
                                        }) => .1 >= m(c.filter(t => t !== e), t))
                                    },
                                    clear: function() {
                                        f.forEach(e => e.translate.clear())
                                    },
                                    loop: function() {
                                        f.forEach(e => {
                                            let {
                                                target: t,
                                                translate: n,
                                                slideLocation: r
                                            } = e, i = t();
                                            i !== r.get() && (n.to(i), r.set(i))
                                        })
                                    },
                                    loopPoints: f
                                }
                            }(V, U, et, J, K, Z, ei, em, n),
                            slideFocus: ej,
                            slidesHandler: (N = !1, {
                                init: function(e) {
                                    R && (j = new MutationObserver(t => {
                                        !N && (s(R) || R(e, t)) && function(t) {
                                            for (let n of t)
                                                if ("childList" === n.type) {
                                                    e.reInit(), w.emit("slidesChanged");
                                                    break
                                                }
                                        }(t)
                                    })).observe(t, {
                                        childList: !0
                                    })
                                },
                                destroy: function() {
                                    j && j.disconnect(), N = !0
                                }
                            }),
                            slidesInView: ey,
                            slideIndexes: el,
                            slideRegistry: ew,
                            slidesToScroll: G,
                            target: ep,
                            translate: y(V, t)
                        };
                    return eN
                }(e, N, k, C, L, n, O);
                return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                    loop: !1
                })) : r
            }(P), _([H, ...$.map(({
                options: e
            }) => e)]).forEach(e => I.add(e, "change", V)), P.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(W), r.eventHandler.init(W), r.resizeHandler.init(W), r.slidesHandler.init(W), r.options.loop && r.slideLooper.loop(), N.offsetParent && k.length && r.dragHandler.init(W), i = E.init(W, $))
        }

        function V(e, t) {
            let n = q();
            U(), B(T({
                startIndex: n
            }, e), t), O.emit("reInit")
        }

        function U() {
            r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), E.destroy(), I.clear()
        }

        function X(e, t, n) {
            P.active && !z && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : P.duration), r.scrollTo.index(e, n || 0))
        }

        function q() {
            return r.index.get()
        }
        let W = {
            canScrollNext: function() {
                return r.index.add(1).get() !== q()
            },
            canScrollPrev: function() {
                return r.index.add(-1).get() !== q()
            },
            containerNode: function() {
                return N
            },
            internalEngine: function() {
                return r
            },
            destroy: function() {
                z || (z = !0, I.clear(), U(), O.emit("destroy"), O.clear())
            },
            off: F,
            on: A,
            emit: R,
            plugins: function() {
                return i
            },
            previousScrollSnap: function() {
                return r.indexPrevious.get()
            },
            reInit: V,
            rootNode: function() {
                return e
            },
            scrollNext: function(e) {
                X(r.index.add(1).get(), e, -1)
            },
            scrollPrev: function(e) {
                X(r.index.add(-1).get(), e, 1)
            },
            scrollProgress: function() {
                return r.scrollProgress.get(r.offsetLocation.get())
            },
            scrollSnapList: function() {
                return r.scrollSnapList
            },
            scrollTo: X,
            selectedScrollSnap: q,
            slideNodes: function() {
                return k
            },
            slidesInView: function() {
                return r.slidesInView.get()
            },
            slidesNotInView: function() {
                return r.slidesInView.get(!1)
            }
        };
        return B(t, n), setTimeout(() => O.emit("init"), 0), W
    }

    function N(e = {}, n = []) {
        let a = (0, t.useRef)(e),
            o = (0, t.useRef)(n),
            [s, l] = (0, t.useState)(),
            [c, u] = (0, t.useState)(),
            d = (0, t.useCallback)(() => {
                s && s.reInit(a.current, o.current)
            }, [s]);
        return (0, t.useEffect)(() => {
            r(a.current, e) || (a.current = e, d())
        }, [e, d]), (0, t.useEffect)(() => {
            ! function(e, t) {
                if (e.length !== t.length) return !1;
                let n = i(e),
                    a = i(t);
                return n.every((e, t) => r(e, a[t]))
            }(o.current, n) && (o.current = n, d())
        }, [n, d]), (0, t.useEffect)(() => {
            if ("undefined" != typeof window && window.document && window.document.createElement && c) {
                j.globalOptions = N.globalOptions;
                let e = j(c, a.current, o.current);
                return l(e), () => e.destroy()
            }
            l(void 0)
        }, [c, l]), [u, s]
    }
    j.globalOptions = void 0, N.globalOptions = void 0
}, 73375, 63059, e => {
    "use strict";
    e.s(["ChevronLeft", () => t], 73375);
    let t = (0, e.i(75254).default)("chevron-left", [
        ["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]
    ]);
    e.s(["ChevronRight", () => n.default], 63059);
    var n = e.i(46349)
}, 81509, e => {
    "use strict";
    e.s(["default", () => i]);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(22016);

    function i({
        data: e
    }) {
        let [i, a] = (0, n.useState)("all"), [o, s] = (0, n.useState)(8), [l] = (0, n.useState)(e), [c, u] = (0, n.useState)(!1), d = (0, n.useMemo)(() => [...new Map(l.flatMap(e => e.categories ? ? []).map(e => [e.name, e])).values()], [l]), f = (0, n.useMemo)(() => "all" === i ? l : l.filter(e => e.categories ? .some(e => e.name.toLowerCase() === i.toLowerCase())), [l, i]), m = (0, n.useMemo)(() => f.slice(0, o), [f, o]), p = o < f.length, g = (0, n.useCallback)(e => {
            a(e), s(8)
        }, []), h = (0, n.useCallback)(() => {
            u(!0), setTimeout(() => {
                s(e => Math.min(e + 8, f.length)), u(!1)
            }, 300)
        }, [f.length]);
        return (0, t.jsxs)("div", {
            className: "w-full",
            children: [(0, t.jsx)("nav", {
                className: "max-w-7xl mx-auto py-6 md:py-8 lg:py-10 border-b border-gray-200 dark:border-gray-700",
                role: "tablist",
                "aria-label": "Case study categories",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-wrap gap-2 sm:gap-3 justify-center items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto",
                    children: [(0, t.jsx)("button", {
                        onClick: () => g("all"),
                        role: "tab",
                        "aria-selected": "all" === i,
                        "aria-controls": "case-studies-content",
                        className: `
              py-2.5 px-5 sm:py-3 sm:px-6 
              text-sm sm:text-base font-medium 
              rounded-full
              transition-all duration-200 
              whitespace-nowrap
              min-h-[44px] flex items-center justify-center
              ${"all"===i?"bg-[#0092ff2e] text-[#0092ff] shadow-sm":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}
            `,
                        children: "All"
                    }), d.map((e, n) => (0, t.jsx)("button", {
                        onClick: () => g(e.name),
                        role: "tab",
                        "aria-selected": i === e.name,
                        "aria-controls": "case-studies-content",
                        className: `
                py-2.5 px-5 sm:py-3 sm:px-6 
                text-sm sm:text-base font-medium 
                rounded-full
                transition-all duration-200
                whitespace-nowrap
                min-h-full flex items-center justify-center
                ${i===e.name?"bg-[#0092ff2e] text-[#0092ff] shadow-sm":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}
              `,
                        dangerouslySetInnerHTML: {
                            __html: e.name || ""
                        }
                    }, `${n}-${e.name}`))]
                })
            }), (0, t.jsx)("div", {
                id: "case-studies-content",
                role: "tabpanel",
                className: "max-w-7xl mx-auto py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8",
                children: 0 === m.length ? (0, t.jsxs)("div", {
                    className: "flex flex-col items-center justify-center py-16 md:py-10",
                    children: [(0, t.jsx)("svg", {
                        className: "w-16 h-16 sm:w-20 sm:h-20 text-gray-300 dark:text-gray-600 mb-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        })
                    }), (0, t.jsx)("p", {
                        className: "text-base sm:text-lg text-gray-500 dark:text-gray-400 text-center",
                        children: "No case studies found for this category."
                    })]
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("div", {
                        className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-[1600px] mx-auto",
                        children: m.map(e => (0, t.jsx)(r.default, {
                            href: `/case-study/${e?.slug}`,
                            className: "group focus:outline-none focus:ring-2 focus:ring-[#0092ff] focus:ring-offset-2 rounded-xl",
                            children: (0, t.jsxs)("article", {
                                className: " relative  aspect-[3/4]  w-full  rounded-xl  overflow-hidden  cursor-pointer transition-all duration-300 ease-out transform  hover:scale-[1.02]  hover:shadow-2xl bg-gray-100 dark:bg-gray-800 ",
                                children: [(0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105",
                                    style: {
                                        backgroundImage: `url('${e.featured_image?.url||"/fallback.jpg"}')`
                                    },
                                    role: "img",
                                    "aria-label": e.title || "Case study image"
                                }), (0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300"
                                }), (0, t.jsx)("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6",
                                    children: (0, t.jsx)("h3", {
                                        className: " text-white  text-sm sm:text-base md:text-lg  font-semibold  leading-snug line-clamp-3 group-hover:line-clamp-none transition-all duration-300 ",
                                        dangerouslySetInnerHTML: {
                                            __html: e.title || "Untitled Case Study"
                                        }
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    children: (0, t.jsx)("div", {
                                        className: "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center",
                                        children: (0, t.jsx)("svg", {
                                            className: "w-4 h-4 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, t.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 5l7 7-7 7"
                                            })
                                        })
                                    })
                                })]
                            })
                        }, `${e.id}-${e.slug}`))
                    }), p && (0, t.jsx)("div", {
                        className: "flex justify-center mt-10 md:mt-12 lg:mt-16",
                        children: (0, t.jsx)("button", {
                            onClick: h,
                            disabled: c,
                            className: " relative px-8 py-3.5  bg-black hover:bg-black/90  disabled:bg-gray-400 disabled:cursor-not-allowed text-white  font-medium  text-sm sm:text-base rounded-full  transition-all duration-200  shadow-lg hover:shadow-xl min-w-[160px] min-h-[48px] flex items-center justify-center gap-2 ",
                            children: c ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsxs)("svg", {
                                    className: "animate-spin h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [(0, t.jsx)("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), (0, t.jsx)("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), (0, t.jsx)("span", {
                                    children: "Loading..."
                                })]
                            }) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    children: "Load More"
                                }), (0, t.jsx)("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 9l-7 7-7-7"
                                    })
                                })]
                            })
                        })
                    })]
                })
            })]
        })
    }
}, 32257, e => {
    "use strict";
    e.s(["default", () => c]);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(30013),
        i = e.i(73375),
        a = e.i(63059),
        o = e.i(57688),
        s = e.i(22016),
        l = e.i(47176);

    function c({
        sliderdata: e
    }) {
        let [c, u] = (0, n.useState)([]), [d, f] = (0, n.useState)(!0), [m, p] = (0, r.default)({
            loop: e.length > 1,
            align: "start"
        }), g = (0, n.useRef)(null), h = (0, n.useRef)(null);
        return ((0, n.useEffect)(() => {
            e ? .length > 0 && u(e), f(!1)
        }, [e]), (0, n.useEffect)(() => {
            p && (g.current && (g.current.onclick = () => p.scrollPrev()), h.current && (h.current.onclick = () => p.scrollNext()))
        }, [p]), d) ? (0, t.jsx)("div", {
            className: "relative w-full min-h-screen flex items-center justify-center",
            children: (0, t.jsx)("div", {
                className: "animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"
            })
        }) : 0 === c.length ? (0, t.jsx)("div", {
            className: "relative w-full min-h-screen flex items-center justify-center text-white",
            children: (0, t.jsx)("p", {
                children: "No case studies available"
            })
        }) : (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
                className: "relative  max-w-7xl  w-full mx-auto flex items-center justify-center group lg:px-4",
                children: [(0, t.jsx)("button", {
                    ref: g,
                    className: "absolute left-4 md:left-12 z-30 w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white hover:bg-slate-800/80 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-slate-700/0 hover:border-slate-700/50 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100",
                    children: (0, t.jsx)(i.ChevronLeft, {
                        className: "w-6 h-6 md:w-8 md:h-8"
                    })
                }), (0, t.jsx)("button", {
                    ref: h,
                    className: "absolute right-4 md:right-12 z-30 w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white hover:bg-slate-800/80 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-slate-700/0 hover:border-slate-700/50 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100",
                    children: (0, t.jsx)(a.ChevronRight, {
                        className: "w-6 h-6 md:w-8 md:h-8"
                    })
                }), (0, t.jsx)("div", {
                    className: "   overflow-hidden",
                    ref: m,
                    children: (0, t.jsx)("div", {
                        className: "flex",
                        children: c.map(e => {
                            let n = e.brand_feature_image.url,
                                r = e.brand_feature_image.alt || e.title,
                                i = e.brand_background_color;
                            return (0, t.jsx)("div", {
                                className: "flex-[0_0_100%] lg:p-4",
                                children: (0, t.jsxs)("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  min-h-[80vh] md:min-h-[500px] w-full mx-auto  overflow-hidden rounded-3xl",
                                    children: [(0, t.jsx)("div", {
                                        className: `bg-gradient-to-br ${i} p-4 md:p-8 h-full`,
                                        style: {
                                            backgroundColor: i
                                        },
                                        children: n && (0, t.jsx)("div", {
                                            className: "w-full h-full min-h-[40vh] md:min-h-[50vh] lg:min-h-full flex items-center justify-center relative rounded-3xl overflow-hidden",
                                            children: (0, t.jsx)(o.default, {
                                                src: (0, l.normalizeImage)(n) || "",
                                                alt: r,
                                                fill: !0,
                                                sizes: "(max-width: 768px) 100vw, 50vw",
                                                className: "object-cover",
                                                priority: !0
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: `p-8 md:p-12 flex flex-col justify-center text-white 
                  bg-gradient-to-br ${i} h-full`,
                                        style: {
                                            backgroundColor: i
                                        },
                                        children: (0, t.jsxs)("div", {
                                            className: "space-y-6 max-w-xl",
                                            children: [(0, t.jsx)(s.default, {
                                                href: e.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, t.jsx)("h2", {
                                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 line-clamp-2  transition-colors",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.title
                                                    }
                                                })
                                            }), (0, t.jsx)(s.default, {
                                                href: e.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, t.jsx)("p", {
                                                    className: "text-base md:text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.content
                                                    }
                                                })
                                            }), e.brand_logo ? .url && (0, t.jsx)("div", {
                                                className: "flex items-center gap-3 pt-4",
                                                children: (0, t.jsx)("div", {
                                                    className: "relative w-52 h-14 overflow-hidden",
                                                    children: (0, t.jsx)(s.default, {
                                                        href: e.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: (0, t.jsx)(o.default, {
                                                            src: (0, l.normalizeImage)(e.brand_logo.url) || "",
                                                            alt: e.brand_logo.alt,
                                                            width: e.brand_logo.width,
                                                            height: e.brand_logo.height,
                                                            className: "object-contain w-full h-full"
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }, e.id)
                        })
                    })
                })]
            })
        })
    }
}]);