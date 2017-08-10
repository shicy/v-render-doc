/**
 * 组件
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var VRender = require(__vrender);
var HeaderView = require(__basedir + "/framework/HeaderView");
var SideMenuView = require("./SideMenuView");


var ComonentsView = VRender.PageView.extend(module, {
	getPageTitle: function () {
		return "VRender-组件";
	},

	// doInit: function () {
	// 	ComonentsView.__super__.doInit.call(this);
	// },

	renderBody: function (body) {
		ComonentsView.__super__.renderBody.call(this, body);

		new HeaderView(this, {active: "components"}).render(body);

		var mainBody = VRender.$("<div id='main-body'></div>").appendTo(body);

		new SideMenuView().render(mainBody);

		mainBody.write("<div id='singlepage-container' class='main-container'></div>");
	}
});

ComonentsView.use(VRender.plugins.SinglePage);

ComonentsView.import("/css/style.css");
