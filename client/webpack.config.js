const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { DefinePlugin } = require('webpack')

const { NODE_ENV } = process.env

const prod = NODE_ENV === 'production'

module.exports = {
  mode: NODE_ENV,
  devtool: prod ? 'hidden-source-map' : 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    inline: true,
    port: 3000,
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
              // postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js',
  },
  plugins: [
    new DefinePlugin({
      SERVICE_URL: JSON.stringify(`//localhost:${process.env.WEB_PORT || 8080}`),
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
}
