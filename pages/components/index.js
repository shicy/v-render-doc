/**
 * 组件
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var VRender = require(__vrender);
var HeaderView = require(__basedir + "/framework/HeaderView");
var SideMenu = require("./SideMenu");
var ModuleView = require("./ModuleView");


var ComonentsView = VRender.PageView.extend(module, {
	readyCode: "view.components",

	getPageTitle: function () {
		return "VRender-组件";
	},

	doInit: function () {
		ComonentsView.__super__.doInit.call(this);

		var self = this;
		this.moduleView = new ModuleView(this, {pathname: this.options.pathname});
		this.moduleView.ready(function () {
			self.ready("view.components");
		});
	},

	renderBody: function (body) {
		ComonentsView.__super__.renderBody.call(this, body);

		new HeaderView(this, {active: "components"}).render(body);

		var mainBody = VRender.$("#main-body").appendTo(body);

		// 菜单
		var sidebox = VRender.$(".sidebox").appendTo(mainBody);
		new SideMenu(this, {pathname: this.options.pathname}).render(sidebox);

		// 模块视图
		var container = VRender.$(".main-container").appendTo(mainBody);
		var pageContainer = VRender.$("#singlepage-container").appendTo(container);
		this.moduleView.render(pageContainer);

		container.append("<div class='foot-guide'><a class='prev'></a><a class='next'></a></div>");
	}
});

ComonentsView.use(VRender.plugins.SinglePage);

ComonentsView.import("/css/prism.css");
ComonentsView.import("/css/style.css");
