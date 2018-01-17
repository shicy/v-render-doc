/**
 * 对话框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIHGroup = VRender.UIHGroup;
var UIButton = VRender.UIButton;
var UITextView = VRender.UITextView;
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
		this.showExample2();
		this.showExample3();
		this.showExample4();
		this.showExample5();
		// this.showExample6();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIHGroup(this, {gap: 10});
		demo.append(new UIButton(this, {name: "example1-btn", label: "点击打开对话框"}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIDialog(context, {title: '标题', content: '内容'}).render(target)");
		source.push("// 浏览器端创建");
		source.push("var dialog = UIDialog.create({");
		source.push("    title: '对话框标题',");
		source.push("    content: '对话框内容<br/><a>支持HTML格式</a>'");
		source.push("});");
		// source.push("dialog.on('btnclk', function (e, name) {");
		// source.push("    alert('你选择了“' + (name == 'submit' ? '确定' : '取消') + '”');");
		// source.push("    dialog.close();");
		// source.push("});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("对话框大小");

		var demo = new UIHGroup(this, {gap: 10});
		demo.append(new UIButton(this, {name: "example2-small", label: "小对话框"}));
		demo.append(new UIButton(this, {name: "example2-normal", label: "中等对话框"}));
		demo.append(new UIButton(this, {name: "example2-big", label: "大对话框"}));
		demo.append(new UIButton(this, {name: "example2-auto", label: "自适应大小"}));

		var source = [];
		source.push("new UIDialog(context, {size: 'small'});");
		source.push("new UIDialog(context, {size: 'normal'});");
		source.push("new UIDialog(context, {size: 'big'});");
		source.push("var contentView = \"<div style='width: 450px; height: 320px;'>宽450, 高320</div>\";");
		source.push("new UIDialog(context, {size: 'auto', content: contentView});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("自定义按钮");

		var demo = new UIHGroup(this, {gap: 10});
		demo.append(new UIButton(this, {name: "example3-btn", label: "点击打开对话框"}));

		var source = [];
		source.push("var buttons = [];");
		source.push("buttons.push({name: 'cancel', label: '取消', type: 'cancel'});");
		source.push("buttons.push({name: 'reset', label: '重置', type: 'save'});");
		source.push("buttons.push({name: 'ok', label: '保存', type: 'primary', waitting: true});");
		source.push("buttons.push({name: 'wait', label: '等待5秒关闭', waitting: 5000});");

		source.push("var contentView = new UIGroup(context);")
		source.push("var dialog = new UIDialog(context, {buttons: buttons, content: contentView});");

		source.push("dialog.on('btnOk', function () {");
		source.push("    contentView.append('<div>点击了“保存”按钮..</div>');");
		source.push("    setTimeout(function () {");
		source.push("        dialog.setButtonWaitting('ok', false);");
		source.push("    }, 2000);");
		source.push("});");

		source.push("dialog.on('btnCancel', function () {");
		source.push("    contentView.append('<div>点击了“取消”按钮..</div>');");
		source.push("});");

		source.push("dialog.on('btnReset', function () {");
		source.push("    contentView.append('<div>点击了“重置”按钮..</div>');");
		source.push("});");

		source.push("dialog.on('btnWait', function () {");
		source.push("    contentView.append('<div>5秒后关闭对话框</div>');");
		source.push("    var seconds = 5;");
		source.push("    var timerId = setInterval(function () {");
		source.push("        if (--seconds <= 0) {");
		source.push("            clearInterval(timerId);");
		source.push("            dialog.close();");
		source.push("        }");
		source.push("        contentView.append('<div>' + seconds + '秒后关闭对话框</div>');");
		source.push("    }, 1000};");
		source.push("});");

		source.push("dialog.on('btnclk', function (e, name) {});");
		source.push("    contentView.append('<div>统一事件“btnclk”，按钮名称：' + name + '</div>');");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("自定义内边距");

		var demo = new UIHGroup(this, {gap: 10});
		demo.append(new UIButton(this, {name: "example4-btn", label: "无内边距对话框"}));

		var source = [];
		source.push("new UIDialog(context, {padding: 0});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("设置组件内容");

		var demo = new UIGroup(this);
		demo.add(new UIHGroup(this, {gap: 10}))
			.append(new UIButton(this, {name: "example5-btn", label: "点击打开对话框"}));

		var contentView = new UIGroup(this);
		contentView.append("<div>添加一个组件作为对话框内容</div>");
		contentView.add(new UIGroup(this)).append(new UITextView(this, {prompt: "输入框"}));
		contentView.add(new UIGroup(this)).append(new UIButton(this, {label: "按钮"}));
		demo.add(new UIGroup(this))
			.append(new UIDialog(this, {content: contentView, showbtn: "[name='example5-btn']"}));

		var source = [];
		source.push("var contentView = new UIGroup(context);");
		source.push("contentView.append('<div>添加一个组件作为对话框内容</div>')");
		source.push("contentView.add(new UIGroup(context)).append(new UITextView(context, {prompt: '输入框'}));");
		source.push("contentView.add(new UIGroup(context)).append(new UIButton(context, {label: '按钮'}));");
		source.push("new UIDialog(context, {content: contentView});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("异步加载内容");

		var demo = new UIGroup(this);
		demo.add(new UIHGroup(this, {gap: 10}))
			.append(new UIButton(this, {name: "example6-btn", label: "点击打开对话框"}));

		demo.add(new UIGroup(this))
			.append(new UIDialog(this, {module: "/test/module", showbtn: "[name='example6-btn']"}));

		var source = [];
		source.push("new UIDialog(context, {module: '/test/module'});");

		this.showDemo(example, demo, source);
	}
});
