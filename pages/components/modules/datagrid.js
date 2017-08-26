/**
 * 数据网格
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-23
 */

var VRender = require(__vrender);
var BaseModule = require("./base");


var Utils = VRender.Utils;
var UIDatagrid = VRender.UIDatagrid;

var DatagridModule = BaseModule.extend(module, {
	className: "comp-datagrid",

	getCompName: function () {
		return "Datagrid";
	},

	getSubName: function () {
		return "数据网格";
	},

	getDescription: function () {
		return "用于展示大量结构相似的数据，按行列表格方式显示。";
	},

	renderExamples: function () {
		this.showExample1();
		this.showDataSource();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var columns = [];
		columns.push({name: "id", title: "编号"});
		columns.push({name: "name", title: "名称"});
		columns.push({name: "desc", title: "备注"});
		columns.push({name: "actor", title: "主演"});
		var demo = new UIDatagrid(this, {columns: columns, data: exampleData});

		var source = [];
		source.push("// 列信息");
		source.push("var columns = [];");
		source.push("columns.push({name: 'id', title: '编号'});");
		source.push("columns.push({name: 'name', title: '名称'});");
		source.push("columns.push({name: 'desc', title: '备注'});");
		source.push("columns.push({name: 'actor', title: '主演'});");
		source.push("// 服务端创建");
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UIDatagrid.create({target: [elem], columns: columns, data: dataSource});");

		this.showDemo(example, demo, source);
	},

	showDataSource: function () {
		var example = this.addExample("以上数据结构如下");

		var source = [];
		source.push("var dataSource = [];");
		Utils.each(exampleData, function (data) {
			source.push("dataSource.push({");
			for (var name in data) {
				source.push("    " + name + ": '" + data[name] + "'");
			}
			source.push("});");
		});

		this.showDemo(example, null, source);
	}
});

var exampleData = [];
exampleData.push({id: 1, name: '快手枪手快枪手', desc: '林更新爆笑夺宝大冒险', 
	actor: '林更新 / 张静初 / 锦荣 / 刘晓庆', director: '潘安子', year: 2016, 
	score: 8.2, type: '动作、喜剧', date: '2016-7-15', 
	shortName: 'For A Few Bullets', company: '五洲电影发行有限公司'});
exampleData.push({id: 2, name: '废柴特工', desc: '废宅青年拯救美国', 
	actor: '杰西·艾森伯格 / 克里斯汀·斯图尔特 / 约翰·雷吉扎莫', director: '尼玛·诺里扎德', 
	year: 2015, score: 7.7, type: '动作、喜剧', date: '2015-8-21', 
	shortName: 'American Ultra', company: '电影国度娱乐公司'});
exampleData.push({id: 3, name: '宅女侦探桂香', desc: '王珞丹周渝民斗智斗勇', 
	actor: '王珞丹 / 周渝民 / 任达华 / 天心 / 邵美琪', director: '彭顺', year: 2015, 
	score: 7.4, type: '侦探，爱情', date: '2015-8-13', 
	shortName: 'Detective Lady', compnay: '福建恒业电影发行有限公司'});
