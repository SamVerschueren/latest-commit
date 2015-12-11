'use strict';
var latestPush = require('latest-push');
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');

module.exports = function (user, opts) {
	if (typeof user !== 'string') {
		return Promise.reject(new TypeError('Expected a user'));
	}

	opts = opts || {};

	return latestPush(user, opts)
		.then(function (push) {
			var commit = push.payload.commits.pop();

			return ghGot('repos/' + push.repo.name + '/commits/' + commit.sha, opts);
		})
		.then(function (result) {
			return result.body;
		});
};
