import test from 'ava';
import fn from './';

test('no user', t => {
	t.throws(fn(), 'Expected a user');
});

test('no contributions', t => {
	t.throws(fn('aypiadfpadfpyasdfe'), 'No contributions found for this user');
});

test('result', async t => {
	const result = await fn('SamVerschueren');
	t.is(result.committer.login, 'SamVerschueren');
});
