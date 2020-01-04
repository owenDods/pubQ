const react = require('@neutrinojs/react');

module.exports = {
	options: {
		root: __dirname
	},
	use: [
		react({
			style: {
				test: /\.(css|sass|scss)$/,
				moduleTest: /\.module.(css|sass|scss)$/,
				loaders: [
					{
						loader: 'sass-loader',
						useId: 'sass',
						options: {}
					}
				]
			}
		})
	]
};
