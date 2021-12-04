import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common';

const devConfig: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3001,
    open: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
};

export default merge(commonConfig, devConfig);
