/**
 * 输入框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-14
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var UIGroup = VRender.UIGroup;
var UIHGroup = VRender.UIHGroup;
var UIVGroup = VRender.UIVGroup;
var UITextView = VRender.UITextView;

var TextViewModule = BaseModule.extend(module, {
	className: "comp-textview",

	getCompName: function () {
		return "TextView";
	},

	getSubName: function () {
		return "文本输入框";
	},

	getDescription: function () {
		return "基本表单组件，支持<code>input</code>和<code>textarea</code>，是原生输入框控件的扩展。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIVGroup(this, {gap: 10});
		demo.append(new UITextView(this, {prompt: "请输入"}));
		demo.append(new UITextView(this, {prompt: "多行文本输入框", multi: true}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UITextView(context, {prompt: '请输入'}).render(target);");
		source.push("new UITextView(context, {prompt: '多行文本输入框', multi: true}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UITextView.create({target: [elem], prompt: '请输入'});");
		source.push("UITextView.create({target: [elem], prompt: '多行文本输入框', multi: true});");

		this.showDemo(example, demo, source);
	},

	showExample2: function () {
		var description = "设置属性<code>type</code>为：<code>number</code>、<code>email</code>、<code>tel</code>、" +
			"<code>mobile</code>、<code>phone</code>、<code>url</code>、<code>password</code>创建不同类型的输入框。";
		var example = this.addExample("文本框类型", description);

		var demo = new UIGroup(this, {gap: 10});
		demo.addChild(new UIGroup(this))
			.append(new UITextView(this, {type: "number", min: 1, max: 100, prompt: "请输入1-100之间的数字",
				desc: "数字类型输入框，只能输入数字，默认保留2位小数"}));
		demo.addChild(new UIGroup(this))
			.append(new UITextView(this, {type: "email", prompt: "请输入电子邮箱",
				desc: "电子邮箱类型输入框，验证输入框内容为电子邮箱格式"}));
		demo.addChild(new UIGroup(this))
			.append(new UITextView(this, {type: "password", prompt: "请输入密码", 
				desc: "密码输入框，内容不可见"}));
		demo.addChild(new UIGroup(this))
			.append(new UITextView(this, {type: "tel", prompt: "请输入电话号码或手机号", 
				desc: "电话号码输入框，验证输入框内容为电话号码或手机号"}));
		demo.addChild(new UIGroup(this))
			.append(new UITextView(this, {type: "url", prompt: "请输入网址", value: "http://", 
				desc: "网址输入框，验证输入框内容为输入框，如：http://www.xxx.com/a/b"}));

		var source = [];
		source.push("// 数字类型输入框");
		source.push("new UITextView(context, {type: 'number', prompt: '请输入1-100之间的数字'});");
		source.push("// 电子邮箱输入框");
		source.push("new UITextView(context, {type: 'email', prompt: '请输入电子邮箱'});");
		source.push("// 密码输入框");
		source.push("new UITextView(context, {type: 'password', prompt: '请输入密码'});");
		source.push("// 电话号码、手机输入框");
		source.push("new UITextView(context, {type: 'tel', prompt: '请输入电话号码或手机号'});");
		source.push("// 网址输入框");
		source.push("new UITextView(context, {type: 'url', prompt: '请输入网址'});");

		this.showDemo(example, demo, source);
	}
});
