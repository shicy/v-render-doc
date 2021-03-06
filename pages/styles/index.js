/**
 * 全局样式
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var VRender = require(__vrender);
var HeaderView = require(__basedir + "/framework/HeaderView");


var StylesView = VRender.PageView.extend(module, {
	getPageTitle: function () {
		return "VRender-全局样式";
	},

	renderBody: function (body) {
		StylesView.__super__.renderBody.call(this, body);

		new HeaderView(this, {active: "styles"}).render(body);

		var mainBody = VRender.$("<div id='main-body'></div>").appendTo(body);

		var mainContainer = VRender.$("<div id='main-container'></div>").appendTo(mainBody);
		mainContainer.write("<div>抱歉，请等待...</div>");
		mainContainer.write("<div>I'm sorry, please wait...</div>");
	}
});

StylesView.import(["/css/style.css"]);
