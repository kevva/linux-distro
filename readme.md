# linux-distro [![Build Status](https://travis-ci.org/kevva/linux-distro.svg?branch=master)](https://travis-ci.org/kevva/linux-distro)

> Get the current Linux distro


## Install

```
$ npm install --save linux-distro
```


## Usage

```js
const linuxDistro = require('linux-distro');

linuxDistro().then(data => {
	console.log(data);
	/*
	{
		os: 'Ubuntu',
		name: 'Ubuntu 14.04 LTS',
		release: '14.04',
		code: 'trusty'
	}
	*/
});
```


## CLI

```
$ npm install --global linux-distro
```

```
$ linux-distro --help

  Example
    $ linux-distro
    Ubuntu 14.04 LTS (trusty)
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
