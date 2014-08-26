'use strict';

var getos = require('getos');
var execFile = require('child_process').execFile;

/**
 * Get the current Linux distro
 *
 * @param {Function} cb
 * @api public
 */

module.exports = function (cb) {
    execFile('lsb_release', ['-a', '--short'], function (err, stdout) {
        var obj = {};

        if (err) {
            getos(function (err, res) {
                if (err) {
                    cb(err);
                    return;
                }

                cb(null, { os: res });
            });
        }

        stdout = stdout.split('\n');

        obj.os = stdout[0];
        obj.name = stdout[1];
        obj.release = stdout[2];
        obj.code = stdout[3];

        cb(null, obj);
    });
};
