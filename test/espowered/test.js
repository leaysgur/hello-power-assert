'use strict';
var assert = require('power-assert');
describe('\u30B5\u30F3\u30D7\u30EB\u30C6\u30B9\u30C8', function () {
    it('\u30C6\u30B9\u30C8\u9805\u76EE: 1', function () {
        assert(assert._expr(assert._capt(1 + 1, 'arguments/0'), {
            content: 'assert(1 + 1, 2)',
            filepath: '/Users/y_sugiura/Desktop/sandbox/hello-power-assert/test/test.js',
            line: 6
        }), 2);
    });
    it('\u30C6\u30B9\u30C8\u9805\u76EE: 2', function () {
        assert.notDeepEqual({ a: 1 }, {
            a: 1,
            b: 2
        });
    });
    it('\u30C6\u30B9\u30C8\u9805\u76EE: 3', function () {
        var zero = 0, two = 2;
        var arr = [
            1,
            2,
            3
        ];
        assert(assert._expr(assert._capt(assert._capt(assert._capt(arr, 'arguments/0/left/callee/object').indexOf(assert._capt(zero, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(two, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert(arr.indexOf(zero) === two)',
            filepath: '/Users/y_sugiura/Desktop/sandbox/hello-power-assert/test/test.js',
            line: 14
        }));
    });
});