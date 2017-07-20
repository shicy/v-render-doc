/**
 * 页面顶部拦
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-07
 */

var VRender = require(__vrender);


var HeaderView = VRender.UIView.extend(module, {
	id: "main-header",

	renderView: function () {
		HeaderView.__super__.renderView.call(this);

		var content = VRender.$("<div class='content'></div>").appendTo(this.$el);

		var menus = VRender.$("<ul class='menus'></ul>").appendTo(content);
		menus.append("<li class='menu quickstart'><a href='/quickstart'>快速入门</a></li>");
		menus.append("<li class='menu documents'><a href='/documents'>说明文档</a></li>");
		menus.append("<li class='menu components'><a href='/components'>组件</a></li>");
		menus.append("<li class='menu styles'><a href='/styles'>全局样式</a></li>");
		menus.append("<li class='menu apis'><a href='apis'>API</a></li>");

		var active = this.options.active;
		if (active) {
			menus.children("." + active).addClass("active");
		}
	}
});
