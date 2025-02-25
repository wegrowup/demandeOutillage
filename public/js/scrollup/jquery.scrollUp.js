! function (a, b, c) {
    a.fn.scrollUp = function (b) {
        a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
    }, a.fn.scrollUp.init = function (d) {
        var e, f = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d);
        e = f.scrollTrigger ? a(f.scrollTrigger) : a("<a/>", {
            id: f.scrollName,
            href: "#top"
        }), f.scrollTitle && e.attr("title", f.scrollTitle), e.appendTo("body"), f.scrollImg || f.scrollTrigger || e.html(f.scrollText), e.css({
            display: "none",
            position: "fixed",
            zIndex: f.zIndex
        }), f.activeOverlay && a("<div/>", {
            id: f.scrollName + "-active"
        }).css({
            position: "absolute",
            top: f.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + f.activeOverlay,
            zIndex: f.zIndex
        }).appendTo("body");
        var g, h, i, j;
        switch (f.animation) {
            case "fade":
                g = "fadeIn", h = "fadeOut", i = f.animationSpeed;
                break;
            case "slide":
                g = "slideDown", h = "slideUp", i = f.animationSpeed;
                break;
            default:
                g = "show", h = "hide", i = 0
        }
        j = "top" === f.scrollFrom ? f.scrollDistance : a(c).height() - a(b).height() - f.scrollDistance;
        var k = !1;
        scrollEvent = a(b).scroll(function () {
            a(b).scrollTop() > j ? k || (e[g](i), k = !0) : k && (e[h](i), k = !1)
        });
        var l;
        f.scrollTarget ? "number" == typeof f.scrollTarget ? l = f.scrollTarget : "string" == typeof f.scrollTarget && (l = Math.floor(a(f.scrollTarget).offset().top)) : l = 0, e.click(function (b) {
            b.preventDefault(), a("html, body").animate({
                scrollTop: l
            }, f.scrollSpeed, f.easingType)
        })
    }, a.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, a.fn.scrollUp.destroy = function (d) {
        a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
    }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);