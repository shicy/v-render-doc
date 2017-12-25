/**
 * 日期范围
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIDateRange = VRender.UIDateRange;

var DaterangeModule = BaseModule.extend(module, {
	className: "comp-daterange",

	getCompName: function () {
		return "DateRange";
	},

	getSubName: function () {
		return "日期范围选择";
	},

	getDescription: function () {
		return "基本表单组件，显示日历面板，选择日期。";
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDateRange(this, {start: "2017-08-01", end: "2017-08-25"}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIDateRange(context, {start: '2017-08-01', end: '2017-08-25'}).render(target)");
		source.push("// 浏览器端创建");
		source.push("UIDateRange.create({target: [elem], start: '2017-08-01', end: '2017-08-25'});");

		this.showDemo(example, demo, source);
	}
});
