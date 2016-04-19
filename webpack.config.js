var autoprefixer = require('autoprefixer');

module.exports = {
	entry: "./app.js",
	watch: true,

	output: {
		filename: "bundle.js"
	},

	module: {
	    loaders: [
			{
				test: /\.scss$/,
				exclude: /node-modules/,
                loaders: [ 'style', 'css?sourceMap', 'postcss-loader', 'sass?sourceMap' ]
			}
	    ]
 	},

 	postcss: function () {
        return {
            defaults: [autoprefixer({ browsers: [] })]
        };
    }
}
