const inputContext = __dirname + '/app/components';
const outputContext = __dirname + '/public';
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: inputContext,
  entry: './App.jsx',
  output: {
    path: outputContext,
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
      }
    ]
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.scss']
  },
  toolbox: {
    theme: path.join(__dirname, 'app/toolbox-theme.scss')
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true })
  ],
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
