const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProd = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
          }
        ]
      }]
    },
    plugins: [ CSSExtract ],
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, //always serve index for react router
      publicPath: '/dist/'
    },
    mode: 'development'
  }
}
