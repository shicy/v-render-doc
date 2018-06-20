/**
 * 多选框组
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UICheckGroup = VRender.UICheckGroup;

var RadgrpModule = BaseModule.extend(module, {
	className: "comp-chkgrp",

	getCompName: function () {
		return "CheckGroup";
	},

	getSubName: function () {
		return "多选框组";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this, {gap: 10, orientation: UIGroup.VERTICAL});
		demo.append(new UICheckGroup(this, {data: ["A", "B", "C", "D"], selectedIndex: 1}));
		demo.append(new UICheckGroup(this, {data: ["A", "B", "C", "D"], selectedIndex: "0,3"}));

		var source = [];
		source.push("new UICheckGroup(context, {data: ['A', 'B', 'C', 'D'], selectedIndex: 1});");
		source.push("new UICheckGroup(context, {data: ['A', 'B', 'C', 'D'], selectedIndex: '0,3'});");

		this.showDemo(example, demo, source);
	}
});
