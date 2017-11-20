/**
 * 日期选择
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var UIGroup = VRender.UIGroup;
var UIDateInput = VRender.UIDateInput;

var DateinputModule = BaseModule.extend(module, {
	className: "comp-dateinput",

	getCompName: function () {
		return "DateInput";
	},

	getSubName: function () {
		return "日期选择";
	},

	getDescription: function () {
		return "基本表单组件，用来选择一个日期(即某一天)，日期不包含时、分、秒(均为0)。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDateInput(this, {prompt: "请选择日期"}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIDateInput(context, {prompt: '请选择日期'}).render(target)");
		source.push("// 浏览器端创建");
		source.push("UIDateInput.create({target: [elem], {prompt: '请选择日期'}});");

		this.showDemo(example, demo, source);
	},

	showExample2: function () {
		var example = this.addExample("禁用组件");

		var demo = new UIGroup(this);
		demo.append(new UIDateInput(this, {disabled: true}));

		var source = [];
		source.push("new UIDateInput(context, {disabled: true}).render(target);");

		this.showDemo(example, demo, source);
	}
});
