import test from 'ava';
import fn from './';

test('get the current linux distro', async t => {
	const data = await fn();

	t.truthy(data.os);
	t.truthy(data.name);
	t.truthy(data.release);
	t.truthy(data.code);
});
