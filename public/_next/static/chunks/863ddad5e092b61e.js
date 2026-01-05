(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 70065, e => {
    "use strict";
    e.s(["Card", () => l, "CardContent", () => r]);
    var t = e.i(43476),
        a = e.i(71645),
        s = e.i(47163);
    let l = a.forwardRef(({
        className: e,
        ...a
    }, l) => (0, t.jsx)("div", {
        ref: l,
        className: (0, s.cn)("rounded-xl bg-card text-card-foreground card-shadow", e),
        ...a
    }));
    l.displayName = "Card", a.forwardRef(({
        className: e,
        ...a
    }, l) => (0, t.jsx)("div", {
        ref: l,
        className: (0, s.cn)("flex flex-col space-y-1.5 p-6", e),
        ...a
    })).displayName = "CardHeader", a.forwardRef(({
        className: e,
        ...a
    }, l) => (0, t.jsx)("div", {
        ref: l,
        className: (0, s.cn)("font-semibold leading-none tracking-tight", e),
        ...a
    })).displayName = "CardTitle", a.forwardRef(({
        className: e,
        ...a
    }, l) => (0, t.jsx)("div", {
        ref: l,
        className: (0, s.cn)("text-sm text-muted-foreground", e),
        ...a
    })).displayName = "CardDescription";
    let r = a.forwardRef(({
        className: e,
        ...a
    }, l) => (0, t.jsx)("div", {
        ref: l,
        className: (0, s.cn)("p-0 pt-0", e),
        ...a
    }));
    r.displayName = "CardContent", a.forwardRef(({
        className: e,
        ...a
    }, l) => (0, t.jsx)("div", {
        ref: l,
        className: (0, s.cn)("flex items-center p-6 pt-0", e),
        ...a
    })).displayName = "CardFooter"
}, 37332, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        a = e.i(11583),
        s = e.i(71645),
        l = e.i(10936);

    function r({
        title: e = "Frequently Asked Questions",
        faqs: r = [],
        twoColumn: n = !0,
        widthWrapper: i = "max-w-7xl"
    }) {
        let [o, c] = (0, s.useState)(null), d = n ? r.slice(0, Math.ceil(r.length / 2)) : r, m = n ? r.slice(Math.ceil(r.length / 2)) : [], x = (e, s) => (0, t.jsx)("div", {
            className: "lg:space-y-6 space-y-2",
            children: e.map((e, r) => (0, t.jsx)("div", {
                className: "",
                style: {
                    animationDelay: `${100*r}ms`
                },
                children: (0, t.jsxs)("div", {
                    className: "accordion-item bg-card rounded-lg card-shadow overflow-hidden",
                    children: [(0, t.jsxs)("button", {
                        className: "accordion-trigger",
                        onClick: () => ((e, t) => {
                            let a = `${t}-${e}`;
                            c(o === a ? null : a)
                        })(r, s),
                        children: [(0, t.jsx)("h3", {
                            className: "font-normal text-base md:font-medium md:text-base",
                            children: e.question
                        }), (0, t.jsx)("div", {
                            className: "flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center rounded-md",
                            children: (0, t.jsx)("div", {
                                className: "w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none rounded-md ",
                                children: (0, t.jsx)(l.IoMdArrowDropdown, {
                                    className: `w-6 h-6 transition-transform duration-300 ${o===`${s}-${r}`?"rotate-180":""}`
                                })
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: `accordion-content px-6 overflow-hidden transition-all duration-300 ${o===`${s}-${r}`?"max-h-96 py-4":"max-h-0"}`,
                        children: (0, t.jsx)("div", {
                            className: "text-muted-foreground  [&_a]:text-blue-600 [&_ul]:list-disc  [&_ul]:ml-5  [&_ol]:list-decimal  [&_ol]:ml-5 [&_a:hover]:underline ",
                            dangerouslySetInnerHTML: {
                                __html: (0, a.decode)(e.answer) || ""
                            }
                        })
                    })]
                })
            }, `${s}-${r}`))
        });
        return (0, t.jsx)("section", {
            className: "w-full lg:py-16 py-16 px-4",
            children: (0, t.jsxs)("div", {
                className: `${i} mx-auto`,
                children: [(0, t.jsx)("h2", {
                    className: "text-center gradient-text font-medium text-xl sm:text-4xl lg:mb-12 mb-6",
                    children: e
                }), (0, t.jsxs)("div", {
                    className: `grid lg:gap-6 gap-4 ${n?"grid-cols-1 lg:grid-cols-2":"grid-cols-1"}`,
                    children: [x(d, "left"), n && x(m, "right")]
                })]
            })
        })
    }
}, 36181, e => {
    "use strict";
    e.s(["default", () => n]);
    var t = e.i(43476),
        a = e.i(57688),
        s = e.i(22016),
        l = e.i(71645),
        r = e.i(47176);

    function n({
        videoSrc: e,
        bgImageSrc: n,
        logoSrc: i,
        heading: o,
        subtext: c,
        links: d = [],
        gradientOverlay: m,
        headingColor: x,
        subtextColor: u
    }) {
        let [h, p] = (0, l.useState)(!1);
        return (0, t.jsxs)("section", {
            className: `relative flex flex-col items-center justify-center min-h-[auto] sm:min-h-screen md:min-h-screen text-center px-4 py-16 sm:px-6 md:px-6 overflow-hidden transition-colors duration-700 ${h?"bg-transparent":"bg-black"}`,
            children: [e ? (0, t.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                onLoadedData: () => p(!0),
                className: "absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-700",
                children: (0, t.jsx)("source", {
                    src: (0, r.normalizeImage)(e ? ? ""),
                    type: "video/mp4"
                })
            }) : (0, t.jsx)("div", {
                className: "absolute inset-0 w-full h-full z-[0]",
                children: (0, t.jsx)(a.default, {
                    src: (0, r.normalizeImage)(n ? ? "") || "",
                    alt: "Background",
                    fill: !0,
                    className: "object-cover transition-opacity duration-700",
                    onLoad: () => p(!0),
                    priority: !0
                })
            }), (0, t.jsx)("div", {
                className: `absolute inset-0 z-[2] ${m||"bg-gradient-to-b from-background via-background/90 to-background/95"}`
            }), (0, t.jsxs)("div", {
                className: "relative z-[3] flex flex-col items-center py-16 sm:py-20",
                children: [i && (0, t.jsx)("div", {
                    className: "w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gray-900 rounded-full flex items-center justify-center mb-6 sm:mb-8 md:mb-10 ",
                    children: (0, t.jsx)(a.default, {
                        src: (0, r.normalizeImage)(i) || "",
                        alt: "Logo",
                        width: 96,
                        height: 96,
                        className: "object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24"
                    })
                }), (0, t.jsx)("h1", {
                    className: `lg:leading-snug max-w-7xl font-bold text-xl sm:text-4xl md:text-6xl lg:text-7xl text-center mb-4  ${!x?"text-gradient":""}`,
                    style: x ? {
                        color: x
                    } : void 0,
                    children: o
                }), (0, t.jsx)("p", {
                    className: "text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-6 max-w-5xl  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                    style: {
                        color: u || void 0
                    },
                    dangerouslySetInnerHTML: {
                        __html: String(c ? ? "")
                    }
                }), (0, t.jsx)("div", {
                    className: "flex sm:flex-row flex-col gap-4 sm:gap-6 justify-center",
                    children: d.map((e, a) => (0, t.jsxs)(s.default, {
                        href: e.href,
                        className: `${e.className||"link_button_blue"} inline-flex items-center justify-center`,
                        rel: "noopener noreferrer",
                        onClick: t => {
                            if (e.href.startsWith("#")) {
                                t.preventDefault();
                                let a = document.querySelector(e.href);
                                a && a.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }
                        },
                        children: [e.label, " ", e.icon && e.icon]
                    }, a))
                })]
            })]
        })
    }
}, 26930, e => {
    "use strict";
    e.s(["default", () => o]);
    var t = e.i(43476),
        a = e.i(71645),
        s = e.i(57688),
        l = e.i(70065),
        r = e.i(10936),
        n = e.i(47176),
        i = e.i(11583);

    function o({
        title: e = "Title Goes here",
        description: o = "description goes here",
        data: c,
        widthWrapper: d = "max-w-7xl"
    }) {
        let [m, x] = (0, a.useState)(0), [u, h] = (0, a.useState)(null), [p, f] = (0, a.useState)(null), g = (0, a.useRef)(null);
        if (!c || 0 === c.length || !c[m]) return null;
        let b = () => x(e => 0 === e ? Math.ceil(c.length / 2) - 1 : e - 1),
            j = () => x(e => e === Math.ceil(c.length / 2) - 1 ? 0 : e + 1),
            y = () => {
                if (!u || !p) return;
                let e = u - p;
                e > 50 ? j() : e < -50 && b(), h(null), f(null)
            };
        return (0, t.jsxs)("section", {
            className: "py-12 sm:py-16 px-4",
            children: [(0, t.jsxs)("div", {
                className: "text-center mb-12 sm:mb-16",
                children: [(0, t.jsx)("h2", {
                    className: "gradient-text text-xl sm:text-2xl md:text-4xl md:leading-snug mb-2 max-w-5xl mx-auto",
                    children: e
                }), o && (0, t.jsx)("p", {
                    className: "text-muted-foreground text-sm sm:text-base md:text-lg max-w-4xl mx-auto  [&_a]:text-blue-600",
                    dangerouslySetInnerHTML: {
                        __html: o ? (0, i.decode)(o) : ""
                    }
                })]
            }), (0, t.jsx)("div", {
                className: `hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${d} mx-auto`,
                children: c.map((e, a) => (0, t.jsx)(l.Card, {
                    className: "flex flex-col items-center text-center bg-card rounded-xl card-shadow p-4 sm:p-6 h-full",
                    children: (0, t.jsxs)(l.CardContent, {
                        className: "flex flex-col items-center p-0 flex-1",
                        children: [(0, t.jsx)("div", {
                            className: "w-16 sm:w-20 h-16 sm:h-20 bg-card rounded-xl card-shadow dark:shadow-none flex items-center justify-center mb-3 sm:mb-4",
                            children: (0, t.jsx)("div", {
                                className: "w-10 sm:w-16 h-10 sm:h-16 bg-card rounded-xl card-shadow dark:shadow-none flex items-center justify-center",
                                children: (0, t.jsx)(s.default, {
                                    src: (0, n.normalizeImage)(e.icon) || "",
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
                                __html: (0, i.decode)(e.description || "")
                            }
                        })]
                    })
                }, a))
            }), (0, t.jsxs)("div", {
                className: "sm:hidden relative max-w-sm mx-auto",
                children: [(0, t.jsxs)("div", {
                    className: "absolute right-0 -top-12 flex gap-2 z-10",
                    children: [(0, t.jsx)("button", {
                        onClick: b,
                        "aria-label": "next",
                        className: "bg-card rounded-full w-10 h-10 flex items-center justify-center shadow",
                        children: (0, t.jsx)(r.IoIosArrowBack, {
                            size: 20
                        })
                    }), (0, t.jsx)("button", {
                        onClick: j,
                        "aria-label": "prev",
                        className: "bg-card rounded-full w-10 h-10 flex items-center justify-center shadow",
                        children: (0, t.jsx)(r.IoIosArrowForward, {
                            size: 20
                        })
                    })]
                }), (0, t.jsx)("div", {
                    ref: g,
                    className: "flex flex-col gap-4 mt-20 select-none cursor-grab active:cursor-grabbing",
                    onTouchStart: e => {
                        f(null), h(e.targetTouches[0].clientY)
                    },
                    onTouchMove: e => {
                        f(e.targetTouches[0].clientY)
                    },
                    onTouchEnd: () => {
                        if (!u || !p) return;
                        let e = u - p;
                        e > 50 ? j() : e < -50 && b()
                    },
                    onMouseDown: e => {
                        f(null), h(e.clientY)
                    },
                    onMouseMove: e => {
                        null !== u && f(e.clientY)
                    },
                    onMouseUp: y,
                    onMouseLeave: y,
                    children: (() => {
                        let e = 2 * m;
                        return c.slice(e, e + 2)
                    })().map((e, a) => (0, t.jsx)(l.Card, {
                        className: "flex flex-col items-center text-center p-6 h-auto min-h-[200px] transition-transform duration-200",
                        children: (0, t.jsxs)(l.CardContent, {
                            className: "flex flex-col items-center justify-center p-0 w-full",
                            children: [(0, t.jsx)("div", {
                                className: "w-12 h-12 bg-card dark:bg-white dark:shadow-none rounded-xl card-shadow flex items-center justify-center mb-3",
                                children: (0, t.jsx)(s.default, {
                                    src: (0, n.normalizeImage)(e.icon) || "",
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
                                    __html: (0, i.decode)(e.description || "")
                                }
                            })]
                        })
                    }, `${m}-${a}`))
                }), (0, t.jsx)("div", {
                    className: "flex justify-center mt-4 gap-2",
                    children: Array.from({
                        length: Math.ceil(c.length / 2)
                    }).map((e, a) => (0, t.jsx)("button", {
                        onClick: () => x(a),
                        "aria-label": `Go to slide ${a+1}`,
                        className: "flex items-center justify-center p-3 rounded-full",
                        children: (0, t.jsx)("span", {
                            className: `w-2 h-2 rounded-full ${a===m?"bg-blue-600":"bg-gray-300"}`
                        })
                    }, a))
                })]
            })]
        })
    }
}, 52030, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        a = e.i(71645),
        s = e.i(67881),
        l = e.i(49377);

    function r() {
        let [e, r] = (0, a.useState)({}), [c, d] = (0, a.useState)(!1), [m, x] = (0, a.useState)(0), [u, h] = (0, a.useState)(0), p = (e = 1, t = 10) => {
            let a = Math.floor(Math.random() * (t - e + 1)) + e,
                s = Math.floor(Math.random() * (t - e + 1)) + e;
            x(a), h(s)
        };
        (0, a.useEffect)(() => {
            p()
        }, []);
        let f = async e => {
            e.preventDefault();
            let t = e.currentTarget,
                a = (e => {
                    let t = {},
                        a = new FormData(e);
                    a.get("name") ? .toString().trim() || (t.name = "Name is required");
                    let s = a.get("email") ? .toString().trim();
                    s ? /^\S+@\S+\.\S+$/.test(s) || (t.email = "Invalid email") : t.email = "Email is required", a.get("phone") ? .toString().trim() || (t.phone = "Phone number is required"), a.get("company") ? .toString().trim() || (t.company = "Company name is required"), a.get("partnership_type") ? .toString().trim() || (t.partnership_type = "Partnership type is required"), a.get("project_description") ? .toString().trim() || (t.project_description = "Project description is required");
                    let l = a.get("captcha") ? .toString().trim() || "",
                        r = String(m + u);
                    return l ? l !== r && (t.captcha = "Captcha is incorrect") : t.captcha = "Captcha is required", t
                })(t);
            if (r(a), Object.keys(a).length > 0) {
                a.captcha && p();
                return
            }
            let s = new FormData(t);
            try {
                let e = await fetch("/api/submit-form", {
                        method: "POST",
                        body: s
                    }),
                    a = await e.json();
                if (!e.ok) throw Error(a.message || "Failed to submit");
                d(!0), t.reset(), r({})
            } catch (e) {
                console.error(e), alert("Something went wrong. Please try again."), p()
            }
        };
        return c ? (0, t.jsxs)("div", {
            className: "bg-white text-black rounded-2xl p-8 text-center",
            children: [(0, t.jsx)("h3", {
                className: "text-2xl font-semibold mb-3",
                children: "Thank You!"
            }), (0, t.jsx)("p", {
                className: "text-gray-700 mb-4",
                children: "Your partnership request has been submitted successfully. Our team will contact you shortly to discuss collaboration opportunities."
            }), (0, t.jsx)(s.Button, {
                onClick: () => d(!1),
                variant: "default",
                children: "Submit Another Request"
            })]
        }) : (0, t.jsxs)("form", {
            className: "space-y-6",
            onSubmit: f,
            children: [(0, t.jsx)("h4", {
                className: "text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 text-center lg:text-left",
                children: "Become Our Partner"
            }), (0, t.jsx)("input", {
                type: "hidden",
                name: "form_name",
                value: "partner"
            }), (0, t.jsx)(n, {
                label: "Full Name",
                name: "name",
                type: "text",
                error: e.name
            }), (0, t.jsxs)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [(0, t.jsx)(n, {
                    label: "Work Email",
                    name: "email",
                    type: "email",
                    error: e.email
                }), (0, t.jsx)(n, {
                    label: "Phone Number",
                    name: "phone",
                    type: "text",
                    error: e.phone
                })]
            }), (0, t.jsxs)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [(0, t.jsx)(n, {
                    label: "Company Name",
                    name: "company",
                    type: "text",
                    error: e.company
                }), (0, t.jsx)(i, {
                    label: "",
                    name: "partnership_type",
                    error: e.partnership_type,
                    options: [{
                        value: "",
                        label: "Select Partnership Type"
                    }, {
                        value: "technology",
                        label: "Technology Partnership"
                    }, {
                        value: "business",
                        label: "Business Development"
                    }, {
                        value: "reseller",
                        label: "Reseller Partnership"
                    }, {
                        value: "referral",
                        label: "Referral Partnership"
                    }, {
                        value: "strategic",
                        label: "Strategic Alliance"
                    }, {
                        value: "other",
                        label: "Other"
                    }]
                })]
            }), (0, t.jsx)(o, {
                label: "Describe your Project/Idea in brief",
                name: "project_description",
                error: e.project_description
            }), (0, t.jsxs)("div", {
                className: "flex flex-col sm:flex-row sm:items-center gap-4",
                children: [(0, t.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, t.jsx)("input", {
                        type: "checkbox",
                        id: "nda",
                        name: "nda",
                        className: "accent-blue-600"
                    }), (0, t.jsx)("label", {
                        htmlFor: "nda",
                        className: "text-sm",
                        children: "Send me a copy of NDA"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, t.jsx)("input", {
                        type: "checkbox",
                        id: "updates",
                        name: "updates",
                        className: "accent-blue-600"
                    }), (0, t.jsx)("label", {
                        htmlFor: "updates",
                        className: "text-sm",
                        children: "Keep me updated on partnership opportunities"
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: (0, t.jsxs)("div", {
                    className: "flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-md border border-gray-200",
                    children: [(0, t.jsx)("span", {
                        className: "font-medium",
                        children: m
                    }), (0, t.jsx)("span", {
                        className: "font-medium",
                        children: "+"
                    }), (0, t.jsx)("span", {
                        className: "font-medium",
                        children: u
                    }), (0, t.jsx)("span", {
                        className: "font-medium",
                        children: "="
                    }), (0, t.jsx)("input", {
                        type: "text",
                        name: "captcha",
                        className: "w-16 bg-transparent border-b border-gray-300 text-center focus:outline-none focus:border-blue-600"
                    }), (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => p(),
                        className: "inline-flex items-center px-2 py-1 hover:bg-gray-100",
                        children: (0, t.jsx)(l.RxReload, {})
                    })]
                })
            }), e.captcha && (0, t.jsx)("p", {
                className: "text-red-500 text-sm mt-1",
                children: e.captcha
            }), (0, t.jsx)(s.Button, {
                className: "rounded-full w-full sm:w-auto",
                type: "submit",
                variant: "customGreen",
                size: "lg",
                name: "submit",
                children: "Request Proposal"
            })]
        })
    }
    let n = ({
            label: e,
            type: s,
            name: l,
            error: r
        }) => {
            let [n, i] = (0, a.useState)(""), [o, c] = (0, a.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("input", {
                    type: s,
                    name: l,
                    value: n,
                    onChange: e => i(e.target.value),
                    onFocus: () => c(!0),
                    onBlur: () => c(!1),
                    className: `peer w-full bg-transparent border-b border-gray-300 text-gray-800 focus:outline-none px-0 pt-4 pb-1 ${r?"border-red-500":""}`
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 transition-all duration-200 pointer-events-none ${n||o?"-translate-y-4 text-xs text-blue-600":"top-3 text-base text-gray-500"}`,
                    children: e
                }), r && (0, t.jsx)("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: r
                })]
            })
        },
        i = ({
            label: e,
            name: s,
            error: l,
            options: r
        }) => {
            let [n, i] = (0, a.useState)(""), [o, c] = (0, a.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("select", {
                    name: s,
                    value: n,
                    onChange: e => i(e.target.value),
                    onFocus: () => c(!0),
                    onBlur: () => c(!1),
                    className: `peer w-full bg-transparent border-b border-gray-300 text-gray-800 focus:outline-none px-0 pt-4 pb-1 appearance-none ${l?"border-red-500":""}`,
                    children: r.map(e => (0, t.jsx)("option", {
                        value: e.value,
                        children: e.label
                    }, e.value))
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 transition-all duration-200 pointer-events-none ${n||o?"-translate-y-4 text-xs text-blue-600":"top-3 text-base text-gray-500"}`,
                    children: e
                }), l && (0, t.jsx)("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: l
                })]
            })
        },
        o = ({
            label: e,
            name: s,
            error: l
        }) => {
            let [r, n] = (0, a.useState)(""), [i, o] = (0, a.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("textarea", {
                    name: s,
                    rows: 2,
                    value: r,
                    onChange: e => n(e.target.value),
                    onFocus: () => o(!0),
                    onBlur: () => o(!1),
                    className: `peer w-full bg-transparent text-base border-b border-gray-300 text-gray-800 focus:outline-none px-0 pt-4 pb-1 resize-none ${l?"border-red-500":""}`
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 transition-all duration-200 pointer-events-none ${r||i?"-translate-y-4 text-xs text-blue-600":"top-3 text-base text-gray-500"}`,
                    children: e
                }), l && (0, t.jsx)("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: l
                })]
            })
        }
}]);