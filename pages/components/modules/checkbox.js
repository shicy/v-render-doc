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
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);
		demo.append(new UICheckbox(this, {label: "Checkbox1", value: 1}));
		demo.append(new UICheckbox(this, {label: "Checkbox2", value: 2}));
		demo.append(new UICheckbox(this, {label: "长字符串，在移到端一行显示不下了，多行才能显示的情况", value: 3}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UICheckbox(context, {label: 'Checkbox1', value: 1}).render(target);");
		source.push("new UICheckbox(context, {label: 'Checkbox2', value: 2}).render(target);");
		source.push("new UICheckbox(context, {label: '长字符串，在移到端一行显示不下了，多行才能显示的情况', value: 3}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UICheckbox.create({target: [elem], label: 'Checkbox1', value: 1});");
		source.push("UICheckbox.create({target: [elem], label: 'Checkbox2', value: 2});");
		source.push("UICheckbox.create({target: [elem], label: '长字符串，在移到端一行显示不下了，多行才能显示的情况', value: 3});");

		this.showDemo(example, demo, source);
	},

	showExample2: function () {
		var example = this.addExample("禁用的多选框");

		var demo = new UIGroup(this);
		demo.append(new UICheckbox(this, {label: "一个可用的多选框", value: 1}));
		demo.append(new UICheckbox(this, {label: "一个禁用的多选框，未选中", value: 2, disabled: true}));
		demo.append(new UICheckbox(this, {label: "一个禁用的多选框，选中状态", value: 3, checked: true, disabled: true}));

		var source = [];
		source.push("new UICheckbox(context, {label: '一个可用的多选框', value: 1}).render(target);");
		source.push("new UICheckbox(context, {label: '一个禁用的多选框，未选中', value: 2, disabled: true}).render(target);");
		source.push("new UICheckbox(context, {label: '一个禁用的多选框，选中状态', value: 2, checked: true, disabled: true}).render(target);");

		this.showDemo(example, demo, source);
	}
});
