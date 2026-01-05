(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 16015, (e, t, n) => {}, 98547, (e, t, n) => {
    var s = e.i(18392);
    e.r(16015);
    var r = e.r(71645),
        i = function(e) {
            return e && "object" == typeof e && "default" in e ? e : {
                default: e
            }
        }(r),
        o = void 0 !== s.default && s.default.env && !0,
        a = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        l = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    n = t.name,
                    s = void 0 === n ? "stylesheet" : n,
                    r = t.optimizeForSpeed,
                    i = void 0 === r ? o : r;
                u(a(s), "`name` must be a string"), this._name = s, this._deletedRulePlaceholder = "#" + s + "-deleted-rule____{}", u("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = l ? l.getAttribute("content") : null
            }
            var t, n = e.prototype;
            return n.setOptimizeForSpeed = function(e) {
                    u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, n.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, n.inject = function() {
                    var e = this;
                    if (u(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, n) {
                            return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), n
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, n.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, n.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, n.insertRule = function(e, t) {
                    if (u(a(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var n = this.getSheet();
                        "number" != typeof t && (t = n.cssRules.length);
                        try {
                            n.insertRule(e, t)
                        } catch (t) {
                            return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var s = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, s))
                    }
                    return this._rulesCount++
                }, n.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var n = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                        n.deleteRule(e);
                        try {
                            n.insertRule(t, e)
                        } catch (s) {
                            o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var s = this._tags[e];
                        u(s, "old rule at index `" + e + "` not found"), s.textContent = t
                    }
                    return e
                }, n.deleteRule = function(e) {
                    if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        u(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, n.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, n.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, n) {
                        return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, n.makeStyleTag = function(e, t, n) {
                    t && u(a(t), "makeStyleTag accepts only strings as second parameter");
                    var s = document.createElement("style");
                    this._nonce && s.setAttribute("nonce", this._nonce), s.type = "text/css", s.setAttribute("data-" + e, ""), t && s.appendChild(document.createTextNode(t));
                    var r = document.head || document.getElementsByTagName("head")[0];
                    return n ? r.insertBefore(s, n) : r.appendChild(s), s
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var s = t[n];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }(e.prototype, t), e
        }();

    function u(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var c = function(e) {
            for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
            return t >>> 0
        },
        d = {};

    function h(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
            s = e + n;
        return d[s] || (d[s] = "jsx-" + c(e + "-" + n)), d[s]
    }

    function f(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var n = e + t;
        return d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n]
    }
    var p = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    n = t.styleSheet,
                    s = void 0 === n ? null : n,
                    r = t.optimizeForSpeed,
                    i = void 0 !== r && r;
                this._sheet = s || new l({
                    name: "styled-jsx",
                    optimizeForSpeed: i
                }), this._sheet.inject(), s && "boolean" == typeof i && (this._sheet.setOptimizeForSpeed(i), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var n = this.getIdAndRules(e),
                    s = n.styleId,
                    r = n.rules;
                if (s in this._instancesCounts) {
                    this._instancesCounts[s] += 1;
                    return
                }
                var i = r.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[s] = i, this._instancesCounts[s] = 1
            }, t.remove = function(e) {
                var t = this,
                    n = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                    var s = this._fromServer && this._fromServer[n];
                    s ? (s.parentNode.removeChild(s), delete this._fromServer[n]) : (this._indices[n].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[n]), delete this._instancesCounts[n]
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
                    n = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return n[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, n;
                return t = this.cssRules(), void 0 === (n = e) && (n = {}), t.map(function(e) {
                    var t = e[0],
                        s = e[1];
                    return i.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: n.nonce ? n.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: s
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    n = e.dynamic,
                    s = e.id;
                if (n) {
                    var r = h(s, n);
                    return {
                        styleId: r,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return f(r, e)
                        }) : [f(r, t)]
                    }
                }
                return {
                    styleId: h(s),
                    rules: Array.isArray(t) ? t : [t]
                }
            }, t.selectFromServer = function() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }, e
        }(),
        m = r.createContext(null);

    function v() {
        return new p
    }

    function y() {
        return r.useContext(m)
    }
    m.displayName = "StyleSheetContext";
    var b = i.default.useInsertionEffect || i.default.useLayoutEffect,
        x = "undefined" != typeof window ? v() : void 0;

    function _(e) {
        var t = x || y();
        return t && ("undefined" == typeof window ? t.add(e) : b(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    _.dynamic = function(e) {
        return e.map(function(e) {
            return h(e[0], e[1])
        }).join(" ")
    }, n.StyleRegistry = function(e) {
        var t = e.registry,
            n = e.children,
            s = r.useContext(m),
            o = r.useState(function() {
                return s || t || v()
            })[0];
        return i.default.createElement(m.Provider, {
            value: o
        }, n)
    }, n.createStyleRegistry = v, n.style = _, n.useStyleRegistry = y
}, 37902, (e, t, n) => {
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
}, 41208, e => {
    "use strict";
    e.s(["default", () => o], 41208);
    var t = e.i(43476),
        n = e.i(37902),
        s = e.i(72520);
    let r = (0, e.i(75254).default)("house", [
        ["path", {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }],
        ["path", {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "r6nss1"
        }]
    ]);
    var i = e.i(22016);

    function o() {
        return (0, t.jsxs)("div", {
            className: "jsx-9b113075951eca50 relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex flex-col items-center justify-center",
            children: [(0, t.jsxs)("div", {
                className: "jsx-9b113075951eca50 absolute inset-0 overflow-hidden pointer-events-none",
                children: [(0, t.jsx)("div", {
                    className: "jsx-9b113075951eca50 absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"
                }), (0, t.jsx)("div", {
                    style: {
                        animationDelay: "2s"
                    },
                    className: "jsx-9b113075951eca50 absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"
                })]
            }), (0, t.jsx)("div", {
                className: "jsx-9b113075951eca50 absolute inset-0 bg-grid opacity-5 pointer-events-none"
            }), (0, t.jsxs)("div", {
                className: "jsx-9b113075951eca50 relative z-10 px-4 text-center max-w-4xl mx-auto",
                children: [(0, t.jsx)("div", {
                    className: "jsx-9b113075951eca50 mb-6",
                    children: (0, t.jsx)("div", {
                        className: "jsx-9b113075951eca50 text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-pulse",
                        children: "404"
                    })
                }), (0, t.jsx)("h1", {
                    className: "jsx-9b113075951eca50 text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight",
                    children: "Block Not Found"
                }), (0, t.jsx)("p", {
                    className: "jsx-9b113075951eca50 text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light",
                    children: "The page you are searching for has left the blockchain. It might have been moved to another chain, or perhaps this transaction failed. Let's get you back on track."
                }), (0, t.jsx)("div", {
                    className: "jsx-9b113075951eca50 mb-10 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent max-w-xs mx-auto opacity-50"
                }), (0, t.jsxs)("div", {
                    className: "jsx-9b113075951eca50 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12",
                    children: [(0, t.jsx)(i.default, {
                        href: "/",
                        children: (0, t.jsxs)("button", {
                            className: "jsx-9b113075951eca50 px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/50",
                            children: [(0, t.jsx)(r, {
                                size: 20
                            }), "Back to Home", (0, t.jsx)(s.ArrowRight, {
                                size: 20,
                                className: "group-hover:translate-x-1"
                            })]
                        })
                    }), (0, t.jsx)("button", {
                        onClick: () => window.history.back(),
                        className: "jsx-9b113075951eca50 px-8 py-3 font-semibold text-blue-300 border border-blue-400/50 rounded-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300",
                        children: "Go Back"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "jsx-9b113075951eca50 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-sm text-slate-400",
                    children: [(0, t.jsx)("div", {
                        className: "jsx-9b113075951eca50 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                    }), (0, t.jsx)("span", {
                        className: "jsx-9b113075951eca50",
                        children: "Error 404 · Page Not Found"
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: "jsx-9b113075951eca50 relative z-10 mt-16 text-center text-slate-500 text-sm",
                children: (0, t.jsxs)("p", {
                    className: "jsx-9b113075951eca50",
                    children: ["Need help?", " ", (0, t.jsx)(i.default, {
                        href: "/contact",
                        className: "text-blue-400 hover:text-blue-300 transition-colors",
                        children: "Contact Support"
                    })]
                })
            }), (0, t.jsx)(n.default, {
                id: "9b113075951eca50",
                children: "@keyframes pulse-glow{0%,to{opacity:.1}50%{opacity:.15}}@keyframes bounce-light{0%,to{transform:translateY(0)}50%{transform:translateY(-8px)}}.animate-pulse.jsx-9b113075951eca50{animation:3s cubic-bezier(.4,0,.6,1) infinite pulse-glow}.animate-bounce.jsx-9b113075951eca50{animation:2s ease-in-out infinite bounce-light}.bg-grid.jsx-9b113075951eca50{background-image:linear-gradient(#0000,#0000 23%,#3b82f608 24% 25%,#0000 26% 73%,#3b82f608 74% 75%,#0000 76%),linear-gradient(90deg,#0000 24%,#3b82f608 25% 26%,#0000 27% 74%,#3b82f608 75% 76%,#0000 77%,#0000);background-size:60px 60px}"
            })]
        })
    }
}]);