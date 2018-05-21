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
		this.showExample3();
		this.showExample4();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatePicker(this));

		var source = [];
		source.push("new UIDatePicker(context);");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("日期范围");

		var demo = new UIGroup(this);
		demo.append(new UIDatePicker(this, {range: true}));

		var source = [];
		source.push("new UIDatePicker(context, {range: true});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("默认");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this)).append(new UIDatePicker(this, {date: new Date()}));
		demo.add(new UIGroup(this)).append(new UIDatePicker(this, {range: true, start: "2018-01-05", end: "2018-01-28"}));

		var source = [];
		source.push("new UIDatePicker(context, {date: new Date()});");
		source.push("new UIDatePicker(context, {range: true, start: '2018-01-05', end: '2018-01-28'});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("最大最小日期");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this)).append(new UIDatePicker(this, {min: "2018-01-10", max: "2018-02-25", date: "2018-01-16"}));
		demo.add(new UIGroup(this)).append(new UIDatePicker(this, {range: true, min: "2018-01-10", max: "2018-02-25", 
			start: "2018-01-20"}));

		var source = [];
		source.push("new UIDatePicker(context, {min: '2018-01-10', max: '2018-02-25', date: '2018-01-16'});");
		source.push("new UIDatePicker(context, {range: true, min: '2018-01-10', max: '2018-02-25', start: '2018-01-20'});");

		this.showDemo(example, demo, source);
	}
});
