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
		var example = this.addExample("基本使用");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		var group = demo.add(new UIGroup(this));
		var button = group.add(new UIButton(this, {name: "example1-btn", label: "点击打开对话框"}));
		group.append(new UIDialog(this, {title: "标题", content: "内容", openbtn: button}));

		var source = [];
		source.push("var button = new UIButton(context, {name: 'example1-btn', label: '点击打开对话框'});");
		source.push("new UIDialog(context, {title: '标题', content: '内容', openbtn: button});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		if (this.isApp)
			return ;

		var example = this.addExample("大小");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.add(new UIGroup(this))
			.append(new UIButton(this, {name: 'example2-small', label: "小对话框"}))
			.append(new UIDialog(this, {size: "small", openbtn: "[name=example2-small]"}));
		demo.add(new UIGroup(this))
			.append(new UIButton(this, {name: 'example2-normal', label: "默认对话框"}))
			.append(new UIDialog(this, {size: "normal", openbtn: "[name=example2-normal]"}));
		demo.add(new UIGroup(this))
			.append(new UIButton(this, {name: 'example2-big', label: "大对话框"}))
			.append(new UIDialog(this, {size: "big", openbtn: "[name=example2-big]"}));
		demo.add(new UIGroup(this))
			.append(new UIButton(this, {name: 'example2-auto', label: "自适应大小"}))
			.append(new UIDialog(this, {size: "auto", openbtn: "[name=example2-auto]", 
				content: "<div style='width:530px;height:360px;background:#d1ebf3;'>内容宽530高360</div>"}));

		var source = [];
		source.push("// 小对话框");
		source.push("new UIButton(context, {name: 'example2-small', label: '小对话框'});");
		source.push("new UIDialog(context, {size: 'small', openbtn: '[name=example2-small]'});");
		source.push("// 默认对话框");
		source.push("new UIButton(context, {name: 'example2-normal', label: '默认对话框'});");
		source.push("new UIDialog(context, {size: 'normal', openbtn: '[name=example2-normal]'});");
		source.push("// 大对话框");
		source.push("new UIButton(context, {name: 'example2-big', label: '大对话框'});");
		source.push("new UIDialog(context, {size: 'big', openbtn: '[name=example2-big]'});")
		source.push("// 自适应大小");
		source.push("new UIButton(context, {name: 'example2-auto', label: '自适应大小'});");
		source.push("new UIDialog(context, {");
		source.push("  size: 'auto',");
		source.push("  openbtn: '[name=example2-auto]',");
		source.push("  content: '<div style=\"width:530px;height:360px;background:#d1ebf3;\">内容宽530高360</div>'");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("自定义按钮");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.add(new UIGroup(this)).append(new UIButton(this, {name: "example3-btn", label: "点击打开对话框"}));

		var source = [];
		source.push("var buttons = [];");
		source.push("buttons.push({name: 'cancel', label: '取消', type: 'cancel'});");
		source.push("buttons.push({name: 'reset', label: '重置', type: 'info'});");
		source.push("buttons.push({name: 'ok', label: '保存', type: 'primary', waitclose: true});");
		source.push("");
		source.push("var contentView = new UIGroup(context);");
		source.push("var closeBtn = contentView.add(new UIButton(context, {");
		source.push("  name: 'close',");
		source.push("  label: '点击5秒后关闭对话框',");
		source.push("  type: 'danger'");
		source.push("}));");
		source.push("var dialog = new UIDialog(context, {buttons: buttons, content: contentView});");
		source.push("");
		source.push("dialog.on('btn_ok', function () {");
		source.push("  contentView.append('<div>点击了“保存”按钮..</div>');");
		source.push("  setTimeout(function () {");
		source.push("    dialog.waitting(false, 'ok');");
		source.push("  }, 2000);");
		source.push("});");

		source.push("dialog.on('btn_cancel', function () {");
		source.push("  contentView.append('<div>点击了“取消”按钮..（因为有事件绑定所以不自动关闭了）</div>');");
		source.push("});");

		source.push("dialog.on('btn_reset', function () {");
		source.push("  contentView.append('<div>点击了“重置”按钮..</div>');");
		source.push("});");

		source.push("closeBtn.on('tap', function () {");
		source.push("  contentView.append('<div>5秒后关闭对话框</div>');");
		source.push("  var seconds = 5;");
		source.push("  var timerId = setInterval(function () {");
		source.push("    if (--seconds <= 0) {");
		source.push("      clearInterval(timerId);");
		source.push("      dialog.close()");
		source.push("    }");
		source.push("    closeBtn.val(seconds + '秒后关闭对话框');");
		source.push("  }, 1000};");
		source.push("});");

		source.push("dialog.on('btnclk', function (e, name) {});");
		source.push("  contentView.append('<div>统一事件“btnclk”，按钮名称：' + name + '</div>');");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("内边距");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.add(new UIGroup(this))
			.append(new UIButton(this, {name: 'example4-btn', label: '无内边距对话框'}))
			.append(new UIDialog(this, {fill: true, openbtn: "[name=example4-btn]",
				content: "<div style='background:bisque'>内容填充，无边距</div>"}));

		var source = [];
		source.push("new UIButton(context, {name: 'example4-btn', label: '无内边距对话框'});");
		source.push("new UIDialog(context, {");
		source.push("  fill: true,");
		source.push("  openbtn: '[name=example4-btn]',");
		source.push("  content: '<div style=\"background:bisque\">内容填充，无边距</div>'");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("内容");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this);
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {name: "example5-btn", label: "点击打开对话框"}));

		var contentView = new UIGroup(this, {gap: 10});
		contentView.append("<div>添加一个组件作为对话框内容</div>");
		contentView.add(new UIGroup(this)).append(new UITextView(this, {prompt: "输入框"}));
		contentView.add(new UIGroup(this)).append(new UIButton(this, {label: "按钮"}));
		demo.add(new UIGroup(this))
			.append(new UIDialog(this, {content: contentView, openbtn: "[name=example5-btn]"}));

		var source = [];
		source.push("new UIButton(context, {name: 'example5-btn', label: '点击打开对话框'});");
		source.push("");
		source.push("var contentView = new UIGroup(context);");
		source.push("contentView.append('<div>添加一个组件作为对话框内容</div>')");
		source.push("contentView.add(new UIGroup(context)).append(new UITextView(context, {prompt: '输入框'}));");
		source.push("contentView.add(new UIGroup(context)).append(new UIButton(context, {label: '按钮'}));");
		source.push("new UIDialog(context, {content: contentView, openbtn: '[name=example5-btn]'});");

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
