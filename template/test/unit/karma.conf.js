const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'specs/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'specs/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  })
}
