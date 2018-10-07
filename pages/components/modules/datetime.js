/**
 * 日期和时间选择
 * @author shicy <shicy85@163.com>
 * Created on 2018-10-06
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIDateTime = VRender.UIDateTime;

var DatetimeModule = BaseModule.extend(module, {
	className: "comp-datetime",

	getCompName: function () {
		return "DateTime";
	},

	getSubName: function () {
		return "日期和时间选择";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
		this.showExample4();
		this.showExample5();
		this.showExample6();
		this.showExample7();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDateTime(this, {prompt: "请选择日期和时间"}));

		var source = [];
		source.push("new UIDateTime(context, {prompt: '请选择日期和时间'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("默认");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this)).append(new UIDateTime(this, {date: new Date()}));
		demo.add(new UIGroup(this)).append(new UIDateTime(this, {date: "2018-10-10 13:25:30"}));
		demo.add(new UIGroup(this)).append(new UIDateTime(this, {date: (Date.now() + 24 * 60 * 60 * 1000)}));

		var source = [];
		source.push("new UIDateTime(context, {date: new Date()});");
		source.push("new UIDateTime(context, {date: '2018-10-10 13:25:30'});");
		source.push("new UIDateTime(context, {date: (Date.now() + 24 * 60 * 60 * 1000)});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("禁用");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDateTime(this, {date: Date.now()}));

		var source = [];
		source.push("new UIDateTime(context, {date: Date.now()});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("格式化");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UIDateTime(this, {date: "2018-10-10 13:25:30", format: "yyyy年MM月dd日HH时mm分ss秒"}));
		demo.add(new UIGroup(this))
			.append(new UIDateTime(this, {date: "2018-10-10 13:25:30", format: "yyyy/MM/dd HH:mm:ss"}));

		var source = [];
		source.push("new UIDateTime(context, {date: '2018-10-10 13:25:30', format: 'yyyy年MM月dd日HH时mm分ss秒'});");
		source.push("new UIDateTime(context, {date: '2018-10-10 13:25:30', format: 'yyyy/MM/dd HH:mm:ss'});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("范围");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDateTime(this, {date: "2018-10-05 08:00:00", min: "2018-01-01 12:15:30", 
			max: Date.now(), showSecond: true}));

		var source = [];
		source.push("new UIDateTime(context, {date: '2018-10-10 08:00:00', min: '2018-01-01 12:15:30', " +
			"max: Date.now(), showSecond: true});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("显示秒");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDateTime(this, {date: Date.now(), showSecond: true}));

		var source = [];
		source.push("new UIDateTime(context, {date: Date.now(), showSecond: true});");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("可选时间");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UIDateTime(this, {date: Date.now(), hours: [8, 10, 12, 14]}));
		demo.add(new UIGroup(this))
			.append(new UIDateTime(this, {date: Date.now(), minutes: [0, 15, 30, 45], showSecond: true}));
		demo.add(new UIGroup(this))
			.append(new UIDateTime(this, {date: Date.now(), seconds: [0, 30], showSecond: true}));

		var source = [];
		source.push("new UIDateTime(context, {date: Date.now(), hours: [8, 10, 12, 14]});");
		source.push("new UIDateTime(context, {date: Date.now(), minutes: [0, 15, 30, 45], showSecond: true});");
		source.push("new UIDateTime(context, {date: Date.now(), seconds: [0, 30], showSecond: true});");

		this.showDemo(example, demo, source);
	}

});