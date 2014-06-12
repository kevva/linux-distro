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

    console.log(data.description);
    // => Ubuntu 14.04 LTS
});
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
