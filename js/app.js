(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        'use strict';

        new Particleground.wave('#line', {
            num: 3,
            lineColor: ['#DCDCDC', '#C2C2C2', '#A8A8A8'],
            lineWidth: [.2, .4, .6],
            offsetLeft: [3, 1, 0],
            offsetTop: .80,
            crestHeight: [10, 16, 22],
            rippleNum: 2,
            speed: .1,
            stroke: true
        });

        $(function () {
            $(window).load(function () {
                $('.top-loading').delay(2000).fadeOut(400);
            });
        });

        $('.l-carousel').owlCarousel({
            stagePadding: 0,
            loop: true,
            margin: 30,
            smartSpeed: 350,
            items: 1,
            lazyLoad: true,
            nav: true, // ナビ出すかダサないか
            navText: ["← PREV", "NEXT →"],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 60
                },
                600: {
                    items: 1,
                    stagePadding: 100
                },
                1000: {
                    items: 1,
                    stagePadding: 200
                },
                1200: {
                    items: 1,
                    stagePadding: 250
                },
                1400: {
                    items: 1,
                    stagePadding: 300
                },
                1600: {
                    items: 1,
                    stagePadding: 350
                },
                1800: {
                    items: 1,
                    stagePadding: 400
                }
            }
        });

        // ============================================

    }, {}]
}, {}, [1])
//# sourceMappingURL=app.js.map

/*
     FILE ARCHIVED ON 09:18:02 Oct 09, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:23:58 Jul 25, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 47.909 (3)
  esindex: 0.005
  captures_list: 60.76
  CDXLines.iter: 9.892 (3)
  PetaboxLoader3.datanode: 58.123 (4)
  exclusion.robots: 0.135
  exclusion.robots.policy: 0.126
  RedisCDXSource: 0.844
  PetaboxLoader3.resolve: 680.771
  load_resource: 721.087
*/