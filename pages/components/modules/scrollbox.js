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
		this.showExample2_1();
		this.showExample3();
		this.showExample4();
		this.showExample4_1();
		this.showExample5();
		this.showExample6();
		this.showExample7();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: "data.component.items"});
		demo.append(new UIScrollBox(this, {height: 400, content: listView}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("new UIScrollBox(context, {height: 400, content: listView});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("加载信息");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: "data.component.items", apiParams: {p_size: 5}});
		demo.append(new UIScrollBox(this, {height: 320, content: listView, loadingText: "正在努力加载中，请稍候.."}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items', apiParams: {p_size: 5}});");
		source.push("new UIScrollBox(context, {height: 320, content: listView, loadingText: '正在努力加载中，请稍候..'});");

		this.showDemo(example, demo, source);
	},

	showExample2_1: function () {
		var example = this.addExample("加载视图");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: "data.component.items"});
		var loadingView = "<div style='height:60px;background-image:url(/image/loading2.gif);background-size:100% 100%;'></div>";
		demo.append(new UIScrollBox(this, {height: 320, content: listView, loadingView: loadingView}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("var loadingView = '<div style=\"height:60px;background-image:url(/image/loading2.gif);" +
			"background-size:100% 100%;\"></div>';");
		source.push("new UIScrollBox(this, {height: 320, content: listView, loadingView: loadingView});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("加载位置");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: 'data.component.items'});
		demo.append(new UIScrollBox(this, {height: 320, content: listView, bottomDistance: 0}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("new UIScrollBox(this, {height: 320, content: listView, bottomDistance: 0});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("刷新信息");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: 'data.component.items'});
		demo.append(new UIScrollBox(this, {height: 320, content: listView, 
			refreshPullText: "下拉刷新列表", refreshDropText: "松开即可刷新列表", refreshLoadText: "刷新中，请稍候.."}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("new UIScrollBox(context, {height: 320, content: listView, refreshPullText: '下拉刷新列表', refreshDropText: '松开即可刷新列表', refreshLoadText: '刷新中，请稍候..'});");

		this.showDemo(example, demo, source);
	},

	showExample4_1: function () {
		var example = this.addExample("刷新视图");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: 'data.component.items'});
		var refreshView = "<div style='height:100%;background-image:url(/image/loading3.gif);background-position:center;'></div>";
		demo.append(new UIScrollBox(this, {height: 320, content: listView, refreshView: refreshView}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("var refreshView = '<div style=\"height:100%;background-image:url(/image/loading3.gif);background-position:center;\"></div>';");
		source.push("new UIScrollBox(context, {height: 320, content: listView, refreshView: refreshView});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("刷新位置");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: "data.component.items"});
		demo.append(new UIScrollBox(this, {height: 320, content: listView, topDistance: 100}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("new UIScrollBox(context, {height: 320, content: listView, topDistance: 100});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("底部视图");

		var demo = new UIGroup(this);
		var listView = new UIListView(this, {apiName: "data.component.items"});
		demo.append(new UIScrollBox(this, {height: 320, content: listView, bottomText: "-- 已经探索到底了！！ --"}));

		var source = [];
		source.push("var listView = new UIListView(context, {apiName: 'data.component.items'});");
		source.push("new UIScrollBox(context, {height: 320, content: listView, bottomText: '-- 已经探索到底了！！ --'});");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("空视图");

		var demo = new UIGroup(this);
		demo.append(new UIScrollBox(this, {height: 320, content: new UIListView(this)}));

		var source = [];
		source.push("new UIScrollBox(context, {height: 320, content: new UIListView(context)});");

		this.showDemo(example, demo, source);
	}

});
