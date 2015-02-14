'use strict';

var linuxDistro = require('./');
var test = require('ava');

test('get the current linux distro', function (t) {
	t.plan(5);

	linuxDistro(function (err, data) {
		t.assert(!err, err);
		t.assert(data.os);
		t.assert(data.name);
		t.assert(data.release);
		t.assert(data.code);
	});
});

test('synchronously get the current linux distro', function (t) {
	t.plan(4);

	var data = linuxDistro.sync();
	t.assert(data.os);
	t.assert(data.name);
	t.assert(data.release);
	t.assert(data.code);
});
