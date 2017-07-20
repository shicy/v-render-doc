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
	}
});

ApisView.import(["/css/style.css"]);
