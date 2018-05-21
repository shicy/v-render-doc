/**
 * 日期选择
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


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
		this.showExample3();
		this.showExample4();
		this.showExample5();
		this.showExample6();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDateInput(this, {prompt: "请选择日期"}));

		var source = [];
		source.push("new UIDateInput(context, {prompt: '请选择日期'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("默认");

		var demo = new UIGroup(this);
		demo.append(new UIDateInput(this, {date: "2018-05-20"}));

		var source = [];
		source.push("new UIDateInput(context, {date: '2018-05-20'});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("禁用");

		var demo = new UIGroup(this);
		demo.append(new UIDateInput(this, {date: new Date(), disabled: true}));

		var source = [];
		source.push("new UIDateInput(context, {date: new Date(), disabled: true});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("格式化");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIGroup(this).append(new UIDateInput(this, {date: "2018-01-01", format: "yyyy年MM月dd日"})));
		demo.append(new UIGroup(this).append(new UIDateInput(this, {date: "2018-01-01", format: "yyyy/MM/dd"})));

		var source = [];
		source.push("new UIDateInput(context, {date: '2018-01-01', format: 'yyyy年MM月dd日'});");
		source.push("new UIDateInput(context, {date: '2018-01-01', format: 'yyyy/MM/dd'});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("日期范围");

		var demo = new UIGroup(this);
		var minDate = new Date(), maxDate = new Date();
		minDate.setDate(minDate.getDate() - 10);
		maxDate.setDate(maxDate.getDate() + 10);
		demo.add(new UIGroup(this))
			.append("<div>选择前后各10天内的日期</div>")
			.append(new UIDateInput(this, {date: new Date(), min: minDate, max: maxDate}));

		var source = [];
		source.push("// 选择前后各10天内的日期");
		source.push("var minDate = new Date(), maxDate = new Date();");
		source.push("minDate.setDate(minDate.getDate() - 10);");
		source.push("maxDate.setDate(maxDate.getDate() + 10);");
		source.push("new UIDateInput(context, {date: new Date(), min: minDate, max: maxDate});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("原生");

		var demo = new UIGroup(this);
		demo.append(new UIDateInput(this, {date: "2018-01-02", native: true}));

		var source = [];
		source.push("new UIDateInput(context, {date: '2018-01-02', native: true});");

		this.showDemo(example, demo, source);
	}
});
