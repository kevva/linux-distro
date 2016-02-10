'use strict';
var execFile = require('child_process').execFile;
var getos = require('getos');

module.exports = function (cb) {
	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	execFile('lsb_release', ['-a', '--short'], function (err, stdout) {
		if (err) {
			getos(function (err, res) {
				if (err) {
					cb(err);
					return;
				}

				cb(null, {
					os: res.dist,
					name: res.dist + ' ' + res.release,
					release: res.release,
					code: res.codename
				});
			});

			return;
		}

		stdout = stdout.split('\n');

		cb(null, {
			os: stdout[0],
			name: stdout[1],
			release: stdout[2],
			code: stdout[3]
		});
	});
};
