// Karma configuration
// Generated on Mon Jan 20 2014 16:21:22 GMT+0000 (WET)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'assets/js/main.js',
      'assets/js/medida.js',
      'assets/js/temperatura.js',
      'conversor_test.js',
      'vendor/chai.js',
      'vendor/mocha.css',
      'vendor/mocha.js'
    ],

    client: {
          mocha: {
            ui: 'bdd'
          }
    },

    exclude: [
      'gulpfile.js'
    ],

    //preprocessors: {
    //  'test.html': ['html2js']
    //},

    plugins : [
      'karma-mocha',
      'karma-chai'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Firefox', 'PhantomJS', 'Chrome', 'Safari'],

    captureTimeout: 60000,

    singleRun: false
  });
};
