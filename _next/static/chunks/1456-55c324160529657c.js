"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1456], {
        83884: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = s(57437),
                r = s(56800),
                l = s.n(r);

            function n(e) {
                let t = l()("m-auto text-white w-7 h-7 animate-spin", e.className);
                return (0, a.jsxs)("svg", { ...e,
                    className: t,
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }), (0, a.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })]
                })
            }
        },
        11771: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return i
                },
                h: function() {
                    return n
                }
            });
            var a = s(57437),
                r = s(66648),
                l = s(96357);

            function n() {
                l.Z.timeline({}).add({
                    targets: ["#splash-doge"],
                    rotate: [0, "-90deg"],
                    duration: 500
                }).add({
                    targets: ["#splash-dawg"],
                    translateY: {
                        value: [0, "67vh"],
                        easing: "easeInSine"
                    },
                    rotate: {
                        value: [0, "-90deg"],
                        easing: "linear",
                        duration: 100
                    }
                }).add({
                    targets: ["#splash"],
                    opacity: [1, 0],
                    duration: 1e3,
                    complete: () => {
                        document.body.classList.add("mounted"), document.querySelector("#splash").style.display = "none", document.querySelector("#splash-mob").style.display = "none"
                    }
                })
            }

            function i() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "overflow-hidden hidden md:flex w-screen h-[100vh] fixed z-50 space-bg justify-center items-center",
                        id: "splash",
                        children: [(0, a.jsx)(r.default, {
                            src: "/assets/space.webp",
                            width: 3424,
                            height: 1920,
                            className: "absolute h-auto w-[100%] left-0 top-0",
                            alt: ""
                        }), (0, a.jsx)("div", {
                            id: "splash-dawg",
                            className: "w-[20vw] relative z-10",
                            children: (0, a.jsx)(r.default, {
                                src: "/assets/base-doge.webp",
                                priority: !0,
                                height: 600,
                                width: 538,
                                className: "w-auto h-auto splash-floating",
                                alt: "Base-Doge",
                                id: "splash-doge"
                            })
                        }), (0, a.jsx)(r.default, {
                            src: "/assets/earth.webp",
                            priority: !0,
                            width: 2e3,
                            height: 103,
                            className: "fixed splash-earth h-auto w-[100%] max-w-[unset] -bottom-2",
                            alt: ""
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "md:hidden overflow-hidden w-screen h-[100vh] fixed z-50 space-bg flex justify-center items-center splash",
                        id: "splash-mob",
                        children: [(0, a.jsx)(r.default, {
                            src: "/assets/space-mob.webp",
                            width: 1170,
                            height: 2535,
                            className: "absolute h-auto w-[100%] left-0 top-0",
                            alt: ""
                        }), (0, a.jsx)("div", {
                            id: "splash-dawg",
                            className: "w-[33vw] relative z-10",
                            children: (0, a.jsx)(r.default, {
                                src: "/assets/base-doge.webp",
                                priority: !0,
                                height: 600,
                                width: 538,
                                className: "w-auto h-auto splash-floating",
                                alt: "Base-Doge",
                                id: "splash-doge"
                            })
                        }), (0, a.jsx)(r.default, {
                            src: "/assets/earth.webp",
                            priority: !0,
                            width: 2e3,
                            height: 103,
                            className: "fixed splash-earth h-auto w-[400%] max-w-[unset] -bottom-2",
                            alt: ""
                        })]
                    })]
                })
            }
        },
        44789: function(e, t, s) {
            var a = s(57437);
            s(87138), s(2265);
            var r = s(90089),
                l = s(47885),
                n = s(56800),
                i = s.n(n);

            function o(e) {
                let {
                    label: t,
                    content: s,
                    inverted: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: i()("z-20 flex flex-col items-center justify-center gap-4 tracking-wide grow p-8 rounded", {
                        "bg-white": r
                    }),
                    children: [(0, a.jsxs)("span", {
                        className: i()("text-left opacity-80", {
                            "text-black": r
                        }),
                        children: [t, ":"]
                    }), (0, a.jsx)("span", {
                        className: i()("text-4xl text-left grow", {
                            "text-primary": r
                        }),
                        children: (s || "").toLocaleString() || "~"
                    })]
                })
            }
            t.Z = () => {
                let {
                    t: e
                } = (0, r.$G)(), {
                    data: t
                } = (0, l.aM)({
                    queryKey: ["presaleState"],
                    refetchInterval: 3e4,
                    queryFn: async () => (await fetch("api/fetch-presale-state", {
                        cache: "no-store"
                    })).json()
                });
                return (0, a.jsx)("div", {
                    className: "z-20 w-full overflow-hidden max-w-[900px] backdrop-blur backdrop-brightness-50 rounded-xl text-center text-white",
                    children: (0, a.jsxs)("div", {
                        className: "relative z-30 flex flex-col justify-center w-full h-full gap-4 p-0 sm:flex-row sm:gap-2 sm:gap-4",
                        children: [(0, a.jsx)(o, {
                            label: e("presaleForm.soldTokens"),
                            content: null == t ? void 0 : t.tokens_sold
                        }), (0, a.jsx)(o, {
                            label: e("presaleForm.totalStakedTokens"),
                            content: null == t ? void 0 : t.tokens_staked
                        }), (0, a.jsx)(o, {
                            label: e("presaleForm.currentAPY"),
                            content: ((null == t ? void 0 : t.APY) || 737).toFixed(1) + "%",
                            inverted: !0
                        }), (0, a.jsx)(o, {
                            label: e("presaleForm.percentStaked"),
                            content: ((null == t ? void 0 : t.percentage_staked) || 0).toFixed(1) + "%"
                        })]
                    })
                })
            }
        },
        7335: function(e, t, s) {
            s(2265);
            var a = s(70219);
            s(5596), s(44394), BigInt(a.CJ)
        },
        40183: function(e, t, s) {
            s(22599), s(2265), s(45429), s(13320), s(47921), s(36862), s(26161)
        },
        26161: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = s(2265),
                r = s(16463);

            function l() {
                let [e, t] = (0, a.useState)({
                    clickId: null,
                    source: null,
                    referrer: null,
                    query: null
                }), [s, l] = (0, a.useState)(!1);
                (0, r.useRouter)(), (0, r.usePathname)(), (0, a.useEffect)(() => {
                    let e = new URLSearchParams(window.location.search);
                    Array.from(e.values()).length > 0 && t({
                        clickId: e.get("clickId"),
                        source: e.get("source"),
                        referrer: e.get("referrer"),
                        query: Array.from(e).reduce((e, t) => {
                            let [s, a] = t;
                            return e[s] = a, e
                        }, {})
                    }), l(!0)
                }, []);
                let n = (t, s) => {
                    fetch(t, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ ...s,
                            clickId: e.clickId,
                            source: e.source,
                            referrer: e.referrer,
                            query: e.query
                        }, (e, t) => "bigint" == typeof t ? t.toString() : t)
                    })
                };
                return {
                    ready: s,
                    params: e,
                    sendDashFx: n,
                    trackWalletConnected: e => {
                        n("/api/lead", {
                            address: e
                        })
                    }
                }
            }
        },
        47921: function(e, t, s) {
            s(13320), s(45429), s(32741), s(2265)
        }
    }
]);