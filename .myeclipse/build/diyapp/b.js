var global_data_jc;

var requirejs, require, define;
!function(global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }
    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }
    function each(e, t) {
        if (e) {
            var i;
            for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1)
                ;
        }
    }
    function eachReverse(e, t) {
        if (e) {
            var i;
            for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1)
                ;
        }
    }
    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }
    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }
    function eachProp(e, t) {
        var i;
        for (i in e)
            if (hasProp(e, i) && t(e[i], i))
                break
    }
    function mixin(e, t, i, r) {
        return t && eachProp(t, function(t, n) {
            (i || !hasProp(e, n)) && (!r || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[n] = t : (e[n] || (e[n] = {}),
            mixin(e[n], t, i, r)))
        }
        ),
        e
    }
    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function defaultOnError(e) {
        throw e
    }
    function getGlobal(e) {
        if (!e)
            return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }
        ),
        t
    }
    function makeError(e, t, i, r) {
        var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return n.requireType = e,
        n.requireModules = r,
        i && (n.originalError = i),
        n
    }
    function newContext(e) {
        function t(e) {
            var t, i, r = e.length;
            for (t = 0; r > t; t++)
                if (i = e[t],
                "." === i)
                    e.splice(t, 1),
                    t -= 1;
                else if (".." === i) {
                    if (1 === t && (".." === e[2] || ".." === e[0]))
                        break;
                    t > 0 && (e.splice(t - 1, 2),
                    t -= 2)
                }
        }
        function i(e, i, r) {
            var n, a, o, s, c, u, p, d, f, l, h, m = i && i.split("/"), g = m, v = y.map, x = v && v["*"];
            if (e && "." === e.charAt(0) && (i ? (g = m.slice(0, m.length - 1),
            e = e.split("/"),
            p = e.length - 1,
            y.nodeIdCompat && jsSuffixRegExp.test(e[p]) && (e[p] = e[p].replace(jsSuffixRegExp, "")),
            e = g.concat(e),
            t(e),
            e = e.join("/")) : 0 === e.indexOf("./") && (e = e.substring(2))),
            r && v && (m || x)) {
                o = e.split("/");
                e: for (s = o.length; s > 0; s -= 1) {
                    if (u = o.slice(0, s).join("/"),
                    m)
                        for (c = m.length; c > 0; c -= 1)
                            if (a = getOwn(v, m.slice(0, c).join("/")),
                            a && (a = getOwn(a, u))) {
                                d = a,
                                f = s;
                                break e
                            }
                    !l && x && getOwn(x, u) && (l = getOwn(x, u),
                    h = s)
                }
                !d && l && (d = l,
                f = h),
                d && (o.splice(0, f, d),
                e = o.join("/"))
            }
            return n = getOwn(y.pkgs, e),
            n ? n : e
        }
        function r(e) {
            isBrowser && each(scripts(), function(t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === q.contextName ? (t.parentNode.removeChild(t),
                !0) : void 0
            }
            )
        }
        function n(e) {
            var t = getOwn(y.paths, e);
            return t && isArray(t) && t.length > 1 ? (t.shift(),
            q.require.undef(e),
            q.require([e]),
            !0) : void 0
        }
        function a(e) {
            var t, i = e ? e.indexOf("!") : -1;
            return i > -1 && (t = e.substring(0, i),
            e = e.substring(i + 1, e.length)),
            [t, e]
        }
        function o(e, t, r, n) {
            var o, s, c, u, p = null , d = t ? t.name : null , f = e, l = !0, h = "";
            return e || (l = !1,
            e = "_@r" + (A += 1)),
            u = a(e),
            p = u[0],
            e = u[1],
            p && (p = i(p, d, n),
            s = getOwn(j, p)),
            e && (p ? h = s && s.normalize ? s.normalize(e, function(e) {
                return i(e, d, n)
            }
            ) : i(e, d, n) : (h = i(e, d, n),
            u = a(h),
            p = u[0],
            h = u[1],
            r = !0,
            o = q.nameToUrl(h))),
            c = !p || s || r ? "" : "_unnormalized" + (T += 1),
            {
                prefix: p,
                name: h,
                parentMap: t,
                unnormalized: !!c,
                url: o,
                originalName: f,
                isDefine: l,
                id: (p ? p + "!" + h : h) + c
            }
        }
        function s(e) {
            var t = e.id
              , i = getOwn(S, t);
            return i || (i = S[t] = new q.Module(e)),
            i
        }
        function c(e, t, i) {
            var r = e.id
              , n = getOwn(S, r);
            !hasProp(j, r) || n && !n.defineEmitComplete ? (n = s(e),
            n.error && "error" === t ? i(n.error) : n.on(t, i)) : "defined" === t && i(j[r])
        }
        function u(e, t) {
            var i = e.requireModules
              , r = !1;
            t ? t(e) : (each(i, function(t) {
                var i = getOwn(S, t);
                i && (i.error = e,
                i.events.error && (r = !0,
                i.emit("error", e)))
            }
            ),
            r || req.onError(e))
        }
        function p() {
            globalDefQueue.length && (apsp.apply(M, [M.length, 0].concat(globalDefQueue)),
            globalDefQueue = [])
        }
        function d(e) {
            delete S[e],
            delete k[e]
        }
        function f(e, t, i) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0,
            each(e.depMaps, function(r, n) {
                var a = r.id
                  , o = getOwn(S, a);
                !o || e.depMatched[n] || i[a] || (getOwn(t, a) ? (e.defineDep(n, j[a]),
                e.check()) : f(o, t, i))
            }
            ),
            i[r] = !0)
        }
        function l() {
            var e, t, i = 1e3 * y.waitSeconds, a = i && q.startTime + i < (new Date).getTime(), o = [], s = [], c = !1, p = !0;
            if (!x) {
                if (x = !0,
                eachProp(k, function(e) {
                    var i = e.map
                      , u = i.id;
                    if (e.enabled && (i.isDefine || s.push(e),
                    !e.error))
                        if (!e.inited && a)
                            n(u) ? (t = !0,
                            c = !0) : (o.push(u),
                            r(u));
                        else if (!e.inited && e.fetched && i.isDefine && (c = !0,
                        !i.prefix))
                            return p = !1
                }
                ),
                a && o.length)
                    return e = makeError("timeout", "Load timeout for modules: " + o, null , o),
                    e.contextName = q.contextName,
                    u(e);
                p && each(s, function(e) {
                    f(e, {}, {})
                }
                ),
                a && !t || !c || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
                    w = 0,
                    l()
                }
                , 50)),
                x = !1
            }
        }
        function h(e) {
            hasProp(j, e[0]) || s(o(e[0], null , !0)).init(e[1], e[2])
        }
        function m(e, t, i, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
        }
        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, q.onScriptLoad, "load", "onreadystatechange"),
            m(t, q.onScriptError, "error"),
            {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }
        function v() {
            var e;
            for (p(); M.length; ) {
                if (e = M.shift(),
                null  === e[0])
                    return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                h(e)
            }
        }
        var x, b, q, E, w, y = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, S = {}, k = {}, O = {}, M = [], j = {}, P = {}, R = {}, A = 1, T = 1;
        return E = {
            require: function(e) {
                return e.require ? e.require : e.require = q.makeRequire(e.map)
            },
            exports: function(e) {
                return e.usingExports = !0,
                e.map.isDefine ? e.exports ? j[e.map.id] = e.exports : e.exports = j[e.map.id] = {} : void 0
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(y.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        },
        b = function(e) {
            this.events = getOwn(O, e.id) || {},
            this.map = e,
            this.shim = getOwn(y.shim, e.id),
            this.depExports = [],
            this.depMaps = [],
            this.depMatched = [],
            this.pluginMaps = {},
            this.depCount = 0
        }
        ,
        b.prototype = {
            init: function(e, t, i, r) {
                r = r || {},
                this.inited || (this.factory = t,
                i ? this.on("error", i) : this.events.error && (i = bind(this, function(e) {
                    this.emit("error", e)
                }
                )),
                this.depMaps = e && e.slice(0),
                this.errback = i,
                this.inited = !0,
                this.ignore = r.ignore,
                r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0,
                this.depCount -= 1,
                this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0,
                    q.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void q.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }
                    )) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                P[e] || (P[e] = !0,
                q.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, i = this.map.id, r = this.depExports, n = this.exports, a = this.factory;
                    if (this.inited) {
                        if (this.error)
                            this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0,
                            this.depCount < 1 && !this.defined) {
                                if (isFunction(a)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)
                                        try {
                                            n = q.execCb(i, a, r, n)
                                        } catch (o) {
                                            e = o
                                        }
                                    else
                                        n = q.execCb(i, a, r, n);
                                    if (this.map.isDefine && void 0 === n && (t = this.module,
                                    t ? n = t.exports : this.usingExports && (n = this.exports)),
                                    e)
                                        return e.requireMap = this.map,
                                        e.requireModules = this.map.isDefine ? [this.map.id] : null ,
                                        e.requireType = this.map.isDefine ? "define" : "require",
                                        u(this.error = e)
                                } else
                                    n = a;
                                this.exports = n,
                                this.map.isDefine && !this.ignore && (j[i] = n,
                                req.onResourceLoad && req.onResourceLoad(q, this.map, this.depMaps)),
                                d(i),
                                this.defined = !0
                            }
                            this.defining = !1,
                            this.defined && !this.defineEmitted && (this.defineEmitted = !0,
                            this.emit("defined", this.exports),
                            this.defineEmitComplete = !0)
                        }
                    } else
                        this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map
                  , t = e.id
                  , r = o(e.prefix);
                this.depMaps.push(r),
                c(r, "defined", bind(this, function(r) {
                    var n, a, p, f = getOwn(R, this.map.id), l = this.map.name, h = this.map.parentMap ? this.map.parentMap.name : null , m = q.makeRequire(e.parentMap, {
                        enableBuildCallback: !0
                    });
                    return this.map.unnormalized ? (r.normalize && (l = r.normalize(l, function(e) {
                        return i(e, h, !0)
                    }
                    ) || ""),
                    a = o(e.prefix + "!" + l, this.map.parentMap),
                    c(a, "defined", bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }
                        , null , {
                            enabled: !0,
                            ignore: !0
                        })
                    }
                    )),
                    p = getOwn(S, a.id),
                    void (p && (this.depMaps.push(a),
                    this.events.error && p.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    }
                    )),
                    p.enable()))) : f ? (this.map.url = q.nameToUrl(f),
                    void this.load()) : (n = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }
                        , null , {
                            enabled: !0
                        })
                    }
                    ),
                    n.error = bind(this, function(e) {
                        this.inited = !0,
                        this.error = e,
                        e.requireModules = [t],
                        eachProp(S, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
                        }
                        ),
                        u(e)
                    }
                    ),
                    n.fromText = bind(this, function(i, r) {
                        var a = e.name
                          , c = o(a)
                          , p = useInteractive;
                        r && (i = r),
                        p && (useInteractive = !1),
                        s(c),
                        hasProp(y.config, t) && (y.config[a] = y.config[t]);
                        try {
                            req.exec(i)
                        } catch (d) {
                            return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + d, d, [t]))
                        }
                        p && (useInteractive = !0),
                        this.depMaps.push(c),
                        q.completeLoad(a),
                        m([a], n)
                    }
                    ),
                    void r.load(e.name, m, n, y))
                }
                )),
                q.enable(r, this),
                this.pluginMaps[r.id] = r
            },
            enable: function() {
                k[this.map.id] = this,
                this.enabled = !0,
                this.enabling = !0,
                each(this.depMaps, bind(this, function(e, t) {
                    var i, r, n;
                    if ("string" == typeof e) {
                        if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap),
                        this.depMaps[t] = e,
                        n = getOwn(E, e.id))
                            return void (this.depExports[t] = n(this));
                        this.depCount += 1,
                        c(e, "defined", bind(this, function(e) {
                            this.defineDep(t, e),
                            this.check()
                        }
                        )),
                        this.errback && c(e, "error", bind(this, this.errback))
                    }
                    i = e.id,
                    r = S[i],
                    hasProp(E, i) || !r || r.enabled || q.enable(e, this)
                }
                )),
                eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(S, e.id);
                    t && !t.enabled && q.enable(e, this)
                }
                )),
                this.enabling = !1,
                this.check()
            },
            on: function(e, t) {
                var i = this.events[e];
                i || (i = this.events[e] = []),
                i.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }
                ),
                "error" === e && delete this.events[e]
            }
        },
        q = {
            config: y,
            contextName: e,
            registry: S,
            defined: j,
            urlFetched: P,
            defQueue: M,
            Module: b,
            makeModuleMap: o,
            nextTick: req.nextTick,
            onError: u,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = y.shim
                  , i = {
                    paths: !0,
                    bundles: !0,
                    config: !0,
                    map: !0
                };
                eachProp(e, function(e, t) {
                    i[t] ? (y[t] || (y[t] = {}),
                    mixin(y[t], e, !0, !0)) : y[t] = e
                }
                ),
                e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (R[e] = t)
                    }
                    )
                }
                ),
                e.shim && (eachProp(e.shim, function(e, i) {
                    isArray(e) && (e = {
                        deps: e
                    }),
                    !e.exports && !e.init || e.exportsFn || (e.exportsFn = q.makeShimExports(e)),
                    t[i] = e
                }
                ),
                y.shim = t),
                e.packages && each(e.packages, function(e) {
                    var t, i;
                    e = "string" == typeof e ? {
                        name: e
                    } : e,
                    i = e.name,
                    t = e.location,
                    t && (y.paths[i] = e.location),
                    y.pkgs[i] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }
                ),
                eachProp(S, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = o(t))
                }
                ),
                (e.deps || e.callback) && q.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)),
                    t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, n) {
                function a(i, r, c) {
                    var p, d, f;
                    return n.enableBuildCallback && r && isFunction(r) && (r.__requireJsBuild = !0),
                    "string" == typeof i ? isFunction(r) ? u(makeError("requireargs", "Invalid require call"), c) : t && hasProp(E, i) ? E[i](S[t.id]) : req.get ? req.get(q, i, t, a) : (d = o(i, t, !1, !0),
                    p = d.id,
                    hasProp(j, p) ? j[p] : u(makeError("notloaded", 'Module name "' + p + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(),
                    q.nextTick(function() {
                        v(),
                        f = s(o(null , t)),
                        f.skipMap = n.skipMap,
                        f.init(i, r, c, {
                            enabled: !0
                        }),
                        l()
                    }
                    ),
                    a)
                }
                return n = n || {},
                mixin(a, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var r, n = e.lastIndexOf("."), a = e.split("/")[0], o = "." === a || ".." === a;
                        return -1 !== n && (!o || n > 1) && (r = e.substring(n, e.length),
                        e = e.substring(0, n)),
                        q.nameToUrl(i(e, t && t.id, !0), r, !0)
                    },
                    defined: function(e) {
                        return hasProp(j, o(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = o(e, t, !1, !0).id,
                        hasProp(j, e) || hasProp(S, e)
                    }
                }),
                t || (a.undef = function(e) {
                    p();
                    var i = o(e, t, !0)
                      , n = getOwn(S, e);
                    r(e),
                    delete j[e],
                    delete P[i.url],
                    delete O[e],
                    eachReverse(M, function(t, i) {
                        t[0] === e && M.splice(i, 1)
                    }
                    ),
                    n && (n.events.defined && (O[e] = n.events),
                    d(e))
                }
                ),
                a
            },
            enable: function(e) {
                var t = getOwn(S, e.id);
                t && s(e).enable()
            },
            completeLoad: function(e) {
                var t, i, r, a = getOwn(y.shim, e) || {}, o = a.exports;
                for (p(); M.length; ) {
                    if (i = M.shift(),
                    null  === i[0]) {
                        if (i[0] = e,
                        t)
                            break;
                        t = !0
                    } else
                        i[0] === e && (t = !0);
                    h(i)
                }
                if (r = getOwn(S, e),
                !t && !hasProp(j, e) && r && !r.inited) {
                    if (!(!y.enforceDefine || o && getGlobal(o)))
                        return n(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null , [e]));
                    h([e, a.deps || [], a.exportsFn])
                }
                l()
            },
            nameToUrl: function(e, t, i) {
                var r, n, a, o, s, c, u, p = getOwn(y.pkgs, e);
                if (p && (e = p),
                u = getOwn(R, e))
                    return q.nameToUrl(u, t, i);
                if (req.jsExtRegExp.test(e))
                    s = e + (t || "");
                else {
                    for (r = y.paths,
                    n = e.split("/"),
                    a = n.length; a > 0; a -= 1)
                        if (o = n.slice(0, a).join("/"),
                        c = getOwn(r, o)) {
                            isArray(c) && (c = c[0]),
                            n.splice(0, a, c);
                            break
                        }
                    s = n.join("/"),
                    s += t || (/^data\:|\?/.test(s) || i ? "" : ".js"),
                    s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : y.baseUrl) + s
                }
                return y.urlArgs ? s + ((-1 === s.indexOf("?") ? "?" : "&") + y.urlArgs) : s
            },
            load: function(e, t) {
                req.load(q, e, t)
            },
            execCb: function(e, t, i, r) {
                return t.apply(r, i)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null ;
                    var t = g(e);
                    q.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = g(e);
                return n(t.id) ? void 0 : u(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        },
        q.require = q.makeRequire(),
        q
    }
    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            return "interactive" === e.readyState ? interactiveScript = e : void 0
        }
        ),
        interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.11", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), isWebWorker = !isBrowser && "undefined" != typeof importScripts, readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs))
                return;
            cfg = requirejs,
            requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require,
        require = void 0),
        req = requirejs = function(e, t, i, r) {
            var n, a, o = defContextName;
            return isArray(e) || "string" == typeof e || (a = e,
            isArray(t) ? (e = t,
            t = i,
            i = r) : e = []),
            a && a.context && (o = a.context),
            n = getOwn(contexts, o),
            n || (n = contexts[o] = req.s.newContext(o)),
            a && n.configure(a),
            n.require(e, t, i)
        }
        ,
        req.config = function(e) {
            return req(e)
        }
        ,
        req.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        }
         : function(e) {
            e()
        }
        ,
        require || (require = req),
        req.version = version,
        req.jsExtRegExp = /^\/|:|\?|\.js$/,
        req.isBrowser = isBrowser,
        s = req.s = {
            contexts: contexts,
            newContext: newContext
        },
        req({}),
        each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }
        ),
        isBrowser && (head = s.head = document.getElementsByTagName("head")[0],
        baseElement = document.getElementsByTagName("base")[0],
        baseElement && (head = s.head = baseElement.parentNode)),
        req.onError = defaultOnError,
        req.createNode = function(e) {
            var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return t.type = e.scriptType || "text/javascript",
            t.charset = "utf-8",
            t.async = !0,
            t
        }
        ,
        req.load = function(e, t, i) {
            var r, n = e && e.config || {};
            if (isBrowser)
                return r = req.createNode(n, t, i),
                r.setAttribute("data-requirecontext", e.contextName),
                r.setAttribute("data-requiremodule", t),
                !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1),
                r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0,
                r.attachEvent("onreadystatechange", e.onScriptLoad)),
                r.src = i,
                currentlyAddingScript = r,
                baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r),
                currentlyAddingScript = null ,
                r;
            if (isWebWorker)
                try {
                    importScripts(i),
                    e.completeLoad(t)
                } catch (a) {
                    e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + i, a, [t]))
                }
        }
        ,
        isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            return head || (head = e.parentNode),
            dataMain = e.getAttribute("data-main"),
            dataMain ? (mainScript = dataMain,
            cfg.baseUrl || (src = mainScript.split("/"),
            mainScript = src.pop(),
            subPath = src.length ? src.join("/") + "/" : "./",
            cfg.baseUrl = subPath),
            mainScript = mainScript.replace(jsSuffixRegExp, ""),
            req.jsExtRegExp.test(mainScript) && (mainScript = dataMain),
            cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript],
            !0) : void 0
        }
        ),
        define = function(e, t, i) {
            var r, n;
            "string" != typeof e && (i = t,
            t = e,
            e = null ),
            isArray(t) || (i = t,
            t = null ),
            !t && isFunction(i) && (t = [],
            i.length && (i.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, i) {
                t.push(i)
            }
            ),
            t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t))),
            useInteractive && (r = currentlyAddingScript || getInteractiveScript(),
            r && (e || (e = r.getAttribute("data-requiremodule")),
            n = contexts[r.getAttribute("data-requirecontext")])),
            (n ? n.defQueue : globalDefQueue).push([e, t, i])
        }
        ,
        define.amd = {
            jQuery: !0
        },
        req.exec = function(text) {
            return eval(text)
        }
        ,
        req(cfg)
    }
}
(this);
;!function(e) {
    function n(e, n) {
        for (var t = e.length; t--; )
            if (e[t] === n)
                return t;
        return -1
    }
    function t(e, n) {
        if (e.length != n.length)
            return !1;
        for (var t = 0; t < e.length; t++)
            if (e[t] !== n[t])
                return !1;
        return !0
    }
    function o(e) {
        for (m in b)
            b[m] = e[T[m]]
    }
    function r(e) {
        var t, r, i, l, c, u;
        if (t = e.keyCode,
        -1 == n(S, t) && S.push(t),
        (93 == t || 224 == t) && (t = 91),
        t in b) {
            b[t] = !0;
            for (i in C)
                C[i] == t && (f[i] = !0)
        } else if (o(e),
        f.filter.call(this, e) && t in E)
            for (u = p(),
            l = 0; l < E[t].length; l++)
                if (r = E[t][l],
                r.scope == u || "all" == r.scope) {
                    c = r.mods.length > 0;
                    for (i in b)
                        (!b[i] && n(r.mods, +i) > -1 || b[i] && -1 == n(r.mods, +i)) && (c = !1);
                    (0 != r.mods.length || b[16] || b[18] || b[17] || b[91]) && !c || r.method(e, r) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    e.stopPropagation && e.stopPropagation(),
                    e.cancelBubble && (e.cancelBubble = !0))
                }
    }
    function i(e) {
        var t, o = e.keyCode, r = n(S, o);
        if (r >= 0 && S.splice(r, 1),
        (93 == o || 224 == o) && (o = 91),
        o in b) {
            b[o] = !1;
            for (t in C)
                C[t] == o && (f[t] = !1)
        }
    }
    function l() {
        for (m in b)
            b[m] = !1;
        for (m in C)
            f[m] = !1
    }
    function f(e, n, t) {
        var o, r;
        o = g(e),
        void 0 === t && (t = n,
        n = "all");
        for (var i = 0; i < o.length; i++)
            r = [],
            e = o[i].split("+"),
            e.length > 1 && (r = v(e),
            e = [e[e.length - 1]]),
            e = e[0],
            e = P(e),
            e in E || (E[e] = []),
            E[e].push({
                shortcut: o[i],
                scope: n,
                method: t,
                key: o[i],
                mods: r
            })
    }
    function c(e, n) {
        var o, r, i, l, f, c = [];
        for (o = g(e),
        l = 0; l < o.length; l++) {
            if (r = o[l].split("+"),
            r.length > 1 && (c = v(r)),
            e = r[r.length - 1],
            e = P(e),
            void 0 === n && (n = p()),
            !E[e])
                return;
            for (i = 0; i < E[e].length; i++)
                f = E[e][i],
                f.scope === n && t(f.mods, c) && (E[e][i] = {})
        }
    }
    function u(e) {
        return "string" == typeof e && (e = P(e)),
        -1 != n(S, e)
    }
    function a() {
        return S.slice(0)
    }
    function s(e) {
        var n = (e.target || e.srcElement).tagName;
        return !("INPUT" == n || "SELECT" == n || "TEXTAREA" == n)
    }
    function d(e) {
        w = e || "all"
    }
    function p() {
        return w || "all"
    }
    function h(e) {
        var n, t, o;
        for (n in E)
            for (t = E[n],
            o = 0; o < t.length; )
                t[o].scope === e ? t.splice(o, 1) : o++
    }
    function g(e) {
        var n;
        return e = e.replace(/\s/g, ""),
        n = e.split(","),
        "" == n[n.length - 1] && (n[n.length - 2] += ","),
        n
    }
    function v(e) {
        for (var n = e.slice(0, e.length - 1), t = 0; t < n.length; t++)
            n[t] = C[n[t]];
        return n
    }
    function y(e, n, t) {
        e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, function() {
            t(window.event)
        }
        )
    }
    function k() {
        var n = e.key;
        return e.key = A,
        n
    }
    var m, E = {}, b = {
        16: !1,
        18: !1,
        17: !1,
        91: !1
    }, w = "all", C = {
        "⇧": 16,
        shift: 16,
        "⌥": 18,
        alt: 18,
        option: 18,
        "⌃": 17,
        ctrl: 17,
        control: 17,
        "⌘": 91,
        command: 91
    }, K = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        "return": 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        "delete": 46,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": 189,
        "=": 187,
        ";": 186,
        "'": 222,
        "[": 219,
        "]": 221,
        "\\": 220
    }, P = function(e) {
        return K[e] || e.toUpperCase().charCodeAt(0)
    }
    , S = [];
    for (m = 1; 20 > m; m++)
        K["f" + m] = 111 + m;
    var T = {
        16: "shiftKey",
        18: "altKey",
        17: "ctrlKey",
        91: "metaKey"
    };
    for (m in C)
        f[m] = !1;
    y(document, "keydown", function(e) {
        r(e)
    }
    ),
    y(document, "keyup", i),
    y(window, "focus", l);
    var A = e.key;
    e.key = f,
    e.key.setScope = d,
    e.key.getScope = p,
    e.key.deleteScope = h,
    e.key.filter = s,
    e.key.isPressed = u,
    e.key.getPressedKeyCodes = a,
    e.key.noConflict = k,
    e.key.unbind = c,
    "undefined" != typeof module && (module.exports = f)
}
(this);
;!function(e, t) {
    var n, r = {}, i = function(e, t) {
        var n, r, i;
        if ("string" == typeof e)
            return s(e);
        for (n = [],
        r = e.length,
        i = 0; r > i; i++)
            n.push(s(e[i]));
        return t.apply(null , n)
    }
    , o = function(e, t, n) {
        2 === arguments.length && (n = t,
        t = null ),
        i(t || [], function() {
            a(e, n, arguments)
        }
        )
    }
    , a = function(e, t, n) {
        var o, a = {
            exports: t
        };
        "function" == typeof t && (n.length || (n = [i, a.exports, a]),
        o = t.apply(null , n),
        void 0 !== o && (a.exports = o)),
        r[e] = a.exports
    }
    , s = function(t) {
        var n = r[t] || e[t];
        if (!n)
            throw new Error("`" + t + "` is undefined");
        return n
    }
    , u = function(e) {
        var t, n, i, o, a, s;
        s = function(e) {
            return e && e.charAt(0).toUpperCase() + e.substr(1)
        }
        ;
        for (t in r)
            if (n = e,
            r.hasOwnProperty(t)) {
                for (i = t.split("/"),
                a = s(i.pop()); o = s(i.shift()); )
                    n[o] = n[o] || {},
                    n = n[o];
                n[a] = r[t]
            }
        return e
    }
    , c = function(n) {
        return e.__dollar = n,
        u(t(e, o, i))
    }
    ;
    "object" == typeof module && "object" == typeof module.exports ? module.exports = c() : (n = e.WebUploader,
    e.WebUploader = c(),
    e.WebUploader.noConflict = function() {
        e.WebUploader = n
    }
    )
}
(window, function(e, t, n) {
    return t("dollar-third", [], function() {
        var t = e.__dollar || e.jQuery || e.Zepto;
        if (!t)
            throw new Error("jQuery or Zepto not found!");
        return t
    }
    ),
    t("dollar", ["dollar-third"], function(e) {
        return e
    }
    ),
    t("promise-third", ["dollar"], function(e) {
        return {
            Deferred: e.Deferred,
            when: e.when,
            isPromise: function(e) {
                return e && "function" == typeof e.then
            }
        }
    }
    ),
    t("promise", ["promise-third"], function(e) {
        return e
    }
    ),
    t("base", ["dollar", "promise"], function(t, n) {
        function r(e) {
            return function() {
                return s.apply(e, arguments)
            }
        }
        function i(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        function o(e) {
            var t;
            return Object.create ? Object.create(e) : (t = function() {}
            ,
            t.prototype = e,
            new t)
        }
        var a = function() {}
          , s = Function.call;
        return {
            version: "0.1.5",
            $: t,
            Deferred: n.Deferred,
            isPromise: n.isPromise,
            when: n.when,
            browser: function(e) {
                var t = {}
                  , n = e.match(/WebKit\/([\d.]+)/)
                  , r = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/)
                  , i = e.match(/MSIE\s([\d\.]+)/) || e.match(/(?:trident)(?:.*rv:([\w.]+))?/i)
                  , o = e.match(/Firefox\/([\d.]+)/)
                  , a = e.match(/Safari\/([\d.]+)/)
                  , s = e.match(/OPR\/([\d.]+)/);
                return n && (t.webkit = parseFloat(n[1])),
                r && (t.chrome = parseFloat(r[1])),
                i && (t.ie = parseFloat(i[1])),
                o && (t.firefox = parseFloat(o[1])),
                a && (t.safari = parseFloat(a[1])),
                s && (t.opera = parseFloat(s[1])),
                t
            }
            (navigator.userAgent),
            os: function(e) {
                var t = {}
                  , n = e.match(/(?:Android);?[\s\/]+([\d.]+)?/)
                  , r = e.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
                return n && (t.android = parseFloat(n[1])),
                r && (t.ios = parseFloat(r[1].replace(/_/g, "."))),
                t
            }
            (navigator.userAgent),
            inherits: function(e, n, r) {
                var i;
                return "function" == typeof n ? (i = n,
                n = null ) : i = n && n.hasOwnProperty("constructor") ? n.constructor : function() {
                    return e.apply(this, arguments)
                }
                ,
                t.extend(!0, i, e, r || {}),
                i.__super__ = e.prototype,
                i.prototype = o(e.prototype),
                n && t.extend(!0, i.prototype, n),
                i
            },
            noop: a,
            bindFn: i,
            log: function() {
                return e.console ? i(console.log, console) : a
            }
            (),
            nextTick: function() {
                return function(e) {
                    setTimeout(e, 1)
                }
            }
            (),
            slice: r([].slice),
            guid: function() {
                var e = 0;
                return function(t) {
                    for (var n = (+new Date).toString(32), r = 0; 5 > r; r++)
                        n += Math.floor(65535 * Math.random()).toString(32);
                    return (t || "wu_") + n + (e++).toString(32)
                }
            }
            (),
            formatSize: function(e, t, n) {
                var r;
                for (n = n || ["B", "K", "M", "G", "TB"]; (r = n.shift()) && e > 1024; )
                    e /= 1024;
                return ("B" === r ? e : e.toFixed(t || 2)) + r
            }
        }
    }
    ),
    t("mediator", ["base"], function(e) {
        function t(e, t, n, r) {
            return o.grep(e, function(e) {
                return !(!e || t && e.e !== t || n && e.cb !== n && e.cb._cb !== n || r && e.ctx !== r)
            }
            )
        }
        function n(e, t, n) {
            o.each((e || "").split(s), function(e, r) {
                n(r, t)
            }
            )
        }
        function r(e, t) {
            for (var n, r = !1, i = -1, o = e.length; ++i < o; )
                if (n = e[i],
                n.cb.apply(n.ctx2, t) === !1) {
                    r = !0;
                    break
                }
            return !r
        }
        var i, o = e.$, a = [].slice, s = /\s+/;
        return i = {
            on: function(e, t, r) {
                var i, o = this;
                return t ? (i = this._events || (this._events = []),
                n(e, t, function(e, t) {
                    var n = {
                        e: e
                    };
                    n.cb = t,
                    n.ctx = r,
                    n.ctx2 = r || o,
                    n.id = i.length,
                    i.push(n)
                }
                ),
                this) : this
            },
            once: function(e, t, r) {
                var i = this;
                return t ? (n(e, t, function(e, t) {
                    var n = function() {
                        return i.off(e, n),
                        t.apply(r || i, arguments)
                    }
                    ;
                    n._cb = t,
                    i.on(e, n, r)
                }
                ),
                i) : i
            },
            off: function(e, r, i) {
                var a = this._events;
                return a ? e || r || i ? (n(e, r, function(e, n) {
                    o.each(t(a, e, n, i), function() {
                        delete a[this.id]
                    }
                    )
                }
                ),
                this) : (this._events = [],
                this) : this
            },
            trigger: function(e) {
                var n, i, o;
                return this._events && e ? (n = a.call(arguments, 1),
                i = t(this._events, e),
                o = t(this._events, "all"),
                r(i, n) && r(o, arguments)) : this
            }
        },
        o.extend({
            installTo: function(e) {
                return o.extend(e, i)
            }
        }, i)
    }
    ),
    t("uploader", ["base", "mediator"], function(e, t) {
        function n(e) {
            this.options = r.extend(!0, {}, n.options, e),
            this._init(this.options)
        }
        var r = e.$;
        return n.options = {},
        t.installTo(n.prototype),
        r.each({
            upload: "start-upload",
            stop: "stop-upload",
            getFile: "get-file",
            getFiles: "get-files",
            addFile: "add-file",
            addFiles: "add-file",
            sort: "sort-files",
            removeFile: "remove-file",
            cancelFile: "cancel-file",
            skipFile: "skip-file",
            retry: "retry",
            isInProgress: "is-in-progress",
            makeThumb: "make-thumb",
            md5File: "md5-file",
            getDimension: "get-dimension",
            addButton: "add-btn",
            predictRuntimeType: "predict-runtime-type",
            refresh: "refresh",
            disable: "disable",
            enable: "enable",
            reset: "reset"
        }, function(e, t) {
            n.prototype[e] = function() {
                return this.request(t, arguments)
            }
        }
        ),
        r.extend(n.prototype, {
            state: "pending",
            _init: function(e) {
                var t = this;
                t.request("init", e, function() {
                    t.state = "ready",
                    t.trigger("ready")
                }
                )
            },
            option: function(e, t) {
                var n = this.options;
                return arguments.length > 1 ? void (r.isPlainObject(t) && r.isPlainObject(n[e]) ? r.extend(n[e], t) : n[e] = t) : e ? n[e] : n
            },
            getStats: function() {
                var e = this.request("get-stats");
                return e ? {
                    successNum: e.numOfSuccess,
                    progressNum: e.numOfProgress,
                    cancelNum: e.numOfCancel,
                    invalidNum: e.numOfInvalid,
                    uploadFailNum: e.numOfUploadFailed,
                    queueNum: e.numOfQueue,
                    interruptNum: e.numofInterrupt
                } : {}
            },
            trigger: function(e) {
                var n = [].slice.call(arguments, 1)
                  , i = this.options
                  , o = "on" + e.substring(0, 1).toUpperCase() + e.substring(1);
                return t.trigger.apply(this, arguments) === !1 || r.isFunction(i[o]) && i[o].apply(this, n) === !1 || r.isFunction(this[o]) && this[o].apply(this, n) === !1 || t.trigger.apply(t, [this, e].concat(n)) === !1 ? !1 : !0
            },
            destroy: function() {
                this.request("destroy", arguments),
                this.off()
            },
            request: e.noop
        }),
        e.create = n.create = function(e) {
            return new n(e)
        }
        ,
        e.Uploader = n,
        n
    }
    ),
    t("runtime/runtime", ["base", "mediator"], function(e, t) {
        function n(t) {
            this.options = r.extend({
                container: document.body
            }, t),
            this.uid = e.guid("rt_")
        }
        var r = e.$
          , i = {}
          , o = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return t;
            return null 
        }
        ;
        return r.extend(n.prototype, {
            getContainer: function() {
                var e, t, n = this.options;
                return this._container ? this._container : (e = r(n.container || document.body),
                t = r(document.createElement("div")),
                t.attr("id", "rt_" + this.uid),
                t.css({
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden"
                }),
                e.append(t),
                e.addClass("webuploader-container"),
                this._container = t,
                this._parent = e,
                t)
            },
            init: e.noop,
            exec: e.noop,
            destroy: function() {
                this._container && this._container.remove(),
                this._parent && this._parent.removeClass("webuploader-container"),
                this.off()
            }
        }),
        n.orders = "html5,flash",
        n.addRuntime = function(e, t) {
            i[e] = t
        }
        ,
        n.hasRuntime = function(e) {
            return !!(e ? i[e] : o(i))
        }
        ,
        n.create = function(e, t) {
            var a, s;
            if (t = t || n.orders,
            r.each(t.split(/\s*,\s*/g), function() {
                return i[this] ? (a = this,
                !1) : void 0
            }
            ),
            a = a || o(i),
            !a)
                throw new Error("Runtime Error");
            return s = new i[a](e)
        }
        ,
        t.installTo(n.prototype),
        n
    }
    ),
    t("runtime/client", ["base", "mediator", "runtime/runtime"], function(e, t, n) {
        function r(t, r) {
            var o, a = e.Deferred();
            this.uid = e.guid("client_"),
            this.runtimeReady = function(e) {
                return a.done(e)
            }
            ,
            this.connectRuntime = function(t, s) {
                if (o)
                    throw new Error("already connected!");
                return a.done(s),
                "string" == typeof t && i.get(t) && (o = i.get(t)),
                o = o || i.get(null , r),
                o ? (e.$.extend(o.options, t),
                o.__promise.then(a.resolve),
                o.__client++) : (o = n.create(t, t.runtimeOrder),
                o.__promise = a.promise(),
                o.once("ready", a.resolve),
                o.init(),
                i.add(o),
                o.__client = 1),
                r && (o.__standalone = r),
                o
            }
            ,
            this.getRuntime = function() {
                return o
            }
            ,
            this.disconnectRuntime = function() {
                o && (o.__client--,
                o.__client <= 0 && (i.remove(o),
                delete o.__promise,
                o.destroy()),
                o = null )
            }
            ,
            this.exec = function() {
                if (o) {
                    var n = e.slice(arguments);
                    return t && n.unshift(t),
                    o.exec.apply(this, n)
                }
            }
            ,
            this.getRuid = function() {
                return o && o.uid
            }
            ,
            this.destroy = function(e) {
                return function() {
                    e && e.apply(this, arguments),
                    this.trigger("destroy"),
                    this.off(),
                    this.exec("destroy"),
                    this.disconnectRuntime()
                }
            }
            (this.destroy)
        }
        var i;
        return i = function() {
            var e = {};
            return {
                add: function(t) {
                    e[t.uid] = t
                },
                get: function(t, n) {
                    var r;
                    if (t)
                        return e[t];
                    for (r in e)
                        if (!n || !e[r].__standalone)
                            return e[r];
                    return null 
                },
                remove: function(t) {
                    delete e[t.uid]
                }
            }
        }
        (),
        t.installTo(r.prototype),
        r
    }
    ),
    t("lib/dnd", ["base", "mediator", "runtime/client"], function(e, t, n) {
        function r(e) {
            e = this.options = i.extend({}, r.options, e),
            e.container = i(e.container),
            e.container.length && n.call(this, "DragAndDrop")
        }
        var i = e.$;
        return r.options = {
            accept: null ,
            disableGlobalDnd: !1
        },
        e.inherits(n, {
            constructor: r,
            init: function() {
                var e = this;
                e.connectRuntime(e.options, function() {
                    e.exec("init"),
                    e.trigger("ready")
                }
                )
            }
        }),
        t.installTo(r.prototype),
        r
    }
    ),
    t("widgets/widget", ["base", "uploader"], function(e, t) {
        function n(e) {
            if (!e)
                return !1;
            var t = e.length
              , n = i.type(e);
            return 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && "string" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function r(e) {
            this.owner = e,
            this.options = e.options
        }
        var i = e.$
          , o = t.prototype._init
          , a = t.prototype.destroy
          , s = {}
          , u = [];
        return i.extend(r.prototype, {
            init: e.noop,
            invoke: function(e, t) {
                var n = this.responseMap;
                return n && e in n && n[e] in this && i.isFunction(this[n[e]]) ? this[n[e]].apply(this, t) : s
            },
            request: function() {
                return this.owner.request.apply(this.owner, arguments)
            }
        }),
        i.extend(t.prototype, {
            _init: function() {
                var e = this
                  , t = e._widgets = []
                  , n = e.options.disableWidgets || "";
                return i.each(u, function(r, i) {
                    (!n || !~n.indexOf(i._name)) && t.push(new i(e))
                }
                ),
                o.apply(e, arguments)
            },
            request: function(t, r, i) {
                var o, a, u, c, l = 0, f = this._widgets, d = f && f.length, h = [], p = [];
                for (r = n(r) ? r : [r]; d > l; l++)
                    o = f[l],
                    a = o.invoke(t, r),
                    a !== s && (e.isPromise(a) ? p.push(a) : h.push(a));
                return i || p.length ? (u = e.when.apply(e, p),
                c = u.pipe ? "pipe" : "then",
                u[c](function() {
                    var t = e.Deferred()
                      , n = arguments;
                    return 1 === n.length && (n = n[0]),
                    setTimeout(function() {
                        t.resolve(n)
                    }
                    , 1),
                    t.promise()
                }
                )[i ? c : "done"](i || e.noop)) : h[0]
            },
            destroy: function() {
                a.apply(this, arguments),
                this._widgets = null 
            }
        }),
        t.register = r.register = function(t, n) {
            var o, a = {
                init: "init",
                destroy: "destroy",
                name: "anonymous"
            };
            return 1 === arguments.length ? (n = t,
            i.each(n, function(e) {
                return "_" === e[0] || "name" === e ? void ("name" === e && (a.name = n.name)) : void (a[e.replace(/[A-Z]/g, "-$&").toLowerCase()] = e)
            }
            )) : a = i.extend(a, t),
            n.responseMap = a,
            o = e.inherits(r, n),
            o._name = a.name,
            u.push(o),
            o
        }
        ,
        t.unRegister = r.unRegister = function(e) {
            if (e && "anonymous" !== e)
                for (var t = u.length; t--; )
                    u[t]._name === e && u.splice(t, 1)
        }
        ,
        r
    }
    ),
    t("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"], function(e, t, n) {
        var r = e.$;
        return t.options.dnd = "",
        t.register({
            name: "dnd",
            init: function(t) {
                if (t.dnd && "html5" === this.request("predict-runtime-type")) {
                    var i, o = this, a = e.Deferred(), s = r.extend({}, {
                        disableGlobalDnd: t.disableGlobalDnd,
                        container: t.dnd,
                        accept: t.accept
                    });
                    return this.dnd = i = new n(s),
                    i.once("ready", a.resolve),
                    i.on("drop", function(e) {
                        o.request("add-file", [e])
                    }
                    ),
                    i.on("accept", function(e) {
                        return o.owner.trigger("dndAccept", e)
                    }
                    ),
                    i.init(),
                    a.promise()
                }
            },
            destroy: function() {
                this.dnd && this.dnd.destroy()
            }
        })
    }
    ),
    t("lib/filepaste", ["base", "mediator", "runtime/client"], function(e, t, n) {
        function r(e) {
            e = this.options = i.extend({}, e),
            e.container = i(e.container || document.body),
            n.call(this, "FilePaste")
        }
        var i = e.$;
        return e.inherits(n, {
            constructor: r,
            init: function() {
                var e = this;
                e.connectRuntime(e.options, function() {
                    e.exec("init"),
                    e.trigger("ready")
                }
                )
            }
        }),
        t.installTo(r.prototype),
        r
    }
    ),
    t("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"], function(e, t, n) {
        var r = e.$;
        return t.register({
            name: "paste",
            init: function(t) {
                if (t.paste && "html5" === this.request("predict-runtime-type")) {
                    var i, o = this, a = e.Deferred(), s = r.extend({}, {
                        container: t.paste,
                        accept: t.accept
                    });
                    return this.paste = i = new n(s),
                    i.once("ready", a.resolve),
                    i.on("paste", function(e) {
                        o.owner.request("add-file", [e])
                    }
                    ),
                    i.init(),
                    a.promise()
                }
            },
            destroy: function() {
                this.paste && this.paste.destroy()
            }
        })
    }
    ),
    t("lib/blob", ["base", "runtime/client"], function(e, t) {
        function n(e, n) {
            var r = this;
            r.source = n,
            r.ruid = e,
            this.size = n.size || 0,
            this.type = !n.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? "image/" + ("jpg" === this.ext ? "jpeg" : this.ext) : n.type || "application/octet-stream",
            t.call(r, "Blob"),
            this.uid = n.uid || this.uid,
            e && r.connectRuntime(e)
        }
        return e.inherits(t, {
            constructor: n,
            slice: function(e, t) {
                return this.exec("slice", e, t)
            },
            getSource: function() {
                return this.source
            }
        }),
        n
    }
    ),
    t("lib/file", ["base", "lib/blob"], function(e, t) {
        function n(e, n) {
            var o;
            this.name = n.name || "untitled" + r++,
            o = i.exec(n.name) ? RegExp.$1.toLowerCase() : "",
            !o && n.type && (o = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(n.type) ? RegExp.$1.toLowerCase() : "",
            this.name += "." + o),
            this.ext = o,
            this.lastModifiedDate = n.lastModifiedDate || (new Date).toLocaleString(),
            t.apply(this, arguments)
        }
        var r = 1
          , i = /\.([^.]+)$/;
        return e.inherits(t, n)
    }
    ),
    t("lib/filepicker", ["base", "runtime/client", "lib/file"], function(t, n, r) {
        function i(e) {
            if (e = this.options = o.extend({}, i.options, e),
            e.container = o(e.id),
            !e.container.length)
                throw new Error("按钮指定错误");
            e.innerHTML = e.innerHTML || e.label || e.container.html() || "",
            e.button = o(e.button || document.createElement("div")),
            e.button.html(e.innerHTML),
            e.container.html(e.button),
            n.call(this, "FilePicker", !0)
        }
        var o = t.$;
        return i.options = {
            button: null ,
            container: null ,
            label: null ,
            innerHTML: null ,
            multiple: !0,
            accept: null ,
            name: "file"
        },
        t.inherits(n, {
            constructor: i,
            init: function() {
                var n = this
                  , i = n.options
                  , a = i.button;
                a.addClass("webuploader-pick"),
                n.on("all", function(e) {
                    var t;
                    switch (e) {
                    case "mouseenter":
                        a.addClass("webuploader-pick-hover");
                        break;
                    case "mouseleave":
                        a.removeClass("webuploader-pick-hover");
                        break;
                    case "change":
                        t = n.exec("getFiles"),
                        n.trigger("select", o.map(t, function(e) {
                            return e = new r(n.getRuid(),e),
                            e._refer = i.container,
                            e
                        }
                        ), i.container)
                    }
                }
                ),
                n.connectRuntime(i, function() {
                    n.refresh(),
                    n.exec("init", i),
                    n.trigger("ready")
                }
                ),
                this._resizeHandler = t.bindFn(this.refresh, this),
                o(e).on("resize", this._resizeHandler)
            },
            refresh: function() {
                var e = this.getRuntime().getContainer()
                  , t = this.options.button
                  , n = t.outerWidth ? t.outerWidth() : t.width()
                  , r = t.outerHeight ? t.outerHeight() : t.height()
                  , i = t.offset();
                n && r && e.css({
                    bottom: "auto",
                    right: "auto",
                    width: n + "px",
                    height: r + "px"
                }).offset(i)
            },
            enable: function() {
                var e = this.options.button;
                e.removeClass("webuploader-pick-disable"),
                this.refresh()
            },
            disable: function() {
                var e = this.options.button;
                this.getRuntime().getContainer().css({
                    top: "-99999px"
                }),
                e.addClass("webuploader-pick-disable")
            },
            destroy: function() {
                var t = this.options.button;
                o(e).off("resize", this._resizeHandler),
                t.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")
            }
        }),
        i
    }
    ),
    t("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"], function(e, t, n) {
        var r = e.$;
        return r.extend(t.options, {
            pick: null ,
            accept: null 
        }),
        t.register({
            name: "picker",
            init: function(e) {
                return this.pickers = [],
                e.pick && this.addBtn(e.pick)
            },
            refresh: function() {
                r.each(this.pickers, function() {
                    this.refresh()
                }
                )
            },
            addBtn: function(t) {
                var i = this
                  , o = i.options
                  , a = o.accept
                  , s = [];
                if (t)
                    return r.isPlainObject(t) || (t = {
                        id: t
                    }),
                    r(t.id).each(function() {
                        var u, c, l;
                        l = e.Deferred(),
                        u = r.extend({}, t, {
                            accept: r.isPlainObject(a) ? [a] : a,
                            swf: o.swf,
                            runtimeOrder: o.runtimeOrder,
                            id: this
                        }),
                        c = new n(u),
                        c.once("ready", l.resolve),
                        c.on("select", function(e) {
                            i.owner.request("add-file", [e])
                        }
                        ),
                        c.init(),
                        i.pickers.push(c),
                        s.push(l.promise())
                    }
                    ),
                    e.when.apply(e, s)
            },
            disable: function() {
                r.each(this.pickers, function() {
                    this.disable()
                }
                )
            },
            enable: function() {
                r.each(this.pickers, function() {
                    this.enable()
                }
                )
            },
            destroy: function() {
                r.each(this.pickers, function() {
                    this.destroy()
                }
                ),
                this.pickers = null 
            }
        })
    }
    ),
    t("lib/image", ["base", "runtime/client", "lib/blob"], function(e, t, n) {
        function r(e) {
            this.options = i.extend({}, r.options, e),
            t.call(this, "Image"),
            this.on("load", function() {
                this._info = this.exec("info"),
                this._meta = this.exec("meta")
            }
            )
        }
        var i = e.$;
        return r.options = {
            quality: 90,
            crop: !1,
            preserveHeaders: !1,
            allowMagnify: !1
        },
        e.inherits(t, {
            constructor: r,
            info: function(e) {
                return e ? (this._info = e,
                this) : this._info
            },
            meta: function(e) {
                return e ? (this._meta = e,
                this) : this._meta
            },
            loadFromBlob: function(e) {
                var t = this
                  , n = e.getRuid();
                this.connectRuntime(n, function() {
                    t.exec("init", t.options),
                    t.exec("loadFromBlob", e)
                }
                )
            },
            resize: function() {
                var t = e.slice(arguments);
                return this.exec.apply(this, ["resize"].concat(t))
            },
            crop: function() {
                var t = e.slice(arguments);
                return this.exec.apply(this, ["crop"].concat(t))
            },
            getAsDataUrl: function(e) {
                return this.exec("getAsDataUrl", e)
            },
            getAsBlob: function(e) {
                var t = this.exec("getAsBlob", e);
                return new n(this.getRuid(),t)
            }
        }),
        r
    }
    ),
    t("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"], function(e, t, n) {
        var r, i = e.$;
        return r = function(e) {
            var t = 0
              , n = []
              , r = function() {
                for (var r; n.length && e > t; )
                    r = n.shift(),
                    t += r[0],
                    r[1]()
            }
            ;
            return function(e, i, o) {
                n.push([i, o]),
                e.once("destroy", function() {
                    t -= i,
                    setTimeout(r, 1)
                }
                ),
                setTimeout(r, 1)
            }
        }
        (5242880),
        i.extend(t.options, {
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: !0,
                crop: !0,
                preserveHeaders: !1,
                type: "image/jpeg"
            },
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: !1,
                crop: !1,
                preserveHeaders: !0
            }
        }),
        t.register({
            name: "image",
            makeThumb: function(e, t, o, a) {
                var s, u;
                return e = this.request("get-file", e),
                e.type.match(/^image/) ? (s = i.extend({}, this.options.thumb),
                i.isPlainObject(o) && (s = i.extend(s, o),
                o = null ),
                o = o || s.width,
                a = a || s.height,
                u = new n(s),
                u.once("load", function() {
                    e._info = e._info || u.info(),
                    e._meta = e._meta || u.meta(),
                    1 >= o && o > 0 && (o = e._info.width * o),
                    1 >= a && a > 0 && (a = e._info.height * a),
                    u.resize(o, a)
                }
                ),
                u.once("complete", function() {
                    t(!1, u.getAsDataUrl(s.type)),
                    u.destroy()
                }
                ),
                u.once("error", function(e) {
                    t(e || !0),
                    u.destroy()
                }
                ),
                void r(u, e.source.size, function() {
                    e._info && u.info(e._info),
                    e._meta && u.meta(e._meta),
                    u.loadFromBlob(e.source)
                }
                )) : void t(!0)
            },
            beforeSendFile: function(t) {
                var r, o, a = this.options.compress || this.options.resize, s = a && a.compressSize || 0, u = a && a.noCompressIfLarger || !1;
                return t = this.request("get-file", t),
                !a || !~"image/jpeg,image/jpg".indexOf(t.type) || t.size < s || t._compressed ? void 0 : (a = i.extend({}, a),
                o = e.Deferred(),
                r = new n(a),
                o.always(function() {
                    r.destroy(),
                    r = null 
                }
                ),
                r.once("error", o.reject),
                r.once("load", function() {
                    var e = a.width
                      , n = a.height;
                    t._info = t._info || r.info(),
                    t._meta = t._meta || r.meta(),
                    1 >= e && e > 0 && (e = t._info.width * e),
                    1 >= n && n > 0 && (n = t._info.height * n),
                    r.resize(e, n)
                }
                ),
                r.once("complete", function() {
                    var e, n;
                    try {
                        e = r.getAsBlob(a.type),
                        n = t.size,
                        (!u || e.size < n) && (t.source = e,
                        t.size = e.size,
                        t.trigger("resize", e.size, n)),
                        t._compressed = !0,
                        o.resolve()
                    } catch (i) {
                        o.resolve()
                    }
                }
                ),
                t._info && r.info(t._info),
                t._meta && r.meta(t._meta),
                r.loadFromBlob(t.source),
                o.promise())
            }
        })
    }
    ),
    t("file", ["base", "mediator"], function(e, t) {
        function n() {
            return o + a++
        }
        function r(e) {
            this.name = e.name || "Untitled",
            this.size = e.size || 0,
            this.type = e.type || "application/octet-stream",
            this.lastModifiedDate = e.lastModifiedDate || 1 * new Date,
            this.id = n(),
            this.ext = s.exec(this.name) ? RegExp.$1 : "",
            this.statusText = "",
            u[this.id] = r.Status.INITED,
            this.source = e,
            this.loaded = 0,
            this.on("error", function(e) {
                this.setStatus(r.Status.ERROR, e)
            }
            )
        }
        var i = e.$
          , o = "WU_FILE_"
          , a = 0
          , s = /\.([^.]+)$/
          , u = {};
        return i.extend(r.prototype, {
            setStatus: function(e, t) {
                var n = u[this.id];
                "undefined" != typeof t && (this.statusText = t),
                e !== n && (u[this.id] = e,
                this.trigger("statuschange", e, n))
            },
            getStatus: function() {
                return u[this.id]
            },
            getSource: function() {
                return this.source
            },
            destroy: function() {
                this.off(),
                delete u[this.id]
            }
        }),
        t.installTo(r.prototype),
        r.Status = {
            INITED: "inited",
            QUEUED: "queued",
            PROGRESS: "progress",
            ERROR: "error",
            COMPLETE: "complete",
            CANCELLED: "cancelled",
            INTERRUPT: "interrupt",
            INVALID: "invalid"
        },
        r
    }
    ),
    t("queue", ["base", "mediator", "file"], function(e, t, n) {
        function r() {
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0,
                numofDeleted: 0,
                numofInterrupt: 0
            },
            this._queue = [],
            this._map = {}
        }
        var i = e.$
          , o = n.Status;
        return i.extend(r.prototype, {
            append: function(e) {
                return this._queue.push(e),
                this._fileAdded(e),
                this
            },
            prepend: function(e) {
                return this._queue.unshift(e),
                this._fileAdded(e),
                this
            },
            getFile: function(e) {
                return "string" != typeof e ? e : this._map[e]
            },
            fetch: function(e) {
                var t, n, r = this._queue.length;
                for (e = e || o.QUEUED,
                t = 0; r > t; t++)
                    if (n = this._queue[t],
                    e === n.getStatus())
                        return n;
                return null 
            },
            sort: function(e) {
                "function" == typeof e && this._queue.sort(e)
            },
            getFiles: function() {
                for (var e, t = [].slice.call(arguments, 0), n = [], r = 0, o = this._queue.length; o > r; r++)
                    e = this._queue[r],
                    (!t.length || ~i.inArray(e.getStatus(), t)) && n.push(e);
                return n
            },
            removeFile: function(e) {
                var t = this._map[e.id];
                t && (delete this._map[e.id],
                e.destroy(),
                this.stats.numofDeleted++)
            },
            _fileAdded: function(e) {
                var t = this
                  , n = this._map[e.id];
                n || (this._map[e.id] = e,
                e.on("statuschange", function(e, n) {
                    t._onFileStatusChange(e, n)
                }
                ))
            },
            _onFileStatusChange: function(e, t) {
                var n = this.stats;
                switch (t) {
                case o.PROGRESS:
                    n.numOfProgress--;
                    break;
                case o.QUEUED:
                    n.numOfQueue--;
                    break;
                case o.ERROR:
                    n.numOfUploadFailed--;
                    break;
                case o.INVALID:
                    n.numOfInvalid--;
                    break;
                case o.INTERRUPT:
                    n.numofInterrupt--
                }
                switch (e) {
                case o.QUEUED:
                    n.numOfQueue++;
                    break;
                case o.PROGRESS:
                    n.numOfProgress++;
                    break;
                case o.ERROR:
                    n.numOfUploadFailed++;
                    break;
                case o.COMPLETE:
                    n.numOfSuccess++;
                    break;
                case o.CANCELLED:
                    n.numOfCancel++;
                    break;
                case o.INVALID:
                    n.numOfInvalid++;
                    break;
                case o.INTERRUPT:
                    n.numofInterrupt++
                }
            }
        }),
        t.installTo(r.prototype),
        r
    }
    ),
    t("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"], function(e, t, n, r, i, o) {
        var a = e.$
          , s = /\.\w+$/
          , u = r.Status;
        return t.register({
            name: "queue",
            init: function(t) {
                var r, i, s, u, c, l, f, d = this;
                if (a.isPlainObject(t.accept) && (t.accept = [t.accept]),
                t.accept) {
                    for (c = [],
                    s = 0,
                    i = t.accept.length; i > s; s++)
                        u = t.accept[s].extensions,
                        u && c.push(u);
                    c.length && (l = "\\." + c.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"),
                    d.accept = new RegExp(l,"i")
                }
                return d.queue = new n,
                d.stats = d.queue.stats,
                "html5" === this.request("predict-runtime-type") ? (r = e.Deferred(),
                this.placeholder = f = new o("Placeholder"),
                f.connectRuntime({
                    runtimeOrder: "html5"
                }, function() {
                    d._ruid = f.getRuid(),
                    r.resolve()
                }
                ),
                r.promise()) : void 0
            },
            _wrapFile: function(e) {
                if (!(e instanceof r)) {
                    if (!(e instanceof i)) {
                        if (!this._ruid)
                            throw new Error("Can't add external files.");
                        e = new i(this._ruid,e)
                    }
                    e = new r(e)
                }
                return e
            },
            acceptFile: function(e) {
                var t = !e || !e.size || this.accept && s.exec(e.name) && !this.accept.test(e.name);
                return !t
            },
            _addFile: function(e) {
                var t = this;
                return e = t._wrapFile(e),
                t.owner.trigger("beforeFileQueued", e) ? t.acceptFile(e) ? (t.queue.append(e),
                t.owner.trigger("fileQueued", e),
                e) : void t.owner.trigger("error", "Q_TYPE_DENIED", e) : void 0
            },
            getFile: function(e) {
                return this.queue.getFile(e)
            },
            addFile: function(e) {
                var t = this;
                e.length || (e = [e]),
                e = a.map(e, function(e) {
                    return t._addFile(e)
                }
                ),
                t.owner.trigger("filesQueued", e),
                t.options.auto && setTimeout(function() {
                    t.request("start-upload")
                }
                , 20)
            },
            getStats: function() {
                return this.stats
            },
            removeFile: function(e, t) {
                var n = this;
                e = e.id ? e : n.queue.getFile(e),
                this.request("cancel-file", e),
                t && this.queue.removeFile(e)
            },
            getFiles: function() {
                return this.queue.getFiles.apply(this.queue, arguments)
            },
            fetchFile: function() {
                return this.queue.fetch.apply(this.queue, arguments)
            },
            retry: function(e, t) {
                var n, r, i, o = this;
                if (e)
                    return e = e.id ? e : o.queue.getFile(e),
                    e.setStatus(u.QUEUED),
                    void (t || o.request("start-upload"));
                for (n = o.queue.getFiles(u.ERROR),
                r = 0,
                i = n.length; i > r; r++)
                    e = n[r],
                    e.setStatus(u.QUEUED);
                o.request("start-upload")
            },
            sortFiles: function() {
                return this.queue.sort.apply(this.queue, arguments)
            },
            reset: function() {
                this.owner.trigger("reset"),
                this.queue = new n,
                this.stats = this.queue.stats
            },
            destroy: function() {
                this.reset(),
                this.placeholder && this.placeholder.destroy()
            }
        })
    }
    ),
    t("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"], function(e, t) {
        return e.support = function() {
            return t.hasRuntime.apply(t, arguments)
        }
        ,
        e.register({
            name: "runtime",
            init: function() {
                if (!this.predictRuntimeType())
                    throw Error("Runtime Error")
            },
            predictRuntimeType: function() {
                var e, n, r = this.options.runtimeOrder || t.orders, i = this.type;
                if (!i)
                    for (r = r.split(/\s*,\s*/g),
                    e = 0,
                    n = r.length; n > e; e++)
                        if (t.hasRuntime(r[e])) {
                            this.type = i = r[e];
                            break
                        }
                return i
            }
        })
    }
    ),
    t("lib/transport", ["base", "runtime/client", "mediator"], function(e, t, n) {
        function r(e) {
            var n = this;
            e = n.options = i.extend(!0, {}, r.options, e || {}),
            t.call(this, "Transport"),
            this._blob = null ,
            this._formData = e.formData || {},
            this._headers = e.headers || {},
            this.on("progress", this._timeout),
            this.on("load error", function() {
                n.trigger("progress", 1),
                clearTimeout(n._timer)
            }
            )
        }
        var i = e.$;
        return r.options = {
            server: "",
            method: "POST",
            withCredentials: !1,
            fileVal: "file",
            timeout: 12e4,
            formData: {},
            headers: {},
            sendAsBinary: !1
        },
        i.extend(r.prototype, {
            appendBlob: function(e, t, n) {
                var r = this
                  , i = r.options;
                r.getRuid() && r.disconnectRuntime(),
                r.connectRuntime(t.ruid, function() {
                    r.exec("init")
                }
                ),
                r._blob = t,
                i.fileVal = e || i.fileVal,
                i.filename = n || i.filename
            },
            append: function(e, t) {
                "object" == typeof e ? i.extend(this._formData, e) : this._formData[e] = t
            },
            setRequestHeader: function(e, t) {
                "object" == typeof e ? i.extend(this._headers, e) : this._headers[e] = t
            },
            send: function(e) {
                this.exec("send", e),
                this._timeout()
            },
            abort: function() {
                return clearTimeout(this._timer),
                this.exec("abort")
            },
            destroy: function() {
                this.trigger("destroy"),
                this.off(),
                this.exec("destroy"),
                this.disconnectRuntime()
            },
            getResponse: function() {
                return this.exec("getResponse")
            },
            getResponseAsJson: function() {
                return this.exec("getResponseAsJson")
            },
            getStatus: function() {
                return this.exec("getStatus")
            },
            _timeout: function() {
                var e = this
                  , t = e.options.timeout;
                t && (clearTimeout(e._timer),
                e._timer = setTimeout(function() {
                    e.abort(),
                    e.trigger("error", "timeout")
                }
                , t))
            }
        }),
        n.installTo(r.prototype),
        r
    }
    ),
    t("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"], function(e, t, n, r) {
        function i(e, t) {
            var n, r, i = [], o = e.source, a = o.size, s = t ? Math.ceil(a / t) : 1, u = 0, c = 0;
            for (r = {
                file: e,
                has: function() {
                    return !!i.length
                },
                shift: function() {
                    return i.shift()
                },
                unshift: function(e) {
                    i.unshift(e)
                }
            }; s > c; )
                n = Math.min(t, a - u),
                i.push({
                    file: e,
                    start: u,
                    end: t ? u + n : a,
                    total: a,
                    chunks: s,
                    chunk: c++,
                    cuted: r
                }),
                u += n;
            return e.blocks = i.concat(),
            e.remaning = i.length,
            r
        }
        var o = e.$
          , a = e.isPromise
          , s = n.Status;
        o.extend(t.options, {
            prepareNextFile: !1,
            chunked: !1,
            chunkSize: 5242880,
            chunkRetry: 2,
            threads: 3,
            formData: {}
        }),
        t.register({
            name: "upload",
            init: function() {
                var t = this.owner
                  , n = this;
                this.runing = !1,
                this.progress = !1,
                t.on("startUpload", function() {
                    n.progress = !0
                }
                ).on("uploadFinished", function() {
                    n.progress = !1
                }
                ),
                this.pool = [],
                this.stack = [],
                this.pending = [],
                this.remaning = 0,
                this.__tick = e.bindFn(this._tick, this),
                t.on("uploadComplete", function(e) {
                    e.blocks && o.each(e.blocks, function(e, t) {
                        t.transport && (t.transport.abort(),
                        t.transport.destroy()),
                        delete t.transport
                    }
                    ),
                    delete e.blocks,
                    delete e.remaning
                }
                )
            },
            reset: function() {
                this.request("stop-upload", !0),
                this.runing = !1,
                this.pool = [],
                this.stack = [],
                this.pending = [],
                this.remaning = 0,
                this._trigged = !1,
                this._promise = null 
            },
            startUpload: function(t) {
                var n = this;
                if (o.each(n.request("get-files", s.INVALID), function() {
                    n.request("remove-file", this)
                }
                ),
                t)
                    if (t = t.id ? t : n.request("get-file", t),
                    t.getStatus() === s.INTERRUPT)
                        o.each(n.pool, function(e, n) {
                            n.file === t && n.transport && n.transport.send()
                        }
                        ),
                        t.setStatus(s.QUEUED);
                    else {
                        if (t.getStatus() === s.PROGRESS)
                            return;
                        t.setStatus(s.QUEUED)
                    }
                else
                    o.each(n.request("get-files", [s.INITED]), function() {
                        this.setStatus(s.QUEUED)
                    }
                    );
                if (!n.runing) {
                    n.runing = !0;
                    var r = [];
                    o.each(n.pool, function(e, t) {
                        var i = t.file;
                        i.getStatus() === s.INTERRUPT && (r.push(i),
                        n._trigged = !1,
                        t.transport && t.transport.send())
                    }
                    );
                    for (var t; t = r.shift(); )
                        t.setStatus(s.PROGRESS);
                    t || o.each(n.request("get-files", s.INTERRUPT), function() {
                        this.setStatus(s.PROGRESS)
                    }
                    ),
                    n._trigged = !1,
                    e.nextTick(n.__tick),
                    n.owner.trigger("startUpload")
                }
            },
            stopUpload: function(t, n) {
                var r = this;
                if (t === !0 && (n = t,
                t = null ),
                r.runing !== !1) {
                    if (t) {
                        if (t = t.id ? t : r.request("get-file", t),
                        t.getStatus() !== s.PROGRESS && t.getStatus() !== s.QUEUED)
                            return;
                        return t.setStatus(s.INTERRUPT),
                        o.each(r.pool, function(e, n) {
                            n.file === t && (n.transport && n.transport.abort(),
                            r._putback(n),
                            r._popBlock(n))
                        }
                        ),
                        e.nextTick(r.__tick)
                    }
                    r.runing = !1,
                    this._promise && this._promise.file && this._promise.file.setStatus(s.INTERRUPT),
                    n && o.each(r.pool, function(e, t) {
                        t.transport && t.transport.abort(),
                        t.file.setStatus(s.INTERRUPT)
                    }
                    ),
                    r.owner.trigger("stopUpload")
                }
            },
            cancelFile: function(e) {
                e = e.id ? e : this.request("get-file", e),
                e.blocks && o.each(e.blocks, function(e, t) {
                    var n = t.transport;
                    n && (n.abort(),
                    n.destroy(),
                    delete t.transport)
                }
                ),
                e.setStatus(s.CANCELLED),
                this.owner.trigger("fileDequeued", e)
            },
            isInProgress: function() {
                return !!this.progress
            },
            _getStats: function() {
                return this.request("get-stats")
            },
            skipFile: function(e, t) {
                e = e.id ? e : this.request("get-file", e),
                e.setStatus(t || s.COMPLETE),
                e.skipped = !0,
                e.blocks && o.each(e.blocks, function(e, t) {
                    var n = t.transport;
                    n && (n.abort(),
                    n.destroy(),
                    delete t.transport)
                }
                ),
                this.owner.trigger("uploadSkip", e)
            },
            _tick: function() {
                var t, n, r = this, i = r.options;
                return r._promise ? r._promise.always(r.__tick) : void (r.pool.length < i.threads && (n = r._nextBlock()) ? (r._trigged = !1,
                t = function(t) {
                    r._promise = null ,
                    t && t.file && r._startSend(t),
                    e.nextTick(r.__tick)
                }
                ,
                r._promise = a(n) ? n.always(t) : t(n)) : r.remaning || r._getStats().numOfQueue || r._getStats().numofInterrupt || (r.runing = !1,
                r._trigged || e.nextTick(function() {
                    r.owner.trigger("uploadFinished")
                }
                ),
                r._trigged = !0))
            },
            _putback: function(e) {
                var t;
                e.cuted.unshift(e),
                t = this.stack.indexOf(e.cuted),
                ~t || this.stack.unshift(e.cuted)
            },
            _getStack: function() {
                for (var e, t = 0; e = this.stack[t++]; ) {
                    if (e.has() && e.file.getStatus() === s.PROGRESS)
                        return e;
                    (!e.has() || e.file.getStatus() !== s.PROGRESS && e.file.getStatus() !== s.INTERRUPT) && this.stack.splice(--t, 1)
                }
                return null 
            },
            _nextBlock: function() {
                var e, t, n, r, o = this, s = o.options;
                return (e = this._getStack()) ? (s.prepareNextFile && !o.pending.length && o._prepareNextFile(),
                e.shift()) : o.runing ? (!o.pending.length && o._getStats().numOfQueue && o._prepareNextFile(),
                t = o.pending.shift(),
                n = function(t) {
                    return t ? (e = i(t, s.chunked ? s.chunkSize : 0),
                    o.stack.push(e),
                    e.shift()) : null 
                }
                ,
                a(t) ? (r = t.file,
                t = t[t.pipe ? "pipe" : "then"](n),
                t.file = r,
                t) : n(t)) : void 0
            },
            _prepareNextFile: function() {
                var e, t = this, n = t.request("fetch-file"), r = t.pending;
                n && (e = t.request("before-send-file", n, function() {
                    return n.getStatus() === s.PROGRESS || n.getStatus() === s.INTERRUPT ? n : t._finishFile(n)
                }
                ),
                t.owner.trigger("uploadStart", n),
                n.setStatus(s.PROGRESS),
                e.file = n,
                e.done(function() {
                    var t = o.inArray(e, r);
                    ~t && r.splice(t, 1, n)
                }
                ),
                e.fail(function(e) {
                    n.setStatus(s.ERROR, e),
                    t.owner.trigger("uploadError", n, e),
                    t.owner.trigger("uploadComplete", n)
                }
                ),
                r.push(e))
            },
            _popBlock: function(e) {
                var t = o.inArray(e, this.pool);
                this.pool.splice(t, 1),
                e.file.remaning--,
                this.remaning--
            },
            _startSend: function(t) {
                var n, r = this, i = t.file;
                return i.getStatus() !== s.PROGRESS ? void (i.getStatus() === s.INTERRUPT && r._putback(t)) : (r.pool.push(t),
                r.remaning++,
                t.blob = 1 === t.chunks ? i.source : i.source.slice(t.start, t.end),
                n = r.request("before-send", t, function() {
                    i.getStatus() === s.PROGRESS ? r._doSend(t) : (r._popBlock(t),
                    e.nextTick(r.__tick))
                }
                ),
                void n.fail(function() {
                    1 === i.remaning ? r._finishFile(i).always(function() {
                        t.percentage = 1,
                        r._popBlock(t),
                        r.owner.trigger("uploadComplete", i),
                        e.nextTick(r.__tick)
                    }
                    ) : (t.percentage = 1,
                    r.updateFileProgress(i),
                    r._popBlock(t),
                    e.nextTick(r.__tick))
                }
                ))
            },
            _doSend: function(t) {
                var n, i, a = this, u = a.owner, c = a.options, l = t.file, f = new r(c), d = o.extend({}, c.formData), h = o.extend({}, c.headers);
                t.transport = f,
                f.on("destroy", function() {
                    delete t.transport,
                    a._popBlock(t),
                    e.nextTick(a.__tick)
                }
                ),
                f.on("progress", function(e) {
                    t.percentage = e,
                    a.updateFileProgress(l)
                }
                ),
                n = function(e) {
                    var n;
                    return i = f.getResponseAsJson() || {},
                    i._raw = f.getResponse(),
                    n = function(t) {
                        e = t
                    }
                    ,
                    u.trigger("uploadAccept", t, i, n) || (e = e || "server"),
                    e
                }
                ,
                f.on("error", function(e, r) {
                    t.retried = t.retried || 0,
                    t.chunks > 1 && ~"http,abort".indexOf(e) && t.retried < c.chunkRetry ? (t.retried++,
                    f.send()) : (r || "server" !== e || (e = n(e)),
                    l.setStatus(s.ERROR, e),
                    u.trigger("uploadError", l, e),
                    u.trigger("uploadComplete", l))
                }
                ),
                f.on("load", function() {
                    var e;
                    return (e = n()) ? void f.trigger("error", e, !0) : void (1 === l.remaning ? a._finishFile(l, i) : f.destroy())
                }
                ),
                d = o.extend(d, {
                    id: l.id,
                    name: l.name,
                    type: l.type,
                    lastModifiedDate: l.lastModifiedDate,
                    size: l.size
                }),
                t.chunks > 1 && o.extend(d, {
                    chunks: t.chunks,
                    chunk: t.chunk
                }),
                u.trigger("uploadBeforeSend", t, d, h),
                f.appendBlob(c.fileVal, t.blob, l.name),
                f.append(d),
                f.setRequestHeader(h),
                f.send()
            },
            _finishFile: function(e, t, n) {
                var r = this.owner;
                return r.request("after-send-file", arguments, function() {
                    e.setStatus(s.COMPLETE),
                    r.trigger("uploadSuccess", e, t, n)
                }
                ).fail(function(t) {
                    e.getStatus() === s.PROGRESS && e.setStatus(s.ERROR, t),
                    r.trigger("uploadError", e, t)
                }
                ).always(function() {
                    r.trigger("uploadComplete", e)
                }
                )
            },
            updateFileProgress: function(e) {
                var t = 0
                  , n = 0;
                e.blocks && (o.each(e.blocks, function(e, t) {
                    n += (t.percentage || 0) * (t.end - t.start)
                }
                ),
                t = n / e.size,
                this.owner.trigger("uploadProgress", e, t || 0))
            }
        })
    }
    ),
    t("widgets/validator", ["base", "uploader", "file", "widgets/widget"], function(e, t, n) {
        var r, i = e.$, o = {};
        return r = {
            addValidator: function(e, t) {
                o[e] = t
            },
            removeValidator: function(e) {
                delete o[e]
            }
        },
        t.register({
            name: "validator",
            init: function() {
                var t = this;
                e.nextTick(function() {
                    i.each(o, function() {
                        this.call(t.owner)
                    }
                    )
                }
                )
            }
        }),
        r.addValidator("fileNumLimit", function() {
            var e = this
              , t = e.options
              , n = 0
              , r = parseInt(t.fileNumLimit, 10)
              , i = !0;
            r && (e.on("beforeFileQueued", function(e) {
                return n >= r && i && (i = !1,
                this.trigger("error", "Q_EXCEED_NUM_LIMIT", r, e),
                setTimeout(function() {
                    i = !0
                }
                , 1)),
                n >= r ? !1 : !0
            }
            ),
            e.on("fileQueued", function() {
                n++
            }
            ),
            e.on("fileDequeued", function() {
                n--
            }
            ),
            e.on("reset", function() {
                n = 0
            }
            ))
        }
        ),
        r.addValidator("fileSizeLimit", function() {
            var e = this
              , t = e.options
              , n = 0
              , r = parseInt(t.fileSizeLimit, 10)
              , i = !0;
            r && (e.on("beforeFileQueued", function(e) {
                var t = n + e.size > r;
                return t && i && (i = !1,
                this.trigger("error", "Q_EXCEED_SIZE_LIMIT", r, e),
                setTimeout(function() {
                    i = !0
                }
                , 1)),
                t ? !1 : !0
            }
            ),
            e.on("fileQueued", function(e) {
                n += e.size
            }
            ),
            e.on("fileDequeued", function(e) {
                n -= e.size
            }
            ),
            e.on("reset", function() {
                n = 0
            }
            ))
        }
        ),
        r.addValidator("fileSingleSizeLimit", function() {
            var e = this
              , t = e.options
              , r = t.fileSingleSizeLimit;
            r && e.on("beforeFileQueued", function(e) {
                return e.size > r ? (e.setStatus(n.Status.INVALID, "exceed_size"),
                this.trigger("error", "F_EXCEED_SIZE", r, e),
                !1) : void 0
            }
            )
        }
        ),
        r.addValidator("duplicate", function() {
            function e(e) {
                for (var t, n = 0, r = 0, i = e.length; i > r; r++)
                    t = e.charCodeAt(r),
                    n = t + (n << 6) + (n << 16) - n;
                return n
            }
            var t = this
              , n = t.options
              , r = {};
            n.duplicate || (t.on("beforeFileQueued", function(t) {
                var n = t.__hash || (t.__hash = e(t.name + t.size + t.lastModifiedDate));
                return r[n] ? (this.trigger("error", "F_DUPLICATE", t),
                !1) : void 0
            }
            ),
            t.on("fileQueued", function(e) {
                var t = e.__hash;
                t && (r[t] = !0)
            }
            ),
            t.on("fileDequeued", function(e) {
                var t = e.__hash;
                t && delete r[t]
            }
            ),
            t.on("reset", function() {
                r = {}
            }
            ))
        }
        ),
        r
    }
    ),
    t("lib/md5", ["runtime/client", "mediator"], function(e, t) {
        function n() {
            e.call(this, "Md5")
        }
        return t.installTo(n.prototype),
        n.prototype.loadFromBlob = function(e) {
            var t = this;
            t.getRuid() && t.disconnectRuntime(),
            t.connectRuntime(e.ruid, function() {
                t.exec("init"),
                t.exec("loadFromBlob", e)
            }
            )
        }
        ,
        n.prototype.getResult = function() {
            return this.exec("getResult")
        }
        ,
        n
    }
    ),
    t("widgets/md5", ["base", "uploader", "lib/md5", "lib/blob", "widgets/widget"], function(e, t, n, r) {
        return t.register({
            name: "md5",
            md5File: function(t, i, o) {
                var a = new n
                  , s = e.Deferred()
                  , u = t instanceof r ? t : this.request("get-file", t).source;
                return a.on("progress load", function(e) {
                    e = e || {},
                    s.notify(e.total ? e.loaded / e.total : 1)
                }
                ),
                a.on("complete", function() {
                    s.resolve(a.getResult())
                }
                ),
                a.on("error", function(e) {
                    s.reject(e)
                }
                ),
                arguments.length > 1 && (i = i || 0,
                o = o || 0,
                0 > i && (i = u.size + i),
                0 > o && (o = u.size + o),
                o = Math.min(o, u.size),
                u = u.slice(i, o)),
                a.loadFromBlob(u),
                s.promise()
            }
        })
    }
    ),
    t("runtime/compbase", [], function() {
        function e(e, t) {
            this.owner = e,
            this.options = e.options,
            this.getRuntime = function() {
                return t
            }
            ,
            this.getRuid = function() {
                return t.uid
            }
            ,
            this.trigger = function() {
                return e.trigger.apply(e, arguments)
            }
        }
        return e
    }
    ),
    t("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"], function(t, n, r) {
        function i() {
            var e = {}
              , r = this
              , i = this.destroy;
            n.apply(r, arguments),
            r.type = o,
            r.exec = function(n, i) {
                var o, s = this, u = s.uid, c = t.slice(arguments, 2);
                return a[n] && (o = e[u] = e[u] || new a[n](s,r),
                o[i]) ? o[i].apply(o, c) : void 0
            }
            ,
            r.destroy = function() {
                return i && i.apply(this, arguments)
            }
        }
        var o = "html5"
          , a = {};
        return t.inherits(n, {
            constructor: i,
            init: function() {
                var e = this;
                setTimeout(function() {
                    e.trigger("ready")
                }
                , 1)
            }
        }),
        i.register = function(e, n) {
            var i = a[e] = t.inherits(r, n);
            return i
        }
        ,
        e.Blob && e.FileReader && e.DataView && n.addRuntime(o, i),
        i
    }
    ),
    t("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"], function(e, t) {
        return e.register("Blob", {
            slice: function(e, n) {
                var r = this.owner.source
                  , i = r.slice || r.webkitSlice || r.mozSlice;
                return r = i.call(r, e, n),
                new t(this.getRuid(),r)
            }
        })
    }
    ),
    t("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"], function(e, t, n) {
        var r = e.$
          , i = "webuploader-dnd-";
        return t.register("DragAndDrop", {
            init: function() {
                var t = this.elem = this.options.container;
                this.dragEnterHandler = e.bindFn(this._dragEnterHandler, this),
                this.dragOverHandler = e.bindFn(this._dragOverHandler, this),
                this.dragLeaveHandler = e.bindFn(this._dragLeaveHandler, this),
                this.dropHandler = e.bindFn(this._dropHandler, this),
                this.dndOver = !1,
                t.on("dragenter", this.dragEnterHandler),
                t.on("dragover", this.dragOverHandler),
                t.on("dragleave", this.dragLeaveHandler),
                t.on("drop", this.dropHandler),
                this.options.disableGlobalDnd && (r(document).on("dragover", this.dragOverHandler),
                r(document).on("drop", this.dropHandler))
            },
            _dragEnterHandler: function(e) {
                var t, n = this, r = n._denied || !1;
                return e = e.originalEvent || e,
                n.dndOver || (n.dndOver = !0,
                t = e.dataTransfer.items,
                t && t.length && (n._denied = r = !n.trigger("accept", t)),
                n.elem.addClass(i + "over"),
                n.elem[r ? "addClass" : "removeClass"](i + "denied")),
                e.dataTransfer.dropEffect = r ? "none" : "copy",
                !1
            },
            _dragOverHandler: function(e) {
                var t = this.elem.parent().get(0);
                return t && !r.contains(t, e.currentTarget) ? !1 : (clearTimeout(this._leaveTimer),
                this._dragEnterHandler.call(this, e),
                !1)
            },
            _dragLeaveHandler: function() {
                var e, t = this;
                return e = function() {
                    t.dndOver = !1,
                    t.elem.removeClass(i + "over " + i + "denied")
                }
                ,
                clearTimeout(t._leaveTimer),
                t._leaveTimer = setTimeout(e, 100),
                !1
            },
            _dropHandler: function(e) {
                var t, o, a = this, s = a.getRuid(), u = a.elem.parent().get(0);
                if (u && !r.contains(u, e.currentTarget))
                    return !1;
                e = e.originalEvent || e,
                t = e.dataTransfer;
                try {
                    o = t.getData("text/html")
                } catch (c) {}
                return o ? void 0 : (a._getTansferFiles(t, function(e) {
                    a.trigger("drop", r.map(e, function(e) {
                        return new n(s,e)
                    }
                    ))
                }
                ),
                a.dndOver = !1,
                a.elem.removeClass(i + "over"),
                !1)
            },
            _getTansferFiles: function(t, n) {
                var r, i, o, a, s, u, c, l = [], f = [];
                for (r = t.items,
                i = t.files,
                c = !(!r || !r[0].webkitGetAsEntry),
                s = 0,
                u = i.length; u > s; s++)
                    o = i[s],
                    a = r && r[s],
                    c && a.webkitGetAsEntry().isDirectory ? f.push(this._traverseDirectoryTree(a.webkitGetAsEntry(), l)) : l.push(o);
                e.when.apply(e, f).done(function() {
                    l.length && n(l)
                }
                )
            },
            _traverseDirectoryTree: function(t, n) {
                var r = e.Deferred()
                  , i = this;
                return t.isFile ? t.file(function(e) {
                    n.push(e),
                    r.resolve()
                }
                ) : t.isDirectory && t.createReader().readEntries(function(t) {
                    var o, a = t.length, s = [], u = [];
                    for (o = 0; a > o; o++)
                        s.push(i._traverseDirectoryTree(t[o], u));
                    e.when.apply(e, s).then(function() {
                        n.push.apply(n, u),
                        r.resolve()
                    }
                    , r.reject)
                }
                ),
                r.promise()
            },
            destroy: function() {
                var e = this.elem;
                e && (e.off("dragenter", this.dragEnterHandler),
                e.off("dragover", this.dragOverHandler),
                e.off("dragleave", this.dragLeaveHandler),
                e.off("drop", this.dropHandler),
                this.options.disableGlobalDnd && (r(document).off("dragover", this.dragOverHandler),
                r(document).off("drop", this.dropHandler)))
            }
        })
    }
    ),
    t("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"], function(e, t, n) {
        return t.register("FilePaste", {
            init: function() {
                var t, n, r, i, o = this.options, a = this.elem = o.container, s = ".*";
                if (o.accept) {
                    for (t = [],
                    n = 0,
                    r = o.accept.length; r > n; n++)
                        i = o.accept[n].mimeTypes,
                        i && t.push(i);
                    t.length && (s = t.join(","),
                    s = s.replace(/,/g, "|").replace(/\*/g, ".*"))
                }
                this.accept = s = new RegExp(s,"i"),
                this.hander = e.bindFn(this._pasteHander, this),
                a.on("paste", this.hander)
            },
            _pasteHander: function(e) {
                var t, r, i, o, a, s = [], u = this.getRuid();
                for (e = e.originalEvent || e,
                t = e.clipboardData.items,
                o = 0,
                a = t.length; a > o; o++)
                    r = t[o],
                    "file" === r.kind && (i = r.getAsFile()) && s.push(new n(u,i));
                s.length && (e.preventDefault(),
                e.stopPropagation(),
                this.trigger("paste", s))
            },
            destroy: function() {
                this.elem.off("paste", this.hander)
            }
        })
    }
    ),
    t("runtime/html5/filepicker", ["base", "runtime/html5/runtime"], function(e, t) {
        var n = e.$;
        return t.register("FilePicker", {
            init: function() {
                var e, t, r, i, o = this.getRuntime().getContainer(), a = this, s = a.owner, u = a.options, c = this.label = n(document.createElement("label")), l = this.input = n(document.createElement("input"));
                if (l.attr("type", "file"),
                l.attr("name", u.name),
                l.addClass("webuploader-element-invisible"),
                c.on("click", function() {
                    l.trigger("click")
                }
                ),
                c.css({
                    opacity: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    cursor: "pointer",
                    background: "#ffffff"
                }),
                u.multiple && l.attr("multiple", "multiple"),
                u.accept && u.accept.length > 0) {
                    for (e = [],
                    t = 0,
                    r = u.accept.length; r > t; t++)
                        e.push(u.accept[t].mimeTypes);
                    l.attr("accept", e.join(","))
                }
                o.append(l),
                o.append(c),
                i = function(e) {
                    s.trigger(e.type)
                }
                ,
                l.on("change", function(e) {
                    var t, r = arguments.callee;
                    a.files = e.target.files,
                    t = this.cloneNode(!0),
                    t.value = null ,
                    this.parentNode.replaceChild(t, this),
                    l.off(),
                    l = n(t).on("change", r).on("mouseenter mouseleave", i),
                    s.trigger("change")
                }
                ),
                c.on("mouseenter mouseleave", i)
            },
            getFiles: function() {
                return this.files
            },
            destroy: function() {
                this.input.off(),
                this.label.off()
            }
        })
    }
    ),
    t("runtime/html5/util", ["base"], function(t) {
        var n = e.createObjectURL && e || e.URL && URL.revokeObjectURL && URL || e.webkitURL
          , r = t.noop
          , i = r;
        return n && (r = function() {
            return n.createObjectURL.apply(n, arguments)
        }
        ,
        i = function() {
            return n.revokeObjectURL.apply(n, arguments)
        }
        ),
        {
            createObjectURL: r,
            revokeObjectURL: i,
            dataURL2Blob: function(e) {
                var t, n, r, i, o, a;
                for (a = e.split(","),
                t = ~a[0].indexOf("base64") ? atob(a[1]) : decodeURIComponent(a[1]),
                r = new ArrayBuffer(t.length),
                n = new Uint8Array(r),
                i = 0; i < t.length; i++)
                    n[i] = t.charCodeAt(i);
                return o = a[0].split(":")[1].split(";")[0],
                this.arrayBufferToBlob(r, o)
            },
            dataURL2ArrayBuffer: function(e) {
                var t, n, r, i;
                for (i = e.split(","),
                t = ~i[0].indexOf("base64") ? atob(i[1]) : decodeURIComponent(i[1]),
                n = new Uint8Array(t.length),
                r = 0; r < t.length; r++)
                    n[r] = t.charCodeAt(r);
                return n.buffer
            },
            arrayBufferToBlob: function(t, n) {
                var r, i = e.BlobBuilder || e.WebKitBlobBuilder;
                return i ? (r = new i,
                r.append(t),
                r.getBlob(n)) : new Blob([t],n ? {
                    type: n
                } : {})
            },
            canvasToDataUrl: function(e, t, n) {
                return e.toDataURL(t, n / 100)
            },
            parseMeta: function(e, t) {
                t(!1, {})
            },
            updateImageHead: function(e) {
                return e
            }
        }
    }
    ),
    t("runtime/html5/imagemeta", ["runtime/html5/util"], function(e) {
        var t;
        return t = {
            parsers: {
                65505: []
            },
            maxMetaDataSize: 262144,
            parse: function(e, t) {
                var n = this
                  , r = new FileReader;
                r.onload = function() {
                    t(!1, n._parse(this.result)),
                    r = r.onload = r.onerror = null 
                }
                ,
                r.onerror = function(e) {
                    t(e.message),
                    r = r.onload = r.onerror = null 
                }
                ,
                e = e.slice(0, n.maxMetaDataSize),
                r.readAsArrayBuffer(e.getSource())
            },
            _parse: function(e, n) {
                if (!(e.byteLength < 6)) {
                    var r, i, o, a, s = new DataView(e), u = 2, c = s.byteLength - 4, l = u, f = {};
                    if (65496 === s.getUint16(0)) {
                        for (; c > u && (r = s.getUint16(u),
                        r >= 65504 && 65519 >= r || 65534 === r) && (i = s.getUint16(u + 2) + 2,
                        !(u + i > s.byteLength)); ) {
                            if (o = t.parsers[r],
                            !n && o)
                                for (a = 0; a < o.length; a += 1)
                                    o[a].call(t, s, u, i, f);
                            u += i,
                            l = u
                        }
                        l > 6 && (f.imageHead = e.slice ? e.slice(2, l) : new Uint8Array(e).subarray(2, l))
                    }
                    return f
                }
            },
            updateImageHead: function(e, t) {
                var n, r, i, o = this._parse(e, !0);
                return i = 2,
                o.imageHead && (i = 2 + o.imageHead.byteLength),
                r = e.slice ? e.slice(i) : new Uint8Array(e).subarray(i),
                n = new Uint8Array(t.byteLength + 2 + r.byteLength),
                n[0] = 255,
                n[1] = 216,
                n.set(new Uint8Array(t), 2),
                n.set(new Uint8Array(r), t.byteLength + 2),
                n.buffer
            }
        },
        e.parseMeta = function() {
            return t.parse.apply(t, arguments)
        }
        ,
        e.updateImageHead = function() {
            return t.updateImageHead.apply(t, arguments)
        }
        ,
        t
    }
    ),
    t("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"], function(e, t) {
        var n = {};
        return n.ExifMap = function() {
            return this
        }
        ,
        n.ExifMap.prototype.map = {
            Orientation: 274
        },
        n.ExifMap.prototype.get = function(e) {
            return this[e] || this[this.map[e]]
        }
        ,
        n.exifTagTypes = {
            1: {
                getValue: function(e, t) {
                    return e.getUint8(t)
                },
                size: 1
            },
            2: {
                getValue: function(e, t) {
                    return String.fromCharCode(e.getUint8(t))
                },
                size: 1,
                ascii: !0
            },
            3: {
                getValue: function(e, t, n) {
                    return e.getUint16(t, n)
                },
                size: 2
            },
            4: {
                getValue: function(e, t, n) {
                    return e.getUint32(t, n)
                },
                size: 4
            },
            5: {
                getValue: function(e, t, n) {
                    return e.getUint32(t, n) / e.getUint32(t + 4, n)
                },
                size: 8
            },
            9: {
                getValue: function(e, t, n) {
                    return e.getInt32(t, n)
                },
                size: 4
            },
            10: {
                getValue: function(e, t, n) {
                    return e.getInt32(t, n) / e.getInt32(t + 4, n)
                },
                size: 8
            }
        },
        n.exifTagTypes[7] = n.exifTagTypes[1],
        n.getExifValue = function(t, r, i, o, a, s) {
            var u, c, l, f, d, h, p = n.exifTagTypes[o];
            if (!p)
                return void e.log("Invalid Exif data: Invalid tag type.");
            if (u = p.size * a,
            c = u > 4 ? r + t.getUint32(i + 8, s) : i + 8,
            c + u > t.byteLength)
                return void e.log("Invalid Exif data: Invalid data offset.");
            if (1 === a)
                return p.getValue(t, c, s);
            for (l = [],
            f = 0; a > f; f += 1)
                l[f] = p.getValue(t, c + f * p.size, s);
            if (p.ascii) {
                for (d = "",
                f = 0; f < l.length && (h = l[f],
                "\x00" !== h); f += 1)
                    d += h;
                return d
            }
            return l
        }
        ,
        n.parseExifTag = function(e, t, r, i, o) {
            var a = e.getUint16(r, i);
            o.exif[a] = n.getExifValue(e, t, r, e.getUint16(r + 2, i), e.getUint32(r + 4, i), i)
        }
        ,
        n.parseExifTags = function(t, n, r, i, o) {
            var a, s, u;
            if (r + 6 > t.byteLength)
                return void e.log("Invalid Exif data: Invalid directory offset.");
            if (a = t.getUint16(r, i),
            s = r + 2 + 12 * a,
            s + 4 > t.byteLength)
                return void e.log("Invalid Exif data: Invalid directory size.");
            for (u = 0; a > u; u += 1)
                this.parseExifTag(t, n, r + 2 + 12 * u, i, o);
            return t.getUint32(s, i)
        }
        ,
        n.parseExifData = function(t, r, i, o) {
            var a, s, u = r + 10;
            if (1165519206 === t.getUint32(r + 4)) {
                if (u + 8 > t.byteLength)
                    return void e.log("Invalid Exif data: Invalid segment size.");
                if (0 !== t.getUint16(r + 8))
                    return void e.log("Invalid Exif data: Missing byte alignment offset.");
                switch (t.getUint16(u)) {
                case 18761:
                    a = !0;
                    break;
                case 19789:
                    a = !1;
                    break;
                default:
                    return void e.log("Invalid Exif data: Invalid byte alignment marker.")
                }
                if (42 !== t.getUint16(u + 2, a))
                    return void e.log("Invalid Exif data: Missing TIFF marker.");
                s = t.getUint32(u + 4, a),
                o.exif = new n.ExifMap,
                s = n.parseExifTags(t, u, u + s, a, o)
            }
        }
        ,
        t.parsers[65505].push(n.parseExifData),
        n
    }
    ),
    t("runtime/html5/jpegencoder", [], function() {
        function e(e) {
            function t(e) {
                for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; 64 > n; n++) {
                    var r = E((t[n] * e + 50) / 100);
                    1 > r ? r = 1 : r > 255 && (r = 255),
                    k[M[n]] = r
                }
                for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o = 0; 64 > o; o++) {
                    var a = E((i[o] * e + 50) / 100);
                    1 > a ? a = 1 : a > 255 && (a = 255),
                    S[M[o]] = a
                }
                for (var s = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], u = 0, c = 0; 8 > c; c++)
                    for (var l = 0; 8 > l; l++)
                        T[u] = 1 / (k[M[u]] * s[c] * s[l] * 8),
                        F[u] = 1 / (S[M[u]] * s[c] * s[l] * 8),
                        u++
            }
            function n(e, t) {
                for (var n = 0, r = 0, i = new Array, o = 1; 16 >= o; o++) {
                    for (var a = 1; a <= e[o]; a++)
                        i[t[r]] = [],
                        i[t[r]][0] = n,
                        i[t[r]][1] = o,
                        r++,
                        n++;
                    n *= 2
                }
                return i
            }
            function r() {
                _ = n(j, N),
                y = n(V, G),
                w = n($, Q),
                x = n(W, J)
            }
            function i() {
                for (var e = 1, t = 2, n = 1; 15 >= n; n++) {
                    for (var r = e; t > r; r++)
                        U[32767 + r] = n,
                        A[32767 + r] = [],
                        A[32767 + r][1] = n,
                        A[32767 + r][0] = r;
                    for (var i = -(t - 1); -e >= i; i++)
                        U[32767 + i] = n,
                        A[32767 + i] = [],
                        A[32767 + i][1] = n,
                        A[32767 + i][0] = t - 1 + i;
                    e <<= 1,
                    t <<= 1
                }
            }
            function o() {
                for (var e = 0; 256 > e; e++)
                    H[e] = 19595 * e,
                    H[e + 256 >> 0] = 38470 * e,
                    H[e + 512 >> 0] = 7471 * e + 32768,
                    H[e + 768 >> 0] = -11059 * e,
                    H[e + 1024 >> 0] = -21709 * e,
                    H[e + 1280 >> 0] = 32768 * e + 8421375,
                    H[e + 1536 >> 0] = -27439 * e,
                    H[e + 1792 >> 0] = -5329 * e
            }
            function a(e) {
                for (var t = e[0], n = e[1] - 1; n >= 0; )
                    t & 1 << n && (C |= 1 << q),
                    n--,
                    q--,
                    0 > q && (255 == C ? (s(255),
                    s(0)) : s(C),
                    q = 7,
                    C = 0)
            }
            function s(e) {
                I.push(z[e])
            }
            function u(e) {
                s(e >> 8 & 255),
                s(255 & e)
            }
            function c(e, t) {
                var n, r, i, o, a, s, u, c, l, f = 0, d = 8, h = 64;
                for (l = 0; d > l; ++l) {
                    n = e[f],
                    r = e[f + 1],
                    i = e[f + 2],
                    o = e[f + 3],
                    a = e[f + 4],
                    s = e[f + 5],
                    u = e[f + 6],
                    c = e[f + 7];
                    var p = n + c
                      , g = n - c
                      , m = r + u
                      , v = r - u
                      , b = i + s
                      , _ = i - s
                      , y = o + a
                      , w = o - a
                      , x = p + y
                      , R = p - y
                      , E = m + b
                      , k = m - b;
                    e[f] = x + E,
                    e[f + 4] = x - E;
                    var S = .707106781 * (k + R);
                    e[f + 2] = R + S,
                    e[f + 6] = R - S,
                    x = w + _,
                    E = _ + v,
                    k = v + g;
                    var T = .382683433 * (x - k)
                      , F = .5411961 * x + T
                      , A = 1.306562965 * k + T
                      , U = .707106781 * E
                      , O = g + U
                      , I = g - U;
                    e[f + 5] = I + F,
                    e[f + 3] = I - F,
                    e[f + 1] = O + A,
                    e[f + 7] = O - A,
                    f += 8
                }
                for (f = 0,
                l = 0; d > l; ++l) {
                    n = e[f],
                    r = e[f + 8],
                    i = e[f + 16],
                    o = e[f + 24],
                    a = e[f + 32],
                    s = e[f + 40],
                    u = e[f + 48],
                    c = e[f + 56];
                    var C = n + c
                      , q = n - c
                      , B = r + u
                      , L = r - u
                      , P = i + s
                      , z = i - s
                      , H = o + a
                      , M = o - a
                      , j = C + H
                      , N = C - H
                      , $ = B + P
                      , Q = B - P;
                    e[f] = j + $,
                    e[f + 32] = j - $;
                    var V = .707106781 * (Q + N);
                    e[f + 16] = N + V,
                    e[f + 48] = N - V,
                    j = M + z,
                    $ = z + L,
                    Q = L + q;
                    var G = .382683433 * (j - Q)
                      , W = .5411961 * j + G
                      , J = 1.306562965 * Q + G
                      , X = .707106781 * $
                      , Z = q + X
                      , K = q - X;
                    e[f + 40] = K + W,
                    e[f + 24] = K - W,
                    e[f + 8] = Z + J,
                    e[f + 56] = Z - J,
                    f++
                }
                var Y;
                for (l = 0; h > l; ++l)
                    Y = e[l] * t[l],
                    D[l] = Y > 0 ? Y + .5 | 0 : Y - .5 | 0;
                return D
            }
            function l() {
                u(65504),
                u(16),
                s(74),
                s(70),
                s(73),
                s(70),
                s(0),
                s(1),
                s(1),
                s(0),
                u(1),
                u(1),
                s(0),
                s(0)
            }
            function f(e, t) {
                u(65472),
                u(17),
                s(8),
                u(t),
                u(e),
                s(3),
                s(1),
                s(17),
                s(0),
                s(2),
                s(17),
                s(1),
                s(3),
                s(17),
                s(1)
            }
            function d() {
                u(65499),
                u(132),
                s(0);
                for (var e = 0; 64 > e; e++)
                    s(k[e]);
                s(1);
                for (var t = 0; 64 > t; t++)
                    s(S[t])
            }
            function h() {
                u(65476),
                u(418),
                s(0);
                for (var e = 0; 16 > e; e++)
                    s(j[e + 1]);
                for (var t = 0; 11 >= t; t++)
                    s(N[t]);
                s(16);
                for (var n = 0; 16 > n; n++)
                    s($[n + 1]);
                for (var r = 0; 161 >= r; r++)
                    s(Q[r]);
                s(1);
                for (var i = 0; 16 > i; i++)
                    s(V[i + 1]);
                for (var o = 0; 11 >= o; o++)
                    s(G[o]);
                s(17);
                for (var a = 0; 16 > a; a++)
                    s(W[a + 1]);
                for (var c = 0; 161 >= c; c++)
                    s(J[c])
            }
            function p() {
                u(65498),
                u(12),
                s(3),
                s(1),
                s(0),
                s(2),
                s(17),
                s(3),
                s(17),
                s(0),
                s(63),
                s(0)
            }
            function g(e, t, n, r, i) {
                for (var o, s = i[0], u = i[240], l = 16, f = 63, d = 64, h = c(e, t), p = 0; d > p; ++p)
                    O[M[p]] = h[p];
                var g = O[0] - n;
                n = O[0],
                0 == g ? a(r[0]) : (o = 32767 + g,
                a(r[U[o]]),
                a(A[o]));
                for (var m = 63; m > 0 && 0 == O[m]; m--)
                    ;
                if (0 == m)
                    return a(s),
                    n;
                for (var v, b = 1; m >= b; ) {
                    for (var _ = b; 0 == O[b] && m >= b; ++b)
                        ;
                    var y = b - _;
                    if (y >= l) {
                        v = y >> 4;
                        for (var w = 1; v >= w; ++w)
                            a(u);
                        y = 15 & y
                    }
                    o = 32767 + O[b],
                    a(i[(y << 4) + U[o]]),
                    a(A[o]),
                    b++
                }
                return m != f && a(s),
                n
            }
            function m() {
                for (var e = String.fromCharCode, t = 0; 256 > t; t++)
                    z[t] = e(t)
            }
            function v(e) {
                if (0 >= e && (e = 1),
                e > 100 && (e = 100),
                R != e) {
                    var n = 0;
                    n = Math.floor(50 > e ? 5e3 / e : 200 - 2 * e),
                    t(n),
                    R = e
                }
            }
            function b() {
                e || (e = 50),
                m(),
                r(),
                i(),
                o(),
                v(e)
            }
            var _, y, w, x, R, E = (Math.round,
            Math.floor), k = new Array(64), S = new Array(64), T = new Array(64), F = new Array(64), A = new Array(65535), U = new Array(65535), D = new Array(64), O = new Array(64), I = [], C = 0, q = 7, B = new Array(64), L = new Array(64), P = new Array(64), z = new Array(256), H = new Array(2048), M = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], j = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], N = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], $ = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], Q = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], V = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], G = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], W = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], J = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
            this.encode = function(e, t) {
                t && v(t),
                I = new Array,
                C = 0,
                q = 7,
                u(65496),
                l(),
                d(),
                f(e.width, e.height),
                h(),
                p();
                var n = 0
                  , r = 0
                  , i = 0;
                C = 0,
                q = 7,
                this.encode.displayName = "_encode_";
                for (var o, s, c, m, b, R, E, k, S, A = e.data, U = e.width, D = e.height, O = 4 * U, z = 0; D > z; ) {
                    for (o = 0; O > o; ) {
                        for (b = O * z + o,
                        R = b,
                        E = -1,
                        k = 0,
                        S = 0; 64 > S; S++)
                            k = S >> 3,
                            E = 4 * (7 & S),
                            R = b + k * O + E,
                            z + k >= D && (R -= O * (z + 1 + k - D)),
                            o + E >= O && (R -= o + E - O + 4),
                            s = A[R++],
                            c = A[R++],
                            m = A[R++],
                            B[S] = (H[s] + H[c + 256 >> 0] + H[m + 512 >> 0] >> 16) - 128,
                            L[S] = (H[s + 768 >> 0] + H[c + 1024 >> 0] + H[m + 1280 >> 0] >> 16) - 128,
                            P[S] = (H[s + 1280 >> 0] + H[c + 1536 >> 0] + H[m + 1792 >> 0] >> 16) - 128;
                        n = g(B, T, n, _, w),
                        r = g(L, F, r, y, x),
                        i = g(P, F, i, y, x),
                        o += 32
                    }
                    z += 8
                }
                if (q >= 0) {
                    var M = [];
                    M[1] = q + 1,
                    M[0] = (1 << q + 1) - 1,
                    a(M)
                }
                u(65497);
                var j = "data:image/jpeg;base64," + btoa(I.join(""));
                return I = [],
                j
            }
            ,
            b()
        }
        return e.encode = function(t, n) {
            var r = new e(n);
            return r.encode(t)
        }
        ,
        e
    }
    ),
    t("runtime/html5/androidpatch", ["runtime/html5/util", "runtime/html5/jpegencoder", "base"], function(e, t, n) {
        var r, i = e.canvasToDataUrl;
        e.canvasToDataUrl = function(e, o, a) {
            var s, u, c, l, f;
            return n.os.android ? ("image/jpeg" === o && "undefined" == typeof r && (l = i.apply(null , arguments),
            f = l.split(","),
            l = ~f[0].indexOf("base64") ? atob(f[1]) : decodeURIComponent(f[1]),
            l = l.substring(0, 2),
            r = 255 === l.charCodeAt(0) && 216 === l.charCodeAt(1)),
            "image/jpeg" !== o || r ? i.apply(null , arguments) : (u = e.width,
            c = e.height,
            s = e.getContext("2d"),
            t.encode(s.getImageData(0, 0, u, c), a))) : i.apply(null , arguments)
        }
    }
    ),
    t("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"], function(e, t, n) {
        var r = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        return t.register("Image", {
            modified: !1,
            init: function() {
                var e = this
                  , t = new Image;
                t.onload = function() {
                    e._info = {
                        type: e.type,
                        width: this.width,
                        height: this.height
                    },
                    e._metas || "image/jpeg" !== e.type ? e.owner.trigger("load") : n.parseMeta(e._blob, function(t, n) {
                        e._metas = n,
                        e.owner.trigger("load")
                    }
                    )
                }
                ,
                t.onerror = function() {
                    e.owner.trigger("error")
                }
                ,
                e._img = t
            },
            loadFromBlob: function(e) {
                var t = this
                  , r = t._img;
                t._blob = e,
                t.type = e.type,
                r.src = n.createObjectURL(e.getSource()),
                t.owner.once("load", function() {
                    n.revokeObjectURL(r.src)
                }
                )
            },
            resize: function(e, t) {
                var n = this._canvas || (this._canvas = document.createElement("canvas"));
                this._resize(this._img, n, e, t),
                this._blob = null ,
                this.modified = !0,
                this.owner.trigger("complete", "resize")
            },
            crop: function(e, t, n, r, i) {
                var o = this._canvas || (this._canvas = document.createElement("canvas"))
                  , a = this.options
                  , s = this._img
                  , u = s.naturalWidth
                  , c = s.naturalHeight
                  , l = this.getOrientation();
                i = i || 1,
                o.width = n,
                o.height = r,
                a.preserveHeaders || this._rotate2Orientaion(o, l),
                this._renderImageToCanvas(o, s, -e, -t, u * i, c * i),
                this._blob = null ,
                this.modified = !0,
                this.owner.trigger("complete", "crop")
            },
            getAsBlob: function(e) {
                var t, r = this._blob, i = this.options;
                if (e = e || this.type,
                this.modified || this.type !== e) {
                    if (t = this._canvas,
                    "image/jpeg" === e) {
                        if (r = n.canvasToDataUrl(t, e, i.quality),
                        i.preserveHeaders && this._metas && this._metas.imageHead)
                            return r = n.dataURL2ArrayBuffer(r),
                            r = n.updateImageHead(r, this._metas.imageHead),
                            r = n.arrayBufferToBlob(r, e)
                    } else
                        r = n.canvasToDataUrl(t, e);
                    r = n.dataURL2Blob(r)
                }
                return r
            },
            getAsDataUrl: function(e) {
                var t = this.options;
                return e = e || this.type,
                "image/jpeg" === e ? n.canvasToDataUrl(this._canvas, e, t.quality) : this._canvas.toDataURL(e)
            },
            getOrientation: function() {
                return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
            },
            info: function(e) {
                return e ? (this._info = e,
                this) : this._info
            },
            meta: function(e) {
                return e ? (this._meta = e,
                this) : this._meta
            },
            destroy: function() {
                var e = this._canvas;
                this._img.onload = null ,
                e && (e.getContext("2d").clearRect(0, 0, e.width, e.height),
                e.width = e.height = 0,
                this._canvas = null ),
                this._img.src = r,
                this._img = this._blob = null 
            },
            _resize: function(e, t, n, r) {
                var i, o, a, s, u, c = this.options, l = e.width, f = e.height, d = this.getOrientation();
                ~[5, 6, 7, 8].indexOf(d) && (n ^= r,
                r ^= n,
                n ^= r),
                i = Math[c.crop ? "max" : "min"](n / l, r / f),
                c.allowMagnify || (i = Math.min(1, i)),
                o = l * i,
                a = f * i,
                c.crop ? (t.width = n,
                t.height = r) : (t.width = o,
                t.height = a),
                s = (t.width - o) / 2,
                u = (t.height - a) / 2,
                c.preserveHeaders || this._rotate2Orientaion(t, d),
                this._renderImageToCanvas(t, e, s, u, o, a)
            },
            _rotate2Orientaion: function(e, t) {
                var n = e.width
                  , r = e.height
                  , i = e.getContext("2d");
                switch (t) {
                case 5:
                case 6:
                case 7:
                case 8:
                    e.width = r,
                    e.height = n
                }
                switch (t) {
                case 2:
                    i.translate(n, 0),
                    i.scale(-1, 1);
                    break;
                case 3:
                    i.translate(n, r),
                    i.rotate(Math.PI);
                    break;
                case 4:
                    i.translate(0, r),
                    i.scale(1, -1);
                    break;
                case 5:
                    i.rotate(.5 * Math.PI),
                    i.scale(1, -1);
                    break;
                case 6:
                    i.rotate(.5 * Math.PI),
                    i.translate(0, -r);
                    break;
                case 7:
                    i.rotate(.5 * Math.PI),
                    i.translate(n, -r),
                    i.scale(-1, 1);
                    break;
                case 8:
                    i.rotate(-.5 * Math.PI),
                    i.translate(-n, 0)
                }
            },
            _renderImageToCanvas: function() {
                function t(e, t, n) {
                    var r, i, o, a = document.createElement("canvas"), s = a.getContext("2d"), u = 0, c = n, l = n;
                    for (a.width = 1,
                    a.height = n,
                    s.drawImage(e, 0, 0),
                    r = s.getImageData(0, 0, 1, n).data; l > u; )
                        i = r[4 * (l - 1) + 3],
                        0 === i ? c = l : u = l,
                        l = c + u >> 1;
                    return o = l / n,
                    0 === o ? 1 : o
                }
                function n(e) {
                    var t, n, r = e.naturalWidth, i = e.naturalHeight;
                    return r * i > 1048576 ? (t = document.createElement("canvas"),
                    t.width = t.height = 1,
                    n = t.getContext("2d"),
                    n.drawImage(e, -r + 1, 0),
                    0 === n.getImageData(0, 0, 1, 1).data[3]) : !1
                }
                return e.os.ios ? e.os.ios >= 7 ? function(e, n, r, i, o, a) {
                    var s = n.naturalWidth
                      , u = n.naturalHeight
                      , c = t(n, s, u);
                    return e.getContext("2d").drawImage(n, 0, 0, s * c, u * c, r, i, o, a)
                }
                 : function(e, r, i, o, a, s) {
                    var u, c, l, f, d, h, p, g = r.naturalWidth, m = r.naturalHeight, v = e.getContext("2d"), b = n(r), _ = "image/jpeg" === this.type, y = 1024, w = 0, x = 0;
                    for (b && (g /= 2,
                    m /= 2),
                    v.save(),
                    u = document.createElement("canvas"),
                    u.width = u.height = y,
                    c = u.getContext("2d"),
                    l = _ ? t(r, g, m) : 1,
                    f = Math.ceil(y * a / g),
                    d = Math.ceil(y * s / m / l); m > w; ) {
                        for (h = 0,
                        p = 0; g > h; )
                            c.clearRect(0, 0, y, y),
                            c.drawImage(r, -h, -w),
                            v.drawImage(u, 0, 0, y, y, i + p, o + x, f, d),
                            h += y,
                            p += f;
                        w += y,
                        x += d
                    }
                    v.restore(),
                    u = c = null 
                }
                 : function(t) {
                    var n = e.slice(arguments, 1)
                      , r = t.getContext("2d");
                    r.drawImage.apply(r, n)
                }
            }
            ()
        })
    }
    ),
    t("runtime/html5/transport", ["base", "runtime/html5/runtime"], function(e, t) {
        var n = e.noop
          , r = e.$;
        return t.register("Transport", {
            init: function() {
                this._status = 0,
                this._response = null 
            },
            send: function() {
                var t, n, i, o = this.owner, a = this.options, s = this._initAjax(), u = o._blob, c = a.server;
                a.sendAsBinary ? (c += (/\?/.test(c) ? "&" : "?") + r.param(o._formData),
                n = u.getSource()) : (t = new FormData,
                r.each(o._formData, function(e, n) {
                    t.append(e, n)
                }
                ),
                t.append(a.fileVal, u.getSource(), a.filename || o._formData.name || "")),
                a.withCredentials && "withCredentials" in s ? (s.open(a.method, c, !0),
                s.withCredentials = !0) : s.open(a.method, c),
                this._setRequestHeader(s, a.headers),
                n ? (s.overrideMimeType && s.overrideMimeType("application/octet-stream"),
                e.os.android ? (i = new FileReader,
                i.onload = function() {
                    s.send(this.result),
                    i = i.onload = null 
                }
                ,
                i.readAsArrayBuffer(n)) : s.send(n)) : s.send(t)
            },
            getResponse: function() {
                return this._response
            },
            getResponseAsJson: function() {
                return this._parseJson(this._response)
            },
            getStatus: function() {
                return this._status
            },
            abort: function() {
                var e = this._xhr;
                e && (e.upload.onprogress = n,
                e.onreadystatechange = n,
                e.abort(),
                this._xhr = e = null )
            },
            destroy: function() {
                this.abort()
            },
            _initAjax: function() {
                var e = this
                  , t = new XMLHttpRequest
                  , r = this.options;
                return !r.withCredentials || "withCredentials" in t || "undefined" == typeof XDomainRequest || (t = new XDomainRequest),
                t.upload.onprogress = function(t) {
                    var n = 0;
                    return t.lengthComputable && (n = t.loaded / t.total),
                    e.trigger("progress", n)
                }
                ,
                t.onreadystatechange = function() {
                    return 4 === t.readyState ? (t.upload.onprogress = n,
                    t.onreadystatechange = n,
                    e._xhr = null ,
                    e._status = t.status,
                    t.status >= 200 && t.status < 300 ? (e._response = t.responseText,
                    e.trigger("load")) : t.status >= 500 && t.status < 600 ? (e._response = t.responseText,
                    e.trigger("error", "server")) : e.trigger("error", e._status ? "http" : "abort")) : void 0
                }
                ,
                e._xhr = t,
                t
            },
            _setRequestHeader: function(e, t) {
                r.each(t, function(t, n) {
                    e.setRequestHeader(t, n)
                }
                )
            },
            _parseJson: function(e) {
                var t;
                try {
                    t = JSON.parse(e)
                } catch (n) {
                    t = {}
                }
                return t
            }
        })
    }
    ),
    t("runtime/html5/md5", ["runtime/html5/runtime"], function(e) {
        var t = function(e, t) {
            return e + t & 4294967295
        }
          , n = function(e, n, r, i, o, a) {
            return n = t(t(n, e), t(i, a)),
            t(n << o | n >>> 32 - o, r)
        }
          , r = function(e, t, r, i, o, a, s) {
            return n(t & r | ~t & i, e, t, o, a, s)
        }
          , i = function(e, t, r, i, o, a, s) {
            return n(t & i | r & ~i, e, t, o, a, s)
        }
          , o = function(e, t, r, i, o, a, s) {
            return n(t ^ r ^ i, e, t, o, a, s)
        }
          , a = function(e, t, r, i, o, a, s) {
            return n(r ^ (t | ~i), e, t, o, a, s)
        }
          , s = function(e, n) {
            var s = e[0]
              , u = e[1]
              , c = e[2]
              , l = e[3];
            s = r(s, u, c, l, n[0], 7, -680876936),
            l = r(l, s, u, c, n[1], 12, -389564586),
            c = r(c, l, s, u, n[2], 17, 606105819),
            u = r(u, c, l, s, n[3], 22, -1044525330),
            s = r(s, u, c, l, n[4], 7, -176418897),
            l = r(l, s, u, c, n[5], 12, 1200080426),
            c = r(c, l, s, u, n[6], 17, -1473231341),
            u = r(u, c, l, s, n[7], 22, -45705983),
            s = r(s, u, c, l, n[8], 7, 1770035416),
            l = r(l, s, u, c, n[9], 12, -1958414417),
            c = r(c, l, s, u, n[10], 17, -42063),
            u = r(u, c, l, s, n[11], 22, -1990404162),
            s = r(s, u, c, l, n[12], 7, 1804603682),
            l = r(l, s, u, c, n[13], 12, -40341101),
            c = r(c, l, s, u, n[14], 17, -1502002290),
            u = r(u, c, l, s, n[15], 22, 1236535329),
            s = i(s, u, c, l, n[1], 5, -165796510),
            l = i(l, s, u, c, n[6], 9, -1069501632),
            c = i(c, l, s, u, n[11], 14, 643717713),
            u = i(u, c, l, s, n[0], 20, -373897302),
            s = i(s, u, c, l, n[5], 5, -701558691),
            l = i(l, s, u, c, n[10], 9, 38016083),
            c = i(c, l, s, u, n[15], 14, -660478335),
            u = i(u, c, l, s, n[4], 20, -405537848),
            s = i(s, u, c, l, n[9], 5, 568446438),
            l = i(l, s, u, c, n[14], 9, -1019803690),
            c = i(c, l, s, u, n[3], 14, -187363961),
            u = i(u, c, l, s, n[8], 20, 1163531501),
            s = i(s, u, c, l, n[13], 5, -1444681467),
            l = i(l, s, u, c, n[2], 9, -51403784),
            c = i(c, l, s, u, n[7], 14, 1735328473),
            u = i(u, c, l, s, n[12], 20, -1926607734),
            s = o(s, u, c, l, n[5], 4, -378558),
            l = o(l, s, u, c, n[8], 11, -2022574463),
            c = o(c, l, s, u, n[11], 16, 1839030562),
            u = o(u, c, l, s, n[14], 23, -35309556),
            s = o(s, u, c, l, n[1], 4, -1530992060),
            l = o(l, s, u, c, n[4], 11, 1272893353),
            c = o(c, l, s, u, n[7], 16, -155497632),
            u = o(u, c, l, s, n[10], 23, -1094730640),
            s = o(s, u, c, l, n[13], 4, 681279174),
            l = o(l, s, u, c, n[0], 11, -358537222),
            c = o(c, l, s, u, n[3], 16, -722521979),
            u = o(u, c, l, s, n[6], 23, 76029189),
            s = o(s, u, c, l, n[9], 4, -640364487),
            l = o(l, s, u, c, n[12], 11, -421815835),
            c = o(c, l, s, u, n[15], 16, 530742520),
            u = o(u, c, l, s, n[2], 23, -995338651),
            s = a(s, u, c, l, n[0], 6, -198630844),
            l = a(l, s, u, c, n[7], 10, 1126891415),
            c = a(c, l, s, u, n[14], 15, -1416354905),
            u = a(u, c, l, s, n[5], 21, -57434055),
            s = a(s, u, c, l, n[12], 6, 1700485571),
            l = a(l, s, u, c, n[3], 10, -1894986606),
            c = a(c, l, s, u, n[10], 15, -1051523),
            u = a(u, c, l, s, n[1], 21, -2054922799),
            s = a(s, u, c, l, n[8], 6, 1873313359),
            l = a(l, s, u, c, n[15], 10, -30611744),
            c = a(c, l, s, u, n[6], 15, -1560198380),
            u = a(u, c, l, s, n[13], 21, 1309151649),
            s = a(s, u, c, l, n[4], 6, -145523070),
            l = a(l, s, u, c, n[11], 10, -1120210379),
            c = a(c, l, s, u, n[2], 15, 718787259),
            u = a(u, c, l, s, n[9], 21, -343485551),
            e[0] = t(s, e[0]),
            e[1] = t(u, e[1]),
            e[2] = t(c, e[2]),
            e[3] = t(l, e[3])
        }
          , u = function(e) {
            var t, n = [];
            for (t = 0; 64 > t; t += 4)
                n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
            return n
        }
          , c = function(e) {
            var t, n = [];
            for (t = 0; 64 > t; t += 4)
                n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
            return n
        }
          , l = function(e) {
            var t, n, r, i, o, a, c = e.length, l = [1732584193, -271733879, -1732584194, 271733878];
            for (t = 64; c >= t; t += 64)
                s(l, u(e.substring(t - 64, t)));
            for (e = e.substring(t - 64),
            n = e.length,
            r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            t = 0; n > t; t += 1)
                r[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
            if (r[t >> 2] |= 128 << (t % 4 << 3),
            t > 55)
                for (s(l, r),
                t = 0; 16 > t; t += 1)
                    r[t] = 0;
            return i = 8 * c,
            i = i.toString(16).match(/(.*?)(.{0,8})$/),
            o = parseInt(i[2], 16),
            a = parseInt(i[1], 16) || 0,
            r[14] = o,
            r[15] = a,
            s(l, r),
            l
        }
          , f = function(e) {
            var t, n, r, i, o, a, u = e.length, l = [1732584193, -271733879, -1732584194, 271733878];
            for (t = 64; u >= t; t += 64)
                s(l, c(e.subarray(t - 64, t)));
            for (e = u > t - 64 ? e.subarray(t - 64) : new Uint8Array(0),
            n = e.length,
            r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            t = 0; n > t; t += 1)
                r[t >> 2] |= e[t] << (t % 4 << 3);
            if (r[t >> 2] |= 128 << (t % 4 << 3),
            t > 55)
                for (s(l, r),
                t = 0; 16 > t; t += 1)
                    r[t] = 0;
            return i = 8 * u,
            i = i.toString(16).match(/(.*?)(.{0,8})$/),
            o = parseInt(i[2], 16),
            a = parseInt(i[1], 16) || 0,
            r[14] = o,
            r[15] = a,
            s(l, r),
            l
        }
          , d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
          , h = function(e) {
            var t, n = "";
            for (t = 0; 4 > t; t += 1)
                n += d[e >> 8 * t + 4 & 15] + d[e >> 8 * t & 15];
            return n
        }
          , p = function(e) {
            var t;
            for (t = 0; t < e.length; t += 1)
                e[t] = h(e[t]);
            return e.join("")
        }
          , g = function(e) {
            return p(l(e))
        }
          , m = function() {
            this.reset()
        }
        ;
        return "5d41402abc4b2a76b9719d911017c592" !== g("hello") && (t = function(e, t) {
            var n = (65535 & e) + (65535 & t)
              , r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }
        ),
        m.prototype.append = function(e) {
            return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))),
            this.appendBinary(e),
            this
        }
        ,
        m.prototype.appendBinary = function(e) {
            this._buff += e,
            this._length += e.length;
            var t, n = this._buff.length;
            for (t = 64; n >= t; t += 64)
                s(this._state, u(this._buff.substring(t - 64, t)));
            return this._buff = this._buff.substr(t - 64),
            this
        }
        ,
        m.prototype.end = function(e) {
            var t, n, r = this._buff, i = r.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; i > t; t += 1)
                o[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
            return this._finish(o, i),
            n = e ? this._state : p(this._state),
            this.reset(),
            n
        }
        ,
        m.prototype._finish = function(e, t) {
            var n, r, i, o = t;
            if (e[o >> 2] |= 128 << (o % 4 << 3),
            o > 55)
                for (s(this._state, e),
                o = 0; 16 > o; o += 1)
                    e[o] = 0;
            n = 8 * this._length,
            n = n.toString(16).match(/(.*?)(.{0,8})$/),
            r = parseInt(n[2], 16),
            i = parseInt(n[1], 16) || 0,
            e[14] = r,
            e[15] = i,
            s(this._state, e)
        }
        ,
        m.prototype.reset = function() {
            return this._buff = "",
            this._length = 0,
            this._state = [1732584193, -271733879, -1732584194, 271733878],
            this
        }
        ,
        m.prototype.destroy = function() {
            delete this._state,
            delete this._buff,
            delete this._length
        }
        ,
        m.hash = function(e, t) {
            /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e)));
            var n = l(e);
            return t ? n : p(n)
        }
        ,
        m.hashBinary = function(e, t) {
            var n = l(e);
            return t ? n : p(n)
        }
        ,
        m.ArrayBuffer = function() {
            this.reset()
        }
        ,
        m.ArrayBuffer.prototype.append = function(e) {
            var t, n = this._concatArrayBuffer(this._buff, e), r = n.length;
            for (this._length += e.byteLength,
            t = 64; r >= t; t += 64)
                s(this._state, c(n.subarray(t - 64, t)));
            return this._buff = r > t - 64 ? n.subarray(t - 64) : new Uint8Array(0),
            this
        }
        ,
        m.ArrayBuffer.prototype.end = function(e) {
            var t, n, r = this._buff, i = r.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; i > t; t += 1)
                o[t >> 2] |= r[t] << (t % 4 << 3);
            return this._finish(o, i),
            n = e ? this._state : p(this._state),
            this.reset(),
            n
        }
        ,
        m.ArrayBuffer.prototype._finish = m.prototype._finish,
        m.ArrayBuffer.prototype.reset = function() {
            return this._buff = new Uint8Array(0),
            this._length = 0,
            this._state = [1732584193, -271733879, -1732584194, 271733878],
            this
        }
        ,
        m.ArrayBuffer.prototype.destroy = m.prototype.destroy,
        m.ArrayBuffer.prototype._concatArrayBuffer = function(e, t) {
            var n = e.length
              , r = new Uint8Array(n + t.byteLength);
            return r.set(e),
            r.set(new Uint8Array(t), n),
            r
        }
        ,
        m.ArrayBuffer.hash = function(e, t) {
            var n = f(new Uint8Array(e));
            return t ? n : p(n)
        }
        ,
        e.register("Md5", {
            init: function() {},
            loadFromBlob: function(e) {
                var t, n, r = e.getSource(), i = 2097152, o = Math.ceil(r.size / i), a = 0, s = this.owner, u = new m.ArrayBuffer, c = this, l = r.mozSlice || r.webkitSlice || r.slice;
                n = new FileReader,
                (t = function() {
                    var f, d;
                    f = a * i,
                    d = Math.min(f + i, r.size),
                    n.onload = function(t) {
                        u.append(t.target.result),
                        s.trigger("progress", {
                            total: e.size,
                            loaded: d
                        })
                    }
                    ,
                    n.onloadend = function() {
                        n.onloadend = n.onload = null ,
                        ++a < o ? setTimeout(t, 1) : setTimeout(function() {
                            s.trigger("load"),
                            c.result = u.end(),
                            t = e = r = u = null ,
                            s.trigger("complete")
                        }
                        , 50)
                    }
                    ,
                    n.readAsArrayBuffer(l.call(r, f, d))
                }
                )()
            },
            getResult: function() {
                return this.result
            }
        })
    }
    ),
    t("runtime/flash/runtime", ["base", "runtime/runtime", "runtime/compbase"], function(t, n, r) {
        function i() {
            var e;
            try {
                e = navigator.plugins["Shockwave Flash"],
                e = e.description
            } catch (t) {
                try {
                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                } catch (n) {
                    e = "0.0"
                }
            }
            return e = e.match(/\d+/g),
            parseFloat(e[0] + "." + e[1], 10)
        }
        function o() {
            function r(e, t) {
                var n, r, i = e.type || e;
                n = i.split("::"),
                r = n[0],
                i = n[1],
                "Ready" === i && r === c.uid ? c.trigger("ready") : o[r] && o[r].trigger(i.toLowerCase(), e, t)
            }
            var i = {}
              , o = {}
              , a = this.destroy
              , c = this
              , l = t.guid("webuploader_");
            n.apply(c, arguments),
            c.type = s,
            c.exec = function(e, n) {
                var r, a = this, s = a.uid, l = t.slice(arguments, 2);
                return o[s] = a,
                u[e] && (i[s] || (i[s] = new u[e](a,c)),
                r = i[s],
                r[n]) ? r[n].apply(r, l) : c.flashExec.apply(a, arguments)
            }
            ,
            e[l] = function() {
                var e = arguments;
                setTimeout(function() {
                    r.apply(null , e)
                }
                , 1)
            }
            ,
            this.jsreciver = l,
            this.destroy = function() {
                return a && a.apply(this, arguments)
            }
            ,
            this.flashExec = function(e, n) {
                var r = c.getFlash()
                  , i = t.slice(arguments, 2);
                return r.exec(this.uid, e, n, i)
            }
        }
        var a = t.$
          , s = "flash"
          , u = {};
        return t.inherits(n, {
            constructor: o,
            init: function() {
                var e, n = this.getContainer(), r = this.options;
                n.css({
                    position: "absolute",
                    top: "-8px",
                    left: "-8px",
                    width: "9px",
                    height: "9px",
                    overflow: "hidden"
                }),
                e = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + r.swf + '" ',
                t.browser.ie && (e += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),
                e += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + r.swf + '" /><param name="flashvars" value="uid=' + this.uid + "&jsreciver=" + this.jsreciver + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',
                n.html(e)
            },
            getFlash: function() {
                return this._flash ? this._flash : (this._flash = a("#" + this.uid).get(0),
                this._flash)
            }
        }),
        o.register = function(e, n) {
            return n = u[e] = t.inherits(r, a.extend({
                flashExec: function() {
                    var e = this.owner
                      , t = this.getRuntime();
                    return t.flashExec.apply(e, arguments)
                }
            }, n))
        }
        ,
        i() >= 11.4 && n.addRuntime(s, o),
        o
    }
    ),
    t("runtime/flash/filepicker", ["base", "runtime/flash/runtime"], function(e, t) {
        var n = e.$;
        return t.register("FilePicker", {
            init: function(e) {
                var t, r, i = n.extend({}, e);
                for (t = i.accept && i.accept.length,
                r = 0; t > r; r++)
                    i.accept[r].title || (i.accept[r].title = "Files");
                delete i.button,
                delete i.id,
                delete i.container,
                this.flashExec("FilePicker", "init", i)
            },
            destroy: function() {
                this.flashExec("FilePicker", "destroy")
            }
        })
    }
    ),
    t("runtime/flash/image", ["runtime/flash/runtime"], function(e) {
        return e.register("Image", {
            loadFromBlob: function(e) {
                var t = this.owner;
                t.info() && this.flashExec("Image", "info", t.info()),
                t.meta() && this.flashExec("Image", "meta", t.meta()),
                this.flashExec("Image", "loadFromBlob", e.uid)
            }
        })
    }
    ),
    t("runtime/flash/transport", ["base", "runtime/flash/runtime", "runtime/client"], function(t, n, r) {
        var i = t.$;
        return n.register("Transport", {
            init: function() {
                this._status = 0,
                this._response = null ,
                this._responseJson = null 
            },
            send: function() {
                var e, t = this.owner, n = this.options, r = this._initAjax(), o = t._blob, a = n.server;
                r.connectRuntime(o.ruid),
                n.sendAsBinary ? (a += (/\?/.test(a) ? "&" : "?") + i.param(t._formData),
                e = o.uid) : (i.each(t._formData, function(e, t) {
                    r.exec("append", e, t)
                }
                ),
                r.exec("appendBlob", n.fileVal, o.uid, n.filename || t._formData.name || "")),
                this._setRequestHeader(r, n.headers),
                r.exec("send", {
                    method: n.method,
                    url: a,
                    forceURLStream: n.forceURLStream,
                    mimeType: "application/octet-stream"
                }, e)
            },
            getStatus: function() {
                return this._status
            },
            getResponse: function() {
                return this._response || ""
            },
            getResponseAsJson: function() {
                return this._responseJson
            },
            abort: function() {
                var e = this._xhr;
                e && (e.exec("abort"),
                e.destroy(),
                this._xhr = e = null )
            },
            destroy: function() {
                this.abort()
            },
            _initAjax: function() {
                var t = this
                  , n = new r("XMLHttpRequest");
                return n.on("uploadprogress progress", function(e) {
                    var n = e.loaded / e.total;
                    return n = Math.min(1, Math.max(0, n)),
                    t.trigger("progress", n)
                }
                ),
                n.on("load", function() {
                    var r, i = n.exec("getStatus"), o = !1, a = "";
                    return n.off(),
                    t._xhr = null ,
                    i >= 200 && 300 > i ? o = !0 : i >= 500 && 600 > i ? (o = !0,
                    a = "server") : a = "http",
                    o && (t._response = n.exec("getResponse"),
                    t._response = decodeURIComponent(t._response),
                    r = e.JSON && e.JSON.parse || function(e) {
                        try {
                            return new Function("return " + e).call()
                        } catch (t) {
                            return {}
                        }
                    }
                    ,
                    t._responseJson = t._response ? r(t._response) : {}),
                    n.destroy(),
                    n = null ,
                    a ? t.trigger("error", a) : t.trigger("load")
                }
                ),
                n.on("error", function() {
                    n.off(),
                    t._xhr = null ,
                    t.trigger("error", "http")
                }
                ),
                t._xhr = n,
                n
            },
            _setRequestHeader: function(e, t) {
                i.each(t, function(t, n) {
                    e.exec("setRequestHeader", t, n)
                }
                )
            }
        })
    }
    ),
    t("runtime/flash/blob", ["runtime/flash/runtime", "lib/blob"], function(e, t) {
        return e.register("Blob", {
            slice: function(e, n) {
                var r = this.flashExec("Blob", "slice", e, n);
                return new t(r.uid,r)
            }
        })
    }
    ),
    t("runtime/flash/md5", ["runtime/flash/runtime"], function(e) {
        return e.register("Md5", {
            init: function() {},
            loadFromBlob: function(e) {
                return this.flashExec("Md5", "loadFromBlob", e.uid)
            }
        })
    }
    ),
    t("preset/all", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "widgets/md5", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/androidpatch", "runtime/html5/image", "runtime/html5/transport", "runtime/html5/md5", "runtime/flash/filepicker", "runtime/flash/image", "runtime/flash/transport", "runtime/flash/blob", "runtime/flash/md5"], function(e) {
        return e
    }
    ),
    t("widgets/log", ["base", "uploader", "widgets/widget"], function(e, t) {
        function n(e) {
            var t = i.extend({}, r, e)
              , n = o.replace(/^(.*)\?/, "$1" + i.param(t))
              , a = new Image;
            a.src = n
        }
        var r, i = e.$, o = " http://static.tieba.baidu.com/tb/pms/img/st.gif??", a = (location.hostname || location.host || "protected").toLowerCase(), s = a && /baidu/i.exec(a);
        if (s)
            return r = {
                dv: 3,
                master: "webuploader",
                online: /test/.exec(a) ? 0 : 1,
                module: "",
                product: a,
                type: 0
            },
            t.register({
                name: "log",
                init: function() {
                    var e = this.owner
                      , t = 0
                      , r = 0;
                    e.on("error", function(e) {
                        n({
                            type: 2,
                            c_error_code: e
                        })
                    }
                    ).on("uploadError", function(e, t) {
                        n({
                            type: 2,
                            c_error_code: "UPLOAD_ERROR",
                            c_reason: "" + t
                        })
                    }
                    ).on("uploadComplete", function(e) {
                        t++,
                        r += e.size
                    }
                    ).on("uploadFinished", function() {
                        n({
                            c_count: t,
                            c_size: r
                        }),
                        t = r = 0
                    }
                    ),
                    n({
                        c_usage: 1
                    })
                }
            })
    }
    ),
    t("webuploader", ["preset/all", "widgets/log"], function(e) {
        return e
    }
    ),
    n("webuploader")
}
);
;!function(e) {
    var o, t, r, c = 0, i = {
        control: e('<div class="colorPicker-picker">&nbsp;</div>'),
        palette: e('<div id="colorPicker_palette" class="colorPicker-palette"><em></em></div>'),
        swatch: e('<div class="colorPicker-swatch">&nbsp;</div>'),
        hexField: e('<input type="text" id="colorPicker_hex" />')
    }, n = "transparent", l = document.createElement("input");
    l.setAttribute("type", "color");
    var a = "text" !== l.type;
    if (a) {
        var s = "foo";
        l.value = s,
        a = !1
    }
    e.fn.colorPicker = function(o) {
        return this.each(function() {
            var t, r, l = e(this), s = e.extend({}, e.fn.colorPicker.defaults, o), d = e.fn.colorPicker.toHex(l.val().length > 0 ? l.val() : s.pickerDefault), h = i.control.clone(), u = i.palette.clone().attr("id", "colorPicker_palette-" + c), f = i.hexField.clone(), F = u[0].id;
            if (a || (e.each(s.colors, function(o) {
                t = i.swatch.clone(),
                s.colors[o] === n ? (t.addClass(n).text("X"),
                e.fn.colorPicker.bindPalette(f, t, n)) : (t.css("background-color", "#" + this),
                e.fn.colorPicker.bindPalette(f, t)),
                t.appendTo(u)
            }
            ),
            f.attr({
                id: "colorPicker_hex-" + c,
                value: d
            }),
            f.bind("keydown", function(o) {
                if (13 === o.keyCode) {
                    var t = e.fn.colorPicker.toHex(e(this).val());
                    e.fn.colorPicker.changeColor(t ? t : l.val())
                }
                27 === o.keyCode && e.fn.colorPicker.hidePalette()
            }
            ),
            f.bind("keyup", function(o) {
                var t = e.fn.colorPicker.toHex(e(o.target).val());
                e.fn.colorPicker.previewColor(t ? t : l.val())
            }
            ),
            e('<div class="colorPicker_hexWrap" />').appendTo(u),
            u.find(".colorPicker_hexWrap").append(f),
            s.showHexField === !1 && f.hide(),
            e("body").append(u),
            u.hide()),
            h.css("background-color", d),
            h.bind("click", function() {
                l.is(":not(:disabled)") && (a ? l.click() : e.fn.colorPicker.togglePalette(e("#" + F), e(this)))
            }
            ),
            o && o.onColorChange ? h.data("onColorChange", o.onColorChange) : h.data("onColorChange", function() {}
            ),
            (r = l.data("text")) && h.html(r),
            l.after(h),
            l.bind("change", function() {
                l.next(".colorPicker-picker").css("background-color", e.fn.colorPicker.toHex(e(this).val()))
            }
            ),
            l.val(d),
            "input" === l[0].tagName.toLowerCase())
                if (a)
                    l.attr("type", "color").css({
                        width: 1,
                        opacity: 0
                    });
                else
                    try {
                        l.attr("type", "hidden")
                    } catch (k) {
                        l.css("visibility", "hidden").css("position", "absolute")
                    }
            else
                alert("element mast be input element");
            c++
        }
        )
    }
    ,
    e.extend(!0, e.fn.colorPicker, {
        toHex: function(e) {
            if (e.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i))
                return "#" === e.charAt(0) ? e : "#" + e;
            if (!e.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/))
                return !1;
            var o = [parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]
              , t = function(e) {
                if (e.length < 2)
                    for (var o = 0, t = 2 - e.length; t > o; o++)
                        e = "0" + e;
                return e
            }
            ;
            if (3 === o.length) {
                var r = t(o[0].toString(16))
                  , c = t(o[1].toString(16))
                  , i = t(o[2].toString(16));
                return "#" + r + c + i
            }
        },
        checkMouse: function(r) {
            var c = t
              , i = e(r.target).parents("#" + c.attr("id")).length;
            r.target === e(c)[0] || r.target === o[0] || i > 0 || e.fn.colorPicker.hidePalette()
        },
        hidePalette: function() {
            e(document).unbind("mousedown", e.fn.colorPicker.checkMouse),
            e(".colorPicker-palette").hide()
        },
        showPalette: function(t) {
            {
                var r = o.prev("input").val()
                  , c = {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                }
                  , i = o.offset()
                  , n = (e(window).height(),
                i.top + c.height + 13);
                t.outerHeight()
            }
            t.css({
                top: n,
                left: i.left - t.outerWidth() / 2 + c.width / 2
            }),
            e("#color_value").val(r),
            t.show(),
            e(document).bind("mousedown", e.fn.colorPicker.checkMouse)
        },
        togglePalette: function(r, c) {
            c && (o = c),
            t = r,
            t.is(":visible") ? e.fn.colorPicker.hidePalette() : e.fn.colorPicker.showPalette(r)
        },
        changeColor: function(t) {
            o.css("background-color", t),
            o.prev("input").val(t).change(),
            e.fn.colorPicker.hidePalette(),
            o.data("onColorChange").call(o, e(o).prev("input").attr("id"), t)
        },
        previewColor: function(e) {
            o.css("background-color", e)
        },
        bindPalette: function(t, c, i) {
            i = i ? i : e.fn.colorPicker.toHex(c.css("background-color")),
            c.bind({
                click: function() {
                    r = i,
                    e.fn.colorPicker.changeColor(i)
                },
                mouseover: function() {
                    r = t.val(),
                    e(this).css("border-color", "#598FEF"),
                    t.val(i),
                    e.fn.colorPicker.previewColor(i)
                },
                mouseout: function() {
                    e(this).css("border-color", "#000"),
                    t.val(o.css("background-color")),
                    t.val(r),
                    e.fn.colorPicker.previewColor(r)
                }
            })
        }
    }),
    e.fn.colorPicker.defaults = {
        pickerDefault: "FFFFFF",
        colors: ["000000", "993300", "333300", "000080", "333399", "333333", "800000", "FF6600", "808000", "008000", "008080", "0000FF", "666699", "808080", "FF0000", "FF9900", "99CC00", "339966", "33CCCC", "3366FF", "800080", "999999", "FF00FF", "FFCC00", "FFFF00", "00FF00", "00FFFF", "00CCFF", "993366", "C0C0C0", "FF99CC", "FFCC99", "FFFF99", "CCFFFF", "99CCFF", "FFFFFF"],
        addColors: [],
        showHexField: !1
    }
}
(jQuery);
;!function() {
    function e() {
        this._createStyleSheet()
    }
    $.extend(e.prototype, {
        _createStyleSheet: function() {
            var e = document.createElement("style");
            $("head").append(e),
            this._styleSheet = e.sheet || e.styleSheet
        },
        addRule: function(e, t, l) {
            var s, u = this._styleSheet;
            s = l === !0 ? 0 : (u.cssRules || u.rules).length,
            u.addRule ? u.addRule(e, t, s) : u.insertRule && u.insertRule(e + "{" + t + "}", s)
        },
        removeRule: function(e) {
            var t = this._styleSheet
              , l = t.cssRules || t.rules;
            if (isNaN(parseInt(e)))
                for (var s = 0; s < l.length; )
                    l[s].selectorText.toLowerCase() == e ? t.deleteRule ? t.deleteRule(s) : t.removeRule(s) : s++;
            else
                e < l.length && e >= 0 && (t.deleteRule ? t.deleteRule(e) : t.removeRule(e))
        },
        removeAll: function() {
            for (var e = this._styleSheet, t = e.cssRules || e.rules, l = t.length, s = 0; l > s; s++)
                this.removeRule(s)
        }
    }),
    IOT.StyleSheet = e
}
();
;// jQuery List DragSort v0.5.2
// License: http://dragsort.codeplex.com/license
(function(e) {
    e.fn.dragsort = function(t) {
        if (t == "destroy") {
            e(this.selector).trigger("dragsort-uninit");
            return
        }
        var n = e.extend({}, e.fn.dragsort.defaults, t);
        var r = [];
        var i = null 
          , s = null ;
        this.each(function(t, o) {
            if (e(o).is("table") && e(o).children().size() == 1 && e(o).children().is("tbody"))
                o = e(o).children().get(0);
            var u = {
                draggedItem: null ,
                placeHolderItem: null ,
                pos: null ,
                offset: null ,
                offsetLimit: null ,
                scroll: null ,
                container: o,
                init: function() {
                    n.tagName = e(this.container).children().size() == 0 ? "li" : e(this.container).children().get(0).tagName.toLowerCase();
                    if (n.itemSelector == "")
                        n.itemSelector = n.tagName;
                    if (n.dragSelector == "")
                        n.dragSelector = n.tagName;
                    if (n.placeHolderTemplate == "")
                        n.placeHolderTemplate = "<" + n.tagName + ">&nbsp;</" + n.tagName + ">";
                    e(this.container).attr("data-listidx", t).mousedown(this.grabItem).bind("dragsort-uninit", this.uninit);
                    this.styleDragHandlers(true)
                },
                uninit: function() {
                    var t = r[e(this).attr("data-listidx")];
                    e(t.container).unbind("mousedown", t.grabItem).unbind("dragsort-uninit");
                    t.styleDragHandlers(false)
                },
                getItems: function() {
                    return e(this.container).children(n.itemSelector)
                },
                styleDragHandlers: function(t) {
                    this.getItems().map(function() {
                        return e(this).is(n.dragSelector) ? this : e(this).find(n.dragSelector).get()
                    }
                    ).css("cursor", t ? "pointer" : "")
                },
                grabItem: function(t) {
                    var i = r[e(this).attr("data-listidx")];
                    var s = e(t.target).closest("[data-listidx] > " + n.tagName).get(0);
                    var o = i.getItems().filter(function() {
                        return this == s
                    }
                    ).size() > 0;
                    if (t.which != 1 || e(t.target).is(n.dragSelectorExclude) || e(t.target).closest(n.dragSelectorExclude).size() > 0 || !o)
                        return;
                    t.preventDefault();
                    var u = t.target;
                    while (!e(u).is(n.dragSelector)) {
                        if (u == this)
                            return;
                        u = u.parentNode
                    }
                    e(u).attr("data-cursor", e(u).css("cursor"));
                    e(u).css("cursor", "move");
                    var a = this;
                    var f = function() {
                        i.dragStart.call(a, t);
                        e(i.container).unbind("mousemove", f)
                    }
                    ;
                    e(i.container).mousemove(f).mouseup(function() {
                        e(i.container).unbind("mousemove", f);
                        e(u).css("cursor", e(u).attr("data-cursor"))
                    }
                    )
                },
                dragStart: function(t) {
                    if (i != null  && i.draggedItem != null )
                        i.dropItem();
                    i = r[e(this).attr("data-listidx")];
                    i.draggedItem = e(t.target).closest("[data-listidx] > " + n.tagName);
                    i.draggedItem.attr("data-origpos", e(this).attr("data-listidx") + "-" + e(i.container).children().index(i.draggedItem));
                    var s = parseInt(i.draggedItem.css("marginTop"));
                    var o = parseInt(i.draggedItem.css("marginLeft"));
                    i.offset = i.draggedItem.offset();
                    i.offset.top = t.pageY - i.offset.top + (isNaN(s) ? 0 : s) - 1;
                    i.offset.left = t.pageX - i.offset.left + (isNaN(o) ? 0 : o) - 1;
                    if (!n.dragBetween) {
                        var u = e(i.container).outerHeight() == 0 ? Math.max(1, Math.round(.5 + i.getItems().size() * i.draggedItem.outerWidth() / e(i.container).outerWidth())) * i.draggedItem.outerHeight() : e(i.container).outerHeight();
                        i.offsetLimit = e(i.container).offset();
                        i.offsetLimit.right = i.offsetLimit.left + e(i.container).outerWidth() - i.draggedItem.outerWidth();
                        i.offsetLimit.bottom = i.offsetLimit.top + u - i.draggedItem.outerHeight()
                    }
                    var a = i.draggedItem.height();
                    var f = i.draggedItem.width();
                    if (n.tagName == "tr") {
                        i.draggedItem.children().each(function() {
                            e(this).width(e(this).width())
                        }
                        );
                        i.placeHolderItem = i.draggedItem.clone().attr("data-placeholder", true);
                        i.draggedItem.after(i.placeHolderItem);
                        i.placeHolderItem.children().each(function() {
                            e(this).css({
                                borderWidth: 0,
                                width: e(this).width() + 1,
                                height: e(this).height() + 1
                            }).html("&nbsp;")
                        }
                        )
                    } else {
                        i.draggedItem.after(n.placeHolderTemplate);
                        i.placeHolderItem = i.draggedItem.next().css({
                            height: a,
                            width: f
                        }).attr("data-placeholder", true)
                    }
                    if (n.tagName == "td") {
                        var l = i.draggedItem.closest("table").get(0);
                        e("<table id='" + l.id + "' style='border-width: 0px;' class='dragSortItem " + l.className + "'><tr></tr></table>").appendTo("body").children().append(i.draggedItem)
                    }
                    var c = i.draggedItem.attr("style");
                    i.draggedItem.attr("data-origstyle", c ? c : "");
                    i.draggedItem.css({
                        position: "absolute",
                        opacity: .8,
                        "z-index": 999,
                        height: a,
                        width: f
                    });
                    i.scroll = {
                        moveX: 0,
                        moveY: 0,
                        maxX: e(document).width() - e(window).width(),
                        maxY: e(document).height() - e(window).height()
                    };
                    i.scroll.scrollY = window.setInterval(function() {
                        if (n.scrollContainer != window) {
                            e(n.scrollContainer).scrollTop(e(n.scrollContainer).scrollTop() + i.scroll.moveY);
                            return
                        }
                        var t = e(n.scrollContainer).scrollTop();
                        if (i.scroll.moveY > 0 && t < i.scroll.maxY || i.scroll.moveY < 0 && t > 0) {
                            e(n.scrollContainer).scrollTop(t + i.scroll.moveY);
                            i.draggedItem.css("top", i.draggedItem.offset().top + i.scroll.moveY + 1)
                        }
                    }
                    , 10);
                    i.scroll.scrollX = window.setInterval(function() {
                        if (n.scrollContainer != window) {
                            e(n.scrollContainer).scrollLeft(e(n.scrollContainer).scrollLeft() + i.scroll.moveX);
                            return
                        }
                        var t = e(n.scrollContainer).scrollLeft();
                        if (i.scroll.moveX > 0 && t < i.scroll.maxX || i.scroll.moveX < 0 && t > 0) {
                            e(n.scrollContainer).scrollLeft(t + i.scroll.moveX);
                            i.draggedItem.css("left", i.draggedItem.offset().left + i.scroll.moveX + 1)
                        }
                    }
                    , 10);
                    e(r).each(function(e, t) {
                        t.createDropTargets();
                        t.buildPositionTable()
                    }
                    );
                    i.setPos(t.pageX, t.pageY);
                    e(document).bind("mousemove", i.swapItems);
                    e(document).bind("mouseup", i.dropItem);
                    if (n.scrollContainer != window)
                        e(window).bind("wheel", i.wheel)
                },
                setPos: function(t, r) {
                    var s = r - this.offset.top;
                    var o = t - this.offset.left;
                    if (!n.dragBetween) {
                        s = Math.min(this.offsetLimit.bottom, Math.max(s, this.offsetLimit.top));
                        o = Math.min(this.offsetLimit.right, Math.max(o, this.offsetLimit.left))
                    }
                    var u = this.draggedItem.offsetParent().not("body").offset();
                    if (u != null ) {
                        s -= u.top;
                        o -= u.left
                    }
                    if (n.scrollContainer == window) {
                        r -= e(window).scrollTop();
                        t -= e(window).scrollLeft();
                        r = Math.max(0, r - e(window).height() + 5) + Math.min(0, r - 5);
                        t = Math.max(0, t - e(window).width() + 5) + Math.min(0, t - 5)
                    } else {
                        var a = e(n.scrollContainer);
                        var f = a.offset();
                        r = Math.max(0, r - a.height() - f.top) + Math.min(0, r - f.top);
                        t = Math.max(0, t - a.width() - f.left) + Math.min(0, t - f.left)
                    }
                    i.scroll.moveX = t == 0 ? 0 : t * n.scrollSpeed / Math.abs(t);
                    i.scroll.moveY = r == 0 ? 0 : r * n.scrollSpeed / Math.abs(r);
                    this.draggedItem.css({
                        top: s,
                        left: o
                    })
                },
                wheel: function(t) {
                    if (i && n.scrollContainer != window) {
                        var r = e(n.scrollContainer);
                        var s = r.offset();
                        t = t.originalEvent;
                        if (t.clientX > s.left && t.clientX < s.left + r.width() && t.clientY > s.top && t.clientY < s.top + r.height()) {
                            var o = (t.deltaMode == 0 ? 1 : 10) * t.deltaY;
                            r.scrollTop(r.scrollTop() + o);
                            t.preventDefault()
                        }
                    }
                },
                buildPositionTable: function() {
                    var t = [];
                    this.getItems().not([i.draggedItem[0], i.placeHolderItem[0]]).each(function(n) {
                        var r = e(this).offset();
                        r.right = r.left + e(this).outerWidth();
                        r.bottom = r.top + e(this).outerHeight();
                        r.elm = this;
                        t[n] = r
                    }
                    );
                    this.pos = t
                },
                dropItem: function() {
                    if (i.draggedItem == null )
                        return;
                    var t = i.draggedItem.attr("data-origstyle");
                    i.draggedItem.attr("style", t);
                    if (t == "")
                        i.draggedItem.removeAttr("style");
                    i.draggedItem.removeAttr("data-origstyle");
                    i.styleDragHandlers(true);
                    i.placeHolderItem.before(i.draggedItem);
                    i.placeHolderItem.remove();
                    e("[data-droptarget], .dragSortItem").remove();
                    window.clearInterval(i.scroll.scrollY);
                    window.clearInterval(i.scroll.scrollX);
                    if (i.draggedItem.attr("data-origpos") != e(r).index(i) + "-" + e(i.container).children().index(i.draggedItem))
                        if (n.dragEnd.apply(i.draggedItem) == false) {
                            var s = i.draggedItem.attr("data-origpos").split("-");
                            var o = e(r[s[0]].container).children().not(i.draggedItem).eq(s[1]);
                            if (o.size() > 0)
                                o.before(i.draggedItem);
                            else if (s[1] == 0)
                                e(r[s[0]].container).prepend(i.draggedItem);
                            else
                                e(r[s[0]].container).append(i.draggedItem)
                        }
                    i.draggedItem.removeAttr("data-origpos");
                    i.draggedItem = null ;
                    e(document).unbind("mousemove", i.swapItems);
                    e(document).unbind("mouseup", i.dropItem);
                    if (n.scrollContainer != window)
                        e(window).unbind("wheel", i.wheel);
                    return false
                },
                swapItems: function(t) {
                    if (i.draggedItem == null )
                        return false;
                    i.setPos(t.pageX, t.pageY);
                    var o = i.findPos(t.pageX, t.pageY);
                    var u = i;
                    for (var a = 0; o == -1 && n.dragBetween && a < r.length; a++) {
                        o = r[a].findPos(t.pageX, t.pageY);
                        u = r[a]
                    }
                    if (o == -1)
                        return false;
                    var f = function() {
                        return e(u.container).children().not(u.draggedItem)
                    }
                    ;
                    var l = f().not(n.itemSelector).each(function(e) {
                        this.idx = f().index(this)
                    }
                    );
                    if (s == null  || s.top > i.draggedItem.offset().top || s.left > i.draggedItem.offset().left)
                        e(u.pos[o].elm).before(i.placeHolderItem);
                    else
                        e(u.pos[o].elm).after(i.placeHolderItem);
                    l.each(function() {
                        var t = f().eq(this.idx).get(0);
                        if (this != t && f().index(this) < this.idx)
                            e(this).insertAfter(t);
                        else if (this != t)
                            e(this).insertBefore(t)
                    }
                    );
                    e(r).each(function(e, t) {
                        t.createDropTargets();
                        t.buildPositionTable()
                    }
                    );
                    s = i.draggedItem.offset();
                    return false
                },
                findPos: function(e, t) {
                    for (var n = 0; n < this.pos.length; n++) {
                        if (this.pos[n].left < e && this.pos[n].right > e && this.pos[n].top < t && this.pos[n].bottom > t)
                            return n
                    }
                    return -1
                },
                createDropTargets: function() {
                    if (!n.dragBetween)
                        return;
                    e(r).each(function() {
                        var t = e(this.container).find("[data-placeholder]");
                        var r = e(this.container).find("[data-droptarget]");
                        if (t.size() > 0 && r.size() > 0)
                            r.remove();
                        else if (t.size() == 0 && r.size() == 0) {
                            if (n.tagName == "td")
                                e(n.placeHolderTemplate).attr("data-droptarget", true).appendTo(this.container);
                            else
                                e(this.container).append(i.placeHolderItem.removeAttr("data-placeholder").clone().attr("data-droptarget", true));
                            i.placeHolderItem.attr("data-placeholder", true)
                        }
                    }
                    )
                }
            };
            u.init();
            r.push(u)
        }
        );
        return this
    }
    ;
    e.fn.dragsort.defaults = {
        itemSelector: "",
        dragSelector: "",
        dragSelectorExclude: "input, textarea",
        dragEnd: function() {},
        dragBetween: false,
        placeHolderTemplate: "",
        scrollContainer: window,
        scrollSpeed: 5
    }
}
)(jQuery)

