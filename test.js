/*global describe, it */
'use strict';

var assert = require('assert');
var linuxDistro = require('./');

describe('linuxDistro()', function () {
    it('should get the current Linux distro', function (cb) {
        linuxDistro(function (err, data) {
            assert(!err);
            assert(data.distributorId);
            assert(data.description);
            assert(data.release);
            assert(data.codename);
            cb();
        });
    });
});
