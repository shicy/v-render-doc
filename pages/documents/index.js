/**
 * 说明文档
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var VRender = require(__vrender);
var HeaderView = require(__basedir + "/framework/HeaderView");


var DocumentsView = VRender.PageView.extend(module, {
	getPageTitle: function () {
		return "VRender-说明文档";
	},

	renderBody: function (body) {
		DocumentsView.__super__.renderBody.call(this, body);

		new HeaderView(this, {active: "documents"}).render(body);
	}
});

DocumentsView.import(["/css/style.css"]);
