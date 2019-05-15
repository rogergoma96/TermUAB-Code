const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
require('dotenv').config();

module.exports = (env) => {
  const plugins = [
      new Dotenv(),
      new MiniCssExtractPlugin({
          filename: 'styles.css',
      }),
  ];

  if (process.env.ANALYZER === 'true') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
      entry: './src/app/src/index.jsx',
      output: {
          path: path.resolve(__dirname, process.env.BUILD_PATH),
          publicPath: '/',
          filename: 'bundle.js',
      },
      module: {
          rules: [
              {
                  // JS - JSX
                  use: 'babel-loader',
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/
              }, {
                  // SCSS
                  test: /\.scss$/,
                  use: [
                      {
                          loader: MiniCssExtractPlugin.loader,
                      }, {
                          loader: 'css-loader',
                          options: {
                              modules: true,
                              localIdentName: '[hash:base64:5]',
                          },
                      }, {
                          loader: 'postcss-loader',
                      }, {
                          loader: 'sass-loader',
                      },
                  ],
              },
          ]
      },
      plugins,
      resolve: {
          extensions: ['.js', '.jsx', '.json'],
      },
      devServer: {
          historyApiFallback: true,
          contentBase: './',
      },
  }
};
