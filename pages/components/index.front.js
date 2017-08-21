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
	}
});

// 点击菜单
menus.tap("li", function (e) {
	var menu = $(e.currentTarget);
	var data = {name: menu.attr("name")};
	VRender.navigate("/components/" + data.name, data);
});

container.tap(".source > .morebtn", function (e) {
	var target = $(e.currentTarget).parent();
	target.toggleClass("open");
});


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
	}
})();
