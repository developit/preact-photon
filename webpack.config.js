var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					optional: ['runtime'],
					stage: 0
				}
			},
			{
				test: /\.css$/,
				loader: 'style?sourceMap!css'
			},
			{
				loader: 'raw'
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: { comments: false }
		})
	],
	stats: {
		colors: true
	},
	devtool: 'sourcemap'
};
