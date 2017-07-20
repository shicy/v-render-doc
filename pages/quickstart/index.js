/**
 * 快速入门
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-07
 */

var Path = require("path");
var VRender = require(__vrender);
var HeaderView = require(__basedir + "/framework/HeaderView");


var QuickstartView = VRender.PageView.extend(module, {
	getPageTitle: function () {
		return "VRender-快速入门";
	},

	renderBody: function (body) {
		QuickstartView.__super__.renderBody.call(this, body);

		new HeaderView(this, {active: "quickstart"}).render(body);

		var mainBody = VRender.$("<div id='main-body'></div>").appendTo(body);
		mainBody.writeFile(Path.resolve(__dirname, "./content.html"));
	}
});

QuickstartView.import(["/css/prism.css", "/css/style.css"]);
QuickstartView.import(["/js/prism.js"]);
