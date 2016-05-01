'use strict';
const latestPush = require('latest-push');
const ghGot = require('gh-got');

module.exports = (user, opts) => {
	if (typeof user !== 'string') {
		return Promise.reject(new TypeError('Expected a user'));
	}

	opts = opts || {};

	return latestPush(user, opts)
		.then(push => {
			const commit = push.payload.commits.pop();
			return ghGot(`repos/${push.repo.name}/commits/${commit.sha}`, opts);
		})
		.then(result => result.body);
};
