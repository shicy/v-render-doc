/**
 * 弹出菜单
 * @author shicy <shicy85@163.com>
 * Created on 2018-04-12
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIButton = VRender.UIButton;
var UIPopupMenu = VRender.UIPopupMenu;

var PopupMenuModule = BaseModule.extend(module, {
	className: "comp-popupmenu",

	getCompName: function () {
		return "PopupMenu";
	},

	getSubName: function () {
		return "弹出菜单";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var menus = [];


		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));
		// demo.append(new UIPopupMenu(this, {target: button, data: menus}));

		var source = [];

		this.showDemo(example, demo, source, true);
	}
});
