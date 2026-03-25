const path = require('path');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  entry: './src/mfe-svelte.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'mfe-demo-mfe-svelte.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'system' },
    clean: true,
  },
  resolve: {
    conditionNames: ['svelte', 'browser', 'import', 'module', 'default'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    extensions: ['.mjs', '.js', '.svelte'],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess(),
            compilerOptions: {
              dev: true,
            },
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: { fullySpecified: false },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    'single-spa': 'single-spa',
    '@mfe-demo/event-bus': '@mfe-demo/event-bus',
  },
  devServer: {
    port: 8501,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: false,
    liveReload: false,
    client: false,
  },
};
