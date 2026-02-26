const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, "src/grff-catalog.tsx"),
  output: {
    filename: "grff-catalog.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:8080/",
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
    port: 8080,
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
