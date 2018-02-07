/**
 * 列表
 * @author shicy <shicy85@163.com>
 * Created on 2018-02-07
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIListView = VRender.UIListView;

var exampleData = [];


var ListViewModule = BaseModule.extend(module, {
	className: "comp-listview",

	getCompName: function () {
		return "ListView";
	},

	getSubName: function () {
		return "列表视图";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExampleData();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: exampleData}));

		var source = [];
		source.push("new UIListView(context, {data: dataSource});");

		this.showDemo(example, demo, source, true);
	},

	showExampleData: function () {
		var example = this.addExample("测试数据集");

		var source = [];

		this.showDemo(example, null, source, true);
	}

});
