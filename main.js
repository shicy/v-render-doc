/**
 * @author shicy <shicy85@163.com>
 * Created on 2017-04-08
 */

global.__vrender = "../v-render";

var VRender = require(__vrender);

VRender.create().initialize({
	cwd: __dirname,

	server: {
		port: 8001
	},

	uplifyExpires: 1000
}).run();
