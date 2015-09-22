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

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var util = require('util');
var browserSync = require('browser-sync');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');


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
    'google chrome'
  );
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

gulp.task("create-doc", function(){
  return gulp.src(
      ["./**/*.js", "!node_modules", '!gulp', '!doc']
    )
    .pipe($.markdox({
      template: './gulp/doc_template.js'
    }))
    .pipe($.rename({
      extname: '.js.md'
    }))
    .pipe(gulp.dest("./doc"));
});

gulp.task('doc', ['create-doc', 'copy-md'], function() {
  return gulp.src('doc/**/*.js').pipe($.clean()).pipe(gulp.dest('doc'));
});

gulp.task('copy-md', function() {
  return gulp.src([
      "./**/*.md",
      "!./README.md",
      "!node_modules/**/*",
      "!doc/**/*"
    ])
    .pipe(gulp.dest('doc'));
});

gulp.task('test-shit', function() {
  return gulp.src([
    './**/*.md',
    "!node_modules/**/*",
    "!doc/**/*"
  ])
  .pipe(injectFolderDescription())
  .pipe(gulp.dest('doc'));
});

gulp.task('serve:e2e', ['wiredep', 'injector:js', 'injector:css'], function () {
  browserSyncInit(['.tmp', 'src'], null, []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit('dist', null, []);
});
