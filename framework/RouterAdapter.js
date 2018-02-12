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
	var viewpath = null;

	if (names[0] === "quickstart") {
		viewpath = "./pages/quickstart";
	}
	else if (names[0] === "documents") {
		viewpath = "./pages/documents";
	}
	else if (names[0] === "components") {
		if (names[1] === "module")
			viewpath = "./pages/components/ModuleView";
		else
			viewpath = "./pages/components";
	}
	else if (names[0] === "styles") {
		viewpath = "./pages/styles";
	}
	else if (names[0] === "apis") {
		viewpath = "./pages/apis";
	}

	if (viewpath) {
		callback(VRender.RouterStatus.OK, viewpath);
		return true;
	}
	return false;
};

RouterAdapter.prototype.action = function (name, params, callback) {
	if (name === "data.component.items") {
		setTimeout(function () {
			callback({code: 0, data: {total: 123, rows: getListItems(params.data)}});
		}, 400);
		return true;
	}
	return false;
};

///////////////////////////////////////////////////////////
var getListItems = function (params) {
	var total = 123;
	var size = Math.max(0, parseInt(params.size)) || 20;
	var page = Math.max(0, parseInt(params.page)) || 1;
	var items = [];
	var start = ((page - 1) * size) + 1;
	for (var i = 0; i < size && start <= total; i++) {
		items.push("Item " + start++);
	}
	return items;
};
