/**
 * 组件，菜单拦
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-10
 */

var VRender = require(__vrender);


var Utils = VRender.Utils;

var menus = [{
	group: "基础",
	children: [
		{name: "button", label: "Button 按钮"}
	]
}, {
	group: "表单",
	children: [
		{name: "textview", label: "TextView 文本输入框"},
		{name: "checkbox", label: "Checkbox 多选框"},
		{name: "radiobox", label: "Radiobox 单选框"},
		{name: "combobox", label: "Combobox 下拉选择框"}
	]
}, {
	group: "数据集",
	children: [
		{name: "datagrid", label: "Datagrid 数据网格"}
	]
}, {
	group: "其他",
	children: [
		{name: "btnbar", label: "ButtonGroup 按钮组"}
	]
}];

var SideMenu = VRender.UIView.extend(module, {
	ref: "comp-menus",
	className: "sidemenu",

	renderView: function () {
		SideMenu.__super__.renderView.call(this);

		var target = VRender.$("<nav class='menus'></nav>").appendTo(this.$el);
		Utils.each(menus, function (data) {
			var group = VRender.$("<div class='grp'></div>").appendTo(target);
			group.append("<div class='title'>" + data.group + "</div>");
			var items = VRender.$("<ul></ul>").appendTo(group);
			Utils.each(data.children, function (menu) {
				items.append("<li name='" + menu.name + "'>" + menu.label + "</li>");
			});
		});

		var moduleName = this.options.pathname || "";
		moduleName = moduleName.substr(1).split("/");
		moduleName = moduleName[1] == "module" ? moduleName[2] : moduleName[1];
		if (moduleName) {
			target.find("[name='" + moduleName + "']").addClass("active");
		}
	}
});
