'use strict';

var execFile = require('child_process').execFile;
var execFileSync = require('child_process').execFileSync;
var getos = require('getos');

module.exports = function (cb) {
	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	execFile('lsb_release', ['-a', '--short'], function (err, stdout) {
		var obj = {};

		if (err) {
			getos(function (err, res) {
				if (err) {
					cb(err);
					return;
				}

				cb(null, {os: res});
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

module.exports.sync = function () {
	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	try {
		var stdout = execFileSync('lsb_release', ['-a', '--short'], {
			encoding: 'utf8',
			stdio: ['pipe', 'pipe', 'ignore']
		});

		stdout = stdout.split('\n');

		return {
			os: stdout[0],
			name: stdout[1],
			release: stdout[2],
			code: stdout[3]
		};
	} catch (err) {
		throw err;
	}
};
