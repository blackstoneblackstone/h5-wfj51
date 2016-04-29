(function () {
    var a = document.getElementsByTagName("script"), g, d, f, h;
    for (f = 0; f < a.length; f++)if (d = a[f].src, h = d.indexOf("vxload.js"), h == 0) {
        a = window.location.pathname;
        g = a.substring(0, a.lastIndexOf("/") + 1);
        break
    } else if (h > 0) {
        g = d.substr(0, h);
        break
    }
    window.VxParam = {};
    window.VxParam.base = g;
    d = d.substr(d.indexOf("?") + 1).split("&");
    for (f = 0; f < d.length; ++f)if (a = d[f].split("="), a.length == 2)switch (a[0]) {
        case "data":
            window.VxParam.data = "http://" + a[1] + "/vx/";
            break;
        default:
            window.VxParam[a[0]] = a[1]
    }
    var k = typeof window.VxParam.v !==
    "undefined" ? window.VxParam.v : "0";
    window.VxParam.version = k;
    window.vxAddListener = function (b, a, c) {
        b.addEventListener(a, function (b) {
            b.preventDefault();
            c(b)
        }, !1)
    };
    var l = function (b, a) {
        var c = document.createElement("script");
        c.src = b;
        if (a)typeof window.ActiveXObject != "undefined" ? c.onreadystatechange = function () {
            var b = this.readyState;
            ("loaded" === b || "complete" === b) && a()
        } : c.onload = a;
        document.getElementsByTagName("head")[0].appendChild(c)
    };
    f = function (b, a) {
        l(g + b + "?" + k, a)
    };
    var m = function (b) {
        var a = document.createElement("link");
        a.setAttribute("rel", "stylesheet");
        a.setAttribute("type", "text/css");
        a.setAttribute("href", b);
        document.getElementsByTagName("head")[0].appendChild(a)
    };
    d = function (b) {
        m(g + b + "?" + k)
    };
    var a = function (b) {
        for (var a = "", c = 0, e = c1 = c2 = 0; c < b.length;)e = b.charCodeAt(c), e < 128 ? (a += String.fromCharCode(e), c++) : e > 191 && e < 224 ? (c2 = b.charCodeAt(c + 1), a += String.fromCharCode((e & 31) << 6 | c2 & 63), c += 2) : (c2 = b.charCodeAt(c + 1), c3 = b.charCodeAt(c + 2), a += String.fromCharCode((e & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3);
        return a
    }, j = function (b) {
        for (var a =
            "", c, e, f, d, h, g = 0, b = b.replace(/[^A-Za-z0-9\.\_\-]/g, ""); g < b.length;)c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".indexOf(b.charAt(g++)), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".indexOf(b.charAt(g++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".indexOf(b.charAt(g++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-".indexOf(b.charAt(g++)), c = c << 2 | e >> 4, e = (e & 15) << 4 | d >> 2, f = (d & 3) << 6 | h, a += String.fromCharCode(c),
        d != 64 && (a += String.fromCharCode(e)), h != 64 && (a += String.fromCharCode(f));
        return a
    }, i = function () {
        for (var b = {}, a = window.location.search.substring(1).split("&"), c = 0; c < a.length; c++) {
            var e = a[c].split("=");
            typeof b[e[0]] === "undefined" ? b[e[0]] = e[1] : typeof b[e[0]] === "string" ? b[e[0]] = [b[e[0]], e[1]] : b[e[0]].push(e[1])
        }
        return b
    }();
    h = function (a) {
        return typeof i[a] !== "undefined" ? i[a] : typeof window.VxParam[a] !== "undefined" ? window.VxParam[a] : null
    };
    if (typeof i.title !== "undefined")document.title = typeof i.editor !== "undefined" ?
        decodeURIComponent(i.title) : a(j(i.title));
    (function (a) {
        if (a != null && document.querySelector) {
            var d = document.querySelector('meta[name="viewport"]');
            if (!d)d = document.createElement("meta"), d.name = "viewport", document.getElementsByTagName("head")[0].appendChild(d);
            if (d) {
                var c = navigator.userAgent;
                if (/iPad/i.test(c) || /iPhone/i.test(c))d.content = "width=" + a + ",user-scalable=no"; else {
                    var e = !1;
                    if (c.indexOf("Android") >= 0 && c.indexOf("AppleWebKit") >= 0 && (parseFloat(c.slice(c.indexOf("AppleWebKit") + 12)) < 535 || c.indexOf("Chrome/30.0.0.0") >=
                        0))e = !0;
                    d.content = e ? "width=" + a + ",initial-scale=.1,maximum-scale=.1" : "width=" + a
                }
            }
        }
    })(h("width"));
    a = h("nid");
    j = h("logo");
    h = h("key");
    f("hammer.min.js", function () {
        var a = navigator.userAgent;
        window.VxParam.start = (new Date).getTime();
        if (typeof i.uid == "undefined" && (a.indexOf("iPad") >= 0 || a.indexOf("iPhone") >= 0 || a.indexOf("Android") >= 0))a = document.createElement("div"), a.setAttribute("id", "vx-loading-timer"), a.setAttribute("class", "vx-loading-timer"), document.body.appendChild(a), a = document.createElement("div"),
            a.setAttribute("id", "vx-loading-image"), a.setAttribute("class", "vx-loading-image"), document.body.appendChild(a), a = document.createElement("div"), a.setAttribute("id", "vx-loading-text"), a.setAttribute("class", "vx-loading-text"), document.body.appendChild(a)
    });
    d("vxconfig.css");
    if (typeof i.editor == "undefined" && j != null) {
        for (var j = a.length, n = 0, o = "nodes"; j > 0;)o += "/" + a.substr(n, 2), j -= 2, n += 2;
        m(g + o + ".css?" + h)
    }
    typeof i.editor !== "undefined" ? (d("video-js/video-js.css"), f("video-js/video.js"), f("VxFlashPlayer/swfobject.js"),
        d("gxt/css/gxt-all.css"), d("VxProject.css"), f("raphael-min.js"), f("jscolor/jscolor.js"), f("kindeditor/kindeditor-min.js"), d("animate.min.css")) : l("http://res.wx.qq.com/open/js/jweixin-1.0.0.js");
    f("com.vxplo.Base/com.vxplo.Base.nocache.js", function () {
        if ("onInjectionDone"in window.com_vxplo_Base)window.com_vxplo_Base.onInjectionDone("com.vxplo.Base")
    })
})();
var _paq = _paq || [], txv = txv || {};
txv.flash = {};
txv.flash.setTotaltime = function (a, g) {
    window.VxJsFunc(768, {id: a, time: g})
};
txv.flash.playStatus = function (a, g) {
    window.VxJsFunc(769, {id: a, status: g == "resume"})
};
txv.flash.normalScreen = function (a) {
    window.VxJsFunc(770, {id: a, status: !1})
};
txv.flash.fullScreen = function (a) {
    window.VxJsFunc(770, {id: a, status: !0})
};
txv.flash.nextplay = function (a) {
    window.VxJsFunc(771, {id: a})
};
txv.flash.replay = function (a) {
    window.VxJsFunc(772, {id: a})
};
txv.flash.gotoPage = function (a) {
    typeof window.VxJsFunc != "undefined" && window.VxJsFunc(773, {page: a})
};
VxJsFn4 = function (a) {
    VxJsFunc(4, a)
};
VxJsFn5 = function (a) {
    VxJsFunc(5, a)
};
VxJsFn6 = function (a) {
    VxJsFunc(6, a)
};
VxJsFn10 = function (a) {
    VxJsFunc(10, a)
};