const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/mfe-demo-root-config.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'mfe-demo-root-config.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'system' },
    clean: true,
  },
  externals: { 'single-spa': 'single-spa' },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    client: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: false,
    }),
  ],
};
