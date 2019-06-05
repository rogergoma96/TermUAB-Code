const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
require('dotenv').config();

module.exports = (env, argv) => {
  const plugins = [
      new Dotenv(),
      new MiniCssExtractPlugin({
          filename: 'styles.css',
      }),
  ];

    if (argv.mode === 'development') {
        plugins.push(new HtmlWebpackPlugin({ template: 'index.html' }));
    } else {
        plugins.push(new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }));
        plugins.push(new UglifyJsPlugin());
        plugins.push(new OptimizeCSSAssetsPlugin());
    }

  if (process.env.ANALYZER === 'true') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
      entry: './src/app/src/index.jsx',
      output: {
          path: path.resolve(__dirname, process.env.BUILD_PATH),
          publicPath: '/',
          filename: 'main.js',
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
                  test: /\.(scss|css)$/,
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
              }, {
                  // HTML
                  test: /\.html$/,
                  use: 'html-loader',
              }, {
                  test: /\.svg$/,
                  loader: 'url-loader'
                },
          ]
      },
      plugins,
      resolve: {
          extensions: ['.js', '.jsx', '.json'],
      },
      devServer: {
          open: true,
          historyApiFallback: true,
          contentBase: './',
      },
  }
};
