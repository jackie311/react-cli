const path = require('path');
const srcRoot = './src';
module.exports = {
    // input
    entry: [
      './app.js'
    ],
    // output
    output: {
        path: path.resolve(srcRoot,'./page/index/index.js'),
        filename: 'bundle.min.js'
    },
    mode: 'development',
    module: {
      rules: [
          {
             test: /\.(png|jpg|jpeg)$/,
             use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]',
             include: path.resolve(srcRoot)
          },
          { test: /\.(js|jsx)$/,
             use: [{loader:'babel-loader'}],
             include: path.resolve(srcRoot)
          },
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: path.resolve(devPath, 'index.html'),
        template: path.resolve(srcRoot, './page/index/index.html'),
    })
],
devServer: {
  "contentBase": devPath,
  "compress": true,
},
};