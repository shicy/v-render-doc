/**
 * 列表
 * @author shicy <shicy85@163.com>
 * Created on 2018-02-07
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIListView = VRender.UIListView;
var UIPaginator = VRender.UIPaginator;

var exampleData = [];
exampleData.push({name: "携程旅行", title: "携程旅行迪士尼酒店机票火车票旅游门票攻略团购官方", type: "旅游",
	icon: "http://pp.myapp.com/ma_icon/0/icon_6240_1517882296/96", apk: "ctrip.android.view",
	desc: "豌豆荚小编评语：出游订酒店，订机票，火车票用携程都挺方便的，而且和去哪儿合并之后基本坐稳国内第一大的旅游出行APP了...", 
	version: "7.10.2", date: "2018-2-6", score: 4.6, size: 54.97});
exampleData.push({name: "微信", title: "微信", type: "社交", 
	icon: "http://pp.myapp.com/ma_icon/0/icon_10910_1517479239/96", apk: "com.tencent.mm",
	desc: "可以发语音、文字消息、表情、图片、视频30M流量可以收发上千条语音，省电省流量...",
	version: "6.6.2", date: "2018-2-1", score: 3.5, size: 58.4});
exampleData.push({name: "轩辕传奇", title: "轩辕传奇：新职业-轩辕公测", type: "游戏", subtype: "网络游戏",
	icon: "http://pp.myapp.com/ma_icon/0/icon_52431620_1517795952/96", apk: "com.tencent.tmgp.xymobile",
	desc: "《轩辕传奇手游》是由腾讯自研的一款以山海经神话为世界背景的手游，延续端游经典PVP玩法，与上古勇士结成血盟，百人同屏，" +
		"实时对战争夺城主之位，给你畅快的打击快感！更有炫酷的灵宠系统、弑神玩法等你体验。《轩辕传奇手游》，给你一个突破想象的远古神话战场！",
	version: "1.0.185.7", date: "2018-2-5", score: 4.1, size: 901.11});
exampleData.push({name: "穿越火线", title: "穿越火线-枪战王者（荒岛特训上线）", type: "游戏", subtype: "飞行射击",
	icon: "http://pp.myapp.com/ma_icon/0/icon_12165022_1517536428/96", apk: "com.tencent.tmgp.cf",
	desc: "穿越火线：枪战王者》是腾讯游戏出品的CF正版第一人称射击手游，作为一款国民级竞技手游，游戏完美传承了PC端的品质和玩法，" +
		"同时还针对手机端的操作特点，将3亿鼠标的枪战梦想延续到手机上，爽快的手感，让玩家随时随地体验极致射击乐趣和竞技对抗的热血，好玩就要一起玩。",
	version: "1.0.27.201", date: "2018-2-2", score: 4.8, size: 796.01});
exampleData.push({name: "滴滴出行", title: "滴滴出行", type: "生活",
	icon: "http://pp.myapp.com/ma_icon/0/icon_288717_1517552367/96", apk: "com.sdu.didi.psnger",
	desc: "【近3亿用户的选择】2012年诞生的滴滴现已成为广受用户欢迎的城市出行应用！覆盖全国超过400个城市，乘客叫车成功率94%以上！",
	version: "5.1.32", date: 2018-2-2, score: 4.6, size: 34.37});
exampleData.push({name: "饿了么", title: "饿了么", type: "生活",
	icons: "http://pp.myapp.com/ma_icon/0/icon_1029694_1518002951/96", apk: "me.ele",
	desc: "饿了么，专业的本地生活服务平台！",
	version: "7.32", date: "2018-2-7", score: 4.6, size: 28.22});

var ListViewModule = BaseModule.extend(module, {
	className: "comp-listview",

	getCompName: function () {
		return "ListView";
	},

	getSubName: function () {
		return "列表视图";
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
		this.showExample10();
		this.showExample11();
		this.showExample12();
		this.showExampleData();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]}));

		var source = [];
		source.push("new UIListView(context, {data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("绑定数据集");

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: exampleData}));

		var source = [];
		source.push("new UIListView(context, {data: dataSource});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("显示列表选择框");

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: exampleData, chkbox: true, selectedIndex: 2}));

		var source = [];
		source.push("new UIListView(context, {data: dataSource, chkbox: true, selectedIndex: 2});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("多选列表");

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: exampleData, chkbox: true, multi: true, selectedIndex: [2, 3]}));

		var source = [];
		source.push("new UIListView(context, {data: dataSource, chkbox: true, multi: true, selectedIndex: [2, 3]});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("自定义显示字段");

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: exampleData, labelField: "title"}));

		var source = [];
		source.push("new UIListView(context, {data: dataSource, labelField: 'title'});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("自定义显示内容");

		var labelFunction = function (data) {
			var url = "http://sj.qq.com/myapp/detail.htm?apkName=" + data.apk;
			return "<a href='" + url + "'>【" + data.type + "】" + data.name + " V" + data.version+ "</a>";
		};

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: exampleData, labelFunction: labelFunction}));

		var source = [];
		source.push("new UIListView(this, {data: dataSource, labelFunction: labelFun});");
		source.push("function labelFun (data) {");
		source.push("    var url = 'http://sj.qq.com/myapp/detail.htm?apkName=' + data.apk;");
		source.push("    return '<a href=\"' + url + '\">【' + data.type + '】' + data.name + ' V' + data.version + '</a>';");
		source.push("}");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("使用项渲染器");

		var myItemRenderer = function (data) {
			var item = $("<div></div>");
			var icon = $("<img>").appendTo(item);
			icon.attr("src", data. icon);
			var title = $("<div></div>").appendTo(item);
			title.text(data.title);
			var infos = $("<div></div>").appendTo(item);
			infos.text(data.size.toFixed(2) + "M，版本号：V" + data.version + "，更新时间：" + data.date);
			var desc = $("<div></div>").appendTo(item);
			desc.text(data.desc);
		};

		var demo = new UIGroup(this);
		demo.append(new UIListView(this, {data: exampleData, itemRenderer: myItemRenderer}));

		var source = [];
		source.push("new UIListView(context, {data: dataSource, itemRenderer: myItemRenderer});");
		source.push("function myItemRenderer (data) {");
		source.push("    var item = $('<div></div>');");
		source.push("    var icon = $('<img>').appendTo(item);");
		source.push("    icon.attr('src', data.icon);");
		source.push("    var title = $('<div></div>').appendTo(item);");
		source.push("    title.text(data.title);");
		source.push("    var infos = $('<div></div>').appendTo(item);");
		source.push("    infos.text(data.size.toFixed(2) + 'M，版本号：V' + data.version + '，更新时间：' + data.date);");
		source.push("    var desc = $('<div></div>').appendTo(item);");
		source.push("    desc.text(data.desc);");
		source.push("}");

		this.showDemo(example, demo, source);
	},

	showExample8: function () {
		var example = this.addExample("使用内置项渲染器（简单）");

		var demo = new UIGroup(this);
		// demo.append(new UIListView(this, {data: exampleData, itemRenderer: UIListView.item_renderer_simple("title")}));

		var source = [];
		source.push("var myItemRenderer = UIListView.item_renderer_simple('title');");
		source.push("new UIListView(context, {data: dataSource, itemRenderer: myItemRenderer});");

		this.showDemo(example, demo, source);
	},

	showExample9: function () {
		var example = this.addExample("使用内置项渲染器（图标）");

		var demo = new UIGroup(this);
		// demo.append(new UIListView(this, {data: exampleData, itemRenderer: UIListView.item_renderer_icon(null, "name")}));

		var source = [];
		source.push("var myItemRenderer = UIListView.item_renderer_icon(null, 'name');");
		source.push("new UIListView(context, {data: dataSource, itemRenderer: myItemRenderer});");

		this.showDemo(example, demo, source);
	},

	showExample10: function () {
		var example = this.addExample("使用内置项渲染器（按钮）");

		var demo = new UIGroup(this);
		var buttons = [{name: "download", label: "立即下载", type: "primary"}, {name: "install", label: "安装到手机"}];
		// demo.append(new UIListView(this, {data: exampleData, itemRenderer: UIListView.item_renderer_button(buttons)}));

		var source = [];
		source.push("var buttons = [];");
		source.push("buttons.push({name: 'download', label: '立即下载', type: 'primary'});");
		source.push("buttons.push({name: 'install', label: '安装到手机'});");
		source.push("var myItemRenderer = UIListView.item_renderer_button(buttons);");
		source.push("new UIListView(context, {data: dataSource, itemRenderer: myItemRenderer});");

		this.showDemo(example, demo, source);
	},

	showExample11: function () {
		var example = this.addExample("使用内置项渲染器（图标+按钮）");

		var demo = new UIGroup(this);
		var buttons = [{name: "download", label: "立即下载", type: "primary"}, {name: "install", label: "安装到手机"}];
		// var myItemRenderer = UIListView.item_renderer_icon_button("icon", buttons, "name");
		// demo.append(new UIListView(this, {data: exampleData, itemRenderer: myItemRenderer}));

		var source = [];
		source.push("var buttons = [];");
		source.push("buttons.push({name: 'download', label: '立即下载', type: 'primary'});");
		source.push("buttons.push({name: 'install', label: '安装到手机'});");
		source.push("var myItemRenderer = UIListView.item_renderer_icon_button(buttons);");
		source.push("new UIListView(context, {data: dataSource, itemRenderer: myItemRenderer});");

		this.showDemo(example, demo, source);
	},

	showExample12: function () {
		var example = this.addExample("异步数据（分页加载）");

		var demo = new UIGroup(this);
		// var list = demo.add(new UIListView(this, {api: "demo.data.list"}));
		// var pager = demo.add(new UIPaginator(this));
		// list.setPager(pager);

		var source = [];
		source.push("var pager = new UIPaginator(context);");
		source.push("new UIListView(context, {api: 'demo.data.list', pager: pager});");

		this.showDemo(example, demo, source);
	},

	showExampleData: function () {
		var example = this.addExample("测试数据集");

		var source = [];
		source = JSON.stringify(exampleData, null, "  ");

		this.showDemo(example, null, source);
	}

});
