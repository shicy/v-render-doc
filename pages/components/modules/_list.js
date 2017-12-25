/**
 * 列表型模块基础
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-13
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var Utils = VRender.Utils;

var ListModule = BaseModule.extend(module, {
	isMultipleSupport: function () {
		return true;
	},

	getProperties: function () {
		var props = ListModule.__super__.getProperties.call(this) || [];
		var description;

		props.push({name: "data", datatype: "Array", desc: this.getDataDescription() || ""});

		description = "数据转换器，将原始数据转换为组件标准数据，特别是异步加载的数据可以通过该方法转换后再显示。<br/>" +
			"如：<code>function (data, index) { return new_data; }</code>";
		props.push({name: "dataAdapter", datatype: "function", desc: description});

		description = "数据绑定映射方法，将数据以<code>data-*</code>形式绑定到选项上。<br/>" +
			"如：<code>function (data) { return {id: data.id}; }</code>，默认绑定<code>id</code>、<code>code</code>、" +
			"<code>name</code>、<code>value</code>、<code>label</code>、<code>text</code>、<code>status</code>属性。<br/>" +
			"注：绑定的属性可以在前端获取到，如果未设置该方法，整个数据对象将被输出到前端，为保证数据的私密性，可以通过该方法过滤属性。";
		props.push({name: "dataMapper", datatype: "function", desc: description});

		description = "属性<code>data</code>中“编号”对应字段名称，默认为<code>id</code>、" +
			"<code>code</code>或<code>value</code>字段，优先取值 id > code > value。";
		props.push({name: "idField", datatype: "String", desc: description});

		description = "项渲染器用来显示较为复杂订单选项内容，如：<code>function ($, item, data, index) {}</code>，" +
			"其中：<code>$</code>是jQuery对象，<code>item</code>是当前选项对应的标签，<code>data</code>是当前选项对应的数据对象，" +
			"<code>index</code>是当前选项的索引。可以在<code>item</code>直接添加内容，或者返回选项内容。";
		props.push({name: "itemRenderer", datatype: "function", desc: description});

		description = "属性<code>data</code>中用来显示文本的字段名称，默认为<code>label</code>、" +
			"<code>name</code>、<code>value</code>或<code>text</code>字段，优先取值 label > name > value > text。";
		props.push({name: "labelField", datatype: "String", desc: description});

		description = "通过该属性显示自定义文本，给定一个方法并在方法中返回自定义文本内容。<br/>" +
			"如：<code>function (data) { return data.name + '-' + data.remark; }</code>";
		props.push({name: "labelFunction", datatype: "function", desc: description});

		if (this.isMultipleSupport()) {
			description = "是否开启多选功能，默认为单选";
			props.push({name: "multiple", datatype: "Boolean", value: "false", desc: description});
		}

		description = "默认选中项对应数据的编号，即属性<code>data</code>中的<code>id</code>字段，" +
			"也可以通过属性<code>idField</code>设置编号对应的字段名称。";
		if (this.isMultipleSupport())
			description += "多选时可以是数组或者逗号分隔的字符串，如：[123,232] 或 '123,232'。";
		props.push({name: "selectedId", desc: description});

		description = "默认选中项的索引位置（从0开始）";
		if (this.isMultipleSupport())
			description += "，多选时可以是数组或者逗号分隔的字符串，如：[1,3] 或 '1,3'。";
		props.push({name: "selectedIndex", datatype: "Number", desc: description});

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
	}

});
