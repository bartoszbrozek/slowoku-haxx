function V(a, b, e) {
    e = void 0 === e ? "style" : e;
    Object.keys(b).forEach(function (d) {
        a[e][d] = b[d]
    })
}

function c(a, b, e) {
    var d = document.createElement(a);
    if ("undefined" == typeof b) return d;
    Object.keys(b).forEach(function (a) {
        "object" == typeof b[a] ? V(d, b[a], a) : d[a] = b[a]
    });
    if ("undefined" == typeof e) return d;
    M(d, e);
    return d
}

function M(a, b) {
    Array.isArray(b) || (b = [b]);
    b.forEach(function (b) {
        null != b && a.appendChild("string" == typeof b ? document.createTextNode(b) : b)
    })
}

function z(a, b) {
    a.innerHTML = "";
    M(a, b)
}

function r(a,
    b, e) {
    void 0 === e || e ? a.classList.add(b) : a.classList.remove(b)
}

function h(a) {
    return ka[a] || a
}

function W(a) {
    r(v[g], "gwrong", a);
    r(t, "werror", a)
}

function N(a) {
    C && ("<" == a || "BACKSPACE" == a ? l.length && (l.pop(), z(A[g][l.length], "\u00a0"), W(!1)) : " " == a || 0 > w.indexOf(a) || l.length >= n.length || (a = a.toUpperCase(), l.push(a), z(A[g][l.length - 1], a), l.length == n.length && la()))
}

function ma(a) {
    var b = {},
        e = [],
        d = n.split("");
    d.forEach(function (a) {
        return b[a] = 0
    });
    d.forEach(function (d, c) {
        e[c] = d == a[c] ? 3 : 0;
        d != a[c] && b[d]++
    });

    document.getElementById('current_word').innerHTML = d.join("")

    console.log(d);
    return e
}

function na(a, b) {
    a.forEach(function (a, d) {
        if (!x[a] || b[d] > x[a]) x[a] = b[d]
    })
}

function oa(a, b, e, d) {
    var c = d ? 8 : 0,
        k = 0,
        h = setInterval(function () {
            0 <= k && k < a.length && (a[k].dataset.col = b[k] + "");
            k >= a.length && (a[0].parentNode.style.opacity = Math.floor((k - a.length) / 2) % 2 ? 1 : .6);
            k++;
            k >= a.length + c && (clearInterval(h), e && e())
        }, 64)
}

function la() {
    var a = l.join("");
    if (a == n || pa(a)) {
        var b = ma(l);
        O.push(l);
        D.push(b);
        r(v[g], "gactive", !1);
        r(v[g], "gfilled");
        na(l, b);
        for (var e in x) E[e] &&
            (E[e].dataset.col = x[e]);
        var d = (e = a == n) || 5 <= g,
            c = "";
        d && (c = (e ? g + 1 : "X") + "/6");
        oa(A[g], D[g], d ? 0 : function () {
            return r(v[g], "gactive")
        }, e);
        F.gs.push(a);
        d && F.rs.push(c);
        B[u].push(b);
        d ? qa(e, g) : (l = [], g++)
    } else W(!0)
}

