
module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        frameworks: ['mocha', 'chai', 'sinon'],

        files: [
          // 'tests.webpack.js'
          'test/**/*.js'
        ],

        preprocessors: {
          // add webpack as preprocessor
          // 'tests.webpack.js': ['webpack']
          'app/**/*.jsx': ['webpack'],
          'test/**/*.js': ['webpack']
        },

        reporters: ['dots'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                  {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                      presets: ['react', 'es2015', 'stage-0']
                    }
                  }
                ]
            },
            resolve: {
              extensions: ['', '.json', '.js', '.jsx']
            },
            externals: {
              'cheerio': 'window',
              'react/lib/ExecutionEnvironment': true,
              'react/lib/ReactContext': true
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};
