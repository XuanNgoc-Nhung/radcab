(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52463, e => {
    "use strict";
    e.s(["default", () => N], 52463);
    var t = e.i(43476),
        s = e.i(92199),
        a = e.i(40141),
        l = e.i(90106),
        r = e.i(22016),
        i = e.i(56329),
        n = e.i(37332),
        o = e.i(70065),
        c = e.i(57688);
    let d = (0, e.i(75254).default)("check", [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ]);
    var m = e.i(47176);

    function u({
        title: e = "Our articles are written by professionals",
        description: s = "Our articles are crafted by industry professionals, ensuring accurate, insightful, and up-to-date content for every crypto enthusiast and investor.",
        bulletPoints: a = ["June 13, 2025 — How Does a Blockchain Mechanism Work?", "June 02, 2025 — Understanding Smart Contracts and Their Impact", "May 17, 2025 — What Is DeFi, and Why Is It Disrupting Finance?"],
        imageSrc: l = "/ai-powered-blockchain.png",
        widthWrapper: i = "max-w-7xl",
        buttonText: n,
        buttonUrl: o,
        altText: u
    }) {
        return (0, t.jsxs)("section", {
            className: " relative w-full py-20 px-6 overflow-hidden  bg-card  dark:bg-[#06080F] dark:text-white ",
            children: [(0, t.jsxs)("div", {
                className: "absolute inset-0 hidden dark:block -z-10",
                children: [(0, t.jsx)(c.default, {
                    src: "/section-bg.avif",
                    alt: "Background",
                    fill: !0,
                    className: "object-cover opacity-70",
                    priority: !0
                }), (0, t.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-[#1B1E2A]/80 via-[#0E1220]/70 to-[#090B13]/90"
                })]
            }), (0, t.jsx)("div", {
                className: `relative ${i} mx-auto flex flex-col gap-16`,
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col lg:flex-row items-stretch justify-between gap-10",
                    children: [(0, t.jsxs)("div", {
                        className: "w-full lg:w-1/2 space-y-6 lg:pr-10 flex flex-col justify-center",
                        children: [(0, t.jsxs)("div", {
                            className: "text-center lg:text-left max-w-3xl mx-auto lg:mx-0",
                            children: [(0, t.jsx)("h2", {
                                className: "gradient-text text-3xl sm:text-4xl md:text-5xl font-medium lg:leading-snug max-w-5xl mx-auto mb-2",
                                children: e
                            }), (0, t.jsx)("p", {
                                className: " [&_a:hover]:underline mt-3 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0  [&_a]:text-blue-600 dark:[&_a]:text-blue-400",
                                dangerouslySetInnerHTML: {
                                    __html: s
                                }
                            })]
                        }), (0, t.jsx)("div", {
                            className: "space-y-3 sm:space-y-4 mt-4",
                            children: a.map((e, s) => (0, t.jsxs)("div", {
                                className: "flex items-start gap-2 sm:gap-3",
                                children: [(0, t.jsx)("div", {
                                    className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 bg-blue-500 text-white shadow-none rounded-full flex items-center justify-center",
                                    children: (0, t.jsx)(d, {
                                        size: "20",
                                        className: "  "
                                    })
                                }), (0, t.jsx)("p", {
                                    className: "text-foreground/80 text-sm sm:text-base",
                                    children: e
                                })]
                            }, s))
                        }), n && (0, t.jsx)("div", {
                            className: "pt-6",
                            children: (0, t.jsx)(r.default, {
                                href: o || "#",
                                className: "inline-flex items-center justify-center link_button_outline_blue",
                                children: n
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: "relative w-full lg:w-1/2 flex items-center justify-center lg:justify-end",
                        children: (0, t.jsx)("div", {
                            className: " relative w-full h-[220px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#121524]/70 dark:via-[#0A0C14]/60 dark:to-[#1C1F2F]/70 border border-gray-200 dark:border-white/10  transition-all duration-500 ",
                            children: (0, t.jsx)(c.default, {
                                src: (0, m.normalizeImage)(l) || "",
                                alt: u,
                                fill: !0,
                                className: "object-cover object-center",
                                loading: "lazy"
                            })
                        })
                    })]
                })
            })]
        })
    }
    var x = e.i(67881),
        p = e.i(71645);

    function h() {
        let [e, s] = (0, p.useState)({}), [a, l] = (0, p.useState)(!1), [r, i] = (0, p.useState)(0), [n, o] = (0, p.useState)(0), c = (e = 1, t = 10) => {
            let s = Math.floor(Math.random() * (t - e + 1)) + e,
                a = Math.floor(Math.random() * (t - e + 1)) + e;
            i(s), o(a)
        };
        (0, p.useEffect)(() => {
            c()
        }, []);
        let d = async e => {
            e.preventDefault();
            let t = e.currentTarget,
                a = (e => {
                    let t = {},
                        s = new FormData(e);
                    s.get("name") ? .toString().trim() || (t.name = "Name is required");
                    let a = s.get("email") ? .toString().trim();
                    a ? /^\S+@\S+\.\S+$/.test(a) || (t.email = "Invalid email") : t.email = "Email is required", s.get("phone") ? .toString().trim() || (t.phone = "Contact number is required"), s.get("project") ? .toString().trim() || (t.project = "Project description is required");
                    let l = s.get("captcha") ? .toString().trim() || "",
                        i = String(r + n);
                    return l ? l !== i && (t.captcha = "Captcha is incorrect") : t.captcha = "Captcha is required", t
                })(t);
            if (s(a), Object.keys(a).length > 0) return void c();
            let i = new FormData(t);
            try {
                if (!(await fetch("/api/submit-form", {
                        method: "POST",
                        body: i
                    })).ok) throw Error("Failed to send message");
                l(!0), t.reset(), s({})
            } catch (e) {
                console.error(e), alert("Something went wrong. Please try again."), c()
            }
        };
        return a ? (0, t.jsxs)("div", {
            className: "bg-white text-black rounded-2xl p-8 text-center",
            children: [(0, t.jsx)("h3", {
                className: "text-2xl font-semibold mb-3",
                children: "Thank You!"
            }), (0, t.jsx)("p", {
                className: "text-gray-700 mb-4",
                children: "Your contact request has been submitted successfully. Our team will get in touch soon."
            }), (0, t.jsx)(x.Button, {
                onClick: () => l(!1),
                variant: "default",
                children: "Submit Another"
            })]
        }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("h2", {
                className: "text-base lg:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 text-center lg:text-left",
                children: "To request more information about our products and services, please complete the form below."
            }), (0, t.jsxs)("form", {
                onSubmit: d,
                className: "space-y-3 lg:space-y-8",
                children: [(0, t.jsx)("input", {
                    type: "hidden",
                    name: "form_name",
                    value: "contact"
                }), (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                    children: [(0, t.jsx)(g, {
                        label: "Full Name",
                        name: "name",
                        type: "text",
                        error: e.name
                    }), (0, t.jsx)(g, {
                        label: "Work Email",
                        name: "email",
                        type: "email",
                        error: e.email
                    })]
                }), (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                    children: [(0, t.jsxs)("select", {
                        name: "budget",
                        className: "w-full border-b border-gray-300 bg-transparent px-0 py-2 text-gray-700 focus:outline-none focus:border-blue-600",
                        children: [(0, t.jsx)("option", {
                            value: "",
                            children: "Select Budget"
                        }), (0, t.jsx)("option", {
                            children: "$1k - $5k"
                        }), (0, t.jsx)("option", {
                            children: "$5k - $10k"
                        }), (0, t.jsx)("option", {
                            children: "$10k - $50k"
                        }), (0, t.jsx)("option", {
                            children: "$50k+"
                        })]
                    }), (0, t.jsx)(g, {
                        label: "Contact Number",
                        name: "phone",
                        type: "tel",
                        error: e.phone
                    })]
                }), (0, t.jsx)(b, {
                    label: "Describe Your Project... In Brief",
                    name: "project",
                    error: e.project
                }), (0, t.jsx)("div", {
                    className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4",
                    children: (0, t.jsxs)("div", {
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
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, t.jsxs)("label", {
                            className: "text-sm font-medium text-gray-700",
                            children: [r, " + ", n, " ="]
                        }), (0, t.jsx)("input", {
                            name: "captcha",
                            type: "text",
                            className: "w-16 bg-transparent border-b border-gray-300 text-center focus:outline-none focus:border-blue-600"
                        })]
                    }), e.captcha && (0, t.jsx)("p", {
                        className: "text-red-500 text-sm",
                        children: e.captcha
                    }), (0, t.jsx)(x.Button, {
                        className: "rounded-full w-full sm:w-auto",
                        type: "submit",
                        variant: "default",
                        size: "lg",
                        children: "Submit"
                    })]
                })]
            })]
        })
    }
    let g = ({
            label: e,
            type: s,
            name: a,
            error: l
        }) => {
            let [r, i] = (0, p.useState)(""), [n, o] = (0, p.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("input", {
                    type: s,
                    name: a,
                    value: r,
                    onChange: e => i(e.target.value),
                    onFocus: () => o(!0),
                    onBlur: () => o(!1),
                    className: `peer w-full bg-transparent border-b border-gray-300 text-gray-800 focus:outline-none px-0 pt-4 pb-1 ${l?"border-red-500":""}`
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 transition-all duration-200 pointer-events-none ${r||n?"-translate-y-4 text-xs text-blue-600":"top-3 text-base text-gray-500"}`,
                    children: e
                }), l && (0, t.jsx)("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: l
                })]
            })
        },
        b = ({
            label: e,
            name: s,
            error: a
        }) => {
            let [l, r] = (0, p.useState)(""), [i, n] = (0, p.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative w-full",
                children: [(0, t.jsx)("textarea", {
                    name: s,
                    rows: 4,
                    value: l,
                    onChange: e => r(e.target.value),
                    onFocus: () => n(!0),
                    onBlur: () => n(!1),
                    className: `peer w-full bg-transparent border-b border-gray-300 text-gray-800 focus:outline-none px-0 pt-4 pb-1 resize-none ${a?"border-red-500":""}`
                }), (0, t.jsx)("label", {
                    className: `absolute left-0 transition-all duration-200 pointer-events-none ${l||i?"-translate-y-4 text-xs text-blue-600":"top-3 text-base text-gray-500"}`,
                    children: e
                }), a && (0, t.jsx)("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: a
                })]
            })
        },
        f = [{
            icon: (0, t.jsx)(s.FiPhone, {}),
            href: "tel:+919870635001"
        }, {
            icon: (0, t.jsx)(function(e) {
                return (0, a.GenIcon)({
                    tag: "svg",
                    attr: {
                        role: "img",
                        viewBox: "0 0 24 24"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                        },
                        child: []
                    }]
                })(e)
            }, {}),
            href: "https://api.whatsapp.com/send?phone=+917985202681&text=Hello!%20nadcab%20Labs"
        }, {
            icon: (0, t.jsx)(s.FiMail, {}),
            href: "mailto:info@nadcab.com"
        }, {
            icon: (0, t.jsx)(l.BsTelegram, {}),
            href: "https://t.me/amanvaths"
        }],
        j = [{
            title: "India",
            description: "3rd Floor, Oyster Complex, Greenlands Road, Somajiguda, Begumpet, Hyderabad, PIN: 500016, Telangana, India",
            phone: "+91 - 8840490443",
            image: "/locations/IND.png"
        }, {
            title: "Australia",
            description: "38-52 Waterloo St, Surry Hills NSW 2010, Australia",
            phone: "+61 488 841 730",
            image: "/locations/AUS.png"
        }, {
            title: "Canada",
            description: "4800 Sheppard Ave E, Scarborough,ON M1S 5M9, Canada",
            phone: "+(877) 768-2813",
            image: "/locations/Canada.png"
        }, {
            title: "United Kingdom",
            description: "23 New Drum Street London E1 7AY United Kingdom",
            phone: "+447453379563",
            image: "/locations/UK.png"
        }, {
            title: "UAE",
            description: "Damascus St, Al Qusais Industrial Area 3, Dubai,",
            phone: "+ 97-2114464213",
            image: "/locations/UAE.png"
        }, {
            title: "USA",
            description: "740 E 13th St, New York, NY 10009, United States",
            phone: " +1 646-665-9735",
            image: "/locations/USA.png"
        }],
        y = [{
            badge: "Speed",
            icon: s.FiClock,
            title: "Quick Response",
            description: "Our experts get back to you within 24 hours."
        }, {
            badge: "Custom",
            icon: s.FiSettings,
            title: "Tailored Solutions",
            description: "We understand your business and provide the best-fit blockchain solutions."
        }, {
            badge: "Privacy",
            icon: s.FiShield,
            title: "Confidentiality",
            description: "Your project details are protected with NDA agreements."
        }],
        v = [{
            question: "How can I get a consultation for my blockchain project?",
            answer: "You can fill out the contact form or reach out via email/WhatsApp. Our experts will schedule a call within 24 hours to discuss your project."
        }, {
            question: "Do you offer support after project delivery?",
            answer: "Absolutely! We provide post-launch support, maintenance, and upgrades for all blockchain solutions we deliver."
        }, {
            question: "What details should I provide when contacting Veridaxlabs?",
            answer: "Provide your project idea, timeline, budget, and any technical requirements. The more details you share, the better we can tailor our proposal."
        }, {
            question: "Can I request a Non-Disclosure Agreement (NDA)?",
            answer: "Yes, Veridaxlabs signs an NDA for all potential projects to ensure your ideas and sensitive information remain fully confidential."
        }, {
            question: "What is the typical response time after submitting a contact form?",
            answer: "Our team usually responds within 24–48 hours to discuss your project requirements and next steps."
        }, {
            question: "Do you provide custom blockchain development solutions?",
            answer: "Yes, Veridaxlabs specializes in end-to-end custom blockchain solutions, including smart contracts, DApps, DeFi platforms, and NFT projects."
        }, {
            question: "How can I follow up on my existing project inquiry?",
            answer: "You can reach out via the email you used in the contact form or connect with our support team through WhatsApp or phone. We track all inquiries to provide timely updates."
        }, {
            question: "Which communication channels are available for project discussion?",
            answer: "We are available via email, phone, WhatsApp, and Telegram. You can choose whichever is most convenient for you."
        }],
        N = () => (0, t.jsxs)("section", {
            children: [" ", (0, t.jsx)("div", {
                className: "relative bg-black text-white bg-[url('/section-bg.avif')] bg-no-repeat bg-cover bg-center min-h-screen w-full",
                children: (0, t.jsxs)("div", {
                    className: "max-w-7xl-- mx-auto flex flex-col lg:flex-row items-stretch w-full min-h-screen pt-24 pb-8 px-4 lg:py-32 lg:px-16 gap-8",
                    children: [(0, t.jsxs)("div", {
                        className: "w-full lg:w-1/2 flex flex-col justify-center border border-gray-700 rounded-2xl bg-black/40 backdrop-blur-md p-6 sm:p-10 lg:p-12 order-2 lg:order-1",
                        children: [(0, t.jsxs)("h1", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-semibold lg:leading-tight mb-6",
                            children: ["Nadcab: Your Trusted ", (0, t.jsx)("br", {}), " Blockchain & Web3 Partner"]
                        }), (0, t.jsx)("p", {
                            className: "text-gray-300 mb-4 text-sm sm:text-base",
                            children: "At Veridaxlabs, we provide end-to-end digital engineering solutions, from strategy to deployment, ensuring seamless execution of your projects. Our approach simplifies the complexity of managing multiple touchpoints. Here’s how we get started."
                        }), (0, t.jsxs)("p", {
                            className: "text-gray-300 mb-6 text-sm sm:text-base",
                            children: ["For customer support, please use the chat widget at the bottom right of your screen or send an email to", " ", (0, t.jsx)(r.default, {
                                href: "mailto:sales@nadcab.com",
                                className: "text-blue-500 italic hover:underline",
                                children: "sales@nadcab.com"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "flex gap-4 mb-6",
                            children: f.map((e, s) => (0, t.jsx)(r.default, {
                                href: e.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-900 transition-colors text-white",
                                children: e.icon
                            }, s))
                        }), (0, t.jsx)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: [{
                                title: "Tell Us Your Vision",
                                desc: "Fill out the form with your project details. We’ll sign an NDA to keep your idea confidential."
                            }, {
                                title: "Get a Free Consultation",
                                desc: "Our experts connect with you quickly to discuss your goals in detail."
                            }, {
                                title: "Receive a Detailed Proposal",
                                desc: "We deliver a transparent project plan with detailed cost and timelines."
                            }].map((e, s) => (0, t.jsxs)("div", {
                                className: "border border-gray-700 rounded-2xl p-4 sm:p-5 bg-black/50 hover:bg-white/10 transition-all text-center",
                                children: [(0, t.jsx)("h3", {
                                    className: "font-semibold text-lg mb-2",
                                    children: e.title
                                }), (0, t.jsx)("p", {
                                    className: "text-gray-300 text-sm sm:text-base",
                                    children: e.desc
                                })]
                            }, s))
                        })]
                    }), (0, t.jsx)("div", {
                        className: "w-full lg:w-1/2 flex flex-col justify-center bg-white rounded-2xl text-black p-6 sm:p-8 lg:p-6 order-1 lg:order-2",
                        children: (0, t.jsx)(h, {})
                    })]
                })
            }), (0, t.jsx)("div", {
                className: "space-y-section"
            }), (0, t.jsx)(i.default, {}), (0, t.jsxs)("div", {
                className: "py-16 px-4",
                children: [(0, t.jsxs)("div", {
                    className: "text-center lg:mb-8 mb-2",
                    children: [(0, t.jsx)("h2", {
                        className: "text-gradient font-medium text-2xl sm:text-4xl leading-normal mb-2",
                        children: "Global Presence of Veridaxlabs"
                    }), (0, t.jsx)("p", {
                        className: "text-muted-foreground text-sm sm:text-sm md:text-base max-w-4xl mx-auto ",
                        children: "Our experts are always within reach, connecting you to the world."
                    })]
                }), (0, t.jsx)("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 lg:pb-16",
                    children: j.map((e, s) => (0, t.jsx)(o.Card, {
                        className: "flex items-center",
                        children: (0, t.jsxs)(o.CardContent, {
                            className: "p-6 flex flex-row items-start gap-6",
                            children: [(0, t.jsx)("div", {
                                className: "flex-shrink-0 w-8 h-8 relative",
                                children: (0, t.jsx)(c.default, {
                                    src: (0, m.normalizeImage)(e.image) || "",
                                    alt: e.title,
                                    width: 32,
                                    height: 32,
                                    className: "object-cover mt-2"
                                })
                            }), (0, t.jsxs)("div", {
                                className: "flex-1 text-left",
                                children: [(0, t.jsx)("h3", {
                                    className: "font-medium text-lg sm:text-xl mb-2",
                                    children: e.title
                                }), (0, t.jsx)("p", {
                                    className: "font-normal text-muted-foreground text-sm sm:text-sm mb-2",
                                    children: e.description
                                }), e.phone && (0, t.jsx)("p", {
                                    className: "font-medium text-sm sm:text-base",
                                    children: e.phone
                                })]
                            })]
                        })
                    }, s))
                })]
            }), (0, t.jsx)("section", {
                className: "py-16 bg-[#2a2a2a]",
                children: (0, t.jsxs)("div", {
                    className: "px-4 md:px-4",
                    children: [(0, t.jsx)("div", {
                        className: "text-center mb-12",
                        children: (0, t.jsx)("h2", {
                            className: "gradient-text-- text-white lg:leading-snug text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6",
                            children: "Why Contact Us?"
                        })
                    }), (0, t.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto",
                        children: y.map((e, s) => {
                            let a = e.icon;
                            return (0, t.jsx)(o.Card, {
                                className: "flex flex-col items-center justify-center rounded-lg",
                                children: (0, t.jsxs)(o.CardContent, {
                                    className: "flex flex-col items-center justify-center text-center space-y-2 p-6 lg:p-6 flex-1",
                                    children: [(0, t.jsxs)("div", {
                                        className: "w-32 h-10 sm:w-32 sm:h-10 rounded-sm flex mb-2 sm:mb-2.5 items-center justify-center  bg-blue-600 text-white font-bold gap-2",
                                        children: [(0, t.jsx)(a, {
                                            className: "text-white text-xl"
                                        }), (0, t.jsx)("span", {
                                            className: "font-normal text-white text-lg",
                                            children: e.badge
                                        })]
                                    }), (0, t.jsx)("h3", {
                                        className: "font-medium text-lg sm:text-sm md:text-2xl",
                                        children: e.title
                                    }), (0, t.jsx)("p", {
                                        className: "text-sm sm:text-base text-muted-foreground",
                                        children: e.description
                                    })]
                                })
                            }, s)
                        })
                    })]
                })
            }), (0, t.jsx)(u, {
                title: "A Quick Glimpse of Our Blockchain Expertise",
                description: "At Veridaxlabs, we build secure and innovative blockchain solutions tailored to your business needs. From smart contracts and DApps to DeFi, NFT, and Metaverse projects, our team ensures your ideas turn into reliable, scalable applications.",
                bulletPoints: ["Custom Blockchain Application Development", "Smart Contract Development & Audits", "DApps & Web3 Solutions, DeFi, NFT, and Metaverse Projects", "Blockchain Consulting & Strategy"],
                imageSrc: "/quick-glimpse.png",
                altText: "Our Blockchain Expertise"
            }), (0, t.jsx)(n.default, {
                title: "Frequently Asked Questions ",
                faqs: v,
                twoColumn: !0
            })]
        })
}]);