function qa(a, b) {
    function e() {
        Y(u + 1)
    }
    C = !1;
    V(Z, {
        display: "none"
    });
    var d;
    var f = c("p", {
        style: {
            fontWeight: "bold"
        }
    }, a && 0 == b ? h("SLSEER") + " \ud83d\ude35" : a ? h("SLGOTIT") + " \ud83d\ude0e" : h("SLTHATWAS") + " " + n + " \ud83d\ude15");
    if (u + 1 < P.length) f = c("div", {
        className: "mbox"
    }, [f, c("p", {
        style: {
            fontWeight: "bold"
        }
    },
        h("SLDONEXT")), c("p", {}, [d = c("button", {
            className: "minw",
            onclick: e
        }, h("SLYES")), " ", c("button", {
            className: "minw",
            onclick: e
        }, h("SLSURE"))])]);
    else {
        var k = F.rs.join(" ") + " - " + aa + (1 == y ? " #" + h("SLTODAY") : ""),
            X = "";
        B.forEach(function (a, b) {
            X += (0 < b ? "\n" : "") + a.map(function (a) {
                return a.map(function (a) {
                    return ra[a]
                }).join("")
            }).join("\n") + "\n"
        });
        var g = k + "\n\n" + X,
            p = G && "function" == typeof navigator.share,
            q;
        f = c("div", {
            className: "mbox"
        }, [f, c("p", {}, q = c("textarea", {
            style: {
                width: "15em",
                height: "3em",
                lineHeight: 1.2
            }
        },
            g)), c("p", {
                style: {
                    marginTop: "-.5em"
                }
            }, [c("label", {
                style: {
                    padding: "0 .5em"
                }
            }, [c("input", {
                type: "checkbox",
                checked: !0,
                onchange: function (a) {
                    q.value = a.target.checked ? g : k
                },
                style: {
                    verticalAlign: "middle",
                    margin: "0 .2em"
                }
            }), h("SLDIAG")]), " ", c("button", {
                style: {
                    borderColor: "transparent",
                    paddingLeft: ".5em",
                    paddingRight: ".5em",
                    marginRight: ".5em"
                },
                onclick: p ? function () {
                    try {
                        navigator.share({
                            text: q.value.trim()
                        })
                    } catch (ba) { }
                } : function () {
                    try {
                        q.select(), q.setSelectionRange(0, 999)
                    } catch (ba) { }
                    try {
                        navigator.clipboard.writeText(q.value)
                    } catch (ba) { }
                },
                title: '\n<svg style="fill: currentColor; stroke: currentColor; stroke-width: 1px; width: 22px; height: 22px; margin-top: -1px; vertical-align: middle;" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">\n<path fill="none" stroke-width="1.6" d="M16 4l-12 7l12 7"></path>\n<circle cx="16" cy="4" r="2.5" />\n<circle cx="4" cy="11" r="2.5" />\n<circle cx="16" cy="18" r="2.5" />\n</svg>\n',
                innerHTML: '\n<svg style="fill: currentColor; stroke: currentColor; stroke-width: 1px; width: 22px; height: 22px; margin-top: -1px; vertical-align: middle;" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">\n<path fill="none" stroke-width="1.6" d="M16 4l-12 7l12 7"></path>\n<circle cx="16" cy="4" r="2.5" />\n<circle cx="4" cy="11" r="2.5" />\n<circle cx="16" cy="18" r="2.5" />\n</svg>\n' +
                    (0 == y ? " " + h("SLSHARE") : "")
            }), " ", 1 == y ? c("a", {
                href: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(g),
                target: "_blank",
                title: "tweet",
                innerHTML: '\n<svg style="width: 25px; height: 22px; padding: 4px; margin-top: 1px; vertical-align: middle; fill: #1D9BF0;" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 248 204">\n<g><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04 C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66 c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64 c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76 c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26 c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/></g>\n</svg>\n'
            }) :
                null
            ])])
    }
    z(ca, f);
    d && d.focus();
    d = Math.floor(Date.now() - da) / 1E3 * 1E3;
    f = O.map(function (a) {
        return a.join("")
    }).join(",");
    p = D.map(function (a) {
        return a.join("")
    }).join(",");
    Q({
        tp: "play",
        word: n,
        wnum: u,
        pdur: d,
        pwords: f,
        pcols: p,
        pres: a ? b : -1,
        wd: m.wd,
        wc: m.wc
    })
}

function Y(a) {
    u = a;
    n = P[a];
    g = 0;
    C = !0;
    l = [];
    O = [];
    D = [];
    x = {};
    da = Date.now();
    B[u] || (B[u] = []);
    sa()
}

function ea(a, b) {
    P = a;
    y = b;
    F = {
        gs: [],
        rs: []
    };
    B = [];
    Y(0)
}

