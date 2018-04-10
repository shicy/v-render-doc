/**
 * 分页
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIPanel = VRender.UIPanel;

var PanelModule = BaseModule.extend(module, {
	className: "comp-panel",

	getCompName: function () {
		return "Panel";
	},

	getSubName: function () {
		return "面板";
	},

	getDescription: function () {
		return "带有标题栏的容器组件，面板标题栏还可以包含标签页和按钮。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIPanel(this, {title: "标题", content: "内容<br/><a>支持富文本</a>"});

		var source = [];
		source.push("new UIPanel(context, {");
		source.push("    title: '标题',");
		source.push("    context: '内容<br/>a>支持富文本</a>'");
		source.push("});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("添加按钮");

		var buttons = [];
		buttons.push({name: "btn1", label: "默认按钮"});
		buttons.push({name: "btn2", label: "下拉按钮", toggle: true,
			items: [{name: "btn21", label: "下拉按钮1"}, {name: "btn22", label: "下拉按钮2"}, 
				{name: "btn23", label: "下拉按钮3"}, {name: "btn24", label: "下拉按钮4"}]});
		buttons.push({name: "btn3", label: "带图标按钮", icon: "/image/icons/b04.png"})
		buttons.push({name: "btn4", icon: "/image/icons/b05.png", tooltip: "图标按钮", toggle: true});
		buttons.push({name: "btn5", label: false, icon: "/image/icons/d01.png", 
			items: [{name: "btn51", label: "选项1", icon: "/image/icons/b02.png"},
				{name: "btn52", label: "选项2", icon: "/image/icons/b03.png"},
				{name: "btn53", label: "选项3", icon: "/image/icons/b04.png"}]});

		var demo = new UIPanel(this, {title: "自定义按钮", buttons: buttons});

		var source = [];
		source.push("new UIPanel(content, {");
		source.push("    title: '自定义按钮',");
		source.push("    buttons: [{");
		source.push("        name: 'btn1', label: '默认按钮'");
		source.push("    }, {");
		source.push("        name: 'btn2', label: '下拉按钮', toggle: true,");
		source.push("        items: [{");
		source.push("            name: 'btn21', label: '下拉按钮1'");
		source.push("        }, {");
		source.push("            name: 'btn22', label: '下拉按钮2'");
		source.push("        }, {");
		source.push("            name: 'btn23', label: '下拉按钮3'");
		source.push("        }, {");
		source.push("            name: 'btn24', label: '下拉按钮4'");
		source.push("        }]");
		source.push("    }, {");
		source.push("        name: 'btn3', label: '带图标按钮', icon: '/image/icons/b04.png'");
		source.push("    }, {");
		source.push("        name: 'btn4', icon: '/image/icons/b05.png', tooltip: '图标按钮', toggle: true");
		source.push("    }, {");
		source.push("        name: 'btn5', label: false, icon: '/image/icons/d01.png',");
		source.push("        items: [{");
		source.push("            name: 'btn51', label: '选项1', icon: '/image/icons/b02.png'");
		source.push("        }, {");
		source.push("            name: 'btn52', label: '选项2', icon: '/image/icons/b03.png'");
		source.push("        }, {");
		source.push("            name: 'btn53', label: '选项3', icon: '/image/icons/b04.png'");
		source.push("        }]");
		source.push("    }]");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("多视窗显示");

		var viewports = [];
		viewports.push({name: "view1", label: "视图 1"});
		viewports.push({name: "view2", label: "视图 2", content: "视图2内容"});
		viewports.push({name: "view3", label: "视图 3", content: "视图3内容"});
		viewports.push({name: "view4", label: "视图 4"});

		var demo = new UIPanel(this, {title: "标题", viewports: viewports, viewIndex: 0, content: "默认视图"});

		var source = [];
		source.push("new UIPanel(context, {");
		source.push("    title: '标题',");
		source.push("    content: '默认视图',");
		source.push("    viewports: [{");
		source.push("        name: 'view1', label: '视图 1'");
		source.push("    }, {");
		source.push("        name: 'view2', label: '视图 2', content: '视图2内容'");
		source.push("    }, {");
		source.push("        name: 'view3', label: '视图 3', content: '视图3内容'");
		source.push("    }, {");
		source.push("        name: 'view4', label: '视图 4'");
		source.push("    }],");
		source.push("    viewIndex: 0");
		source.push("});");

		this.showDemo(example, demo, source);
	}
});
