const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, "src/grff-cart.tsx"),
  output: {
    filename: "grff-cart.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:8081/",
    libraryTarget: "system",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "source-map",
  devServer: {
    port: 8081,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      inject: false,
    }),
  ],
  externals: ["react", "react-dom", "single-spa"],
});
