'use strict';

var gulp    = require('gulp');
var espower = require('gulp-espower');
var mocha   = require('gulp-mocha');

var TEST_DIR = './test',
    ESPD_DIR = './test/espowered';

// 中間ファイルを出力する
// gulp.task('test:make', function() {
//     gulp.src([TEST_DIR + '#<{(|.js'])
//         .pipe(espower())
//         .pipe(gulp.dest(ESPD_DIR));
// });

// 中間ファイルを使ってテスト実行する
// gulp.task('test:exec', function() {
//     gulp.src([ESPD_DIR + '#<{(|.js'])
//         .pipe(mocha());
// });

// 中間ファイルが不要で、単に実行するだけならコレでおｋ
gulp.task('test:run', function() {
    gulp.src([TEST_DIR + '/*.js'])
        .pipe(espower())
        .pipe(mocha());
});
