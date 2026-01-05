(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 8341, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), ! function(e, t) {
        for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }(n, {
        cancelIdleCallback: function() {
            return i
        },
        requestIdleCallback: function() {
            return r
        }
    });
    let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
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
        i = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 79520, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), ! function(e, t) {
        for (var n in t) Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }(n, {
        default: function() {
            return g
        },
        handleClientScriptLoad: function() {
            return p
        },
        initScriptLoader: function() {
            return x
        }
    });
    let r = e.r(55682),
        i = e.r(90809),
        a = e.r(43476),
        s = r._(e.r(74080)),
        o = i._(e.r(71645)),
        l = e.r(42732),
        c = e.r(22737),
        u = e.r(8341),
        d = new Map,
        f = new Set,
        m = e => {
            let {
                src: t,
                id: n,
                onLoad: r = () => {},
                onReady: i = null,
                dangerouslySetInnerHTML: a,
                children: o = "",
                strategy: l = "afterInteractive",
                onError: u,
                stylesheets: m
            } = e, p = n || t;
            if (p && f.has(p)) return;
            if (d.has(t)) {
                f.add(p), d.get(t).then(r, u);
                return
            }
            let x = () => {
                    i && i(), f.add(p)
                },
                h = document.createElement("script"),
                g = new Promise((e, t) => {
                    h.addEventListener("load", function(t) {
                        e(), r && r.call(this, t), x()
                    }), h.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    u && u(e)
                });
            a ? (h.innerHTML = a.__html || "", x()) : o ? (h.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", x()) : t && (h.src = t, d.set(t, g)), (0, c.setAttributesFromProps)(h, e), "worker" === l && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", l), m && (e => {
                if (s.default.preinit) return e.forEach(e => {
                    s.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("undefined" != typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let n = document.createElement("link");
                        n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                    })
                }
            })(m), document.body.appendChild(h)
        };

    function p(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, u.requestIdleCallback)(() => m(e))
        }) : m(e)
    }

    function x(e) {
        e.forEach(p), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            f.add(t)
        })
    }

    function h(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: i = null,
            strategy: c = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...x
        } = e, {
            updateScripts: h,
            scripts: g,
            getIsSsr: y,
            appDir: b,
            nonce: w
        } = (0, o.useContext)(l.HeadManagerContext);
        w = x.nonce || w;
        let v = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
            let e = t || n;
            v.current || (i && e && f.has(e) && i(), v.current = !0)
        }, [i, t, n]);
        let j = (0, o.useRef)(!1);
        if ((0, o.useEffect)(() => {
                if (!j.current) {
                    if ("afterInteractive" === c) m(e);
                    else "lazyOnload" === c && ("complete" === document.readyState ? (0, u.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                        (0, u.requestIdleCallback)(() => m(e))
                    }));
                    j.current = !0
                }
            }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (h ? (g[c] = (g[c] || []).concat([{
                id: t,
                src: n,
                onLoad: r,
                onReady: i,
                onError: d,
                ...x,
                nonce: w
            }]), h(g)) : y && y() ? f.add(t || n) : y && !y() && m({ ...e,
                nonce: w
            })), b) {
            if (p && p.forEach(e => {
                    s.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === c)
                if (!n) return x.dangerouslySetInnerHTML && (x.children = x.dangerouslySetInnerHTML.__html, delete x.dangerouslySetInnerHTML), (0, a.jsx)("script", {
                    nonce: w,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...x,
                            id: t
                        }]) + ")"
                    }
                });
                else return s.default.preload(n, x.integrity ? {
                    as: "script",
                    integrity: x.integrity,
                    nonce: w,
                    crossOrigin: x.crossOrigin
                } : {
                    as: "script",
                    nonce: w,
                    crossOrigin: x.crossOrigin
                }), (0, a.jsx)("script", {
                    nonce: w,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...x,
                            id: t
                        }]) + ")"
                    }
                });
            "afterInteractive" === c && n && s.default.preload(n, x.integrity ? {
                as: "script",
                integrity: x.integrity,
                nonce: w,
                crossOrigin: x.crossOrigin
            } : {
                as: "script",
                nonce: w,
                crossOrigin: x.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(h, "__nextScript", {
        value: !0
    });
    let g = h;
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
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

    function u(e) {
        return Math.sign(e)
    }

    function d(e) {
        return x(e).map(Number)
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

    function x(e) {
        return Object.keys(e)
    }

    function h(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
    }

    function g() {
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

    function y(e = 0, t = 0) {
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

    function b(e) {
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

    function w(e, t) {
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
    let v = {
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
        let r, i, N, k, M, S = e.ownerDocument,
            I = S.defaultView,
            _ = function(e) {
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
            }(I),
            C = (M = [], {
                init: function(e, t) {
                    return (M = t.filter(({
                        options: e
                    }) => !1 !== _.optionsAtMedia(e).active)).forEach(t => t.init(e, _)), t.reduce((e, t) => Object.assign(e, {
                        [t.name]: t
                    }), {})
                },
                destroy: function() {
                    M = M.filter(e => e.destroy())
                }
            }),
            L = g(),
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
                optionsAtMedia: E,
                optionsMediaQueries: A
            } = _,
            {
                on: D,
                off: P,
                emit: H
            } = O,
            $ = !1,
            z = T(v, j.globalOptions),
            F = T(z),
            R = [];

        function q(t, n) {
            if ($) return;
            F = E(z = T(z, t)), R = n || R;
            let {
                container: l,
                slides: v
            } = F;
            N = (s(l) ? e.querySelector(l) : l) || e.children[0];
            let j = s(v) ? N.querySelectorAll(v) : v;
            k = [].slice.call(j || N.children), r = function t(n) {
                let r = function(e, t, n, r, i, l, v) {
                    let j, N, {
                            align: k,
                            axis: M,
                            direction: S,
                            startIndex: I,
                            loop: _,
                            duration: C,
                            dragFree: L,
                            dragThreshold: O,
                            inViewThreshold: T,
                            slidesToScroll: E,
                            skipSnaps: A,
                            containScroll: D,
                            watchResize: P,
                            watchSlides: H,
                            watchDrag: $,
                            watchFocus: z
                        } = l,
                        F = {
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
                        R = F.measure(t),
                        q = n.map(F.measure),
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
                        }(M, S),
                        B = V.measureSize(R),
                        U = {
                            measure: function(e) {
                                return e / 100 * B
                            }
                        },
                        X = function(e, t) {
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
                        }(k, B),
                        Y = !_ && !!D,
                        {
                            slideSizes: J,
                            slideSizesWithGaps: Q,
                            startGap: G,
                            endGap: K
                        } = function(e, t, n, r, i, a) {
                            let {
                                measureSize: s,
                                startEdge: o,
                                endEdge: l
                            } = e, u = n[0] && i, d = function() {
                                if (!u) return 0;
                                let e = n[0];
                                return c(t[o] - e[o])
                            }(), p = u ? parseFloat(a.getComputedStyle(f(r)).getPropertyValue(`margin-${l}`)) : 0, x = n.map(s), h = n.map((e, t, n) => {
                                let r = t === m(n);
                                return t ? r ? x[t] + p : n[t + 1][o] - e[o] : x[t] + d
                            }).map(c);
                            return {
                                slideSizes: x,
                                slideSizesWithGaps: h,
                                startGap: d,
                                endGap: p
                            }
                        }(V, R, q, n, _ || !!D, i),
                        W = function(e, t, n, r, i, s, o, l, u) {
                            let {
                                startEdge: p,
                                endEdge: x,
                                direction: h
                            } = e, g = a(n);
                            return {
                                groupSlides: function(e) {
                                    return g ? d(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? d(e).reduce((n, a, u) => {
                                        let d = f(n) || 0,
                                            g = a === m(e),
                                            y = i[p] - s[d][p],
                                            b = i[p] - s[a][x],
                                            w = r || 0 !== d ? 0 : h(o),
                                            v = c(b - (!r && g ? h(l) : 0) - (y + w));
                                        return u && v > t + 2 && n.push(a), g && n.push(e.length), n
                                    }, []).map((t, n, r) => {
                                        let i = Math.max(r[n - 1] || 0);
                                        return e.slice(i, t)
                                    }) : []
                                }
                            }
                        }(V, B, E, _, R, q, G, K, 0),
                        {
                            snaps: Z,
                            snapsAligned: ee
                        } = function(e, t, n, r, i) {
                            let {
                                startEdge: a,
                                endEdge: s
                            } = e, {
                                groupSlides: o
                            } = i, l = o(r).map(e => f(e)[s] - e[0][a]).map(c).map(t.measure), u = r.map(e => n[a] - e[a]).map(e => -c(e)), d = o(u).map(e => e[0]).map((e, t) => e + l[t]);
                            return {
                                snaps: u,
                                snapsAligned: d
                            }
                        }(V, X, R, q, W),
                        et = -f(Z) + f(Q),
                        {
                            snapsContained: en,
                            scrollContainLimit: er
                        } = function(e, t, n, r, i) {
                            let a = y(-t + e, 0),
                                s = n.map((e, t) => {
                                    let {
                                        min: r,
                                        max: i
                                    } = a, s = a.constrain(e), o = t === m(n);
                                    return t ? o || function(e, t) {
                                        return 1 >= c(e - t)
                                    }(r, s) ? r : function(e, t) {
                                        return 1 >= c(e - t)
                                    }(i, s) ? i : s : i
                                }).map(e => parseFloat(e.toFixed(3))),
                                o = function() {
                                    let e = s[0],
                                        t = f(s);
                                    return y(s.lastIndexOf(e), s.indexOf(t) + 1)
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
                        }(B, et, ee, D, 0),
                        ei = Y ? en : ee,
                        {
                            limit: ea
                        } = function(e, t, n) {
                            let r = t[0];
                            return {
                                limit: y(n ? r - e : f(t), r)
                            }
                        }(et, ei, _),
                        es = function e(t, n, r) {
                            let {
                                constrain: i
                            } = y(0, t), a = t + 1, s = o(n);

                            function o(e) {
                                return r ? c((a + e) % a) : i(e)
                            }

                            function l() {
                                return e(t, s, r)
                            }
                            let u = {
                                get: function() {
                                    return s
                                },
                                set: function(e) {
                                    return s = o(e), u
                                },
                                add: function(e) {
                                    return l().set(s + e)
                                },
                                clone: l
                            };
                            return u
                        }(m(ei), I, _),
                        eo = es.clone(),
                        el = d(n),
                        ec = function(e, t, n, r) {
                            let i = g(),
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

                            function u() {
                                t.cancelAnimationFrame(l), s = null, o = 0, l = 0
                            }
                            return {
                                init: function() {
                                    i.add(e, "visibilitychange", () => {
                                        e.hidden && (s = null, o = 0)
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
                            slideLooper: s,
                            dragHandler: o,
                            animation: l,
                            eventHandler: c,
                            scrollBounds: u,
                            options: {
                                loop: d
                            }
                        }, f) => {
                            let m = e.settled(),
                                p = !u.shouldConstrain(),
                                x = d ? m : m && p,
                                h = x && !o.pointerDown();
                            h && l.stop();
                            let g = n.get() * f + i.get() * (1 - f);
                            r.set(g), d && (a.loop(e.direction()), s.loop()), t.to(r.get()), h && c.emit("settle"), x || c.emit("scroll")
                        })(eN, e)),
                        eu = ei[es.get()],
                        ed = b(eu),
                        ef = b(eu),
                        em = b(eu),
                        ep = b(eu),
                        ex = function(e, t, n, r, i, a) {
                            let s = 0,
                                o = 0,
                                l = i,
                                d = .68,
                                f = e.get(),
                                m = 0;

                            function p(e) {
                                return l = e, h
                            }

                            function x(e) {
                                return d = e, h
                            }
                            let h = {
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
                                    return l ? (n.set(e), s += t / l, s *= d, f += s, e.add(s), i = f - m) : (s = 0, n.set(r), e.set(r), i = t), o = u(i), m = f, h
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
                            return h
                        }(ed, em, ef, ep, C, .68),
                        eh = function(e, t, n, r, i) {
                            let {
                                reachedAny: a,
                                removeOffset: s,
                                constrain: o
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
                                            let r = e ? s(n) : o(n),
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
                        }(_, ei, et, ea, ep),
                        eg = function(e, t, n, r, i, a, s) {
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
                        }(ec, es, eo, ex, eh, ep, v),
                        ey = function(e) {
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
                        eb = g(),
                        ew = function(e, t, n, r) {
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
                        }(t, n, v, T),
                        {
                            slideRegistry: ev
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
                                        let r = t === m(n);
                                        return t ? r ? p(m(a) - f(n)[0] + 1, f(n)[0]) : e : p(f(n[0]) + 1)
                                    }) : r
                                }()
                            }
                        }(Y, D, ei, er, W, el),
                        ej = function(e, t, n, r, i, s, l, c) {
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
                                    c && (s.add(document, "keydown", f, !1), t.forEach((t, f) => {
                                        s.add(t, "focus", t => {
                                            (o(c) || c(m, t)) && function(t) {
                                                if (new Date().getTime() - d > 10) return;
                                                l.emit("slideFocusStart"), e.scrollLeft = 0;
                                                let s = n.findIndex(e => e.includes(t));
                                                a(s) && (i.useDuration(0), r.index(s, 0), l.emit("slideFocus"))
                                            }(f)
                                        }, u)
                                    }))
                                }
                            }
                        }(e, n, ev, eg, ex, eb, v, z),
                        eN = {
                            ownerDocument: r,
                            ownerWindow: i,
                            eventHandler: v,
                            containerRect: R,
                            slideRects: q,
                            animation: ec,
                            axis: V,
                            dragHandler: function(e, t, n, r, i, a, s, l, d, f, m, p, x, b, w, v, j, N, k) {
                                let {
                                    cross: M,
                                    direction: S
                                } = e, I = ["INPUT", "SELECT", "TEXTAREA"], _ = {
                                    passive: !1
                                }, C = g(), L = g(), O = y(50, 225).constrain(b.measure(20)), T = {
                                    mouse: 300,
                                    touch: 400
                                }, E = {
                                    mouse: 500,
                                    touch: 600
                                }, A = w ? 43 : 25, D = !1, P = 0, H = 0, $ = !1, z = !1, F = !1, R = !1;

                                function q(e) {
                                    if (!h(e, r) && e.touches.length >= 2) return V(e);
                                    let t = a.readPoint(e),
                                        n = a.readPoint(e, M),
                                        s = c(t - P),
                                        o = c(n - H);
                                    if (!z && !R && (!e.cancelable || !(z = s > o))) return V(e);
                                    let u = a.pointerMove(e);
                                    s > v && (F = !0), f.useFriction(.3).useDuration(.75), l.start(), i.add(S(u)), e.preventDefault()
                                }

                                function V(e) {
                                    let t = m.byDistance(0, !1).index !== p.get(),
                                        n = a.pointerUp(e) * (w ? E : T)[R ? "mouse" : "touch"],
                                        r = function(e, t) {
                                            let n = p.add(-1 * u(e)),
                                                r = m.byDistance(e, !w).distance;
                                            return w || c(e) < O ? r : j && t ? .5 * r : m.byIndex(n.get(), 0).distance
                                        }(S(n), t),
                                        i = function(e, t) {
                                            var n, r;
                                            if (0 === e || 0 === t || c(e) <= c(t)) return 0;
                                            let i = (n = c(e), r = c(t), c(n - r));
                                            return c(i / e)
                                        }(n, r);
                                    z = !1, $ = !1, L.clear(), f.useDuration(A - 10 * i).useFriction(.68 + i / 50), d.distance(r, !w), R = !1, x.emit("pointerUp")
                                }

                                function B(e) {
                                    F && (e.stopPropagation(), e.preventDefault(), F = !1)
                                }
                                return {
                                    init: function(e) {
                                        k && C.add(t, "dragstart", e => e.preventDefault(), _).add(t, "touchmove", () => void 0, _).add(t, "touchend", () => void 0).add(t, "touchstart", l).add(t, "mousedown", l).add(t, "touchcancel", V).add(t, "contextmenu", V).add(t, "click", B, !0);

                                        function l(l) {
                                            (o(k) || k(e, l)) && function(e) {
                                                let o = h(e, r);
                                                if ((R = o, F = w && o && !e.buttons && D, D = c(i.get() - s.get()) >= 2, !o || 0 === e.button) && ! function(e) {
                                                        let t = e.nodeName || "";
                                                        return I.includes(t)
                                                    }(e.target)) {
                                                    $ = !0, a.pointerDown(e), f.useFriction(0).useDuration(0), i.set(s);
                                                    let r = R ? n : t;
                                                    L.add(r, "touchmove", q, _).add(r, "touchend", V).add(r, "mousemove", q, _).add(r, "mouseup", V), P = a.readPoint(e), H = a.readPoint(e, M), x.emit("pointerDown")
                                                }
                                            }(l)
                                        }
                                    },
                                    destroy: function() {
                                        C.clear(), L.clear()
                                    },
                                    pointerDown: function() {
                                        return $
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
                            }(V, i), ed, ec, eg, ex, eh, es, v, U, L, O, A, 0, $),
                            eventStore: eb,
                            percentOfView: U,
                            index: es,
                            indexPrevious: eo,
                            limit: ea,
                            location: ed,
                            offsetLocation: em,
                            previousLocation: ef,
                            options: l,
                            resizeHandler: function(e, t, n, r, i, a, s) {
                                let l, u, d = [e].concat(r),
                                    f = [],
                                    m = !1;

                                function p(e) {
                                    return i.measureSize(s.measure(e))
                                }
                                return {
                                    init: function(i) {
                                        a && (u = p(e), f = r.map(p), l = new ResizeObserver(n => {
                                            (o(a) || a(i, n)) && function(n) {
                                                for (let a of n) {
                                                    if (m) return;
                                                    let n = a.target === e,
                                                        s = r.indexOf(a.target),
                                                        o = n ? u : f[s];
                                                    if (c(p(n ? e : r[s]) - o) >= .5) {
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
                            }(t, v, i, n, V, P, F),
                            scrollBody: ex,
                            scrollBounds: function(e, t, n, r, i) {
                                let a = i.measure(10),
                                    s = i.measure(50),
                                    o = y(.1, .99),
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
                                            m = o.constrain(d / s);
                                        n.subtract(f * m), !i && c(f) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(e) {
                                        l = !e
                                    }
                                }
                            }(ea, em, ep, ex, U),
                            scrollLooper: function(e, t, n, r) {
                                let {
                                    reachedMin: i,
                                    reachedMax: a
                                } = y(t.min + .1, t.max + .1);
                                return {
                                    loop: function(t) {
                                        if (!(1 === t ? a(n.get()) : -1 === t && i(n.get()))) return;
                                        let s = -1 * t * e;
                                        r.forEach(e => e.add(s))
                                    }
                                }
                            }(et, ea, em, [ed, em, ef, ep]),
                            scrollProgress: ey,
                            scrollSnapList: ei.map(ey.get),
                            scrollSnaps: ei,
                            scrollTarget: eh,
                            scrollTo: eg,
                            slideLooper: function(e, t, n, r, i, a, s, o, l) {
                                let c = d(i),
                                    u = d(i).reverse(),
                                    f = x(p(u, s[0]), n, !1).concat(x(p(c, t - s[0] - 1), -n, !0));

                                function m(e, t) {
                                    return e.reduce((e, t) => e - i[t], t)
                                }

                                function p(e, t) {
                                    return e.reduce((e, n) => m(e, t) > 0 ? e.concat([n]) : e, [])
                                }

                                function x(i, s, c) {
                                    let u = a.map((e, n) => ({
                                        start: e - r[n] + .5 + s,
                                        end: e + t - .5 + s
                                    }));
                                    return i.map(t => {
                                        let r = c ? 0 : -n,
                                            i = c ? n : 0,
                                            a = u[t][c ? "end" : "start"];
                                        return {
                                            index: t,
                                            loopPoint: a,
                                            slideLocation: b(-1),
                                            translate: w(e, l[t]),
                                            target: () => o.get() > a ? r : i
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
                            }(V, B, et, J, Q, Z, ei, em, n),
                            slideFocus: ej,
                            slidesHandler: (N = !1, {
                                init: function(e) {
                                    H && (j = new MutationObserver(t => {
                                        !N && (o(H) || H(e, t)) && function(t) {
                                            for (let n of t)
                                                if ("childList" === n.type) {
                                                    e.reInit(), v.emit("slidesChanged");
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
                            slidesInView: ew,
                            slideIndexes: el,
                            slideRegistry: ev,
                            slidesToScroll: W,
                            target: ep,
                            translate: w(V, t)
                        };
                    return eN
                }(e, N, k, S, I, n, O);
                return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                    loop: !1
                })) : r
            }(F), A([z, ...R.map(({
                options: e
            }) => e)]).forEach(e => L.add(e, "change", V)), F.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(Y), r.eventHandler.init(Y), r.resizeHandler.init(Y), r.slidesHandler.init(Y), r.options.loop && r.slideLooper.loop(), N.offsetParent && k.length && r.dragHandler.init(Y), i = C.init(Y, R))
        }

        function V(e, t) {
            let n = X();
            B(), q(T({
                startIndex: n
            }, e), t), O.emit("reInit")
        }

        function B() {
            r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), C.destroy(), L.clear()
        }

        function U(e, t, n) {
            F.active && !$ && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : F.duration), r.scrollTo.index(e, n || 0))
        }

        function X() {
            return r.index.get()
        }
        let Y = {
            canScrollNext: function() {
                return r.index.add(1).get() !== X()
            },
            canScrollPrev: function() {
                return r.index.add(-1).get() !== X()
            },
            containerNode: function() {
                return N
            },
            internalEngine: function() {
                return r
            },
            destroy: function() {
                $ || ($ = !0, L.clear(), B(), O.emit("destroy"), O.clear())
            },
            off: P,
            on: D,
            emit: H,
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
            selectedScrollSnap: X,
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
        return q(t, n), setTimeout(() => O.emit("init"), 0), Y
    }

    function N(e = {}, n = []) {
        let a = (0, t.useRef)(e),
            s = (0, t.useRef)(n),
            [o, l] = (0, t.useState)(),
            [c, u] = (0, t.useState)(),
            d = (0, t.useCallback)(() => {
                o && o.reInit(a.current, s.current)
            }, [o]);
        return (0, t.useEffect)(() => {
            r(a.current, e) || (a.current = e, d())
        }, [e, d]), (0, t.useEffect)(() => {
            ! function(e, t) {
                if (e.length !== t.length) return !1;
                let n = i(e),
                    a = i(t);
                return n.every((e, t) => r(e, a[t]))
            }(s.current, n) && (s.current = n, d())
        }, [n, d]), (0, t.useEffect)(() => {
            if ("undefined" != typeof window && window.document && window.document.createElement && c) {
                j.globalOptions = N.globalOptions;
                let e = j(c, a.current, s.current);
                return l(e), () => e.destroy()
            }
            l(void 0)
        }, [c, l]), [u, o]
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
    e.s(["Pause", () => n], 95242);
    var t = e.i(75254);
    let n = (0, t.default)("pause", [
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
    e.s(["Volume2", () => r], 82373);
    let r = (0, t.default)("volume-2", [
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
    e.s(["VolumeX", () => i], 35116);
    let i = (0, t.default)("volume-x", [
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
}, 26930, e => {
    "use strict";
    e.s(["default", () => l]);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(57688),
        i = e.i(70065),
        a = e.i(10936),
        s = e.i(47176),
        o = e.i(11583);

    function l({
        title: e = "Title Goes here",
        description: l = "description goes here",
        data: c,
        widthWrapper: u = "max-w-7xl"
    }) {
        let [d, f] = (0, n.useState)(0), [m, p] = (0, n.useState)(null), [x, h] = (0, n.useState)(null), g = (0, n.useRef)(null);
        if (!c || 0 === c.length || !c[d]) return null;
        let y = () => f(e => 0 === e ? Math.ceil(c.length / 2) - 1 : e - 1),
            b = () => f(e => e === Math.ceil(c.length / 2) - 1 ? 0 : e + 1),
            w = () => {
                if (!m || !x) return;
                let e = m - x;
                e > 50 ? b() : e < -50 && y(), p(null), h(null)
            };
        return (0, t.jsxs)("section", {
            className: "py-12 sm:py-16 px-4",
            children: [(0, t.jsxs)("div", {
                className: "text-center mb-12 sm:mb-16",
                children: [(0, t.jsx)("h2", {
                    className: "gradient-text text-xl sm:text-2xl md:text-4xl md:leading-snug mb-2 max-w-5xl mx-auto",
                    children: e
                }), l && (0, t.jsx)("p", {
                    className: "text-muted-foreground text-sm sm:text-base md:text-lg max-w-4xl mx-auto  [&_a]:text-blue-600",
                    dangerouslySetInnerHTML: {
                        __html: l ? (0, o.decode)(l) : ""
                    }
                })]
            }), (0, t.jsx)("div", {
                className: `hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${u} mx-auto`,
                children: c.map((e, n) => (0, t.jsx)(i.Card, {
                    className: "flex flex-col items-center text-center bg-card rounded-xl card-shadow p-4 sm:p-6 h-full",
                    children: (0, t.jsxs)(i.CardContent, {
                        className: "flex flex-col items-center p-0 flex-1",
                        children: [(0, t.jsx)("div", {
                            className: "w-16 sm:w-20 h-16 sm:h-20 bg-card rounded-xl card-shadow dark:shadow-none flex items-center justify-center mb-3 sm:mb-4",
                            children: (0, t.jsx)("div", {
                                className: "w-10 sm:w-16 h-10 sm:h-16 bg-card rounded-xl card-shadow dark:shadow-none flex items-center justify-center",
                                children: (0, t.jsx)(r.default, {
                                    src: (0, s.normalizeImage)(e.icon) || "",
                                    alt: e.title,
                                    width: 40,
                                    height: 40,
                                    className: "object-contain dark:invert",
                                    loading: "lazy"
                                })
                            })
                        }), (0, t.jsx)("h3", {
                            className: "font-semibold text-base sm:text-xl mb-2 ",
                            children: e.title
                        }), (0, t.jsx)("p", {
                            className: "text-muted-foreground [&_a]:text-blue-600  [&_a:hover]:underline   dark:text-white/80 text-xs sm:text-base text-center flex-1",
                            dangerouslySetInnerHTML: {
                                __html: (0, o.decode)(e.description || "")
                            }
                        })]
                    })
                }, n))
            }), (0, t.jsxs)("div", {
                className: "sm:hidden relative max-w-sm mx-auto",
                children: [(0, t.jsxs)("div", {
                    className: "absolute right-0 -top-12 flex gap-2 z-10",
                    children: [(0, t.jsx)("button", {
                        onClick: y,
                        "aria-label": "next",
                        className: "bg-card rounded-full w-10 h-10 flex items-center justify-center shadow",
                        children: (0, t.jsx)(a.IoIosArrowBack, {
                            size: 20
                        })
                    }), (0, t.jsx)("button", {
                        onClick: b,
                        "aria-label": "prev",
                        className: "bg-card rounded-full w-10 h-10 flex items-center justify-center shadow",
                        children: (0, t.jsx)(a.IoIosArrowForward, {
                            size: 20
                        })
                    })]
                }), (0, t.jsx)("div", {
                    ref: g,
                    className: "flex flex-col gap-4 mt-20 select-none cursor-grab active:cursor-grabbing",
                    onTouchStart: e => {
                        h(null), p(e.targetTouches[0].clientY)
                    },
                    onTouchMove: e => {
                        h(e.targetTouches[0].clientY)
                    },
                    onTouchEnd: () => {
                        if (!m || !x) return;
                        let e = m - x;
                        e > 50 ? b() : e < -50 && y()
                    },
                    onMouseDown: e => {
                        h(null), p(e.clientY)
                    },
                    onMouseMove: e => {
                        null !== m && h(e.clientY)
                    },
                    onMouseUp: w,
                    onMouseLeave: w,
                    children: (() => {
                        let e = 2 * d;
                        return c.slice(e, e + 2)
                    })().map((e, n) => (0, t.jsx)(i.Card, {
                        className: "flex flex-col items-center text-center p-6 h-auto min-h-[200px] transition-transform duration-200",
                        children: (0, t.jsxs)(i.CardContent, {
                            className: "flex flex-col items-center justify-center p-0 w-full",
                            children: [(0, t.jsx)("div", {
                                className: "w-12 h-12 bg-card dark:bg-white dark:shadow-none rounded-xl card-shadow flex items-center justify-center mb-3",
                                children: (0, t.jsx)(r.default, {
                                    src: (0, s.normalizeImage)(e.icon) || "",
                                    alt: e.title || "Industry",
                                    width: 35,
                                    height: 35,
                                    className: "object-contain",
                                    loading: "lazy"
                                })
                            }), (0, t.jsx)("h3", {
                                className: "font-semibold text-lg mb-2 line-clamp-2",
                                children: e.title
                            }), (0, t.jsx)("p", {
                                className: "text-muted-foreground dark:text-white/80 text-base text-center  [&_a]:text-blue-600  [&_a:hover]:underline ",
                                dangerouslySetInnerHTML: {
                                    __html: (0, o.decode)(e.description || "")
                                }
                            })]
                        })
                    }, `${d}-${n}`))
                }), (0, t.jsx)("div", {
                    className: "flex justify-center mt-4 gap-2",
                    children: Array.from({
                        length: Math.ceil(c.length / 2)
                    }).map((e, n) => (0, t.jsx)("button", {
                        onClick: () => f(n),
                        "aria-label": `Go to slide ${n+1}`,
                        className: "flex items-center justify-center p-3 rounded-full",
                        children: (0, t.jsx)("span", {
                            className: `w-2 h-2 rounded-full ${n===d?"bg-blue-600":"bg-gray-300"}`
                        })
                    }, n))
                })]
            })]
        })
    }
}, 56329, e => {
    "use strict";
    e.s(["default", () => o]);
    var t = e.i(43476),
        n = e.i(57688),
        r = e.i(70065),
        i = e.i(47176),
        a = e.i(71645);
    let s = [{
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
                    if (!o || !e.current) return;
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
                    if (!o || !e.current) return;
                    let n = t.touches[0].pageX - e.current.offsetLeft;
                    e.current.scrollLeft = d - (n - c) * 1.5
                },
                onTouchEnd: () => {
                    l(!1)
                },
                children: (0, t.jsx)("div", {
                    className: "flex gap-8 w-max py-3 px-4 select-none",
                    children: s.map((e, a) => (0, t.jsx)(r.Card, {
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
}, 70065, e => {
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
}, 37332, e => {
    "use strict";
    e.s(["default", () => a]);
    var t = e.i(43476),
        n = e.i(11583),
        r = e.i(71645),
        i = e.i(10936);

    function a({
        title: e = "Frequently Asked Questions",
        faqs: a = [],
        twoColumn: s = !0,
        widthWrapper: o = "max-w-7xl"
    }) {
        let [l, c] = (0, r.useState)(null), u = s ? a.slice(0, Math.ceil(a.length / 2)) : a, d = s ? a.slice(Math.ceil(a.length / 2)) : [], f = (e, r) => (0, t.jsx)("div", {
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
                            let n = `${t}-${e}`;
                            c(l === n ? null : n)
                        })(a, r),
                        children: [(0, t.jsx)("h3", {
                            className: "font-normal text-base md:font-medium md:text-base",
                            children: e.question
                        }), (0, t.jsx)("div", {
                            className: "flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center rounded-md",
                            children: (0, t.jsx)("div", {
                                className: "w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none rounded-md ",
                                children: (0, t.jsx)(i.IoMdArrowDropdown, {
                                    className: `w-6 h-6 transition-transform duration-300 ${l===`${r}-${a}`?"rotate-180":""}`
                                })
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: `accordion-content px-6 overflow-hidden transition-all duration-300 ${l===`${r}-${a}`?"max-h-96 py-4":"max-h-0"}`,
                        children: (0, t.jsx)("div", {
                            className: "text-muted-foreground  [&_a]:text-blue-600 [&_ul]:list-disc  [&_ul]:ml-5  [&_ol]:list-decimal  [&_ol]:ml-5 [&_a:hover]:underline ",
                            dangerouslySetInnerHTML: {
                                __html: (0, n.decode)(e.answer) || ""
                            }
                        })
                    })]
                })
            }, `${r}-${a}`))
        });
        return (0, t.jsx)("section", {
            className: "w-full lg:py-16 py-16 px-4",
            children: (0, t.jsxs)("div", {
                className: `${o} mx-auto`,
                children: [(0, t.jsx)("h2", {
                    className: "text-center gradient-text font-medium text-xl sm:text-4xl lg:mb-12 mb-6",
                    children: e
                }), (0, t.jsxs)("div", {
                    className: `grid lg:gap-6 gap-4 ${s?"grid-cols-1 lg:grid-cols-2":"grid-cols-1"}`,
                    children: [f(u, "left"), s && f(d, "right")]
                })]
            })
        })
    }
}, 11845, e => {
    "use strict";
    e.s(["default", () => i]);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(10936);
    let i = ({
        title: e,
        subtitle: i,
        items: a,
        widthWrapper: s = "max-w-7xl"
    }) => {
        let [o, l] = (0, n.useState)(0);
        return (0, t.jsx)("section", {
            className: "w-full py-6 sm:py-16 px-4",
            children: (0, t.jsxs)("div", {
                className: `${s} mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-10`,
                children: [(e || i) && (0, t.jsxs)("div", {
                    className: "mb-8 lg:mb-0 lg:w-5/12 space-y-4 sm:space-y-6",
                    children: [e && (0, t.jsx)("h2", {
                        className: "text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug",
                        children: e
                    }), i && (0, t.jsx)("p", {
                        className: "text-sm sm:text-base text-foreground/90 max-w-md [&_a]:text-blue-600",
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    })]
                }), (0, t.jsx)("div", {
                    className: "lg:w-7/12 space-y-4",
                    children: a.map((e, n) => {
                        let i = o === n;
                        return (0, t.jsxs)("div", {
                            className: "bg-card rounded-xl card-shadow overflow-hidden transition-all duration-300",
                            children: [(0, t.jsxs)("button", {
                                onClick: () => (e => {
                                    l(o === e ? null : e)
                                })(n),
                                className: "w-full flex justify-between items-center pt-3 pb-2 px-4 sm:px-8 focus:outline-none",
                                children: [(0, t.jsx)("h3", {
                                    className: "text-base text-left sm:text-lg font-semibold",
                                    children: e.title
                                }), (0, t.jsx)("div", {
                                    className: `w-9 h-9 ${i?"":"bg-card card-shadow"} flex items-center justify-center`,
                                    children: !i && (0, t.jsx)("div", {
                                        className: "w-7 h-7 flex items-center justify-center bg-card card-shadow",
                                        children: (0, t.jsx)(r.IoMdArrowDropdown, {
                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                        })
                                    })
                                })]
                            }), i && (0, t.jsx)("div", {
                                className: "p-4 sm:px-8 sm:pb-4 sm:pt-0 pt-0 text-sm sm:text-base  [&_a]:text-blue-600",
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            })]
                        }, n)
                    })
                })]
            })
        })
    }
}, 31013, e => {
    e.v(t => Promise.all(["static/chunks/de5532acdd1423b2.js"].map(t => e.l(t))).then(() => t(81370)))
}]);