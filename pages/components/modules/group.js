/**
 * 组视图
 * @author shicy <shicy85@163.com>
 * Created on 2017-12-16
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


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
		var properties = GroupModule.__super__.getProperties.call(this) || [];
		properties.push({name: "align", datatype: "enum", 
			desc: "子组件对齐方式，可选值：<code>left</code>（左对齐），<code>center</code>（水平居中），<code>right</code>（右对齐）" +
				"，<code>top</code>（上对齐），<code>middle</code>（竖直居中），<code>bottom</code>（下对齐）。"});
		properties.push({name: "children", datatype: "array", desc: "子组件（集）"});
		properties.push({name: "gap", datatype: "number", desc: "子组件间隔，默认“px”，REM配置为true时默认为“rem”。"});
		properties.push({name: "orientation", datatype: "enum", 
			desc: "子组件布局方向，可选值：<code>vertical</code>（竖直方向），<code>horizontial</code>（水平方向）。"});
		properties.push({name: "subViews", datatype: "array", desc: "同<code>children</code>属性，优先级低于<code>children</code>。"});
		properties.push({name: "views", datatype: "array", desc: "同<code>subViews</code>属性，优先级低于<code>subViews</code>。"});
		return properties;
	},

	getMethods: function () {
		var methods = GroupModule.__super__.getMethods.call(this) || [];
		methods.push({name: "add", desc: "添加一个子组件，并返回该子组件。", params: "child: *, options: Object"});
		methods.push({name: "append", desc: "添加一个或多个子组件，支持链式调用。", params: "args: *|Array"});
		methods.push({name: "getAlign", desc: "获取子组件对齐方式", scope: 1});
		methods.push({name: "getGap", desc: "获取子组件间隔", scope: 1});
		methods.push({name: "getOrientation", desc: "获取子组件布局方向", scope: 1});
		methods.push({name: "setAlign", desc: "设置子组件对齐方式，参见属性：<code>align</code>", params: "value: String"});
		methods.push({name: "setGap", desc: "设置子组件间隔", params: "value: Number|String"});
		methods.push({name: "setOrientation", desc: "设置子组件布局方向，参见属性：<code>orientation</code>", 
			params: "value: String"});
		methods.push({name: "remove", desc: "移除子组件", params: "child: *", scope: 1});
		methods.push({name: "removeAt", desc: "移除第N个子组件", params: "index: Number"});
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

		this.showDemo(example, demo, source, true);
	}

});
