'use strict';
var test = require('ava');
var linuxDistro = require('./');

test('get the current linux distro', function (t) {
	t.plan(5);

	linuxDistro(function (err, data) {
		t.assert(!err, err);
		t.assert(data.os, data.os);
		t.assert(data.name, data.name);
		t.assert(data.release, data.release);
		t.assert(data.code, data.code);
	});
});
