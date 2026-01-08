(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 16181, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        s = e.i(67881),
        l = e.i(71645),
        a = e.i(49377);

    function r() {
        let [e, r] = (0, l.useState)({}), [i, n] = (0, l.useState)(!1), [d, o] = (0, l.useState)(!1), [c, x] = (0, l.useState)(0), [h, m] = (0, l.useState)(0), u = (e = 1, t = 10) => {
            let s = Math.floor(Math.random() * (t - e + 1)) + e,
                l = Math.floor(Math.random() * (t - e + 1)) + e;
            x(s), m(l)
        };
        (0, l.useEffect)(() => {
            u()
        }, []);
        let b = async e => {
            e.preventDefault();
            let t = e.currentTarget,
                s = (e => {
                    let t = {},
                        s = new FormData(e);
                    s.get("name") ? .toString().trim() || (t.name = "Name is required");
                    let l = s.get("email") ? .toString().trim();
                    l ? /^\S+@\S+\.\S+$/.test(l) || (t.email = "Invalid email format") : t.email = "Email is required";
                    let a = s.get("phone") ? .toString().trim();
                    a ? /^[\+]?[1-9][\d]{0,15}$/.test(a.replace(/\s/g, "")) || (t.phone = "Invalid phone number") : t.phone = "Phone number is required", s.get("budget") ? .toString().trim() || (t.budget = "Please select a budget range"), s.get("message") ? .toString().trim() || (t.message = "Project description is required");
                    let r = s.get("captcha") ? .toString().trim() || "",
                        i = String(c + h);
                    return r ? r !== i && (t.captcha = "Captcha is incorrect") : t.captcha = "Captcha is required", t
                })(t);
            if (r(s), Object.keys(s).length > 0) {
                s.captcha && u();
                return
            }
            o(!0);
            let l = new FormData(t);
            try {
                let e = await fetch("/api/submit-form", {
                        method: "POST",
                        body: l
                    }),
                    s = await e.json();
                if (!e.ok) throw Error(s.message || "Failed to submit");
                n(!0), t.reset(), r({}), u()
            } catch (e) {
                console.error(e), alert("Something went wrong. Please try again."), u()
            } finally {
                o(!1)
            }
        };
        return i ? (0, t.jsxs)("div", {
            className: "bg-white/10 border border-white/20 rounded-2xl p-8 text-center backdrop-blur-sm",
            children: [(0, t.jsx)("h3", {
                className: "text-2xl font-bold text-white mb-3",
                children: "Thank You!"
            }), (0, t.jsx)("p", {
                className: "text-blue-100 mb-4",
                children: "Your request has been submitted successfully. Our team will contact you within 24 hours."
            }), (0, t.jsx)(s.Button, {
                onClick: () => n(!1),
                className: "bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-blue-600 font-bold",
                children: "Submit Another Request"
            })]
        }) : (0, t.jsxs)("div", {
            children: [(0, t.jsxs)("div", {
                className: "text-center mb-8",
                children: [(0, t.jsx)("h3", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: "Start Your Project"
                }), (0, t.jsx)("p", {
                    className: "text-blue-100",
                    children: "Get a free consultation and project estimate"
                })]
            }), (0, t.jsxs)("form", {
                className: "space-y-6",
                onSubmit: b,
                children: [(0, t.jsx)("input", {
                    type: "hidden",
                    name: "form_name",
                    defaultValue: "home_contact"
                }), (0, t.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("div", {
                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: (0, t.jsx)("svg", {
                                className: "w-5 h-5 text-blue-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                })
                            })
                        }), (0, t.jsx)("input", {
                            name: "name",
                            type: "text",
                            placeholder: "Full Name",
                            className: "w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-blue-200 text-white outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-300 backdrop-blur-sm"
                        }), e.name && (0, t.jsx)("p", {
                            className: "text-red-300 text-sm mt-1 pl-2",
                            children: e.name
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("div", {
                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: (0, t.jsx)("svg", {
                                className: "w-5 h-5 text-blue-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                })
                            })
                        }), (0, t.jsx)("input", {
                            name: "email",
                            type: "email",
                            placeholder: "Email Address*",
                            className: "w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-blue-200 text-white outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-300 backdrop-blur-sm"
                        }), e.email && (0, t.jsx)("p", {
                            className: "text-red-300 text-sm mt-1 pl-2",
                            children: e.email
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("div", {
                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: (0, t.jsx)("svg", {
                                className: "w-5 h-5 text-blue-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                })
                            })
                        }), (0, t.jsx)("input", {
                            name: "phone",
                            type: "tel",
                            placeholder: "Phone Number*",
                            className: "w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-blue-200 text-white outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-300 backdrop-blur-sm"
                        }), e.phone && (0, t.jsx)("p", {
                            className: "text-red-300 text-sm mt-1 pl-2",
                            children: e.phone
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("div", {
                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: (0, t.jsx)("svg", {
                                className: "w-5 h-5 text-blue-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            })
                        }), (0, t.jsxs)("select", {
                            name: "budget",
                            className: "w-full pl-10 pr-10 py-4 bg-white/10 border border-white/20 rounded-xl text-white outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-300 backdrop-blur-sm appearance-none",
                            children: [(0, t.jsx)("option", {
                                value: "",
                                className: "text-gray-700",
                                children: "Select Budget Range"
                            }), (0, t.jsx)("option", {
                                value: "10k-50k",
                                className: "text-gray-700",
                                children: "₹10,000 - ₹50,000"
                            }), (0, t.jsx)("option", {
                                value: "50k-1l",
                                className: "text-gray-700",
                                children: "₹50,000 - ₹1,00,000"
                            }), (0, t.jsx)("option", {
                                value: "1l+",
                                className: "text-gray-700",
                                children: "₹1,00,000+"
                            })]
                        }), e.budget && (0, t.jsx)("p", {
                            className: "text-red-300 text-sm mt-1 pl-2",
                            children: e.budget
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("div", {
                            className: "absolute top-4 left-3 pointer-events-none",
                            children: (0, t.jsx)("svg", {
                                className: "w-5 h-5 text-blue-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                })
                            })
                        }), (0, t.jsx)("textarea", {
                            name: "message",
                            rows: 4,
                            placeholder: "Describe your Project/Idea in brief*",
                            className: "w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-blue-200 text-white outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-300 backdrop-blur-sm resize-none"
                        }), e.message && (0, t.jsx)("p", {
                            className: "text-red-300 text-sm mt-1 pl-2",
                            children: e.message
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center gap-3 bg-white/10 px-3 py-2 rounded-xl border border-white/20",
                        children: [(0, t.jsx)("span", {
                            className: "font-medium text-white",
                            children: c
                        }), (0, t.jsx)("span", {
                            className: "font-medium text-white",
                            children: "+"
                        }), (0, t.jsx)("span", {
                            className: "font-medium text-white",
                            children: h
                        }), (0, t.jsx)("span", {
                            className: "font-medium text-white",
                            children: "="
                        }), (0, t.jsx)("input", {
                            type: "text",
                            name: "captcha",
                            className: "w-16 bg-transparent border-b border-blue-300 text-white text-center focus:outline-none focus:border-white"
                        }), (0, t.jsx)("button", {
                            type: "button",
                            onClick: () => u(),
                            className: "inline-flex items-center px-2 py-1 hover:bg-white/10 rounded-lg transition-colors",
                            children: (0, t.jsx)(a.RxReload, {
                                className: "text-white"
                            })
                        })]
                    })
                }), e.captcha && (0, t.jsx)("p", {
                    className: "text-red-300 text-sm mt-1",
                    children: e.captcha
                }), (0, t.jsx)(s.Button, {
                    type: "submit",
                    disabled: d,
                    className: "w-full py-4 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-blue-600 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                    children: d ? (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, t.jsx)("div", {
                            className: "w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"
                        }), "Sending..."]
                    }) : "Request Free Proposal"
                })]
            })]
        })
    }
}, 4483, e => {
    "use strict";
    e.s(["default", () => n]);
    var t = e.i(43476),
        s = e.i(37902),
        l = e.i(71645),
        a = e.i(57688),
        r = e.i(70065),
        i = e.i(47176);

    function n({
        title: e,
        cards: n
    }) {
        let [d, o] = (0, l.useState)(0), [c, x] = (0, l.useState)(!1), [h, m] = (0, l.useState)(!1), u = (0, l.useRef)(null), b = (0, l.useRef)(!1), g = n.length >= 4;
        (0, l.useEffect)(() => {
            if (b.current) return;
            b.current = !0;
            let e = () => x(window.innerWidth < 768);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, l.useEffect)(() => {
            if (!g) return;
            let e = setInterval(() => {
                h || f()
            }, 5e3);
            return () => clearInterval(e)
        }, [h, g]);
        let f = () => {
                h || (m(!0), o(e => {
                    let t = (e + 1) % n.length;
                    return j(t), t
                }), setTimeout(() => m(!1), 300))
            },
            p = e => {
                e === d || h || (m(!0), o(e), j(e), setTimeout(() => m(!1), 300))
            },
            j = e => {
                if (!u.current) return;
                let t = u.current,
                    s = t.children[0] ? .clientWidth || 0,
                    l = 24 * !c;
                t.scrollTo({
                    left: e * (s + l),
                    behavior: "smooth"
                })
            };
        return (0, l.useEffect)(() => {
            let e = u.current;
            if (!e) return;
            let t = () => {
                let t = e.scrollLeft,
                    s = Math.round(t / ((e.children[0] ? .clientWidth || 0) + 24 * !c));
                s === d || h || o(Math.max(0, Math.min(s, n.length - 1)))
            };
            return e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
        }, [d, h, n.length, c]), (0, t.jsxs)("section", {
            className: "jsx-4fb23789b5a36db8 py-16 px-4 md:px-8 relative overflow-hidden",
            children: [(0, t.jsxs)("div", {
                className: "jsx-4fb23789b5a36db8 max-w-7xl mx-auto relative z-10",
                children: [(0, t.jsxs)("div", {
                    className: "jsx-4fb23789b5a36db8 text-center mb-12 lg:mb-16",
                    children: [(0, t.jsxs)("div", {
                        className: "jsx-4fb23789b5a36db8 inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-6",
                        children: [(0, t.jsx)("div", {
                            className: "jsx-4fb23789b5a36db8 w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                        }), (0, t.jsx)("span", {
                            className: "jsx-4fb23789b5a36db8 text-blue-700 font-medium text-sm",
                            children: "Business Solutions"
                        })]
                    }), (0, t.jsx)("h2", {
                        className: "jsx-4fb23789b5a36db8 gradient-text text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                        children: e
                    }), (0, t.jsx)("p", {
                        className: "jsx-4fb23789b5a36db8 text-gray-600 text-lg max-w-2xl mx-auto",
                        children: "Navigate through common challenges and discover tailored solutions"
                    })]
                }), (0, t.jsx)("div", {
                    className: "jsx-4fb23789b5a36db8 relative",
                    children: (0, t.jsx)("div", {
                        ref: u,
                        style: {
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        },
                        className: `jsx-4fb23789b5a36db8 flex overflow-x-auto scrollbar-hide scroll-smooth pb-8 snap-x snap-mandatory ${n.length<4?"justify-center":""} ${c?"gap-0":"gap-6"}`,
                        children: n.map((e, s) => (0, t.jsx)("div", {
                            className: `jsx-4fb23789b5a36db8 ${c?"w-full flex-shrink-0 snap-center px-4":""} ${n.length<4&&!c?"w-full max-w-md":c?"w-full":"flex-none w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[32vw] xl:w-[28vw]"}`,
                            children: (0, t.jsx)("button", {
                                onClick: () => g ? p(s) : null,
                                className: `jsx-4fb23789b5a36db8 w-full h-full group ${h?"pointer-events-none":""}`,
                                children: (0, t.jsx)(r.Card, {
                                    className: `h-full ${d===s&&g?"border-blue-500 bg-gradient-to-br from-white to-blue-50":"border-gray-100 hover:border-blue-200"}`,
                                    children: (0, t.jsxs)("div", {
                                        className: "jsx-4fb23789b5a36db8 p-6 md:p-8",
                                        children: [(0, t.jsx)("div", {
                                            className: "jsx-4fb23789b5a36db8 flex items-start mb-6",
                                            children: (0, t.jsx)("div", {
                                                className: `jsx-4fb23789b5a36db8 flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${d===s&&g?"bg-gradient-to-br from-black-500 to-black-600 shadow-lg":"bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200"}`,
                                                children: (0, t.jsx)("div", {
                                                    className: "jsx-4fb23789b5a36db8 relative w-10 h-10",
                                                    children: (0, t.jsx)(a.default, {
                                                        src: (0, i.normalizeImage)(e ? .logo ? .url) || "",
                                                        alt: e ? .logo ? .alt || e ? .title,
                                                        width: e ? .logo ? .width || 40,
                                                        height: e ? .logo ? .height || 40,
                                                        className: "object-contain",
                                                        sizes: "40px",
                                                        priority: s < 3
                                                    })
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "jsx-4fb23789b5a36db8 space-y-4",
                                            children: [(0, t.jsx)("h3", {
                                                className: "jsx-4fb23789b5a36db8 text-xl font-bold text-gray-900 text-left",
                                                children: e.title
                                            }), (0, t.jsx)("p", {
                                                className: "jsx-4fb23789b5a36db8 text-gray-600 leading-relaxed text-left",
                                                children: e.description
                                            })]
                                        })]
                                    })
                                })
                            })
                        }, s))
                    })
                }), g && (0, t.jsxs)("div", {
                    className: "jsx-4fb23789b5a36db8 mt-12",
                    children: [(0, t.jsx)("div", {
                        className: "jsx-4fb23789b5a36db8 flex justify-center items-center gap-3 mb-8",
                        children: n.map((e, s) => (0, t.jsx)("button", {
                            onClick: () => p(s),
                            disabled: h,
                            "aria-label": `Go to slide ${s+1}`,
                            className: `jsx-4fb23789b5a36db8 transition-all duration-300 ${h?"pointer-events-none":""}`,
                            children: (0, t.jsx)("div", {
                                className: `jsx-4fb23789b5a36db8 w-3 h-3 rounded-full transition-all duration-300 ${s===d?"bg-blue-600 scale-125":"bg-gray-300 hover:bg-blue-400"}`
                            })
                        }, s))
                    }), (0, t.jsxs)("div", {
                        className: "jsx-4fb23789b5a36db8 flex justify-center items-center gap-6",
                        children: [(0, t.jsx)("button", {
                            onClick: () => {
                                h || (m(!0), o(e => {
                                    let t = (e - 1 + n.length) % n.length;
                                    return j(t), t
                                }), setTimeout(() => m(!1), 300))
                            },
                            disabled: h || 0 === d,
                            "aria-label": "Previous slide",
                            className: "jsx-4fb23789b5a36db8 bg-white hover:bg-gray-50 text-gray-700 rounded-xl p-4 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed",
                            children: (0, t.jsx)("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-4fb23789b5a36db8 w-5 h-5",
                                children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7",
                                    className: "jsx-4fb23789b5a36db8"
                                })
                            })
                        }), (0, t.jsx)("button", {
                            onClick: f,
                            disabled: h || d === n.length - 1,
                            "aria-label": "Next slide",
                            className: "jsx-4fb23789b5a36db8 bg-white hover:bg-gray-50 text-gray-700 rounded-xl p-4 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed",
                            children: (0, t.jsx)("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-4fb23789b5a36db8 w-5 h-5",
                                children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7",
                                    className: "jsx-4fb23789b5a36db8"
                                })
                            })
                        })]
                    })]
                })]
            }), (0, t.jsx)(s.default, {
                id: "4fb23789b5a36db8",
                children: ".scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}"
            })]
        })
    }
}, 63620, e => {
    "use strict";
    e.s(["default", () => n]);
    var t = e.i(43476),
        s = e.i(57688),
        l = e.i(47176),
        a = e.i(22016),
        r = e.i(72520),
        i = e.i(11583);

    function n({
        data: e,
        blog: n
    }) {
        if (!n || 0 === n.length) return null;
        let d = n[0],
            o = n.slice(1, 6);
        return (0, t.jsxs)("section", {
            className: "py-16 mb-10 px-4 lg:px-0 max-w-7xl mx-auto",
            children: [(0, t.jsxs)("div", {
                className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12",
                children: [(0, t.jsx)("div", {
                    children: (0, t.jsx)("h2", {
                        className: "text-3xl sm:text-4xl font-bold",
                        children: e ? .title || "Latest News & Insights"
                    })
                }), e ? .button ? .title && (0, t.jsxs)(a.default, {
                    href: e.button.url || "#",
                    className: "inline-flex items-center gap-2 font-semibold text-lg border-b-2 border-blue-600 pb-1 transition-colors hover:text-blue-800",
                    children: [e.button.title, (0, t.jsx)(r.ArrowRight, {
                        size: 18
                    })]
                })]
            }), (0, t.jsxs)("div", {
                className: "grid grid-cols-1 sm:grid-cols-12 gap-8",
                children: [(0, t.jsx)("div", {
                    className: "sm:col-span-7",
                    children: (0, t.jsx)("div", {
                        className: "sm:sticky sm:top-6",
                        children: (0, t.jsxs)("div", {
                            className: "bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition",
                            children: [d ? .image ? .url && (0, t.jsx)("div", {
                                className: "relative w-full h-72 sm:h-80",
                                children: (0, t.jsx)(s.default, {
                                    src: (0, l.normalizeImage)(d.image.url) || "",
                                    alt: d.image.alt || "Featured image",
                                    fill: !0,
                                    className: "object-cover",
                                    sizes: "(max-width:640px) 100vw, 60vw"
                                })
                            }), (0, t.jsxs)("div", {
                                className: "p-6 sm:p-8",
                                children: [(0, t.jsx)("div", {
                                    className: "flex items-center gap-4 mb-4",
                                    children: d.categories ? .[0] && (0, t.jsx)("span", {
                                        className: "inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-lg ",
                                        children: (0, t.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: d.categories[0]
                                            }
                                        })
                                    })
                                }), (0, t.jsx)("h3", {
                                    className: "text-xl sm:text-2xl font-medium text-gray-900 mb-4 leading-tight",
                                    dangerouslySetInnerHTML: {
                                        __html: d.title ? (0, i.decode)(d.title) : ""
                                    }
                                }), (0, t.jsx)("p", {
                                    className: "text-gray-600 text-base leading-relaxed mb-6",
                                    dangerouslySetInnerHTML: {
                                        __html: d.excerpt ? (0, i.decode)(d.excerpt) : ""
                                    }
                                }), (0, t.jsxs)(a.default, {
                                    href: `/blog/${d.slug}`,
                                    target: "_blank",
                                    className: "inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition group",
                                    children: ["Read More", (0, t.jsx)("svg", {
                                        className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }), (0, t.jsx)("div", {
                    className: "sm:col-span-5",
                    children: (0, t.jsx)("div", {
                        className: "space-y-6",
                        children: o ? .map(e => (0, t.jsx)("div", {
                            className: "bg-white/90 dark:bg-[#1c1c1c] rounded-xl shadow hover:shadow-lg transition overflow-hidden",
                            children: (0, t.jsx)(a.default, {
                                href: `/blog/${e.slug}`,
                                target: "_blank",
                                children: (0, t.jsxs)("div", {
                                    className: "p-6",
                                    children: [e.categories ? .[0] && (0, t.jsx)("span", {
                                        className: "inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 my-2 rounded-lg ",
                                        children: (0, t.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: e.categories[0]
                                            }
                                        })
                                    }), (0, t.jsx)("h4", {
                                        className: "text-base font-medium text-gray-900 dark:text-white mb-3 leading-tight",
                                        dangerouslySetInnerHTML: {
                                            __html: e ? .title ? (0, i.decode)(e ? .title) : ""
                                        }
                                    }), (0, t.jsx)("p", {
                                        className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2",
                                        dangerouslySetInnerHTML: {
                                            __html: e.excerpt ? (0, i.decode)(e.excerpt) : ""
                                        }
                                    }), (0, t.jsx)("div", {
                                        className: "pt-4 border-t border-gray-100 dark:border-gray-500",
                                        children: (0, t.jsx)("span", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide",
                                            children: e.date
                                        })
                                    })]
                                })
                            })
                        }, e.id))
                    })
                })]
            })]
        })
    }
}, 81383, e => {
    "use strict";
    e.s(["default", () => a]);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(10936);

    function a({
        title: e = "Frequently Asked Questions",
        faqs: a = [],
        twoColumn: r = !0
    }) {
        let [i, n] = (0, s.useState)(null), d = r ? a.slice(0, Math.ceil(a.length / 2)) : a, o = r ? a.slice(Math.ceil(a.length / 2)) : [], c = (e, s) => (0, t.jsx)("div", {
            className: "lg:space-y-6 space-y-3",
            children: e.map((e, a) => (0, t.jsx)("div", {
                className: "",
                style: {
                    animationDelay: `${100*a}ms`
                },
                children: (0, t.jsxs)("div", {
                    className: "accordion-item bg-card rounded-md card-shadow overflow-hidden",
                    children: [(0, t.jsxs)("button", {
                        className: "accordion-trigger",
                        onClick: () => ((e, t) => {
                            let s = "left" === t ? `left-${e}` : `right-${e}`;
                            n(i === s ? null : s)
                        })(a, s),
                        children: [(0, t.jsx)("h3", {
                            className: "font-normal text-base md:font-medium md:text-base",
                            children: e.question
                        }), (0, t.jsx)("div", {
                            className: "flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center",
                            children: (0, t.jsx)("div", {
                                className: "w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none",
                                children: (0, t.jsx)(l.IoMdArrowDropdown, {
                                    className: `w-6 h-6 transition-transform duration-300 ${i===`${s}-${a}`?"rotate-180":""}`
                                })
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: `accordion-content px-6 overflow-hidden transition-all duration-300 ${i===`${s}-${a}`?"max-h-96 py-4":"max-h-0"}`,
                        children: (0, t.jsx)("p", {
                            className: "text-muted-foreground  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                            dangerouslySetInnerHTML: {
                                __html: e.answer
                            }
                        })
                    })]
                })
            }, `${s}-${a}`))
        });
        return (0, t.jsx)("section", {
            className: "w-full lg:py-16 pb-16 px-4",
            children: (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto",
                children: [(0, t.jsx)("h2", {
                    className: "text-center gradient-text font-medium text-3xl sm:text-4xl lg:mb-12 mb-6",
                    children: e
                }), (0, t.jsxs)("div", {
                    className: `grid lg:gap-6 gap-4 ${r?"grid-cols-1 sm:grid-cols-2":"grid-cols-1"}`,
                    children: [c(d, "left"), r && c(o, "right")]
                })]
            })
        })
    }
}, 24303, e => {
    "use strict";
    e.s(["default", () => o], 24303);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(57688),
        a = e.i(31343);
    let r = (0, e.i(75254).default)("user-round", [
        ["circle", {
            cx: "12",
            cy: "8",
            r: "5",
            key: "1hypcn"
        }],
        ["path", {
            d: "M20 21a8 8 0 0 0-16 0",
            key: "rfgkzh"
        }]
    ]);
    var i = e.i(22016),
        n = e.i(40141);

    function d(e) {
        return (0, n.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M16 12V6c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4zm-6 0V6c0-1.103.897-2 2-2a.89.89 0 0 0 .163-.015C13.188 4.06 14 4.935 14 6v6c0 1.103-.897 2-2 2s-2-.897-2-2z"
                },
                child: []
            }, {
                tag: "path",
                attr: {
                    d: "M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z"
                },
                child: []
            }]
        })(e)
    }

    function o() {
        let [e, n] = (0, s.useState)(!1);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("section", {
                className: "py-20 px-6 bg-card",
                children: (0, t.jsxs)("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [(0, t.jsxs)("div", {
                        className: "lg:order-1 order-2",
                        children: [(0, t.jsx)("h4", {
                            className: "text-blue-600 font-semibold tracking-widest mb-2",
                            children: "NADCAB PODCAST"
                        }), (0, t.jsx)("div", {
                            className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"
                        }), (0, t.jsxs)("h2", {
                            className: "text-4xl md:text-5xl font-bold leading-snug mb-6",
                            children: ["Learn Blockchain Anytime", (0, t.jsx)("br", {}), "& Anywhere"]
                        }), (0, t.jsx)("p", {
                            className: "mb-8 text-lg",
                            children: "Nadcab Podcast helps you understand blockchain, crypto, Web3, AI, and modern technologies in the simplest way — online or offline."
                        }), (0, t.jsxs)("div", {
                            className: "flex items-start gap-4 mb-6",
                            children: [(0, t.jsx)("div", {
                                className: "w-14 h-14 bg-blue-500 text-white rounded-xl shadow flex items-center justify-center flex-shrink-0",
                                children: (0, t.jsx)(d, {
                                    size: 25
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h4", {
                                    className: "text-xl font-medium",
                                    children: "Learn Blockchain in the Easiest Way"
                                }), (0, t.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: "Understand blockchain, crypto, Web3 & AI using simple real-life examples."
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex items-start gap-4 mb-10",
                            children: [(0, t.jsx)("div", {
                                className: "w-14 h-14 bg-blue-500 text-white rounded-xl shadow flex items-center justify-center flex-shrink-0",
                                children: (0, t.jsx)(r, {
                                    size: 25
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h4", {
                                    className: "text-xl font-medium",
                                    children: "Join as a Guest — Online or Offline"
                                }), (0, t.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: "Record professionally from our studio or join us online as a guest."
                                })]
                            })]
                        }), (0, t.jsx)(i.default, {
                            href: "/podcast",
                            className: "link_button_outline_blue",
                            children: "Start Listening"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "relative w-full flex justify-center lg:justify-end",
                        children: (0, t.jsxs)("div", {
                            onClick: () => n(!0),
                            className: "relative cursor-pointer group max-w-[520px] w-full",
                            children: [(0, t.jsx)(l.default, {
                                src: "/bs-img5.jpg",
                                width: 800,
                                height: 500,
                                alt: "Nadcab Podcast Video",
                                className: "rounded-3xl shadow-lg w-full h-auto"
                            }), (0, t.jsx)("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: (0, t.jsx)("div", {
                                    className: "bg-white/80 backdrop-blur-xl p-6 rounded-full shadow-lg group-hover:scale-110 transition",
                                    children: (0, t.jsx)(a.Play, {
                                        size: 40,
                                        className: "text-blue-600"
                                    })
                                })
                            })]
                        })
                    })]
                })
            }), e && (0, t.jsx)("div", {
                className: "fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",
                children: (0, t.jsxs)("div", {
                    className: "bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative",
                    children: [(0, t.jsx)("button", {
                        className: "absolute right-3 top-3 text-gray-600 hover:text-black text-xl",
                        onClick: () => n(!1),
                        children: "✕"
                    }), (0, t.jsx)("iframe", {
                        width: "100%",
                        height: "420",
                        src: "https://www.youtube.com/embed/VIDEO_ID",
                        title: "Podcast video",
                        allow: "autoplay; encrypted-media",
                        allowFullScreen: !0
                    })]
                })
            })]
        })
    }
}, 42620, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        s = e.i(57688),
        l = e.i(71645),
        a = e.i(92199);
    let r = ({
        className: e = ""
    }) => {
        let [r, i] = (0, l.useState)(!1);
        return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
                className: ` py-12 px-4 ${e}`,
                children: (0, t.jsx)("div", {
                    className: "max-w-6xl mx-auto",
                    children: (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-center",
                        children: [(0, t.jsxs)("div", {
                            className: "space-y-6",
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsxs)("div", {
                                    className: "inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4",
                                    children: [(0, t.jsx)(a.FiAward, {
                                        className: "w-4 h-4"
                                    }), "Award Winning"]
                                }), (0, t.jsx)("h2", {
                                    className: "text-2xl md:text-4xl font-bold  mb-4",
                                    children: "Recognized by TechBehemoths 2025"
                                }), (0, t.jsx)("p", {
                                    className: "text-muted-foreground text-lg mb-4",
                                    children: "Veridaxlabs has been honored as a winner in three prestigious categories at the TechBehemoths Global Excellence Awards 2025."
                                })]
                            }), (0, t.jsx)("div", {
                                className: "space-y-3",
                                children: ["Global recognition in Berlin, Germany", "Triple category winner", "Verified and authentic certificate"].map((e, s) => (0, t.jsxs)("div", {
                                    className: "flex items-start gap-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center",
                                        children: (0, t.jsx)(a.FiCheck, {
                                            className: "w-4 h-4 text-blue-600"
                                        })
                                    }), (0, t.jsx)("p", {
                                        className: "text-base text-muted-foreground",
                                        children: e
                                    })]
                                }, s))
                            })]
                        }), (0, t.jsx)("div", {
                            className: "relative group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]",
                            onClick: () => i(!0),
                            children: (0, t.jsx)("div", {
                                className: "bg-white rounded-xl shadow-lg p-2 md:p-3 border border-gray-200",
                                children: (0, t.jsx)("div", {
                                    className: "relative w-full h-auto",
                                    children: (0, t.jsx)(s.default, {
                                        src: "/certificate.webp",
                                        alt: "TechBehemoths Global Awards 2025 Certificate",
                                        width: 1200,
                                        height: 600,
                                        className: "w-full h-auto rounded-lg",
                                        priority: !0
                                    })
                                })
                            })
                        })]
                    })
                })
            })
        })
    }
}]);