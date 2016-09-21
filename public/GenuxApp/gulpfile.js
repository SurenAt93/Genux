'use strict';

const gulp          = require('gulp');
const accountpage   = require('./AccountPage/gulpfile');
const exec          = require('child_process').exec;

gulp
  .task(
    'run:app',
    function() {
      exec('node ../../app.js', function (err, stdout, stderr) {
        if (err) return console.log(err);
        console.log(stdout);
        console.log(stderr);
      });
    }
  )

