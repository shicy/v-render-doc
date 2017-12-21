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
		this.showExample2();
		this.showExample3();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var tabs = [{label: "标签1", name: "tab1"}, {label: "标签2", name: "tab2"}, 
			{label: "标签3", name: "tab3", disabled: true}, {label: "标签4", name: "tab4"}];
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 0});

		var source = [];
		source.push("var tabs = [];");
		source.push("tabs.push({label: '标签1', name: 'tab1'});");
		source.push("tabs.push({label: '标签2', name: 'tab2'});");
		source.push("tabs.push({label: '标签3', name: 'tab3', disabled: true});");
		source.push("tabs.push({label: '标签4', name: 'tab4'});");
		source.push("// 服务端创建");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 0}).render(target)");
		source.push("// 浏览器端创建");
		source.push("UITabbar.create({target: [elem], data: tabs, selectedIndex: 0});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("可关闭标签");

		var tabs = [{label: "标签1", name: "tab1"}, {label: "标签2", name: "tab2", closable: true}, 
			{label: "标签3", name: "tab3", closable: true}, {label: "标签4", name: "tab4", closable: true}];
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 1});

		var source = [];
		source.push("var tabs = [];");
		source.push("tabs.push({label: '标签1', name: 'tab1'});");
		source.push("tabs.push({label: '标签2', name: 'tab2', closable: true});");
		source.push("tabs.push({label: '标签3', name: 'tab3', closable: true});");
		source.push("tabs.push({label: '标签4', name: 'tab4', closable: true});");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 1}).render(target)");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("更多标签超出显示");

		var tabs = [];
		for (var i = 1; i <= 20; i++) {
			tabs.push({label: "标签" + i, name: "tab" + i});
		}
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 15});

		var source = [];
		source.push("var tabs = [];");
		source.push("for (var i = 1; i <= 20; i++) {\n\ttabs.push({label, '标签' + i, name: 'tab' + i});\n}");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 15}).render(target);");

		this.showDemo(example, demo, source);
	}
});
