const ENV = process.env.npm_lifecycle_event,
	path = require('path'),
	fs = require('fs'),
	webpack = require('webpack'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin'),
	devServer = {
		host: 'localhost',
		port: 8888,
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'public')
	}
;

let config = {
	entry: (ENV === 'start') ? 
	[
		// dev mode
		'react-hot-loader/patch',
		path.resolve(__dirname, 'src', 'js', 'index.js')
	]:
	[
		// production mode
		path.resolve(__dirname, 'src', 'js', 'index.js')
	],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: (ENV === 'start') ? 'app.js' : 'app.[hash].js'
	},
	
	devtool: (ENV === 'start') ? 'source-map' : 'false',

    module: {
        loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|public\/)/,
				loaders: ['babel-loader']
			},
			{
				test: /\.css$/,
				exclude: /(node_modules|public\/)/,
				use: ExtractTextPlugin.extract({
				  fallback: "style-loader",
				  use: ['css-loader']
				})
			}
        ]
	},
	
	devServer: devServer,

    plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'src', 'index.html')
            }),
			new ExtractTextPlugin({filename: 'style.css',
				allChunks: true
			}),
			new CopyWebpackPlugin([
				{
					from: path.resolve(__dirname, 'src', 'lib'),
					to: path.resolve(__dirname, 'public', 'lib')
				},
				{
					from: path.resolve(__dirname, 'src', 'images', 'SpinnerBig.gif'),
					to: path.resolve(__dirname, 'public', 'images', 'SpinnerBig.gif')
				},
				{
					from: path.resolve(__dirname, 'src', 'images', 'favicon.ico'),
					to: path.resolve(__dirname, 'public')
				}
			]),
			new webpack.DefinePlugin({
				"process.env": { 
					NODE_ENV: (ENV === 'start') ? JSON.stringify("dev") : 
					JSON.stringify("production")
				}
			})
    ]
};

if (ENV !== 'start') {
	config.plugins = config.plugins.concat([
		new webpack.optimize.UglifyJsPlugin()
	]);
}

module.exports = config;