const path = require('path')
const webpack = require('webpack')

const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        ELECTRON_DISABLE_SECURITY_WARNINGS: 'true',
      },
      // ENVIRONMENT: 'process.env',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      staticPath: `"${path.join(__dirname, '../../src/static').replace(/\\/g, '\\\\')}"`,
    }),
  ],
  performance: {
    hints: false,
  },
})

