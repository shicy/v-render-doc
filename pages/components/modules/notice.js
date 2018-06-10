/**
 * 通知
 * @author shicy <shicy85@163.com>
 * Created on 2018-06-07
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIButton = VRender.UIButton;
var UINotice = VRender.UINotice;

var NoticeModule = BaseModule.extend(module, {
	className: "comp-notice",

	getCompName: function () {
		return "Notification";
	},

	getSubName: function () {
		return "通知";
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
		demo.append(new UIButton(this, {ref: "notice_btn1", label: "点击打开通知"}));
		// 后端构建
		demo.append(new UINotice(this, {title: "标题", content: "服务端创建的通知，打开页面会直接显示通知。", duration: 60000}));

		var source = [];
		source.push("new UINotice(context, {title: '标题', content: '这里是内容！！', duration: 60000});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("类型");

		var demo = new UIGroup(this, {gap: 10, orientation: (this.isApp ? null : UIGroup.HORIZONTIAL)});
		demo.append(new UIButton(this, {ref: "notice_btn21", label: "默认"}));
		demo.append(new UIButton(this, {ref: "notice_btn22", label: "成功"}));
		demo.append(new UIButton(this, {ref: "notice_btn23", label: "警告"}));
		demo.append(new UIButton(this, {ref: "notice_btn24", label: "错误"}));
		demo.append(new UIButton(this, {ref: "notice_btn25", label: "消息"}));

		var source = [];
		source.push("new UINotice(context, {title: '标题', content: '通知提示文案'});");
		source.push("new UINotice(context, {title: '成功', content: '成功提示文案', type: 'success'});");
		source.push("new UINotice(context, {title: '警告', content: '警告提示文案', type: 'warn'});");
		source.push("new UINotice(context, {title: '错误', content: '错误提示文案', type: 'danger'});");
		source.push("new UINotice(context, {title: '消息', content: '消息提示文案', type: 'info'});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("时长");

		var demo = new UIGroup(this, {gap: 10, orientation: (this.isApp ? null : UIGroup.HORIZONTIAL)});
		demo.append(new UIButton(this, {ref: "notice_btn31", label: "默认10秒后关闭"}));
		demo.append(new UIButton(this, {ref: "notice_btn32", label: "自定义30秒后关闭"}));
		demo.append(new UIButton(this, {ref: "notice_btn33", label: "不自动关闭"}));

		var source = [];
		source.push("new UINotice(context, {title: '标题', content: '10秒后关闭'});");
		source.push("new UINotice(context, {title: '标题', content: '30秒后关闭', duration: 30000});");
		source.push("new UINotice(context, {title: '标题', content: '不会自动关闭', duration: 0});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("不可关闭");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "notice_btn41", label: "不可关闭"}));

		var source = [];
		source.push("new UINotice(context, {");
		source.push("  title: '标题',");
		source.push("  content: '不可手动关闭，15秒后自动关闭',");
		source.push("  duration: 15000,");
		source.push("  closable: false");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("富文本");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "notice_btn51", label: "使用HTML通知"}));

		var source = [];
		source.push("new UINotice(context, {");
		source.push("  title: '标题',");
		source.push("  focusHtmlContent: '<strong>这里也可以是<i>富文本</i>内容</strong>'");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("图标");

		var demo = new UIGroup(this);
		demo.append(new UIButton(this, {ref: "notice_btn61", label: "自定义图标"}));

		var source = [];
		source.push("new UINotice(context, {");
		source.push("  title: '自定义图标',");
		source.push("  content: '内容',");
		source.push("  icon: '/image/icons/b04.png'");
		source.push("});");

		this.showDemo(example, demo, source);
	}

});
