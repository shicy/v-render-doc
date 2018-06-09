/**
 * 通知
 * @author shicy <shicy85@163.com>
 * Created on 2018-06-07
 */

var view = $(".comp-notice"); console.log(view);


$ref("notice_btn1").on("tap", function (e) {
	new UINotice({title: '标题', content: '这里是内容！！', duration: 60000});
});


$ref("notice_btn21").on("tap", function (e) {
	new UINotice({title: '标题', content: '通知提示文案'});
});

$ref("notice_btn22").on("tap", function (e) {
	new UINotice({title: '成功', content: '成功提示文案', type: 'success'});
});

$ref("notice_btn23").on("tap", function (e) {
	new UINotice({title: '警告', content: '警告提示文案', type: 'warn'});
});

$ref("notice_btn24").on("tap", function (e) {
	new UINotice({title: '错误', content: '错误提示文案', type: 'danger'});
});

$ref("notice_btn25").on("tap", function (e) {
	new UINotice({title: '消息', content: '消息提示文案', type: 'info'});
});


$ref("notice_btn31").on("tap", function (e) {
	new UINotice({title: '标题', content: '10秒后关闭'});
});

$ref("notice_btn32").on("tap", function (e) {
	new UINotice({title: '标题', content: '30秒后关闭', duration: 30000});
});

$ref("notice_btn33").on("tap", function (e) {
	new UINotice({title: '标题', content: '不会自动关闭', duration: 0});
});


$ref("notice_btn41").on("tap", function (e) {
	new UINotice({title: '标题', content: '不可手动关闭，15秒后自动关闭', duration: 15000, closable: false});
});


$ref("notice_btn51").on("tap", function (e) {
	new UINotice({title: '标题', focusHtmlContent: '<strong>这里也可以是<i>富文本</i>内容</strong>'});
});


$ref("notice_btn61").on("tap", function (e) {
	new UINotice({title: '自定义图标', content: '内容', icon: '/image/icons/b04.png'});
});

