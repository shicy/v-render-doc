/**
 * 时间选择
 * @author shicy <shicy85@163.com>
 * Created on 2019-09-29
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIHGroup = VRender.UIHGroup;
var UITimeInput = VRender.UITimeInput;

var TimeinputModule = BaseModule.extend(module, {
	className: "comp-timeinput",

	getCompName: function () {
		return "TimeInput";
	},

	getSubName: function () {
		return "时间选择";
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

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.append(new UITimeInput(this, {prompt: "请选择时间"}));

		var source = [];
		source.push("new UITimeInput(context, {prompt: '请选择时间'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("默认");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.append(new UITimeInput(this, {time: "10:25"}));
		demo.append(new UITimeInput(this, {time: "9:6"}));
		demo.append(new UITimeInput(this, {time: "12:68"}));

		var source = [];
		source.push("new UITimeInput(context, {time: '10:25'});");
		source.push("new UITimeInput(context, {time: '9:6'});");
		source.push("new UITimeInput(context, {time: '12:68'})");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("禁止");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.append(new UITimeInput(this, {time: "12:00", disabled: true}));

		var source = [];
		source.push("new UITimeInput(context, {time: '12:00', disabled: true});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("显示秒");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.append(new UITimeInput(this, {time: "13:26:39", showSecond: true}));

		var source = [];
		source.push("new UITimeInput(context, {time: '13:26:39', showSecond: true});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("12小时制");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.append(new UITimeInput(this, {time: "15:45", use12Hour: true}));
		demo.append(new UITimeInput(this, {time: "23:29:55", use12Hour: true, showSecond: true}));

		var source = [];
		source.push("new UITimeInput(this, {time: '15:45', use12Hour: true});");
		source.push("new UITimeInput(this, {time: '23:29:55', use12Hour: true, showSecond: true});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("范围");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.append(new UITimeInput(this, {min: "8:30", max: "18:00", time: "6:45"}));
		demo.append(new UITimeInput(this, {min: "8:45:20", max: "18:20:40", showSecond: true}));
		demo.append(new UITimeInput(this, {min: "13:00", max: "14:00", use12Hour: true}));

		var source = [];
		source.push("new UITimeInput(context, {min: '8:30', max: '18:00'});");
		source.push("new UITimeInput(context, {min: '8:45:20', max: '18:20:40', showSecond: true});");
		source.push("new UITimeInput(context, {min: '13:00', max: '14:00', use12Hour: true});");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("可选时间");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.append(new UITimeInput(this, {hours: [8, 10, 12, 14]}));
		demo.append(new UITimeInput(this, {time: "6:33", minutes: [0, 15, 30, 45], showSecond: true}));
		demo.append(new UITimeInput(this, {seconds: [0, 30], showSecond: true}));

		var source = [];
		source.push("new UITimeInput(context, {hours: [8, 10, 12, 14]});");
		source.push("new UITimeInput(context, {time: '6:33', minutes: [0, 15, 30, 45], showSecond: true});");
		source.push("new UITimeInput(context, {seconds: [0, 30], showSecond: true})");

		this.showDemo(example, demo, source);
	}

});