function ta(a, b) {
    0 == a.length || -1 == b ? ea("x", ["AAAAA", "AAAAA"]) : (a = ua(a).split(" ").filter(function (a) {
        return "" != a
    }).slice(0,
        2).reverse(), ea(a, b))
}

function pa(a) {
    if (R) {
        a = a.split("");
        for (var b = R; 0 < a.length;) {
            var c = a.shift();

            if (!b.n[c]) return !1;
            b = b.n[c]
        }
        return !!b.t
    }
    alert("Dictionary error")
}

function va() {
    fetch('/api.php?action=getWordlist')
        .then(response => response.text())
        .then(data => function () {
            for (var b = data, c, d = b.length, f = 0, k = [], h = 0; f + 1 < d;)
                for (c = b[f++], c = k[h] = "1" == c ? {
                    n: {},
                    t: 1
                } : {
                    n: {}
                }, h++; f + 1 < d;) {
                    var g = b[f++],
                        p = f;
                    if ("\n" == g || " " == g) break;
                    for (; f < d && !("0" > b[f] || "9" < b[f]);) f++;
                    f > p && (c.n[g] = b.substring(p, f))
                }
            for (b = 0; b < k.length; b++) {
                c = k[b];
                for (var q in c.n) c.n[q] = k[c.n[q]]
            }

            R = k[0]
        });
}

function H(a, b) {
    b = void 0 === b ? {} : b;
    var e = c("p", {
        style: {
            position: "absolute",
            right: 0
        }
    }, [c("div", {
        style: {
            padding: ".5em 1em",
            borderColor: "transparent",
            marginTop: "-.5em",
            cursor: "pointer"
        },
        onclick: function () {
            return H(0)
        }
    }, "X")]);
    if (0 == a) var d = c("p", {}, c("button", {
        onclick: function () {
            return H(1)
        }
    }, h("SLPICK")));
    else if (1 == a) {
        var f = function (a) {
            for (var b = 0; b < a.length; b++)
                if (" " == a[b] || 0 > w.indexOf(a[b])) return !1;
            return !0
        },
            k, g;
        d = c("div", {
            className: "mbox"
        }, [e, c("p", {}, h("SLPICK")), c("form", {
            onsubmit: function () {
                var a = k.value.trim().toUpperCase();
                if (3 > a.length || 6 < a.length || !f(a)) k.value = "", k.focus();
                else {
                    var b = g.value.trim().toUpperCase();
                    if (3 > b.length || 6 < b.length || !f(b)) g.value = "", g.focus();
                    else {
                        var c = wa(([a, b].reverse().join(" ") + " ").toUpperCase());
                        H(2, {
                            url: ha + "?" + c
                        });
                        Q({
                            tp: "gen",
                            wd: c,
                            wpl: a + " " + b,
                            wdf: m.wd,
                            wcf: m.wc,
                            gact: C ? 1 : 0
                        })
                    }
                }
                return !1
            }
        }, [c("p", {}, [k = c("input", {
            className: "ttup",
            spellcheck: !1,
            autocorrect: "off",
            style: {
                width: "8em"
            },
            onkeypress: function (a) {
                if (" " == a.key) return g.focus(), !1
            }
        }), " ", g = c("input", {
            className: "ttup",
            spellcheck: !1,
            autocorrect: "off",
            style: {
                width: "8em"
            }
        })]), c("p", {}, c("button", {
            className: "minw"
        }, h("SLOK")))]), c("p", {
            style: {
                a: "-.5em"
            }
        }, h("SLTWO"))])
    } else if (2 == a) {
        var l;
        a = G && "function" == typeof navigator.share;
        d = c("div", {
            className: "mbox"
        }, [e, c("p", {}, h("SLLINK")), c("p", {}, l = c("input", {
            className: "tac",
            style: {
                width: "24em",
                minWidth: "60%",
                maxWidth: "90%"
            },
            value: b.url || ""
        })), c("p", {}, c("button", {
            onclick: a ? function () {
                try {
                    navigator.share({
                        url: b.url
                    })
                } catch (p) { }
            } : function () {
                try {
                    l.select(), l.setSelectionRange(0, 999)
                } catch (p) { }
                try {
                    navigator.clipboard.writeText(b.url)
                } catch (p) { }
            },
            innerHTML: '\n<svg style="fill: currentColor; stroke: currentColor; stroke-width: 1px; width: 22px; height: 22px; margin-top: -1px; vertical-align: middle;" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">\n<path fill="none" stroke-width="1.6" d="M16 4l-12 7l12 7"></path>\n<circle cx="16" cy="4" r="2.5" />\n<circle cx="4" cy="11" r="2.5" />\n<circle cx="16" cy="18" r="2.5" />\n</svg>\n\u00a0 ' +
                h("SLSHARE")
        }))])
    }
    S && z(S, d);
    return d
}

