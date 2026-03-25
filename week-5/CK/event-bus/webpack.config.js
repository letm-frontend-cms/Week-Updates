const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'mfe-demo-event-bus.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'system' },
    clean: true,
  },
  devServer: {
    port: 9002,
    static: path.join(__dirname, 'dist'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: false,
    liveReload: false,
    client: false,
  },
};
