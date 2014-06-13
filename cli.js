#!/usr/bin/env node
'use strict';

var linuxDistro = require('./');
var pkg = require('./package.json');

/**
 * Help screen
 */

function help() {
    console.log(pkg.description);
    console.log('');
    console.log('Example');
    console.log('  $ linux-distro');
    console.log('  Ubuntu 14.04 LTS (trusty)');
}

/**
 * Show help
 */

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
    help();
    return;
}

/**
 * Show package version
 */

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
    console.log(pkg.version);
    return;
}

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
