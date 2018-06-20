/**
 * 单选框组
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIRadioGroup = VRender.UIRadioGroup;

var RadgrpModule = BaseModule.extend(module, {
	className: "comp-radgrp",

	getCompName: function () {
		return "RadioGroup";
	},

	getSubName: function () {
		return "单选框组";
	},

	getDescription: function () {
		return "显示一组单选框，并使单选框之间互斥，即保证只有一个单选框被选中。";
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this, {gap: 10, orientation: UIGroup.VERTICAL});
		demo.append(new UIRadioGroup(this, {data: ["A", "B", "C", "D"], selectedIndex: 1}));
		demo.append(new UIRadioGroup(this, {data: ["A", "B", "C", "D"], selectedIndex: 0}));

		var source = [];
		source.push("new UIRadioGroup(context, {data: ['A', 'B', 'C', 'D'], selectedIndex: 1});");
		source.push("new UIRadioGroup(context, {data: ['A', 'B', 'C', 'D'], selectedIndex: 0});");

		this.showDemo(example, demo, source);
	}
});
