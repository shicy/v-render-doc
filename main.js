/**
 * @author shicy <shicy85@163.com>
 * Created on 2017-04-08
 */

var Path = require("path");

global.__vrender = Path.resolve(__dirname, "../v-render"); // 为测试方便
global.__basedir = __dirname;

var VRender = require(__vrender);

VRender.create().initialize({
	cwd: __dirname,

	server: {
		port: 8001
	},

	router: {
		adapter: "./framework/RouterAdapter"
	},

	uplifyExpires: 1000
}).run();
