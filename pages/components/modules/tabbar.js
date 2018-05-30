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
		events.push({name: "show", desc: "选中事件，当选项卡被选中时触发", result: "data:*"});
		events.push({name: "hide", desc: "取消选中事件，当选项卡取消选中时触发", result: "data:*"});
		events.push({name: "close", desc: "关闭事件，当选项卡被移除时触发", result: "data:*"});
		events.push({name: "itemclick", desc: "点击事件，当选项卡被点击时触发", result: "data:*"});
		return events;
	},

	isMultipleSupport: function () {
		return false;
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
		this.showExample4();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var tabs = [{label: "标签1", name: "tab1"}, {label: "标签2", name: "tab2"}, 
			{label: "标签3", name: "tab3"}, {label: "标签4", name: "tab4"}];
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 0});

		var source = [];
		source.push("var tabs = [];");
		source.push("tabs.push({label: '标签1', name: 'tab1'});");
		source.push("tabs.push({label: '标签2', name: 'tab2'});");
		source.push("tabs.push({label: '标签3', name: 'tab3'});");
		source.push("tabs.push({label: '标签4', name: 'tab4'});");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 0});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("可关闭");

		var tabs = [{label: "标签1", name: "tab1"}, {label: "标签2", name: "tab2", closable: true}, 
			{label: "标签3", name: "tab3", closable: true}, {label: "标签4", name: "tab4", closable: true}];
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 1});

		var source = [];
		source.push("var tabs = [];");
		source.push("tabs.push({label: '标签1', name: 'tab1'});");
		source.push("tabs.push({label: '标签2', name: 'tab2', closable: true});");
		source.push("tabs.push({label: '标签3', name: 'tab3', closable: true});");
		source.push("tabs.push({label: '标签4', name: 'tab4', closable: true});");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 1});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("更多标签");

		var tabs = [];
		for (var i = 1; i <= 20; i++) {
			tabs.push({label: "标签" + i, name: "tab" + i});
		}
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 15});

		var source = [];
		source.push("var tabs = [];");
		source.push("for (var i = 1; i <= 20; i++) {");
		source.push("  tabs.push({label, '标签' + i, name: 'tab' + i});");
		source.push("}");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 15});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("禁用");

		var tabs = [{label: "标签", name: "tab1"}, {label: "禁用的标签", name: "tab2", disabled: true}, 
			{label: "可用的标签", name: "tab3"}];
		var demo = new UITabbar(this, {data: tabs, selectedIndex: 0});

		var source = [];
		source.push("var tabs = [];");
		source.push("tabs.push({label: '标签', name: 'tab1'});");
		source.push("tabs.push({label: '禁用的标签', name: 'tab2', disabled: true});");
		source.push("tabs.push({label: '可用的标签', name: 'tab3'});");
		source.push("new UITabbar(context, {data: tabs, selectedIndex: 0});");

		this.showDemo(example, demo, source);
	}

});
