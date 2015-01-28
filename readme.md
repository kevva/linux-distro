# linux-distro [![Build Status](http://img.shields.io/travis/kevva/linux-distro.svg?style=flat)](https://travis-ci.org/kevva/linux-distro)

> Get the current Linux distro

## Install

```sh
$ npm install --save linux-distro
```

## Usage

```js
var linuxDistro = require('linux-distro');

linuxDistro(function (err, data) {
	if (err) {
		throw err;
	}

	console.log(data.os);
	//=> Ubuntu

	console.log(data.name);
	//=> Ubuntu 14.04 LTS

	console.log(data.release);
	//=> 14.04

	console.log(data.code);
	//=> trusty
});
```

## CLI

```sh
$ npm install --global linux-distro
```

```sh
$ linux-distro --help

Example
  $ linux-distro
  Ubuntu 14.04 LTS (trusty)
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
