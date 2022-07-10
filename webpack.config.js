const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	devServer: {
		open: true,
		host: '0.0.0.0',
		port: 3000,
		hot: true,
		liveReload: true,
		compress: true,
		client: {
			logging: 'info',
			overlay: {
				errors: true,
				warnings: false,
			},
			progress: true,
			reconnect: true,
		},
		static: {
			directory: path.join(__dirname, '/dist'),
		},
		cache: {
			type: 'memory',
		},
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/src/index.html'),
		}),

		new Dotenv({
			path: './.env',
			safe: true,
		}),
	],
};

