(function() {
    var h = {}
      , mt = {}
      , c = {
        id: "0785cca579e09c69472871070de16c83",
        dm: ["open.iot.10086.cn"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        icon: '/hmt/icon/21|gif|20|20',
        ctrk: false,
        align: -1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 1,
        vcard: 6349137,
        qiao: 0,
        lxb: 0,
        conv: 0,
        comm: 0,
        apps: ''
    };
    var q = !0
      , r = null 
      , s = !1;
    mt.k = {};
    mt.k.za = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.k.cookieEnabled = navigator.cookieEnabled;
    mt.k.javaEnabled = navigator.javaEnabled();
    mt.k.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    mt.k.Ca = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    mt.k.colorDepth = window.screen.colorDepth || 0;
    mt.cookie = {};
    mt.cookie.set = function(a, d, e) {
        var b;
        e.I && (b = new Date,
        b.setTime(b.getTime() + e.I));
        document.cookie = a + "=" + d + (e.domain ? "; domain=" + e.domain : "") + (e.path ? "; path=" + e.path : "") + (b ? "; expires=" + b.toGMTString() : "") + (e.Wa ? "; secure" : "")
    }
    ;
    mt.cookie.get = function(a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : r
    }
    ;
    mt.s = {};
    mt.s.ha = function(a) {
        return document.getElementById(a)
    }
    ;
    mt.s.Qa = function(a, d) {
        for (d = d.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType; )
            if (a.tagName == d)
                return a;
        return r
    }
    ;
    (mt.s.X = function() {
        function a() {
            if (!a.B) {
                a.B = q;
                for (var d = 0, g = b.length; d < g; d++)
                    b[d]()
            }
        }
        function d() {
            try {
                document.documentElement.doScroll("left")
            } catch (b) {
                setTimeout(d, 1);
                return
            }
            a()
        }
        var e = s, b = [], g;
        document.addEventListener ? g = function() {
            document.removeEventListener("DOMContentLoaded", g, s);
            a()
        }
         : document.attachEvent && (g = function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", g),
            a())
        }
        );
        (function() {
            if (!e)
                if (e = q,
                "complete" === document.readyState)
                    a.B = q;
                else if (document.addEventListener)
                    document.addEventListener("DOMContentLoaded", 
                    g, s),
                    window.addEventListener("load", a, s);
                else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", g);
                    window.attachEvent("onload", a);
                    var b = s;
                    try {
                        b = window.frameElement == r
                    } catch (n) {}
                    document.documentElement.doScroll && b && d()
                }
        }
        )();
        return function(d) {
            a.B ? d() : b.push(d)
        }
    }
    ()).B = s;
    mt.event = {};
    mt.event.c = function(a, d, e) {
        a.attachEvent ? a.attachEvent("on" + d, function(b) {
            e.call(a, b)
        }
        ) : a.addEventListener && a.addEventListener(d, e, s)
    }
    ;
    mt.event.preventDefault = function(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = s
    }
    ;
    mt.m = {};
    mt.m.parse = function() {
        return (new Function('return (" + source + ")'))()
    }
    ;
    mt.m.stringify = function() {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
                var b = e[a];
                if (b)
                    return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }
            ));
            return '"' + a + '"'
        }
        function d(a) {
            return 10 > a ? "0" + a : a
        }
        var e = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(b) {
            switch (typeof b) {
            case "undefined":
                return "undefined";
            case "number":
                return isFinite(b) ? String(b) : "null";
            case "string":
                return a(b);
            case "boolean":
                return String(b);
            default:
                if (b === r)
                    return "null";
                if (b instanceof Array) {
                    var g = ["["], e = b.length, n, f, k;
                    for (f = 0; f < e; f++)
                        switch (k = b[f],
                        typeof k) {
                        case "undefined":
                        case "function":
                        case "unknown":
                            break;
                        default:
                            n && g.push(","),
                            g.push(mt.m.stringify(k)),
                            n = 1
                        }
                    g.push("]");
                    return g.join("")
                }
                if (b instanceof Date)
                    return '"' + b.getFullYear() + "-" + d(b.getMonth() + 1) + "-" + d(b.getDate()) + "T" + d(b.getHours()) + ":" + d(b.getMinutes()) + ":" + d(b.getSeconds()) + '"';
                n = ["{"];
                f = mt.m.stringify;
                for (e in b)
                    if (Object.prototype.hasOwnProperty.call(b, e))
                        switch (k = 
                        b[e],
                        typeof k) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            g && n.push(","),
                            g = 1,
                            n.push(f(e) + ":" + f(k))
                        }
                n.push("}");
                return n.join("")
            }
        }
    }
    ();
    mt.lang = {};
    mt.lang.e = function(a, d) {
        return "[object " + d + "]" === {}.toString.call(a)
    }
    ;
    mt.lang.Ta = function(a) {
        return mt.lang.e(a, "Number") && isFinite(a)
    }
    ;
    mt.lang.Va = function(a) {
        return mt.lang.e(a, "String")
    }
    ;
    mt.localStorage = {};
    mt.localStorage.G = function() {
        if (!mt.localStorage.g)
            try {
                mt.localStorage.g = document.createElement("input"),
                mt.localStorage.g.type = "hidden",
                mt.localStorage.g.style.display = "none",
                mt.localStorage.g.addBehavior("#default#userData"),
                document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)
            } catch (a) {
                return s
            }
        return q
    }
    ;
    mt.localStorage.set = function(a, d, e) {
        var b = new Date;
        b.setTime(b.getTime() + e || 31536E6);
        try {
            window.localStorage ? (d = b.getTime() + "|" + d,
            window.localStorage.setItem(a, d)) : mt.localStorage.G() && (mt.localStorage.g.expires = b.toUTCString(),
            mt.localStorage.g.load(document.location.hostname),
            mt.localStorage.g.setAttribute(a, d),
            mt.localStorage.g.save(document.location.hostname))
        } catch (g) {}
    }
    ;
    mt.localStorage.get = function(a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var d = a.indexOf("|")
                  , e = a.substring(0, d) - 0;
                if (e && e > (new Date).getTime())
                    return a.substring(d + 1)
            }
        } else if (mt.localStorage.G())
            try {
                return mt.localStorage.g.load(document.location.hostname),
                mt.localStorage.g.getAttribute(a)
            } catch (b) {}
        return r
    }
    ;
    mt.localStorage.remove = function(a) {
        if (window.localStorage)
            window.localStorage.removeItem(a);
        else if (mt.localStorage.G())
            try {
                mt.localStorage.g.load(document.location.hostname),
                mt.localStorage.g.removeAttribute(a),
                mt.localStorage.g.save(document.location.hostname)
            } catch (d) {}
    }
    ;
    mt.sessionStorage = {};
    mt.sessionStorage.set = function(a, d) {
        if (window.sessionStorage)
            try {
                window.sessionStorage.setItem(a, d)
            } catch (e) {}
    }
    ;
    mt.sessionStorage.get = function(a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : r
    }
    ;
    mt.sessionStorage.remove = function(a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    }
    ;
    mt.O = {};
    mt.O.log = function(a, d) {
        var e = new Image
          , b = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[b] = e;
        e.onload = e.onerror = e.onabort = function() {
            e.onload = e.onerror = e.onabort = r;
            e = window[b] = r;
            d && d(a)
        }
        ;
        e.src = a
    }
    ;
    mt.F = {};
    mt.F.pa = function() {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var d = navigator.plugins["Shockwave Flash"];
            d && d.description && (a = d.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject)
            try {
                if (d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                    (a = d.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
            } catch (e) {}
        return a
    }
    ;
    mt.F.ca = function(a, d, e, b, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + e + '" height="' + b + '"><param name="movie" value="' + d + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + e + '" height="' + b + '" src="' + d + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
    }
    ;
    mt.url = {};
    mt.url.j = function(a, d) {
        var e = a.match(RegExp("(^|&|\\?|#)(" + d + ")=([^&#]*)(&|$|#)", ""));
        return e ? e[3] : r
    }
    ;
    mt.url.Sa = function(a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : r
    }
    ;
    mt.url.la = function(a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : r
    }
    ;
    mt.url.R = function(a) {
        return (a = mt.url.la(a)) ? a.replace(/:\d+$/, "") : a
    }
    ;
    mt.url.Ra = function(a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : r
    }
    ;
    h.o = {
        wa: "http://tongji.baidu.com/hm-web/welcome/ico",
        W: "hm.baidu.com/hm.gif",
        $: "baidu.com",
        ta: "hmmd",
        ua: "hmpl",
        sa: "hmkw",
        qa: "hmci",
        va: "hmsr",
        ra: "hmcu",
        r: 0,
        l: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        Ua: 0,
        Ma: 6E5,
        Na: 10,
        Oa: 1024,
        La: 1,
        C: 2147483647,
        Y: "cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")
    };
    (function() {
        var a = {
            p: {},
            c: function(a, e) {
                this.p[a] = this.p[a] || [];
                this.p[a].push(e)
            },
            z: function(a, e) {
                this.p[a] = this.p[a] || [];
                for (var b = this.p[a].length, g = 0; g < b; g++)
                    this.p[a][g](e)
            }
        };
        return h.q = a
    }
    )();
    (function() {
        function a(a, b) {
            var g = document.createElement("script");
            g.charset = "utf-8";
            d.e(b, "Function") && (g.readyState ? g.onreadystatechange = function() {
                if ("loaded" === g.readyState || "complete" === g.readyState)
                    g.onreadystatechange = r,
                    b()
            }
             : g.onload = function() {
                b()
            }
            );
            g.src = a;
            var m = document.getElementsByTagName("script")[0];
            m.parentNode.insertBefore(g, m)
        }
        var d = mt.lang;
        return h.load = a
    }
    )();
    (function() {
        function a() {
            var a = "";
            h.b.a.nv ? (a = encodeURIComponent(document.referrer),
            window.sessionStorage ? e.set("Hm_from_" + c.id, a) : d.set("Hm_from_" + c.id, a, 864E5)) : a = (window.sessionStorage ? e.get("Hm_from_" + c.id) : d.get("Hm_from_" + c.id)) || "";
            return a
        }
        var d = mt.localStorage
          , e = mt.sessionStorage;
        return h.P = a
    }
    )();
    (function() {
        var a = h.o
          , d = mt.F
          , e = {
            init: function() {
                if ("" !== c.icon) {
                    var b;
                    b = c.icon.split("|");
                    var g = a.wa + "?s=" + c.id
                      , e = ("http:" == a.protocol ? "http://eiv" : "https://bs") + ".baidu.com" + b[0] + "." + b[1];
                    switch (b[1]) {
                    case "swf":
                        b = d.ca("HolmesIcon" + a.l, e, b[2], b[3], "s=" + g);
                        break;
                    case "gif":
                        b = '<a href="' + g + '" target="_blank"><img border="0" src="' + e + '" width="' + b[2] + '" height="' + b[3] + '"></a>';
                        break;
                    default:
                        b = '<a href="' + g + '" target="_blank">' + b[0] + "</a>"
                    }
                    document.write(b)
                }
            }
        };
        h.q.c("pv-b", e.init);
        return e
    }
    )();
    (function() {
        var a = mt.s
          , d = h.o
          , e = h.load
          , b = h.P;
        h.q.c("pv-b", function() {
            c.rec && a.X(function() {
                for (var g = 0, m = c.rp.length; g < m; g++) {
                    var n = c.rp[g][0]
                      , f = c.rp[g][1]
                      , k = a.ha("hm_t_" + n);
                    if (f && !(2 == f && !k || k && "" !== k.innerHTML))
                        k = "",
                        k = Math.round(Math.random() * d.C),
                        k = 4 == f ? "http://crs.baidu.com/hl.js?" + ["siteId=" + c.id, "planId=" + n, "rnd=" + k].join("&") : "http://crs.baidu.com/t.js?" + ["siteId=" + c.id, "planId=" + n, "from=" + b(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" + 
                        k].join("&"),
                        e(k)
                }
            }
            )
        }
        )
    }
    )();
    (function() {
        var a = h.o
          , d = h.load
          , e = h.P;
        h.q.c("pv-b", function() {
            if (c.trust && c.vcard) {
                var b = a.protocol + "//trust.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + e(), "rnd=" + Math.round(Math.random() * a.C)].join("&");
                d(b)
            }
        }
        )
    }
    )();
    (function() {
        function a() {
            return function() {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.H.na() + "," + h.H.ka();
                h.b.i()
            }
        }
        function d() {
            clearTimeout(x);
            var a;
            w && (a = "visible" == document[w]);
            y && (a = !document[y]);
            f = "undefined" == typeof a ? q : a;
            if ((!n || !k) && f && l)
                u = q,
                t = +new Date;
            else if (n && k && (!f || !l))
                u = s,
                p += +new Date - t;
            n = f;
            k = l;
            x = setTimeout(d, 100)
        }
        function e(a) {
            var t = document
              , k = "";
            if (a in t)
                k = a;
            else
                for (var p = ["webkit", "ms", "moz", "o"], b = 0; b < p.length; b++) {
                    var d = p[b] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (d in t) {
                        k = 
                        d;
                        break
                    }
                }
            return k
        }
        function b(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window))
                l = "focus" == a.type || "focusin" == a.type ? q : s,
                d()
        }
        var g = mt.event, m = h.q, n = q, f = q, k = q, l = q, v = +new Date, t = v, p = 0, u = q, w = e("visibilityState"), y = e("hidden"), x;
        d();
        (function() {
            var a = w.replace(/[vV]isibilityState/, "visibilitychange");
            g.c(document, a, d);
            g.c(window, "pageshow", d);
            g.c(window, "pagehide", d);
            "object" == typeof document.onfocusin ? (g.c(document, "focusin", b),
            g.c(document, "focusout", b)) : (g.c(window, "focus", b),
            g.c(window, "blur", b))
        }
        )();
        h.H = {
            na: function() {
                return +new Date - v
            },
            ka: function() {
                return u ? +new Date - t + p : p
            }
        };
        m.c("pv-b", function() {
            g.c(window, "unload", a())
        }
        );
        return h.H
    }
    )();
    (function() {
        var a = mt.lang
          , d = h.o
          , e = h.load
          , b = {
            xa: function(b) {
                if ((void 0 === window._dxt || a.e(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var m = h.b.J();
                    e([d.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(m)].join(""), b)
                }
            },
            Ja: function(b) {
                if (a.e(b, "String") || a.e(b, "Number"))
                    window._dxt = window._dxt || [],
                    window._dxt.push(["_setUserId", b])
            }
        };
        return h.da = b
    }
    )();
    (function() {
        function a(k) {
            for (var b in k)
                if ({}.hasOwnProperty.call(k, b)) {
                    var d = k[b];
                    e.e(d, "Object") || e.e(d, "Array") ? a(d) : k[b] = String(d)
                }
        }
        function d(a) {
            return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
        }
        var e = mt.lang
          , b = mt.m
          , g = h.o
          , m = h.q
          , n = h.da
          , f = {
            w: [],
            D: 0,
            U: s,
            init: function() {
                f.d = 0;
                m.c("pv-b", function() {
                    f.ea();
                    f.fa()
                }
                );
                m.c("pv-d", f.ga);
                m.c("stag-b", function() {
                    h.b.a.api = f.d || f.D ? f.d + "_" + f.D : ""
                }
                );
                m.c("stag-d", function() {
                    h.b.a.api = 0;
                    f.d = 0;
                    f.D = 0
                }
                )
            },
            ea: function() {
                var a = window._hmt
                  , 
                b = c.id
                  , d = {};
                if (e.e(a, "Array"))
                    for (var t = 0; t < a.length; t++) {
                        var p = a[t]
                          , g = p[0];
                        e.e(p, "Array") && ("_setAccount" === g ? 1 < p.length && /^[0-9a-f]{32}$/.test(p[1]) && (f.d |= 1,
                        b = p[1]) : (d[b] = d[b] || [],
                        d[b].push(p)))
                    }
                if (e.e(a, "Array") || !a)
                    window._hmt = {
                        account: b,
                        commands: d,
                        push: function() {
                            this.commands[this.account].push.apply(this, arguments)
                        }
                    }
            },
            fa: function() {
                var a = window._hmt;
                if (a && a.commands && a.commands[c.id])
                    for (var b = a.commands[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, t = 0, p = b.length; t < p; t++) {
                        var e = b[t];
                        d.test(e[0]) ? 
                        f.w.push(e) : f.M(e)
                    }
                a.commands[c.id] = {
                    push: f.M
                }
            },
            ga: function() {
                if (0 < f.w.length)
                    for (var a = 0, b = f.w.length; a < b; a++)
                        f.M(f.w[a]);
                f.w = r
            },
            M: function(a) {
                var b = a[0];
                if (f.hasOwnProperty(b) && e.e(f[b], "Function"))
                    f[b](a)
            },
            _setAccount: function(a) {
                1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (f.d |= 1,
                window._hmt.account = a[1])
            },
            _setAutoPageview: function(a) {
                if (1 < a.length && (a = a[1],
                s === a || q === a))
                    f.d |= 2,
                    h.b.S = a
            },
            _trackPageview: function(a) {
                if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                    f.d |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.K ? 
                    (h.b.a.nv = 0,
                    h.b.a.st = 4) : h.b.K = q;
                    var b = h.b.a.u
                      , d = h.b.a.su;
                    h.b.a.u = g.protocol + "//" + document.location.host + a[1];
                    f.U || (h.b.a.su = document.location.href);
                    h.b.i();
                    h.b.a.u = b;
                    h.b.a.su = d
                }
            },
            _trackEvent: function(a) {
                2 < a.length && (f.d |= 8,
                h.b.a.nv = 0,
                h.b.a.st = 4,
                h.b.a.et = 4,
                h.b.a.ep = d(a[1]) + "*" + d(a[2]) + (a[3] ? "*" + d(a[3]) : "") + (a[4] ? "*" + d(a[4]) : ""),
                h.b.i())
            },
            _setCustomVar: function(a) {
                if (!(4 > a.length)) {
                    var b = a[1]
                      , e = a[4] || 3;
                    if (0 < b && 6 > b && 0 < e && 4 > e) {
                        f.D++;
                        for (var t = (h.b.a.cv || "*").split("!"), p = t.length; p < b - 1; p++)
                            t.push("*");
                        t[b - 1] = e + "*" + d(a[2]) + "*" + d(a[3]);
                        h.b.a.cv = t.join("!");
                        a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Ba("Hm_cv_" + c.id)
                    }
                }
            },
            _setReferrerOverride: function(a) {
                1 < a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? g.protocol + "//" + window.location.host + a[1] : a[1],
                f.U = q)
            },
            _trackOrder: function(d) {
                d = d[1];
                e.e(d, "Object") && (a(d),
                f.d |= 16,
                h.b.a.nv = 0,
                h.b.a.st = 4,
                h.b.a.et = 94,
                h.b.a.ep = b.stringify(d),
                h.b.i())
            },
            _trackMobConv: function(a) {
                if (a = 
                {
                    webim: 1,
                    tel: 2,
                    map: 3,
                    sms: 4,
                    callback: 5,
                    share: 6
                }[a[1]])
                    f.d |= 32,
                    h.b.a.et = 93,
                    h.b.a.ep = a,
                    h.b.i()
            },
            _trackRTPageview: function(d) {
                d = d[1];
                e.e(d, "Object") && (a(d),
                d = b.stringify(d),
                512 >= encodeURIComponent(d).length && (f.d |= 64,
                h.b.a.rt = d))
            },
            _trackRTEvent: function(d) {
                d = d[1];
                if (e.e(d, "Object")) {
                    a(d);
                    d = encodeURIComponent(b.stringify(d));
                    var l = function(a) {
                        var b = h.b.a.rt;
                        f.d |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.i();
                        h.b.a.rt = b
                    }
                      , m = d.length;
                    if (900 >= m)
                        l.call(this, d);
                    else
                        for (var m = Math.ceil(m / 900), t = "block|" + Math.round(Math.random() * 
                        g.C).toString(16) + "|" + m + "|", p = [], u = 0; u < m; u++)
                            p.push(u),
                            p.push(d.substring(900 * u, 900 * u + 900)),
                            l.call(this, t + p.join("|")),
                            p = []
                }
            },
            _setUserId: function(a) {
                a = a[1];
                n.xa();
                n.Ja(a)
            }
        };
        f.init();
        h.aa = f;
        return h.aa
    }
    )();
    (function() {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = q,
            this.a = {},
            this.S = q,
            this.K = s,
            this.init())
        }
        var d = mt.url
          , e = mt.O
          , b = mt.F
          , g = mt.lang
          , m = mt.cookie
          , n = mt.k
          , f = mt.localStorage
          , k = mt.sessionStorage
          , l = h.o
          , v = h.q;
        a.prototype = {
            L: function(a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            },
            V: function(a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            },
            A: function(a) {
                for (var b = 0; b < c.dm.length; b++)
                    if (-1 < 
                    c.dm[b].indexOf("/")) {
                        if (this.V(a, c.dm[b]))
                            return q
                    } else {
                        var e = d.R(a);
                        if (e && this.L(e, c.dm[b]))
                            return q
                    }
                return s
            },
            J: function() {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
                    if (this.L(a, c.dm[b]))
                        return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            },
            Q: function() {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.V(document.location.href, d))
                        return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            },
            oa: function() {
                if (!document.referrer)
                    return l.l - l.r > c.vdur ? 1 : 4;
                var a = 
                s;
                this.A(document.referrer) && this.A(document.location.href) ? a = q : (a = d.R(document.referrer),
                a = this.L(a || "", document.location.hostname));
                return a ? l.l - l.r > c.vdur ? 1 : 4 : 3
            },
            getData: function(a) {
                try {
                    return m.get(a) || k.get(a) || f.get(a)
                } catch (b) {}
            },
            setData: function(a, b, d) {
                try {
                    m.set(a, b, {
                        domain: this.J(),
                        path: this.Q(),
                        I: d
                    }),
                    d ? f.set(a, b, d) : k.set(a, b)
                } catch (e) {}
            },
            Ba: function(a) {
                try {
                    m.set(a, "", {
                        domain: this.J(),
                        path: this.Q(),
                        I: -1
                    }),
                    k.remove(a),
                    f.remove(a)
                } catch (b) {}
            },
            Ha: function() {
                var a, b, d, e, g;
                l.r = this.getData("Hm_lpvt_" + 
                c.id) || 0;
                13 === l.r.length && (l.r = Math.round(l.r / 1E3));
                b = this.oa();
                a = 4 !== b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (g = e.length - 1; 0 <= g; g--)
                        13 === e[g].length && (e[g] = "" + Math.round(e[g] / 1E3));
                    for (; 2592E3 < l.l - e[0]; )
                        e.shift();
                    g = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(l.l); 4 < e.length; )
                        e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else
                    d = l.l,
                    e = "",
                    g = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id, l.l);
                d = l.l === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.A(document.location.href) && 
                ("" === document.referrer || this.A(document.referrer)))
                    a = 0,
                    b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = e;
                this.a.lv = g
            },
            Fa: function() {
                for (var a = [], b = 0, d = l.Y.length; b < d; b++) {
                    var e = l.Y[b]
                      , g = this.a[e];
                    "undefined" !== typeof g && "" !== g && a.push(e + "=" + encodeURIComponent(g))
                }
                b = this.a.et;
                this.a.rt && (0 === b ? a.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === b && a.push("rt=" + this.a.rt));
                return a.join("&")
            },
            Ia: function() {
                this.Ha();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = n.Ca;
                this.a.cl = n.colorDepth + "-bit";
                this.a.ln = n.language;
                this.a.ja = n.javaEnabled ? 1 : 0;
                this.a.ck = n.cookieEnabled ? 1 : 0;
                this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.a.fl = b.pa();
                this.a.v = "1.1.8";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                1 === this.a.nv && (this.a.tt = document.title || "");
                var a = document.location.href;
                this.a.cm = d.j(a, l.ta) || "";
                this.a.cp = d.j(a, l.ua) || "";
                this.a.cw = d.j(a, l.sa) || "";
                this.a.ci = d.j(a, l.qa) || "";
                this.a.cf = d.j(a, l.va) || "";
                this.a.cu = d.j(a, l.ra) || ""
            },
            init: function() {
                try {
                    this.Ia(),
                    0 === this.a.nv ? this.Ea() : 
                    this.N(".*"),
                    h.b = this,
                    this.ba(),
                    v.z("pv-b"),
                    this.Da()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    e.log(l.protocol + "//" + l.W + "?" + b.join("&"))
                }
            },
            Da: function() {
                function a() {
                    v.z("pv-d")
                }
                this.S ? (this.K = q,
                this.a.et = 0,
                this.a.ep = "",
                this.i(a)) : a()
            },
            i: function(a) {
                var b = this;
                b.a.rnd = Math.round(Math.random() * l.C);
                v.z("stag-b");
                var d = l.protocol + "//" + l.W + "?" + b.Fa();
                v.z("stag-d");
                b.Z(d);
                e.log(d, function(d) {
                    b.N(d);
                    g.e(a, "Function") && a.call(b)
                }
                )
            },
            ba: function() {
                var a = document.location.hash.substring(1)
                  , b = RegExp(c.id)
                  , e = -1 < document.referrer.indexOf(l.$)
                  , g = d.j(a, "jn")
                  , f = /^heatlink$|^select$/.test(g);
                a && (b.test(a) && e && f) && (a = document.createElement("script"),
                a.setAttribute("type", "text/javascript"),
                a.setAttribute("charset", "utf-8"),
                a.setAttribute("src", l.protocol + "//" + c.js + g + ".js?" + this.a.rnd),
                g = document.getElementsByTagName("script")[0],
                g.parentNode.insertBefore(a, g))
            },
            Z: function(a) {
                var b = 
                k.get("Hm_unsent_" + c.id) || ""
                  , d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href)
                  , b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                k.set("Hm_unsent_" + c.id, b)
            },
            N: function(a) {
                var b = k.get("Hm_unsent_" + c.id) || "";
                b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")),
                a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"),
                (b = b.replace(a, "").replace(/,$/, "")) ? k.set("Hm_unsent_" + c.id, b) : k.remove("Hm_unsent_" + c.id))
            },
            Ea: function() {
                var a = this
                  , b = k.get("Hm_unsent_" + c.id);
                if (b)
                    for (var b = b.split(","), d = function(b) {
                        e.log(l.protocol + "//" + decodeURIComponent(b), function(b) {
                            a.N(b)
                        }
                        )
                    }
                    , g = 0, f = b.length; g < f; g++)
                        d(b[g])
            }
        };
        return new a
    }
    )();
    (function() {
        var a = mt.s
          , d = mt.event
          , e = mt.url
          , b = mt.m;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var g = +new Date
                  , m = function(a) {
                    var b = performance.timing
                      , d = b[a + "Start"] ? b[a + "Start"] : 0;
                    a = b[a + "End"] ? b[a + "End"] : 0;
                    return {
                        start: d,
                        end: a,
                        value: 0 < a - d ? a - d : 0
                    }
                }
                  , n = r;
                a.X(function() {
                    n = +new Date
                }
                );
                var f = function() {
                    var a, d, f;
                    f = m("navigation");
                    d = m("request");
                    f = {
                        netAll: d.start - f.start,
                        netDns: m("domainLookup").value,
                        netTcp: m("connect").value,
                        srv: m("response").start - d.start,
                        dom: performance.timing.domInteractive - 
                        performance.timing.fetchStart,
                        loadEvent: m("loadEvent").end - f.start
                    };
                    a = document.referrer;
                    var p = r;
                    d = r;
                    if ("www.baidu.com" === (a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [])[2])
                        p = e.j(a, "qid"),
                        d = e.j(a, "click_t");
                    a = p;
                    f.qid = a != r ? a : "";
                    d != r ? (f.bdDom = n ? n - d : 0,
                    f.bdRun = g - d,
                    f.bdDef = m("navigation").start - d) : (f.bdDom = 0,
                    f.bdRun = 0,
                    f.bdDef = 0);
                    h.b.a.et = 87;
                    h.b.a.ep = b.stringify(f);
                    h.b.i()
                }
                ;
                d.c(window, "load", function() {
                    setTimeout(f, 500)
                }
                )
            }
        } catch (k) {}
    }
    )();
    (function() {
        var a = h.o
          , d = {
            init: function() {
                try {
                    if ("http:" === a.protocol) {
                        var b = document.createElement("IFRAME");
                        b.setAttribute("src", "http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");
                        b.style.display = "none";
                        b.style.width = "1";
                        b.style.height = "1";
                        b.Pa = "0";
                        document.body.appendChild(b)
                    }
                } catch (d) {}
            }
        }
          , e = navigator.userAgent.toLowerCase();
        -1 < e.indexOf("android") && -1 === e.indexOf("micromessenger") && d.init()
    }
    )();
    (function() {
        var a = mt.lang
          , d = mt.event
          , e = mt.m;
        if (c.comm && "undefined" !== typeof h.b) {
            var b = function(a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--; )
                        d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }
            , g = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, m = {
                click: function() {
                    for (var a = [], d = b(document.getElementsByTagName("a")), d = [].concat.apply(d, b(document.getElementsByTagName("area"))), d = [].concat.apply(d, b(document.getElementsByTagName("img"))), e = 0, f = d.length; e < f; e++) {
                        var m = d[e]
                          , 
                        k = m.getAttribute("onclick")
                          , m = m.getAttribute("href");
                        (g.test(k) || g.test(m)) && a.push(d[e])
                    }
                    return a
                }
            }, n = function(a, b) {
                for (var d in a)
                    if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === s)
                        return s
            }
            , f = function(b, d) {
                var f = {
                    n: "swt",
                    t: "clk"
                };
                f.v = b;
                if (d) {
                    var m = d.getAttribute("href")
                      , k = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : r
                      , l = d.getAttribute("id") || "";
                    g.test(m) ? (f.sn = "mediate",
                    f.snv = m) : a.e(k, "String") && g.test(k) && (f.sn = "wrap",
                    f.snv = k);
                    f.id = l
                }
                h.b.a.et = 86;
                h.b.a.ep = e.stringify(f);
                h.b.i();
                for (f = +new Date; 500 >= 
                +new Date - f; )
                    ;
            }
            , k, l = "/zoosnet" + (/\/$/.test("/zoosnet") ? "" : "/"), v = function(b, d) {
                if (k === d)
                    return f(l + b, d),
                    s;
                if (a.e(d, "Array") || a.e(d, "NodeList"))
                    for (var e = 0, g = d.length; e < g; e++)
                        if (k === d[e])
                            return f(l + b + "/" + (e + 1), d[e]),
                            s
            }
            ;
            d.c(document, "click", function(b) {
                b = b || window.event;
                k = b.target || b.srcElement;
                var d = {};
                for (n(m, function(b, e) {
                    d[b] = a.e(e, "Function") ? e() : document.getElementById(e)
                }
                ); k && k !== document && n(d, v) !== s; )
                    k = k.parentNode
            }
            )
        }
    }
    )();
    (function() {
        var a = mt.event
          , d = mt.m;
        if (c.comm && "undefined" !== typeof h.b) {
            var e = +new Date
              , b = {
                n: "anti",
                sb: 0,
                kb: 0,
                clk: 0
            }
              , g = function() {
                h.b.a.et = 86;
                h.b.a.ep = d.stringify(b);
                h.b.i()
            }
            ;
            a.c(document, "click", function() {
                b.clk++
            }
            );
            a.c(document, "keyup", function() {
                b.kb = 1
            }
            );
            a.c(window, "scroll", function() {
                b.sb++
            }
            );
            a.c(window, "unload", function() {
                b.t = +new Date - e;
                g()
            }
            );
            a.c(window, "load", function() {
                setTimeout(g, 5E3)
            }
            )
        }
    }
    )();
    (function() {
        function a() {
            this.f = r
        }
        var d = mt.O
          , e = mt.k;
        a.prototype = {
            ya: function(a) {
                if (this.f)
                    this.h(a, 0);
                else if (this.isSupported()) {
                    try {
                        this.f = new ActiveXObject("BDEXIE.BDExExtension.1"),
                        this.T = q
                    } catch (b) {
                        this.T = s
                    }
                    this.T ? this.h(a, 0) : this.h(a, -1)
                } else
                    this.h(a, -1)
            },
            Ka: function() {
                this.f && delete this.f;
                this.f = r
            },
            Ga: function(a, b, d) {
                if (this.f && "SetLocalCache" in this.f)
                    try {
                        void 0 === this.f.SetLocalCache(a, b) && this.h(d, 0)
                    } catch (e) {
                        this.h(d, -1)
                    }
                else
                    this.h(d, -1)
            },
            ma: function(a, b) {
                if (this.f && "GetLocalCache" in 
                this.f)
                    try {
                        this.h(b, this.f.GetLocalCache(a))
                    } catch (d) {
                        this.h(b, "")
                    }
                else
                    this.h(b, "")
            },
            ia: function(a) {
                if (this.f && "GetCryptStr" in this.f)
                    try {
                        this.h(a, this.f.GetCryptStr("strEncryptID1"))
                    } catch (b) {
                        this.h(a, "")
                    }
                else
                    this.h(a, "")
            },
            h: function(a, b) {
                "function" === typeof a && a(b, this)
            },
            isSupported: function() {
                if (window.ActiveXObject || "ActiveXObject" in window)
                    try {
                        return !!new ActiveXObject("BDEXIE.BDExExtension.1")
                    } catch (a) {}
                return s
            },
            Aa: function() {
                var a = this;
                this.ia(function(b) {
                    void 0 !== b && "" !== b && (d.log("//datax.baidu.com/x.gif?dm=" + 
                    encodeURIComponent("datax.baidu.com/webadapter/guid") + "&ac=" + encodeURIComponent(b) + "&v=hm-webadapter-0.0.1&rnd=" + Math.round(2147483647 * Math.random())),
                    a.Ga("hmKey", +new Date, function() {
                        a.Ka()
                    }
                    ))
                }
                )
            }
        };
        if (e.za && /^http(s)?:$/.test(document.location.protocol)) {
            var b = new a;
            b.ya(function(a) {
                0 === a && b.ma("hmKey", function(a) {
                    a = +a;
                    (isNaN(a) || 6048E5 < +new Date - a) && b.Aa()
                }
                )
            }
            )
        }
    }
    )();
}
)();
