/**
 * 下拉选择
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-21
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var UIGroup = VRender.UIGroup;
var UICombobox = VRender.UICombobox;

var ComboboxModule = BaseModule.extend(module, {
	className: "comp-combobox",

	getCompName: function () {
		return "Combobox";
	},

	getSubName: function () {
		return "下拉选择框";
	},

	getDescription: function () {
		return "基本表单组件，以下拉弹框的方式在多个选项中选择一个或多个，模拟原生选择控件并扩展。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
		this.showExample4();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UICombobox(this, {data: exampleData, prompt: "请选择.."}));

		var source = [];
		source.push("// 下拉选项数据集");
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("// 服务端创建");
		source.push("new UICombobox(context, {data: items, prompt: '请选择..'}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UICombobox.create({target: [elem], data: items, prompt: '请选择..'});");

		this.showDemo(example, demo, source);
	},

	showExample2: function () {
		var example = this.addExample("可输入下拉选择");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, prompt: "请输入选择..", editable: true}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, prompt: '请输入选择..', editable: true}).render(target);");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("设置默认选择项");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, selectedIndex: 5}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, selectedIndex: 5}).render(target);");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("禁用的下拉选择框");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, selectedIndex: 3, disabled: true}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, selectedIndex: 3, disabled: true});");

		this.showDemo(example, demo, source);
	}
});

var exampleData = [["选项1", "选项2"], "选项3", ["选项4", "选项5"], "选项6", "选项7"];
