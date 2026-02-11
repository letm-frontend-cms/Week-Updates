/**
 * Simple webpack config to build UI library for runtime loading
 * Run: npm run build:ui
 */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'packages/ui-library/src/browser.ts'),
  
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'grff-ui-library.js',
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Faster, skip type checking
            compilerOptions: {
              jsx: 'react', // Classic transform: React.createElement (no jsx-runtime)
              module: 'esnext',
              target: 'es2017',
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  
  externals: {
    // These come from window (host app provides them)
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  
  devtool: 'source-map',
};
