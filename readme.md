# latest-commit [![Build Status](https://travis-ci.org/SamVerschueren/latest-commit.svg?branch=master)](https://travis-ci.org/SamVerschueren/latest-commit)

> Get the latest commit of a GitHub user.


## Install

```
$ npm install --save latest-commit
```


## Usage

```js
const latestCommit = require('latest-commit');

latestCommit('SamVerschueren', {token: 'foo'}).then(commit => {
	//=> commit object
});
```


## API

### latestCommit(user, [options])

Returns a promise for the latest commit.

#### user

Type: `string`

User to retrieve the latest commit for.

#### options

##### token

Type: `string`

GitHub [access token](https://github.com/settings/tokens/new).

Can be overriden globally with the GITHUB_TOKEN environment variable.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
