// Karma configuration
// Generated on Sat Feb 21 2015 22:04:57 GMT+0900 (JST)
var webpack = require("webpack");
var path = require("path");
var bowerPath = path.join( __dirname, "bower_components" );

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*_test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // add webpack as preprocessor
      'test/**/*_test.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies
    // webpack configuration
    webpack: {
      resolve: {
        // Tell webpack to look in node_modules, then bower_components when resolving dependencies
        // If your bower component has a package.json file, this is all you need.
        modulesDirectories: ["node_modules", bowerPath]
      },
      devtool: 'inline-source-map',
      // Define a new plugin that tells webpack to look at the main property in bower.json files when resolving dependencies.
      // For marionette, we need it to load the CJS version, which we specify with as ["main", "1"] in the args below.
      plugins: [
        new webpack.ResolverPlugin([
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( "bower.json", ["main", ["main", "1"]] )
        ], ["normal", "loader"])
      ]
    }
  });
};