function wa(a) {
    if (0 == a.length) return "";
    a = a.toUpperCase();
    var b = "",
        c = I.length,
        d = 1;
    a.split("").forEach(function (a, b) {
        return d += (b + 1) * (1 + w.indexOf(a))
    });
    d %= ia;
    var f = J + K * d;
    b += L.charAt(d).toLowerCase();
    a.split("").forEach(function (a, d) {
        a = w.indexOf(a);
        b += I.charAt((a + f) % c);
        f += (d + 1) * J + (d + K) * (a + 1)
    });
    return b
}

function ua(a) {
    if (0 == a.length) return "";
    var b = "",
        c = w.length,
        d = I.length,
        f = J + L.indexOf(a.charAt(0).toUpperCase()) % ia * K;
    a.substring(1).split("").forEach(function (a, e) {
        a =
            I.indexOf(a);
        a = (a - f % d + d) % d;
        b += w.charAt(a % c);
        f += (e + 1) * J + (e + K) * (a + 1)
    });
    return b
}

function T(a) {
    for (var b = [], c = 0; c < a; c++) b[c] = 0;
    return b
}

function sa() {
    v = [];
    A = T(6);
    E = {};
    z(t, [c("h3", {}, h("SLGUESS") + " - " + h(0 == y ? "SLCASE0" : 1 == y ? "SLCASE1" : "SLCASE2")), c("p", {
        style: {
            margin: "-1em 0 1em",
            opacity: .8
        }
    }, h("SLINFO")), c("div", {
        className: "tac",
        style: {}
    }, T(6).map(function (a, b) {
        return v[b] = c("div", b == g ? {
            className: "gactive"
        } : {}, A[b] = T(n.length).map(function () {
            return c("div", {
                className: "gcell",
                dataset: {
                    col: "0"
                }
            }, "\u00a0")
        }))
    })),
    Z = c("div", {
        className: "tam tac",
        style: {
            margin: "1em 0 2em"
        }
    }, ["QWERTYUIOP", "ASDFGHJKL", "-ZXCVBNM<", "\u0104\u015a\u0118\u0106\u017b\u0179\u0143\u00d3\u0141"].map(function (a) {
        return c("div", {}, a.split("").map(function (a) {
            return E[a] = c("button", {
                className: "btkey" + ("<" == a ? " bkspc klight" : ""),
                onclick: function () {
                    return N(a)
                },
                dataset: {
                    let: a
                },
                style: "<" == a || "-" == a ? {
                    width: "13.5%",
                    opacity: "-" == a ? 0 : 1
                } : {}
            }, a)
        }))
    })), ca = c("div", {}), S = c("div", {}, H(0, {})), c("p", {}, c("button", {
        onclick: function () {
            var a = window.location.href.split("?")[0].split("#")[0];
            window.location.href = a
        }
    }, [h("SLGSTD"), c("br", {}), h("SLGSTDOF")])), U ? c("p", {
        style: {}
    }, c("a", {
        href: U,
        target: "_blank",
        style: {
            textDecoration: "none",
            color: "inherit"
        }
    }, h("SLFEEDBACK"))) : null
    ])
}