;
function Resizer() {
    this._$targetList = [],
    this._createStyleSheet(),
    this._events = {},
    this._bindEvents(),
    this._config = {
        mouseDownFunction: "RESIZER_MOUSEDOWN"
    }
}
$.extend(Resizer.prototype, {
    addHandler: function(t, e, n, i) {
        var o = this;
        this.removeHandler(t);
        var s = this._config.mouseDownFunction;
        t.data(s, function() {
            return function(t) {
                o._vector = e,
                n && o.addCSSRule(o._styleSheet, "body *", "cursor: " + n + "!important;"),
                o._mouseDown.call(o, t)
            }
        }
        ()),
        i !== !1 && t.bind("mousedown", t.data(s))
    },
    removeHandler: function(t) {
        var e = t.data(this._config.mouseDownFunction);
        e && (t.unbind("mousedown", e),
        e = null )
    },
    addTarget: function(t) {
        for (var e = 0; e < this._$targetList.length; e++)
            if (this._$targetList[e][0] == t[0])
                return;
        this._$targetList.push(t)
    },
    removeTarget: function(t) {
        for (var e = 0; e < this._$targetList.length; e++)
            this._$targetList[e][0] == t[0] && this._$targetList.splice(e, 1)
    },
    removeAllTarget: function() {
        this._$targetList.length = 0
    },
    start: function(t, e) {
        var n = t.data(this._config.mouseDownFunction);
        n && n.call(this, e)
    },
    getDomRect: function(t) {
        var e = t.position();
        return {
            left: e.left,
            top: e.top,
            width: t.width(),
            height: t.height()
        }
    },
    setDomRect: function(t, e) {
        t.css(e)
    },
    getTargetRect: function(t, e, n, i) {
        return {
            left: t.left + e.left * n,
            top: t.top + e.top * i,
            width: t.width + e.width * n,
            height: t.height + e.height * i
        }
    },
    addCSSRule: function(t, e, n, i) {
        i = i || 0,
        "addRule" in t ? t.addRule(e, n) : "insertRule" in t && t.insertRule(e + "{" + n + "}", i)
    },
    bind: function(t, e) {
        this._events[t] || (this._events[t] = []),
        this._events[t].push(e)
    },
    unbind: function(t, e) {
        if (this._events[t])
            for (var n = this._events[t], i = 0; i < n.length; i++)
                e == n[i] && n[i].splice(i, 1)
    },
    trigger: function(t) {
        if (this._events[t])
            for (var e = this._events[t], n = 0; n < e.length; n++)
                e[n].call(this)
    },
    isRunning: function() {
        return this._isRunning
    },
    _mouseDown: function(t) {
        document.onselectstart = function() {
            return !1
        }
        ,
        this.addCSSRule(this._styleSheet, "body *", "-moz-user-select:none;-webkit-user-select: none;-ms-user-select: none;");
        var e = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
          , n = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        this._startX = t.clientX + e,
        this._startY = t.clientY + n;
        for (var i = 0; i < this._$targetList.length; i++) {
            var o = this._$targetList[i];
            o.data("START_RECT", this.getDomRect(o.show()))
        }
        this._isRunning = !0
    },
    _mouseMove: function(t) {
        if (this._isRunning)
            for (var e = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, n = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, i = t.clientX + e - this._startX, o = t.clientY + n - this._startY, s = 0; s < this._$targetList.length; s++) {
                var r = this._$targetList[s]
                  , u = this.getTargetRect(r.data("START_RECT"), this._vector, i, o)
                  , c = r.data("resizer_targetrect_filter");
                "function" == typeof c && (u = c.call(this, u)),
                this.setDomRect(r, u)
            }
    },
    _mouseUp: function() {
        if (this._isRunning) {
            document.onselectstart = null ,
            this._isRunning = !1;
            for (var t = this._styleSheet, e = t.cssRules || t.rules, n = e.length, i = 0; n > i; i++)
                t.deleteRule ? t.deleteRule(0) : t.removeRule(0);
            this.trigger("afterResize")
        }
    },
    _createStyleSheet: function() {
        var t = document.createElement("style");
        $("head").append(t),
        this._styleSheet = t.sheet || t.styleSheet
    },
    _bindEvents: function() {
        var t = this;
        $(document).bind("mousemove", function() {
            return function(e) {
                t._mouseMove.call(t, e)
            }
        }
        ()),
        $(document).bind("mouseup", function() {
            return function(e) {
                t._mouseUp.call(t, e)
            }
        }
        ())
    }
});
;/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.1
 *
 */
