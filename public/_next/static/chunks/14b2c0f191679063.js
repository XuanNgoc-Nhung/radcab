(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 56305, e => {
    "use strict";
    e.s(["default", () => c]);
    var t = e.i(43476),
        l = e.i(71645),
        a = e.i(57688),
        r = e.i(22016),
        s = e.i(47176);

    function c({
        podcasts: e,
        itemsPerPage: c = 9
    }) {
        let [i, d] = (0, l.useState)(c), o = e.slice(0, i), n = e.length > i;
        return (0, t.jsxs)("section", {
            className: "max-w-7xl mx-auto py-16 px-6",
            children: [(0, t.jsx)("h2", {
                className: "text-4xl font-extrabold tracking-tight mb-10",
                children: "FEATURED PODCASTS"
            }), o.length > 0 ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",
                    children: o.map(e => {
                        let l = e.acf ? .youtube_image ? .url || e.thumbnail || "/placeholder.jpg",
                            c = e.acf ? .podcast_title || e.title || "Untitled Podcast";
                        return (0, t.jsx)(t.Fragment, {
                            children: (0, t.jsxs)(r.default, {
                                href: `/podcast/${e.slug??""}`,
                                className: "flex flex-col group cursor-pointer",
                                children: [(0, t.jsx)("div", {
                                    className: "aspect-square-- overflow-hidden border border-gray-200 dark:border-black",
                                    children: (0, t.jsx)(a.default, {
                                        src: (0, s.normalizeImage)(l) || "",
                                        alt: c,
                                        width: 500,
                                        height: 500,
                                        className: "object-cover w-full h-full group-hover:scale-102 transition-transform duration-500"
                                    })
                                }), (0, t.jsx)("h3", {
                                    className: "mt-4 text-lg font-bold",
                                    children: c
                                }), (0, t.jsx)("p", {
                                    className: "mt-2 text-sm text-gray-800 dark:text-white/80 leading-relaxed  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                                    dangerouslySetInnerHTML: {
                                        __html: e.description || ""
                                    }
                                })]
                            }, e.slug ? ? e.id ? ? Math.random())
                        })
                    })
                }), (0, t.jsx)("div", {
                    className: "text-center mt-10 flex gap-4 justify-center flex-wrap",
                    children: n && (0, t.jsx)("button", {
                        onClick: () => {
                            d(e => e + c)
                        },
                        className: "link_button_blue",
                        children: "Load More"
                    })
                })]
            }) : (0, t.jsx)("p", {
                className: "text-gray-500 text-center",
                children: "No featured podcasts available."
            })]
        })
    }
}]);