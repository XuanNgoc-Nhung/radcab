(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 28163, e => {
    "use strict";
    e.s(["default", () => n]);
    var s = e.i(43476),
        t = e.i(57688),
        l = e.i(22016),
        a = e.i(47176);

    function n({
        activeMegaMenu: e,
        megaMenuData: n,
        activeServiceTab: r,
        onChangeServiceTab: i,
        pathname: c,
        onNavigate: o
    }) {
        let d = n[e];
        if (!d) return null;
        if ("tabs" in d) return (0, s.jsxs)("div", {
            className: "flex w-full gap-6",
            children: [(0, s.jsx)("div", {
                className: "w-1/3 border-r border-gray-200 pr-6",
                children: (0, s.jsx)("div", {
                    className: "space-y-2 max-h-[400px] overflow-y-auto",
                    children: d.tabs.map(e => (0, s.jsxs)("button", {
                        onClick: () => i(e.name),
                        className: `w-full text-left px-3 py-3 rounded-lg transition-all duration-200 flex items-center ${r===e.name?"bg-blue-50 text-black":"text-gray-700 hover:bg-gray-50"}`,
                        children: [(0, s.jsx)("div", {
                            className: "relative w-6 h-6 mr-3 flex-shrink-0",
                            children: (0, s.jsx)(t.default, {
                                src: e.icon,
                                alt: e.name,
                                fill: !0,
                                className: "object-contain"
                            })
                        }), (0, s.jsx)("div", {
                            className: "font-medium",
                            children: e.name
                        })]
                    }, e.id))
                })
            }), (0, s.jsx)("div", {
                className: "w-2/3",
                children: d.tabs.map(e => r === e.name && (0, s.jsxs)("div", {
                    className: "h-full",
                    children: [(0, s.jsx)("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-3",
                        children: e.content.title
                    }), (0, s.jsx)("p", {
                        className: "text-xl mb-6 font-semibold text-gray-900",
                        children: e.content.description
                    }), (0, s.jsx)("div", {
                        className: "max-h-[250px] overflow-y-auto custom-scrollbar",
                        children: (0, s.jsx)("div", {
                            className: "grid grid-cols-3 gap-2",
                            children: e.content.features.map(e => (0, s.jsx)(l.default, {
                                href: e.href,
                                className: `block transition-all duration-200 group p-2 rounded-md bg-gray-50 ${c===e.href?"text-blue-600 font-semibold":"text-gray-700"}`,
                                onClick: o,
                                children: (0, s.jsx)("span", {
                                    className: "text-base line-clamp-1",
                                    children: e.name
                                })
                            }, e.name))
                        })
                    })]
                }, e.id))
            })]
        });
        if ("Industries" === e && "menuLinks" in d) {
            let e = d.content ? .image;
            return (0, s.jsxs)("div", {
                className: "flex w-full gap-8",
                children: [e && (0, s.jsxs)("div", {
                    className: "w-1/3 border-r border-gray-200 pr-6 flex flex-col items-start",
                    children: [(0, s.jsx)("div", {
                        className: "relative w-full h-48 mb-4",
                        children: (0, s.jsx)(t.default, {
                            src: (0, a.normalizeImage)(d.content ? .image ? ? "") || "",
                            alt: "Industries",
                            fill: !0,
                            className: "object-cover rounded-lg"
                        })
                    }), d.content ? .title && (0, s.jsx)("h3", {
                        className: "text-xl font-bold text-gray-900 mt-2",
                        children: d.content.title
                    }), d.content ? .description && (0, s.jsx)("p", {
                        className: "text-gray-600 text-sm mt-2 mb-4",
                        children: d.content.description
                    })]
                }), (0, s.jsxs)("div", {
                    className: e ? "w-2/3" : "w-full",
                    children: [(0, s.jsx)("h4", {
                        className: "font-bold text-2xl mb-3 text-gray-900",
                        children: "Browse Industries"
                    }), (0, s.jsx)("p", {
                        className: "text-muted-foreground text-base leading-snug mb-6",
                        children: "Discover tailored solutions for your industry with our specialized expertise."
                    }), (0, s.jsx)("div", {
                        className: "max-h-[250px] overflow-y-auto custom-scrollbar",
                        children: (0, s.jsx)("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: d.menuLinks.map(e => (0, s.jsx)(l.default, {
                                href: e.href,
                                className: `block transition-all duration-200 group p-3 rounded-md ${c===e.href?"text-blue-600 font-semibold bg-gray-50":"bg-gray-50 text-gray-700"}`,
                                onClick: o,
                                children: (0, s.jsx)("span", {
                                    className: "text-base",
                                    children: e.name
                                })
                            }, e.name))
                        })
                    })]
                })]
            })
        }
        if ("About" === e && "sections" in d && "content" in d) return (0, s.jsxs)("div", {
            className: "flex w-full gap-8",
            children: [(0, s.jsxs)("div", {
                className: "w-1/3 border-r border-gray-200 pr-6",
                children: [(0, s.jsx)("div", {
                    className: "relative w-full h-48 mb-4",
                    children: (0, s.jsx)(t.default, {
                        src: (0, a.normalizeImage)(d.content.image) || "",
                        alt: "Get to Know Us",
                        fill: !0,
                        className: "object-cover rounded-lg"
                    })
                }), (0, s.jsx)("h3", {
                    className: "text-xl font-semibold text-gray-900 mb-2",
                    children: d.content.title
                }), (0, s.jsx)("p", {
                    className: "text-gray-600 text-sm mb-4",
                    children: d.content.description
                }), d.content.buttonLink && d.content.buttonText && (0, s.jsx)(l.default, {
                    href: d.content.buttonLink,
                    className: "link_button_dark",
                    onClick: o,
                    children: d.content.buttonText
                })]
            }), (0, s.jsxs)("div", {
                className: "w-2/3",
                children: [(0, s.jsx)("h4", {
                    className: "font-bold text-2xl mb-3 text-gray-900",
                    children: "About Veridaxlabs"
                }), (0, s.jsx)("p", {
                    className: "text-muted-foreground text-base leading-snug mb-2",
                    children: "A leading blockchain company delivering innovative digital solutions worldwide."
                }), (0, s.jsx)("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: d.sections.map((e, t) => (0, s.jsxs)("div", {
                        className: "space-y-4 mb-3",
                        children: [(0, s.jsx)("h3", {
                            className: "font-semibold text-lg text-gray-900",
                            children: e.title
                        }), (0, s.jsx)("div", {
                            className: "space-y-4",
                            children: e.items.map(e => (0, s.jsxs)("div", {
                                className: "group",
                                children: [(0, s.jsx)(l.default, {
                                    href: e.href,
                                    className: "font-medium text-gray-800 hover:text-blue-600 transition-colors block",
                                    onClick: o,
                                    children: e.name
                                }), (0, s.jsx)("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: e.description
                                })]
                            }, e.name))
                        })]
                    }, t))
                })]
            })]
        });
        if ("Hire Developers" === e && "menuLinks" in d) {
            let e = d.content ? .image;
            return (0, s.jsxs)("div", {
                className: "flex w-full gap-8",
                children: [e && (0, s.jsxs)("div", {
                    className: "w-1/3 border-r border-gray-200 pr-6 flex flex-col items-start",
                    children: [(0, s.jsx)("div", {
                        className: "relative w-full h-48 mb-4",
                        children: (0, s.jsx)(t.default, {
                            src: (0, a.normalizeImage)(d.content ? .image ? ? "") || "",
                            alt: "Hire Developers",
                            fill: !0,
                            className: "object-cover rounded-lg"
                        })
                    }), d.content ? .title && (0, s.jsx)("h3", {
                        className: "text-xl font-bold text-gray-900 mt-2",
                        children: d.content.title
                    }), d.content ? .description && (0, s.jsx)("p", {
                        className: "text-gray-600 text-sm mt-2 mb-4",
                        children: d.content.description
                    })]
                }), (0, s.jsxs)("div", {
                    className: e ? "w-2/3" : "w-full",
                    children: [(0, s.jsx)("h4", {
                        className: "font-bold text-2xl mb-3 text-gray-900",
                        children: "Hire Skilled Professionals"
                    }), (0, s.jsx)("p", {
                        className: "text-muted-foreground text-base leading-snug mb-6",
                        children: "Access skilled developers across various technologies and domains."
                    }), (0, s.jsx)("div", {
                        className: "max-h-[250px] overflow-y-auto custom-scrollbar",
                        children: (0, s.jsx)("div", {
                            className: "grid grid-cols-3 gap-2",
                            children: d.menuLinks.map(e => (0, s.jsx)(l.default, {
                                href: e.href,
                                className: `block transition-all duration-200 group p-3 rounded-md bg-gray-50 ${c===e.href?"text-blue-600 font-semibold":"text-gray-700"}`,
                                onClick: o,
                                children: (0, s.jsx)("span", {
                                    className: "text-base",
                                    children: e.name
                                })
                            }, e.name))
                        })
                    })]
                })]
            })
        }
        if ("Resources" === e && "menuLinks" in d) {
            let e = d.content ? .image;
            return (0, s.jsxs)("div", {
                className: "flex w-full gap-8",
                children: [e && (0, s.jsxs)("div", {
                    className: "w-1/3 border-r border-gray-200 pr-6 flex flex-col items-start",
                    children: [(0, s.jsx)("div", {
                        className: "relative w-full h-48 mb-4",
                        children: (0, s.jsx)(t.default, {
                            src: (0, a.normalizeImage)(d.content ? .image ? ? "") || "",
                            alt: "Resources",
                            fill: !0,
                            className: "object-cover rounded-lg"
                        })
                    }), d.content ? .title && (0, s.jsx)("h3", {
                        className: "text-xl font-bold text-gray-900 mt-2",
                        children: d.content.title
                    }), d.content ? .description && (0, s.jsx)("p", {
                        className: "text-gray-600 text-sm mt-2 mb-4",
                        children: d.content.description
                    })]
                }), (0, s.jsxs)("div", {
                    className: e ? "w-2/3" : "w-full",
                    children: [(0, s.jsx)("h4", {
                        className: "font-bold text-2xl mb-3 text-gray-900",
                        children: "Browse Resources"
                    }), (0, s.jsx)("p", {
                        className: "text-muted-foreground text-base leading-snug mb-6",
                        children: "Explore our comprehensive collection of insights, tutorials, and industry knowledge."
                    }), (0, s.jsx)("div", {
                        className: "max-h-[250px] overflow-y-auto custom-scrollbar",
                        children: (0, s.jsx)("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: d.menuLinks.map(e => (0, s.jsx)(l.default, {
                                href: e.href,
                                className: `block transition-all duration-200 group p-3 rounded-md ${c===e.href?"text-blue-600 font-semibold bg-gray-50":"bg-gray-50 text-gray-700"}`,
                                onClick: o,
                                children: (0, s.jsx)("span", {
                                    className: "text-base",
                                    children: e.name
                                })
                            }, e.name))
                        })
                    })]
                })]
            })
        }
        return null
    }
}, 29724, e => {
    e.n(e.i(28163))
}]);