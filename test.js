import test from 'ava';
import fn from './';

test('no user', async t => {
	await t.throws(fn(), 'Expected a user');
});

test('no contributions', async t => {
	await t.throws(fn('aypiadfpadfpyasdfe'), 'User not found');
});

test('result', async t => {
	const result = await fn('SamVerschueren');

	t.is(result.repository.name, 'latest-commit');
	t.is(result.commits.length, 1);
});
