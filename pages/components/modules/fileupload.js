/**
 * 文件上传
 * @author shicy <shicy85@163.com>
 * Created on 2018-06-20
 */

var VRender = require(__vrender);
var BaseModule = require("./_base");


var UIGroup = VRender.UIGroup;
var UIButton = VRender.UIButton;
var UIFileUpload = VRender.UIFileUpload;

var FileUploadModule = BaseModule.extend(module, {
	className: "comp-fileupload",

	getCompName: function () {
		return "FileUpload";
	},

	getSubName: function () {
		return "文件上传";
	},

	getDescription: function () {
	},

	renderExamples: function () {
		this.showExample1();
		this.showExample2();
		this.showExample3();
	},

	showExample1: function () {
		var example = this.addExample("基本使用");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "点击上传文件"}));
		demo.append(new UIFileUpload(this, {browser: button, action: "demo.upload"}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '点击上传文件'});");
		source.push("new UIFileUpload(context, {browser: button, action: 'demo.upload'});");

		this.showDemo(example, demo, source, true);
	},

	showExample2: function () {
		var example = this.addExample("文件类型");

		var orientation = this.isApp ? null : UIGroup.HORIZONTIAL;

		var demo = new UIGroup(this, {gap: 10, orientation: orientation});
		demo.add(new UIGroup(this))
			.append(new UIButton(this, {name: "fileupload_btn21", label: "选择图片"}))
			.append(new UIFileUpload(this, {browser: "[name=fileupload_btn21]", filter: "image"}));
		demo.add(new UIGroup(this))
			.append(new UIButton(this, {name: "fileupload_btn22", label: "选择Excel"}))
			.append(new UIFileUpload(this, {browser: "[name=fileupload_btn22]", filter: "excel"}));

		var source = [];
		source.push("// 选择图片");
		source.push("new UIButton(context, {name: 'fileupload_btn21', label: '选择图片'});");
		source.push("new UIFileUpload(context, {browser: '[name=fileupload_btn21]', filter: 'image'});");
		source.push("// 选择Excel");
		source.push("new UIButton(context, {name: 'fileupload_btn22', label: '选择Excel'});");
		source.push("new UIFileUpload(context, {browser: '[name=fileupload_btn22]', filter: 'excel'});");

		this.showDemo(example, demo, source);
	},

	showExample3: function () {
		var example = this.addExample("多选");

		var demo = new UIGroup(this);
		var button = demo.add(new UIButton(this, {label: "批量选择文件"}));
		demo.append(new UIFileUpload(this, {browser: button, multi: true, action: 'demo.upload'}));

		var source = [];
		source.push("var button = new UIButton(context, {label: '批量选择文件'});");
		source.push("new UIFileUpload(context, {browser: button, multi: true, action: 'demo.upload'});");

		this.showDemo(example, demo, source);
	}

});
