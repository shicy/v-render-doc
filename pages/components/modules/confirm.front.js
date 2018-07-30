// ========================================================
// 确认对话框
// @author shicy <shicy85@163.com>
// Create on 2018-07-30
// ========================================================

var view = $(".comp-confirm");

$ref("confirm_btn1").on("tap", function (e) {
	new UIConfirm({title: "提示！！", content: "您是否确认操作？"});
});

$ref("confirm_btn2").on("tap", function (e) {
	new UIConfirm({content: "自定义“确认”和“取消”按钮", confirmLabel: "自定义确认", cancelLabel: "自定义取消"});
});
