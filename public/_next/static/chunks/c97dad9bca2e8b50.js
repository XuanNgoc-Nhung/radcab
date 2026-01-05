(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 37332, e => {
    "use strict";
    e.s(["default", () => d]);
    var s = e.i(43476),
        l = e.i(11583),
        a = e.i(71645),
        t = e.i(10936);

    function d({
        title: e = "Frequently Asked Questions",
        faqs: d = [],
        twoColumn: i = !0,
        widthWrapper: n = "max-w-7xl"
    }) {
        let [r, c] = (0, a.useState)(null), o = i ? d.slice(0, Math.ceil(d.length / 2)) : d, m = i ? d.slice(Math.ceil(d.length / 2)) : [], h = (e, a) => (0, s.jsx)("div", {
            className: "lg:space-y-6 space-y-2",
            children: e.map((e, d) => (0, s.jsx)("div", {
                className: "",
                style: {
                    animationDelay: `${100*d}ms`
                },
                children: (0, s.jsxs)("div", {
                    className: "accordion-item bg-card rounded-lg card-shadow overflow-hidden",
                    children: [(0, s.jsxs)("button", {
                        className: "accordion-trigger",
                        onClick: () => ((e, s) => {
                            let l = `${s}-${e}`;
                            c(r === l ? null : l)
                        })(d, a),
                        children: [(0, s.jsx)("h3", {
                            className: "font-normal text-base md:font-medium md:text-base",
                            children: e.question
                        }), (0, s.jsx)("div", {
                            className: "flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center rounded-md",
                            children: (0, s.jsx)("div", {
                                className: "w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none rounded-md ",
                                children: (0, s.jsx)(t.IoMdArrowDropdown, {
                                    className: `w-6 h-6 transition-transform duration-300 ${r===`${a}-${d}`?"rotate-180":""}`
                                })
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: `accordion-content px-6 overflow-hidden transition-all duration-300 ${r===`${a}-${d}`?"max-h-96 py-4":"max-h-0"}`,
                        children: (0, s.jsx)("div", {
                            className: "text-muted-foreground  [&_a]:text-blue-600 [&_ul]:list-disc  [&_ul]:ml-5  [&_ol]:list-decimal  [&_ol]:ml-5 [&_a:hover]:underline ",
                            dangerouslySetInnerHTML: {
                                __html: (0, l.decode)(e.answer) || ""
                            }
                        })
                    })]
                })
            }, `${a}-${d}`))
        });
        return (0, s.jsx)("section", {
            className: "w-full lg:py-16 py-16 px-4",
            children: (0, s.jsxs)("div", {
                className: `${n} mx-auto`,
                children: [(0, s.jsx)("h2", {
                    className: "text-center gradient-text font-medium text-xl sm:text-4xl lg:mb-12 mb-6",
                    children: e
                }), (0, s.jsxs)("div", {
                    className: `grid lg:gap-6 gap-4 ${i?"grid-cols-1 lg:grid-cols-2":"grid-cols-1"}`,
                    children: [h(o, "left"), i && h(m, "right")]
                })]
            })
        })
    }
}]);