function Q(a) {
    var b = void 0 === b ? "" : b;
    try {
        var c = new FormData,
            d;
        for (d in a) c.append(d, "undefined" == typeof a[d] ? "" : a[d]);
    } catch (k) { }
}
var ka = {
    SLTODAY: "dzi\u015b",
    SLGUESS: "ODGADNIJ S\u0141OWO",
    SLCASE0: "KTO\u015a CI WYBRA\u0141",
    SLCASE1: "DZISIEJSZE DWA",
    SLCASE2: "WCZORAJSZE",
    SLINFO: "(\u017c\u00f3\u0142ty - litera w z\u0142ym miejscu, zielony\u00a0-\u00a0ok, szary\u00a0-\u00a0nie ma w s\u0142owie)",
    SLGOTIT: "BRAWO!",
    SLTHATWAS: "TO BY\u0141O:",
    SLSEER: "JASNOWIDZ!",
    SLNOTAWORD: "NIE MA TAKIEGO S\u0141OWA",
    SLPICK: "WYBIERZ S\u0141OWA DLA KOGO\u015a",
    SLTWO: "DWA S\u0141OWA, MAX 6 LITEROWE",
    SLOK: "OK",
    SLLINK: "LINK",
    SLSHARE: "WY\u015aLIJ",
    SLGSTD: "ODGADNIJ DZISIEJSZE",
    SLGSTDOF: "(OFICJALNE)",
    SLGSYS: "ODGADNIJ WCZORAJSZE",
    SLDIAG: "DIAGRAM",
    SLDONEXT: "CHCESZ DRUGIE S\u0141OWO?",
    SLYES: "TAK",
    SLSURE: "CHC\u0118",
    SLFEEDBACK: "PRZE\u015aLIJ UWAGI",
    SLINSTALL: "ZAINSTALUJ"
},
    m = {},
    ha = "",
    U = null,
    aa = "",
    ra = ["X", "\u2b1b\ufe0f", "\ud83d\udfe8", "\ud83d\udfe9"],
    t, Z, ca, S, A, E, v, u = 0,
    n = "",
    g = 0,
    C = !1,
    l = [],
    O = [],
    D = [],
    x = {},
    da = 0,
    P = [],
    y = 0,
    F, B, R = null,
    fa = null,
    L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    w = L + " \u0104\u0106\u0118\u0141\u0143\u00d3\u015a\u0179\u017b",
    I = L.toLowerCase() + "0123456789",
    J = 13,
    K = 4,
    ia = 16,
    ja = !1,
    G = !1;
