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
			properties.sort(this.sortFunction);
			var target = VRender.$(".tableview").appendTo(this.$el).attr("name", "properties");
			// target.append("<div class='title'>属性</div>");
			var tableview = VRender.$("table").appendTo(target);

			var isApp = this.isApp;
			if (isApp)
				tableview.write("<thead><tr><th>属性</th></tr></thead>");
			else
				tableview.write("<thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>");
				
			Utils.each(properties, function (data) {
				var item = VRender.$("tr").appendTo(tableview);
				if (data.extend)
					item.addClass("extend");
				if (isApp) {
					var content = VRender.$("td").appendTo(item);
					content.write("<div class='name'>" + data.name + (data.datatype ? (": " + data.datatype) : "") + "</div>");
					content.write("<div class='status'>默认值：" + (data.value || "无") + "</div>");
					content.write("<div class='desc'>" + (data.desc || "无") + "</div>");
				}
				else {
					item.write("<td>" + data.name + "</td>");
					item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
					item.write("<td>" + (data.datatype || "-") + "</td>");
					item.write("<td>" + (data.value || "-") + "</td>");
				}
			});

			target.write("<div class='expandbtn'>显示所有（含继承属性）</div>");
		}
	},

	// 显示接口
	renderMethods: function (methods) {
		var methods = Utils.toArray(this.getMethods());
		if (methods && methods.length > 0) {
			methods.sort(this.sortFunction);
			var target = VRender.$(".tableview").appendTo(this.$el).attr("name", "methods");
			// target.append("<div class='title'>方法</div>");
			var tableview = VRender.$("table").appendTo(target);

			var isApp = this.isApp;
			if (isApp)
				tableview.write("<thead><tr><th>方法</th></tr></thead>");
			else 
				tableview.write("<thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>适用</th></tr></thead>");
				
			Utils.each(methods, function (data) {
				var item = VRender.$("tr").appendTo(tableview);
				if (data.extend)
					item.addClass("extend");
				var scope = data.scope == 1 ? "仅后端" : (data.scope == 2 ? "仅前端" : "前端和后端");
				if (isApp) {
					var content = VRender.$("td").appendTo(item);
					content.write("<div class='name'>" + data.name + "(" + (data.params || "") + ")</div>");
					content.write("<div class='status'>适用：" + scope + "</div>");
					content.write("<div class='desc'>" + (data.desc || "无") + "</div>");
				}
				else {
					item.write("<td>" + data.name + "</td>");
					item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
					item.write("<td>" + (data.params || "无") + "</td>");
					item.write("<td>" + scope + "</td>");
				}
			});

			target.write("<div class='expandbtn'>显示所有（含继承方法）</div>");
		}
	},

	// 显示事件
	renderEvents: function (events) {
		var events = Utils.toArray(this.getEvents());
		if (events && events.length > 0) {
			events.sort(this.sortFunction);
			var target = VRender.$(".tableview").appendTo(this.$el).attr("name", "events");
			// target.append("<div class='title'>事件</div>");
			var tableview = VRender.$("table").appendTo(target);

			var isApp = this.isApp;
			if (isApp)
				tableview.write("<thead><tr><th>事件</th></tr></thead>");
			else
				tableview.write("<thead><tr><th>事件</th><th>说明</th><th>返回值</th></tr></thead>");

			Utils.each(events, function (data) {
				var item = VRender.$("tr").appendTo(tableview);
				if (data.extend)
					item.addClass("extend");
				if (isApp) {
					var content = VRender.$("td").appendTo(item);
					content.write("<div class='name'>" + data.name + "</div>");
					content.write("<div class='status'>返回值：" + (data.result || "无") + "</div>");
					content.write("<div class='desc'>" + (data.desc || "无") + "</div>");
				}
				else {
					item.write("<td>" + data.name + "</td>");
					item.write("<td>" + (data.desc || "&nbsp;") + "</td>");
					item.write("<td>" + (data.result || "无") + "</td>");
				}
			});

			target.write("<div class='expandbtn'>显示所有（含继承事件）</div>");
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
		props.push({name: "id", datatype: "string", desc: description, extend: 1});

		description = "组件对应的HTML标签class值，如：<code>&lt;div class='comp-cls'&gt;&lt;/div&gt;</code>";
		props.push({name: "cls", datatype: "string", desc: description, extend: 1});

		description = "同<code>cls</code>属性，优先级 className > clsName > cls。";
		props.push({name: "clsName", datatype: "string", desc: description, extend: 1});
		props.push({name: "className", datatype: "string", desc: description, extend: 1});

		description = "组件对应的HTML标签name值，如：<code>&lt;div name='comp-name'&gt;&lt;/div&gt;</code>";
		props.push({name: "name", datatype: "string", desc: description, extend: 1});

		description = "组件对应的标签名称，如：设置<code>{tagName: 'p'}</code>，组件对应标签为<code>&lt;p&gt;&lt;/p&gt;</code>";
		props.push({name: "tag", datatype: "string", desc: description, value: "div", extend: 1});

		description = "同<code>tag</code>属性，优先级 tagName > tag。";
		props.push({name: "tagName", datatype: "string", desc: description, extend: 1});

		description = "组件样式，有点类似于<code>cls</code>属性，但更符合组件业务上的定义。";
		props.push({name: "style", datatype: "string", desc: description, extend: 1});

		description = "全局组件名称绑定，使用<code>ref</code>可以减少前端组件查找消耗。<br/>" +
			"在前端可以通过<code>VRender.$refs.[refName]</code>直接获取组件。";
		props.push({name: "ref", datatype: "string", desc: description, extend: 1});

		description = "组件是否可见，值为<code>false</code>或<code>gone</code>时组件被隐藏（即<code>display: none</code>），" +
			"值为<code>hidden</code>时组件不可见（不可见但占位，即<code>visibility: hidden</code>）。";
		props.push({name: "visible", datatype: "string", desc: description, extend: 1});

		if (this.isDataSupport()) {
			description = this.getDataDescription() || "";
			props.push({name: "data", datatype: "Array", desc: description || "组件绑定的数据或数据集", 
				extend: !description ? 1 : 0});

			description = "数据转换器，将原始数据转换为组件标准数据，特别是异步加载的数据可以通过该方法转换后再显示。<br/>" +
				"如：<code>function (data, index) { return new_data; }</code>";
			props.push({name: "dataAdapter", datatype: "function", desc: description, extend: 1});

			description = "数据绑定映射方法，将数据以<code>data-*</code>形式绑定到选项上。<br/>" +
				"如：<code>function (data) { return {id: data.id}; }</code>，默认绑定<code>id</code>、<code>code</code>、" +
				"<code>name</code>、<code>value</code>、<code>label</code>、<code>text</code>、<code>status</code>属性。<br/>" +
				"注：绑定的属性可以在前端获取到，如果未设置该方法，整个数据对象将被输出到前端，为保证数据的私密性，可以通过该方法过滤属性。";
			props.push({name: "dataMapper", datatype: "function", desc: description, extend: 1});
		}

		if (this.isApiSupport()) {
			description = "异步数据接口名称，前端组件渲染完成后，通过该接口加载数据。";
			props.push({name: "apiName", datatype: "name", desc: description, extend: 1});

			description = "异步数据接口参数";
			props.push({name: "apiParams", datatype: "object", desc: description, extend: 1});

			description = "前端是否自动加载异步数据，否则可以手动调用组件的<code>load()</code>方法加载数据。";
			props.push({name: "autload", datatype: "boolean", desc: description, value: "true", extend: 1});
		}

		if (this.isDisableSupport()) {
			description = "是否禁用组件，被禁用的组件默认添加样式<code>disabled</code>和属性<code>disabled</code>。<br>" +
				"如：<code>&lt;div class='disabled' disabled='disabled'&gt;&lt;/div&gt;</code>";
			props.push({name: "disabled", datatype: "boolean", desc: description, value: "false", extend: 1});
		}

		return props;
	},

	getDataDescription: function () {
		// return "组件绑定的数据或数据集";
	},

	// 获取组件相关的方法列表
	getMethods: function () {
		var methods = [];
		var description, params;

		description = "组件编号，参见属性<code>id</code>。";
		methods.push({name: "getId", desc: "获取" + description, scope: 1, extend: 1});
		methods.push({name: "setId", desc: "设置" + description, params: "value: String", scope: 1, extend: 1});

		description = "组件名称，参见属性<code>name</code>。";
		methods.push({name: "getName", desc: "获取" + description, scope: 1, extend: 1});
		methods.push({name: "setName", desc: "设置" + description, params: "value: String", scope: 1, extend: 1});

		description = "组件HTML标签，参见属性<code>tag</code>。";
		methods.push({name: "getTagName", desc: "获取" + description, scope: 1, extend: 1});
		methods.push({name: "setTagName", desc: "设置" + description, params: "value: String", scope: 1, extend: 1});

		description = "组件类名称，参见属性<code>cls</code>。";
		methods.push({name: "getClassName", desc: "获取" + description, scope: 1, extend: 1});
		methods.push({name: "setClassName", desc: "设置" + description, params: "value: String", scope: 1, extend: 1});

		description = "组件样式，参见属性<code>style</code>。";
		methods.push({name: "getStyle", desc: "获取" + description, scope: 1, extend: 1});
		methods.push({name: "setStyle", desc: "设置" + description, params: "value: String", scope: 1, extend: 1});

		description = "组件绑定名称，参见属性<code>ref</code>。";
		methods.push({name: "getRefName", desc: "获取" + description, scope: 1, extend: 1});
		methods.push({name: "setRefName", desc: "设置" + description, params: "value: String", scope: 1, extend: 1});

		description = "组件可见性定义，参见属性<code>visible</code>。";
		methods.push({name: "getVisible", desc: "获取" + description, scope: 1, extend: 1});
		methods.push({name: "setVisible", desc: "设置" + description, params: "value: *", scope: 1, extend: 1});

		methods.push({name: "isRenderAsApp", desc: "组件是否在应用模式下渲染（一般指移动端渲染）", extend: 1});
		methods.push({name: "isRenderAsIphone", desc: "组件是否在 iPhone 手机渲染", extend: 1});
		methods.push({name: "isRenderAsRem", desc: "组件是否使用 rem 度量单位（否则默认为 px）", extend: 1});

		if (this.isDataSupport()) {
			description = "获取组件数据或数据集，数据已经过<code>dataAdapter</code>转换。";
			methods.push({name: "getViewData", desc: description, scope: 1, extend: 1});
			methods.push({name: "getData", desc: description, scope: 2, extend: 1});
			methods.push({name: "setViewData", desc: "设置组件数据或数据集", params: "data: *", scope: 1, extend: 1});
			methods.push({name: "setData", desc: "设置组件数据或数据集", params: "data: *", scope: 2, extend: 1});
			
			description = "组件数据转换器，参见属性<code>dataAdapter</code>。";
			methods.push({name: "getDataAdapter", desc: "获取" + description, extend: 1});
			methods.push({name: "setDataAdapter", desc: "设置" + description, params: "value: function", extend: 1});

			description = "组件数据映射方法，参见属性<code>dataMapper</code>。";
			methods.push({name: "getDataMapper", desc: "获取" + description, extend: 1});
			methods.push({name: "setDataMapper", desc: "设置" + description, params: "value: function", extend: 1});
		}

		if (this.isApiSupport()) {
			description = "组件异步数据接口名称，参见属性<code>apiName</code>。";
			methods.push({name: "getApiName", desc: "获取" + description, scope: 1, extend: 1});
			methods.push({name: "setApiName", desc: "设置" + description, params: "value: String", scope: 1, extend: 1});

			description = "组件异步数据接口参数，参见属性<code>apiParams</code>。";
			methods.push({name: "getApiParams", desc: "获取" + description, scope: 1, extend: 1});
			methods.push({name: "setApiParams", desc: "设置" + description, params: "value: Object", scope: 1, extend: 1});

			description = "组件是否自动加载异步数据，参见属性<code>autload</code>。";
			methods.push({name: "isAutoLoad", desc: "获取" + description, scope: 1, extend: 1});
			methods.push({name: "setAutoLoad", desc: "设置" + description, params: "value: Boolean", scope: 1, extend: 1});

			description = "异步数据加载方法，加载完成后台调用<code>setData()</code>方法，并触发<code>loaded</code>事件。";
			params = "api: String, params: Object, callback: function";
			methods.push({name: "load", desc: description, params: params, scope: 2, extend: 1});
			description = "刷新，按上一次的请求重新请求一次，接口和参数一致。";
			methods.push({name: "reload", desc: description, params: "callback: function", scope: 2, extend: 1});
		}

		if (this.isDisableSupport()) {
			methods.push({name: "isEnabled", desc: "获取组件是否启用，参见属性<code>disabled</code>", extend: 1});
			description = "设置组件是否启用，当值为：<code>false</code>，<code>0</code>，<code>''</code>，<code>no</code>时组件禁用，否则启用组件。";
			methods.push({name: "setEnabled", desc: description, params: "value: *", extend: 1});
		}

		return methods;
	},

	getEvents: function () {
		var events = [];

		if (this.isApiSupport()) {
			events.push({name: "loaded", desc: "异步数据加载成功事件", extend: 1});
		}

		return events;
	},

	getMapData: function () {
		// 禁止默认viewData绑定
	},

	sortFunction: function (a, b) {
		// if (a.extend || b.extend) {
		// 	if (!a.extend)
		// 		return -1;
		// 	if (!b.extend)
		// 		return 1;
		// 	if (a.extend != b.extend)
		// 		return a.extend - b.extend;
		// }
		return a.name > b.name ? 1 : -1;
	},

	isDataSupport: function () {
		return true;
	},

	isApiSupport: function () {
		return true;
	},

	isDisableSupport: function () {
		return true;
	}
	
});
