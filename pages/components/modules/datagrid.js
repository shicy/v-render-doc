/**
 * 数据网格
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-23
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var Utils = VRender.Utils;
var UIGroup = VRender.UIGroup;
var UIDatagrid = VRender.UIDatagrid;
var UIPaginator = VRender.UIPaginator;

var exampleData = [];
exampleData.push({id: 1, name: "携程旅行", title: "携程旅行迪士尼酒店机票火车票旅游门票攻略团购官方", type: "旅游",
	icon: "http://pp.myapp.com/ma_icon/0/icon_6240_1517882296/96", apk: "ctrip.android.view",
	url: "http://sj.qq.com/myapp/detail.htm?apkName=ctrip.android.view",
	desc: "豌豆荚小编评语：出游订酒店，订机票，火车票用携程都挺方便的，而且和去哪儿合并之后基本坐稳国内第一大的旅游出行APP了...", 
	version: "7.10.2", date: "2018-2-6", score: 4.6, size: 54.97});
exampleData.push({id: 2, name: "微信", title: "微信", type: "社交", 
	icon: "http://pp.myapp.com/ma_icon/0/icon_10910_1517479239/96", apk: "com.tencent.mm",
	url: "http://sj.qq.com/myapp/detail.htm?apkName=com.tencent.mm",
	desc: "可以发语音、文字消息、表情、图片、视频30M流量可以收发上千条语音，省电省流量...",
	version: "6.6.2", date: "2018-2-1", score: 3.5, size: 58.4});
exampleData.push({id: 3, name: "轩辕传奇", title: "轩辕传奇：新职业-轩辕公测", type: "游戏", subtype: "网络游戏",
	icon: "http://pp.myapp.com/ma_icon/0/icon_52431620_1517795952/96", apk: "com.tencent.tmgp.xymobile",
	url: "http://sj.qq.com/myapp/detail.htm?apkName=com.tencent.tmgp.xymobile",
	desc: "《轩辕传奇手游》是由腾讯自研的一款以山海经神话为世界背景的手游，延续端游经典PVP玩法，与上古勇士结成血盟，百人同屏，" +
		"实时对战争夺城主之位，给你畅快的打击快感！更有炫酷的灵宠系统、弑神玩法等你体验。《轩辕传奇手游》，给你一个突破想象的远古神话战场！",
	version: "1.0.185.7", date: "2018-2-5", score: 4.1, size: 901.11});
exampleData.push({id: 4, name: "穿越火线", title: "穿越火线-枪战王者（荒岛特训上线）", type: "游戏", subtype: "飞行射击",
	icon: "http://pp.myapp.com/ma_icon/0/icon_12165022_1517536428/96", apk: "com.tencent.tmgp.cf",
	url: "http://sj.qq.com/myapp/detail.htm?apkName=com.tencent.tmgp.cf",
	desc: "《穿越火线：枪战王者》是腾讯游戏出品的CF正版第一人称射击手游，作为一款国民级竞技手游，游戏完美传承了PC端的品质和玩法，" +
		"同时还针对手机端的操作特点，将3亿鼠标的枪战梦想延续到手机上，爽快的手感，让玩家随时随地体验极致射击乐趣和竞技对抗的热血，好玩就要一起玩。",
	version: "1.0.27.201", date: "2018-2-2", score: 4.8, size: 796.01});
exampleData.push({id: 5, name: "滴滴出行", title: "滴滴出行", type: "生活",
	icon: "http://pp.myapp.com/ma_icon/0/icon_288717_1517552367/96", apk: "com.sdu.didi.psnger",
	url: "http://sj.qq.com/myapp/detail.htm?apkName=com.sdu.didi.psnger",
	desc: "【近3亿用户的选择】2012年诞生的滴滴现已成为广受用户欢迎的城市出行应用！覆盖全国超过400个城市，乘客叫车成功率94%以上！",
	version: "5.1.32", date: "2018-2-2", score: 4.6, size: 34.37});
exampleData.push({id: 6, name: "饿了么", title: "饿了么", type: "生活",
	icon: "http://pp.myapp.com/ma_icon/0/icon_1029694_1518002951/96", apk: "me.ele",
	url: "http://sj.qq.com/myapp/detail.htm?apkName=me.ele",
	desc: "饿了么，专业的本地生活服务平台！",
	version: "7.32", date: "2018-2-7", score: 4.6, size: 28.22});

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
		this.showExample2();
		this.showExample2_1();
		this.showExample3();
		this.showExample4();
		this.showExample5();
		this.showExample6();
		this.showExample6_1();
		this.showExample7();
		this.showExample8();
		this.showExample9();
		this.showExample9_1();
		this.showExample10();
		this.showExample11();
		this.showExample12();
		this.showExample13();
		this.showExampleData();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var columns = [];
		columns.push({name: "name", title: "名称"});
		if (!this.isApp)
			columns.push({name: "type", title: "类型"});
		columns.push({name: "version", title: "版本"});
		columns.push({name: "date", title: "发布日期"});
		columns.push({name: "score", title: "评分"});

		var demo = new UIGroup(this);
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, chkbox: true}));

		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称'});");
		if (!this.isApp)
			source.push("columns.push({name: 'type', title: '类型'});");
		source.push("columns.push({name: 'version', title: '版本'});");
		source.push("columns.push({name: 'date', title: '发布日期'});");
		source.push("columns.push({name: 'score', title: '评分'});");
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("选择框（单选）");

		var columns = [];
		columns.push({name: "name", title: "名称", width: (this.isApp ? null : 120)});
		if (!this.isApp)
			columns.push({name: "desc", title: "应用信息"});

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, chkbox: true, selectedIndex: 2}));

		var source = [];
		source.push("var columns = [];");
		if (this.isApp) {
			source.push("columns.push({name: 'name', title: '名称'});");
		}
		else {
			source.push("columns.push({name: 'name', title: '名称', width: 120});");
			source.push("columns.push({name: 'desc', title: '应用信息'});");
		}
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, chkbox: true, selectedIndex: 2});");

		this.showDemo(example, demo, source);
	},

	showExample2_1: function () {
		var example = this.addExample("选择框（多选）");

		var columns = [];
		columns.push({name: "name", title: "名称", width: (this.isApp ? null : 120)});
		if (!this.isApp)
			columns.push({name: "desc", title: "应用信息"});

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, chkbox: true, multi: true, selectedIndex: [2,3]}));

		var source = [];
		source.push("var columns = [];");
		if (this.isApp) {
			source.push("columns.push({name: 'name', title: '名称'});");
		}
		else {
			source.push("columns.push({name: 'name', title: '名称', width: 120});");
			source.push("columns.push({name: 'desc', title: '应用信息'});");
		}
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, chkbox: true, multi: true, selectedIndex: [2,3]});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("排序");

		var nameSortTypes = [];
		nameSortTypes.push({type: "asc", label: "升序"});
		nameSortTypes.push({type: "desc", label: "降序"});
		nameSortTypes.push({type: "hot", label: "热门", icon: "/image/icons/c01.png", custom: true});

		var versionSortFunction = function (a, b, sortType) {
			a = a.version.split(".");
			b = b.version.split(".");
			var sortFlag = sortType == "asc" ? 1 : -1;
			for (var i = 0; i < a.length; i++) {
				if (i < b.length) {
					var t = parseInt(a[i]) - parseInt(b[i]);
					if (t)
						return t * sortFlag;
				}
				else {
					return sortFlag;
				}
			}
			return (a.length < b.length) ? sortFlag : 0;
		};

		var columns = [];
		columns.push({name: "name", title: "名称", sortable: nameSortTypes, sortType: "asc"});
		if (this.isApp) {
			columns.push({name: "type", title: "类型", sortable: true, width: "1rem"});
			columns.push({name: "version", title: "版本", sortable: versionSortFunction});
		}
		else {
			columns.push({name: "type", title: "类型", sortable: true});
			columns.push({name: "version", title: "版本", sortable: versionSortFunction});
			columns.push({name: "date", title: "发布日期", sortable: true, dataType: "date"});
			columns.push({name: "score", title: "评分", sortable: true});
		}

		var demo = new UIGroup(this);
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, chkbox: true, selectedIndex: 0}));

		var source = [];
		source.push("var nameSortTypes = [];");
		source.push("nameSortTypes.push({type: 'asc', label: '升序'});");
		source.push("nameSortTypes.push({type: 'desc', label: '降序'});");
		source.push("nameSortTypes.push({type: 'hot', label: '热门', icon: '/image/icons/c01.png', custom: true});");
		source.push("");
		source.push("var versionSortFunction = function (a, b, sortType) {");
		source.push("    a = a.version.split('.');");
		source.push("    b = b.version.split('.');");
		source.push("    var sortFlag = sortType == 'asc' ? 1 : -1;");
		source.push("    for (var i = 0; i < a.length; i++) {");
		source.push("        if (i < b.length) {");
		source.push("            var t = parseInt(a[i]) - parseInt(b[i]);");
		source.push("            if (t)");
		source.push("                return t * sortFlag;");
		source.push("        }");
		source.push("        else {");
		source.push("            return sortFlag;");
		source.push("        }");
		source.push("    }");
		source.push("    return (a.length < b.length) ? sortFlag : 0;");
		source.push("}");
		source.push("");
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称', sortable: nameSortTypes, sortType: 'asc'});");
		if (this.isApp) {
			source.push("columns.push({name: 'type', title: '类型', sortable: true, width: '1rem'});");
			source.push("columns.push({name: 'version', title: '版本', sortable: versionSortFunction});");
		}
		else {
			source.push("columns.push({name: 'type', title: '类型', sortable: true});");
			source.push("columns.push({name: 'version', title: '版本', sortable: versionSortFunction});");
			source.push("columns.push({name: 'date', title: '发布日期', sortable: true, dataType: 'date'});");
			source.push("columns.push({name: 'score', title: '评分', sortable: true});");
		}
		source.push("var grid = new UIDatagrid(context, {columns: columns, data: dataSource, chkbox: true, selectedIndex: 0});");
		source.push("");
		source.push("// 前端排序事件");
		source.push("grid.on('sort', function (e, columnName, sortType) {});");

		this.showDemo(example, demo, source);
	},

	showExample4: function () {
		var example = this.addExample("筛选");

		var scoreFilter = [];
		scoreFilter.push({label: "好评", value: 1, handler: function (d) { return d.score >= 4.5; }});
		scoreFilter.push({label: "中评", value: 2, handler: function (d) { return d.score >= 4; }});
		scoreFilter.push({label: "差评", value: 3, handler: function (d) { return d.score < 4; }});

		var sizeFilter = [];
		sizeFilter.push({label: "小于30M", value: 30});
		sizeFilter.push({label: "小于50M", value: 50});
		sizeFilter.push({label: "小于100M", value: 100});
		var sizeFilterFunction = function (d, v) { return d.size < v; };

		var columns = [];
		columns.push({name: "name", title: "名称", sortable: true, filter: true});
		columns.push({name: "type", title: "类型", filter: "enum"});
		columns.push({name: "score", title: "评分", filter: scoreFilter, sortable: true, filterValue: 2});
		columns.push({name: "size", title: "大小", filter: sizeFilter, filterFunction: sizeFilterFunction});
		if (!this.isApp)
			columns.push({name: "date", title: "发布日期"});

		var demo = new UIGroup(this);
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, chkbox: true}));


		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称', filter: true});");
		source.push("columns.push({name: 'type', title: '类型', filter: 'enum'});");
		source.push("columns.push({name: 'score', title: '评分', filter: scoreFilter});");
		source.push("columns.push({name: 'size', title: '大小', filter: sizeFilter, filterFunction: sizeFilterFun});");
		if (!this.isApp)
			source.push("columns.push({name: 'date', title: '发布日期'});");
		source.push("var grid = new UIDatagrid(context, {columns: columns, data: dataSource})");
		source.push("");
		source.push("var scoreFilter = [];");
		source.push("scoreFilter.push({label: '好评', value: 1, handler: function (d) { return d.score >= 4.5; }});");
		source.push("scoreFilter.push({label: '中评', value: 2, handler: function (d) { return d.score >= 4; }});");
		source.push("scoreFilter.push({label: '差评', value: 3, handler: function (d) { return d.score < 4; }});");
		source.push("");
		source.push("var sizeFilter = []");
		source.push("sizeFilter.push({label: '小于30M', value, 30});");
		source.push("sizeFilter.push({label: '小于50M', value, 50});");
		source.push("sizeFilter.push({label: '小于100M', value, 100});");
		source.push("var sizeFilterFun = function (d, v) { return d.size < v; };");
		source.push("");
		source.push("// 前端筛选事件");
		source.push("grid.on('filter', function (e, column, value) {});");

		this.showDemo(example, demo, source);
	},

	showExample5: function () {
		var example = this.addExample("列标题图标");

		var columns = [];
		if (this.isApp) {
			columns.push({name: "name", title: "名称", icon: "/image/icons/d01.png"});
		}
		else {
			columns.push({name: "name", title: "名称", icon: "/image/icons/d01.png", width: 120});
			columns.push({name: "desc", title: "应用信息", icon: "/image/icons/a07.png"});
		}

		var demo = new UIGroup(this);
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData}));

		var source = [];
		source.push("var columns = [];");
		if (this.isApp) {
			source.push("columns.push({name: 'name', title: '名称', icon: '/image/icons/d01.png'});");
		}
		else {
			source.push("columns.push({name: 'name', title: '名称', icon: '/image/icons/d01.png', width: 120});");
			source.push("columns.push({name: 'desc', title: '应用信息', icon: '/image/icons/d02.png'});");
		}
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource});");

		this.showDemo(example, demo, source);
	},

	showExample6: function () {
		var example = this.addExample("自定义列标题");

		var columns = [];
		columns.push({name: "name", title: "标题", width: (this.isApp ? null : 120), 
			focusHtmlTitle: "<div style='color:#fff;background-color:#333;'>标题</div>"});
		if (!this.isApp) {
			columns.push({name: "desc", title: "应用信息", 
				focusHtmlTitle: "<div style='color:red;'>应用信息</div>"});
		}

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData}));

		var source = [];
		source.push("var columns = [];");
		if (this.isApp) {
			source.push("columns.push({\n\tname: 'name', title: '标题', \n\tfocusHtmlTitle: '<div " +
				"style=\"color:#fff;background-color:#333;\">标题</div>'\n});");
		}
		else {
			source.push("columns.push({\n\tname: 'name', title: '标题', width: 120, \n\tfocusHtmlTitle: '<div " +
				"style=\"color:#fff;background-color:#333;\">标题</div>'\n});");
			source.push("columns.push({\n\tname: 'desc', title: '应用信息', \n\tfocusHtmlTitle: '<div " +
				"style=\"color:red;\">应用信息</div>'\n});");
		}
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource});");

		this.showDemo(example, demo, source);
	},

	showExample6_1: function () {
		var example = this.addExample("自定义列标题（headRenderer）");
		var columns = [];
		columns.push({name: "name", title: "标题", width: (this.isApp ? null : 120), sortable: true, filter: true});
		if (!this.isApp)
			columns.push({name: "desc", title: "应用信息"});

		var _isApp = this.isApp;
		var myHeadRenderer = function (column, index) {
			var $ = $ || VRender.$;
			var isApp = (typeof _isApp != "undefined") ? _isApp : VRender.ENV.isApp;
			var view = $("<div></div>").text(column.title);
			view.css({lineHeight: "35px", color: "#fff", backgroundColor: "#08bcf3", paddingLeft: "10px"});
			if (isApp)
				view.css("lineHeight", "0.4rem");
			if (index > 0)
				view.css({borderLeft: "1px solid #fff"});
			return view;
		};

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, headRenderer: myHeadRenderer}));

		var source = [];
		source.push("var columns = [];");
		if (this.isApp) {
			source.push("columns.push({name: 'name', title: '标题'});");
		}
		else {
			source.push("columns.push({name: 'name', title: '标题', width: 120});");
			source.push("columns.push({name: 'desc', title: '应用信息'});");
		}
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, headRenderer: myHeadRenderer});");
		source.push("");
		source.push("var _isApp = this.isApp; // 需考虑前端和后端的作用域");
		source.push("function myHeadRenderer (column, index) {");
		source.push("    var $ = $ || VRender.$;");
		source.push("    var isApp = (typeof _isApp != 'undefined') ? _isApp : VRender.ENV.isApp;");
		source.push("    var view = $('<div></div>').text(column.title);");
		source.push("    view.css({color:'#fff', backgroundColor:'#333'});");
		source.push("    if (isApp)");
		source.push("        view.css('lineHeight', '0.4rem');");
		if (!this.isApp) {
			source.push("    if (index > 0)");
			source.push("        view.css({borderLeft: '1px solid #fff'});");
		}
		source.push("    return view;");
		source.push("}");

		this.showDemo(example, demo, source);
	},

	showExample7: function () {
		var example = this.addExample("隐藏标题栏");

		var columns = [];
		columns.push({name: "name", title: "名称"});
		columns.push({name: "type", title: "类型"});
		columns.push({name: "version", title: "版本"});
		if (!this.isApp)
			columns.push({name: "date", title: "发布日期"});
		columns.push({name: "score", title: "评分"});

		var demo = new UIGroup(this);
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, showHeader: false}));

		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称'});");
		source.push("columns.push({name: 'type', title: '类型'});");
		source.push("columns.push({name: 'version', title: '版本'});");
		if (!this.isApp)
			source.push("columns.push({name: 'date', title: '发布日期'});");
		source.push("columns.push({name: 'score', title: '评分'});");
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, showHeader: false});");

		this.showDemo(example, demo, source);
	},

	showExample8: function () {
		var example = this.addExample("渲染器");

		var columns = [];
		columns.push({name: "name", title: "标题"});
		if (!this.isApp) {
			columns.push({name: "type", title: "类型"});
			columns.push({name: "version", title: "版本"});
			columns.push({name: "score", title: "评分"});
			columns.push({name: "date", title: "发布日期"});
		}

		var _isApp = this.isApp;
		var myColumnRenderer = function (column, data) {
			var $ = $ || VRender.$;
			var isApp = (typeof _isApp != "undefined") ? _isApp : VRender.ENV.isApp;
			if (column == "name") {
				var nameView = $("<div></div>");
				var icon = $("<img style='display:inline-block;width:20px;height:20px;vertical-align:top;'/>");
				if (isApp)
					icon.css("width", "0.2rem").css("height", "0.2rem");
				var title = $("<span style='margin-left:5px;'></span>");
				icon.appendTo(nameView).attr("src", data.icon);
				title.appendTo(nameView).text(data.title);
				return nameView;
			}
			else if (column == "version")
				return "V" + data.version;
			else if (column == "date")
				return Utils.toDateString(Utils.toDate(data.date), "yyyy年MM月dd日");
			else if (column == "score")
				return data.score.toFixed(2) + "分";
		};

		var demo = new UIGroup(this);
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, columnRenderer: myColumnRenderer}));

		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '标题'});");
		if (!this.isApp) {
			source.push("columns.push({name: 'type', title: '类型'});");
			source.push("columns.push({name: 'version', title: '版本'});");
			source.push("columns.push({name: 'score', title: '评分'});");
			source.push("columns.push({name: 'date', title: '发布日期'});");
		}
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, columnRenderer: myColumnRenderer});");
		source.push("");
		source.push("var _isApp = this.isApp; // 需考虑前端和后端的作用域");
		source.push("function myColumnRenderer (columnName, data) {");
		source.push("    var $ = $ || VRender.$;");
		source.push("    var isApp = (typeof _isApp != 'undefined') ? _isApp : VRender.ENV.isApp;");
		source.push("    if (columnName == 'name') {");
		source.push("        var nameView = $('<div></div>');");
		source.push("        var icon = $('<img style=\"display:inline-block;width:20px;height:20px;vertical-align:top;\"/>');");
		source.push("        if (isApp)");
		source.push("            icon.css('width', '0.2rem').css('height', '0.2rem');");
		source.push("        var title = $('<span style=\"margin-left:5px;\"></span>');");
		source.push("        icon.appendTo(nameView).attr('src', data.icon);");
		source.push("        title.appendTo(nameView).text(data.title);");
		source.push("        return nameView;");
		source.push("    }");
		source.push("    else if (columnName == 'version')");
		source.push("        return 'V' + data.version;");
		source.push("    else if (columnName == 'date')");
		source.push("        return Utils.toDateString(Utils.toDate(data.date), 'yyyy年MM月dd日');");
		source.push("    else if (columnName == 'score')");
		source.push("    	 return data.score.toFixed(2) + '分';");
		source.push("    // else 返回默认渲染方法");
		source.push("}");

		this.showDemo(example, demo, source);
	},

	showExample9: function () {
		var example = this.addExample("列扩展");

		var columns = [];
		columns.push({name: "name", title: "名称"});
		columns.push({name: "type", title: "类型"});
		if (!this.isApp)
			columns.push({name: "version", title: "版本"});
		columns.push({name: "score", title: "评分", sortable: true});
		columns.push({name: "desc", title: "应用信息", expand: true});
		columns.push({name: "date", title: "发布日期", expand: true});

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, chkbox: true, expandcols: 1}));


		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称'});");
		source.push("columns.push({name: 'type', title: '类型'});");
		if (!this.isApp)
			source.push("columns.push({name: 'version', title: '版本'});");
		source.push("columns.push({name: 'score', title: '评分'});");
		source.push("columns.push({name: 'desc', title: '应用信息', expand: true});");
		source.push("columns.push({name: 'date', title: '发布日期', expand: true});");
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, expandcols: 1});");

		this.showDemo(example, demo, source);
	},

	showExample9_1: function () {
		var example = this.addExample("列扩展（使用expandRenderer）");

		var columns = [];
		columns.push({name: "name", title: "名称"});
		columns.push({name: "type", title: "类型"});
		if (!this.isApp)
			columns.push({name: "version", title: "版本"});
		columns.push({name: "score", title: "评分"});
		if (!this.isApp)
			columns.push({name: "date", title: "发布日期"});
		columns.push({name: "desc", title: "应用信息", expand: true});

		var myExpandRenderer = function (data) {
			var view = $("<div style='padding-left:30px;'></div>");
			var icon = $("<img style='position:absolute;width:20px;height:20px;left:0px;top:0px;'/>");
			var title = $("<div style='font-size: 16px;'></div>");
			var desc = $("<div style='margin-top:5px;color:#999;font-size:14px;'></div>");

			if (VRender.ENV.isApp) {
				view.css("paddingLeft", "0.3rem");
				icon.css("width", "0.2rem").css("height", "0.2rem");
				title.css("fontSize", "0.16rem");
				desc.css("fontSize", "0.14rem");
			}

			icon.appendTo(view).attr("src", data.icon);
			title.appendTo(view).text(data.title);
			desc.appendTo(view).text(data.desc);

			return view;
		};

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, expandRenderer: myExpandRenderer}));


		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称'});");
		source.push("columns.push({name: 'type', title: '类型'});");
		if (!this.isApp)
			source.push("columns.push({name: 'version', title: '版本'});");
		source.push("columns.push({name: 'score', title: '评分'});");
		if (!this.isApp)
			source.push("columns.push({name: 'date', title: '发布日期'});");
		source.push("columns.push({name: 'desc', title: '应用信息', expand: true});");
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, expandRenderer: myExpandRenderer});");
		source.push("");
		source.push("// 扩展对象只会在前端渲染，这里不需要考虑前后端适配");
		source.push("function myExpandRenderer (data) {");
		source.push("    var isApp = VRender.ENV.isApp;");
		source.push("    var view = $('<div style=\"padding-left:30px;\"></div>');");
		source.push("    var icon = $('<img style=\"position:absolute;width:20px;height:20px;left:0px;top:0px;\"/>');");
		source.push("    var title = $('<div style=\"font-size:16px;\"></div>');");
		source.push("    var desc = $('<div style=\"margin-top:5px;color:#999;font-size:14px;\"></div>');");
		source.push("");
		source.push("    if (VRender.ENV.isApp) {");
		source.push("        view.css('paddingLeft', '0.3rem');");
		source.push("        icon.css('width', '0.2rem').css('height', '0.2rem');");
		source.push("        title.css('fontSize', '0.16rem');");
		source.push("        desc.css('fontSize', '0.14rem');");
		source.push("    }");
		source.push("");
		source.push("    icon.appendTo(view).attr('src', data.icon);");
		source.push("    title.appendTo(view).text(data.title);");
		source.push("    desc.appendTo(view).text(data.desc);");
		source.push("");
		source.push("    return view;");
		source.push("}");

		this.showDemo(example, demo, source);
	},

	showExample10: function () {
		var example = this.addExample("样式");

		var columns = [];
		columns.push({name: "name", title: "名称"});
		columns.push({name: "type", title: "类型"});
		columns.push({name: "version", title: "版本"});
		columns.push({name: "score", title: "评分"});
		if (!this.isApp)
			columns.push({name: "date", title: "发布日期"});

		var myRowStyleFunction = function (data, index) {
			if (index == 1)
				return {color: "#fff", backgroundColor: "#03A9F4"};
		};

		var myCellStyleFunction = function (columnName, data, index) {
			if (columnName == "score" && data.score > 4.5)
				return {color: "#f00"};
			if (columnName == "name" && index == 3)
				return {color: "#fff", backgroundColor: "#ffb100"};
		};

		var demo = new UIGroup(this);
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, 
			rowStyleFunction: myRowStyleFunction, cellStyleFunction: myCellStyleFunction}));

		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称'});");
		source.push("columns.push({name: 'type', title: '类型'});");
		source.push("columns.push({name: 'version', title: '版本'});");
		source.push("columns.push({name: 'score', title: '评分'});");
		if (!this.isApp)
			source.push("columns.push({name: 'date', title: '发布日期'});");
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, " +
			"\n\trowStyleFunction: myRowStyleFunction, cellStyleFunction: myCellStyleFunction});");
		source.push("");
		source.push("function myRowStyleFunction (data, index) {");
		source.push("    if (index == 1)");
		source.push("        return {color: '#fff', backgroundColor: '#03A9F4'};");
		source.push("}");
		source.push("");
		source.push("function myCellStyleFunction (columnName, data, index) {");
		source.push("    if (columnName == 'score' && data.score > 4.5)");
		source.push("        return {color: '#f00'};");
		source.push("    if (columnName == 'name' && index == 3)");
		source.push("        return {color: '#fff', backgroundColor: '#ffb100'};");
		source.push("}");

		this.showDemo(example, demo, source);
	},

	showExample11: function () {
		var example = this.addExample("高度和宽度");

		var demo = new UIGroup(this);

		var columns = [];
		columns.push({name: 'name', title: '名称'});
		columns.push({name: 'date', title: '发布日期', width: 100});
		demo.append(new UIDatagrid(this, {columns: columns, data: exampleData, height: 200}));

		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称'});");
		source.push("columns.push({name: 'date', title: '发布日期', width: 100});");
		source.push("new UIDatagrid(context, {columns: columns, data: dataSource, height: 200});");

		this.showDemo(example, demo, source);
	},

	showExample12: function () {
		var example = this.addExample("异步数据（分页加载）");

		var demo = new UIGroup(this, {gap: 10});

		var columns = [];
		columns.push({name: 'c1', title: 'Column 1'});
		columns.push({name: 'c2', title: 'Column 2'});
		columns.push({name: 'c3', title: 'Column 3'});
		columns.push({name: 'c4', title: 'Column 4'});
		if (!this.isApp)
			columns.push({name: 'c5', title: 'Column 5'});

		var grid = demo.add(new UIDatagrid(this, {columns: columns, apiName: "data.component.items2"}));
		var pager = demo.add(new UIPaginator(this, {size: 10}));
		grid.setPaginator(pager);

		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'c1', title: 'Column 1'});");
		source.push("columns.push({name: 'c2', title: 'Column 2'});");
		source.push("columns.push({name: 'c3', title: 'Column 3'});");
		source.push("columns.push({name: 'c4', title: 'Column 4'});");
		if (!this.isApp)
			source.push("columns.push({name: 'c5', title: 'Column 5'});");
		source.push("");
		source.push("var pager = new UIPaginator(context, {size: 10});");
		source.push("new UIDatagrid(context, {columns: columns, apiName: 'data.component.items2', paginator: pager});");

		this.showDemo(example, demo, source);
	},

	showExample13: function () {
		var example = this.addExample("空表格");

		var columns = [];
		columns.push({name: "name", title: "名称"});
		columns.push({name: "type", title: "类型"});
		columns.push({name: "version", title: "版本"});
		columns.push({name: "score", title: "评分"});
		columns.push({name: "date", title: "发布日期"});

		var demo = new UIGroup(this, {gap: 10});
		demo.append(new UIDatagrid(this, {columns: columns}));
		demo.append(new UIDatagrid(this, {columns: columns, showHeader: false}));
		demo.append(new UIDatagrid(this, {columns: columns, emptyText: "你还没有相关信息"}));

		var source = [];
		source.push("var columns = [];");
		source.push("columns.push({name: 'name', title: '名称'});");
		source.push("columns.push({name: 'type', title: '类型'});");
		source.push("columns.push({name: 'version', title: '版本'});");
		source.push("columns.push({name: 'score', title: '评分'});");
		source.push("columns.push({name: 'date', title: '发布日期'});");
		source.push("");
		source.push("new UIDatagrid(context, {columns: columns});");
		source.push("new UIDatagrid(context, {columns: columns, showHeader: false});");
		source.push("new UIDatagrid(context, {columns: columns, emptyText: '你还没有相关信息'});");

		this.showDemo(example, demo, source);
	},

	showExampleData: function () {
		var example = this.addExample("以上数据结构如下");

		var source = [];
		source = JSON.stringify(exampleData, null, "  ");

		this.showDemo(example, null, source);
	}
});
