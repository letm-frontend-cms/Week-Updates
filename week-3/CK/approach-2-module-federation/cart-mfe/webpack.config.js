const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3002,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{
      test: /\.(ts|tsx|js)$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader', options: {
        presets: ['@babel/preset-react', '@babel/preset-typescript']
      }},
    }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cartMFE',
      filename: 'remoteEntry.js',
      exposes: {
        './CartPage': './src/CartPage',
        './CartBadge': './src/CartBadge',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
