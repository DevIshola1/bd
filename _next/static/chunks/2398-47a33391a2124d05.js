(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2398], {
        3179: function(e, t, r) {
            "use strict";
            var n = r(9109).Buffer,
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.map = t.array = t.rustEnum = t.str = t.vecU8 = t.tagged = t.vec = t.bool = t.option = t.publicKey = t.i256 = t.u256 = t.i128 = t.u128 = t.i64 = t.u64 = t.struct = t.f64 = t.f32 = t.i32 = t.u32 = t.i16 = t.u16 = t.i8 = t.u8 = void 0;
            let o = r(19632),
                s = r(45429),
                a = i(r(58171));
            var u = r(19632);
            Object.defineProperty(t, "u8", {
                enumerable: !0,
                get: function() {
                    return u.u8
                }
            }), Object.defineProperty(t, "i8", {
                enumerable: !0,
                get: function() {
                    return u.s8
                }
            }), Object.defineProperty(t, "u16", {
                enumerable: !0,
                get: function() {
                    return u.u16
                }
            }), Object.defineProperty(t, "i16", {
                enumerable: !0,
                get: function() {
                    return u.s16
                }
            }), Object.defineProperty(t, "u32", {
                enumerable: !0,
                get: function() {
                    return u.u32
                }
            }), Object.defineProperty(t, "i32", {
                enumerable: !0,
                get: function() {
                    return u.s32
                }
            }), Object.defineProperty(t, "f32", {
                enumerable: !0,
                get: function() {
                    return u.f32
                }
            }), Object.defineProperty(t, "f64", {
                enumerable: !0,
                get: function() {
                    return u.f64
                }
            }), Object.defineProperty(t, "struct", {
                enumerable: !0,
                get: function() {
                    return u.struct
                }
            });
            class l extends o.Layout {
                constructor(e, t, r) {
                    super(e, r), this.blob = (0, o.blob)(e), this.signed = t
                }
                decode(e, t = 0) {
                    let r = new a.default(this.blob.decode(e, t), 10, "le");
                    return this.signed ? r.fromTwos(8 * this.span).clone() : r
                }
                encode(e, t, r = 0) {
                    return this.signed && (e = e.toTwos(8 * this.span)), this.blob.encode(e.toArrayLike(n, "le", this.span), t, r)
                }
            }

            function c(e) {
                return new l(8, !1, e)
            }

            function f(e) {
                return new l(8, !0, e)
            }

            function d(e) {
                return new l(16, !1, e)
            }

            function h(e) {
                return new l(16, !0, e)
            }

            function p(e) {
                return new l(32, !1, e)
            }

            function g(e) {
                return new l(32, !0, e)
            }
            t.u64 = c, t.i64 = f, t.u128 = d, t.i128 = h, t.u256 = p, t.i256 = g;
            class y extends o.Layout {
                constructor(e, t, r, n) {
                    super(e.span, n), this.layout = e, this.decoder = t, this.encoder = r
                }
                decode(e, t) {
                    return this.decoder(this.layout.decode(e, t))
                }
                encode(e, t, r) {
                    return this.layout.encode(this.encoder(e), t, r)
                }
                getSpan(e, t) {
                    return this.layout.getSpan(e, t)
                }
            }

            function m(e) {
                return new y((0, o.blob)(32), e => new s.PublicKey(e), e => e.toBuffer(), e)
            }
            t.publicKey = m;
            class v extends o.Layout {
                constructor(e, t) {
                    super(-1, t), this.layout = e, this.discriminator = (0, o.u8)()
                }
                encode(e, t, r = 0) {
                    return null == e ? this.discriminator.encode(0, t, r) : (this.discriminator.encode(1, t, r), this.layout.encode(e, t, r + 1) + 1)
                }
                decode(e, t = 0) {
                    let r = this.discriminator.decode(e, t);
                    if (0 === r) return null;
                    if (1 === r) return this.layout.decode(e, t + 1);
                    throw Error("Invalid option " + this.property)
                }
                getSpan(e, t = 0) {
                    let r = this.discriminator.decode(e, t);
                    if (0 === r) return 1;
                    if (1 === r) return this.layout.getSpan(e, t + 1) + 1;
                    throw Error("Invalid option " + this.property)
                }
            }

            function b(e, t) {
                return new v(e, t)
            }

            function w(e) {
                return new y((0, o.u8)(), E, O, e)
            }

            function E(e) {
                if (0 === e) return !1;
                if (1 === e) return !0;
                throw Error("Invalid bool: " + e)
            }

            function O(e) {
                return e ? 1 : 0
            }

            function x(e, t) {
                let r = (0, o.u32)("length");
                return new y((0, o.struct)([r, (0, o.seq)(e, (0, o.offset)(r, -r.span), "values")]), ({
                    values: e
                }) => e, e => ({
                    values: e
                }), t)
            }

            function S(e, t, r) {
                function n({
                    tag: t,
                    data: r
                }) {
                    if (!t.eq(e)) throw Error("Invalid tag, expected: " + e.toString("hex") + ", got: " + t.toString("hex"));
                    return r
                }
                return new y((0, o.struct)([c("tag"), t.replicate("data")]), n, t => ({
                    tag: e,
                    data: t
                }), r)
            }

            function P(e) {
                let t = (0, o.u32)("length");
                return new y((0, o.struct)([t, (0, o.blob)((0, o.offset)(t, -t.span), "data")]), ({
                    data: e
                }) => e, e => ({
                    data: e
                }), e)
            }

            function R(e) {
                return new y(P(), e => e.toString("utf-8"), e => n.from(e, "utf-8"), e)
            }

            function _(e, t, r) {
                let n = (0, o.union)(null != r ? r : (0, o.u8)(), t);
                return e.forEach((e, t) => n.addVariant(t, e, e.property)), n
            }

            function C(e, t, r) {
                return new y((0, o.struct)([(0, o.seq)(e, t, "values")]), ({
                    values: e
                }) => e, e => ({
                    values: e
                }), r)
            }
            t.option = b, t.bool = w, t.vec = x, t.tagged = S, t.vecU8 = P, t.str = R, t.rustEnum = _, t.array = C;
            class j extends o.Layout {
                constructor(e, t, r) {
                    super(e.span + t.span, r), this.keyLayout = e, this.valueLayout = t
                }
                decode(e, t) {
                    return t = t || 0, [this.keyLayout.decode(e, t), this.valueLayout.decode(e, t + this.keyLayout.getSpan(e, t))]
                }
                encode(e, t, r) {
                    r = r || 0;
                    let n = this.keyLayout.encode(e[0], t, r),
                        i = this.valueLayout.encode(e[1], t, r + n);
                    return n + i
                }
                getSpan(e, t) {
                    return this.keyLayout.getSpan(e, t) + this.valueLayout.getSpan(e, t)
                }
            }

            function I(e, t, r) {
                let n = (0, o.u32)("length");
                return new y((0, o.struct)([n, (0, o.seq)(new j(e, t), (0, o.offset)(n, -n.span), "values")]), ({
                    values: e
                }) => new Map(e), e => ({
                    values: Array.from(e.entries())
                }), r)
            }
            t.map = I
        },
        48635: function(e, t, r) {
            var n = r(35197),
                i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            e.exports = n(i)
        },
        19467: function(e) {
            "use strict";
            let t = /[\p{Lu}]/u,
                r = /[\p{Ll}]/u,
                n = /^[\p{Lu}](?![\p{Lu}])/gu,
                i = /([\p{Alpha}\p{N}_]|$)/u,
                o = /[_.\- ]+/,
                s = RegExp("^" + o.source),
                a = RegExp(o.source + i.source, "gu"),
                u = RegExp("\\d+" + i.source, "gu"),
                l = (e, n, i) => {
                    let o = !1,
                        s = !1,
                        a = !1;
                    for (let u = 0; u < e.length; u++) {
                        let l = e[u];
                        o && t.test(l) ? (e = e.slice(0, u) + "-" + e.slice(u), o = !1, a = s, s = !0, u++) : s && a && r.test(l) ? (e = e.slice(0, u - 1) + "-" + e.slice(u - 1), a = s, s = !1, o = !0) : (o = n(l) === l && i(l) !== l, a = s, s = i(l) === l && n(l) !== l)
                    }
                    return e
                },
                c = (e, t) => (n.lastIndex = 0, e.replace(n, e => t(e))),
                f = (e, t) => (a.lastIndex = 0, u.lastIndex = 0, e.replace(a, (e, r) => t(r)).replace(u, e => t(e))),
                d = (e, t) => {
                    if (!("string" == typeof e || Array.isArray(e))) throw TypeError("Expected the input to be `string | string[]`");
                    if (t = {
                            pascalCase: !1,
                            preserveConsecutiveUppercase: !1,
                            ...t
                        }, 0 === (e = Array.isArray(e) ? e.map(e => e.trim()).filter(e => e.length).join("-") : e.trim()).length) return "";
                    let r = !1 === t.locale ? e => e.toLowerCase() : e => e.toLocaleLowerCase(t.locale),
                        n = !1 === t.locale ? e => e.toUpperCase() : e => e.toLocaleUpperCase(t.locale);
                    return 1 === e.length ? t.pascalCase ? n(e) : r(e) : (e !== r(e) && (e = l(e, r, n)), e = e.replace(s, ""), e = t.preserveConsecutiveUppercase ? c(e, r) : r(e), t.pascalCase && (e = n(e.charAt(0)) + e.slice(1)), f(e, n))
                };
            e.exports = d, e.exports.default = d
        },
        96357: function(e, t) {
            "use strict";
            var r = {
                    update: null,
                    begin: null,
                    loopBegin: null,
                    changeBegin: null,
                    change: null,
                    changeComplete: null,
                    loopComplete: null,
                    complete: null,
                    loop: 1,
                    direction: "normal",
                    autoplay: !0,
                    timelineOffset: 0
                },
                n = {
                    duration: 1e3,
                    delay: 0,
                    endDelay: 0,
                    easing: "easeOutElastic(1, .5)",
                    round: 0
                },
                i = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
                o = {},
                s = {};

            function a(e, t, r) {
                return Math.min(Math.max(e, t), r)
            }

            function u(e, t) {
                return e.indexOf(t) > -1
            }

            function l(e, t) {
                return e.apply(null, t)
            }
            var c = {
                arr: function(e) {
                    return Array.isArray(e)
                },
                obj: function(e) {
                    return u(Object.prototype.toString.call(e), "Object")
                },
                pth: function(e) {
                    return c.obj(e) && e.hasOwnProperty("totalLength")
                },
                svg: function(e) {
                    return e instanceof SVGElement
                },
                inp: function(e) {
                    return e instanceof HTMLInputElement
                },
                dom: function(e) {
                    return e.nodeType || c.svg(e)
                },
                str: function(e) {
                    return "string" == typeof e
                },
                fnc: function(e) {
                    return "function" == typeof e
                },
                und: function(e) {
                    return void 0 === e
                },
                nil: function(e) {
                    return c.und(e) || null === e
                },
                hex: function(e) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                },
                rgb: function(e) {
                    return /^rgb/.test(e)
                },
                hsl: function(e) {
                    return /^hsl/.test(e)
                },
                col: function(e) {
                    return c.hex(e) || c.rgb(e) || c.hsl(e)
                },
                key: function(e) {
                    return !r.hasOwnProperty(e) && !n.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e
                }
            };

            function f(e) {
                var t = /\(([^)]+)\)/.exec(e);
                return t ? t[1].split(",").map(function(e) {
                    return parseFloat(e)
                }) : []
            }

            function d(e, t) {
                var r = f(e),
                    n = a(c.und(r[0]) ? 1 : r[0], .1, 100),
                    i = a(c.und(r[1]) ? 100 : r[1], .1, 100),
                    o = a(c.und(r[2]) ? 10 : r[2], .1, 100),
                    u = a(c.und(r[3]) ? 0 : r[3], .1, 100),
                    l = Math.sqrt(i / n),
                    d = o / (2 * Math.sqrt(i * n)),
                    h = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
                    p = 1,
                    g = d < 1 ? (d * l + -u) / h : -u + l;

                function y(e) {
                    var r = t ? t * e / 1e3 : e;
                    return (r = d < 1 ? Math.exp(-r * d * l) * (p * Math.cos(h * r) + g * Math.sin(h * r)) : (p + g * r) * Math.exp(-r * l), 0 === e || 1 === e) ? e : 1 - r
                }

                function m() {
                    var t = s[e];
                    if (t) return t;
                    for (var r = 1 / 6, n = 0, i = 0;;)
                        if (1 === y(n += r)) {
                            if (++i >= 16) break
                        } else i = 0;
                    var o = n * r * 1e3;
                    return s[e] = o, o
                }
                return t ? y : m
            }

            function h(e) {
                return void 0 === e && (e = 10),
                    function(t) {
                        return Math.ceil(a(t, 1e-6, 1) * e) * (1 / e)
                    }
            }
            var p = function() {
                    var e = 11,
                        t = .1;

                    function r(e, t) {
                        return 1 - 3 * t + 3 * e
                    }

                    function n(e, t) {
                        return 3 * t - 6 * e
                    }

                    function i(e) {
                        return 3 * e
                    }

                    function o(e, t, o) {
                        return ((r(t, o) * e + n(t, o)) * e + i(t)) * e
                    }

                    function s(e, t, o) {
                        return 3 * r(t, o) * e * e + 2 * n(t, o) * e + i(t)
                    }

                    function a(e, t, r, n, i) {
                        var s, a, u = 0;
                        do(s = o(a = t + (r - t) / 2, n, i) - e) > 0 ? r = a : t = a; while (Math.abs(s) > 1e-7 && ++u < 10);
                        return a
                    }

                    function u(e, t, r, n) {
                        for (var i = 0; i < 4; ++i) {
                            var a = s(t, r, n);
                            if (0 === a) break;
                            var u = o(t, r, n) - e;
                            t -= u / a
                        }
                        return t
                    }
                    return function(r, n, i, l) {
                        if (0 <= r && r <= 1 && 0 <= i && i <= 1) {
                            var c = new Float32Array(e);
                            if (r !== n || i !== l)
                                for (var f = 0; f < e; ++f) c[f] = o(f * t, r, i);
                            return function(e) {
                                return r === n && i === l || 0 === e || 1 === e ? e : o(d(e), n, l)
                            }
                        }

                        function d(n) {
                            for (var o = 0, l = 1, f = e - 1; l !== f && c[l] <= n; ++l) o += t;
                            var d = o + (n - c[--l]) / (c[l + 1] - c[l]) * t,
                                h = s(d, r, i);
                            return h >= .001 ? u(n, d, r, i) : 0 === h ? d : a(n, o, o + t, r, i)
                        }
                    }
                }(),
                g = function() {
                    var e = {
                            linear: function() {
                                return function(e) {
                                    return e
                                }
                            }
                        },
                        t = {
                            Sine: function() {
                                return function(e) {
                                    return 1 - Math.cos(e * Math.PI / 2)
                                }
                            },
                            Expo: function() {
                                return function(e) {
                                    return e ? Math.pow(2, 10 * e - 10) : 0
                                }
                            },
                            Circ: function() {
                                return function(e) {
                                    return 1 - Math.sqrt(1 - e * e)
                                }
                            },
                            Back: function() {
                                return function(e) {
                                    return e * e * (3 * e - 2)
                                }
                            },
                            Bounce: function() {
                                return function(e) {
                                    for (var t, r = 4; e < ((t = Math.pow(2, --r)) - 1) / 11;);
                                    return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                                }
                            },
                            Elastic: function(e, t) {
                                void 0 === e && (e = 1), void 0 === t && (t = .5);
                                var r = a(e, 1, 10),
                                    n = a(t, .1, 2);
                                return function(e) {
                                    return 0 === e || 1 === e ? e : -r * Math.pow(2, 10 * (e - 1)) * Math.sin(2 * Math.PI * (e - 1 - n / (2 * Math.PI) * Math.asin(1 / r)) / n)
                                }
                            }
                        };
                    return ["Quad", "Cubic", "Quart", "Quint"].forEach(function(e, r) {
                        t[e] = function() {
                            return function(e) {
                                return Math.pow(e, r + 2)
                            }
                        }
                    }), Object.keys(t).forEach(function(r) {
                        var n = t[r];
                        e["easeIn" + r] = n, e["easeOut" + r] = function(e, t) {
                            return function(r) {
                                return 1 - n(e, t)(1 - r)
                            }
                        }, e["easeInOut" + r] = function(e, t) {
                            return function(r) {
                                return r < .5 ? n(e, t)(2 * r) / 2 : 1 - n(e, t)(-2 * r + 2) / 2
                            }
                        }, e["easeOutIn" + r] = function(e, t) {
                            return function(r) {
                                return r < .5 ? (1 - n(e, t)(1 - 2 * r)) / 2 : (n(e, t)(2 * r - 1) + 1) / 2
                            }
                        }
                    }), e
                }();

            function y(e, t) {
                if (c.fnc(e)) return e;
                var r = e.split("(")[0],
                    n = g[r],
                    i = f(e);
                switch (r) {
                    case "spring":
                        return d(e, t);
                    case "cubicBezier":
                        return l(p, i);
                    case "steps":
                        return l(h, i);
                    default:
                        return l(n, i)
                }
            }

            function m(e) {
                try {
                    return document.querySelectorAll(e)
                } catch (e) {
                    return
                }
            }

            function v(e, t) {
                for (var r = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, i = [], o = 0; o < r; o++)
                    if (o in e) {
                        var s = e[o];
                        t.call(n, s, o, e) && i.push(s)
                    }
                return i
            }

            function b(e) {
                return e.reduce(function(e, t) {
                    return e.concat(c.arr(t) ? b(t) : t)
                }, [])
            }

            function w(e) {
                return c.arr(e) ? e : (c.str(e) && (e = m(e) || e), e instanceof NodeList || e instanceof HTMLCollection) ? [].slice.call(e) : [e]
            }

            function E(e, t) {
                return e.some(function(e) {
                    return e === t
                })
            }

            function O(e) {
                var t = {};
                for (var r in e) t[r] = e[r];
                return t
            }

            function x(e, t) {
                var r = O(e);
                for (var n in e) r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
                return r
            }

            function S(e, t) {
                var r = O(e);
                for (var n in t) r[n] = c.und(e[n]) ? t[n] : e[n];
                return r
            }

            function P(e) {
                var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
                return t ? "rgba(" + t[1] + ",1)" : e
            }

            function R(e) {
                var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    r = e.replace(t, function(e, t, r, n) {
                        return t + t + r + r + n + n
                    }),
                    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
                return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)"
            }

            function _(e) {
                var t, r, n, i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
                    o = parseInt(i[1], 10) / 360,
                    s = parseInt(i[2], 10) / 100,
                    a = parseInt(i[3], 10) / 100,
                    u = i[4] || 1;

                function l(e, t, r) {
                    return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                }
                if (0 == s) t = r = n = a;
                else {
                    var c = a < .5 ? a * (1 + s) : a + s - a * s,
                        f = 2 * a - c;
                    t = l(f, c, o + 1 / 3), r = l(f, c, o), n = l(f, c, o - 1 / 3)
                }
                return "rgba(" + 255 * t + "," + 255 * r + "," + 255 * n + "," + u + ")"
            }

            function C(e) {
                return c.rgb(e) ? P(e) : c.hex(e) ? R(e) : c.hsl(e) ? _(e) : void 0
            }

            function j(e) {
                var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
                if (t) return t[1]
            }

            function I(e) {
                return u(e, "translate") || "perspective" === e ? "px" : u(e, "rotate") || u(e, "skew") ? "deg" : void 0
            }

            function A(e, t) {
                return c.fnc(e) ? e(t.target, t.id, t.total) : e
            }

            function L(e, t) {
                return e.getAttribute(t)
            }

            function M(e, t, r) {
                if (E([r, "deg", "rad", "turn"], j(t))) return t;
                var n = o[t + r];
                if (!c.und(n)) return n;
                var i = 100,
                    s = document.createElement(e.tagName),
                    a = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
                a.appendChild(s), s.style.position = "absolute", s.style.width = i + r;
                var u = i / s.offsetWidth;
                a.removeChild(s);
                var l = u * parseFloat(t);
                return o[t + r] = l, l
            }

            function k(e, t, r) {
                if (t in e.style) {
                    var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                        i = e.style[t] || getComputedStyle(e).getPropertyValue(n) || "0";
                    return r ? M(e, i, r) : i
                }
            }

            function N(e, t) {
                return c.dom(e) && !c.inp(e) && (!c.nil(L(e, t)) || c.svg(e) && e[t]) ? "attribute" : c.dom(e) && E(i, t) ? "transform" : c.dom(e) && "transform" !== t && k(e, t) ? "css" : null != e[t] ? "object" : void 0
            }

            function T(e) {
                if (c.dom(e)) {
                    for (var t, r = e.style.transform || "", n = /(\w+)\(([^)]*)\)/g, i = new Map; t = n.exec(r);) i.set(t[1], t[2]);
                    return i
                }
            }

            function F(e, t, r, n) {
                var i = u(t, "scale") ? 1 : 0 + I(t),
                    o = T(e).get(t) || i;
                return r && (r.transforms.list.set(t, o), r.transforms.last = t), n ? M(e, o, n) : o
            }

            function U(e, t, r, n) {
                switch (N(e, t)) {
                    case "transform":
                        return F(e, t, n, r);
                    case "css":
                        return k(e, t, r);
                    case "attribute":
                        return L(e, t);
                    default:
                        return e[t] || 0
                }
            }

            function D(e, t) {
                var r = /^(\*=|\+=|-=)/.exec(e);
                if (!r) return e;
                var n = j(e) || 0,
                    i = parseFloat(t),
                    o = parseFloat(e.replace(r[0], ""));
                switch (r[0][0]) {
                    case "+":
                        return i + o + n;
                    case "-":
                        return i - o + n;
                    case "*":
                        return i * o + n
                }
            }

            function B(e, t) {
                if (c.col(e)) return C(e);
                if (/\s/g.test(e)) return e;
                var r = j(e),
                    n = r ? e.substr(0, e.length - r.length) : e;
                return t ? n + t : n
            }

            function z(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }

            function V(e) {
                return 2 * Math.PI * L(e, "r")
            }

            function W(e) {
                return 2 * L(e, "width") + 2 * L(e, "height")
            }

            function H(e) {
                return z({
                    x: L(e, "x1"),
                    y: L(e, "y1")
                }, {
                    x: L(e, "x2"),
                    y: L(e, "y2")
                })
            }

            function Q(e) {
                for (var t, r = e.points, n = 0, i = 0; i < r.numberOfItems; i++) {
                    var o = r.getItem(i);
                    i > 0 && (n += z(t, o)), t = o
                }
                return n
            }

            function q(e) {
                var t = e.points;
                return Q(e) + z(t.getItem(t.numberOfItems - 1), t.getItem(0))
            }

            function G(e) {
                if (e.getTotalLength) return e.getTotalLength();
                switch (e.tagName.toLowerCase()) {
                    case "circle":
                        return V(e);
                    case "rect":
                        return W(e);
                    case "line":
                        return H(e);
                    case "polyline":
                        return Q(e);
                    case "polygon":
                        return q(e)
                }
            }

            function $(e) {
                var t = G(e);
                return e.setAttribute("stroke-dasharray", t), t
            }

            function Y(e) {
                for (var t = e.parentNode; c.svg(t) && c.svg(t.parentNode);) t = t.parentNode;
                return t
            }

            function Z(e, t) {
                var r = t || {},
                    n = r.el || Y(e),
                    i = n.getBoundingClientRect(),
                    o = L(n, "viewBox"),
                    s = i.width,
                    a = i.height,
                    u = r.viewBox || (o ? o.split(" ") : [0, 0, s, a]);
                return {
                    el: n,
                    viewBox: u,
                    x: u[0] / 1,
                    y: u[1] / 1,
                    w: s,
                    h: a,
                    vW: u[2],
                    vH: u[3]
                }
            }

            function K(e, t) {
                var r = c.str(e) ? m(e)[0] : e,
                    n = t || 100;
                return function(e) {
                    return {
                        property: e,
                        el: r,
                        svg: Z(r),
                        totalLength: G(r) * (n / 100)
                    }
                }
            }

            function J(e, t, r) {
                function n(r) {
                    void 0 === r && (r = 0);
                    var n = t + r >= 1 ? t + r : 0;
                    return e.el.getPointAtLength(n)
                }
                var i = Z(e.el, e.svg),
                    o = n(),
                    s = n(-1),
                    a = n(1),
                    u = r ? 1 : i.w / i.vW,
                    l = r ? 1 : i.h / i.vH;
                switch (e.property) {
                    case "x":
                        return (o.x - i.x) * u;
                    case "y":
                        return (o.y - i.y) * l;
                    case "angle":
                        return 180 * Math.atan2(a.y - s.y, a.x - s.x) / Math.PI
                }
            }

            function X(e, t) {
                var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
                    n = B(c.pth(e) ? e.totalLength : e, t) + "";
                return {
                    original: n,
                    numbers: n.match(r) ? n.match(r).map(Number) : [0],
                    strings: c.str(e) || t ? n.split(r) : []
                }
            }

            function ee(e) {
                return v(e ? b(c.arr(e) ? e.map(w) : w(e)) : [], function(e, t, r) {
                    return r.indexOf(e) === t
                })
            }

            function et(e) {
                var t = ee(e);
                return t.map(function(e, r) {
                    return {
                        target: e,
                        id: r,
                        total: t.length,
                        transforms: {
                            list: T(e)
                        }
                    }
                })
            }

            function er(e, t) {
                var r = O(t);
                if (/^spring/.test(r.easing) && (r.duration = d(r.easing)), c.arr(e)) {
                    var n = e.length;
                    2 !== n || c.obj(e[0]) ? c.fnc(t.duration) || (r.duration = t.duration / n) : e = {
                        value: e
                    }
                }
                var i = c.arr(e) ? e : [e];
                return i.map(function(e, r) {
                    var n = c.obj(e) && !c.pth(e) ? e : {
                        value: e
                    };
                    return c.und(n.delay) && (n.delay = r ? 0 : t.delay), c.und(n.endDelay) && (n.endDelay = r === i.length - 1 ? t.endDelay : 0), n
                }).map(function(e) {
                    return S(e, r)
                })
            }

            function en(e) {
                for (var t = v(b(e.map(function(e) {
                        return Object.keys(e)
                    })), function(e) {
                        return c.key(e)
                    }).reduce(function(e, t) {
                        return 0 > e.indexOf(t) && e.push(t), e
                    }, []), r = {}, n = function(n) {
                        var i = t[n];
                        r[i] = e.map(function(e) {
                            var t = {};
                            for (var r in e) c.key(r) ? r == i && (t.value = e[r]) : t[r] = e[r];
                            return t
                        })
                    }, i = 0; i < t.length; i++) n(i);
                return r
            }

            function ei(e, t) {
                var r = [],
                    n = t.keyframes;
                for (var i in n && (t = S(en(n), t)), t) c.key(i) && r.push({
                    name: i,
                    tweens: er(t[i], e)
                });
                return r
            }

            function eo(e, t) {
                var r = {};
                for (var n in e) {
                    var i = A(e[n], t);
                    c.arr(i) && 1 === (i = i.map(function(e) {
                        return A(e, t)
                    })).length && (i = i[0]), r[n] = i
                }
                return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
            }

            function es(e, t) {
                var r;
                return e.tweens.map(function(n) {
                    var i = eo(n, t),
                        o = i.value,
                        s = c.arr(o) ? o[1] : o,
                        a = j(s),
                        u = U(t.target, e.name, a, t),
                        l = r ? r.to.original : u,
                        f = c.arr(o) ? o[0] : l,
                        d = j(f) || j(u),
                        h = a || d;
                    return c.und(s) && (s = l), i.from = X(f, h), i.to = X(D(s, f), h), i.start = r ? r.end : 0, i.end = i.start + i.delay + i.duration + i.endDelay, i.easing = y(i.easing, i.duration), i.isPath = c.pth(o), i.isPathTargetInsideSVG = i.isPath && c.svg(t.target), i.isColor = c.col(i.from.original), i.isColor && (i.round = 1), r = i, i
                })
            }
            var ea = {
                css: function(e, t, r) {
                    return e.style[t] = r
                },
                attribute: function(e, t, r) {
                    return e.setAttribute(t, r)
                },
                object: function(e, t, r) {
                    return e[t] = r
                },
                transform: function(e, t, r, n, i) {
                    if (n.list.set(t, r), t === n.last || i) {
                        var o = "";
                        n.list.forEach(function(e, t) {
                            o += t + "(" + e + ") "
                        }), e.style.transform = o
                    }
                }
            };

            function eu(e, t) {
                et(e).forEach(function(e) {
                    for (var r in t) {
                        var n = A(t[r], e),
                            i = e.target,
                            o = j(n),
                            s = U(i, r, o, e),
                            a = D(B(n, o || j(s)), s);
                        ea[N(i, r)](i, r, a, e.transforms, !0)
                    }
                })
            }

            function el(e, t) {
                var r = N(e.target, t.name);
                if (r) {
                    var n = es(t, e),
                        i = n[n.length - 1];
                    return {
                        type: r,
                        property: t.name,
                        animatable: e,
                        tweens: n,
                        duration: i.end,
                        delay: n[0].delay,
                        endDelay: i.endDelay
                    }
                }
            }

            function ec(e, t) {
                return v(b(e.map(function(e) {
                    return t.map(function(t) {
                        return el(e, t)
                    })
                })), function(e) {
                    return !c.und(e)
                })
            }

            function ef(e, t) {
                var r = e.length,
                    n = function(e) {
                        return e.timelineOffset ? e.timelineOffset : 0
                    },
                    i = {};
                return i.duration = r ? Math.max.apply(Math, e.map(function(e) {
                    return n(e) + e.duration
                })) : t.duration, i.delay = r ? Math.min.apply(Math, e.map(function(e) {
                    return n(e) + e.delay
                })) : t.delay, i.endDelay = r ? i.duration - Math.max.apply(Math, e.map(function(e) {
                    return n(e) + e.duration - e.endDelay
                })) : t.endDelay, i
            }
            var ed = 0;

            function eh(e) {
                var t = x(r, e),
                    i = x(n, e),
                    o = ei(i, e),
                    s = et(e.targets),
                    a = ec(s, o),
                    u = ef(a, i),
                    l = ed;
                return ed++, S(t, {
                    id: l,
                    children: [],
                    animatables: s,
                    animations: a,
                    duration: u.duration,
                    delay: u.delay,
                    endDelay: u.endDelay
                })
            }
            var ep = [],
                eg = function() {
                    var e;

                    function t() {
                        e || ey() && em.suspendWhenDocumentHidden || !(ep.length > 0) || (e = requestAnimationFrame(r))
                    }

                    function r(t) {
                        for (var n = ep.length, i = 0; i < n;) {
                            var o = ep[i];
                            o.paused ? (ep.splice(i, 1), n--) : (o.tick(t), i++)
                        }
                        e = i > 0 ? requestAnimationFrame(r) : void 0
                    }

                    function n() {
                        em.suspendWhenDocumentHidden && (ey() ? e = cancelAnimationFrame(e) : (ep.forEach(function(e) {
                            return e._onDocumentVisibility()
                        }), eg()))
                    }
                    return "undefined" != typeof document && document.addEventListener("visibilitychange", n), t
                }();

            function ey() {
                return !!document && document.hidden
            }

            function em(e) {
                void 0 === e && (e = {});
                var t, r = 0,
                    n = 0,
                    i = 0,
                    o = 0,
                    s = null;

                function u(e) {
                    var t = window.Promise && new Promise(function(e) {
                        return s = e
                    });
                    return e.finished = t, t
                }
                var l = eh(e),
                    c = u(l);

                function f() {
                    var e = l.direction;
                    "alternate" !== e && (l.direction = "normal" !== e ? "normal" : "reverse"), l.reversed = !l.reversed, t.forEach(function(e) {
                        return e.reversed = l.reversed
                    })
                }

                function d(e) {
                    return l.reversed ? l.duration - e : e
                }

                function h() {
                    r = 0, n = d(l.currentTime) * (1 / em.speed)
                }

                function p(e, t) {
                    t && t.seek(e - t.timelineOffset)
                }

                function g(e) {
                    if (l.reversePlayback)
                        for (var r = o; r--;) p(e, t[r]);
                    else
                        for (var n = 0; n < o; n++) p(e, t[n])
                }

                function y(e) {
                    for (var t = 0, r = l.animations, n = r.length; t < n;) {
                        var i = r[t],
                            o = i.animatable,
                            s = i.tweens,
                            u = s.length - 1,
                            c = s[u];
                        u && (c = v(s, function(t) {
                            return e < t.end
                        })[0] || c);
                        for (var f = a(e - c.start - c.delay, 0, c.duration) / c.duration, d = isNaN(f) ? 1 : c.easing(f), h = c.to.strings, p = c.round, g = [], y = c.to.numbers.length, m = void 0, b = 0; b < y; b++) {
                            var w = void 0,
                                E = c.to.numbers[b],
                                O = c.from.numbers[b] || 0;
                            w = c.isPath ? J(c.value, d * E, c.isPathTargetInsideSVG) : O + d * (E - O), p && !(c.isColor && b > 2) && (w = Math.round(w * p) / p), g.push(w)
                        }
                        var x = h.length;
                        if (x) {
                            m = h[0];
                            for (var S = 0; S < x; S++) {
                                h[S];
                                var P = h[S + 1],
                                    R = g[S];
                                isNaN(R) || (P ? m += R + P : m += R + " ")
                            }
                        } else m = g[0];
                        ea[i.type](o.target, i.property, m, o.transforms), i.currentValue = m, t++
                    }
                }

                function m(e) {
                    l[e] && !l.passThrough && l[e](l)
                }

                function b() {
                    l.remaining && !0 !== l.remaining && l.remaining--
                }

                function w(e) {
                    var o = l.duration,
                        h = l.delay,
                        p = o - l.endDelay,
                        v = d(e);
                    l.progress = a(v / o * 100, 0, 100), l.reversePlayback = v < l.currentTime, t && g(v), !l.began && l.currentTime > 0 && (l.began = !0, m("begin")), !l.loopBegan && l.currentTime > 0 && (l.loopBegan = !0, m("loopBegin")), v <= h && 0 !== l.currentTime && y(0), (v >= p && l.currentTime !== o || !o) && y(o), v > h && v < p ? (l.changeBegan || (l.changeBegan = !0, l.changeCompleted = !1, m("changeBegin")), m("change"), y(v)) : l.changeBegan && (l.changeCompleted = !0, l.changeBegan = !1, m("changeComplete")), l.currentTime = a(v, 0, o), l.began && m("update"), e >= o && (n = 0, b(), l.remaining ? (r = i, m("loopComplete"), l.loopBegan = !1, "alternate" === l.direction && f()) : (l.paused = !0, !l.completed && (l.completed = !0, m("loopComplete"), m("complete"), !l.passThrough && "Promise" in window && (s(), c = u(l)))))
                }
                return l.reset = function() {
                    var e = l.direction;
                    l.passThrough = !1, l.currentTime = 0, l.progress = 0, l.paused = !0, l.began = !1, l.loopBegan = !1, l.changeBegan = !1, l.completed = !1, l.changeCompleted = !1, l.reversePlayback = !1, l.reversed = "reverse" === e, l.remaining = l.loop, o = (t = l.children).length;
                    for (var r = o; r--;) l.children[r].reset();
                    (l.reversed && !0 !== l.loop || "alternate" === e && 1 === l.loop) && l.remaining++, y(l.reversed ? l.duration : 0)
                }, l._onDocumentVisibility = h, l.set = function(e, t) {
                    return eu(e, t), l
                }, l.tick = function(e) {
                    i = e, r || (r = i), w((i + (n - r)) * em.speed)
                }, l.seek = function(e) {
                    w(d(e))
                }, l.pause = function() {
                    l.paused = !0, h()
                }, l.play = function() {
                    l.paused && (l.completed && l.reset(), l.paused = !1, ep.push(l), h(), eg())
                }, l.reverse = function() {
                    f(), l.completed = !l.reversed, h()
                }, l.restart = function() {
                    l.reset(), l.play()
                }, l.remove = function(e) {
                    eb(ee(e), l)
                }, l.reset(), l.autoplay && l.play(), l
            }

            function ev(e, t) {
                for (var r = t.length; r--;) E(e, t[r].animatable.target) && t.splice(r, 1)
            }

            function eb(e, t) {
                var r = t.animations,
                    n = t.children;
                ev(e, r);
                for (var i = n.length; i--;) {
                    var o = n[i],
                        s = o.animations;
                    ev(e, s), s.length || o.children.length || n.splice(i, 1)
                }
                r.length || n.length || t.pause()
            }

            function ew(e) {
                for (var t = ee(e), r = ep.length; r--;) eb(t, ep[r])
            }

            function eE(e, t) {
                void 0 === t && (t = {});
                var r = t.direction || "normal",
                    n = t.easing ? y(t.easing) : null,
                    i = t.grid,
                    o = t.axis,
                    s = t.from || 0,
                    a = "first" === s,
                    u = "center" === s,
                    l = "last" === s,
                    f = c.arr(e),
                    d = f ? parseFloat(e[0]) : parseFloat(e),
                    h = f ? parseFloat(e[1]) : 0,
                    p = j(f ? e[1] : e) || 0,
                    g = t.start || 0 + (f ? d : 0),
                    m = [],
                    v = 0;
                return function(e, t, c) {
                    if (a && (s = 0), u && (s = (c - 1) / 2), l && (s = c - 1), !m.length) {
                        for (var y = 0; y < c; y++) {
                            if (i) {
                                var b = u ? (i[0] - 1) / 2 : s % i[0],
                                    w = u ? (i[1] - 1) / 2 : Math.floor(s / i[0]),
                                    E = y % i[0],
                                    O = Math.floor(y / i[0]),
                                    x = b - E,
                                    S = w - O,
                                    P = Math.sqrt(x * x + S * S);
                                "x" === o && (P = -x), "y" === o && (P = -S), m.push(P)
                            } else m.push(Math.abs(s - y));
                            v = Math.max.apply(Math, m)
                        }
                        n && (m = m.map(function(e) {
                            return n(e / v) * v
                        })), "reverse" === r && (m = m.map(function(e) {
                            return o ? e < 0 ? -1 * e : -e : Math.abs(v - e)
                        }))
                    }
                    var R = f ? (h - d) / v : d;
                    return g + Math.round(100 * m[t]) / 100 * R + p
                }
            }

            function eO(e) {
                void 0 === e && (e = {});
                var t = em(e);
                return t.duration = 0, t.add = function(r, i) {
                    var o = ep.indexOf(t),
                        s = t.children;

                    function a(e) {
                        e.passThrough = !0
                    }
                    o > -1 && ep.splice(o, 1);
                    for (var u = 0; u < s.length; u++) a(s[u]);
                    var l = S(r, x(n, e));
                    l.targets = l.targets || e.targets;
                    var f = t.duration;
                    l.autoplay = !1, l.direction = t.direction, l.timelineOffset = c.und(i) ? f : D(i, f), a(t), t.seek(l.timelineOffset);
                    var d = em(l);
                    a(d), s.push(d);
                    var h = ef(s, e);
                    return t.delay = h.delay, t.endDelay = h.endDelay, t.duration = h.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t
                }, t
            }
            em.version = "3.2.1", em.speed = 1, em.suspendWhenDocumentHidden = !0, em.running = ep, em.remove = ew, em.get = U, em.set = eu, em.convertPx = M, em.path = K, em.setDashoffset = $, em.stagger = eE, em.timeline = eO, em.easing = y, em.penner = g, em.random = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }, t.Z = em
        },
        19632: function(e, t, r) {
            "use strict";
            var n = r(9109).Buffer;
            /**
             * Support for translating between Buffer instances and JavaScript
             * native types.
             *
             * {@link module:Layout~Layout|Layout} is the basis of a class
             * hierarchy that associates property names with sequences of encoded
             * bytes.
             *
             * Layouts are supported for these scalar (numeric) types:
             * * {@link module:Layout~UInt|Unsigned integers in little-endian
             *   format} with {@link module:Layout.u8|8-bit}, {@link
             *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
             *   {@link module:Layout.u32|32-bit}, {@link
             *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
             *   representation ranges;
             * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
             *   format} with {@link module:Layout.u16be|16-bit}, {@link
             *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
             *   {@link module:Layout.u40be|40-bit}, and {@link
             *   module:Layout.u48be|48-bit} representation ranges;
             * * {@link module:Layout~Int|Signed integers in little-endian
             *   format} with {@link module:Layout.s8|8-bit}, {@link
             *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
             *   {@link module:Layout.s32|32-bit}, {@link
             *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
             *   representation ranges;
             * * {@link module:Layout~IntBE|Signed integers in big-endian format}
             *   with {@link module:Layout.s16be|16-bit}, {@link
             *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
             *   {@link module:Layout.s40be|40-bit}, and {@link
             *   module:Layout.s48be|48-bit} representation ranges;
             * * 64-bit integral values that decode to an exact (if magnitude is
             *   less than 2^53) or nearby integral Number in {@link
             *   module:Layout.nu64|unsigned little-endian}, {@link
             *   module:Layout.nu64be|unsigned big-endian}, {@link
             *   module:Layout.ns64|signed little-endian}, and {@link
             *   module:Layout.ns64be|unsigned big-endian} encodings;
             * * 32-bit floating point values with {@link
             *   module:Layout.f32|little-endian} and {@link
             *   module:Layout.f32be|big-endian} representations;
             * * 64-bit floating point values with {@link
             *   module:Layout.f64|little-endian} and {@link
             *   module:Layout.f64be|big-endian} representations;
             * * {@link module:Layout.const|Constants} that take no space in the
             *   encoded expression.
             *
             * and for these aggregate types:
             * * {@link module:Layout.seq|Sequence}s of instances of a {@link
             *   module:Layout~Layout|Layout}, with JavaScript representation as
             *   an Array and constant or data-dependent {@link
             *   module:Layout~Sequence#count|length};
             * * {@link module:Layout.struct|Structure}s that aggregate a
             *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
             *   instances, with JavaScript representation as an Object;
             * * {@link module:Layout.union|Union}s that support multiple {@link
             *   module:Layout~VariantLayout|variant layouts} over a fixed
             *   (padded) or variable (not padded) span of bytes, using an
             *   unsigned integer at the start of the data or a separate {@link
             *   module:Layout.unionLayoutDiscriminator|layout element} to
             *   determine which layout to use when interpreting the buffer
             *   contents;
             * * {@link module:Layout.bits|BitStructure}s that contain a sequence
             *   of individual {@link
             *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
             *   16, 24, or 32-bit unsigned integer starting at the least- or
             *   most-significant bit;
             * * {@link module:Layout.cstr|C strings} of varying length;
             * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
             *   module:Layout~Blob#length|length} raw data.
             *
             * All {@link module:Layout~Layout|Layout} instances are immutable
             * after construction, to prevent internal state from becoming
             * inconsistent.
             *
             * @local Layout
             * @local ExternalLayout
             * @local GreedyCount
             * @local OffsetLayout
             * @local UInt
             * @local UIntBE
             * @local Int
             * @local IntBE
             * @local NearUInt64
             * @local NearUInt64BE
             * @local NearInt64
             * @local NearInt64BE
             * @local Float
             * @local FloatBE
             * @local Double
             * @local DoubleBE
             * @local Sequence
             * @local Structure
             * @local UnionDiscriminator
             * @local UnionLayoutDiscriminator
             * @local Union
             * @local VariantLayout
             * @local BitStructure
             * @local BitField
             * @local Boolean
             * @local Blob
             * @local CString
             * @local Constant
             * @local bindConstructorLayout
             * @module Layout
             * @license MIT
             * @author Peter A. Bigot
             * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
             */
            class i {
                constructor(e, t) {
                    if (!Number.isInteger(e)) throw TypeError("span must be an integer");
                    this.span = e, this.property = t
                }
                makeDestinationObject() {
                    return {}
                }
                decode(e, t) {
                    throw Error("Layout is abstract")
                }
                encode(e, t, r) {
                    throw Error("Layout is abstract")
                }
                getSpan(e, t) {
                    if (0 > this.span) throw RangeError("indeterminate span");
                    return this.span
                }
                replicate(e) {
                    let t = Object.create(this.constructor.prototype);
                    return Object.assign(t, this), t.property = e, t
                }
                fromArray(e) {}
            }

            function o(e, t) {
                return t.property ? e + "[" + t.property + "]" : e
            }

            function s(e, t) {
                if ("function" != typeof e) throw TypeError("Class must be constructor");
                if (e.hasOwnProperty("layout_")) throw Error("Class is already bound to a layout");
                if (!(t && t instanceof i)) throw TypeError("layout must be a Layout");
                if (t.hasOwnProperty("boundConstructor_")) throw Error("layout is already bound to a constructor");
                e.layout_ = t, t.boundConstructor_ = e, t.makeDestinationObject = () => new e, Object.defineProperty(e.prototype, "encode", {
                    value: function(e, r) {
                        return t.encode(this, e, r)
                    },
                    writable: !0
                }), Object.defineProperty(e, "decode", {
                    value: function(e, r) {
                        return t.decode(e, r)
                    },
                    writable: !0
                })
            }
            t.Layout = i, t.nameWithProperty = o, t.bindConstructorLayout = s;
            class a extends i {
                isCount() {
                    throw Error("ExternalLayout is abstract")
                }
            }
            class u extends a {
                constructor(e, t) {
                    if (void 0 === e && (e = 1), !Number.isInteger(e) || 0 >= e) throw TypeError("elementSpan must be a (positive) integer");
                    super(-1, t), this.elementSpan = e
                }
                isCount() {
                    return !0
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), Math.floor((e.length - t) / this.elementSpan)
                }
                encode(e, t, r) {
                    return 0
                }
            }
            class l extends a {
                constructor(e, t, r) {
                    if (!(e instanceof i)) throw TypeError("layout must be a Layout");
                    if (void 0 === t) t = 0;
                    else if (!Number.isInteger(t)) throw TypeError("offset must be integer or undefined");
                    super(e.span, r || e.property), this.layout = e, this.offset = t
                }
                isCount() {
                    return this.layout instanceof c || this.layout instanceof f
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), this.layout.decode(e, t + this.offset)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), this.layout.encode(e, t, r + this.offset)
                }
            }
            class c extends i {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readUIntLE(t, this.span)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeUIntLE(e, r, this.span), this.span
                }
            }
            class f extends i {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readUIntBE(t, this.span)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeUIntBE(e, r, this.span), this.span
                }
            }
            class d extends i {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readIntLE(t, this.span)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeIntLE(e, r, this.span), this.span
                }
            }
            class h extends i {
                constructor(e, t) {
                    if (super(e, t), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readIntBE(t, this.span)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeIntBE(e, r, this.span), this.span
                }
            }
            let p = 4294967296;

            function g(e) {
                let t = Math.floor(e / p),
                    r = e - t * p;
                return {
                    hi32: t,
                    lo32: r
                }
            }

            function y(e, t) {
                return e * p + t
            }
            class m extends i {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t) {
                    void 0 === t && (t = 0);
                    let r = e.readUInt32LE(t);
                    return y(e.readUInt32LE(t + 4), r)
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = g(e);
                    return t.writeUInt32LE(n.lo32, r), t.writeUInt32LE(n.hi32, r + 4), 8
                }
            }
            class v extends i {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), y(e.readUInt32BE(t), e.readUInt32BE(t + 4))
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = g(e);
                    return t.writeUInt32BE(n.hi32, r), t.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            class b extends i {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t) {
                    void 0 === t && (t = 0);
                    let r = e.readUInt32LE(t);
                    return y(e.readInt32LE(t + 4), r)
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = g(e);
                    return t.writeUInt32LE(n.lo32, r), t.writeInt32LE(n.hi32, r + 4), 8
                }
            }
            class w extends i {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), y(e.readInt32BE(t), e.readUInt32BE(t + 4))
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = g(e);
                    return t.writeInt32BE(n.hi32, r), t.writeUInt32BE(n.lo32, r + 4), 8
                }
            }
            class E extends i {
                constructor(e) {
                    super(4, e)
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readFloatLE(t)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeFloatLE(e, r), 4
                }
            }
            class O extends i {
                constructor(e) {
                    super(4, e)
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readFloatBE(t)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeFloatBE(e, r), 4
                }
            }
            class x extends i {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readDoubleLE(t)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeDoubleLE(e, r), 8
                }
            }
            class S extends i {
                constructor(e) {
                    super(8, e)
                }
                decode(e, t) {
                    return void 0 === t && (t = 0), e.readDoubleBE(t)
                }
                encode(e, t, r) {
                    return void 0 === r && (r = 0), t.writeDoubleBE(e, r), 8
                }
            }
            class P extends i {
                constructor(e, t, r) {
                    if (!(e instanceof i)) throw TypeError("elementLayout must be a Layout");
                    if (!(t instanceof a && t.isCount() || Number.isInteger(t) && 0 <= t)) throw TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                    let n = -1;
                    t instanceof a || !(0 < e.span) || (n = t * e.span), super(n, r), this.elementLayout = e, this.count = t
                }
                getSpan(e, t) {
                    if (0 <= this.span) return this.span;
                    void 0 === t && (t = 0);
                    let r = 0,
                        n = this.count;
                    if (n instanceof a && (n = n.decode(e, t)), 0 < this.elementLayout.span) r = n * this.elementLayout.span;
                    else {
                        let i = 0;
                        for (; i < n;) r += this.elementLayout.getSpan(e, t + r), ++i
                    }
                    return r
                }
                decode(e, t) {
                    void 0 === t && (t = 0);
                    let r = [],
                        n = 0,
                        i = this.count;
                    for (i instanceof a && (i = i.decode(e, t)); n < i;) r.push(this.elementLayout.decode(e, t)), t += this.elementLayout.getSpan(e, t), n += 1;
                    return r
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = this.elementLayout,
                        i = e.reduce((e, i) => e + n.encode(i, t, r + e), 0);
                    return this.count instanceof a && this.count.encode(e.length, t, r), i
                }
            }
            class R extends i {
                constructor(e, t, r) {
                    if (!(Array.isArray(e) && e.reduce((e, t) => e && t instanceof i, !0))) throw TypeError("fields must be array of Layout instances");
                    for (let n of ("boolean" == typeof t && void 0 === r && (r = t, t = void 0), e))
                        if (0 > n.span && void 0 === n.property) throw Error("fields cannot contain unnamed variable-length layout");
                    let n = -1;
                    try {
                        n = e.reduce((e, t) => e + t.getSpan(), 0)
                    } catch (e) {}
                    super(n, t), this.fields = e, this.decodePrefixes = !!r
                }
                getSpan(e, t) {
                    if (0 <= this.span) return this.span;
                    void 0 === t && (t = 0);
                    let r = 0;
                    try {
                        r = this.fields.reduce((r, n) => {
                            let i = n.getSpan(e, t);
                            return t += i, r + i
                        }, 0)
                    } catch (e) {
                        throw RangeError("indeterminate span")
                    }
                    return r
                }
                decode(e, t) {
                    void 0 === t && (t = 0);
                    let r = this.makeDestinationObject();
                    for (let n of this.fields)
                        if (void 0 !== n.property && (r[n.property] = n.decode(e, t)), t += n.getSpan(e, t), this.decodePrefixes && e.length === t) break;
                    return r
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = r,
                        i = 0,
                        o = 0;
                    for (let n of this.fields) {
                        let s = n.span;
                        if (o = 0 < s ? s : 0, void 0 !== n.property) {
                            let i = e[n.property];
                            void 0 !== i && (o = n.encode(i, t, r), 0 > s && (s = n.getSpan(t, r)))
                        }
                        i = r, r += s
                    }
                    return i + o - n
                }
                fromArray(e) {
                    let t = this.makeDestinationObject();
                    for (let r of this.fields) void 0 !== r.property && 0 < e.length && (t[r.property] = e.shift());
                    return t
                }
                layoutFor(e) {
                    if ("string" != typeof e) throw TypeError("property must be string");
                    for (let t of this.fields)
                        if (t.property === e) return t
                }
                offsetOf(e) {
                    if ("string" != typeof e) throw TypeError("property must be string");
                    let t = 0;
                    for (let r of this.fields) {
                        if (r.property === e) return t;
                        0 > r.span ? t = -1 : 0 <= t && (t += r.span)
                    }
                }
            }
            class _ {
                constructor(e) {
                    this.property = e
                }
                decode() {
                    throw Error("UnionDiscriminator is abstract")
                }
                encode() {
                    throw Error("UnionDiscriminator is abstract")
                }
            }
            class C extends _ {
                constructor(e, t) {
                    if (!(e instanceof a && e.isCount())) throw TypeError("layout must be an unsigned integer ExternalLayout");
                    super(t || e.property || "variant"), this.layout = e
                }
                decode(e, t) {
                    return this.layout.decode(e, t)
                }
                encode(e, t, r) {
                    return this.layout.encode(e, t, r)
                }
            }
            class j extends i {
                constructor(e, t, r) {
                    let n = e instanceof c || e instanceof f;
                    if (n) e = new C(new l(e));
                    else if (e instanceof a && e.isCount()) e = new C(e);
                    else if (!(e instanceof _)) throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                    if (void 0 === t && (t = null), !(null === t || t instanceof i)) throw TypeError("defaultLayout must be null or a Layout");
                    if (null !== t) {
                        if (0 > t.span) throw Error("defaultLayout must have constant span");
                        void 0 === t.property && (t = t.replicate("content"))
                    }
                    let o = -1;
                    t && 0 <= (o = t.span) && n && (o += e.layout.span), super(o, r), this.discriminator = e, this.usesPrefixDiscriminator = n, this.defaultLayout = t, this.registry = {};
                    let s = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(e) {
                        return s(e)
                    }, this.configGetSourceVariant = function(e) {
                        s = e.bind(this)
                    }
                }
                getSpan(e, t) {
                    if (0 <= this.span) return this.span;
                    void 0 === t && (t = 0);
                    let r = this.getVariant(e, t);
                    if (!r) throw Error("unable to determine span for unrecognized variant");
                    return r.getSpan(e, t)
                }
                defaultGetSourceVariant(e) {
                    if (e.hasOwnProperty(this.discriminator.property)) {
                        if (this.defaultLayout && e.hasOwnProperty(this.defaultLayout.property)) return;
                        let t = this.registry[e[this.discriminator.property]];
                        if (t && (!t.layout || e.hasOwnProperty(t.property))) return t
                    } else
                        for (let t in this.registry) {
                            let r = this.registry[t];
                            if (e.hasOwnProperty(r.property)) return r
                        }
                    throw Error("unable to infer src variant")
                }
                decode(e, t) {
                    let r;
                    void 0 === t && (t = 0);
                    let n = this.discriminator,
                        i = n.decode(e, t),
                        o = this.registry[i];
                    if (void 0 === o) {
                        let s = 0;
                        o = this.defaultLayout, this.usesPrefixDiscriminator && (s = n.layout.span), (r = this.makeDestinationObject())[n.property] = i, r[o.property] = this.defaultLayout.decode(e, t + s)
                    } else r = o.decode(e, t);
                    return r
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = this.getSourceVariant(e);
                    if (void 0 === n) {
                        let n = this.discriminator,
                            i = this.defaultLayout,
                            o = 0;
                        return this.usesPrefixDiscriminator && (o = n.layout.span), n.encode(e[n.property], t, r), o + i.encode(e[i.property], t, r + o)
                    }
                    return n.encode(e, t, r)
                }
                addVariant(e, t, r) {
                    let n = new I(this, e, t, r);
                    return this.registry[e] = n, n
                }
                getVariant(e, t) {
                    let r = e;
                    return n.isBuffer(e) && (void 0 === t && (t = 0), r = this.discriminator.decode(e, t)), this.registry[r]
                }
            }
            class I extends i {
                constructor(e, t, r, n) {
                    if (!(e instanceof j)) throw TypeError("union must be a Union");
                    if (!Number.isInteger(t) || 0 > t) throw TypeError("variant must be a (non-negative) integer");
                    if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                        if (!(r instanceof i)) throw TypeError("layout must be a Layout");
                        if (null !== e.defaultLayout && 0 <= r.span && r.span > e.defaultLayout.span) throw Error("variant span exceeds span of containing union");
                        if ("string" != typeof n) throw TypeError("variant must have a String property")
                    }
                    let o = e.span;
                    0 > e.span && 0 <= (o = r ? r.span : 0) && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span), super(o, n), this.union = e, this.variant = t, this.layout = r || null
                }
                getSpan(e, t) {
                    if (0 <= this.span) return this.span;
                    void 0 === t && (t = 0);
                    let r = 0;
                    return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span), r + this.layout.getSpan(e, t + r)
                }
                decode(e, t) {
                    let r = this.makeDestinationObject();
                    if (void 0 === t && (t = 0), this !== this.union.getVariant(e, t)) throw Error("variant mismatch");
                    let n = 0;
                    return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(e, t + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = 0;
                    if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !e.hasOwnProperty(this.property)) throw TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, t, r);
                    let i = n;
                    if (this.layout && (this.layout.encode(e[this.property], t, r + n), i += this.layout.getSpan(t, r + n), 0 <= this.union.span && i > this.union.span)) throw Error("encoded variant overruns containing union");
                    return i
                }
                fromArray(e) {
                    if (this.layout) return this.layout.fromArray(e)
                }
            }

            function A(e) {
                return 0 > e && (e += 4294967296), e
            }
            class L extends i {
                constructor(e, t, r) {
                    if (!(e instanceof c || e instanceof f)) throw TypeError("word must be a UInt or UIntBE layout");
                    if ("string" == typeof t && void 0 === r && (r = t, t = void 0), 4 < e.span) throw RangeError("word cannot exceed 32 bits");
                    super(e.span, r), this.word = e, this.msb = !!t, this.fields = [];
                    let n = 0;
                    this._packedSetValue = function(e) {
                        return n = A(e), this
                    }, this._packedGetValue = function() {
                        return n
                    }
                }
                decode(e, t) {
                    let r = this.makeDestinationObject();
                    void 0 === t && (t = 0);
                    let n = this.word.decode(e, t);
                    for (let e of (this._packedSetValue(n), this.fields)) void 0 !== e.property && (r[e.property] = e.decode(n));
                    return r
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0);
                    let n = this.word.decode(t, r);
                    for (let t of (this._packedSetValue(n), this.fields))
                        if (void 0 !== t.property) {
                            let r = e[t.property];
                            void 0 !== r && t.encode(r)
                        }
                    return this.word.encode(this._packedGetValue(), t, r)
                }
                addField(e, t) {
                    let r = new M(this, e, t);
                    return this.fields.push(r), r
                }
                addBoolean(e) {
                    let t = new k(this, e);
                    return this.fields.push(t), t
                }
                fieldFor(e) {
                    if ("string" != typeof e) throw TypeError("property must be string");
                    for (let t of this.fields)
                        if (t.property === e) return t
                }
            }
            class M {
                constructor(e, t, r) {
                    if (!(e instanceof L)) throw TypeError("container must be a BitStructure");
                    if (!Number.isInteger(t) || 0 >= t) throw TypeError("bits must be positive integer");
                    let n = 8 * e.span,
                        i = e.fields.reduce((e, t) => e + t.bits, 0);
                    if (t + i > n) throw Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                    this.container = e, this.bits = t, this.valueMask = (1 << t) - 1, 32 === t && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = n - i - t), this.wordMask = A(this.valueMask << this.start), this.property = r
                }
                decode() {
                    return A(this.container._packedGetValue() & this.wordMask) >>> this.start
                }
                encode(e) {
                    if (!Number.isInteger(e) || e !== A(e & this.valueMask)) throw TypeError(o("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                    let t = this.container._packedGetValue(),
                        r = A(e << this.start);
                    this.container._packedSetValue(A(t & ~this.wordMask) | r)
                }
            }
            class k extends M {
                constructor(e, t) {
                    super(e, 1, t)
                }
                decode(e, t) {
                    return !!M.prototype.decode.call(this, e, t)
                }
                encode(e) {
                    return "boolean" == typeof e && (e = +e), M.prototype.encode.call(this, e)
                }
            }
            class N extends i {
                constructor(e, t) {
                    if (!(e instanceof a && e.isCount() || Number.isInteger(e) && 0 <= e)) throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let r = -1;
                    e instanceof a || (r = e), super(r, t), this.length = e
                }
                getSpan(e, t) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(e, t)), r
                }
                decode(e, t) {
                    void 0 === t && (t = 0);
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(e, t)), e.slice(t, t + r)
                }
                encode(e, t, r) {
                    let i = this.length;
                    if (this.length instanceof a && (i = e.length), !(n.isBuffer(e) && i === e.length)) throw TypeError(o("Blob.encode", this) + " requires (length " + i + ") Buffer as src");
                    if (r + i > t.length) throw RangeError("encoding overruns Buffer");
                    return t.write(e.toString("hex"), r, i, "hex"), this.length instanceof a && this.length.encode(i, t, r), i
                }
            }
            class T extends i {
                constructor(e) {
                    super(-1, e)
                }
                getSpan(e, t) {
                    if (!n.isBuffer(e)) throw TypeError("b must be a Buffer");
                    void 0 === t && (t = 0);
                    let r = t;
                    for (; r < e.length && 0 !== e[r];) r += 1;
                    return 1 + r - t
                }
                decode(e, t, r) {
                    void 0 === t && (t = 0);
                    let n = this.getSpan(e, t);
                    return e.slice(t, t + n - 1).toString("utf-8")
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0), "string" != typeof e && (e = e.toString());
                    let i = new n(e, "utf8"),
                        o = i.length;
                    if (r + o > t.length) throw RangeError("encoding overruns Buffer");
                    return i.copy(t, r), t[r + o] = 0, o + 1
                }
            }
            class F extends i {
                constructor(e, t) {
                    if ("string" == typeof e && void 0 === t && (t = e, e = void 0), void 0 === e) e = -1;
                    else if (!Number.isInteger(e)) throw TypeError("maxSpan must be an integer");
                    super(-1, t), this.maxSpan = e
                }
                getSpan(e, t) {
                    if (!n.isBuffer(e)) throw TypeError("b must be a Buffer");
                    return void 0 === t && (t = 0), e.length - t
                }
                decode(e, t, r) {
                    void 0 === t && (t = 0);
                    let n = this.getSpan(e, t);
                    if (0 <= this.maxSpan && this.maxSpan < n) throw RangeError("text length exceeds maxSpan");
                    return e.slice(t, t + n).toString("utf-8")
                }
                encode(e, t, r) {
                    void 0 === r && (r = 0), "string" != typeof e && (e = e.toString());
                    let i = new n(e, "utf8"),
                        o = i.length;
                    if (0 <= this.maxSpan && this.maxSpan < o) throw RangeError("text length exceeds maxSpan");
                    if (r + o > t.length) throw RangeError("encoding overruns Buffer");
                    return i.copy(t, r), o
                }
            }
            class U extends i {
                constructor(e, t) {
                    super(0, t), this.value = e
                }
                decode(e, t, r) {
                    return this.value
                }
                encode(e, t, r) {
                    return 0
                }
            }
            t.ExternalLayout = a, t.GreedyCount = u, t.OffsetLayout = l, t.UInt = c, t.UIntBE = f, t.Int = d, t.IntBE = h, t.Float = E, t.FloatBE = O, t.Double = x, t.DoubleBE = S, t.Sequence = P, t.Structure = R, t.UnionDiscriminator = _, t.UnionLayoutDiscriminator = C, t.Union = j, t.VariantLayout = I, t.BitStructure = L, t.BitField = M, t.Boolean = k, t.Blob = N, t.CString = T, t.UTF8 = F, t.Constant = U, t.greedy = (e, t) => new u(e, t), t.offset = (e, t, r) => new l(e, t, r), t.u8 = e => new c(1, e), t.u16 = e => new c(2, e), t.u24 = e => new c(3, e), t.u32 = e => new c(4, e), t.u40 = e => new c(5, e), t.u48 = e => new c(6, e), t.nu64 = e => new m(e), t.u16be = e => new f(2, e), t.u24be = e => new f(3, e), t.u32be = e => new f(4, e), t.u40be = e => new f(5, e), t.u48be = e => new f(6, e), t.nu64be = e => new v(e), t.s8 = e => new d(1, e), t.s16 = e => new d(2, e), t.s24 = e => new d(3, e), t.s32 = e => new d(4, e), t.s40 = e => new d(5, e), t.s48 = e => new d(6, e), t.ns64 = e => new b(e), t.s16be = e => new h(2, e), t.s24be = e => new h(3, e), t.s32be = e => new h(4, e), t.s40be = e => new h(5, e), t.s48be = e => new h(6, e), t.ns64be = e => new w(e), t.f32 = e => new E(e), t.f32be = e => new O(e), t.f64 = e => new x(e), t.f64be = e => new S(e), t.struct = (e, t, r) => new R(e, t, r), t.bits = (e, t, r) => new L(e, t, r), t.seq = (e, t, r) => new P(e, t, r), t.union = (e, t, r) => new j(e, t, r), t.unionLayoutDiscriminator = (e, t) => new C(e, t), t.blob = (e, t) => new N(e, t), t.cstr = e => new T(e), t.utf8 = (e, t) => new F(e, t), t.const = (e, t) => new U(e, t)
        },
        32741: function(e, t, r) {
            "use strict";
            var n;

            function i(e, t) {
                void 0 === t && (t = "0");
                var r, n = 0,
                    i = -1;
                "-" != e[0] || l(e = e.substring(1)) || (n++, i = 1, e.length), "-" != t[0] || l(t = t.substring(1)) || (n++, i = 2, t.length), e = s(e), t = s(t), e = (r = a(s(e), s(t)))[0], t = r[1], 1 == n && (1 === i ? e = o(e) : 2 === i && (t = o(t)));
                var c = u(e, t);
                return n ? 2 == n ? "-" + s(c) : e.length < c.length ? s(c.substring(1)) : "-" + s(o(c)) : s(c)
            }

            function o(e) {
                if (l(e)) return e;
                for (var t = "", r = e.length, n = e.split(".")[1], i = n ? n.length : 0, o = 0; o < r; o++) e[o] >= "0" && e[o] <= "9" ? t += 9 - parseInt(e[o]) : t += e[o];
                return u(t, i > 0 ? "0." + Array(i).join("0") + "1" : "1")
            }

            function s(e) {
                var t = e.split(".");
                for (t[0] || (t[0] = "0");
                    "0" == t[0][0] && t[0].length > 1;) t[0] = t[0].substring(1);
                return t[0] + (t[1] ? "." + t[1] : "")
            }

            function a(e, t) {
                var r = e.split("."),
                    n = t.split("."),
                    i = r[0].length,
                    o = n[0].length;
                return i > o ? n[0] = Array(Math.abs(i - o) + 1).join("0") + (n[0] ? n[0] : "") : r[0] = Array(Math.abs(i - o) + 1).join("0") + (r[0] ? r[0] : ""), i = r[1] ? r[1].length : 0, o = n[1] ? n[1].length : 0, (i || o) && (i > o ? n[1] = (n[1] ? n[1] : "") + Array(Math.abs(i - o) + 1).join("0") : r[1] = (r[1] ? r[1] : "") + Array(Math.abs(i - o) + 1).join("0")), [e = r[0] + (r[1] ? "." + r[1] : ""), t = n[0] + (n[1] ? "." + n[1] : "")]
            }

            function u(e, t) {
                e = (r = a(e, t))[0], t = r[1];
                for (var r, n = "", i = 0, o = e.length - 1; o >= 0; o--) {
                    if ("." === e[o]) {
                        n = "." + n;
                        continue
                    }
                    var s = parseInt(e[o]) + parseInt(t[o]) + i;
                    n = s % 10 + n, i = Math.floor(s / 10)
                }
                return i ? i.toString() + n : n
            }

            function l(e) {
                return /^0[0]*[.]{0,1}[0]*$/.test(e)
            }

            function c(e) {
                return (("number" == typeof e || "bigint" == typeof e) && (e = e.toString()), "-" == e[0]) ? e.substring(1) : e
            }

            function f(e, t, r) {
                if (void 0 === t && (t = 0), void 0 === r && (r = n.HALF_EVEN), r === n.UNNECESSARY) throw Error("UNNECESSARY Rounding Mode has not yet been implemented");
                ("number" == typeof e || "bigint" == typeof e) && (e = e.toString());
                var i = !1;
                "-" === e[0] && (i = !0, e = e.substring(1));
                var o = e.split("."),
                    s = o[0],
                    a = o[1];
                if (t < 0) {
                    if (t = -t, s.length <= t) return "0";
                    var u = s.substr(0, s.length - t);
                    return (i ? "-" : "") + (u = f(e = u + "." + s.substr(s.length - t) + a, 0, r)) + Array(t + 1).join("0")
                }
                if (0 == t) return s.length, d(o[1], s, i, r) && (s = h(s)), (i && parseInt(s) ? "-" : "") + s;
                if (!o[1]) return (i ? "-" : "") + s + "." + Array(t + 1).join("0");
                if (o[1].length < t) return (i ? "-" : "") + s + "." + o[1] + Array(t - o[1].length + 1).join("0");
                a = o[1].substring(0, t);
                var l = o[1].substring(t);
                return l && d(l, a, i, r) && (a = h(a)).length > t ? (i ? "-" : "") + h(s, parseInt(a[0])) + "." + a.substring(1) : (i && (parseInt(s) || parseInt(a)) ? "-" : "") + s + "." + a
            }

            function d(e, t, r, i) {
                if (!e || e === Array(e.length + 1).join("0") || i === n.DOWN || !r && i === n.FLOOR || r && i === n.CEILING) return !1;
                if (i === n.UP || r && i === n.FLOOR || !r && i === n.CEILING) return !0;
                var o = "5" + Array(e.length).join("0");
                if (e > o) return !0;
                if (e < o) return !1;
                switch (i) {
                    case n.HALF_DOWN:
                        return !1;
                    case n.HALF_UP:
                        return !0;
                    case n.HALF_EVEN:
                    default:
                        return parseInt(t[t.length - 1]) % 2 == 1
                }
            }

            function h(e, t) {
                void 0 === t && (t = 0), t || (t = 1), "number" == typeof e && e.toString();
                for (var r = e.length - 1, n = "", i = r; i >= 0; i--) {
                    var o = parseInt(e[i]) + t;
                    10 == o ? (t = 1, o = 0) : t = 0, n += o
                }
                return t && (n += t), n.split("").reverse().join("")
            }

            function p(e) {
                var t = "-" === e[0];
                for (t && (e = e.substr(1));
                    "0" == e[0];) e = e.substr(1);
                if (-1 != e.indexOf("."))
                    for (;
                        "0" == e[e.length - 1];) e = e.substr(0, e.length - 1);
                return "" == e || "." == e ? e = "0" : "." == e[e.length - 1] && (e = e.substr(0, e.length - 1)), "." == e[0] && (e = "0" + e), t && "0" != e && (e = "-" + e), e
            }

            function g(e, t) {
                e = e.toString(), t = t.toString();
                var r = 0;
                "-" == e[0] && (r++, e = e.substr(1)), "-" == t[0] && (r++, t = t.substr(1)), e = p(e), t = p(t);
                var n = 0,
                    i = 0; - 1 != e.indexOf(".") && (n = e.length - e.indexOf(".") - 1), -1 != t.indexOf(".") && (i = t.length - t.indexOf(".") - 1);
                var o = n + i;
                if (e = p(e.replace(".", "")), t = p(t.replace(".", "")), e.length < t.length) {
                    var s = e;
                    e = t, t = s
                }
                if ("0" == t) return "0";
                for (var a = t.length, u = 0, l = [], c = a - 1, f = "", d = 0; d < a; d++) l[d] = e.length - 1;
                for (var d = 0; d < 2 * e.length; d++) {
                    for (var h = 0, g = t.length - 1; g >= c && g >= 0; g--) l[g] > -1 && l[g] < e.length && (h += parseInt(e[l[g]--]) * parseInt(t[g]));
                    h += u, u = Math.floor(h / 10), f = h % 10 + f, c--
                }
                return f = p(y(f, o)), 1 == r && (f = "-" + f), f
            }

            function y(e, t) {
                return 0 == t ? e : (e = t >= e.length ? Array(t - e.length + 1).join("0") + e : e).substr(0, e.length - t) + "." + e.substr(e.length - t, t)
            }

            function m(e, t, r) {
                if (void 0 === r && (r = 8), 0 == t) throw Error("Cannot divide by 0");
                if (e = e.toString(), t = t.toString(), e = e.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, ""), t = t.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, ""), 0 == e) return "0";
                var n = 0;
                "-" == t[0] && (t = t.substring(1), n++), "-" == e[0] && (e = e.substring(1), n++);
                var o = t.indexOf(".") > 0 ? t.length - t.indexOf(".") - 1 : -1;
                if (t = s(t.replace(".", "")), o >= 0) {
                    var a = e.indexOf(".") > 0 ? e.length - e.indexOf(".") - 1 : -1;
                    if (-1 == a) e = s(e + Array(o + 1).join("0"));
                    else if (o > a) e = s((e = e.replace(".", "")) + Array(o - a + 1).join("0"));
                    else if (o < a) {
                        var u = (e = e.replace(".", "")).length - a + o;
                        e = s(e.substring(0, u) + "." + e.substring(u))
                    } else o == a && (e = s(e.replace(".", "")))
                }
                var l = 0,
                    c = t.length,
                    d = "",
                    h = e.indexOf(".") > -1 && e.indexOf(".") < c ? e.substring(0, c + 1) : e.substring(0, c);
                if (e = e.indexOf(".") > -1 && e.indexOf(".") < c ? e.substring(c + 1) : e.substring(c), h.indexOf(".") > -1) {
                    var p = h.length - h.indexOf(".") - 1;
                    c > (h = h.replace(".", "")).length && (p += c - h.length, h += Array(c - h.length + 1).join("0")), l = p, d = "0." + Array(p).join("0")
                }
                for (r += 2; l <= r;) {
                    for (var g = 0; parseInt(h) >= parseInt(t);) h = i(h, "-" + t), g++;
                    d += g, e ? ("." == e[0] && (d += ".", l++, e = e.substring(1)), h += e.substring(0, 1), e = e.substring(1)) : (l || (d += "."), l++, h += "0")
                }
                return (1 == n ? "-" : "") + s(f(d, r - 2))
            }

            function v(e, t) {
                return i(e = e.toString(), t = b(t = t.toString()))
            }

            function b(e) {
                return e = "-" == e[0] ? e.substr(1) : "-" + e
            }

            function w(e, t) {
                if (0 == t) throw Error("Cannot divide by 0");
                e = e.toString(), t = t.toString(), E(e), E(t);
                var r = "";
                return "-" == e[0] && (r = "-", e = e.substr(1)), "-" == t[0] && (t = t.substr(1)), r + v(e, g(t, f(m(e, t), 0, n.FLOOR)))
            }

            function E(e) {
                if (-1 != e.indexOf(".")) throw Error("Modulus of non-integers not supported")
            }

            function O(e, t) {
                var r, n, i = !1;
                if (e = (r = [e, t].map(function(e) {
                        return p(e)
                    }))[0], t = r[1], "-" == e[0] && "-" != t[0]) return -1;
                if ("-" != e[0] && "-" == t[0]) return 1;
                if ("-" == e[0] && "-" == t[0] && (e = e.substr(1), t = t.substr(1), i = !0), e = (n = a(e, t))[0], t = n[1], 0 == e.localeCompare(t)) return 0;
                for (var o = 0; o < e.length; o++)
                    if (e[o] != t[o]) {
                        if (e[o] > t[o]) {
                            if (i) return -1;
                            return 1
                        }
                        if (i) return 1;
                        return -1
                    }
                return 0
            }! function(e) {
                e[e.CEILING = 0] = "CEILING", e[e.DOWN = 1] = "DOWN", e[e.FLOOR = 2] = "FLOOR", e[e.HALF_DOWN = 3] = "HALF_DOWN", e[e.HALF_EVEN = 4] = "HALF_EVEN", e[e.HALF_UP = 5] = "HALF_UP", e[e.UNNECESSARY = 6] = "UNNECESSARY", e[e.UP = 7] = "UP"
            }(n || (n = {})),
            function() {
                function e(t) {
                    void 0 === t && (t = "0"), this.value = e.validate(t)
                }
                e.validate = function(e) {
                    if (e) {
                        if (isNaN(e = e.toString())) throw Error("Parameter is not a number: " + e);
                        "+" == e[0] && (e = e.substring(1))
                    } else e = "0";
                    if (e.startsWith(".") ? e = "0" + e : e.startsWith("-.") && (e = "-0" + e.substr(1)), /e/i.test(e)) {
                        var t = e.split(/[eE]/),
                            r = t[0],
                            n = t[1];
                        r = s(r);
                        var i = "";
                        "-" == r[0] && (i = "-", r = r.substring(1)), r.indexOf(".") >= 0 ? (n = parseInt(n) + r.indexOf("."), r = r.replace(".", "")) : n = parseInt(n) + r.length, e = r.length < n ? i + r + Array(n - r.length + 1).join("0") : r.length >= n && n > 0 ? i + s(r.substring(0, n)) + (r.length > n ? "." + r.substring(n) : "") : i + "0." + Array(-n + 1).join("0") + r
                    }
                    return e
                }, e.prototype.getValue = function() {
                    return this.value
                }, e.prototype.setValue = function(t) {
                    this.value = e.validate(t)
                }, e.getPrettyValue = function(t, r, n) {
                    void 0 === r && (r = 3), void 0 === n && (n = ",");
                    var i = "-" == (t = e.validate(t)).charAt(0);
                    i && (t = t.substring(1));
                    var o = t.indexOf(".");
                    o = o > 0 ? o : t.length;
                    for (var s = "", a = o; a > 0;) a < r ? (r = a, a = 0) : a -= r, s = t.substring(a, a + r) + (a < o - r && a >= 0 ? n : "") + s;
                    return (i ? "-" : "") + s + t.substring(o)
                }, e.prototype.getPrettyValue = function(t, r) {
                    return void 0 === t && (t = 3), void 0 === r && (r = ","), e.getPrettyValue(this.value, t, r)
                }, e.round = function(t, r, i) {
                    if (void 0 === r && (r = 0), void 0 === i && (i = n.HALF_EVEN), t = e.validate(t), isNaN(r)) throw Error("Precision is not a number: " + r);
                    return f(t, r, i)
                }, e.prototype.round = function(t, r) {
                    if (void 0 === t && (t = 0), void 0 === r && (r = n.HALF_EVEN), isNaN(t)) throw Error("Precision is not a number: " + t);
                    return new e(f(this.value, t, r))
                }, e.abs = function(t) {
                    return c(t = e.validate(t))
                }, e.prototype.abs = function() {
                    return new e(c(this.value))
                }, e.floor = function(t) {
                    return -1 === (t = e.validate(t)).indexOf(".") ? t : e.round(t, 0, n.FLOOR)
                }, e.prototype.floor = function() {
                    return -1 === this.value.indexOf(".") ? new e(this.value) : new e(this.value).round(0, n.FLOOR)
                }, e.ceil = function(t) {
                    return -1 === (t = e.validate(t)).indexOf(".") ? t : e.round(t, 0, n.CEILING)
                }, e.prototype.ceil = function() {
                    return -1 === this.value.indexOf(".") ? new e(this.value) : new e(this.value).round(0, n.CEILING)
                }, e.add = function(t, r) {
                    return i(t = e.validate(t), r = e.validate(r))
                }, e.prototype.add = function(t) {
                    return new e(i(this.value, t.getValue()))
                }, e.subtract = function(t, r) {
                    return v(t = e.validate(t), r = e.validate(r))
                }, e.prototype.subtract = function(t) {
                    return new e(v(this.value, t.getValue()))
                }, e.multiply = function(t, r) {
                    return g(t = e.validate(t), r = e.validate(r))
                }, e.prototype.multiply = function(t) {
                    return new e(g(this.value, t.getValue()))
                }, e.divide = function(t, r, n) {
                    return m(t = e.validate(t), r = e.validate(r), n)
                }, e.prototype.divide = function(t, r) {
                    return new e(m(this.value, t.getValue(), r))
                }, e.modulus = function(t, r) {
                    return w(t = e.validate(t), r = e.validate(r))
                }, e.prototype.modulus = function(t) {
                    return new e(w(this.value, t.getValue()))
                }, e.compareTo = function(t, r) {
                    return O(t = e.validate(t), r = e.validate(r))
                }, e.prototype.compareTo = function(e) {
                    return O(this.value, e.getValue())
                }, e.negate = function(t) {
                    return b(t = e.validate(t))
                }, e.prototype.negate = function() {
                    return new e(b(this.value))
                }, e.stripTrailingZero = function(t) {
                    return p(t = e.validate(t))
                }, e.prototype.stripTrailingZero = function() {
                    return new e(p(this.value))
                }, e.RoundingModes = n
            }()
        },
        75544: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__, process = __webpack_require__(25566);
            ! function() {
                "use strict";
                var ERROR = "input is invalid type",
                    WINDOW = "object" == typeof window,
                    root = WINDOW ? window : {};
                root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" == typeof self,
                    NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
                    AMD = __webpack_require__.amdO,
                    ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    HEX_CHARS = "0123456789abcdef".split(""),
                    EXTRA = [-2147483648, 8388608, 32768, 128],
                    SHIFT = [24, 16, 8, 0],
                    K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                    OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                    blocks = [];
                (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }), ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(e) {
                    return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                });
                var createOutputMethod = function(e, t) {
                        return function(r) {
                            return new Sha256(t, !0).update(r)[e]()
                        }
                    },
                    createMethod = function(e) {
                        var t = createOutputMethod("hex", e);
                        NODE_JS && (t = nodeWrap(t, e)), t.create = function() {
                            return new Sha256(e)
                        }, t.update = function(e) {
                            return t.create().update(e)
                        };
                        for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
                            var n = OUTPUT_TYPES[r];
                            t[n] = createOutputMethod(n, e)
                        }
                        return t
                    },
                    nodeWrap = function(method, is224) {
                        var crypto = eval("require('crypto')"),
                            Buffer = eval("require('buffer').Buffer"),
                            algorithm = is224 ? "sha224" : "sha256",
                            nodeMethod = function(e) {
                                if ("string" == typeof e) return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
                                if (null == e) throw Error(ERROR);
                                return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
                            };
                        return nodeMethod
                    },
                    createHmacOutputMethod = function(e, t) {
                        return function(r, n) {
                            return new HmacSha256(r, t, !0).update(n)[e]()
                        }
                    },
                    createHmacMethod = function(e) {
                        var t = createHmacOutputMethod("hex", e);
                        t.create = function(t) {
                            return new HmacSha256(t, e)
                        }, t.update = function(e, r) {
                            return t.create(e).update(r)
                        };
                        for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
                            var n = OUTPUT_TYPES[r];
                            t[n] = createHmacOutputMethod(n, e)
                        }
                        return t
                    };

                function Sha256(e, t) {
                    t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = e
                }

                function HmacSha256(e, t, r) {
                    var n, i = typeof e;
                    if ("string" === i) {
                        var o, s = [],
                            a = e.length,
                            u = 0;
                        for (n = 0; n < a; ++n)(o = e.charCodeAt(n)) < 128 ? s[u++] = o : (o < 2048 ? s[u++] = 192 | o >> 6 : (o < 55296 || o >= 57344 ? s[u++] = 224 | o >> 12 : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++n)), s[u++] = 240 | o >> 18, s[u++] = 128 | o >> 12 & 63), s[u++] = 128 | o >> 6 & 63), s[u++] = 128 | 63 & o);
                        e = s
                    } else if ("object" === i) {
                        if (null === e) throw Error(ERROR);
                        if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) throw Error(ERROR)
                    } else throw Error(ERROR);
                    e.length > 64 && (e = new Sha256(t, !0).update(e).array());
                    var l = [],
                        c = [];
                    for (n = 0; n < 64; ++n) {
                        var f = e[n] || 0;
                        l[n] = 92 ^ f, c[n] = 54 ^ f
                    }
                    Sha256.call(this, t, r), this.update(c), this.oKeyPad = l, this.inner = !0, this.sharedMemory = r
                }
                Sha256.prototype.update = function(e) {
                    if (!this.finalized) {
                        var t, r = typeof e;
                        if ("string" !== r) {
                            if ("object" === r) {
                                if (null === e) throw Error(ERROR);
                                if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) throw Error(ERROR)
                            } else throw Error(ERROR);
                            t = !0
                        }
                        for (var n, i, o = 0, s = e.length, a = this.blocks; o < s;) {
                            if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), t)
                                for (i = this.start; o < s && i < 64; ++o) a[i >> 2] |= e[o] << SHIFT[3 & i++];
                            else
                                for (i = this.start; o < s && i < 64; ++o)(n = e.charCodeAt(o)) < 128 ? a[i >> 2] |= n << SHIFT[3 & i++] : (n < 2048 ? a[i >> 2] |= (192 | n >> 6) << SHIFT[3 & i++] : (n < 55296 || n >= 57344 ? a[i >> 2] |= (224 | n >> 12) << SHIFT[3 & i++] : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++o)), a[i >> 2] |= (240 | n >> 18) << SHIFT[3 & i++], a[i >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & i++]), a[i >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & i++]), a[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]);
                            this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.block = a[16], this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                    }
                }, Sha256.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks,
                            t = this.lastByteIndex;
                        e[16] = this.block, e[t >> 2] |= EXTRA[3 & t], this.block = e[16], t >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
                    }
                }, Sha256.prototype.hash = function() {
                    var e, t, r, n, i, o, s, a, u, l, c, f = this.h0,
                        d = this.h1,
                        h = this.h2,
                        p = this.h3,
                        g = this.h4,
                        y = this.h5,
                        m = this.h6,
                        v = this.h7,
                        b = this.blocks;
                    for (e = 16; e < 64; ++e) t = ((i = b[e - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3, r = ((i = b[e - 2]) >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10, b[e] = b[e - 16] + t + b[e - 7] + r << 0;
                    for (e = 0, c = d & h; e < 64; e += 4) this.first ? (this.is224 ? (a = 300032, v = (i = b[0] - 1413257819) - 150054599 << 0, p = i + 24177077 << 0) : (a = 704751109, v = (i = b[0] - 210244248) - 1521486534 << 0, p = i + 143694565 << 0), this.first = !1) : (t = (f >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), r = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7), n = (a = f & d) ^ f & h ^ c, i = v + r + (s = g & y ^ ~g & m) + K[e] + b[e], o = t + n, v = p + i << 0, p = i + o << 0), t = (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10), r = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7), n = (u = p & f) ^ p & d ^ a, i = m + r + (s = v & g ^ ~v & y) + K[e + 1] + b[e + 1], o = t + n, m = h + i << 0, t = ((h = i + o << 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), r = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7), n = (l = h & p) ^ h & f ^ u, i = y + r + (s = m & v ^ ~m & g) + K[e + 2] + b[e + 2], o = t + n, y = d + i << 0, t = ((d = i + o << 0) >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), r = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7), n = (c = d & h) ^ d & p ^ l, i = g + r + (s = y & m ^ ~y & v) + K[e + 3] + b[e + 3], o = t + n, g = f + i << 0, f = i + o << 0;
                    this.h0 = this.h0 + f << 0, this.h1 = this.h1 + d << 0, this.h2 = this.h2 + h << 0, this.h3 = this.h3 + p << 0, this.h4 = this.h4 + g << 0, this.h5 = this.h5 + y << 0, this.h6 = this.h6 + m << 0, this.h7 = this.h7 + v << 0
                }, Sha256.prototype.hex = function() {
                    this.finalize();
                    var e = this.h0,
                        t = this.h1,
                        r = this.h2,
                        n = this.h3,
                        i = this.h4,
                        o = this.h5,
                        s = this.h6,
                        a = this.h7,
                        u = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s];
                    return this.is224 || (u += HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a]), u
                }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
                    this.finalize();
                    var e = this.h0,
                        t = this.h1,
                        r = this.h2,
                        n = this.h3,
                        i = this.h4,
                        o = this.h5,
                        s = this.h6,
                        a = this.h7,
                        u = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s];
                    return this.is224 || u.push(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a), u
                }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e = new ArrayBuffer(this.is224 ? 28 : 32),
                        t = new DataView(e);
                    return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), t.setUint32(20, this.h5), t.setUint32(24, this.h6), this.is224 || t.setUint32(28, this.h7), e
                }, HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function() {
                    if (Sha256.prototype.finalize.call(this), this.inner) {
                        this.inner = !1;
                        var e = this.array();
                        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(e), Sha256.prototype.finalize.call(this)
                    }
                };
                var exports = createMethod();
                exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return exports
                }).call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            }()
        },
        66648: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return i.a
                }
            });
            var n = r(55601),
                i = r.n(n)
        },
        87138: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return i.a
                }
            });
            var n = r(231),
                i = r.n(n)
        },
        16463: function(e, t, r) {
            "use strict";
            var n = r(71169);
            r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            }), r.o(n, "useRouter") && r.d(t, {
                useRouter: function() {
                    return n.useRouter
                }
            })
        },
        844: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(18157);
            let n = function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return e
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        25944: function(e, t, r) {
            "use strict";

            function n(e, t, r, n) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(18157), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        38173: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let n = r(99920),
                i = r(41452),
                o = r(57437),
                s = i._(r(2265)),
                a = n._(r(54887)),
                u = n._(r(28321)),
                l = r(80497),
                c = r(7103),
                f = r(93938);
            r(72301);
            let d = r(60291),
                h = n._(r(21241)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function g(e, t, r, n, i, o, s) {
                let a = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                i = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(e)
                    }
                }))
            }

            function y(e) {
                let [t, r] = s.version.split(".", 2), n = parseInt(t, 10), i = parseInt(r, 10);
                return n > 18 || 18 === n && i >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let m = (0, s.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: i,
                    height: a,
                    width: u,
                    decoding: l,
                    className: c,
                    style: f,
                    fetchPriority: d,
                    placeholder: h,
                    loading: p,
                    unoptimized: m,
                    fill: v,
                    onLoadRef: b,
                    onLoadingCompleteRef: w,
                    setBlurComplete: E,
                    setShowAltText: O,
                    sizesInput: x,
                    onLoad: S,
                    onError: P,
                    ...R
                } = e;
                return (0, o.jsx)("img", { ...R,
                    ...y(d),
                    loading: p,
                    width: u,
                    height: a,
                    decoding: l,
                    "data-nimg": v ? "fill" : "1",
                    className: c,
                    style: f,
                    sizes: i,
                    srcSet: n,
                    src: r,
                    ref: (0, s.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (P && (e.src = e.src), e.complete && g(e, h, b, w, E, m, x))
                    }, [r, h, b, w, E, P, m, x, t]),
                    onLoad: e => {
                        g(e.currentTarget, h, b, w, E, m, x)
                    },
                    onError: e => {
                        O(!0), "empty" !== h && E(!0), P && P(e)
                    }
                })
            });

            function v(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...y(r.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(r.src, n), null) : (0, o.jsx)(u.default, {
                    children: (0, o.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let b = (0, s.forwardRef)((e, t) => {
                let r = !(0, s.useContext)(d.RouterContext),
                    n = (0, s.useContext)(f.ImageConfigContext),
                    i = (0, s.useMemo)(() => {
                        let e = p || n || c.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            r = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: r
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: u
                    } = e,
                    g = (0, s.useRef)(a);
                (0, s.useEffect)(() => {
                    g.current = a
                }, [a]);
                let y = (0, s.useRef)(u);
                (0, s.useEffect)(() => {
                    y.current = u
                }, [u]);
                let [b, w] = (0, s.useState)(!1), [E, O] = (0, s.useState)(!1), {
                    props: x,
                    meta: S
                } = (0, l.getImgProps)(e, {
                    defaultLoader: h.default,
                    imgConf: i,
                    blurComplete: b,
                    showAltText: E
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(m, { ...x,
                        unoptimized: S.unoptimized,
                        placeholder: S.placeholder,
                        fill: S.fill,
                        onLoadRef: g,
                        onLoadingCompleteRef: y,
                        setBlurComplete: w,
                        setShowAltText: O,
                        sizesInput: e.sizes,
                        ref: t
                    }), S.priority ? (0, o.jsx)(v, {
                        isAppRouter: r,
                        imgAttributes: x
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        231: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let n = r(99920),
                i = r(57437),
                o = n._(r(2265)),
                s = r(98016),
                a = r(18029),
                u = r(41142),
                l = r(43461),
                c = r(844),
                f = r(60291),
                d = r(44467),
                h = r(53106),
                p = r(25944),
                g = r(4897),
                y = r(51507),
                m = new Set;

            function v(e, t, r, n, i, o) {
                if ("undefined" != typeof window && (o || (0, a.isLocalURL)(t))) {
                    if (!n.bypassPrefetchedCheck) {
                        let i = t + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0);
                        if (m.has(i)) return;
                        m.add(i)
                    }
                    Promise.resolve(o ? e.prefetch(t, i) : e.prefetch(t, r, n)).catch(e => {})
                }
            }

            function b(e) {
                let t = e.currentTarget.getAttribute("target");
                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
            }

            function w(e, t, r, n, i, s, u, l, c) {
                let {
                    nodeName: f
                } = e.currentTarget;
                if ("A" === f.toUpperCase() && (b(e) || !c && !(0, a.isLocalURL)(r))) return;
                e.preventDefault();
                let d = () => {
                    let e = null == u || u;
                    "beforePopState" in t ? t[i ? "replace" : "push"](r, n, {
                        shallow: s,
                        locale: l,
                        scroll: e
                    }) : t[i ? "replace" : "push"](n || r, {
                        scroll: e
                    })
                };
                c ? o.default.startTransition(d) : d()
            }

            function E(e) {
                return "string" == typeof e ? e : (0, u.formatUrl)(e)
            }
            let O = o.default.forwardRef(function(e, t) {
                let r, n;
                let {
                    href: a,
                    as: u,
                    children: m,
                    prefetch: b = null,
                    passHref: O,
                    replace: x,
                    shallow: S,
                    scroll: P,
                    locale: R,
                    onClick: _,
                    onMouseEnter: C,
                    onTouchStart: j,
                    legacyBehavior: I = !1,
                    ...A
                } = e;
                r = m, I && ("string" == typeof r || "number" == typeof r) && (r = (0, i.jsx)("a", {
                    children: r
                }));
                let L = o.default.useContext(f.RouterContext),
                    M = o.default.useContext(d.AppRouterContext),
                    k = null != L ? L : M,
                    N = !L,
                    T = !1 !== b,
                    F = null === b ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
                    {
                        href: U,
                        as: D
                    } = o.default.useMemo(() => {
                        if (!L) {
                            let e = E(a);
                            return {
                                href: e,
                                as: u ? E(u) : e
                            }
                        }
                        let [e, t] = (0, s.resolveHref)(L, a, !0);
                        return {
                            href: e,
                            as: u ? (0, s.resolveHref)(L, u) : t || e
                        }
                    }, [L, a, u]),
                    B = o.default.useRef(U),
                    z = o.default.useRef(D);
                I && (n = o.default.Children.only(r));
                let V = I ? n && "object" == typeof n && n.ref : t,
                    [W, H, Q] = (0, h.useIntersection)({
                        rootMargin: "200px"
                    }),
                    q = o.default.useCallback(e => {
                        (z.current !== D || B.current !== U) && (Q(), z.current = D, B.current = U), W(e), V && ("function" == typeof V ? V(e) : "object" == typeof V && (V.current = e))
                    }, [D, V, U, Q, W]);
                o.default.useEffect(() => {
                    k && H && T && v(k, U, D, {
                        locale: R
                    }, {
                        kind: F
                    }, N)
                }, [D, U, H, R, T, null == L ? void 0 : L.locale, k, N, F]);
                let G = {
                    ref: q,
                    onClick(e) {
                        I || "function" != typeof _ || _(e), I && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), k && !e.defaultPrevented && w(e, k, U, D, x, S, P, R, N)
                    },
                    onMouseEnter(e) {
                        I || "function" != typeof C || C(e), I && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), k && (T || !N) && v(k, U, D, {
                            locale: R,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: F
                        }, N)
                    },
                    onTouchStart: function(e) {
                        I || "function" != typeof j || j(e), I && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), k && (T || !N) && v(k, U, D, {
                            locale: R,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: F
                        }, N)
                    }
                };
                if ((0, l.isAbsoluteUrl)(D)) G.href = D;
                else if (!I || O || "a" === n.type && !("href" in n.props)) {
                    let e = void 0 !== R ? R : null == L ? void 0 : L.locale,
                        t = (null == L ? void 0 : L.isLocaleDomain) && (0, p.getDomainLocale)(D, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                    G.href = t || (0, g.addBasePath)((0, c.addLocale)(D, e, null == L ? void 0 : L.defaultLocale))
                }
                return I ? o.default.cloneElement(n, G) : (0, i.jsx)("a", { ...A,
                    ...G,
                    children: r
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        49189: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    cancelIdleCallback: function() {
                        return n
                    },
                    requestIdleCallback: function() {
                        return r
                    }
                });
            let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
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
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        98016: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let n = r(18323),
                i = r(41142),
                o = r(45519),
                s = r(43461),
                a = r(18157),
                u = r(18029),
                l = r(59195),
                c = r(80020);

            function f(e, t, r) {
                let f;
                let d = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
                    h = d.match(/^[a-zA-Z]{1,}:\/\//),
                    p = h ? d.slice(h[0].length) : d;
                if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + d + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let t = (0, s.normalizeRepeatedSlashes)(p);
                    d = (h ? h[0] : "") + t
                }
                if (!(0, u.isLocalURL)(d)) return r ? [d] : d;
                try {
                    f = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n")
                } catch (e) {
                    f = new URL("/", "http://n")
                }
                try {
                    let e = new URL(d, f);
                    e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
                    let t = "";
                    if ((0, l.isDynamicRoute)(e.pathname) && e.searchParams && r) {
                        let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
                            {
                                result: s,
                                params: a
                            } = (0, c.interpolateAs)(e.pathname, e.pathname, r);
                        s && (t = (0, i.formatWithValidation)({
                            pathname: s,
                            hash: e.hash,
                            query: (0, o.omit)(r, a)
                        }))
                    }
                    let s = e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
                    return r ? [s, t || s] : s
                } catch (e) {
                    return r ? [d] : d
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        53106: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            let n = r(2265),
                i = r(49189),
                o = "function" == typeof IntersectionObserver,
                s = new Map,
                a = [];

            function u(e) {
                let t;
                let r = {
                        root: e.root || null,
                        margin: e.rootMargin || ""
                    },
                    n = a.find(e => e.root === r.root && e.margin === r.margin);
                if (n && (t = s.get(n))) return t;
                let i = new Map;
                return t = {
                    id: r,
                    observer: new IntersectionObserver(e => {
                        e.forEach(e => {
                            let t = i.get(e.target),
                                r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r)
                        })
                    }, e),
                    elements: i
                }, a.push(r), s.set(r, t), t
            }

            function l(e, t, r) {
                let {
                    id: n,
                    observer: i,
                    elements: o
                } = u(r);
                return o.set(e, t), i.observe(e),
                    function() {
                        if (o.delete(e), i.unobserve(e), 0 === o.size) {
                            i.disconnect(), s.delete(n);
                            let e = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                            e > -1 && a.splice(e, 1)
                        }
                    }
            }

            function c(e) {
                let {
                    rootRef: t,
                    rootMargin: r,
                    disabled: s
                } = e, a = s || !o, [u, c] = (0, n.useState)(!1), f = (0, n.useRef)(null), d = (0, n.useCallback)(e => {
                    f.current = e
                }, []);
                return (0, n.useEffect)(() => {
                    if (o) {
                        if (a || u) return;
                        let e = f.current;
                        if (e && e.tagName) return l(e, e => e && c(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: r
                        })
                    } else if (!u) {
                        let e = (0, i.requestIdleCallback)(() => c(!0));
                        return () => (0, i.cancelIdleCallback)(e)
                    }
                }, [a, r, t, u, f.current]), [d, u, (0, n.useCallback)(() => {
                    c(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        82901: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(99920)._(r(2265)).default.createContext({})
        },
        40687: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === e ? {} : e;
                return t || r && n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        81943: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = /[|\\{}()[\]^$+*?.-]/,
                n = /[|\\{}()[\]^$+*?.-]/g;

            function i(e) {
                return r.test(e) ? e.replace(n, "\\$&") : e
            }
        },
        80497: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return f
                }
            }), r(72301);
            let n = r(51564),
                i = r(7103);

            function o(e) {
                return void 0 !== e.default
            }

            function s(e) {
                return void 0 !== e.src
            }

            function a(e) {
                return "object" == typeof e && (o(e) || s(e))
            }

            function u(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function l(e, t, r) {
                let {
                    deviceSizes: n,
                    allSizes: i
                } = e;
                if (r) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                        t = [];
                    for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                    if (t.length) {
                        let e = .01 * Math.min(...t);
                        return {
                            widths: i.filter(t => t >= n[0] * e),
                            kind: "w"
                        }
                    }
                    return {
                        widths: i,
                        kind: "w"
                    }
                }
                return "number" != typeof t ? {
                    widths: n,
                    kind: "w"
                } : {
                    widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                    kind: "x"
                }
            }

            function c(e) {
                let {
                    config: t,
                    src: r,
                    unoptimized: n,
                    width: i,
                    quality: o,
                    sizes: s,
                    loader: a
                } = e;
                if (n) return {
                    src: r,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: u,
                    kind: c
                } = l(t, i, s), f = u.length - 1;
                return {
                    sizes: s || "w" !== c ? s : "100vw",
                    srcSet: u.map((e, n) => a({
                        config: t,
                        src: r,
                        quality: o,
                        width: e
                    }) + " " + ("w" === c ? e : n + 1) + c).join(", "),
                    src: a({
                        config: t,
                        src: r,
                        quality: o,
                        width: u[f]
                    })
                }
            }

            function f(e, t) {
                let r, s, l, {
                        src: f,
                        sizes: d,
                        unoptimized: h = !1,
                        priority: p = !1,
                        loading: g,
                        className: y,
                        quality: m,
                        width: v,
                        height: b,
                        fill: w = !1,
                        style: E,
                        overrideSrc: O,
                        onLoad: x,
                        onLoadingComplete: S,
                        placeholder: P = "empty",
                        blurDataURL: R,
                        fetchPriority: _,
                        layout: C,
                        objectFit: j,
                        objectPosition: I,
                        lazyBoundary: A,
                        lazyRoot: L,
                        ...M
                    } = e,
                    {
                        imgConf: k,
                        showAltText: N,
                        blurComplete: T,
                        defaultLoader: F
                    } = t,
                    U = k || i.imageConfigDefault;
                if ("allSizes" in U) r = U;
                else {
                    let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
                        t = U.deviceSizes.sort((e, t) => e - t);
                    r = { ...U,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                if (void 0 === F) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let D = M.loader || F;
                delete M.loader, delete M.srcSet;
                let B = "__next_img_default" in D;
                if (B) {
                    if ("custom" === r.loader) throw Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = D;
                    D = t => {
                        let {
                            config: r,
                            ...n
                        } = t;
                        return e(n)
                    }
                }
                if (C) {
                    "fill" === C && (w = !0);
                    let e = {
                            responsive: "100vw",
                            fill: "100vw"
                        },
                        t = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[C];
                    t && (E = { ...E,
                        ...t
                    });
                    let r = e[C];
                    r && !d && (d = r)
                }
                let z = "",
                    V = u(v),
                    W = u(b);
                if (a(f)) {
                    let e = o(f) ? f.default : f;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (s = e.blurWidth, l = e.blurHeight, R = R || e.blurDataURL, z = e.src, !w) {
                        if (V || W) {
                            if (V && !W) {
                                let t = V / e.width;
                                W = Math.round(e.height * t)
                            } else if (!V && W) {
                                let t = W / e.height;
                                V = Math.round(e.width * t)
                            }
                        } else V = e.width, W = e.height
                    }
                }
                let H = !p && ("lazy" === g || void 0 === g);
                (!(f = "string" == typeof f ? f : z) || f.startsWith("data:") || f.startsWith("blob:")) && (h = !0, H = !1), r.unoptimized && (h = !0), B && f.endsWith(".svg") && !r.dangerouslyAllowSVG && (h = !0), p && (_ = "high");
                let Q = u(m),
                    q = Object.assign(w ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: j,
                        objectPosition: I
                    } : {}, N ? {} : {
                        color: "transparent"
                    }, E),
                    G = T || "empty" === P ? null : "blur" === P ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: V,
                        heightInt: W,
                        blurWidth: s,
                        blurHeight: l,
                        blurDataURL: R || "",
                        objectFit: q.objectFit
                    }) + '")' : 'url("' + P + '")',
                    $ = G ? {
                        backgroundSize: q.objectFit || "cover",
                        backgroundPosition: q.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: G
                    } : {},
                    Y = c({
                        config: r,
                        src: f,
                        unoptimized: h,
                        width: V,
                        quality: Q,
                        sizes: d,
                        loader: D
                    });
                return {
                    props: { ...M,
                        loading: H ? "lazy" : g,
                        fetchPriority: _,
                        width: V,
                        height: W,
                        decoding: "async",
                        className: y,
                        style: { ...q,
                            ...$
                        },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: O || Y.src
                    },
                    meta: {
                        unoptimized: h,
                        priority: p,
                        placeholder: P,
                        fill: w
                    }
                }
            }
        },
        28321: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return y
                    },
                    defaultHead: function() {
                        return f
                    }
                });
            let n = r(99920),
                i = r(41452),
                o = r(57437),
                s = i._(r(2265)),
                a = n._(r(65960)),
                u = r(82901),
                l = r(36590),
                c = r(40687);

            function f(e) {
                void 0 === e && (e = !1);
                let t = [(0, o.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push((0, o.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function d(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(72301);
            let h = ["name", "httpEquiv", "charSet", "itemProp"];

            function p() {
                let e = new Set,
                    t = new Set,
                    r = new Set,
                    n = {};
                return i => {
                    let o = !0,
                        s = !1;
                    if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                        s = !0;
                        let t = i.key.slice(i.key.indexOf("$") + 1);
                        e.has(t) ? o = !1 : e.add(t)
                    }
                    switch (i.type) {
                        case "title":
                        case "base":
                            t.has(i.type) ? o = !1 : t.add(i.type);
                            break;
                        case "meta":
                            for (let e = 0, t = h.length; e < t; e++) {
                                let t = h[e];
                                if (i.props.hasOwnProperty(t)) {
                                    if ("charSet" === t) r.has(t) ? o = !1 : r.add(t);
                                    else {
                                        let e = i.props[t],
                                            r = n[t] || new Set;
                                        ("name" !== t || !s) && r.has(e) ? o = !1 : (r.add(e), n[t] = r)
                                    }
                                }
                            }
                    }
                    return o
                }
            }

            function g(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(d, []).reverse().concat(f(r).reverse()).filter(p()).reverse().map((e, t) => {
                    let n = e.key || t;
                    if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, s.default.cloneElement(e, t)
                    }
                    return s.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            let y = function(e) {
                let {
                    children: t
                } = e, r = (0, s.useContext)(u.AmpStateContext), n = (0, s.useContext)(l.HeadManagerContext);
                return (0, o.jsx)(a.default, {
                    reduceComponentsToState: g,
                    headManager: n,
                    inAmpMode: (0, c.isInAmpMode)(r),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        51564: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: i,
                    blurDataURL: o,
                    objectFit: s
                } = e, a = n ? 40 * n : t, u = i ? 40 * i : r, l = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "", c = l ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + l + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + c + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        93938: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(99920)._(r(2265)),
                i = r(7103),
                o = n.default.createContext(i.imageConfigDefault)
        },
        7103: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return r
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        55601: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return u
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let n = r(99920),
                i = r(80497),
                o = r(38173),
                s = n._(r(21241));

            function a(e) {
                let {
                    props: t
                } = (0, i.getImgProps)(e, {
                    defaultLoader: s.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let u = o.Image
        },
        21241: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    config: t,
                    src: r,
                    width: n,
                    quality: i
                } = e;
                return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        60291: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(99920)._(r(2265)).default.createContext(null)
        },
        41142: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    formatUrl: function() {
                        return o
                    },
                    formatWithValidation: function() {
                        return a
                    },
                    urlObjectKeys: function() {
                        return s
                    }
                });
            let n = r(41452)._(r(18323)),
                i = /https?|ftp|gopher|file/;

            function o(e) {
                let {
                    auth: t,
                    hostname: r
                } = e, o = e.protocol || "", s = e.pathname || "", a = e.hash || "", u = e.query || "", l = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? l = t + e.host : r && (l = t + (~r.indexOf(":") ? "[" + r + "]" : r), e.port && (l += ":" + e.port)), u && "object" == typeof u && (u = String(n.urlQueryToSearchParams(u)));
                let c = e.search || u && "?" + u || "";
                return o && !o.endsWith(":") && (o += ":"), e.slashes || (!o || i.test(o)) && !1 !== l ? (l = "//" + (l || ""), s && "/" !== s[0] && (s = "/" + s)) : l || (l = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), "" + o + l + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
            }
            let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(e) {
                return o(e)
            }
        },
        59195: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    getSortedRoutes: function() {
                        return n.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return i.isDynamicRoute
                    }
                });
            let n = r(49089),
                i = r(28083)
        },
        80020: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(41533),
                i = r(63169);

            function o(e, t, r) {
                let o = "",
                    s = (0, i.getRouteRegex)(e),
                    a = s.groups,
                    u = (t !== e ? (0, n.getRouteMatcher)(s)(t) : "") || r;
                o = e;
                let l = Object.keys(a);
                return l.every(e => {
                    let t = u[e] || "",
                        {
                            repeat: r,
                            optional: n
                        } = a[e],
                        i = "[" + (r ? "..." : "") + e + "]";
                    return n && (i = (t ? "" : "/") + "[" + i + "]"), r && !Array.isArray(t) && (t = [t]), (n || e in u) && (o = o.replace(i, r ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
                }) || (o = ""), {
                    params: l,
                    result: o
                }
            }
        },
        28083: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(82269),
                i = /\/\[[^/]+?\](?=\/|$)/;

            function o(e) {
                return (0, n.isInterceptionRouteAppPath)(e) && (e = (0, n.extractInterceptionRouteInformation)(e).interceptedRoute), i.test(e)
            }
        },
        18029: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(43461),
                i = r(49404);

            function o(e) {
                if (!(0, n.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, n.getLocationOrigin)(),
                        r = new URL(e, t);
                    return r.origin === t && (0, i.hasBasePath)(r.pathname)
                } catch (e) {
                    return !1
                }
            }
        },
        45519: function(e, t) {
            "use strict";

            function r(e, t) {
                let r = {};
                return Object.keys(e).forEach(n => {
                    t.includes(n) || (r[n] = e[n])
                }), r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "omit", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        18323: function(e, t) {
            "use strict";

            function r(e) {
                let t = {};
                return e.forEach((e, r) => {
                    void 0 === t[r] ? t[r] = e : Array.isArray(t[r]) ? t[r].push(e) : t[r] = [t[r], e]
                }), t
            }

            function n(e) {
                return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }

            function i(e) {
                let t = new URLSearchParams;
                return Object.entries(e).forEach(e => {
                    let [r, i] = e;
                    Array.isArray(i) ? i.forEach(e => t.append(r, n(e))) : t.set(r, n(i))
                }), t
            }

            function o(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return r.forEach(t => {
                    Array.from(t.keys()).forEach(t => e.delete(t)), t.forEach((t, r) => e.append(r, t))
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    assign: function() {
                        return o
                    },
                    searchParamsToUrlQuery: function() {
                        return r
                    },
                    urlQueryToSearchParams: function() {
                        return i
                    }
                })
        },
        41533: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(43461);

            function i(e) {
                let {
                    re: t,
                    groups: r
                } = e;
                return e => {
                    let i = t.exec(e);
                    if (!i) return !1;
                    let o = e => {
                            try {
                                return decodeURIComponent(e)
                            } catch (e) {
                                throw new n.DecodeError("failed to decode param")
                            }
                        },
                        s = {};
                    return Object.keys(r).forEach(e => {
                        let t = r[e],
                            n = i[t.pos];
                        void 0 !== n && (s[e] = ~n.indexOf("/") ? n.split("/").map(e => o(e)) : t.repeat ? [o(n)] : o(n))
                    }), s
                }
            }
        },
        63169: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    getNamedMiddlewareRegex: function() {
                        return g
                    },
                    getNamedRouteRegex: function() {
                        return p
                    },
                    getRouteRegex: function() {
                        return c
                    }
                });
            let n = r(82269),
                i = r(81943),
                o = r(67741),
                s = "nxtP",
                a = "nxtI";

            function u(e) {
                let t = e.startsWith("[") && e.endsWith("]");
                t && (e = e.slice(1, -1));
                let r = e.startsWith("...");
                return r && (e = e.slice(3)), {
                    key: e,
                    repeat: r,
                    optional: t
                }
            }

            function l(e) {
                let t = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
                    r = {},
                    s = 1;
                return {
                    parameterizedRoute: t.map(e => {
                        let t = n.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t)),
                            o = e.match(/\[((?:\[.*\])|.+)\]/);
                        if (t && o) {
                            let {
                                key: e,
                                optional: n,
                                repeat: a
                            } = u(o[1]);
                            return r[e] = {
                                pos: s++,
                                repeat: a,
                                optional: n
                            }, "/" + (0, i.escapeStringRegexp)(t) + "([^/]+?)"
                        }
                        if (!o) return "/" + (0, i.escapeStringRegexp)(e); {
                            let {
                                key: e,
                                repeat: t,
                                optional: n
                            } = u(o[1]);
                            return r[e] = {
                                pos: s++,
                                repeat: t,
                                optional: n
                            }, t ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: r
                }
            }

            function c(e) {
                let {
                    parameterizedRoute: t,
                    groups: r
                } = l(e);
                return {
                    re: RegExp("^" + t + "(?:/)?$"),
                    groups: r
                }
            }

            function f() {
                let e = 0;
                return () => {
                    let t = "",
                        r = ++e;
                    for (; r > 0;) t += String.fromCharCode(97 + (r - 1) % 26), r = Math.floor((r - 1) / 26);
                    return t
                }
            }

            function d(e) {
                let {
                    interceptionMarker: t,
                    getSafeRouteKey: r,
                    segment: n,
                    routeKeys: o,
                    keyPrefix: s
                } = e, {
                    key: a,
                    optional: l,
                    repeat: c
                } = u(n), f = a.replace(/\W/g, "");
                s && (f = "" + s + f);
                let d = !1;
                (0 === f.length || f.length > 30) && (d = !0), isNaN(parseInt(f.slice(0, 1))) || (d = !0), d && (f = r()), s ? o[f] = "" + s + a : o[f] = a;
                let h = t ? (0, i.escapeStringRegexp)(t) : "";
                return c ? l ? "(?:/" + h + "(?<" + f + ">.+?))?" : "/" + h + "(?<" + f + ">.+?)" : "/" + h + "(?<" + f + ">[^/]+?)"
            }

            function h(e, t) {
                let r = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
                    u = f(),
                    l = {};
                return {
                    namedParameterizedRoute: r.map(e => {
                        let r = n.INTERCEPTION_ROUTE_MARKERS.some(t => e.startsWith(t)),
                            o = e.match(/\[((?:\[.*\])|.+)\]/);
                        if (r && o) {
                            let [r] = e.split(o[0]);
                            return d({
                                getSafeRouteKey: u,
                                interceptionMarker: r,
                                segment: o[1],
                                routeKeys: l,
                                keyPrefix: t ? a : void 0
                            })
                        }
                        return o ? d({
                            getSafeRouteKey: u,
                            segment: o[1],
                            routeKeys: l,
                            keyPrefix: t ? s : void 0
                        }) : "/" + (0, i.escapeStringRegexp)(e)
                    }).join(""),
                    routeKeys: l
                }
            }

            function p(e, t) {
                let r = h(e, t);
                return { ...c(e),
                    namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: r.routeKeys
                }
            }

            function g(e, t) {
                let {
                    parameterizedRoute: r
                } = l(e), {
                    catchAll: n = !0
                } = t;
                if ("/" === r) return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: i
                } = h(e, !1);
                return {
                    namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        49089: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class r {
                insert(e) {
                    this._insert(e.split("/").filter(Boolean), [], !1)
                }
                smoosh() {
                    return this._smoosh()
                }
                _smoosh(e) {
                    void 0 === e && (e = "/");
                    let t = [...this.children.keys()].sort();
                    null !== this.slugName && t.splice(t.indexOf("[]"), 1), null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
                    let r = t.map(t => this.children.get(t)._smoosh("" + e + t + "/")).reduce((e, t) => [...e, ...t], []);
                    if (null !== this.slugName && r.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")), !this.placeholder) {
                        let t = "/" === e ? "/" : e.slice(0, -1);
                        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
                        r.unshift(t)
                    }
                    return null !== this.restSlugName && r.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")), r
                }
                _insert(e, t, n) {
                    if (0 === e.length) {
                        this.placeholder = !1;
                        return
                    }
                    if (n) throw Error("Catch-all must be the last part of the URL.");
                    let i = e[0];
                    if (i.startsWith("[") && i.endsWith("]")) {
                        let r = i.slice(1, -1),
                            s = !1;
                        if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1), s = !0), r.startsWith("...") && (r = r.substring(3), n = !0), r.startsWith("[") || r.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
                        if (r.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + r + "').");

                        function o(e, r) {
                            if (null !== e && e !== r) throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + r + "').");
                            t.forEach(e => {
                                if (e === r) throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                                if (e.replace(/\W/g, "") === i.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + e + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
                            }), t.push(r)
                        }
                        if (n) {
                            if (s) {
                                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
                                o(this.optionalRestSlugName, r), this.optionalRestSlugName = r, i = "[[...]]"
                            } else {
                                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
                                o(this.restSlugName, r), this.restSlugName = r, i = "[...]"
                            }
                        } else {
                            if (s) throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
                            o(this.slugName, r), this.slugName = r, i = "[]"
                        }
                    }
                    this.children.has(i) || this.children.set(i, new r), this.children.get(i)._insert(e.slice(1), t, n)
                }
                constructor() {
                    this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
            }

            function n(e) {
                let t = new r;
                return e.forEach(e => t.insert(e)), t.smoosh()
            }
        },
        65960: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(2265),
                i = "undefined" == typeof window,
                o = i ? () => {} : n.useLayoutEffect,
                s = i ? () => {} : n.useEffect;

            function a(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function a() {
                    if (t && t.mountedInstances) {
                        let i = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(i, e))
                    }
                }
                if (i) {
                    var u;
                    null == t || null == (u = t.mountedInstances) || u.add(e.children), a()
                }
                return o(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), o(() => (t && (t._pendingUpdate = a), () => {
                    t && (t._pendingUpdate = a)
                })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        43461: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    DecodeError: function() {
                        return p
                    },
                    MiddlewareNotFoundError: function() {
                        return v
                    },
                    MissingStaticPage: function() {
                        return m
                    },
                    NormalizeError: function() {
                        return g
                    },
                    PageNotFoundError: function() {
                        return y
                    },
                    SP: function() {
                        return d
                    },
                    ST: function() {
                        return h
                    },
                    WEB_VITALS: function() {
                        return r
                    },
                    execOnce: function() {
                        return n
                    },
                    getDisplayName: function() {
                        return u
                    },
                    getLocationOrigin: function() {
                        return s
                    },
                    getURL: function() {
                        return a
                    },
                    isAbsoluteUrl: function() {
                        return o
                    },
                    isResSent: function() {
                        return l
                    },
                    loadGetInitialProps: function() {
                        return f
                    },
                    normalizeRepeatedSlashes: function() {
                        return c
                    },
                    stringifyError: function() {
                        return b
                    }
                });
            let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function n(e) {
                let t, r = !1;
                return function() {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return r || (r = !0, t = e(...i)), t
                }
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                o = e => i.test(e);

            function s() {
                let {
                    protocol: e,
                    hostname: t,
                    port: r
                } = window.location;
                return e + "//" + t + (r ? ":" + r : "")
            }

            function a() {
                let {
                    href: e
                } = window.location, t = s();
                return e.substring(t.length)
            }

            function u(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function l(e) {
                return e.finished || e.headersSent
            }

            function c(e) {
                let t = e.split("?");
                return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }
            async function f(e, t) {
                let r = t.res || t.ctx && t.ctx.res;
                if (!e.getInitialProps) return t.ctx && t.Component ? {
                    pageProps: await f(t.Component, t.ctx)
                } : {};
                let n = await e.getInitialProps(t);
                if (r && l(r)) return n;
                if (!n) throw Error('"' + u(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
                return n
            }
            let d = "undefined" != typeof performance,
                h = d && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
            class p extends Error {}
            class g extends Error {}
            class y extends Error {
                constructor(e) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
                }
            }
            class m extends Error {
                constructor(e, t) {
                    super(), this.message = "Failed to load static file for page: " + e + " " + t
                }
            }
            class v extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function b(e) {
                return JSON.stringify({
                    message: e.message,
                    stack: e.stack
                })
            }
        },
        58488: function() {},
        56800: function(e, t) {
            var r;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        r && (e = s(e, o(r)))
                    }
                    return e
                }

                function o(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return i.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var r in e) n.call(e, r) && e[r] && (t = s(t, r));
                    return t
                }

                function s(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 !== (r = (function() {
                    return i
                }).apply(t, [])) && (e.exports = r)
            }()
        },
        55573: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                u: function() {
                    return W
                }
            });
            var i = r(2265),
                o = r(99299),
                s = r(6584),
                a = r(61463);

            function u() {
                let e = (0, i.useRef)(!1);
                return (0, a.e)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, r] = (0, i.useState)(e),
                    n = u(),
                    o = (0, i.useCallback)(e => {
                        n.current && r(t => t | e)
                    }, [t, n]),
                    s = (0, i.useCallback)(e => !!(t & e), [t]);
                return {
                    flags: t,
                    addFlag: o,
                    hasFlag: s,
                    removeFlag: (0, i.useCallback)(e => {
                        n.current && r(t => t & ~e)
                    }, [r, n]),
                    toggleFlag: (0, i.useCallback)(e => {
                        n.current && r(t => t ^ e)
                    }, [r])
                }
            }
            var c = r(88703),
                f = r(33856),
                d = r(41469),
                h = r(81694),
                p = r(5583);

            function g(e) {
                let t = {
                    called: !1
                };
                return function() {
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    if (!t.called) return t.called = !0, e(...n)
                }
            }

            function y(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                e && r.length > 0 && e.classList.add(...r)
            }

            function m(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                e && r.length > 0 && e.classList.remove(...r)
            }

            function v(e, t) {
                let r = (0, h.k)();
                if (!e) return r.dispose;
                let {
                    transitionDuration: n,
                    transitionDelay: i
                } = getComputedStyle(e), [o, s] = [n, i].map(e => {
                    let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                    return t
                }), a = o + s;
                if (0 !== a) {
                    r.group(r => {
                        r.setTimeout(() => {
                            t(), r.dispose()
                        }, a), r.addEventListener(e, "transitionrun", e => {
                            e.target === e.currentTarget && r.dispose()
                        })
                    });
                    let n = r.addEventListener(e, "transitionend", e => {
                        e.target === e.currentTarget && (t(), n())
                    })
                } else t();
                return r.add(() => t()), r.dispose
            }

            function b(e, t, r, n) {
                let i = r ? "enter" : "leave",
                    o = (0, h.k)(),
                    s = void 0 !== n ? g(n) : () => {};
                "enter" === i && (e.removeAttribute("hidden"), e.style.display = "");
                let a = (0, p.E)(i, {
                        enter: () => t.enter,
                        leave: () => t.leave
                    }),
                    u = (0, p.E)(i, {
                        enter: () => t.enterTo,
                        leave: () => t.leaveTo
                    }),
                    l = (0, p.E)(i, {
                        enter: () => t.enterFrom,
                        leave: () => t.leaveFrom
                    });
                return m(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), y(e, ...t.base, ...a, ...l), o.nextFrame(() => {
                    m(e, ...t.base, ...a, ...l), y(e, ...t.base, ...a, ...u), v(e, () => (m(e, ...t.base, ...a), y(e, ...t.base, ...t.entered), s()))
                }), o.dispose
            }

            function w(e) {
                let {
                    immediate: t,
                    container: r,
                    direction: n,
                    classes: i,
                    onStart: s,
                    onStop: l
                } = e, f = u(), d = (0, o.G)(), p = (0, c.E)(n);
                (0, a.e)(() => {
                    t && (p.current = "enter")
                }, [t]), (0, a.e)(() => {
                    let e = (0, h.k)();
                    d.add(e.dispose);
                    let t = r.current;
                    if (t && "idle" !== p.current && f.current) return e.dispose(), s.current(p.current), e.add(b(t, i.current, "enter" === p.current, () => {
                        e.dispose(), l.current(p.current)
                    })), e.dispose
                }, [n])
            }
            var E = r(53509),
                O = r(12585),
                x = r(3600);

            function S() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.split(/\s+/).filter(e => e.length > 1)
            }
            let P = (0, i.createContext)(null);
            P.displayName = "TransitionContext";
            var R = ((n = R || {}).Visible = "visible", n.Hidden = "hidden", n);

            function _() {
                let e = (0, i.useContext)(P);
                if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }

            function C() {
                let e = (0, i.useContext)(j);
                if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }
            let j = (0, i.createContext)(null);

            function I(e) {
                return "children" in e ? I(e.children) : e.current.filter(e => {
                    let {
                        el: t
                    } = e;
                    return null !== t.current
                }).filter(e => {
                    let {
                        state: t
                    } = e;
                    return "visible" === t
                }).length > 0
            }

            function A(e, t) {
                let r = (0, c.E)(e),
                    n = (0, i.useRef)([]),
                    a = u(),
                    l = (0, o.G)(),
                    f = (0, s.z)(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.l4.Hidden,
                            i = n.current.findIndex(t => {
                                let {
                                    el: r
                                } = t;
                                return r === e
                            }); - 1 !== i && ((0, p.E)(t, {
                            [x.l4.Unmount]() {
                                n.current.splice(i, 1)
                            },
                            [x.l4.Hidden]() {
                                n.current[i].state = "hidden"
                            }
                        }), l.microTask(() => {
                            var e;
                            !I(n) && a.current && (null == (e = r.current) || e.call(r))
                        }))
                    }),
                    d = (0, s.z)(e => {
                        let t = n.current.find(t => {
                            let {
                                el: r
                            } = t;
                            return r === e
                        });
                        return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
                            el: e,
                            state: "visible"
                        }), () => f(e, x.l4.Unmount)
                    }),
                    h = (0, i.useRef)([]),
                    g = (0, i.useRef)(Promise.resolve()),
                    y = (0, i.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    m = (0, s.z)((e, r, n) => {
                        h.current.splice(0), t && (t.chains.current[r] = t.chains.current[r].filter(t => {
                            let [r] = t;
                            return r !== e
                        })), null == t || t.chains.current[r].push([e, new Promise(e => {
                            h.current.push(e)
                        })]), null == t || t.chains.current[r].push([e, new Promise(e => {
                            Promise.all(y.current[r].map(e => {
                                let [t, r] = e;
                                return r
                            })).then(() => e())
                        })]), "enter" === r ? g.current = g.current.then(() => null == t ? void 0 : t.wait.current).then(() => n(r)) : n(r)
                    }),
                    v = (0, s.z)((e, t, r) => {
                        Promise.all(y.current[t].splice(0).map(e => {
                            let [t, r] = e;
                            return r
                        })).then(() => {
                            var e;
                            null == (e = h.current.shift()) || e()
                        }).then(() => r(t))
                    });
                return (0, i.useMemo)(() => ({
                    children: n,
                    register: d,
                    unregister: f,
                    onStart: m,
                    onStop: v,
                    wait: g,
                    chains: y
                }), [d, f, n, m, v, y, g])
            }

            function L() {}
            j.displayName = "NestingContext";
            let M = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function k(e) {
                var t;
                let r = {};
                for (let n of M) r[n] = null != (t = e[n]) ? t : L;
                return r
            }

            function N(e) {
                let t = (0, i.useRef)(k(e));
                return (0, i.useEffect)(() => {
                    t.current = k(e)
                }, [e]), t
            }
            let T = "div",
                F = x.AN.RenderStrategy;

            function U(e, t) {
                var r, n;
                let {
                    beforeEnter: o,
                    afterEnter: a,
                    beforeLeave: u,
                    afterLeave: h,
                    enter: g,
                    enterFrom: y,
                    enterTo: m,
                    entered: v,
                    leave: b,
                    leaveFrom: P,
                    leaveTo: R,
                    ...L
                } = e, M = (0, i.useRef)(null), k = (0, d.T)(M, t), U = null == (r = L.unmount) || r ? x.l4.Unmount : x.l4.Hidden, {
                    show: D,
                    appear: B,
                    initial: z
                } = _(), [V, W] = (0, i.useState)(D ? "visible" : "hidden"), H = C(), {
                    register: Q,
                    unregister: q
                } = H;
                (0, i.useEffect)(() => Q(M), [Q, M]), (0, i.useEffect)(() => {
                    if (U === x.l4.Hidden && M.current) {
                        if (D && "visible" !== V) {
                            W("visible");
                            return
                        }
                        return (0, p.E)(V, {
                            hidden: () => q(M),
                            visible: () => Q(M)
                        })
                    }
                }, [V, M, Q, q, D, U]);
                let G = (0, c.E)({
                        base: S(L.className),
                        enter: S(g),
                        enterFrom: S(y),
                        enterTo: S(m),
                        entered: S(v),
                        leave: S(b),
                        leaveFrom: S(P),
                        leaveTo: S(R)
                    }),
                    $ = N({
                        beforeEnter: o,
                        afterEnter: a,
                        beforeLeave: u,
                        afterLeave: h
                    }),
                    Y = (0, f.H)();
                (0, i.useEffect)(() => {
                    if (Y && "visible" === V && null === M.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }, [M, V, Y]);
                let Z = z && !B,
                    K = B && D && z,
                    J = !Y || Z ? "idle" : D ? "enter" : "leave",
                    X = l(0),
                    ee = (0, s.z)(e => (0, p.E)(e, {
                        enter: () => {
                            X.addFlag(E.ZM.Opening), $.current.beforeEnter()
                        },
                        leave: () => {
                            X.addFlag(E.ZM.Closing), $.current.beforeLeave()
                        },
                        idle: () => {}
                    })),
                    et = (0, s.z)(e => (0, p.E)(e, {
                        enter: () => {
                            X.removeFlag(E.ZM.Opening), $.current.afterEnter()
                        },
                        leave: () => {
                            X.removeFlag(E.ZM.Closing), $.current.afterLeave()
                        },
                        idle: () => {}
                    })),
                    er = A(() => {
                        W("hidden"), q(M)
                    }, H),
                    en = (0, i.useRef)(!1);
                w({
                    immediate: K,
                    container: M,
                    classes: G,
                    direction: J,
                    onStart: (0, c.E)(e => {
                        en.current = !0, er.onStart(M, e, ee)
                    }),
                    onStop: (0, c.E)(e => {
                        en.current = !1, er.onStop(M, e, et), "leave" !== e || I(er) || (W("hidden"), q(M))
                    })
                });
                let ei = L,
                    eo = {
                        ref: k
                    };
                return K ? ei = { ...ei,
                    className: (0, O.A)(L.className, ...G.current.enter, ...G.current.enterFrom)
                } : en.current && (ei.className = (0, O.A)(L.className, null == (n = M.current) ? void 0 : n.className), "" === ei.className && delete ei.className), i.createElement(j.Provider, {
                    value: er
                }, i.createElement(E.up, {
                    value: (0, p.E)(V, {
                        visible: E.ZM.Open,
                        hidden: E.ZM.Closed
                    }) | X.flags
                }, (0, x.sY)({
                    ourProps: eo,
                    theirProps: ei,
                    defaultTag: T,
                    features: F,
                    visible: "visible" === V,
                    name: "Transition.Child"
                })))
            }

            function D(e, t) {
                let {
                    show: r,
                    appear: n = !1,
                    unmount: o = !0,
                    ...u
                } = e, l = (0, i.useRef)(null), c = (0, d.T)(l, t);
                (0, f.H)();
                let h = (0, E.oJ)();
                if (void 0 === r && null !== h && (r = (h & E.ZM.Open) === E.ZM.Open), ![!0, !1].includes(r)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                let [p, g] = (0, i.useState)(r ? "visible" : "hidden"), y = A(() => {
                    g("hidden")
                }), [m, v] = (0, i.useState)(!0), b = (0, i.useRef)([r]);
                (0, a.e)(() => {
                    !1 !== m && b.current[b.current.length - 1] !== r && (b.current.push(r), v(!1))
                }, [b, r]);
                let w = (0, i.useMemo)(() => ({
                    show: r,
                    appear: n,
                    initial: m
                }), [r, n, m]);
                (0, i.useEffect)(() => {
                    if (r) g("visible");
                    else if (I(y)) {
                        let e = l.current;
                        if (!e) return;
                        let t = e.getBoundingClientRect();
                        0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && g("hidden")
                    } else g("hidden")
                }, [r, y]);
                let O = {
                        unmount: o
                    },
                    S = (0, s.z)(() => {
                        var t;
                        m && v(!1), null == (t = e.beforeEnter) || t.call(e)
                    }),
                    R = (0, s.z)(() => {
                        var t;
                        m && v(!1), null == (t = e.beforeLeave) || t.call(e)
                    });
                return i.createElement(j.Provider, {
                    value: y
                }, i.createElement(P.Provider, {
                    value: w
                }, (0, x.sY)({
                    ourProps: { ...O,
                        as: i.Fragment,
                        children: i.createElement(V, {
                            ref: c,
                            ...O,
                            ...u,
                            beforeEnter: S,
                            beforeLeave: R
                        })
                    },
                    theirProps: {},
                    defaultTag: i.Fragment,
                    features: F,
                    visible: "visible" === p,
                    name: "Transition"
                })))
            }

            function B(e, t) {
                let r = null !== (0, i.useContext)(P),
                    n = null !== (0, E.oJ)();
                return i.createElement(i.Fragment, null, !r && n ? i.createElement(z, {
                    ref: t,
                    ...e
                }) : i.createElement(V, {
                    ref: t,
                    ...e
                }))
            }
            let z = (0, x.yV)(D),
                V = (0, x.yV)(U),
                W = Object.assign(z, {
                    Child: (0, x.yV)(B),
                    Root: z
                })
        },
        99299: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(81694);

            function o() {
                let [e] = (0, n.useState)(i.k);
                return (0, n.useEffect)(() => () => e.dispose(), [e]), e
            }
        },
        6584: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(88703);
            let o = function(e) {
                let t = (0, i.E)(e);
                return n.useCallback(function() {
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return t.current(...r)
                }, [t])
            }
        },
        61463: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(54462);
            let o = (e, t) => {
                i.O.isServer ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
        },
        88703: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(61463);

            function o(e) {
                let t = (0, n.useRef)(e);
                return (0, i.e)(() => {
                    t.current = e
                }, [e]), t
            }
        },
        33856: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return a
                }
            });
            var n, i = r(2265),
                o = r(54462);

            function s() {
                let e = "undefined" == typeof document;
                return (0, (n || (n = r.t(i, 2))).useSyncExternalStore)(() => () => {}, () => !1, () => !e)
            }

            function a() {
                let e = s(),
                    [t, r] = i.useState(o.O.isHandoffComplete);
                return t && !1 === o.O.isHandoffComplete && r(!1), i.useEffect(() => {
                    !0 !== t && r(!0)
                }, [t]), i.useEffect(() => o.O.handoff(), []), !e && t
            }
        },
        41469: function(e, t, r) {
            "use strict";
            r.d(t, {
                T: function() {
                    return s
                }
            });
            var n = r(2265),
                i = r(6584);
            let o = Symbol();

            function s() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let s = (0, n.useRef)(t);
                (0, n.useEffect)(() => {
                    s.current = t
                }, [t]);
                let a = (0, i.z)(e => {
                    for (let t of s.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                });
                return t.every(e => null == e || (null == e ? void 0 : e[o])) ? void 0 : a
            }
        },
        53509: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                ZM: function() {
                    return s
                },
                oJ: function() {
                    return a
                },
                up: function() {
                    return u
                }
            });
            var i = r(2265);
            let o = (0, i.createContext)(null);
            o.displayName = "OpenClosedContext";
            var s = ((n = s || {})[n.Open = 1] = "Open", n[n.Closed = 2] = "Closed", n[n.Closing = 4] = "Closing", n[n.Opening = 8] = "Opening", n);

            function a() {
                return (0, i.useContext)(o)
            }

            function u(e) {
                let {
                    value: t,
                    children: r
                } = e;
                return i.createElement(o.Provider, {
                    value: t
                }, r)
            }
        },
        12585: function(e, t, r) {
            "use strict";

            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            r.d(t, {
                A: function() {
                    return n
                }
            })
        },
        81694: function(e, t, r) {
            "use strict";

            function n(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                    throw e
                }))
            }

            function i() {
                let e = [],
                    t = {
                        addEventListener: (e, r, n, i) => (e.addEventListener(r, n, i), t.add(() => e.removeEventListener(r, n, i))),
                        requestAnimationFrame() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            let i = requestAnimationFrame(...r);
                            return t.add(() => cancelAnimationFrame(i))
                        },
                        nextFrame() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            return t.requestAnimationFrame(() => t.requestAnimationFrame(...r))
                        },
                        setTimeout() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            let i = setTimeout(...r);
                            return t.add(() => clearTimeout(i))
                        },
                        microTask() {
                            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            let o = {
                                current: !0
                            };
                            return n(() => {
                                o.current && r[0]()
                            }), t.add(() => {
                                o.current = !1
                            })
                        },
                        style(e, t, r) {
                            let n = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: r
                            }), this.add(() => {
                                Object.assign(e.style, {
                                    [t]: n
                                })
                            })
                        },
                        group(e) {
                            let t = i();
                            return e(t), this.add(() => t.dispose())
                        },
                        add: t => (e.push(t), () => {
                            let r = e.indexOf(t);
                            if (r >= 0)
                                for (let t of e.splice(r, 1)) t()
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        }
                    };
                return t
            }
            r.d(t, {
                k: function() {
                    return i
                }
            })
        },
        54462: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return a
                }
            });
            var n = Object.defineProperty,
                i = (e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                o = (e, t, r) => (i(e, "symbol" != typeof t ? t + "" : t, r), r);
            class s {
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
                constructor() {
                    o(this, "current", this.detect()), o(this, "handoffState", "pending"), o(this, "currentId", 0)
                }
            }
            let a = new s
        },
        5583: function(e, t, r) {
            "use strict";

            function n(e, t) {
                for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...i) : r
                }
                let s = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
                throw Error.captureStackTrace && Error.captureStackTrace(s, n), s
            }
            r.d(t, {
                E: function() {
                    return n
                }
            })
        },
        3600: function(e, t, r) {
            "use strict";
            let n, i;
            r.d(t, {
                AN: function() {
                    return u
                },
                l4: function() {
                    return l
                },
                sY: function() {
                    return c
                },
                yV: function() {
                    return p
                }
            });
            var o = r(2265),
                s = r(12585),
                a = r(5583),
                u = ((n = u || {})[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n),
                l = ((i = l || {})[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i);

            function c(e) {
                let {
                    ourProps: t,
                    theirProps: r,
                    slot: n,
                    defaultTag: i,
                    features: o,
                    visible: s = !0,
                    name: u,
                    mergeRefs: l
                } = e;
                l = null != l ? l : d;
                let c = h(r, t);
                if (s) return f(c, n, i, u, l);
                let p = null != o ? o : 0;
                if (2 & p) {
                    let {
                        static: e = !1,
                        ...t
                    } = c;
                    if (e) return f(t, n, i, u, l)
                }
                if (1 & p) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = c;
                    return (0, a.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => f({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, i, u, l)
                    })
                }
                return f(c, n, i, u, l)
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    {
                        as: a = r,
                        children: u,
                        refName: l = "ref",
                        ...c
                    } = y(e, ["unmount", "static"]),
                    f = void 0 !== e.ref ? {
                        [l]: e.ref
                    } : {},
                    d = "function" == typeof u ? u(t) : u;
                "className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t));
                let p = {};
                if (t) {
                    let e = !1,
                        r = [];
                    for (let [n, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && r.push(n);
                    e && (p["data-headlessui-state"] = r.join(" "))
                }
                if (a === o.Fragment && Object.keys(g(c)).length > 0) {
                    if (!(0, o.isValidElement)(d) || Array.isArray(d) && d.length > 1) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(n, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(c).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"));
                    let e = d.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? function() {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                            return (0, s.A)(null == e ? void 0 : e.className(...r), c.className)
                        } : (0, s.A)(null == e ? void 0 : e.className, c.className),
                        r = t ? {
                            className: t
                        } : {};
                    return (0, o.cloneElement)(d, Object.assign({}, h(d.props, g(y(c, ["ref"]))), p, f, {
                        ref: i(d.ref, f.ref)
                    }, r))
                }
                return (0, o.createElement)(a, Object.assign({}, y(c, ["ref"]), a !== o.Fragment && f, a !== o.Fragment && p), d)
            }

            function d() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.every(e => null == e) ? void 0 : e => {
                    for (let r of t) null != r && ("function" == typeof r ? r(e) : r.current = e)
                }
            }

            function h() {
                for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                if (0 === r.length) return {};
                if (1 === r.length) return r[0];
                let i = {},
                    o = {};
                for (let t of r)
                    for (let r in t) r.startsWith("on") && "function" == typeof t[r] ? (null != (e = o[r]) || (o[r] = []), o[r].push(t[r])) : i[r] = t[r];
                if (i.disabled || i["aria-disabled"]) return Object.assign(i, Object.fromEntries(Object.keys(o).map(e => [e, void 0])));
                for (let e in o) Object.assign(i, {
                    [e](t) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        for (let r of o[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            r(t, ...n)
                        }
                    }
                });
                return i
            }

            function p(e) {
                var t;
                return Object.assign((0, o.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function g(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = Object.assign({}, e);
                for (let e of t) e in r && delete r[e];
                return r
            }
        },
        28489: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(28782);

            function o() {
                let {
                    publicKey: e,
                    signTransaction: t,
                    signAllTransactions: r
                } = (0, i.O)();
                return (0, n.useMemo)(() => e && t && r ? {
                    publicKey: e,
                    signTransaction: t,
                    signAllTransactions: r
                } : void 0, [e, t, r])
            }
        },
        65691: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return I
                }
            });
            var n = r(99972),
                i = r(80847),
                o = r(90740),
                s = r(58905),
                a = r(24498),
                u = class extends s.l {
                    constructor(e, t) {
                        super(), this.options = t, this.#e = e, this.#t = null, this.bindMethods(), this.setOptions(t)
                    }#
                    e;#
                    r = void 0;#
                    n = void 0;#
                    i = void 0;#
                    o;#
                    s;#
                    t;#
                    a;#
                    u;#
                    l;#
                    c;#
                    f;#
                    d;#
                    h = new Set;
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && (this.#r.addObserver(this), c(this.#r, this.options) ? this.#p() : this.updateResult(), this.#g())
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return f(this.#r, this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return f(this.#r, this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, this.#y(), this.#m(), this.#r.removeObserver(this)
                    }
                    setOptions(e, t) {
                        let r = this.options,
                            i = this.#r;
                        if (this.options = this.#e.defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                        this.#v(), this.#r.setOptions(this.options), r._defaulted && !(0, n.VS)(this.options, r) && this.#e.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.#r,
                            observer: this
                        });
                        let o = this.hasListeners();
                        o && d(this.#r, i, this.options, r) && this.#p(), this.updateResult(t), o && (this.#r !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.#b();
                        let s = this.#w();
                        o && (this.#r !== i || this.options.enabled !== r.enabled || s !== this.#d) && this.#E(s)
                    }
                    getOptimisticResult(e) {
                        let t = this.#e.getQueryCache().build(this.#e, e),
                            r = this.createResult(t, e);
                        return p(this, r) && (this.#i = r, this.#s = this.options, this.#o = this.#r.state), r
                    }
                    getCurrentResult() {
                        return this.#i
                    }
                    trackResult(e, t) {
                        let r = {};
                        return Object.keys(e).forEach(n => {
                            Object.defineProperty(r, n, {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (this.trackProp(n), t ? .(n), e[n])
                            })
                        }), r
                    }
                    trackProp(e) {
                        this.#h.add(e)
                    }
                    getCurrentQuery() {
                        return this.#r
                    }
                    refetch({ ...e
                    } = {}) {
                        return this.fetch({ ...e
                        })
                    }
                    fetchOptimistic(e) {
                        let t = this.#e.defaultQueryOptions(e),
                            r = this.#e.getQueryCache().build(this.#e, t);
                        return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, t))
                    }
                    fetch(e) {
                        return this.#p({ ...e,
                            cancelRefetch: e.cancelRefetch ? ? !0
                        }).then(() => (this.updateResult(), this.#i))
                    }#
                    p(e) {
                        this.#v();
                        let t = this.#r.fetch(this.options, e);
                        return e ? .throwOnError || (t = t.catch(n.ZT)), t
                    }#
                    b() {
                        if (this.#y(), n.sk || this.#i.isStale || !(0, n.PN)(this.options.staleTime)) return;
                        let e = (0, n.Kp)(this.#i.dataUpdatedAt, this.options.staleTime) + 1;
                        this.#c = setTimeout(() => {
                            this.#i.isStale || this.updateResult()
                        }, e)
                    }#
                    w() {
                        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#r) : this.options.refetchInterval) ? ? !1
                    }#
                    E(e) {
                        this.#m(), this.#d = e, !n.sk && !1 !== this.options.enabled && (0, n.PN)(this.#d) && 0 !== this.#d && (this.#f = setInterval(() => {
                            (this.options.refetchIntervalInBackground || o.j.isFocused()) && this.#p()
                        }, this.#d))
                    }#
                    g() {
                        this.#b(), this.#E(this.#w())
                    }#
                    y() {
                        this.#c && (clearTimeout(this.#c), this.#c = void 0)
                    }#
                    m() {
                        this.#f && (clearInterval(this.#f), this.#f = void 0)
                    }
                    createResult(e, t) {
                        let r;
                        let i = this.#r,
                            o = this.options,
                            s = this.#i,
                            u = this.#o,
                            l = this.#s,
                            f = e !== i ? e.state : this.#n,
                            {
                                state: p
                            } = e,
                            g = { ...p
                            },
                            y = !1;
                        if (t._optimisticResults) {
                            let r = this.hasListeners(),
                                n = !r && c(e, t),
                                s = r && d(e, i, t, o);
                            (n || s) && (g = { ...g,
                                ...(0, a.z)(p.data, e.options)
                            }), "isRestoring" === t._optimisticResults && (g.fetchStatus = "idle")
                        }
                        let {
                            error: m,
                            errorUpdatedAt: v,
                            status: b
                        } = g;
                        if (t.select && void 0 !== g.data) {
                            if (s && g.data === u ? .data && t.select === this.#a) r = this.#u;
                            else try {
                                this.#a = t.select, r = t.select(g.data), r = (0, n.oE)(s ? .data, r, t), this.#u = r, this.#t = null
                            } catch (e) {
                                this.#t = e
                            }
                        } else r = g.data;
                        if (void 0 !== t.placeholderData && void 0 === r && "pending" === b) {
                            let e;
                            if (s ? .isPlaceholderData && t.placeholderData === l ? .placeholderData) e = s.data;
                            else if (e = "function" == typeof t.placeholderData ? t.placeholderData(this.#l ? .state.data, this.#l) : t.placeholderData, t.select && void 0 !== e) try {
                                e = t.select(e), this.#t = null
                            } catch (e) {
                                this.#t = e
                            }
                            void 0 !== e && (b = "success", r = (0, n.oE)(s ? .data, e, t), y = !0)
                        }
                        this.#t && (m = this.#t, r = this.#u, v = Date.now(), b = "error");
                        let w = "fetching" === g.fetchStatus,
                            E = "pending" === b,
                            O = "error" === b,
                            x = E && w,
                            S = void 0 !== r;
                        return {
                            status: b,
                            fetchStatus: g.fetchStatus,
                            isPending: E,
                            isSuccess: "success" === b,
                            isError: O,
                            isInitialLoading: x,
                            isLoading: x,
                            data: r,
                            dataUpdatedAt: g.dataUpdatedAt,
                            error: m,
                            errorUpdatedAt: v,
                            failureCount: g.fetchFailureCount,
                            failureReason: g.fetchFailureReason,
                            errorUpdateCount: g.errorUpdateCount,
                            isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
                            isFetchedAfterMount: g.dataUpdateCount > f.dataUpdateCount || g.errorUpdateCount > f.errorUpdateCount,
                            isFetching: w,
                            isRefetching: w && !E,
                            isLoadingError: O && !S,
                            isPaused: "paused" === g.fetchStatus,
                            isPlaceholderData: y,
                            isRefetchError: O && S,
                            isStale: h(e, t),
                            refetch: this.refetch
                        }
                    }
                    updateResult(e) {
                        let t = this.#i,
                            r = this.createResult(this.#r, this.options);
                        if (this.#o = this.#r.state, this.#s = this.options, void 0 !== this.#o.data && (this.#l = this.#r), (0, n.VS)(r, t)) return;
                        this.#i = r;
                        let i = {},
                            o = () => {
                                if (!t) return !0;
                                let {
                                    notifyOnChangeProps: e
                                } = this.options, r = "function" == typeof e ? e() : e;
                                if ("all" === r || !r && !this.#h.size) return !0;
                                let n = new Set(r ? ? this.#h);
                                return this.options.throwOnError && n.add("error"), Object.keys(this.#i).some(e => {
                                    let r = e;
                                    return this.#i[r] !== t[r] && n.has(r)
                                })
                            };
                        e ? .listeners !== !1 && o() && (i.listeners = !0), this.#O({ ...i,
                            ...e
                        })
                    }#
                    v() {
                        let e = this.#e.getQueryCache().build(this.#e, this.options);
                        if (e === this.#r) return;
                        let t = this.#r;
                        this.#r = e, this.#n = e.state, this.hasListeners() && (t ? .removeObserver(this), e.addObserver(this))
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#g()
                    }#
                    O(e) {
                        i.V.batch(() => {
                            e.listeners && this.listeners.forEach(e => {
                                e(this.#i)
                            }), this.#e.getQueryCache().notify({
                                query: this.#r,
                                type: "observerResultsUpdated"
                            })
                        })
                    }
                };

            function l(e, t) {
                return !1 !== t.enabled && void 0 === e.state.data && !("error" === e.state.status && !1 === t.retryOnMount)
            }

            function c(e, t) {
                return l(e, t) || void 0 !== e.state.data && f(e, t, t.refetchOnMount)
            }

            function f(e, t, r) {
                if (!1 !== t.enabled) {
                    let n = "function" == typeof r ? r(e) : r;
                    return "always" === n || !1 !== n && h(e, t)
                }
                return !1
            }

            function d(e, t, r, n) {
                return (e !== t || !1 === n.enabled) && (!r.suspense || "error" !== e.state.status) && h(e, r)
            }

            function h(e, t) {
                return !1 !== t.enabled && e.isStaleByTime(t.staleTime)
            }

            function p(e, t) {
                return !(0, n.VS)(e.getCurrentResult(), t)
            }
            var g = r(2265);

            function y() {
                let e = !1;
                return {
                    clearReset: () => {
                        e = !1
                    },
                    reset: () => {
                        e = !0
                    },
                    isReset: () => e
                }
            }
            r(57437);
            var m = g.createContext(y()),
                v = () => g.useContext(m),
                b = r(93191),
                w = g.createContext(!1),
                E = () => g.useContext(w);
            w.Provider;
            var O = r(37832),
                x = (e, t) => {
                    (e.suspense || e.throwOnError) && !t.isReset() && (e.retryOnMount = !1)
                },
                S = e => {
                    g.useEffect(() => {
                        e.clearReset()
                    }, [e])
                },
                P = e => {
                    let {
                        result: t,
                        errorResetBoundary: r,
                        throwOnError: n,
                        query: i
                    } = e;
                    return t.isError && !r.isReset() && !t.isFetching && i && (0, O.L)(n, [t.error, i])
                },
                R = e => {
                    e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
                },
                _ = (e, t) => e ? .suspense && t.isPending,
                C = (e, t, r) => t.fetchOptimistic(e).catch(() => {
                    r.clearReset()
                });

            function j(e, t, r) {
                let n = (0, b.NL)(r),
                    o = E(),
                    s = v(),
                    a = n.defaultQueryOptions(e);
                a._optimisticResults = o ? "isRestoring" : "optimistic", R(a), x(a, s), S(s);
                let [u] = g.useState(() => new t(n, a)), l = u.getOptimisticResult(a);
                if (g.useSyncExternalStore(g.useCallback(e => {
                        let t = o ? () => void 0 : u.subscribe(i.V.batchCalls(e));
                        return u.updateResult(), t
                    }, [u, o]), () => u.getCurrentResult(), () => u.getCurrentResult()), g.useEffect(() => {
                        u.setOptions(a, {
                            listeners: !1
                        })
                    }, [a, u]), _(a, l)) throw C(a, u, s);
                if (P({
                        result: l,
                        errorResetBoundary: s,
                        throwOnError: a.throwOnError,
                        query: n.getQueryCache().get(a.queryHash)
                    })) throw l.error;
                return a.notifyOnChangeProps ? l : u.trackResult(l)
            }

            function I(e, t) {
                return j(e, u, t)
            }
        },
        37832: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return "function" == typeof e ? e(...t) : !!e
            }

            function i() {}
            r.d(t, {
                L: function() {
                    return n
                },
                Z: function() {
                    return i
                }
            })
        }
    }
]);