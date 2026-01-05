(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 55393, 23909, e => {
    "use strict";
    e.s(["default", () => d], 55393);
    var l = e.i(43476),
        t = e.i(22016),
        a = e.i(47176),
        s = e.i(57688);
    let d = ({
        item: e
    }) => {
        let d = e ? .featured_image ? .url ? ? "",
            i = e ? .featured_image ? .alt ? ? "",
            r = e ? .categories ? ? [];
        e ? .date;
        let m = e ? .title ? ? "",
            n = e ? .seo ? .description ? ? "",
            o = e ? .slug ? ? "",
            x = d && "" !== d.trim();
        return (0, l.jsxs)("span", {
            className: "py-4",
            children: [(0, l.jsx)("div", {
                className: "flex items-center gap-2 mb-3 flex-wrap",
                children: r && r.map((e, t) => (0, l.jsx)("span", {
                    className: "inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-lg ",
                    children: (0, l.jsx)("span", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })
                }, t))
            }), x && (0, l.jsx)(t.default, {
                href: "/blog/[slug]",
                as: `/blog/${o}`,
                children: (0, l.jsx)("div", {
                    className: "relative h-[240px] w-full rounded-xl lg:mb-4 mb-2 overflow-hidden",
                    children: (0, l.jsx)(s.default, {
                        alt: i || m || "Blog image",
                        src: (0, a.normalizeImage)(d) || "/placeholder.png",
                        fill: !0,
                        className: "object-cover",
                        sizes: "(max-width: 768px) 100vw,  (max-width: 1200px) 50vw,  33vw",
                        priority: !1
                    })
                })
            }), !x && (0, l.jsx)("div", {
                className: "lg:mb-4 mb-2"
            }), (0, l.jsxs)(t.default, {
                href: "/blog/[slug]",
                as: `/blog/${o}`,
                children: [(0, l.jsx)("h3", {
                    className: "font-medium lg:text-xl  md:text-lg text-start lg:mb-2  line-clamp-2 leading-snug",
                    dangerouslySetInnerHTML: {
                        __html: m || ""
                    }
                }), " "]
            }), (0, l.jsx)(t.default, {
                href: "/blog/[slug]",
                as: `/blog/${o}`,
                children: (0, l.jsx)("p", {
                    className: "  sm:text-base text-start  font-normal text-muted-foreground line-clamp-2 [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                    dangerouslySetInnerHTML: {
                        __html: n || ""
                    }
                })
            })]
        })
    };
    e.s(["default", () => i], 23909);
    let i = ({
        bgColor: e = "#000",
        heading: d,
        description: i,
        buttonText: r,
        buttonLink: m,
        imageSrc: n,
        imageAlt: o = "CTA Banner",
        textColor: x = "text-white",
        buttonClass: c = "link_button",
        widthWrapper: u = "max-w-7xl"
    }) => (0, l.jsx)("div", {
        className: "lg:pt-16 relative",
        children: (0, l.jsxs)("div", {
            className: "relative overflow-hidden",
            style: {
                backgroundColor: e
            },
            children: [(0, l.jsx)("div", {
                className: `max-w-full-- mx-auto px-4 md:px-0 flex flex-col md:flex-row items-start relative z-10 ${u}`,
                children: (0, l.jsxs)("div", {
                    className: "w-full md:w-1/2 pt-12 pb-12 lg:py-14 px-4",
                    children: [(0, l.jsx)("h2", {
                        className: `text-lg md:text-4xl font-unbounded font-semibold lg:leading-snug mb-2 ${x}`,
                        children: d
                    }), i && (0, l.jsx)("p", {
                        className: `font-medium text-lg mb-6 ${x}`,
                        children: i
                    }), (0, l.jsx)(t.default, {
                        href: m,
                        className: c,
                        children: r
                    })]
                })
            }), (0, l.jsx)("div", {
                className: "hidden md:block absolute right-0 bottom-0 w-[40%] h-full",
                children: (0, l.jsx)(s.default, {
                    src: (0, a.normalizeImage)(n) || "",
                    alt: o,
                    fill: !0,
                    className: "object-cover object-bottom-right",
                    loading: "lazy"
                })
            })]
        })
    })
}]);