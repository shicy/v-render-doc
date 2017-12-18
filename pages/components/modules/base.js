/**
 * 模块基础
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-13
 */

var Prism = require("prismjs");
var VRender = require(__vrender);


var Utils = VRender.Utils;
var UIGroup = VRender.UIGroup;
var UIText = VRender.UIText;

var BaseModule = VRender.UIView.extend(module, {
	doInit: function () {
		BaseModule.__super__.doInit.call(this);
		this.isApp = this.isRenderAsApp();
	},

	// 获取组件名称
	getCompName: function () {
		// 子类继承
	},

	// 获取组件子标题名称
	getSubName: function () {
		// 子类继承
	},

	// 获取组件描述信息，返回html源码
	getDescription: function () {
		// 子类继承
	},

	renderView: function () {
		BaseModule.__super__.renderView.call(this);
		this.$el.addClass("comp-base");
		this.renderCompInfos(this.$el);
		this.renderExamples();
		this.renderProperties();
		this.renderMethods();
		this.renderEvents();
	},

	// 渲染组件基本信息
	renderCompInfos: function (target) {
		var infos = new UIGroup(this, {cls: "compinfos"});

		var title = infos.add(new UIGroup(this, {cls: "title"}));
		title.append(new UIText(this, {cls: "name", text: this.getCompName()}));
		title.append(new UIText(this, {cls: "subname", text: this.getSubName()}));

		var description = this.getDescription();
		if (Utils.isNotBlank(description))
			infos.append(VRender.$({cls: "desc", html: description}));

		infos.render(target);
	},

	renderExamples: function () {
		//
	},

	// 显示组件属性列表
	renderProperties: function () {
		var properties = Utils.toArray(this.getProperties());
		if (properties && properties.length > 0) {
			var target = VRender.$(".tableview.properties").appendTo(this.$el);
			// target.append("<div class='title'>属性</div>");
			var tableview = VRender.$("table").appendTo(target);
			tableview.write("<thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>");
			Utils.each(properties, function (data) {
				var item = VRender.$("tr").appendTo(tableview);
				item.write("<td>" + data.name + "</td>");
				item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
				item.write("<td>" + (data.datatype || "-") + "</td>");
				item.write("<td>" + (data.value || "-") + "</td>");
			});
		}
	},

	// 显示接口
	renderMethods: function (methods) {
		var methods = Utils.toArray(this.getMethods());
		if (methods && methods.length > 0) {
			var target = VRender.$(".tableview.methods").appendTo(this.$el);
			// target.append("<div class='title'>方法</div>");
			var tableview = VRender.$("table").appendTo(target);
			tableview.write("<thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>适用</th></tr></thead>");
			Utils.each(methods, function (data) {
				var item = VRender.$("tr").appendTo(tableview);
				item.write("<td>" + data.name + "</td>");
				item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
				item.write("<td>" + (data.params || "无") + "</td>");
				item.write("<td>" + (data.scope == 1 ? "仅后端" : (data.scope == 2 ? "仅前端" : "前端和后端")) + "</td>");
			});
		}
	},

	// 显示事件
	renderEvents: function (events) {
		var events = Utils.toArray(this.getEvents());
		if (events && events.length > 0) {
			var target = VRender.$(".tableview.events").appendTo(this.$el);
			// target.append("<div class='title'>事件</div>");
			var tableview = VRender.$("table").appendTo(target);
			tableview.write("<thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead>");
			Utils.each(events, function (data) {
				var item = VRender.$("tr").appendTo(tableview);
				item.write("<td>" + data.name + "</td>");
				item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
				item.write("<td>" + (data.result || "无") + "</td>");
			});
		}
	},

	// 渲染警告信息窗口
	// type：warn, danger, 默认danger
	showMessage: function (target, title, text, type) {
		if (!/danger|warn|info/.test(type))
			type = "danger";

		var msgbox = VRender.$("<div class='msgbox'></div>").appendTo(target || this.$el);
		msgbox.addClass(type);

		if (Utils.isNotBlank(title))
			msgbox.write("<div class='title'>" + title + "</div>");
		if (Utils.isNotBlank(text))
			msgbox.write("<div class='msg'>" + text + "</div>");

		return msgbox;
	},

	// 渲染实例章节
	addExample: function (title, description) {
		var example = VRender.$("<div class='example'></div>").appendTo(this.$el);
		if (Utils.isNotBlank(title))
			example.write("<div class='title'>" + title + "</div>");
		if (Utils.isNotBlank(description))
			example.write("<div class='desc'>" + description + "</div>");
		return example;
	},

	// 展示组件事例
	showDemo: function (target, demoView, source, open) {
		var demo = VRender.$("<div class='demo'></div>").appendTo(target || this.$el);
		if (Utils.isNotBlank(demoView)) {
			new UIGroup(this, {cls: "preview"}).append(demoView).render(demo);
		}
		if (Utils.isNotBlank(source)) {
			if (Utils.isArray(source))
				source = source.join("\n");
			source = Prism.highlight(source, Prism.languages.javascript);
			var sourceTarget = VRender.$("<div class='source'></div>").appendTo(demo);
			sourceTarget.write("<pre>" + source + "</pre><button class='morebtn'></button>");
			if (open)
				sourceTarget.addClass("open");
		}
	},

	getProperties: function () {
		// 获取组件相关的属性列表
	},

	getMethods: function () {
		// 获取组件相关的方法列表
	},

	getEvents: function () {
		// 获取组件相关的事件信息
	},

	getMapData: function () {
		// 禁止默认viewData绑定
	}
});
