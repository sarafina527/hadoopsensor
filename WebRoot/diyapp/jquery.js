/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
     : b(a)
}
("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = "1.11.1"
      , m = function(a, b) {
        return new m.fn.init(a,b)
    }
      , n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , o = /^-ms-/
      , p = /-([\da-z])/gi
      , q = function(a, b) {
        return b.toUpperCase()
    }
    ;
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null  != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }
            ))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || m.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null  != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1,
                    f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {},
                    g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        }
        ,
        isWindow: function(a) {
            return null  != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null  == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null  == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null  != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null  != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null  != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            m.isFunction(a) ? (c = d.call(arguments, 2),
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || m.guid++,
            e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }),
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    }
    );
    function r(a) {
        var b = a.length
          , c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }
        , C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + L + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }
        ;
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes),
            F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                 : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 9 === k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u] = !0,
            a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null 
            }
        }
        function jb(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b = +b,
                hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                }
                )
            }
            )
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {},
        f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e,
            o = e.documentElement,
            p = !f(e),
            g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }
            , !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            }
            )),
            c.attributes = ib(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }
            ),
            c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")),
                !a.getElementsByTagName("*").length
            }
            ),
            c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }
            ),
            c.getById = ib(function(a) {
                return o.appendChild(a).id = u,
                !e.getElementsByName || !e.getElementsByName(u).length
            }
            ),
            c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            }
             : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"),
                a.querySelectorAll(":checked").length || q.push(":checked")
            }
            ),
            ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            }
            )),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", Q)
            }
            ),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
             : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            }
             : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            e) : n
        }
        ,
        fb.matches = function(a, b) {
            return fb(a, null , null , b)
        }
        ,
        fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fb(b, n, null , [a]).length > 0
        }
        ,
        fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null 
        }
        ,
        fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null ,
            a
        }
        ,
        e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null  : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                     : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    }
                    )
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null  == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                     : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }
                    ) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null , e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }
                    ) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null , f, c),
                        !c.pop()
                    }
                }
                ),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }
                ),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }
                ),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a),
                    a = a.replace(cb, db).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }
                ),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null  == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }
                ),
                last: nb(function(a, b) {
                    return [b - 1]
                }
                ),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }
                ),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }
                ),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }
                ),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }
                ),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                }
                )
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = lb(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = mb(b);
        function pb() {}
        pb.prototype = d.filters = d.pseudos,
        d.setFilters = new pb,
        g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        }
        ;
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
             : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
             : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null  != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)),
            e && !e[u] && (e = vb(e, f)),
            hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ub(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null , r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r),
                    e ? e(null , g, r, i) : I.apply(g, r)
            }
            )
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }
            , h, !0), l = rb(function(a) {
                return K.call(b, a) > -1
            }
            , h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null , a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null  == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null  != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            }
            ;
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wb(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qb(j),
                        !a)
                            return I.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }
        ),
        ib(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }
        ) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }
        ),
        c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }
        ) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }
        ),
        ib(function(a) {
            return null  == a.getAttribute("disabled")
        }
        ) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null 
        }
        ),
        fb
    }
    (a);
    m.find = s,
    m.expr = s.selectors,
    m.expr[":"] = m.expr.pseudos,
    m.unique = s.uniqueSort,
    m.text = s.getText,
    m.isXMLDoc = s.isXML,
    m.contains = s.contains;
    var t = m.expr.match.needsContext
      , u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            }
            );
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            }
            );
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        }
        )
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }
        ))
    }
    ,
    m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0
                }
                ));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null , a, null ] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b,
                m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                u.test(c[1]) && m.isPlainObject(b))
                    for (c in b)
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return x.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = y,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        m.makeArray(a, this))
    }
    ;
    A.prototype = m.fn,
    x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = []
              , e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0
            }
            )
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null  == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null 
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 && (C[a] || (e = m.unique(e)),
            B.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    }
    );
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }
        ),
        b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l,
            d = !0,
            f = g || 0,
            g = 0,
            e = h.length,
            b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }
        , k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        }
                        )
                    }
                    (arguments),
                    b ? e = h.length : c && (g = d,
                    j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1),
                        b && (e >= d && e--,
                        f >= d && f--)
                }
                ),
                this
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                e = 0,
                this
            },
            disable: function() {
                return h = i = c = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? i.push(c) : j(c)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }
    ,
    m.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            }
                            )
                        }
                        ),
                        a = null 
                    }
                    ).promise()
                },
                promise: function(a) {
                    return null  != a ? m.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            m.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }
                , b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }
            ),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }
            , i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
        this
    }
    ,
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0,
                a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]),
                m.fn.triggerHandler && (m(y).triggerHandler("ready"),
                m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J),
        a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(),
        m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(),
            "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1),
                a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J),
                a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null  == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(),
                        m.ready()
                    }
                }
                ()
            }
        return H.promise(b)
    }
    ;
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L,
    k.inlineBlockNeedsLayout = !1,
    m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0],
        c && c.style && (b = y.createElement("div"),
        d = y.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }
    ),
    function() {
        var a = y.createElement("div");
        if (null  == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null 
    }
    (),
    m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
    ;
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null  : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[m.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null  == f && (f = g[m.camelCase(b)])) : f = g,
                f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null )
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
            !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }),
    m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f),
                1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)),
                        O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }
            ) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }
            ) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            }
            )
        }
    }),
    m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = m._data(a, b),
            c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = m._queueHooks(a, b)
              , g = function() {
                m.dequeue(a, b)
            }
            ;
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"),
                    m._removeData(a, c)
                }
                )
            })
        }
    }),
    m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            }
            )
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            }
            )
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            }
            ;
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = m._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = ["Top", "Right", "Bottom", "Left"]
      , U = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
      , V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null  == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        m.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null ) : (j = b,
        b = function(a, b, c) {
            return j.call(m(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input")
          , b = y.createElement("div")
          , c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        k.leadingWhitespace = 3 === b.firstChild.nodeType,
        k.tbody = !b.getElementsByTagName("tbody").length,
        k.htmlSerialize = !!b.getElementsByTagName("link").length,
        k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        k.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }
        ),
        b.cloneNode(!0).click()),
        null  == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }
    (),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null 
    }
    ();
    var X = /^(?:input|select|textarea)$/i
      , Y = /^key/
      , Z = /^(?:mouse|pointer|contextmenu)|click/
      , $ = /^(?:focusinfocus|focusoutblur)$/
      , _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0
    }
    function bb() {
        return !1
    }
    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = m.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(E) || [""],
                h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = m.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = m.event.special[o] || {},
                    l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (n = g[o]) || (n = g[o] = [],
                    n.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
                    m.event.global[o] = !0);
                a = null 
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = m.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        n = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = n.length;
                        while (f--)
                            g = n[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1),
                            g.selector && n.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle,
                m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y,
            3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            g = p.indexOf(":") < 0 && "on" + p,
            b = b[m.expando] ? b : new m.Event(p,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = q.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            b.result = void 0,
            b.target || (b.target = d),
            c = null  == c ? [b] : m.makeArray(c, [b]),
            k = m.event.special[p] || {},
            e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p,
                    $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p,
                    f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = p,
                !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null ),
                    m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e,
                        a.data = e.data,
                        c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null , [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new m.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null  == a.which && (a.which = null  != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null  == a.pageX && null  != b.clientX && (d = a.target.ownerDocument || y,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null , b) : m.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
     : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null ),
        a.detachEvent(d, c))
    }
    ,
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a,
        b && m.extend(this, b),
        this.timeStamp = a && a.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(a,b)
    }
    ,
    m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }
    ),
    k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }
                ),
                m._data(c, "submitBubbles", !0))
            }
            )
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }),
    k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }
            ),
            m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                m.event.simulate("change", this, a, !0)
            }
            )),
            !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }
                ),
                m._data(b, "changeBubbles", !0))
            }
            )
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"),
            !X.test(this.nodeName)
        }
    }),
    k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        }
        ;
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b);
                e || d.addEventListener(a, c, !0),
                m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0),
                m._removeData(d, b))
            }
        }
    }
    ),
    m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null  == c && null  == d ? (d = b,
            c = b = void 0) : null  == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = bb;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return m().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = m.guid++)),
            this.each(function() {
                m.event.add(this, a, d, c, b)
            }
            )
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = bb),
            this.each(function() {
                m.event.remove(this, a, c, b)
            }
            )
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            }
            )
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function db(a) {
        var b = eb.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , fb = / jQuery\d+="(?:null|\d+)"/g
      , gb = new RegExp("<(?:" + eb + ")[\\s/>]","i")
      , hb = /^\s+/
      , ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , jb = /<([\w:]+)/
      , kb = /<tbody/i
      , lb = /<|&#?\w+;/
      , mb = /<(?:script|style|link)/i
      , nb = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ob = /^$|\/(?:java|ecma)script/i
      , pb = /^true\/(.*)/
      , qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , sb = db(y)
      , tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option,
    rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead,
    rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null  != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xb(a) {
        return a.type = (null  !== m.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function zb(a, b) {
        for (var c, d = 0; null  != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text,
            yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML,
            tb.removeChild(f = tb.firstChild)),
            !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f),
                h = ub(a),
                g = 0; null  != (e = h[g]); ++g)
                    d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a),
                    d = d || ub(f),
                    g = 0; null  != (e = h[g]); g++)
                        Ab(e, d[g]);
                else
                    Ab(a, f);
            return d = ub(f, "script"),
            d.length > 0 && zb(d, !i && ub(a, "script")),
            d = h = e = null ,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q],
                f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")),
                        i = (jb.exec(f) || ["", ""])[1].toLowerCase(),
                        l = rb[i] || rb._default,
                        h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2],
                        e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])),
                        !k.tbody) {
                            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes),
                        h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h),
            k.appendChecked || m.grep(ub(p, "input"), vb),
            q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f),
                h = ub(o.appendChild(f), "script"),
                g && zb(h),
                c)) {
                    e = 0;
                    while (f = h[e++])
                        ob.test(f.type || "") && c.push(f)
                }
            return h = null ,
            o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null  != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null ,
                    c.push(f))
                }
        }
    }),
    m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }
            , null , a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            }
            )
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            }
            )
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            }
            )
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null  != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ub(c)),
                c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null  != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null  == a ? !1 : a,
            b = null  == b ? a : b,
            this.map(function() {
                return m.clone(this, a, b)
            }
            )
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (m.cleanData(ub(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }
            , null , a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                m.cleanData(ub(this)),
                a && a.replaceChild(b, this)
            }
            ),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                }
                );
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this),
            c = i.firstChild,
            1 === i.childNodes.length && (i = c),
            c)) {
                for (g = m.map(ub(i, "script"), xb),
                f = g.length; l > j; j++)
                    d = i,
                    j !== o && (d = m.clone(d, !0, !0),
                    f && m.merge(g, ub(d, "script"))),
                    b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument,
                    m.map(g, yb),
                    j = 0; f > j; j++)
                        d = g[j],
                        ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null 
            }
            return this
        }
    }),
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                m(g[d])[b](c),
                f.apply(e, c.get());
            return this.pushStack(e)
        }
    }
    );
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(),
        f
    }
    function Fb(a) {
        var b = y
          , c = Db[a];
        return c || (c = Eb(a, b),
        "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Cb[0].contentWindow || Cb[0].contentDocument).document,
        b.write(),
        b.close(),
        c = Eb(a, b),
        Cb.detach()),
        Db[a] = c),
        c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null  != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0],
            c && c.style ? (b = y.createElement("div"),
            d = y.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(y.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }
    ();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null )
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
        Hb.test(g) && Gb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c[b] : void 0,
        null  == g && h && h[b] && (g = h[b]),
        Hb.test(g) && !Kb.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null  != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = d && d.style) {
            c.cssText = "float:left;opacity:.5",
            k.opacity = "0.5" === c.opacity,
            k.cssFloat = !!c.cssFloat,
            b.style.backgroundClip = "content-box",
            b.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === b.style.backgroundClip,
            k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null  == g && i(),
                    g
                },
                boxSizingReliable: function() {
                    return null  == f && i(),
                    f
                },
                pixelPosition: function() {
                    return null  == e && i(),
                    e
                },
                reliableMarginRight: function() {
                    return null  == h && i(),
                    h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0],
                c && c.style && (b = y.createElement("div"),
                d = y.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
                b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                e = f = !1,
                h = !0,
                a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null ) || {}).top,
                f = "4px" === (a.getComputedStyle(b, null ) || {
                    width: "4px"
                }).width,
                i = b.appendChild(y.createElement("div")),
                i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                b.style.width = "1px",
                h = !parseFloat((a.getComputedStyle(i, null ) || {}).marginRight)),
                b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                i = b.getElementsByTagName("td"),
                i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                g = 0 === i[0].offsetHeight,
                g && (i[0].style.display = "",
                i[1].style.display = "none",
                g = 0 === i[0].offsetHeight),
                c.removeChild(d))
            }
        }
    }
    (),
    m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Mb = /alpha\([^)]*\)/i
      , Nb = /opacity\s*=\s*([^)]*)/
      , Ob = /^(none|table(?!-c[ea]).+)/
      , Pb = new RegExp("^(" + S + ")(.*)$","i")
      , Qb = new RegExp("^([+-])=(" + S + ")","i")
      , Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Sb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Tb = ["Webkit", "O", "Moz", "ms"];
    function Ub(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
          , d = b
          , e = Tb.length;
        while (e--)
            if (b = Tb[e] + c,
            b in a)
                return b;
        return d
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = m._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d),
            (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)),
            d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e),
            "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Yb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ib(a)
          , g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null  == e) {
            if (e = Jb(a, b, f),
            (0 > e || null  == e) && (e = a.style[b]),
            Hb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)),
                g = m.cssHooks[b] || m.cssHooks[h],
                void 0 === c)
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)),
                f = "number"),
                null  != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)),
            g = m.cssHooks[b] || m.cssHooks[h],
            g && "get" in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Jb(a, b, d)),
            "normal" === f && b in Sb && (f = Sb[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }
                ) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }
    ),
    k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }),
    m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }
    ),
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }
    ),
    m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }
            , a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            }
            )
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a,b,c,d,e)
    }
    m.Tween = Zb,
    Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Zb.propHooks._default.set(this),
            this
        }
    },
    Zb.prototype.init.prototype = Zb.prototype,
    Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null  == a.elem[a.prop] || a.elem.style && null  != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null  != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    m.fx = Zb.prototype.init,
    m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = bc.exec(b)
              , f = e && e[3] || (m.cssNumber[a] ? "" : "px")
              , g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function fc() {
        return setTimeout(function() {
            $b = void 0
        }
        ),
        $b = m.now()
    }
    function gc(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"),
        null  == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        n.always(function() {
            n.always(function() {
                h.unqueued--,
                m.queue(a, "fx").length || h.empty.fire()
            }
            )
        }
        )),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = m.css(a, "display"),
        l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j,
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }
        ));
        for (d in b)
            if (e = b[d],
            ac.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? m(a).show() : n.done(function() {
                m(a).hide()
            }
            ),
            n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            }
            );
            for (d in o)
                g = hc(q ? r[d] : 0, d, n),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c),
            e = b[d],
            f = a[c],
            m.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = m.cssHooks[d],
            g && "expand" in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function() {
            delete i.elem
        }
        ), i = function() {
            if (e)
                return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }
        , j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hc, j),
        m.isFunction(j.opts.start) && j.opts.start.call(a, j),
        m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                ec[c] = ec[c] || [],
                ec[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }),
    m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
        (null  == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a)
              , f = m.speed(b, c, d)
              , g = function() {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            }
            ;
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            }
            ;
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null  != a && a + "queueHooks"
                  , f = m.timers
                  , g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null  != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            }
            )
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            }
            )
        }
    }),
    m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null  == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }
    ),
    m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }
    ),
    m.timers = [],
    m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(),
        $b = void 0
    }
    ,
    m.fx.timer = function(a) {
        m.timers.push(a),
        a() ? m.fx.start() : m.timers.pop()
    }
    ,
    m.fx.interval = 13,
    m.fx.start = function() {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }
    ,
    m.fx.stop = function() {
        clearInterval(_b),
        _b = null 
    }
    ,
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        }
        )
    }
    ,
    function() {
        var a, b, c, d, e;
        b = y.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = y.createElement("select"),
        e = c.appendChild(y.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        k.getSetAttribute = "t" !== b.className,
        k.style = /top/.test(d.getAttribute("style")),
        k.hrefNormalized = "/a" === d.getAttribute("href"),
        k.checkOn = !!a.value,
        k.optSelected = e.selected,
        k.enctype = !!y.createElement("form").enctype,
        c.disabled = !0,
        k.optDisabled = !e.disabled,
        a = y.createElement("input"),
        a.setAttribute("value", ""),
        k.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        k.radioValue = "t" === a.value
    }
    ();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a,
                        null  == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null  == a ? "" : a + ""
                        }
                        )),
                        b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                        b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    }
                    );
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                    b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(lc, "") : null  == c ? "" : c)
            }
        }
    }),
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null  != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null  : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null  !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (m.valHooks[this].get = function(a) {
            return null  === a.getAttribute("value") ? "on" : a.value
        }
        )
    }
    );
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            }
            )
        }
    }),
    m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(),
                d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)),
                void 0 === c ? d && "get" in d && null  !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b),
                null  == e ? void 0 : e) : null  !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c,
                    m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""),
                    a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b],
            oc[b] = e,
            e = null  != c(a, b, d) ? b.toLowerCase() : null ,
            oc[b] = f),
            e
        }
         : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null 
        }
    }
    ),
    rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }),
    qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null 
    }
    ,
    m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    },
    m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    },
    m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    }
    )),
    k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i
      , tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            }
            )
        }
    }),
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a),
                f && (b = m.propFix[b] || b,
                e = m.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null  !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }
    ),
    k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null 
        }
    }),
    m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }
    ),
    k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                }
                );
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                }
                );
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            }
             : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
        }
    }
    ),
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null , b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null , b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now()
      , wc = /\?/
      , xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null , e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        }
        )) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }
    ,
    m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null ;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b),
        c
    }
    ;
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"),
        zc.href = "",
        zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mc(a, b, c, d) {
        var e = {}
          , f = a === Ic;
        function g(h) {
            var i;
            return e[h] = !0,
            m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }
            ),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c),
        a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null  == b ? null  : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null 
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null  == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()),
            k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)),
            Mc(Hc, k, b, v),
            2 === t)
                return v;
            h = k.global,
            h && 0 === m.active++ && m.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !Ec.test(k.type),
            e = k.url,
            k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)),
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1,
                h && n.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }
                , k.timeout));
                try {
                    t = 1,
                    i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                i = void 0,
                f = d || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                c && (u = Oc(k, v, c)),
                u = Pc(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (m.lastModified[e] = w),
                w = v.getResponseHeader("etag"),
                w && (m.etag[e] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                h && (n.trigger("ajaxComplete", [v, k]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }),
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }
    ),
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }
    ),
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                }
                );
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }
                ).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            }
             : function() {
                var b = m(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }
            ).end()
        }
    }),
    m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }
    ,
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    }
    ;
    var Qc = /%20/g
      , Rc = /\[\]$/
      , Sc = /\r?\n/g
      , Tc = /^(?:submit|button|image|reset|file)$/i
      , Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            }
            );
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null  == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
        m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            }
            );
        else
            for (c in a)
                Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }
    ,
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }
            ).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }
            ).map(function(a, b) {
                var c = m(this).val();
                return null  == c ? null  : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }
                ) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }
            ).get()
        }
    }),
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    }
     : Zc;
    var Wc = 0
      , Xc = {}
      , Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc)
            Xc[a](void 0, !0)
    }
    ),
    k.cors = !!Yc && "withCredentials" in Yc,
    Yc = k.ajax = !!Yc,
    Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null ),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g],
                            b = void 0,
                            f.onreadystatechange = m.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }
    );
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                a
            }
        }
    }),
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }
    ),
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null ,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null ,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    }
    );
    var _c = []
      , ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0,
            a
        }
    }),
    m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            _c.push(e)),
            g && m.isFunction(f) && f(g[0]),
            g = f = void 0
        }
        ),
        "script") : void 0
    }
    ),
    m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null ;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || y;
        var d = u.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e),
        e && e.length && m(e).remove(),
        m.merge([], d.childNodes))
    }
    ;
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd)
            return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        m.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }
        ).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }
        ).length
    }
    ;
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = m.css(a, "top"),
            i = m.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            m.isFunction(b) && (b = b.call(a, c, h)),
            null  != b.top && (n.top = b.top - h.top + g),
            null  != b.left && (n.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, n) : l.css(n)
        }
    },
    m.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                }
                );
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()),
                c = dd(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                m.nodeName(a[0], "html") || (c = a.offset()),
                c.top += m.css(a[0], "borderTopWidth", !0),
                c.left += m.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                    a = a.offsetParent;
                return a || cd
            }
            )
        }
    }),
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }
            , a, d, arguments.length, null )
        }
    }
    ),
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b),
            Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        }
        )
    }
    ),
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }
                , b, f ? d : void 0, f, null )
            }
        }
        )
    }
    ),
    m.fn.size = function() {
        return this.length
    }
    ,
    m.fn.andSelf = m.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    }
    );
    var ed = a.jQuery
      , fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd),
        b && a.jQuery === m && (a.jQuery = ed),
        m
    }
    ,
    typeof b === K && (a.jQuery = a.$ = m),
    m
}
);

