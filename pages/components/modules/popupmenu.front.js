/**
 * 弹出菜单
 * @author shicy <shicy85@163.com>
 * Created on 2018-04-19
 */

var view = $(".comp-popupmenu"); console.log(view);

$(function () {
	var menu8 = VRender.$ref("menu8");
	menu8 && menu8.on("open_before", function (e, data, subDatas) {
		if (data) {
			var level = (parseInt(data.level) || 0) + 1;
			var p_name = data.name || "menu";
			var p_label = data.label || "菜单";
			if (!(subDatas && subDatas.length > 0)) {
				subDatas = [];
				for (var i = 0; i < level; i++) {
					var _data = {};
					_data.name = p_name + i;
					_data.label = p_label + "-" + i;
					_data.level = level;
					if (level < 5)
						_data.children = [];
					subDatas.push(_data);
				}
				e.returnValue = subDatas;
			}
		}
	});
});
