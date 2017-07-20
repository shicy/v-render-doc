/**
 * 框架设计文档路由适配器
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-07
 */

var VRender = require(__vrender);


var RouterAdapter = module.exports = function (context) {
	this.context = context;
};

RouterAdapter.prototype.router = function (name, params, path, callback) {
	var names = name.substr(1).split("/");
	if (names[0] === "quickstart") {
		callback(VRender.RouterStatus.OK, "./pages/quickstart");
		return true;
	}
	else if (names[0] === "documents") {
		callback(VRender.RouterStatus.OK, "./pages/documents");
		return true;
	}
	else if (names[0] === "components") {
		callback(VRender.RouterStatus.OK, "./pages/components");
		return true;
	}
	else if (names[0] === "styles") {
		callback(VRender.RouterStatus.OK, "./pages/styles");
		return true;
	}
	else if (names[0] === "apis") {
		callback(VRender.RouterStatus.OK, "./pages/apis");
		return true;
	}
	return false;
};
