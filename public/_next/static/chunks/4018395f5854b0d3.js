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
            return n
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
        n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
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
            return b
        },
        handleClientScriptLoad: function() {
            return p
        },
        initScriptLoader: function() {
            return h
        }
    });
    let a = e.r(55682),
        n = e.r(90809),
        s = e.r(43476),
        i = a._(e.r(74080)),
        l = n._(e.r(71645)),
        c = e.r(42732),
        o = e.r(22737),
        d = e.r(8341),
        u = new Map,
        f = new Set,
        m = e => {
            let {
                src: t,
                id: r,
                onLoad: a = () => {},
                onReady: n = null,
                dangerouslySetInnerHTML: s,
                children: l = "",
                strategy: c = "afterInteractive",
                onError: d,
                stylesheets: m
            } = e, p = r || t;
            if (p && f.has(p)) return;
            if (u.has(t)) {
                f.add(p), u.get(t).then(a, d);
                return
            }
            let h = () => {
                    n && n(), f.add(p)
                },
                x = document.createElement("script"),
                b = new Promise((e, t) => {
                    x.addEventListener("load", function(t) {
                        e(), a && a.call(this, t), h()
                    }), x.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    d && d(e)
                });
            s ? (x.innerHTML = s.__html || "", h()) : l ? (x.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "", h()) : t && (x.src = t, u.set(t, b)), (0, o.setAttributesFromProps)(x, e), "worker" === c && x.setAttribute("type", "text/partytown"), x.setAttribute("data-nscript", c), m && (e => {
                if (i.default.preinit) return e.forEach(e => {
                    i.default.preinit(e, {
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
            })(m), document.body.appendChild(x)
        };

    function p(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, d.requestIdleCallback)(() => m(e))
        }) : m(e)
    }

    function h(e) {
        e.forEach(p), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            f.add(t)
        })
    }

    function x(e) {
        let {
            id: t,
            src: r = "",
            onLoad: a = () => {},
            onReady: n = null,
            strategy: o = "afterInteractive",
            onError: u,
            stylesheets: p,
            ...h
        } = e, {
            updateScripts: x,
            scripts: b,
            getIsSsr: g,
            appDir: y,
            nonce: j
        } = (0, l.useContext)(c.HeadManagerContext);
        j = h.nonce || j;
        let w = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
            let e = t || r;
            w.current || (n && e && f.has(e) && n(), w.current = !0)
        }, [n, t, r]);
        let v = (0, l.useRef)(!1);
        if ((0, l.useEffect)(() => {
                if (!v.current) {
                    if ("afterInteractive" === o) m(e);
                    else "lazyOnload" === o && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                        (0, d.requestIdleCallback)(() => m(e))
                    }));
                    v.current = !0
                }
            }, [e, o]), ("beforeInteractive" === o || "worker" === o) && (x ? (b[o] = (b[o] || []).concat([{
                id: t,
                src: r,
                onLoad: a,
                onReady: n,
                onError: u,
                ...h,
                nonce: j
            }]), x(b)) : g && g() ? f.add(t || r) : g && !g() && m({ ...e,
                nonce: j
            })), y) {
            if (p && p.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === o)
                if (!r) return h.dangerouslySetInnerHTML && (h.children = h.dangerouslySetInnerHTML.__html, delete h.dangerouslySetInnerHTML), (0, s.jsx)("script", {
                    nonce: j,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...h,
                            id: t
                        }]) + ")"
                    }
                });
                else return i.default.preload(r, h.integrity ? {
                    as: "script",
                    integrity: h.integrity,
                    nonce: j,
                    crossOrigin: h.crossOrigin
                } : {
                    as: "script",
                    nonce: j,
                    crossOrigin: h.crossOrigin
                }), (0, s.jsx)("script", {
                    nonce: j,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, { ...h,
                            id: t
                        }]) + ")"
                    }
                });
            "afterInteractive" === o && r && i.default.preload(r, h.integrity ? {
                as: "script",
                integrity: h.integrity,
                nonce: j,
                crossOrigin: h.crossOrigin
            } : {
                as: "script",
                nonce: j,
                crossOrigin: h.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(x, "__nextScript", {
        value: !0
    });
    let b = x;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 10160, e => {
    "use strict";
    e.s(["default", () => s]);
    var t = e.i(43476),
        r = e.i(57688),
        a = e.i(71645),
        n = e.i(49377);

    function s({
        slug: e
    }) {
        let [s, i] = (0, a.useState)({}), [l, c] = (0, a.useState)(!1), [o, d] = (0, a.useState)(!1), [u, f] = (0, a.useState)(0), [m, p] = (0, a.useState)(0), h = () => {
            f(Math.floor(10 * Math.random())), p(Math.floor(10 * Math.random()))
        };
        (0, a.useEffect)(() => {
            h()
        }, []), (0, a.useEffect)(() => {
            if (o) {
                let e = setTimeout(() => {
                    d(!1)
                }, 3e3);
                return () => clearTimeout(e)
            }
        }, [o]);
        let x = async t => {
            t.preventDefault();
            let r = t.currentTarget,
                a = (e => {
                    let t = new FormData(e),
                        r = {};
                    t.get("Name") ? .toString().trim() || (r.Name = "Name is required");
                    let a = t.get("email") ? .toString().trim();
                    a ? /^\S+@\S+\.\S+$/.test(a) || (r.email = "Invalid Email Format") : r.email = "Email is required";
                    let n = t.get("phone") ? .toString().trim();
                    n ? /^[\+]?[0-9]{7,15}$/.test(n) || (r.phone = "Invalid Phone Number") : r.phone = "Phone is required", t.get("message") ? .toString().trim() || (r.message = "Message is required");
                    let s = t.get("captcha") ? .toString().trim(),
                        i = String(u + m);
                    return s ? s !== i && (r.captcha = "Captcha incorrect") : r.captcha = "Captcha is required", r
                })(r);
            if (i(a), Object.keys(a).length > 0) {
                a.captcha && h();
                return
            }
            c(!0);
            let n = new FormData(r);
            n.append("slug", e || "");
            try {
                let e = await fetch("/api/submit-form", {
                        method: "POST",
                        body: n
                    }),
                    t = await e.json();
                if (!e.ok) throw Error(t.message || "Failed to submit");
                d(!0), r.reset(), i({}), h()
            } catch (e) {
                console.error(e), i({
                    submit: "Something went wrong. Please try again."
                }), h()
            } finally {
                c(!1)
            }
        };
        return (0, t.jsx)("aside", {
            className: "lg:col-span-1 order-3 rounded-[5px] sticky lg:top-[100px] h-fit",
            children: (0, t.jsx)("div", {
                className: "w-full max-w-sm mx-auto",
                children: (0, t.jsxs)("div", {
                    className: "bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg",
                    children: [(0, t.jsx)("div", {
                        className: "relative h-40 md:h-48",
                        children: (0, t.jsx)(r.default, {
                            src: "/bdcontact.webp",
                            alt: "Contact",
                            fill: !0,
                            className: "object-cover"
                        })
                    }), (0, t.jsxs)("div", {
                        className: "p-5",
                        children: [(0, t.jsx)("h3", {
                            className: "text-xl font-medium mb-4",
                            children: "Contact us!"
                        }), (0, t.jsxs)("form", {
                            onSubmit: x,
                            className: "space-y-4",
                            children: [(0, t.jsx)("input", {
                                type: "hidden",
                                name: "form_name",
                                value: "blog_contact_form"
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("input", {
                                    type: "text",
                                    name: "Name",
                                    placeholder: "Name",
                                    className: "w-full bg-gray-900 border-b border-gray-600 focus:border-[#0092ff] py-3 text-white"
                                }), s.Name && (0, t.jsx)("p", {
                                    className: "text-red-400 text-xs mt-1",
                                    children: s.Name
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Email Address*",
                                    className: "w-full bg-gray-900 border-b border-gray-600 focus:border-[#0092ff] py-3 text-white"
                                }), s.email && (0, t.jsx)("p", {
                                    className: "text-red-400 text-xs mt-1",
                                    children: s.email
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("input", {
                                    type: "tel",
                                    name: "phone",
                                    placeholder: "Phone Number*",
                                    className: "w-full bg-gray-900 border-b border-gray-600 focus:border-[#0092ff] py-3 text-white"
                                }), s.phone && (0, t.jsx)("p", {
                                    className: "text-red-400 text-xs mt-1",
                                    children: s.phone
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("textarea", {
                                    name: "message",
                                    rows: 3,
                                    placeholder: "Your Message",
                                    className: "w-full bg-gray-900 border-b border-gray-600 focus:border-[#0092ff] py-3 text-white resize-none"
                                }), s.message && (0, t.jsx)("p", {
                                    className: "text-red-400 text-xs mt-1",
                                    children: s.message
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex items-center justify-between bg-gray-800 px-3 py-2 rounded-md",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-2 text-white",
                                    children: [(0, t.jsx)("span", {
                                        children: u
                                    }), (0, t.jsx)("span", {
                                        children: "+"
                                    }), (0, t.jsx)("span", {
                                        children: m
                                    }), (0, t.jsx)("span", {
                                        children: "="
                                    })]
                                }), (0, t.jsx)("input", {
                                    type: "text",
                                    name: "captcha",
                                    className: "w-16 bg-transparent border-b text-center focus:border-[#0092ff]"
                                }), (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: h,
                                    className: "text-white text-xl",
                                    children: (0, t.jsx)(n.RxReload, {})
                                })]
                            }), s.captcha && (0, t.jsx)("p", {
                                className: "text-red-400 text-xs",
                                children: s.captcha
                            }), (0, t.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, t.jsx)("button", {
                                    type: "submit",
                                    className: "w-full bg-[#0092ff] hover:bg-blue-700 py-3 rounded-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-colors",
                                    disabled: l,
                                    children: l ? "Submitting..." : "Get a Quote"
                                }), o && (0, t.jsxs)("div", {
                                    className: "bg-green-900/30 border border-green-500 text-green-300 p-3 rounded-lg text-center animate-fadeIn",
                                    children: [(0, t.jsx)("p", {
                                        className: "font-medium",
                                        children: "Form submitted successfully!"
                                    }), (0, t.jsx)("p", {
                                        className: "text-sm mt-1",
                                        children: "We'll contact you soon."
                                    })]
                                }), s.submit && (0, t.jsx)("div", {
                                    className: "bg-red-900/30 border border-red-500 text-red-300 p-3 rounded-lg text-center",
                                    children: (0, t.jsx)("p", {
                                        children: s.submit
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            })
        })
    }
}, 87844, e => {
    "use strict";
    e.s(["default", () => n], 87844);
    var t = e.i(43476),
        r = e.i(71645);
    let a = (0, e.i(75254).default)("copy", [
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }]
    ]);

    function n({
        shareUrl: e
    }) {
        let [n, s] = (0, r.useState)(!1);
        return (0, t.jsxs)("div", {
            className: "relative flex items-center justify-center",
            children: [n && (0, t.jsx)("span", {
                className: "absolute -top-6 text-xs bg-black text-white px-2 py-1 rounded-md opacity-90",
                children: "Copied!"
            }), (0, t.jsx)("span", {
                onClick: () => {
                    navigator.clipboard.writeText(e), s(!0), setTimeout(() => s(!1), 1500)
                },
                className: "w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer",
                children: (0, t.jsx)(a, {
                    className: " text-white",
                    size: 16
                })
            })]
        })
    }
}]);