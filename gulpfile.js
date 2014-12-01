'use strict';

var gulp    = require('gulp');
var espower = require('gulp-espower');
var mocha   = require('gulp-mocha');

gulp.task('test:make', function() {
    gulp.src(['test/*.js'])
        .pipe(espower())
        .pipe(gulp.dest('test/espowered'));
});

gulp.task('test:exec', function() {
    gulp.src(['test/espowered/*.js'])
        .pipe(mocha());
});