!function(a) {
    jQuery.fn.extend({
        slimScroll: function(b) {
            var c = {
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }
              , d = a.extend(c, b);
            return this.each(function() {
                function x(b) {
                    if (c) {
                        var b = b || window.event
                          , e = 0;
                        b.wheelDelta && (e = -b.wheelDelta / 120),
                        b.detail && (e = b.detail / 3);
                        var f = b.target || b.srcTarget || b.srcElement;
                        a(f).closest("." + d.wrapperClass).is(o.parent()) && y(e, !0),
                        b.preventDefault && !n && b.preventDefault(),
                        n || (b.returnValue = !1)
                    }
                }
                function y(a, b, c) {
                    n = !1;
                    var e = a
                      , f = o.outerHeight() - v.outerHeight();
                    if (b && (e = parseInt(v.css("top")) + a * parseInt(d.wheelStep) / 100 * v.outerHeight(),
                    e = Math.min(Math.max(e, 0), f),
                    e = a > 0 ? Math.ceil(e) : Math.floor(e),
                    v.css({
                        top: e + "px"
                    })),
                    j = parseInt(v.css("top")) / (o.outerHeight() - v.outerHeight()),
                    e = j * (o[0].scrollHeight - o.outerHeight()),
                    c) {
                        e = a;
                        var g = e / o[0].scrollHeight * o.outerHeight();
                        g = Math.min(Math.max(g, 0), f),
                        v.css({
                            top: g + "px"
                        })
                    }
                    o.scrollTop(e),
                    o.trigger("slimscrolling", ~~e),
                    B(),
                    C()
                }
                function z() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", x, !1),
                    this.addEventListener("mousewheel", x, !1),
                    this.addEventListener("MozMousePixelScroll", x, !1)) : document.attachEvent("onmousewheel", x)
                }
                function A() {
                    i = Math.max(o.outerHeight() / o[0].scrollHeight * o.outerHeight(), m),
                    v.css({
                        height: i + "px"
                    });
                    var a = i == o.outerHeight() ? "none" : "block";
                    v.css({
                        display: a
                    })
                }
                function B() {
                    if (A(),
                    clearTimeout(g),
                    j == ~~j) {
                        if (n = d.allowPageScroll,
                        k != j) {
                            var a = 0 == ~~j ? "top" : "bottom";
                            o.trigger("slimscroll", a)
                        }
                    } else
                        n = !1;
                    return k = j,
                    i >= o.outerHeight() ? (n = !0,
                    void 0) : (v.stop(!0, !0).fadeIn("fast"),
                    d.railVisible && u.stop(!0, !0).fadeIn("fast"),
                    void 0)
                }
                function C() {
                    d.alwaysVisible || (g = setTimeout(function() {
                        d.disableFadeOut && c || e || f || (v.fadeOut("slow"),
                        u.fadeOut("slow"))
                    }
                    , 1e3))
                }
                var c, e, f, g, h, i, j, k, l = "<div></div>", m = 30, n = !1, o = a(this);
                if (o.parent().hasClass(d.wrapperClass)) {
                    var p = o.scrollTop();
                    if (v = o.parent().find("." + d.barClass),
                    u = o.parent().find("." + d.railClass),
                    A(),
                    a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            o.parent().css("height", "auto"),
                            o.css("height", "auto");
                            var q = o.parent().parent().height();
                            o.parent().css("height", q),
                            o.css("height", q)
                        } else if ("height" in b) {
                            var r = b.height;
                            o.parent().css("height", r),
                            o.css("height", r)
                        }
                        if ("scrollTo" in b)
                            p = parseInt(d.scrollTo);
                        else if ("scrollBy" in b)
                            p += parseInt(d.scrollBy);
                        else if ("destroy" in b)
                            return v.remove(),
                            u.remove(),
                            o.unwrap(),
                            void 0;
                        y(p, !1, !0)
                    }
                } else {
                    d.height = "auto" == d.height ? o.parent().height() : d.height;
                    var s = a(l).addClass(d.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    o.css({
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    var u = a(l).addClass(d.railClass).css({
                        width: d.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: d.alwaysVisible && d.railVisible ? "block" : "none",
                        "border-radius": d.railBorderRadius,
                        background: d.railColor,
                        opacity: d.railOpacity,
                        zIndex: 90
                    })
                      , v = a(l).addClass(d.barClass).css({
                        background: d.color,
                        width: d.size,
                        position: "absolute",
                        top: 0,
                        opacity: d.opacity,
                        display: d.alwaysVisible ? "block" : "none",
                        "border-radius": d.borderRadius,
                        BorderRadius: d.borderRadius,
                        MozBorderRadius: d.borderRadius,
                        WebkitBorderRadius: d.borderRadius,
                        zIndex: 99
                    })
                      , w = "right" == d.position ? {
                        right: d.distance
                    } : {
                        left: d.distance
                    };
                    u.css(w),
                    v.css(w),
                    o.wrap(s),
                    o.parent().append(v),
                    o.parent().append(u),
                    d.railDraggable && v.bind("mousedown", function(b) {
                        var c = a(document);
                        return f = !0,
                        t = parseFloat(v.css("top")),
                        pageY = b.pageY,
                        c.bind("mousemove.slimscroll", function(a) {
                            currTop = t + a.pageY - pageY,
                            v.css("top", currTop),
                            y(0, v.position().top, !1)
                        }
                        ),
                        c.bind("mouseup.slimscroll", function() {
                            f = !1,
                            C(),
                            c.unbind(".slimscroll")
                        }
                        ),
                        !1
                    }
                    ).bind("selectstart.slimscroll", function(a) {
                        return a.stopPropagation(),
                        a.preventDefault(),
                        !1
                    }
                    ),
                    u.hover(function() {
                        B()
                    }
                    , function() {
                        C()
                    }
                    ),
                    v.hover(function() {
                        e = !0
                    }
                    , function() {
                        e = !1
                    }
                    ),
                    o.hover(function() {
                        c = !0,
                        B(),
                        C()
                    }
                    , function() {
                        c = !1,
                        C()
                    }
                    ),
                    o.bind("touchstart", function(a) {
                        a.originalEvent.touches.length && (h = a.originalEvent.touches[0].pageY)
                    }
                    ),
                    o.bind("touchmove", function(a) {
                        if (n || a.originalEvent.preventDefault(),
                        a.originalEvent.touches.length) {
                            var b = (h - a.originalEvent.touches[0].pageY) / d.touchScrollStep;
                            y(b, !0),
                            h = a.originalEvent.touches[0].pageY
                        }
                    }
                    ),
                    A(),
                    "bottom" === d.start ? (v.css({
                        top: o.outerHeight() - v.outerHeight()
                    }),
                    y(0, !0)) : "top" !== d.start && (y(a(d.start).position().top, null , !0),
                    d.alwaysVisible || v.hide()),
                    z()
                }
            }
            ),
            this
        }
    }),
    jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
}
(jQuery);
;!function() {
    function e(e) {
        this._container = e.container,
        this._width = e.width || 200,
        this._height = e.height || 50,
        this._uploadUrl = e.uploadUrl || "",
        this._file = e.file || "file",
        this._isPreview = "undefined" == typeof e.isPreview ? !0 : e.isPreview,
        this._previewSize = e.previewSize || "200*200|80*80|48*48",
        this._defaultPreview = e.defaultPreview || "",
        this._ratio = 0 === e.ratio ? 0 : e.ratio || 1,
        this._uploadSize = e.uploadSize || "",
        this._resourceUrl = e.resourceUrl || "",
        this._flashUrl = e.flashUrl,
        this._token = (new Date).getTime(),
        this._flashVars = "",
        this._events = ["complete", "error", "load"],
        this._init()
    }
    e.prototype.submit = function() {
        this._flash.submit()
    }
    ,
    e.prototype.setImageSrc = function(e) {
        if (this._flash.setImageSrc)
            this._flash.setImageSrc(e);
        else {
            var t = this;
            this.bind("load", function() {
                t._flash.setImageSrc(e)
            }
            )
        }
    }
    ,
    e.prototype.bind = function(e, t) {
        this._events[e] || (this._events[e] = []),
        this._events[e].push(t)
    }
    ,
    e.prototype.unbind = function(e, t) {
        if (this._events[e])
            for (var i = this._events[e], a = 0; a < i.length; a++)
                t == i[a] && i[a].splice(a, 1)
    }
    ,
    e.prototype.trigger = function(e, t) {
        if (this._events[e])
            for (var i = this._events[e], a = 0; a < i.length; a++)
                i[a].call(this, e, t)
    }
    ,
    e.prototype._init = function() {
        this._initFlashvars(),
        this._generateCallBack(),
        this._initUI()
    }
    ,
    e.prototype._initFlashvars = function() {
        var e = ["uploadUrl=" + encodeURIComponent(this._uploadUrl), "file=" + encodeURIComponent(this._file), "isPreview=" + this._isPreview, "previewSize=" + encodeURIComponent(this._previewSize), "defaultPreview=" + encodeURIComponent(this._defaultPreview), "ratio=" + encodeURIComponent(this._ratio), "uploadSize=" + encodeURIComponent(this._uploadSize), "resourceUrl=" + this._resourceUrl];
        this._flashVars = e.join("&")
    }
    ,
    e.prototype._initUI = function() {
        var e = "flashUploader" + this._token
          , t = this._flashUrl
          , i = '<object id="' + e + '" onfocus="return false;"  name="#" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + this._width + '" height="' + this._height + '"><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode"><param name="flashvars" value="' + this._flashVars + '" /><param name=play value=false> <param name="allowFullScreen" value="false" /><param name="movie" value="' + t + '" /></object>'
          , a = '<object id="' + e + '" type="application/x-shockwave-flash" data="' + t + '" width="' + this._width + '" height="' + this._height + '"><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode"><param name="flashvars" value="' + this._flashVars + '" /></object>';
        this._container.innerHTML = -1 != navigator.appName.indexOf("Microsoft") ? i : a,
        this._flash = document[e] || window[e]
    }
    ,
    e.prototype._generateCallBack = function() {
        for (var e = this._token, t = this, i = this._events, a = 0; a < i.length; a++) {
            var s = i[a]
              , o = s + e;
            window[o] = function(e) {
                return function(i) {
                    t.trigger(e, i)
                }
            }
            (s),
            this._flashVars += "&" + this._decodeCamel(s) + "=" + o
        }
    }
    ,
    e.prototype._decodeCamel = function(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "_" + t.toLowerCase()
        }
        )
    }
    ,
    IOT.ImageClipper = e
}
();
;$(function() {
    function t(t, e, i) {
        var r = e.width()
          , a = e.height()
          , s = Math.floor(r / i)
          , o = Math.floor(a / i);
        this._gridNums = s,
        this._gridWidth = i,
        this._girdMinHeight = o,
        this._$container = t,
        this._$view = e,
        this._styleSheet = new IOT.StyleSheet,
        this._init()
    }
    require.config({
        baseUrl: "http://localhost:8080/hadoopsensor/diyapp",
        paths: {},
        shim: {},
        urlArgs: ""
    });
    var e = {
        grid: 1,
        sharp: 100,
        resizer: 2e3,
        placeHolder: 2001
    };
    $.extend(t.prototype, {
        _init: function() {
            this._createTable(),
            this.refreshHeight()
        },
        _createTable: function() {
            {
                var t = this._$view
                  , e = $('<div class="editor-canvas-grid"></div>').prependTo(this._$view)
                  , i = $('<ul class="editor-canvas-grid-top"></ul>').prependTo(this._$view)
                  , r = $('<ul class="editor-canvas-grid-left"></ul>').prependTo(this._$view);
                t.width(),
                t.height()
            }
            this._styleSheet.addRule(".editor-canvas-grid td", "width:" + this._gridWidth + "px", 0),
            this._styleSheet.addRule(".editor-canvas-grid tr", "height:" + this._gridWidth + "px", 0),
            this._$gridTable = e,
            this._$gridTableTop = i,
            this._$gridTableLeft = r
        },
        getWidth: function() {
            return this._$gridTable.width()
        },
        getHeight: function() {
            return this._$gridTable.height()
        },
        getGridWidth: function() {
            return this._gridWidth
        },
        getGridTable: function() {
            return this._$gridTable
        },
        getGridNums: function() {
            return this._gridNums
        },
        refreshHeight: function() {
            var t = this._$view
              , e = this._$container
              , i = t.width()
              , r = e[0].scrollWidth
              , a = t.height()
              , s = e[0].scrollHeight
              , o = 100 * Math.ceil(Math.max(i, r) / 100)
              , n = 100 * Math.ceil(Math.max(a, s) / 100);
            this._$gridTable.css({
                height: n
            }),
            this._$gridTableTop.empty().css("width", o);
            for (var l = 0; o / 100 > l; l++)
                $("<li>" + 100 * l + "</li>").appendTo(this._$gridTableTop);
            this._$gridTableLeft.empty();
            for (var l = 0; n / 100 > l; l++)
                $("<li><span>" + 100 * l + "</span></li>").appendTo(this._$gridTableLeft)
        },
        reRender: function(t) {
            if (!(this._girdMinHeight * this._gridWidth > t))
                for (var e = Math.round(t / this._gridWidth), i = this._$gridTable.find("tr").length, r = i - e, a = Math.abs(r), s = 0; a > s; s++)
                    r > 0 ? this._$gridTable.find("tr:last").remove() : this._$gridTable.find("tr:first").clone().appendTo(this._$gridTable)
        }
    });
    var i = {
        _editorList: [],
        _editorLibrary: {},
        _currentIndex: e.sharp,
        _gridWidth: 10,
        registerEditor: function(t, e) {
            this._editorLibrary[t] = e
        },
        requireEcharts: function(t) {
            var e = this;
            this._echartsLoaded ? t() : (this._callBackList || (this._callBackList = []),
            this._callBackList.push(t),
            this._echartsLoading || (this._echartsLoading = !0,
            $.ajax({
                url: "http://localhost:8080/hadoopsensor/diyapp/echarts.js",
                dataType: "script",
                cache: !0,
                success: function() {
                    e._echartsLoaded = !0;
                    for (var t = 0; t < e._callBackList.length; t++)
                        e._callBackList[t]()
                }
            })))
        },
        appendEditor: function(t, e) {
            var i = t.getDom();
            this._$container.append(i),
            e.useMove && i.addClass(this._config.RESIZE_CLASS),
            e.resizeClass && i.attr("data-resizeclass", e.resizeClass);
            var r = this._editorList
              , a = r.length;
            r[a] = {
                dom: i,
                sharp: t
            },
            i.attr("data-editor-index", a).css({
                "z-index": this._currentIndex
            }).data("z-index", this._currentIndex++)
        },
        getSharpEditorByIndex: function(t) {
            return this._editorList[t] ? this._editorList[t].sharp : void 0
        },
        getDeviceId: function() {
            return EDITOR.deviceId
        },
        getGrid: function() {
            return this._grid
        },
        getResizer: function() {
            return this._resizer
        },
        getToolsDom: function() {
            return this._$toolsBar
        },
        getResizeDom: function() {
            return this._$resizeWrapper
        },
        getDsList: function() {
            return EDITOR.dsList
        },
        getDeviceList: function() {
            return EDITOR.deviceList
        },
        getFormatedWidth: function(t, e) {
            return Math.round(e / t) * t
        },
        getFormatedRect: function(t) {
            var e = this._gridWidth;
            return {
                left: this.getFormatedWidth(e, t.left),
                top: this.getFormatedWidth(e, t.top),
                width: this.getFormatedWidth(e, t.width),
                height: this.getFormatedWidth(e, t.height)
            }
        },
        resetResizerRect: function(t) {
            var e = this._resizer
              , i = this._$resizeWrapper
              , r = e.getDomRect(t);
            r.width -= 2,
            r.height -= 2,
            e.setDomRect(i, r)
        },
        resetGrid: function() {
            this._grid.refreshHeight()
        },
        getConfig: function() {
            return this._config
        },
        getGridWidthOfDom: function(t) {
            var e = this._resizer;
            t.closest(".ui-selectable").length && (t = this._$resizeWrapper);
            var i = e.getDomRect(t);
            return i
        },
        changed: function() {
            window.onbeforeunload = function() {
                return "页面已被修改，确定不保存而直接退出吗？"
            }
        },
        saved: function() {
            window.onbeforeunload = null 
        },
        setTextOption: function(t) {
            var e = this._$toolText;
            e.find(".tool-font-size").val(t.fontSize || 12),
            e.find(".tool-bold")[t.bold ? "addClass" : "removeClass"]("active"),
            e.find(".tool-italic")[t.italic ? "addClass" : "removeClass"]("active"),
            e.find(".tool-underline")[t.underline ? "addClass" : "removeClass"]("active"),
            e.find(".tool-left")["left" == t.align ? "addClass" : "removeClass"]("active"),
            e.find(".tool-center")["center" == t.align ? "addClass" : "removeClass"]("active"),
            e.find(".tool-right")["right" == t.align ? "addClass" : "removeClass"]("active"),
            t.color = t.color || "#000",
            e.find(".tool-color em").css("border-bottom", "3px solid " + t.color),
            e.find(".j_color").val(t.color)
        },
        enableTextTools: function() {
            this._$toolText.removeClass("tool-disabled")
        },
        disableTextTools: function() {
            this._$toolText.addClass("tool-disabled").find(".active").removeClass("active")
        },
        loadDataStreamForSharp: function(t, e) {
            var i = parseInt(t.getToolsDom().find(".j_device_select").val());
            if (!isNaN(i)) {
                if (this._dataStream[i])
                    return void this._renderDataStream(t, this._dataStream[i], e);
                var r = this;
                //请求服务器获得所有数据流的名称
                $.getJSON("/app/datastream?pid=" + EDITOR.projectId + "&dev_id=" + i + "&t=" + +new Date, function(i) {
                    r._renderDataStream(t, i.data, e)
                }
                )
            }
        },
        fullScreen: function() {
            var t = $(window)
              , e = this._$wrapper
              , i = (e.width(),
            $(window).width())
              , r = $(window).height()
              , a = e.position()
              , s = e.offset()
              , o = document.body;
            o.requestFullscreen ? o.requestFullscreen() : o.mozRequestFullScreen ? o.mozRequestFullScreen() : o.webkitRequestFullScreen ? o.webkitRequestFullScreen() : o.msRequestFullscreen ? o.msRequestFullscreen() : $("body").css("overflow", "hidden"),
            this._$wrapper.css({
                width: i,
                height: r,
                left: -(s.left - a.left) + t.scrollLeft(),
                top: -(s.top - a.top) + t.scrollTop()
            });
            var n = this;
            setTimeout(function() {
                n.resetAll()
            }
            , 510)
        },
        minScreen: function() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : $("body").css("overflow", "auto"),
            this._$wrapper.css({
                width: this._minWrapperWidth,
                height: this._minWrapperHeight,
                top: 105,
                left: 40
            });
            var t = this;
            setTimeout(function() {
                t.resetAll()
            }
            , 510)
        },
        resetAll: function() {
            var t = this._$wrapper
              , e = Math.max(t.height(), this._minWrapperHeight)
              , i = this._headHeight
              , r = e - i
              , a = this._$toolsBar.find(">div")[0].scrollHeight + 2 * parseInt(this._$toolsBar.css("padding-top")) + 2;
            r = Math.max(r, a),
            this._$menuBar.css("height", r - 2 * parseInt(this._$menuBar.css("padding-top")) - 2),
            this._$toolsBar.css("height", r - 2 * parseInt(this._$toolsBar.css("padding-top")) - 2),
            this._$canvas.css("height", r - 2 * parseInt(this._$canvas.css("padding-top")) - 2),
            this.resetGrid()
        },
        rgb2hex: function(t) {
            //var e = t.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+)/i);
        	var e = 4;
            return e && 4 === e.length ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : t
        },
        _renderDataStream: function(t, e, i) {
            for (var r = '<select class="j_ds_select"><option value="">--选择数据流--</option>', a = 0; a < e.length; a++) {
                var s = e[a].id;
                r += '<option value="' + s + '" ' + (s == i ? "selected" : "") + ">" + s + "</option>"
            }
            r += "</select>",
            t.getToolsDom().find(".j_ds_select_wrapper").html(r)
        },
        _init: function() {
            this._$wrapper = $(".editor-wrapper"),
            this._$canvas = $(".editor-canvas"),
            this._$resizeWrapper = $("#diySelector"),
            this._$container = $(".editor-canvas-main"),
            this._$btnUp = $(".editor-tool-kit .j_up"),
            this._$btnDown = $(".editor-tool-kit .j_down"),
            this._$btnDelete = $(".editor-tool-kit .j_delete"),
            this._$btnGrid = $(".editor-tool-kit .j_grid"),
            this._$rectX = $(".editor-tool-rect .j_x"),
            this._$rectY = $(".editor-tool-rect .j_y"),
            this._$rectW = $(".editor-tool-rect .j_w"),
            this._$rectH = $(".editor-tool-rect .j_h"),
            this._$toolKit = $(".editor-tool-kit"),
            this._$toolText = $(".editor-tool-text"),
            this._$toolsBar = $(".j_tools"),
            this._$headBar = $(".editor-head"),
            this._$menuBar = $(".editor-menu"),
            this._$step = $(".project-wrapper .j_step"),
            this._$stepNav = $(".nav-step li"),
            this._$fullBtn = $(".j_full"),
            this._dataStream = {},
            this._createGrid(),
            this._createResizer(),
            this._initChart(),
            this._createSharpPlaceHolder(),
            this._createGlobalSets(),
            this._bindEvents(),
            this._minWrapperHeight = this._$wrapper.height(),
            this._minWrapperWidth = this._$wrapper.width(),
            this._headHeight = this._$headBar.outerHeight()
        },
        _createGrid: function() {
            var e = new t(this._$container,this._$canvas,this._gridWidth);
            this._grid = e;
            var i = this;
            e.getGridTable().on("click", function() {
                i._$resizeWrapper.hide(),
                i._currentSharp && i._unselectSharp(i._currentSharp),
                i._$toolsBar.find(":first").detach().end().append(i._$globalSets)
            }
            )
        },
        _initChart: function() {},
        _createSharpPlaceHolder: function() {
            var t = $('<div class="hide sharp-placeholder"></div>').appendTo($("body"));
            t.css({
                "z-index": e.placeHolder
            });
            var i = new Resizer;
            i.addHandler(t, {
                left: 1,
                top: 1,
                width: 0,
                height: 0
            }, "move"),
            i.addTarget(t);
            var r = this;
            i.bind("afterResize", function() {
                var e = this.getDomRect(t)
                  , i = r._$container.offset();
                if (e.left < i.left || e.top < i.top)
                    return void t.animate(t.data("START_RECT"), 200, function() {
                        t.hide()
                    }
                    );
                e.left = e.left - i.left,
                e.top = e.top - i.top;
                var a = r.getFormatedRect(e)
                  , s = r._editorLibrary[t.attr("data-type")];
                s && (new s(a,r).getDom().trigger("mousedown").trigger("mouseup"),
                r.changed()),
                t.hide()
            }
            ),
            t.on("mousedown", "*", function(t) {
                t.preventDefault()
            }
            ).on("mouseover", function() {
                t.data("ismouseover", !0)
            }
            ).on("mouseout", function() {
                t.data("ismouseover", !1),
                i.isRunning() || t.hide()
            }
            ),
            this._$sharpPlaceHolder = t
        },
        _createResizer: function() {
            var t = new Resizer
              , i = this._$resizeWrapper
              , r = this;
            $(".ui-resizable-handler").bind("mousedown", function(t) {
                t.stopPropagation()
            }
            ),
            t.addHandler($(".ui-resizable-nw"), {
                left: 1,
                top: 1,
                width: -1,
                height: -1
            }, "nw-resize"),
            t.addHandler($(".ui-resizable-ne"), {
                left: 0,
                top: 1,
                width: 1,
                height: -1
            }, "ne-resize"),
            t.addHandler($(".ui-resizable-sw"), {
                left: 1,
                top: 0,
                width: -1,
                height: 1
            }, "sw-resize"),
            t.addHandler($(".ui-resizable-se"), {
                left: 0,
                top: 0,
                width: 1,
                height: 1
            }, "se-resize"),
            t.addHandler($(".ui-resizable-w"), {
                left: 1,
                top: 0,
                width: -1,
                height: 0
            }, "w-resize"),
            t.addHandler($(".ui-resizable-e"), {
                left: 0,
                top: 0,
                width: 1,
                height: 0
            }, "e-resize"),
            t.addHandler($(".ui-resizable-n"), {
                left: 0,
                top: 1,
                width: 0,
                height: -1
            }, "n-resize"),
            t.addHandler($(".ui-resizable-s"), {
                left: 0,
                top: 0,
                width: 0,
                height: 1
            }, "s-resize"),
            t.addHandler(i, {
                left: 1,
                top: 1,
                width: 0,
                height: 0
            }, "move"),
            t.addTarget(i),
            i.css({
                display: "none",
                "z-index": e.resizer
            }),
            t.bind("afterResize", function() {
                var t, e = this.getDomRect(i);
                e.width += 2,
                e.height += 2,
                t = r._$btnGrid.hasClass("active") ? r.getFormatedRect(e) : e;
                var a = r._grid.getWidth()
                  , s = r._grid.getGridWidth()
                  , o = 1 * s
                  , n = 1 * s
                  , l = 0
                  , d = 0;
                t.left < 0 && (l = -t.left),
                t.top < 0 && (d = -t.top),
                t.left + t.width > a && (l = a - (t.left + t.width)),
                t = this.getTargetRect(t, this._vector, l, d),
                l = 0,
                d = 0,
                t.width < o && (l = o - t.width),
                t.height < n && (d = n - t.height),
                t = this.getTargetRect(t, this._vector, l, d),
                this.setDomRect(r._$currentResizeSharp, t),
                t.width -= 2,
                t.height -= 2,
                this.setDomRect(r._$resizeWrapper, t);
                var h = r.getSharpEditorByIndex(r._$currentResizeSharp.attr("data-editor-index"));
                h && "function" == typeof h.resizeCallBack && h.resizeCallBack(),
                r._showCurrentSharpRect(),
                r.resetGrid(),
                r.changed()
            }
            ),
            this._resizer = t
        },
        _mouseDown: function(t) {
            var e = this._resizer
              , i = $(t.currentTarget)
              , r = this._$resizeWrapper;
            this._$currentResizeSharp && i[0] != this._$currentResizeSharp[0] && this.appendToContainer(this._$currentResizeSharp);
            var a = this._editorList[i.attr("data-editor-index")];
            a && this._selectSharp(a.sharp),
            i.closest(".ui-selectable").length || (this.resetResizerRect(i),
            this.appendToResizer(i),
            e.start(r, t)),
            r.show(),
            this._$currentResizeSharp = i
        },
        _bindEvents: function() {
            var t = this
              , e = this._config;
            this._$canvas.on("mousedown", "." + e.RESIZE_CLASS, function(e) {
                t._mouseDown(e)
            }
            ),
            this._$btnUp.click(function(e) {
                if (e.preventDefault(),
                t._currentSharp) {
                    var i = t._currentSharp.getDom()
                      , r = +i.data("z-index");
                    t._setSharpIndex(i, r + 1)
                }
            }
            ),
            this._$btnDown.click(function(e) {
                if (e.preventDefault(),
                t._currentSharp) {
                    var i = t._currentSharp.getDom()
                      , r = +i.data("z-index");
                    t._setSharpIndex(i, r - 1)
                }
            }
            ),
            this._$btnDelete.click(function(e) {
                e.preventDefault(),
                t._delSharp()
            }
            ),
            this._$btnGrid.click(function() {
                var e = $(this)
                  , i = e.hasClass("active");
                if (e[i ? "removeClass" : "addClass"]("active"),
                !i) {
                    var r = t._currentSharp
                      , a = r.getDom()
                      , s = t.getFormatedRect(t._resizer.getDomRect(a));
                    t._resizer.setDomRect(a, s),
                    s.width -= 2,
                    s.height -= 2,
                    t._resizer.setDomRect(t._$resizeWrapper, s),
                    t._showCurrentSharpRect();
                    var o = t.getSharpEditorByIndex(a.attr("data-editor-index"));
                    o && "function" == typeof o.resizeCallBack && o.resizeCallBack()
                }
            }
            );
            var i = this._$toolText;
            i.find(".tool-text-style").on("click", function() {
                var e = t._currentSharp;
                if (e && "text" == e._sharpType) {
                    var r = $(this)
                      , a = r.hasClass("active");
                    r[a ? "removeClass" : "addClass"]("active");
                    var s = e.getDom();
                    r.hasClass("tool-bold") ? s.css("font-weight", a ? "normal" : "bold") : r.hasClass("tool-italic") ? s.css("font-style", a ? "normal" : "italic") : r.hasClass("tool-underline") ? s.css("text-decoration", a ? "none" : "underline") : r.hasClass("tool-left") ? (s.css("text-align", a ? "" : "left"),
                    i.find(".tool-center, .tool-right").removeClass("active")) : r.hasClass("tool-center") ? (s.css("text-align", a ? "" : "center"),
                    i.find(".tool-left, .tool-right").removeClass("active")) : r.hasClass("tool-right") && (s.css("text-align", a ? "" : "right"),
                    i.find(".tool-center, .tool-left").removeClass("active"))
                }
            }
            ).end().find(".tool-font-size").on("change", function() {
                var e = t._currentSharp;
                if (e && "text" == e._sharpType) {
                    var i = e.getDom();
                    i.css("font-size", this.value + "px")
                }
            }
            ),
            i.find(".j_color").colorPicker({
                pickerDefault: "#000000",
                showHexField: !0
            }).on("change", function() {
                i.find(".tool-color em").css("border-bottom", "3px solid " + this.value);
                var e = t._currentSharp;
                if (e && "text" == e._sharpType) {
                    var r = e.getDom();
                    r.css("color", this.value)
                }
            }
            );
            var r = this._$toolKit
              , a = r.find(".tool-paint em");
            $(".j_bgcolor").on("change", function() {
                a.css("border-bottom", "3px solid " + this.value);
                var e = t._grid.getGridTable();
                e.css({
                    "background-color": this.value || ""
                })
            }
            ).colorPicker({
                pickerDefault: EDITOR.options.bgColor || "#fff",
                showHexField: !0
            }).trigger("change"),
            key("del", function() {
                t._delSharp()
            }
            ),
            key("up", function(e) {
                e.preventDefault(),
                t._$rectY.val(+t._$rectY.val() - 1).trigger("change")
            }
            ),
            key("down", function(e) {
                e.preventDefault(),
                t._$rectY.val(+t._$rectY.val() + 1).trigger("change")
            }
            ),
            key("left", function(e) {
                e.preventDefault(),
                t._$rectX.val(+t._$rectX.val() - 1).trigger("change")
            }
            ),
            key("right", function(e) {
                e.preventDefault(),
                t._$rectX.val(+t._$rectX.val() + 1).trigger("change")
            }
            ),
            key("esc", function() {
                t.minScreen()
            }
            ),
            t._$menuBar.find(".j_sharp_init").on("mouseenter", function() {
                var e = t._$sharpPlaceHolder
                  , i = $(this);
                e.css(i.offset()).css({
                    width: i.width(),
                    height: i.width()
                }).show().attr("data-type", i.attr("data-type")),
                e.find("*").remove().end().append(i.clone()),
                setTimeout(function() {
                    e.data("ismouseover") || e.hide()
                }
                , 100)
            }
            ),
            $(window).on("resize", function() {
                t._$fullBtn.data("isFull") && t.fullScreen()
            }
            ),
            $(".j_preview").submit(function(e) {
                e.preventDefault();
                var i = t._getAllOptions();
                this.view_id.value = EDITOR.viewId || "",
                this.pid.value = EDITOR.projectId,
                this.openid.value = EDITOR.openid,
                this.name.value = "无标题应用",
                this.description.value = i.desc,
                this.data.value = JSON.stringify({

                    deviceId: global_data_jc.deviceId,
                    dsId: global_data_jc.dsId
                    // data:global_data_jc,
                    // sharpList: i.sharpList,
                    // bgColor: i.bgColor,
                    // pageWidth: i.pageWidth
                }),
                this.submit()
            }
            ),
            $(".j_save_btn").click(function(e) {
                e.preventDefault(),
                t._allOptions = t._getAllOptions(),
                t._gotoStep(1)
            }
            );
            var s = $("#saveForm")
              , o = $(".img-select")
              , n = $(".j_app_logo")
              , l = $(".img-content");
            l.slimscroll({
                height: "100%"
            }),
            $(".j_edit_head").click(function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                o.show(),
                l.children("img").click(function(t) {
                    t.stopPropagation();
                    var e = $(t.currentTarget);
                    n.attr("src", e.attr("src")),
                    s[0].elements.logo_path.value = e.attr("src"),
                    e.addClass("active").siblings().removeClass("active")
                }
                )
            }
            ),
            $(document).click(function(t) {
                var e = $(t.target);
                !e.hasClass("img-select") && !e.parents(".img-select").length && o.is(":visible") && o.hide()
            }
            );
            var d, h = !1;
            $(".j_upload_head").click(function(t) {
                if (t.preventDefault(),
                !h) {
                    d = new IOT.Dialog({
                        title: "修改设备图片",
                        content: '<div class="ui-dialog-bd"></div><div class="ui-dialog-ft"><a class="button j_submit">上传</a></div>',
                        beforeClose: null ,
                        showClose: !0,
                        showFooter: !1,
                        className: "",
                        cache: !0,
                        width: "700px"
                    });
                    var e = new IOT.ImageClipper({
                        file: "upfile",
                        container: d.$root.find(".ui-dialog-bd")[0],
                        width: 550,
                        height: 400,
                        previewSize: "120*120|56*56",
                        uploadSize: "120*120",
                        flashUrl: IOT.staticUrl + "/files/image_clipper/imageClipper.swf?v=0810",
                        resourceUrl: IOT.staticUrl + "/files/image_clipper",
                        uploadUrl: "http://" + IOT.host + "/device/imgup"
                    })
                      , i = d.$root.find(".j_submit");
                    e.bind("complete", function(t, e) {
                        IOT.button.removeLoading(i, IOT.tr("上传"));
                        var r = e.response.data.addr;
                        n.attr("src", r),
                        s[0].elements.logo_path.value = r,
                        d.close()
                    }
                    ),
                    e.bind("error", function(t, e) {
                        IOT.tips(e.errorMessage || IOT.tr("上传失败，请稍后再试"), "warning"),
                        IOT.button.removeLoading(i, IOT.tr("上传"))
                    }
                    ),
                    i.on("click", function(t) {
                        t.preventDefault(),
                        IOT.button.isLoading(i) || (IOT.button.addLoading(i, IOT.tr("上传中"), "loading"),
                        e.submit())
                    }
                    )
                }
                d.open()
            }
            ),
            this._$toolsBar.on("change", ".j_device_select", function(e) {
                e.preventDefault(),
                // this.value && $.getJSON("/app/datastream?pid=" + EDITOR.projectId + "&dev_id=" +
                 // this.value + "&t=" + +new Date, function(e) {

                    e='{"code":0,"msg":"","data":[{"id":"temp","unit":null,"unit_symbol":null,"uuid":"82d45eae-190a-5342-9900-a8ffbcdca313"},{"id":"humi","unit":null,"unit_symbol":null,"uuid":"82d45eae-190a-5342-9900-a8ffbcdca313"}]}';
                    e=$.parseJSON(e);
                    for (var i = e.data, r = '<select class="j_ds_select"><option value="">--选择数据流--</option>', a = 0; a < i.length; a++)
                        r += '<option value="' + i[a].id + '">' + i[a].id + "</option>";
                    r += "</select>",
                    t._$toolsBar.find(".j_ds_select_wrapper").html(r)
                // }
                // )
            }
            ),
            $(".j_rect").bind("change", function(e) {
                e.preventDefault();
                var i = $(this)
                  , r = t._grid.getWidth()
                  , a = (t._grid.getGridNums(),
                parseInt(t._$rectX.val()))
                  , s = parseInt(t._$rectY.val())
                  , o = parseInt(t._$rectW.val())
                  , n = parseInt(t._$rectH.val());
                if (!(!(isNaN(a) || isNaN(s) || isNaN(o) || isNaN(n)) && a >= 0 && s >= 0 && o >= 1 && n >= 1))
                    return t._showCurrentSharpRect(),
                    !1;
                t._$btnGrid.hasClass("active") && (i.hasClass("j_x") && a % 10 != 0 && (a = 10 * Math.round((a + (a % 10 > 5 ? -10 : 10)) / 10),
                t._$rectX.val(a)),
                i.hasClass("j_y") && s % 10 != 0 && (s = 10 * Math.round((s + (s % 10 > 5 ? -10 : 10)) / 10),
                t._$rectY.val(s)),
                i.hasClass("j_w") && o % 10 != 0 && (o = 10 * Math.round((o + (o % 10 > 5 ? -10 : 10)) / 10),
                t._$rectW.val(o)),
                i.hasClass("j_h") && n % 10 != 0 && (n = 10 * Math.round((n + (n % 10 > 5 ? -10 : 10)) / 10),
                t._$rectH.val(n))),
                a + o > r && (i.hasClass("j_x") ? (a = r - o,
                t._$rectX.val(a)) : (o = r - a,
                t._$rectW.val(o)));
                var l = t._currentSharp
                  , d = {
                    left: a,
                    top: s,
                    width: o,
                    height: n
                };
                t._$btnGrid.hasClass("active") && (d = t.getFormatedRect(d));
                var h = l.getDom();
                t._resizer.setDomRect(h, d),
                d.width -= 2,
                d.height -= 2,
                t._resizer.setDomRect(t._$resizeWrapper, d),
                t._showCurrentSharpRect();
                var c = t.getSharpEditorByIndex(h.attr("data-editor-index"));
                c && "function" == typeof c.resizeCallBack && c.resizeCallBack(),
                t.resetGrid()
            }
            );
            var c = s.find(".j_status")
              , p = s.find('button[type="submit"]');
            c.on("click", function(t) {
                t.preventDefault(),
                c.removeClass("hollow").addClass("secondary");
                var e = $(this);
                e.addClass("hollow"),
                s[0].status.value = e.attr("data-value")
            }
            ),
            s.find(".j_back").on("click", function(e) {
                e.preventDefault(),
                t._gotoStep(0)
            }
            ),
            s.on("submit", function(e) {
                if (e.preventDefault(),
                IOT.button.isLoading(p))
                    return !1;
                IOT.button.addLoading(p, "保存中", "loading");
                var i = t._allOptions;
                IOT.post("/app/edit", {
                    id: EDITOR.viewId,
                    pid: EDITOR.projectId,
                    name: s.find('input[name="name"]').val(),
                    logo_path: s.find('input[name="logo_path"]').val(),
                    description: s.find('textarea[name="description"]').val(),
                    status: s.find('input[name="status"]').val(),
                    ref_devs: i.deviceList.join(","),
                    data: JSON.stringify({
                        sharpList: i.sharpList,
                        bgColor: i.bgColor,
                        pageWidth: i.pageWidth
                    })
                }, function(e) {
                    e && (0 == e.code ? (IOT.tips("保存成功", "success"),
                    e.data.id && setTimeout(function() {
                        location.href = "/app/view?id=" + e.data.id
                    }
                    , 2e3),
                    t.saved()) : IOT.showPostError(e.msg)),
                    IOT.button.removeLoading(p, "保存应用")
                }
                , "json")
            }
            );
            var u = t._$fullBtn;
            u.on("click", function(e) {
                e.preventDefault(),
                u.data("isFull") ? (t.minScreen(),
                u.removeClass("icon-resize-small").addClass("icon-resize-full").attr("title", "全屏").data("isFull", !1)) : (t.fullScreen(),
                u.removeClass("icon-resize-full").addClass("icon-resize-small").attr("title", "退出全屏").data("isFull", !0))
            }
            )
        },
        _delSharp: function() {
            var t = this;
            if (t._currentSharp) {
                var e = t._currentSharp;
                t._unselectSharp(e);
                var i = e.getDom().attr("data-editor-index");
                t._editorList[i] = null ,
                e.dispose(),
                t._$resizeWrapper.hide()
            }
        },
        _selectSharp: function(t) {
            this._currentSharp && this._currentSharp != t && this._unselectSharp(this._currentSharp),
            this._currentSharp = t;
            var e = t.getDom()
              , i = e.data("z-index");
            if (this._setSharpIndex(e, i),
            this._showCurrentSharpRect(),
            this._resizer.addTarget(e),
            t.select.call(t),
            t.getToolsDom) {
                var r = t.getToolsDom();
                r && this._$toolsBar.find(":first").detach().end().append(r)
            }
            this._$resizeWrapper.addClass(e.attr("data-resizeclass"))
        },
        _unselectSharp: function(t) {
            t.unselect && t.unselect.call(t);
            var e = t.getDom();
            if (this.appendToContainer(e),
            this._resizer.removeTarget(e),
            t.getToolsDom) {
                var i = t.getToolsDom();
                i && i.detach()
            }
            this._currentSharp = null ,
            this._$currentResizeSharp = null ,
            this._$resizeWrapper.removeClass(e.attr("data-resizeclass"))
        },
        appendToResizer: function() {},
        appendToContainer: function() {},
        _setSharpIndex: function(t, e) {
            e > 999 || 100 > e || (this._$btnUp[999 > e ? "removeClass" : "addClass"]("disabled"),
            this._$btnDown[e > 100 ? "removeClass" : "addClass"]("disabled"),
            t.data("z-index", e).css("z-index", e))
        },
        _showCurrentSharpRect: function() {
            var t = this.getGridWidthOfDom(this._currentSharp.getDom());
            this._$rectX.val(t.left),
            this._$rectY.val(t.top),
            this._$rectW.val(t.width),
            this._$rectH.val(t.height)
        },
        _getAllOptions: function() {
            for (var t = this._getOptionByTools(), e = [], i = [], r = 0; r < this._editorList.length; r++) {
                var a = this._editorList[r];
                if (a) {
                    var s = a.sharp
                      , o = a.dom
                      , n = s._getOptionByTools();
                    e.push({
                        zIndex: s.getDom().data("z-index"),
                        rect: this.getGridWidthOfDom(o),
                        type: s.getSharpType(),
                        options: n
                    }),
                    n.data && n.data.deviceId && i.push(n.data.deviceId)
                }
            }
            return t.bgColor = this.rgb2hex($(".j_bgcolor").val()),
            t.sharpList = e,
            t.deviceList = _.uniq(i),
            t
        },
        _createGlobalSets: function() {
            var t = "<div><h4>页面属性</h4>";
            t += '<label class="label-input">宽度<input type="number" value="' + (EDITOR.options.pageWidth || 1e3) + '" size="8" class="j_page_width input-text" style="width: 45px;">px</label>',
            t += "</div>";
            var e = $(t)
              , i = this;
            e.find("select,input").bind("change", function() {
                i.setOption(i._getOptionByTools()),
                i.changed()
            }
            ),
            this._$globalSets = e,
            e.find("input").eq(0).trigger("change"),
            this._grid.getGridTable().trigger("click"),
            this.saved()
        },
        _getOptionByTools: function() {
            var t = this._$globalSets
              , e = t.find(".j_page_width").val();
            return isNaN(e) && (e = 1e3),
            {
                pageWidth: e
            }
        },
        setOption: function(t) {
            this._grid.getGridTable().css("width", t.pageWidth)
        },
        _gotoStep: function(t) {
            this._$step.hide(),
            this._$step.eq(t).show(),
            this._$stepNav.removeClass("active").eq(t).addClass("active")
        },
        _config: {
            RESIZE_CLASS: "j_editor_resize",
            RESIZE_ONLYMOVE: "j_editor_onlymove"
        }
    };
    i._init(),
    window.sharpEditor = i
}
);
;/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.11
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function(factory) {
    /*if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {*/
    // Browser globals
    factory(jQuery);
    /* }*/
}
(function($) {
    
    /**
     * Kontrol library
     */
    "use strict";
    
    /**
     * Definition of globals and core
     */
    var k = {}
      , // kontrol
    max = Math.max
      , 
    min = Math.min;
    
    k.c = {};
    k.c.d = $(document);
    k.c.t = function(e) {
        return e.originalEvent.touches.length - 1;
    }
    ;
    
    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function() {
        var s = this;
        
        this.o = null ;
        // array of options
        this.$ = null ;
        // jQuery wrapped element
        this.i = null ;
        // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null ;
        // deprecated 2D graphics context for 'pre-rendering'
        this.v = null ;
        // value ; mixed array or integer
        this.cv = null ;
        // change value ; not commited value
        this.x = 0;
        // canvas x position
        this.y = 0;
        // canvas y position
        this.w = 0;
        // canvas width
        this.h = 0;
        // canvas height
        this.$c = null ;
        // jQuery canvas element
        this.c = null ;
        // rendered canvas context
        this.t = 0;
        // touches index
        this.isInit = false;
        this.fgColor = null ;
        // main color
        this.pColor = null ;
        // previous color
        this.dH = null ;
        // draw hook
        this.cH = null ;
        // change hook
        this.eH = null ;
        // cancel hook
        this.rH = null ;
        // release hook
        this.scale = 1;
        // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null ;
        // component div
        
        this.run = function() {
            var cf = function(e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s._carve().init();
                s._configure()
                ._draw();
            }
            ;
            
            if (this.$.data('kontroled'))
                return;
            this.$.data('kontroled', true);
            
            this.extend();
            this.o = $.extend({
                // Config
                min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                stopper: true,
                readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),
                
                // UI
                cursor: this.$.data('cursor') === true && 30 
                || this.$.data('cursor') || 0,
                thickness: this.$.data('thickness') 
                && Math.max(Math.min(this.$.data('thickness'), 1), 0.01) 
                || 0.35,
                lineCap: this.$.data('linecap') || 'butt',
                width: this.$.data('width') || 200,
                height: this.$.data('height') || 200,
                displayInput: this.$.data('displayinput') == null  || this.$.data('displayinput'),
                displayPrevious: this.$.data('displayprevious'),
                fgColor: this.$.data('fgcolor') || '#87CEEB',
                inputColor: this.$.data('inputcolor'),
                font: this.$.data('font') || 'Arial',
                fontWeight: this.$.data('font-weight') || 'bold',
                inline: false,
                step: this.$.data('step') || 1,
                rotation: this.$.data('rotation'),
                
                // Hooks
                draw: null ,
                // function () {}
                change: null ,
                // function (value) {}
                cancel: null ,
                // function () {}
                release: null ,
                // function (value) {}
                
                // Output formatting, allows to add unit: %, ms ...
                format: function(v) {
                    return v;
                },
                parse: function(v) {
                    return parseFloat(v);
                }
            }, this.o
            );
            
            // finalize options
            this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }
            
            // routing value
            if (this.$.is('fieldset')) {
                
                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input');
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = s.o.parse($this.val());
                    
                    $this.bind(
                    'change blur', 
                    function() {
                        var val = {};
                        val[k] = $this.val();
                        s.val(s._validate(val));
                    }
                    );
                }
                );
                this.$.find('legend').remove();
            } else {
                
                // input = integer
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === '' && (this.v = this.o.min);
                this.$.bind(
                'change blur', 
                function() {
                    s.val(s._validate(s.o.parse(s.$.val())));
                }
                );
            
            }
            
            !this.o.displayInput && this.$.hide();
            
            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });
            
            // wraps all elements in a div
            // add to DOM before Canvas init is triggered
            this.$div = $('<div style="' 
            + (this.o.inline ? 'display:inline;' : '') 
            + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;' 
            + '"></div>');
            
            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();
            
            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }
            
            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null ;
            
            if (!this.c) {
                throw {
                    name: "CanvasNotSupportedException",
                    message: "Canvas not supported. Please use excanvas on IE8.0.",
                    toString: function() {
                        return this.name + ": " + this.message
                    }
                }
            }
            
            // hdpi support
            this.scale = (window.devicePixelRatio || 1) / (
            this.c.webkitBackingStorePixelRatio || 
            this.c.mozBackingStorePixelRatio || 
            this.c.msBackingStorePixelRatio || 
            this.c.oBackingStorePixelRatio || 
            this.c.backingStorePixelRatio || 1
            );
            
            // detects relative width / height
            this.relativeWidth = this.o.width % 1 !== 0 
            && this.o.width.indexOf('%');
            this.relativeHeight = this.o.height % 1 !== 0 
            && this.o.height.indexOf('%');
            this.relative = this.relativeWidth || this.relativeHeight;
            
            // computes size and carves the component
            this._carve();
            
            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }
            
            // binds configure event
            this.$
            .bind("configure", cf)
            .parent()
            .bind("configure", cf);
            
            // finalize init
            this._listen()
            ._configure()
            ._xy()
            .init();
            
            this.isInit = true;
            
            this.$.val(this.o.format(this.v));
            this._draw();
            
            return this;
        }
        ;
        
        this._carve = function() {
            if (this.relative) {
                var w = this.relativeWidth ? 
                this.$div.parent().width() * 
                parseInt(this.o.width) / 100 
                : this.$div.parent().width()
                  , 
                h = this.relativeHeight ? 
                this.$div.parent().height() * 
                parseInt(this.o.height) / 100 
                : this.$div.parent().height();
                
                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }
            
            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });
            
            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });
            
            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }
            
            return this;
        }
        
        this._draw = function() {
            
            // canvas pre-rendering
            var d = true;
            
            s.g = s.c;
            
            s.clear();
            
            s.dH && (d = s.dH());
            
            d !== false && s.draw();
        }
        ;
        
        this._touch = function(e) {
            var touchMove = function(e) {
                var v = s.xy2val(
                e.originalEvent.touches[s.t].pageX, 
                e.originalEvent.touches[s.t].pageY
                );
                
                if (v == s.cv)
                    return;
                
                if (s.cH && s.cH(v) === false)
                    return;
                
                s.change(s._validate(v));
                s._draw();
            }
            ;
            
            // get touches index
            this.t = k.c.t(e);
            
            // First touch
            touchMove(e);
            
            // Touch events listeners
            k.c.d
            .bind("touchmove.k", touchMove)
            .bind(
            "touchend.k", 
            function() {
                k.c.d.unbind('touchmove.k touchend.k');
                s.val(s.cv);
            }
            );
            
            return this;
        }
        ;
        
        this._mouse = function(e) {
            var mouseMove = function(e) {
                var v = s.xy2val(e.pageX, e.pageY);
                
                if (v == s.cv)
                    return;
                
                if (s.cH && (s.cH(v) === false))
                    return;
                
                s.change(s._validate(v));
                s._draw();
            }
            ;
            
            // First click
            mouseMove(e);
            
            // Mouse events listeners
            k.c.d
            .bind("mousemove.k", mouseMove)
            .bind(
            // Escape key cancel current change
            "keyup.k", 
            function(e) {
                if (e.keyCode === 27) {
                    k.c.d.unbind("mouseup.k mousemove.k keyup.k");
                    
                    if (s.eH && s.eH() === false)
                        return;
                    
                    s.cancel();
                }
            }
            )
            .bind(
            "mouseup.k", 
            function(e) {
                k.c.d.unbind('mousemove.k mouseup.k keyup.k');
                s.val(s.cv);
            }
            );
            
            return this;
        }
        ;
        
        this._xy = function() {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;
            
            return this;
        }
        ;
        
        this._listen = function() {
            if (!this.o.readOnly) {
                this.$c
                .bind(
                "mousedown", 
                function(e) {
                    e.preventDefault();
                    s._xy()._mouse(e);
                }
                )
                .bind(
                "touchstart", 
                function(e) {
                    e.preventDefault();
                    s._xy()._touch(e);
                }
                );
                
                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }
            
            if (this.relative) {
                $(window).resize(function() {
                    s._carve().init();
                    s._draw();
                }
                );
            }
            
            return this;
        }
        ;
        
        this._configure = function() {
            
            // Hooks
            if (this.o.draw)
                this.dH = this.o.draw;
            if (this.o.change)
                this.cH = this.o.change;
            if (this.o.cancel)
                this.eH = this.o.cancel;
            if (this.o.release)
                this.rH = this.o.release;
            
            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }
            
            return this;
        }
        ;
        
        this._clear = function() {
            this.$c[0].width = this.$c[0].width;
        }
        ;
        
        this._validate = function(v) {
            var val = (~~(((v < 0) ? -0.5 : 0.5) + (v / this.o.step))) * this.o.step;
            return Math.round(val * 100) / 100;
        }
        ;
        
        // Abstract methods
        this.listen = function() {}
        ;
        // on start, one time
        this.extend = function() {}
        ;
        // each time configure triggered
        this.init = function() {}
        ;
        // each time configure triggered
        this.change = function(v) {}
        ;
        // on change
        this.val = function(v) {}
        ;
        // on release
        this.xy2val = function(x, y) {}
        ;
        //
        this.draw = function() {}
        ;
        // on change / on release
        this.clear = function() {
            this._clear();
        }
        ;
        
        // Utils
        this.h2rgba = function(h, a) {
            var rgb;
            h = h.substring(1, 7)
            rgb = [
            parseInt(h.substring(0, 2), 16), 
            parseInt(h.substring(2, 4), 16), 
            parseInt(h.substring(4, 6), 16)
            ];
            
            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        }
        ;
        
        this.copy = function(f, t) {
            for (var i in f) {
                t[i] = f[i];
            }
        }
        ;
    }
    ;
    
    
    /**
     * k.Dial
     */
    k.Dial = function() {
        k.o.call(this);
        
        this.startAngle = null ;
        this.xy = null ;
        this.radius = null ;
        this.lineWidth = null ;
        this.cursorExt = null ;
        this.w2 = null ;
        this.PI2 = 2 * Math.PI;
        
        this.extend = function() {
            this.o = $.extend({
                bgColor: this.$.data('bgcolor') || '#EEEEEE',
                angleOffset: this.$.data('angleoffset') || 0,
                angleArc: this.$.data('anglearc') || 360,
                inline: true
            }, this.o);
        }
        ;
        
        this.val = function(v, triggerRelease) {
            if (null  != v) {
                
                // reverse format
                v = this.o.parse(v);
                
                if (triggerRelease !== false 
                && v != this.v 
                && this.rH 
                && this.rH(v) === false) {
                    return;
                }
                
                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw();
            } else {
                return this.v;
            }
        }
        ;
        
        this.xy2val = function(x, y) {
            var a, ret;
            
            a = Math.atan2(
            x - (this.x + this.w2), 
            -(y - this.y - this.w2)
            ) - this.angleOffset;
            
            if (this.o.flip) {
                a = this.angleArc - a - this.PI2;
            }
            
            if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
                
                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }
            
            ret = (a * (this.o.max - this.o.min) / this.angleArc) + this.o.min;
            
            this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));
            
            return ret;
        }
        ;
        
        this.listen = function() {
            
            // bind MouseWheel
            var s = this, mwTimerStop, 
            mwTimerRelease, 
            mw = function(e) {
                e.preventDefault();
                
                var ori = e.originalEvent
                  , 
                deltaX = ori.detail || ori.wheelDeltaX
                  , 
                deltaY = ori.detail || ori.wheelDeltaY
                  , 
                v = s._validate(s.o.parse(s.$.val())) 
                + (
                deltaX > 0 || deltaY > 0 
                ? s.o.step 
                : deltaX < 0 || deltaY < 0 ? -s.o.step : 0
                );
                
                v = max(min(v, s.o.max), s.o.min);
                
                s.val(v, false);
                
                if (s.rH) {
                    // Handle mousewheel stop
                    clearTimeout(mwTimerStop);
                    mwTimerStop = setTimeout(function() {
                        s.rH(v);
                        mwTimerStop = null ;
                    }
                    , 100);
                    
                    // Handle mousewheel releases
                    if (!mwTimerRelease) {
                        mwTimerRelease = setTimeout(function() {
                            if (mwTimerStop)
                                s.rH(v);
                            mwTimerRelease = null ;
                        }
                        , 200);
                    }
                }
            }
            , 
            kval, 
            to, 
            m = 1, 
            kv = {
                37: -s.o.step,
                38: s.o.step,
                39: s.o.step,
                40: -s.o.step
            };
            
            this.$
            .bind(
            "keydown", 
            function(e) {
                var kc = e.keyCode;
                
                // numpad support
                if (kc >= 96 && kc <= 105) {
                    kc = e.keyCode = kc - 48;
                }
                
                kval = parseInt(String.fromCharCode(kc));
                
                if (isNaN(kval)) {
                    (kc !== 13)// enter
                     
                    && kc !== 8 // bs
                     
                    && kc !== 9 // tab
                     
                    && kc !== 189// -
                     
                    && (kc !== 190 
                    || s.$.val().match(/\./))// . allowed once
                     
                    && e.preventDefault();
                    
                    // arrows
                    if ($.inArray(kc, [37, 38, 39, 40]) > -1) {
                        e.preventDefault();
                        
                        var v = s.o.parse(s.$.val()) + kv[kc] * m;
                        s.o.stopper && (v = max(min(v, s.o.max), s.o.min));
                        
                        s.change(s._validate(v));
                        s._draw();
                        
                        // long time keydown speed-up
                        to = window.setTimeout(function() {
                            m *= 2;
                        }
                        , 30);
                    }
                }
            }
            )
            .bind(
            "keyup", 
            function(e) {
                if (isNaN(kval)) {
                    if (to) {
                        window.clearTimeout(to);
                        to = null ;
                        m = 1;
                        s.val(s.$.val());
                    }
                } else {
                    // kval postcond
                    (s.$.val() > s.o.max && s.$.val(s.o.max)) 
                    || (s.$.val() < s.o.min && s.$.val(s.o.min));
                }
            }
            );
            
            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        }
        ;
        
        this.init = function() {
            if (this.v < this.o.min 
            || this.v > this.o.max) {
                this.v = this.o.min;
            }
            
            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;
            
            this.o.angleOffset 
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
            
            this.o.angleArc 
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
            
            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;
            
            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            
            var s = max(
            String(Math.abs(this.o.max)).length, 
            String(Math.abs(this.o.min)).length, 
            2
            ) + 2;
            
            this.o.displayInput 
            && this.i.css({
                'width': ((this.w / 2 + 4) >> 0) + 'px',
                'height': ((this.w / 3) >> 0) + 'px',
                'position': 'absolute',
                'vertical-align': 'middle',
                'margin-top': ((this.w / 3) >> 0) + 'px',
                'margin-left': '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                'border': 0,
                'background': 'none',
                'font': this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font,
                'text-align': 'center',
                'color': this.o.inputColor || this.o.fgColor,
                'padding': '0px',
                '-webkit-appearance': 'none'
            }) || this.i.css({
                'width': '0px',
                'visibility': 'hidden'
            });
        }
        ;
        
        this.change = function(v) {
            this.cv = v;
            this.$.val(this.o.format(v));
        }
        ;
        
        this.angle = function(v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        }
        ;
        
        this.arc = function(v) {
            var sa, ea;
            v = this.angle(v);
            if (this.o.flip) {
                sa = this.endAngle + 0.00001;
                ea = sa - v - 0.00001;
            } else {
                sa = this.startAngle - 0.00001;
                ea = sa + v + 0.00001;
            }
            this.o.cursor 
            && (sa = ea - this.cursorExt) 
            && (ea = ea + this.cursorExt);
            
            return {
                s: sa,
                e: ea,
                d: this.o.flip && !this.o.cursor
            };
        }
        ;
        
        this.draw = function() {
            var c = this.g, // context
            a = this.arc(this.cv), // Arc
            pa, // Previous arc
            r = 1;
            
            c.lineWidth = this.lineWidth;
            c.lineCap = this.lineCap;
            
            if (this.o.bgColor !== "none") {
                c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                c.stroke();
            }
            
            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                c.beginPath();
                c.strokeStyle = this.pColor;
                c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
                c.stroke();
                r = this.cv == this.v;
            }
            
            c.beginPath();
            c.strokeStyle = r ? this.o.fgColor : this.fgColor;
            c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
            c.stroke();
        }
        ;
        
        this.cancel = function() {
            this.val(this.v);
        }
        ;
    }
    ;
    
    $.fn.dial = $.fn.knob = function(o) {
        return this.each(
        function() {
            var d = new k.Dial();
            d.o = o;
            d.$ = $(this);
            d.run();
        }
        ).parent();
    }
    ;

}
));
;$(function() {
    function t(t, e, i) {
        this._sharpType = "text",
        this._position = t,
        this._editor = e,
        this._defaultOptions = $.extend({}, i),
        this._init()
    }
    $.extend(t.prototype, {
        select: function() {
            var t = this._editor;
            t.enableTextTools(),
            t.setTextOption(this._getOptionByTools())
        },
        unselect: function() {
            this._$dom,
            this._editor
        },
        getDom: function() {
            return this._$dom
        },
        getToolsDom: function() {
            return this._$toolsDom
        },
        resizeCallBack: function() {},
        dispose: function() {
            this._$dom.remove()
        },
        getSharpType: function() {
            return this._sharpType
        },
        _init: function() {
            this._createDom(),
            this._createSharp(),
            this._createTools(),
            this._editor.appendEditor(this, {
                useResize: !0,
                useMove: !0
            }),
            this.select()
        },
        _createDom: function() {
            var t, e = $('<div class="grid-sharp sharp-animation sharp-text">文字内容</div>'), i = this._editor, s = this._position, o = i.getGrid().getGridWidth(), a = this._defaultOptions;
            t = a.rect ? a.rect : a.rect || {
                left: s.left,
                top: s.top,
                width: 10 * o,
                height: 4 * o
            },
            e.css(t),
            this._$dom = e
        },
        _createSharp: function() {
            var t = this
              , e = this._defaultOptions
              , i = e.options ? e.options.data : null ;
            require(["text"], function(s) {
                var o = new s($.extend({
                    dom: t._$dom[0],
                    data: i || {
                        rate: 5e3
                    },
                    content: "文字内容"
                }, e.options));
                t._text = o
            }
            )
        },
        _createTools: function() {
            var t = this._defaultOptions.options
              , e = t && t.data ? t.data : {}
              , i = "<div><h4>文字类型</h4>";
            i += '<form><label class="label-block"><input type="radio" value="1" name="text-type" class="j_type" ' + (e.dsId ? "" : "checked") + " />固定文字</label>",
            i += '<label class="label-block"><input type="radio" value="2" name="text-type" class="j_type" ' + (e.dsId ? "checked" : "") + " />数据流值</label></form>",
            i += '<div class="j_content_wrapper ' + (e.dsId ? "hide" : "") + '"><h4>文字内容</h4><label class="label-block"><input type="text" class="j_content input-block" value="' + (t ? s.escapeHTML(t.content) : "文字内容") + '"></label></div>',
            i += '<div class="j_ds_wrapper ' + (e.dsId ? "" : "hide") + '"><h4>选择数据流</h4><select class="j_device_select"><option value="">--选择设备--</option>';
            for (var o = this._editor.getDeviceList(), a = 0; a < o.length; a++) {
                var n = o[a];
                i += '<option value="' + n.id + '">' + n.name + "</option>"
            }
            i += "</select>",
            i += '<span class="j_ds_select_wrapper"></span>',
            i += '<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label></span>',
            i += '<label class="label-block">当数据流无值时显示<br /><input type="text" class="j_default input-block" value="' + (e && e.dftText ? e.dftText : "暂无数据") + '"></label>',
            i += "</div></div>";
            var l = $(i)
              , d = this;
            if (l.on("change", "select,input", function() {
                d._text.setOption(d._getOptionByTools()),
                d._editor.changed()
            }
            ).find(".j_type").on("change", function() {
                var t = l.find(".j_type:checked").val();
                l.find(".j_content_wrapper")["1" == t ? "show" : "hide"](),
                l.find(".j_ds_wrapper")["1" == t ? "hide" : "show"](),
                d._text.setOption(d._getOptionByTools()),
                d._editor.changed()
            }
            ),
            this._$toolsDom = l,
            this._defaultOptions.options) {
                var r = this._defaultOptions.options;
                l.find(".j_ds_select").val(e.dsId),
                l.find(".j_rate").val(e.rate / 1e3),
                r.data && r.data.dsId && (this._$toolsDom.find(".j_device_select").val(r.data.deviceId),
                this._editor.loadDataStreamForSharp(this, r.data.dsId))
            }
        },
        _getOptionByTools: function() {
            var t = this._$toolsDom
              , e = this._$dom
              , i = {};
            i.content = t.find(".j_content").val(),
            i.fontSize = parseInt(e.css("font-size") || 12),
            "bold" == e.css("font-weight") && (i.bold = 1),
            "italic" == e.css("font-style") && (i.italic = 1),
            "underline" == e.css("text-decoration") && (i.underline = 1),
            i.align = e.css("text-align"),
            i.color = this._editor.rgb2hex(e.css("color"));
            var s = t.find(".j_type:checked").val();
            if (i.type = s,
            2 == s) {
                var o = {}
                  , a = +t.find(".j_rate").val();
                !isNaN(a) && a > 0 ? 3 > a && (IOT.tips("刷新频率最快为3秒", "warning"),
                t.find(".j_rate").val(3),
                a = 3) : (t.find(".j_rate").val(5),
                a = 5),
                o.rate = 1e3 * parseInt(a),
                o.deviceId = t.find(".j_device_select").val(),
                o.dsId = t.find(".j_ds_select").val(),
                o.dftText = t.find(".j_default").val(),
                i.data = o
            }
            return i
        }
    }),
    sharpEditor.registerEditor("text", t)
}
);
;$(function() {
    function e(e, t, i) {
        this._sharpType = "lineChart",
        this._position = e,
        this._editor = t,
        this._defaultOptions = $.extend({}, i),
        this._init()
    }
    $.extend(e.prototype, {
        select: function() {
            this._editor.disableTextTools()
        },
        unselect: function() {},
        getDom: function() {
            return this._$dom
        },
        getToolsDom: function() {
            return this._$toolsDom
        },
        resizeCallBack: function() {
            this._lineChart && this._lineChart.getChart().resize()
        },
        dispose: function() {
            this._lineChart && this._lineChart.dispose(),
            this._$dom.remove()
        },
        getSharpType: function() {
            return this._sharpType
        },
        _init: function() {
            this._createDom(),
            this._createSharp(),
            this._createTools(),
            this._editor.appendEditor(this, {
                useResize: !0,
                useMove: !0
            }),
            this.select()
        },
        _createDom: function() {
            var e, t = this._editor, i = this._position, l = t.getGrid().getGridWidth(), a = this._defaultOptions, s = $('<div class="grid-sharp"><div class="sharp-loading" style="padding-top:' + 2.2 * l + 'px"><span class="icon-spin5 animate-spin"></span>加载中</div></div>');
            e = a.rect ? a.rect : {
                left: i.left,
                top: i.top,
                width: 25 * l,
                height: 18 * l
            },
            s.css(e),
            this._$dom = s
        },
        _createSharp: function() {
            var e = this
              , t = this._editor
              , i = this._defaultOptions
              , l = i.options ? i.options.data : null 
              , a = i.options ? i.options.chart : null ;
            t.requireEcharts(function() {
                require(["linechart"], function(t) {
                    var i = new t({
                        dom: e._$dom[0],
                        chart: a || {},
                        data: l || {
                            chartSize: 4,
                            rate: 5e3
                        }
                    });
                    e._lineChart = i
                }
                )
            }
            )
        },
        _createTools: function() {
            for (var e = '<div><h4>选择数据流</h4><select class="j_device_select"><option value="">--选择设备--</option>', t = this._editor.getDeviceList(), i = 0; i < t.length; i++) {
                var l = t[i];
                e += '<option value="' + l.id + '">' + l.name + "</option>"
            }
            e += "</select>",
            e += '<span class="j_ds_select_wrapper"></span>',
            e += "<hr><h4>曲线图样式</h4>",
            e += '<label class="label-block">标题<input type="text" size="10" class="j_title input-block"></label>',
            e += '<label class="label-inline"><input type="checkbox" class="j_x" name="x">X轴值</label>',
            e += '<label class="label-inline"><input type="checkbox" class="j_y" name="y">Y轴值</label>',
            e += '<label class="label-inline"><input type="checkbox" class="j_xline" name="x">X轴线段</label>',
            e += '<label class="label-inline"><input type="checkbox" class="j_yline" name="y">Y轴线段</label>',
            e += '<label class="label-input">x轴坐标点数<input type="number" value="4" class="j_size input-text" min="1">个</label>',
            e += '<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label>',
            e += '<label class="label-block"><input type="checkbox" class="j_grid" name="grid">显示网格</label>';
            var a = {
                optText: ["蓝色系列", "淡蓝系列", "绿色系列", "红色系列", "灰色系列", "紫色系列", "墨绿系列"],
                optValue: ["blueStyle", "lightBlue", "greenStyle", "redStyle", "grayStyle", "purpleStyle", "blagreenStyle"]
            };
            this.theme = {
                blueStyle: ["#076bcb", "#076bcb", "#076bcb"],
                lightBlue: ["#a7d2f1", "#a7d2f1", "#a7d2f1"],
                redStyle: ["#c12e34", "#c12e34", "#c12e34"],
                greenStyle: ["#408829", "#408829", "#408829"],
                grayStyle: ["#757575", "#c7c7c7", "#000"],
                purpleStyle: ["#b6a2de", "#b6a2de", "#b6a2de"],
                blagreenStyle: ["#2ec7c9", "#2ec7c9", "#2ec7c9"]
            };
            var s = "";
            for (i = 0; i < a.optText.length; i++)
                s += '<option value="' + a.optValue[i] + '" style="background:' + this.theme[a.optValue[i]][0] + '">' + a.optText[i] + "</option>";
            e += '<label class="label-block">图表主题：<select class="j_color">' + s + "</select></label>",
            e += "</div>";
            var o = $(e)
              , n = this;
            if (o.on("change", "select,input", function() {
                n._lineChart.setOption(n._getOptionByTools()),
                n._editor.changed()
            }
            ),
            this._$toolsDom = o,
            this._defaultOptions.options) {
                var c = this._defaultOptions.options;
                this._$toolsDom.find(".j_title").val(c.chart.title.text),
                this._$toolsDom.find(".j_rate").val(c.data.rate / 1e3),
                this._$toolsDom.find(".j_color").val(c.data.color),
                this._$toolsDom.find(".j_device_select").val(c.data.deviceId),
                this._$toolsDom.find(".j_size").val(c.data.chartSize),
                this._$toolsDom.find(".j_grid")[0].checked = c.data.grid,
                this._$toolsDom.find(".j_xline")[0].checked = c.data.xline,
                this._$toolsDom.find(".j_yline")[0].checked = c.data.yline,
                this._$toolsDom.find(".j_x")[0].checked = c.data.x,
                this._$toolsDom.find(".j_y")[0].checked = c.data.y,
                c.data && c.data.dsId && this._editor.loadDataStreamForSharp(this, c.data.dsId)
            }
        },
        _getOptionByTools: function() {
            var e = this._$toolsDom
              , t = {
                deviceId: e.find(".j_device_select").val(),
                dsId: e.find(".j_ds_select").val()
            }
              , i = e.find(".j_size").val();
            !isNaN(i) && i > 0 ? 1 > i && (e.find(".j_size").val(1),
            i = 1) : (e.find(".j_size").val(5),
            i = 5),
            t.chartSize = i;

            global_data_jc = t;

            var l = +e.find(".j_rate").val();
            !isNaN(l) && l > 0 ? 3 > l && (IOT.tips("刷新频率最快为3秒", "warning"),
            e.find(".j_rate").val(3),
            l = 3) : (e.find(".j_rate").val(5),
            l = 5),
            t.rate = 1e3 * parseInt(l);
            var a = e.find(".j_grid")[0].checked ? 1 : 0;
            t.grid = e.find(".j_grid")[0].checked;
            var s = e.find(".j_xline")[0].checked ? !1 : !0;
            t.xline = e.find(".j_xline")[0].checked;
            var o = e.find(".j_yline")[0].checked ? !1 : !0;
            t.yline = e.find(".j_yline")[0].checked;
            var n = e.find(".j_x")[0].checked ? !1 : !0;
            t.x = e.find(".j_x")[0].checked;
            var c = e.find(".j_y")[0].checked ? !1 : !0;
            t.y = e.find(".j_y")[0].checked;
            var r = e.find(".j_color").val();
            t.color = r;



            var d = this.theme[r][0]
              , h = this.theme[r][1]
              , _ = this.theme[r][2]
              , p = {
                chart: {
                    title: {
                        text: e.find(".j_title").val() || "",
                        subtext: "",
                        textStyle: {
                            color: _
                        }
                    },
                    xAxis: [{
                        axisLine: {
                            show: s,
                            lineStyle: {
                                color: h
                            }
                        },
                        axisTick: {
                            show: s,
                            lineStyle: {
                                color: h
                            }
                        },
                        axisLabel: {
                            show: n,
                            textStyle: {
                                color: _
                            }
                        },
                        splitLine: {
                            show: a
                        }
                    }],
                    grid: {
                        borderWidth: a
                    },
                    yAxis: [{
                        axisLine: {
                            show: o,
                            lineStyle: {
                                color: h
                            }
                        },
                        axisTick: {
                            show: o,
                            lineStyle: {
                                color: h
                            }
                        },
                        axisLabel: {
                            show: c,
                            textStyle: {
                                color: _
                            }
                        },
                        splitLine: {
                            show: a
                        }
                    }],
                    series: [{
                        itemStyle: {
                            normal: {
                                color: d,
                                label: {
                                    show: !0,
                                    textStyle: {
                                        fontSize: "14",
                                        fontFamily: "微软雅黑",
                                        fontWeight: "bold"
                                    }
                                }
                            }
                        }
                    }]
                },
                data: t
            };
            return p
        }
    }),
    sharpEditor.registerEditor("lineChart", e)
}
);
/* ;$(function(){function e(e,t,i){this._sharpType="barChart",this._position=e,this._defaultOptions=$.extend({},i),this._editor=t,this._init()}$.extend(e.prototype,{select:function(){this._editor.disableTextTools()},unselect:function(){},getDom:function(){return this._$dom},getToolsDom:function(){return this._$toolsDom},resizeCallBack:function(){this._barChart&&this._barChart.getChart().resize()},dispose:function(){this._barChart&&this._barChart.dispose(),this._$dom.remove()},getSharpType:function(){return this._sharpType},_init:function(){this._createDom(),this._createSharp(),this._createTools(),this._editor.appendEditor(this,{useResize:!0,useMove:!0}),this.select()},_createDom:function(){var e,t=this._editor,i=this._position,a=t.getGrid().getGridWidth(),l=this._defaultOptions,s=$('<div class="grid-sharp"><div class="sharp-loading" style="padding-top:'+2.2*a+'px"><span class="icon-spin5 animate-spin"></span>加载中</div></div>');e=l.rect?l.rect:{left:i.left,top:i.top,width:25*a,height:18*a},s.css(e),this._$dom=s},_createSharp:function(){var e=this,t=e._editor,i=this._defaultOptions,a=i.options?i.options.data:null,l=i.options?i.options.chart:null;t.requireEcharts(function(){require(["barchart"],function(t){var i=new t({dom:e._$dom[0],chart:l||{},data:a||{chartSize:4,rate:5e3}});e._barChart=i})})},_createTools:function(){var e='<div><h4>选择数据流</h4><select class="j_device_select"><option value="">--选择设备--</option>',t=this._editor.getDeviceList();for(s=0;s<t.length;s++){var i=t[s];e+='<option value="'+i.id+'">'+i.name+"</option>"}e+="</select>",e+='<span class="j_ds_select_wrapper"></span>',e+='<label class="label-block">标题<input type="text" size="10" class="j_title input-block"></label>',e+='<label class="label-inline"><input type="checkbox" class="j_x" name="x">X轴值</label>',e+='<label class="label-inline"><input type="checkbox" class="j_y" name="y">Y轴值</label>',e+='<label class="label-inline"><input type="checkbox" class="j_xline" name="x">X轴线段</label>',e+='<label class="label-inline"><input type="checkbox" class="j_yline" name="y">Y轴线段</label>',e+="<hr><h4>数据流属性</h4>",e+='<label class="label-input">x轴坐标点数<input type="number" value="4" class="j_size input-text" min="1">个</label>',e+='<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label>',e+='<label class="label-input">柱条圆角幅度<input size="10" class="j_radius input-text" type="number" min="0" value="0">秒</label>',e+='<label class="label-block"><input type="checkbox" class="j_grid" name="grid">显示网格</label>';var a={optText:["蓝色系列","白色系列","淡蓝系列","绿色系列","红色系列","灰色系列","紫色系列","墨绿系列"],optValue:["blueStyle","whiteStyle","lightBlue","greenStyle","redStyle","grayStyle","purpleStyle","blagreenStyle"]};this.theme={blueStyle:["#076bcb","#076bcb","#076bcb"],whiteStyle:["#fff","#fff","#fff"],lightBlue:["#a7d2f1","#a7d2f1","#a7d2f1"],redStyle:["#c12e34","#c12e34","#c12e34"],greenStyle:["#408829","#408829","#408829"],grayStyle:["#757575","#c7c7c7","#000"],purpleStyle:["#b6a2de","#b6a2de","#b6a2de"],blagreenStyle:["#2ec7c9","#2ec7c9","#2ec7c9"]};for(var l="",s=0;s<a.optText.length;s++)l+='<option value="'+a.optValue[s]+'" style="background:'+this.theme[a.optValue[s]][0]+'">'+a.optText[s]+"</option>";e+='<label class="label-block">图表主题：<select class="j_color">'+l+"</select></label>",e+="</div>";var o=$(e),n=this;if(o.on("change","select,input",function(){n._barChart.setOption(n._getOptionByTools()),n._editor.changed()}),this._$toolsDom=o,this._defaultOptions.options){var r=this._defaultOptions.options;this._$toolsDom.find(".j_title").val(r.chart.title.text),this._$toolsDom.find(".j_rate").val(r.data.rate/1e3),this._$toolsDom.find(".j_color").val(r.data.color),this._$toolsDom.find(".j_radius").val(r.data.radius),this._$toolsDom.find(".j_ds_select").val(r.data.dsId),this._$toolsDom.find(".j_size").val(r.data.chartSize),this._$toolsDom.find(".j_grid")[0].checked=r.data.grid,this._$toolsDom.find(".j_xline")[0].checked=r.data.xline,this._$toolsDom.find(".j_yline")[0].checked=r.data.yline,this._$toolsDom.find(".j_x")[0].checked=r.data.x,this._$toolsDom.find(".j_y")[0].checked=r.data.y,r.data&&r.data.dsId&&(this._$toolsDom.find(".j_device_select").val(r.data.deviceId),this._editor.loadDataStreamForSharp(this,r.data.dsId))}},_getOptionByTools:function(){var e=this._$toolsDom,t={deviceId:e.find(".j_device_select").val(),dsId:e.find(".j_ds_select").val()},i=e.find(".j_size").val();!isNaN(i)&&i>0?1>i&&(e.find(".j_size").val(1),i=1):(e.find(".j_size").val(5),i=5),t.chartSize=i;var a=e.find(".j_rate").val();!isNaN(a)&&a>0?3>a&&(IOT.tips("刷新频率最快为3秒","warning"),e.find(".j_rate").val(3),a=3):(e.find(".j_rate").val(5),a=5),t.rate=1e3*parseInt(a);var l=parseInt(e.find(".j_radius").val());!isNaN(l)&&l>=0||(e.find(".j_radius").val(0),l=0),t.radius=l;var s=e.find(".j_grid")[0].checked?1:0;t.grid=e.find(".j_grid")[0].checked;var o=e.find(".j_xline")[0].checked?!1:!0;t.xline=e.find(".j_xline")[0].checked;var n=e.find(".j_yline")[0].checked?!1:!0;t.yline=e.find(".j_yline")[0].checked;var r=e.find(".j_x")[0].checked?!1:!0;t.x=e.find(".j_x")[0].checked;var c=e.find(".j_y")[0].checked?!1:!0;t.y=e.find(".j_y")[0].checked;var d=e.find(".j_color").val();t.color=d;var h=this.theme[d][0],_=this.theme[d][1],p=this.theme[d][2],u={chart:{title:{text:e.find(".j_title").val()||"",textStyle:{color:p}},xAxis:[{axisLine:{show:o,lineStyle:{color:_}},axisTick:{show:o,lineStyle:{color:_}},axisLabel:{show:r,textStyle:{color:p}},splitLine:{show:s}}],grid:{borderWidth:s},yAxis:[{axisLine:{show:n,lineStyle:{color:_}},axisTick:{show:n,lineStyle:{color:_}},axisLabel:{show:c,textStyle:{color:p}},splitLine:{show:s}}],series:[{itemStyle:{normal:{color:h,barBorderRadius:l,label:{show:!0,textStyle:{fontSize:"14",fontFamily:"微软雅黑",fontWeight:"bold"}}},emphasis:{barBorderRadius:l}}}]},data:t};return u}}),sharpEditor.registerEditor("barChart",e)}); */
/* ;$(function(){function t(t,e,l){this._sharpType="gaugeChart",this._position=t,this._defaultOptions=$.extend({},l),this._editor=e,this._init()}function e(t){this.oldStyle={startAngle:225,endAngle:-45,center:["50%","50%"],radius:[0,"95%"],axisLine:{show:!0,lineStyle:{color:[[.2,t[0]],[.8,t[1]],[1,t[2]]],width:10}},splitLine:{length:30,lineStyle:{color:"auto"}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},pointer:{length:"80%",width:6,color:"auto"},axisLabel:{textStyle:{color:"auto"}},title:{offsetCenter:[0,"-40%"],textStyle:{color:"auto"}},detail:{offsetCenter:[0,"40%"]}},this.oneStyle={startAngle:180,endAngle:0,center:["50%","80%"],radius:"150%",axisLine:{show:!0,lineStyle:{color:[[.2,t[0]],[.8,t[1]],[1,t[2]]],width:"50%"}},splitLine:{length:20,lineStyle:{color:t[3]}},axisTick:{length:10,splitNumber:2,lineStyle:{color:t[3]}},axisLabel:{textStyle:{color:t[3]}},pointer:{width:"30%",length:"80%",color:"rgba(255, 255, 255, 0.8)"},detail:{offsetCenter:[0,"-15%"]},title:{offsetCenter:[0,"-65%"],textStyle:{color:t[3]}}},this.twoStyle={startAngle:140,endAngle:-140,center:["50%","50%"],radius:[0,"95%"],axisLine:{show:!0,lineStyle:{color:[[.2,t[0]],[.4,t[1]],[.8,t[2]],[1,t[4]]],width:60}},splitLine:{length:20,lineStyle:{color:t[3]}},axisTick:{length:10,splitNumber:2,lineStyle:{color:t[3]}},axisLabel:{margin:0,textStyle:{color:t[3]}},pointer:{width:"30%",length:"90%",color:"rgba(255, 255, 255, 0.7)"},title:{offsetCenter:[0,"-20%"],textStyle:{color:"auto"}},detail:{offsetCenter:[0,"10%"]}}}$.extend(t.prototype,{select:function(){this._editor.disableTextTools()},unselect:function(){},getDom:function(){return this._$dom},getToolsDom:function(){return this._$toolsDom},dispose:function(){this._gaugeChart&&this._gaugeChart.dispose(),this._$dom.remove()},resizeCallBack:function(){this._gaugeChart&&this._gaugeChart.getChart().resize()},getSharpType:function(){return this._sharpType},_init:function(){this._createDom(),this._createSharp(),this._createTools(),this._editor.appendEditor(this,{useResize:!0,useMove:!0}),this.select()},_createDom:function(){var t,e=this._editor,l=this._position,i=e.getGrid().getGridWidth(),o=this._defaultOptions,a=$('<div class="grid-sharp"><div class="sharp-loading" style="padding-top:'+2.2*i+'px"><span class="icon-spin5 animate-spin"></span>加载中</div></div>');t=o.rect?o.rect:{left:l.left,top:l.top,width:25*i,height:25*i},a.css(t),this._$dom=a},_createSharp:function(){var t=this,e=this._editor,l=this._defaultOptions,i=l.options?l.options.data:null,o=l.options?l.options.chart:null;e.requireEcharts(function(){require(["gaugechart"],function(e){var l=new e({dom:t._$dom[0],chart:o||{},data:i||{chartSize:4,rate:5e3}});t._gaugeChart=l,t._$dom.css("opacity",1)})})},_createTools:function(){var t='<div><h4>选择数据流</h4><select class="j_device_select"><option value="">--选择设备--</option>',e=this._editor.getDeviceList();for(a=0;a<e.length;a++){var l=e[a];t+='<option value="'+l.id+'">'+l.name+"</option>"}t+="</select>",t+='<span class="j_ds_select_wrapper"></span>',t+='<label class="label-block">标题<input type="text" size="10" class="j_title input-block"></label>',t+="<hr><h4>数据流属性</h4>",t+='<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label>',t+='<label class="label-input">表盘最小值<input type="number" class="j_min input-text" value="0"></label>',t+='<label class="label-input">表盘最大值<input type="number" class="j_max input-text" value="100"></label>',t+='<label class="label-input">表盘单位<input type="text" class="j_unit input-text"></label>';for(var i={optText:["经典配色","浅色色系","红黄色系","红绿色系","灰色色系","红色色系","活泼色系"],optValue:["oldStyle","blueStyle","yeStyle","rgStyle","grayStyle","redStyle","liveStyle"]},o="",a=0;a<i.optText.length&&a<i.optValue.length;a++)o+='<option value="'+i.optValue[a]+'">'+i.optText[a]+"</option>";for(var s,n={optText:["经典样式","半圆样式","侧园样式"],optValue:["oldStyle","oneStyle","twoStyle"]},a=0;a<n.optText.length&&a<n.optValue.length;a++)s+='<option value="'+n.optValue[a]+'">'+n.optText[a]+"</option>";t+='<label>颜色主题：<select class="j_colorTheme">'+o+"</select></label>",t+='<label>样式主题：<select class="j_styleTheme">'+s+"</select></label>",t+="</div>";var r=$(t),c=this;if(r.on("change","input, select",function(){c._gaugeChart.setOption(c._getOptionByTools()),c._editor.changed()}),this._$toolsDom=r,this._defaultOptions.options){var d=this._defaultOptions.options.data;this._$toolsDom.find(".j_ds_select").val(d.dsId),this._$toolsDom.find(".j_title").val(d.title),this._$toolsDom.find(".j_rate").val(d.rate/1e3),this._$toolsDom.find(".j_max").val(d.max),this._$toolsDom.find(".j_min").val(d.min),this._$toolsDom.find(".j_unit").val(d.unit),this._$toolsDom.find(".j_colorTheme").val(d.color),this._$toolsDom.find(".j_styleTheme").val(d.theme),this._$toolsDom.find(".j_device_select").val(d.deviceId),this._editor.loadDataStreamForSharp(this,d.dsId)}},_getOptionByTools:function(){var t=this._$toolsDom,l={deviceId:t.find(".j_device_select").val(),dsId:t.find(".j_ds_select").val()},i=t.find(".j_rate").val();!isNaN(i)&&i>0?3>i&&(IOT.tips("刷新频率最快为3秒","warning"),t.find(".j_rate").val(3),i=3):(t.find(".j_rate").val(5),i=5),l.rate=1e3*parseInt(i);var o={oldStyle:["#228b22","#48b","#ff4500","#fff","#48b"],blueStyle:["#FFFFCC","#c4e3ff","#ff8aa8","#000","skyblue"],yeStyle:["#f34d0b","#ffe88d","#f34d0b","#000","#ffe88d"],rgStyle:["#b5c334","#27727b","#c1232b","#000","#27727b"],grayStyle:["#cbcbcb","#969696","#7f7f7f","#000","#969696"],redStyle:["#f16b4c","#d8361b","#99311c","#000","#d8361b"],liveStyle:["#44b7d3","#6b6455","#e42b6d","#000","#6b6455"]},a=t.find(".j_colorTheme").val();l.color=a;var s=o[a],n=t.find(".j_styleTheme").val();l.theme=n;var r=new e(s),c=r[n];l.title=t.find(".j_title").val(),l.min=parseFloat(t.find(".j_min").val())||0,l.max=parseFloat(t.find(".j_max").val())||100,l.unit=t.find(".j_unit").val()||"";var d={chart:{series:[c]},data:l,theme:n};return d}}),sharpEditor.registerEditor("gaugeChart",t)}); */

