/*!
 * Copyright 2015 Florian Biewald
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = function(root, webpackConfig) {

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')();
  var util = require('util');
  var browserSync = require('browser-sync');
  var gutil = require("gulp-util");
  var webpack = require("webpack");
  var _ = require("lodash");
  var Promise = require('bluebird');
  var fs = Promise.promisifyAll(require('fs'));
  var handlebars = require("handlebars");
  var fileDocGlobs = [
    "./**/*.js",
    "./**/*.jsx",
    "!node_modules/**/*",
    '!gulp/**/*',
    '!*/build/**/*'
  ];
  var docGlobs = [
    './**/README.md',
    "!node_modules/**/*",
    "!node_modules"
  ];

  gulp.task('default', function () {
    gulp.start('serve');
  });

  function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;

    browserSync.instance = browserSync.init(files, {
      startPath: 'index.html',
      port: 7000,
      server: {
        baseDir: baseDir,
        middleware: [],
        routes: routes
      },
      files: ["www/build/**/*.js"],
      browser: browser
    });
  }

  gulp.task('serve', ['webpack'], function () {
    browserSyncInit([
        './www'
      ], [
      ],
      null
    );
  });

  gulp.task('inject-maps-key', function(cb) {
    var config = require(root + '/config/config.json');

    if (_.isEmpty(config.maps_api_key)) {
      throw new Error('Maps api key not found. Please follow these steps to obtain a google maps api key: https://developers.google.com/maps/documentation/javascript/get-api-key');
    }
    var indexTemplatePath = root + '/www/index.html.tpl';
    var indexHtmlPath = root + '/www/index.html';
    var template = fs.readFileSync(indexTemplatePath).toString();

    fs.writeFileAsync(indexHtmlPath, handlebars.compile(template)({mapskey: config.maps_api_key}))
    .then(cb)
    .catch(function(e) {
      throw new Error('cannot write index file' + e.stack);
    });
  });

  gulp.task('webpack', function(callback) {
      var isCallbackCalled = false;

      webpack(webpackConfig, function(err, stats) {
          if (err) {
              reject(new gutil.PluginError("execWebpack", err));
          }
          util.log("[execWebpack]", stats.toString({
              colors: true
          }));

          if (!isCallbackCalled) {
            callback();
            isCallbackCalled = true;
          }
      });
  });

  gulp.task('create-file-docs', function() {
    return gulp.src(
      fileDocGlobs
    )
    .pipe($.markdox({
      template: root + '/node_modules/gulp-zlanddoc/lib/markdoxCustomTemplate.ejs',
      formatter: $.zlanddoc.markdoxCustomFormatter.format
    }))
    .pipe($.rename(function (path) {
      path.extname = path.extname + ".md";
    }))
    .pipe(gulp.dest("./"));
  });

  gulp.task('zland-assets', function() {
    return gulp.src('node_modules/zland-*/www/assets/**/*.*')
      .pipe($.rename(function(path) {
        path.dirname = path.dirname.replace(/zland.*?\//, '');
      }))
      .pipe(gulp.dest('.'));
  });


  gulp.task('create-docs', ['create-file-docs'], function() {
    return gulp.src(docGlobs)
    .pipe($.zlanddoc({
      buildFileDescriptions: true
    }))
    .pipe(gulp.dest('./'));
  });

  gulp.task('serve:e2e', ['wiredep', 'injector:js', 'injector:css'], function () {
    browserSyncInit(['.tmp', 'src'], null, []);
  });

  gulp.task('serve:e2e-dist', ['build'], function () {
    browserSyncInit('dist', null, []);
  });

  return {
    setFileDocsGlobs: function(globs) {
      fileDocGlobs = globs;
      return this;
    },
    setDocGlobs: function(globs) {
      docGlobs = globs;
      return this;
    }
  }
};
