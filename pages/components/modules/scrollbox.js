/**
 * 滚动框
 * @author shicy <shicy85@163.com>
 * Created on 2018-04-12
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;

var ScrollBoxModule = BaseModule.extend(module, {
	className: "comp-scrollbox",

	getCompName: function () {
		return "ScrollBox";
	},

	getSubName: function () {
		return "滚动框";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this, {gap: 10});

		var source = [];

		this.showDemo(example, demo, source);
	}
	
});
