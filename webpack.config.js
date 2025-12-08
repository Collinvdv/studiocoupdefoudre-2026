/**
 * Dependencies
 * =============================================================================
 */

const path = require("path");

const config = require("./gulp/config");

// require dot env
require("dotenv").config();

/**
 * Config
 * =============================================================================
 */

module.exports = {
	mode: "production",
	entry: config.scripts.main,
	output: {
		filename: "[name].min.js"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [path.resolve(__dirname, "./src/js/")],
				loader: "babel-loader"
			}
		]
	},
	devtool: "eval"
};
