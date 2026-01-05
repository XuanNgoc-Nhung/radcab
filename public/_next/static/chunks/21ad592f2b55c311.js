(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 46349, e => {
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
                s = t[i];
            return "function" == typeof a ? `${a}` == `${s}` : n(a) && n(s) ? r(a, s) : a === s
        })
    }

    function i(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
    }

    function a(e) {
        return "number" == typeof e
    }

    function s(e) {
        return "string" == typeof e
    }

    function o(e) {
        return "boolean" == typeof e
    }

    function l(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        return Math.abs(e)
    }

    function d(e) {
        return Math.sign(e)
    }

    function u(e) {
        return x(e).map(Number)
    }

    function m(e) {
        return e[f(e)]
    }

    function f(e) {
        return Math.max(0, e.length - 1)
    }

    function p(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n)
    }

    function x(e) {
        return Object.keys(e)
    }

    function g(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
    }

    function h() {
        let e = [],
            t = {
                add: function(n, r, i, a = {
                    passive: !0
                }) {
                    let s;
                    return "addEventListener" in n ? (n.addEventListener(r, i, a), s = () => n.removeEventListener(r, i, a)) : (n.addListener(i), s = () => n.removeListener(i)), e.push(s), t
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
                let s = Math.round(100 * e.direction(t)) / 100;
                s !== i && (r.transform = n(s), i = s)
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
        let r, i, N, k, S, I = e.ownerDocument,
            L = I.defaultView,
            M = function(e) {
                function t(e, t) {
                    return function e(t, n) {
                        return [t, n].reduce((t, n) => (x(n).forEach(r => {
                            let i = t[r],
                                a = n[r],
                                s = l(i) && l(a);
                            t[r] = s ? e(i, a) : a
                        }), t), {})
                    }(e, t || {})
                }
                return {
                    mergeOptions: t,
                    optionsAtMedia: function(n) {
                        let r = n.breakpoints || {},
                            i = x(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
                        return t(n, i)
                    },
                    optionsMediaQueries: function(t) {
                        return t.map(e => x(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                    }
                }
            }(L),
            C = (S = [], {
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
            E = h(),
            q = function() {
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
                mergeOptions: O,
                optionsAtMedia: P,
                optionsMediaQueries: D
            } = M,
            {
                on: T,
                off: A,
                emit: z
            } = q,
            F = !1,
            H = O(w, j.globalOptions),
            R = O(H),
            V = [];

        function B(t, n) {
            if (F) return;
            R = P(H = O(H, t)), V = n || V;
            let {
                container: l,
                slides: w
            } = R;
            N = (s(l) ? e.querySelector(l) : l) || e.children[0];
            let j = s(w) ? N.querySelectorAll(w) : w;
            k = [].slice.call(j || N.children), r = function t(n) {
                let r = function(e, t, n, r, i, l, w) {
                    let j, N, {
                            align: k,
                            axis: S,
                            direction: I,
                            startIndex: L,
                            loop: M,
                            duration: C,
                            dragFree: E,
                            dragThreshold: q,
                            inViewThreshold: O,
                            slidesToScroll: P,
                            skipSnaps: D,
                            containScroll: T,
                            watchResize: A,
                            watchSlides: z,
                            watchDrag: F,
                            watchFocus: H
                        } = l,
                        R = {
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
                        V = R.measure(t),
                        B = n.map(R.measure),
                        W = function(e, t) {
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
                        }(S, I),
                        $ = W.measureSize(V),
                        U = {
                            measure: function(e) {
                                return e / 100 * $
                            }
                        },
                        J = function(e, t) {
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
                                    return s(e) ? n[e](r) : e(t, r, i)
                                }
                            }
                        }(k, $),
                        K = !M && !!T,
                        {
                            slideSizes: Q,
                            slideSizesWithGaps: X,
                            startGap: _,
                            endGap: Y
                        } = function(e, t, n, r, i, a) {
                            let {
                                measureSize: s,
                                startEdge: o,
                                endEdge: l
                            } = e, d = n[0] && i, u = function() {
                                if (!d) return 0;
                                let e = n[0];
                                return c(t[o] - e[o])
                            }(), p = d ? parseFloat(a.getComputedStyle(m(r)).getPropertyValue(`margin-${l}`)) : 0, x = n.map(s), g = n.map((e, t, n) => {
                                let r = t === f(n);
                                return t ? r ? x[t] + p : n[t + 1][o] - e[o] : x[t] + u
                            }).map(c);
                            return {
                                slideSizes: x,
                                slideSizesWithGaps: g,
                                startGap: u,
                                endGap: p
                            }
                        }(W, V, B, n, M || !!T, i),
                        G = function(e, t, n, r, i, s, o, l, d) {
                            let {
                                startEdge: p,
                                endEdge: x,
                                direction: g
                            } = e, h = a(n);
                            return {
                                groupSlides: function(e) {
                                    return h ? u(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? u(e).reduce((n, a, d) => {
                                        let u = m(n) || 0,
                                            h = a === f(e),
                                            b = i[p] - s[u][p],
                                            v = i[p] - s[a][x],
                                            y = r || 0 !== u ? 0 : g(o),
                                            w = c(v - (!r && h ? g(l) : 0) - (b + y));
                                        return d && w > t + 2 && n.push(a), h && n.push(e.length), n
                                    }, []).map((t, n, r) => {
                                        let i = Math.max(r[n - 1] || 0);
                                        return e.slice(i, t)
                                    }) : []
                                }
                            }
                        }(W, $, P, M, V, B, _, Y, 0),
                        {
                            snaps: Z,
                            snapsAligned: ee
                        } = function(e, t, n, r, i) {
                            let {
                                startEdge: a,
                                endEdge: s
                            } = e, {
                                groupSlides: o
                            } = i, l = o(r).map(e => m(e)[s] - e[0][a]).map(c).map(t.measure), d = r.map(e => n[a] - e[a]).map(e => -c(e)), u = o(d).map(e => e[0]).map((e, t) => e + l[t]);
                            return {
                                snaps: d,
                                snapsAligned: u
                            }
                        }(W, J, V, B, G),
                        et = -m(Z) + m(X),
                        {
                            snapsContained: en,
                            scrollContainLimit: er
                        } = function(e, t, n, r, i) {
                            let a = b(-t + e, 0),
                                s = n.map((e, t) => {
                                    let {
                                        min: r,
                                        max: i
                                    } = a, s = a.constrain(e), o = t === f(n);
                                    return t ? o || function(e, t) {
                                        return 1 >= c(e - t)
                                    }(r, s) ? r : function(e, t) {
                                        return 1 >= c(e - t)
                                    }(i, s) ? i : s : i
                                }).map(e => parseFloat(e.toFixed(3))),
                                o = function() {
                                    let e = s[0],
                                        t = m(s);
                                    return b(s.lastIndexOf(e), s.indexOf(t) + 1)
                                }();
                            return {
                                snapsContained: function() {
                                    if (t <= e + 2) return [a.max];
                                    if ("keepSnaps" === r) return s;
                                    let {
                                        min: n,
                                        max: i
                                    } = o;
                                    return s.slice(n, i)
                                }(),
                                scrollContainLimit: o
                            }
                        }($, et, ee, T, 0),
                        ei = K ? en : ee,
                        {
                            limit: ea
                        } = function(e, t, n) {
                            let r = t[0];
                            return {
                                limit: b(n ? r - e : m(t), r)
                            }
                        }(et, ei, M),
                        es = function e(t, n, r) {
                            let {
                                constrain: i
                            } = b(0, t), a = t + 1, s = o(n);

                            function o(e) {
                                return r ? c((a + e) % a) : i(e)
                            }

                            function l() {
                                return e(t, s, r)
                            }
                            let d = {
                                get: function() {
                                    return s
                                },
                                set: function(e) {
                                    return s = o(e), d
                                },
                                add: function(e) {
                                    return l().set(s + e)
                                },
                                clone: l
                            };
                            return d
                        }(f(ei), L, M),
                        eo = es.clone(),
                        el = u(n),
                        ec = function(e, t, n, r) {
                            let i = h(),
                                a = 1e3 / 60,
                                s = null,
                                o = 0,
                                l = 0;

                            function c(e) {
                                if (!l) return;
                                s || (s = e, n(), n());
                                let i = e - s;
                                for (s = e, o += i; o >= a;) n(), o -= a;
                                r(o / a), l && (l = t.requestAnimationFrame(c))
                            }

                            function d() {
                                t.cancelAnimationFrame(l), s = null, o = 0, l = 0
                            }
                            return {
                                init: function() {
                                    i.add(e, "visibilitychange", () => {
                                        e.hidden && (s = null, o = 0)
                                    })
                                },
                                destroy: function() {
                                    d(), i.clear()
                                },
                                start: function() {
                                    l || (l = t.requestAnimationFrame(c))
                                },
                                stop: d,
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
                            slideLooper: s,
                            dragHandler: o,
                            animation: l,
                            eventHandler: c,
                            scrollBounds: d,
                            options: {
                                loop: u
                            }
                        }, m) => {
                            let f = e.settled(),
                                p = !d.shouldConstrain(),
                                x = u ? f : f && p,
                                g = x && !o.pointerDown();
                            g && l.stop();
                            let h = n.get() * m + i.get() * (1 - m);
                            r.set(h), u && (a.loop(e.direction()), s.loop()), t.to(r.get()), g && c.emit("settle"), x || c.emit("scroll")
                        })(eN, e)),
                        ed = ei[es.get()],
                        eu = v(ed),
                        em = v(ed),
                        ef = v(ed),
                        ep = v(ed),
                        ex = function(e, t, n, r, i, a) {
                            let s = 0,
                                o = 0,
                                l = i,
                                u = .68,
                                m = e.get(),
                                f = 0;

                            function p(e) {
                                return l = e, g
                            }

                            function x(e) {
                                return u = e, g
                            }
                            let g = {
                                direction: function() {
                                    return o
                                },
                                duration: function() {
                                    return l
                                },
                                velocity: function() {
                                    return s
                                },
                                seek: function() {
                                    let t = r.get() - e.get(),
                                        i = 0;
                                    return l ? (n.set(e), s += t / l, s *= u, m += s, e.add(s), i = m - f) : (s = 0, n.set(r), e.set(r), i = t), o = d(i), f = m, g
                                },
                                settled: function() {
                                    return .001 > c(r.get() - t.get())
                                },
                                useBaseFriction: function() {
                                    return x(.68)
                                },
                                useBaseDuration: function() {
                                    return p(i)
                                },
                                useFriction: x,
                                useDuration: p
                            };
                            return g
                        }(eu, ef, em, ep, C, .68),
                        eg = function(e, t, n, r, i) {
                            let {
                                reachedAny: a,
                                removeOffset: s,
                                constrain: o
                            } = r;

                            function l(e) {
                                return e.concat().sort((e, t) => c(e) - c(t))[0]
                            }

                            function u(t, r) {
                                let i = [t, t + n, t - n];
                                if (!e) return t;
                                if (!r) return l(i);
                                let a = i.filter(e => d(e) === r);
                                return a.length ? l(a) : m(i) - n
                            }
                            return {
                                byDistance: function(n, r) {
                                    let l = i.get() + n,
                                        {
                                            index: d,
                                            distance: m
                                        } = function(n) {
                                            let r = e ? s(n) : o(n),
                                                {
                                                    index: i
                                                } = t.map((e, t) => ({
                                                    diff: u(e - r, 0),
                                                    index: t
                                                })).sort((e, t) => c(e.diff) - c(t.diff))[0];
                                            return {
                                                index: i,
                                                distance: r
                                            }
                                        }(l),
                                        f = !e && a(l);
                                    if (!r || f) return {
                                        index: d,
                                        distance: n
                                    };
                                    let p = n + u(t[d] - m, 0);
                                    return {
                                        index: d,
                                        distance: p
                                    }
                                },
                                byIndex: function(e, n) {
                                    let r = u(t[e] - i.get(), n);
                                    return {
                                        index: e,
                                        distance: r
                                    }
                                },
                                shortcut: u
                            }
                        }(M, ei, et, ea, ep),
                        eh = function(e, t, n, r, i, a, s) {
                            function o(i) {
                                let o = i.distance,
                                    l = i.index !== t.get();
                                a.add(o), o && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (n.set(t.get()), t.set(i.index), s.emit("select"))
                            }
                            return {
                                distance: function(e, t) {
                                    o(i.byDistance(e, t))
                                },
                                index: function(e, n) {
                                    let r = t.clone().set(e);
                                    o(i.byIndex(r.get(), n))
                                }
                            }
                        }(ec, es, eo, ex, eg, ep, w),
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
                        ev = h(),
                        ey = function(e, t, n, r) {
                            let i, a = {},
                                s = null,
                                o = null,
                                l = !1;
                            return {
                                init: function() {
                                    i = new IntersectionObserver(e => {
                                        l || (e.forEach(e => {
                                            a[t.indexOf(e.target)] = e
                                        }), s = null, o = null, n.emit("slidesInView"))
                                    }, {
                                        root: e.parentElement,
                                        threshold: r
                                    }), t.forEach(e => i.observe(e))
                                },
                                destroy: function() {
                                    i && i.disconnect(), l = !0
                                },
                                get: function(e = !0) {
                                    if (e && s) return s;
                                    if (!e && o) return o;
                                    let t = x(a).reduce((t, n) => {
                                        let r = parseInt(n),
                                            {
                                                isIntersecting: i
                                            } = a[r];
                                        return (e && i || !e && !i) && t.push(r), t
                                    }, []);
                                    return e && (s = t), e || (o = t), t
                                }
                            }
                        }(t, n, w, O),
                        {
                            slideRegistry: ew
                        } = function(e, t, n, r, i, a) {
                            let {
                                groupSlides: s
                            } = i, {
                                min: o,
                                max: l
                            } = r;
                            return {
                                slideRegistry: function() {
                                    let r = s(a);
                                    return 1 === n.length ? [a] : e && "keepSnaps" !== t ? r.slice(o, l).map((e, t, n) => {
                                        let r = t === f(n);
                                        return t ? r ? p(f(a) - m(n)[0] + 1, m(n)[0]) : e : p(m(n[0]) + 1)
                                    }) : r
                                }()
                            }
                        }(K, T, ei, er, G, el),
                        ej = function(e, t, n, r, i, s, l, c) {
                            let d = {
                                    passive: !0,
                                    capture: !0
                                },
                                u = 0;

                            function m(e) {
                                "Tab" === e.code && (u = new Date().getTime())
                            }
                            return {
                                init: function(f) {
                                    c && (s.add(document, "keydown", m, !1), t.forEach((t, m) => {
                                        s.add(t, "focus", t => {
                                            (o(c) || c(f, t)) && function(t) {
                                                if (new Date().getTime() - u > 10) return;
                                                l.emit("slideFocusStart"), e.scrollLeft = 0;
                                                let s = n.findIndex(e => e.includes(t));
                                                a(s) && (i.useDuration(0), r.index(s, 0), l.emit("slideFocus"))
                                            }(m)
                                        }, d)
                                    }))
                                }
                            }
                        }(e, n, ew, eh, ex, ev, w, H),
                        eN = {
                            ownerDocument: r,
                            ownerWindow: i,
                            eventHandler: w,
                            containerRect: V,
                            slideRects: B,
                            animation: ec,
                            axis: W,
                            dragHandler: function(e, t, n, r, i, a, s, l, u, m, f, p, x, v, y, w, j, N, k) {
                                let {
                                    cross: S,
                                    direction: I
                                } = e, L = ["INPUT", "SELECT", "TEXTAREA"], M = {
                                    passive: !1
                                }, C = h(), E = h(), q = b(50, 225).constrain(v.measure(20)), O = {
                                    mouse: 300,
                                    touch: 400
                                }, P = {
                                    mouse: 500,
                                    touch: 600
                                }, D = y ? 43 : 25, T = !1, A = 0, z = 0, F = !1, H = !1, R = !1, V = !1;

                                function B(e) {
                                    if (!g(e, r) && e.touches.length >= 2) return W(e);
                                    let t = a.readPoint(e),
                                        n = a.readPoint(e, S),
                                        s = c(t - A),
                                        o = c(n - z);
                                    if (!H && !V && (!e.cancelable || !(H = s > o))) return W(e);
                                    let d = a.pointerMove(e);
                                    s > w && (R = !0), m.useFriction(.3).useDuration(.75), l.start(), i.add(I(d)), e.preventDefault()
                                }

                                function W(e) {
                                    let t = f.byDistance(0, !1).index !== p.get(),
                                        n = a.pointerUp(e) * (y ? P : O)[V ? "mouse" : "touch"],
                                        r = function(e, t) {
                                            let n = p.add(-1 * d(e)),
                                                r = f.byDistance(e, !y).distance;
                                            return y || c(e) < q ? r : j && t ? .5 * r : f.byIndex(n.get(), 0).distance
                                        }(I(n), t),
                                        i = function(e, t) {
                                            var n, r;
                                            if (0 === e || 0 === t || c(e) <= c(t)) return 0;
                                            let i = (n = c(e), r = c(t), c(n - r));
                                            return c(i / e)
                                        }(n, r);
                                    H = !1, F = !1, E.clear(), m.useDuration(D - 10 * i).useFriction(.68 + i / 50), u.distance(r, !y), V = !1, x.emit("pointerUp")
                                }

                                function $(e) {
                                    R && (e.stopPropagation(), e.preventDefault(), R = !1)
                                }
                                return {
                                    init: function(e) {
                                        k && C.add(t, "dragstart", e => e.preventDefault(), M).add(t, "touchmove", () => void 0, M).add(t, "touchend", () => void 0).add(t, "touchstart", l).add(t, "mousedown", l).add(t, "touchcancel", W).add(t, "contextmenu", W).add(t, "click", $, !0);

                                        function l(l) {
                                            (o(k) || k(e, l)) && function(e) {
                                                let o = g(e, r);
                                                if ((V = o, R = y && o && !e.buttons && T, T = c(i.get() - s.get()) >= 2, !o || 0 === e.button) && ! function(e) {
                                                        let t = e.nodeName || "";
                                                        return L.includes(t)
                                                    }(e.target)) {
                                                    F = !0, a.pointerDown(e), m.useFriction(0).useDuration(0), i.set(s);
                                                    let r = V ? n : t;
                                                    E.add(r, "touchmove", B, M).add(r, "touchend", W).add(r, "mousemove", B, M).add(r, "mouseup", W), A = a.readPoint(e), z = a.readPoint(e, S), x.emit("pointerDown")
                                                }
                                            }(l)
                                        }
                                    },
                                    destroy: function() {
                                        C.clear(), E.clear()
                                    },
                                    pointerDown: function() {
                                        return F
                                    }
                                }
                            }(W, e, r, i, ep, function(e, t) {
                                let n, r;

                                function i(e) {
                                    return e.timeStamp
                                }

                                function a(n, r) {
                                    let i = r || e.scroll,
                                        a = `client${"x"===i?"X":"Y"}`;
                                    return (g(n, t) ? n : n.touches[0])[a]
                                }
                                return {
                                    pointerDown: function(e) {
                                        return n = e, r = e, a(e)
                                    },
                                    pointerMove: function(e) {
                                        let t = a(e) - a(r),
                                            s = i(e) - i(n) > 170;
                                        return r = e, s && (n = e), t
                                    },
                                    pointerUp: function(e) {
                                        if (!n || !r) return 0;
                                        let t = a(r) - a(n),
                                            s = i(e) - i(n),
                                            o = i(e) - i(r) > 170,
                                            l = t / s;
                                        return s && !o && c(l) > .1 ? l : 0
                                    },
                                    readPoint: a
                                }
                            }(W, i), eu, ec, eh, ex, eg, es, w, U, E, q, D, 0, F),
                            eventStore: ev,
                            percentOfView: U,
                            index: es,
                            indexPrevious: eo,
                            limit: ea,
                            location: eu,
                            offsetLocation: ef,
                            previousLocation: em,
                            options: l,
                            resizeHandler: function(e, t, n, r, i, a, s) {
                                let l, d, u = [e].concat(r),
                                    m = [],
                                    f = !1;

                                function p(e) {
                                    return i.measureSize(s.measure(e))
                                }
                                return {
                                    init: function(i) {
                                        a && (d = p(e), m = r.map(p), l = new ResizeObserver(n => {
                                            (o(a) || a(i, n)) && function(n) {
                                                for (let a of n) {
                                                    if (f) return;
                                                    let n = a.target === e,
                                                        s = r.indexOf(a.target),
                                                        o = n ? d : m[s];
                                                    if (c(p(n ? e : r[s]) - o) >= .5) {
                                                        i.reInit(), t.emit("resize");
                                                        break
                                                    }
                                                }
                                            }(n)
                                        }), n.requestAnimationFrame(() => {
                                            u.forEach(e => l.observe(e))
                                        }))
                                    },
                                    destroy: function() {
                                        f = !0, l && l.disconnect()
                                    }
                                }
                            }(t, w, i, n, W, A, R),
                            scrollBody: ex,
                            scrollBounds: function(e, t, n, r, i) {
                                let a = i.measure(10),
                                    s = i.measure(50),
                                    o = b(.1, .99),
                                    l = !1;

                                function d() {
                                    return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
                                }
                                return {
                                    shouldConstrain: d,
                                    constrain: function(i) {
                                        if (!d()) return;
                                        let l = e.reachedMin(t.get()) ? "min" : "max",
                                            u = c(e[l] - t.get()),
                                            m = n.get() - t.get(),
                                            f = o.constrain(u / s);
                                        n.subtract(m * f), !i && c(m) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(e) {
                                        l = !e
                                    }
                                }
                            }(ea, ef, ep, ex, U),
                            scrollLooper: function(e, t, n, r) {
                                let {
                                    reachedMin: i,
                                    reachedMax: a
                                } = b(t.min + .1, t.max + .1);
                                return {
                                    loop: function(t) {
                                        if (!(1 === t ? a(n.get()) : -1 === t && i(n.get()))) return;
                                        let s = -1 * t * e;
                                        r.forEach(e => e.add(s))
                                    }
                                }
                            }(et, ea, ef, [eu, ef, em, ep]),
                            scrollProgress: eb,
                            scrollSnapList: ei.map(eb.get),
                            scrollSnaps: ei,
                            scrollTarget: eg,
                            scrollTo: eh,
                            slideLooper: function(e, t, n, r, i, a, s, o, l) {
                                let c = u(i),
                                    d = u(i).reverse(),
                                    m = x(p(d, s[0]), n, !1).concat(x(p(c, t - s[0] - 1), -n, !0));

                                function f(e, t) {
                                    return e.reduce((e, t) => e - i[t], t)
                                }

                                function p(e, t) {
                                    return e.reduce((e, n) => f(e, t) > 0 ? e.concat([n]) : e, [])
                                }

                                function x(i, s, c) {
                                    let d = a.map((e, n) => ({
                                        start: e - r[n] + .5 + s,
                                        end: e + t - .5 + s
                                    }));
                                    return i.map(t => {
                                        let r = c ? 0 : -n,
                                            i = c ? n : 0,
                                            a = d[t][c ? "end" : "start"];
                                        return {
                                            index: t,
                                            loopPoint: a,
                                            slideLocation: v(-1),
                                            translate: y(e, l[t]),
                                            target: () => o.get() > a ? r : i
                                        }
                                    })
                                }
                                return {
                                    canLoop: function() {
                                        return m.every(({
                                            index: e
                                        }) => .1 >= f(c.filter(t => t !== e), t))
                                    },
                                    clear: function() {
                                        m.forEach(e => e.translate.clear())
                                    },
                                    loop: function() {
                                        m.forEach(e => {
                                            let {
                                                target: t,
                                                translate: n,
                                                slideLocation: r
                                            } = e, i = t();
                                            i !== r.get() && (n.to(i), r.set(i))
                                        })
                                    },
                                    loopPoints: m
                                }
                            }(W, $, et, Q, X, Z, ei, ef, n),
                            slideFocus: ej,
                            slidesHandler: (N = !1, {
                                init: function(e) {
                                    z && (j = new MutationObserver(t => {
                                        !N && (o(z) || z(e, t)) && function(t) {
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
                            translate: y(W, t)
                        };
                    return eN
                }(e, N, k, I, L, n, q);
                return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                    loop: !1
                })) : r
            }(R), D([H, ...V.map(({
                options: e
            }) => e)]).forEach(e => E.add(e, "change", W)), R.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(K), r.eventHandler.init(K), r.resizeHandler.init(K), r.slidesHandler.init(K), r.options.loop && r.slideLooper.loop(), N.offsetParent && k.length && r.dragHandler.init(K), i = C.init(K, V))
        }

        function W(e, t) {
            let n = J();
            $(), B(O({
                startIndex: n
            }, e), t), q.emit("reInit")
        }

        function $() {
            r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), C.destroy(), E.clear()
        }

        function U(e, t, n) {
            R.active && !F && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : R.duration), r.scrollTo.index(e, n || 0))
        }

        function J() {
            return r.index.get()
        }
        let K = {
            canScrollNext: function() {
                return r.index.add(1).get() !== J()
            },
            canScrollPrev: function() {
                return r.index.add(-1).get() !== J()
            },
            containerNode: function() {
                return N
            },
            internalEngine: function() {
                return r
            },
            destroy: function() {
                F || (F = !0, E.clear(), $(), q.emit("destroy"), q.clear())
            },
            off: A,
            on: T,
            emit: z,
            plugins: function() {
                return i
            },
            previousScrollSnap: function() {
                return r.indexPrevious.get()
            },
            reInit: W,
            rootNode: function() {
                return e
            },
            scrollNext: function(e) {
                U(r.index.add(1).get(), e, -1)
            },
            scrollPrev: function(e) {
                U(r.index.add(-1).get(), e, 1)
            },
            scrollProgress: function() {
                return r.scrollProgress.get(r.offsetLocation.get())
            },
            scrollSnapList: function() {
                return r.scrollSnapList
            },
            scrollTo: U,
            selectedScrollSnap: J,
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
        return B(t, n), setTimeout(() => q.emit("init"), 0), K
    }

    function N(e = {}, n = []) {
        let a = (0, t.useRef)(e),
            s = (0, t.useRef)(n),
            [o, l] = (0, t.useState)(),
            [c, d] = (0, t.useState)(),
            u = (0, t.useCallback)(() => {
                o && o.reInit(a.current, s.current)
            }, [o]);
        return (0, t.useEffect)(() => {
            r(a.current, e) || (a.current = e, u())
        }, [e, u]), (0, t.useEffect)(() => {
            ! function(e, t) {
                if (e.length !== t.length) return !1;
                let n = i(e),
                    a = i(t);
                return n.every((e, t) => r(e, a[t]))
            }(s.current, n) && (s.current = n, u())
        }, [n, u]), (0, t.useEffect)(() => {
            if ("undefined" != typeof window && window.document && window.document.createElement && c) {
                j.globalOptions = N.globalOptions;
                let e = j(c, a.current, s.current);
                return l(e), () => e.destroy()
            }
            l(void 0)
        }, [c, l]), [d, o]
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
}, 5305, e => {
    "use strict";
    e.s(["default", () => s], 5305);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(75254);
    let i = (0, r.default)("plus", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "M12 5v14",
                key: "s699le"
            }]
        ]),
        a = (0, r.default)("minus", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }]
        ]);

    function s() {
        let [e, r] = (0, n.useState)(0);
        return (0, t.jsxs)("div", {
            className: "  overflow-hidden py-16 px-4",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 opacity-5",
                children: (0, t.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px"
                    }
                })
            }), (0, t.jsx)("div", {
                className: "absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
            }), (0, t.jsx)("div", {
                className: "absolute bottom-40 left-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
            }), (0, t.jsxs)("div", {
                className: "relative z-10 max-w-4xl mx-auto",
                children: [(0, t.jsx)("div", {
                    className: "text-center mb-12 sm:mb-16",
                    children: (0, t.jsx)("h1", {
                        className: "text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent",
                        children: "FAQs"
                    })
                }), (0, t.jsx)("div", {
                    className: "space-y-4",
                    children: [{
                        question: "What is CipherThon 2.0?",
                        answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
                    }, {
                        question: "How to participate in CipherThon 2.0?",
                        answer: "To participate in CipherThon 2.0, register on our official website, form a team of 2-4 members, and submit your registration before the deadline. Once registered, you'll receive confirmation and further instructions via email."
                    }, {
                        question: "What are the eligibility criteria?",
                        answer: "CipherThon 2.0 is open to all students currently enrolled in colleges or universities. Participants can be from any branch of study and any year. Working professionals are not eligible to participate."
                    }, {
                        question: "What is the team size?",
                        answer: "Each team must consist of 2-4 members. Solo participation is not allowed. All team members must be registered individually and part of the same team during registration."
                    }, {
                        question: "What are the problem statements?",
                        answer: "Problem statements will be released on the day of the hackathon. They will cover various domains including Education, Advertisement, Hiring, and Community development. Teams can choose any one problem statement to work on."
                    }, {
                        question: "Do I need to pay any registration fee?",
                        answer: "No, CipherThon 2.0 is completely free to participate. There are no registration fees or hidden charges. All participants will receive free meals, goodies, and swag during the event."
                    }].map((n, s) => (0, t.jsxs)("div", {
                        className: "group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 overflow-hidden",
                        children: [(0, t.jsxs)("button", {
                            onClick: () => {
                                r(e === s ? -1 : s)
                            },
                            className: "w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none",
                            children: [(0, t.jsx)("h3", {
                                className: "text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text pr-4",
                                children: n.question
                            }), (0, t.jsx)("div", {
                                className: "flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full  flex items-center justify-center border border-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300",
                                children: e === s ? (0, t.jsx)(a, {
                                    className: "w-5 h-5 sm:w-6 sm:h-6 text-orange-400"
                                }) : (0, t.jsx)(i, {
                                    className: "w-5 h-5 sm:w-6 sm:h-6 text-orange-400"
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: `transition-all duration-500 ease-in-out ${e===s?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,
                            children: (0, t.jsxs)("div", {
                                className: "px-6 sm:px-8 pb-6 sm:pb-8",
                                children: [(0, t.jsx)("div", {
                                    className: "h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"
                                }), (0, t.jsx)("p", {
                                    className: "text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed",
                                    children: n.answer
                                })]
                            })
                        }), e === s && (0, t.jsx)("div", {
                            className: "h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-pulse"
                        })]
                    }, s))
                }), (0, t.jsx)("div", {
                    className: "mt-12 sm:mt-16 text-center",
                    children: (0, t.jsxs)("div", {
                        className: "inline-block bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50",
                        children: [(0, t.jsx)("p", {
                            className: "text-gray-300 text-base sm:text-lg mb-4",
                            children: "Still have questions?"
                        }), (0, t.jsx)("button", {
                            className: "px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold text-base sm:text-lg rounded-xl hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105",
                            children: "Contact Us"
                        })]
                    })
                })]
            })]
        })
    }
}, 70442, e => {
    "use strict";
    e.s(["default", () => s]);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(30013),
        i = e.i(73375),
        a = e.i(63059);

    function s() {
        let [e, s] = (0, n.useState)(1), [o, l] = (0, r.default)({
            loop: !0,
            slidesToScroll: 1,
            align: "start"
        }), c = (0, n.useRef)(null), d = (0, n.useRef)(null);
        return (0, n.useEffect)(() => {
            let e = () => {
                window.innerWidth >= 1280 ? s(4) : window.innerWidth >= 1024 ? s(3) : window.innerWidth >= 640 ? s(2) : s(1)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, n.useEffect)(() => {
            if (!l) return;
            let e = c.current,
                t = d.current;
            return e && e.addEventListener("click", () => l.scrollPrev()), t && t.addEventListener("click", () => l.scrollNext()), () => {
                e && e.replaceWith(e.cloneNode(!0)), t && t.replaceWith(t.cloneNode(!0))
            }
        }, [l]), (0, t.jsx)("section", {
            className: "py-20 px-4",
            children: (0, t.jsxs)("div", {
                className: "container mx-auto",
                children: [(0, t.jsxs)("div", {
                    className: "text-start md:text-center lg:text-start mb-12 sm:mb-16",
                    children: [(0, t.jsxs)("h2", {
                        className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4",
                        children: ["Problem ", (0, t.jsx)("span", {
                            className: "bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent",
                            children: "Sector - Theme"
                        })]
                    }), (0, t.jsx)("p", {
                        className: "text-start lg:text-start text-gray-400 text-lg max-w-2xl",
                        children: "Choose your track and build innovative solutions"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "relative",
                    children: [(0, t.jsx)("div", {
                        className: "overflow-hidden",
                        ref: o,
                        children: (0, t.jsx)("div", {
                            className: "flex",
                            style: {
                                gap: "30px"
                            },
                            children: [{
                                id: 1,
                                title: "Education",
                                description: "Leverage AI and ML solutions for ed-tech that go beyond traditional teaching methods.",
                                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                            }, {
                                id: 2,
                                title: "Advertisement",
                                description: "Develop smart solutions using machine learning to personalize ads and target consumers effectively.",
                                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
                            }, {
                                id: 3,
                                title: "Hiring",
                                description: "Build intelligent platforms that match candidates with jobs using smart algorithms globally.",
                                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop"
                            }, {
                                id: 4,
                                title: "Community",
                                description: "Create platforms that help students build communities around their passions and interests.",
                                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                            }, {
                                id: 5,
                                title: "Hiring",
                                description: "Build intelligent platforms that match candidates with jobs using smart algorithms globally.",
                                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop"
                            }, {
                                id: 6,
                                title: "Community",
                                description: "Create platforms that help students build communities around their passions and interests.",
                                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                            }].map(n => (0, t.jsx)("div", {
                                className: "embla__slide",
                                style: {
                                    flex: `0 0 calc(${100/e}% - 30px)`
                                },
                                children: (0, t.jsx)("div", {
                                    className: "group h-full",
                                    children: (0, t.jsxs)("div", {
                                        className: "relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-orange-500/40",
                                        children: [(0, t.jsx)("img", {
                                            src: n.image,
                                            alt: n.title,
                                            className: "absolute inset-0 w-full h-full object-cover"
                                        }), (0, t.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
                                        }), (0, t.jsxs)("div", {
                                            className: "relative h-full flex flex-col justify-end p-8 text-white",
                                            children: [(0, t.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [(0, t.jsx)("h3", {
                                                    className: "text-3xl md:text-4xl font-bold",
                                                    children: n.title
                                                }), (0, t.jsx)("p", {
                                                    className: "text-white/90 text-sm md:text-base leading-relaxed line-clamp-4",
                                                    children: n.description
                                                })]
                                            }), (0, t.jsx)("div", {
                                                className: "mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-400 to-yellow-500 transition-all duration-700 rounded-full"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                            children: (0, t.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"
                                            })
                                        })]
                                    })
                                })
                            }, n.id))
                        })
                    }), (0, t.jsx)("button", {
                        ref: c,
                        className: "absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300",
                        children: (0, t.jsx)(i.ChevronLeft, {
                            className: "w-7 h-7 text-black"
                        })
                    }), (0, t.jsx)("button", {
                        ref: d,
                        className: "absolute right-4 md:right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300",
                        children: (0, t.jsx)(a.ChevronRight, {
                            className: "w-7 h-7 text-black"
                        })
                    })]
                })]
            })
        })
    }
}, 87316, e => {
    "use strict";
    e.s(["Calendar", () => t], 87316);
    let t = (0, e.i(75254).default)("calendar", [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ])
}, 598, e => {
    "use strict";
    e.s(["default", () => a], 598);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(87316);
    let i = (0, e.i(75254).default)("clock", [
        ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ]);

    function a() {
        let [e, a] = (0, n.useState)("online");
        return (0, t.jsxs)("div", {
            className: " overflow-hidden py-16 px-4 ",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 opacity-5",
                children: (0, t.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px"
                    }
                })
            }), (0, t.jsx)("div", {
                className: "absolute top-20 right-40 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
            }), (0, t.jsx)("div", {
                className: "absolute bottom-40 left-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
            }), (0, t.jsxs)("div", {
                className: "relative z-10 max-w-6xl mx-auto",
                children: [(0, t.jsxs)("div", {
                    className: "text-center mb-12 sm:mb-16 space-y-4",
                    children: [(0, t.jsxs)("h1", {
                        className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white",
                        children: ["Hackathon ", (0, t.jsx)("span", {
                            className: "bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent",
                            children: "Schedule"
                        })]
                    }), (0, t.jsx)("p", {
                        className: "text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada scelerisque ultrices gravida"
                    })]
                }), (0, t.jsx)("div", {
                    className: "flex justify-center mb-8 sm:mb-12",
                    children: (0, t.jsxs)("div", {
                        className: "inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50",
                        children: [(0, t.jsx)(r.Calendar, {
                            className: "w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                        }), (0, t.jsx)("span", {
                            className: "text-lg sm:text-xl lg:text-2xl font-semibold text-white",
                            children: "Friday, 10 January 2025"
                        })]
                    })
                }), (0, t.jsx)("div", {
                    className: "flex justify-center mb-12 sm:mb-16",
                    children: (0, t.jsxs)("div", {
                        className: "inline-flex bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50",
                        children: [(0, t.jsx)("button", {
                            onClick: () => a("online"),
                            className: `px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${"online"===e?"bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg":"text-white/70 hover:text-white"}`,
                            children: "CipherWeek (Online)"
                        }), (0, t.jsx)("button", {
                            onClick: () => a("offline"),
                            className: `px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${"offline"===e?"bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg":"text-white/70 hover:text-white"}`,
                            children: "Offline 24 hrs Hackathon"
                        })]
                    })
                }), (0, t.jsx)("div", {
                    className: "space-y-6",
                    children: ("online" === e ? [{
                        phase: "Phase - I",
                        time: "10:00-10:00",
                        title: "Opening Ceremony & Team Registration",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }, {
                        phase: "Phase - II",
                        time: "12:00-02:00",
                        title: "Problem Statement Release & Ideation",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }, {
                        phase: "Phase - III",
                        time: "02:00-04:00",
                        title: "Mentor Sessions & Development Begins",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }, {
                        phase: "Phase - IV",
                        time: "04:00-08:00",
                        title: "Development Sprint & Checkpoint",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }] : [{
                        phase: "Phase - I",
                        time: "09:00-11:00",
                        title: "Registration & Breakfast",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }, {
                        phase: "Phase - II",
                        time: "11:00-01:00",
                        title: "Opening Ceremony & Hacking Begins",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }, {
                        phase: "Phase - III",
                        time: "01:00-06:00",
                        title: "Lunch & Continuous Development",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }, {
                        phase: "Phase - IV",
                        time: "06:00-09:00",
                        title: "Final Presentations & Judging",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada consectetur adipiscing elit."
                    }]).map((e, n) => (0, t.jsx)("div", {
                        className: "group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10",
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-col sm:flex-row gap-6 sm:gap-8",
                            children: [(0, t.jsx)("div", {
                                className: "flex-shrink-0 sm:w-48",
                                children: (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [(0, t.jsx)(i, {
                                        className: "w-5 h-5 text-orange-500"
                                    }), (0, t.jsx)("span", {
                                        className: "text-2xl sm:text-3xl font-bold text-white",
                                        children: e.time
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "hidden sm:block w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"
                            }), (0, t.jsxs)("div", {
                                className: "flex-1 space-y-3",
                                children: [(0, t.jsx)("h3", {
                                    className: "text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors",
                                    children: e.phase
                                }), (0, t.jsx)("h4", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-300",
                                    children: e.title
                                }), (0, t.jsx)("p", {
                                    className: "text-gray-400 text-sm sm:text-base leading-relaxed",
                                    children: e.description
                                })]
                            }), (0, t.jsx)("div", {
                                className: "hidden lg:flex items-start",
                                children: (0, t.jsx)("div", {
                                    className: "w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border-2 border-orange-500/30 flex items-center justify-center",
                                    children: (0, t.jsx)("span", {
                                        className: "text-orange-400 font-bold text-lg",
                                        children: n + 1
                                    })
                                })
                            })]
                        })
                    }, n))
                }), (0, t.jsx)("div", {
                    className: "mt-12 text-center",
                    children: (0, t.jsx)("p", {
                        className: "text-gray-500 text-sm sm:text-base",
                        children: "* Schedule is subject to change. Stay tuned for updates."
                    })
                })]
            })]
        })
    }
}, 52716, e => {
    "use strict";
    e.s(["default", () => a], 52716);
    var t = e.i(43476),
        n = e.i(71645);
    let r = (0, e.i(75254).default)("map-pin", [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ]);
    var i = e.i(87316);

    function a() {
        let [e, a] = (0, n.useState)({
            days: 31,
            hours: 16,
            minutes: 20,
            seconds: 50
        });
        return (0, n.useEffect)(() => {
            let e = setInterval(() => {
                a(e => {
                    let {
                        days: t,
                        hours: n,
                        minutes: r,
                        seconds: i
                    } = e;
                    return i > 0 ? i-- : r > 0 ? (r--, i = 59) : n > 0 ? (n--, r = 59, i = 59) : t > 0 && (t--, n = 23, r = 59, i = 59), {
                        days: t,
                        hours: n,
                        minutes: r,
                        seconds: i
                    }
                })
            }, 1e3);
            return () => clearInterval(e)
        }, []), (0, t.jsxs)("div", {
            className: " overflow-hidden py-16 px-4",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 opacity-5",
                children: (0, t.jsx)("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px"
                    }
                })
            }), (0, t.jsx)("div", {
                className: "absolute top-0 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl"
            }), (0, t.jsx)("div", {
                className: "absolute bottom-20 right-10 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-3xl"
            }), (0, t.jsx)("div", {
                className: "absolute top-10 right-20 w-1 h-40 bg-gradient-to-b from-orange-500 to-transparent rotate-45 opacity-30"
            }), (0, t.jsx)("div", {
                className: "absolute bottom-32 left-32 w-1 h-32 bg-gradient-to-b from-yellow-500 to-transparent -rotate-45 opacity-30"
            }), (0, t.jsx)("div", {
                className: "absolute top-4 right-40 w-6 h-6 bg-yellow-500 rounded-full"
            }), (0, t.jsx)("div", {
                className: "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20",
                children: (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                    children: [(0, t.jsxs)("div", {
                        className: "relative order-2 lg:order-1 px-4",
                        children: [(0, t.jsxs)("div", {
                            className: "relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800",
                            children: [(0, t.jsx)("img", {
                                src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
                                alt: "Hackathon crowd",
                                className: "w-full h-96 md:h-[500px] object-cover"
                            }), (0, t.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                            }), (0, t.jsxs)("div", {
                                className: "absolute top-6 left-6 bg-orange-500 text-black px-5 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl",
                                children: [(0, t.jsx)(i.Calendar, {
                                    className: "w-5 h-5"
                                }), (0, t.jsx)("span", {
                                    className: "text-sm",
                                    children: "Live Event"
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "absolute -bottom-4 -right-4 md:-bottom-12 md:-right-12 w-64 md:w-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 z-10",
                            children: [(0, t.jsx)("img", {
                                src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
                                alt: "Participants working",
                                className: "w-full h-64 md:h-80 object-cover"
                            }), (0, t.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "space-y-6 order-1 lg:order-2",
                        children: [(0, t.jsx)("div", {
                            className: "space-y-2",
                            children: (0, t.jsxs)("h2", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white",
                                children: ["About ", (0, t.jsx)("span", {
                                    className: "bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent",
                                    children: "CipherThon 2.0"
                                })]
                            })
                        }), (0, t.jsx)("p", {
                            className: "text-gray-400 text-base sm:text-lg leading-relaxed",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo turpis eget nisl faucibus, id mollis ligula consequat. Sed euismod augue vitae lorem pretium, at ultricies nisi facilisis."
                        }), (0, t.jsxs)("div", {
                            className: "flex items-center gap-3 text-white/80",
                            children: [(0, t.jsx)(r, {
                                className: "w-5 h-5 text-orange-500"
                            }), (0, t.jsxs)("span", {
                                className: "text-base sm:text-lg",
                                children: [(0, t.jsx)("span", {
                                    className: "font-semibold",
                                    children: "Venue:"
                                }), " IAMPunjab, Chandigarh"]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "pt-4",
                            children: (0, t.jsxs)("div", {
                                className: "grid grid-cols-4 gap-3 sm:gap-4",
                                children: [(0, t.jsxs)("div", {
                                    className: "bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700 hover:border-orange-500 transition-colors",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1",
                                        children: String(e.days).padStart(2, "0")
                                    }), (0, t.jsx)("div", {
                                        className: "text-xs sm:text-sm text-gray-400 uppercase tracking-wider",
                                        children: "Days"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700 hover:border-orange-500 transition-colors",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1",
                                        children: String(e.hours).padStart(2, "0")
                                    }), (0, t.jsx)("div", {
                                        className: "text-xs sm:text-sm text-gray-400 uppercase tracking-wider",
                                        children: "Hours"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700 hover:border-orange-500 transition-colors",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1",
                                        children: String(e.minutes).padStart(2, "0")
                                    }), (0, t.jsx)("div", {
                                        className: "text-xs sm:text-sm text-gray-400 uppercase tracking-wider",
                                        children: "Mins"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700 hover:border-orange-500 transition-colors",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1",
                                        children: String(e.seconds).padStart(2, "0")
                                    }), (0, t.jsx)("div", {
                                        className: "text-xs sm:text-sm text-gray-400 uppercase tracking-wider",
                                        children: "Secs"
                                    })]
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: "pt-4 flex flex-wrap gap-4",
                            children: [(0, t.jsx)("button", {
                                className: "px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105",
                                children: "Register Now"
                            }), (0, t.jsx)("button", {
                                className: "px-6 py-3 border-2 border-gray-600 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/50 transition-all duration-300",
                                children: "Learn More"
                            })]
                        })]
                    })]
                })
            })]
        })
    }
}]);