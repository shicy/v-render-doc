/**
 * 输入框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-14
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


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

	getProperties: function () {
		var props = TextViewModule.__super__.getProperties.call(this);
		props.push({name: "value", datatype: "string", desc: "文本输入框内容"});
		props.push({name: "prompt", datatype: "string", desc: "文本输入框内提示文字"});
		// props.push({name: "dataType", datatype: "enum", desc: "文本输入框数据类型，"});
		return props;
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
		this.showExample4();
		this.showExample5();
		this.showExample6();
		this.showExample7();
		this.showExample8();
		this.showExample9();
		this.showExample10();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIVGroup(this, {gap: 10});
		demo.add(new UIGroup(this)).append(new UITextView(this, {prompt: "请输入"}));
		demo.add(new UIGroup(this)).append(new UITextView(this, {prompt: "多行文本输入框", multi: true}));

		var source = [];
		source.push("new UITextView(context, {prompt: '请输入'});");
		source.push("new UITextView(context, {prompt: '多行文本输入框', multi: true});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var description = "设置属性<code>type</code>为：<code>number</code>、<code>email</code>、<code>tel</code>、" +
			"<code>mobile</code>、<code>phone</code>、<code>url</code>、<code>password</code>创建不同类型的输入框。";

		var example = this.addExample("类型", description);

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "number", prompt: "请输入数字",
				desc: "数字类型输入框，只能输入数字，默认保留2位小数"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "email", prompt: "请输入电子邮箱",
				desc: "电子邮箱类型输入框，验证输入框内容为电子邮箱格式"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "password", prompt: "请输入密码", 
				desc: "密码输入框，内容不可见"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "tel", prompt: "请输入电话号码或手机号", 
				desc: "电话号码输入框，验证输入框内容为电话号码或手机号"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "url", prompt: "请输入网址", value: "http://", 
				desc: "网址输入框，验证输入框内容为输入框，如：http://www.xxx.com/a/b"}));

		var source = [];
		source.push("// 数字类型输入框");
		source.push("new UITextView(context, {type: 'number', prompt: '请输入数字'});");
		source.push("// 电子邮箱输入框");
		source.push("new UITextView(context, {type: 'email', prompt: '请输入电子邮箱'});");
		source.push("// 密码输入框");
		source.push("new UITextView(context, {type: 'password', prompt: '请输入密码'});");
		source.push("// 电话号码、手机输入框");
		source.push("new UITextView(context, {type: 'tel', prompt: '请输入电话号码或手机号'});");
		source.push("// 网址输入框");
		source.push("new UITextView(context, {type: 'url', prompt: '请输入网址', value: 'http://'});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("只读");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {value: "该文本框只读，不能输入", readonly: true}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {value: "该文本框只读，不能输入", readonly: true, multi: true}));

		var source = [];
		source.push("new UITextView(context, {value: '该文本框只读，不能输入', readonly: true});");
		source.push("new UITextView(context, {value: '该文本框只读，不能输入', readonly: true, multi: true});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("提示信息");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "文本框提示信息"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {tips: "提示"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {desc: "文本框备注信息，说明性文本内容。"}));

		var source = [];
		source.push("new UITextView(context, {prompt: '文本框提示信息'});");
		source.push("new UITextView(context, {tips: '提示'});");
		source.push("new UITextView(context, {desc: '文本框备注信息，说明性文本内容。'});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("必填");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "文本框不能为空", required: true}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "文本框不能为空", required: true, empty: "自定义为空的提示信息"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "文本框不能为空", required: true, multi: true}));

		var source = [];
		source.push("new UITextView(context, {prompt: '文本框不能为空', required: true});");
		source.push("new UITextView(context, {prompt: '文本框不能为空', required: true, empty: '自定义为空的提示信息'});");
		source.push("new UITextView(context, {prompt: '文本框不能为空', required: true, multi: true});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("数字类型");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "number", prompt: "请输入数字，默认2为小数"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "number", prompt: "请输入数字，保留3位小数", decimals: 3}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "number", prompt: "请输入10-20之间的数字", min: 10, max: 20, decimals: 0}));

		var source = [];
		source.push("new UITextView(context, {type: 'number', prompt: '请输入数字，默认2为小数'});");
		source.push("new UITextView(context, {type: 'number', prompt: '请输入数字，保留3位小数', decimals: 3});");
		source.push("new UITextView(context, {type: 'number', prompt: '请输入10-20之间的数字', min: 10, max: 20, decimals: 0});");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("错误信息");

		var doValidate = function (target, value, callback) {
			callback(/^[0-9a-zA-Z\_]{6,}$/.test(value) ? false : "格式不正确，请输入数字、字母、_，不少于6个字符");
		};

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "email", prompt: "请输入电子邮箱", errmsg: "亲，邮箱地址不是这样滴！"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "请输入名称，必须是字母、数字或_，最少6个字符", multi: true, validate: doValidate}));

		var source = [];
		source.push("new UITextView(context, {type: 'email', prompt: '请输入电子邮箱', errmsg: '亲，邮箱地址不是这样滴！'});");
		source.push("new UITextView(context, {");
		source.push("  prompt: '请输入名称，必须是字母、数字或_，最少6个字符',");
		source.push("  multi: true,");
		source.push("  validate: function (target, value, callback) {");
		source.push("    callback(/^[0-9a-zA-Z\\_]{6,}$/.test(value) ? false : '格式不正确，请输入数字、字母、_，不少于6个字符');");
		source.push("  }");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample8: function () {
		var example = this.addExample("隐藏内容");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "请输入密码", displayAsPwd: true}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "number", prompt: "请输入数字密码", displayAsPwd: true}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {type: "email", prompt: "输入邮箱作为密码", displayAsPwd: true}));

		var source = [];
		source.push("new UITextView(context, {prompt: '请输入密码', displayAsPwd: true});");
		source.push("new UITextView(context, {type: 'number', prompt: '请输入数字密码', displayAsPwd: true});");
		source.push("new UITextView(context, {type: 'email', prompt: '输入邮箱作为密码', displayAsPwd: true});");

		this.showDemo(example, demo, source);
	},

	showExample9: function () {
		var example = this.addExample("最大字符数");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "请输入10个字之内的文本", maxSize: 10}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "请输入备注信息", multi: true, maxSize: 120}));

		var source = [];
		source.push("new UITextView(context, {prompt: '请输入10个字之内的文本', maxSize: 10});");
		source.push("new UITextView(context, {prompt: '请输入备注信息', multi: true, maxSize: 120});");

		this.showDemo(example, demo, source);
	},

	showExample10: function () {
		var example = this.addExample("自适应高度");

		var autoText = "你可能会有这样的经历，跟人交谈时，有时你从各个角度给他分析一个问题，提出中肯的建议，但是他怎么都听不进去，表现得异常固执。" +
			"\n\n比如，一个女孩深陷感情骗局，外人一看就知道男孩在骗她，但女孩子却固执地认为男孩是真正爱她。" +
			"\n\n任凭外人怎么说，她都不会改变主意，甚至认为别人在不怀好意地破坏他们。" +
			"\n\n再比如，你苦口婆心地跟他人说年轻的时候多学点东西，多增长见识，对自己的事业、人生都有帮助，他却认为什么文化、知识都没有用，遇到事情还得靠钱、靠关系、靠运气。" +
			"\n\n于是，你所有的建议压根就不会起作用，他总会固执地寻找理由，固执地放弃努力。" +
			"\n\n每当这个时候，等你们争论一番毫无结果时，你也许会有一种挫败感，甚至捶胸顿足地喊道：从来就没有见过如此固执的人，这么简单的道理，他怎么就是不懂呢?";

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "请输入", autoHeight: true, width: "100%"}));
		demo.add(new UIGroup(this))
			.append(new UITextView(this, {prompt: "请输入内容", multi: true, autoHeight: true, 
				width: "100%", maxHeight: 500, value: autoText}));

		var source = [];
		source.push("new UITextView(context, {prompt: '请输入', autoHeight: true, width: '100%'});")
		source.push("new UITextView(context, {prompt: '请输入内容', multi: true, autoHeight: true, width: '100%'});");

		this.showDemo(example, demo, source);
	}
});
