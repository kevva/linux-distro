const execa = require('execa');
const pify = require('pify');
const getos = pify(require('getos'));

module.exports = () => {
	if (process.platform !== 'linux') {
		return Promise.reject(new Error('Only Linux systems are supported'));
	}

	return execa('lsb_release', ['-a', '--short']).then((res) => {
		const stdout = res.stdout.split('\n');

		return {
			os: stdout[0],
			name: stdout[1],
			release: stdout[2],
			code: stdout[3]
		};
	}).catch(() => {
		return getos().then((res) => {
			return {
				os: res.dist,
				name: `${res.dist} ${res.release}`,
				release: res.release,
				code: res.codename
			};
		});
	});
};
