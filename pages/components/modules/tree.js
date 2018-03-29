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
	code: "110000", value: "北京市",  
	children: [{
		code: "110100", value: "市辖区", 
		children: [{
			code: "110101", value: "东城区"
		}, {
			code: "110102", value: "西城区"
		}, {
			code: "110105", value: "朝阳区"
		}, {
			code: "110106", value: "丰台区"
		}, {
			code: "110107", value: "石景山区"
		}, {
			code: "110108", value: "海淀区"
		}, {
			code: "110109", value: "门头沟区"
		}, {
			code: "110111", value: "房山区"
		}, {
			code: "110112", value: "通州区"
		}, {
			code: "110113", value: "顺义区"
		}, {
			code: "110114", value: "昌平区"
		}, {
			code: "110115", value: "大兴区"
		}, {
			code: "110116", value: "怀柔区"
		}, {
			code: "110117", value: "平谷区"
		}, {
			code: "110118", value: "密云区"
		}, {
			code: "110119", value: "延庆区"
		}]
	}]
}, {
	code: "120000", value: "天津市",
	children: [{
		code: "120100", value: "市辖区",
		children: [{
			code: "120101", value: "和平区"
		}, {
			code: "120102", value: "河东区"
		}, {
			code: "120103", value: "河西区"
		}, {
			code: "120104", value: "南开区"
		}, {
			code: "120105", value: "河北区"
		}, {
			code: "120106", value: "红桥区"
		}, {
			code: "120110", value: "东丽区"
		}, {
			code: "120111", value: "西青区"
		}]
	}]
}, {
	code: "130000", value: "河北省",
	children: [{
		code: "130100", value: "石家庄市",
		children: [{
			code: "130101", value: "市辖区"
		}, {
			code: "130102", value: "长安区"
		}, {
			code: "130102", value: "桥西区"
		}]
	}, {
		code: "130200", value: "唐山市",
		children: [{
			code: "130201", value: "市辖区"
		}, {
			code: "130202", value: "路南区"
		}, {
			code: "130203", value: "路北区"
		}]
	}, {
		code: "130400", value: "秦皇岛市"
	}, {
		code: "130500", value: "邯郸市"
	}, {
		code: "130500", value: "邢台市"
	}, {
		code: "130600", value: "保定市"
	}]
}, {
	code: "140000", value: "山西省"
}, {
	code: "150000", value: "内蒙古自治区"
}, {
	code: "210000", value: "辽宁省"
}, {
	code: "220000", value: "吉林省"
}, {
	code: "230000", value: "黑龙江省"
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
		this.showExample3();
		this.showExample4();
		this.showExample5();
		this.showExample6();
		this.showExample7()
		this.showExampleData();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);

		var source = [];
		source.push("new UITreeView(context, {data: dataSource});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("显示选择框（单选）");

		var demo = new UIGroup(this);

		var source = [];
		source.push("new UITreeView(context, {data: dataSource, chkbox: true, selectedIndex: 0});");

		this.showDemo(example, demo, source, true);
	},

	showExample3: function () {
		var example = this.addExample("显示选择框（多选）");

		var demo = new UIGroup(this);

		var source = [];
		source.push("new UITreeView(context, {data: dataSource, chkbox: true, multi: true, selectedIndex: '1,2'});");

		this.showDemo(example, demo, source, true);
	},

	showExample4: function () {
		var example = this.addExample("自定义节点内容");

		var demo = new UIGroup(this);

		var source = [];
		source.push("new UITreeView(context, {data: dataSource, labelFunction: myLabelFunction});");
		source.push("");
		source.push("function myLabelFunction (data) {");
		source.push("    return [data.code, data.value].join('_');");
		source.push("}");

		this.showDemo(example, demo, source, true);
	},

	showExample5: function () {
		var example = this.addExample("使用项渲染器");

		var demo = new UIGroup(this);

		var source = [];
		source.push("new UITreeView(context, {data: dataSource, chkbox: true, itemRenderer: myItemRenderer});");
		source.push("");
		source.push("function myItemRenderer (data) {");
		source.push("    var $ = $ || VRender.$;");
		source.push("    var view = $('<div></div');");
		source.push("    view.append('<label>' + data.value + '</label>');");
		source.push("    view.append('<span style=\"color:#fff;background-color:#000;\">' + data.code + '</span>');");
		source.push("    return view;");
		source.push("}");

		this.showDemo(example, demo, source, true);
	},

	showExample6: function () {
		var example = this.addExample("显示图标");

		var demo = new UIGroup(this);

		var source = [];
		source.push("new UITreeView(context, {data: dataSource, chkbox: true, icon: true});");

		this.showDemo(example, demo, source, true);
	},

	showExample7: function () {
		var example = this.addExample("显示图标（使用自定义方法）");

		var demo = new UIGroup(this);

		var source = [];
		source.push("new UITreeView(context, {data: dataSource, chkbox: true, icon: myIconFunction});");

		this.showDemo(example, demo, source, true);
	},

	// showExample: function () {
	// 	var example = this.addExample("");

	// 	var demo = new UIGroup(this);

	// 	var source = [];

	// 	this.showDemo(example, demo, source, true);
	// },

	showExampleData: function () {
		var example = this.addExample("以上数据结构如下");

		var source = [];
		source = JSON.stringify(exampleData, null, "  ");

		this.showDemo(example, null, source);
	}

});