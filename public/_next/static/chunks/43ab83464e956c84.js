(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 95242, 82373, 35116, e => {
    "use strict";
    e.s(["Pause", () => l], 95242);
    var t = e.i(75254);
    let l = (0, t.default)("pause", [
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
    e.s(["Volume2", () => a], 82373);
    let a = (0, t.default)("volume-2", [
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
    e.s(["VolumeX", () => s], 35116);
    let s = (0, t.default)("volume-x", [
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
}, 61851, e => {
    "use strict";
    e.s(["default", () => o]);
    var t = e.i(43476),
        l = e.i(71645),
        a = e.i(70065),
        s = e.i(31343),
        r = e.i(95242),
        i = e.i(82373),
        n = e.i(35116),
        c = e.i(22016),
        x = e.i(47176);
    let u = null,
        d = ({
            testimonial: e
        }) => {
            let a = (0, l.useRef)(null),
                [d, o] = (0, l.useState)(!1),
                [m, g] = (0, l.useState)(!0);
            return (0, l.useEffect)(() => {
                let e = a.current;
                if (!e) return;
                let t = setInterval(() => {
                    u && u !== e && (e.pause(), o(!1))
                }, 150);
                return () => clearInterval(t)
            }, []), (0, t.jsxs)("div", {
                className: "relative w-full h-full flex flex-col",
                children: [(0, t.jsxs)("div", {
                    className: "w-full aspect-[2/3] bg-black rounded-xl overflow-hidden flex items-center justify-center relative",
                    children: [(0, t.jsx)("video", {
                        ref: a,
                        src: (0, x.normalizeImage)(e.client_video.url ? ? "") || "",
                        className: "w-full h-full object-cover rounded-xl",
                        playsInline: !0,
                        preload: "none",
                        poster: (0, x.normalizeImage)(e.client_image.url ? ? "") || "",
                        muted: m,
                        onPlay: () => o(!0),
                        onPause: () => o(!1)
                    }), (0, t.jsx)("button", {
                        onClick: () => {
                            a.current && (d ? (a.current.pause(), o(!1), u === a.current && (u = null)) : (u && u !== a.current && u.pause(), u = a.current, a.current.play(), o(!0)))
                        },
                        className: "absolute bottom-1 left-1 w-8 h-8 lg:w-10 lg:h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10",
                        "aria-label": d ? "Pause testimonial video" : "Play testimonial video",
                        children: d ? (0, t.jsx)(r.Pause, {
                            className: "w-3 h-3 lg:w-5 lg:h-5 text-white"
                        }) : (0, t.jsx)(s.Play, {
                            className: "w-3 h-3 lg:w-5 lg:h-5 text-white ml-0.5"
                        })
                    }), (0, t.jsx)("button", {
                        onClick: () => {
                            a.current && (a.current.muted = !m, g(!m))
                        },
                        className: "absolute bottom-1 right-1 w-8 h-8 lg:w-10 lg:h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10",
                        "aria-label": m ? "Unmute testimonial video" : "Mute testimonial video",
                        children: m ? (0, t.jsx)(n.VolumeX, {
                            className: "w-3 h-3 lg:w-5 lg:h-5 text-white"
                        }) : (0, t.jsx)(i.Volume2, {
                            className: "w-3 h-3 lg:w-5 lg:h-5 text-white"
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col flex-grow px-1 lg:px-0 mt-2",
                    children: [(0, t.jsx)("h4", {
                        className: "font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-foreground text-center line-clamp-2 mb-1 lg:mb-2",
                        children: e.card_title_
                    }), (0, t.jsx)("p", {
                        className: "text-muted-foreground text-xs lg:text-sm text-center line-clamp-3 lg:line-clamp-4 flex-grow  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                        dangerouslySetInnerHTML: {
                            __html: e.card_description
                        }
                    }), e.card_button && (0, t.jsx)("div", {
                        className: "text-center mt-2 lg:mt-4 pt-2 lg:pt-3 border-t border-gray-100 dark:border-gray-800",
                        children: (0, t.jsx)(c.default, {
                            className: "link_button_blue text-xs lg:text-sm",
                            href: "#",
                            children: e.card_button
                        })
                    })]
                })]
            })
        },
        o = ({
            testimonialsData: e,
            wrapperWidth: l = "max-w-7xl"
        }) => e && e.client_card ? .length ? (0, t.jsx)("section", {
            className: "py-8 lg:py-16 px-4",
            children: (0, t.jsxs)("div", {
                className: `${l} mx-auto w-full`,
                children: [(0, t.jsxs)("div", {
                    className: "text-center mb-8 lg:mb-10",
                    children: [e.title && (0, t.jsx)("h2", {
                        className: "gradient-text text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-5xl mx-auto mb-2 lg:mb-3",
                        children: e.title
                    }), e.description && (0, t.jsx)("p", {
                        className: "text-muted-foreground text-xs sm:text-sm lg:text-base max-w-2xl mx-auto  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                        dangerouslySetInnerHTML: {
                            __html: e.description || ""
                        }
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-6 xl:gap-8",
                    children: e.client_card.slice(0, 4).map((e, l) => (0, t.jsx)(a.Card, {
                        className: "rounded-xl bg-transparent lg:bg-card h-full flex flex-col",
                        children: (0, t.jsx)(a.CardContent, {
                            className: "p-0 lg:p-4 text-center flex flex-col items-center h-full",
                            children: (0, t.jsx)(d, {
                                testimonial: e,
                                index: l
                            })
                        })
                    }, l))
                }), (0, t.jsx)("div", {
                    className: "text-center my-8 lg:mt-8",
                    children: (0, t.jsx)(c.default, {
                        href: "/testimonial",
                        className: "link_button_blue text-sm lg:text-base",
                        children: "See What Clients Say"
                    })
                })]
            })
        }) : null
}, 81370, e => {
    e.n(e.i(61851))
}]);