window.onload = function () {
    document.getElementById('check').addEventListener('click', function () {
        const wordid = document.getElementById('txt').value.replace('https://www.kurnik.pl/slowoku/?', '')

        if (wordid.length) {
            window.sldata.wd = wordid
            checkWord()
        } else {
            fetch('/api.php?action=getWordId')
                .then(response => response.json())
                .then(data => {
                    window.sldata.wd = data.wordid
                    checkWord()
                });
        }
    })

    function checkWord() {
        m = window.sldata || {};
        ha = m.linkurl || window.location.href.split("?")[0].split("#")[0].replace("www.",
            "");
        aa = m.gbrand || "#s\u0142owoku";
        U = "/uwagi/?t=sl";
        if (t = document.getElementById("abase")) {
            var a = window.navigator.userAgent || "",
                b = "MacIntel" === navigator.platform && "undefined" !== typeof navigator.standalone;
            ja = (G = /Android|\(iPhone|\(iPod|\(iPad/.test(a) || b) && /Mobile/.test(a);
            t.innerHTML = "";
            r(t, "acont");
            r(t, "devmob", G);
            t.ontouchstart = function () { };
            M(document.head, c("style", {
                type: "text/css"
            }, '\n\n.acont {\n-webkit-tap-highlight-color: rgba(0,0,0,0);\nuser-select: none;\n-webkit-user-select: none;\n}\n\n.xuste { user-select: text; -webkit-user-select: text; }\ninput, textarea { user-select: text; -webkit-user-select: text; }\n\nh3 { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 18px; color: #2a2; margin-top: .5em; }\n\n.acont button:not([class]) { padding-left: 20px; padding-right: 20px; }\n\n.tac { text-align: center; }\n.ttup { text-transform: uppercase; }\n\n.mbox { background: rgba(128,128,128,.1); margin: 1em 0; padding: 1px 0; border-radius: 6px; position: relative; }\n\n.acont .minw { min-width: 6em; }\n\nbutton { cursor: pointer; }\nbutton:active { opacity: .5; }\n\nbutton, .tam { touch-action: manipulation; }\n\nbutton.btkey { background: rgba(128,128,128,.2); width: 9%; padding: 0; height: 2.8em; margin: .5%; border: solid 1px rgba(128,128,128,.05); font-weight: bold; position: relative; opacity: .85; }\nbutton.btkey.klight { background: none; border: solid 2px rgba(128,128,128,.3); }\n.werror button.btkey.bkspc { border-color: red; color: red; }\n\n.acont.devmob button.btkey:active { opacity: 1; }\n\n.devmob button.btkey:active:after {\nopacity: 1;\ncontent: attr(data-let);\ndisplay: inline-block;\nborder-radius: 4px;\nposition: absolute; z-index:1;\nbottom: 120%; left: 50%;\ntransform: translateX(-50%); \npadding: .2em .4em .4em;\nfont-size: 200%;\nfont-weight: bold;\nline-height: 1.4;\nwidth: 100%; \nbackground: #343; color: #fff;\n}\n\n\n.btkey[data-col="1"], .btkey[data-col="2"], .btkey[data-col="3"] { color: #fff; }\n.btkey[data-col="1"] { background: #666; }\n.btkey[data-col="2"] { background: #ec1; }\n.btkey[data-col="3"] { background: #2a2; }\n\n.gwrong { position: relative; }\n.gwrong:after {\ncontent: "NIE MA TAKIEGO S\u0141OWA";\ndisplay: inline-block;\nborder-radius: 4px;\nposition: absolute; z-index: 2;\ntop: 108%; left: 50%; transform: translateX(-50%);\npadding: .5em 1em;\nbackground: red; color: #fff; font-weight: bold;\nwhite-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;\n}\n\n\n.gcell { width: ' +
            91.6 / 7 + '%; max-width: 2.0em; margin: 0.6%; display: inline-block; box-sizing: border-box; border: solid 2px rgba(128,128,128,.4); padding: 0; border-radius: 4px; text-align: center; font: bold 26px/1.45 sans-serif; }\n\n.gactive .gcell, .gfilled .gcell { border-color: currentColor; }\n.gwrong .gcell { border-color: red; color: red; }\n\n.gcell[data-col="1"], .gcell[data-col="2"], .gcell[data-col="3"]\n { border-color: transparent; color: #fff; }\n\n.gcell[data-col="1"] { background: #666; }\n.gcell[data-col="2"] { background: #ec2; }\n.gcell[data-col="3"] { background: #2a2; }\n\n'));
            ta(m.wd || "", m.wc);
            window.addEventListener("keypress", function (a) {
                "INPUT" != a.target.tagName && "TEXTAREA" != a.target.tagName && a.key && N(a.key.toUpperCase())
            });
            window.addEventListener("keydown", function (a) {
                "INPUT" != a.target.tagName && "TEXTAREA" != a.target.tagName && "Backspace" == a.key && N("<")
            });
            va();
            b = 0;
            try {
                window.matchMedia("(display-mode: standalone)").matches ? b = 1 : window.navigator.standalone && (b = 2)
            } catch (d) { }
            var e = 0;
            ja && (e = /Android/.test(a) ? 1 : 2);
            Q({
                tp: "vis",
                wd: m.wd,
                wc: m.wc,
                ref: document.referrer,
                mob: e,
                dmst: b
            })
        }
        ma('')
    }
}