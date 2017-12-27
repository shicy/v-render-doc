/**
 * 标签栏
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var ListModule = require("./_list");


var Utils = VRender.Utils;
var UIGroup = VRender.UIGroup;
var UITabbar = VRender.UITabbar;

var TabbarModule = ListModule.extend(module, {
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

	getDataItems: function () {
		var items = [];
		items.push({name: "name", datatype: "String", value: "无",
			desc: "标签选项卡名称，一般上通过名称操作选项卡"});
		items.push({name: "label", datatype: "String", value: "无",
			desc: "默认标签显示文本，可以通过<code>labelField</code>和<code>labelFunction</code>自定义显示文本"});
		items.push({name: "closable", datatype: "Boolean", value: "false",
			desc: "设置标签选项卡是否可关闭（即移除选项卡）"});
		return items;
	},

	getMethods: function () {
		var methods = TabbarModule.__super__.getMethods.call(this);
		methods.push({name: "close", params: "value:Number|String", scope: 2,
			desc: "根据索引或项名称关闭选项卡，即移除选项卡。其中项名称即为属性<code>data</code>中的<code>name</code>字段。"});
		return methods;
	},

	getEvents: function () {
		var events = TabbarModule.__super__.getEvents.call(this);
		events.push({name: "show", desc: "标签选项卡未选中变为选中状态时触发该事件"});
		events.push({name: "hide", desc: "标签选项卡选中变为不选中状态时触发该事件"});
		events.push({name: "close", desc: "标签选项卡关闭，即被移除时触发该事件"});
		events.push({name: "itemclick", desc: "标签选项卡点击事件"});
		return events;
	},

	isMultipleSupport: function () {
		return false;
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
