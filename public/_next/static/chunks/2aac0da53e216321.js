(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 18566, (e, t, l) => {
    t.exports = e.r(76562)
}, 32228, e => {
    "use strict";
    e.s(["default", () => j], 32228);
    var t = e.i(43476),
        l = e.i(71645),
        s = e.i(40141);

    function a(e) {
        return (0, s.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 512 512"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"
                },
                child: []
            }]
        })(e)
    }
    var r = e.i(67881),
        n = e.i(49377);

    function o({
        onClose: e,
        slug: s
    }) {
        let [a, o] = (0, l.useState)({}), [d, m] = (0, l.useState)(!1), [x, u] = (0, l.useState)(0), [h, p] = (0, l.useState)(0), f = (e = 1, t = 10) => {
            let l = Math.floor(Math.random() * (t - e + 1)) + e,
                s = Math.floor(Math.random() * (t - e + 1)) + e;
            u(l), p(s)
        };
        (0, l.useEffect)(() => {
            f()
        }, []);
        let b = async e => {
            e.preventDefault();
            let t = e.currentTarget,
                l = (e => {
                    let t = {},
                        l = new FormData(e);
                    l.get("name") ? .toString().trim() || (t.name = "Full name is required");
                    let s = l.get("email") ? .toString().trim();
                    s ? /^\S+@\S+\.\S+$/.test(s) || (t.email = "Invalid email") : t.email = "Email is required", l.get("phone") ? .toString().trim() || (t.phone = "Contact number is required"), l.get("project") ? .toString().trim() || (t.project = "Project details are required");
                    let a = l.get("captcha") ? .toString().trim() || "",
                        r = String(x + h);
                    return a ? a !== r && (t.captcha = "Captcha is incorrect") : t.captcha = "Captcha is required", t
                })(t);
            if (o(l), Object.keys(l).length > 0) {
                l.captcha && f();
                return
            }
            let a = new FormData(t);
            s && a.append("slug", s);
            try {
                let e = await fetch("/api/submit-form", {
                        method: "POST",
                        body: a
                    }),
                    l = await e.json();
                if (!e.ok) throw Error(l.message || "Failed to submit");
                m(!0), t.reset(), o({})
            } catch (e) {
                console.error(e), alert("Something went wrong. Please try again."), f()
            }
        };
        return d ? (0, t.jsxs)("div", {
            className: " text-black text-center",
            children: [(0, t.jsx)("h3", {
                className: "text-2xl font-semibold mb-3",
                children: "Thank You. We Have Received Your Email!"
            }), (0, t.jsx)("p", {
                className: "text-gray-700 mb-4",
                children: "Our business development team is looking into your requirements & will get back to you at the earliest"
            }), (0, t.jsx)(r.Button, {
                className: "",
                onClick: () => {
                    e && e()
                },
                children: "Explore Our Services"
            })]
        }) : (0, t.jsxs)("form", {
            className: "lg:space-y-6 space-y-3",
            onSubmit: b,
            children: [(0, t.jsx)("h3", {
                id: "modal-title",
                className: "sm:block hidden text-lg font-semibold text-center lg:text-left lg:text-2xl lg:font-semibold lg:mb-4",
                children: "Tell us what you need?"
            }), (0, t.jsx)("input", {
                type: "hidden",
                name: "form_name",
                value: "popup"
            }), s && (0, t.jsx)("input", {
                type: "hidden",
                name: "slug",
                value: s
            }), (0, t.jsxs)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [(0, t.jsx)(i, {
                    label: "Full Name",
                    name: "name",
                    type: "text",
                    error: a.name
                }), (0, t.jsx)(i, {
                    label: "E-Mail ID*",
                    name: "email",
                    type: "email",
                    error: a.email
                })]
            }), (0, t.jsx)(c, {
                label: "Describe Your Project/Idea",
                name: "project",
                error: a.project
            }), (0, t.jsx)("div", {
                className: "flex gap-4",
                children: (0, t.jsx)(i, {
                    label: "Contact Number*",
                    name: "phone",
                    type: "tel",
                    error: a.phone
                })
            }), (0, t.jsxs)("div", {
                children: [(0, t.jsxs)("div", {
                    className: "flex items-center gap-3  w-fit mb-3",
                    children: [(0, t.jsx)("span", {
                        className: "font-medium",
                        children: x
                    }), (0, t.jsx)("span", {
                        className: "font-medium",
                        children: "+"
                    }), (0, t.jsx)("span", {
                        className: "font-medium",
                        children: h
                    }), (0, t.jsx)("span", {
                        className: "font-medium",
                        children: "="
                    }), (0, t.jsx)("input", {
                        type: "text",
                        name: "captcha",
                        className: "w-16 bg-transparent border-b border-gray-300 text-center focus:outline-none focus:border-blue-500"
                    }), (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => f(),
                        className: "inline-flex items-center px-2 py-1 hover:bg-gray-100",
                        children: (0, t.jsx)(n.RxReload, {})
                    })]
                }), a.captcha && (0, t.jsx)("p", {
                    className: "text-red-500 text-base mt-1",
                    children: a.captcha
                })]
            }), (0, t.jsx)("button", {
                className: "w-full py-2 lg:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-none",
                type: "submit",
                children: "Schedule Free Consultation"
            })]
        })
    }
    let i = ({
            label: e,
            type: s,
            name: a,
            error: r
        }) => {
            let [n, o] = (0, l.useState)(""), [i, c] = (0, l.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("input", {
                    type: s,
                    name: a,
                    value: n,
                    onChange: e => o(e.target.value),
                    onFocus: () => c(!0),
                    onBlur: () => c(!1),
                    className: `peer text-base w-full bg-transparent border-0 border-b border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 pt-4 pb-1 ${r?"border-red-500":""}`
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 pointer-events-none ${n||i?"text-xs text-blue-600 top-0":"text-base text-gray-500 top-4"}`,
                    children: e
                }), r && (0, t.jsx)("p", {
                    className: "text-red-500 text-base mt-1",
                    children: r
                })]
            })
        },
        c = ({
            label: e,
            name: l,
            error: s
        }) => (0, t.jsxs)("div", {
            className: "relative w-full pt-5",
            children: [(0, t.jsx)("textarea", {
                name: l,
                rows: 2,
                placeholder: " ",
                className: `peer w-full border-b bg-transparent resize-none text-base text-gray-800 
        focus:outline-none focus:border-blue-500 
        ${s?"border-red-500":"border-gray-300"}`
            }), (0, t.jsx)("label", {
                className: "absolute left-0 top-1 text-gray-500 text-sm transition-all duration-200  peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs",
                children: e
            }), s && (0, t.jsx)("p", {
                className: "text-red-500 text-sm mt-1",
                children: s
            })]
        });
    var d = e.i(57688),
        m = e.i(75254);
    let x = (0, m.default)("building-2", [
            ["path", {
                d: "M10 12h4",
                key: "a56b0p"
            }],
            ["path", {
                d: "M10 8h4",
                key: "1sr2af"
            }],
            ["path", {
                d: "M14 21v-3a2 2 0 0 0-4 0v3",
                key: "1rgiei"
            }],
            ["path", {
                d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
                key: "secmi2"
            }],
            ["path", {
                d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
                key: "16ra0t"
            }]
        ]),
        u = (0, m.default)("map", [
            ["path", {
                d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
                key: "169xi5"
            }],
            ["path", {
                d: "M15 5.764v15",
                key: "1pn4in"
            }],
            ["path", {
                d: "M9 3.236v15",
                key: "1uimfh"
            }]
        ]);
    var h = e.i(9912),
        p = e.i(74080);

    function f({
        children: e
    }) {
        let [t, s] = (0, l.useState)(!1);
        return ((0, l.useEffect)(() => (s(!0), () => s(!1)), []), t) ? (0, p.createPortal)(e, document.body) : null
    }
    var b = e.i(18566),
        g = e.i(22016);

    function j({
        scrollTrigger: e = 1600,
        forceOpen: s = !1,
        onClose: r,
        slug: n
    }) {
        let [i, c] = (0, l.useState)(!1), [m, p] = (0, l.useState)(!1), [j, v] = (0, l.useState)(!1), y = (0, b.usePathname)(), w = (() => {
            if (n) return n;
            let e = y.split("/").filter(Boolean);
            return e[e.length - 1] || "homepage"
        })();
        (0, l.useEffect)(() => {
            p(!0)
        }, []), (0, l.useEffect)(() => {
            if (!m || j || s) return;
            let t = () => {
                (window.scrollY || document.documentElement.scrollTop) >= e && !j && (c(!0), v(!0), window.removeEventListener("scroll", t))
            };
            return window.addEventListener("scroll", t, {
                passive: !0
            }), t(), () => {
                window.removeEventListener("scroll", t)
            }
        }, [m, j, e, s]), (0, l.useEffect)(() => {
            s && (c(!0), v(!0))
        }, [s]);
        let N = () => {
            c(!1), r && r()
        };
        return ((0, l.useEffect)(() => {
            if (!i) return;
            let e = e => "Escape" === e.key && N();
            return document.addEventListener("keydown", e), document.body.style.overflow = "hidden", () => {
                document.removeEventListener("keydown", e), document.body.style.overflow = "unset"
            }
        }, [i]), i && m) ? (0, t.jsx)(f, {
            children: (0, t.jsx)("div", {
                className: "fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
                role: "dialog",
                "aria-modal": "true",
                children: (0, t.jsxs)("div", {
                    className: "relative my-auto bg-white rounded-2xl shadow-xl w-full max-w-[95vw] sm:max-w-3xl md:max-w-2xl lg:max-w-4xl overflow-hidden flex flex-col animate-zoomIn max-h-[95vh]",
                    children: [(0, t.jsx)("div", {
                        className: "md:hidden bg-[#3fe9ff] py-3 text-center",
                        children: (0, t.jsx)("div", {
                            className: "bg-[#3fe9ff] p-4 sm:p-6 flex justify-between rounded-t-2xl",
                            children: (0, t.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex flex-row bg-white/50 rounded-lg p-3 mb-2",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-lg font-semibold text-left text-black leading-snug mb-2",
                                        children: "Get clarity, direction, and growth for your business"
                                    }), (0, t.jsx)("div", {
                                        className: "ml-4 sm:block",
                                        children: (0, t.jsx)(d.default, {
                                            src: "/logo-icon.webp",
                                            alt: "Expert",
                                            width: 100,
                                            height: 100,
                                            className: "object-contain"
                                        })
                                    })]
                                }), (0, t.jsx)("p", {
                                    className: "text-sm text-gray-700 text-left font-semibold",
                                    children: "Connect with our consultation experts to get:"
                                }), (0, t.jsxs)("ul", {
                                    className: "mt-4 grid grid-cols-3 gap-3 text-sm text-gray-800",
                                    children: [(0, t.jsxs)("li", {
                                        className: "flex flex-col items-start text-left px-2",
                                        children: [(0, t.jsx)("span", {
                                            className: "text-xl mb-1",
                                            children: (0, t.jsx)(x, {})
                                        }), (0, t.jsx)("p", {
                                            className: "leading-snug",
                                            children: "Insights"
                                        })]
                                    }), (0, t.jsxs)("li", {
                                        className: "flex flex-col items-start text-left px-2",
                                        children: [(0, t.jsx)("span", {
                                            className: "text-xl mb-1",
                                            children: (0, t.jsx)(u, {})
                                        }), (0, t.jsx)("p", {
                                            className: "leading-snug",
                                            children: "Strategy"
                                        })]
                                    }), (0, t.jsxs)("li", {
                                        className: "flex flex-col items-start text-left px-2",
                                        children: [(0, t.jsx)("span", {
                                            className: "text-xl mb-1",
                                            children: (0, t.jsx)(h.Rocket, {})
                                        }), (0, t.jsx)("p", {
                                            className: "leading-snug",
                                            children: "Growth"
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), (0, t.jsx)("button", {
                        onClick: N,
                        className: "hidden md:flex absolute top-4 right-4 w-8 h-8 items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10",
                        "aria-label": "Close modal",
                        children: (0, t.jsx)(a, {
                            size: 20
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col md:flex-row overflow-hidden",
                        children: [(0, t.jsxs)("div", {
                            className: "hidden md:flex bg-[#F5F7FF] md:w-1/2 p-8 flex-col justify-center items-center text-center overflow-y-auto",
                            children: [(0, t.jsx)("h2", {
                                className: "text-2xl font-semibold text-blue-700 mb-2",
                                children: "Leaving already?"
                            }), (0, t.jsx)("p", {
                                className: "text-gray-600 mb-6 text-base leading-relaxed",
                                children: "Consistently rated among the top development agencies, our platform ratings reflect our dedication to quality, innovation, and client success."
                            }), (0, t.jsx)("div", {
                                className: "grid grid-cols-2 gap-4 mb-6 w-full",
                                children: [{
                                    href: "https://clutch.co/profile/nadcab-labs#reviews",
                                    score: "4.7/5",
                                    label: "Clutch"
                                }, {
                                    href: "https://www.goodfirms.co/company/nadcab-technology",
                                    score: "4.9/5",
                                    label: "GoodFirms"
                                }, {
                                    href: "https://www.rightfirms.co/company/nadcab-labs",
                                    score: "4.1/5",
                                    label: "RightFirms"
                                }, {
                                    href: "https://www.designrush.com/agency/profile/nadcab-labs",
                                    score: "4.7/5",
                                    label: "DesignRush"
                                }].map(({
                                    href: e,
                                    score: l,
                                    label: s
                                }, a) => (0, t.jsxs)(g.default, {
                                    href: e,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200 cursor-pointer block",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-2xl font-bold text-blue-700 mb-1",
                                        children: l
                                    }), (0, t.jsx)("div", {
                                        className: "flex justify-center mb-2",
                                        children: [void 0, void 0, void 0, void 0, void 0].map((e, l) => (0, t.jsx)("span", {
                                            className: "text-yellow-400 text-lg",
                                            children: l < 4 ? "★" : "☆"
                                        }, l))
                                    }), (0, t.jsx)("div", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: s
                                    })]
                                }, a))
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "p-6 sm:p-8 md:w-1/2 bg-white text-black flex flex-col justify-center overflow-y-auto",
                            children: [(0, t.jsx)("div", {
                                className: "overflow-y-auto",
                                children: (0, t.jsx)(o, {
                                    onClose: N,
                                    slug: w
                                })
                            }), (0, t.jsxs)("ul", {
                                className: "mt-4 text-xs text-gray-500 list-disc pl-4 space-y-1 sm:block hidden",
                                children: [(0, t.jsxs)("li", {
                                    children: ["In just ", (0, t.jsx)("strong", {
                                        children: "2 mins"
                                    }), " you will get a response."]
                                }), (0, t.jsxs)("li", {
                                    children: ["Your idea is 100% protected by our", " ", (0, t.jsx)("strong", {
                                        children: "Non-Disclosure Agreement"
                                    }), "."]
                                })]
                            }), (0, t.jsx)("button", {
                                onClick: N,
                                className: "md:hidden w-fit mt-6 mx-auto text-gray-500",
                                children: "Not Now"
                            })]
                        })]
                    })]
                })
            })
        }) : null
    }
}]);