;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }
        return function(r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r)
              , a = (o || r).length
              , c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c],
            c += n),
            t(r, e, u, o, c, a)
        }
    }
    function t(n) {
        return function(t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (r(t[i], i, t))
                    return i;
            return -1
        }
    }
    function r(n, t, r) {
        return function(e, u, i) {
            var o = 0
              , a = O(e);
            if ("number" == typeof i)
                n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
            else if (r && i && a)
                return i = r(e, u),
                e[i] === u ? i : -1;
            if (u !== u)
                return i = t(l.call(e, o, a), m.isNaN),
                i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
                if (e[i] === u)
                    return i;
            return -1
        }
    }
    function e(n, t) {
        var r = I.length
          , e = n.constructor
          , u = m.isFunction(e) && e.prototype || a
          , i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--; )
            i = I[r],
            i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }
    var u = this
      , i = u._
      , o = Array.prototype
      , a = Object.prototype
      , c = Function.prototype
      , f = o.push
      , l = o.slice
      , s = a.toString
      , p = a.hasOwnProperty
      , h = Array.isArray
      , v = Object.keys
      , g = c.bind
      , y = Object.create
      , d = function() {}
      , m = function(n) {
        return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n)
    }
    ;
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m),
    exports._ = m) : u._ = m,
    m.VERSION = "1.8.3";
    var b = function(n, t, r) {
        if (t === void 0)
            return n;
        switch (null  == r ? 3 : r) {
        case 1:
            return function(r) {
                return n.call(t, r)
            }
            ;
        case 2:
            return function(r, e) {
                return n.call(t, r, e)
            }
            ;
        case 3:
            return function(r, e, u) {
                return n.call(t, r, e, u)
            }
            ;
        case 4:
            return function(r, e, u, i) {
                return n.call(t, r, e, u, i)
            }
        }
        return function() {
            return n.apply(t, arguments)
        }
    }
      , x = function(n, t, r) {
        return null  == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
    }
    ;
    m.iteratee = function(n, t) {
        return x(n, t, 1 / 0)
    }
    ;
    var _ = function(n, t) {
        return function(r) {
            var e = arguments.length;
            if (2 > e || null  == r)
                return r;
            for (var u = 1; e > u; u++)
                for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                    var f = o[c];
                    t && r[f] !== void 0 || (r[f] = i[f])
                }
            return r
        }
    }
      , j = function(n) {
        if (!m.isObject(n))
            return {};
        if (y)
            return y(n);
        d.prototype = n;
        var t = new d;
        return d.prototype = null ,
        t
    }
      , w = function(n) {
        return function(t) {
            return null  == t ? void 0 : t[n]
        }
    }
      , A = Math.pow(2, 53) - 1
      , O = w("length")
      , k = function(n) {
        var t = O(n);
        return "number" == typeof t && t >= 0 && A >= t
    }
    ;
    m.each = m.forEach = function(n, t, r) {
        t = b(t, r);
        var e, u;
        if (k(n))
            for (e = 0,
            u = n.length; u > e; e++)
                t(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0,
            u = i.length; u > e; e++)
                t(n[i[e]], i[e], n)
        }
        return n
    }
    ,
    m.map = m.collect = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }
    ,
    m.reduce = m.foldl = m.inject = n(1),
    m.reduceRight = m.foldr = n(-1),
    m.find = m.detect = function(n, t, r) {
        var e;
        return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r),
        e !== void 0 && e !== -1 ? n[e] : void 0
    }
    ,
    m.filter = m.select = function(n, t, r) {
        var e = [];
        return t = x(t, r),
        m.each(n, function(n, r, u) {
            t(n, r, u) && e.push(n)
        }
        ),
        e
    }
    ,
    m.reject = function(n, t, r) {
        return m.filter(n, m.negate(x(t)), r)
    }
    ,
    m.every = m.all = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n))
                return !1
        }
        return !0
    }
    ,
    m.some = m.any = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n))
                return !0
        }
        return !1
    }
    ,
    m.contains = m.includes = m.include = function(n, t, r, e) {
        return k(n) || (n = m.values(n)),
        ("number" != typeof r || e) && (r = 0),
        m.indexOf(n, t, r) >= 0
    }
    ,
    m.invoke = function(n, t) {
        var r = l.call(arguments, 2)
          , e = m.isFunction(t);
        return m.map(n, function(n) {
            var u = e ? t : n[t];
            return null  == u ? u : u.apply(n, r)
        }
        )
    }
    ,
    m.pluck = function(n, t) {
        return m.map(n, m.property(t))
    }
    ,
    m.where = function(n, t) {
        return m.filter(n, m.matcher(t))
    }
    ,
    m.findWhere = function(n, t) {
        return m.find(n, m.matcher(t))
    }
    ,
    m.max = function(n, t, r) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null  == t && null  != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)
                e = n[a],
                e > i && (i = e)
        } else
            t = x(t, r),
            m.each(n, function(n, r, e) {
                u = t(n, r, e),
                (u > o || u === -1 / 0 && i === -1 / 0) && (i = n,
                o = u)
            }
            );
        return i
    }
    ,
    m.min = function(n, t, r) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null  == t && null  != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)
                e = n[a],
                i > e && (i = e)
        } else
            t = x(t, r),
            m.each(n, function(n, r, e) {
                u = t(n, r, e),
                (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n,
                o = u)
            }
            );
        return i
    }
    ,
    m.shuffle = function(n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
            t = m.random(0, i),
            t !== i && (u[i] = u[t]),
            u[t] = r[i];
        return u
    }
    ,
    m.sample = function(n, t, r) {
        return null  == t || r ? (k(n) || (n = m.values(n)),
        n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
    }
    ,
    m.sortBy = function(n, t, r) {
        return t = x(t, r),
        m.pluck(m.map(n, function(n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            }
        }
        ).sort(function(n, t) {
            var r = n.criteria
              , e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)
                    return 1;
                if (e > r || e === void 0)
                    return -1
            }
            return n.index - t.index
        }
        ), "value")
    }
    ;
    var F = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = x(r, e),
            m.each(t, function(e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }
            ),
            u
        }
    }
    ;
    m.groupBy = F(function(n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }
    ),
    m.indexBy = F(function(n, t, r) {
        n[r] = t
    }
    ),
    m.countBy = F(function(n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1
    }
    ),
    m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }
    ,
    m.size = function(n) {
        return null  == n ? 0 : k(n) ? n.length : m.keys(n).length
    }
    ,
    m.partition = function(n, t, r) {
        t = x(t, r);
        var e = []
          , u = [];
        return m.each(n, function(n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }
        ),
        [e, u]
    }
    ,
    m.first = m.head = m.take = function(n, t, r) {
        return null  == n ? void 0 : null  == t || r ? n[0] : m.initial(n, n.length - t)
    }
    ,
    m.initial = function(n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null  == t || r ? 1 : t)))
    }
    ,
    m.last = function(n, t, r) {
        return null  == n ? void 0 : null  == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
    }
    ,
    m.rest = m.tail = m.drop = function(n, t, r) {
        return l.call(n, null  == t || r ? 1 : t)
    }
    ,
    m.compact = function(n) {
        return m.filter(n, m.identity)
    }
    ;
    var S = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));
                var f = 0
                  , l = c.length;
                for (u.length += l; l > f; )
                    u[i++] = c[f++]
            } else
                r || (u[i++] = c)
        }
        return u
    }
    ;
    m.flatten = function(n, t) {
        return S(n, t, !1)
    }
    ,
    m.without = function(n) {
        return m.difference(n, l.call(arguments, 1))
    }
    ,
    m.uniq = m.unique = function(n, t, r, e) {
        m.isBoolean(t) || (e = r,
        r = t,
        t = !1),
        null  != r && (r = x(r, e));
        for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
            var c = n[o]
              , f = r ? r(c, o, n) : c;
            t ? (o && i === f || u.push(c),
            i = f) : r ? m.contains(i, f) || (i.push(f),
            u.push(c)) : m.contains(u, c) || u.push(c)
        }
        return u
    }
    ,
    m.union = function() {
        return m.uniq(S(arguments, !0, !0))
    }
    ,
    m.intersection = function(n) {
        for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++)
                    ;
                o === r && t.push(i)
            }
        }
        return t
    }
    ,
    m.difference = function(n) {
        var t = S(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(t, n)
        }
        )
    }
    ,
    m.zip = function() {
        return m.unzip(arguments)
    }
    ,
    m.unzip = function(n) {
        for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)
            r[e] = m.pluck(n, e);
        return r
    }
    ,
    m.object = function(n, t) {
        for (var r = {}, e = 0, u = O(n); u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }
    ,
    m.findIndex = t(1),
    m.findLastIndex = t(-1),
    m.sortedIndex = function(n, t, r, e) {
        r = x(r, e, 1);
        for (var u = r(t), i = 0, o = O(n); o > i; ) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }
    ,
    m.indexOf = r(1, m.findIndex, m.sortedIndex),
    m.lastIndexOf = r(-1, m.findLastIndex),
    m.range = function(n, t, r) {
        null  == t && (t = n || 0,
        n = 0),
        r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++,
        n += r)
            u[i] = n;
        return u
    }
    ;
    var E = function(n, t, r, e, u) {
        if (!(e instanceof t))
            return n.apply(r, u);
        var i = j(n.prototype)
          , o = n.apply(i, u);
        return m.isObject(o) ? o : i
    }
    ;
    m.bind = function(n, t) {
        if (g && n.bind === g)
            return g.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n))
            throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2)
          , e = function() {
            return E(n, e, t, this, r.concat(l.call(arguments)))
        }
        ;
        return e
    }
    ,
    m.partial = function(n) {
        var t = l.call(arguments, 1)
          , r = function() {
            for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)
                i[o] = t[o] === m ? arguments[e++] : t[o];
            for (; e < arguments.length; )
                i.push(arguments[e++]);
            return E(n, r, this, this, i)
        }
        ;
        return r
    }
    ,
    m.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e)
            throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++)
            r = arguments[t],
            n[r] = m.bind(n[r], n);
        return n
    }
    ,
    m.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache
              , i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)),
            u[i]
        }
        ;
        return r.cache = {},
        r
    }
    ,
    m.delay = function(n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null , r)
        }
        , t)
    }
    ,
    m.defer = m.partial(m.delay, m, 1),
    m.throttle = function(n, t, r) {
        var e, u, i, o = null , a = 0;
        r || (r = {});
        var c = function() {
            a = r.leading === !1 ? 0 : m.now(),
            o = null ,
            i = n.apply(e, u),
            o || (e = u = null )
        }
        ;
        return function() {
            var f = m.now();
            a || r.leading !== !1 || (a = f);
            var l = t - (f - a);
            return e = this,
            u = arguments,
            0 >= l || l > t ? (o && (clearTimeout(o),
            o = null ),
            a = f,
            i = n.apply(e, u),
            o || (e = u = null )) : o || r.trailing === !1 || (o = setTimeout(c, l)),
            i
        }
    }
    ,
    m.debounce = function(n, t, r) {
        var e, u, i, o, a, c = function() {
            var f = m.now() - o;
            t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null ,
            r || (a = n.apply(i, u),
            e || (i = u = null )))
        }
        ;
        return function() {
            i = this,
            u = arguments,
            o = m.now();
            var f = r && !e;
            return e || (e = setTimeout(c, t)),
            f && (a = n.apply(i, u),
            i = u = null ),
            a
        }
    }
    ,
    m.wrap = function(n, t) {
        return m.partial(t, n)
    }
    ,
    m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }
    ,
    m.compose = function() {
        var n = arguments
          , t = n.length - 1;
        return function() {
            for (var r = t, e = n[t].apply(this, arguments); r--; )
                e = n[r].call(this, e);
            return e
        }
    }
    ,
    m.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }
    ,
    m.before = function(n, t) {
        var r;
        return function() {
            return --n > 0 && (r = t.apply(this, arguments)),
            1 >= n && (t = null ),
            r
        }
    }
    ,
    m.once = m.partial(m.before, 2);
    var M = !{
        toString: null 
    }.propertyIsEnumerable("toString")
      , I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function(n) {
        if (!m.isObject(n))
            return [];
        if (v)
            return v(n);
        var t = [];
        for (var r in n)
            m.has(n, r) && t.push(r);
        return M && e(n, t),
        t
    }
    ,
    m.allKeys = function(n) {
        if (!m.isObject(n))
            return [];
        var t = [];
        for (var r in n)
            t.push(r);
        return M && e(n, t),
        t
    }
    ,
    m.values = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = n[t[u]];
        return e
    }
    ,
    m.mapObject = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)
            e = u[a],
            o[e] = t(n[e], e, n);
        return o
    }
    ,
    m.pairs = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = [t[u], n[t[u]]];
        return e
    }
    ,
    m.invert = function(n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)
            t[n[r[e]]] = r[e];
        return t
    }
    ,
    m.functions = m.methods = function(n) {
        var t = [];
        for (var r in n)
            m.isFunction(n[r]) && t.push(r);
        return t.sort()
    }
    ,
    m.extend = _(m.allKeys),
    m.extendOwn = m.assign = _(m.keys),
    m.findKey = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
            if (e = u[i],
            t(n[e], e, n))
                return e
    }
    ,
    m.pick = function(n, t, r) {
        var e, u, i = {}, o = n;
        if (null  == o)
            return i;
        m.isFunction(t) ? (u = m.allKeys(o),
        e = b(t, r)) : (u = S(arguments, !1, !1, 1),
        e = function(n, t, r) {
            return t in r
        }
        ,
        o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var f = u[a]
              , l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }
    ,
    m.omit = function(n, t, r) {
        if (m.isFunction(t))
            t = m.negate(t);
        else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            t = function(n, t) {
                return !m.contains(e, t)
            }
        }
        return m.pick(n, t, r)
    }
    ,
    m.defaults = _(m.allKeys, !0),
    m.create = function(n, t) {
        var r = j(n);
        return t && m.extendOwn(r, t),
        r
    }
    ,
    m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
    }
    ,
    m.tap = function(n, t) {
        return t(n),
        n
    }
    ,
    m.isMatch = function(n, t) {
        var r = m.keys(t)
          , e = r.length;
        if (null  == n)
            return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u))
                return !1
        }
        return !0
    }
    ;
    var N = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n === 1 / t;
        if (null  == n || null  == t)
            return n === t;
        n instanceof m && (n = n._wrapped),
        t instanceof m && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t))
            return !1;
        switch (u) {
        case "[object RegExp]":
        case "[object String]":
            return "" + n == "" + t;
        case "[object Number]":
            return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
        case "[object Date]":
        case "[object Boolean]":
            return +n === +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t)
                return !1;
            var o = n.constructor
              , a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t)
                return !1
        }
        r = r || [],
        e = e || [];
        for (var c = r.length; c--; )
            if (r[c] === n)
                return e[c] === t;
        if (r.push(n),
        e.push(t),
        i) {
            if (c = n.length,
            c !== t.length)
                return !1;
            for (; c--; )
                if (!N(n[c], t[c], r, e))
                    return !1
        } else {
            var f, l = m.keys(n);
            if (c = l.length,
            m.keys(t).length !== c)
                return !1;
            for (; c--; )
                if (f = l[c],
                !m.has(t, f) || !N(n[f], t[f], r, e))
                    return !1
        }
        return r.pop(),
        e.pop(),
        !0
    }
    ;
    m.isEqual = function(n, t) {
        return N(n, t)
    }
    ,
    m.isEmpty = function(n) {
        return null  == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
    }
    ,
    m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }
    ,
    m.isArray = h || function(n) {
        return "[object Array]" === s.call(n)
    }
    ,
    m.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }
    ,
    m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
        m["is" + n] = function(t) {
            return s.call(t) === "[object " + n + "]"
        }
    }
    ),
    m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1
    }
    ),
    m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }
    ,
    m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n
    }
    ,
    m.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
    }
    ,
    m.isNull = function(n) {
        return null  === n
    }
    ,
    m.isUndefined = function(n) {
        return n === void 0
    }
    ,
    m.has = function(n, t) {
        return null  != n && p.call(n, t)
    }
    ,
    m.noConflict = function() {
        return u._ = i,
        this
    }
    ,
    m.identity = function(n) {
        return n
    }
    ,
    m.constant = function(n) {
        return function() {
            return n
        }
    }
    ,
    m.noop = function() {}
    ,
    m.property = w,
    m.propertyOf = function(n) {
        return null  == n ? function() {}
         : function(t) {
            return n[t]
        }
    }
    ,
    m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n),
        function(t) {
            return m.isMatch(t, n)
        }
    }
    ,
    m.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = b(t, r, 1);
        for (var u = 0; n > u; u++)
            e[u] = t(u);
        return e
    }
    ,
    m.random = function(n, t) {
        return null  == t && (t = n,
        n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    }
    ,
    m.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , T = m.invert(B)
      , R = function(n) {
        var t = function(t) {
            return n[t]
        }
          , r = "(?:" + m.keys(n).join("|") + ")"
          , e = RegExp(r)
          , u = RegExp(r, "g");
        return function(n) {
            return n = null  == n ? "" : "" + n,
            e.test(n) ? n.replace(u, t) : n
        }
    }
    ;
    m.escape = R(B),
    m.unescape = R(T),
    m.result = function(n, t, r) {
        var e = null  == n ? void 0 : n[t];
        return e === void 0 && (e = r),
        m.isFunction(e) ? e.call(n) : e
    }
    ;
    var q = 0;
    m.uniqueId = function(n) {
        var t = ++q + "";
        return n ? n + t : t
    }
    ,
    m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var K = /(.)^/
      , z = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , D = /\\|'|\r|\n|\u2028|\u2029/g
      , L = function(n) {
        return "\\" + z[n]
    }
    ;
    m.template = function(n, t, r) {
        !t && r && (t = r),
        t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g")
          , u = 0
          , i = "__p+='";
        n.replace(e, function(t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L),
            u = a + t.length,
            r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"),
            t
        }
        ),
        i += "';\n",
        t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj","_",i)
        } catch (a) {
            throw a.source = i,
            a
        }
        var c = function(n) {
            return o.call(this, n, m)
        }
          , f = t.variable || "obj";
        return c.source = "function(" + f + "){\n" + i + "}",
        c
    }
    ,
    m.chain = function(n) {
        var t = m(n);
        return t._chain = !0,
        t
    }
    ;
    var P = function(n, t) {
        return n._chain ? m(t).chain() : t
    }
    ;
    m.mixin = function(n) {
        m.each(m.functions(n), function(t) {
            var r = m[t] = n[t];
            m.prototype[t] = function() {
                var n = [this._wrapped];
                return f.apply(n, arguments),
                P(this, r.apply(m, n))
            }
        }
        )
    }
    ,
    m.mixin(m),
    m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0],
            P(this, r)
        }
    }
    ),
    m.each(["concat", "join", "slice"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            return P(this, t.apply(this._wrapped, arguments))
        }
    }
    ),
    m.prototype.value = function() {
        return this._wrapped
    }
    ,
    m.prototype.valueOf = m.prototype.toJSON = m.prototype.value,
    m.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return m
    }
    )
}
).call(this);
;!function(e) {
    if ("object" == typeof exports)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define(e);
    else {
        var r;
        "undefined" != typeof window ? r = window : "undefined" != typeof global ? r = global : "undefined" != typeof self && (r = self),
        r.s = e()
    }
}
(function() {
    return function e(r, t, n) {
        function i(o, p) {
            if (!t[o]) {
                if (!r[o]) {
                    var u = "function" == typeof require && require;
                    if (!p && u)
                        return u(o, !0);
                    if (a)
                        return a(o, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                var c = t[o] = {
                    exports: {}
                };
                r[o][0].call(c.exports, function(e) {
                    var t = r[o][1][e];
                    return i(t ? t : e)
                }
                , c, c.exports, e, r, t, n)
            }
            return t[o].exports
        }
        for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
            i(n[o]);
        return i
    }
    ({
        1: [function(e, r) {
            var t = e("./trim")
              , n = e("./decapitalize");
            r.exports = function(e, r) {
                return e = t(e).replace(/[-_\s]+(.)?/g, function(e, r) {
                    return r ? r.toUpperCase() : ""
                }
                ),
                r === !0 ? n(e) : e
            }
        }
        , {
            "./decapitalize": 9,
            "./trim": 61
        }],
        2: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                e = t(e);
                var n = r ? e.slice(1).toLowerCase() : e.slice(1);
                return e.charAt(0).toUpperCase() + n
            }
        }
        , {
            "./helper/makeString": 20
        }],
        3: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e) {
                return t(e).split("")
            }
        }
        , {
            "./helper/makeString": 20
        }],
        4: [function(e, r) {
            r.exports = function(e, r) {
                return null  == e ? [] : (e = String(e),
                r = ~~r,
                r > 0 ? e.match(new RegExp(".{1," + r + "}","g")) : [e])
            }
        }
        , {}],
        5: [function(e, r) {
            var t = e("./capitalize")
              , n = e("./camelize")
              , i = e("./helper/makeString");
            r.exports = function(e) {
                return e = i(e),
                t(n(e.replace(/[\W_]/g, " ")).replace(/\s/g, ""))
            }
        }
        , {
            "./camelize": 1,
            "./capitalize": 2,
            "./helper/makeString": 20
        }],
        6: [function(e, r) {
            var t = e("./trim");
            r.exports = function(e) {
                return t(e).replace(/\s+/g, " ")
            }
        }
        , {
            "./trim": 61
        }],
        7: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                return e = t(e),
                r = t(r),
                0 === e.length || 0 === r.length ? 0 : e.split(r).length - 1
            }
        }
        , {
            "./helper/makeString": 20
        }],
        8: [function(e, r) {
            var t = e("./trim");
            r.exports = function(e) {
                return t(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
            }
        }
        , {
            "./trim": 61
        }],
        9: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e) {
                return e = t(e),
                e.charAt(0).toLowerCase() + e.slice(1)
            }
        }
        , {
            "./helper/makeString": 20
        }],
        10: [function(e, r) {
            function t(e) {
                for (var r = e.match(/^[\s\\t]*/gm), t = r[0].length, n = 1; n < r.length; n++)
                    t = Math.min(r[n].length, t);
                return t
            }
            var n = e("./helper/makeString");
            r.exports = function(e, r) {
                e = n(e);
                var i, a = t(e);
                return 0 === a ? e : (i = "string" == typeof r ? new RegExp("^" + r,"gm") : new RegExp("^[ \\t]{" + a + "}","gm"),
                e.replace(i, ""))
            }
        }
        , {
            "./helper/makeString": 20
        }],
        11: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/toPositive");
            r.exports = function(e, r, i) {
                return e = t(e),
                r = "" + r,
                i = "undefined" == typeof i ? e.length - r.length : Math.min(n(i), e.length) - r.length,
                i >= 0 && e.indexOf(r, i) === i
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/toPositive": 22
        }],
        12: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/escapeChars")
              , i = "[";
            for (var a in n)
                i += a;
            i += "]";
            var o = new RegExp(i,"g");
            r.exports = function(e) {
                return t(e).replace(o, function(e) {
                    return "&" + n[e] + ";"
                }
                )
            }
        }
        , {
            "./helper/escapeChars": 17,
            "./helper/makeString": 20
        }],
        13: [function(e, r) {
            r.exports = function() {
                var e = {};
                for (var r in this)
                    this.hasOwnProperty(r) && !r.match(/^(?:include|contains|reverse|join)$/) && (e[r] = this[r]);
                return e
            }
        }
        , {}],
        14: [function(e, r) {
            "use strict";
            function t(e) {
                return this instanceof t ? void (this._wrapped = e) : new t(e)
            }
            function n(e, r) {
                "function" == typeof r && (t.prototype[e] = function() {
                    var e = [this._wrapped].concat(Array.prototype.slice.call(arguments))
                      , n = r.apply(null , e);
                    return "string" == typeof n ? new t(n) : n
                }
                )
            }
            function i(e) {
                n(e, function(r) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return String.prototype[e].apply(r, t)
                }
                )
            }
            t.VERSION = "3.1.1",
            t.isBlank = e("./isBlank"),
            t.stripTags = e("./stripTags"),
            t.capitalize = e("./capitalize"),
            t.decapitalize = e("./decapitalize"),
            t.chop = e("./chop"),
            t.trim = e("./trim"),
            t.clean = e("./clean"),
            t.count = e("./count"),
            t.chars = e("./chars"),
            t.swapCase = e("./swapCase"),
            t.escapeHTML = e("./escapeHTML"),
            t.unescapeHTML = e("./unescapeHTML"),
            t.splice = e("./splice"),
            t.insert = e("./insert"),
            t.replaceAll = e("./replaceAll"),
            t.include = e("./include"),
            t.join = e("./join"),
            t.lines = e("./lines"),
            t.dedent = e("./dedent"),
            t.reverse = e("./reverse"),
            t.startsWith = e("./startsWith"),
            t.endsWith = e("./endsWith"),
            t.pred = e("./pred"),
            t.succ = e("./succ"),
            t.titleize = e("./titleize"),
            t.camelize = e("./camelize"),
            t.underscored = e("./underscored"),
            t.dasherize = e("./dasherize"),
            t.classify = e("./classify"),
            t.humanize = e("./humanize"),
            t.ltrim = e("./ltrim"),
            t.rtrim = e("./rtrim"),
            t.truncate = e("./truncate"),
            t.prune = e("./prune"),
            t.words = e("./words"),
            t.pad = e("./pad"),
            t.lpad = e("./lpad"),
            t.rpad = e("./rpad"),
            t.lrpad = e("./lrpad"),
            t.sprintf = e("./sprintf"),
            t.vsprintf = e("./vsprintf"),
            t.toNumber = e("./toNumber"),
            t.numberFormat = e("./numberFormat"),
            t.strRight = e("./strRight"),
            t.strRightBack = e("./strRightBack"),
            t.strLeft = e("./strLeft"),
            t.strLeftBack = e("./strLeftBack"),
            t.toSentence = e("./toSentence"),
            t.toSentenceSerial = e("./toSentenceSerial"),
            t.slugify = e("./slugify"),
            t.surround = e("./surround"),
            t.quote = e("./quote"),
            t.unquote = e("./unquote"),
            t.repeat = e("./repeat"),
            t.naturalCmp = e("./naturalCmp"),
            t.levenshtein = e("./levenshtein"),
            t.toBoolean = e("./toBoolean"),
            t.exports = e("./exports"),
            t.escapeRegExp = e("./helper/escapeRegExp"),
            t.strip = t.trim,
            t.lstrip = t.ltrim,
            t.rstrip = t.rtrim,
            t.center = t.lrpad,
            t.rjust = t.lpad,
            t.ljust = t.rpad,
            t.contains = t.include,
            t.q = t.quote,
            t.toBool = t.toBoolean,
            t.camelcase = t.camelize,
            t.prototype = {
                value: function() {
                    return this._wrapped
                }
            };
            for (var a in t)
                n(a, t[a]);
            n("tap", function(e, r) {
                return r(e)
            }
            );
            var o = ["toUpperCase", "toLowerCase", "split", "replace", "slice", "substring", "substr", "concat"];
            for (var a in o)
                i(o[a]);
            r.exports = t
        }
        , {
            "./camelize": 1,
            "./capitalize": 2,
            "./chars": 3,
            "./chop": 4,
            "./classify": 5,
            "./clean": 6,
            "./count": 7,
            "./dasherize": 8,
            "./decapitalize": 9,
            "./dedent": 10,
            "./endsWith": 11,
            "./escapeHTML": 12,
            "./exports": 13,
            "./helper/escapeRegExp": 18,
            "./humanize": 23,
            "./include": 24,
            "./insert": 25,
            "./isBlank": 26,
            "./join": 27,
            "./levenshtein": 28,
            "./lines": 29,
            "./lpad": 30,
            "./lrpad": 31,
            "./ltrim": 32,
            "./naturalCmp": 33,
            "./numberFormat": 34,
            "./pad": 35,
            "./pred": 36,
            "./prune": 37,
            "./quote": 38,
            "./repeat": 39,
            "./replaceAll": 40,
            "./reverse": 41,
            "./rpad": 42,
            "./rtrim": 43,
            "./slugify": 44,
            "./splice": 45,
            "./sprintf": 46,
            "./startsWith": 47,
            "./strLeft": 48,
            "./strLeftBack": 49,
            "./strRight": 50,
            "./strRightBack": 51,
            "./stripTags": 52,
            "./succ": 53,
            "./surround": 54,
            "./swapCase": 55,
            "./titleize": 56,
            "./toBoolean": 57,
            "./toNumber": 58,
            "./toSentence": 59,
            "./toSentenceSerial": 60,
            "./trim": 61,
            "./truncate": 62,
            "./underscored": 63,
            "./unescapeHTML": 64,
            "./unquote": 65,
            "./vsprintf": 66,
            "./words": 67
        }],
        15: [function(e, r) {
            var t = e("./makeString");
            r.exports = function(e, r) {
                return e = t(e),
                0 === e.length ? "" : e.slice(0, -1) + String.fromCharCode(e.charCodeAt(e.length - 1) + r)
            }
        }
        , {
            "./makeString": 20
        }],
        16: [function(e, r) {
            var t = e("./escapeRegExp");
            r.exports = function(e) {
                return null  == e ? "\\s" : e.source ? e.source : "[" + t(e) + "]"
            }
        }
        , {
            "./escapeRegExp": 18
        }],
        17: [function(e, r) {
            var t = {
                "¢": "cent",
                "£": "pound",
                "¥": "yen",
                "€": "euro",
                "©": "copy",
                "®": "reg",
                "<": "lt",
                ">": "gt",
                '"': "quot",
                "&": "amp",
                "'": "#39"
            };
            r.exports = t
        }
        , {}],
        18: [function(e, r) {
            var t = e("./makeString");
            r.exports = function(e) {
                return t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
            }
        }
        , {
            "./makeString": 20
        }],
        19: [function(e, r) {
            var t = {
                nbsp: " ",
                cent: "¢",
                pound: "£",
                yen: "¥",
                euro: "€",
                copy: "©",
                reg: "®",
                lt: "<",
                gt: ">",
                quot: '"',
                amp: "&",
                apos: "'"
            };
            r.exports = t
        }
        , {}],
        20: [function(e, r) {
            r.exports = function(e) {
                return null  == e ? "" : "" + e
            }
        }
        , {}],
        21: [function(e, r) {
            r.exports = function(e, r) {
                if (1 > r)
                    return "";
                for (var t = ""; r > 0; )
                    1 & r && (t += e),
                    r >>= 1,
                    e += e;
                return t
            }
        }
        , {}],
        22: [function(e, r) {
            r.exports = function(e) {
                return 0 > e ? 0 : +e || 0
            }
        }
        , {}],
        23: [function(e, r) {
            var t = e("./capitalize")
              , n = e("./underscored")
              , i = e("./trim");
            r.exports = function(e) {
                return t(i(n(e).replace(/_id$/, "").replace(/_/g, " ")))
            }
        }
        , {
            "./capitalize": 2,
            "./trim": 61,
            "./underscored": 63
        }],
        24: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                return "" === r ? !0 : -1 !== t(e).indexOf(r)
            }
        }
        , {
            "./helper/makeString": 20
        }],
        25: [function(e, r) {
            var t = e("./splice");
            r.exports = function(e, r, n) {
                return t(e, r, 0, n)
            }
        }
        , {
            "./splice": 45
        }],
        26: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e) {
                return /^\s*$/.test(t(e))
            }
        }
        , {
            "./helper/makeString": 20
        }],
        27: [function(e, r) {
            var t = e("./helper/makeString")
              , n = [].slice;
            r.exports = function() {
                var e = n.call(arguments)
                  , r = e.shift();
                return e.join(t(r))
            }
        }
        , {
            "./helper/makeString": 20
        }],
        28: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                "use strict";
                if (e = t(e),
                r = t(r),
                e === r)
                    return 0;
                if (!e || !r)
                    return Math.max(e.length, r.length);
                for (var n = new Array(r.length + 1), i = 0; i < n.length; ++i)
                    n[i] = i;
                for (i = 0; i < e.length; ++i) {
                    for (var a = i + 1, o = 0; o < r.length; ++o) {
                        var p = a;
                        a = n[o] + (e.charAt(i) === r.charAt(o) ? 0 : 1);
                        var u = p + 1;
                        a > u && (a = u),
                        u = n[o + 1] + 1,
                        a > u && (a = u),
                        n[o] = p
                    }
                    n[o] = a
                }
                return a
            }
        }
        , {
            "./helper/makeString": 20
        }],
        29: [function(e, r) {
            r.exports = function(e) {
                return null  == e ? [] : String(e).split(/\r?\n/)
            }
        }
        , {}],
        30: [function(e, r) {
            var t = e("./pad");
            r.exports = function(e, r, n) {
                return t(e, r, n)
            }
        }
        , {
            "./pad": 35
        }],
        31: [function(e, r) {
            var t = e("./pad");
            r.exports = function(e, r, n) {
                return t(e, r, n, "both")
            }
        }
        , {
            "./pad": 35
        }],
        32: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/defaultToWhiteSpace")
              , i = String.prototype.trimLeft;
            r.exports = function(e, r) {
                return e = t(e),
                !r && i ? i.call(e) : (r = n(r),
                e.replace(new RegExp("^" + r + "+"), ""))
            }
        }
        , {
            "./helper/defaultToWhiteSpace": 16,
            "./helper/makeString": 20
        }],
        33: [function(e, r) {
            r.exports = function(e, r) {
                if (e == r)
                    return 0;
                if (!e)
                    return -1;
                if (!r)
                    return 1;
                for (var t = /(\.\d+|\d+|\D+)/g, n = String(e).match(t), i = String(r).match(t), a = Math.min(n.length, i.length), o = 0; a > o; o++) {
                    var p = n[o]
                      , u = i[o];
                    if (p !== u) {
                        var c = +p
                          , s = +u;
                        return c === c && s === s ? c > s ? 1 : -1 : u > p ? -1 : 1
                    }
                }
                return n.length != i.length ? n.length - i.length : r > e ? -1 : 1
            }
        }
        , {}],
        34: [function(e, r) {
            r.exports = function(e, r, t, n) {
                if (isNaN(e) || null  == e)
                    return "";
                e = e.toFixed(~~r),
                n = "string" == typeof n ? n : ",";
                var i = e.split(".")
                  , a = i[0]
                  , o = i[1] ? (t || ".") + i[1] : "";
                return a.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + n) + o
            }
        }
        , {}],
        35: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/strRepeat");
            r.exports = function(e, r, i, a) {
                e = t(e),
                r = ~~r;
                var o = 0;
                switch (i ? i.length > 1 && (i = i.charAt(0)) : i = " ",
                a) {
                case "right":
                    return o = r - e.length,
                    e + n(i, o);
                case "both":
                    return o = r - e.length,
                    n(i, Math.ceil(o / 2)) + e + n(i, Math.floor(o / 2));
                default:
                    return o = r - e.length,
                    n(i, o) + e
                }
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/strRepeat": 21
        }],
        36: [function(e, r) {
            var t = e("./helper/adjacent");
            r.exports = function(e) {
                return t(e, -1)
            }
        }
        , {
            "./helper/adjacent": 15
        }],
        37: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./rtrim");
            r.exports = function(e, r, i) {
                if (e = t(e),
                r = ~~r,
                i = null  != i ? String(i) : "...",
                e.length <= r)
                    return e;
                var a = function(e) {
                    return e.toUpperCase() !== e.toLowerCase() ? "A" : " "
                }
                  , o = e.slice(0, r + 1).replace(/.(?=\W*\w*$)/g, a);
                return o = o.slice(o.length - 2).match(/\w\w/) ? o.replace(/\s*\S+$/, "") : n(o.slice(0, o.length - 1)),
                (o + i).length > e.length ? e : e.slice(0, o.length) + i
            }
        }
        , {
            "./helper/makeString": 20,
            "./rtrim": 43
        }],
        38: [function(e, r) {
            var t = e("./surround");
            r.exports = function(e, r) {
                return t(e, r || '"')
            }
        }
        , {
            "./surround": 54
        }],
        39: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/strRepeat");
            r.exports = function i(e, r, a) {
                if (e = t(e),
                r = ~~r,
                null  == a)
                    return n(e, r);
                for (var i = []; r > 0; i[--r] = e)
                    ;
                return i.join(a)
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/strRepeat": 21
        }],
        40: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r, n, i) {
                var a = i === !0 ? "gi" : "g"
                  , o = new RegExp(r,a);
                return t(e).replace(o, n)
            }
        }
        , {
            "./helper/makeString": 20
        }],
        41: [function(e, r) {
            var t = e("./chars");
            r.exports = function(e) {
                return t(e).reverse().join("")
            }
        }
        , {
            "./chars": 3
        }],
        42: [function(e, r) {
            var t = e("./pad");
            r.exports = function(e, r, n) {
                return t(e, r, n, "right")
            }
        }
        , {
            "./pad": 35
        }],
        43: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/defaultToWhiteSpace")
              , i = String.prototype.trimRight;
            r.exports = function(e, r) {
                return e = t(e),
                !r && i ? i.call(e) : (r = n(r),
                e.replace(new RegExp(r + "+$"), ""))
            }
        }
        , {
            "./helper/defaultToWhiteSpace": 16,
            "./helper/makeString": 20
        }],
        44: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/defaultToWhiteSpace")
              , i = e("./trim")
              , a = e("./dasherize");
            r.exports = function(e) {
                var r = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž"
                  , o = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz"
                  , p = new RegExp(n(r),"g");
                return e = t(e).toLowerCase().replace(p, function(e) {
                    var t = r.indexOf(e);
                    return o.charAt(t) || "-"
                }
                ),
                i(a(e.replace(/[^\w\s-]/g, "-")), "-")
            }
        }
        , {
            "./dasherize": 8,
            "./helper/defaultToWhiteSpace": 16,
            "./helper/makeString": 20,
            "./trim": 61
        }],
        45: [function(e, r) {
            var t = e("./chars");
            r.exports = function(e, r, n, i) {
                var a = t(e);
                return a.splice(~~r, ~~n, i),
                a.join("")
            }
        }
        , {
            "./chars": 3
        }],
        46: [function(e, r) {
            var t = e("./helper/strRepeat")
              , n = Object.prototype.toString
              , i = function() {
                function e(e) {
                    return n.call(e).slice(8, -1).toLowerCase()
                }
                var r = t
                  , a = function() {
                    return a.cache.hasOwnProperty(arguments[0]) || (a.cache[arguments[0]] = a.parse(arguments[0])),
                    a.format.call(null , a.cache[arguments[0]], arguments)
                }
                ;
                return a.format = function(t, n) {
                    var a, o, p, u, c, s, l, f = 1, h = t.length, g = "", m = [];
                    for (o = 0; h > o; o++)
                        if (g = e(t[o]),
                        "string" === g)
                            m.push(t[o]);
                        else if ("array" === g) {
                            if (u = t[o],
                            u[2])
                                for (a = n[f],
                                p = 0; p < u[2].length; p++) {
                                    if (!a.hasOwnProperty(u[2][p]))
                                        throw new Error(i('[_.sprintf] property "%s" does not exist', u[2][p]));
                                    a = a[u[2][p]]
                                }
                            else
                                a = u[1] ? n[u[1]] : n[f++];
                            if (/[^s]/.test(u[8]) && "number" != e(a))
                                throw new Error(i("[_.sprintf] expecting number but found %s", e(a)));
                            switch (u[8]) {
                            case "b":
                                a = a.toString(2);
                                break;
                            case "c":
                                a = String.fromCharCode(a);
                                break;
                            case "d":
                                a = parseInt(a, 10);
                                break;
                            case "e":
                                a = u[7] ? a.toExponential(u[7]) : a.toExponential();
                                break;
                            case "f":
                                a = u[7] ? parseFloat(a).toFixed(u[7]) : parseFloat(a);
                                break;
                            case "o":
                                a = a.toString(8);
                                break;
                            case "s":
                                a = (a = String(a)) && u[7] ? a.substring(0, u[7]) : a;
                                break;
                            case "u":
                                a = Math.abs(a);
                                break;
                            case "x":
                                a = a.toString(16);
                                break;
                            case "X":
                                a = a.toString(16).toUpperCase()
                            }
                            a = /[def]/.test(u[8]) && u[3] && a >= 0 ? "+" + a : a,
                            s = u[4] ? "0" == u[4] ? "0" : u[4].charAt(1) : " ",
                            l = u[6] - String(a).length,
                            c = u[6] ? r(s, l) : "",
                            m.push(u[5] ? a + c : c + a)
                        }
                    return m.join("")
                }
                ,
                a.cache = {},
                a.parse = function(e) {
                    for (var r = e, t = [], n = [], i = 0; r; ) {
                        if (null  !== (t = /^[^\x25]+/.exec(r)))
                            n.push(t[0]);
                        else if (null  !== (t = /^\x25{2}/.exec(r)))
                            n.push("%");
                        else {
                            if (null  === (t = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(r)))
                                throw new Error("[_.sprintf] huh?");
                            if (t[2]) {
                                i |= 1;
                                var a = []
                                  , o = t[2]
                                  , p = [];
                                if (null  === (p = /^([a-z_][a-z_\d]*)/i.exec(o)))
                                    throw new Error("[_.sprintf] huh?");
                                for (a.push(p[1]); "" !== (o = o.substring(p[0].length)); )
                                    if (null  !== (p = /^\.([a-z_][a-z_\d]*)/i.exec(o)))
                                        a.push(p[1]);
                                    else {
                                        if (null  === (p = /^\[(\d+)\]/.exec(o)))
                                            throw new Error("[_.sprintf] huh?");
                                        a.push(p[1])
                                    }
                                t[2] = a
                            } else
                                i |= 2;
                            if (3 === i)
                                throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                            n.push(t)
                        }
                        r = r.substring(t[0].length)
                    }
                    return n
                }
                ,
                a
            }
            ();
            r.exports = i
        }
        , {
            "./helper/strRepeat": 21
        }],
        47: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/toPositive");
            r.exports = function(e, r, i) {
                return e = t(e),
                r = "" + r,
                i = null  == i ? 0 : Math.min(n(i), e.length),
                e.lastIndexOf(r, i) === i
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/toPositive": 22
        }],
        48: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                e = t(e),
                r = t(r);
                var n = r ? e.indexOf(r) : -1;
                return ~n ? e.slice(0, n) : e
            }
        }
        , {
            "./helper/makeString": 20
        }],
        49: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                e = t(e),
                r = t(r);
                var n = e.lastIndexOf(r);
                return ~n ? e.slice(0, n) : e
            }
        }
        , {
            "./helper/makeString": 20
        }],
        50: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                e = t(e),
                r = t(r);
                var n = r ? e.indexOf(r) : -1;
                return ~n ? e.slice(n + r.length, e.length) : e
            }
        }
        , {
            "./helper/makeString": 20
        }],
        51: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r) {
                e = t(e),
                r = t(r);
                var n = r ? e.lastIndexOf(r) : -1;
                return ~n ? e.slice(n + r.length, e.length) : e
            }
        }
        , {
            "./helper/makeString": 20
        }],
        52: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e) {
                return t(e).replace(/<\/?[^>]+>/g, "")
            }
        }
        , {
            "./helper/makeString": 20
        }],
        53: [function(e, r) {
            var t = e("./helper/adjacent");
            r.exports = function(e) {
                return t(e, 1)
            }
        }
        , {
            "./helper/adjacent": 15
        }],
        54: [function(e, r) {
            r.exports = function(e, r) {
                return [r, e, r].join("")
            }
        }
        , {}],
        55: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e) {
                return t(e).replace(/\S/g, function(e) {
                    return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
                }
                )
            }
        }
        , {
            "./helper/makeString": 20
        }],
        56: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e) {
                return t(e).toLowerCase().replace(/(?:^|\s|-)\S/g, function(e) {
                    return e.toUpperCase()
                }
                )
            }
        }
        , {
            "./helper/makeString": 20
        }],
        57: [function(e, r) {
            function t(e, r) {
                var t, n, i = e.toLowerCase();
                for (r = [].concat(r),
                t = 0; t < r.length; t += 1)
                    if (n = r[t]) {
                        if (n.test && n.test(e))
                            return !0;
                        if (n.toLowerCase() === i)
                            return !0
                    }
            }
            var n = e("./trim");
            r.exports = function(e, r, i) {
                return "number" == typeof e && (e = "" + e),
                "string" != typeof e ? !!e : (e = n(e),
                t(e, r || ["true", "1"]) ? !0 : t(e, i || ["false", "0"]) ? !1 : void 0)
            }
        }
        , {
            "./trim": 61
        }],
        58: [function(e, r) {
            e("./trim");
            r.exports = function(e, r) {
                if (null  == e)
                    return 0;
                var t = Math.pow(10, isFinite(r) ? r : 0);
                return Math.round(e * t) / t
            }
        }
        , {
            "./trim": 61
        }],
        59: [function(e, r) {
            var t = e("./rtrim");
            r.exports = function(e, r, n, i) {
                r = r || ", ",
                n = n || " and ";
                var a = e.slice()
                  , o = a.pop();
                return e.length > 2 && i && (n = t(r) + n),
                a.length ? a.join(r) + n + o : o
            }
        }
        , {
            "./rtrim": 43
        }],
        60: [function(e, r) {
            var t = e("./toSentence");
            r.exports = function(e, r, n) {
                return t(e, r, n, !0)
            }
        }
        , {
            "./toSentence": 59
        }],
        61: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/defaultToWhiteSpace")
              , i = String.prototype.trim;
            r.exports = function(e, r) {
                return e = t(e),
                !r && i ? i.call(e) : (r = n(r),
                e.replace(new RegExp("^" + r + "+|" + r + "+$","g"), ""))
            }
        }
        , {
            "./helper/defaultToWhiteSpace": 16,
            "./helper/makeString": 20
        }],
        62: [function(e, r) {
            var t = e("./helper/makeString");
            r.exports = function(e, r, n) {
                return e = t(e),
                n = n || "...",
                r = ~~r,
                e.length > r ? e.slice(0, r) + n : e
            }
        }
        , {
            "./helper/makeString": 20
        }],
        63: [function(e, r) {
            var t = e("./trim");
            r.exports = function(e) {
                return t(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
            }
        }
        , {
            "./trim": 61
        }],
        64: [function(e, r) {
            var t = e("./helper/makeString")
              , n = e("./helper/htmlEntities");
            r.exports = function(e) {
                return t(e).replace(/\&([^;]+);/g, function(e, r) {
                    var t;
                    return r in n ? n[r] : (t = r.match(/^#x([\da-fA-F]+)$/)) ? String.fromCharCode(parseInt(t[1], 16)) : (t = r.match(/^#(\d+)$/)) ? String.fromCharCode(~~t[1]) : e
                }
                )
            }
        }
        , {
            "./helper/htmlEntities": 19,
            "./helper/makeString": 20
        }],
        65: [function(e, r) {
            r.exports = function(e, r) {
                return r = r || '"',
                e[0] === r && e[e.length - 1] === r ? e.slice(1, e.length - 1) : e
            }
        }
        , {}],
        66: [function(e, r) {
            var t = e("./sprintf");
            r.exports = function(e, r) {
                return r.unshift(e),
                t.apply(null , r)
            }
        }
        , {
            "./sprintf": 46
        }],
        67: [function(e, r) {
            var t = e("./isBlank")
              , n = e("./trim");
            r.exports = function(e, r) {
                return t(e) ? [] : n(e, r).split(r || /\s+/)
            }
        }
        , {
            "./isBlank": 26,
            "./trim": 61
        }]
    }, {}, [14])(14)
}
);
;!function() {
    var n = {
        _init: function() {
            this.loadLanguage()
        },
        loadLanguage: function() {
            this.LANGLIB = window.LANGLIB ? window.LANGLIB : {}
        },
        tr: function() {
            if (!arguments.length)
                return "";
            var n = arguments[0]
              , t = arguments
              , r = 1
              , i = this.LANGLIB[n] || n;
            return i.replace(/(%s)/g, function() {
                return t[r++]
            }
            )
        }
    };
    n._init(),
    IOT.lang = n,
    IOT.tr = function() {
        return n.tr.apply(n, arguments)
    }
}
();
;!function() {
    window.IOT || (window.IOT = {}),
    IOT.post = function() {
        for (var n, t = 0, o = []; arguments[t]; )
            "function" == typeof arguments[t] ? (n = arguments[t++],
            o.push(function() {}
            )) : o.push(arguments[t++]);
        n = n || function() {}
        ,
        $.post.apply($, o).done(function(t) {
            n.call(this, t)
        }
        ).fail(function() {
            IOT.tips(IOT.tr("请求失败，请稍后再试"), "warning", 3e3),
            n.call(this, !1)
        }
        )
    }
    ,
    IOT.button = {
        addLoading: function(n, t, o) {
            if (n.data("isloading", !0),
            t && n.html(t),
            o) {
                var r = {
                    loading: '<i class="icon-spin5 animate-spin"></i>'
                };
                r[o] && $(r[o]).prependTo(n)
            }
        },
        removeLoading: function(n, t, o) {
            if (n.data("isloading", !1),
            t && n.html(t),
            o) {
                var r = {
                    loading: '<i class="icon-spin5 animate-spin"></i>'
                };
                r[o] && $(r[o]).prependTo(n)
            }
        },
        isLoading: function(n) {
            return n.data("isloading")
        }
    },
    IOT.showPostError = function(n, t, o, r, i) {
        if (n = n || "",
        t = t || IOT.tr("%s失败,请稍后再试", "操作"),
        r = r || "error",
        i = i || 2e3,
        "object" == typeof n)
            for (var e in n)
                return IOT.tips(n[e], r, i),
                void (o && o.find('[name="' + e + '"]').focus());
        "string" == typeof n && "" != n && (t = n),
        IOT.tips(t, r, i)
    }
    ,
    window.console && window.console.log && (console.log("中移物联网欢迎你的加入。\n"),
    console.log("职位列表：http://dwz.cn/1e095I"))
}
(),
Array.prototype.forEach || (Array.prototype.forEach = function(n, t) {
    if (n && n.constructor == Function.toString()) {
        t = t || window;
        for (var o = 0, r = this.length; r > o; o++)
            n.call(t, this[o], o, this)
    }
}
),
Array.prototype.filter || (Array.prototype.filter = function(n, t) {
    if (n && n.constructor == Function.toString()) {
        t = t || window;
        for (var o = [], r = 0, i = this.length; i > r; r++)
            n.call(t, this[r], r, this) && o.push(this[r]);
        return o
    }
}
),
Array.prototype.map || (Array.prototype.map = function(n, t) {
    if (n && n.constructor == Function.toString()) {
        t = t || window;
        for (var o = [], r = 0, i = this.length; i > r; r++)
            o.push(n.call(t, this[r], r, this));
        return o
    }
}
),
Array.prototype.every || (Array.prototype.every = function(n, t) {
    if (n && n.constructor == Function.toString()) {
        t = t || window;
        for (var o = 0, r = this.length; r > o; o++)
            if (!n.call(t, this[o], o, this))
                return !1;
        return !0
    }
}
),
Array.prototype.some || (Array.prototype.some = function(n, t) {
    if (n && n.constructor == Function.toString()) {
        t = t || window;
        for (var o = 0, r = this.length; r > o; o++)
            if (n.call(t, this[o], o, this))
                return !0;
        return !1
    }
}
),
Object.keys || (Object.keys = function(n) {
    if (n !== Object(n))
        throw new TypeError("Object.keys called on a non-object");
    var t, o = [];
    for (t in n)
        Object.prototype.hasOwnProperty.call(n, t) && o.push(t);
    return o
}
),
window.JSON || (window.JSON = {
    parse: function(sJSON) {
        return eval("(" + sJSON + ")")
    },
    stringify: function(n) {
        if (n instanceof Object) {
            var t = "";
            if (n.constructor === Array) {
                for (var o = 0; o < n.length; t += this.stringify(n[o]) + ",",
                o++)
                    ;
                return "[" + t.substr(0, t.length - 1) + "]"
            }
            if (n.toString !== Object.prototype.toString)
                return '"' + n.toString().replace(/"/g, "\\$&") + '"';
            for (var r in n)
                t += '"' + r.replace(/"/g, "\\$&") + '":' + this.stringify(n[r]) + ",";
            return "{" + t.substr(0, t.length - 1) + "}"
        }
        return "string" == typeof n ? '"' + n.replace(/"/g, "\\$&") + '"' : String(n)
    }
}),
$(function() {
    var n = $('<a class="go-top icon-up-micro" title="回顶部"><span>回顶部</span></a>').on("click", function(n) {
        n.preventDefault(),
        window.scrollTo(0, 0)
    }
    ).appendTo($("body"));
    $(window).on("scroll", function() {
        var t = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        t > 100 ? n.fadeIn() : n.fadeOut()
    }
    );
    var t = {
        onHoverForTran: function(n) {
            n.hoverDelay({
                hoverDuring: 100,
                outDuring: 300,
                hoverEvent: function() {
                    var n = $(".tran", $(".header"))
                      , t = n.find(".unhover").innerWidth()
                      , o = 240;
                    n.stop().animate({
                        width: t + o
                    }, 200),
                    setTimeout(function() {
                        n.find("a.hide").stop().fadeIn(200)
                    }
                    , 300)
                },
                outEvent: function() {
                    var n = $(".tran", $(".header"))
                      , t = n.find(".unhover").innerWidth();
                    n.find("a.hide").stop().fadeOut(200, function() {
                        n.stop().animate({
                            width: t
                        }, 200)
                    }
                    )
                }
            })
        },
        mvUnderline: function(n) {
            var t = n.offset()
              , o = n.innerWidth()
              , r = t.left.toFixed(2);
            $(".mv-underline").stop().animate({
                left: r - $($("li", $(".menu"))[0]).offset().left,
                width: 100 === o ? 40 : 101
            }, 500)
        },
        fadeRightArrow: function(n) {
            n.each(function() {
                var n = $(this);
                n.hoverDelay({
                    hoverDuring: 200,
                    outDuring: 200,
                    hoverEvent: function() {
                        setTimeout(function() {
                            n.find(".icon-right-open").css({
                                width: 10,
                                opacity: 1
                            })
                        }
                        , 200)
                    },
                    outEvent: function() {
                        n.find(".icon-right-open").css({
                            width: 1,
                            opacity: 0
                        })
                    }
                })
            }
            )
        },
        bindEvents: function() {
            var n = $("li", $(".menu"));
            t.onHoverForTran($(".tran", $(".header"))),
            n && n.hover(function() {
                t.mvUnderline($(this))
            }
            , function() {
                t.mvUnderline($(".active", n).parent())
            }
            ),
            t.fadeRightArrow($("div", $(".link")))
        }
    };
    t.bindEvents()
}
),
function(n) {
    n.fn.hoverDelay = function(t) {
        var o, r, i = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function() {
                n.noop()
            },
            outEvent: function() {
                n.noop()
            }
        }, e = n.extend(i, t || {});
        return n(this).each(function() {
            n(this).hover(function() {
                clearTimeout(r),
                o = setTimeout(e.hoverEvent, e.hoverDuring)
            }
            , function() {
                clearTimeout(o),
                r = setTimeout(e.outEvent, e.outDuring)
            }
            )
        }
        )
    }
}
(jQuery);
;!function(e) {
    "use strict";
    var t = e(window)
      , a = function(e, t) {
        var a = e.parent();
        e.addClass(t.errorElementClass).removeClass("valid"),
        a.hasClass("input-group") && (a = a.parent()),
        a.addClass("has-error").removeClass("has-success"),
        "" !== t.borderColorOnError && e.css("border-color", t.borderColorOnError)
    }
      , r = function(t, a) {
        t.each(function() {
            n(e(this), "", a, a.errorMessagePosition);
            var t = e(this).parent();
            t.hasClass("input-group") && (t = t.parent()),
            e(this).removeClass("valid").removeClass(a.errorElementClass).css("border-color", ""),
            t.removeClass("has-error").removeClass("has-success").find("." + a.errorMessageClass).remove()
        }
        )
    }
      , n = function(t, a, r, n) {
        var s = i(t)
          , o = t.parent();
        if (o.hasClass("input-group") && (o = o.parent()),
        s)
            s.innerHTML = a;
        else if ("object" == typeof n) {
            var l = !1;
            if (n.find("." + r.errorMessageClass).each(function() {
                return this.inputReferer == t[0] ? (l = e(this),
                !1) : void 0
            }
            ),
            l)
                a ? l.html(a) : l.remove();
            else {
                var d = e('<div class="' + r.errorMessageClass + '">' + a + "</div>");
                d[0].inputReferer = t[0],
                n.prepend(d)
            }
        } else {
            var d = o.find("." + r.errorMessageClass + ".help-block");
            0 == d.length && (d = e("<small></small>").addClass("help-block").addClass(r.errorMessageClass),
            d.appendTo(o)),
            d.html(a)
        }
    }
      , i = function(e) {
        return document.getElementById(e.attr("name") + "_err_msg")
    }
      , s = function(t, a, r, n) {
        var i = n.errorMessageTemplate.messages.replace(/\{errorTitle\}/g, a)
          , s = [];
        e.each(r, function(e, t) {
            s.push(n.errorMessageTemplate.field.replace(/\{msg\}/g, t))
        }
        ),
        i = i.replace(/\{fields\}/g, s.join(""));
        var o = n.errorMessageTemplate.container.replace(/\{errorMessageClass\}/g, n.errorMessageClass);
        o = o.replace(/\{messages\}/g, i),
        t.children().eq(0).before(o)
    }
    ;
    e.fn.setInlineErrorMessage = function(t) {
        a(e(this), {
            errorElementClass: "error"
        }),
        n(e(this), t, {
            errorMessageClass: "error"
        })
    }
    ,
    e.fn.removeErrorStyle = function(t) {
        r(e(this), {
            errorElementClass: "error",
            errorMessageClass: "error"
        }),
        n(e(this), t, {
            errorMessageClass: "error"
        })
    }
    ,
    e.fn.validateOnBlur = function(t, a) {
        return this.find("input[data-validation],textarea[data-validation],select[data-validation]").bind("blur.validation", function() {
            e(this).validateInputOnBlur(t, a, !0, "blur")
        }
        ),
        this
    }
    ,
    e.fn.validateOnEvent = function(t, a) {
        return this.find("input[data-validation][data-validation-event],textarea[data-validation][data-validation-event],select[data-validation][data-validation-event]").each(function() {
            var r = e(this)
              , n = r.attr("data-validation-event");
            n && r.bind(n + ".validation", function() {
                e(this).validateInputOnBlur(t, a, !0, n)
            }
            )
        }
        ),
        this
    }
    ,
    e.fn.showHelpOnFocus = function(t) {
        return t || (t = "data-validation-help"),
        this.find(".has-help-txt").valAttr("has-keyup-event", !1).removeClass("has-help-txt"),
        this.find("textarea,input").each(function() {
            var a = e(this)
              , r = "jquery_form_help_" + (a.attr("name") || "").replace(/(:|\.|\[|\])/g, "")
              , n = a.attr(t);
            n && a.addClass("has-help-txt").unbind("focus.help").bind("focus.help", function() {
                var t = a.parent().find("." + r);
                0 == t.length && (t = e("<span />").addClass(r).addClass("help").addClass("help-block").text(n).hide(),
                a.after(t)),
                t.fadeIn()
            }
            ).unbind("blur.help").bind("blur.help", function() {
                e(this).parent().find("." + r).fadeOut("slow")
            }
            )
        }
        ),
        this
    }
    ,
    e.fn.validateInputOnBlur = function(t, i, s, o) {
        if (e.formUtils.eventType = o,
        (this.valAttr("suggestion-nr") || this.valAttr("postpone") || this.hasClass("hasDatepicker")) && !window.postponedValidation) {
            var l = this
              , d = this.valAttr("postpone") || 200;
            return window.postponedValidation = function() {
                l.validateInputOnBlur(t, i, s, o),
                window.postponedValidation = !1
            }
            ,
            setTimeout(function() {
                window.postponedValidation && window.postponedValidation()
            }
            , d),
            this
        }
        t = e.extend({}, e.formUtils.LANG, t || {}),
        r(this, i);
        var u = this
          , g = u.closest("form")
          , c = (u.attr(i.validationRuleAttribute),
        e.formUtils.validateInput(u, t, e.extend({}, i, {
            errorMessagePosition: "element"
        }), g, o));
        return c === !0 ? u.addClass("valid").parent().addClass("has-success") : null  !== c && (a(u, i),
        n(u, c, i, i.errorMessagePosition),
        s && u.unbind("keyup.validation").bind("keyup.validation", function() {
            e(this).validateInputOnBlur(t, i, !1, "keyup")
        }
        )),
        this
    }
    ,
    e.fn.valAttr = function(e, t) {
        return void 0 === t ? this.attr("data-validation-" + e) : t === !1 || null  === t ? this.removeAttr("data-validation-" + e) : (e.length > 0 && (e = "-" + e),
        this.attr("data-validation" + e, t))
    }
    ,
    e.fn.isValid = function(i, o, l) {
        if (e.formUtils.isLoadingModules) {
            var d = this;
            return setTimeout(function() {
                d.isValid(i, o, l)
            }
            , 200),
            null 
        }
        o = e.extend({}, e.formUtils.defaultConfig(), o || {}),
        i = e.extend({}, e.formUtils.LANG, i || {}),
        l = l !== !1,
        e.formUtils.isValidatingEntireForm = !0,
        e.formUtils.haltValidation = !1;
        var u = function(t, r) {
            null  !== t && (e.inArray(t, g) < 0 && g.push(t),
            c.push(r),
            r.attr("current-error", t),
            l && a(r, o))
        }
          , g = []
          , c = []
          , f = this
          , m = function(t, a) {
            return "submit" === a || "button" === a || "reset" == a ? !0 : e.inArray(t, o.ignore || []) > -1
        }
        ;
        if (l && (f.find("." + o.errorMessageClass + ".alert").remove(),
        r(f.find("." + o.errorElementClass + ",.valid"), o)),
        f.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function() {
            var t = e(this)
              , a = t.attr("type");
            if (!m(t.attr("name"), a)) {
                var r = e.formUtils.validateInput(t, i, o, f, "submit");
                "function" == typeof o.onElementValidate && o.onElementValidate(r === !0, t, f, r),
                r !== !0 ? u(r, t) : t.valAttr("current-error", !1).addClass("valid").parent().addClass("has-success")
            }
        }
        ),
        "function" == typeof o.onValidate) {
            var h = o.onValidate(f);
            e.isArray(h) ? e.each(h, function(e, t) {
                u(t.message, t.element)
            }
            ) : h && h.element && h.message && u(h.message, h.element)
        }
        return e.formUtils.isValidatingEntireForm = !1,
        !e.formUtils.haltValidation && c.length > 0 ? (l && ("top" === o.errorMessagePosition ? s(f, i.errorTitle, g, o) : "custom" === o.errorMessagePosition ? "function" == typeof o.errorMessageCustom && o.errorMessageCustom(f, i.errorTitle, g, o) : e.each(c, function(e, t) {
            n(t, t.attr("current-error"), o, o.errorMessagePosition)
        }
        ),
        o.scrollToTopOnError && t.scrollTop(f.offset().top - 20)),
        !1) : !e.formUtils.haltValidation
    }
    ,
    e.fn.validateForm = function(e, t) {
        return window.console && "function" == typeof window.console.warn && window.console.warn("Use of deprecated function $.validateForm, use $.isValid instead"),
        this.isValid(e, t, !0)
    }
    ,
    e.fn.restrictLength = function(t) {
        return new e.formUtils.lengthRestriction(this,t),
        this
    }
    ,
    e.fn.addSuggestions = function(t) {
        var a = !1;
        return this.find("input").each(function() {
            var r = e(this);
            a = e.split(r.attr("data-suggestions")),
            a.length > 0 && !r.hasClass("has-suggestions") && (e.formUtils.suggest(r, a, t),
            r.addClass("has-suggestions"))
        }
        ),
        this
    }
    ,
    e.split = function(t, a, r) {
        if ("function" != typeof a) {
            if (!t)
                return [];
            var n = [];
            return e.each(t.split(a ? a : ","), function(t, a) {
                a = e.trim(a),
                a.length && n.push(a)
            }
            ),
            n
        }
        t && (r || (r = ","),
        e.each(t.split(r), function(t, r) {
            return r = e.trim(r),
            r.length ? a(r, t) : void 0
        }
        ))
    }
    ,
    e.validate = function(a) {
        var n = e.extend(e.formUtils.defaultConfig(), {
            form: "form",
            validateOnEvent: !0,
            validateOnBlur: !0,
            showHelpOnFocus: !0,
            addSuggestions: !0,
            modules: "",
            onModulesLoaded: null ,
            language: !1,
            onSuccess: !1,
            onError: !1,
            onElementValidate: !1
        });
        a = e.extend(n, a || {}),
        e(a.form).each(function(n, i) {
            var s = e(i);
            t.trigger("formValidationSetup", [s]),
            s.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"),
            s.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"),
            s.bind("submit.validation", function() {
                var t = e(this);
                if (e.formUtils.isLoadingModules)
                    return setTimeout(function() {
                        t.trigger("submit.validation")
                    }
                    , 200),
                    !1;
                var r = t.isValid(a.language, a);
                if (!r || "function" != typeof a.onSuccess)
                    return r || "function" != typeof a.onError ? r : (a.onError(t),
                    !1);
                var n = a.onSuccess(t);
                return n === !1 ? !1 : void 0
            }
            ).bind("reset.validation", function() {
                e(this).find("." + a.errorMessageClass + ".alert").remove(),
                r(e(this).find("." + a.errorElementClass + ",.valid"), a)
            }
            ).addClass("has-validation-callback"),
            a.showHelpOnFocus && s.showHelpOnFocus(),
            a.addSuggestions && s.addSuggestions(),
            a.validateOnBlur && (s.validateOnBlur(a.language, a),
            s.bind("html5ValidationAttrsFound", function() {
                s.validateOnBlur(a.language, a)
            }
            )),
            a.validateOnEvent && s.validateOnEvent(a.language, a)
        }
        ),
        "" != a.modules && ("function" == typeof a.onModulesLoaded && t.one("validatorsLoaded", a.onModulesLoaded),
        e.formUtils.loadModules(a.modules))
    }
    ,
    e.formUtils = {
        defaultConfig: function() {
            return {
                ignore: [],
                errorElementClass: "error",
                borderColorOnError: "red",
                errorMessageClass: "error",
                validationRuleAttribute: "data-validation",
                validationErrorMsgAttribute: "data-validation-error-msg",
                errorMessagePosition: "element",
                errorMessageTemplate: {
                    container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
                    messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
                    field: "<li>{msg}</li>"
                },
                errorMessageCustom: s,
                scrollToTopOnError: !0,
                dateFormat: "yyyy-mm-dd",
                addValidClassOnAll: !1,
                decimalSeparator: "."
            }
        },
        validators: {},
        _events: {
            load: [],
            valid: [],
            invalid: []
        },
        haltValidation: !1,
        isValidatingEntireForm: !1,
        addValidator: function(e) {
            var t = 0 === e.name.indexOf("validate_") ? e.name : "validate_" + e.name;
            void 0 === e.validateOnKeyUp && (e.validateOnKeyUp = !0),
            this.validators[t] = e
        },
        isLoadingModules: !1,
        loadedModules: {},
        loadModules: function(a, r, n) {
            if (void 0 === n && (n = !0),
            e.formUtils.isLoadingModules)
                return void setTimeout(function() {
                    e.formUtils.loadModules(a, r, n)
                }
                );
            var i = !1
              , s = function(a, r) {
                var s = e.split(a)
                  , o = s.length
                  , l = function() {
                    o--,
                    0 == o && (e.formUtils.isLoadingModules = !1,
                    n && i && t.trigger("validatorsLoaded"))
                }
                ;
                o > 0 && (e.formUtils.isLoadingModules = !0);
                var d = "?__=" + (new Date).getTime()
                  , u = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                e.each(s, function(t, a) {
                    if (a = e.trim(a),
                    0 == a.length)
                        l();
                    else {
                        var n = r + a + (".js" == a.substr(-3) ? "" : ".js")
                          , s = document.createElement("SCRIPT");
                        n in e.formUtils.loadedModules ? l() : (e.formUtils.loadedModules[n] = 1,
                        i = !0,
                        s.type = "text/javascript",
                        s.onload = l,
                        s.src = n + (".dev.js" == n.substr(-7) ? d : ""),
                        s.onreadystatechange = function() {
                            ("complete" == this.readyState || "loaded" == this.readyState) && (l(),
                            this.onload = null ,
                            this.onreadystatechange = null )
                        }
                        ,
                        u.appendChild(s))
                    }
                }
                )
            }
            ;
            if (r)
                s(a, r);
            else {
                var o = function() {
                    var t = !1;
                    return e("script").each(function() {
                        if (this.src) {
                            var e = this.src.substr(this.src.lastIndexOf("/") + 1, this.src.length);
                            if (e.indexOf("jquery.form-validator.js") > -1 || e.indexOf("jquery.form-validator.min.js") > -1)
                                return t = this.src.substr(0, this.src.lastIndexOf("/")) + "/",
                                "/" == t && (t = ""),
                                !1
                        }
                    }
                    ),
                    t !== !1 ? (s(a, t),
                    !0) : !1
                }
                ;
                o() || e(o)
            }
        },
        validateInput: function(t, a, r, n, i) {
            if (t.attr("disabled"))
                return null ;
            t.trigger("beforeValidation");
            var s = t.val() || ""
              , o = t.valAttr("optional")
              , l = !1
              , d = !1
              , u = !1
              , g = t.valAttr("if-checked");
            if (null  != g && (l = !0,
            u = n.find('input[name="' + g + '"]'),
            u.prop("checked") && (d = !0)),
            !s && "true" === o || l && !d)
                return r.addValidClassOnAll ? !0 : null ;
            var c = t.attr(r.validationRuleAttribute)
              , f = !0;
            return c ? (e.split(c, function(o) {
                0 !== o.indexOf("validate_") && (o = "validate_" + o);
                var l = e.formUtils.validators[o];
                if (l && "function" == typeof l.validatorFunction) {
                    "validate_checkbox_group" == o && (t = e("[name='" + t.attr("name") + "']:eq(0)"));
                    var d = null ;
                    if (("keyup" != i || l.validateOnKeyUp) && (d = l.validatorFunction(s, t, r, a, n)),
                    !d)
                        return f = null ,
                        null  !== d && (f = t.attr(r.validationErrorMsgAttribute + "-" + o.replace("validate_", "")),
                        f || (f = t.attr(r.validationErrorMsgAttribute),
                        f || (f = a[l.errorMessageKey],
                        f || (f = l.errorMessage)))),
                        !1
                } else
                    console.warn('Using undefined validator "' + o + '"')
            }
            , " "),
            "string" == typeof f ? (t.trigger("validation", !1),
            f) : null  !== f || r.addValidClassOnAll ? (t.trigger("validation", !0),
            !0) : null ) : r.addValidClassOnAll ? !0 : null 
        },
        parseDate: function(t, a) {
            var r, n, i, s, o = a.replace(/[a-zA-Z]/gi, "").substring(0, 1), l = "^", d = a.split(o);
            if (e.each(d, function(e, t) {
                l += (e > 0 ? "\\" + o : "") + "(\\d{" + t.length + "})"
            }
            ),
            l += "$",
            r = t.match(new RegExp(l)),
            null  === r)
                return !1;
            var u = function(t, a, r) {
                for (var n = 0; n < a.length; n++)
                    if (a[n].substring(0, 1) === t)
                        return e.formUtils.parseDateInt(r[n + 1]);
                return -1
            }
            ;
            return i = u("m", d, r),
            n = u("d", d, r),
            s = u("y", d, r),
            2 === i && n > 28 && (s % 4 !== 0 || s % 100 === 0 && s % 400 !== 0) || 2 === i && n > 29 && (s % 4 === 0 || s % 100 !== 0 && s % 400 === 0) || i > 12 || 0 === i ? !1 : this.isShortMonth(i) && n > 30 || !this.isShortMonth(i) && n > 31 || 0 === n ? !1 : [s, i, n]
        },
        parseDateInt: function(e) {
            return 0 === e.indexOf("0") && (e = e.replace("0", "")),
            parseInt(e, 10)
        },
        isShortMonth: function(e) {
            return e % 2 === 0 && 7 > e || e % 2 !== 0 && e > 7
        },
        lengthRestriction: function(t, a) {
            var r = parseInt(a.text(), 10)
              , n = 0
              , i = function() {
                var e = t.val().length;
                if (e > r) {
                    var i = t.scrollTop();
                    t.val(t.val().substring(0, r)),
                    t.scrollTop(i)
                }
                n = r - e,
                0 > n && (n = 0),
                a.text(n)
            }
            ;
            e(t).bind("keydown keyup keypress focus blur", i).bind("cut paste", function() {
                setTimeout(i, 100)
            }
            ),
            e(document).bind("ready", i)
        },
        numericRangeCheck: function(t, a) {
            var r = e.split(a, "-")
              , n = parseInt(a.substr(3), 10);
            return 2 == r.length && (t < parseInt(r[0], 10) || t > parseInt(r[1], 10)) ? ["out", r[0], r[1]] : 0 === a.indexOf("min") && n > t ? ["min", n] : 0 === a.indexOf("max") && t > n ? ["max", n] : ["ok"]
        },
        _numSuggestionElements: 0,
        _selectedSuggestion: null ,
        _previousTypedVal: null ,
        suggest: function(a, r, n) {
            var i = {
                css: {
                    maxHeight: "150px",
                    background: "#FFF",
                    lineHeight: "150%",
                    textDecoration: "underline",
                    overflowX: "hidden",
                    overflowY: "auto",
                    border: "#CCC solid 1px",
                    borderTop: "none",
                    cursor: "pointer"
                },
                activeSuggestionCSS: {
                    background: "#E9E9E9"
                }
            }
              , s = function(e, t) {
                var a = t.offset();
                e.css({
                    width: t.outerWidth(),
                    left: a.left + "px",
                    top: a.top + t.outerHeight() + "px"
                })
            }
            ;
            n && e.extend(i, n),
            i.css.position = "absolute",
            i.css["z-index"] = 9999,
            a.attr("autocomplete", "off"),
            0 === this._numSuggestionElements && t.bind("resize", function() {
                e(".jquery-form-suggestions").each(function() {
                    var t = e(this)
                      , a = t.attr("data-suggest-container");
                    s(t, e(".suggestions-" + a).eq(0))
                }
                )
            }
            ),
            this._numSuggestionElements++;
            var o = function(t) {
                var a = t.valAttr("suggestion-nr");
                e.formUtils._selectedSuggestion = null ,
                e.formUtils._previousTypedVal = null ,
                e(".jquery-form-suggestion-" + a).fadeOut("fast")
            }
            ;
            return a.data("suggestions", r).valAttr("suggestion-nr", this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest", function() {
                e(this).trigger("keyup"),
                e.formUtils._selectedSuggestion = null 
            }
            ).unbind("keyup.suggest").bind("keyup.suggest", function() {
                var t = e(this)
                  , r = []
                  , n = e.trim(t.val()).toLocaleLowerCase();
                if (n != e.formUtils._previousTypedVal) {
                    e.formUtils._previousTypedVal = n;
                    var l = !1
                      , d = t.valAttr("suggestion-nr")
                      , u = e(".jquery-form-suggestion-" + d);
                    if (u.scrollTop(0),
                    "" != n) {
                        var g = n.length > 2;
                        e.each(t.data("suggestions"), function(e, t) {
                            var a = t.toLocaleLowerCase();
                            return a == n ? (r.push("<strong>" + t + "</strong>"),
                            l = !0,
                            !1) : void ((0 === a.indexOf(n) || g && a.indexOf(n) > -1) && r.push(t.replace(new RegExp(n,"gi"), "<strong>$&</strong>")))
                        }
                        )
                    }
                    l || 0 == r.length && u.length > 0 ? u.hide() : r.length > 0 && 0 == u.length ? (u = e("<div></div>").css(i.css).appendTo("body"),
                    a.addClass("suggestions-" + d),
                    u.attr("data-suggest-container", d).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-" + d)) : r.length > 0 && !u.is(":visible") && u.show(),
                    r.length > 0 && n.length != r[0].length && (s(u, t),
                    u.html(""),
                    e.each(r, function(a, r) {
                        e("<div></div>").append(r).css({
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            padding: "5px"
                        }).addClass("form-suggest-element").appendTo(u).click(function() {
                            t.focus(),
                            t.val(e(this).text()),
                            o(t)
                        }
                        )
                    }
                    ))
                }
            }
            ).unbind("keydown.validation").bind("keydown.validation", function(t) {
                var a, r, n = t.keyCode ? t.keyCode : t.which, s = e(this);
                if (13 == n && null  !== e.formUtils._selectedSuggestion) {
                    if (a = s.valAttr("suggestion-nr"),
                    r = e(".jquery-form-suggestion-" + a),
                    r.length > 0) {
                        var l = r.find("div").eq(e.formUtils._selectedSuggestion).text();
                        s.val(l),
                        o(s),
                        t.preventDefault()
                    }
                } else {
                    a = s.valAttr("suggestion-nr"),
                    r = e(".jquery-form-suggestion-" + a);
                    var d = r.children();
                    if (d.length > 0 && e.inArray(n, [38, 40]) > -1) {
                        38 == n ? (null  === e.formUtils._selectedSuggestion ? e.formUtils._selectedSuggestion = d.length - 1 : e.formUtils._selectedSuggestion--,
                        e.formUtils._selectedSuggestion < 0 && (e.formUtils._selectedSuggestion = d.length - 1)) : 40 == n && (null  === e.formUtils._selectedSuggestion ? e.formUtils._selectedSuggestion = 0 : e.formUtils._selectedSuggestion++,
                        e.formUtils._selectedSuggestion > d.length - 1 && (e.formUtils._selectedSuggestion = 0));
                        var u = r.innerHeight()
                          , g = r.scrollTop()
                          , c = r.children().eq(0).outerHeight()
                          , f = c * e.formUtils._selectedSuggestion;
                        return (g > f || f > g + u) && r.scrollTop(f),
                        d.removeClass("active-suggestion").css("background", "none").eq(e.formUtils._selectedSuggestion).addClass("active-suggestion").css(i.activeSuggestionCSS),
                        t.preventDefault(),
                        !1
                    }
                }
            }
            ).unbind("blur.suggest").bind("blur.suggest", function() {
                o(e(this))
            }
            ),
            a
        },
        LANG: {
            errorTitle: "Form submission failed!",
            requiredFields: IOT.tr("此项为必填项"),
            badTime: "You have not given a correct time",
            badEmail: IOT.tr("请输入正确的邮箱地址"),
            badTelephone: IOT.tr("请输入正确的手机号码"),
            badSecurityAnswer: "You have not given a correct answer to the security question",
            badDate: IOT.tr("请输入正确的日期"),
            lengthBadStart: "必须在 ",
            lengthBadEnd: " 个字符之间",
            lengthTooLongStart: "字符长度最大为",
            lengthTooShortStart: "字符长度最小为",
            notConfirmed: "Input values could not be confirmed",
            badDomain: "Incorrect domain value",
            badUrl: IOT.tr("请输入正确的URL"),
            badCustomVal: "The input value is incorrect",
            badInt: IOT.tr("请输入数字"),
            badSecurityNumber: "Your social security number was incorrect",
            badUKVatAnswer: "Incorrect UK VAT Number",
            badStrength: IOT.tr("密码强度太弱，请输入大写字母、下划线、数字来增加密码强度"),
            badNumberOfSelectedOptionsStart: "You have to choose at least ",
            badNumberOfSelectedOptionsEnd: " answers",
            badAlphaNumeric: IOT.tr("只能输入数字、字母、下划线 "),
            badAlphaNumericExtra: " and ",
            wrongFileSize: "The file you are trying to upload is too large",
            wrongFileType: "The file you are trying to upload is of wrong type",
            groupCheckedRangeStart: "Please choose between ",
            groupCheckedTooFewStart: "Please choose at least ",
            groupCheckedTooManyStart: "Please choose a maximum of ",
            groupCheckedEnd: " item(s)",
            badCreditCard: "The credit card number is not correct",
            badCVV: "The CVV number was not correct"
        }
    },
    e.formUtils.addValidator({
        name: "email",
        validatorFunction: function(t) {
            var a = t.toLowerCase().split("@");
            return 2 == a.length ? e.formUtils.validators.validate_domain.validatorFunction(a[1]) && !/[^\w\+\.\-]/.test(a[0]) : !1
        },
        errorMessage: "",
        errorMessageKey: "badEmail"
    }),
    e.formUtils.addValidator({
        name: "domain",
        validatorFunction: function(t, a) {
            for (var r = [".ac", ".ad", ".ae", ".aero", ".af", ".ag", ".ai", ".al", ".am", ".an", ".ao", ".aq", ".ar", ".arpa", ".as", ".asia", ".at", ".au", ".aw", ".ax", ".az", ".ba", ".bb", ".bd", ".be", ".bf", ".bg", ".bh", ".bi", ".bike", ".biz", ".bj", ".bm", ".bn", ".bo", ".br", ".bs", ".bt", ".bv", ".bw", ".by", ".bz", ".ca", ".camera", ".cat", ".cc", ".cd", ".cf", ".cg", ".ch", ".ci", ".ck", ".cl", ".clothing", ".cm", ".cn", ".co", ".com", ".construction", ".contractors", ".coop", ".cr", ".cu", ".cv", ".cw", ".cx", ".cy", ".cz", ".de", ".diamonds", ".directory", ".dj", ".dk", ".dm", ".do", ".dz", ".ec", ".edu", ".ee", ".eg", ".enterprises", ".equipment", ".er", ".es", ".estate", ".et", ".eu", ".fi", ".fj", ".fk", ".fm", ".fo", ".fr", ".ga", ".gallery", ".gb", ".gd", ".ge", ".gf", ".gg", ".gh", ".gi", ".gl", ".gm", ".gn", ".gov", ".gp", ".gq", ".gr", ".graphics", ".gs", ".gt", ".gu", ".guru", ".gw", ".gy", ".hk", ".hm", ".hn", ".holdings", ".hr", ".ht", ".hu", ".id", ".ie", ".il", ".im", ".in", ".info", ".int", ".io", ".iq", ".ir", ".is", ".it", ".je", ".jm", ".jo", ".jobs", ".jp", ".ke", ".kg", ".kh", ".ki", ".kitchen", ".km", ".kn", ".kp", ".kr", ".kw", ".ky", ".kz", ".la", ".land", ".lb", ".lc", ".li", ".lighting", ".lk", ".lr", ".ls", ".lt", ".lu", ".lv", ".ly", ".ma", ".mc", ".md", ".me", ".menu", ".mg", ".mh", ".mil", ".mk", ".ml", ".mm", ".mn", ".mo", ".mobi", ".mp", ".mq", ".mr", ".ms", ".mt", ".mu", ".museum", ".mv", ".mw", ".mx", ".my", ".mz", ".na", ".name", ".nc", ".ne", ".net", ".nf", ".ng", ".ni", ".nl", ".no", ".np", ".nr", ".nu", ".nz", ".om", ".org", ".pa", ".pe", ".pf", ".pg", ".ph", ".photography", ".pk", ".pl", ".plumbing", ".pm", ".pn", ".post", ".pr", ".pro", ".ps", ".pt", ".pw", ".py", ".qa", ".re", ".ro", ".rs", ".ru", ".rw", ".sa", ".sb", ".sc", ".sd", ".se", ".sexy", ".sg", ".sh", ".si", ".singles", ".sj", ".sk", ".sl", ".sm", ".sn", ".so", ".sr", ".st", ".su", ".sv", ".sx", ".sy", ".sz", ".tattoo", ".tc", ".td", ".technology", ".tel", ".tf", ".tg", ".th", ".tips", ".tj", ".tk", ".tl", ".tm", ".tn", ".to", ".today", ".tp", ".tr", ".travel", ".tt", ".tv", ".tw", ".tz", ".ua", ".ug", ".uk", ".uno", ".us", ".uy", ".uz", ".va", ".vc", ".ve", ".ventures", ".vg", ".vi", ".vn", ".voyage", ".vu", ".wf", ".ws", ".xn--3e0b707e", ".xn--45brj9c", ".xn--80ao21a", ".xn--80asehdb", ".xn--80aswg", ".xn--90a3ac", ".xn--clchc0ea0b2g2a9gcd", ".xn--fiqs8s", ".xn--fiqz9s", ".xn--fpcrj9c3d", ".xn--fzc2c9e2c", ".xn--gecrj9c", ".xn--h2brj9c", ".xn--j1amh", ".xn--j6w193g", ".xn--kprw13d", ".xn--kpry57d", ".xn--l1acc", ".xn--lgbbat1ad8j", ".xn--mgb9awbf", ".xn--mgba3a4f16a", ".xn--mgbaam7a8h", ".xn--mgbayh7gpa", ".xn--mgbbh1a71e", ".xn--mgbc0a9azcg", ".xn--mgberp4a5d4ar", ".xn--mgbx4cd0ab", ".xn--ngbc5azd", ".xn--o3cw4h", ".xn--ogbpf8fl", ".xn--p1ai", ".xn--pgbs0dh", ".xn--q9jyb4c", ".xn--s9brj9c", ".xn--unup4y", ".xn--wgbh1c", ".xn--wgbl6a", ".xn--xkc2al3hye2a", ".xn--xkc2dl3a5ee0h", ".xn--yfro4i67o", ".xn--ygbi2ammx", ".xxx", ".ye", ".yt", ".za", ".zm", ".zw"], n = ["co", "me", "ac", "gov", "judiciary", "ltd", "mod", "net", "nhs", "nic", "org", "parliament", "plc", "police", "sch", "bl", "british-library", "jet", "nls"], i = t.lastIndexOf("."), s = t.substring(0, i), o = t.substring(i, t.length), l = !1, d = 0; d < r.length; d++)
                if (r[d] === o) {
                    if (".uk" !== o) {
                        l = !0;
                        break
                    }
                    for (var u = t.split("."), g = u[u.length - 2], c = 0; c < n.length; c++)
                        if (n[c] === g) {
                            l = !0;
                            break
                        }
                    if (l)
                        break
                }
            if (!l)
                return !1;
            if (2 > i || i > 57)
                return e.inArray(t, ["i.net", "q.com", "q.net", "x.com", "x.org", "z.com", "z.cn", "w.org"]) > -1;
            var f = s.substring(0, 1)
              , m = s.substring(s.length - 1, s.length);
            return "-" === f || "." === f || "-" === m || "." === m ? !1 : s.split("..").length > 1 ? !1 : "" !== s.replace(/[-\da-z\.]/g, "") ? !1 : ("undefined" != typeof a && a.val(t),
            !0)
        },
        errorMessage: "",
        errorMessageKey: "badDomain"
    }),
    e.formUtils.addValidator({
        name: "required",
        validatorFunction: function(t, a, r, n, i) {
            switch (a.attr("type")) {
            case "checkbox":
                return a.is(":checked");
            case "radio":
                return i.find('input[name="' + a.attr("name") + '"]').filter(":checked").length > 0;
            default:
                return "" !== e.trim(t)
            }
        },
        errorMessage: "",
        errorMessageKey: "requiredFields"
    }),
    e.formUtils.addValidator({
        name: "length",
        validatorFunction: function(t, a, r, n) {
            var i = a.valAttr("length")
              , s = a.attr("type");
            if (void 0 == i) {
                var o = a.get(0).nodeName;
                return alert('Please add attribute "data-validation-length" to ' + o + " named " + a.attr("name")),
                !0
            }
            var l, d = "file" == s && void 0 !== a.get(0).files ? a.get(0).files.length : t.length, u = e.formUtils.numericRangeCheck(d, i);
            switch (u[0]) {
            case "out":
                this.errorMessage = n.lengthBadStart + i + n.lengthBadEnd,
                l = !1;
                break;
            case "min":
                this.errorMessage = n.lengthTooShortStart + u[1],
                l = !1;
                break;
            case "max":
                this.errorMessage = n.lengthTooLongStart + u[1],
                l = !1;
                break;
            default:
                l = !0
            }
            return l
        },
        errorMessage: "",
        errorMessageKey: ""
    }),
    e.formUtils.addValidator({
        name: "url",
        validatorFunction: function(t) {
            var a = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            if (a.test(t)) {
                var r = t.split("://")[1]
                  , n = r.indexOf("/");
                return n > -1 && (r = r.substr(0, n)),
                e.formUtils.validators.validate_domain.validatorFunction(r)
            }
            return !1
        },
        errorMessage: "",
        errorMessageKey: "badUrl"
    }),
    e.formUtils.addValidator({
        name: "number",
        validatorFunction: function(e, t, a) {
            if ("" !== e) {
                var r, n, i = t.valAttr("allowing") || "", s = t.valAttr("decimal-separator") || a.decimalSeparator, o = !1, l = t.valAttr("step") || "", d = !1;
                if (-1 == i.indexOf("number") && (i += ",number"),
                i.indexOf("negative") > -1 && 0 === e.indexOf("-") && (e = e.substr(1)),
                i.indexOf("range") > -1 && (r = parseFloat(i.substring(i.indexOf("[") + 1, i.indexOf(";"))),
                n = parseFloat(i.substring(i.indexOf(";") + 1, i.indexOf("]"))),
                o = !0),
                "" != l && (d = !0),
                "," == s) {
                    if (e.indexOf(".") > -1)
                        return !1;
                    e = e.replace(",", ".")
                }
                if (i.indexOf("number") > -1 && "" === e.replace(/[0-9]/g, "") && (!o || e >= r && n >= e) && (!d || e % l == 0))
                    return !0;
                if (i.indexOf("float") > -1 && null  !== e.match(new RegExp("^([0-9]+)\\.([0-9]+)$")) && (!o || e >= r && n >= e) && (!d || e % l == 0))
                    return !0
            }
            return !1
        },
        errorMessage: "",
        errorMessageKey: "badInt"
    }),
    e.formUtils.addValidator({
        name: "alphanumeric",
        validatorFunction: function(e, t, a, r) {
            var n = "^([a-zA-Z0-9"
              , i = "]+)$"
              , s = t.attr("data-validation-allowing")
              , o = "";
            if (s) {
                o = n + s + i;
                var l = s.replace(/\\/g, "");
                l.indexOf(" ") > -1 && (l = l.replace(" ", ""),
                l += " and spaces "),
                this.errorMessage = r.badAlphaNumeric + r.badAlphaNumericExtra + l
            } else
                o = n + i,
                this.errorMessage = r.badAlphaNumeric;
            return new RegExp(o).test(e)
        },
        errorMessage: "",
        errorMessageKey: ""
    }),
    e.formUtils.addValidator({
        name: "custom",
        validatorFunction: function(e, t) {
            var a = new RegExp(t.valAttr("regexp"));
            return a.test(e)
        },
        errorMessage: "",
        errorMessageKey: "badCustomVal"
    }),
    e.formUtils.addValidator({
        name: "date",
        validatorFunction: function(t, a, r) {
            var n = "yyyy-mm-dd";
            return a.valAttr("format") ? n = a.valAttr("format") : r.dateFormat && (n = r.dateFormat),
            e.formUtils.parseDate(t, n) !== !1
        },
        errorMessage: "",
        errorMessageKey: "badDate"
    }),
    e.formUtils.addValidator({
        name: "checkbox_group",
        validatorFunction: function(t, a, r, n, i) {
            var s = !0
              , o = a.attr("name")
              , l = e("input[type=checkbox][name^='" + o + "']:checked", i).length
              , d = a.valAttr("qty");
            if (void 0 == d) {
                var u = a.get(0).nodeName;
                alert('Attribute "data-validation-qty" is missing from ' + u + " named " + a.attr("name"))
            }
            var g = e.formUtils.numericRangeCheck(l, d);
            switch (g[0]) {
            case "out":
                this.errorMessage = n.groupCheckedRangeStart + d + n.groupCheckedEnd,
                s = !1;
                break;
            case "min":
                this.errorMessage = n.groupCheckedTooFewStart + g[1] + n.groupCheckedEnd,
                s = !1;
                break;
            case "max":
                this.errorMessage = n.groupCheckedTooManyStart + g[1] + n.groupCheckedEnd,
                s = !1;
                break;
            default:
                s = !0
            }
            return s
        }
    }),
    e.formUtils.addValidator({
        name: "confirmation",
        validatorFunction: function(e, t, a, r, n) {
            var i = ""
              , s = t.valAttr("confirm") || t.attr("name") + "_confirmation"
              , o = n.find('input[name="' + s + '"]').eq(0);
            return o ? i = o.val() : console.warn('Could not find an input with name "' + s + '"'),
            e === i
        },
        errorMessage: "",
        errorMessageKey: "notConfirmed"
    }),
    e.formUtils.addValidator({
        name: "strength",
        validatorFunction: function(t, a) {
            var r = a.valAttr("strength");
            return r && r > 3 && (r = 3),
            e.formUtils.validators.validate_strength.calculatePasswordStrength(t) >= r
        },
        errorMessage: "",
        errorMessageKey: "badStrength",
        calculatePasswordStrength: function(e) {
            if (e.length < 4)
                return 0;
            var t = 0
              , a = function(e, t) {
                for (var a = "", r = 0; r < t.length; r++) {
                    for (var n = !0, i = 0; e > i && i + r + e < t.length; i++)
                        n = n && t.charAt(i + r) == t.charAt(i + r + e);
                    e > i && (n = !1),
                    n ? (r += e - 1,
                    n = !1) : a += t.charAt(r)
                }
                return a
            }
            ;
            return t += 4 * e.length,
            t += 1 * (a(1, e).length - e.length),
            t += 1 * (a(2, e).length - e.length),
            t += 1 * (a(3, e).length - e.length),
            t += 1 * (a(4, e).length - e.length),
            e.match(/(.*[0-9].*[0-9].*[0-9])/) && (t += 5),
            e.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/) && (t += 5),
            e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (t += 10),
            e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (t += 15),
            e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([0-9])/) && (t += 15),
            e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([a-zA-Z])/) && (t += 15),
            (e.match(/^\w+$/) || e.match(/^\d+$/)) && (t -= 10),
            0 > t && (t = 0),
            t > 100 && (t = 100),
            20 > t ? 0 : 40 > t ? 1 : 60 >= t ? 2 : 3
        },
        strengthDisplay: function(t, a) {
            var r = {
                fontSize: "16px",
                padding: "3px",
                bad: "极弱",
                weak: "较弱",
                good: "较强",
                strong: "极强"
            };
            a && e.extend(r, a),
            t.bind("keyup", function() {
                var t = e(this).val()
                  , a = "undefined" == typeof r.parent ? e(this).parent() : e(r.parent)
                  , n = a.find(".strength-meter");
                0 == n.length && (n = e("<span></span>"),
                n.addClass("strength-meter").appendTo(a)),
                t ? n.show() : n.hide();
                var i = e.formUtils.validators.validate_strength.calculatePasswordStrength(t)
                  , s = {
                    background: "pink",
                    color: "#FF0000",
                    fontWeight: "bold",
                    border: "red solid 1px",
                    borderWidth: "0px 0px 4px",
                    display: "inline-block",
                    fontSize: r.fontSize,
                    padding: r.padding
                }
                  , o = r.bad;
                1 == i ? o = r.weak : 2 == i ? (s.background = "lightyellow",
                s.borderColor = "yellow",
                s.color = "goldenrod",
                o = r.good) : i >= 3 && (s.background = "lightgreen",
                s.borderColor = "darkgreen",
                s.color = "darkgreen",
                o = r.strong),
                n.css(s).text(o)
            }
            )
        }
    }),
    e.fn.displayPasswordStrength = function(t) {
        return new e.formUtils.validators.validate_strength.strengthDisplay(this,t),
        this
    }
}
(jQuery);
;/*!
 * Parsleyjs
 * Guillaume Potier - <guillaume@wisembly.com>
 * Version 2.1.2 - built Tue Jun 16 2015 10:46:42
 * MIT Licensed
 *
 */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}
