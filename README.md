# linux-distro [![Build Status](https://travis-ci.org/kevva/linux-distro.svg?branch=master)](https://travis-ci.org/kevva/linux-distro)

> Get the current Linux distro

## Install

```bash
$ npm install --save linux-distro
```

## Usage

```js
var linuxDistro = require('linux-distro');

linuxDistro(function (err, data) {
    if (err) {
        throw err
    }

    console.log(data.distributorId);
    // => Ubuntu

    console.log(data.description);
    // => Ubuntu 14.04 LTS

    console.log(data.release);
    // => 14.04

    console.log(data.codename);
    // => trusty
});
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
