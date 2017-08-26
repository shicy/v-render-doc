/**
 * 对话框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var UIGroup = VRender.UIGroup;
var UIButton = VRender.UIButton;
var UIDialog = VRender.UIDialog;

var DialogModule = BaseModule.extend(module, {
	className: "comp-dialog",

	getCompName: function () {
		return "Dialog";
	},

	getSubName: function () {
		return "日期选择";
	},

	getDescription: function () {
		return "模态对话框，悬浮在页面顶层，引导用户做相应的操作。";
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIButton(this, {name: "example1-btn", label: "点击打开对话框"}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIDialog(context, {title: '标题', content: '内容'}).render(target)");
		source.push("// 浏览器端创建");
		source.push("var dialog = UIDialog.create({");
		source.push("    title: '对话框标题',");
		source.push("    content: '对话框内容<br/><a>支持HTML格式</a>'");
		source.push("});");
		source.push("dialog.on('btnclick', function (e, name) {");
		source.push("    alert('你选择了“' + (name == 'submit' ? '确定' : '取消') + '”');");
		source.push("    dialog.close();");
		source.push("});");

		this.showDemo(example, demo, source);
	}
});