(function(a) {
    function b(a, b) {
        return a.parsleyAdaptedCallback || (a.parsleyAdaptedCallback = function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(this),
            a.apply(b || q, c)
        }
        ),
        a.parsleyAdaptedCallback
    }
    function c(a) {
        return 0 === a.lastIndexOf(s, 0) ? a.substr(s.length) : a
    }
    "undefined" == typeof a && "undefined" != typeof window.jQuery && (a = window.jQuery);
    var d = 1
      , e = {}
      , f = {
        attr: function(a, b, c) {
            var d, e, f = new RegExp("^" + b,"i");
            if ("undefined" == typeof c)
                c = {};
            else
                for (var g in c)
                    c.hasOwnProperty(g) && delete c[g];
            if ("undefined" == typeof a || "undefined" == typeof a[0])
                return c;
            e = a[0].attributes;
            for (var g = e.length; g--; )
                d = e[g],
                d && d.specified && f.test(d.name) && (c[this.camelize(d.name.slice(b.length))] = this.deserializeValue(d.value));
            return c
        },
        checkAttr: function(a, b, c) {
            return a.is("[" + b + c + "]")
        },
        setAttr: function(a, b, c, d) {
            a[0].setAttribute(this.dasherize(b + c), String(d))
        },
        generateID: function() {
            return "" + d++
        },
        deserializeValue: function(b) {
            var c;
            try {
                return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null  : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
            } catch (d) {
                return b
            }
        },
        camelize: function(a) {
            return a.replace(/-+(.)?/g, function(a, b) {
                return b ? b.toUpperCase() : ""
            }
            )
        },
        dasherize: function(a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        },
        warn: function() {
            window.console && window.console.warn && window.console.warn.apply(window.console, arguments)
        },
        warnOnce: function(a) {
            e[a] || (e[a] = !0,
            this.warn.apply(this, arguments))
        },
        _resetWarnings: function() {
            e = {}
        },
        objectCreate: Object.create || function() {
            var a = function() {}
            ;
            return function(b) {
                if (arguments.length > 1)
                    throw Error("Second argument not supported");
                if ("object" != typeof b)
                    throw TypeError("Argument must be an object");
                a.prototype = b;
                var c = new a;
                return a.prototype = null ,
                c
            }
        }
        ()
    }
      , g = {
        namespace: "data-parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
        priorityEnabled: !0,
        multiple: null ,
        group: null ,
        uiEnabled: !0,
        validationThreshold: 3,
        focus: "first",
        trigger: !1,
        errorClass: "parsley-error",
        successClass: "parsley-success",
        classHandler: function() {},
        errorsContainer: function() {},
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        errorTemplate: "<li></li>"
    }
      , h = function() {}
    ;
    h.prototype = {
        asyncSupport: !1,
        actualizeOptions: function() {
            return f.attr(this.$element, this.options.namespace, this.domOptions),
            this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(),
            this
        },
        _resetOptions: function(a) {
            this.domOptions = f.objectCreate(this.parent.options),
            this.options = f.objectCreate(this.domOptions);
            for (var b in a)
                a.hasOwnProperty(b) && (this.options[b] = a[b]);
            this.actualizeOptions()
        },
        validateThroughValidator: function(a, b, c) {
            return window.ParsleyValidator.validate(a, b, c)
        },
        _listeners: null ,
        on: function(a, b) {
            this._listeners = this._listeners || {};
            var c = this._listeners[a] = this._listeners[a] || [];
            return c.push(b),
            this
        },
        subscribe: function(b, c) {
            a.listenTo(this, b.toLowerCase(), c)
        },
        off: function(a, b) {
            var c = this._listeners && this._listeners[a];
            if (c)
                if (b)
                    for (var d = c.length; d--; )
                        c[d] === b && c.splice(d, 1);
                else
                    delete this._listeners[a];
            return this
        },
        unsubscribe: function(b) {
            a.unsubscribeTo(this, b.toLowerCase())
        },
        trigger: function(a, b) {
            b = b || this;
            var c, d = this._listeners && this._listeners[a];
            if (d)
                for (var e = d.length; e--; )
                    if (c = d[e].call(b, b),
                    c === !1)
                        return c;
            return this.parent ? this.parent.trigger(a, b) : !0
        },
        reset: function() {
            if ("ParsleyForm" !== this.__class__)
                return this._trigger("reset");
            for (var a = 0; a < this.fields.length; a++)
                this.fields[a]._trigger("reset");
            this._trigger("reset")
        },
        destroy: function() {
            if ("ParsleyForm" !== this.__class__)
                return this.$element.removeData("Parsley"),
                this.$element.removeData("ParsleyFieldMultiple"),
                void this._trigger("destroy");
            for (var a = 0; a < this.fields.length; a++)
                this.fields[a].destroy();
            this.$element.removeData("Parsley"),
            this._trigger("destroy")
        },
        _findRelatedMultiple: function() {
            return this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')
        }
    };
    var i = function() {
        var a = {}
          , b = function(a) {
            this.__class__ = "Validator",
            this.__version__ = "1.0.1",
            this.options = a || {},
            this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
        }
        ;
        b.prototype = {
            constructor: b,
            validate: function(a, b, c) {
                if ("string" != typeof a && "object" != typeof a)
                    throw new Error("You must validate an object or a string");
                return "string" == typeof a || g(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
            },
            bind: function(a, b) {
                if ("object" != typeof a)
                    throw new Error("Must bind a Constraint to an object");
                return a[this.bindingKey] = new c(b),
                this
            },
            unbind: function(a) {
                return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey],
                this)
            },
            isBinded: function(a) {
                return "undefined" != typeof a[this.bindingKey]
            },
            getBinded: function(a) {
                return this.isBinded(a) ? a[this.bindingKey] : null 
            },
            _validateString: function(a, b, c) {
                var f, h = [];
                g(b) || (b = [b]);
                for (var i = 0; i < b.length; i++) {
                    if (!(b[i] instanceof e))
                        throw new Error("You must give an Assert or an Asserts array to validate a string");
                    f = b[i].check(a, c),
                    f instanceof d && h.push(f)
                }
                return h.length ? h : !0
            },
            _validateObject: function(a, b, d) {
                if ("object" != typeof b)
                    throw new Error("You must give a constraint to validate an object");
                return b instanceof c ? b.check(a, d) : new c(b).check(a, d)
            },
            _validateBindedObject: function(a, b) {
                return a[this.bindingKey].check(a, b)
            }
        },
        b.errorCode = {
            must_be_a_string: "must_be_a_string",
            must_be_an_array: "must_be_an_array",
            must_be_a_number: "must_be_a_number",
            must_be_a_string_or_array: "must_be_a_string_or_array"
        };
        var c = function(a, b) {
            if (this.__class__ = "Constraint",
            this.options = b || {},
            this.nodes = {},
            a)
                try {
                    this._bootstrap(a)
                } catch (c) {
                    throw new Error("Should give a valid mapping object to Constraint",c,a)
                }
        }
        ;
        c.prototype = {
            constructor: c,
            check: function(a, b) {
                var c, d = {};
                for (var h in this.nodes) {
                    for (var i = !1, j = this.get(h), k = g(j) ? j : [j], l = k.length - 1; l >= 0; l--)
                        "Required" !== k[l].__class__ || (i = k[l].requiresValidation(b));
                    if (this.has(h, a) || this.options.strict || i)
                        try {
                            this.has(h, this.options.strict || i ? a : void 0) || (new e).HaveProperty(h).validate(a),
                            c = this._check(h, a[h], b),
                            (g(c) && c.length > 0 || !g(c) && !f(c)) && (d[h] = c)
                        } catch (m) {
                            d[h] = m
                        }
                }
                return f(d) ? !0 : d
            },
            add: function(a, b) {
                if (b instanceof e || g(b) && b[0] instanceof e)
                    return this.nodes[a] = b,
                    this;
                if ("object" == typeof b && !g(b))
                    return this.nodes[a] = b instanceof c ? b : new c(b),
                    this;
                throw new Error("Should give an Assert, an Asserts array, a Constraint",b)
            },
            has: function(a, b) {
                return b = "undefined" != typeof b ? b : this.nodes,
                "undefined" != typeof b[a]
            },
            get: function(a, b) {
                return this.has(a) ? this.nodes[a] : b || null 
            },
            remove: function(a) {
                var b = [];
                for (var c in this.nodes)
                    c !== a && (b[c] = this.nodes[c]);
                return this.nodes = b,
                this
            },
            _bootstrap: function(a) {
                if (a instanceof c)
                    return this.nodes = a.nodes;
                for (var b in a)
                    this.add(b, a[b])
            },
            _check: function(a, b, d) {
                if (this.nodes[a] instanceof e)
                    return this._checkAsserts(b, [this.nodes[a]], d);
                if (g(this.nodes[a]))
                    return this._checkAsserts(b, this.nodes[a], d);
                if (this.nodes[a] instanceof c)
                    return this.nodes[a].check(b, d);
                throw new Error("Invalid node",this.nodes[a])
            },
            _checkAsserts: function(a, b, c) {
                for (var d, e = [], f = 0; f < b.length; f++)
                    d = b[f].check(a, c),
                    "undefined" != typeof d && !0 !== d && e.push(d);
                return e
            }
        };
        var d = function(a, b, c) {
            if (this.__class__ = "Violation",
            !(a instanceof e))
                throw new Error("Should give an assertion implementing the Assert interface");
            this.assert = a,
            this.value = b,
            "undefined" != typeof c && (this.violation = c)
        }
        ;
        d.prototype = {
            show: function() {
                var a = {
                    assert: this.assert.__class__,
                    value: this.value
                };
                return this.violation && (a.violation = this.violation),
                a
            },
            __toString: function() {
                return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected),
                this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
            },
            getViolation: function() {
                var a, b;
                for (a in this.violation)
                    b = this.violation[a];
                return {
                    constraint: a,
                    expected: b
                }
            }
        };
        var e = function(a) {
            this.__class__ = "Assert",
            this.__parentClass__ = this.__class__,
            this.groups = [],
            "undefined" != typeof a && this.addGroup(a)
        }
        ;
        e.prototype = {
            construct: e,
            requiresValidation: function(a) {
                return a && !this.hasGroup(a) ? !1 : !a && this.hasGroups() ? !1 : !0
            },
            check: function(a, b) {
                if (this.requiresValidation(b))
                    try {
                        return this.validate(a, b)
                    } catch (c) {
                        return c
                    }
            },
            hasGroup: function(a) {
                return g(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a
            },
            hasOneOf: function(a) {
                for (var b = 0; b < a.length; b++)
                    if (this.hasGroup(a[b]))
                        return !0;
                return !1
            },
            hasGroups: function() {
                return this.groups.length > 0
            },
            addGroup: function(a) {
                return g(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a),
                this)
            },
            removeGroup: function(a) {
                for (var b = [], c = 0; c < this.groups.length; c++)
                    a !== this.groups[c] && b.push(this.groups[c]);
                return this.groups = b,
                this
            },
            addGroups: function(a) {
                for (var b = 0; b < a.length; b++)
                    this.addGroup(a[b]);
                return this
            },
            HaveProperty: function(a) {
                return this.__class__ = "HaveProperty",
                this.node = a,
                this.validate = function(a) {
                    if ("undefined" == typeof a[this.node])
                        throw new d(this,a,{
                            value: this.node
                        });
                    return !0
                }
                ,
                this
            },
            Blank: function() {
                return this.__class__ = "Blank",
                this.validate = function(a) {
                    if ("string" != typeof a)
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_string
                        });
                    if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, ""))
                        throw new d(this,a);
                    return !0
                }
                ,
                this
            },
            Callback: function(a) {
                if (this.__class__ = "Callback",
                this.arguments = Array.prototype.slice.call(arguments),
                1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1),
                "function" != typeof a)
                    throw new Error("Callback must be instanciated with a function");
                return this.fn = a,
                this.validate = function(a) {
                    var b = this.fn.apply(this, [a].concat(this.arguments));
                    if (!0 !== b)
                        throw new d(this,a,{
                            result: b
                        });
                    return !0
                }
                ,
                this
            },
            Choice: function(a) {
                if (this.__class__ = "Choice",
                !g(a) && "function" != typeof a)
                    throw new Error("Choice must be instanciated with an array or a function");
                return this.list = a,
                this.validate = function(a) {
                    for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)
                        if (a === b[c])
                            return !0;
                    throw new d(this,a,{
                        choices: b
                    })
                }
                ,
                this
            },
            Collection: function(a) {
                return this.__class__ = "Collection",
                this.constraint = "undefined" != typeof a ? a instanceof e ? a : new c(a) : !1,
                this.validate = function(a, c) {
                    var e, h = new b, i = 0, j = {}, k = this.groups.length ? this.groups : c;
                    if (!g(a))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_an_array
                        });
                    for (var l = 0; l < a.length; l++)
                        e = this.constraint ? h.validate(a[l], this.constraint, k) : h.validate(a[l], k),
                        f(e) || (j[i] = e),
                        i++;
                    return f(j) ? !0 : j
                }
                ,
                this
            },
            Count: function(a) {
                return this.__class__ = "Count",
                this.count = a,
                this.validate = function(a) {
                    if (!g(a))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_an_array
                        });
                    var c = "function" == typeof this.count ? this.count(a) : this.count;
                    if (isNaN(Number(c)))
                        throw new Error("Count must be a valid interger",c);
                    if (c !== a.length)
                        throw new d(this,a,{
                            count: c
                        });
                    return !0
                }
                ,
                this
            },
            Email: function() {
                return this.__class__ = "Email",
                this.validate = function(a) {
                    var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                    if ("string" != typeof a)
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_string
                        });
                    if (!c.test(a))
                        throw new d(this,a);
                    return !0
                }
                ,
                this
            },
            EqualTo: function(a) {
                if (this.__class__ = "EqualTo",
                "undefined" == typeof a)
                    throw new Error("EqualTo must be instanciated with a value or a function");
                return this.reference = a,
                this.validate = function(a) {
                    var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
                    if (b !== a)
                        throw new d(this,a,{
                            value: b
                        });
                    return !0
                }
                ,
                this
            },
            GreaterThan: function(a) {
                if (this.__class__ = "GreaterThan",
                "undefined" == typeof a)
                    throw new Error("Should give a threshold value");
                return this.threshold = a,
                this.validate = function(a) {
                    if ("" === a || isNaN(Number(a)))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_number
                        });
                    if (this.threshold >= a)
                        throw new d(this,a,{
                            threshold: this.threshold
                        });
                    return !0
                }
                ,
                this
            },
            GreaterThanOrEqual: function(a) {
                if (this.__class__ = "GreaterThanOrEqual",
                "undefined" == typeof a)
                    throw new Error("Should give a threshold value");
                return this.threshold = a,
                this.validate = function(a) {
                    if ("" === a || isNaN(Number(a)))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_number
                        });
                    if (this.threshold > a)
                        throw new d(this,a,{
                            threshold: this.threshold
                        });
                    return !0
                }
                ,
                this
            },
            InstanceOf: function(a) {
                if (this.__class__ = "InstanceOf",
                "undefined" == typeof a)
                    throw new Error("InstanceOf must be instanciated with a value");
                return this.classRef = a,
                this.validate = function(a) {
                    if (!0 != a instanceof this.classRef)
                        throw new d(this,a,{
                            classRef: this.classRef
                        });
                    return !0
                }
                ,
                this
            },
            Length: function(a) {
                if (this.__class__ = "Length",
                !a.min && !a.max)
                    throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                return this.min = a.min,
                this.max = a.max,
                this.validate = function(a) {
                    if ("string" != typeof a && !g(a))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_string_or_array
                        });
                    if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min)
                        throw new d(this,a,{
                            min: this.min,
                            max: this.max
                        });
                    if ("undefined" != typeof this.max && a.length > this.max)
                        throw new d(this,a,{
                            max: this.max
                        });
                    if ("undefined" != typeof this.min && a.length < this.min)
                        throw new d(this,a,{
                            min: this.min
                        });
                    return !0
                }
                ,
                this
            },
            LessThan: function(a) {
                if (this.__class__ = "LessThan",
                "undefined" == typeof a)
                    throw new Error("Should give a threshold value");
                return this.threshold = a,
                this.validate = function(a) {
                    if ("" === a || isNaN(Number(a)))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_number
                        });
                    if (this.threshold <= a)
                        throw new d(this,a,{
                            threshold: this.threshold
                        });
                    return !0
                }
                ,
                this
            },
            LessThanOrEqual: function(a) {
                if (this.__class__ = "LessThanOrEqual",
                "undefined" == typeof a)
                    throw new Error("Should give a threshold value");
                return this.threshold = a,
                this.validate = function(a) {
                    if ("" === a || isNaN(Number(a)))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_number
                        });
                    if (this.threshold < a)
                        throw new d(this,a,{
                            threshold: this.threshold
                        });
                    return !0
                }
                ,
                this
            },
            NotNull: function() {
                return this.__class__ = "NotNull",
                this.validate = function(a) {
                    if (null  === a || "undefined" == typeof a)
                        throw new d(this,a);
                    return !0
                }
                ,
                this
            },
            NotBlank: function() {
                return this.__class__ = "NotBlank",
                this.validate = function(a) {
                    if ("string" != typeof a)
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_string
                        });
                    if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, ""))
                        throw new d(this,a);
                    return !0
                }
                ,
                this
            },
            Null: function() {
                return this.__class__ = "Null",
                this.validate = function(a) {
                    if (null  !== a)
                        throw new d(this,a);
                    return !0
                }
                ,
                this
            },
            Range: function(a, b) {
                if (this.__class__ = "Range",
                "undefined" == typeof a || "undefined" == typeof b)
                    throw new Error("Range assert expects min and max values");
                return this.min = a,
                this.max = b,
                this.validate = function(a) {
                    try {
                        return "string" == typeof a && isNaN(Number(a)) || g(a) ? (new e).Length({
                            min: this.min,
                            max: this.max
                        }).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a),
                        !0
                    } catch (b) {
                        throw new d(this,a,b.violation)
                    }
                    return !0
                }
                ,
                this
            },
            Regexp: function(a, c) {
                if (this.__class__ = "Regexp",
                "undefined" == typeof a)
                    throw new Error("You must give a regexp");
                return this.regexp = a,
                this.flag = c || "",
                this.validate = function(a) {
                    if ("string" != typeof a)
                        throw new d(this,a,{
                            value: b.errorCode.must_be_a_string
                        });
                    if (!new RegExp(this.regexp,this.flag).test(a))
                        throw new d(this,a,{
                            regexp: this.regexp,
                            flag: this.flag
                        });
                    return !0
                }
                ,
                this
            },
            Required: function() {
                return this.__class__ = "Required",
                this.validate = function(a) {
                    if ("undefined" == typeof a)
                        throw new d(this,a);
                    try {
                        "string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === g(a) && (new e).Length({
                            min: 1
                        }).validate(a)
                    } catch (b) {
                        throw new d(this,a)
                    }
                    return !0
                }
                ,
                this
            },
            Unique: function(a) {
                return this.__class__ = "Unique",
                "object" == typeof a && (this.key = a.key),
                this.validate = function(a) {
                    var c, e = [];
                    if (!g(a))
                        throw new d(this,a,{
                            value: b.errorCode.must_be_an_array
                        });
                    for (var f = 0; f < a.length; f++)
                        if (c = "object" == typeof a[f] ? a[f][this.key] : a[f],
                        "undefined" != typeof c) {
                            if (-1 !== e.indexOf(c))
                                throw new d(this,a,{
                                    value: c
                                });
                            e.push(c)
                        }
                    return !0
                }
                ,
                this
            }
        },
        a.Assert = e,
        a.Validator = b,
        a.Violation = d,
        a.Constraint = c,
        Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
            "use strict";
            if (null  === this)
                throw new TypeError;
            var b = Object(this)
              , c = b.length >>> 0;
            if (0 === c)
                return -1;
            var d = 0;
            if (arguments.length > 1 && (d = Number(arguments[1]),
            d != d ? d = 0 : 0 !== d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))),
            d >= c)
                return -1;
            for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                if (e in b && b[e] === a)
                    return e;
            return -1
        }
        );
        var f = function(a) {
            for (var b in a)
                return !1;
            return !0
        }
          , g = function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }
        ;
        return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function() {
            return a
        }
        ) : "undefined" != typeof module && module.exports ? module.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a,
        a
    }
    ();
    i = "undefined" != typeof i ? i : "undefined" != typeof module ? module.exports : null ;
    var j = function(a, b) {
        this.__class__ = "ParsleyValidator",
        this.Validator = i,
        this.locale = "en",
        this.init(a || {}, b || {})
    }
    ;
    j.prototype = {
        init: function(b, c) {
            this.catalog = c,
            this.validators = a.extend({}, this.validators);
            for (var d in b)
                this.addValidator(d, b[d].fn, b[d].priority, b[d].requirementsTransformer);
            window.Parsley.trigger("parsley:validator:init")
        },
        setLocale: function(a) {
            if ("undefined" == typeof this.catalog[a])
                throw new Error(a + " is not available in the catalog");
            return this.locale = a,
            this
        },
        addCatalog: function(a, b, c) {
            return "object" == typeof b && (this.catalog[a] = b),
            !0 === c ? this.setLocale(a) : this
        },
        addMessage: function(a, b, c) {
            return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}),
            this.catalog[a][b.toLowerCase()] = c,
            this
        },
        validate: function() {
            return (new this.Validator.Validator).validate.apply(new i.Validator, arguments)
        },
        addValidator: function(a, b, c, d) {
            if (this.validators[a])
                f.warn('Validator "' + a + '" is already defined.');
            else if (g.hasOwnProperty(a))
                return void f.warn('"' + a + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator(a, b, c, d)
        },
        updateValidator: function(a, b, c, d) {
            return this.validators[a] ? this._setValidator(a, b, c, d) : (f.warn('Validator "' + a + '" is not already defined.'),
            this.addValidator(a, b, c, d))
        },
        removeValidator: function(a) {
            return this.validators[a] || f.warn('Validator "' + a + '" is not defined.'),
            delete this.validators[a],
            this
        },
        _setValidator: function(b, c, d, e) {
            return this.validators[b] = function(b) {
                return a.extend((new i.Assert).Callback(c, b), {
                    priority: d,
                    requirementsTransformer: e
                })
            }
            ,
            this
        },
        getErrorMessage: function(a) {
            var b;
            if ("type" === a.name) {
                var c = this.catalog[this.locale][a.name] || {};
                b = c[a.requirements]
            } else
                b = this.formatMessage(this.catalog[this.locale][a.name], a.requirements);
            return b || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
        },
        formatMessage: function(a, b) {
            if ("object" == typeof b) {
                for (var c in b)
                    a = this.formatMessage(a, b[c]);
                return a
            }
            return "string" == typeof a ? a.replace(new RegExp("%s","i"), b) : ""
        },
        validators: {
            notblank: function() {
                return a.extend((new i.Assert).NotBlank(), {
                    priority: 2
                })
            },
            required: function() {
                return a.extend((new i.Assert).Required(), {
                    priority: 512
                })
            },
            type: function(b) {
                var c;
                switch (b) {
                case "email":
                    c = (new i.Assert).Email();
                    break;
                case "range":
                case "number":
                    c = (new i.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                    break;
                case "integer":
                    c = (new i.Assert).Regexp("^-?\\d+$");
                    break;
                case "digits":
                    c = (new i.Assert).Regexp("^\\d+$");
                    break;
                case "alphanum":
                    c = (new i.Assert).Regexp("^\\w+$", "i");
                    break;
                case "url":
                    c = (new i.Assert).Regexp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i");
                    break;
                default:
                    throw new Error("validator type `" + b + "` is not supported")
                }
                return a.extend(c, {
                    priority: 256
                })
            },
            pattern: function(b) {
                var c = "";
                return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"),
                b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")),
                a.extend((new i.Assert).Regexp(b, c), {
                    priority: 64
                })
            },
            minlength: function(b) {
                return a.extend((new i.Assert).Length({
                    min: b
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            maxlength: function(b) {
                return a.extend((new i.Assert).Length({
                    max: b
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            length: function(b) {
                return a.extend((new i.Assert).Length({
                    min: b[0],
                    max: b[1]
                }), {
                    priority: 32
                })
            },
            mincheck: function(a) {
                return this.minlength(a)
            },
            maxcheck: function(a) {
                return this.maxlength(a)
            },
            check: function(a) {
                return this.length(a)
            },
            min: function(b) {
                return a.extend((new i.Assert).GreaterThanOrEqual(b), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            max: function(b) {
                return a.extend((new i.Assert).LessThanOrEqual(b), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            range: function(b) {
                return a.extend((new i.Assert).Range(b[0], b[1]), {
                    priority: 32,
                    requirementsTransformer: function() {
                        for (var a = 0; a < b.length; a++)
                            b[a] = "string" != typeof b[a] || isNaN(b[a]) ? b[a] : parseInt(b[a], 10);
                        return b
                    }
                })
            },
            equalto: function(b) {
                return a.extend((new i.Assert).EqualTo(b), {
                    priority: 256,
                    requirementsTransformer: function() {
                        return a(b).length ? a(b).val() : b
                    }
                })
            }
        }
    };
    var k = function() {
        this.__class__ = "ParsleyUI"
    }
    ;
    k.prototype = {
        listen: function() {
            var a = this;
            return window.Parsley.on("form:init", function() {
                a.setupForm(this)
            }
            ).on("field:init", function() {
                a.setupField(this)
            }
            ).on("field:validated", function() {
                a.reflow(this)
            }
            ).on("form:validated", function() {
                a.focus(this)
            }
            ).on("field:reset", function() {
                a.reset(this)
            }
            ).on("form:destroy", function() {
                a.destroy(this)
            }
            ).on("field:destroy", function() {
                a.destroy(this)
            }
            ),
            this
        },
        reflow: function(a) {
            if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
                var b = this._diff(a.validationResult, a._ui.lastValidationResult);
                a._ui.lastValidationResult = a.validationResult,
                a._ui.validatedOnce = !0,
                this.manageStatusClass(a),
                this.manageErrorsMessages(a, b),
                this.actualizeTriggers(a),
                (b.kept.length || b.added.length) && !0 !== a._ui.failedOnce && this.manageFailingFieldTrigger(a)
            }
        },
        getErrorsMessages: function(a) {
            if (!0 === a.validationResult)
                return [];
            for (var b = [], c = 0; c < a.validationResult.length; c++)
                b.push(this._getErrorMessage(a, a.validationResult[c].assert));
            return b
        },
        manageStatusClass: function(a) {
            a.hasConstraints() && a.needsValidation() && !0 === a.validationResult ? this._successClass(a) : a.validationResult.length > 0 ? this._errorClass(a) : this._resetClass(a)
        },
        manageErrorsMessages: function(b, c) {
            if ("undefined" == typeof b.options.errorsMessagesDisabled) {
                if ("undefined" != typeof b.options.errorMessage)
                    return c.added.length || c.kept.length ? (this._insertErrorWrapper(b),
                    0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")),
                    b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)) : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var d = 0; d < c.removed.length; d++)
                    this.removeError(b, c.removed[d].assert.name, !0);
                for (d = 0; d < c.added.length; d++)
                    this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
                for (d = 0; d < c.kept.length; d++)
                    this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
            }
        },
        addError: function(b, c, d, e, f) {
            this._insertErrorWrapper(b),
            b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))),
            !0 !== f && this._errorClass(b)
        },
        updateError: function(a, b, c, d, e) {
            a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)),
            !0 !== e && this._errorClass(a)
        },
        removeError: function(a, b, c) {
            a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(),
            !0 !== c && this.manageStatusClass(a)
        },
        focus: function(a) {
            if (a._focusedField = null ,
            !0 === a.validationResult || "none" === a.options.focus)
                return null ;
            for (var b = 0; b < a.fields.length; b++) {
                var c = a.fields[b];
                if (!0 !== c.validationResult && c.validationResult.length > 0 && "undefined" == typeof c.options.noFocus && (a._focusedField = c.$element,
                "first" === a.options.focus))
                    break
            }
            return null  === a._focusedField ? null  : a._focusedField.focus()
        },
        _getErrorMessage: function(a, b) {
            var c = b.name + "Message";
            return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
        },
        _diff: function(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length; f++) {
                for (var g = !1, h = 0; h < b.length; h++)
                    if (a[f].assert.name === b[h].assert.name) {
                        g = !0;
                        break
                    }
                g ? e.push(a[f]) : d.push(a[f])
            }
            return {
                kept: e,
                added: d,
                removed: c ? [] : this._diff(b, a, !0).added
            }
        },
        setupForm: function(b) {
            b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)),
            !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
        },
        setupField: function(b) {
            var c = {
                active: !1
            };
            !1 !== b.options.uiEnabled && (c.active = !0,
            b.$element.attr(b.options.namespace + "id", b.__id__),
            c.$errorClassHandler = this._manageClassHandler(b),
            c.errorsWrapperId = "parsley-id-" + (b.options.multiple ? "multiple-" + b.options.multiple : b.__id__),
            c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId),
            c.lastValidationResult = [],
            c.validatedOnce = !1,
            c.validationInformationVisible = !1,
            b._ui = c,
            this.actualizeTriggers(b))
        },
        _manageClassHandler: function(b) {
            if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length)
                return a(b.options.classHandler);
            var c = b.options.classHandler(b);
            return "undefined" != typeof c && c.length ? c : !b.options.multiple || b.$element.is("select") ? b.$element : b.$element.parent()
        },
        _insertErrorWrapper: function(b) {
            var c;
            if (0 !== b._ui.$errorsWrapper.parent().length)
                return b._ui.$errorsWrapper.parent();
            if ("string" == typeof b.options.errorsContainer) {
                if (a(b.options.errorsContainer).length)
                    return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);
                f.warn("The errors container `" + b.options.errorsContainer + "` does not exist in DOM")
            } else
                "function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b));
            if ("undefined" != typeof c && c.length)
                return c.append(b._ui.$errorsWrapper);
            var d = b.$element;
            return b.options.multiple && (d = d.parent()),
            d.after(b._ui.$errorsWrapper)
        },
        actualizeTriggers: function(b) {
            var c = b.$element;
            if (b.options.multiple && (c = a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]')),
            c.off(".Parsley"),
            !1 !== b.options.trigger) {
                var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                "" !== d && c.on(d.split(" ").join(".Parsley ") + ".Parsley", a.proxy("function" == typeof b.eventValidate ? b.eventValidate : this.eventValidate, b))
            }
        },
        eventValidate: function(a) {
            new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0,
            this.validate())
        },
        manageFailingFieldTrigger: function(b) {
            return b._ui.failedOnce = !0,
            b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
                return new RegExp("change","i").test(a(this).parsley().options.trigger || "") ? void 0 : a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
            }
            ),
            b.$element.is("select") && !new RegExp("change","i").test(b.options.trigger || "") ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b)) : new RegExp("keyup","i").test(b.options.trigger || "") ? void 0 : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
        },
        reset: function(a) {
            this.actualizeTriggers(a),
            a.$element.off(".ParsleyFailedOnce"),
            "undefined" != typeof a._ui && "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.removeClass("filled").children().remove(),
            this._resetClass(a),
            a._ui.validatedOnce = !1,
            a._ui.lastValidationResult = [],
            a._ui.validationInformationVisible = !1,
            a._ui.failedOnce = !1)
        },
        destroy: function(a) {
            this.reset(a),
            "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(),
            delete a._ui)
        },
        _successClass: function(a) {
            a._ui.validationInformationVisible = !0,
            a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
        },
        _errorClass: function(a) {
            a._ui.validationInformationVisible = !0,
            a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
        },
        _resetClass: function(a) {
            a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
        }
    };
    var l = function(b, c, d) {
        this.__class__ = "ParsleyForm",
        this.__id__ = f.generateID(),
        this.$element = a(b),
        this.domOptions = c,
        this.options = d,
        this.parent = window.Parsley,
        this.fields = [],
        this.validationResult = null 
    }
    ;
    l.prototype = {
        onSubmitValidate: function(b) {
            return this.validate(void 0, void 0, b),
            (!1 === this.validationResult || !this._trigger("submit")) && b instanceof a.Event && (b.stopImmediatePropagation(),
            b.preventDefault()),
            this
        },
        validate: function(a, b, c) {
            this.submitEvent = c,
            this.validationResult = !0;
            var d = [];
            return this._trigger("validate"),
            this._refreshFields(),
            this._withoutReactualizingFormOptions(function() {
                for (var c = 0; c < this.fields.length; c++)
                    (!a || this._isFieldInGroup(this.fields[c], a)) && (d = this.fields[c].validate(b),
                    !0 !== d && d.length > 0 && this.validationResult && (this.validationResult = !1))
            }
            ),
            this._trigger(this.validationResult ? "success" : "error"),
            this._trigger("validated"),
            this.validationResult
        },
        isValid: function(a, b) {
            return this._refreshFields(),
            this._withoutReactualizingFormOptions(function() {
                for (var c = 0; c < this.fields.length; c++)
                    if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b))
                        return !1;
                return !0
            }
            )
        },
        _isFieldInGroup: function(b, c) {
            return a.isArray(b.options.group) ? -1 !== a.inArray(c, b.options.group) : b.options.group === c
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var b = this
              , c = this.fields;
            return this.fields = [],
            this.fieldsMappedById = {},
            this._withoutReactualizingFormOptions(function() {
                this.$element.find(this.options.inputs).not(this.options.excluded).each(function() {
                    var a = new t.Factory(this,{},b);
                    "ParsleyField" !== a.__class__ && "ParsleyFieldMultiple" !== a.__class__ || !0 === a.options.excluded || "undefined" == typeof b.fieldsMappedById[a.__class__ + "-" + a.__id__] && (b.fieldsMappedById[a.__class__ + "-" + a.__id__] = a,
                    b.fields.push(a))
                }
                ),
                a(c).not(b.fields).each(function() {
                    this._trigger("reset")
                }
                )
            }
            ),
            this
        },
        _withoutReactualizingFormOptions: function(a) {
            var b = this.actualizeOptions;
            this.actualizeOptions = function() {
                return this
            }
            ;
            var c = a.call(this);
            return this.actualizeOptions = b,
            c
        },
        _trigger: function(a) {
            return a = "form:" + a,
            this.trigger.apply(this, arguments)
        }
    };
    var m = function(b, c, d, e, g) {
        var h = {};
        if (!new RegExp("ParsleyField").test(b.__class__))
            throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
        if ("function" == typeof window.ParsleyValidator.validators[c] && (h = window.ParsleyValidator.validators[c](d)),
        "Assert" !== h.__parentClass__)
            throw new Error("Valid validator expected");
        var i = function() {
            return "undefined" != typeof b.options[c + "Priority"] ? b.options[c + "Priority"] : h.priority || 2
        }
        ;
        return e = e || i(),
        "function" == typeof h.requirementsTransformer && (d = h.requirementsTransformer(),
        h = window.ParsleyValidator.validators[c](d)),
        a.extend(h, {
            name: c,
            requirements: d,
            priority: e,
            groups: [e],
            isDomConstraint: g || f.checkAttr(b.$element, b.options.namespace, c)
        })
    }
      , n = function(b, c, d, e) {
        this.__class__ = "ParsleyField",
        this.__id__ = f.generateID(),
        this.$element = a(b),
        "undefined" != typeof e && (this.parent = e),
        this.options = d,
        this.domOptions = c,
        this.constraints = [],
        this.constraintsByName = {},
        this.validationResult = [],
        this._bindConstraints();
    
    }
    ;
    n.prototype = {
        validate: function(a) {
            return this.value = this.getValue(),
            this._trigger("validate"),
            this._trigger(this.isValid(a, this.value) ? "success" : "error"),
            this._trigger("validated"),
            this.validationResult
        },
        hasConstraints: function() {
            return 0 !== this.constraints.length
        },
        needsValidation: function(a) {
            return "undefined" == typeof a && (a = this.getValue()),
            a.length || this._isRequired() || "undefined" != typeof this.options.validateIfEmpty ? !0 : !1
        },
        isValid: function(a, b) {
            if (this.refreshConstraints(),
            this.validationResult = !0,
            !this.hasConstraints())
                return !0;
            if (("undefined" == typeof b || null  === b) && (b = this.getValue()),
            !this.needsValidation(b) && !0 !== a)
                return !0;
            var c = ["Any"];
            !1 !== this.options.priorityEnabled && (c = this._getConstraintsSortedPriorities());
            for (var d = 0; d < c.length; d++)
                if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d])))
                    return !1;
            return !0
        },
        getValue: function() {
            var a;
            return a = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(),
            "undefined" == typeof a || null  === a ? "" : !0 === this.options.trimValue ? a.replace(/^\s+|\s+$/g, "") : a
        },
        refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        addConstraint: function(a, b, c, d) {
            if ("function" == typeof window.ParsleyValidator.validators[a]) {
                var e = new m(this,a,b,c,d);
                "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name),
                this.constraints.push(e),
                this.constraintsByName[e.name] = e
            }
            return this
        },
        removeConstraint: function(a) {
            for (var b = 0; b < this.constraints.length; b++)
                if (a === this.constraints[b].name) {
                    this.constraints.splice(b, 1);
                    break
                }
            return delete this.constraintsByName[a],
            this
        },
        updateConstraint: function(a, b, c) {
            return this.removeConstraint(a).addConstraint(a, b, c)
        },
        _bindConstraints: function() {
            for (var a = [], b = {}, c = 0; c < this.constraints.length; c++)
                !1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]),
                b[this.constraints[c].name] = this.constraints[c]);
            this.constraints = a,
            this.constraintsByName = b;
            for (var d in this.options)
                this.addConstraint(d, this.options[d]);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0),
            "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0),
            "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0),
            "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
            var a = this.$element.attr("type");
            return "undefined" == typeof a ? this : "number" === a ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : /^(email|url|range)$/i.test(a) ? this.addConstraint("type", a, void 0, !0) : this
        },
        _isRequired: function() {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        },
        _trigger: function(a) {
            return a = "field:" + a,
            this.trigger.apply(this, arguments)
        },
        _getConstraintsSortedPriorities: function() {
            for (var a = [], b = 0; b < this.constraints.length; b++)
                -1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
            return a.sort(function(a, b) {
                return b - a
            }
            ),
            a
        }
    };
    var o = function() {
        this.__class__ = "ParsleyFieldMultiple"
    }
    ;
    o.prototype = {
        addElement: function(a) {
            return this.$elements.push(a),
            this
        },
        refreshConstraints: function() {
            var b;
            if (this.constraints = [],
            this.$element.is("select"))
                return this.actualizeOptions()._bindConstraints(),
                this;
            for (var c = 0; c < this.$elements.length; c++)
                if (a("html").has(this.$elements[c]).length) {
                    b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var d = 0; d < b.length; d++)
                        this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
                } else
                    this.$elements.splice(c, 1);
            return this
        },
        getValue: function() {
            if ("undefined" != typeof this.options.value)
                return this.options.value;
            if (this.$element.is("input[type=radio]"))
                return this._findRelatedMultiple().filter(":checked").val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var b = [];
                return this._findRelatedMultiple().filter(":checked").each(function() {
                    b.push(a(this).val())
                }
                ),
                b
            }
            return this.$element.is("select") && null  === this.$element.val() ? [] : this.$element.val()
        },
        _init: function() {
            return this.$elements = [this.$element],
            this
        }
    };
    var p = function(b, c, d) {
        this.$element = a(b);
        var e = this.$element.data("Parsley");
        if (e)
            return "undefined" != typeof d && e.parent === window.Parsley && (e.parent = d,
            e._resetOptions(e.options)),
            e;
        if (!this.$element.length)
            throw new Error("You must bind Parsley on an existing element.");
        if ("undefined" != typeof d && "ParsleyForm" !== d.__class__)
            throw new Error("Parent instance must be a ParsleyForm instance");
        return this.parent = d || window.Parsley,
        this.init(c)
    }
    ;
    p.prototype = {
        init: function(a) {
            return this.__class__ = "Parsley",
            this.__version__ = "2.1.2",
            this.__id__ = f.generateID(),
            this._resetOptions(a),
            this.$element.is("form") || f.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
        },
        isMultiple: function() {
            return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        },
        handleMultiple: function() {
            var b, c, d = this;
            if (this.options.multiple || ("undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = b = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))),
            this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple"))
                return this.options.multiple = this.options.multiple || this.__id__,
                this.bind("parsleyFieldMultiple");
            if (!this.options.multiple)
                return f.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element),
                this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""),
            "undefined" != typeof b && a('input[name="' + b + '"]').each(function() {
                a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(d.options.namespace + "multiple", d.options.multiple)
            }
            );
            for (var e = this._findRelatedMultiple(), g = 0; g < e.length; g++)
                if (c = a(e.get(g)).data("Parsley"),
                "undefined" != typeof c) {
                    this.$element.data("ParsleyFieldMultiple") || c.addElement(this.$element);
                    break
                }
            return this.bind("parsleyField", !0),
            c || this.bind("parsleyFieldMultiple")
        },
        bind: function(b, c) {
            var d;
            switch (b) {
            case "parsleyForm":
                d = a.extend(new l(this.$element,this.domOptions,this.options), window.ParsleyExtend)._bindFields();
                break;
            case "parsleyField":
                d = a.extend(new n(this.$element,this.domOptions,this.options,this.parent), window.ParsleyExtend);
                break;
            case "parsleyFieldMultiple":
                d = a.extend(new n(this.$element,this.domOptions,this.options,this.parent), new o, window.ParsleyExtend)._init();
                break;
            default:
                throw new Error(b + "is not a supported Parsley type")
            }
            return this.options.multiple && f.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple),
            "undefined" != typeof c ? (this.$element.data("ParsleyFieldMultiple", d),
            d) : (this.$element.data("Parsley", d),
            d._trigger("init"),
            d)
        }
    };
    var q = a({})
      , r = function() {
        f.warnOnce("Parsley's pubsub module is deprecated; use the corresponding jQuery event method instead")
    }
      , s = "parsley:";
    a.listen = function(a, d) {
        var e;
        if (r(),
        "object" == typeof arguments[1] && "function" == typeof arguments[2] && (e = arguments[1],
        d = arguments[2]),
        "function" != typeof arguments[1])
            throw new Error("Wrong parameters");
        window.Parsley.on(c(a), b(d, e))
    }
    ,
    a.listenTo = function(a, d, e) {
        if (r(),
        !(a instanceof n || a instanceof l))
            throw new Error("Must give Parsley instance");
        if ("string" != typeof d || "function" != typeof e)
            throw new Error("Wrong parameters");
        a.on(c(d), b(e))
    }
    ,
    a.unsubscribe = function(a, b) {
        if (r(),
        "string" != typeof a || "function" != typeof b)
            throw new Error("Wrong arguments");
        window.Parsley.off(c(a), b.parsleyAdaptedCallback)
    }
    ,
    a.unsubscribeTo = function(a, b) {
        if (r(),
        !(a instanceof n || a instanceof l))
            throw new Error("Must give Parsley instance");
        a.off(c(b))
    }
    ,
    a.unsubscribeAll = function(b) {
        r(),
        window.Parsley.off(c(b)),
        a("form,input,textarea,select").each(function() {
            var d = a(this).data("Parsley");
            d && d.off(c(b))
        }
        )
    }
    ,
    a.emit = function(a, b) {
        r();
        var d = b instanceof n || b instanceof l
          , e = Array.prototype.slice.call(arguments, d ? 2 : 1);
        e.unshift(c(a)),
        d || (b = window.Parsley),
        b.trigger.apply(b, e)
    }
    ,
    window.ParsleyConfig = window.ParsleyConfig || {},
    window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {},
    window.ParsleyConfig.i18n.en = jQuery.extend(window.ParsleyConfig.i18n.en || {}, {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }),
    "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var t = a.extend(new h, {
        $element: a(document),
        actualizeOptions: null ,
        _resetOptions: null ,
        Factory: p,
        version: "2.1.2"
    });
    a.extend(n.prototype, h.prototype),
    a.extend(l.prototype, h.prototype),
    a.extend(p.prototype, h.prototype),
    a.fn.parsley = a.fn.psly = function(b) {
        if (this.length > 1) {
            var c = [];
            return this.each(function() {
                c.push(a(this).parsley(b))
            }
            ),
            c
        }
        return a(this).length ? new p(this,b) : void f.warn("You must bind Parsley on an existing element.")
    }
    ,
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    t.options = a.extend(f.objectCreate(g), window.ParsleyConfig),
    window.ParsleyConfig = t.options,
    window.Parsley = window.psly = t,
    window.ParsleyUtils = f,
    window.ParsleyValidator = new j(window.ParsleyConfig.validators,window.ParsleyConfig.i18n),
    window.ParsleyUI = "function" == typeof window.ParsleyConfig.ParsleyUI ? (new window.ParsleyConfig.ParsleyUI).listen() : (new k).listen(),
    !1 !== window.ParsleyConfig.autoBind && a(function() {
        a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
    }
    )
}
);
;window.ParsleyConfig = window.ParsleyConfig || {},
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {},
window.ParsleyConfig.i18n.zh_cn = jQuery.extend(window.ParsleyConfig.i18n.zh_cn || {}, {
    defaultMessage: "不正确的值",
    type: {
        email: "请输入一个有效的电子邮箱地址",
        url: "请输入一个有效的链接",
        number: "请输入正确的数字",
        integer: "请输入正确的整数",
        digits: "请输入正确的号码",
        alphanum: "请输入字母或数字"
    },
    notblank: "请输入值",
    required: "必填项",
    pattern: "格式不正确",
    min: "输入值请大于或等于 %s",
    max: "输入值请小于或等于 %s",
    range: "输入值应该在 %s 到 %s 之间",
    minlength: "请输入至少 %s 个字符",
    maxlength: "请输入至多 %s 个字符",
    length: "字符长度应该在 %s 到 %s 之间",
    mincheck: "请至少选择 %s 个选项",
    maxcheck: "请选择不超过 %s 个选项",
    check: "请选择 %s 到 %s 个选项",
    equalto: "输入值不同"
}),
"undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("zh_cn", window.ParsleyConfig.i18n.zh_cn, !0);
;!function() {
    function t(t) {
        this.content = t.content,
        this.type = t.type,
        this.width = t.width,
        this._config = {
            iconFont: {
                info: "icon-info-circled",
                error: "icon-cancel-circled",
                warning: "icon-attention-circled",
                success: "icon-ok-circled"
            },
            className: {
                info: "standard",
                error: "alert",
                warning: "warning",
                success: "success"
            }
        }
    }
    t.prototype = {
        create: function() {
            var t = [];
            t = ['<div class="alert-box alert-box-pop ' + this._config.className[this.type] + '">'],
            t.push('<i class="' + this._config.iconFont[this.type] + '"></i>'),
            t.push(this.content),
            t.push("</div>");
            var i = $(t.join(""));
            return i.appendTo(document.body),
            i
        },
        resetPosition: function(t) {
            var i = t.width()
              , e = t.height()
              , n = $(window).height() / 2;
            t.css({
                "margin-left": -i / 2 - 22.5,
                top: -e / 2 + n + 15,
                position: "fixed",
                left: "50%"
            }),
            t.animate({
                top: -e / 2 + n
            }, 400)
        },
        hideClose: function(t) {
            t.remove()
        }
    },
    IOT.tips = function(i, e, n) {
        if (n = n || 2e3,
        /^\s*$/.test(i) || !i)
            return !1;
        var o = new t({
            content: i,
            type: e || "success",
            timeout: n
        });
        o.hideClose($(".tisp-" + e));
        var s = o.create();
        o.resetPosition(s),
        setTimeout(function() {
            o.hideClose(s)
        }
        , n)
    }
}
();
;!function() {
    function t(t) {
        this._options = $.extend(!0, {
            title: "",
            content: "",
            beforeClose: null ,
            showClose: !0,
            showFooter: !0,
            className: "",
            cache: !0,
            width: "40%"
        }, t),
        this._init()
    }
    $.extend(t.prototype, {
        _init: function() {
            this._build(),
            this._bindEvent()
        },
        _build: function() {
            var t = this._options
              , o = "width: " + t.width
              , i = '<div class="ui-dialog-pop ' + t.className + '" style="' + o + '">' + (t.title ? '<div class="ui-dialog-hd yahei">' + t.title + "</div>" : "");
            t.showClose && (i += '<a class="ui-dialog-close j_dlg_close">&#215;</a>'),
            i += "</div>",
            this.$root = $(i).appendTo(document.body),
            this.$root.append($(t.content || "")),
            t.showFooter && this.$root.append($('<div class="ui-dialog-ft"><a class="button j_dlg_close">关闭</a></div>')),
            this._$mask = $('<div class="ui-dialog-mask"></div>').appendTo($("body"))
        },
        _bindEvent: function() {
            var t = this
              , o = this._options;
            this.$root.on("click", ".j_dlg_close", function(i) {
                return i.preventDefault(),
                o.beforeClose && o.beforeClose.apply(t) === !1 ? !1 : (t.close(),
                void (o.onclose && o.onclose.apply(this)))
            }
            ).on("click", ".j_dlg_ok", function() {}
            )
        },
        setSize: function() {
            var t = {
                width: this.$root.outerWidth(),
                height: this.$root.outerHeight()
            };
            this.$root.css({
                "margin-top": "-" + t.height / 2 + "px",
                "margin-left": "-" + t.width / 2 + "px"
            }),
            this._$mask.css({
                height: $(document).height() + "px"
            })
        },
        open: function() {
            this.setSize(),
            this.$root.show(),
            this._$mask.show()
        },
        close: function() {
            this.$root.hide(),
            this._$mask.hide(),
            this._options.cache === !1 && (this.$root.remove(),
            this._$mask.remove())
        },
        setTitle: function(t) {
            this.$root.find(".ui-dialog-tit em").html(t)
        },
        setContent: function(t) {
            this.$root.find(".ui-dialog-bd").html(t),
            this.setSize()
        }
    }),
    t.confirm = function(t, o, i) {
        var s = '<div class="ui-dialog-bd">' + t + "</div>";
        s += '<div class="ui-dialog-ft"><button class="button j_ok" href="#">' + IOT.tr("确定") + '</button><button class="button j_cancel" href="#">' + IOT.tr("取消") + "</button></div>";
        var e = new IOT.Dialog({
            className: "ui-dialog-confirm",
            width: "450px",
            content: s,
            showFooter: !1,
            cache: !1,
            showClose: !1
        });
        e.$root.on("click", ".button", function(t) {
            t.preventDefault();
            var s = $(this);
            s.hasClass("j_ok") ? o && o.call(this) : i && i.call(this),
            e.close()
        }
        ),
        e.open()
    }
    ,
    IOT.Dialog = t
}
();
