/**
 * 对话框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var view = $(".comp-dialog"); console.log(view);


view.on("click", "[name='example1-btn']", function (e) {
	UIDialog.create({title: "标题", content: "内容"}).open();
});

view.on("click", "[name='example2-small']", function (e) {
	UIDialog.create({size: "small"}).open();
});

view.on("click", "[name='example2-normal']", function (e) {
	UIDialog.create({size: "normal"}).open();
});

view.on("click", "[name='example2-big']", function (e) {
	UIDialog.create({size: "big"}).open();
});

view.on("click", "[name='example2-auto']", function (e) {
	var contentView = "<div style='width: 530px; height: 360px; background: #d1ebf3;'>内容宽530高360</div>";
	UIDialog.create({size: "auto", content: contentView}).open();
});

view.on("click", "[name='example3-btn']", function (e) {
	var contentView = UIGroup.create();

	var buttons = [];
	buttons.push({name: "cancel", label: "取消", type: "cancel"});
	buttons.push({name: "reset", label: "重置", type: "info"});
	buttons.push({name: "ok", label: "保存", type: "primary", waitclose: true});
	buttons.push({name: "close", label: "5秒后关闭对话框", type: "danger", waitclose: 5000});

	var dialog = UIDialog.create({buttons: buttons, content: contentView}).open();

	dialog.on("btnclk", function (e, name) {
		contentView.append('<div>统一事件“btnclk”，按钮名称：' + name + '</div>');
	});

	dialog.on("btn_ok", function (e) {
		contentView.append('<div>点击了“保存”按钮..</div>');
		setTimeout(function () {
			dialog.waitting(false, 'ok');
		}, 2000);
	});

	dialog.on("btn_cancel", function (e) {
		contentView.append('<div>点击了“取消”按钮..（因为有事件绑定所以不自动关闭了）</div>');
	});

	dialog.on("btn_close", function (e) {
		contentView.append('<div>5秒后关闭对话框</div>');
		var seconds = 5;
		var timerId = setInterval(function () {
			if (--seconds <= 0)
				clearInterval(timerId);
			else {
				contentView.append('<div>' + seconds + '秒后关闭对话框</div>');
				dialog.setButtonValue("close", seconds + "秒后关闭对话框");
			}
		}, 1000);
	});
});
