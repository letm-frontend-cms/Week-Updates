const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  return {
    entry: path.resolve(__dirname, "src/grff-root-config.ts"),
    output: {
      filename: "grff-root-config.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      libraryTarget: "system",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    devtool: isProd ? false : "source-map",
    devServer: {
      port: 9000,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.ejs"),
        inject: false,
      }),
    ],
    externals: ["single-spa"],
  };
};
