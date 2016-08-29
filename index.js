'use strict';
const execa = require('execa');
const getos = require('getos');
const pify = require('pify');

module.exports = () => {
	if (process.platform !== 'linux') {
		return Promise.reject(new Error('Only Linux systems are supported'));
	}

	return execa('lsb_release', ['-a', '--short']).then(res => {
		const stdout = res.stdout.split('\n');

		return {
			os: stdout[0],
			name: stdout[1],
			release: stdout[2],
			code: stdout[3]
		};
	}).catch(() => {
		return pify(getos).then(res => {
			if (!res) {
				throw new Error('Your distro couldn\'t be determined');
			}
			return {
				os: res.dist || 'Unknown',
				name: `${res.dist || ''} ${res.release || ''}`,
				release: res.release || '',
				code: res.codename || ''
			};
		});
	});
};
