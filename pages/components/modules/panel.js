/**
 * 分页
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


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
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIPanel(this, {title: "标题", content: "内容<br/><a>支持富文本</a>"});

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIPanel(context, {title: '标题', context: '内容<br/>a>支持富文本</a>'}).render(target)");
		source.push("// 浏览器端创建");
		source.push("UIPanel.create({target: [elem], title: '标题', context: '内容<br/>a>支持富文本</a>'});");

		this.showDemo(example, demo, source);
	}
});
