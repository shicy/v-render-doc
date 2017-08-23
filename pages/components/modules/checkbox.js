/**
 * 复选框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-21
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var UIGroup = VRender.UIGroup;
var UIHGroup = VRender.UIHGroup;
var UICheckbox = VRender.UICheckbox;

var CheckboxModule = BaseModule.extend(module, {
	className: "comp-checkbox",

	getCompName: function () {
		return "Checkbox";
	},

	getSubName: function () {
		return "多选框";
	},

	getDescription: function () {
		return "基本表单组件，主要用于选择一组选项中的一个或多个，是原生多选框控件的扩展。";
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIHGroup(this, {gap: 10});
		demo.append(new UICheckbox(this, {label: "Checkbox1", value: 1}));
		demo.append(new UICheckbox(this, {label: "Checkbox2", value: 2}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UICheckbox(context, {label: 'Checkbox1', value: 1}).render(target);");
		source.push("new UICheckbox(context, {label: 'Checkbox2', value: 2}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UICheckbox.create({target: [elem], label: 'Checkbox1', value: 1});");
		source.push("UICheckbox.create({target: [elem], label: 'Checkbox2', value: 2});");

		this.showDemo(example, demo, source);
	}
});
