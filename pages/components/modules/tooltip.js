/**
 * 提示框
 * @author shicy <shicy85@163.com>
 * Created on 2018-06-09
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIButton = VRender.UIButton;
var UITooltip = VRender.UITooltip;

var TooltipModule = BaseModule.extend(module, {
	className: "comp-tooltip",

	getCompName: function () {
		return "Tooltip";
	},

	getSubName: function () {
		return "提示框";
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
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "tooltip_btn1", label: "点击打开提示框"}));
		// 后端构建
		demo.append(new UITooltip(this, {content: "这是一条消息提示，由服务端创建。"}));

		var source = [];
		source.push("new UITooltip(context, {content: '这是一条消息提示。默认3秒后关闭'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("类型");

		var demo = new UIGroup(this, {gap: 10, orientation: (this.isApp ? null : UIGroup.HORIZONTIAL)});
		demo.append(new UIButton(this, {ref: "tooltip_btn21", label: "默认"}));
		demo.append(new UIButton(this, {ref: "tooltip_btn22", label: "成功"}));
		demo.append(new UIButton(this, {ref: "tooltip_btn23", label: "错误"}));
		demo.append(new UIButton(this, {ref: "tooltip_btn24", label: "警告"}));
		demo.append(new UIButton(this, {ref: "tooltip_btn25", label: "消息"}));

		var source = [];
		source.push("new UITooltip(context, {content: '默认提示框'});");
		source.push("new UITooltip(context, {content: '成功信息', type: 'success'});");
		source.push("new UITooltip(context, {content: '失败、错误信息', type: 'danger'});");
		source.push("new UITooltip(context, {content: '警告信息', type: 'warn'});");
		source.push("new UITooltip(context, {content: '消息信息', type: 'info'});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("时长");

		var demo = new UIGroup(this, {gap: 10, orientation: (this.isApp ? null : UIGroup.HORIZONTIAL)});
		demo.append(new UIButton(this, {ref: "tooltip_btn31", label: "默认3秒关闭"}));
		demo.append(new UIButton(this, {ref: "tooltip_btn32", label: "自定义30秒后关闭"}));
		demo.append(new UIButton(this, {ref: "tooltip_btn33", label: "不自动关闭"}));

		var source = [];
		source.push("new UITooltip(context, {content: '默认提示信息等待3秒钟'});");
		source.push("new UITooltip(context, {content: '自定义等待30秒后关闭', duration: 30000});");
		source.push("new UITooltip(context, {content: '改消息不会自动关闭，请点击关闭按钮', duration: 0});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("不可关闭");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "tooltip_btn41", label: "不可关闭"}));

		var source = [];
		source.push("new UITooltip(context, {content: '改消息不可手动关闭，10秒钟后自动关闭', duration: 10000, closable: false});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("富文本");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "tooltip_btn51", label: "使用 HTML 消息"}));

		var source = [];
		source.push("new UITooltip(context, {focusHtmlContent: '<strong>这里也可以是<i>富文本</i>内容</strong>'});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("图标");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "tooltip_btn61", label: "自定义图标"}));

		var source = [];
		source.push("new UITooltip(context, {content: '自定义图标', icon: '/images/icons/b04.png'});");

		this.showDemo(example, demo, source);
	}

});
