'use strict';

const gulp        = require('gulp');
const concat      = require('gulp-concat');
const debug       = require('gulp-debug');
const gulpIf      = require('gulp-if');
const sass        = require('gulp-sass');
const newer       = require('gulp-newer');
const del         = require('del');
const browserSync = require('browser-sync').create({reloadDelay: 2000});
const notify      = require('gulp-notify');
const path        = require('path');

const isDevelopment   = !process.env.NODE_ENV ||
                         process.env.NODE_ENV == 'development';

gulp
  .task(
    'AccountPage:styles',
    function() {
      return gulp
              .src(__dirname + '/styles/**/*.scss')
              .pipe(debug({title: 'styles:src'}))
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest(__dirname + '/styles'))
              .pipe(debug({title: 'styles:sass'}))
    }
  );

gulp
  .task(
    'AccountPage:styles:watch',
    function() {
      gulp
        .watch(
          __dirname + '/styles/**/*.scss',
          gulp
            .series('AccountPage:styles')
        );
    }
  );

gulp
  .task(
    'AccountPage:js:watch',
    function() {
      gulp
        .watch(
          __dirname + '/build/*.js',
          function(done) {
            browserSync.reload();

            done();
          }
        );
    }
  );

gulp
  .task(
    'AccountPage:browserSync:mockup',
    function() {
      browserSync.init({
        proxy: 'localhost:3000/account',

        // reloadDelay: 102
      });

      browserSync
        .watch(__dirname + '/styles/**/style.css')
        .on('change', browserSync.reload);

    }
  )

gulp
  .task(
    'AccountPage:dev:mockup',
    gulp
      .parallel(
        'AccountPage:styles:watch',
        'AccountPage:js:watch',
        'AccountPage:browserSync:mockup'
      )
  );

