/**
 * 快速入门
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-07
 */

var body = $("body");

// 菜单
var menus = body.find("aside li");

// 章节锚点
var sections = body.find("article h1 a");


if (body.attr("device") == "pc") {
	setTimeout(function () {
		var positions = Utils.map(body.find("article h1 a"), function (item) {
			return item.offset().top;
		});

		$(window).on("scroll", function (e) {
			menus.removeClass("active");
			var scrollTop = body.scrollTop() + 6;
			for (var i = positions.length - 1; i >= 0; i--) {
				if (scrollTop > positions[i]) {
					menus.eq(i).addClass("active");
					break;
				}
			}
		}).scroll();
	}, 0);
}




