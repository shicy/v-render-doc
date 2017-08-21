/**
 * 模块视图
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-13
 */

var VRender = require(__vrender);


var ModuleView = VRender.Fragment.extend(module, {
	className: "comp-mod",
	readyCode: "view.component.module",

	doInit: function () {
		ModuleView.__super__.doInit.call(this);

		this.view = this.getView();

		if (this.view) {
			var self = this;
			this.view.ready(function () {
				self.ready("view.component.module");
			});
		}
		else {
			this.ready("view.component.module");
		}
	},

	renderView: function () {
		ModuleView.__super__.renderView.call(this);

		if (this.view) {
			this.view.render(this.$el);
		}
		else {
			this.$el.writeTmpl(__dirname + "/home.tmpl");
		}
	},

	getView: function () {
		var moduleName = this.options.pathname || "";
		moduleName = moduleName.substr(1).split("/");
		moduleName = moduleName[1] == "module" ? moduleName[2] : moduleName[1];
		if (moduleName) {
			try {
				var ViewClass = require("./modules/" + moduleName);
				if (ViewClass)
					return new ViewClass(this);
			}
			catch (e) {
				// 忽略无效的组件
			}
		}
	}
});

