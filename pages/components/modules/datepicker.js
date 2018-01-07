/**
 * 日历
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIDatePicker = VRender.UIDatePicker;

var DatepickerModule = BaseModule.extend(module, {
	className: "comp-datepicker",

	getCompName: function () {
		return "DatePicker";
	},

	getSubName: function () {
		return "日期选择器";
	},

	getDescription: function () {
		return "基本表单组件，显示日历面板，选择日期。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatePicker(this));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIDatePicker(context).render(target)");
		source.push("// 浏览器端创建");
		source.push("UIDatePicker.create({target: [elem]});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("选择日期范围");

		var demo = new UIGroup(this);
		demo.append(new UIDatePicker(this, {range: true}));

		var source = [];
		source.push("new UIDatePicker(context, {range: true}).render(target);");

		this.showDemo(example, demo, source);
	}
});
