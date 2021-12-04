import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common';

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  plugins: [],
};

export default merge(commonConfig, prodConfig);
