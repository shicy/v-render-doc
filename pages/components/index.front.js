/**
 * 组件
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var body = $("body");
var menus = body.find(".sidemenu");
var container = body.find(".main-container");


VRender.on(VRender.event_routerchange, function (e, state) {
	menus.find(".active").removeClass("active");
	if (state && state.name) {
		menus.find("[name='" + state.name + "']").addClass("active");
		updateFootGuide();
	}
});

// // 点击菜单
menus.on("tap", "li", function (e) {
	var menu = $(e.currentTarget);
	var data = {name: menu.attr("name")};
	VRender.navigate("/components/" + data.name, data);
});

// 页面导航
container.on("tap", ".foot-guide a", function (e) {
	var data = {name: $(e.currentTarget).attr("menu")};
	VRender.navigate("/components/" + data.name, data);
});

container.on("tap", ".source > .morebtn", function (e) { console.log(e);
	var target = $(e.currentTarget).parent();
	target.toggleClass("open");
});

var updateFootGuide = function () {
	var sidemenus = menus.find("li");
	var prevGuide = container.find(".foot-guide .prev").text("").removeAttr("menu");
	var nextGuide = container.find(".foot-guide .next").text("").removeAttr("menu");
	for (var i = 0, l = sidemenus.length; i < l; i++) {
		if (sidemenus.eq(i).is(".active")) {
			if (i > 0) {
				var prev = sidemenus.eq(i - 1);
				prevGuide.text("前一篇：" + prev.text()).attr("menu", prev.attr("name"));
			}
			if (i < l - 1) {
				var next = sidemenus.eq(i + 1);
				nextGuide.text("后一篇：" + next.text()).attr("menu", next.attr("name"));
			}
		}
	}
};


(function () {
	var SinglePage = VRender.plugins.singlepage;
	if (SinglePage) {
		SinglePage.setViewHandler(function (state, callback) {
	 		var url = "/components/module/";
			url += (state && state.name) ? state.name : "index";
			VR.require(url, function (err, html) {
				if (err) {
					var errmsg = err;
					callback(false, "<div class='text-error'>" + errmsg + "</div>");
				}
				else {
					callback(false, html);
				}
			});
	 	});

	 	if (menus.find("li.active").length == 0) {
	 		SinglePage.ready(function () {
	 			menus.find("li:eq(0)").tap();
	 		});
	 	}
	 	else {
	 		updateFootGuide();
	 	}
	}
})();
