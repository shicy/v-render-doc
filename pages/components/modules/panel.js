/**
 * 分页
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIPanel = VRender.UIPanel;

var PanelModule = BaseModule.extend(module, {
	className: "comp-panel",

	getCompName: function () {
		return "Panel";
	},

	getSubName: function () {
		return "面板";
	},

	getDescription: function () {
		return "带有标题栏的容器组件，面板标题栏还可以包含标签页和按钮。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIPanel(this, {title: "标题", content: "内容<br/><a>支持富文本</a>"});

		var source = [];
		source.push("new UIPanel(context, {title: '标题', context: '内容<br/>a>支持富文本</a>'}).render(target)");

		this.showDemo(example, demo, source);
	},

	showExample2: function () {
		var example = this.addExample("添加按钮");

		var buttons = [];
		buttons.push({name: "btn1", label: "默认按钮"});
		buttons.push({name: "btn2", label: "下拉按钮", items: [{name: "btn21", label: "下拉按钮1"}, 
			{name: "btn22", label: "下拉按钮2"}, 
			{name: "btn23", label: "下拉按钮3"}, 
			{name: "btn24", label: "下拉按钮4"}]});
		buttons.push({name: "btn3", icon: "/image/icons/d01.png", tooltip: "图标按钮"});


		var demo = new UIPanel(this, {title: "", buttons: buttons});

		var source = [];


		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("多视窗显示");

		var demo = new UIGroup(this);

		var source = [];

		this.showDemo(example, demo, source);
	}
});
