// require the path
const path = require('path');
// require html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        // test: /\.jsx?/,
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //at this point install these: npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-jsx'],
          },
        },
      },
      //at this point install these: npm install -D sass style-loader css-loader sass-loader
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  //at this point, npm install webpack-dev-server --save-dev
  //at this point, npm install -D webpack-cli
  //at this point,  npm install --save-dev html-webpack-plugin
  //also, ensure to require in HtmlWebpackPlugin at the top of this file
  // npm install nodemon
  //maybe npm install webpack ! we got an error that webpack command not found
  //npm install
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      //template: path.resolve(__dirname, './index.html'),//ANOTHER WAY
    }),
    // new Dotenv(),
  ],
  //declare devServer
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    proxy: {
      //   context: ['/character','/characters'],
      //   target: 'http://localhost:3000'
      '/api': 'http://localhost:3000',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8080,
  },
};
