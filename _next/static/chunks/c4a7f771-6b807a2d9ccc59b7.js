"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1761], {
        13320: function(t, e, r) {
            var n, i, o, s, a, c, u, l, d, h = r(9109),
                f = r(45429),
                p = r(58171),
                y = r.n(p),
                m = r(48635),
                g = r.n(m),
                v = r(48738),
                w = r(19467),
                b = r.n(w),
                _ = r(75544),
                E = r(3179),
                A = r(6881),
                I = r(37836),
                x = r.n(I),
                P = r(31754),
                S = r(9109).Buffer;

            function k(t) {
                return g().encode(t)
            }

            function L(t) {
                let e = new Map;
                return t.errors && t.errors.forEach(t => {
                    var r;
                    let n = null !== (r = t.msg) && void 0 !== r ? r : t.name;
                    e.set(t.code, n)
                }), e
            }

            function T(t, e = {}) {
                t.forEach(t => {
                    if ("accounts" in t) T(t.accounts, e[t.name]);
                    else if (void 0 === e[t.name]) throw Error(`Invalid arguments: ${t.name} not provided.`)
                })
            }

            function B(t) {
                return t instanceof f.PublicKey ? t : new f.PublicKey(t)
            }
            class O extends TypeError {
                constructor(t, e) {
                    let r;
                    let {
                        message: n,
                        ...i
                    } = t, {
                        path: o
                    } = t;
                    super(0 === o.length ? n : "At path: " + o.join(".") + " -- " + n), this.value = void 0, this.key = void 0, this.type = void 0, this.refinement = void 0, this.path = void 0, this.branch = void 0, this.failures = void 0, Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
                        var n;
                        return null != (n = r) ? n : r = [t, ...e()]
                    }
                }
            }

            function C(t) {
                return "object" == typeof t && null != t
            }

            function D(t) {
                return "string" == typeof t ? JSON.stringify(t) : "" + t
            }

            function* U(t, e, r, n) {
                var i;
                for (let o of (C(i = t) && "function" == typeof i[Symbol.iterator] || (t = [t]), t)) {
                    let t = function(t, e, r, n) {
                        if (!0 === t) return;
                        !1 === t ? t = {} : "string" == typeof t && (t = {
                            message: t
                        });
                        let {
                            path: i,
                            branch: o
                        } = e, {
                            type: s
                        } = r, {
                            refinement: a,
                            message: c = "Expected a value of type `" + s + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + D(n) + "`"
                        } = t;
                        return {
                            value: n,
                            type: s,
                            refinement: a,
                            key: i[i.length - 1],
                            path: i,
                            branch: o,
                            ...t,
                            message: c
                        }
                    }(o, e, r, n);
                    t && (yield t)
                }
            }

            function* R(t, e, r) {
                void 0 === r && (r = {});
                let {
                    path: n = [],
                    branch: i = [t],
                    coerce: o = !1,
                    mask: s = !1
                } = r, a = {
                    path: n,
                    branch: i
                };
                if (o && (t = e.coercer(t, a), s && "type" !== e.type && C(e.schema) && C(t) && !Array.isArray(t)))
                    for (let r in t) void 0 === e.schema[r] && delete t[r];
                let c = !0;
                for (let r of e.validator(t, a)) c = !1, yield [r, void 0];
                for (let [r, u, l] of e.entries(t, a))
                    for (let e of R(u, l, {
                            path: void 0 === r ? n : [...n, r],
                            branch: void 0 === r ? i : [...i, u],
                            coerce: o,
                            mask: s
                        })) e[0] ? (c = !1, yield [e[0], void 0]) : o && (u = e[1], void 0 === r ? t = u : t instanceof Map ? t.set(r, u) : t instanceof Set ? t.add(u) : C(t) && (t[r] = u));
                if (c)
                    for (let r of e.refiner(t, a)) c = !1, yield [r, void 0];
                c && (yield [void 0, t])
            }
            class $ {
                constructor(t) {
                    this.TYPE = void 0, this.type = void 0, this.schema = void 0, this.coercer = void 0, this.validator = void 0, this.refiner = void 0, this.entries = void 0;
                    let {
                        type: e,
                        schema: r,
                        validator: n,
                        refiner: i,
                        coercer: o = t => t,
                        entries: s = function*() {}
                    } = t;
                    this.type = e, this.schema = r, this.entries = s, this.coercer = o, n ? this.validator = (t, e) => U(n(t, e), e, this, t) : this.validator = () => [], i ? this.refiner = (t, e) => U(i(t, e), e, this, t) : this.refiner = () => []
                }
                assert(t) {
                    return function(t, e) {
                        let r = M(t, e);
                        if (r[0]) throw r[0]
                    }(t, this)
                }
                create(t) {
                    return j(t, this)
                }
                is(t) {
                    return !M(t, this)[0]
                }
                mask(t) {
                    return function(t, e) {
                        let r = M(t, e, {
                            coerce: !0,
                            mask: !0
                        });
                        if (!r[0]) return r[1];
                        throw r[0]
                    }(t, this)
                }
                validate(t, e) {
                    return void 0 === e && (e = {}), M(t, this, e)
                }
            }

            function j(t, e) {
                let r = M(t, e, {
                    coerce: !0
                });
                if (!r[0]) return r[1];
                throw r[0]
            }

            function M(t, e, r) {
                void 0 === r && (r = {});
                let n = R(t, e, r),
                    i = function(t) {
                        let {
                            done: e,
                            value: r
                        } = t.next();
                        return e ? void 0 : r
                    }(n);
                return i[0] ? [new O(i[0], function*() {
                    for (let t of n) t[0] && (yield t[0])
                }), void 0] : [void 0, i[1]]
            }

            function N(t, e) {
                return new $({
                    type: t,
                    schema: null,
                    validator: e
                })
            }

            function K(t) {
                return new $({
                    type: "array",
                    schema: t,
                    * entries(e) {
                        if (t && Array.isArray(e))
                            for (let [r, n] of e.entries()) yield [r, n, t]
                    },
                    coercer: t => Array.isArray(t) ? t.slice() : t,
                    validator: t => Array.isArray(t) || "Expected an array value, but received: " + D(t)
                })
            }

            function V(t) {
                let e = D(t),
                    r = typeof t;
                return new $({
                    type: "literal",
                    schema: "string" === r || "number" === r || "boolean" === r ? t : null,
                    validator: r => r === t || "Expected the literal `" + e + "`, but received: " + D(r)
                })
            }

            function z(t) {
                return new $({ ...t,
                    validator: (e, r) => null === e || t.validator(e, r),
                    refiner: (e, r) => null === e || t.refiner(e, r)
                })
            }

            function q() {
                return N("number", t => "number" == typeof t && !isNaN(t) || "Expected a number, but received: " + D(t))
            }

            function F(t) {
                return new $({ ...t,
                    validator: (e, r) => void 0 === e || t.validator(e, r),
                    refiner: (e, r) => void 0 === e || t.refiner(e, r)
                })
            }

            function W() {
                return N("string", t => "string" == typeof t || "Expected a string, but received: " + D(t))
            }

            function H(t) {
                let e = Object.keys(t);
                return new $({
                    type: "type",
                    schema: t,
                    * entries(r) {
                        if (C(r))
                            for (let n of e) yield [n, r[n], t[n]]
                    },
                    validator: t => C(t) || "Expected an object, but received: " + D(t)
                })
            }

            function G(t) {
                let e = t.map(t => t.type).join(" | ");
                return new $({
                    type: "union",
                    schema: null,
                    coercer: (e, r) => (t.find(t => {
                        let [r] = t.validate(e, {
                            coerce: !0
                        });
                        return !r
                    }) || J()).coercer(e, r),
                    validator(r, n) {
                        let i = [];
                        for (let e of t) {
                            let [...t] = R(r, e, n), [o] = t;
                            if (!o[0]) return [];
                            for (let [e] of t) e && i.push(e)
                        }
                        return ["Expected the value to satisfy a union of `" + e + "`, but received: " + D(r), ...i]
                    }
                })
            }

            function J() {
                return N("unknown", () => !0)
            }
            async function Z(t, e, r) {
                if (e.length <= 99) return await Y(t, e, r); {
                    let n = Array.apply(0, Array(Math.ceil(e.length / 99))).map((t, r) => e.slice(99 * r, (r + 1) * 99));
                    return (await Promise.all(n.map(e => Y(t, e, r)))).flat()
                }
            }
            async function Y(t, e, r) {
                let n = null != r ? r : t.commitment,
                    {
                        value: i,
                        context: o
                    } = await t.getMultipleAccountsInfoAndContext(e, n);
                return i.map((t, r) => null === t ? null : {
                    publicKey: e[r],
                    account: t,
                    context: o
                })
            }
            async function X(t, e, r, n, i) {
                r && r.length > 0 && e.sign(...r);
                let o = e._compile(),
                    s = o.serialize(),
                    a = e._serialize(s).toString("base64"),
                    c = {
                        encoding: "base64",
                        commitment: null != n ? n : t.commitment
                    };
                if (i) {
                    let t = (Array.isArray(i) ? i : o.nonProgramIds()).map(t => t.toBase58());
                    c.accounts = {
                        encoding: "base64",
                        addresses: t
                    }
                }
                r && (c.sigVerify = !0);
                let u = j(await t._rpcRequest("simulateTransaction", [a, c]), te);
                if ("error" in u) {
                    let t;
                    if ("data" in u.error && (t = u.error.data.logs) && Array.isArray(t)) {
                        let e = "\n    ",
                            r = e + t.join(e);
                        console.error(u.error.message, r)
                    }
                    throw new f.SendTransactionError("failed to simulate transaction: " + u.error.message, t)
                }
                return u.result
            }
            let Q = tt(J());

            function tt(t) {
                return G([H({
                    jsonrpc: V("2.0"),
                    id: W(),
                    result: t
                }), H({
                    jsonrpc: V("2.0"),
                    id: W(),
                    error: H({
                        code: J(),
                        message: W(),
                        data: F(N("any", () => !0))
                    })
                })])
            }
            let te = (n = H({
                err: z(G([H({}), W()])),
                logs: z(K(W())),
                accounts: F(z(K(z(H({
                    executable: N("boolean", t => "boolean" == typeof t),
                    owner: W(),
                    lamports: q(),
                    data: K(W()),
                    rentEpoch: F(q())
                }))))),
                unitsConsumed: F(q())
            }), o = tt(i = H({
                context: H({
                    slot: q()
                }),
                value: n
            })), s = t => "error" in t ? t : { ...t,
                result: j(t.result, i)
            }, new $({ ...o,
                coercer: (t, e) => M(t, Q)[0] ? o.coercer(t, e) : o.coercer(s(t, e), e)
            }));
            class tr {
                constructor(t, e, r) {
                    this.connection = t, this.wallet = e, this.opts = r, this.publicKey = null == e ? void 0 : e.publicKey
                }
                static defaultOptions() {
                    return {
                        preflightCommitment: "processed",
                        commitment: "processed"
                    }
                }
                static local(t, e) {
                    throw Error("Provider local is not available on browser.")
                }
                static env() {
                    throw Error("Provider env is not available on browser.")
                }
                async sendAndConfirm(t, e, r) {
                    var n;
                    void 0 === r && (r = this.opts), t.feePayer = t.feePayer || this.wallet.publicKey, t.recentBlockhash = (await this.connection.getLatestBlockhash(r.preflightCommitment)).blockhash, t = await this.wallet.signTransaction(t), (null != e ? e : []).forEach(e => {
                        t.partialSign(e)
                    });
                    let i = t.serialize();
                    try {
                        return await ti(this.connection, i, r)
                    } catch (e) {
                        if (e instanceof to) {
                            let r = await this.connection.getTransaction(k(t.signature), {
                                commitment: "confirmed"
                            });
                            if (r) {
                                let t = null === (n = r.meta) || void 0 === n ? void 0 : n.logMessages;
                                throw t ? new f.SendTransactionError(e.message, t) : e
                            }
                        }
                        throw e
                    }
                }
                async sendAll(t, e) {
                    var r;
                    void 0 === e && (e = this.opts);
                    let n = await this.connection.getLatestBlockhash(e.preflightCommitment),
                        i = t.map(t => {
                            var e;
                            let r = t.tx,
                                i = null !== (e = t.signers) && void 0 !== e ? e : [];
                            return r.feePayer = r.feePayer || this.wallet.publicKey, r.recentBlockhash = n.blockhash, i.forEach(t => {
                                r.partialSign(t)
                            }), r
                        }),
                        o = await this.wallet.signAllTransactions(i),
                        s = [];
                    for (let t = 0; t < i.length; t += 1) {
                        let n = o[t],
                            i = n.serialize();
                        try {
                            s.push(await ti(this.connection, i, e))
                        } catch (t) {
                            if (t instanceof to) {
                                let e = await this.connection.getTransaction(k(n.signature), {
                                    commitment: "confirmed"
                                });
                                if (e) {
                                    let n = null === (r = e.meta) || void 0 === r ? void 0 : r.logMessages;
                                    throw n ? new f.SendTransactionError(t.message, n) : t
                                }
                            }
                            throw t
                        }
                    }
                    return s
                }
                async simulate(t, e, r, n) {
                    t.feePayer = t.feePayer || this.wallet.publicKey, t.recentBlockhash = (await this.connection.getLatestBlockhash(null != r ? r : this.connection.commitment)).blockhash, t = await this.wallet.signTransaction(t);
                    let i = await X(this.connection, t, e, r, n);
                    if (i.value.err) throw new tn(i.value);
                    return i.value
                }
            }
            class tn extends Error {
                constructor(t, e) {
                    super(e), this.simulationResponse = t
                }
            }
            async function ti(t, e, r) {
                let n = r && {
                        skipPreflight: r.skipPreflight,
                        preflightCommitment: r.preflightCommitment || r.commitment
                    },
                    i = await t.sendRawTransaction(e, n),
                    o = (await t.confirmTransaction(i, r && r.commitment)).value;
                if (o.err) throw new to(`Raw transaction ${i} failed (${JSON.stringify(o)})`);
                return i
            }
            class to extends Error {
                constructor(t) {
                    super(t)
                }
            }

            function ts() {
                return null === ta ? tr.local() : ta
            }
            let ta = null,
                tc = new Map;

            function tu(t) {
                return void 0 !== tc.get(t)
            }
            class tl extends Error {
                constructor(t) {
                    super(t), this.name = "IdlError"
                }
            }
            class td {
                constructor(t) {
                    this.stack = t
                }
                static parse(t) {
                    var e;
                    let r = /^Program (\w*) invoke/,
                        n = /^Program \w* success/,
                        i = [];
                    for (let o = 0; o < t.length; o++) {
                        if (n.exec(t[o])) {
                            i.pop();
                            continue
                        }
                        let s = null === (e = r.exec(t[o])) || void 0 === e ? void 0 : e[1];
                        s && i.push(new f.PublicKey(s))
                    }
                    return new td(i)
                }
            }
            class th extends Error {
                constructor(t, e, r, n, i, o) {
                    super(r.join("\n").replace("Program log: ", "")), this.errorLogs = r, this.logs = n, this.error = {
                        errorCode: t,
                        errorMessage: e,
                        comparedValues: o,
                        origin: i
                    }, this._programErrorStack = td.parse(n)
                }
                static parse(t) {
                    let e;
                    if (!t) return null;
                    let r = t.findIndex(t => t.startsWith("Program log: AnchorError"));
                    if (-1 === r) return null;
                    let n = t[r],
                        i = [n];
                    if (r + 1 < t.length) {
                        if ("Program log: Left:" === t[r + 1]) {
                            let n = /^Program log: (.*)$/,
                                o = n.exec(t[r + 2])[1],
                                s = n.exec(t[r + 4])[1];
                            e = [new f.PublicKey(o), new f.PublicKey(s)], i.push(...t.slice(r + 1, r + 5))
                        } else if (t[r + 1].startsWith("Program log: Left:")) {
                            let n = /^Program log: (Left|Right): (.*)$/,
                                o = n.exec(t[r + 1])[2],
                                s = n.exec(t[r + 2])[2];
                            i.push(...t.slice(r + 1, r + 3)), e = [o, s]
                        }
                    }
                    let o = /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n),
                        s = /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n),
                        a = /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n);
                    if (o) {
                        let [r, n, s] = o.slice(1, 4);
                        return new th({
                            code: r,
                            number: parseInt(n)
                        }, s, i, t, void 0, e)
                    }
                    if (s) {
                        let [r, n, o, a, c] = s.slice(1, 6);
                        return new th({
                            code: o,
                            number: parseInt(a)
                        }, c, i, t, {
                            file: r,
                            line: parseInt(n)
                        }, e)
                    }
                    if (!a) return null; {
                        let [r, n, o, s] = a.slice(1, 5);
                        return new th({
                            code: n,
                            number: parseInt(o)
                        }, s, i, t, r, e)
                    }
                }
                get program() {
                    return this._programErrorStack.stack[this._programErrorStack.stack.length - 1]
                }
                get programErrorStack() {
                    return this._programErrorStack.stack
                }
                toString() {
                    return this.message
                }
            }
            class tf extends Error {
                constructor(t, e, r) {
                    super(), this.code = t, this.msg = e, this.logs = r, r && (this._programErrorStack = td.parse(r))
                }
                static parse(t, e) {
                    let r, n;
                    let i = t.toString();
                    if (i.includes("custom program error:")) {
                        let t = i.split("custom program error: ");
                        if (2 !== t.length) return null;
                        r = t[1]
                    } else {
                        let t = i.match(/"Custom":([0-9]+)}/g);
                        if (!t || t.length > 1) return null;
                        r = t[0].match(/([0-9]+)/g)[0]
                    }
                    try {
                        n = parseInt(r)
                    } catch (t) {
                        return null
                    }
                    let o = e.get(n);
                    return void 0 !== o || void 0 !== (o = ty.get(n)) ? new tf(n, o, t.logs) : null
                }
                get program() {
                    var t;
                    return null === (t = this._programErrorStack) || void 0 === t ? void 0 : t.stack[this._programErrorStack.stack.length - 1]
                }
                get programErrorStack() {
                    var t;
                    return null === (t = this._programErrorStack) || void 0 === t ? void 0 : t.stack
                }
                toString() {
                    return this.msg
                }
            }

            function tp(t, e) {
                tu("debug-logs") && console.log("Translating error:", t);
                let r = th.parse(t.logs);
                return r ? r : tf.parse(t, e) || (t.logs ? (t.programErrorStack = td.parse(t.logs), new Proxy(t, {
                    get: function(e, r) {
                        return "programErrorStack" === r ? e.programErrorStack.stack : "program" === r ? e.programErrorStack.stack[t.programErrorStack.stack.length - 1] : Reflect.get(...arguments)
                    }
                })) : t)
            }
            let ty = new Map([
                [100, "8 byte instruction identifier not provided"],
                [101, "Fallback functions are not supported"],
                [102, "The program could not deserialize the given instruction"],
                [103, "The program could not serialize the given instruction"],
                [1e3, "The program was compiled without idl instructions"],
                [1001, "The transaction was given an invalid program for the IDL instruction"],
                [2e3, "A mut constraint was violated"],
                [2001, "A has one constraint was violated"],
                [2002, "A signer constraint was violated"],
                [2003, "A raw constraint was violated"],
                [2004, "An owner constraint was violated"],
                [2005, "A rent exemption constraint was violated"],
                [2006, "A seeds constraint was violated"],
                [2007, "An executable constraint was violated"],
                [2008, "A state constraint was violated"],
                [2009, "An associated constraint was violated"],
                [2010, "An associated init constraint was violated"],
                [2011, "A close constraint was violated"],
                [2012, "An address constraint was violated"],
                [2013, "Expected zero account discriminant"],
                [2014, "A token mint constraint was violated"],
                [2015, "A token owner constraint was violated"],
                [2016, "A mint mint authority constraint was violated"],
                [2017, "A mint freeze authority constraint was violated"],
                [2018, "A mint decimals constraint was violated"],
                [2019, "A space constraint was violated"],
                [2020, "A required account for the constraint is None"],
                [2500, "A require expression was violated"],
                [2501, "A require_eq expression was violated"],
                [2502, "A require_keys_eq expression was violated"],
                [2503, "A require_neq expression was violated"],
                [2504, "A require_keys_neq expression was violated"],
                [2505, "A require_gt expression was violated"],
                [2506, "A require_gte expression was violated"],
                [3e3, "The account discriminator was already set on this account"],
                [3001, "No 8 byte discriminator was found on the account"],
                [3002, "8 byte discriminator did not match what was expected"],
                [3003, "Failed to deserialize the account"],
                [3004, "Failed to serialize the account"],
                [3005, "Not enough account keys given to the instruction"],
                [3006, "The given account is not mutable"],
                [3007, "The given account is owned by a different program than expected"],
                [3008, "Program ID was not as expected"],
                [3009, "Program account is not executable"],
                [3010, "The given account did not sign"],
                [3011, "The given account is not owned by the system program"],
                [3012, "The program expected this account to be already initialized"],
                [3013, "The given account is not a program data account"],
                [3014, "The given account is not the associated token account"],
                [3015, "The given public key does not match the required sysvar"],
                [3016, "The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit"],
                [3017, "The account was duplicated for more than one reallocation"],
                [4e3, "The given state account does not have the correct address"],
                [4100, "The declared program id does not match the actual program id"],
                [5e3, "The API being used is deprecated and should no longer be used"]
            ]);
            var tm = function() {
                    return (tm = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                tg = function() {
                    return (tg = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                };

            function tv(t) {
                return t.toLowerCase()
            }
            var tw = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
                tb = /[^A-Z0-9]+/gi;

            function t_(t, e, r) {
                return e instanceof RegExp ? t.replace(e, r) : e.reduce(function(t, e) {
                    return t.replace(e, r)
                }, t)
            }
            class tE {
                static fieldLayout(t, e) {
                    let r = void 0 !== t.name ? b()(t.name) : void 0;
                    switch (t.type) {
                        case "bool":
                            return E.bool(r);
                        case "u8":
                            return E.u8(r);
                        case "i8":
                            return E.i8(r);
                        case "u16":
                            return E.u16(r);
                        case "i16":
                            return E.i16(r);
                        case "u32":
                            return E.u32(r);
                        case "i32":
                            return E.i32(r);
                        case "f32":
                            return E.f32(r);
                        case "u64":
                            return E.u64(r);
                        case "i64":
                            return E.i64(r);
                        case "f64":
                            return E.f64(r);
                        case "u128":
                            return E.u128(r);
                        case "i128":
                            return E.i128(r);
                        case "u256":
                            return E.u256(r);
                        case "i256":
                            return E.i256(r);
                        case "bytes":
                            return E.vecU8(r);
                        case "string":
                            return E.str(r);
                        case "publicKey":
                            return E.publicKey(r);
                        default:
                            if ("vec" in t.type) return E.vec(tE.fieldLayout({
                                name: void 0,
                                type: t.type.vec
                            }, e), r);
                            if ("option" in t.type) return E.option(tE.fieldLayout({
                                name: void 0,
                                type: t.type.option
                            }, e), r);
                            if ("defined" in t.type) {
                                let n = t.type.defined;
                                if (void 0 === e) throw new tl("User defined types not provided");
                                let i = e.filter(t => t.name === n);
                                if (1 !== i.length) throw new tl(`Type not found: ${JSON.stringify(t)}`);
                                return tE.typeDefLayout(i[0], e, r)
                            }
                            if ("array" in t.type) {
                                let n = t.type.array[0],
                                    i = t.type.array[1],
                                    o = tE.fieldLayout({
                                        name: void 0,
                                        type: n
                                    }, e);
                                return E.array(o, i, r)
                            } else throw Error(`Not yet implemented: ${t}`)
                    }
                }
                static typeDefLayout(t, e = [], r) {
                    if ("struct" === t.type.kind) {
                        let n = t.type.fields.map(t => tE.fieldLayout(t, e));
                        return E.struct(n, r)
                    }
                    if ("enum" === t.type.kind) {
                        let n = t.type.variants.map(t => {
                            let r = b()(t.name);
                            if (void 0 === t.fields) return E.struct([], r);
                            let n = t.fields.map((t, r) => t.hasOwnProperty("name") ? tE.fieldLayout(t, e) : tE.fieldLayout({
                                type: t,
                                name: r.toString()
                            }, e));
                            return E.struct(n, r)
                        });
                        return void 0 !== r ? E.rustEnum(n).replicate(r) : E.rustEnum(n, r)
                    }
                    throw Error(`Unknown type kint: ${t}`)
                }
            }
            let tA = "state",
                tI = "global";
            class tx {
                constructor(t) {
                    this.idl = t, this.ixLayout = tx.parseIxLayout(t);
                    let e = new Map;
                    t.instructions.forEach(t => {
                        let r = tS(tI, t.name);
                        e.set(g().encode(r), {
                            layout: this.ixLayout.get(t.name),
                            name: t.name
                        })
                    }), t.state && t.state.methods.map(t => {
                        let r = tS(tA, t.name);
                        e.set(g().encode(r), {
                            layout: this.ixLayout.get(t.name),
                            name: t.name
                        })
                    }), this.sighashLayouts = e
                }
                encode(t, e) {
                    return this._encode(tI, t, e)
                }
                encodeState(t, e) {
                    return this._encode(tA, t, e)
                }
                _encode(t, e, r) {
                    let n = h.Buffer.alloc(1e3),
                        i = b()(e),
                        o = this.ixLayout.get(i);
                    if (!o) throw Error(`Unknown method: ${i}`);
                    let s = o.encode(r, n),
                        a = n.slice(0, s);
                    return h.Buffer.concat([tS(t, e), a])
                }
                static parseIxLayout(t) {
                    return new Map((t.state ? t.state.methods : []).map(e => {
                        let r = e.args.map(e => {
                                var r, n;
                                return tE.fieldLayout(e, Array.from([...null !== (r = t.accounts) && void 0 !== r ? r : [], ...null !== (n = t.types) && void 0 !== n ? n : []]))
                            }),
                            n = b()(e.name);
                        return [n, E.struct(r, n)]
                    }).concat(t.instructions.map(e => {
                        let r = e.args.map(e => {
                                var r, n;
                                return tE.fieldLayout(e, Array.from([...null !== (r = t.accounts) && void 0 !== r ? r : [], ...null !== (n = t.types) && void 0 !== n ? n : []]))
                            }),
                            n = b()(e.name);
                        return [n, E.struct(r, n)]
                    })))
                }
                decode(t, e = "hex") {
                    "string" == typeof t && (t = "hex" === e ? h.Buffer.from(t, "hex") : g().decode(t));
                    let r = g().encode(t.slice(0, 8)),
                        n = t.slice(8),
                        i = this.sighashLayouts.get(r);
                    return i ? {
                        data: i.layout.decode(n),
                        name: i.name
                    } : null
                }
                format(t, e) {
                    return tP.format(t, e, this.idl)
                }
            }
            class tP {
                static format(t, e, r) {
                    let n = r.instructions.filter(e => t.name === e.name)[0];
                    if (void 0 === n) return console.error("Invalid instruction given"), null;
                    let i = n.args.map(e => ({
                            name: e.name,
                            type: tP.formatIdlType(e.type),
                            data: tP.formatIdlData(e, t.data[e.name], r.types)
                        })),
                        o = tP.flattenIdlAccounts(n.accounts);
                    return {
                        args: i,
                        accounts: e.map((t, e) => e < o.length ? {
                            name: o[e].name,
                            ...t
                        } : {
                            name: void 0,
                            ...t
                        })
                    }
                }
                static formatIdlType(t) {
                    if ("string" == typeof t) return t;
                    if ("vec" in t) return `Vec<${this.formatIdlType(t.vec)}>`;
                    if ("option" in t) return `Option<${this.formatIdlType(t.option)}>`;
                    if ("defined" in t) return t.defined;
                    if ("array" in t) return `Array<${t.array[0]}; ${t.array[1]}>`;
                    throw Error(`Unknown IDL type: ${t}`)
                }
                static formatIdlData(t, e, r) {
                    if ("string" == typeof t.type) return e.toString();
                    if (t.type.hasOwnProperty("vec")) return "[" + e.map(e => this.formatIdlData({
                        name: "",
                        type: t.type.vec
                    }, e)).join(", ") + "]";
                    if (t.type.hasOwnProperty("option")) return null === e ? "null" : this.formatIdlData({
                        name: "",
                        type: t.type.option
                    }, e, r);
                    if (t.type.hasOwnProperty("defined")) {
                        if (void 0 === r) throw Error("User defined types not provided");
                        let n = r.filter(e => e.name === t.type.defined);
                        if (1 !== n.length) throw Error(`Type not found: ${t.type.defined}`);
                        return tP.formatIdlDataDefined(n[0], e, r)
                    }
                    return "unknown"
                }
                static formatIdlDataDefined(t, e, r) {
                    if ("struct" === t.type.kind) {
                        let n = t.type;
                        return "{ " + Object.keys(e).map(t => {
                            let i = n.fields.filter(e => e.name === t)[0];
                            if (void 0 === i) throw Error("Unable to find type");
                            return t + ": " + tP.formatIdlData(i, e[t], r)
                        }).join(", ") + " }"
                    }
                    if (0 === t.type.variants.length) return "{}";
                    if (!t.type.variants[0].name) return "Tuple formatting not yet implemented"; {
                        let n = t.type.variants,
                            i = Object.keys(e)[0],
                            o = e[i],
                            s = Object.keys(o).map(t => {
                                var e;
                                let s = o[t],
                                    a = null === (e = n[i]) || void 0 === e ? void 0 : e.filter(e => e.name === t)[0];
                                if (void 0 === a) throw Error("Unable to find variant");
                                return t + ": " + tP.formatIdlData(a, s, r)
                            }).join(", "),
                            a = b()(i, {
                                pascalCase: !0
                            });
                        return 0 === s.length ? a : `${a} { ${s} }`
                    }
                }
                static flattenIdlAccounts(t, e) {
                    return t.map(t => {
                        let r = function(t) {
                            let e = t.replace(/([A-Z])/g, " $1");
                            return e.charAt(0).toUpperCase() + e.slice(1)
                        }(t.name);
                        if (!t.hasOwnProperty("accounts")) return { ...t,
                            name: e ? `${e} > ${r}` : r
                        }; {
                            let n = e ? `${e} > ${r}` : r;
                            return tP.flattenIdlAccounts(t.accounts, n)
                        }
                    }).flat()
                }
            }

            function tS(t, e) {
                var r, n;
                let i = (void 0 === r && (r = {}), void 0 === (n = tm({
                        delimiter: "_"
                    }, r)) && (n = {}), function(t, e) {
                        void 0 === e && (e = {});
                        for (var r = e.splitRegexp, n = e.stripRegexp, i = e.transform, o = e.delimiter, s = t_(t_(t, void 0 === r ? tw : r, "$1\0$2"), void 0 === n ? tb : n, "\0"), a = 0, c = s.length;
                            "\0" === s.charAt(a);) a++;
                        for (;
                            "\0" === s.charAt(c - 1);) c--;
                        return s.slice(a, c).split("\0").map(void 0 === i ? tv : i).join(void 0 === o ? " " : o)
                    }(e, tg({
                        delimiter: "."
                    }, n))),
                    o = `${t}:${i}`;
                return h.Buffer.from(_.sha256.digest(o)).slice(0, 8)
            }

            function tk(t, e) {
                return "enum" === e.type.kind ? Math.max(...e.type.variants.map(e => void 0 === e.fields ? 0 : e.fields.map(e => {
                    if (!("object" == typeof e && "name" in e)) throw Error("Tuple enum variants not yet implemented.");
                    return tL(t, e.type)
                }).reduce((t, e) => t + e))) + 1 : void 0 === e.type.fields ? 0 : e.type.fields.map(e => tL(t, e.type)).reduce((t, e) => t + e, 0)
            }

            function tL(t, e) {
                var r, n;
                switch (e) {
                    case "bool":
                    case "u8":
                    case "i8":
                    case "bytes":
                    case "string":
                        return 1;
                    case "i16":
                    case "u16":
                        return 2;
                    case "u32":
                    case "i32":
                    case "f32":
                        return 4;
                    case "u64":
                    case "i64":
                    case "f64":
                        return 8;
                    case "u128":
                    case "i128":
                        return 16;
                    case "u256":
                    case "i256":
                    case "publicKey":
                        return 32;
                    default:
                        if ("vec" in e) return 1;
                        if ("option" in e) return 1 + tL(t, e.option);
                        if ("coption" in e) return 4 + tL(t, e.coption);
                        if ("defined" in e) {
                            let i = null !== (n = null === (r = t.types) || void 0 === r ? void 0 : r.filter(t => t.name === e.defined)) && void 0 !== n ? n : [];
                            if (1 !== i.length) throw new tl(`Type not found: ${JSON.stringify(e)}`);
                            return tk(t, i[0])
                        }
                        if ("array" in e) {
                            let r = e.array[0],
                                n = e.array[1];
                            return tL(t, r) * n
                        }
                        throw Error(`Invalid type ${JSON.stringify(e)}`)
                }
            }
            class tT {
                constructor(t) {
                    if (void 0 === t.accounts) {
                        this.accountLayouts = new Map;
                        return
                    }
                    let e = t.accounts.map(e => [e.name, tE.typeDefLayout(e, t.types)]);
                    this.accountLayouts = new Map(e), this.idl = t
                }
                async encode(t, e) {
                    let r = h.Buffer.alloc(1e3),
                        n = this.accountLayouts.get(t);
                    if (!n) throw Error(`Unknown account: ${t}`);
                    let i = n.encode(e, r),
                        o = r.slice(0, i),
                        s = tT.accountDiscriminator(t);
                    return h.Buffer.concat([s, o])
                }
                decode(t, e) {
                    if (tT.accountDiscriminator(t).compare(e.slice(0, 8))) throw Error("Invalid account discriminator");
                    return this.decodeUnchecked(t, e)
                }
                decodeAny(t) {
                    let e = t.slice(0, 8),
                        r = Array.from(this.accountLayouts.keys()).find(t => tT.accountDiscriminator(t).equals(e));
                    if (!r) throw Error("Account descriminator not found");
                    return this.decodeUnchecked(r, t)
                }
                decodeUnchecked(t, e) {
                    let r = e.slice(8),
                        n = this.accountLayouts.get(t);
                    if (!n) throw Error(`Unknown account: ${t}`);
                    return n.decode(r)
                }
                memcmp(t, e) {
                    let r = tT.accountDiscriminator(t);
                    return {
                        offset: 0,
                        bytes: g().encode(e ? h.Buffer.concat([r, e]) : r)
                    }
                }
                size(t) {
                    var e;
                    return 8 + (null !== (e = tk(this.idl, t)) && void 0 !== e ? e : 0)
                }
                static accountDiscriminator(t) {
                    return h.Buffer.from(_.sha256.digest(`account:${b()(t,{pascalCase:!0,preserveConsecutiveUppercase:!0})}`)).slice(0, 8)
                }
            }
            class tB {
                constructor(t) {
                    if (void 0 === t.events) {
                        this.layouts = new Map;
                        return
                    }
                    let e = t.events.map(e => {
                        let r = {
                            name: e.name,
                            type: {
                                kind: "struct",
                                fields: e.fields.map(t => ({
                                    name: t.name,
                                    type: t.type
                                }))
                            }
                        };
                        return [e.name, tE.typeDefLayout(r, t.types)]
                    });
                    this.layouts = new Map(e), this.discriminators = new Map(void 0 === t.events ? [] : t.events.map(t => {
                        var e;
                        return [v.fromByteArray((e = t.name, h.Buffer.from(_.sha256.digest(`event:${e}`)).slice(0, 8))), t.name]
                    }))
                }
                decode(t) {
                    let e;
                    try {
                        e = h.Buffer.from(v.toByteArray(t))
                    } catch (t) {
                        return null
                    }
                    let r = v.fromByteArray(e.slice(0, 8)),
                        n = this.discriminators.get(r);
                    if (void 0 === n) return null;
                    let i = this.layouts.get(n);
                    if (!i) throw Error(`Unknown event: ${n}`);
                    return {
                        data: i.decode(e.slice(8)),
                        name: n
                    }
                }
            }
            class tO {
                constructor(t) {
                    if (void 0 === t.state) throw Error("Idl state not defined.");
                    this.layout = tE.typeDefLayout(t.state.struct, t.types)
                }
                async encode(t, e) {
                    let r = h.Buffer.alloc(1e3),
                        n = this.layout.encode(e, r),
                        i = await tC(t),
                        o = r.slice(0, n);
                    return h.Buffer.concat([i, o])
                }
                decode(t) {
                    let e = t.slice(8);
                    return this.layout.decode(e)
                }
            }
            async function tC(t) {
                let e = tu("anchor-deprecated-state") ? "account" : "state";
                return h.Buffer.from(_.sha256.digest(`${e}:${t}`)).slice(0, 8)
            }
            class tD {
                constructor(t) {
                    if (void 0 === t.types) {
                        this.typeLayouts = new Map;
                        return
                    }
                    let e = t.types.map(e => [e.name, tE.typeDefLayout(e, t.types)]);
                    this.typeLayouts = new Map(e), this.idl = t
                }
                encode(t, e) {
                    let r = h.Buffer.alloc(1e3),
                        n = this.typeLayouts.get(t);
                    if (!n) throw Error(`Unknown type: ${t}`);
                    let i = n.encode(e, r);
                    return r.slice(0, i)
                }
                decode(t, e) {
                    let r = this.typeLayouts.get(t);
                    if (!r) throw Error(`Unknown type: ${t}`);
                    return r.decode(e)
                }
            }
            class tU {
                constructor(t) {
                    this.instruction = new tx(t), this.accounts = new tT(t), this.events = new tB(t), t.state && (this.state = new tO(t)), this.types = new tD(t)
                }
            }
            var tR = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {};
            class t$ {
                constructor(t, e) {
                    if (!Number.isInteger(t)) throw TypeError("span must be an integer");
                    this.span = t, this.property = e
                }
                makeDestinationObject() {
                    return {}
                }
                decode(t, e) {
                    throw Error("Layout is abstract")
                }
                encode(t, e, r) {
                    throw Error("Layout is abstract")
                }
                getSpan(t, e) {
                    if (0 > this.span) throw RangeError("indeterminate span");
                    return this.span
                }
                replicate(t) {
                    let e = Object.create(this.constructor.prototype);
                    return Object.assign(e, this), e.property = t, e
                }
                fromArray(t) {}
            }
            var tj = t$;
            class tM extends t$ {
                isCount() {
                    throw Error("ExternalLayout is abstract")
                }
            }
            class tN extends tM {
                constructor(t, e, r) {
                    if (!(t instanceof t$)) throw TypeError("layout must be a Layout");
                    if (void 0 === e) e = 0;
                    else if (!Number.isInteger(e)) throw TypeError("offset must be integer or undefined");
                    super(t.span, r || t.property), this.layout = t, this.offset = e
                }
                isCount() {
                    return this.layout instanceof tK || this.layout instanceof tV
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), this.layout.decode(t, e + this.offset)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), this.layout.encode(t, e, r + this.offset)
                }
            }
            class tK extends t$ {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readUIntLE(e, this.span)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeUIntLE(t, r, this.span), this.span
                }
            }
            class tV extends t$ {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw RangeError("span must not exceed 6 bytes")
                }
                decode(t, e) {
                    return void 0 === e && (e = 0), t.readUIntBE(e, this.span)
                }
                encode(t, e, r) {
                    return void 0 === r && (r = 0), e.writeUIntBE(t, r, this.span), this.span
                }
            }

            function tz(t) {
                let e = Math.floor(t / 4294967296);
                return {
                    hi32: e,
                    lo32: t - 4294967296 * e
                }
            }

            function tq(t, e) {
                return 4294967296 * t + e
            }
            class tF extends t$ {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = t.readUInt32LE(e);
                    return tq(t.readUInt32LE(e + 4), r)
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = tz(t);
                    return e.writeUInt32LE(n.lo32, r), e.writeUInt32LE(n.hi32, r + 4), 8
                }
            }
            class tW extends t$ {
                constructor(t) {
                    super(8, t)
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = t.readUInt32LE(e);
                    return tq(t.readInt32LE(e + 4), r)
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = tz(t);
                    return e.writeUInt32LE(n.lo32, r), e.writeInt32LE(n.hi32, r + 4), 8
                }
            }
            class tH extends t$ {
                constructor(t, e, r) {
                    if (!(Array.isArray(t) && t.reduce((t, e) => t && e instanceof t$, !0))) throw TypeError("fields must be array of Layout instances");
                    for (let n of ("boolean" == typeof e && void 0 === r && (r = e, e = void 0), t))
                        if (0 > n.span && void 0 === n.property) throw Error("fields cannot contain unnamed variable-length layout");
                    let n = -1;
                    try {
                        n = t.reduce((t, e) => t + e.getSpan(), 0)
                    } catch (t) {}
                    super(n, e), this.fields = t, this.decodePrefixes = !!r
                }
                getSpan(t, e) {
                    if (0 <= this.span) return this.span;
                    void 0 === e && (e = 0);
                    let r = 0;
                    try {
                        r = this.fields.reduce((r, n) => {
                            let i = n.getSpan(t, e);
                            return e += i, r + i
                        }, 0)
                    } catch (t) {
                        throw RangeError("indeterminate span")
                    }
                    return r
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = this.makeDestinationObject();
                    for (let n of this.fields)
                        if (void 0 !== n.property && (r[n.property] = n.decode(t, e)), e += n.getSpan(t, e), this.decodePrefixes && t.length === e) break;
                    return r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = r,
                        i = 0,
                        o = 0;
                    for (let n of this.fields) {
                        let s = n.span;
                        if (o = 0 < s ? s : 0, void 0 !== n.property) {
                            let i = t[n.property];
                            void 0 !== i && (o = n.encode(i, e, r), 0 > s && (s = n.getSpan(e, r)))
                        }
                        i = r, r += s
                    }
                    return i + o - n
                }
                fromArray(t) {
                    let e = this.makeDestinationObject();
                    for (let r of this.fields) void 0 !== r.property && 0 < t.length && (e[r.property] = t.shift());
                    return e
                }
                layoutFor(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    for (let e of this.fields)
                        if (e.property === t) return e
                }
                offsetOf(t) {
                    if ("string" != typeof t) throw TypeError("property must be string");
                    let e = 0;
                    for (let r of this.fields) {
                        if (r.property === t) return e;
                        0 > r.span ? e = -1 : 0 <= e && (e += r.span)
                    }
                }
            }
            class tG {
                constructor(t) {
                    this.property = t
                }
                decode() {
                    throw Error("UnionDiscriminator is abstract")
                }
                encode() {
                    throw Error("UnionDiscriminator is abstract")
                }
            }
            class tJ extends tG {
                constructor(t, e) {
                    if (!(t instanceof tM && t.isCount())) throw TypeError("layout must be an unsigned integer ExternalLayout");
                    super(e || t.property || "variant"), this.layout = t
                }
                decode(t, e) {
                    return this.layout.decode(t, e)
                }
                encode(t, e, r) {
                    return this.layout.encode(t, e, r)
                }
            }
            class tZ extends t$ {
                constructor(t, e, r) {
                    let n = t instanceof tK || t instanceof tV;
                    if (n) t = new tJ(new tN(t));
                    else if (t instanceof tM && t.isCount()) t = new tJ(t);
                    else if (!(t instanceof tG)) throw TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                    if (void 0 === e && (e = null), !(null === e || e instanceof t$)) throw TypeError("defaultLayout must be null or a Layout");
                    if (null !== e) {
                        if (0 > e.span) throw Error("defaultLayout must have constant span");
                        void 0 === e.property && (e = e.replicate("content"))
                    }
                    let i = -1;
                    e && 0 <= (i = e.span) && n && (i += t.layout.span), super(i, r), this.discriminator = t, this.usesPrefixDiscriminator = n, this.defaultLayout = e, this.registry = {};
                    let o = this.defaultGetSourceVariant.bind(this);
                    this.getSourceVariant = function(t) {
                        return o(t)
                    }, this.configGetSourceVariant = function(t) {
                        o = t.bind(this)
                    }
                }
                getSpan(t, e) {
                    if (0 <= this.span) return this.span;
                    void 0 === e && (e = 0);
                    let r = this.getVariant(t, e);
                    if (!r) throw Error("unable to determine span for unrecognized variant");
                    return r.getSpan(t, e)
                }
                defaultGetSourceVariant(t) {
                    if (t.hasOwnProperty(this.discriminator.property)) {
                        if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property)) return;
                        let e = this.registry[t[this.discriminator.property]];
                        if (e && (!e.layout || t.hasOwnProperty(e.property))) return e
                    } else
                        for (let e in this.registry) {
                            let r = this.registry[e];
                            if (t.hasOwnProperty(r.property)) return r
                        }
                    throw Error("unable to infer src variant")
                }
                decode(t, e) {
                    let r;
                    void 0 === e && (e = 0);
                    let n = this.discriminator,
                        i = n.decode(t, e),
                        o = this.registry[i];
                    if (void 0 === o) {
                        let s = 0;
                        o = this.defaultLayout, this.usesPrefixDiscriminator && (s = n.layout.span), (r = this.makeDestinationObject())[n.property] = i, r[o.property] = this.defaultLayout.decode(t, e + s)
                    } else r = o.decode(t, e);
                    return r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = this.getSourceVariant(t);
                    if (void 0 === n) {
                        let n = this.discriminator,
                            i = this.defaultLayout,
                            o = 0;
                        return this.usesPrefixDiscriminator && (o = n.layout.span), n.encode(t[n.property], e, r), o + i.encode(t[i.property], e, r + o)
                    }
                    return n.encode(t, e, r)
                }
                addVariant(t, e, r) {
                    let n = new tY(this, t, e, r);
                    return this.registry[t] = n, n
                }
                getVariant(t, e) {
                    let r = t;
                    return S.isBuffer(t) && (void 0 === e && (e = 0), r = this.discriminator.decode(t, e)), this.registry[r]
                }
            }
            class tY extends t$ {
                constructor(t, e, r, n) {
                    if (!(t instanceof tZ)) throw TypeError("union must be a Union");
                    if (!Number.isInteger(e) || 0 > e) throw TypeError("variant must be a (non-negative) integer");
                    if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                        if (!(r instanceof t$)) throw TypeError("layout must be a Layout");
                        if (null !== t.defaultLayout && 0 <= r.span && r.span > t.defaultLayout.span) throw Error("variant span exceeds span of containing union");
                        if ("string" != typeof n) throw TypeError("variant must have a String property")
                    }
                    let i = t.span;
                    0 > t.span && 0 <= (i = r ? r.span : 0) && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span), super(i, n), this.union = t, this.variant = e, this.layout = r || null
                }
                getSpan(t, e) {
                    if (0 <= this.span) return this.span;
                    void 0 === e && (e = 0);
                    let r = 0;
                    return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span), r + this.layout.getSpan(t, e + r)
                }
                decode(t, e) {
                    let r = this.makeDestinationObject();
                    if (void 0 === e && (e = 0), this !== this.union.getVariant(t, e)) throw Error("variant mismatch");
                    let n = 0;
                    return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(t, e + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
                }
                encode(t, e, r) {
                    void 0 === r && (r = 0);
                    let n = 0;
                    if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !t.hasOwnProperty(this.property)) throw TypeError("variant lacks property " + this.property);
                    this.union.discriminator.encode(this.variant, e, r);
                    let i = n;
                    if (this.layout && (this.layout.encode(t[this.property], e, r + n), i += this.layout.getSpan(e, r + n), 0 <= this.union.span && i > this.union.span)) throw Error("encoded variant overruns containing union");
                    return i
                }
                fromArray(t) {
                    if (this.layout) return this.layout.fromArray(t)
                }
            }
            class tX extends t$ {
                constructor(t, e) {
                    if (!(t instanceof tM && t.isCount() || Number.isInteger(t) && 0 <= t)) throw TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let r = -1;
                    t instanceof tM || (r = t), super(r, e), this.length = t
                }
                getSpan(t, e) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), r
                }
                decode(t, e) {
                    void 0 === e && (e = 0);
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), t.slice(e, e + r)
                }
                encode(t, e, r) {
                    let n = this.length;
                    if (this.length instanceof tM && (n = t.length), !(S.isBuffer(t) && n === t.length)) {
                        var i;
                        throw TypeError((i = "Blob.encode", (this.property ? i + "[" + this.property + "]" : i) + " requires (length " + n + ") Buffer as src"))
                    }
                    if (r + n > e.length) throw RangeError("encoding overruns Buffer");
                    return e.write(t.toString("hex"), r, n, "hex"), this.length instanceof tM && this.length.encode(n, e, r), n
                }
            }
            var tQ = (t, e, r) => new tN(t, e, r),
                t0 = t => new tK(1, t),
                t1 = t => new tK(4, t),
                t2 = t => new tW(t),
                t3 = (t, e, r) => new tH(t, e, r),
                t8 = (t, e, r) => new tZ(t, e, r),
                t6 = (t, e) => new tX(t, e);
            class t4 extends tj {
                constructor(t) {
                    super(-1, t), this.property = t, this.layout = t3([t1("length"), t1("lengthPadding"), t6(tQ(t1(), -8), "chars")], this.property)
                }
                encode(t, e, r = 0) {
                    if (null == t) return this.layout.span;
                    let n = {
                        chars: S.from(t, "utf8")
                    };
                    return this.layout.encode(n, e, r)
                }
                decode(t, e = 0) {
                    return this.layout.decode(t, e).chars.toString()
                }
                getSpan(t, e = 0) {
                    return t1().span + t1().span + new(y())(new Uint8Array(t).slice(e, e + 4), 10, "le").toNumber()
                }
            }

            function t5(t) {
                return new t4(t)
            }

            function t9(t) {
                return t6(32, t)
            }
            let t7 = t8(t1("instruction"));
            t7.addVariant(0, t3([t2("lamports"), t2("space"), t9("owner")]), "createAccount"), t7.addVariant(1, t3([t9("owner")]), "assign"), t7.addVariant(2, t3([t2("lamports")]), "transfer"), t7.addVariant(3, t3([t9("base"), t5("seed"), t2("lamports"), t2("space"), t9("owner")]), "createAccountWithSeed"), t7.addVariant(4, t3([t9("authorized")]), "advanceNonceAccount"), t7.addVariant(5, t3([t2("lamports")]), "withdrawNonceAccount"), t7.addVariant(6, t3([t9("authorized")]), "initializeNonceAccount"), t7.addVariant(7, t3([t9("authorized")]), "authorizeNonceAccount"), t7.addVariant(8, t3([t2("space")]), "allocate"), t7.addVariant(9, t3([t9("base"), t5("seed"), t2("space"), t9("owner")]), "allocateWithSeed"), t7.addVariant(10, t3([t9("base"), t5("seed"), t9("owner")]), "assignWithSeed"), t7.addVariant(11, t3([t2("lamports"), t5("seed"), t9("owner")]), "transferWithSeed"), Object.values(t7.registry).map(t => t.span);
            class et extends tj {
                constructor(t, e, r, n) {
                    super(t.span, n), this.layout = t, this.decoder = e, this.encoder = r
                }
                decode(t, e) {
                    return this.decoder(this.layout.decode(t, e))
                }
                encode(t, e, r) {
                    return this.layout.encode(this.encoder(t), e, r)
                }
                getSpan(t, e) {
                    return this.layout.getSpan(t, e)
                }
            }

            function ee(t) {
                return new et(t6(32), t => new f.PublicKey(t), t => t.toBuffer(), t)
            }

            function er(t, e) {
                let r, n = 255;
                for (; 0 != n;) {
                    try {
                        let i = t.concat(h.Buffer.from([n]));
                        r = function(t, e) {
                            let r = h.Buffer.alloc(0);
                            t.forEach(function(t) {
                                if (t.length > 32) throw TypeError("Max seed length exceeded");
                                r = h.Buffer.concat([r, en(t)])
                            }), r = h.Buffer.concat([r, e.toBuffer(), h.Buffer.from("ProgramDerivedAddress")]);
                            let n = (0, _.sha256)(new Uint8Array(r)),
                                i = new(y())(n, 16).toArray(void 0, 32);
                            if (f.PublicKey.isOnCurve(new Uint8Array(i))) throw Error("Invalid seeds, address must fall off the curve");
                            return new f.PublicKey(i)
                        }(i, e)
                    } catch (t) {
                        if (t instanceof TypeError) throw t;
                        n--;
                        continue
                    }
                    return [r, n]
                }
                throw Error("Unable to find a viable program address nonce")
            }
            t3([t1("version"), t1("state"), ee("authorizedPubkey"), ee("nonce"), t3([new tF("lamportsPerSignature")], "feeCalculator")]);
            let en = t => t instanceof h.Buffer ? t : t instanceof Uint8Array ? h.Buffer.from(t.buffer, t.byteOffset, t.byteLength) : h.Buffer.from(t);
            async function ei(t, ...e) {
                let r = [h.Buffer.from([97, 110, 99, 104, 111, 114])];
                e.forEach(t => {
                    r.push(t instanceof h.Buffer ? t : B(t).toBuffer())
                });
                let [n] = await f.PublicKey.findProgramAddress(r, B(t));
                return n
            }
            let eo = new f.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
                es = new f.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
            var ea = {
                exports: {}
            };
            a = ea.exports, c = "undefined" != typeof self ? self : tR, l = u = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = c.DOMException
                    }
                    return t.prototype = c, new t
                }(),
                function(t) {
                    var e = {
                        searchParams: "URLSearchParams" in l,
                        iterable: "Symbol" in l && "iterator" in Symbol,
                        blob: "FileReader" in l && "Blob" in l && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in l,
                        arrayBuffer: "ArrayBuffer" in l
                    };
                    if (e.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        n = ArrayBuffer.isView || function(t) {
                            return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                        };

                    function i(t) {
                        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw TypeError("Invalid character in header field name");
                        return t.toLowerCase()
                    }

                    function o(t) {
                        return "string" != typeof t && (t = String(t)), t
                    }

                    function s(t) {
                        var r = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return e.iterable && (r[Symbol.iterator] = function() {
                            return r
                        }), r
                    }

                    function a(t) {
                        this.map = {}, t instanceof a ? t.forEach(function(t, e) {
                            this.append(e, t)
                        }, this) : Array.isArray(t) ? t.forEach(function(t) {
                            this.append(t[0], t[1])
                        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                            this.append(e, t[e])
                        }, this)
                    }

                    function c(t) {
                        if (t.bodyUsed) return Promise.reject(TypeError("Already read"));
                        t.bodyUsed = !0
                    }

                    function u(t) {
                        return new Promise(function(e, r) {
                            t.onload = function() {
                                e(t.result)
                            }, t.onerror = function() {
                                r(t.error)
                            }
                        })
                    }

                    function d(t) {
                        var e = new FileReader,
                            r = u(e);
                        return e.readAsArrayBuffer(t), r
                    }

                    function h(t) {
                        if (t.slice) return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)), e.buffer
                    }

                    function f() {
                        return this.bodyUsed = !1, this._initBody = function(t) {
                            if (this._bodyInit = t, t) {
                                if ("string" == typeof t) this._bodyText = t;
                                else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                                else {
                                    var r;
                                    e.arrayBuffer && e.blob && (r = t) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : e.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || n(t)) ? this._bodyArrayBuffer = h(t) : this._bodyText = t = Object.prototype.toString.call(t)
                                }
                            } else this._bodyText = "";
                            !this.headers.get("content-type") && ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, e.blob && (this.blob = function() {
                            var t = c(this);
                            if (t) return t;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                            throw Error("could not read FormData body as blob")
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
                        }), this.text = function() {
                            var t, e, r, n = c(this);
                            if (n) return n;
                            if (this._bodyBlob) return t = this._bodyBlob, r = u(e = new FileReader), e.readAsText(t), r;
                            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), r = Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                            if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                            throw Error("could not read FormData body as text")
                        }, e.formData && (this.formData = function() {
                            return this.text().then(m)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    a.prototype.append = function(t, e) {
                        t = i(t), e = o(e);
                        var r = this.map[t];
                        this.map[t] = r ? r + ", " + e : e
                    }, a.prototype.delete = function(t) {
                        delete this.map[i(t)]
                    }, a.prototype.get = function(t) {
                        return t = i(t), this.has(t) ? this.map[t] : null
                    }, a.prototype.has = function(t) {
                        return this.map.hasOwnProperty(i(t))
                    }, a.prototype.set = function(t, e) {
                        this.map[i(t)] = o(e)
                    }, a.prototype.forEach = function(t, e) {
                        for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                    }, a.prototype.keys = function() {
                        var t = [];
                        return this.forEach(function(e, r) {
                            t.push(r)
                        }), s(t)
                    }, a.prototype.values = function() {
                        var t = [];
                        return this.forEach(function(e) {
                            t.push(e)
                        }), s(t)
                    }, a.prototype.entries = function() {
                        var t = [];
                        return this.forEach(function(e, r) {
                            t.push([r, e])
                        }), s(t)
                    }, e.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
                    var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function y(t, e) {
                        var r, n, i = (e = e || {}).body;
                        if (t instanceof y) {
                            if (t.bodyUsed) throw TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new a(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                        } else this.url = String(t);
                        if (this.credentials = e.credentials || this.credentials || "same-origin", (e.headers || !this.headers) && (this.headers = new a(e.headers)), this.method = (n = (r = e.method || this.method || "GET").toUpperCase(), p.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(i)
                    }

                    function m(t) {
                        var e = new FormData;
                        return t.trim().split("&").forEach(function(t) {
                            if (t) {
                                var r = t.split("="),
                                    n = r.shift().replace(/\+/g, " "),
                                    i = r.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(n), decodeURIComponent(i))
                            }
                        }), e
                    }

                    function g(t, e) {
                        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new a(e.headers), this.url = e.url || "", this._initBody(t)
                    }
                    y.prototype.clone = function() {
                        return new y(this, {
                            body: this._bodyInit
                        })
                    }, f.call(y.prototype), f.call(g.prototype), g.prototype.clone = function() {
                        return new g(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new a(this.headers),
                            url: this.url
                        })
                    }, g.error = function() {
                        var t = new g(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var v = [301, 302, 303, 307, 308];
                    g.redirect = function(t, e) {
                        if (-1 === v.indexOf(e)) throw RangeError("Invalid status code");
                        return new g(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }, t.DOMException = l.DOMException;
                    try {
                        new t.DOMException
                    } catch (e) {
                        t.DOMException = function(t, e) {
                            this.message = t, this.name = e;
                            var r = Error(t);
                            this.stack = r.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function w(r, n) {
                        return new Promise(function(i, o) {
                            var s = new y(r, n);
                            if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                            var c = new XMLHttpRequest;

                            function u() {
                                c.abort()
                            }
                            c.onload = function() {
                                var t, e, r = {
                                    status: c.status,
                                    statusText: c.statusText,
                                    headers: (t = c.getAllResponseHeaders() || "", e = new a, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                        var r = t.split(":"),
                                            n = r.shift().trim();
                                        if (n) {
                                            var i = r.join(":").trim();
                                            e.append(n, i)
                                        }
                                    }), e)
                                };
                                r.url = "responseURL" in c ? c.responseURL : r.headers.get("X-Request-URL"), i(new g("response" in c ? c.response : c.responseText, r))
                            }, c.onerror = function() {
                                o(TypeError("Network request failed"))
                            }, c.ontimeout = function() {
                                o(TypeError("Network request failed"))
                            }, c.onabort = function() {
                                o(new t.DOMException("Aborted", "AbortError"))
                            }, c.open(s.method, s.url, !0), "include" === s.credentials ? c.withCredentials = !0 : "omit" === s.credentials && (c.withCredentials = !1), "responseType" in c && e.blob && (c.responseType = "blob"), s.headers.forEach(function(t, e) {
                                c.setRequestHeader(e, t)
                            }), s.signal && (s.signal.addEventListener("abort", u), c.onreadystatechange = function() {
                                4 === c.readyState && s.signal.removeEventListener("abort", u)
                            }), c.send(void 0 === s._bodyInit ? null : s._bodyInit)
                        })
                    }
                    w.polyfill = !0, l.fetch || (l.fetch = w, l.Headers = a, l.Request = y, l.Response = g), t.Headers = a, t.Request = y, t.Response = g, t.fetch = w, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }({}), u.fetch.ponyfill = !0, delete u.fetch.polyfill, (a = u.fetch).default = u.fetch, a.fetch = u.fetch, a.Headers = u.Headers, a.Request = u.Request, a.Response = u.Response, ea.exports = a, (d = ea.exports) && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") && d.default;
            let ec = E.rustEnum([E.struct([], "uninitialized"), E.struct([E.option(E.publicKey(), "authorityAddress")], "buffer"), E.struct([E.publicKey("programdataAddress")], "program"), E.struct([E.u64("slot"), E.option(E.publicKey(), "upgradeAuthorityAddress")], "programData")], void 0, E.u32());
            async function eu(t) {
                let e = (await f.PublicKey.findProgramAddress([], t))[0];
                return await f.PublicKey.createWithSeed(e, "anchor:idl", t)
            }
            let el = E.struct([E.publicKey("authority"), E.vecU8("data")]);

            function ed(t, e) {
                var r, n;
                let i = {},
                    o = t.args ? t.args.length : 0;
                if (e.length > o) {
                    if (e.length !== o + 1) throw Error(`provided too many arguments ${e} to instruction ${null==t?void 0:t.name} expecting: ${null!==(n=null===(r=t.args)||void 0===r?void 0:r.map(t=>t.name))&&void 0!==n?n:[]}`);
                    i = e.pop()
                }
                return [e, i]
            }
            class eh {
                static build(t, e, r) {
                    if ("_inner" === t.name) throw new tl("the _inner name is reserved");
                    let n = (...i) => {
                        let [o, s] = ed(t, [...i]);
                        T(t.accounts, s.accounts), [...i];
                        let a = n.accounts(s.accounts);
                        return void 0 !== s.remainingAccounts && a.push(...s.remainingAccounts), tu("debug-logs") && console.log("Outgoing account metas:", a), new f.TransactionInstruction({
                            keys: a,
                            programId: r,
                            data: e(t.name, function(t, ...e) {
                                if (t.args.length != e.length) throw Error("Invalid argument length");
                                let r = {},
                                    n = 0;
                                return t.args.forEach(t => {
                                    r[t.name] = e[n], n += 1
                                }), r
                            }(t, ...o))
                        })
                    };
                    return n.accounts = e => eh.accountsArray(e, t.accounts, r, t.name), n
                }
                static accountsArray(t, e, r, n) {
                    return t ? e.map(e => {
                        if (void 0 !== ("accounts" in e ? e.accounts : void 0)) {
                            let i = t[e.name];
                            return eh.accountsArray(i, e.accounts, r, n).flat()
                        } {
                            let i;
                            try {
                                i = B(t[e.name])
                            } catch (t) {
                                throw Error(`Wrong input type for account "${e.name}" in the instruction accounts object${void 0!==n?' for instruction "'+n+'"':""}. Expected PublicKey or string.`)
                            }
                            let o = e.isOptional && i.equals(r);
                            return {
                                pubkey: i,
                                isWritable: e.isMut && !o,
                                isSigner: e.isSigner && !o
                            }
                        }
                    }).flat() : []
                }
            }
            class ef {
                static build(t, e, r, n) {
                    return async (...i) => {
                        var o;
                        let s = e(...i),
                            [, a] = ed(t, [...i]);
                        if (void 0 === n.sendAndConfirm) throw Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
                        try {
                            return await n.sendAndConfirm(s, null !== (o = a.signers) && void 0 !== o ? o : [], a.options)
                        } catch (t) {
                            throw tp(t, r)
                        }
                    }
                }
            }
            class ep {
                static build(t, e) {
                    return (...r) => {
                        var n, i, o;
                        let [, s] = ed(t, [...r]), a = new f.Transaction;
                        if (s.preInstructions && s.instructions) throw Error("instructions is deprecated, use preInstructions");
                        return null === (n = s.preInstructions) || void 0 === n || n.forEach(t => a.add(t)), null === (i = s.instructions) || void 0 === i || i.forEach(t => a.add(t)), a.add(e(...r)), null === (o = s.postInstructions) || void 0 === o || o.forEach(t => a.add(t)), a
                    }
                }
            }
            class ey {
                static build(t, e, r, n) {
                    if (void 0 !== t.state) return new em(t, r, n, e)
                }
            }
            class em {
                get programId() {
                    return this._programId
                }
                constructor(t, e, r = ts(), n = new tU(t)) {
                    var i;
                    let o, s, a;
                    this.provider = r, this.coder = n, this._idl = t, this._programId = e, this._address = eg(e), this._sub = null;
                    let [c, u, l] = (o = {}, s = {}, a = {}, null === (i = t.state) || void 0 === i || i.methods.forEach(i => {
                        let c = eh.build(i, (t, e) => n.instruction.encodeState(t, e), e);
                        c.accounts = t => (function(t, e, r, n) {
                            if ("new" !== r.name) return T(r.accounts, n), [{
                                pubkey: eg(t),
                                isWritable: !0,
                                isSigner: !1
                            }]; {
                                let [r] = er([], t);
                                if (void 0 === e.wallet) throw Error("This function requires the Provider interface implementor to have a 'wallet' field.");
                                return [{
                                    pubkey: e.wallet.publicKey,
                                    isWritable: !1,
                                    isSigner: !0
                                }, {
                                    pubkey: eg(t),
                                    isWritable: !0,
                                    isSigner: !1
                                }, {
                                    pubkey: r,
                                    isWritable: !1,
                                    isSigner: !1
                                }, {
                                    pubkey: f.SystemProgram.programId,
                                    isWritable: !1,
                                    isSigner: !1
                                }, {
                                    pubkey: t,
                                    isWritable: !1,
                                    isSigner: !1
                                }]
                            }
                        })(e, r, i, t).concat(eh.accountsArray(t, i.accounts, e, i.name));
                        let u = ep.build(i, c),
                            l = ef.build(i, u, L(t), r),
                            d = b()(i.name);
                        o[d] = c, s[d] = u, a[d] = l
                    }), [o, s, a]);
                    this.instruction = c, this.transaction = u, this.rpc = l
                }
                async fetch() {
                    let t = this.address(),
                        e = await this.provider.connection.getAccountInfo(t);
                    if (null === e) throw Error(`Account does not exist ${t.toString()}`);
                    let r = this._idl.state;
                    if (!r) throw Error("State is not specified in IDL.");
                    if ((await tC(r.struct.name)).compare(e.data.slice(0, 8))) throw Error("Invalid account discriminator");
                    return this.coder.state.decode(e.data)
                }
                address() {
                    return this._address
                }
                subscribe(t) {
                    if (null !== this._sub) return this._sub.ee;
                    let e = new(x()),
                        r = this.provider.connection.onAccountChange(this.address(), t => {
                            let r = this.coder.state.decode(t.data);
                            e.emit("change", r)
                        }, t);
                    return this._sub = {
                        ee: e,
                        listener: r
                    }, e
                }
                unsubscribe() {
                    null !== this._sub && this.provider.connection.removeAccountChangeListener(this._sub.listener).then(async () => {
                        this._sub = null
                    }).catch(console.error)
                }
            }

            function eg(t) {
                let [e] = er([], t);
                return function(t, e, r) {
                    let n = h.Buffer.concat([t.toBuffer(), h.Buffer.from(e), r.toBuffer()]),
                        i = _.sha256.digest(n);
                    return new f.PublicKey(h.Buffer.from(i))
                }(e, "unversioned", t)
            }
            class ev {
                static build(t, e, r, n) {
                    var i;
                    let o = {};
                    return null === (i = t.accounts) || void 0 === i || i.forEach(i => {
                        o[b()(i.name)] = new ew(t, i, r, n, e)
                    }), o
                }
            }
            class ew {
                get size() {
                    return this._size
                }
                get programId() {
                    return this._programId
                }
                get provider() {
                    return this._provider
                }
                get coder() {
                    return this._coder
                }
                constructor(t, e, r, n, i) {
                    this._idlAccount = e, this._programId = r, this._provider = null != n ? n : ts(), this._coder = null != i ? i : new tU(t), this._size = this._coder.accounts.size(e)
                }
                async fetchNullable(t, e) {
                    let {
                        data: r
                    } = await this.fetchNullableAndContext(t, e);
                    return r
                }
                async fetchNullableAndContext(t, e) {
                    let {
                        value: r,
                        context: n
                    } = await this.getAccountInfoAndContext(t, e);
                    return {
                        data: r && 0 !== r.data.length ? this._coder.accounts.decode(this._idlAccount.name, r.data) : null,
                        context: n
                    }
                }
                async fetch(t, e) {
                    let {
                        data: r
                    } = await this.fetchNullableAndContext(t, e);
                    if (null === r) throw Error(`Account does not exist or has no data ${t.toString()}`);
                    return r
                }
                async fetchAndContext(t, e) {
                    let {
                        data: r,
                        context: n
                    } = await this.fetchNullableAndContext(t, e);
                    if (null === r) throw Error(`Account does not exist ${t.toString()}`);
                    return {
                        data: r,
                        context: n
                    }
                }
                async fetchMultiple(t, e) {
                    return (await this.fetchMultipleAndContext(t, e)).map(t => t ? t.data : null)
                }
                async fetchMultipleAndContext(t, e) {
                    return (await Z(this._provider.connection, t.map(t => B(t)), e)).map(t => {
                        if (null == t) return null;
                        let {
                            account: e,
                            context: r
                        } = t;
                        return {
                            data: this._coder.accounts.decode(this._idlAccount.name, e.data),
                            context: r
                        }
                    })
                }
                async all(t) {
                    let e = this.coder.accounts.memcmp(this._idlAccount.name, t instanceof S ? t : void 0),
                        r = [];
                    return (null == e ? void 0 : e.offset) != void 0 && (null == e ? void 0 : e.bytes) != void 0 && r.push({
                        memcmp: {
                            offset: e.offset,
                            bytes: e.bytes
                        }
                    }), (null == e ? void 0 : e.dataSize) != void 0 && r.push({
                        dataSize: e.dataSize
                    }), (await this._provider.connection.getProgramAccounts(this._programId, {
                        commitment: this._provider.connection.commitment,
                        filters: [...r, ...Array.isArray(t) ? t : []]
                    })).map(({
                        pubkey: t,
                        account: e
                    }) => ({
                        publicKey: t,
                        account: this._coder.accounts.decode(this._idlAccount.name, e.data)
                    }))
                }
                subscribe(t, e) {
                    let r = eb.get(t.toString());
                    if (r) return r.ee;
                    let n = new(x());
                    t = B(t);
                    let i = this._provider.connection.onAccountChange(t, t => {
                        let e = this._coder.accounts.decode(this._idlAccount.name, t.data);
                        n.emit("change", e)
                    }, e);
                    return eb.set(t.toString(), {
                        ee: n,
                        listener: i
                    }), n
                }
                async unsubscribe(t) {
                    let e = eb.get(t.toString());
                    if (!e) {
                        console.warn("Address is not subscribed");
                        return
                    }
                    eb && await this._provider.connection.removeAccountChangeListener(e.listener).then(() => {
                        eb.delete(t.toString())
                    }).catch(console.error)
                }
                async createInstruction(t, e) {
                    let r = this.size;
                    if (void 0 === this._provider.publicKey) throw Error("This function requires the Provider interface implementor to have a 'publicKey' field.");
                    return f.SystemProgram.createAccount({
                        fromPubkey: this._provider.publicKey,
                        newAccountPubkey: t.publicKey,
                        space: null != e ? e : r,
                        lamports: await this._provider.connection.getMinimumBalanceForRentExemption(null != e ? e : r),
                        programId: this._programId
                    })
                }
                async associated(...t) {
                    let e = await this.associatedAddress(...t);
                    return await this.fetch(e)
                }
                async associatedAddress(...t) {
                    return await ei(this._programId, ...t)
                }
                async getAccountInfo(t, e) {
                    return await this._provider.connection.getAccountInfo(B(t), e)
                }
                async getAccountInfoAndContext(t, e) {
                    return await this._provider.connection.getAccountInfoAndContext(B(t), e)
                }
            }
            let eb = new Map,
                e_ = "Program log: ",
                eE = "Program data: ",
                eA = e_.length,
                eI = eE.length;
            class ex {
                constructor(t, e, r) {
                    this._programId = t, this._provider = e, this._eventParser = new eP(t, r), this._eventCallbacks = new Map, this._eventListeners = new Map, this._listenerIdCount = 0
                }
                addEventListener(t, e) {
                    var r;
                    let n = this._listenerIdCount;
                    return this._listenerIdCount += 1, this._eventListeners.has(t) || this._eventListeners.set(t, []), this._eventListeners.set(t, (null !== (r = this._eventListeners.get(t)) && void 0 !== r ? r : []).concat(n)), this._eventCallbacks.set(n, [t, e]), void 0 !== this._onLogsSubscriptionId || (this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (t, e) => {
                        if (!t.err)
                            for (let r of this._eventParser.parseLogs(t.logs)) {
                                let n = this._eventListeners.get(r.name);
                                n && n.forEach(n => {
                                    let i = this._eventCallbacks.get(n);
                                    if (i) {
                                        let [, n] = i;
                                        n(r.data, e.slot, t.signature)
                                    }
                                })
                            }
                    })), n
                }
                async removeEventListener(t) {
                    let e = this._eventCallbacks.get(t);
                    if (!e) throw Error(`Event listener ${t} doesn't exist!`);
                    let [r] = e, n = this._eventListeners.get(r);
                    if (!n) throw Error(`Event listeners don't exist for ${r}!`);
                    this._eventCallbacks.delete(t), n = n.filter(e => e !== t), this._eventListeners.set(r, n), 0 === n.length && this._eventListeners.delete(r), 0 == this._eventCallbacks.size && (P.ok(0 === this._eventListeners.size), void 0 !== this._onLogsSubscriptionId && (await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId), this._onLogsSubscriptionId = void 0))
                }
            }
            class eP {
                constructor(t, e) {
                    this.coder = e, this.programId = t
                }* parseLogs(t, e = !1) {
                    let r = new ek(t),
                        n = new eS,
                        i = r.next();
                    for (; null !== i;) {
                        let [t, o, s] = this.handleLog(n, i, e);
                        t && (yield t), o && n.push(o), s && n.pop(), i = r.next()
                    }
                }
                handleLog(t, e, r) {
                    return t.stack.length > 0 && t.program() === this.programId.toString() ? this.handleProgramLog(e, r) : [null, ...this.handleSystemLog(e)]
                }
                handleProgramLog(t, e) {
                    if (!(t.startsWith(e_) || t.startsWith(eE))) return [null, ...this.handleSystemLog(t)]; {
                        let r = t.startsWith(e_) ? t.slice(eA) : t.slice(eI),
                            n = this.coder.events.decode(r);
                        if (e && null === n) throw Error(`Unable to decode event ${r}`);
                        return [n, null, !1]
                    }
                }
                handleSystemLog(t) {
                    let e = t.split(":")[0];
                    return null !== e.match(/^Program (.*) success/g) ? [null, !0] : e.startsWith(`Program ${this.programId.toString()} invoke`) ? [this.programId.toString(), !1] : e.includes("invoke") ? ["cpi", !1] : [null, !1]
                }
            }
            class eS {
                constructor() {
                    this.stack = []
                }
                program() {
                    return P.ok(this.stack.length > 0), this.stack[this.stack.length - 1]
                }
                push(t) {
                    this.stack.push(t)
                }
                pop() {
                    P.ok(this.stack.length > 0), this.stack.pop()
                }
            }
            class ek {
                constructor(t) {
                    this.logs = t
                }
                next() {
                    if (0 === this.logs.length) return null;
                    let t = this.logs[0];
                    return this.logs = this.logs.slice(1), t
                }
            }
            class eL {
                static build(t, e, r, n, i, o, s) {
                    return async (...a) => {
                        var c;
                        let u;
                        let l = e(...a),
                            [, d] = ed(t, [...a]);
                        if (void 0 === n.simulate) throw Error("This function requires 'Provider.simulate' to be implemented.");
                        try {
                            u = await n.simulate(l, d.signers, null === (c = d.options) || void 0 === c ? void 0 : c.commitment)
                        } catch (t) {
                            throw tp(t, r)
                        }
                        if (void 0 === u) throw Error("Unable to simulate transaction");
                        let h = u.logs;
                        if (!h) throw Error("Simulated logs not found");
                        let f = [];
                        if (s.events)
                            for (let t of new eP(o, i).parseLogs(h)) f.push(t);
                        return {
                            events: f,
                            raw: h
                        }
                    }
                }
            }

            function eT(t) {
                return new eO(t6(8), t => eD.fromBuffer(t), t => t.toBuffer(), t)
            }

            function eB(t) {
                return new eO(t6(32), t => new f.PublicKey(t), t => t.toBuffer(), t)
            }
            class eO extends tj {
                constructor(t, e, r, n) {
                    super(t.span, n), this.layout = t, this.decoder = e, this.encoder = r
                }
                decode(t, e) {
                    return this.decoder(this.layout.decode(t, e))
                }
                encode(t, e, r) {
                    return this.layout.encode(this.encoder(t), e, r)
                }
                getSpan(t, e) {
                    return this.layout.getSpan(t, e)
                }
            }
            class eC extends tj {
                constructor(t, e) {
                    super(-1, e), this.layout = t, this.discriminator = t1()
                }
                encode(t, e, r = 0) {
                    return null == t ? this.layout.span + this.discriminator.encode(0, e, r) : (this.discriminator.encode(1, e, r), this.layout.encode(t, e, r + 4) + 4)
                }
                decode(t, e = 0) {
                    let r = this.discriminator.decode(t, e);
                    if (0 === r) return null;
                    if (1 === r) return this.layout.decode(t, e + 4);
                    throw Error("Invalid coption " + this.layout.property)
                }
                getSpan(t, e = 0) {
                    return this.layout.getSpan(t, e + 4) + 4
                }
            }
            class eD extends y() {
                toBuffer() {
                    let t = super.toArray().reverse(),
                        e = S.from(t);
                    if (8 === e.length) return e;
                    if (e.length >= 8) throw Error("u64 too large");
                    let r = S.alloc(8);
                    return e.copy(r), r
                }
                static fromBuffer(t) {
                    if (8 !== t.length) throw Error(`Invalid buffer length: ${t.length}`);
                    return new eD([...t].reverse().map(t => `00${t.toString(16)}`.slice(-2)).join(""), 16)
                }
            }
            let eU = t3([eB("mint"), eB("owner"), eT("amount"), new eC(eB(), "delegate"), (t => {
                let e = t8(t0("discriminator"), null, t);
                return e.addVariant(0, t3([]), "uninitialized"), e.addVariant(1, t3([]), "initialized"), e.addVariant(2, t3([]), "frozen"), e
            })("state"), new eC(eT(), "isNative"), eT("delegatedAmount"), new eC(eB(), "closeAuthority")]);
            class eR {
                constructor(t, e, r, n, i, o, s, a) {
                    this._accounts = e, this._provider = r, this._programId = n, this._idlIx = i, this._idlTypes = s, this._customResolver = a, this._args = t, this._accountStore = new e$(r, o, this._programId)
                }
                args(t) {
                    this._args = t
                }
                async resolve() {
                    for (await this.resolveConst(this._idlIx.accounts); await this.resolvePdas(this._idlIx.accounts) + await this.resolveRelations(this._idlIx.accounts) + await this.resolveCustom() > 0;);
                }
                async resolveCustom() {
                    if (this._customResolver) {
                        let {
                            accounts: t,
                            resolved: e
                        } = await this._customResolver({
                            args: this._args,
                            accounts: this._accounts,
                            provider: this._provider,
                            programId: this._programId,
                            idlIx: this._idlIx
                        });
                        return this._accounts = t, e
                    }
                    return 0
                }
                resolveOptionalsHelper(t, e) {
                    let r = {};
                    for (let n of e) {
                        let e = n.name,
                            i = t[e];
                        void 0 !== i && (eM(i) ? "accounts" in n ? r[e] = this.resolveOptionalsHelper(i, n.accounts) : r[e] = function t(e, r) {
                            let n = {};
                            for (let i in e) {
                                let o = e[i];
                                if (null === o) {
                                    if (r) throw Error("Failed to resolve optionals due to IDL type mismatch with input accounts!");
                                    continue
                                }
                                n[i] = eM(o) ? t(o, !0) : B(o)
                            }
                            return n
                        }(i, !0) : null !== i ? r[e] = B(i) : n.isOptional && (r[e] = this._programId))
                    }
                    return r
                }
                resolveOptionals(t) {
                    Object.assign(this._accounts, this.resolveOptionalsHelper(t, this._idlIx.accounts))
                }
                get(t) {
                    let e = t.reduce((t, e) => t && t[e], this._accounts);
                    if (e && e.toBase58) return e
                }
                set(t, e) {
                    let r = this._accounts;
                    t.forEach((n, i) => {
                        i == t.length - 1 && (r[n] = e), r[n] = r[n] || {}, r = r[n]
                    })
                }
                async resolveConst(t, e = []) {
                    for (let r = 0; r < t.length; r += 1) {
                        let n = t[r],
                            i = n.accounts;
                        i && await this.resolveConst(i, [...e, b()(n.name)]);
                        let o = b()(n.name);
                        if (n.isSigner && !this.get([...e, o])) {
                            if (void 0 === this._provider.wallet) throw Error("This function requires the Provider interface implementor to have a 'wallet' field.");
                            this.set([...e, o], this._provider.wallet.publicKey)
                        }
                        Reflect.has(eR.CONST_ACCOUNTS, o) && !this.get([...e, o]) && this.set([...e, o], eR.CONST_ACCOUNTS[o])
                    }
                }
                async resolvePdas(t, e = []) {
                    let r = 0;
                    for (let n = 0; n < t.length; n += 1) {
                        let i = t[n],
                            o = i.accounts;
                        o && (r += await this.resolvePdas(o, [...e, b()(i.name)]));
                        let s = b()(i.name);
                        i.pda && i.pda.seeds.length > 0 && !this.get([...e, s]) && await this.autoPopulatePda(i, e) && (r += 1)
                    }
                    return r
                }
                async resolveRelations(t, e = []) {
                    let r = 0;
                    for (let n = 0; n < t.length; n += 1) {
                        let i = t[n],
                            o = i.accounts;
                        o && (r += await this.resolveRelations(o, [...e, b()(i.name)]));
                        let s = i.relations || [],
                            a = [...e, b()(i.name)],
                            c = this.get(a);
                        if (c) {
                            let t = s.filter(t => !this.get([...e, b()(t)]));
                            if (r += t.length, t.length > 0) {
                                let r = await this._accountStore.fetchAccount({
                                    publicKey: c
                                });
                                await Promise.all(t.map(async t => {
                                    let n = b()(t);
                                    return this.set([...e, n], r[n]), r[n]
                                }))
                            }
                        }
                    }
                    return r
                }
                async autoPopulatePda(t, e = []) {
                    if (!t.pda || !t.pda.seeds) throw Error("Must have seeds");
                    let r = await Promise.all(t.pda.seeds.map(t => this.toBuffer(t, e)));
                    if (r.some(t => void 0 === t)) return;
                    let n = await this.parseProgramId(t, e);
                    if (!n) return;
                    let [i] = await f.PublicKey.findProgramAddress(r, n);
                    this.set([...e, b()(t.name)], i)
                }
                async parseProgramId(t, e = []) {
                    var r;
                    if (!(null === (r = t.pda) || void 0 === r ? void 0 : r.programId)) return this._programId;
                    switch (t.pda.programId.kind) {
                        case "const":
                            return new f.PublicKey(this.toBufferConst(t.pda.programId.value));
                        case "arg":
                            return this.argValue(t.pda.programId);
                        case "account":
                            return await this.accountValue(t.pda.programId, e);
                        default:
                            throw Error(`Unexpected program seed kind: ${t.pda.programId.kind}`)
                    }
                }
                async toBuffer(t, e = []) {
                    switch (t.kind) {
                        case "const":
                            return this.toBufferConst(t);
                        case "arg":
                            return await this.toBufferArg(t);
                        case "account":
                            return await this.toBufferAccount(t, e);
                        default:
                            throw Error(`Unexpected seed kind: ${t.kind}`)
                    }
                }
                getType(t, e = []) {
                    if (e.length > 0 && t.defined) {
                        let r = this._idlTypes.find(e => e.name === t.defined);
                        if (!r) throw Error(`Cannot find type ${t.defined}`);
                        let n = r.type.fields.find(t => t.name === e[0]);
                        return this.getType(n.type, e.slice(1))
                    }
                    return t
                }
                toBufferConst(t) {
                    return this.toBufferValue(this.getType(t.type, (t.path || "").split(".").slice(1)), t.value)
                }
                async toBufferArg(t) {
                    let e = this.argValue(t);
                    if (void 0 !== e) return this.toBufferValue(this.getType(t.type, (t.path || "").split(".").slice(1)), e)
                }
                argValue(t) {
                    let e = t.path.split("."),
                        r = b()(e[0]),
                        n = this._idlIx.args.findIndex(t => t.name === r);
                    if (-1 === n) throw Error(`Unable to find argument for seed: ${r}`);
                    return e.slice(1).reduce((t, e) => (t || {})[e], this._args[n])
                }
                async toBufferAccount(t, e = []) {
                    let r = await this.accountValue(t, e);
                    if (r) return this.toBufferValue(t.type, r)
                }
                async accountValue(t, e = []) {
                    let r = t.path.split("."),
                        n = r[0],
                        i = this.get([...e, b()(n)]);
                    if (null === i) throw Error("fieldPubkey is null");
                    if (1 === r.length) return i;
                    let o = await this._accountStore.fetchAccount({
                        publicKey: i,
                        name: t.account
                    });
                    return this.parseAccountValue(o, r.slice(1))
                }
                parseAccountValue(t, e) {
                    let r;
                    for (; e.length > 0;) r = t[b()(e[0])], e = e.slice(1);
                    return r
                }
                toBufferValue(t, e) {
                    switch (t) {
                        case "u8":
                            return S.from([e]);
                        case "u16":
                            let r = S.alloc(2);
                            return r.writeUInt16LE(e), r;
                        case "u32":
                            let n = S.alloc(4);
                            return n.writeUInt32LE(e), n;
                        case "u64":
                            let i = S.alloc(8);
                            return i.writeBigUInt64LE(BigInt(e)), i;
                        case "string":
                            var o;
                            return S.from((o = e, new TextEncoder().encode(o)));
                        case "publicKey":
                            return e.toBuffer();
                        default:
                            if (t.array) return S.from(e);
                            throw Error(`Unexpected seed type: ${t}`)
                    }
                }
            }
            eR.CONST_ACCOUNTS = {
                associatedTokenProgram: es,
                rent: f.SYSVAR_RENT_PUBKEY,
                systemProgram: f.SystemProgram.programId,
                tokenProgram: eo,
                clock: f.SYSVAR_CLOCK_PUBKEY
            };
            class e$ {
                constructor(t, e, r) {
                    this._provider = t, this._programId = r, this._cache = new Map, this._idls = {}, this._idls[r.toBase58()] = e
                }
                async ensureIdl(t) {
                    if (!this._idls[t.toBase58()]) {
                        let e = await ez.fetchIdl(t, this._provider);
                        if (e) {
                            let r = new ez(e, t, this._provider);
                            this._idls[t.toBase58()] = r.account
                        }
                    }
                    return this._idls[t.toBase58()]
                }
                async fetchAccount({
                    publicKey: t,
                    name: e,
                    programId: r = this._programId
                }) {
                    let n = t.toString();
                    if (!this._cache.has(n)) {
                        if ("TokenAccount" === e) {
                            var i;
                            let e = await this._provider.connection.getAccountInfo(t);
                            if (null === e) throw Error(`invalid account info for ${n}`);
                            let r = (i = e.data, eU.decode(i));
                            this._cache.set(n, r)
                        } else if (e) {
                            let i = await this.ensureIdl(r);
                            if (i) {
                                let r = i[b()(e)];
                                if (r) {
                                    let e = await r.fetch(t);
                                    this._cache.set(n, e)
                                }
                            }
                        } else {
                            let e = await this._provider.connection.getAccountInfo(t);
                            if (null === e) throw Error(`invalid account info for ${n}`);
                            let r = e.data,
                                i = await this.ensureIdl(e.owner);
                            if (i) {
                                let t = Object.values(i)[0];
                                if (!t) throw Error("No accounts for this program");
                                let e = t.coder.accounts.decodeAny(r);
                                this._cache.set(n, e)
                            }
                        }
                    }
                    return this._cache.get(n)
                }
            }
            class ej {
                static build(t, e, r, n, i, o, s, a, c, u, l) {
                    return (...d) => new eN(d, n, i, o, s, a, t, e, r, c, u, l)
                }
            }

            function eM(t) {
                return "object" == typeof t && null !== t && !("_bn" in t)
            }
            class eN {
                constructor(t, e, r, n, i, o, s, a, c, u, l, d) {
                    this._ixFn = e, this._txFn = r, this._rpcFn = n, this._simulateFn = i, this._viewFn = o, this._programId = a, this._accounts = {}, this._remainingAccounts = [], this._signers = [], this._preInstructions = [], this._postInstructions = [], this._autoResolveAccounts = !0, this._args = t, this._accountsResolver = new eR(t, this._accounts, s, a, c, u, l, d)
                }
                args(t) {
                    this._args = t, this._accountsResolver.args(t)
                }
                async pubkeys() {
                    return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._accounts
                }
                accounts(t) {
                    return this._autoResolveAccounts = !0, this._accountsResolver.resolveOptionals(t), this
                }
                accountsStrict(t) {
                    return this._autoResolveAccounts = !1, this._accountsResolver.resolveOptionals(t), this
                }
                signers(t) {
                    return this._signers = this._signers.concat(t), this
                }
                remainingAccounts(t) {
                    return this._remainingAccounts = this._remainingAccounts.concat(t), this
                }
                preInstructions(t) {
                    return this._preInstructions = this._preInstructions.concat(t), this
                }
                postInstructions(t) {
                    return this._postInstructions = this._postInstructions.concat(t), this
                }
                async rpc(t) {
                    return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._rpcFn(...this._args, {
                        accounts: this._accounts,
                        signers: this._signers,
                        remainingAccounts: this._remainingAccounts,
                        preInstructions: this._preInstructions,
                        postInstructions: this._postInstructions,
                        options: t
                    })
                }
                async rpcAndKeys(t) {
                    return {
                        pubkeys: await this.pubkeys(),
                        signature: await this.rpc(t)
                    }
                }
                async view(t) {
                    if (this._autoResolveAccounts && await this._accountsResolver.resolve(), !this._viewFn) throw Error("Method does not support views");
                    return this._viewFn(...this._args, {
                        accounts: this._accounts,
                        signers: this._signers,
                        remainingAccounts: this._remainingAccounts,
                        preInstructions: this._preInstructions,
                        postInstructions: this._postInstructions,
                        options: t
                    })
                }
                async simulate(t) {
                    return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._simulateFn(...this._args, {
                        accounts: this._accounts,
                        signers: this._signers,
                        remainingAccounts: this._remainingAccounts,
                        preInstructions: this._preInstructions,
                        postInstructions: this._postInstructions,
                        options: t
                    })
                }
                async instruction() {
                    return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._ixFn(...this._args, {
                        accounts: this._accounts,
                        signers: this._signers,
                        remainingAccounts: this._remainingAccounts,
                        preInstructions: this._preInstructions,
                        postInstructions: this._postInstructions
                    })
                }
                async prepare() {
                    return {
                        instruction: await this.instruction(),
                        pubkeys: await this.pubkeys(),
                        signers: await this._signers
                    }
                }
                async transaction() {
                    return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._txFn(...this._args, {
                        accounts: this._accounts,
                        signers: this._signers,
                        remainingAccounts: this._remainingAccounts,
                        preInstructions: this._preInstructions,
                        postInstructions: this._postInstructions
                    })
                }
            }
            class eK {
                static build(t, e, r, n) {
                    let i = e.accounts.find(t => t.isMut),
                        o = !!e.returns;
                    if (!i && o) return async (...i) => {
                        var o, s, a;
                        let c = await r(...i),
                            u = `Program return: ${t} `,
                            l = c.raw.find(t => t.startsWith(u));
                        if (!l) throw Error("View expected return log");
                        let d = (a = l.slice(u.length), h.Buffer.from(v.toByteArray(a))),
                            f = e.returns;
                        if (!f) throw Error("View expected return type");
                        return tE.fieldLayout({
                            type: f
                        }, Array.from([...null !== (o = n.accounts) && void 0 !== o ? o : [], ...null !== (s = n.types) && void 0 !== s ? s : []])).decode(d)
                    }
                }
            }
            class eV {
                static build(t, e, r, n, i) {
                    let o = {},
                        s = {},
                        a = {},
                        c = {},
                        u = {},
                        l = {},
                        d = L(t),
                        h = t.accounts ? ev.build(t, e, r, n) : {},
                        f = ey.build(t, e, r, n);
                    return t.instructions.forEach(f => {
                        let p = eh.build(f, (t, r) => e.instruction.encode(t, r), r),
                            y = ep.build(f, p),
                            m = ef.build(f, y, d, n),
                            g = eL.build(f, y, d, n, e, r, t),
                            v = eK.build(r, f, g, t),
                            w = ej.build(n, r, f, p, y, m, g, v, h, t.types || [], i && i(f)),
                            _ = b()(f.name);
                        s[_] = p, a[_] = y, o[_] = m, c[_] = g, u[_] = w, v && (l[_] = v)
                    }), [o, s, a, h, c, u, f, l]
                }
            }
            class ez {
                get programId() {
                    return this._programId
                }
                get idl() {
                    return this._idl
                }
                get coder() {
                    return this._coder
                }
                get provider() {
                    return this._provider
                }
                constructor(t, e, r, n, i) {
                    e = B(e), r || (r = ts()), this._idl = t, this._provider = r, this._programId = e, this._coder = null != n ? n : new tU(t), this._events = new ex(this._programId, r, this._coder);
                    let [o, s, a, c, u, l, d, h] = eV.build(t, this._coder, e, r, null != i ? i : () => void 0);
                    this.rpc = o, this.instruction = s, this.transaction = a, this.account = c, this.simulate = u, this.methods = l, this.state = d, this.views = h
                }
                static async at(t, e) {
                    let r = B(t),
                        n = await ez.fetchIdl(r, e);
                    if (!n) throw Error(`IDL not found for program: ${t.toString()}`);
                    return new ez(n, r, e)
                }
                static async fetchIdl(t, e) {
                    var r, n;
                    e = null != e ? e : ts();
                    let i = B(t),
                        o = await eu(i),
                        s = await e.connection.getAccountInfo(o);
                    if (!s) return null;
                    let a = (r = s.data.slice(8), el.decode(r));
                    return JSON.parse((n = (0, A.rr)(a.data), new TextDecoder("utf-8").decode(n)))
                }
                addEventListener(t, e) {
                    return this._events.addEventListener(t, e)
                }
                async removeEventListener(t) {
                    return await this._events.removeEventListener(t)
                }
            }
            new f.PublicKey("11111111111111111111111111111111")
        }
    }
]);