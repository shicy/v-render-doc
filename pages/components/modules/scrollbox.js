/**
 * 滚动框
 * @author shicy <shicy85@163.com>
 * Created on 2018-04-12
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIListView = VRender.UIListView;
var UIScrollBox = VRender.UIScrollBox;

var ScrollBoxModule = BaseModule.extend(module, {
	className: "comp-scrollbox",

	getCompName: function () {
		return "ScrollBox";
	},

	getSubName: function () {
		return "滚动加载";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("new UIScrollBox(context, {height: 200, content: listView});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {

	}

});
