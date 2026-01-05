(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 62326, e => {
    "use strict";
    e.s(["default", () => o], 62326);
    var l = e.i(43476),
        t = e.i(71645),
        s = e.i(57688),
        a = e.i(22016),
        r = e.i(55393),
        i = e.i(23909),
        n = e.i(40141);

    function c(e) {
        return (0, n.GenIcon)({
            tag: "svg",
            attr: {
                viewBox: "0 0 512 512"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                },
                child: []
            }]
        })(e)
    }
    var d = e.i(47176);

    function x({
        posts: e,
        category: n
    }) {
        let x = (0, t.useMemo)(() => "All" === n ? e : e.filter(e => e.categories ? .includes(n)), [e, n]);
        if (!x.length) return (0, l.jsx)("div", {
            className: "text-center py-20 text-lg text-gray-600",
            children: "No posts found in this category."
        });
        let o = x[0],
            m = x.slice(1, 4),
            g = x.slice(1, 7),
            u = x.slice(6, 9),
            h = x[5];
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("section", {
                className: "container mx-auto px-4 md:px-0 pt-12",
                children: [(0, l.jsxs)("div", {
                    className: "max-w-7xl mx-auto  md:w-full mb-10",
                    children: [(0, l.jsx)("div", {
                        className: "flex items-center gap-2 mb-3 flex-wrap",
                        children: o.categories && o.categories.map((e, t) => (0, l.jsx)("span", {
                            className: "inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-lg ",
                            children: (0, l.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            })
                        }, t))
                    }), (0, l.jsx)("div", {
                        className: "relative w-full h-56 lg:h-[675px]",
                        children: (0, l.jsx)(a.default, {
                            href: `/blog/${o?.slug??""}`,
                            prefetch: !0,
                            children: (0, l.jsx)(s.default, {
                                src: (0, d.normalizeImage)(o ? .featured_image ? .url ? ? "/placeholder.jpg"),
                                alt: o ? .featured_image ? .alt ? ? "Hero post",
                                fill: !0,
                                className: "object-fill rounded-xl mx-auto",
                                priority: !0
                            })
                        })
                    }), (0, l.jsx)("div", {
                        className: "rounded-tr-lg lg:bg-[#f2fbff] max-w-[700px] text-left lg:absolute lg:mt-[-160px] z-10",
                        children: (0, l.jsxs)("div", {
                            className: "  lg:p-6 flex flex-col  items-start  justify-between lg:gap-6 lg:text-black",
                            children: [(0, l.jsx)("div", {
                                className: "flex-1 space-y-3",
                                children: (0, l.jsx)(a.default, {
                                    href: `/blog/${o?.slug??""}`,
                                    prefetch: !0,
                                    children: (0, l.jsx)("h2", {
                                        className: "lg:leading-snug text-xl sm:text-3xl md:text-3xl font-bold my-1",
                                        dangerouslySetInnerHTML: {
                                            __html: o ? .title ? ? ""
                                        }
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)(a.default, {
                                    href: `/blog/${o?.slug??""}`,
                                    prefetch: !0,
                                    children: (0, l.jsx)("p", {
                                        className: "text-base text-muted-foreground line-clamp-2  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                                        dangerouslySetInnerHTML: {
                                            __html: o ? .seo ? .description ? ? ""
                                        }
                                    })
                                })
                            })]
                        })
                    })]
                }), (0, l.jsx)("div", {
                    className: "grid md:grid-cols-3  lg:grid-cols-3 gap-7  lg:mb-12 mb-6 max-w-7xl mx-auto lg:mt-[100px]",
                    children: m.map((e, t) => (0, l.jsx)("div", {
                        className: "rounded-xl",
                        children: (0, l.jsx)(r.default, {
                            item: e
                        })
                    }, t))
                }), h && (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: "max-w-7xl lg:gap-6 block lg:grid lg:grid-cols-3 gap-4 mx-auto space-y-10 lg:space-y-16",
                        children: [(0, l.jsx)("div", {
                            className: "mx-auto col-span-2 py-14 px-0 mt-1 space-y-7",
                            children: (0, l.jsx)("div", {
                                className: "space-y-8",
                                children: u.map((e, t) => {
                                    let r = Array.isArray(e.categories) && e.categories.length > 0;
                                    return (0, l.jsxs)("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch",
                                        children: [(0, l.jsx)("div", {
                                            className: "relative w-auto h-[230px]",
                                            children: (0, l.jsx)(a.default, {
                                                href: `/blog/${e.slug}`,
                                                prefetch: !0,
                                                children: (0, l.jsx)(s.default, {
                                                    src: (0, d.normalizeImage)(e.featured_image ? .url ? ? "/placeholder.jpg"),
                                                    alt: e.featured_image ? .alt ? ? "Post image",
                                                    fill: !0,
                                                    className: "rounded-xl object-cover"
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "flex-1 pl-0 flex flex-col justify-center",
                                            children: [(0, l.jsx)("div", {
                                                className: "inline-flex items-center gap-1 flex-wrap font-normal w-fit text-sm text-blue-600 mb-1",
                                                children: r && (0, l.jsx)("div", {
                                                    className: "flex items-center gap-2 mb-3 flex-wrap",
                                                    children: e.categories && e.categories.map((e, t) => (0, l.jsx)("span", {
                                                        className: "inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-lg ",
                                                        children: (0, l.jsx)("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: e
                                                            }
                                                        })
                                                    }, t))
                                                })
                                            }), (0, l.jsx)(a.default, {
                                                href: `/blog/${e.slug}`,
                                                prefetch: !0,
                                                children: (0, l.jsx)("h4", {
                                                    className: "leading-snug  text-lg font-medium",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.title ? ? ""
                                                    }
                                                })
                                            }), (0, l.jsx)(a.default, {
                                                href: `/blog/${e.slug}`,
                                                prefetch: !0,
                                                children: (0, l.jsx)("p", {
                                                    className: "text-base  ",
                                                    children: e.seo ? .description ? ? ""
                                                })
                                            })]
                                        })]
                                    }, t)
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: "flex-1 mb-6 md:mb-4",
                            children: (0, l.jsxs)("div", {
                                className: "max-w-lg mx-auto rounded-2xl bg-blue-50 p-4 sm:p-5 text-black",
                                children: [(0, l.jsx)("h2", {
                                    className: "text-2xl sm:text-3xl font-normal mb-4 leading-snug",
                                    children: "Most Popular"
                                }), (0, l.jsx)("div", {
                                    className: "space-y-4",
                                    children: g.map((e, t) => (0, l.jsxs)("div", {
                                        className: "flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0 pt-4",
                                        children: [(0, l.jsx)("div", {
                                            className: "w-14 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 shadow-sm",
                                            children: (0, l.jsx)(s.default, {
                                                src: (0, d.normalizeImage)(e ? .featured_image ? .url ? ? "/placeholder.jpg"),
                                                alt: e ? .featured_image ? .alt ? ? "Post image",
                                                width: 56,
                                                height: 64,
                                                className: "w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "flex flex-col min-w-0",
                                            children: [e.categories && e.categories.length > 0 && (0, l.jsx)("div", {
                                                className: "flex flex-wrap gap-2 text-xs text-gray-600 mb-1",
                                                children: e.categories.map((e, t) => (0, l.jsx)("span", {
                                                    className: "hover:underline cursor-pointer",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e
                                                    }
                                                }, t))
                                            }), (0, l.jsx)(a.default, {
                                                href: `/blog/${e.slug}`,
                                                prefetch: !0,
                                                children: (0, l.jsx)("h4", {
                                                    className: "text-sm sm:text-base font-normal leading-snug text-[#0f2c2c] hover:text-[#0092ff] transition-colors line-clamp-2",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.title ? ? ""
                                                    }
                                                })
                                            })]
                                        })]
                                    }, t))
                                })]
                            })
                        })]
                    })
                }), (0, l.jsxs)("div", {
                    className: "grid lg:gap-6 max-w-7xl mx-auto py-8 lg:py-12",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center gap-2 mb-6",
                        children: [(0, l.jsx)("h2", {
                            className: "text-3xl leading-snug font-normal",
                            children: "Top Tech Experts"
                        }), (0, l.jsx)(c, {
                            className: "text-2xl"
                        })]
                    }), h && (0, l.jsx)("div", {
                        className: "block max-w-7xl  mb-10",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col md:flex-col lg:flex-row gap-5 items-stretch",
                            children: [(0, l.jsx)("div", {
                                className: "relative h-[250px] w-full lg:w-1/3",
                                children: (0, l.jsx)(a.default, {
                                    href: `/blog/${h.slug}`,
                                    prefetch: !0,
                                    children: (0, l.jsx)(s.default, {
                                        src: (0, d.normalizeImage)(h.featured_image ? .url ? ? "/placeholder.jpg"),
                                        alt: h.featured_image ? .alt ? ? "Expert post",
                                        fill: !0,
                                        className: "rounded-[10px] object-cover"
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex-1 lg:w-2/3 flex flex-col justify-center",
                                children: [(0, l.jsx)("div", {
                                    className: "flex items-center gap-2 mb-3 flex-wrap",
                                    children: h.categories && h.categories.map((e, t) => (0, l.jsx)("span", {
                                        className: "inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-lg ",
                                        children: (0, l.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: e
                                            }
                                        })
                                    }, t))
                                }), (0, l.jsx)(a.default, {
                                    href: `/blog/${h.slug}`,
                                    prefetch: !0,
                                    children: (0, l.jsx)("h2", {
                                        className: "text-[36px] leading-none font-bold mb-2 mt-7",
                                        dangerouslySetInnerHTML: {
                                            __html: h.title ? ? ""
                                        }
                                    })
                                }), (0, l.jsx)("p", {
                                    className: "text-base sm:text-sm  lg:text-base text-start mt-7 line-clamp-2 text-muted-foreground",
                                    dangerouslySetInnerHTML: {
                                        __html: h.seo ? .description ? ? ""
                                    }
                                })]
                            })]
                        })
                    })]
                }), (0, l.jsx)("div", {
                    className: "text-center py-4",
                    children: (0, l.jsxs)(a.default, {
                        href: "/blog/articles",
                        className: "bg-[#333] hover:bg-black hover:text-[#0092ff] font-semibold text-white text-[18px] py-[10px] px-[15px] rounded-[16px] inline-flex items-center gap-[10px]",
                        children: ["All Articles", (0, l.jsx)(c, {
                            className: "text-2xl"
                        })]
                    })
                })]
            }), (0, l.jsx)(i.default, {
                bgColor: "#1C4FA1",
                heading: "Looking for development or Collaboration?",
                description: "Unlock the full potential of blockchain technology and join knowledge by requesting a price or calling us today.",
                buttonText: "Let's Build Today!",
                buttonLink: "/nadcab-team",
                imageSrc: "/nadcab-office.png",
                imageAlt: "Office Banner"
            })]
        })
    }

    function o({
        posts: e,
        categories: s
    }) {
        let [a, r] = (0, t.useState)("All");
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("div", {
                children: [(0, l.jsx)("div", {
                    className: "text-center pt-20 mb-10",
                    children: (0, l.jsx)("h1", {
                        className: "gradient-text lg:leading-snug text-4xl lg:text-5xl sm:text-5xl md:text-2xl mb-6 font-bold",
                        children: "Nadcab Labs Blog"
                    })
                }), (0, l.jsx)("div", {
                    className: "container mx-auto flex flex-wrap justify-center gap-4 py-2",
                    children: s.map(e => (0, l.jsx)("button", {
                        onClick: () => r(e),
                        className: `px-5 py-2 rounded-full text-sm transition
              ${a===e?"bg-black text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }, e))
                })]
            }), (0, l.jsx)(x, {
                posts: e,
                category: a
            })]
        })
    }
}]);