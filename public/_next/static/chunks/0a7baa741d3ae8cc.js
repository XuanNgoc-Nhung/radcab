(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 8341, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), ! function(e, t) {
        for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }(r, {
        cancelIdleCallback: function() {
            return i
        },
        requestIdleCallback: function() {
            return n
        }
    });
    let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
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
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 79520, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), ! function(e, t) {
        for (var r in t) Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }(r, {
        default: function() {
            return m
        },
        handleClientScriptLoad: function() {
            return p
        },
        initScriptLoader: function() {
            return y
        }
    });
    let n = e.r(55682),
        i = e.r(90809),
        s = e.r(43476),
        o = n._(e.r(74080)),
        a = i._(e.r(71645)),
        l = e.r(42732),
        u = e.r(22737),
        d = e.r(8341),
        c = new Map,
        f = new Set,
        h = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: i = null,
                dangerouslySetInnerHTML: s,
                children: a = "",
                strategy: l = "afterInteractive",
                onError: d,
                stylesheets: h
            } = e, p = r || t;
            if (p && f.has(p)) return;
            if (c.has(t)) {
                f.add(p), c.get(t).then(n, d);
                return
            }
            let y = () => {
                    i && i(), f.add(p)
                },
                _ = document.createElement("script"),
                m = new Promise((e, t) => {
                    _.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), y()
                    }), _.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    d && d(e)
                });
            s ? (_.innerHTML = s.__html || "", y()) : a ? (_.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", y()) : t && (_.src = t, c.set(t, m)), (0, u.setAttributesFromProps)(_, e), "worker" === l && _.setAttribute("type", "text/partytown"), _.setAttribute("data-nscript", l), h && (e => {
                if (o.default.preinit) return e.forEach(e => {
                    o.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("undefined" != typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(h), document.body.appendChild(_)
        };

    function p(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, d.requestIdleCallback)(() => h(e))
        }) : h(e)
    }

    function y(e) {
        e.forEach(p), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            f.add(t)
        })
    }

    function _(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: i = null,
            strategy: u = "afterInteractive",
            onError: c,
            stylesheets: p,
            ...y
        } = e, {
            updateScripts: _,
            scripts: m,
            getIsSsr: v,
            appDir: S,
            nonce: g
        } = (0, a.useContext)(l.HeadManagerContext);
        g = y.nonce || g;
        let b = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
            let e = t || r;
            b.current || (i && e && f.has(e) && i(), b.current = !0)
        }, [i, t, r]);
        let w = (0, a.useRef)(!1);
        if ((0, a.useEffect)(() => {
                if (!w.current) {
                    if ("afterInteractive" === u) h(e);
                    else "lazyOnload" === u && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                        (0, d.requestIdleCallback)(() => h(e))
                    }));
                    w.current = !0
                }
            }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (_ ? (m[u] = (m[u] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: i,
                onError: c,
                ...y,
                nonce: g
            }]), _(m)) : v && v() ? f.add(t || r) : v && !v() && h({ ...e,
                nonce: g
            })), S) {
            if (p && p.forEach(e => {
                    o.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === u)
                if (!r) return y.dangerouslySetInnerHTML && (y.children = y.dangerouslySetInnerHTML.__html, delete y.dangerouslySetInnerHTML), (0, s.jsx)("script", {
                    nonce: g,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...y,
                            id: t
                        }]) + ")"
                    }
                });
                else return o.default.preload(r, y.integrity ? {
                    as: "script",
                    integrity: y.integrity,
                    nonce: g,
                    crossOrigin: y.crossOrigin
                } : {
                    as: "script",
                    nonce: g,
                    crossOrigin: y.crossOrigin
                }), (0, s.jsx)("script", {
                    nonce: g,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, { ...y,
                            id: t
                        }]) + ")"
                    }
                });
            "afterInteractive" === u && r && o.default.preload(r, y.integrity ? {
                as: "script",
                integrity: y.integrity,
                nonce: g,
                crossOrigin: y.crossOrigin
            } : {
                as: "script",
                nonce: g,
                crossOrigin: y.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(_, "__nextScript", {
        value: !0
    });
    let m = _;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 70065, e => {
    "use strict";
    e.s(["Card", () => i, "CardContent", () => s]);
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(47163);
    let i = r.forwardRef(({
        className: e,
        ...r
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, n.cn)("rounded-xl bg-card text-card-foreground card-shadow", e),
        ...r
    }));
    i.displayName = "Card", r.forwardRef(({
        className: e,
        ...r
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, n.cn)("flex flex-col space-y-1.5 p-6", e),
        ...r
    })).displayName = "CardHeader", r.forwardRef(({
        className: e,
        ...r
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, n.cn)("font-semibold leading-none tracking-tight", e),
        ...r
    })).displayName = "CardTitle", r.forwardRef(({
        className: e,
        ...r
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, n.cn)("text-sm text-muted-foreground", e),
        ...r
    })).displayName = "CardDescription";
    let s = r.forwardRef(({
        className: e,
        ...r
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, n.cn)("p-0 pt-0", e),
        ...r
    }));
    s.displayName = "CardContent", r.forwardRef(({
        className: e,
        ...r
    }, i) => (0, t.jsx)("div", {
        ref: i,
        className: (0, n.cn)("flex items-center p-6 pt-0", e),
        ...r
    })).displayName = "CardFooter"
}, 31343, e => {
    "use strict";
    e.s(["Play", () => t], 31343);
    let t = (0, e.i(75254).default)("play", [
        ["path", {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }]
    ])
}, 16015, (e, t, r) => {}, 98547, (e, t, r) => {
    var n = e.i(18392);
    e.r(16015);
    var i = e.r(71645),
        s = function(e) {
            return e && "object" == typeof e && "default" in e ? e : {
                default: e
            }
        }(i),
        o = void 0 !== n.default && n.default.env && !0,
        a = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        l = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.name,
                    n = void 0 === r ? "stylesheet" : r,
                    i = t.optimizeForSpeed,
                    s = void 0 === i ? o : i;
                u(a(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", u("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = s, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = l ? l.getAttribute("content") : null
            }
            var t, r = e.prototype;
            return r.setOptimizeForSpeed = function(e) {
                    u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, r.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, r.inject = function() {
                    var e = this;
                    if (u(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, r) {
                            return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), r
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, r.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, r.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, r.insertRule = function(e, t) {
                    if (u(a(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var r = this.getSheet();
                        "number" != typeof t && (t = r.cssRules.length);
                        try {
                            r.insertRule(e, t)
                        } catch (t) {
                            return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var n = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, n))
                    }
                    return this._rulesCount++
                }, r.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                        r.deleteRule(e);
                        try {
                            r.insertRule(t, e)
                        } catch (n) {
                            o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var n = this._tags[e];
                        u(n, "old rule at index `" + e + "` not found"), n.textContent = t
                    }
                    return e
                }, r.deleteRule = function(e) {
                    if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        u(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, r.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, r.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                        return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, r.makeStyleTag = function(e, t, r) {
                    t && u(a(t), "makeStyleTag accepts only strings as second parameter");
                    var n = document.createElement("style");
                    this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
                    var i = document.head || document.getElementsByTagName("head")[0];
                    return r ? i.insertBefore(n, r) : i.appendChild(n), n
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(e.prototype, t), e
        }();

    function u(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var d = function(e) {
            for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
            return t >>> 0
        },
        c = {};

    function f(e, t) {
        if (!t) return "jsx-" + e;
        var r = String(t),
            n = e + r;
        return c[n] || (c[n] = "jsx-" + d(e + "-" + r)), c[n]
    }

    function h(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return c[r] || (c[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), c[r]
    }
    var p = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.styleSheet,
                    n = void 0 === r ? null : r,
                    i = t.optimizeForSpeed,
                    s = void 0 !== i && i;
                this._sheet = n || new l({
                    name: "styled-jsx",
                    optimizeForSpeed: s
                }), this._sheet.inject(), n && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var r = this.getIdAndRules(e),
                    n = r.styleId,
                    i = r.rules;
                if (n in this._instancesCounts) {
                    this._instancesCounts[n] += 1;
                    return
                }
                var s = i.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[n] = s, this._instancesCounts[n] = 1
            }, t.remove = function(e) {
                var t = this,
                    r = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                    var n = this._fromServer && this._fromServer[r];
                    n ? (n.parentNode.removeChild(n), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[r]), delete this._instancesCounts[r]
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
                    r = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return r[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, r;
                return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                    var t = e[0],
                        n = e[1];
                    return s.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: r.nonce ? r.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    r = e.dynamic,
                    n = e.id;
                if (r) {
                    var i = f(n, r);
                    return {
                        styleId: i,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return h(i, e)
                        }) : [h(i, t)]
                    }
                }
                return {
                    styleId: f(n),
                    rules: Array.isArray(t) ? t : [t]
                }
            }, t.selectFromServer = function() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }, e
        }(),
        y = i.createContext(null);

    function _() {
        return new p
    }

    function m() {
        return i.useContext(y)
    }
    y.displayName = "StyleSheetContext";
    var v = s.default.useInsertionEffect || s.default.useLayoutEffect,
        S = "undefined" != typeof window ? _() : void 0;

    function g(e) {
        var t = S || m();
        return t && ("undefined" == typeof window ? t.add(e) : v(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    g.dynamic = function(e) {
        return e.map(function(e) {
            return f(e[0], e[1])
        }).join(" ")
    }, r.StyleRegistry = function(e) {
        var t = e.registry,
            r = e.children,
            n = i.useContext(y),
            o = i.useState(function() {
                return n || t || _()
            })[0];
        return s.default.createElement(y.Provider, {
            value: o
        }, r)
    }, r.createStyleRegistry = _, r.style = g, r.useStyleRegistry = m
}, 37902, (e, t, r) => {
    t.exports = e.r(98547).style
}, 72520, e => {
    "use strict";
    e.s(["ArrowRight", () => t], 72520);
    let t = (0, e.i(75254).default)("arrow-right", [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ])
}, 31013, e => {
    e.v(t => Promise.all(["static/chunks/43ab83464e956c84.js"].map(t => e.l(t))).then(() => t(81370)))
}]);