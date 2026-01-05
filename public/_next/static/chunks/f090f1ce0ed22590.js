(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 34888, e => {
    "use strict";
    e.s(["default", () => u], 34888);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(30013),
        a = e.i(57688),
        r = e.i(73375),
        i = e.i(63059),
        n = e.i(75254);
    let c = (0, n.default)("radio", [
            ["path", {
                d: "M16.247 7.761a6 6 0 0 1 0 8.478",
                key: "1fwjs5"
            }],
            ["path", {
                d: "M19.075 4.933a10 10 0 0 1 0 14.134",
                key: "ehdyv1"
            }],
            ["path", {
                d: "M4.925 19.067a10 10 0 0 1 0-14.134",
                key: "1q22gi"
            }],
            ["path", {
                d: "M7.753 16.239a6 6 0 0 1 0-8.478",
                key: "r2q7qm"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2",
                key: "1c9p78"
            }]
        ]),
        o = (0, n.default)("user", [
            ["path", {
                d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                key: "975kel"
            }],
            ["circle", {
                cx: "12",
                cy: "7",
                r: "4",
                key: "17ys0d"
            }]
        ]);
    var d = e.i(47176);
    let m = ({
        card: e
    }) => (0, t.jsx)("div", {
        className: "flex items-center justify-center mb-10 pt-10",
        children: (0, t.jsxs)("div", {
            className: "w-full-- w-[340px] rounded-3xl border  p-6 shadow-sm bg-black text-white",
            children: [(0, t.jsx)("div", {
                className: "mb-6 rounded",
                children: e.icon ? .url ? (0, t.jsx)("img", {
                    src: e.icon.url,
                    alt: e.icon.title || "icon",
                    className: "w-full h-10 object-contain"
                }) : (0, t.jsx)(c, {
                    className: "w-10 h-10 text-orange-500",
                    strokeWidth: 1.5
                })
            }), (0, t.jsxs)("div", {
                className: "mb-8",
                children: [(0, t.jsx)("h3", {
                    className: "text-lg font-thin mb-3 line-clamp-2",
                    children: e.title
                }), (0, t.jsx)("p", {
                    className: "text-base font-normal leading-relaxed mb-10 line-clamp-3",
                    dangerouslySetInnerHTML: {
                        __html: e.review_content
                    }
                })]
            }), (0, t.jsxs)("div", {
                className: "mb-6",
                children: [(0, t.jsx)("h3", {
                    className: "text-lg font-thin mb-3",
                    children: e.sub_title
                }), (0, t.jsx)("p", {
                    className: "text-blue-500 text-base font-medium lg:leading-snug line-clamp-2",
                    dangerouslySetInnerHTML: {
                        __html: e.sub_content
                    }
                })]
            }), (0, t.jsx)("div", {
                className: "border-t border-gray-500 my-10"
            }), (0, t.jsxs)("div", {
                className: "flex items-start gap-3 mb-4",
                children: [(0, t.jsx)("div", {
                    className: "w-12 h-12 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 bg-white",
                    children: e.author_icon ? .url ? (0, t.jsx)("img", {
                        src: (0, d.normalizeImage)(e.author_icon.url) || "",
                        alt: e.author_name || "author",
                        className: "w-6 h-6 object-contain"
                    }) : (0, t.jsx)(o, {
                        className: "w-6 h-6",
                        strokeWidth: 1.5
                    })
                }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("h4", {
                        className: "text-base font-semibold mb-1 text-left",
                        children: e.author_name
                    }), (0, t.jsx)("p", {
                        className: "text-white/80 text-sm text-left leading-tight line-clamp-1",
                        children: e.author_role
                    })]
                })]
            }), (0, t.jsxs)("div", {
                className: "flex items-center gap-2 pl-2 ",
                children: [(0, t.jsx)("span", {
                    className: "text-2xl font-thin",
                    children: e.rating_number
                }), (0, t.jsx)("div", {
                    className: "flex gap-1 items-center",
                    children: (0, t.jsx)(a.default, {
                        src: (0, d.normalizeImage)(e.reating_icon ? .url || ""),
                        alt: e.reating_icon ? .alt || "Rating icon",
                        width: 80,
                        height: 20,
                        className: "object-contain"
                    })
                })]
            })]
        })
    });

    function u({
        cards: e
    }) {
        let a = (0, s.useRef)(null),
            n = (0, s.useRef)(null),
            [c, o] = (0, l.default)({
                loop: !0,
                align: "start"
            }),
            [d, u] = (0, s.useState)(1),
            [x, h] = (0, s.useState)(10),
            [g, f] = (0, s.useState)(0),
            [p, b] = (0, s.useState)([]);
        return ((0, s.useEffect)(() => {
            let e = () => {
                let e = window.innerWidth;
                e >= 1600 || e >= 1440 ? (u(4), h(10)) : e >= 1024 ? (u(3.5), h(40)) : e >= 768 ? (u(2), h(20)) : (u(1), h(10))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, s.useEffect)(() => {
            if (!o) return;
            let e = () => {
                f(o.selectedScrollSnap())
            };
            return b(o.scrollSnapList() || []), o.on("select", e), o.on("reInit", () => {
                b(o.scrollSnapList() || []), e()
            }), e(), () => {
                o.off("select", e)
            }
        }, [o]), (0, s.useEffect)(() => {
            let e = a.current,
                t = n.current;
            if (!o) return;
            let s = () => o.scrollPrev(),
                l = () => o.scrollNext();
            return e && e.addEventListener("click", s), t && t.addEventListener("click", l), () => {
                e && e.removeEventListener("click", s), t && t.removeEventListener("click", l)
            }
        }, [o]), e && 0 !== e.length) ? (0, t.jsxs)("div", {
            className: "mx-4",
            children: [(0, t.jsx)("div", {
                className: "overflow-hidden",
                ref: c,
                children: (0, t.jsx)("div", {
                    className: "flex items-stretch mx-4",
                    children: e.map((e, s) => {
                        let l = `calc(${100/d}% - ${x}px * ${1/d})`;
                        return (0, t.jsx)("div", {
                            className: "embla__slide px-[10px]",
                            style: {
                                flex: `0 0 ${l}`,
                                maxWidth: `${100/d}%`
                            },
                            children: (0, t.jsx)(m, {
                                card: e
                            })
                        }, s)
                    })
                })
            }), (0, t.jsxs)("div", {
                className: "flex justify-center gap-6 mt-6",
                children: [(0, t.jsx)("button", {
                    ref: a,
                    className: "flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:bg-gray-50 transition",
                    "aria-label": "Previous slide",
                    children: (0, t.jsx)(r.ChevronLeft, {
                        className: "w-6 h-6 text-gray-700"
                    })
                }), (0, t.jsx)("button", {
                    ref: n,
                    className: "flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:bg-gray-50 transition",
                    "aria-label": "Next slide",
                    children: (0, t.jsx)(i.ChevronRight, {
                        className: "w-6 h-6 text-gray-700"
                    })
                })]
            })]
        }) : (0, t.jsx)("div", {
            className: "text-center py-10 text-gray-500",
            children: "No reviews available."
        })
    }
}, 89377, e => {
    "use strict";
    e.s(["ServiceCard", () => i, "TechStackCard", () => c]);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(30013),
        a = e.i(47176),
        r = e.i(70065);

    function i({
        data: e
    }) {
        let [a, r] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
            let e = () => r(window.innerWidth < 768);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []);
        let [i, c] = (0, s.useState)(0), [o, d] = (0, s.useState)([]), [m, u] = (0, l.default)({
            loop: !1,
            align: "start"
        });
        return ((0, s.useEffect)(() => {
            u && (d(u.scrollSnapList()), c(u.selectedScrollSnap()), u.on("select", () => {
                c(u.selectedScrollSnap())
            }))
        }, [u]), a) ? (0, t.jsxs)("div", {
            className: "relative w-full",
            children: [(0, t.jsxs)("div", {
                className: "absolute right-3 top-3 z-20 flex gap-2",
                children: [(0, t.jsx)("button", {
                    onClick: () => u ? .scrollPrev(),
                    className: "w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 shadow-md flex items-center justify-center text-sm",
                    children: "‹"
                }), (0, t.jsx)("button", {
                    onClick: () => u ? .scrollNext(),
                    className: "w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 shadow-md flex items-center justify-center text-sm",
                    children: "›"
                })]
            }), (0, t.jsx)("div", {
                className: "overflow-hidden",
                ref: m,
                children: (0, t.jsx)("div", {
                    className: "flex gap-6",
                    children: e.map((e, s) => (0, t.jsx)("div", {
                        className: "flex-[0_0_100%] px-1",
                        children: (0, t.jsx)(n, {
                            card: e
                        })
                    }, s))
                })
            }), (0, t.jsx)("div", {
                className: "flex justify-center gap-2 mt-4",
                children: o.map((e, s) => (0, t.jsx)("button", {
                    onClick: () => u ? .scrollTo(s),
                    className: `h-2 w-2 rounded-full transition-all ${s===i?"bg-primary w-4":"bg-gray-300 dark:bg-gray-600"}`
                }, s))
            })]
        }) : (0, t.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full",
            children: e.map((e, s) => (0, t.jsx)(n, {
                card: e
            }, s))
        })
    }

    function n({
        card: e
    }) {
        return (0, t.jsxs)(r.Card, {
            className: "w-full  rounded-2xl  p-6 md:p-6 ",
            children: [(0, t.jsxs)("div", {
                className: "",
                children: [(0, t.jsx)("div", {
                    className: "flex-shrink-0 mb-2",
                    children: e.card_icon && (0, t.jsx)("div", {
                        className: "w-14 h-14 rounded-full  flex items-center justify-center",
                        children: (0, t.jsx)("img", {
                            src: (0, a.normalizeImage)(e.card_icon.url) || "",
                            alt: e.card_icon.alt || "card icon",
                            className: "w-9 h-9 object-contain dark:invert"
                        })
                    })
                }), (0, t.jsx)("h2", {
                    className: " text-lg md:text-xl font-medium leading-snug mb-3",
                    children: e.card_heading
                })]
            }), (0, t.jsx)("div", {
                className: "flex items-end justify-between mt-auto",
                children: (0, t.jsx)("div", {
                    className: " text-muted-foreground text-sm md:text-sm",
                    children: (0, t.jsx)("span", {
                        className: " [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                        dangerouslySetInnerHTML: {
                            __html: e.card_descriptions || ""
                        }
                    })
                })
            })]
        })
    }

    function c({
        data: e
    }) {
        let s = Object.values(e);
        return (0, t.jsx)("div", {
            className: "w-full ",
            children: (0, t.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, t.jsx)("div", {
                    className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 justify-items-center items-center",
                    children: s.map((e, s) => (0, t.jsx)("div", {
                        className: "flex items-center justify-center p-2 md:p-3 transition-transform hover:scale-110 duration-200",
                        children: (0, t.jsx)("img", {
                            src: (0, a.normalizeImage)(e.icons.url) || "",
                            alt: e.icons.alt,
                            className: "max-w-full max-h-full object-contain",
                            loading: "lazy"
                        })
                    }, s))
                })
            })
        })
    }
}, 72187, e => {
    "use strict";
    e.s(["default", () => h]);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(30013),
        a = e.i(73375),
        r = e.i(63059),
        i = e.i(31343),
        n = e.i(95242),
        c = e.i(82373),
        o = e.i(35116),
        d = e.i(57688),
        m = e.i(47176),
        u = e.i(22016);
    let x = ({
        card: e,
        onPlay: l,
        isActive: a
    }) => {
        let r = (0, s.useRef)(null),
            [x, h] = (0, s.useState)(!1),
            [g, f] = (0, s.useState)(!0);
        return (0, s.useEffect)(() => {
            !a && r.current && (r.current.pause(), h(!1))
        }, [a]), (0, t.jsx)("div", {
            className: "flex items-center justify-center p-2",
            children: (0, t.jsxs)("div", {
                className: "w-full max-w-full bg-black overflow-hidden rounded-2xl",
                children: [(0, t.jsx)("div", {
                    className: "relative aspect-[3/4] overflow-hidden",
                    children: e.client_video ? .url ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("video", {
                            ref: r,
                            poster: (0, m.normalizeImage)(e ? .client_image ? .url ? ? "") || "",
                            preload: "metadata",
                            src: (0, m.normalizeImage)(e.client_video.url),
                            muted: g,
                            className: "w-full h-full object-cover rounded-2xl",
                            playsInline: !0
                        }), (0, t.jsx)("div", {
                            className: "absolute inset-0 pointer-events-none"
                        }), (0, t.jsx)("div", {
                            className: "absolute bottom-6 left-6 z-20",
                            children: (0, t.jsx)("button", {
                                onClick: () => {
                                    if (r.current)
                                        if (x) r.current.pause(), h(!1);
                                        else {
                                            l(r.current);
                                            let e = r.current.play();
                                            e && "function" == typeof e.then ? e.then(() => h(!0)).catch(() => h(!1)) : h(!0)
                                        }
                                },
                                className: "w-12 h-12 bg-black/50 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform",
                                "aria-label": "Play video",
                                children: x ? (0, t.jsx)(n.Pause, {
                                    className: "w-5 h-5 text-white"
                                }) : (0, t.jsx)(i.Play, {
                                    className: "w-5 h-5 text-white"
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "absolute bottom-6 right-6 z-20",
                            children: (0, t.jsx)("button", {
                                onClick: () => {
                                    r.current && (r.current.muted = !g, f(!g))
                                },
                                className: "w-12 h-12 bg-black/50 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform",
                                "aria-label": "Toggle mute",
                                children: g ? (0, t.jsx)(o.VolumeX, {
                                    className: "w-5 h-5 text-white"
                                }) : (0, t.jsx)(c.Volume2, {
                                    className: "w-5 h-5 text-white"
                                })
                            })
                        })]
                    }) : e.client_image ? .url ? (0, t.jsx)(d.default, {
                        src: (0, m.normalizeImage)(e.client_image.url) || "",
                        alt: e.client_image.alt || e.card_title_,
                        className: "w-full h-full object-cover rounded-2xl",
                        width: 600,
                        height: 800,
                        priority: !0,
                        fetchPriority: "high",
                        loading: "eager"
                    }) : (0, t.jsx)("div", {
                        className: "w-full h-full bg-gray-800 flex items-center justify-center text-white",
                        children: "No Media Available"
                    })
                }), (0, t.jsxs)("div", {
                    className: "space-y-4 p-4",
                    children: [(0, t.jsx)("h2", {
                        className: "text-white text-xl md:text-2xl text-center lg:text-start  tracking-wide cursor-pointer",
                        children: e.card_title_
                    }), (0, t.jsx)("div", {
                        className: "text-gray-300 text-sm md:text-sm leading-relaxed  line-clamp-3  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                        dangerouslySetInnerHTML: {
                            __html: e.card_description
                        }
                    }), e.card_button ? .url && (0, t.jsx)("div", {
                        className: "flex justify-center lg:justify-start",
                        children: (0, t.jsx)(u.default, {
                            href: e.card_button.url,
                            target: e.card_button.target || "_self",
                            className: "inline-block px-4 py-2 bg-blue-200 text-black text-sm md:text-sm font-light rounded-full",
                            children: e.card_button.title
                        })
                    })]
                })]
            })
        })
    };

    function h({
        client_card: e
    }) {
        let [i, n] = (0, l.default)({
            loop: !1,
            align: "start",
            containScroll: "trimSnaps",
            skipSnaps: !1,
            dragFree: !1,
            slidesToScroll: 1
        }), [c, o] = (0, s.useState)(null), d = (0, s.useCallback)(e => {
            if (c && c !== e) try {
                c.pause()
            } catch (e) {}
            o(e)
        }, [c]), [u, h] = (0, s.useState)([]), [g, f] = (0, s.useState)(0), [p, b] = (0, s.useState)(!1), [j, v] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
            if (!n) return;
            let e = () => {
                f(n.selectedScrollSnap()), b(n.canScrollPrev()), v(n.canScrollNext())
            };
            h(n.scrollSnapList() || []), n.on("select", e);
            let t = () => {
                h(n.scrollSnapList() || []), e()
            };
            return n.on("reInit", t), e(), () => {
                n.off("select", e), n.off("reInit", t)
            }
        }, [n]);
        let [N, w] = (0, s.useState)(1), [y, k] = (0, s.useState)(16);
        return ((0, s.useEffect)(() => {
            let e = () => {
                let e = window.innerWidth;
                e >= 1280 ? (w(4), k(24)) : e >= 1024 ? (w(3), k(20)) : e >= 768 ? (w(2), k(16)) : (w(1), k(12))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), e && 0 !== e.length) ? (0, t.jsx)("div", {
            className: "relative w-full  mx-auto px-4 sm:px-6 lg:px-8",
            children: (0, t.jsxs)("div", {
                className: "relative",
                children: [(0, t.jsx)("div", {
                    className: "overflow-hidden",
                    ref: i,
                    style: {
                        padding: (() => {
                            if (N >= e.length) {
                                let t = Math.min(N, e.length),
                                    s = (100 - (100 / t * t - y * (t - 1) / t)) / 2;
                                return `0 ${s}%`
                            }
                            return "0"
                        })()
                    },
                    children: (0, t.jsx)("div", {
                        className: "flex items-stretch",
                        style: {
                            gap: `${y}px`
                        },
                        children: e.map((e, s) => {
                            let l = `calc((100% - ${y*(N-1)}px) / ${N})`;
                            return (0, t.jsx)("div", {
                                className: "embla__slide flex-shrink-0",
                                style: {
                                    flex: `0 0 ${l}`,
                                    scrollSnapAlign: "center",
                                    minWidth: 0
                                },
                                children: (0, t.jsx)(x, {
                                    card: e,
                                    onPlay: d,
                                    isActive: !c || c.src === (0, m.normalizeImage)(e.client_video ? .url || "")
                                })
                            }, s)
                        })
                    })
                }), e.length > 1 && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: "hidden lg:block",
                        children: [(0, t.jsx)("button", {
                            onClick: () => n && n.scrollPrev(),
                            disabled: !p,
                            className: `absolute -left-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${p?"bg-black/80 hover:bg-black cursor-pointer":"bg-black/80 cursor-not-allowed"}`,
                            "aria-label": "Previous slide",
                            children: (0, t.jsx)(a.ChevronLeft, {
                                className: `w-6 h-6 ${p?"text-white":"text-gray-500"}`
                            })
                        }), (0, t.jsx)("button", {
                            onClick: () => n && n.scrollNext(),
                            disabled: !j,
                            className: `absolute -right-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${j?"bg-black/80 hover:bg-black cursor-pointer":"bg-gray-300 cursor-not-allowed"}`,
                            "aria-label": "Next slide",
                            children: (0, t.jsx)(r.ChevronRight, {
                                className: `w-6 h-6 ${j?"text-white":"text-gray-500"}`
                            })
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex lg:hidden justify-center gap-4 mt-6",
                        children: [(0, t.jsx)("button", {
                            onClick: () => n && n.scrollPrev(),
                            disabled: !p,
                            className: `flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-all duration-300 ${p?"bg-black/80 hover:bg-black cursor-pointer":"bg-gray-300 cursor-not-allowed"}`,
                            "aria-label": "Previous slide",
                            children: (0, t.jsx)(a.ChevronLeft, {
                                className: `w-5 h-5 ${p?"text-white":"text-gray-500"}`
                            })
                        }), (0, t.jsx)("button", {
                            onClick: () => n && n.scrollNext(),
                            disabled: !j,
                            className: `flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-all duration-300 ${j?"bg-black/80 hover:bg-black cursor-pointer":"bg-gray-300 cursor-not-allowed"}`,
                            "aria-label": "Next slide",
                            children: (0, t.jsx)(r.ChevronRight, {
                                className: `w-5 h-5 ${j?"text-white":"text-gray-500"}`
                            })
                        })]
                    })]
                })]
            })
        }) : (0, t.jsx)("div", {
            className: "text-center py-10 text-gray-500",
            children: "No testimonials available."
        })
    }
}, 46524, e => {
    "use strict";
    e.s(["default", () => i]);
    var t = e.i(43476),
        s = e.i(57688),
        l = e.i(47176),
        a = e.i(71645);
    let r = [{
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

    function i() {
        let e = (0, a.useRef)(null),
            [i, n] = (0, a.useState)(!1),
            [c, o] = (0, a.useState)(0),
            [d, m] = (0, a.useState)(0),
            u = () => {
                n(!1), e.current && (e.current.style.cursor = "grab")
            };
        return (0, t.jsx)("section", {
            className: "relative",
            children: (0, t.jsx)("div", {
                ref: e,
                className: "relative   overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide",
                onMouseDown: t => {
                    e.current && (n(!0), o(t.pageX - e.current.offsetLeft), m(e.current.scrollLeft), e.current.style.cursor = "grabbing")
                },
                onMouseMove: t => {
                    if (!i || !e.current) return;
                    t.preventDefault();
                    let s = t.pageX - e.current.offsetLeft;
                    e.current.scrollLeft = d - (s - c) * 1.5
                },
                onMouseUp: u,
                onMouseLeave: u,
                onTouchStart: t => {
                    e.current && (n(!0), o(t.touches[0].pageX - e.current.offsetLeft), m(e.current.scrollLeft))
                },
                onTouchMove: t => {
                    if (!i || !e.current) return;
                    let s = t.touches[0].pageX - e.current.offsetLeft;
                    e.current.scrollLeft = d - (s - c) * 1.5
                },
                onTouchEnd: () => {
                    n(!1)
                },
                children: (0, t.jsx)("div", {
                    className: "flex w-max py-3  select-none",
                    children: r.map((e, a) => (0, t.jsx)("div", {
                        className: "flex-shrink-0  flex items-center justify-center  h-12 md:h-16  lg:h-20 w-32 lg:w-40  dark:shadow-none",
                        children: (0, t.jsx)(s.default, {
                            src: (0, l.normalizeImage)(e.src) || "",
                            alt: e.alt,
                            width: 140,
                            height: 80,
                            sizes: "(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px",
                            className: "w-20 h-6 md:w-24 md:h-10 lg:w-28 lg:h-12 object-contain invert brightness-0",
                            onError: e => {
                                e.currentTarget.style.display = "none"
                            }
                        })
                    }, a))
                })
            })
        })
    }
}, 83931, e => {
    "use strict";
    e.s(["default", () => r]);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(67881),
        a = e.i(49377);

    function r() {
        let [e, r] = (0, s.useState)({}), [c, o] = (0, s.useState)(!1), [d, m] = (0, s.useState)(0), [u, x] = (0, s.useState)(0), h = (e = 1, t = 10) => {
            let s = Math.floor(Math.random() * (t - e + 1)) + e,
                l = Math.floor(Math.random() * (t - e + 1)) + e;
            m(s), x(l)
        };
        (0, s.useEffect)(() => {
            h()
        }, []);
        let g = async e => {
            e.preventDefault();
            let t = e.currentTarget,
                s = (e => {
                    let t = {},
                        s = new FormData(e);
                    s.get("first_name") ? .toString().trim() || (t.first_name = "First name is required"), s.get("last_name") ? .toString().trim() || (t.last_name = "Last name is required");
                    let l = s.get("email") ? .toString().trim();
                    l ? /^\S+@\S+\.\S+$/.test(l) || (t.email = "Invalid email") : t.email = "Email is required", s.get("phone") ? .toString().trim() || (t.phone = "Phone number is required"), s.get("project") ? .toString().trim() || (t.project = "Project details are required");
                    let a = s.get("captcha") ? .toString().trim() || "",
                        r = String(d + u);
                    return a ? a !== r && (t.captcha = "Captcha is incorrect") : t.captcha = "Captcha is required", t
                })(t);
            if (r(s), Object.keys(s).length > 0) {
                s.captcha && h();
                return
            }
            let l = new FormData(t);
            try {
                let e = await fetch("/api/submit-form", {
                        method: "POST",
                        body: l
                    }),
                    s = await e.json();
                if (!e.ok) throw Error(s.message || "Failed to submit");
                o(!0), t.reset(), r({})
            } catch (e) {
                console.error(e), alert("Something went wrong. Please try again."), h()
            }
        };
        return c ? (0, t.jsxs)("div", {
            className: "bg-white text-black rounded-2xl p-8 text-center",
            children: [(0, t.jsx)("h3", {
                className: "text-2xl font-semibold mb-3",
                children: "Thank You!"
            }), (0, t.jsx)("p", {
                className: "text-gray-700 mb-4",
                children: "Your hiring request has been submitted successfully. Our team will contact you shortly."
            }), (0, t.jsx)(l.Button, {
                onClick: () => o(!1),
                variant: "default",
                children: "Hire Another Developer"
            })]
        }) : (0, t.jsxs)("form", {
            className: "space-y-6",
            onSubmit: g,
            children: [(0, t.jsx)("h4", {
                className: "text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 text-center lg:text-left",
                children: "Get A Quote Now!"
            }), (0, t.jsx)("input", {
                type: "hidden",
                name: "form_name",
                value: "hire"
            }), (0, t.jsxs)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [(0, t.jsx)(i, {
                    label: "First Name",
                    name: "first_name",
                    type: "text",
                    error: e.first_name
                }), (0, t.jsx)(i, {
                    label: "Last Name",
                    name: "last_name",
                    type: "text",
                    error: e.last_name
                })]
            }), (0, t.jsxs)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [(0, t.jsx)(i, {
                    label: "Phone Number",
                    name: "phone",
                    type: "text",
                    error: e.phone
                }), (0, t.jsx)(i, {
                    label: "Work Email",
                    name: "email",
                    type: "email",
                    error: e.email
                })]
            }), (0, t.jsx)(n, {
                label: "Tell us about your project",
                name: "project",
                error: e.project
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
                        children: "Keep me updated on upcoming technology trends"
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: (0, t.jsxs)("div", {
                    className: "flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-md border border-gray-200",
                    children: [(0, t.jsx)("span", {
                        className: "font-medium",
                        children: d
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
                        onClick: () => h(),
                        className: "inline-flex items-center px-2 py-1 hover:bg-gray-100",
                        children: (0, t.jsx)(a.RxReload, {})
                    })]
                })
            }), e.captcha && (0, t.jsx)("p", {
                className: "text-red-500 text-sm mt-1",
                children: e.captcha
            }), (0, t.jsx)(l.Button, {
                className: "rounded-full w-full sm:w-auto",
                type: "submit",
                variant: "default",
                size: "lg",
                children: "Submit"
            })]
        })
    }
    let i = ({
            label: e,
            type: l,
            name: a,
            error: r
        }) => {
            let [i, n] = (0, s.useState)(""), [c, o] = (0, s.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("input", {
                    type: l,
                    name: a,
                    value: i,
                    onChange: e => n(e.target.value),
                    onFocus: () => o(!0),
                    onBlur: () => o(!1),
                    className: `peer w-full bg-transparent border-b border-gray-300 text-gray-800 focus:outline-none px-0 pt-4 pb-1 ${r?"border-red-500":""}`
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 transition-all duration-200 pointer-events-none ${i||c?"-translate-y-4 text-xs text-blue-600":"top-3 text-base text-gray-500"}`,
                    children: e
                }), r && (0, t.jsx)("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: r
                })]
            })
        },
        n = ({
            label: e,
            name: l,
            error: a
        }) => {
            let [r, i] = (0, s.useState)(""), [n, c] = (0, s.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("textarea", {
                    name: l,
                    rows: 4,
                    value: r,
                    onChange: e => i(e.target.value),
                    onFocus: () => c(!0),
                    onBlur: () => c(!1),
                    className: `peer w-full bg-transparent text-base border-b border-gray-300 text-gray-800 focus:outline-none px-0 pt-4 pb-1 resize-none ${a?"border-red-500":""}`
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 transition-all duration-200 pointer-events-none ${r||n?"-translate-y-4 text-xs text-blue-600":"top-3 text-base text-gray-500"}`,
                    children: e
                }), a && (0, t.jsx)("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: a
                })]
            })
        }
}, 35309, e => {
    "use strict";
    e.s(["default", () => c]);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(57688),
        a = e.i(70065),
        r = e.i(50719),
        i = e.i(47176),
        n = e.i(11583);

    function c({
        services: e,
        heading: c,
        subheading: o,
        defaultService: d = 0,
        bgColor: m,
        textColor: u,
        wrapperWidth: x = "max-w-7xl"
    }) {
        let [h, g] = (0, s.useState)(() => e[d]), [f, p] = (0, s.useState)(null), b = e => !!e && (e.startsWith("bg-") || e.startsWith("text-"));
        return (0, t.jsxs)("section", {
            className: "py-8 lg:py-16 px-4",
            children: [(c || o) && (0, t.jsxs)("div", {
                className: `text-center mb-4 lg:mb-16 ${x} mx-auto`,
                children: [c && (0, t.jsx)("h2", {
                    className: "gradient-text text-2xl sm:text-3xl lg:text-4xl mb-6 max-w-6xl mx-auto",
                    children: c
                }), o && (0, t.jsx)("p", {
                    className: "text-muted-foreground text-base max-w-2xl mx-auto",
                    children: o
                })]
            }), (0, t.jsx)("div", {
                className: `lg:hidden ${x} mx-auto`,
                children: e.map((s, c) => (0, t.jsxs)(a.Card, {
                    className: "mb-4",
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-center justify-between p-5 lg:p-4 cursor-pointer",
                        onClick: () => {
                            p(f === c ? null : c), f !== c && g(e[c])
                        },
                        children: [(0, t.jsx)("div", {
                            className: "flex gap-3 items-center",
                            children: (0, t.jsx)("h3", {
                                className: "text-base sm:text-xl",
                                children: s.title
                            })
                        }), (0, t.jsx)(r.HiChevronDown, {
                            className: `transition-transform duration-300 ${f===c?"rotate-180":""}`,
                            size: 20
                        })]
                    }), f === c && (0, t.jsx)(a.CardContent, {
                        className: "p-4 ",
                        children: (0, t.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0, t.jsx)("div", {
                                className: "w-10 h-10 rounded bg-white flex items-center justify-center shadow-lg",
                                children: (0, t.jsx)(l.default, {
                                    src: (0, i.normalizeImage)(s.icon),
                                    alt: s.title,
                                    width: 32,
                                    height: 30,
                                    className: "object-contain",
                                    loading: "lazy"
                                })
                            }), (0, t.jsx)("p", {
                                className: "text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground   [&_a]:text-blue-600",
                                dangerouslySetInnerHTML: {
                                    __html: (0, n.decode)(s.description || "<p></p>")
                                }
                            })]
                        })
                    })]
                }, c))
            }), (0, t.jsxs)(a.Card, {
                className: `hidden lg:flex lg:flex-row ${x} mx-auto overflow-hidden`,
                style: {
                    backgroundColor: !b(m) && m ? m : void 0,
                    color: !b(u) && u ? u : void 0
                },
                children: [(0, t.jsx)(a.CardContent, {
                    className: `w-full lg:w-1/2 px-4 sm:px-6 lg:px-6 lg:overflow-y-auto custom-scrollbar lg:h-[430px]
          ${b(m)?m:""} 
          ${b(u)?u:""} 
          ${!m?"bg-card":""}`,
                    style: {
                        backgroundColor: !b(m) && m ? m : void 0,
                        color: !b(u) && u ? u : void 0
                    },
                    children: (0, t.jsxs)("div", {
                        className: "space-y-4 py-4",
                        children: [" ", e.map((e, s) => (0, t.jsx)("div", {
                            className: `text-white p-4 rounded-md cursor-pointer transition-colors ${h.title===e.title?"font-medium rounded-lg bg-white/20":"hover:bg-muted/30"}`,
                            onClick: () => {
                                g(e)
                            },
                            children: (0, t.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, t.jsxs)("span", {
                                    className: "text-lg sm:text-xl lg:text-2xl font-medium",
                                    children: [s + 1, "."]
                                }), (0, t.jsx)("h3", {
                                    className: "text-lg sm:text-xl lg:text-2xl",
                                    children: e.title
                                })]
                            })
                        }, s))]
                    })
                }), (0, t.jsx)(a.CardContent, {
                    className: "w-full lg:w-1/2 p-4 sm:p-6 lg:p-10 lg:border-l",
                    children: (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, t.jsx)("div", {
                            className: "w-10 h-10 sm:w-12 sm:h-12 rounded-lg border bg-white flex items-center justify-center relative",
                            children: (0, t.jsx)(l.default, {
                                src: (0, i.normalizeImage)(h.icon),
                                alt: h.title,
                                width: 32,
                                height: 28,
                                className: "object-contain"
                            })
                        }), (0, t.jsx)("p", {
                            className: "text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground   [&_a]:text-blue-600",
                            dangerouslySetInnerHTML: {
                                __html: (0, n.decode)(h.description || "<p></p>")
                            }
                        })]
                    })
                })]
            })]
        })
    }
}, 1304, e => {
    "use strict";
    e.s(["default", () => i], 1304);
    var t = e.i(43476),
        s = e.i(71645),
        l = e.i(40141);

    function a(e) {
        return (0, l.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M7 7h10v10"
                },
                child: []
            }, {
                tag: "path",
                attr: {
                    d: "M7 17 17 7"
                },
                child: []
            }]
        })(e)
    }
    var r = e.i(32228);
    let i = function() {
        let [e, l] = (0, s.useState)(!1);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("span", {
                onClick: () => {
                    l(!0)
                },
                className: "link_button_blue",
                children: ["Schedule a Call ", (0, t.jsx)(a, {
                    className: "inline-block ml-1"
                })]
            }), e && (0, t.jsx)(r.default, {
                forceOpen: e,
                onClose: () => {
                    l(!1)
                },
                scrollTrigger: 1600,
                slug: "custom-slug"
            })]
        })
    }
}]);