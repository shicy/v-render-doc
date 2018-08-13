/**
 * 树形下拉选择框组件
 * @author shicy <shicy85@163.com>
 * Created on 2018-08-12
 */

var VRender = require(__vrender);
var ListModule = require("./_list");


var Utils = VRender.Utils;
var UIGroup = VRender.UIGroup;
var UITreeCombobox = VRender.UITreeCombobox;

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

var TreeComboboxModule = ListModule.extend(module, {
	className: "comp-treecombobox",

	getCompName: function () {
		return "TreeCombobox";
	},

	getSubName: function () {
		return "树形下拉选择框";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this);
		demo.append(new UITreeCombobox(this, {data: exampleData, prompt: "请选择"}));

		var source = [];
		source.push("new UITreeCombobox(context, {data: dataSource, prompt: '请选择'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("多选");

		var demo = new UIGroup(this);
		demo.append(new UITreeCombobox(this, {data: exampleData, multi: true}));

		var source = [];
		source.push("new UITreeCombobox(context, {data: dataSource, multi: true});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("动态加载");

		var demo = new UIGroup(this);
		demo.append(new UITreeCombobox(this, {apiName: "data.component.tree", openIndex: "1,0,2"}));

		var source = [];
		source.push("new UITreeCombobox(context, {apiName: 'data.component.tree', openIndex: '1,0,2'});");

		this.showDemo(example, demo, source);
	}
});
