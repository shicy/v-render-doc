/**
 * 下拉列表
 * @author shicy <shicy85@163.com>
 * Created on 2017-12-12
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIDropdownList = VRender.UIDropdownList;

var DropdownListModule = BaseModule.extend(module, {
	className: "comp-dropdownlist",

	getCompName: function () {
		return "DropdownList";
	},

	getSubName: function () {
		return "下拉列表";
	},

	getDescription: function () {
		return "显示一个列表";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);
		demo.append(new UIDropdownList(this, {data: exampleData}));

		var source = [];
		source.push("// 列表项项数据集");
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("// 服务端创建");
		source.push("new UIDropdownList(context, {data: items}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UIDropdownList.create({target: [elem], data: items});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("设置默认选择项");

		var demo = new UIGroup(this);
		demo.append(new UIDropdownList(this, {data: exampleData, selectedIndex: 3}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UIDropdownList(context, {data: items, selectedIndex: 3}).render(target);");

		this.showDemo(example, demo, source);
	}

});

var exampleData = [["选项1", "选项2"], "选项3", ["选项4", "选项5"], "选项6", "选项7"];
