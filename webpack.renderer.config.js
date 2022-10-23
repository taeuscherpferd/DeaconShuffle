/* eslint-disable */
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path')

rules.push(
  {
    test: /\.s[ac]ss$/i,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader'}, { loader: 'sass-loader'}],
  },
);

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    modules: [path.resolve(__dirname, 'src/'), 'node_modules']
  },
};
