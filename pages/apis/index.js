/**
 * 接口
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var VRender = require(__vrender);
var HeaderView = require(__basedir + "/framework/HeaderView");


var ApisView = VRender.PageView.extend(module, {
	getPageTitle: function () {
		return "VRender-API";
	},

	renderBody: function (body) {
		ApisView.__super__.renderBody.call(this, body);

		new HeaderView(this, {active: "apis"}).render(body);

		var mainBody = VRender.$("<div id='main-body'></div>").appendTo(body);

		var mainContainer = VRender.$("<div id='main-container'></div>").appendTo(mainBody);
		mainContainer.write("<div>抱歉，请等待...</div>");
		mainContainer.write("<div>I'm sorry, please wait...</div>");
	}
});

ApisView.import(["/css/style.css"]);
