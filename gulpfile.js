'use strict';

var gulp    = require('gulp');
var espower = require('gulp-espower');
var mocha   = require('gulp-mocha');

var TEST_DIR = './test',
    ESPD_DIR = './test/espowered';

gulp.task('test:make', function() {
    gulp.src([TEST_DIR + '/*.js'])
        .pipe(espower())
        .pipe(gulp.dest(ESPD_DIR));
});

gulp.task('test:exec', function() {
    gulp.src([ESPD_DIR + '/*.js'])
        .pipe(mocha());
});
