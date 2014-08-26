'use strict';

var linuxDistro = require('./');
var test = require('ava');

test('get the current Linux distro', function (t) {
    t.plan(5);

    linuxDistro(function (err, data) {
        t.assert(!err);
        t.assert(data.os);
        t.assert(data.name);
        t.assert(data.release);
        t.assert(data.code);
    });
});
