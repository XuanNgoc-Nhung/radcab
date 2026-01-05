(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 46349, e => {
    "use strict";
    e.s(["default", () => t]);
    let t = (0, e.i(75254).default)("chevron-right", [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ])
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

    function u(e) {
        return "boolean" == typeof e
    }

    function l(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        return Math.abs(e)
    }

    function s(e) {
        return Math.sign(e)
    }

    function d(e) {
        return g(e).map(Number)
    }

    function f(e) {
        return e[p(e)]
    }

    function p(e) {
        return Math.max(0, e.length - 1)
    }

    function m(e, t = 0) {
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

    function y(e) {
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

    function v(e, t) {
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
        let r, i, N, k, S, _ = e.ownerDocument,
            A = _.defaultView,
            E = function(e) {
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
            }(A),
            O = (S = [], {
                init: function(e, t) {
                    return (S = t.filter(({
                        options: e
                    }) => !1 !== E.optionsAtMedia(e).active)).forEach(t => t.init(e, E)), t.reduce((e, t) => Object.assign(e, {
                        [t.name]: t
                    }), {})
                },
                destroy: function() {
                    S = S.filter(e => e.destroy())
                }
            }),
            L = x(),
            D = function() {
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
                mergeOptions: I,
                optionsAtMedia: H,
                optionsMediaQueries: M
            } = E,
            {
                on: P,
                off: C,
                emit: F
            } = D,
            T = !1,
            B = I(w, j.globalOptions),
            U = I(B),
            R = [];

        function z(t, n) {
            if (T) return;
            U = H(B = I(B, t)), R = n || R;
            let {
                container: l,
                slides: w
            } = U;
            N = (o(l) ? e.querySelector(l) : l) || e.children[0];
            let j = o(w) ? N.querySelectorAll(w) : w;
            k = [].slice.call(j || N.children), r = function t(n) {
                let r = function(e, t, n, r, i, l, w) {
                    let j, N, {
                            align: k,
                            axis: S,
                            direction: _,
                            startIndex: A,
                            loop: E,
                            duration: O,
                            dragFree: L,
                            dragThreshold: D,
                            inViewThreshold: I,
                            slidesToScroll: H,
                            skipSnaps: M,
                            containScroll: P,
                            watchResize: C,
                            watchSlides: F,
                            watchDrag: T,
                            watchFocus: B
                        } = l,
                        U = {
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
                        R = U.measure(t),
                        z = n.map(U.measure),
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
                        }(S, _),
                        $ = V.measureSize(R),
                        q = {
                            measure: function(e) {
                                return e / 100 * $
                            }
                        },
                        K = function(e, t) {
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
                        }(k, $),
                        Y = !E && !!P,
                        {
                            slideSizes: G,
                            slideSizesWithGaps: W,
                            startGap: J,
                            endGap: Q
                        } = function(e, t, n, r, i, a) {
                            let {
                                measureSize: o,
                                startEdge: u,
                                endEdge: l
                            } = e, s = n[0] && i, d = function() {
                                if (!s) return 0;
                                let e = n[0];
                                return c(t[u] - e[u])
                            }(), m = s ? parseFloat(a.getComputedStyle(f(r)).getPropertyValue(`margin-${l}`)) : 0, g = n.map(o), h = n.map((e, t, n) => {
                                let r = t === p(n);
                                return t ? r ? g[t] + m : n[t + 1][u] - e[u] : g[t] + d
                            }).map(c);
                            return {
                                slideSizes: g,
                                slideSizesWithGaps: h,
                                startGap: d,
                                endGap: m
                            }
                        }(V, R, z, n, E || !!P, i),
                        X = function(e, t, n, r, i, o, u, l, s) {
                            let {
                                startEdge: m,
                                endEdge: g,
                                direction: h
                            } = e, x = a(n);
                            return {
                                groupSlides: function(e) {
                                    return x ? d(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? d(e).reduce((n, a, s) => {
                                        let d = f(n) || 0,
                                            x = a === p(e),
                                            b = i[m] - o[d][m],
                                            y = i[m] - o[a][g],
                                            v = r || 0 !== d ? 0 : h(u),
                                            w = c(y - (!r && x ? h(l) : 0) - (b + v));
                                        return s && w > t + 2 && n.push(a), x && n.push(e.length), n
                                    }, []).map((t, n, r) => {
                                        let i = Math.max(r[n - 1] || 0);
                                        return e.slice(i, t)
                                    }) : []
                                }
                            }
                        }(V, $, H, E, R, z, J, Q, 0),
                        {
                            snaps: Z,
                            snapsAligned: ee
                        } = function(e, t, n, r, i) {
                            let {
                                startEdge: a,
                                endEdge: o
                            } = e, {
                                groupSlides: u
                            } = i, l = u(r).map(e => f(e)[o] - e[0][a]).map(c).map(t.measure), s = r.map(e => n[a] - e[a]).map(e => -c(e)), d = u(s).map(e => e[0]).map((e, t) => e + l[t]);
                            return {
                                snaps: s,
                                snapsAligned: d
                            }
                        }(V, K, R, z, X),
                        et = -f(Z) + f(W),
                        {
                            snapsContained: en,
                            scrollContainLimit: er
                        } = function(e, t, n, r, i) {
                            let a = b(-t + e, 0),
                                o = n.map((e, t) => {
                                    let {
                                        min: r,
                                        max: i
                                    } = a, o = a.constrain(e), u = t === p(n);
                                    return t ? u || function(e, t) {
                                        return 1 >= c(e - t)
                                    }(r, o) ? r : function(e, t) {
                                        return 1 >= c(e - t)
                                    }(i, o) ? i : o : i
                                }).map(e => parseFloat(e.toFixed(3))),
                                u = function() {
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
                                    } = u;
                                    return o.slice(n, i)
                                }(),
                                scrollContainLimit: u
                            }
                        }($, et, ee, P, 0),
                        ei = Y ? en : ee,
                        {
                            limit: ea
                        } = function(e, t, n) {
                            let r = t[0];
                            return {
                                limit: b(n ? r - e : f(t), r)
                            }
                        }(et, ei, E),
                        eo = function e(t, n, r) {
                            let {
                                constrain: i
                            } = b(0, t), a = t + 1, o = u(n);

                            function u(e) {
                                return r ? c((a + e) % a) : i(e)
                            }

                            function l() {
                                return e(t, o, r)
                            }
                            let s = {
                                get: function() {
                                    return o
                                },
                                set: function(e) {
                                    return o = u(e), s
                                },
                                add: function(e) {
                                    return l().set(o + e)
                                },
                                clone: l
                            };
                            return s
                        }(p(ei), A, E),
                        eu = eo.clone(),
                        el = d(n),
                        ec = function(e, t, n, r) {
                            let i = x(),
                                a = 1e3 / 60,
                                o = null,
                                u = 0,
                                l = 0;

                            function c(e) {
                                if (!l) return;
                                o || (o = e, n(), n());
                                let i = e - o;
                                for (o = e, u += i; u >= a;) n(), u -= a;
                                r(u / a), l && (l = t.requestAnimationFrame(c))
                            }

                            function s() {
                                t.cancelAnimationFrame(l), o = null, u = 0, l = 0
                            }
                            return {
                                init: function() {
                                    i.add(e, "visibilitychange", () => {
                                        e.hidden && (o = null, u = 0)
                                    })
                                },
                                destroy: function() {
                                    s(), i.clear()
                                },
                                start: function() {
                                    l || (l = t.requestAnimationFrame(c))
                                },
                                stop: s,
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
                            dragHandler: u,
                            animation: l,
                            eventHandler: c,
                            scrollBounds: s,
                            options: {
                                loop: d
                            }
                        }, f) => {
                            let p = e.settled(),
                                m = !s.shouldConstrain(),
                                g = d ? p : p && m,
                                h = g && !u.pointerDown();
                            h && l.stop();
                            let x = n.get() * f + i.get() * (1 - f);
                            r.set(x), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), h && c.emit("settle"), g || c.emit("scroll")
                        })(eN, e)),
                        es = ei[eo.get()],
                        ed = y(es),
                        ef = y(es),
                        ep = y(es),
                        em = y(es),
                        eg = function(e, t, n, r, i, a) {
                            let o = 0,
                                u = 0,
                                l = i,
                                d = .68,
                                f = e.get(),
                                p = 0;

                            function m(e) {
                                return l = e, h
                            }

                            function g(e) {
                                return d = e, h
                            }
                            let h = {
                                direction: function() {
                                    return u
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
                                    return l ? (n.set(e), o += t / l, o *= d, f += o, e.add(o), i = f - p) : (o = 0, n.set(r), e.set(r), i = t), u = s(i), p = f, h
                                },
                                settled: function() {
                                    return .001 > c(r.get() - t.get())
                                },
                                useBaseFriction: function() {
                                    return g(.68)
                                },
                                useBaseDuration: function() {
                                    return m(i)
                                },
                                useFriction: g,
                                useDuration: m
                            };
                            return h
                        }(ed, ep, ef, em, O, .68),
                        eh = function(e, t, n, r, i) {
                            let {
                                reachedAny: a,
                                removeOffset: o,
                                constrain: u
                            } = r;

                            function l(e) {
                                return e.concat().sort((e, t) => c(e) - c(t))[0]
                            }

                            function d(t, r) {
                                let i = [t, t + n, t - n];
                                if (!e) return t;
                                if (!r) return l(i);
                                let a = i.filter(e => s(e) === r);
                                return a.length ? l(a) : f(i) - n
                            }
                            return {
                                byDistance: function(n, r) {
                                    let l = i.get() + n,
                                        {
                                            index: s,
                                            distance: f
                                        } = function(n) {
                                            let r = e ? o(n) : u(n),
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
                                        p = !e && a(l);
                                    if (!r || p) return {
                                        index: s,
                                        distance: n
                                    };
                                    let m = n + d(t[s] - f, 0);
                                    return {
                                        index: s,
                                        distance: m
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
                        }(E, ei, et, ea, em),
                        ex = function(e, t, n, r, i, a, o) {
                            function u(i) {
                                let u = i.distance,
                                    l = i.index !== t.get();
                                a.add(u), u && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (n.set(t.get()), t.set(i.index), o.emit("select"))
                            }
                            return {
                                distance: function(e, t) {
                                    u(i.byDistance(e, t))
                                },
                                index: function(e, n) {
                                    let r = t.clone().set(e);
                                    u(i.byIndex(r.get(), n))
                                }
                            }
                        }(ec, eo, eu, eg, eh, em, w),
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
                        ey = x(),
                        ev = function(e, t, n, r) {
                            let i, a = {},
                                o = null,
                                u = null,
                                l = !1;
                            return {
                                init: function() {
                                    i = new IntersectionObserver(e => {
                                        l || (e.forEach(e => {
                                            a[t.indexOf(e.target)] = e
                                        }), o = null, u = null, n.emit("slidesInView"))
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
                                    if (!e && u) return u;
                                    let t = g(a).reduce((t, n) => {
                                        let r = parseInt(n),
                                            {
                                                isIntersecting: i
                                            } = a[r];
                                        return (e && i || !e && !i) && t.push(r), t
                                    }, []);
                                    return e && (o = t), e || (u = t), t
                                }
                            }
                        }(t, n, w, I),
                        {
                            slideRegistry: ew
                        } = function(e, t, n, r, i, a) {
                            let {
                                groupSlides: o
                            } = i, {
                                min: u,
                                max: l
                            } = r;
                            return {
                                slideRegistry: function() {
                                    let r = o(a);
                                    return 1 === n.length ? [a] : e && "keepSnaps" !== t ? r.slice(u, l).map((e, t, n) => {
                                        let r = t === p(n);
                                        return t ? r ? m(p(a) - f(n)[0] + 1, f(n)[0]) : e : m(f(n[0]) + 1)
                                    }) : r
                                }()
                            }
                        }(Y, P, ei, er, X, el),
                        ej = function(e, t, n, r, i, o, l, c) {
                            let s = {
                                    passive: !0,
                                    capture: !0
                                },
                                d = 0;

                            function f(e) {
                                "Tab" === e.code && (d = new Date().getTime())
                            }
                            return {
                                init: function(p) {
                                    c && (o.add(document, "keydown", f, !1), t.forEach((t, f) => {
                                        o.add(t, "focus", t => {
                                            (u(c) || c(p, t)) && function(t) {
                                                if (new Date().getTime() - d > 10) return;
                                                l.emit("slideFocusStart"), e.scrollLeft = 0;
                                                let o = n.findIndex(e => e.includes(t));
                                                a(o) && (i.useDuration(0), r.index(o, 0), l.emit("slideFocus"))
                                            }(f)
                                        }, s)
                                    }))
                                }
                            }
                        }(e, n, ew, ex, eg, ey, w, B),
                        eN = {
                            ownerDocument: r,
                            ownerWindow: i,
                            eventHandler: w,
                            containerRect: R,
                            slideRects: z,
                            animation: ec,
                            axis: V,
                            dragHandler: function(e, t, n, r, i, a, o, l, d, f, p, m, g, y, v, w, j, N, k) {
                                let {
                                    cross: S,
                                    direction: _
                                } = e, A = ["INPUT", "SELECT", "TEXTAREA"], E = {
                                    passive: !1
                                }, O = x(), L = x(), D = b(50, 225).constrain(y.measure(20)), I = {
                                    mouse: 300,
                                    touch: 400
                                }, H = {
                                    mouse: 500,
                                    touch: 600
                                }, M = v ? 43 : 25, P = !1, C = 0, F = 0, T = !1, B = !1, U = !1, R = !1;

                                function z(e) {
                                    if (!h(e, r) && e.touches.length >= 2) return V(e);
                                    let t = a.readPoint(e),
                                        n = a.readPoint(e, S),
                                        o = c(t - C),
                                        u = c(n - F);
                                    if (!B && !R && (!e.cancelable || !(B = o > u))) return V(e);
                                    let s = a.pointerMove(e);
                                    o > w && (U = !0), f.useFriction(.3).useDuration(.75), l.start(), i.add(_(s)), e.preventDefault()
                                }

                                function V(e) {
                                    let t = p.byDistance(0, !1).index !== m.get(),
                                        n = a.pointerUp(e) * (v ? H : I)[R ? "mouse" : "touch"],
                                        r = function(e, t) {
                                            let n = m.add(-1 * s(e)),
                                                r = p.byDistance(e, !v).distance;
                                            return v || c(e) < D ? r : j && t ? .5 * r : p.byIndex(n.get(), 0).distance
                                        }(_(n), t),
                                        i = function(e, t) {
                                            var n, r;
                                            if (0 === e || 0 === t || c(e) <= c(t)) return 0;
                                            let i = (n = c(e), r = c(t), c(n - r));
                                            return c(i / e)
                                        }(n, r);
                                    B = !1, T = !1, L.clear(), f.useDuration(M - 10 * i).useFriction(.68 + i / 50), d.distance(r, !v), R = !1, g.emit("pointerUp")
                                }

                                function $(e) {
                                    U && (e.stopPropagation(), e.preventDefault(), U = !1)
                                }
                                return {
                                    init: function(e) {
                                        k && O.add(t, "dragstart", e => e.preventDefault(), E).add(t, "touchmove", () => void 0, E).add(t, "touchend", () => void 0).add(t, "touchstart", l).add(t, "mousedown", l).add(t, "touchcancel", V).add(t, "contextmenu", V).add(t, "click", $, !0);

                                        function l(l) {
                                            (u(k) || k(e, l)) && function(e) {
                                                let u = h(e, r);
                                                if ((R = u, U = v && u && !e.buttons && P, P = c(i.get() - o.get()) >= 2, !u || 0 === e.button) && ! function(e) {
                                                        let t = e.nodeName || "";
                                                        return A.includes(t)
                                                    }(e.target)) {
                                                    T = !0, a.pointerDown(e), f.useFriction(0).useDuration(0), i.set(o);
                                                    let r = R ? n : t;
                                                    L.add(r, "touchmove", z, E).add(r, "touchend", V).add(r, "mousemove", z, E).add(r, "mouseup", V), C = a.readPoint(e), F = a.readPoint(e, S), g.emit("pointerDown")
                                                }
                                            }(l)
                                        }
                                    },
                                    destroy: function() {
                                        O.clear(), L.clear()
                                    },
                                    pointerDown: function() {
                                        return T
                                    }
                                }
                            }(V, e, r, i, em, function(e, t) {
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
                                            u = i(e) - i(r) > 170,
                                            l = t / o;
                                        return o && !u && c(l) > .1 ? l : 0
                                    },
                                    readPoint: a
                                }
                            }(V, i), ed, ec, ex, eg, eh, eo, w, q, L, D, M, 0, T),
                            eventStore: ey,
                            percentOfView: q,
                            index: eo,
                            indexPrevious: eu,
                            limit: ea,
                            location: ed,
                            offsetLocation: ep,
                            previousLocation: ef,
                            options: l,
                            resizeHandler: function(e, t, n, r, i, a, o) {
                                let l, s, d = [e].concat(r),
                                    f = [],
                                    p = !1;

                                function m(e) {
                                    return i.measureSize(o.measure(e))
                                }
                                return {
                                    init: function(i) {
                                        a && (s = m(e), f = r.map(m), l = new ResizeObserver(n => {
                                            (u(a) || a(i, n)) && function(n) {
                                                for (let a of n) {
                                                    if (p) return;
                                                    let n = a.target === e,
                                                        o = r.indexOf(a.target),
                                                        u = n ? s : f[o];
                                                    if (c(m(n ? e : r[o]) - u) >= .5) {
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
                                        p = !0, l && l.disconnect()
                                    }
                                }
                            }(t, w, i, n, V, C, U),
                            scrollBody: eg,
                            scrollBounds: function(e, t, n, r, i) {
                                let a = i.measure(10),
                                    o = i.measure(50),
                                    u = b(.1, .99),
                                    l = !1;

                                function s() {
                                    return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
                                }
                                return {
                                    shouldConstrain: s,
                                    constrain: function(i) {
                                        if (!s()) return;
                                        let l = e.reachedMin(t.get()) ? "min" : "max",
                                            d = c(e[l] - t.get()),
                                            f = n.get() - t.get(),
                                            p = u.constrain(d / o);
                                        n.subtract(f * p), !i && c(f) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(e) {
                                        l = !e
                                    }
                                }
                            }(ea, ep, em, eg, q),
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
                            }(et, ea, ep, [ed, ep, ef, em]),
                            scrollProgress: eb,
                            scrollSnapList: ei.map(eb.get),
                            scrollSnaps: ei,
                            scrollTarget: eh,
                            scrollTo: ex,
                            slideLooper: function(e, t, n, r, i, a, o, u, l) {
                                let c = d(i),
                                    s = d(i).reverse(),
                                    f = g(m(s, o[0]), n, !1).concat(g(m(c, t - o[0] - 1), -n, !0));

                                function p(e, t) {
                                    return e.reduce((e, t) => e - i[t], t)
                                }

                                function m(e, t) {
                                    return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, [])
                                }

                                function g(i, o, c) {
                                    let s = a.map((e, n) => ({
                                        start: e - r[n] + .5 + o,
                                        end: e + t - .5 + o
                                    }));
                                    return i.map(t => {
                                        let r = c ? 0 : -n,
                                            i = c ? n : 0,
                                            a = s[t][c ? "end" : "start"];
                                        return {
                                            index: t,
                                            loopPoint: a,
                                            slideLocation: y(-1),
                                            translate: v(e, l[t]),
                                            target: () => u.get() > a ? r : i
                                        }
                                    })
                                }
                                return {
                                    canLoop: function() {
                                        return f.every(({
                                            index: e
                                        }) => .1 >= p(c.filter(t => t !== e), t))
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
                            }(V, $, et, G, W, Z, ei, ep, n),
                            slideFocus: ej,
                            slidesHandler: (N = !1, {
                                init: function(e) {
                                    F && (j = new MutationObserver(t => {
                                        !N && (u(F) || F(e, t)) && function(t) {
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
                            slidesInView: ev,
                            slideIndexes: el,
                            slideRegistry: ew,
                            slidesToScroll: X,
                            target: em,
                            translate: v(V, t)
                        };
                    return eN
                }(e, N, k, _, A, n, D);
                return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                    loop: !1
                })) : r
            }(U), M([B, ...R.map(({
                options: e
            }) => e)]).forEach(e => L.add(e, "change", V)), U.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(Y), r.eventHandler.init(Y), r.resizeHandler.init(Y), r.slidesHandler.init(Y), r.options.loop && r.slideLooper.loop(), N.offsetParent && k.length && r.dragHandler.init(Y), i = O.init(Y, R))
        }

        function V(e, t) {
            let n = K();
            $(), z(I({
                startIndex: n
            }, e), t), D.emit("reInit")
        }

        function $() {
            r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), O.destroy(), L.clear()
        }

        function q(e, t, n) {
            U.active && !T && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : U.duration), r.scrollTo.index(e, n || 0))
        }

        function K() {
            return r.index.get()
        }
        let Y = {
            canScrollNext: function() {
                return r.index.add(1).get() !== K()
            },
            canScrollPrev: function() {
                return r.index.add(-1).get() !== K()
            },
            containerNode: function() {
                return N
            },
            internalEngine: function() {
                return r
            },
            destroy: function() {
                T || (T = !0, L.clear(), $(), D.emit("destroy"), D.clear())
            },
            off: C,
            on: P,
            emit: F,
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
                q(r.index.add(1).get(), e, -1)
            },
            scrollPrev: function(e) {
                q(r.index.add(-1).get(), e, 1)
            },
            scrollProgress: function() {
                return r.scrollProgress.get(r.offsetLocation.get())
            },
            scrollSnapList: function() {
                return r.scrollSnapList
            },
            scrollTo: q,
            selectedScrollSnap: K,
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
        return z(t, n), setTimeout(() => D.emit("init"), 0), Y
    }

    function N(e = {}, n = []) {
        let a = (0, t.useRef)(e),
            o = (0, t.useRef)(n),
            [u, l] = (0, t.useState)(),
            [c, s] = (0, t.useState)(),
            d = (0, t.useCallback)(() => {
                u && u.reInit(a.current, o.current)
            }, [u]);
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
        }, [c, l]), [s, u]
    }
    j.globalOptions = void 0, N.globalOptions = void 0
}, 55275, e => {
    "use strict";
    e.s(["default", () => l]);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(22016),
        i = e.i(57688),
        a = e.i(73375),
        o = e.i(63059),
        u = e.i(30013);

    function l() {
        let [e, r] = (0, n.useState)("all"), [i, l] = (0, n.useState)([]), [s, d] = (0, n.useState)([]), [f, p] = (0, n.useState)(!1), m = (0, n.useRef)(null), g = (0, n.useRef)(null), [h, x] = (0, u.default)({
            loop: !1,
            align: "start"
        });
        (0, n.useEffect)(() => {
            if (!x) return;
            let e = m.current,
                t = g.current;
            e && (e.onclick = () => x.scrollPrev()), t && (t.onclick = () => x.scrollNext())
        }, [x]), (0, n.useEffect)(() => {
            l([{
                id: 1,
                name: "India"
            }, {
                id: 2,
                name: "USA"
            }, {
                id: 3,
                name: "Australia"
            }, {
                id: 4,
                name: "Canada"
            }, {
                id: 5,
                name: "UK"
            }, {
                id: 6,
                name: "UAE"
            }])
        }, []), (0, n.useEffect)(() => {
            b()
        }, [e]);
        let b = async () => {
            p(!0);
            try {
                let t = [{
                    id: 1,
                    title: {
                        rendered: "Australia"
                    },
                    excerpt: {
                        rendered: "Built a machine learning pipeline..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/australia.webp",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/australia.webp",
                    categories: [3],
                    link: "https://maps.app.goo.gl/eSaykknKGyV6T3UZA",
                    acf: {
                        category_name: "AUS"
                    },
                    Heading: "Sydney",
                    Address: "38-52 Waterloo St, Surry Hills NSW 2010, Australia",
                    phonenumber: "+61 488 841 730"
                }, {
                    id: 2,
                    title: {
                        rendered: "Hyderabad"
                    },
                    excerpt: {
                        rendered: "Built an adaptive learning platform..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/heydrabad.webp",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/heydrabad.webp",
                    categories: [1],
                    link: "https://maps.app.goo.gl/dtPoDCcof7iG8NB67",
                    acf: {
                        category_name: "India"
                    },
                    Heading: "Nadcab Labs",
                    Address: "3rd Floor, Oyster Complex Greenlands Road Somajiguda, Begumpet, Hyderabad, Telangana 500016",
                    phonenumber: "88404 90443"
                }, {
                    id: 5,
                    title: {
                        rendered: "Noida"
                    },
                    excerpt: {
                        rendered: "Built an adaptive learning platform..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/new-delhi.webp",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/new-delhi.webp",
                    categories: [1],
                    link: "https://maps.app.goo.gl/JrsgFjYMHtWeFrCz8",
                    acf: {
                        category_name: "India"
                    },
                    Heading: "Nadcab Labs",
                    Address: "A24, A Block, Sector 16, Noida, Uttar Pradesh 201301",
                    phonenumber: "80810 59613"
                }, {
                    id: 3,
                    title: {
                        rendered: "UK"
                    },
                    excerpt: {
                        rendered: "We helped a retail brand boost online conversions..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/uk.webp",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/uk.webp",
                    categories: [5],
                    link: "https://maps.app.goo.gl/459anSuNufgd7sfF9",
                    acf: {
                        category_name: "UK"
                    },
                    Heading: "London",
                    Address: "23 New Drum St, London E1 7AY, United Kingdom",
                    phonenumber: "+44 7453379563"
                }, {
                    id: 4,
                    title: {
                        rendered: "USA"
                    },
                    excerpt: {
                        rendered: "Developed a HIPAA-compliant patient system..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/usa.webp",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/usa.webp",
                    categories: [2],
                    link: "https://maps.app.goo.gl/2GX5hYA5ZnQC6FKu9",
                    acf: {
                        category_name: "USA"
                    },
                    Heading: " New York",
                    Address: "740 E 13th St, New York, NY 10009, United States",
                    phonenumber: "+1 646-665-9735"
                }, {
                    id: 6,
                    title: {
                        rendered: "Prayagraj"
                    },
                    excerpt: {
                        rendered: "Built an adaptive learning platform..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/prayagraj.png",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/prayagraj.png",
                    categories: [1],
                    link: "https://maps.app.goo.gl/BqyqzyQjNW3y8BBT9",
                    acf: {
                        category_name: "India"
                    },
                    Heading: "Nadcab Labs",
                    Address: "Pratapgarh Rd, Barrister Mullah Colony, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
                    phonenumber: "79852 02681"
                }, {
                    id: 7,
                    title: {
                        rendered: "UAE"
                    },
                    excerpt: {
                        rendered: "Built an adaptive learning platform..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/uae.webp",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/uae.webp",
                    categories: [6],
                    link: "#",
                    acf: {
                        category_name: "UAE"
                    },
                    Heading: "",
                    Address: "",
                    phonenumber: ""
                }, {
                    id: 8,
                    title: {
                        rendered: "Canada"
                    },
                    excerpt: {
                        rendered: "Built an adaptive learning platform..."
                    },
                    featured_media_url: "https://img.nadcab.com/wp-content/uploads/2025/11/canada.webp",
                    hover_image_url: "https://img.nadcab.com/wp-content/uploads/2025/11/canada.webp",
                    categories: [4],
                    link: "#",
                    acf: {
                        category_name: "Canada"
                    },
                    Heading: "",
                    Address: "",
                    phonenumber: ""
                }];
                if ("all" === e) {
                    let e = Object.values(t.reduce((e, t) => {
                        let n = t.categories[0];
                        return e[n] || (e[n] = t), e
                    }, {}));
                    d(e)
                } else d(t.filter(t => t.categories.includes(e)))
            } catch {
                d([])
            } finally {
                p(!1)
            }
        };
        return (0, t.jsxs)("div", {
            className: "container w-full py-12 lg:py-16 sm:py-18 mx-auto lg:px-4",
            children: [(0, t.jsx)("h2", {
                className: "text-white text-3xl lg:text-4xl text-center lg:text-start",
                children: "Our Global Presence"
            }), (0, t.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 items-center mt-5 px-4 lg:px-0",
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-wrap lg:gap-2 sm:gap-1 sm:mb-2",
                    children: [(0, t.jsx)("h3", {
                        onClick: () => r("all"),
                        className: `py-2 px-6 text-sm rounded-xl transition-colors duration-200 m-2 ${"all"===e?"bg-blue-800 text-white":"text-white hover:bg-white hover:text-black"}`,
                        children: "All"
                    }), i.map(n => (0, t.jsx)("h3", {
                        onClick: () => r(n.id),
                        className: `py-2 px-6 text-sm  border border-gray-700 m-2 rounded-xl transition-colors duration-200 cursor-pointer ${e===n.id?"bg-white text-black":"text-white hover:bg-blue-800 hover:border-blue-800 hover:text-white"}`,
                        children: n.name
                    }, n.id))]
                }), (0, t.jsxs)("div", {
                    className: "flex justify-end items-center gap-3",
                    children: [(0, t.jsx)("button", {
                        ref: m,
                        className: "w-10 h-10 bg-gray-100 hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center transition-colors shadow-md",
                        "aria-label": "prev",
                        children: (0, t.jsx)(a.ChevronLeft, {
                            className: "w-5 h-5"
                        })
                    }), (0, t.jsx)("button", {
                        ref: g,
                        className: "w-10 h-10 bg-gray-100 hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center transition-colors shadow-md",
                        "aria-label": "next",
                        children: (0, t.jsx)(o.ChevronRight, {
                            className: "w-5 h-5"
                        })
                    })]
                })]
            }), f ? (0, t.jsx)("div", {
                className: "text-center py-10 text-gray-500",
                children: "Loading..."
            }) : (0, t.jsx)("div", {
                className: "relative mt-10 overflow-hidden",
                ref: h,
                children: (0, t.jsx)("div", {
                    className: "flex lg:gap-1 sm:gap-2 md:gap-3",
                    children: s.map(e => (0, t.jsx)("div", {
                        className: "flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_25%] xl:flex-[0_0_25%]",
                        children: (0, t.jsx)(c, {
                            study: e
                        })
                    }, e.id))
                })
            })]
        })
    }
    let c = ({
        study: e
    }) => {
        let [a, o] = (0, n.useState)(!1);
        return (0, t.jsx)(r.default, {
            href: e.link,
            className: "block",
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: (0, t.jsxs)("div", {
                className: "relative w-[300px] h-[300px] lg:w-[355px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 mx-auto",
                children: [(0, t.jsxs)("div", {
                    className: "relative w-full h-full overflow-hidden",
                    children: [(0, t.jsx)(i.default, {
                        src: e.featured_media_url || "/placeholder.jpg",
                        alt: e.title.rendered,
                        width: 355,
                        height: 400,
                        className: "object-cover w-full h-full transition-transform duration-300",
                        style: {
                            transform: a ? "scale(1.05)" : "scale(1)"
                        },
                        loading: "lazy"
                    }), (0, t.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    }), (0, t.jsx)("div", {
                        className: "absolute bottom-6 left-6",
                        children: (0, t.jsx)("h3", {
                            className: "text-2xl font-medium text-white drop-shadow-2xl",
                            children: e.title.rendered
                        })
                    })]
                }), (0, t.jsx)("div", {
                    className: `absolute inset-0 bg-blue-600 transition-all duration-500 ease-in-out ${a?"translate-x-0 opacity-100":"translate-x-full opacity-0"}`,
                    children: (0, t.jsx)("div", {
                        className: "flex flex-col justify-between p-10 h-full relative",
                        children: (0, t.jsxs)("div", {
                            className: "space-y-4 mt-auto relative",
                            children: [e.acf ? .category_name && (0, t.jsx)("p", {
                                className: "text-base text-white font-semibold uppercase tracking-wide",
                                children: e.acf.category_name
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h4", {
                                    className: " text-xl lg:text-3xl font-bold text-white tracking-tight",
                                    children: e.Heading
                                }), (0, t.jsx)("p", {
                                    className: "text-sm font-medium text-white tracking-tight",
                                    children: e.Address
                                }), (0, t.jsx)("p", {
                                    className: "text-sm font-medium text-white tracking-tight",
                                    children: e.phonenumber
                                })]
                            })]
                        })
                    })
                })]
            })
        })
    }
}, 95499, e => {
    e.n(e.i(55275))
}]);