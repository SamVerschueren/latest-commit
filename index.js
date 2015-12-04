'use strict';
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');
module.exports = function (user, opts) {
	if (typeof user !== 'string') {
		return Promise.reject(new TypeError('Expected a user'));
	}

	opts = opts || {};

	var commits;

	return ghGot('users/' + user + '/events', {token: opts.token})
		.then(function (data) {
			var event = data.body.filter(function (event) {
				return event.type === 'PushEvent';
			})[0];

			if (!event) {
				throw new Error('No contributions found.');
			}

			commits = event.payload.commits;

			return ghGot('repos/' + event.repo.name, {token: opts.token});
		})
		.then(function (data) {
			return {
				repository: data.body,
				commits: commits
			};
		})
		.catch(function () {
			throw new Error('User not found');
		});
};
