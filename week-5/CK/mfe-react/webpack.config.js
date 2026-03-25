const path = require('path');

module.exports = {
  entry: './src/mfe-react.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'mfe-demo-mfe-react.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'system' },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'single-spa': 'single-spa',
    '@mfe-demo/event-bus': '@mfe-demo/event-bus',
  },
  devServer: {
    port: 8500,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: false,
    liveReload: false,
    client: false,
  },
};
