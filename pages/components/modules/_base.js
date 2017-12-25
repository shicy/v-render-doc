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
			properties.sort(function (a, b) { return a.name > b.name ? 1 : -1; });
			var target = VRender.$(".tableview.properties").appendTo(this.$el);
			// target.append("<div class='title'>属性</div>");
			var tableview = VRender.$("table").appendTo(target);
			if (this.isApp) {
				tableview.write("<thead><tr><th>属性</th></tr></thead>");
				Utils.each(properties, function (data) {
					var item = VRender.$("tr").appendTo(tableview);
					var content = VRender.$("td").appendTo(item);
					content.write("<div class='name'>" + data.name + (data.datatype ? (": " + data.datatype) : "") + "</div>");
					content.write("<div class='status'>默认值：" + (data.value || "无") + "</div>");
					content.write("<div class='desc'>" + (data.desc || "无") + "</div>");
				});
			}
			else {
				tableview.write("<thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>");
				Utils.each(properties, function (data) {
					var item = VRender.$("tr").appendTo(tableview);
					item.write("<td>" + data.name + "</td>");
					item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
					item.write("<td>" + (data.datatype || "-") + "</td>");
					item.write("<td>" + (data.value || "-") + "</td>");
				});
			}
		}
	},

	// 显示接口
	renderMethods: function (methods) {
		var methods = Utils.toArray(this.getMethods());
		if (methods && methods.length > 0) {
			methods.sort(function (a, b) { return a.name > b.name ? 1 : -1; });
			var target = VRender.$(".tableview.methods").appendTo(this.$el);
			// target.append("<div class='title'>方法</div>");
			var tableview = VRender.$("table").appendTo(target);
			if (this.isApp) {
				tableview.write("<thead><tr><th>方法</th></tr></thead>");
				Utils.each(methods, function (data) {
					var item = VRender.$("tr").appendTo(tableview);
					var content = VRender.$("td").appendTo(item);
					content.write("<div class='name'>" + data.name + "(" + (data.params || "") + ")</div>");
					var scope = data.scope == 1 ? "仅后端" : (data.scope == 2 ? "仅前端" : "前端和后端");
					content.write("<div class='status'>适用：" + scope + "</div>");
					content.write("<div class='desc'>" + (data.desc || "无") + "</div>");
				});
			}
			else {
				tableview.write("<thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>适用</th></tr></thead>");
				Utils.each(methods, function (data) {
					var item = VRender.$("tr").appendTo(tableview);
					item.write("<td>" + data.name + "</td>");
					item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
					item.write("<td>" + (data.params || "无") + "</td>");
					item.write("<td>" + (data.scope == 1 ? "仅后端" : (data.scope == 2 ? "仅前端" : "前端和后端")) + "</td>");
				});
			}
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

	// 获取组件相关的属性列表
	getProperties: function () {
		var props = [];
		var description;

		description = "组件对应的HTML标签id值，如：<code>&lt;div id='comp-id'&gt;&lt;/div&gt;</code>";
		props.push({name: "id", datatype: "string", desc: description});

		description = "组件对应的HTML标签class值，如：<code>&lt;div class='comp-cls'&gt;&lt;/div&gt;</code>";
		props.push({name: "cls", datatype: "string", desc: description});

		description = "同<code>cls</code>属性，优先级 className > clsName > cls。";
		props.push({name: "clsName", datatype: "string", desc: description});
		props.push({name: "className", datatype: "string", desc: description});

		description = "组件对应的HTML标签name值，如：<code>&lt;div name='comp-name'&gt;&lt;/div&gt;</code>";
		props.push({name: "name", datatype: "string", desc: description});

		description = "组件对应的标签名称，如：设置<code>{tagName: 'p'}</code>，组件对应标签为<code>&lt;p&gt;&lt;/p&gt;</code>";
		props.push({name: "tag", datatype: "string", desc: description, value: "div"});

		description = "同<code>tag</code>属性，优先级 tagName > tag。";
		props.push({name: "tagName", datatype: "string", desc: description});

		description = "异步数据接口名称，前端组件渲染完成后，通过该接口加载数据。";
		props.push({name: "apiName", datatype: "name", desc: description});

		description = "异步数据接口参数";
		props.push({name: "apiParams", datatype: "object", desc: description});

		description = "前端是否自动加载异步数据，否则可以手动调用组件的<code>load()</code>方法加载数据。";
		props.push({name: "autload", datatype: "boolean", desc: description, value: "true"});

		if (this.canDisabled()) {
			description = "是否禁用组件，被禁用的组件默认添加样式<code>disabled</code>和属性<code>disabled</code>。<br>" +
				"如：<code>&lt;div class='disabled' disabled='disabled'&gt;&lt;/div&gt;</code>";
			props.push({name: "disabled", datatype: "boolean", desc: description, value: "false"});
		}

		return props;
	},

	// 获取组件相关的方法列表
	getMethods: function () {
		var methods = [];
		var description;

		methods.push({name: "getViewId"});

		return methods;
	},

	getEvents: function () {
		// 获取组件相关的事件信息
	},

	getMapData: function () {
		// 禁止默认viewData绑定
	},

	canDisabled: function () {
		return true;
	}
	
});
