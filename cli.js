#!/usr/bin/env node
'use strict';

var meow = require('meow');
var linuxDistro = require('./');

meow({
	help: [
		'Usage',
		'  $ linux-distro',
		'',
		'Example',
		'  $ linux-distro',
		'  Ubuntu 14.04 LTS (trusty)'
	]
});

linuxDistro(function (err, data) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(data.name + ' (' + data.code + ')');
});
