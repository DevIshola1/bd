"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [319], {
        30319: function(e, t, s) {
            s.d(t, {
                default: function() {
                    return eG
                }
            });
            var a = s(57437),
                l = s(2265),
                r = s(11771),
                i = s(66648),
                n = s(90089),
                o = s(24314),
                c = s(83884),
                d = s(25292),
                h = s(58959),
                x = s(56800),
                u = s.n(x);

            function m(e) {
                let [t, s] = (0, l.useState)(e.visible), {
                    t: r
                } = (0, n.$G)();
                return (0, a.jsxs)(o.u_, {
                    show: t,
                    onClose: () => s(!1),
                    onClick: () => s(!1),
                    className: u()("bg-[#00000066] [&>div]:max-w-[750px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    children: [(0, a.jsx)(o.u_.Header, {
                        className: "[&>h3]:text-primary bg-transparent p-5 pb-2 [&>h3]:text-4xl [&>button]:text-3xl [&>button]:text-primary",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: "Disclaimer for UK residents."
                    }), (0, a.jsx)(o.u_.Body, {
                        className: "py-5 bg-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: (0, a.jsx)("div", {
                            className: "px-5",
                            children: (0, a.jsx)("p", {
                                className: "mb-4 text-base font-bold",
                                children: "Base Dawgz does not meet the FCA and UK Government requirements to target services to UK users. If you are residing in the UK, please do not continue using our website."
                            })
                        })
                    })]
                })
            }
            var p = s(87138),
                f = s(23983),
                g = s(55573),
                w = s(88426),
                b = s(22599),
                j = s.n(b);

            function v() {
                let {
                    t: e,
                    i18n: t
                } = (0, n.$G)(), [s, r] = (0, l.useState)(t.language);
                return (0, l.useEffect)(() => {
                    var e;
                    r(null !== (e = t.language) && void 0 !== e ? e : "en")
                }, [null == t ? void 0 : t.language]), (0, a.jsxs)(f.v, {
                    as: "span",
                    className: "relative inline text-left h-[30px]",
                    children: [(0, a.jsx)(f.v.Button, {
                        className: "inline-flex items-center justify-center font-semibold bg-transparent text-white-900",
                        children: (0, a.jsx)(i.default, {
                            src: "/flags/".concat(s, ".svg"),
                            width: 30,
                            height: 30,
                            alt: s,
                            className: "inline h-[30px] w-[30px] rounded-[15px] object-cover"
                        })
                    }), (0, a.jsx)(g.u, {
                        as: l.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: (0, a.jsx)(f.v.Items, {
                            className: "absolute right-0 z-50 w-32 mt-0 origin-top-right translate-y-0 bg-white rounded-md shadow-lg focus:outline-none",
                            children: (0, a.jsx)("div", {
                                className: "py-1 max-h-[50vh] overflow-auto",
                                children: j().chain(w.Z).keys().sort().value().map(e => (0, a.jsx)(f.v.Item, {
                                    children: t => {
                                        let {
                                            active: s
                                        } = t;
                                        return (0, a.jsxs)(p.default, {
                                            href: "/".concat(e),
                                            className: u()("text-primary block py-2 px-3 text-lg flex items-center justify-between"),
                                            children: [(0, a.jsx)(i.default, {
                                                src: "/flags/".concat(e, ".svg"),
                                                width: 30,
                                                height: 30,
                                                alt: e,
                                                className: "inline h-[30px] w-[30px] rounded-[15px] mr-4 object-cover"
                                            }), e.toLocaleLowerCase()]
                                        })
                                    }
                                }, "lang-item-".concat(e)))
                            })
                        })
                    })]
                })
            }

            function y(e) {
                let {
                    url: t,
                    className: s,
                    ...l
                } = e;
                return (0, a.jsxs)("audio", {
                    preload: "none",
                    controls: !0,
                    src: t,
                    className: u()("hidden", s),
                    loop: !0,
                    ...l,
                    children: ["Your browser does not support the", (0, a.jsx)("code", {
                        children: "audio"
                    }), " element."]
                })
            }
            var N = s(43781);

            function k() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsxs)("header", {
                    className: "fixed z-20 z-40 block w-full px-3 text-3xl tracking-wider text-white backdrop-blur backdrop-brightness-75",
                    children: [(0, a.jsx)(y, {
                        url: "/base-doge.mp3"
                    }), (0, a.jsxs)("div", {
                        className: "flex-row items-center justify-between hidden w-full xl:flex",
                        children: [(0, a.jsx)(p.default, {
                            href: "#home",
                            className: "h-[80px] w-auto p-[5px] tracking-normal text-primary flex items-center",
                            children: (0, a.jsx)(i.default, {
                                src: "/assets/logo.webp",
                                width: 342,
                                height: 70,
                                className: "relative h-[40px] w-auto m-auto",
                                alt: e("globals.baseDoge")
                            })
                        }), (0, a.jsxs)("div", {
                            className: "items-center justify-center hidden text-xl sm:flex gap-x-12 max-w-[70vw] [&>a:hover]:text-primary",
                            children: [(0, a.jsx)(p.default, {
                                href: "#tokenomics",
                                children: e("globals.tokenomics")
                            }), (0, a.jsx)(p.default, {
                                href: "#roadmap",
                                children: e("globals.roadmap")
                            }), (0, a.jsx)(p.default, {
                                href: "#faq",
                                children: e("globals.faq")
                            }), (0, a.jsx)(p.default, {
                                href: "#contact",
                                children: e("globals.contact")
                            }), (0, a.jsx)(p.default, {
                                href: "/assets/whitepaper.pdf",
                                target: "_blank",
                                className: u()("relative"),
                                children: "Whitepaper"
                            }), (0, a.jsx)(p.default, {
                                href: "/assets/audit.pdf",
                                target: "_blank",
                                className: u()("relative text-white bg-primary p-1 px-3 rounded hover:bg-white"),
                                children: "Audit"
                            }), (0, a.jsx)(p.default, {
                                href: "/staking",
                                className: u()("relative text-primary bg-white p-1 px-3 rounded hover:bg-white"),
                                children: "Staking"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center gap-5 text-2xl",
                            children: [(0, a.jsx)(v, {}), (0, a.jsx)(p.default, {
                                href: "https://t.me/BaseDawgz",
                                target: "_blank",
                                children: (0, a.jsx)(N.iEj, {})
                            }), (0, a.jsx)(p.default, {
                                href: "https://x.com/BaseDawgz",
                                target: "_blank",
                                children: (0, a.jsx)(N.AMt, {})
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-row items-center justify-between w-full xl:hidden",
                        children: [(0, a.jsx)(p.default, {
                            href: "#home",
                            className: "h-[60px] w-auto p-[5px] tracking-normal text-primary flex items-center",
                            children: (0, a.jsx)(i.default, {
                                src: "/assets/logo.webp",
                                width: 342,
                                height: 70,
                                className: "relative h-[36px] w-auto m-auto",
                                alt: e("globals.baseDoge")
                            })
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-5 text-2xl",
                                children: [(0, a.jsx)(v, {}), (0, a.jsx)(p.default, {
                                    href: "https://t.me/BaseDawgz",
                                    target: "_blank",
                                    children: (0, a.jsx)(N.iEj, {})
                                }), (0, a.jsx)(p.default, {
                                    href: "https://x.com/BaseDawgz",
                                    target: "_blank",
                                    children: (0, a.jsx)(N.AMt, {})
                                })]
                            })
                        })]
                    })]
                })
            }
            s(44394);
            let [z, D, C, T] = d.PE;
            D.id, C.id, z.id, T.id, [...d.PE], s(7335);
            let [S, B, P, _, A] = d.p5;
            s(73136);
            var G = s(65691),
                E = s(70219);
            let L = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return (e > 100 ? Math.floor(e) : e).toLocaleString()
            };

            function q() {
                let {
                    data: e
                } = (0, G.a)({
                    queryKey: ["presaleState"],
                    refetchInterval: 3e4,
                    queryFn: async () => (await fetch("api/fetch-presale-state", {
                        cache: "no-store"
                    })).json()
                }), t = (0, l.useRef)();
                return (0, l.useEffect)(() => {
                    let e;
                    if (E.LA, !t.current) return;
                    let s = () => {
                        new Date().getTime(), t.current.style.width = "100%", setTimeout(s, 5e3)
                    };
                    return s(), () => e && clearTimeout(e)
                }, [t.current]), (0, a.jsxs)("div", {
                    className: "bg-white relative w-full rounded-[2rem] overflow-hidden",
                    children: [(0, a.jsx)("div", {
                        ref: t,
                        className: "bg-gradient-radial from-primary-300 to-primary h-full absolute rounded-[2rem] rounded-r-sm"
                    }), (0, a.jsx)("span", {
                        className: "relative z-10 flex items-center justify-center block py-2 text-4xl text-center text-black bold",
                        children: (0, a.jsx)(n.cC, {
                            i18nKey: "presaleForm.amountRaised",
                            components: [(0, a.jsx)("span", {
                                className: "inline ml-2 text-2xl text-black-400"
                            }, "raise-progress")],
                            values: {
                                amount: e ? L(e.usd_raised) : "3.3M+"
                            }
                        })
                    })]
                })
            }
            E.LA, s(5596), s(11301), s(36862);
            var F = s(26161);
            BigInt(E.CJ), s(40183), s(47921), s(58488);
            var $ = s(16463);

            function W() {
                let {
                    t: e
                } = (0, n.$G)(), {
                    data: t
                } = (0, G.a)({
                    queryKey: ["presaleState"],
                    refetchInterval: 3e4,
                    queryFn: async () => (await fetch("api/fetch-presale-state", {
                        cache: "no-store"
                    })).json()
                });
                return (0, a.jsxs)("div", {
                    className: "absolute z-10 w-32 h-32 sm:w-32 sm:h-32 -right-4 sm:-top-12 sm:-right-20 -top-32",
                    children: [(0, a.jsx)(i.default, {
                        src: "/assets/badge.webp",
                        height: 342,
                        width: 407,
                        className: "absolute w-full h-auto"
                    }), (0, a.jsxs)("div", {
                        className: "relative z-20 flex flex-col items-center justify-center h-full gap-2 text-white drop-shadow-lg",
                        children: [(0, a.jsxs)("span", {
                            className: "pt-2 pb-1 text-4xl sm:text-4xl",
                            children: [Math.round(null == t ? void 0 : t.APY) || 737, "%"]
                        }), (0, a.jsx)("span", {
                            className: "text-primary",
                            children: e("presaleForm.currentAPY")
                        })]
                    })]
                })
            }

            function I() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsxs)("div", {
                    className: "flex-col sm:max-w-[450px] w-full p-4 pt-0 sm:gap-2 gap-2 text-center text-white flex relative z-10 [&>a]:opacity-50",
                    children: [(0, a.jsxs)(p.default, {
                        href: "https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xb34be2f34a662655760ce9c908f4ad594b7837f6",
                        className: "flex items-center justify-center gap-4 !text-xl primary-button !bg-[rgb(255_0_122)] !border-b-0 !pb-[0.75rem]",
                        children: [(0, a.jsx)(i.default, {
                            src: "/assets/uniswap-logo.png",
                            width: 28,
                            height: 28,
                            className: "-mt-2"
                        }), "Buy on Uniswap"]
                    }), (0, a.jsxs)(p.default, {
                        href: "https://www.dextools.io/app/en/base/pair-explorer/0x46468412ccdbeea32934f6eaa41c7b9d986856fd",
                        className: "flex items-center justify-center gap-4 !text-xl primary-button !bg-[rgb(255_0_122)] !border-b-0 !pb-[0.75rem]",
                        children: [(0, a.jsx)(i.default, {
                            src: "/assets/dextools-logo.png",
                            width: 28,
                            height: 28,
                            className: "-mt-2"
                        }), "Dextools"]
                    }), (0, a.jsxs)(p.default, {
                        href: "https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=DAWGZ2uqY4XorFA4pvfAXYszWZBH52ySA1cYJGmbhSc7&fixed=in",
                        className: "flex items-center justify-center gap-4 !text-xl primary-button !bg-[rgb(255_0_122)] !border-b-0 !pb-[0.75rem]",
                        children: [(0, a.jsx)(i.default, {
                            src: "/assets/raydium-logo.png",
                            width: 28,
                            height: 28,
                            className: "-mt-2"
                        }), "Buy on Raydium"]
                    }), (0, a.jsxs)(p.default, {
                        href: "https://dexscreener.com/solana/DAWGZ2uqY4XorFA4pvfAXYszWZBH52ySA1cYJGmbhSc7",
                        className: "flex items-center justify-center gap-4 !text-xl primary-button !bg-[rgb(255_0_122)] !border-b-0 !pb-[0.75rem]",
                        children: [(0, a.jsx)(i.default, {
                            src: "/assets/dexscreener-logo.png",
                            width: 28,
                            height: 28,
                            className: "-mt-2"
                        }), "Dexscreener"]
                    })]
                })
            }

            function K() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsxs)("div", {
                    className: "flex-col sm:w-[450px] z-30 xl:p-6 lg:p-4 p-6 sm:gap-4 gap-2 text-center text-white flex relative z-10 max-w-sm sm:max-w-[unset] backdrop-blur backdrop-brightness-50 rounded-xl",
                    children: [(0, a.jsx)(W, {}), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-6 py-0",
                        children: [(0, a.jsx)("h1", {
                            className: "inline text-3xl drop-shadow-lg",
                            children: "Presale has ended!"
                        }), (0, a.jsx)(q, {})]
                    }), (0, a.jsx)("p", {
                        className: "px-4 mt-4 text-lg text-left",
                        children: "The presale has ended, you can purchase $DAWGZ on the following platforms:"
                    }), (0, a.jsx)(I, {})]
                })
            }
            var U = s(28489),
                M = s(47885);

            function Z(e) {
                let {
                    visible: t,
                    setVisible: s
                } = e, {
                    chain: r
                } = (0, l.useContext)(h.Z), [i, c] = (0, l.useState)(), {
                    t: x
                } = (0, n.$G)(), m = (0, U.z)(), p = (0, M.py)();
                return (0, l.useEffect)(() => {
                    var e, t, s, a, l, i;
                    r === d.$D.id && (null == m ? void 0 : null === (e = m.publicKey) || void 0 === e ? void 0 : e.toString()) ? c(null == m ? void 0 : null === (a = m.publicKey) || void 0 === a ? void 0 : a.toString()) : (null == p ? void 0 : null === (s = p.data) || void 0 === s ? void 0 : null === (t = s.account) || void 0 === t ? void 0 : t.address) && c(null == p ? void 0 : null === (i = p.data) || void 0 === i ? void 0 : null === (l = i.account) || void 0 === l ? void 0 : l.address)
                }, [m, p]), (0, a.jsxs)(o.u_, {
                    show: t,
                    onClose: () => s(!1),
                    onClick: () => s(!1),
                    className: u()("bg-[#00000066] [&>div]:max-w-[750px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    children: [(0, a.jsx)(o.u_.Header, {
                        className: "[&>h3]:text-primary bg-transparent p-5 pb-2 [&>h3]:text-4xl [&>button]:text-3xl [&>button]:text-primary",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: x("hero.refer")
                    }), (0, a.jsxs)(o.u_.Body, {
                        className: "py-5 bg-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: [(0, a.jsxs)("div", {
                            className: "px-5",
                            children: [(0, a.jsx)("p", {
                                className: "mb-4 text-base font-bold",
                                children: x("hero.referText")
                            }), (0, a.jsx)(H, {
                                address: i
                            })]
                        }), (0, a.jsx)(Y, {})]
                    }), (0, a.jsx)(o.u_.Footer, {
                        className: "justify-end px-5 py-3 bg-transparent",
                        children: (0, a.jsx)(o.zx, {
                            onClick: () => s(!1),
                            className: "px-4 py-1 bg-white border-2 border-primary rounded-lg text-primary [&>span]:relative [&>span]:top-[2px] [&>span]:text-base",
                            children: x("globals.cancel")
                        })
                    })]
                })
            }

            function Y() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsxs)("a", {
                    download: !0,
                    href: "/referandearn.pdf",
                    className: "flex gap-2 py-[1px] font-bold text-primary tracking-widest px-5 pt-5",
                    children: [e("hero.referInstructions"), (0, a.jsx)(N.L0d, {})]
                })
            }

            function H(e) {
                let {
                    address: t
                } = e, [s, r] = (0, l.useState)(!1), {
                    t: i
                } = (0, n.$G)(), o = () => {
                    navigator.clipboard.writeText(h), r(!0), setTimeout(() => r(!1), 3e3)
                }, {
                    isLoading: d,
                    data: h
                } = (0, G.a)({
                    queryKey: ["referralLink", t],
                    queryFn: async () => {
                        if (!t) return ""; {
                            var e;
                            let s = await fetch("/api/refer", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        address: t
                                    })
                                }),
                                a = await s.json();
                            return (null == a ? void 0 : null === (e = a.data) || void 0 === e ? void 0 : e.url) || ""
                        }
                    }
                });
                return t ? (0, a.jsx)("div", {
                    onClick: () => {
                        h && o()
                    },
                    className: "w-full p-2 cursor-pointer font-bold text-primary text-center truncate border-2 border-primary bg-white rounded-lg",
                    children: s ? i("hero.copiedToClipboard") : (0, a.jsx)(a.Fragment, {
                        children: d ? (0, a.jsx)(c.Z, {}) : h || "Something went wrong."
                    })
                }) : (0, a.jsx)("div", {
                    className: "w-full p-2 font-bold text-primary text-center border-2 border-primary bg-white rounded-lg cursor-pointer",
                    onClick: () => {
                        var e, t;
                        return null === (t = document) || void 0 === t ? void 0 : null === (e = t.getElementById("connect-button")) || void 0 === e ? void 0 : e.click()
                    },
                    children: i("hero.referConnectWallet")
                })
            }
            let R = (e, t) => {
                window.dataLayer.find(t => {
                    let {
                        workflowName: s,
                        walletAddress: a
                    } = t;
                    return "connectWallet" === s && a === e
                }) || window.dataLayer.push({
                    event: "workflowStep",
                    workflowName: "connectWallet",
                    workflowStepNumber: 2,
                    workflowStepName: "successful",
                    workflowCompleteFlag: 1,
                    walletAddress: e,
                    workflowErrorCode: null,
                    referrer: t
                })
            };
            var V = s(28782);
            let Q = e => {
                var t, s, a;
                return null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (s = a.account) || void 0 === s ? void 0 : null === (t = s.address) || void 0 === t ? void 0 : t.toString()
            };
            var J = s(1448);

            function O() {
                let {
                    isLoading: e,
                    data: t
                } = (0, G.a)({
                    queryKey: ["twitterLeaderboard"],
                    queryFn: async () => {
                        let e = await fetch("/api/twitter_leaderboard/", {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }),
                            t = await e.json();
                        return null == t ? void 0 : t.result
                    }
                });
                return (0, a.jsxs)("div", {
                    className: "relative overflow-x-auto",
                    children: [(0, a.jsx)("h4", {
                        className: "px-6 text-xl font-bold text-gray-600",
                        children: "Top Dawgz"
                    }), (0, a.jsxs)("table", {
                        className: "w-full text-sm text-left text-gray-500",
                        children: [(0, a.jsx)("thead", {
                            className: "text-xs text-gray-400 uppercase",
                            children: (0, a.jsxs)("tr", {
                                children: [(0, a.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "#"
                                }), (0, a.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "user"
                                }), (0, a.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "points"
                                })]
                            })
                        }), (0, a.jsx)("tbody", {
                            children: e ? [, , , ].fill(!0).map((e, t) => (0, a.jsxs)("tr", {
                                className: "h-[36.5px] border-gray-300 border",
                                children: [(0, a.jsx)("th", {
                                    className: "px-2 bg-gray-100"
                                }), (0, a.jsx)("td", {
                                    className: "bg-gray-100"
                                }), (0, a.jsx)("td", {
                                    className: "bg-gray-100"
                                })]
                            }, "leaderboard-skeleton-".concat(t))) : t.slice(0, 3).map((e, t) => (0, a.jsxs)("tr", {
                                class: u()("bg-white border-b border-gray-300 text-gray-800 relative", {
                                    "!bg-primary text-white [&>th]:text-white": 0 === t
                                }),
                                children: [(0, a.jsxs)("th", {
                                    scope: "row",
                                    className: "px-6 font-medium text-gray-400 whitespace-nowrap",
                                    children: [(0, a.jsx)(i.default, {
                                        src: "/assets/medal.webp",
                                        width: 870,
                                        height: 320,
                                        className: u()("absolute right-2 my-auto w-[50px] h-auto rotate-[0deg]", {
                                            hidden: 0 !== t
                                        })
                                    }), t + 1, " ."]
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsxs)(p.default, {
                                        href: e.profile_url,
                                        target: "_blank",
                                        className: "flex items-center justify-start gap-4 px-6 py-2 tracking-wider",
                                        children: [(0, a.jsx)(i.default, {
                                            src: "".concat(e.profile_image_url),
                                            height: 30,
                                            width: 30,
                                            className: "rounded-[50%]"
                                        }), e.username]
                                    })
                                }), (0, a.jsx)("td", {
                                    className: "px-6 py-2",
                                    children: e.points.toLocaleString()
                                })]
                            }, "leader-".concat(t)))
                        })]
                    })]
                })
            }[, , , ].fill(!0);
            let X = [{
                    header: "Dawgz on the Run",
                    text: "\uD83D\uDE80 The Dawgz are on the run! I just joined the Base Dawgz Scramble! \uD83D\uDC3E Ready to fetch those rewards?"
                }, {
                    header: "Unleash the Milk run",
                    text: "\uD83D\uDCA7 Unleashing the Milk Run with Base Dawgz! \uD83D\uDC15‍\uD83E\uDDBA Join me in earning rewards for being social!"
                }, {
                    header: "Grab the Base",
                    text: "\uD83D\uDD25 Just grabbed my base in the Base Dawgz universe! \uD83C\uDF0D Where is yours?"
                }, {
                    header: "Land on the Pad",
                    text: "\uD83C\uDFC1 Landed on the pad with Base Dawgz! Ready for the ultimate web3 adventure? Get in on the action now!"
                }],
                ee = (e, t) => "https://twitter.com/intent/tweet?".concat("text=".concat(e)).concat("&url=https://basedawgz.com").concat("&hashtags=BaseDawgz,mission".concat(t)).concat("&via=BaseDawgz");

            function et(e) {
                let {} = e;
                return (0, a.jsxs)("div", {
                    className: "px-0",
                    children: [(0, a.jsx)("h4", {
                        className: "px-6 my-2 text-3xl font-bold text-gray-600",
                        children: "Missions"
                    }), (0, a.jsxs)("p", {
                        className: "px-6 mb-4",
                        children: ["Post a tweet and complete the mission to boost your score and become ", (0, a.jsx)("span", {
                            className: "text-primary",
                            children: "top dawg"
                        }), "."]
                    }), (0, a.jsx)(o.UQ, {
                        className: "w-full pb-4 border border-gray-400 rounded-lg",
                        children: X.map((e, t) => (0, a.jsxs)(o.UQ.Panel, {
                            className: "",
                            children: [(0, a.jsx)(o.UQ.Title, {
                                className: "pb-0 m-0 font-sans text-base tracking-wider text-primary",
                                children: e.header
                            }), (0, a.jsx)(o.UQ.Content, {
                                className: "pt-0 pb-4",
                                children: (0, a.jsxs)("form", {
                                    className: "flex flex-col gap-2",
                                    onSubmit: e => {
                                        var s;
                                        e.preventDefault();
                                        let a = e.currentTarget;
                                        null === (s = window) || void 0 === s || s.open(ee(a.elements.tweetText.value, t + 1), "_blank")
                                    },
                                    children: [(0, a.jsx)("textarea", {
                                        rows: "4",
                                        name: "tweetText",
                                        className: "p-3 text-base tracking-wider border border-blue-400 rounded",
                                        defaultValue: e.text
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between gap-2 mt-2 text-base",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col gap-2 sm:flex-row",
                                            children: [(0, a.jsx)("span", {
                                                className: "tracking-wider text-blue-400",
                                                children: "#BaseDawgz"
                                            }), (0, a.jsxs)("span", {
                                                className: "tracking-wider text-blue-400",
                                                children: ["#mission", t + 1]
                                            }), (0, a.jsx)("span", {
                                                className: "tracking-wider text-blue-400",
                                                children: "@BaseDawgz"
                                            })]
                                        }), (0, a.jsx)("button", {
                                            type: "submit",
                                            className: "px-3 py-1 text-white bg-blue-600 rounded",
                                            children: "Post Tweet"
                                        })]
                                    })]
                                })
                            })]
                        }, "mission-".concat(t)))
                    })]
                })
            }

            function es(e) {
                let {
                    visible: t,
                    setVisible: s
                } = e, {
                    chain: r
                } = (0, l.useContext)(h.Z), [i, x] = (0, l.useState)(), {
                    t: m
                } = (0, n.$G)(), p = (0, U.z)(), f = (0, M.py)();
                (0, l.useEffect)(() => {
                    var e, t, s, a, l, i;
                    r === d.$D.id && (null == p ? void 0 : null === (e = p.publicKey) || void 0 === e ? void 0 : e.toString()) ? x(null == p ? void 0 : null === (a = p.publicKey) || void 0 === a ? void 0 : a.toString()) : (null == f ? void 0 : null === (s = f.data) || void 0 === s ? void 0 : null === (t = s.account) || void 0 === t ? void 0 : t.address) && x(null == f ? void 0 : null === (i = f.data) || void 0 === i ? void 0 : null === (l = i.account) || void 0 === l ? void 0 : l.address)
                }, [p, f]);
                let {
                    isLoading: g,
                    data: w,
                    refetch: b
                } = (0, G.a)({
                    queryKey: ["twitterConnected", i],
                    queryFn: async () => {
                        if (i) {
                            let e = await fetch("/api/twitterConnected/".concat(i), {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }),
                                t = await e.json();
                            return null == t ? void 0 : t.active
                        }
                    }
                });
                return (0, a.jsxs)(o.u_, {
                    show: t,
                    onClose: () => s(!1),
                    className: u()("bg-[#00000066] [&>div]:max-w-[750px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-0"),
                    children: [(0, a.jsx)(o.u_.Header, {
                        className: "[&>h3]:text-primary bg-transparent p-3 sm:px-6  pb-2 [&>h3]:text-2xl [&>button]:text-3xl [&>button]:text-primary",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: "Join the crew on Twitter"
                    }), (0, a.jsx)(o.u_.Body, {
                        className: "px-4 py-2 bg-transparent sm:px-6",
                        children: (0, a.jsx)("div", {
                            className: "flex flex-col justify-center gap-4 px-0 sm:pt-2",
                            children: g ? (0, a.jsx)(c.Z, {
                                className: "!text-primary"
                            }) : w ? (0, a.jsx)(ea, {
                                address: i
                            }) : (0, a.jsx)(el, {
                                address: i
                            })
                        })
                    }), (0, a.jsx)(o.u_.Footer, {
                        className: "justify-end px-3 py-3 bg-transparent sm:px-5",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: (0, a.jsx)(o.zx, {
                            onClick: () => s(!1),
                            className: "px-2 py-0 bg-white border-2 border-primary rounded-lg text-primary [&>span]:relative [&>span]:top-[2px] text-base",
                            children: m("globals.cancel")
                        })
                    })]
                })
            }

            function ea(e) {
                let {
                    address: t,
                    refetch: s
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(O, {}), (0, a.jsx)("div", {
                        className: "flex justify-end",
                        children: (0, a.jsx)(er, {
                            address: t,
                            refetch: s
                        })
                    }), (0, a.jsx)(et, {})]
                })
            }

            function el(e) {
                let {
                    address: t
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("p", {
                        className: "mb-4 text-base sm:text-lg",
                        children: "Connect your Twitter account to spread the good word about Base Dawgz, and be in with a chance of winning weekly prizes!"
                    }), (0, a.jsx)(ei, {
                        address: t
                    })]
                })
            }

            function er(e) {
                let {
                    address: t,
                    refetch: s
                } = e, l = (0, J.D)({
                    mutationFn: async () => {
                        if (t) {
                            let e = await fetch("/api/disconnectTwitter/".concat(t), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                            return await e.json()
                        }
                    },
                    onSuccess: e => {
                        s()
                    }
                });
                return (0, a.jsx)(p.default, {
                    href: "https://x.com/settings/connected_apps/29223991",
                    className: "p-2 px-3 cursor-pointer text-primary text-base text-center truncate border-2 border-primary bg-white rounded-lg",
                    onClick: async e => {
                        let {
                            target: t,
                            nativeEvent: s
                        } = e;
                        new MouseEvent("click", s), e.preventDefault(), e.stopPropagation(), await l.mutate()
                    },
                    children: "Disconnect Twitter"
                })
            }

            function ei(e) {
                let {
                    address: t
                } = e;
                return (0, a.jsx)(p.default, {
                    href: "https://basedawgz-stake.dqshost.com/twitter/activate/".concat(t),
                    className: "w-full p-2 cursor-pointer text-white sm:text-xl text-lg text-center truncate border-2 border-white bg-primary rounded-lg",
                    children: "Connect Twitter"
                })
            }

            function en(e) {
                let {
                    visible: t,
                    setVisible: s
                } = e, {
                    t: l
                } = (0, n.$G)();
                return (0, a.jsxs)(o.u_, {
                    show: t,
                    onClose: () => s(!1),
                    onClick: () => s(!1),
                    className: u()("bg-[#00000066] [&>div]:max-w-[750px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    children: [(0, a.jsx)(o.u_.Header, {
                        className: "[&>h3]:text-primary bg-transparent p-5 pb-2 [&>h3]:text-xl [&>button]:text-3xl [&>button]:text-primary",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: "Twitter connected successfully"
                    }), (0, a.jsx)(o.u_.Body, {
                        className: "py-5 bg-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col justify-center gap-4 px-5",
                            children: [(0, a.jsx)(i.default, {
                                src: "/assets/bd-team.webp",
                                className: "w-[400px] h-auto m-auto",
                                width: 500,
                                height: 208
                            }), (0, a.jsx)("p", {
                                className: "my-0 text-4xl font-bold text-center text-primary",
                                children: "Welcome to the team!"
                            }), (0, a.jsx)("p", {
                                className: "mb-4 text-xl font-bold",
                                children: "Follow our socials to stay informed of other promotions and giveaways."
                            })]
                        })
                    }), (0, a.jsx)(o.u_.Footer, {
                        className: "justify-end px-5 py-3 bg-transparent",
                        children: (0, a.jsx)(o.zx, {
                            onClick: () => s(!1),
                            className: "px-4 py-1 bg-white border-2 border-primary rounded-lg text-primary [&>span]:relative [&>span]:top-[2px] [&>span]:text-base",
                            children: l("globals.cancel")
                        })
                    })]
                })
            }

            function eo(e) {
                let {
                    label: t,
                    content: s,
                    inverted: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: u()("z-20 flex flex-col items-center justify-center gap-4 tracking-wide grow sm:p-8 p-2 rounded", {
                        "bg-white": l
                    }),
                    children: [(0, a.jsxs)("span", {
                        className: u()("text-left opacity-80", {
                            "text-black": l
                        }),
                        children: [t, ":"]
                    }), (0, a.jsx)("span", {
                        className: u()("text-4xl text-left grow", {
                            "text-primary": l
                        }),
                        children: (s || "").toLocaleString() || "~"
                    })]
                })
            }
            var ec = () => {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsx)("div", {
                    className: "z-20 w-full overflow-hidden sm:max-w-[900px] max-w-[300px] sm:my-0 my-8  backdrop-blur bg-black rounded-xl text-center text-white",
                    children: (0, a.jsxs)("div", {
                        className: "relative z-30 flex flex-col justify-center w-full h-full gap-4 p-0 sm:flex-row sm:gap-2 sm:gap-4",
                        children: [(0, a.jsx)(eo, {
                            label: "Active Missions",
                            content: 4,
                            inverted: !0
                        }), (0, a.jsx)(eo, {
                            label: "Active Agents",
                            content: "? \uD83D\uDE0F"
                        })]
                    })
                })
            };

            function ed() {
                let {
                    t: e
                } = (0, n.$G)(), [t, s] = (0, l.useState)(!1), [r, o] = (0, l.useState)(!1), c = (0, $.usePathname)(), [d, h] = (0, l.useState)("/twitter_success" === c);
                return ! function() {
                    let {
                        ready: e,
                        params: t,
                        trackWalletConnected: s
                    } = (0, F.Z)(), [a, r] = (0, l.useState)(!1), [i, n] = (0, l.useState)(!1), o = (0, M.py)(), c = (0, V.O)();
                    (0, l.useEffect)(() => {
                        Q(o) && e && !a && (R(Q(o), t.referrer), s(Q(o)), r(!0))
                    }, [o, e, a]), (0, l.useEffect)(() => {
                        (null == c ? void 0 : c.publicKey) && e && !i && (R(c.publicKey.toString(), t.referrer), s(c.publicKey.toString()), n(!0))
                    }, [o, e, i])
                }(), (0, a.jsx)("section", {
                    className: "relative flex w-full sm:min-h-[100vh] ",
                    id: "home",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center w-full pt-12 m-auto max-w-screen-2xl",
                        children: [(0, a.jsx)(Z, {
                            visible: t,
                            setVisible: s
                        }), (0, a.jsx)(es, {
                            visible: r,
                            setVisible: o
                        }), (0, a.jsx)(en, {
                            visible: d,
                            setVisible: h
                        }), (0, a.jsxs)("div", {
                            className: "items-start justify-between hidden w-full h-full gap-12 p-24 pt-32 md:flex",
                            children: [(0, a.jsx)(K, {}), (0, a.jsxs)("div", {
                                className: "relative z-20 flex flex-col items-center gap-4",
                                children: [(0, a.jsx)(i.default, {
                                    src: "/assets/logo.webp",
                                    width: 1307,
                                    height: 267,
                                    className: "relative z-20 h-auto w-[38vw] top-[0vh] mr-6",
                                    alt: ""
                                }), (0, a.jsx)("h1", {
                                    className: "inline relative text-primary opacity-0 text-[140px] whitespace-nowrap drop-shadow-2xl mt-4",
                                    children: e("globals.baseDoge")
                                }), (0, a.jsxs)("div", {
                                    className: "relative w-2/3 py-12 pt-4 h-14 [&:hover>img]:scale-[1.1] [&:hover>img]:transition-all",
                                    children: [(0, a.jsx)("span", {
                                        className: "absolute text-lg sm:text-xl text-white bg-primary p-2 py-1 border-white border-2 rounded rotate-[5deg] -top-2 -right-24 z-20",
                                        children: "Get daily free $DAWGZ!"
                                    }), (0, a.jsx)(i.default, {
                                        src: "/assets/bd-team.webp",
                                        className: "absolute w-[400px] sm:w-[600px] transition-all hover:transition-all h-auto m-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] sm:-translate-y-[45%]",
                                        width: 500,
                                        height: 208
                                    }), (0, a.jsxs)("button", {
                                        className: "relative z-10 !border-white !text-white sm:!text-2xl my-12  border-2 !bg-black secondary-button gap-2 flex justify-center items-center w-full",
                                        onClick: () => o(!0),
                                        children: ["Report for duty", (0, a.jsx)(N.AMt, {
                                            className: "inline ml-1"
                                        })]
                                    }), (0, a.jsx)(ec, {})]
                                })]
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/space.webp",
                                width: 3424,
                                height: 1920,
                                className: "absolute h-auto w-[100%] left-0 top-0",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/earth.webp",
                                width: 2e3,
                                height: 103,
                                className: "fixed earth h-auto w-[100%] left-0 bottom-0",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/base-memes.svg",
                                width: 2e3,
                                height: 1100,
                                className: "absolute translate-y-[5vh] -scale-x-1 h-auto w-[75vw] left-[19vw] top-[2vh]",
                                alt: "Base-Doge"
                            }), (0, a.jsx)("div", {
                                className: "fixed z-10 w-auto base-jump bottom-48 h-2/5 right-24",
                                children: (0, a.jsx)(i.default, {
                                    src: "/assets/base-doge.webp",
                                    height: 600,
                                    width: 538,
                                    className: "w-auto h-full floating",
                                    alt: "Base-Doge"
                                })
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-5.webp",
                                width: 2122,
                                height: 2166,
                                className: "absolute top-[33vh] w-auto h-[80vh] cloud -left-48",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-6.webp",
                                width: 2e3,
                                height: 1666,
                                className: "absolute top-[40vh] w-auto h-[80vh] cloud -right-32",
                                alt: ""
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative flex flex-col items-center justify-start w-full py-12 md:hidden",
                            children: [(0, a.jsx)(i.default, {
                                src: "/assets/space-mob.webp",
                                width: 1170,
                                height: 2535,
                                className: "absolute h-auto w-[100%] left-0 top-0",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/logo.webp",
                                width: 1307,
                                height: 209,
                                className: "relative h-auto w-[90vw] mb-[25vh]",
                                alt: ""
                            }), (0, a.jsx)("div", {
                                className: "fixed top-0 z-10 w-2/3 h-auto sm:z-20 base-jump-mob",
                                children: (0, a.jsx)(i.default, {
                                    src: "/assets/base-doge.webp",
                                    height: 600,
                                    width: 538,
                                    className: "w-auto h-[60vw] floating-mob",
                                    alt: "Base-Doge"
                                })
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/earth.webp",
                                height: 103,
                                width: 2e3,
                                className: "fixed earth h-auto w-[300%] max-w-[unset] -left-[100%] bottom-0",
                                alt: ""
                            }), (0, a.jsx)(K, {}), (0, a.jsx)(ec, {}), (0, a.jsxs)("div", {
                                className: "relative w-full py-12 mb-12 h-14",
                                children: [(0, a.jsx)("span", {
                                    className: "absolute text-lg sm:text-3xl text-white bg-primary p-2 py-1 rounded rotate-[5deg] top-2 right-2 z-20",
                                    children: "Get daily free $DAWGZ!"
                                }), (0, a.jsx)(i.default, {
                                    src: "/assets/bd-team.webp",
                                    className: "absolute w-full transition-all hover:transition-all h-auto m-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%]",
                                    width: 500,
                                    height: 208
                                }), (0, a.jsxs)("button", {
                                    className: "relative z-10 !border-white !text-white !bg-black secondary-button gap-2 flex justify-center items-center w-[320px] mx-auto",
                                    onClick: () => o(!0),
                                    children: ["Report for duty", (0, a.jsx)(N.AMt, {
                                        className: "inline ml-1"
                                    })]
                                })]
                            }), (0, a.jsx)(p.default, {
                                href: "/assets/whitepaper.pdf",
                                target: "_blank",
                                className: u()("relative bg-primary z-10 w-[320px] mt-4 mx-auto text-white text-xl block rounded-lg py-3 px-8 text-center"),
                                children: "Whitepaper"
                            }), (0, a.jsx)(p.default, {
                                href: "/assets/audit.pdf",
                                target: "_blank",
                                className: u()("relative bg-primary z-10 w-[320px] my-4 mx-auto text-white text-xl block rounded-lg py-3 px-8 text-center"),
                                children: "Audit"
                            }), (0, a.jsx)(p.default, {
                                href: "/staking",
                                className: u()("relative bg-white z-10 w-[320px] my-4 mx-auto text-primary text-xl block rounded-lg py-3 px-8 text-center"),
                                children: "Staking"
                            })]
                        })]
                    })
                })
            }

            function eh() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsx)("section", {
                    className: "relative flex w-full sm:min-h-[100vh] min-h-[100vh]",
                    children: (0, a.jsxs)("div", {
                        className: "flex w-full sm:items-center max-w-screen-2xl",
                        children: [(0, a.jsxs)("div", {
                            className: "items-start justify-between hidden w-full h-full md:flex lg:p-24",
                            id: "about",
                            children: [(0, a.jsxs)("div", {
                                className: "relative z-10 flex flex-col items-start",
                                children: [(0, a.jsx)("h2", {
                                    className: "section-header",
                                    children: e("globals.about")
                                }), (0, a.jsx)("p", {
                                    className: "relative z-10 sm:w-4/5 text-container text-bg",
                                    children: e("about.text")
                                }), (0, a.jsx)(i.default, {
                                    src: "/assets/about-memes.webp",
                                    height: 492,
                                    width: 1e3,
                                    className: "-scale-x-[1] h-auto w-[60vw] sm:-left-[15vw] sm:-top-[5vh] relative",
                                    alt: "Base jumpers"
                                })]
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-4-r.svg",
                                width: 2302,
                                height: 984,
                                className: "absolute -left-[5vw] w-auto cloud -top-0 h-[50vh]",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-2.webp",
                                width: 1847,
                                height: 1113,
                                className: "absolute w-auto h-[80vh] -right-48 top-72 cloud bottom-8",
                                alt: ""
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative flex flex-col items-center justify-start w-full md:hidden",
                            children: [(0, a.jsx)("h2", {
                                className: "!z-20 section-header",
                                children: e("globals.about")
                            }), (0, a.jsx)("p", {
                                className: "relative z-20 m-2 text-container text-bg !text-xl !leading-relaxed",
                                children: e("about.text")
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-4-r.svg",
                                width: 2302,
                                height: 984,
                                className: "absolute w-[100vw] cloud h-auto z-10",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-2.webp",
                                width: 1847,
                                height: 1113,
                                className: "absolute w-[200vw] max-w-[unset] h-auto cloud bottom-8 z-0",
                                alt: ""
                            }), (0, a.jsx)("div", {
                                className: "absolute z-10 flex flex-col items-center w-full gap-2 px-4 bottom-36 [&>button]:h-12 [&>button]:!text-lg [&>button]:!tracking-sm"
                            })]
                        })]
                    })
                })
            }
            let ex = [1, 2, 3],
                eu = () => {
                    let {
                        t: e
                    } = (0, n.$G)();
                    return ex.map((t, s) => (0, a.jsx)("div", {
                        className: "relative z-20 h-full col-span-12 lg:col-span-4 md:col-span-6",
                        children: (0, a.jsxs)("div", {
                            className: "!p-5 text-container text-bg h-full min-h-[250px] flex flex-col gap-2",
                            children: [(0, a.jsx)("div", {
                                className: "flex justify-start text-xl",
                                children: e("globals.stepKey", {
                                    number: s + 1
                                })
                            }), (0, a.jsx)("h2", {
                                className: "mt-2 text-3xl text-primary",
                                children: e("howToBuy.".concat(s, ".header"))
                            }), (0, a.jsx)("p", {
                                className: "text-lg leading-relaxed",
                                children: e("howToBuy.".concat(s, ".text"))
                            })]
                        })
                    }, "how-to-buy-".concat(s)))
                };

            function em() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsx)("section", {
                    className: "relative flex w-full min-h-[80vh] md:items-center items-start",
                    id: "how-to-buy",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center w-full max-w-screen-2xl",
                        children: [(0, a.jsxs)("div", {
                            className: "flex-col items-start justify-between hidden w-full h-full md:flex lg:p-24",
                            children: [(0, a.jsx)("h2", {
                                className: "col-span-12 section-header lg:col-span-4 md:col-span-6",
                                children: e("globals.howToBuy")
                            }), (0, a.jsx)("div", {
                                className: "relative z-10 grid items-center justify-center grid-cols-12 gap-6",
                                children: (0, a.jsx)(eu, {})
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-5.webp",
                                width: 2166,
                                height: 2122,
                                className: "absolute w-auto -left-24 -top-72 cloud h-4/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-1.webp",
                                width: 2122,
                                height: 1361,
                                className: "absolute w-auto h-4/5 -right-48 -top-64 cloud bottom-8",
                                alt: ""
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative z-10 grid items-center justify-center grid-cols-12 gap-6 px-3 md:hidden",
                            children: [(0, a.jsx)("h2", {
                                className: "col-span-12 section-header !z-20 lg:col-span-4 md:col-span-6 whitespace-nowrap",
                                children: e("globals.howToBuy")
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-3.webp",
                                width: 2166,
                                height: 2122,
                                className: "absolute z-10 w-auto h-auto -left-16 -top-32 cloud sm:hidden",
                                alt: ""
                            }), (0, a.jsx)(eu, {})]
                        })]
                    })
                })
            }
            let ep = [{
                    term: "presale",
                    amt: 20,
                    color: "#912ADB"
                }, {
                    term: "staking",
                    amt: 20,
                    color: "#7DD122"
                }, {
                    term: "liquidity",
                    amt: 20,
                    color: "#E84DCB"
                }, {
                    term: "marketing",
                    amt: 15,
                    color: "#FFAB14"
                }, {
                    term: "ecoSystem",
                    amt: 15,
                    color: "#FC8730"
                }, {
                    term: "exchanges",
                    amt: 10,
                    color: "#3F87FC"
                }],
                ef = () => {
                    let {
                        t: e
                    } = (0, n.$G)();
                    return (0, a.jsx)("ul", {
                        className: "flex flex-col items-center justify-between w-1/2 w-full gap-2 my-2 text-container sm:gap-0",
                        children: ep.map(t => (0, a.jsxs)("li", {
                            className: "flex items-center justify-between w-full px-6 py-4 text-2xl rounded-lg text-bg",
                            children: [(0, a.jsxs)("span", {
                                className: "flex items-center justify-start",
                                children: [(0, a.jsx)("div", {
                                    className: "h-[16px] w-[16px] rounded-xl inline-block mr-6",
                                    style: {
                                        background: t.color
                                    }
                                }), e("tokenomics.".concat(t.term, ".header"))]
                            }), (0, a.jsxs)("span", {
                                children: [t.amt, "%"]
                            })]
                        }, t.term))
                    })
                };

            function eg() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsx)("section", {
                    className: "relative flex w-full min-h-[100vh]",
                    id: "tokenomics",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center w-full max-w-screen-2xl",
                        children: [(0, a.jsxs)("div", {
                            className: "items-start justify-between hidden w-full h-full md:flex lg:p-24",
                            children: [(0, a.jsxs)("div", {
                                className: "relative z-20 flex flex-col items-start gap-2 sm:w-4/5",
                                children: [(0, a.jsx)("h2", {
                                    className: "section-header",
                                    children: e("globals.tokenomics")
                                }), (0, a.jsx)("p", {
                                    className: "relative z-10 mx-4 text-container text-bg",
                                    children: e("tokenomics.description")
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-full",
                                    children: [(0, a.jsx)(ef, {}), (0, a.jsx)("div", {
                                        className: "w-full h-full !p-12 m-4 ml-0 text-bg text-container",
                                        children: (0, a.jsx)(i.default, {
                                            src: "/assets/tokenomics-img.webp",
                                            width: 500,
                                            height: 431,
                                            className: "w-full h-auto",
                                            alt: "Tokenomics"
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-5.webp",
                                width: 2166,
                                height: 2122,
                                className: "absolute w-auto -left-24 -top-72 cloud h-4/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-1.webp",
                                width: 2122,
                                height: 1361,
                                className: "absolute w-auto h-3/5 -right-48 top-72 cloud bottom-8",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/tokenomics-memes.webp",
                                height: 270,
                                width: 300,
                                className: "absolute base-spin h-auto w-[33%] -right-[5%] top-[50%]",
                                alt: "Base-Doge"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative flex flex-col items-center justify-start w-full py-6 -mb-32 md:hidden min-h-[100vh] pb-64",
                            children: [(0, a.jsx)("h2", {
                                className: "!z-20 section-header",
                                children: e("globals.tokenomics")
                            }), (0, a.jsx)("p", {
                                className: "relative z-20 mx-4 !text-xl !leading-relaxed text-container text-bg",
                                children: e("tokenomics.description")
                            }), (0, a.jsx)("div", {
                                className: "relative z-20 flex flex-col w-full",
                                children: (0, a.jsx)(ef, {})
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-5.webp",
                                width: 2166,
                                height: 2122,
                                className: "absolute w-auto h-auto -left-24 top-72 cloud",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-1.webp",
                                width: 2122,
                                height: 1361,
                                className: "absolute w-[150%] max-w-[unset] h-auto -left-12 -top-28 cloud z-10",
                                alt: ""
                            })]
                        })]
                    })
                })
            }
            let ew = [1, 2, 3, 4],
                eb = () => {
                    let {
                        t: e
                    } = (0, n.$G)();
                    return ew.map((t, s) => (0, a.jsx)("div", {
                        className: "relative z-20 h-full col-span-12 lg:col-span-4 md:col-span-6 roadmap-item-".concat(s),
                        children: (0, a.jsxs)("div", {
                            className: "!p-5 text-container text-bg h-full max-h-[250px] flex flex-col gap-2 items-center",
                            children: [(0, a.jsxs)("div", {
                                className: "flex justify-start text-xl",
                                children: [e("roadmap.phase", {
                                    index: s + 1
                                }), ":"]
                            }), (0, a.jsx)("h2", {
                                className: "mt-2 text-3xl text-primary",
                                children: e("roadmap.phase.".concat(s, ".header"))
                            }), (0, a.jsx)("ul", {
                                className: "text-lg leading-relaxed list-disc",
                                children: [, , , , ].fill(!0).map((t, l) => (0, a.jsx)("li", {
                                    children: e("roadmap.phase.".concat(s, ".").concat(l))
                                }, "phase-".concat(s, "-step-").concat(l)))
                            })]
                        })
                    }, "phase-" + s))
                };

            function ej() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsx)("section", {
                    className: "relative flex w-full min-h-[100vh] md:items-center items-start",
                    id: "roadmap",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center w-full max-w-screen-2xl",
                        children: [(0, a.jsxs)("div", {
                            className: "items-center justify-between hidden w-full h-full lg:items-start md:flex md:p-24",
                            children: [(0, a.jsxs)("div", {
                                className: "relative z-10 grid items-center justify-center grid-cols-12 gap-6",
                                children: [(0, a.jsx)("h2", {
                                    className: "col-span-12 section-header lg:col-span-4 md:col-span-6",
                                    children: (0, a.jsx)(n.cC, {
                                        i18nKey: "roadmap.header",
                                        components: [(0, a.jsx)("span", {
                                            className: u()("rotate-[-9deg] inline-block text-black -left-8 relative -top-4")
                                        }, "roadmap-title")]
                                    })
                                }), (0, a.jsx)(eb, {})]
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/roadmap.webp",
                                width: 2e3,
                                height: 1830,
                                className: "absolute lg:w-4/5 w-full h-auto m-auto lg:left-[10%] left-0 top-0",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-2.webp",
                                width: 2166,
                                height: 2122,
                                className: "absolute w-auto -left-48 -top-12 cloud h-2/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-1.webp",
                                width: 2122,
                                height: 1361,
                                className: "absolute right-0 w-auto h-2/5 top-32 cloud bottom-8",
                                alt: ""
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative z-20 grid items-center justify-center w-full grid-cols-12 gap-6 px-3 mb-24 md:hidden",
                            children: [(0, a.jsx)("h2", {
                                className: "col-span-12 text-center section-header lg:col-span-4 md:col-span-6",
                                children: (0, a.jsx)(n.cC, {
                                    i18nKey: "roadmap.header",
                                    components: [(0, a.jsx)("span", {
                                        className: u()("rotate-[-9deg] inline-block text-black -left-8 relative -top-4")
                                    }, "roadmap-title")]
                                })
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-3.webp",
                                width: 2166,
                                height: 2122,
                                className: "absolute z-10 w-auto h-auto -left-16 -top-32 cloud sm:hidden",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/roadmap.webp",
                                width: 2e3,
                                height: 1830,
                                className: "absolute w-auto h-full max-w-[unset] left-1/2 -translate-x-[40%]",
                                alt: ""
                            }), (0, a.jsx)(eb, {})]
                        })]
                    })
                })
            }
            let ev = [{
                icon: (0, a.jsx)(N.lZw, {}),
                link: "mailto:maverick@basedawgz.com",
                label: "maverick@basedawgz.com"
            }, {
                icon: (0, a.jsx)(N.meP, {}),
                link: "https://x.com/BaseDawgz",
                i18nLabel: "contact.twitter"
            }, {
                icon: (0, a.jsx)(N.iEj, {}),
                link: "https://t.me/BaseDawgz",
                i18nLabel: "contact.telegram"
            }];

            function ey() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsxs)("section", {
                    className: "relative flex w-full md:min-h-[100vh] h-[120vh] items-start",
                    id: "contact",
                    children: [(0, a.jsxs)("div", {
                        className: "items-center justify-between hidden w-full h-full md:flex lg:p-24",
                        children: [(0, a.jsxs)("div", {
                            className: "relative z-10 flex flex-col items-start w-full gap-4",
                            children: [(0, a.jsx)("h2", {
                                className: "section-header",
                                children: e("globals.contact")
                            }), (0, a.jsx)("div", {
                                className: "flex flex-col w-full gap-6",
                                children: ev.map(t => (0, a.jsxs)(p.default, {
                                    href: t.link,
                                    className: "flex items-center justify-between w-1/2 max-w-[450px] text-bg text-container",
                                    children: [(0, a.jsx)("span", {
                                        className: "text-primary",
                                        children: t.icon
                                    }), (0, a.jsx)("span", {
                                        className: "",
                                        children: t.i18nLabel ? e(t.i18nLabel) : t.label
                                    })]
                                }, t.link))
                            })]
                        }), (0, a.jsx)(i.default, {
                            src: "/assets/landing.webp",
                            width: 6612,
                            height: 8940,
                            className: "absolute bottom-0 left-0 w-full h-auto",
                            alt: ""
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "relative flex flex-col items-start justify-start w-full h-full md:hidden",
                        children: [(0, a.jsx)(i.default, {
                            src: "/assets/landing.webp",
                            width: 6612,
                            height: 8940,
                            className: "absolute bottom-0 left-0 w-[150vw] -translate-x-[17.67%] max-w-[unset] h-auto",
                            alt: ""
                        }), (0, a.jsx)("h2", {
                            className: "section-header",
                            children: e("globals.contact")
                        }), (0, a.jsx)("div", {
                            className: "relative z-20 flex flex-col justify-center w-full gap-6 px-2 pt-24",
                            children: ev.map(t => (0, a.jsxs)(p.default, {
                                href: t.link,
                                className: "flex items-center justify-between max-w-[450px] text-bg text-container",
                                children: [(0, a.jsx)("span", {
                                    className: "text-primary",
                                    children: t.icon
                                }), (0, a.jsx)("span", {
                                    className: "",
                                    children: t.i18nLabel ? e(t.i18nLabel) : t.label
                                })]
                            }, t.link))
                        }), (0, a.jsx)(i.default, {
                            src: "/assets/cloud-5.webp",
                            width: 2166,
                            height: 2122,
                            className: "z-10 absolute w-auto h-[33vh] -top-[33vh] -left-12 cloud sm:hidden",
                            alt: ""
                        })]
                    })]
                })
            }

            function eN(e) {
                let {
                    visible: t,
                    setVisible: s
                } = e, {
                    t: l
                } = (0, n.$G)();
                return (0, a.jsxs)(o.u_, {
                    show: t,
                    onClose: () => s(!1),
                    onClick: () => s(!1),
                    className: u()("bg-[#00000066] [&>div]:max-w-[750px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    children: [(0, a.jsx)(o.u_.Header, {
                        className: "[&>h3]:text-primary bg-transparent p-5 pb-2 [&>h3]:text-4xl [&>button]:text-3xl [&>button]:text-primary",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: "Terms & Conditions"
                    }), (0, a.jsx)(o.u_.Body, {
                        className: "py-5 bg-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: (0, a.jsxs)("div", {
                            className: "p-8 max-h-[67vh] flex flex-col gap-2 [&>h2]:text-xl [&>h2]:mt-4 [&>h2]:text-primary [&>ul]:list-disc",
                            children: [(0, a.jsx)("h1", {
                                className: "text-2xl",
                                children: "Base Dawgz Terms and Conditions"
                            }), (0, a.jsx)("p", {
                                className: "text-gray-400",
                                children: "Effective Date: 22nd of August 2023"
                            }), (0, a.jsx)("h2", {
                                children: "Welcome to Base Dawgz"
                            }), (0, a.jsx)("p", {
                                children: "These Terms and Conditions (“Terms”) form a legally binding agreement between you, whether individually or on behalf of an entity (“you”), and Base Dawgz (“the Company,” “we,” “us,” or “our”), located at [insert address]. By accessing or using our website (basedawgz.xyz) and related services (collectively, the “Service”), you agree to comply with these Terms. If you do not agree with all of these Terms, please do not use our Service."
                            }), (0, a.jsx)("h2", {
                                children: "Overview of Services"
                            }), (0, a.jsx)("p", {
                                children: "Base Dawgz offers a platform centered around our unique crypto token, facilitating user interactions and transactions. While inspired by popular cultural trends in digital currencies, Base Dawgz operates independently from other token projects."
                            }), (0, a.jsx)("h2", {
                                children: "Acknowledgment of Risk"
                            }), (0, a.jsx)("p", {
                                children: "Engaging with cryptocurrencies involves significant risk due to market volatility. By using our Service, you acknowledge and accept the potential risks, including the possibility of losing your investment. The Company is not liable for any investment decisions you make."
                            }), (0, a.jsx)("h2", {
                                children: "User Responsibilities"
                            }), (0, a.jsx)("p", {
                                children: "To use our Service, you must adhere to the following guidelines:"
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Legal Compliance:"
                                    }), " Ensure that your activities on our platform are lawful."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Security:"
                                    }), " Do not attempt to bypass or breach security measures."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Integrity:"
                                    }), " Avoid any actions that disrupt or manipulate the Service’s operations."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Prohibited Activities:"
                                    }), " Do not use our platform for illegal purposes, including money laundering or terrorism financing."]
                                })]
                            }), (0, a.jsx)("h2", {
                                children: "Disclaimer of Warranties"
                            }), (0, a.jsx)("p", {
                                children: "Our Service is provided “AS IS” and “AS AVAILABLE.” We disclaim all warranties, express or implied, including but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not guarantee that the Service will be uninterrupted or error-free."
                            }), (0, a.jsx)("h2", {
                                children: "Limitation of Liability"
                            }), (0, a.jsx)("p", {
                                children: "To the maximum extent permitted by law, Base Dawgz is not liable for any indirect, incidental, special, punitive, or consequential damages, including loss of profits or data, arising from your use of the Service, even if we have been advised of the possibility of such damages."
                            }), (0, a.jsx)("h2", {
                                children: "Intellectual Property"
                            }), (0, a.jsx)("p", {
                                children: "All content and materials on the Service, excluding user-provided content, are the exclusive property of Base Dawgz and its licensors. Unauthorized use of any materials on the Service may violate copyright, trademark, and other laws."
                            }), (0, a.jsx)("h2", {
                                children: "Privacy Practices"
                            }), (0, a.jsx)("p", {
                                children: "Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, details how we collect, use, and protect your personal information. By using our Service, you consent to these practices."
                            }), (0, a.jsx)("h2", {
                                children: "Changes to the Terms"
                            }), (0, a.jsx)("p", {
                                children: "We may update these Terms from time to time. Any changes will be effective immediately upon posting on our website. Your continued use of the Service after changes are posted constitutes your acceptance of the new Terms."
                            }), (0, a.jsx)("h2", {
                                children: "Termination of Access"
                            }), (0, a.jsx)("p", {
                                children: "We reserve the right to suspend or terminate your access to the Service at our discretion, without prior notice, for any reason, including breach of these Terms."
                            }), (0, a.jsx)("h2", {
                                children: "Governing Law"
                            }), (0, a.jsx)("p", {
                                children: "These Terms are governed by and construed in accordance with the laws of Panama, without regard to its conflict of law principles."
                            }), (0, a.jsx)("h2", {
                                children: "Contact Us"
                            }), (0, a.jsxs)("p", {
                                children: ["If you have any questions or concerns regarding these Terms, please contact us at ", (0, a.jsx)("a", {
                                    href: "mailto:maverick@basedawgz.com",
                                    children: "maverick@basedawgz.com"
                                }), "."]
                            }), (0, a.jsx)("p", {
                                children: "By using our Service, you agree to these Terms and Conditions."
                            })]
                        })
                    }), (0, a.jsx)(o.u_.Footer, {
                        className: "justify-end px-5 py-3 bg-transparent",
                        children: (0, a.jsx)(o.zx, {
                            onClick: () => s(!1),
                            className: "px-4 py-1 bg-white border-2 border-primary rounded-lg text-primary [&>span]:relative [&>span]:top-[2px] [&>span]:text-base",
                            children: l("globals.cancel")
                        })
                    })]
                })
            }

            function ek(e) {
                let {
                    visible: t,
                    setVisible: s
                } = e, {
                    t: l
                } = (0, n.$G)();
                return (0, a.jsxs)(o.u_, {
                    show: t,
                    onClose: () => s(!1),
                    onClick: () => s(!1),
                    className: u()("bg-[#00000066] [&>div]:max-w-[750px] flex justify-center items-center [&>div]:h-[unset]", "sm:p-8 p-1"),
                    children: [(0, a.jsx)(o.u_.Header, {
                        className: "[&>h3]:text-primary bg-transparent p-5 pb-2 [&>button]:text-primary",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: "Privacy Policy"
                    }), (0, a.jsx)(o.u_.Body, {
                        className: "py-5 bg-transparent",
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        children: (0, a.jsxs)("div", {
                            className: "p-8 max-h-[67vh] flex flex-col gap-2 [&>h2]:text-xl [&>h2]:mt-4 [&>h2]:text-primary [&>ul]:list-disc",
                            children: [(0, a.jsx)("h1", {
                                className: "text-2xl",
                                children: "Privacy Policy for Base Dawgz"
                            }), (0, a.jsx)("p", {
                                className: "text-gray-400",
                                children: "Effective Date: 29th of May 2024"
                            }), (0, a.jsx)("h2", {
                                children: "Introduction"
                            }), (0, a.jsx)("p", {
                                children: "At Base Dawgz, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our platform and services."
                            }), (0, a.jsx)("h2", {
                                children: "Information We Collect"
                            }), (0, a.jsx)("p", {
                                children: "We collect the following types of information:"
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Personal Information:"
                                    }), " Includes names, email addresses, and contact details provided during account creation or service use."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Transaction Information:"
                                    }), " Details of transactions performed on our platform, such as blockchain addresses, transaction amounts, and timestamps."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Usage Data:"
                                    }), " Information about how you interact with our website and services, including IP addresses, browser types, device details, and operating systems."]
                                })]
                            }), (0, a.jsx)("h2", {
                                children: "How We Use Your Information"
                            }), (0, a.jsx)("p", {
                                children: "We use the collected data for various purposes, including:"
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Processing Transactions:"
                                    }), " To facilitate and verify transactions conducted on our platform."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Customer Support:"
                                    }), " To respond to your inquiries and provide assistance."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Improving Services:"
                                    }), " To analyze user behavior and improve the functionality and security of our platform."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Communication:"
                                    }), " To send updates and information related to our services."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Legal Compliance:"
                                    }), " To comply with legal requirements and respond to regulatory requests."]
                                })]
                            }), (0, a.jsx)("h2", {
                                children: "Data Protection Measures"
                            }), (0, a.jsx)("p", {
                                children: "We implement a range of security measures to protect your personal data, including:"
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Encryption:"
                                    }), " Securing data during transmission and storage using encryption technologies."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Access Control:"
                                    }), " Limiting access to personal data to authorized personnel only."]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("strong", {
                                        children: "Security Audits:"
                                    }), " Conducting regular security assessments to identify and mitigate potential risks."]
                                })]
                            }), (0, a.jsx)("h2", {
                                children: "Third-Party Services"
                            }), (0, a.jsx)("p", {
                                children: "This Privacy Policy does not apply to third-party websites, platforms, or services that may be linked through our platform. We encourage you to review the privacy policies of these third parties separately."
                            }), (0, a.jsx)("h2", {
                                children: "Minors"
                            }), (0, a.jsx)("p", {
                                children: "Our services are not intended for individuals under the age of 18, and we do not knowingly collect personal information from minors."
                            }), (0, a.jsx)("h2", {
                                children: "Changes to This Policy"
                            }), (0, a.jsx)("p", {
                                children: "We may update this Privacy Policy periodically. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted signifies your acceptance of the new terms."
                            }), (0, a.jsx)("h2", {
                                children: "Contact Us"
                            }), (0, a.jsxs)("p", {
                                children: ["If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at ", (0, a.jsx)("a", {
                                    href: "mailto:maverick@basedawgz.com",
                                    children: "Maverick@basedawgz.com"
                                }), "."]
                            }), (0, a.jsx)("p", {
                                children: "By using our services, you agree to the terms of this Privacy Policy."
                            })]
                        })
                    }), (0, a.jsx)(o.u_.Footer, {
                        className: "justify-end px-5 py-3 bg-transparent",
                        children: (0, a.jsx)(o.zx, {
                            onClick: () => s(!1),
                            className: "px-4 py-1 bg-white border-2 border-primary rounded-lg text-primary [&>span]:relative [&>span]:top-[2px] [&>span]:text-base",
                            children: l("globals.cancel")
                        })
                    })]
                })
            }
            let ez = [{
                icon: (0, a.jsx)(N.lZw, {}),
                link: "mailto:maverick@basedawgz.com",
                i18nLabel: "globals.contact"
            }, {
                icon: (0, a.jsx)(N.meP, {}),
                link: "https://x.com/BaseDawgz",
                i18nLabel: "contact.twitter"
            }, {
                icon: (0, a.jsx)(N.iEj, {}),
                link: "https://t.me/BaseDawgz",
                i18nLabel: "contact.telegram"
            }];

            function eD() {
                let {
                    t: e
                } = (0, n.$G)(), [t, s] = (0, l.useState)(!1), [r, o] = (0, l.useState)(!1);
                return (0, a.jsxs)("div", {
                    className: "bg-[#222] relative p-0 sm:py-12",
                    id: "disclaimer",
                    children: [(0, a.jsx)(eN, {
                        visible: t,
                        setVisible: s
                    }), (0, a.jsx)(ek, {
                        visible: r,
                        setVisible: o
                    }), (0, a.jsx)("div", {
                        className: "bg-gradient-radial from-[#00000000] to-[#00000055] from-[33vw] to-[100vw] absolute top-0 left-0 w-full h-full mix-blend-darken"
                    }), (0, a.jsxs)("div", {
                        className: u()("relative flex max-w-5xl gap-4 py-4 m-auto text-white sm:flex-row flex-col-reverse items-center"),
                        children: [(0, a.jsx)("div", {
                            className: "relative z-20 flex flex-col items-start justify-center gap-4",
                            children: (0, a.jsx)("p", {
                                className: "text-lg leading-relaxed tracking-wider",
                                children: (0, a.jsx)(n.cC, {
                                    i18nKey: "disclaimer.text",
                                    components: [(0, a.jsx)("span", {
                                        className: "font-bold"
                                    }, "ape-responsibly")]
                                })
                            })
                        }), (0, a.jsx)(i.default, {
                            src: "/assets/disclaimer.webp",
                            width: 120,
                            height: 120,
                            sizes: "(max-width: 568px) 200px, auto",
                            className: "sm:p-0",
                            alt: "Cheers!"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: u()("relative flex max-w-5xl pb-8 gap-4 m-auto text-white sm:flex-row flex-col-reverse items-center justify-between mt-8"),
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [(0, a.jsx)(p.default, {
                                href: "",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), s(!0)
                                },
                                className: "flex items-center justify-between text-xl",
                                children: e("globals.termsAndConditions")
                            }), (0, a.jsx)(p.default, {
                                href: "",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), o(!0)
                                },
                                className: "flex items-center justify-between text-xl",
                                children: e("globals.privacyPolicy")
                            }), (0, a.jsx)(p.default, {
                                href: "https://coinsult.net/projects/base-dawgz/",
                                className: "flex items-center justify-between text-xl text-primary",
                                target: "_blank",
                                children: (0, a.jsx)("span", {
                                    className: "pb-1 border-b border-primary",
                                    children: "Coinsult Audit"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex flex-col gap-3",
                            children: ez.map(t => (0, a.jsxs)(p.default, {
                                href: t.link,
                                className: "flex items-center justify-between text-xl",
                                children: [(0, a.jsx)("span", {
                                    className: "",
                                    children: t.i18nLabel ? e(t.i18nLabel) : t.label
                                }), (0, a.jsx)("span", {
                                    className: "ml-4 text-primary",
                                    children: t.icon
                                })]
                            }, t.link))
                        })]
                    })]
                })
            }
            let eC = [1, 2, 3, 4, 5],
                eT = () => {
                    let {
                        t: e
                    } = (0, n.$G)();
                    return (0, a.jsx)(o.UQ, {
                        className: "w-full",
                        children: eC.map((t, s) => (0, a.jsxs)(o.UQ.Panel, {
                            className: "text-primary",
                            children: [(0, a.jsx)(o.UQ.Title, {
                                className: "pb-0 my-4 text-2xl md:text-3xl text-primary",
                                children: e("faq.".concat(s, ".header"))
                            }), (0, a.jsx)(o.UQ.Content, {
                                className: "pt-2 pb-8",
                                children: (0, a.jsx)("p", {
                                    className: "text-lg leading-relaxed md:text-xl",
                                    children: (0, a.jsx)(n.cC, {
                                        i18nKey: "faq.".concat(s, ".answer"),
                                        components: [(0, a.jsx)("a", {
                                            href: "mailto:maverick@basedawgz.com",
                                            className: "underline text-primary"
                                        }, "mailer")]
                                    })
                                })
                            })]
                        }, "faq-".concat(s)))
                    })
                };

            function eS() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsx)("section", {
                    className: "relative flex w-full min-h-[100vh] md:items-start items-start justify-start",
                    id: "faq",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center w-full max-w-screen-2xl",
                        children: [(0, a.jsxs)("div", {
                            className: "items-start justify-center hidden w-full h-full md:flex lg:p-24",
                            children: [(0, a.jsxs)("div", {
                                className: "relative z-20 flex flex-col items-start w-full gap-4",
                                children: [(0, a.jsx)("h2", {
                                    className: "section-header",
                                    children: e("globals.faq")
                                }), (0, a.jsx)("div", {
                                    className: "w-full !p-8 text-container text-bg",
                                    children: (0, a.jsx)(eT, {})
                                })]
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-3.svg",
                                width: 1943,
                                height: 1117,
                                className: "absolute z-10 w-auto -left-48 -top-[25vh] cloud bottom-8 h-3/5",
                                alt: ""
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative z-20 flex flex-col items-center justify-start w-full px-3 py-6 mb-32 md:hidden",
                            children: [(0, a.jsx)("h2", {
                                className: "section-header !z-20",
                                children: e("globals.faq")
                            }), (0, a.jsx)("div", {
                                className: "w-full !p-8 text-container text-bg",
                                children: (0, a.jsx)(eT, {})
                            })]
                        }), (0, a.jsx)(i.default, {
                            src: "/assets/cloud-6.webp",
                            width: 2166,
                            height: 2122,
                            className: "absolute z-10 w-auto h-auto sm:hidden -right-32 -top-72 cloud",
                            alt: ""
                        })]
                    })
                })
            }

            function eB() {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, a.jsx)("section", {
                    className: "relative flex items-start w-full md:items-center",
                    id: "how-to-buy",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center w-full max-w-screen-2xl",
                        children: [(0, a.jsxs)("div", {
                            className: "flex-col items-start justify-between hidden w-full h-full md:flex lg:p-24",
                            children: [(0, a.jsx)("h2", {
                                className: "col-span-12 section-header lg:col-span-4 md:col-span-6",
                                children: e("airdrop.heading")
                            }), (0, a.jsxs)("div", {
                                className: "relative z-10 grid items-center justify-center grid-cols-12 gap-6",
                                children: [(0, a.jsx)("span", {
                                    className: "col-span-10 p-4 text-container text-bg",
                                    children: e("airdrop.description")
                                }), (0, a.jsx)("div", {
                                    className: "col-span-10 text-center",
                                    children: (0, a.jsxs)("button", {
                                        className: "relative px-6 mt-4 !text-lg primary-button opacity-75 cursor-not-allowed",
                                        children: [(0, a.jsx)("span", {
                                            className: "absolute text-base text-primary bg-white p-2 py-1 rounded rotate-[5deg] -top-5 -right-5",
                                            children: e("globals.comingSoon")
                                        }), e("airdrop.buttonText")]
                                    })
                                })]
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-5.webp",
                                width: 2166,
                                height: 2122,
                                className: "absolute w-auto -left-24 -top-72 cloud h-4/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/cloud-2.webp",
                                width: 2122,
                                height: 1361,
                                className: "absolute w-auto h-4/5 -right-48 -top-64 cloud bottom-8",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/parachute-2.webp",
                                width: 445,
                                height: 656,
                                className: "absolute w-auto parachute left-24 top-12 h-2/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/parachute-3.webp",
                                width: 445,
                                height: 656,
                                className: "absolute parachute top-0 left-[50%] w-auto h-2/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/parachute-1.webp",
                                width: 445,
                                height: 656,
                                className: "absolute w-auto parachute right-24 top-72 h-2/5",
                                alt: ""
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative z-10 flex flex-col items-center justify-start min-h-[100vh] grid-cols-12 gap-6 px-3 md:hidden",
                            children: [(0, a.jsx)(i.default, {
                                src: "/assets/parachute-1.webp",
                                width: 445,
                                height: 656,
                                className: "absolute w-auto parachute left-12 bottom-12 h-1/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/parachute-2.webp",
                                width: 445,
                                height: 656,
                                className: "absolute parachute top-0 left-[50%] w-auto h-1/5",
                                alt: ""
                            }), (0, a.jsx)(i.default, {
                                src: "/assets/parachute-3.webp",
                                width: 445,
                                height: 656,
                                className: "absolute w-auto parachute right-24 -bottom-12 h-1/5",
                                alt: ""
                            }), (0, a.jsx)("h2", {
                                className: "col-span-12 section-header !z-20 lg:col-span-4 md:col-span-6",
                                children: e("airdrop.heading")
                            }), (0, a.jsx)("span", {
                                className: "col-span-10 px-4 !text-lg text-container text-bg",
                                children: e("airdrop.description")
                            }), (0, a.jsx)("div", {
                                className: "col-span-12 text-center",
                                children: (0, a.jsxs)("button", {
                                    className: "relative px-6 !text-lg primary-button opacity-75 cursor-not-allowed",
                                    children: [(0, a.jsx)("span", {
                                        className: "absolute text-base text-primary bg-white p-2 py-1 rounded rotate-[5deg] -top-5 -right-5",
                                        children: e("globals.comingSoon")
                                    }), e("airdrop.buttonText")]
                                })
                            })]
                        })]
                    })
                })
            }
            var eP = s(44789);
            let e_ = () => {
                    document.body.style.setProperty("--scroll", String(Math.min(Math.max((window.scrollY / (document.body.scrollHeight - window.innerHeight) - .5) * 10, -5), 5)))
                },
                eA = e => {
                    e.addEventListener("click", function(e) {
                        e.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({
                            behavior: "smooth"
                        })
                    })
                };

            function eG(e) {
                let {
                    country: t
                } = e;
                return (0, l.useEffect)(() => (document.querySelectorAll('a[href^="#"]').forEach(eA), window.addEventListener("scroll", e_, !1), (0, r.h)(), () => {
                    window.removeEventListener("scroll", e_)
                }), []), (0, a.jsxs)("main", {
                    className: "overflow-hidden",
                    children: [(0, a.jsx)(m, {
                        visible: "GB" === t
                    }), (0, a.jsx)(r.Z, {}), (0, a.jsx)(k, {}), (0, a.jsx)(ed, {}), (0, a.jsx)("div", {
                        className: "flex justify-center w-full",
                        children: (0, a.jsx)(eP.Z, {})
                    }), (0, a.jsx)(eh, {}), (0, a.jsx)(eg, {}), (0, a.jsx)(ej, {}), (0, a.jsx)(eB, {}), (0, a.jsx)(em, {}), (0, a.jsx)(eS, {}), (0, a.jsx)(ey, {}), (0, a.jsx)(eD, {})]
                })
            }
        }
    }
]);