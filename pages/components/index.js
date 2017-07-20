/**
 * 组件
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var VRender = require(__vrender);
var HeaderView = require(__basedir + "/framework/HeaderView");


var ComonentsView = VRender.PageView.extend(module, {
	getPageTitle: function () {
		return "VRender-组件";
	},

	renderBody: function (body) {
		ComonentsView.__super__.renderBody.call(this, body);

		new HeaderView(this, {active: "components"}).render(body);
	}
});

ComonentsView.import(["/css/style.css"]);
