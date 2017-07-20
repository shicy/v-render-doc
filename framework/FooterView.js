/**
 * 页面底部拦
 * @author shicy <shicy85@163.com>
 * Created on 2017-07-08
 */

var VRender = require(__vrender);


var FooterView = VRender.UIView.extend(module, {
	id: "main-footer",

	renderView: function () {
		FooterView.__super__.renderView.call(this);
	}
});
