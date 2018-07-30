/**
 * 确认对话框
 * @author shicy <shicy85@163.com>
 * Created on 2018-07-30
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIButton = VRender.UIButton;
var UIConfirm = VRender.UIConfirm;

var ConfirmModule = BaseModule.extend(module, {
	className: "comp-confirm",

	getCompName: function () {
		return "Confirm";
	},

	getSubName: function () {
		return "确认对话框";
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
		demo.append(new UIButton(this, {ref: "tooltip_btn1", label: "点击打开确认框"}));
		// 后台构建，默认打开
		demo.append(new UIConfirm(this, {title: "提示！！", content: "您是否确认操作？"}));

		var source = [];
		source.push("new UIConfirm(context, {title: '提示！！', content: '您是否确认操作？'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("自定义按钮");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "tooltip_btn2", label: "点击打开确认框"}));

		var source = [];
		source.push("new UIConfirm(context, {content: '自定义“确认”和“取消”按钮', " +
			"confirmLabel: '自定义确认', cancelLabel: '自定义取消'});");

		this.showDemo(example, demo, source);
	}

});
