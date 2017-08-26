/**
 * 对话框
 * @author shicy <shicy85@163.com>
 * Created on 2017-08-24
 */

var view = $(".comp-dialog"); console.log(view);


view.on("click", "[name='example1-btn']", function (e) {
	var dialog = UIDialog.create({title: "对话框标题", content: "对话框内容<br/><a>支持HTML格式</a>"});
	dialog.on("btnclick", function (e, name) {
		alert("你选择了“" + (name == "submit" ? "确定" : "取消") + "”");
		dialog.close();
	});
});
