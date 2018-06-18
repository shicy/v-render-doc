/**
 * 表单
 * @author shicy <shicy85@163.com>
 * Created on 2018-06-10
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UITextView = VRender.UITextView;
var UICombobox = VRender.UICombobox;
var UIDateInput = VRender.UIDateInput;
var UIDateRange = VRender.UIDateRange;
var UIRadioGroup = VRender.UIRadioGroup;
var UIFormView = VRender.UIFormView;

var FormviewModule = BaseModule.extend(module, {
	className: "comp-formview",

	getCompName: function () {
		return "FormView";
	},

	getSubName: function () {
		return "表单";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
		this.showExample4();
		this.showExample5();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this);
		demo.add(new UIFormView(this, {
			action: "data.component.save",
			params: {id: 1, state: 1},
			data: [
				{name: "a", label: "文本", content: "文本内容"},
				{name: "b", label: "输入框", content: new UITextView(this)},
				{name: "c", label: "下拉选择框", 
					content: new UICombobox(this, {data: ["选项1", "选项2", "选项3"]})},
				{name: "d", label: "日期", content: new UIDateInput(this)},
				{name: "e", label: "日期范围", content: new UIDateRange(this)},
				{name: "f", label: "单选", content: new UIRadioGroup(this, {data: ["A", "B", "C", "D"]})},
				{name: "g", label: "多行文本", content: new UITextView(this, {multi: true})}
			],
			buttons: [{label: "确定", type: "submit"}, {label: "取消", type: "cancel"}]
		}));

		var source = [];
		source.push("new UIFormView(context, {");
		source.push("  action: 'data.component.save',");
		source.push("  params: {id: 1, state: 1},");
		source.push("  data: [{");
		source.push("    name: 'a',");
		source.push("    label: '文本',");
		source.push("    content: '文本内容'");
		source.push("  }, {");
		source.push("    name: 'b',");
		source.push("    label: '输入框',");
		source.push("    content: new UITextView(context)");
		source.push("  }, {");
		source.push("    name: 'c',");
		source.push("    label: '下拉选择框',");
		source.push("    content: new UICombobox(context, {data: ['选项1', '选项2', '选项3']})");
		source.push("  }, {");
		source.push("    name: 'd',");
		source.push("    label: '日期',");
		source.push("    content: new UIDateInput(context)");
		source.push("  }, {");
		source.push("    name: 'e',");
		source.push("    label: '日期范围',");
		source.push("    content: new UIDateRange(context)");
		source.push("  }, {");
		source.push("    name: 'f',");
		source.push("    label: '单选',");
		source.push("    content: new UIRadioGroup(context, {data: 'ABCD'.split('')})");
		source.push("  }, {");
		source.push("    name: 'g',");
		source.push("    label: '多行文本',");
		source.push("    content: new UITextView(context, {multi: true})");
		source.push("  }, {}],");
		source.push("  buttons: [{label: '确定', type: 'submit'},{label: '取消', type: 'cancel'}]");
		source.push("});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		if (this.isApp)
			return ;
		var example = this.addExample("多列");

		var demo = new UIGroup();
		demo.add(new UIFormView(this, {
			columns: 2,
			data: [
				{name: "a", label: "输入框1", content: new UITextView(this)},
				{name: "b", label: "输入框2", content: new UITextView(this)},
				{name: "c", label: "单选", colspan: 2, 
					content: new UIRadioGroup(this, {data: "ABCDEFGHIJKLMNOPQRST".split("")})},
				{name: "d", label: "多行文本", colspan: 2, content: new UITextView(this, {multi: true, width: 600})}
			],
			buttons: [{label: "确认并保存", type: "submit"}]
		}));

		var source = [];
		source.push("new UIFormView(context, {");
		source.push("  data: [{");
		source.push("    name: 'a',");
		source.push("    label: '输入框1',");
		source.push("    content: new UITextView(context)");
		source.push("  }, {");
		source.push("    name: 'b',");
		source.push("    label: '输入框2',");
		source.push("    content: new UITextView(context)");
		source.push("  }, {");
		source.push("    name: 'c',");
		source.push("    label: '单选',");
		source.push("    colspan: 2,");
		source.push("    content: new UIRadioGroup(context, {");
		source.push("      data: 'ABCDEFGHIJKLMNOPQRST'.split('')");
		source.push("    })");
		source.push("  }, {");
		source.push("    name: 'd',");
		source.push("    label: '多行文本',");
		source.push("    content: new UITextView(context, {multi: true, width: 600})");
		source.push("  }, {}],");
		source.push("  buttons: [{label: '确认并保存', type: 'submit'}]");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("表单验证");

		var demo = new UIGroup(this);
		demo.add(new UIFormView(this, {
			data: [
				{name: "a", label: "电子邮箱", content: new UITextView(this, {type: "email"})},
				{name: "b", label: "手机号码", content: new UITextView(this, {type: "int"}),
					validate: function (value, callback) {
						callback(/^1\d{10}$/.test(value) ? false : "手机号必须是1开始的11位数字");
					}},
				{name: "c", label: "下拉选择框", content: new UICombobox(this, {data: ["选项1", "选项2"]}), required: true},
				{name: "d", label: "单选", content: new UIRadioGroup(this, {data: "ABCDEF".split("")}), required: true},
				{name: "e", label: "日期", content: new UIDateInput(this), required: true},
				{name: "f", label: "日期范围", content: new UIDateRange(this), required: true},
				{name: "g", label: "原生输入框", content: "<input/>", required: true},
				{name: "h", label: "原生文本框", content: "<textarea></textarea>", required: true}
			],
			buttons: [{label: "确定", type: "submit"}]
		}));

		var source = [];
		source.push("new UIFormView(context, {");
		source.push("  data: [{");
		source.push("    name: 'a',");
		source.push("    label: '电子邮箱',");
		source.push("    content: new UITextView(context, {type: 'email'})");
		source.push("  }, {");
		source.push("    name: 'b',");
		source.push("    label: '手机号码',");
		source.push("    content: new UITextView(context),");
		source.push("    validate: function (value, callback) {");
		source.push("      callback(/^1\\d{10}$/.test(value) ? false : '手机号必须是1开始的11位数字');");
		source.push("    }");
		source.push("  }, {");
		source.push("    name: 'c',");
		source.push("    label: '下拉选择框',");
		source.push("    content: new UICombobox(context, {data: ['选项1', '选项2']}),");
		source.push("    required: true");
		source.push("  }, {");
		source.push("    name: 'd',");
		source.push("    label: '单选',");
		source.push("    content: new UIRadioGroup(context, {data: 'ABCDEF'.split('')}),");
		source.push("    required: true");
		source.push("  }, {");
		source.push("    name: 'e',");
		source.push("    label: '日期',");
		source.push("    content: new UIDateInput(context),");
		source.push("    required: true");
		source.push("  }, {");
		source.push("    name: 'f',");
		source.push("    label: '日期范围',");
		source.push("    content: new UIDateRange(context),");
		source.push("    required: true");
		source.push("  }, {");
		source.push("    name: 'g',");
		source.push("    label: '原生输入框',");
		source.push("    content: '<input/>',");
		source.push("    required: true");
		source.push("  }, {");
		source.push("    name: 'h',");
		source.push("    label: '原生文本框',");
		source.push("    content: '<textarea></textarea>',");
		source.push("    required: true");
		source.push("  }],");
		source.push("  buttons: [{label: '确定', type: 'submit'}]");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("动态添加");

		var demo = new UIGroup(this);
		var form = demo.add(new UIFormView(this));
		form.add("a", "文本").content("文本内容");
		form.add("b", "输入框").content(new UITextView(this)).required();
		form.add("c", "手机号码").content(new UITextView(this))
			.validate(function (value, callback) {
				callback(/^1\d{10}$/.test(value) ? false : "手机号必须是1开始的11位数字");
			});
		form.add("d", "日期").content(new UIDateInput(this)).required();
		form.setButtons([{label: "确定", type: "submit"}, {label: "取消", type: "cancel"}]);

		var source = [];
		source.push("var form = new UIFormView(context);");
		source.push("form.add('a', '文本')");
		source.push("  .content('文本内容');");
		source.push("form.add('b', '输入框')");
		source.push("  .content(new UITextView(context))");
		source.push("  .required();");
		source.push("form.add('c', '手机号码')");
		source.push("  .content(new UITextView(context))");
		source.push("  .validate(function (value, callback) {");
		source.push("    callback(/^1\\d{10}$/.test(value) ? false : '手机号必须是1开始的11位数字');");
		source.push("  });");
		source.push("form.add('d', '日期')");
		source.push("  .content(new UIDateInput(context))");
		source.push("  .required();");
		source.push("form.setButtons([{label: '确定', type: 'submit'}, {label: '取消', type: 'cancel'}]);");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("标签对齐");

		var demo = new UIGroup(this);
		demo.add(new UIFormView(this, {
			labelWidth: 150,
			labelAlign: "right",
			data: [
				{name: "a", label: "输入框", content: new UITextView(this), required: true},
				{name: "b", label: "下拉选择框", content: new UICombobox(this, {data: ["选项1", "选项2"]})}
			]
		}));

		var source = [];
		source.push("new UIFormView(context, {");
		source.push("  labelWidth: 150,");
		source.push("  labelAlign: 'right',");
		source.push("  data: [{");
		source.push("    name: 'a',");
		source.push("    label: '输入框',");
		source.push("    content: new UITextView(context),");
		source.push("    required: true");
		source.push("  }, {");
		source.push("    name: 'b',");
		source.push("    label: '下拉选择框',");
		source.push("    content: new UICombobox(context, {");
		source.push("      data: ['选项1', '选项2']");
		source.push("    })");
		source.push("  }]");
		source.push("});");

		this.showDemo(example, demo, source);
	}

});
