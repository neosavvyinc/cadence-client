// Karma configuration
// Generated on Sat Aug 23 2014 12:29:50 GMT-0400 (EDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'client/bower_components/lodash/dist/lodash.js',
            'client/bower_components/jquery/dist/jquery.js',
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-*/angular-*.js',
            'client/bower_components/angular-bootstrap/ui-bootstrap.js',
            'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'client/bower_components/jquery.easy-pie-chart/dist/angular.easypiechart.min.js',
            'client/bower_components/angular-wizard/dist/angular-wizard.js',
            'client/bower_components/textAngular/dist/textAngular*.js',
            'client/bower_components/angular-ui-tree/dist/angular-ui-tree.js',
            'client/bower_components/ngmap/dist/ng-map.js',
            'client/bower_components/ng-tags-input/ng-tags-input.js',
            'client/bower_components/restangular/dist/restangular.js',
            'client/bower_components/reconnecting-websocket/reconnecting-websocket.js',
            'client/bower_components/momentjs/moment.js',
            'client/scripts/app.js',
            'client/scripts/**/*.js',
            'test/scripts/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'client/bower_components/angular-*/angular-*.min.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {

        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


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
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
