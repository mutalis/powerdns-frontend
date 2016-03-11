const context = __dirname + '/app/components';
const outputContext = __dirname + '/public';

module.exports = {
  context: context,
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
      }
    ]
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  }
};
