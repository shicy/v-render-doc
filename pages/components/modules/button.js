/**
 * 按钮
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-09
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIHGroup = VRender.UIHGroup;
var UIButton = VRender.UIButton;

var ButtonModule = BaseModule.extend(module, {
	className: "comp-button",

	getCompName: function () {
		return "Button";
	},

	getSubName: function () {
		return "按钮";
	},

	getDescription: function () {
		return "预定义按钮的样式及大小，扩展按钮功能，支持下拉选择。";
	},

	getProperties: function () {
		var properties = ButtonModule.__super__.getProperties.call(this);
		for (var i = properties.length - 1; i >= 0; i--) {
			if (properties.name == "style")
				properties.splice(i, 1);
		}

		properties.push({name: "label", datatype: "string", desc: "按钮显示文本内容"});

		properties.push({name: "type", datatype: "string", desc: "按钮类型，包括：" +
			"主按钮（<code>primary</code>、<code>ok</code>、<code>save</code>、<code>submit</code>、<code>major</code>），" +
			"成功按钮（<code>success</code>、<code>complete</code>、<code>finish</code>），警告按钮（<code>warn</code>、" +
			"<code>warning</code>），错误按钮（<code>danger</code>、<code>error</code>），信息按钮（<code>info</code>、" +
			"<code>highlight</code>），文本按钮（<code>text</code>），链接按钮（<code>link</code>），默认不设置。"});

		properties.push({name: "size", datatype: "string", desc: "按钮尺寸，可选值有：<code>tiny</code>、" +
			"<code>small</code>、<code>big</code>、<code>bigger</code>，默认不设置。"});

		properties.push({name: "icon", datatype: "url", desc: "按钮小图标"});

		properties.push({name: "style", datatype: "string", desc: "按钮样式，将作为HTML标签类(class)添加，内置样式有：" +
			"<code>ui-btn-default</code>, <code>ui-btn-primary</code>, <code>ui-btn-success</code>, " +
			"<code>ui-btn-warn</code>, <code>ui-btn-danger</code>, <code>ui-btn-info</code>, <code>ui-btn-text</code>, " +
			"<code>ui-btn-link</code>，建议使用<code>type</code>属性。"});

		return properties;
	},

	getMethods: function () {
		var methods = ButtonModule.__super__.getMethods.call(this);
		var description;

		description = "按钮显示文本内容，参见属性<code>label</code>。";
		methods.push({name: "getLabel", desc: "获取" + description, scope: 1});
		methods.push({name: "setLabel", desc: "设置" + description, params: "value:String", scope: 1});

		description = "按钮类型，参见属性<code>type</code>。";
		methods.push({name: "getType", desc: "获取" + description, scope: 1});
		methods.push({name: "setType", desc: "设置" + description, params: "value:Enum", scope: 1})

		description = "按钮图标，参见属性<code>icons</code>。"
		methods.push({name: "getIcon", desc: "获取" + description, scope: 1});
		methods.push({name: "setIcon", desc: "设置" + description, params: "value:String", scope: 1});

		description = "按钮大小，参见属性<code>size</code>。"
		methods.push({name: "getSize", desc: "获取" + description, scope: 1});
		methods.push({name: "setSize", desc: "设置" + description, params: "value:Enum", scope: 1});

		return methods;
	},

	isApiSupport: function () {
		return false;
	},

	isDataSupport: function () {
		return false;
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
		var example = this.addExample("基本用法");

		var demo = new UIHGroup(this, {gap: 10});
		demo.append(new UIButton(this, {label: "按钮"}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIButton(context, {label: '按钮'}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UIButton.create({target: [elem], label: '按钮'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var description = "按钮样式有：默认按钮、主按钮、成功按钮、警告按钮、错误按钮、信息按钮、文字按钮、链接按钮。<br/>";
		description += "通过设置属性<code>style</code>为：<code>ui-btn-default</code>, <code>ui-btn-primary</code>, ";
		description += "<code>ui-btn-success</code>, <code>ui-btn-warn</code>, <code>ui-btn-danger</code>, ";
		description += "<code>ui-btn-info</code>, <code>ui-btn-text</code>, <code>ui-btn-link</code>分别创建不同样式的按钮。"
		description += "不设置（或为其他值）则使用默认样式。";
		var example = this.addExample("按钮样式", description);

		var demo = new UIGroup(this, {gap: 10, orientation: (this.isApp ? null : UIGroup.HORIZONTIAL)});
		demo.append(new UIButton(this, {label: "Default"}));
		demo.append(new UIButton(this, {label: "Primary", style: "ui-btn-primary"}));
		demo.append(new UIButton(this, {label: "Success", style: "ui-btn-success"}));
		demo.append(new UIButton(this, {label: "Warn", style: "ui-btn-warn"}));
		demo.append(new UIButton(this, {label: "Danger", style: "ui-btn-danger"}));
		demo.append(new UIButton(this, {label: "Info", style: "ui-btn-info"}));
		demo.append(new UIButton(this, {label: "Text", style: "ui-btn-text"}));
		demo.append(new UIButton(this, {label: "Link", style: "ui-btn-link"}));

		var source = [];
		source.push("new UIButton(context, {label: 'Default'}); // 默认按钮");
		source.push("new UIButton(context, {label: 'Primary', style: 'ui-btn-primary'}); // 主按钮");
		source.push("new UIButton(context, {label: 'Success', style: 'ui-btn-success'}); // 成功按钮");
		source.push("new UIButton(context, {label: 'Warn', style: 'ui-btn-warn'}); // 警告按钮");
		source.push("new UIButton(context, {label: 'Danger', style: 'ui-btn-danger'}); // 错误按钮");
		source.push("new UIButton(context, {label: 'Info', style: 'ui-btn-info'}); // 信息按钮");
		source.push("new UIButton(context, {label: 'Text', style: 'ui-btn-text'}); // 文字按钮");
		source.push("new UIButton(context, {label: 'Link', style: 'ui-btn-link'}); // 链接按钮");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var description = "通过设置属性<code>type</code>为：<code>ok</code>, <code>save</code>, <code>submit</code>, ";
		description += "<code>major</code>, <code>primary</code>, <code>success</code>, <code>complete</code>, ";
		description += "<code>finish</code>, <code>warn</code>, <code>warning</code>, <code>danger</code>, ";
		description += "<code>error</code>, <code>info</code>, <code>highlight</code>, <code>text</code>, <code>link</code>";
		description += "创建相应样式的按钮。";
		var example = this.addExample("根据类型创建按钮", description);

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Ok", type: "ok"}))
			.append(new UIButton(this, {label: "Save", type: "save"}))
			.append(new UIButton(this, {label: "Submit", type: "submit"}))
			.append(new UIButton(this, {label: "Major", type: "major"}))
			.append(new UIButton(this, {label: "Primary", type: "primary"}));
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Success", type: "success"}))
			.append(new UIButton(this, {label: "Complete", type: "complete"}))
			.append(new UIButton(this, {label: "Finish", type: "finish"}));
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Warn", type: "warn"}))
			.append(new UIButton(this, {label: "Warning", type: "warning"}));
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Danger", type: "danger"}))
			.append(new UIButton(this, {label: "Error", type: "error"}));
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Info", type: "info"}))
			.append(new UIButton(this, {label: "Highlight", type: "highlight"}));
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Text", type: "text"}));
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Link", type: "link"}));

		var source = [];
		source.push("new UIButton(context, {label: 'Ok', type: 'ok'});");
		source.push("new UIButton(context, {label: 'Save', type: 'save'});");
		source.push("new UIButton(context, {label: 'Submit', type: 'submit'});");
		source.push("new UIButton(context, {label: 'Major', type: 'major'});");
		source.push("new UIButton(context, {label: 'Primary', type: 'primary'});");
		source.push("// -----------------------------------------------------");
		source.push("new UIButton(context, {label: 'Danger', type: 'danger'});");
		source.push("new UIButton(context, {label: 'Error', type: 'error'});");
		source.push("// -----------------------------------------------------");
		source.push("new UIButton(context, {label: 'Success', type: 'success'});");
		source.push("new UIButton(context, {label: 'Complete', type: 'complete'});");
		source.push("new UIButton(context, {label: 'Finish', type: 'finish'});");
		source.push("// -----------------------------------------------------");
		source.push("new UIButton(context, {label: 'Warn', type: 'warn'});");
		source.push("new UIButton(context, {label: 'Warning', type: 'warning'});");
		source.push("// -----------------------------------------------------");
		source.push("new UIButton(context, {label: 'Info', type: 'info'});");
		source.push("new UIButton(context, {label: 'Highlight', type: 'highlight'});");
		source.push("// -----------------------------------------------------");
		source.push("new UIButton(context, {label: 'Text', type: 'text'});");
		source.push("// -----------------------------------------------------");
		source.push("new UIButton(context, {label: 'Link', type: 'link'});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var description = "通过设置属性<code>size</code>为：<code>tiny</code>, <code>small</code>, <code>big</code>, <code>bigger</code>";
		description += "创建不同尺寸的按钮，不设置为默认尺寸。";
		var example = this.addExample("按钮尺寸", description);

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this)).append(new UIButton(this, {label: "tiny button", type: "primary", size: "tiny"}));
		demo.add(new UIGroup(this)).append(new UIButton(this, {label: "small button", type: "primary", size: "small"}));
		demo.add(new UIGroup(this)).append(new UIButton(this, {label: "nomarl button", type: "primary"}));
		demo.add(new UIGroup(this)).append(new UIButton(this, {label: "big button", type: "primary", size: "big"}));
		demo.add(new UIGroup(this)).append(new UIButton(this, {label: "bigger button", type: "primary", size: "bigger"}));

		var source = [];
		source.push("new UIButton(context, {label: 'tiny button', type: 'primary', size: 'tiny'});");
		source.push("new UIButton(context, {label: 'tiny button', type: 'primary', size: 'small'});");
		source.push("new UIButton(context, {label: 'tiny button', type: 'primary'});");
		source.push("new UIButton(context, {label: 'tiny button', type: 'primary', size: 'big'});");
		source.push("new UIButton(context, {label: 'tiny button', type: 'primary', size: 'bigger'});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var description = "通过设置属性<code>{disabled: true}</code>将按钮设置为不可用状态。";
		var example = this.addExample("被禁用的按钮", description);

		var demo = new UIGroup(this, {gap: 10, orientation: (this.isApp ? null : UIGroup.HORIZONTIAL)});
		demo.append(new UIButton(this, {label: "Default", disabled: true}));
		demo.append(new UIButton(this, {label: "Primary", type: "primary", disabled: true}));
		demo.append(new UIButton(this, {label: "Success", type: "success", disabled: true}));
		demo.append(new UIButton(this, {label: "Warn", type: "warn", disabled: true}));
		demo.append(new UIButton(this, {label: "Danger", type: "danger", disabled: true}));
		demo.append(new UIButton(this, {label: "Info", type: "info", disabled: true}));
		demo.append(new UIButton(this, {label: "Text", type: "text", disabled: true}));
		demo.append(new UIButton(this, {label: "Link", type: "link", disabled: true}));

		var source = [];
		source.push("new UIButton(context, {label: 'Default', disabled: true});");
		source.push("new UIButton(context, {label: 'Primary', type: 'primary', disabled: true});");
		source.push("new UIButton(context, {label: 'Success', type: 'success', disabled: true});");
		source.push("new UIButton(context, {label: 'Warn', type: 'warn', disabled: true});");
		source.push("new UIButton(context, {label: 'Danger', type: 'danger', disabled: true});");
		source.push("new UIButton(context, {label: 'Info', type: 'info', disabled: true});");
		source.push("new UIButton(context, {label: 'Text', type: 'text', disabled: true});");
		source.push("new UIButton(context, {label: 'Link', type: 'link', disabled: true});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("添加图标");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;
		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "默认", icon: true}))
			.append(new UIButton(this, {label: "主按钮", type: "primary", icon: true}))
			.append(new UIButton(this, {label: "成功", type: "success", icon: true}))
			.append(new UIButton(this, {label: "警告", type: "warn", icon: true}))
			.append(new UIButton(this, {label: "危险", type: "danger", icon: true}))
			.append(new UIButton(this, {label: "信息", type: "info", icon: true}))
			.append(new UIButton(this, {label: "文本按钮", type: "text", icon: true}))
			.append(new UIButton(this, {label: "超链接按钮", type: "link", icon: true}));
		demo.add(new UIGroup(this, {gap: 10, orientation: orientation}))
			.append(new UIButton(this, {label: "Windows", type: "primary", icon: "/image/icons/os_windows.png"}))
			.append(new UIButton(this, {label: "Mac", type: "primary", icon: "/image/icons/os_mac.png"}))
			.append(new UIButton(this, {label: "Linux", type: "primary", icon: "/image/icons/os_linux.png"}));

		var source = [];
		source.push("new UIButton(context, {label: '默认', icon: true});");
		source.push("new UIButton(context, {label: '主按钮', type: 'primary', icon: true});");
		source.push("new UIButton(context, {label: '成功', type: 'success', icon: true});");
		source.push("new UIButton(context, {label: '警告', type: 'warn', icon: true});");
		source.push("new UIButton(context, {label: '危险', type: 'danger', icon: true});");
		source.push("new UIButton(context, {label: '信息', type: 'info', icon: true});");
		source.push("new UIButton(context, {label: '文本按钮', type: 'text', icon: true});");
		source.push("new UIButton(context, {label: '超链接按钮', type: 'link', icon: true});");
		source.push("// -----------------------------------------------------");
		source.push("new UIButton(context, {label: 'Windows', type: 'primary', icon: '/image/icons/os_windows.png'});");
		source.push("new UIButton(context, {label: 'Mac', type: 'primary', icon: '/image/icons/os_mac.png'});");
		source.push("new UIButton(context, {label: 'Linux', type: 'primary', icon: '/image/icons/os_linux.png'});");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("等待状态按钮");

		var demo = new UIGroup(this, {gap: 10});
		demo.add(new UIHGroup(this, {gap: 10}))
			.append(new UIButton(this, {label: "默认", waitting: true}))
			.append(new UIButton(this, {label: "主按钮", type: "primary", waitting: true}))
			.append(new UIButton(this, {label: "成功", type: "success", icon: true, waitting: true}))
			.append(new UIButton(this, {label: "警告", type: "warn", icon: true, waitting: true}))
			.append(new UIButton(this, {label: "危险", type: "danger", icon: true, waitting: true}))
			.append(new UIButton(this, {label: "信息", type: "info", icon: true, waitting: true}))
			.append(new UIButton(this, {label: "文本按钮", type: "text", icon: true, waitting: true}))
			.append(new UIButton(this, {label: "超链接按钮", type: "link", icon: true, waitting: true}));
		demo.add(new UIHGroup(this, {gap: 10}))
			.append(new UIButton(this, {label: "点击进入等待状态", type: "primary", wait: true}))
			.append(new UIButton(this, {label: "点击等待5秒后恢复", type: "primary", wait: 5000}));

		var source = [];
		source.push("new UIButton(context, {label: '默认', waitting: true})");
		source.push("new UIButton(context, {label: '主按钮', type: 'primary', waitting: true})");
		source.push("new UIButton(context, {label: '成功', type: 'source', icon: true, waitting: true})");
		source.push("new UIButton(context, {label: '警告', type: 'warn', icon: true, waitting: true})");
		source.push("new UIButton(context, {label: '危险', type: 'danger', icon: true, waitting: true})");
		source.push("new UIButton(context, {label: '信息', type: 'info', icon: true, waitting: true})");
		source.push("new UIButton(context, {label: '文本按钮', type: 'text', icon: true, waitting: true})");
		source.push("new UIButton(context, {label: '超链接按钮', type: 'link', icon: true, waitting: true})");
		source.push("new UIButton(context, {label: '点击进入等待状态', type: 'primary', wait: true})");
		source.push("new UIButton(context, {label: '点击等待5秒后恢复', type: 'primary', wait: 5000})");

		this.showDemo(example, demo, source);
	}

});
