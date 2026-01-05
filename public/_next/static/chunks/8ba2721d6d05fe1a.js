(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 98400, e => {
    "use strict";
    e.s(["default", () => m], 98400);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(40141);

    function a(e) {
        return (0, l.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 1024 1024"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"
                },
                child: []
            }]
        })(e)
    }

    function r(e) {
        return (0, l.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 1024 1024"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
                },
                child: []
            }]
        })(e)
    }
    var i = e.i(70065),
        n = e.i(57688),
        c = e.i(22016),
        d = e.i(47176),
        x = e.i(11583);

    function m({
        title: e = "Client Success Stories",
        description: l = "",
        data: m,
        wrapperWidth: o = "max-w-7xl"
    }) {
        let [u, h] = (0, s.useState)(0), g = (0, s.useCallback)(() => h(e => 0 === e ? m.length - 1 : e - 1), [m.length]), f = (0, s.useCallback)(() => h(e => e === m.length - 1 ? 0 : e + 1), [m.length]), p = m[u];
        return (0, t.jsxs)("section", {
            className: "py-10 sm:py-14 px-4",
            children: [(0, t.jsxs)("div", {
                className: "text-center mb-10 sm:mb-8",
                children: [(0, t.jsx)("h2", {
                    className: "gradient-text text-3xl sm:text-4xl md:text-[2.5rem] font-medium mx-auto mb-2 max-w-4xl",
                    children: e
                }), (0, t.jsx)("p", {
                    className: "text-muted-foreground text-base max-w-2xl mx-auto",
                    children: l
                })]
            }), (0, t.jsx)("div", {
                className: `relative ${o} mx-auto rounded-2xl bg-card card-shadow overflow-hidden`,
                children: (0, t.jsxs)(i.CardContent, {
                    className: "flex flex-col sm:flex-row items-center",
                    children: [(0, t.jsx)("div", {
                        className: " relative w-full sm:w-5/12 md:w-4/12 lg:w-5/12 h-64 sm:h-80 md:h-[380px] lg:h-[420px] flex-shrink-0 overflow-hidden rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none ",
                        children: p.image ? .url ? (0, t.jsx)(n.default, {
                            src: (0, d.normalizeImage)(p.image.url),
                            alt: p.title,
                            fill: !0,
                            loading: "lazy",
                            decoding: "async",
                            sizes: "(max-width:768px) 100vw, 40vw",
                            className: "object-cover rounded-tl-xl sm:rounded-bl-xl"
                        }) : (0, t.jsx)("div", {
                            className: "w-full h-full bg-gray-200 flex items-center justify-center",
                            children: (0, t.jsx)("span", {
                                children: "No Image"
                            })
                        })
                    }), (0, t.jsxs)("div", {
                        className: " w-full sm:w-7/12 md:w-8/12 lg:w-7/12 flex flex-col gap-4 p-6 sm:p-6 md:p-8 lg:p-10 text-center sm:text-left items-center sm:items-start justify-center ",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col sm:flex-row gap-2 mb-2",
                            children: [p.category ? .name && (0, t.jsx)("span", {
                                className: "inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium",
                                children: p.category.name
                            }), p.date && (0, t.jsx)("span", {
                                className: "text-muted-foreground text-sm",
                                children: p.date
                            })]
                        }), (0, t.jsx)("h3", {
                            className: "text-2xl sm:text-3xl md:text-4xl font-semibold",
                            children: p.title
                        }), (0, t.jsx)("p", {
                            className: "text-muted-foreground dark:text-white/80 text-sm sm:text-base md:text-lg",
                            dangerouslySetInnerHTML: {
                                __html: p.description ? (0, x.decode)(p.description) : ""
                            }
                        }), (0, t.jsx)(c.default, {
                            href: p.buttonLink,
                            className: "link_button_outline mt-2",
                            children: "View"
                        })]
                    }), (0, t.jsx)("button", {
                        onClick: g,
                        "aria-label": "Previous Slide",
                        className: "absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card card-shadow hover:bg-muted transition dark:bg-white dark:text-black",
                        children: (0, t.jsx)(a, {
                            size: 18
                        })
                    }), (0, t.jsx)("button", {
                        onClick: f,
                        "aria-label": "Next Slide",
                        className: "absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card card-shadow hover:bg-muted transition dark:bg-white dark:text-black",
                        children: (0, t.jsx)(r, {
                            size: 18
                        })
                    })]
                })
            })]
        })
    }
}, 84237, e => {
    "use strict";
    e.s(["CategoryAccordion", () => c]);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(70065),
        a = e.i(57688),
        r = e.i(90106),
        i = e.i(50719),
        n = e.i(47176);
    let c = ({
        categories: e,
        title: c,
        subtitle: d,
        widthWrapper: x = "max-w-7xl"
    }) => {
        let [m, o] = s.default.useState(0), [u, h] = s.default.useState(null), g = e[m], f = e => e && "" !== e.trim();
        return (0, t.jsx)("section", {
            className: "w-full relative py-12 px-4 sm:px-0",
            children: (0, t.jsxs)("div", {
                className: `${x} mx-auto`,
                children: [c && (0, t.jsxs)("div", {
                    className: "text-center mb-10",
                    children: [(0, t.jsx)("h2", {
                        className: "gradient-text text-xl sm:text-2xl md:text-4xl font-medium mb-4 leading-snug max-w-5xl mx-auto",
                        children: c
                    }), d && (0, t.jsx)("p", {
                        className: "max-w-4xl mx-auto font-normal text-muted-foreground text-sm sm:text-base text-center ",
                        children: d
                    })]
                }), (0, t.jsx)("div", {
                    className: `sm:hidden ${x} mx-auto`,
                    children: e.map((e, s) => (0, t.jsxs)(l.Card, {
                        className: "mb-4",
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center justify-between p-4 cursor-pointer",
                            onClick: () => (e => {
                                h(u === e ? null : e), u !== e && o(e)
                            })(s),
                            children: [(0, t.jsx)("div", {
                                className: "flex gap-3 items-center",
                                children: (0, t.jsx)("h3", {
                                    className: "text-base font-medium",
                                    children: e.title
                                })
                            }), (0, t.jsx)(i.HiChevronDown, {
                                className: `transition-transform duration-300 ${u===s?"rotate-180":""}`,
                                size: 20
                            })]
                        }), u === s && (0, t.jsx)(l.CardContent, {
                            className: "p-4",
                            children: (0, t.jsx)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: e.cards.map((e, s) => (0, t.jsxs)(l.Card, {
                                    className: "h-16 sm:h-8 lg:h-10 rounded-lg flex items-center gap-3 sm:gap-4 px-4 sm:px-6 shadow-none",
                                    children: [f(e.icon) ? (0, t.jsx)(a.default, {
                                        src: (0, n.normalizeImage)(e.icon) || "",
                                        alt: e.title,
                                        width: 30,
                                        height: 30,
                                        className: "flex-shrink-0 ",
                                        loading: "lazy"
                                    }) : (0, t.jsx)("div", {
                                        className: "w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0",
                                        children: (0, t.jsx)("span", {
                                            className: "text-xs"
                                        })
                                    }), (0, t.jsx)("span", {
                                        className: "font-medium text-sm sm:text-base",
                                        children: e.title
                                    })]
                                }, s))
                            })
                        })]
                    }, s))
                }), (0, t.jsx)(l.Card, {
                    className: "hidden sm:flex rounded-2xl lg:container mx-auto overflow-hidden",
                    children: (0, t.jsxs)("div", {
                        className: "flex w-full min-h-[400px]",
                        children: [(0, t.jsx)(l.CardContent, {
                            className: "w-1/2 px-10 sm:px-2 lg:px-10  py-12 bg-blue-500 text-white border-r border-gray-200 dark:border-gray-700 overflow-y-auto max-h-[400px] custom-scrollbar",
                            children: (0, t.jsx)("div", {
                                className: "space-y-4",
                                children: e.map((s, l) => (0, t.jsxs)("div", {
                                    children: [(0, t.jsxs)("div", {
                                        className: `clickable-row ${m===l?"bg-blue-400":"hover:bg-blue-400"}`,
                                        onClick: () => {
                                            o(l)
                                        },
                                        children: [(0, t.jsx)("h3", {
                                            className: "font-normal text-lg sm:text-xl lg:text-2xl",
                                            children: s.title
                                        }), m === l && (0, t.jsx)("span", {
                                            className: "ml-auto text-xl sm:text-2xl lg:text-3xl",
                                            children: (0, t.jsx)(r.BsArrowRight, {})
                                        })]
                                    }), l !== e.length - 1 && (0, t.jsx)("div", {
                                        className: "my-4"
                                    })]
                                }, l))
                            })
                        }), (0, t.jsx)("div", {
                            className: "w-1/2 p-6 sm:p-2 lg:p-6 overflow-y-auto max-h-[400px] custom-scrollbar dark:bg-white",
                            children: g ? (0, t.jsx)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: g.cards.map((e, s) => (0, t.jsxs)(l.Card, {
                                    className: "h-16 sm:h-14 lg:h-20 rounded-lg flex items-center gap-3 sm:gap-1 px-4 sm:px-6 dark:bg-gray-400/10 dark:text-black dark:shadow-none",
                                    children: [f(e.icon) ? (0, t.jsx)(a.default, {
                                        src: (0, n.normalizeImage)(e.icon) || "",
                                        alt: e.title,
                                        width: 30,
                                        height: 30,
                                        className: "flex-shrink-0 "
                                    }) : (0, t.jsx)("div", {
                                        className: "w-8 h-8 bg-gray-100 dark:bg-black rounded flex items-center justify-center flex-shrink-0",
                                        children: (0, t.jsx)("span", {
                                            className: "text-xs"
                                        })
                                    }), (0, t.jsx)("span", {
                                        className: "font-medium text-sm sm:text-sm lg:text-lg line-clamp-2",
                                        children: e.title
                                    })]
                                }, s))
                            }) : (0, t.jsx)("div", {
                                className: "flex items-center justify-center h-full",
                                children: (0, t.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: "Select a category to view technologies"
                                })
                            })
                        })]
                    })
                })]
            })
        })
    }
}, 94641, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        s = e.i(70703),
        l = e.i(71645);
    let a = (0, s.default)(() => e.A(31013), {
            loadableGenerated: {
                modules: [81370]
            },
            ssr: !1,
            loading: () => (0, t.jsx)("div", {
                className: "min-h-[400px]",
                "aria-hidden": !0
            })
        }),
        r = ({
            testimonialsData: e,
            wrapperWidth: s = "max-w-7xl"
        }) => {
            let r = (0, l.useRef)(null),
                [i, n] = (0, l.useState)(!1);
            return ((0, l.useEffect)(() => {
                if (!r.current) return;
                let e = new IntersectionObserver(t => {
                    t.forEach(t => {
                        t.isIntersecting && (n(!0), e.disconnect())
                    })
                }, {
                    threshold: .2
                });
                return e.observe(r.current), () => e.disconnect()
            }, []), e && e.client_card ? .length) ? (0, t.jsx)("section", {
                ref: r,
                children: i ? (0, t.jsx)(a, {
                    testimonialsData: e,
                    wrapperWidth: s
                }) : (0, t.jsx)("div", {
                    className: "min-h-[400px]",
                    "aria-hidden": !0
                })
            }) : null
        }
}, 69449, e => {
    "use strict";
    e.s(["default", () => a]);
    var t = e.i(43476),
        s = e.i(57688),
        l = e.i(71645);

    function a({
        logos: e = [],
        rounded: a = "rounded-full",
        gap: r = "gap-8",
        wrapperWidth: i = "max-w-7xl"
    }) {
        let n = (0, l.useRef)(null),
            [c, d] = (0, l.useState)({
                isDragging: !1,
                startX: 0,
                scrollLeft: 0
            }),
            x = e => {
                n.current && d({
                    isDragging: !0,
                    startX: e - n.current.offsetLeft,
                    scrollLeft: n.current.scrollLeft
                })
            },
            m = e => {
                if (!c.isDragging || !n.current) return;
                let t = (e - n.current.offsetLeft - c.startX) * 2;
                n.current.scrollLeft = c.scrollLeft - t
            },
            o = () => d(e => ({ ...e,
                isDragging: !1
            }));
        return (0, t.jsx)("section", {
            className: "relative",
            children: (0, t.jsx)("div", {
                ref: n,
                className: `relative ${i} mx-auto overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide min-h-[96px]`,
                onMouseDown: e => x(e.pageX),
                onMouseMove: e => m(e.pageX),
                onMouseUp: o,
                onMouseLeave: o,
                onTouchStart: e => x(e.touches[0].pageX),
                onTouchMove: e => m(e.touches[0].pageX),
                onTouchEnd: o,
                children: (0, t.jsx)("div", {
                    className: `flex ${r} w-max py-3 px-4 select-none`,
                    children: e.map((e, l) => {
                        let r, i;
                        return ("string" == typeof e ? (r = e, i = `Company ${l+1}`) : (r = e.src, i = e.alt || `Company ${l+1}`), r) ? (0, t.jsx)("div", {
                            className: `flex-shrink-0 ${a} bg-transparent flex items-center justify-center p-1 lg:p-3 w-32 h-12 md:h-16 lg:h-14 md:w-36 lg:w-40`,
                            children: (0, t.jsx)(s.default, {
                                src: r || "",
                                alt: i,
                                width: 140,
                                height: 80,
                                sizes: "(max-width:640px) 120px, (max-width:1024px) 140px, 160px",
                                priority: 0 === l,
                                loading: 0 === l ? "eager" : "lazy",
                                blurDataURL: 0 === l ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PSc4Jz48cmVjdCB3aWR0aD0nMjQnIGhlaWdodD0nOCcgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjMnLz48L3N2Zz4=" : "",
                                className: "w-32 h-10 md:w-24 md:h-10 lg:w-28 lg:h-12 object-contain dark:invert dark:brightness-0",
                                onError: e => {
                                    e.currentTarget.style.visibility = "hidden"
                                }
                            })
                        }, l) : null
                    })
                })
            })
        })
    }
}]);