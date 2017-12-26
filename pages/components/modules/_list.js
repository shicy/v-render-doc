/**
 * 列表型模块基础
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-13
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var Utils = VRender.Utils;

var ListModule = BaseModule.extend(module, {

	getProperties: function () {
		var props = ListModule.__super__.getProperties.call(this) || [];
		var description;

		Utils.each(props, function (temp) {
			if (temp.name === "data")
				temp.datatype = "array";
		});

		description = "属性<code>data</code>中“编号”对应字段名称，默认为<code>id</code>、" +
			"<code>code</code>或<code>value</code>字段，优先取值 id > code > value。";
		props.push({name: "idField", datatype: "string", desc: description});

		description = "项渲染器用来显示较为复杂订单选项内容，如：<code>function ($, item, data, index) {}</code>，" +
			"其中：<code>$</code>是jQuery对象，<code>item</code>是当前选项对应的标签，<code>data</code>是当前选项对应的数据对象，" +
			"<code>index</code>是当前选项的索引。可以在<code>item</code>直接添加内容，或者返回选项内容。";
		props.push({name: "itemRenderer", datatype: "function", desc: description});

		description = "属性<code>data</code>中用来显示文本的字段名称，默认为<code>label</code>、" +
			"<code>name</code>、<code>value</code>或<code>text</code>字段，优先取值 label > name > value > text。";
		props.push({name: "labelField", datatype: "string", desc: description});

		description = "通过该属性显示自定义文本，给定一个方法并在方法中返回自定义文本内容。<br/>" +
			"如：<code>function (data) { return data.name + '-' + data.remark; }</code>";
		props.push({name: "labelFunction", datatype: "function", desc: description});

		if (this.isMultipleSupport()) {
			description = "是否开启多选功能，默认为单选";
			props.push({name: "multiple", datatype: "boolean", value: "false", desc: description});
		}

		description = "默认选中项对应数据的编号，即属性<code>data</code>中的<code>id</code>字段，" +
			"也可以通过属性<code>idField</code>设置编号对应的字段名称。";
		if (this.isMultipleSupport())
			description += "多选时可以是数组或者逗号分隔的字符串，如：[123,232] 或 '123,232'。";
		props.push({name: "selectedId", desc: description});

		description = "默认选中项的索引位置（从0开始）";
		if (this.isMultipleSupport())
			description += "，多选时可以是数组或者逗号分隔的字符串，如：[1,3] 或 '1,3'。";
		props.push({name: "selectedIndex", datatype: "number", desc: description});

		return props;
	},

	getDataDescription: function () {
		var items = this.getDataItems();
		if (items && items.length > 0) {
			var desc = VRender.$("ul");
			Utils.each(items, function (temp, i) {
				var item = VRender.$("li").appendTo(desc);
				if (i > 0)
					item.css("margin-top", "10px");
				item.write("- <code>" + temp.name + "</code>：" + temp.desc + "。<br/>");
				item.write("&nbsp;&nbsp;&nbsp;&nbsp;类型【" + temp.datatype + "】，默认值【" + temp.value + "】");
			});
			return desc.html();
		}
	},

	getDataItems: function () {
		// 
	},

	getMethods: function () {
		var methods = ListModule.__super__.getMethods.call(this) || [];
		var description, params;

		for (var i = methods.length - 1; i >= 0; i--) {
			var method = methods[i];
			if (method.name == "getViewData") {
				method.desc = "该方法无效";
			}
			else if (method.name == "isEnabled") {
				method.desc = "判断组件或项是否启用，给定索引或者名称返回某一个子项的启用/禁用状态，否则返回组件本身的状态。";
				method.params = "value:*";
			}
			else if (method.name == "setEnabled") {
				method.desc = "设置组件或项是否启用，参数<code>value</code>为索引或名称时设置某一项的启用/禁用状态，否则设置组件本身的状态。";
				method.params = "enabled:Boolean, value:*";
			}
		}

		description = "组件数据集中代表编号的字段名称，参见属性<code>idField</code>。";
		methods.push({name: "getIdField", desc: "获取" + description});
		methods.push({name: "setIdField", desc: "设置" + description, params: "value:String"});

		description = "组件数据集中用来显示的文本字段名称，参见属性<code>labelField</code>。";
		methods.push({name: "getLabelField", desc: "获取" + description});
		methods.push({name: "setLabelField", desc: "设置" + description, params: "value:String"});

		description = "组件子项用于显示文本的方法，参见属性<code>labelFunction</code>。";
		methods.push({name: "getLabelFunction", desc: "获取" + description});
		methods.push({name: "setLabelFunction", desc: "设置" + description, params: "value:Function"});

		description = "组件项渲染器，参见属性<code>itemRenderer</code>。";
		methods.push({name: "getItemRenderer", desc: "获取" + description});
		methods.push({name: "setItemRenderer", desc: "设置" + description, params: "value:Function"});

		description = "获取组件选中项的索引（从0开始）"; //，参数<code>needArray</code>强制返回数组格式，仅前端有效。";
		if (this.isMultipleSupport())
			description += "<br/>注：前端使用时，如果组件支持多选将返回选中项索引数组或null，否则返回选中项索引或-1。";
		methods.push({name: "getSelectedIndex", desc: description});
		description = "根据索引（从0开始）设置选中项，参数<code>trigger</code>为<code>true</code>时同时触发<code>change</code>事件。";
		if (this.isMultipleSupport())
			description += "<br/>注：多个索引值可以使用数组或逗号分隔的字符串，如：[1,3,8]或'1,3,8'。";
		methods.push({name: "setSelectedIndex", desc: description, params: "value:*, trigger:Boolean"});

		description = "获取组件选中项的编号，未选中时返回<code>null</code>，参见属性<code>idField</code>。";
		if (this.isMultipleSupport())
			description += "<br/>注：前端使用时，如果组件支持多选将返回选中项编号的数组。";
		methods.push({name: "getSelectedId", desc: description});
		description = "根据编号设置选中项，参数<code>trigger</code>为<code>true</code>时同时触发<code>change</code>事件。";
		if (this.isMultipleSupport())
			description += "<br/>注：多个编号值可以使用数组或逗号分隔的字符串，如：[234,534]或'234,534'。";
		methods.push({name: "setSelectedId", desc: description, params: "value:*, trigger:Boolean"});

		description = "获取组件选中项对应的数据，未选中时返回<code>null</code>。";
		if (this.isMultipleSupport())
			description += "组件支持多选时将返回数组格式。";
		methods.push({name: "getSelectedData", desc: description, scope: 2});

		methods.push({name: "isSelectedIndex", desc: "判断某个索引是否处于选中状态", scope: 2});
		methods.push({name: "isSelectedId", desc: "判断某个编号对应的数据项是否处于选中状态", scope: 2});

		methods.push({name: "getDataAt", desc: "获取某个索引位置选择绑定的数据", params: "index:Number", scope: 2});
		description = "获取某个数据在组件中的索引位置，通常根据编号判断，参见属性<code>idField</code>。";
		methods.push({name: "getDataIndex", desc: description, params: "data:*", scope: 2});
		methods.push({name: "getDataById", desc: "根据编号获取组件中选项绑定的数据", params: "id:*", scope: 2});
		methods.push({name: "getIndexById", desc: "根据编号获取组件中选项的索引位置", params: "id:*", scope: 2});
		description = "根据数据的名称（<code>name</code>）字段获取组件中选项绑定的数据";
		methods.push({name: "getDataByName", desc: description, params: "name:String", scope: 2});
		description = "根据数据的名称（<code>name</code>）字段获取组件中选项的索引位置";
		methods.push({name: "getIndexByName", desc: description, params: "name:String", scope: 2});

		description = "往组件中添加项，参数<code>index</code>是添加到的索引位置，从0开始，当位置无效时默认添加到组件末尾。" +
			"前端操作时将触发<code>add</code>事件。";
		methods.push({name: "addItem", desc: description, params: "data:*, index:Number"});
		description = "修改组件项内容，将替换掉原选项内容，参数<code>index</code>指定修改的索引位置，从0开始，" +
			"当位置无效时忽略操作。前端操作时将触发<code>update</code>事件。";
		methods.push({name: "updateItem", desc: description, params: "data:*, index:Number"});
		description = "删除某一项，返回被删除项绑定的数据。根据编号查找，参见属性<code>idField</code>。" +
			"前端操作时将触发<code>remove</code>事件。";
		methods.push({name: "removeItem", desc: description, params: "data:*", scope: 2});
		description = "删除某个索引位置的项，返回被删除项绑定的数据。前端操作时将触发<code>remove</code>事件。";
		methods.push({name: "removeItemAt", desc: description, params: "index:Number"});
		description = "添加或更新某一项，当数据不存在时将添加一项，否则将存在的项修改。"
		methods.push({name: "addOrUpdateItem", desc: description, params: "data:*", scope: 2});
		description = "获取列表项数据，target可以是列表里任意标签";
		methods.push({name: "getItemData", desc: description, params: "elem:Element|jQuery", scope: 2});

		methods.push({name: "length", desc: "获取组件项个数", scope: 2});

		if (this.isMultipleSupport()) {
			methods.push({name: "isMultiple", desc: "获取组件是否支持多选"});
			description = "设置组件是否支持多选，参数为<code>false</code>，<code>0</code>，<code>''</code>，" +
				"<code>no</code>时组件单选，否则组件支持多选。";
			methods.push({name: "setMultiple", desc: description, params: "value:Boolean"});
		}

		return methods;
	},

	isMultipleSupport: function () {
		return true;
	}

});
