var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../public');

module.exports = {
	entry: [
		path.join(__dirname, '../src/index.js')
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	output: {
		path: parentDir + '/js',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: parentDir,
		historyApiFallback: true
}
}
