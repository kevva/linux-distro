/*global describe, it */
'use strict';

var assert = require('assert');
var linuxDistro = require('./');

describe('linuxDistro()', function () {
    it('should get the current Linux distro', function (cb) {
        linuxDistro(function (err, data) {
            assert(!err);
            assert(data.os);
            assert(data.name);
            assert(data.release);
            assert(data.code);
            cb();
        });
    });
});
