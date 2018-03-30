/**
 * 框架设计文档路由适配器
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-07
 */

var VRender = require(__vrender);


var RouterAdapter = module.exports = function (context) {
	this.context = context;
};

// RouterAdapter.prototype.before = function (path, params, callback) {
// 	console.log(path, params);
// };

RouterAdapter.prototype.view = function (name, params, callback) {
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
		callback(false, VRender.RouterStatus.OK, viewpath);
		return true;
	}
	return false;
};

RouterAdapter.prototype.api = function (name, params, callback) {
	if (name === "data.component.items") {
		setTimeout(function () {
			callback(false, {code: 0, data: {total: 123, rows: getListItems(params.data)}});
		}, 2000);
	}
	else if (name === "data.component.items2") {
		setTimeout(function () {
			callback(false, {code: 0, data: {total: 123, rows: getGridItems(params.data)}});
		}, 2000);
	}
	else if (name === "data.component.tree") {
		setTimeout(function () {
			callback(false, {code: 0, data: getTreeItems(params.data)});
		}, 2000);
	}
	else {
		return false;
	}
	return true;
};

///////////////////////////////////////////////////////////
var getListItems = function (params) {
	var total = 123;
	var size = Math.max(0, parseInt(params.p_size)) || 20;
	var page = Math.max(0, parseInt(params.p_no)) || 1;
	var items = [];
	var start = ((page - 1) * size) + 1;
	for (var i = 0; i < size && start <= total; i++) {
		items.push("Item " + start++);
	}
	return items;
};

var getGridItems = function (params) {
	var total = 123;
	var size = Math.max(0, parseInt(params.p_size)) || 20;
	var page = Math.max(0, parseInt(params.p_no)) || 1;
	var items = [];
	var start = ((page - 1) * size) + 1;
	for (var i = 0; i < size && start <= total; i++) {
		items.push({c1: "a" + start, c2: "b" + start, c3: "c" + start, c4: "c" + start, c5: "c" + start});
		start += 1;
	}
	return items;
};

var getTreeItems = function (params) {
	var parentId = parseInt(params.pid) || 0;
	if (parentId > 999)
		return {total: 0, rows: []};

	var label = "一级";
	if (parentId > 99)
		label = "三级";
	else if (parentId > 9)
		label = "二级";

	var total = Math.min(9, parseInt(params.total)) || 5;
	var size = Math.max(0, parseInt(params.p_size)) || 5;
	var page = Math.max(0, parseInt(params.p_no)) || 1;

	var items = [];
	var start = ((page - 1) * size) + 1;
	var id = parentId * 10;
	if (parentId > 0)
		label = label + " " + ("" + parentId).split("").join("-") + "-";
	for (var i = 0; i < size && start <= total; i++) {
		items.push({id: (parentId + start), label: (label + " " + start)});
		start += 1;
	}
	return {total: total, rows: items};
}
