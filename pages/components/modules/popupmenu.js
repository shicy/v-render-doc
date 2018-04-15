/**
 * 弹出菜单
 * @author shicy <shicy85@163.com>
 * Created on 2018-04-12
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIHGroup = VRender.UIHGroup;
var UIButton = VRender.UIButton;
var UIPopupMenu = VRender.UIPopupMenu;

var PopupMenuModule = BaseModule.extend(module, {
	className: "comp-popupmenu",

	getCompName: function () {
		return "PopupMenu";
	},

	getSubName: function () {
		return "弹出菜单";
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
		this.showExample7();
		this.showExample8();
		this.showExample9();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var menus = [
			{name: "menu1", label: "菜单1"},
			{name: "menu2", label: "菜单2"},
			{name: "menu3", label: "菜单3"},
			{name: "menu4", label: "菜单4"},
			{name: "menu5", label: "菜单5", children: [
				{name: "menu51", label: "菜单5-1"},
				{name: "menu52", label: "菜单5-2", children: [
					{name: "menu521", label: "菜单5-2-1", children: [
						{name: "menu5211", label: "菜单5-2-1-1"}
					]},
					{name: "menu522", label: "菜单5-2-2"},
					{name: "menu523", label: "菜单5-2-3"},
					{name: "menu524", label: "菜单5-2-4"},
					{name: "menu525", label: "菜单5-2-5"},
					{name: "menu526", label: "菜单5-2-6"},
					{name: "menu527", label: "菜单5-2-7"},
					{name: "menu528", label: "菜单5-2-8"},
				]},
				{name: "menu53", label: "菜单5-3", children: [
					{name: "menu531", label: "菜单5-3-1"},
					{name: "menu532", label: "菜单5-3-2"}
				]},
				{name: "menu54", label: "菜单5-4"}
			]}
		];

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));
		demo.add(new UIPopupMenu(this, {data: menus, actionTarget: button}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击按钮弹出菜单'});");
		source.push("new UIPopupMenu(context, {");
		source.push("  actionTarget: button,");
		source.push("  data: [");
		source.push("    {name: 'menu1', label: '菜单1'},");
		source.push("    {name: 'menu2', label: '菜单2'},");
		source.push("    {name: 'menu3', label: '菜单3'},");
		source.push("    {name: 'menu4', label: '菜单4'},");
		source.push("    {name: 'menu5', label: '菜单5', children: [");
		source.push("      {name: 'menu51', label: '菜单5-1'},");
		source.push("      {name: 'menu52', label: '菜单5-2', children: [");
		source.push("        {name: 'menu521', label: '菜单5-2-1', children: [");
		source.push("          {name: 'menu5211', label: '菜单5-2-1-1'}");
		source.push("        ]},");
		source.push("        {name: 'menu522', label: '菜单5-2-2'},");
		source.push("        {name: 'menu523', label: '菜单5-2-3'},");
		source.push("        {name: 'menu524', label: '菜单5-2-4'},");
		source.push("        {name: 'menu525', label: '菜单5-2-5'},");
		source.push("        {name: 'menu526', label: '菜单5-2-6'},");
		source.push("        {name: 'menu527', label: '菜单5-2-7'},");
		source.push("        {name: 'menu528', label: '菜单5-2-8'}");
		source.push("      ]},");
		source.push("      {name: 'menu53', label: '菜单5-3', children: [");
		source.push("        {name: 'menu531', label: '菜单5-3-1'},");
		source.push("        {name: 'menu532', label: '菜单5-3-2'}");
		source.push("      ]},");
		source.push("      {name: 'menu54', label: '菜单5-4'}");
		source.push("    ]}");
		source.push("  ]");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample2: function () {
		var example = this.addExample("禁用菜单");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击按钮弹出菜单'}).render([target]);");
		source.push("new UIPopupMenu(context, {");
		source.push("  data: [");
		source.push("    {name: 'menu1', label: '菜单1'},");
		source.push("    {name: 'menu2', label: '菜单2', disabled: true},");
		source.push("    {name: 'menu3', label: '菜单3'}");
		source.push("  ]");
		source.push("}).render(button);");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("显示图标");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击按钮弹出菜单'}).render([target]);");
		source.push("new UIPopupMenu(context, {");
		source.push("  data: [");
		source.push("    {name: 'menu1', label: '菜单1', icon: '/image/icons/b02.png'},");
		source.push("    {name: 'menu2', label: '菜单2', icon: '/image/icons/b03.png'},");
		source.push("    {name: 'menu3', label: '菜单3', icon: '/image/icons/b04.png', children: [");
		source.push("      {name: 'menu31', label: '菜单3-1', icon: '/image/icons/b05.png'},");
		source.push("      {name: 'menu32', label: '菜单3-2'},");
		source.push("      {name: 'menu33', label: '菜单3-3'}");
		source.push("    ]}");
		source.push("  ]");
		source.push("}).render(button);");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("分组显示");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击按钮弹出菜单'}).render([target]);");
		source.push("new UIPopupMenu(context, {");
		source.push("  data: [");
		source.push("    [");
		source.push("      {name: 'menu1', label: '菜单1', icon: '/image/icons/b02.png'},");
		source.push("      {name: 'menu2', label: '菜单2', icon: '/image/icons/b03.png', disabled: true},");
		source.push("      {name: 'menu3', label: '菜单3'}");
		source.push("    ],");
		source.push("    [");
		source.push("      {name: 'menu4', label: '菜单4', icon: '/image/icons/b04.png'},");
		source.push("      {name: 'menu5', label: '菜单5', children: [");
		source.push("        [");
		source.push("          {name: 'menu51', label: '菜单5-1'}");
		source.push("        ],");
		source.push("        [");
		source.push("          {name: 'menu52', label: '菜单5-2'},");
		source.push("          {name: 'menu53', label: '菜单5-3'},");
		source.push("          {name: 'menu54', label: '菜单5-4'}");
		source.push("        ],");
		source.push("        [");
		source.push("          {name: 'menu55', label: '菜单5-5'},");
		source.push("          {name: 'menu56', label: '菜单5-6'}");
		source.push("        ]");
		source.push("      ]},");
		source.push("    ],");
		source.push("    [");
		source.push("      {name: 'menu6', label: '菜单6', icon: '/image/icons/b05.png'},");
		source.push("      {name: 'menu7', label: '菜单7'},");
		source.push("      {name: 'menu8', label: '菜单8'},");
		source.push("      {name: 'menu9', label: '菜单9'}");
		source.push("    ]");
		source.push("  ]");
		source.push("}).render(button);");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("菜单状态切换");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击按钮弹出菜单'}).render([target]);");
		source.push("new UIPopupMenu(context, {");
		source.push("  data: [");
		source.push("    [");
		source.push("      {name: 'menu1', label: '菜单1', toggle: true}");
		source.push("    ],");
		source.push("    [");
		source.push("      {name: 'menu2', label: '菜单2', toggle: 'group1'},");
		source.push("      {name: 'menu3', label: '菜单3', toggle: 'group1'},");
		source.push("      {name: 'menu4', label: '菜单4', toggle: 'group1'}");
		source.push("    ],");
		source.push("    [");
		source.push("      {name: 'menu5', label: '菜单5', children: [");
		source.push("        [");
		source.push("          {name: 'menu51', label: '菜单5-1', toggle: 'group2'},");
		source.push("          {name: 'menu52', label: '菜单5-2', toggle: 'group2'},");
		source.push("          {name: 'menu53', label: '菜单5-3', toggle: 'group2'}");
		source.push("        ],");
		source.push("        [");
		source.push("          {name: 'menu54', label: '菜单5-4', toggle: 'group3'},");
		source.push("          {name: 'menu55', label: '菜单5-5', toggle: 'group3'},");
		source.push("        ]");
		source.push("      ]},");
		source.push("      {name: 'menu6', label: '菜单6', toggle: true},");
		source.push("      {name: 'menu7', label: '菜单7', toggle: true},");
		source.push("      {name: 'menu8', label: '菜单8'}");
		source.push("    ]");
		source.push("  ]");
		source.push("}).render(button);");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("菜单位置");

		var demo = new UIHGroup(this, {gap: 10});
		var button1 = demo.add(new UIButton(this, {label: "下边显示（默认）"}));
		var button2 = demo.add(new UIButton(this, {label: "右边显示"}));
		var button3 = demo.add(new UIButton(this, {label: "上边显示"}));
		var button4 = demo.add(new UIButton(this, {label: "左边显示"}));

		var source = [];
		source.push("var menus = [");
		source.push("  {name: 'menu1', label: '菜单1'},");
		source.push("  {name: 'menu2', label: '菜单2'},");
		source.push("  {name: 'menu3', label: '菜单3'},");
		source.push("  {name: 'menu4', label: '菜单4'}");
		source.push("];");
		source.push("");
		source.push("var bottombtn = new UIButton(context, {label: '下边显示（默认）'}).render([target]);");
		source.push("new UIPopupMenu(context, {data: menus, positoin: 'bottom'}).render(bottombtn);");
		source.push("");
		source.push("var rightbtn = new UIButton(context, {label: '右边显示'}).render([target]);");
		source.push("new UIPopupMenu(context, {data: menus, positoin: 'right'}).render(rightbtn);");
		source.push("");
		source.push("var topbtn = new UIButton(context, {label: '上边显示'}).render([target]);");
		source.push("new UIPopupMenu(context, {data: menus, positoin: 'top'}).render(topbtn);");
		source.push("");
		source.push("var leftbtn = new UIButton(context, {label: '左边显示'}).render([target]);");
		source.push("new UIPopupMenu(context, {data: menus, positoin: 'left'}).render(leftbtn);");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("相对位移");

		var demo = new UIHGroup(this, {gap: 10});
		var button1 = demo.add(new UIButton(this, {label: "向左位移20像素"}));
		var button2 = demo.add(new UIButton(this, {label: "向下位移20像素"}));

		var source = [];
		source.push("var menus = [");
		source.push("  {name: 'menu1', label: '菜单1'},");
		source.push("  {name: 'menu2', label: '菜单2'},");
		source.push("  {name: 'menu3', label: '菜单3'},");
		source.push("  {name: 'menu4', label: '菜单4'}");
		source.push("];");
		source.push("");
		source.push("var button1 = new UIButton(context, {label: '向左位移20像素'}).render([target]);");
		source.push("new UIPopupMenu(context, {data: menus, offsetLeft: 20}).render(button1);");
		source.push("");
		source.push("var button2 = new UIButton(context, {label: '向下位移20像素'}).render([target]);");
		source.push("new UIPopupMenu(context, {data: menus, offsetTop: 20}).render(button2);");

		this.showDemo(example, demo, source);
	},

	showExample8: function () {
		var example = this.addExample("动态菜单");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击按钮弹出菜单'}).render([target]);");
		source.push("new UIPopupMenu(context, {");
		source.push("  data: [");
		source.push("    {name: 'menu1', label: '菜单1'},");
		source.push("    {name: 'menu2', label: '菜单2'},");
		source.push("    {name: 'menu3', label: '菜单3', children: []},");
		source.push("    {name: 'menu4', label: '菜单4'},");
		source.push("    {name: 'menu5', label: '菜单5', children: []},");
		source.push("  ]");
		source.push("}).render(button);");

		this.showDemo(example, demo, source);
	},

	showExample9: function () {
		var example = this.addExample("动态加载");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击按钮弹出菜单"}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击按钮弹出菜单'}).render([target]);");
		source.push("new UIPopupMenu(context, {apiName: 'data.component.tree'}).render(button);");

		this.showDemo(example, demo, source);
	}
});
