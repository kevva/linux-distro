'use strict';

var camelize = require('underscore.string').camelize;
var execFile = require('child_process').execFile;

/**
 * Get the current Linux distro
 *
 * @param {Function} cb
 * @api public
 */

module.exports = function (cb) {
    execFile('lsb_release', ['-a'], function (err, stdout) {
        var obj = {};

        if (err) {
            return cb(err);
        }

        stdout = stdout.replace(/\t/g, '').replace(/\r?\n?[^\r\n]*$/g, '').split('\n');
        stdout.forEach(function (s) {
            s = s.split(/:(.+)?/);
            s[0] = s[0].toLowerCase();
            obj[camelize(s[0])] = s[1];
        });

        cb(null, obj);
    });
};
