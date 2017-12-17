/**
 * 组视图
 * @author shicy <shicy85@163.com>
 * Created on 2017-12-16
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var UIGroup = VRender.UIGroup;

var GroupModule = BaseModule.extend(module, {
	className: "comp-group",

	getCompName: function () {
		return "Group";
	},

	getSubName: function () {
		return "组视图";
	},

	getDescription: function () {
		return "将多个子组件组装成一个大组件，组视图本身不可见，默认渲染为一个<code>div</code>。";
	},

	getProperties: function () {
		var properties = [];
		properties.push({name: "align", datatype: "enum", 
			desc: "子组件对齐方式，可选值：<code>left</code>（左对齐），<code>center</code>（水平居中），<code>right</code>（右对齐）" +
				"，<code>top</code>（上对齐），<code>middle</code>（竖直居中），<code>bottom</code>（下对齐）。"});
		properties.push({name: "gap", datatype: "number", desc: "子组件间隔，默认“px”，REM配置为true时默认为“rem”。"});
		properties.push({name: "orientation", datatype: "enum", 
			desc: "子组件布局方向，可选值：<code>vertical</code>（竖直方向），<code>horizontial</code>（水平方向）。"});
		return properties;
	},

	getMethods: function () {
		var methods = [];
		methods.push({name: "getGap", desc: "获取子组件间隔", scope: 1});
		methods.push({name: "setGap", desc: "设置子组件间隔", params: "value: Number|String"});
		methods.push({name: "getOrientation", desc: "获取子组件布局方向", scope: 1});
		methods.push({name: "setOrientation", desc: "设置子组件布局方向", params: "value: String(vertical|horizontial)"});
		return methods;
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = null; // new UIGroup(this);

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIGroup(context).render(target);");
		source.push("// 浏览器端创建");
		source.push("UIGroup.create({target: [elem]});");
		source.push("// 水平方向布局（仅服务端）");
		source.push("new UIHGroup(context).render(target);");
		source.push("// 竖直方向布局（仅服务端）");
		source.push("new UIVGroup(context).render(target);");

		this.showDemo(example, demo, source);
	}

});