/* ;$(function(){function t(t,e,i){this._sharpType="switch",this._position=t,this._editor=e,this._defaultOptions=$.extend({},i),this._init()}$.extend(t.prototype,{select:function(){this._editor.disableTextTools()},unselect:function(){},getDom:function(){return this._$dom},getToolsDom:function(){return this._$toolsDom},resizeCallBack:function(){},dispose:function(){this._$dom.remove()},getSharpType:function(){return this._sharpType},_init:function(){this._createDom(),this._createSharp(),this._createTools(),this._editor.appendEditor(this,{useResize:!0,useMove:!0}),this.select()},_createDom:function(){var t,e=$('<div class="grid-sharp"></div>'),i=this._editor,s=this._position,o=i.getGrid().getGridWidth(),n=this._defaultOptions;t=n.rect?n.rect:n.rect||{left:s.left,top:s.top,width:10*o,height:10*o},e.css(t),this._$dom=e},_createSharp:function(){var t=this,e=this._defaultOptions,i=e.options?e.options.data:null;require(["switch"],function(s){t._switch=new s($.extend({dom:t._$dom[0],data:i||{rate:5e3}},e.options))})},_createTools:function(){for(var t='<div><h4>选择数据流</h4><select class="j_device_select"><option value="">--选择设备--</option>',e=this._editor.getDeviceList(),i=0;i<e.length;i++){var s=e[i];t+='<option value="'+s.id+'">'+s.name+"</option>"}t+="</select>",t+='<span class="j_ds_select_wrapper"></span>',t+="<hr><h4>数据流属性</h4>",t+='<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label>',t+='<label class="label-input" title="数据流的值为此值时代表开关为打开状态">开关开值<input type="text" class="j_on input-text" value="1"></label>',t+='<label class="label-input" title="数据流的值为此值时代表开关为关闭状态">开关关值<input type="text" class="j_off input-text" value="0"></label>';var o=$(t),n=this;if(o.on("change","select, input",function(){n._switch.setOption(n._getOptionByTools()),n._editor.changed()}),this._$toolsDom=o,this._defaultOptions.options){var a=this._defaultOptions.options.data;o.find(".j_ds_select").val(a.dsId),o.find(".j_rate").val(a.rate/1e3),o.find(".j_on").val(a.on),o.find(".j_off").val(a.off),this._$toolsDom.find(".j_device_select").val(a.deviceId),this._editor.loadDataStreamForSharp(this,a.dsId)}},_getOptionByTools:function(){var t=this._$toolsDom,e=(this._$dom,{}),i={},s=+t.find(".j_rate").val();return!isNaN(s)&&s>0?3>s&&(IOT.tips("刷新频率最快为3秒","warning"),t.find(".j_rate").val(3),s=3):(t.find(".j_rate").val(5),s=5),i.rate=1e3*parseInt(s),i.on=t.find(".j_on").val(),i.off=t.find(".j_off").val(),i.deviceId=t.find(".j_device_select").val(),i.dsId=t.find(".j_ds_select").val(),e.data=i,e}}),sharpEditor.registerEditor("switch",t)}); */
/* ;$(function(){function t(t,e,i){this._sharpType="knob",this._position=t,this._editor=e,this._defaultOptions=$.extend({},i),this._init()}$.extend(t.prototype,{select:function(){this._editor.disableTextTools()},unselect:function(){},getDom:function(){return this._$dom},getToolsDom:function(){return this._$toolsDom},resizeCallBack:function(){$(window).trigger("resize")},dispose:function(){this._$dom.remove()},getSharpType:function(){return this._sharpType},_init:function(){this._createDom(),this._createSharp(),this._createTools(),this._editor.appendEditor(this,{useResize:!0,useMove:!0}),this.select()},_createDom:function(){var t,e=$('<div class="grid-sharp"></div>'),i=this._editor,o=this._position,n=i.getGrid().getGridWidth(),l=this._defaultOptions;t=l.rect?l.rect:l.rect||{left:o.left,top:o.top,width:20*n,height:20*n},e.css(t),this._$dom=e},_createSharp:function(){var t=this,e=this._defaultOptions,i=e.options?e.options.data:null;require(["knob"],function(o){t._knob=new o($.extend({readOnly:!0,dom:t._$dom[0],data:i||{rate:5e3}},e.options))})},_createTools:function(){for(var t='<div><h4>选择数据流</h4><select class="j_device_select"><option value="">--选择设备--</option>',e=this._editor.getDeviceList(),i=0;i<e.length;i++){var o=e[i];t+='<option value="'+o.id+'">'+o.name+"</option>"}t+="</select>",t+='<span class="j_ds_select_wrapper"></span>',t+="<hr><h4>数据流属性</h4>",t+='<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label>',t+="<hr><h4>旋钮样式</h4>",t+='<label class="label-input">表盘最小值<input type="number" class="j_min input-text" value="1"></label>',t+='<label class="label-input">表盘最大值<input type="number" class="j_max input-text" value="100" style="width:50px"></label>',t+='<label class="label-input">步长<input type="number" class="j_step input-text" value="1"></label>',t+='<label class="label-input">表盘颜色：<input class="color-input j_knob_bg_color" value="#eee" /></label>',t+='<label class="label-input">旋钮颜色：<input class="color-input j_knob_fg_color" value="#ff9900" /></label>',t+='<label class="label-input">数字颜色：<input class="color-input j_knob_input_color" value="ff6600" /></label>',t+="</div>";var n=$(t),l=this;if(n.on("change","select, input",function(){l._knob.setOption(l._getOptionByTools()),l._editor.changed()}),this._$toolsDom=n,this._defaultOptions.options){var a=this._defaultOptions.options.data;n.find(".j_ds_select").val(a.dsId),n.find(".j_rate").val(a.rate/1e3),n.find(".j_max").val(a.max),n.find(".j_min").val(a.min),n.find(".j_step").val(a.step),n.find(".j_knob_bg_color").val(a.bgColor),n.find(".j_knob_fg_color").val(a.fgColor),n.find(".j_knob_input_color").val(a.inputColor),this._$toolsDom.find(".j_device_select").val(a.deviceId),this._editor.loadDataStreamForSharp(this,a.dsId)}n.find(".color-input").colorPicker({pickerDefault:"#000000",showHexField:!0}).on("change",function(){})},_getOptionByTools:function(){var t=this._$toolsDom,e=(this._$dom,{}),i={},o=+t.find(".j_rate").val();!isNaN(o)&&o>0?3>o&&(IOT.tips("刷新频率最快为3秒","warning"),t.find(".j_rate").val(3),o=3):(t.find(".j_rate").val(5),o=5);var n=t.find(".j_min");isNaN(n.val())&&n.val(1);var l=t.find(".j_max");isNaN(l.val())&&l.val(100);var a=t.find(".j_step");return isNaN(a.val())&&a.val(1),i.rate=1e3*parseInt(o),i.deviceId=t.find(".j_device_select").val(),i.dsId=t.find(".j_ds_select").val(),i.min=t.find(".j_min").val(),i.max=t.find(".j_max").val(),i.step=t.find(".j_step").val(),i.bgColor=t.find(".j_knob_bg_color").val(),i.fgColor=t.find(".j_knob_fg_color").val(),i.inputColor=t.find(".j_knob_input_color").val(),e.data=i,e}}),sharpEditor.registerEditor("knob",t)}); */
/* ;$(function(){function e(e,t,i){this._sharpType="imageChart",this._position=e,this._editor=t,this._defaultOptions=$.extend({},i),this._init()}$.extend(e.prototype,{select:function(){this._editor.disableTextTools()},unselect:function(){var e=this._editor;e.getResizeDom().data("resizer_targetrect_filter",null)},getDom:function(){return this._$dom},getToolsDom:function(){return this._$toolsDom},resizeCallBack:function(){},dispose:function(){this._uploader.destroy(),this._$dom.remove()},getSharpType:function(){return this._sharpType},_init:function(){this._createDom(),this._createSharp(),this._createTools(),this._editor.appendEditor(this,{useMove:!0,resizeClass:this._defaultOptions.options?"":"ui-selectable-onlymove"}),this.select()},_createDom:function(){var e,t=$('<div class="grid-sharp sharp-image"><p class="sharp-tips">请上传图片</p></div>'),i=this._position,s=this._editor,a=(s.getGrid().getGridWidth(),this._defaultOptions);e=a.rect?a.rect:{left:i.left,top:i.top,width:200,height:200},t.css(e),this._$dom=t,t.on("mousedown","img",function(e){e.preventDefault()})},_createSharp:function(){var e=this,t=this._defaultOptions,i=t.options?t.options.data:null;require(["imagechart"],function(t){var s=new t({dom:e._$dom[0],data:i||{rate:5e3}});e._imageChart=s,e._$toolsDom&&e._renderImage()})},_initUpload:function(){var e=this._$toolsDom.find(".j_btn"),t=this,i=this._$toolsDom.find(".upload-list"),s=WebUploader.create({swf:IOT.staticUrl+"/files/Uploader.swf",fileVal:"upfile",server:"http://"+IOT.host+"/device/imgup?domain=false",pick:e[0],auto:!0,accept:{title:"Images",extensions:"gif,jpg,jpeg,bmp,png",mimeTypes:"image/*"}});s.on("fileQueued",function(e){t._hasDataStream()||!t._$toolsDom.find(".item").length?i.append(t._getFileDom(e.id)):t._$toolsDom.find(".item").eq(0).replaceWith(t._getFileDom(e.id)),t._renderImage(),t._resetDrag()}),s.on("uploadProgress",function(e,t){var i=$("#"+e.id),s=i.find(".progress .meter");s.css("width",100*t+"%")}),s.on("uploadSuccess",function(e,i){var a=$("#"+e.id),o=a.find(".item-image");if(0==i.code&&i.data){var n=new Image;n.src=IOT.imageUrl+i.data.addr,n.setAttribute("data-url",i.data.addr),o.empty().append(n),a.find(".progress").hide(),t._editor.getResizeDom().removeClass("ui-selectable-onlymove"),t._$dom.attr("data-resizeclass",""),t._imageChart.setOption(t._getOptionByTools())}else a.remove(),s.removeFile(e,!0),t._renderImage(),IOT.tips("上传失败，请稍后再试","error")}),s.on("uploadError",function(e){var i=$("#"+e.id);i.remove(),s.removeFile(e,!0),t._renderImage(),IOT.tips("上传失败，请稍后再试","error")}),this._uploader=s,i.on("click",".upload-list-close",function(e){e.stopPropagation(),e.preventDefault();var i=$(this).closest(".item");i.remove(),t._renderImage(),s.removeFile(i.attr("id"),!0)})},_getFileDom:function(e,t,i){var s='<div id="'+e+'" class="item">';return s+='<div class="image-wrapper"><div class="item-image">',s+=t?'<img src="'+IOT.imageUrl+t+'" data-url="'+t+'">':'<i class="icon-spin5 animate-spin"></i>',s+="</div></div>",t||(s+='<div class="progress"><span class="meter"></span></div>'),i=i||"",s+='<label><h5>数据流值</h5><input name="dsval" type="text" size="3" value="'+i+'"></label><div class="item-first-info hide"><h5>默认图片</h5></div><span class="upload-list-close icon-cancel-circled"></span></div>',$(s)},_createTools:function(){var e=this._defaultOptions.options?this._defaultOptions.options.data:{},t="<div><h4>添加图片</h4>";t+='<label class="label-block"><div class="input-text input-title j_btn" style="width: 6em;height: 2em;" >上传图片</div></label>',t+='<label class="label-block"><input type="checkbox" class="j_switch_toggle" '+(e.dsId?"checked":"")+">通过数据流值显示图片</label>",t+='<span class="j_ds_options"><select class="j_device_select"><option value="">--选择设备--</option>';for(var i=this._editor.getDeviceList(),s=0;s<i.length;s++){var a=i[s];t+='<option value="'+a.id+'">'+a.name+"</option>"}t+="</select>",t+='<span class="j_ds_select_wrapper"></span>',t+='<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label></span>',t+="<hr><h4>图片列表</h4>",t+='<div class="upload-list clearfix"></div>',t+="</div>";var o=$(t);if(this._$toolsDom=o,this._defaultOptions.options){var n=this._defaultOptions.options;o.find(".j_ds_select").val(e.dsId);var r=e.imgList,l=o.find(".upload-list");for(s=0;s<r.length;s++){var d=r[s];l.append(this._getFileDom("UP_FILE_"+s,d[0],d[1]))}this._resetDrag(),o.find(".j_rate").val(e.rate/1e3),n.data&&n.data.dsId&&(this._$toolsDom.find(".j_device_select").val(n.data.deviceId),this._editor.loadDataStreamForSharp(this,n.data.dsId))}var c=this;o.on("change","select,input",function(){c._imageChart.setOption(c._getOptionByTools()),c._editor.changed()}).find(".j_switch_toggle").click(function(){c._renderImage()}),this._initUpload(),this._imageChart&&this._renderImage()},_getOptionByTools:function(){var e=this._$toolsDom,t={},i=+e.find(".j_rate").val();!isNaN(i)&&i>0?3>i&&(IOT.tips("刷新频率最快为3秒","warning"),e.find(".j_rate").val(3),i=3):(e.find(".j_rate").val(5),i=5),t.rate=1e3*parseInt(i),e.find(".j_switch_toggle:checked").length&&(t.deviceId=e.find(".j_device_select").val(),t.dsId=e.find(".j_ds_select").val());var s=[];e.find(".item").each(function(e){var t=$(this),i=t.find(".item-image img").attr("data-url");if(i)if(0==e)s.push([i,""]);else{var a=t.find('input[name="dsval"]').val();a&&s.push([i,a])}}),t.imgList=s;var a={data:t};return a},_renderImage:function(){var e=this._$toolsDom,t=e.find(".item"),i=t.eq(0),s=this._hasDataStream();t.show(),e.find(".j_ds_options, .upload-list .item:gt(0),.upload-list-close,.upload-list label,.item-first-info")[s?"show":"hide"](),s&&(t.find("label").show().end().find(".item-first-info").hide(),i.find("label").hide().end().find(".item-first-info").show()),this._imageChart.setOption(this._getOptionByTools()),this._editor.resetAll()},_resetDrag:function(){var e=this,t=this._$toolsDom.find(".upload-list");t.dragsort("destroy"),t.dragsort({dragSelector:".item",dragEnd:function(){e._renderImage()},dragBetween:!1,placeHolderTemplate:'<div class="item"></li>'})},_hasDataStream:function(){return!!this._$toolsDom.find(".j_switch_toggle:checked").length}}),sharpEditor.registerEditor("imageChart",e)}); */
/* ;$(function(){function t(t,i,e){this._sharpType="mapChart",this._position=t,this._defaultOptions=$.extend({},e),this._editor=i,this._init()}$.extend(t.prototype,{select:function(){this._editor.disableTextTools()},unselect:function(){},getDom:function(){return this._$dom},getToolsDom:function(){return this._$toolsDom},dispose:function(){this._mapChart&&this._mapChart.dispose(),this._$dom.remove()},resizeCallBack:function(){this._mapChart&&this._mapChart._refreshMap()},getSharpType:function(){return this._sharpType},_init:function(){this._createDom(),this._createSharp(),this._createTools(),this._editor.appendEditor(this,{useResize:!0,useMove:!0}),this.select()},_createDom:function(){var t,i=$('<div class="grid-sharp"></div>'),e=this._editor,s=this._position,a=e.getGrid().getGridWidth(),o=this._defaultOptions;t=o.rect?o.rect:{left:s.left,top:s.top,width:25*a,height:20*a},i.css(t),this._$dom=i},_createSharp:function(){var t=this,i=this._editor,e=this._defaultOptions,s=e.options?e.options.data:null;i.requireEcharts(function(){require(["mapchart"],function(i){var e=new i({dom:t._$dom[0],data:s||{rate:5e3}});e.disableDragging(),t._mapChart=e})})},_createTools:function(){var t='<div><h4>选择数据流</h4><select class="j_device_select"><option value="">--选择设备--</option>',e=this._editor.getDeviceList();for(i=0;i<e.length;i++){var s=e[i];t+='<option value="'+s.id+'">'+s.name+"</option>"}t+="</select>",t+='<span class="j_ds_select_wrapper"></span>',t+="<hr><h4>数据流属性</h4>",t+='<label class="label-input">刷新频率<input type="number" class="j_rate input-text" value="5" min="3">秒</label>',t+="</div>";var a=$(t),o=this;if(a.on("change","select,input",function(){o._mapChart.setOption(o._getOptionByTools()),o._editor.changed()}),this._$toolsDom=a,this._defaultOptions.options){var n=this._defaultOptions.options;this._$toolsDom.find(".j_ds_select").val(n.data.dsId),this._$toolsDom.find(".j_rate").val(n.data.rate/1e3),n.data&&n.data.dsId&&(this._$toolsDom.find(".j_device_select").val(n.data.deviceId),this._editor.loadDataStreamForSharp(this,n.data.dsId))}},_getOptionByTools:function(){var t=this._$toolsDom,i={deviceId:t.find(".j_device_select").val(),dsId:t.find(".j_ds_select").val()},e=+t.find(".j_rate").val();!isNaN(e)&&e>0?5>e&&(IOT.tips("刷新频率最快为5秒","warning"),t.find(".j_rate").val(5),e=5):(t.find(".j_rate").val(5),e=5),i.rate=1e3*parseInt(e);var s={data:i};return s}}),sharpEditor.registerEditor("mapChart",t)}); */