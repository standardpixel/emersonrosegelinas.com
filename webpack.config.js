var SimpleReactWebpackStaticPlugin = require(
  'simple-react-webpack-static-plugin'
);
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './components/index.jsx'
  },

  output: {
    filename: 'index.js',
    path: './dist',
  },

  exclude: /(node_modules)/,

  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract("style","css!sass", "autoprefixer")
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new SimpleReactWebpackStaticPlugin({
      "default": {
        "title": "Emerson Rose Gelinas"
      },
    }, {
      "template": "./base-page-template.handlebars",
      "ignore-extensions": ["scss", "css", "png"]
    }),
    new CopyWebpackPlugin([{from: './CNAME'},{from: './static', to: 'static'}]),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    })
  ]
};
