/**
 * 单选框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-21
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIHGroup = VRender.UIHGroup;
var UIRadiobox = VRender.UIRadiobox;

var RadioboxModule = BaseModule.extend(module, {
	className: "comp-radiobox",

	getCompName: function () {
		return "Radiobox";
	},

	getSubName: function () {
		return "单选框";
	},

	getDescription: function () {
		return "基本表单组件，主要用于选择一组选项中的一个，是原生单选控件的扩展。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);
		demo.append(new UIRadiobox(this, {label: "Radiobox1", name: 'radbox', value: 1}));
		demo.append(new UIRadiobox(this, {label: "Radiobox2", name: 'radbox', value: 2, checked: true}));
		demo.append(new UIRadiobox(this, {label: "Radiobox3", name: 'radbox', value: 3}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIRadiobox(context, {label: 'Radiobox1', name: 'radbox', value: 1}).render(target);");
		source.push("new UIRadiobox(context, {label: 'Radiobox2', name: 'radbox', value: 2, checked: true}).render(target);");
		source.push("new UIRadiobox(context, {label: 'Radiobox3', name: 'radbox', value: 3}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UIRadiobox.create({target: [elem], label: 'Radiobox1', name: 'radbox', value: 1});");
		source.push("UIRadiobox.create({target: [elem], label: 'Radiobox2', name: 'radbox', value: 2, checked: true});");
		source.push("UIRadiobox.create({target: [elem], label: 'Radiobox3', name: 'radbox', value: 3});");

		this.showDemo(example, demo, source);
	},

	showExample2: function () {
		var example = this.addExample("禁用的单选框");

		var demo = new UIGroup(this);
		demo.append(new UIRadiobox(this, {label: "Radiobox1", name: 'radbox2', value: 1}));
		demo.append(new UIRadiobox(this, {label: "Radiobox2", name: 'radbox2', value: 2, checked: true, disabled: true}));
		demo.append(new UIRadiobox(this, {label: "Radiobox3", name: 'radbox2', value: 3, disabled: true}));
		demo.append(new UIRadiobox(this, {label: "Radiobox5", name: 'radbox2', value: 5}));
		demo.append(new UIRadiobox(this, {label: "Radiobox5", name: 'radbox2', value: 6}));

		var source = [];
		source.push("new UIRadiobox(context, {label: 'Radiobox1', name: 'radbox2', value: 1}).render(target);");
		source.push("new UIRadiobox(context, {label: 'Radiobox2', name: 'radbox2', value: 2, checked: true, disabled: true}).render(target);");
		source.push("new UIRadiobox(context, {label: 'Radiobox3', name: 'radbox2', value: 3, disabled: true}).render(target);");
		source.push("new UIRadiobox(context, {label: 'Radiobox4', name: 'radbox2', value: 4}).render(target);");
		source.push("new UIRadiobox(context, {label: 'Radiobox5', name: 'radbox2', value: 5}).render(target);");

		this.showDemo(example, demo, source);
	}
});
