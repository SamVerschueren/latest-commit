import test from 'ava';
import fn from './';

test('no user', async t => {
	await t.throws(fn(), 'Expected a user');
});

test('no contributions', async t => {
	await t.throws(fn('aypiadfpadfpyasdfe'), 'No contributions found for this user');
});

test('result', async t => {
	const result = await fn('SamVerschueren');

	t.is(result.committer.login, 'SamVerschueren');
});
