(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        96752: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 64404)), Promise.resolve().then(n.bind(n, 27640)), Promise.resolve().then(n.bind(n, 90239)), Promise.resolve().then(n.t.bind(n, 84080, 23)), Promise.resolve().then(n.t.bind(n, 92796, 23)), Promise.resolve().then(n.t.bind(n, 32563, 23)), Promise.resolve().then(n.t.bind(n, 24228, 23))
        },
        90239: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let r = n(57437),
                a = n(2265);
            t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: o = null,
                    children: i,
                    dataNtpc: l = ""
                } = e;
                return (0, a.useEffect)(() => {
                    l && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(l)
                        }
                    })
                }, [l]), (0, r.jsxs)(r.Fragment, {
                    children: [i, t ? (0, r.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != o ? "".concat(o, "px") : "auto"
                        },
                        "data-ntpc": l,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            }
        },
        64404: function(e, t, n) {
            "use strict";
            var r;
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let o = n(57437),
                i = n(2265),
                l = (r = n(31877)) && r.__esModule ? r : {
                    default: r
                };
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: n = "dataLayer"
                } = e;
                return void 0 === a && (a = n), (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(n, "'] = window['").concat(n, "'] || [];\n          function gtag(){window['").concat(n, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "');")
                        }
                    }), (0, o.jsx)(l.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === a) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[a] ? window[a].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(a, " does not exist"))
            }
        },
        27640: function(e, t, n) {
            "use strict";
            var r;
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let o = n(57437),
                i = n(2265),
                l = (r = n(31877)) && r.__esModule ? r : {
                    default: r
                };
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: n = "dataLayer",
                    auth: r,
                    preview: u,
                    dataLayer: c
                } = e;
                void 0 === a && (a = n);
                let d = "dataLayer" !== n ? "&l=".concat(n) : "";
                return (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c ? "w[l].push(".concat(JSON.stringify(c), ")") : "", "\n      })(window,'").concat(n, "');")
                        }
                    }), (0, o.jsx)(l.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(d).concat(r ? "&gtm_auth=".concat(r) : "").concat(u ? "&gtm_preview=".concat(u, "&gtm_cookies_win=x") : "")
                    })]
                })
            }, t.sendGTMEvent = e => {
                if (void 0 === a) {
                    console.warn("@next/third-parties: GTM has not been initialized");
                    return
                }
                window[a] ? window[a].push(e) : console.warn("@next/third-parties: GTM dataLayer ".concat(a, " does not exist"))
            }
        },
        31877: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a.a
                }
            });
            var r = n(84080),
                a = n.n(r),
                o = {};
            for (var i in r) "default" !== i && (o[i] = (function(e) {
                return r[e]
            }).bind(0, i));
            n.d(t, o)
        },
        40905: function(e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return r
                    },
                    default: function() {
                        return i
                    },
                    isEqualNode: function() {
                        return o
                    }
                });
            let r = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function a(e) {
                let {
                    type: t,
                    props: n
                } = e, a = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let o = r[e] || e.toLowerCase();
                    "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? a[o] = !!n[e] : a.setAttribute(o, n[e])
                }
                let {
                    children: o,
                    dangerouslySetInnerHTML: i
                } = n;
                return i ? a.innerHTML = i.__html || "" : o && (a.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), a
            }

            function o(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
                    }
                }
                return e.isEqualNode(t)
            }

            function i() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let r = t.title ? t.title[0] : null,
                            a = "";
                        if (r) {
                            let {
                                children: e
                            } = r.props;
                            a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        a !== document.title && (document.title = a), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    i = Number(r.content),
                    l = [];
                for (let t = 0, n = r.previousElementSibling; t < i; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var u;
                    (null == n ? void 0 : null == (u = n.tagName) ? void 0 : u.toLowerCase()) === e && l.push(n)
                }
                let c = t.map(a).filter(e => {
                    for (let t = 0, n = l.length; t < n; t++)
                        if (o(l[t], e)) return l.splice(t, 1), !1;
                    return !0
                });
                l.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), c.forEach(e => n.insertBefore(e, r)), r.content = (i - l.length + c.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        49189: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    cancelIdleCallback: function() {
                        return r
                    },
                    requestIdleCallback: function() {
                        return n
                    }
                });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        84080: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return v
                    },
                    handleClientScriptLoad: function() {
                        return _
                    },
                    initScriptLoader: function() {
                        return h
                    }
                });
            let r = n(99920),
                a = n(41452),
                o = n(57437),
                i = r._(n(54887)),
                l = a._(n(2265)),
                u = n(36590),
                c = n(40905),
                d = n(49189),
                s = new Map,
                f = new Set,
                p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                g = e => {
                    if (i.default.preinit) {
                        e.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                m = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: a = null,
                        dangerouslySetInnerHTML: o,
                        children: i = "",
                        strategy: l = "afterInteractive",
                        onError: u,
                        stylesheets: d
                    } = e, m = n || t;
                    if (m && f.has(m)) return;
                    if (s.has(t)) {
                        f.add(m), s.get(t).then(r, u);
                        return
                    }
                    let _ = () => {
                            a && a(), f.add(m)
                        },
                        h = document.createElement("script"),
                        y = new Promise((e, t) => {
                            h.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), _()
                            }), h.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            u && u(e)
                        });
                    for (let [n, r] of (o ? (h.innerHTML = o.__html || "", _()) : i ? (h.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", _()) : t && (h.src = t, s.set(t, y)), Object.entries(e))) {
                        if (void 0 === r || p.includes(n)) continue;
                        let e = c.DOMAttributeNames[n] || n.toLowerCase();
                        h.setAttribute(e, r)
                    }
                    "worker" === l && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", l), d && g(d), document.body.appendChild(h)
                };

            function _(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, d.requestIdleCallback)(() => m(e))
                }) : m(e)
            }

            function h(e) {
                e.forEach(_), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function y(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: a = null,
                    strategy: c = "afterInteractive",
                    onError: s,
                    stylesheets: p,
                    ...g
                } = e, {
                    updateScripts: _,
                    scripts: h,
                    getIsSsr: y,
                    appDir: v,
                    nonce: b
                } = (0, l.useContext)(u.HeadManagerContext), w = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    let e = t || n;
                    w.current || (a && e && f.has(e) && a(), w.current = !0)
                }, [a, t, n]);
                let x = (0, l.useRef)(!1);
                if ((0, l.useEffect)(() => {
                        !x.current && ("afterInteractive" === c ? m(e) : "lazyOnload" === c && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                            (0, d.requestIdleCallback)(() => m(e))
                        })), x.current = !0)
                    }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (_ ? (h[c] = (h[c] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: a,
                        onError: s,
                        ...g
                    }]), _(h)) : y && y() ? f.add(t || n) : y && !y() && m(e)), v) {
                    if (p && p.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === c) return n ? (i.default.preload(n, g.integrity ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: b
                    } : {
                        as: "script",
                        nonce: b
                    }), (0, o.jsx)("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...g,
                                id: t
                            }]) + ")"
                        }
                    })) : (g.dangerouslySetInnerHTML && (g.children = g.dangerouslySetInnerHTML.__html, delete g.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...g,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === c && n && i.default.preload(n, g.integrity ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: b
                    } : {
                        as: "script",
                        nonce: b
                    })
                }
                return null
            }
            Object.defineProperty(y, "__nextScript", {
                value: !0
            });
            let v = y;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        24228: function() {},
        32563: function() {},
        92796: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__myFont_9d64d0', '__myFont_Fallback_9d64d0'"
                },
                className: "__className_9d64d0"
            }
        }
    },
    function(e) {
        e.O(0, [8331, 2971, 7023, 1744], function() {
            return e(e.s = 96752)
        }), _N_E = e.O()
    }
]);