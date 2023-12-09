const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = env => {
  const isProd = !!env && !!env.production
  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      spa: path.join(__dirname, 'index.tsx'),
    },
    target: 'web',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      fallback: {
      },
    },
    devtool: isProd ? undefined : 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{
            loader: 'babel-loader',
          }],
          exclude: '/node_modules/'
        },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      ]
    },
    watchOptions: {
      ignored: [path.resolve(__dirname, 'node_modules')],
    },
    output: {
      filename: isProd ? '[name].bundle.[contenthash].min.js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].chunk.[contenthash].min.js' : '[name].chunk.js',
      path: path.resolve(__dirname, '../server'),
      publicPath: '/',
      libraryTarget: 'var',
      library: 'spa',
    },
    optimization: {
      minimize: isProd,
      minimizer: [],
      usedExports: true,
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.ProvidePlugin({
          process: 'process/browser',
      }),
    ]
  }
}
