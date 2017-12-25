/**
 * 分页
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-25
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIPaginator = VRender.UIPaginator;

var PaginatorModule = BaseModule.extend(module, {
	className: "comp-paginator",

	getCompName: function () {
		return "Paginator";
	},

	getSubName: function () {
		return "分页";
	},

	getDescription: function () {
		return "当数据量比较多的时候，使用分页组件快速切换数据集。可以与数据网格（<code>Datagrid</code>）组件配合使用。";
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIPaginator(this, {total: 16395, size: 20, page: 3}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIPaginator(context, {total: 16395, size: 20, page: 3}).render(target)");
		source.push("// 浏览器端创建");
		source.push("UIPaginator.create({target: [elem], total: 16395, size: 20, page: 3});");

		this.showDemo(example, demo, source);
	}
});
