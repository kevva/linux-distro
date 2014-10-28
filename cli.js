#!/usr/bin/env node
'use strict';

var linuxDistro = require('./');
var meow = require('meow');

/**
 * Initialize CLI
 */

meow({
    help: [
        'Usage',
        '  linux-distro',
        '',
        'Example',
        '  linux-distro',
        '  Ubuntu 14.04 LTS (trusty)'
    ].join('\n')
});

/**
 * Run
 */

linuxDistro(function (err, data) {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }

    console.log(data.name + ' (' + data.code + ')');
});
