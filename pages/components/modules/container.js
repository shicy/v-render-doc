/**
 * 边框容器
 * @author shicy <shicy85@163.com>
 * Created on 2017-12-18
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIContainer = VRender.UIContainer;

var ContainerModule = BaseModule.extend(module, {
	className: "comp-container",

	getCompName: function () {
		return "Container";
	},

	getSubName: function () {
		return "边框容器";
	},

	getDescription: function () {
		return "一个容器，用来设置边框、背景、宽带、高度等样式。";
	},

	getProperties: function () {
		var properties = ContainerModule.__super__.getProperties.call(this) || [];
		properties.push({name: "display", desc: "同 css 之 <code>display</code>样式"});
		properties.push({name: "position", desc: "同 css 之 <code>position</code>样式"});
		properties.push({name: "width", desc: "同 css 之 <code>width</code>样式"});
		properties.push({name: "minWidth", desc: "同 css 之 <code>min-width</code>样式"});
		properties.push({name: "maxWidth", desc: "同 css 之 <code>max-width</code>样式"});
		properties.push({name: "height", desc: "同 css 之 <code>height</code>样式"});
		properties.push({name: "minHeight", desc: "同 css 之 <code>min-height</code>样式"});
		properties.push({name: "maxHeight", desc: "同 css 之 <code>max-height</code>样式"});
		properties.push({name: "color", desc: "同 css 之 <code>color</code>样式"});
		properties.push({name: "fontSize", desc: "同 css 之 <code>font-size</code>样式"});
		properties.push({name: "textAlign|align", desc: "同 css 之 <code>text-align</code>样式"});
		properties.push({name: "padding", desc: "同 css 之 <code>padding</code>样式"});
		properties.push({name: "paddingLeft", desc: "同 css 之 <code>padding-left</code>样式"});
		properties.push({name: "paddingRight", desc: "同 css 之 <code>padding-right</code>样式"});
		properties.push({name: "paddingTop", desc: "同 css 之 <code>padding-top</code>样式"});
		properties.push({name: "paddingBottom", desc: "同 css 之 <code>padding-bottom</code>样式"});
		properties.push({name: "margin", desc: "同 css 之 <code>margin</code>样式"});
		properties.push({name: "marginLeft", desc: "同 css 之 <code>margin-left</code>样式"});
		properties.push({name: "marginRight", desc: "同 css 之 <code>margin-right</code>样式"});
		properties.push({name: "marginTop", desc: "同 css 之 <code>margin-top</code>样式"});
		properties.push({name: "marginBottom", desc: "同 css 之 <code>margin-bottom</code>样式"});
		properties.push({name: "border", desc: "同 css 之 <code>border</code>样式"});
		properties.push({name: "borderRadius", desc: "同 css 之 <code>border-radius</code>样式"});
		properties.push({name: "borderColor", desc: "同 css 之 <code>border-color</code>样式"});
		properties.push({name: "borderWidth", desc: "同 css 之 <code>border-width</code>样式"});
		properties.push({name: "borderLeft", desc: "同 css 之 <code>border-left</code>样式"});
		properties.push({name: "borderRight", desc: "同 css 之 <code>border-right</code>样式"});
		properties.push({name: "borderTop", desc: "同 css 之 <code>border-top</code>样式"});
		properties.push({name: "borderBottom", desc: "同 css 之 <code>border-bottom</code>样式"});
		properties.push({name: "background|bg", desc: "同 css 之 <code>background</code>样式"});
		properties.push({name: "backgroundColor|bgcolor", desc: "同 css 之 <code>background-color</code>样式"});
		properties.push({name: "backgroundImage|image", desc: "同 css 之 <code>background-image</code>样式"});
		properties.push({name: "backgroundSize", desc: "同 css 之 <code>background-size</code>样式"});
		properties.push({name: "backgroundPosition", desc: "同 css 之 <code>background-position</code>样式"});
		properties.push({name: "backgroundRepeat", desc: "同 css 之 <code>background-repeat</code>样式"});
		properties.push({name: "overflow", desc: "同 css 之 <code>overflow</code>样式"});
		properties.push({name: "shadow", desc: "同 css 之 <code>box-shadow</code>样式"});
		properties.push({name: "content", desc: "子组件或视图"});
		properties.push({name: "view", desc: "同<code>content</code>属性，优先级低于content"});
		return properties;
	},

	getMethods: function () {
		var methods = ContainerModule.__super__.getMethods.call(this) || [];
		methods.push({name: "getDisplay", desc: "获取<code>display</code>样式", scope: 1});
		methods.push({name: "setDisplay", desc: "设置<code>display</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getPosition", desc: "获取<code>position</code>样式", scope: 1});
		methods.push({name: "setPosition", desc: "设置<code>position</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getWidth", desc: "获取<code>width</code>样式", scope: 1});
		methods.push({name: "setWidth", desc: "设置<code>width</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMinWidth", desc: "获取<code>min-width</code>样式", scope: 1});
		methods.push({name: "setMinWidth", desc: "设置<code>min-width</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMaxWidth", desc: "获取<code>max-width</code>样式", scope: 1});
		methods.push({name: "setMaxWidth", desc: "设置<code>max-width</code>样式", params: "value: String", scope: 1});
		methods.push({name: "height", desc: "获取<code>height</code>样式", scope: 1});
		methods.push({name: "height", desc: "设置<code>height</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMinHeight", desc: "获取<code>min-height</code>样式", scope: 1});
		methods.push({name: "setMinHeight", desc: "设置<code>min-height</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMaxHeight", desc: "获取<code>max-height</code>样式", scope: 1});
		methods.push({name: "setMaxHeight", desc: "设置<code>max-height</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getColor", desc: "获取<code>color</code>样式", scope: 1});
		methods.push({name: "setColor", desc: "设置<code>color</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getFontSize", desc: "获取<code>font-size</code>样式", scope: 1});
		methods.push({name: "setFontSize", desc: "设置<code>font-size</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getAlign", desc: "获取<code>text-align</code>样式", scope: 1});
		methods.push({name: "setAlign", desc: "设置<code>text-align</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getPadding", desc: "获取<code>padding</code>样式", scope: 1});
		methods.push({name: "setPadding", desc: "设置<code>padding</code>样式", params: "value: String", scope: 1});
		methods.push({name: "setPaddings", desc: "设置<code>padding</code>样式", 
			params: "top: Number, right: Number, bottom: Number, left: Number", scope: 1});
		methods.push({name: "getPaddingLeft", desc: "获取<code>padding-left</code>样式", scope: 1});
		methods.push({name: "setPaddingLeft", desc: "设置<code>padding-left</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getPaddingRight", desc: "获取<code>padding-right</code>样式", scope: 1});
		methods.push({name: "setPaddingRight", desc: "设置<code>padding-right</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getPaddingTop", desc: "获取<code>padding-top</code>样式", scope: 1});
		methods.push({name: "setPaddingTop", desc: "设置<code>padding-top</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getPaddingBottom", desc: "获取<code>padding-bottom</code>样式", scope: 1});
		methods.push({name: "setPaddingBottom", desc: "设置<code>padding-bottom</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMargin", desc: "获取<code>margin</code>样式", scope: 1});
		methods.push({name: "setMargin", desc: "设置<code>margin</code>样式", params: "value: String", scope: 1});
		methods.push({name: "setMargins", desc: "设置<code>margin</code>样式", 
			params: "top: Number, right: Number, bottom: Number, left: Number", scope: 1});
		methods.push({name: "getMarginLeft", desc: "获取<code>margin-left</code>样式", scope: 1});
		methods.push({name: "setMarginLeft", desc: "设置<code>margin-left</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMarginRight", desc: "获取<code>margin-right</code>样式", scope: 1});
		methods.push({name: "setMarginRight", desc: "设置<code>margin-right</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMarginTop", desc: "获取<code>margin-top</code>样式", scope: 1});
		methods.push({name: "setMarginTop", desc: "设置<code>margin-top</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getMarginBottom", desc: "获取<code>margin-bottom</code>样式", scope: 1});
		methods.push({name: "setMarginBottom", desc: "设置<code>margin-bottom</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorder", desc: "获取<code>border</code>样式", scope: 1});
		methods.push({name: "setBorder", desc: "设置<code>border</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorderRadius", desc: "获取<code>border-radius</code>样式", scope: 1});
		methods.push({name: "setBorderRadius", desc: "设置<code>border-radius</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorderColor", desc: "获取<code>border-color</code>样式", scope: 1});
		methods.push({name: "setBorderColor", desc: "设置<code>border-color</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorderWidth", desc: "获取<code>border-width</code>样式", scope: 1});
		methods.push({name: "setBorderWidth", desc: "设置<code>border-width</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorderLeft", desc: "获取<code>border-left</code>样式", scope: 1});
		methods.push({name: "setBorderLeft", desc: "设置<code>border-left</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorderRight", desc: "获取<code>border-right</code>样式", scope: 1});
		methods.push({name: "setBorderRight", desc: "设置<code>border-right</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorderTop", desc: "获取<code>border-top</code>样式", scope: 1});
		methods.push({name: "setBorderTop", desc: "设置<code>border-top</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBorderBottom", desc: "获取<code>border-bottom</code>样式", scope: 1});
		methods.push({name: "setBorderBottom", desc: "设置<code>border-bottom</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBackground", desc: "获取<code>background</code>样式", scope: 1});
		methods.push({name: "setBackground", desc: "设置<code>background</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBackgroundColor", desc: "获取<code>background-color</code>样式", scope: 1});
		methods.push({name: "setBackgroundColor", desc: "设置<code>background-color</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBackgroundImage", desc: "获取<code>background-image</code>样式", scope: 1});
		methods.push({name: "setBackgroundImage", desc: "设置<code>background-image</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBackgroundSize", desc: "获取<code>background-size</code>样式", scope: 1});
		methods.push({name: "setBackgroundSize", desc: "设置<code>background-size</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBackgroundPosition", desc: "获取<code>background-position</code>样式", scope: 1});
		methods.push({name: "setBackgroundPosition", desc: "设置<code>background-position</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getBackgroundRepeat", desc: "获取<code>background-repeat</code>样式", scope: 1});
		methods.push({name: "setBackgroundRepeat", desc: "设置<code>background-repeat</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getOverflow", desc: "获取<code>overflow</code>样式", scope: 1});
		methods.push({name: "setOverflow", desc: "设置<code>overflow</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getShadow", desc: "获取<code>box-shadow</code>样式", scope: 1});
		methods.push({name: "setShadow", desc: "设置<code>box-shadow</code>样式", params: "value: String", scope: 1});
		methods.push({name: "getContent", desc: "获取子组件或视图", scope: 1});
		methods.push({name: "setContent", desc: "设置子组件或视图", params: "value: *", scope: 1});
		return methods;
	},

	renderExamples: function () {
		this.showExample1();
	},

	showExample1: function () {
		var example = this.addExample("基本用法");

		var demo = new UIGroup(this);
		demo.append(new UIContainer(this, {content: "可以包含的内容为一个组件，或任意的网页代码..",
			styles: {border: "1px solid red", borderWidth: 1, minHeight: 80, background: "#fbeed9", 
				color: "#8a2a17", padding: 10}}));

		var source = [];
		source.push("// 创建一个容器，使用样式：");
		source.push("var styles = {\n\tminHeight: 80, \n\tcolor: '#8a2a17', \n\tborder: '1px solid red', " +
			"\n\tborderWidth: 1, \n\tbackground: '#fbeed9', \n\tpadding: 10\n};");
		source.push("// 服务端创建");
		source.push("new UIContainer(context, {content: '可以包含的内容为一个组件，或任意的网页代码..', styles: styles}).render(target);");
		source.push("// 浏览器端创建");
		source.push("UIContainer.create({target: [elem], content: '可以包含的内容为一个组件，或任意的网页代码..', styles: styles});");

		this.showDemo(example, demo, source, true);
	}

});
