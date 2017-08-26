/**
 * 标签栏
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var UIGroup = VRender.UIGroup;
var UITabbar = VRender.UITabbar;

var TabbarModule = BaseModule.extend(module, {
	className: "comp-tabbar",

	getCompName: function () {
		return "Tabbar";
	},

	getSubName: function () {
		return "标签栏";
	},

	getDescription: function () {
		return "可以在多个标签选项卡之间切换，通常用于显示或隐藏多个平级的视图。";
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var tabs = [{label: "标签1", name: "tab1"}, {label: "标签2", name: "tab2"}, {label: "标签3", name: "tab3"}];
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 0});

		var source = [];
		source.push("var tabs = [];");
		source.push("tabs.push({label: '标签1', name: 'tab1'});");
		source.push("tabs.push({label: '标签2', name: 'tab2'});");
		source.push("tabs.push({label: '标签3', name: 'tab3'});");
		source.push("// 服务端创建");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 0}).render(target)");
		source.push("// 浏览器端创建");
		source.push("UITabbar.create({target: [elem], data: tabs, selectedIndex: 0});");

		this.showDemo(example, demo, source);
	}
});
