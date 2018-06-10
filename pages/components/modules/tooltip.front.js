/**
 * 提示框
 * @author shicy <shicy85@163.com>
 * Created on 2018-06-09
 */

var view = $(".comp-tooltip"); console.log(view);

$ref("tooltip_btn1").on("tap", function (e) {
	new UITooltip({content: '这是一条消息提示。默认3秒后关闭'});
});


$ref("tooltip_btn21").on("tap", function (e) {
	new UITooltip({content: '默认提示框'});
});

$ref("tooltip_btn22").on("tap", function (e) {
	new UITooltip({content: '成功信息', type: 'success'});
});

$ref("tooltip_btn23").on("tap", function (e) {
	new UITooltip({content: '失败、错误信息', type: 'danger'});
});

$ref("tooltip_btn24").on("tap", function (e) {
	new UITooltip({content: '警告信息', type: 'warn'});
});

$ref("tooltip_btn25").on("tap", function (e) {
	new UITooltip({content: '消息信息', type: 'info'});
});


$ref("tooltip_btn31").on("tap", function (e) {
	new UITooltip({content: '默认提示信息等待3秒钟'});
});

$ref("tooltip_btn32").on("tap", function (e) {
	new UITooltip({content: '自定义等待30秒后关闭', duration: 30000});
});

$ref("tooltip_btn33").on("tap", function (e) {
	new UITooltip({content: '改消息不会自动关闭，请点击关闭按钮', duration: 0});
});


$ref("tooltip_btn41").on("tap", function (e) {
	new UITooltip({content: '改消息不可手动关闭，10秒钟后自动关闭', duration: 10000, closable: false});
});


$ref("tooltip_btn51").on("tap", function (e) {
	new UITooltip({focusHtmlContent: '<strong>这里也可以是<i>富文本</i>内容</strong>'});
});


$ref("tooltip_btn61").on("tap", function (e) {
	new UITooltip({content: '自定义图标', icon: '/image/icons/b04.png', duration: 0});
});

