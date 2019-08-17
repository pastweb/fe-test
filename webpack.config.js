const merge = require('webpack-merge')

module.exports = env => merge(require('./webpackConfigs/common.config'), require(`./webpackConfigs/${env}.config`))
