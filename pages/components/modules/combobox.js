/**
 * 下拉选择
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-21
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


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
		this.showExample3_1();
		this.showExample4();
		this.showExample5();
		this.showExample6();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UICombobox(this, {data: exampleData, prompt: "请选择.."}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, prompt: '请选择..'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("可输入");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, prompt: "请输入选择..", editable: true}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, prompt: '请输入选择..', editable: true});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("默认选项");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, selectedIndex: 5}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, selectedIndex: 5});");

		this.showDemo(example, demo, source);
	},

	showExample3_1: function () {
		var example = this.addExample("多选");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, multi: true, selectedIndex: "2,4"}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, multi: true, selectedIndex: '2,4'});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("禁用");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, selectedIndex: 3, disabled: true}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, selectedIndex: 3, disabled: true});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("原生");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {data: exampleData, selectedIndex: 2, native: true}));

		var source = [];
		source.push("var items = [['选项1', '选项2'], '选项3', ['选项4', '选项5'], '选项6', '选项7'];");
		source.push("new UICombobox(context, {data: items, selectedIndex: 2, native: true});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("异步加载");

		var demo = new UIGroup(this);
		demo.append(new UICombobox(this, {apiName: "data.component.items2", prompt: "请选择..", selectedIndex: 3, labelField: "c1"}));

		var source = [];
		source.push("new UICombobox(context, {apiName: 'data.component.items', prompt: '请选择..', selectedIndex: 3});");

		this.showDemo(example, demo, source);
	}
});

var exampleData = [["选项1", "选项2"], "选项3", ["选项4", "选项5"], "选项6", "选项7"];
