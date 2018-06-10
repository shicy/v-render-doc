/**
 * 表单
 * @author shicy <shicy85@163.com>
 * Created on 2018-06-10
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UITextView = VRender.UITextView;
var UICombobox = VRender.UICombobox;
var UIDateInput = VRender.UIDateInput;
var UIDateRange = VRender.UIDateRange;
var UIRadioGroup = VRender.UIRadioGroup;
var UIFormView = VRender.UIFormView;

var FormviewModule = BaseModule.extend(module, {
	className: "comp-formview",

	getCompName: function () {
		return "FormView";
	},

	getSubName: function () {
		return "表单";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this);
		var form = demo.add(new UIFormView(this));
		form.add("text", "文本").content("文本内容");
		form.add("input", "输入框").content(new UITextView(this));
		form.add("combo", "下拉选择框").content(new UICombobox(this, {data: ["选项1", "选项2", "选项3"]}));
		form.add("dateipt", "日期").content(new UIDateInput(this));
		form.add("daterange", "日期范围").content(new UIDateRange(this));
		form.add("radiogrp", "单选").content(new UIRadioGroup(this, {data: ["A", "B", "C", "D"]}));
		form.add("textarea", "多行文本").content(new UITextView(this, {multi: true}));
		form.setButtons([{label: "确定", type: "submit"}, {label: "取消", type: "cancel"}]);

		var source = [];
		source.push("var form = new FormView(context);");
		source.push("//");
		source.push("form.add('text', '文本').content('文本内容');");
		source.push("//");
		source.push("form.add('input', '输入框').content(new UITextView(context));");
		source.push("//");
		source.push("var combobox = new UICombobox(context, {data: ['选项1', '选项2', '选项3']});");
		source.push("form.add('combo', '下拉选择框').content(combobox);");
		source.push("//");
		source.push("form.add('dateipt', '日期').content(new UIDateInput(context));");
		source.push("//");
		source.push("form.add('daterange', '日期范围').content(new UIDateRange(context));");
		source.push("//");
		source.push("var radioGroup = new UIRadioGroup(context, {data: ['A', 'B', 'C', 'D']});");
		source.push("form.add('radiogrp', '单选').content(radioGroup);");
		source.push("//");
		source.push("form.add('textarea', '多行文本').content(new UITextView(context, {multi: true}));")
		source.push("//");
		source.push("form.setButtons([{label: '确定', type: 'submit'}, {label: '取消', type: 'cancel'}]);");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("表单验证");

		var demo = new UIGroup(this);

		var source = [];
		source.push("var form = new FormView(context);");
		source.push("//");
		source.push("form.add('email', '电子邮箱')");
		source.push("  .content(new UITextView(context, {type: 'email'}))");
		source.push("  .required();");
		source.push("//");
		source.push("form.add('mobile', '手机号码')");
		source.push("  .content(new UITextView(context, {type: 'number'}))");
		source.push("  .validate(function (value, callback) {");
		source.push("    callback(/^1\\d{10}$/.test(value) ? false : '手机号必须是1开始的11位数字');");
		source.push("  });");
		source.push("//");
		source.push("form.add('combo', '下拉选择框')");
		source.push("  .content(new UICombobox(context, {data: ['选项1', '选项2', '选项3'], prompt: '请选择'}))");
		source.push("  .required();");
		source.push("//");
		source.push("form.setButtons([{label: '确定', type: 'submit'}, {label: '取消', type: 'cancel'}]);");

		this.showDemo(example, demo, source);
	}

});
