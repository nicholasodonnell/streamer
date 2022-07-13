const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { DefinePlugin } = require('webpack')

const { NODE_ENV } = process.env

const isProd = NODE_ENV === 'production'

module.exports = {
  mode: NODE_ENV,
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    hot: true,
    liveReload: true,
    port: 3000,
    watchFiles: [ './src/**/*' ],
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015',
            },
          },
        ],
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
    clean: true,
    filename: 'app.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/',
  },
  plugins: [
    new DefinePlugin({
      'process.env.WEB_PORT': JSON.stringify(process.env.WEB_PORT || 8080),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      hash: isProd,
      minify: isProd,
      template: './src/index.html',
    }),
  ],
}
