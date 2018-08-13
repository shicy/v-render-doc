/**
 * 树形组件
 * @author shicy <shicy85@163.com>
 * Created on 2018-03-29
 */

var VRender = require(__vrender);
var ListModule = require("./_list");


var Utils = VRender.Utils;
var UIGroup = VRender.UIGroup;
var UITreeView = VRender.UITreeView;

var exampleData = [{
	code: "110000", value: "北京市", icon: "/image/icons/c02.png",
	children: [{
		code: "110100", value: "市辖区", 
		children: [{
			code: "110101", value: "东城区", leaf: true
		}, {
			code: "110102", value: "西城区", leaf: true
		}, {
			code: "110105", value: "朝阳区", leaf: true
		}, {
			code: "110106", value: "丰台区", leaf: true
		}, {
			code: "110107", value: "石景山区", leaf: true
		}, {
			code: "110108", value: "海淀区", leaf: true
		}, {
			code: "110109", value: "门头沟区", leaf: true
		}, {
			code: "110111", value: "房山区", leaf: true
		}, {
			code: "110112", value: "通州区", leaf: true
		}, {
			code: "110113", value: "顺义区", leaf: true
		}, {
			code: "110114", value: "昌平区", leaf: true
		}, {
			code: "110115", value: "大兴区", leaf: true
		}, {
			code: "110116", value: "怀柔区", leaf: true
		}, {
			code: "110117", value: "平谷区", leaf: true
		}, {
			code: "110118", value: "密云区", leaf: true
		}, {
			code: "110119", value: "延庆区", leaf: true
		}]
	}]
}, {
	code: "120000", value: "天津市", icon: "/image/icons/c03.png",
	children: [{
		code: "120100", value: "市辖区",
		children: [{
			code: "120101", value: "和平区", leaf: true
		}, {
			code: "120102", value: "河东区", leaf: true
		}, {
			code: "120103", value: "河西区", leaf: true
		}, {
			code: "120104", value: "南开区", leaf: true
		}, {
			code: "120105", value: "河北区", leaf: true
		}, {
			code: "120106", value: "红桥区", leaf: true
		}, {
			code: "120110", value: "东丽区", leaf: true
		}, {
			code: "120111", value: "西青区", leaf: true
		}]
	}]
}, {
	code: "130000", value: "河北省", icon: "/image/icons/c04.png",
	children: [{
		code: "130100", value: "石家庄市", icon: "/image/icons/c10.png",
		children: [{
			code: "130101", value: "市辖区", leaf: true
		}, {
			code: "130102", value: "长安区", leaf: true
		}, {
			code: "130102", value: "桥西区", leaf: true
		}]
	}, {
		code: "130200", value: "唐山市",
		children: [{
			code: "130201", value: "市辖区", leaf: true
		}, {
			code: "130202", value: "路南区", leaf: true
		}, {
			code: "130203", value: "路北区", leaf: true
		}]
	}, {
		code: "130400", value: "秦皇岛市", leaf: true
	}, {
		code: "130500", value: "邯郸市", leaf: true
	}, {
		code: "130500", value: "邢台市", leaf: true
	}, {
		code: "130600", value: "保定市", leaf: true
	}]
}, {
	code: "140000", value: "山西省", icon: "/image/icons/c05.png", leaf: true
}, {
	code: "150000", value: "内蒙古自治区", icon: "/image/icons/c06.png", leaf: true
}, {
	code: "210000", value: "辽宁省", icon: "/image/icons/c07.png", leaf: true
}, {
	code: "220000", value: "吉林省", icon: "/image/icons/c08.png", leaf: true
}, {
	code: "230000", value: "黑龙江省", icon: "/image/icons/c09.png", leaf: true
}];

