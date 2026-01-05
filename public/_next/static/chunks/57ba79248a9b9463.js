(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 56329, e => {
    "use strict";
    e.s(["default", () => c]);
    var r = e.i(43476),
        a = e.i(57688),
        t = e.i(70065),
        s = e.i(47176),
        n = e.i(71645);
    let l = [{
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

    function c() {
        let e = (0, n.useRef)(null),
            [c, i] = (0, n.useState)(!1),
            [d, o] = (0, n.useState)(0),
            [m, u] = (0, n.useState)(0),
            x = () => {
                i(!1), e.current && (e.current.style.cursor = "grab")
            };
        return (0, r.jsxs)("section", {
            className: "relative ",
            children: [(0, r.jsxs)("div", {
                className: "flex items-center justify-center gap-4 mb-4 px-4 mx-auto max-w-4xl",
                children: [(0, r.jsx)("div", {
                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                }), (0, r.jsx)("h2", {
                    className: "text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 text-center",
                    children: "Trusted by 100,000+ Businesses across 57 Countries"
                }), (0, r.jsx)("div", {
                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                })]
            }), (0, r.jsx)("div", {
                ref: e,
                className: "relative max-w-7xl mx-auto overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide",
                onMouseDown: r => {
                    e.current && (i(!0), o(r.pageX - e.current.offsetLeft), u(e.current.scrollLeft), e.current.style.cursor = "grabbing")
                },
                onMouseMove: r => {
                    if (!c || !e.current) return;
                    r.preventDefault();
                    let a = r.pageX - e.current.offsetLeft;
                    e.current.scrollLeft = m - (a - d) * 1.5
                },
                onMouseUp: x,
                onMouseLeave: x,
                onTouchStart: r => {
                    e.current && (i(!0), o(r.touches[0].pageX - e.current.offsetLeft), u(e.current.scrollLeft))
                },
                onTouchMove: r => {
                    if (!c || !e.current) return;
                    let a = r.touches[0].pageX - e.current.offsetLeft;
                    e.current.scrollLeft = m - (a - d) * 1.5
                },
                onTouchEnd: () => {
                    i(!1)
                },
                children: (0, r.jsx)("div", {
                    className: "flex gap-8 w-max py-3 px-4 select-none",
                    children: l.map((e, n) => (0, r.jsx)(t.Card, {
                        className: "flex-shrink-0 rounded-full bg-transparent flex items-center justify-center p-3 h-12 md:h-16 lg:h-14 w-32 md:w-36 lg:w-40 shadow-sm dark:shadow-none transition-transform duration-200 hover:scale-105",
                        children: (0, r.jsx)(a.default, {
                            src: (0, s.normalizeImage)(e.src) || "",
                            alt: e.alt,
                            width: 140,
                            height: 80,
                            sizes: "(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px",
                            className: "w-20 h-6 md:w-24 md:h-10 lg:w-28 lg:h-12 object-contain dark:invert dark:brightness-0",
                            onError: e => {
                                e.currentTarget.style.display = "none"
                            }
                        })
                    }, n))
                })
            })]
        })
    }
}, 70065, e => {
    "use strict";
    e.s(["Card", () => s, "CardContent", () => n]);
    var r = e.i(43476),
        a = e.i(71645),
        t = e.i(47163);
    let s = a.forwardRef(({
        className: e,
        ...a
    }, s) => (0, r.jsx)("div", {
        ref: s,
        className: (0, t.cn)("rounded-xl bg-card text-card-foreground card-shadow", e),
        ...a
    }));
    s.displayName = "Card", a.forwardRef(({
        className: e,
        ...a
    }, s) => (0, r.jsx)("div", {
        ref: s,
        className: (0, t.cn)("flex flex-col space-y-1.5 p-6", e),
        ...a
    })).displayName = "CardHeader", a.forwardRef(({
        className: e,
        ...a
    }, s) => (0, r.jsx)("div", {
        ref: s,
        className: (0, t.cn)("font-semibold leading-none tracking-tight", e),
        ...a
    })).displayName = "CardTitle", a.forwardRef(({
        className: e,
        ...a
    }, s) => (0, r.jsx)("div", {
        ref: s,
        className: (0, t.cn)("text-sm text-muted-foreground", e),
        ...a
    })).displayName = "CardDescription";
    let n = a.forwardRef(({
        className: e,
        ...a
    }, s) => (0, r.jsx)("div", {
        ref: s,
        className: (0, t.cn)("p-0 pt-0", e),
        ...a
    }));
    n.displayName = "CardContent", a.forwardRef(({
        className: e,
        ...a
    }, s) => (0, r.jsx)("div", {
        ref: s,
        className: (0, t.cn)("flex items-center p-6 pt-0", e),
        ...a
    })).displayName = "CardFooter"
}, 37332, e => {
    "use strict";
    e.s(["default", () => n]);
    var r = e.i(43476),
        a = e.i(11583),
        t = e.i(71645),
        s = e.i(10936);

    function n({
        title: e = "Frequently Asked Questions",
        faqs: n = [],
        twoColumn: l = !0,
        widthWrapper: c = "max-w-7xl"
    }) {
        let [i, d] = (0, t.useState)(null), o = l ? n.slice(0, Math.ceil(n.length / 2)) : n, m = l ? n.slice(Math.ceil(n.length / 2)) : [], u = (e, t) => (0, r.jsx)("div", {
            className: "lg:space-y-6 space-y-2",
            children: e.map((e, n) => (0, r.jsx)("div", {
                className: "",
                style: {
                    animationDelay: `${100*n}ms`
                },
                children: (0, r.jsxs)("div", {
                    className: "accordion-item bg-card rounded-lg card-shadow overflow-hidden",
                    children: [(0, r.jsxs)("button", {
                        className: "accordion-trigger",
                        onClick: () => ((e, r) => {
                            let a = `${r}-${e}`;
                            d(i === a ? null : a)
                        })(n, t),
                        children: [(0, r.jsx)("h3", {
                            className: "font-normal text-base md:font-medium md:text-base",
                            children: e.question
                        }), (0, r.jsx)("div", {
                            className: "flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center rounded-md",
                            children: (0, r.jsx)("div", {
                                className: "w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none rounded-md ",
                                children: (0, r.jsx)(s.IoMdArrowDropdown, {
                                    className: `w-6 h-6 transition-transform duration-300 ${i===`${t}-${n}`?"rotate-180":""}`
                                })
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: `accordion-content px-6 overflow-hidden transition-all duration-300 ${i===`${t}-${n}`?"max-h-96 py-4":"max-h-0"}`,
                        children: (0, r.jsx)("div", {
                            className: "text-muted-foreground  [&_a]:text-blue-600 [&_ul]:list-disc  [&_ul]:ml-5  [&_ol]:list-decimal  [&_ol]:ml-5 [&_a:hover]:underline ",
                            dangerouslySetInnerHTML: {
                                __html: (0, a.decode)(e.answer) || ""
                            }
                        })
                    })]
                })
            }, `${t}-${n}`))
        });
        return (0, r.jsx)("section", {
            className: "w-full lg:py-16 py-16 px-4",
            children: (0, r.jsxs)("div", {
                className: `${c} mx-auto`,
                children: [(0, r.jsx)("h2", {
                    className: "text-center gradient-text font-medium text-xl sm:text-4xl lg:mb-12 mb-6",
                    children: e
                }), (0, r.jsxs)("div", {
                    className: `grid lg:gap-6 gap-4 ${l?"grid-cols-1 lg:grid-cols-2":"grid-cols-1"}`,
                    children: [u(o, "left"), l && u(m, "right")]
                })]
            })
        })
    }
}]);