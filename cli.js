#!/usr/bin/env node
'use strict';
const meow = require('meow');
const linuxDistro = require('./');

meow(`
	Usage
	  $ linux-distro

	Example
	  $ linux-distro
	  Ubuntu 14.04 LTS (trusty)
`);

linuxDistro().then(data => console.log(`${data.name} (${data.code})`));