var TreeModule = ListModule.extend(module, {
	className: "comp-tree",

	getCompName: function () {
		return "TreeView";
	},

	getSubName: function () {
		return "树形视图";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample2_1();
		this.showExample3();
		this.showExample3_1();
		this.showExample4();
		this.showExample4_1()
		this.showExample5();
		this.showExample5_1();
		this.showExample6();
		this.showExampleData();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData}));

		var source = [];
		source.push("new UITreeView(context, {data: dataSource});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("选择框（单选）");

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, chkbox: true, selectedId: "110100"}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  chkbox: true,");
		source.push("  selectedId: '110100'");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample2_1: function () {
		var example = this.addExample("选择框（多选）");

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, chkbox: true, multi: true, selectedIndex: "1,2"}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  chkbox: true,");
		source.push("  multi: true,");
		source.push("  selectedIndex: '1,2'");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("自定义节点");

		var myLabelFunction = function (data) {
			return [data.code, data.value].join("_");
		};

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, labelFunction: myLabelFunction}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  labelFunction: function (data) {");
		source.push("    return data.code + '_' + data.value;");
		source.push("  }");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample3_1: function () {
		var example = this.addExample("节点渲染器");

		var myItemRenderer = function ($, item, data) {
			var view = $("<div></div>");
			$("<label></label>").appendTo(view).text(data.value);
			var code = $("<span></span>").appendTo(view);
			code.text(data.code);
			code.css({color: "#fff", backgroundColor: "#000", marginLeft: "5px"});
			return view;
		};

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, chkbox: true, itemRenderer: myItemRenderer}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  chkbox: true,");
		source.push("  itemRenderer: function (data) {");
		source.push("    var $ = $ || VRender.$;");
		source.push("    var view = $('<div></div');");
		source.push("    $('<label></label>').appendTo(view).text(data.value);");
		source.push("    var code = $('<span></span>').appendTo(view);");
		source.push("    code.text(data.code);");
		source.push("    code.css({color: '#fff', backgroundColor: '#000', marginLeft: '5px'});");
		source.push("    return view;");
		source.push("  }");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("图标");

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, chkbox: true, icon: "icon"}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  chkbox: true,");
		source.push("  icon: 'icon'");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample4_1: function () {
		var example = this.addExample("图标（使用自定义方法）");

		var myIconFunction = function (data) {
			if (/0000$/.test(data.code))
				return "/image/icons/d02.png";
			if (/00$/.test(data.code))
				return "/image/icons/d03.png";
			return "/image/icons/d04.png";
		};

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, chkbox: true, icon: myIconFunction}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  chkbox: true,");
		source.push("  icon: function (data) {}");
		source.push("    if (/0000$/.test(data.code))");
		source.push("      return '/image/icons/d02.png';");
		source.push("    if (/00$/.test(data.code))");
		source.push("      return '/image/icons/d03.png';");
		source.push("    return '/image/icons/d04.png';");
		source.push("  }");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("默认展开和选择（按索引）");

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, chkbox: true, openIndex: "0,1", 
			selectedIndex: "3,8", multi: true}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  chkbox: true,");
		source.push("  openIndex: '0,1',");
		source.push("  selectedIndex: '3,8',");
		source.push("  multi: true");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample5_1: function () {
		var example = this.addExample("默认展开和选择（按编号）");

		var myLabelFunction = function (data) {
			return data.value + " " + data.code;
		};

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {data: exampleData, keyField: "code", chkbox: true, openId: "120100,130000", 
			selectedId: "110107,120100,220000", multi: true, labelFunction: myLabelFunction}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  data: dataSource,");
		source.push("  keyField: 'code',");
		source.push("  chkbox: true,");
		source.push("  openId: '120100,130000',");
		source.push("  selectedId: '110107,120100,220000',");
		source.push("  multi: true,");
		source.push("  labelFunction: function (data) {");
		source.push("    return data.value + ' ' + data.code;");
		source.push("  }");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("动态加载");

		var demo = new UIGroup(this);
		demo.append(new UITreeView(this, {apiName: "data.component.tree", chkbox: true, openIndex: "1,0,2",
			apiParams: {total: 10, p_size: 3}}));

		var source = [];
		source.push("new UITreeView(context, {");
		source.push("  apiName: 'data.component.tree',");
		source.push("  chkbox: true,");
		source.push("  openIndex: '1,0,2'");
		source.push("});");

		this.showDemo(example, demo, source);
	},

	showExampleData: function () {
		var example = this.addExample("以上数据结构如下");

		var source = [];
		source = JSON.stringify(exampleData, null, "  ");

		this.showDemo(example, null, source);
	}

});