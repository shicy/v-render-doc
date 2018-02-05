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
		this.showExample2();
		this.showExample3();
		this.showExample4();
		this.showExample5();
		this.showExample6();
		this.showExample7();
		this.showExample8();
		this.showExample9();
		this.showExample10();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);
		demo.append(new UIPaginator(this, {total: 16395, size: 20, page: 3}));

		var source = [];
		source.push("// 服务端创建");
		source.push("new UIPaginator(context, {total: 16395, size: 20, page: 3}).render(target)");
		source.push("// 浏览器端创建");
		source.push("UIPaginator.create({target: [elem], total: 16395, size: 20, page: 3});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("极简模式");

		var demo = new UIGroup(this);
		demo.append(new UIPaginator(this, {total: 12345, mode: false, skip: false, buttons: [false, true, true, false]}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, mode: false, skip: false, buttons: [false, true, true, false]});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("隐藏分页跳转功能");

		var demo = new UIGroup(this);
		demo.append(new UIPaginator(this, {total: 12345, skip: false}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, skip: false});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("显示分页按钮");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIPaginator(this, {total: 12345, mode: "spread"}));
		demo.append(new UIPaginator(this, {total: 12345, mode: "spread", showNum: 5}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, mode: 'spread'});");
		source.push("new UIPaginator(context, {total: 12345, mode: 'spread', showNum: 5});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("下拉显示分页");

		var demo = new UIGroup(this);
		demo.append(new UIPaginator(this, {total: 12345, mode: "dropdown"}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, mode: 'dropdown'});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("只显示分页按钮");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIPaginator(this, {total: 12345, mode: "spread", buttons: false, skip: false}));
		demo.append(new UIPaginator(this, {total: 12345, mode: "dropdown", buttons: false, skip: false}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, mode: 'spread', buttons: false, skip: false});");
		source.push("new UIPaginator(context, {total: 12345, mode: 'dropdown', buttons: false, skip: false});");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("自定义按钮名称");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIPaginator(this, {total: 12345, buttons: ["首页", "上一页", "下一页", "末页", "跳转"]}));
		demo.append(new UIPaginator(this, {total: 12345, mode: "spread", buttons: [false, "上一页", "下一页", false, "跳转"]}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, buttons: ['首页', '上一页', '下一页', '末页', '跳转']});");
		source.push("new UIPaginator(context, {total: 12345, mode: 'spread', buttons: [false, '上一页', '下一页', false, '跳转']});");

		this.showDemo(example, demo, source);
	},

	showExample8: function () {
		var example = this.addExample("显示分页状态");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIPaginator(this, {total: 12345, status: true}));
		demo.append(new UIPaginator(this, {total: 12345, mode: "dropdown", skip: false,
			status: "共{pageCount}页{totalCount}条，当前第{pageNo}页({pageStart}~{pageEnd}条)，每页{pageSize}条"}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, status: true});");
		source.push("new UIPaginator(context, {total: 12345, mode: 'dropdown', skip: false, " +
			"\n\tstatus: '共{pageCount}页{totalCount}条，当前第{pageNo}页({pageStart}~{pageEnd}条)，每页{pageSize}条'});");

		this.showDemo(example, demo, source);
	},

	showExample9: function () {
		var example = this.addExample("可选分页大小");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIPaginator(this, {total: 12345, sizes: [10, 20, 50]}));
		demo.append(new UIPaginator(this, {total: 12345, size: 20, sizes: [10, 20, 50]}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, sizes: [10, 20, 50]});");
		source.push("new UIPaginator(context, {total: 12345, size: 20, sizes: [10, 20, 50]});");

		this.showDemo(example, demo, source);
	},

	showExample10: function () {
		var example = this.addExample("显示为超链接样式");

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIPaginator(this, {total: 12345, style: "link"}));
		demo.append(new UIPaginator(this, {total: 12345, buttons: ["首页", "上一页", "下一页", "末页", "跳转"], style: "link"}));
		demo.append(new UIPaginator(this, {total: 12345, mode: "spread", style: "link"}));
		demo.append(new UIPaginator(this, {total: 12345, mode: "dropdown", style: "link"}));

		var source = [];
		source.push("new UIPaginator(context, {total: 12345, style: 'link'});");
		source.push("new UIPaginator(context, {total: 12345, style: 'link', buttons: ['首页', '上一页', '下一页', '末页', '跳转']});");
		source.push("new UIPaginator(context, {total: 12345, style: 'link', mode: 'spread'});");
		source.push("new UIPaginator(context, {total: 12345, style: 'link', mode: 'dropdown'});");

		this.showDemo(example, demo, source);
	}

});
