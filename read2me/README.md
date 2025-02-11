# read2me [![Build Status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url]

> Pass strings to a function at a reading pace to help chat bots feel more human. [time2read](https://github.com/cfpb/time2read) is used for pausing between sentences.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install read2me --save
```

## Usage

```javascript
var read2me = require('read2me');
var sentences = [
  'Hello, I am a bot. I must follow three rules:',
  '1. I must not injure a human being or, through inaction, allow a human being to come to harm.',
  '2. I must obey the orders given by human beings except where such orders would conflict with the First Law.',
  '3. I must protect my own existence as long as such protection does not conflict with the First or Second Laws.'
];

read2me(sentences, chat, cb);

// However you get your bot to say something, e.g. res.send if you're using Hubot
// https://github.com/github/hubot/blob/master/docs/scripting.md#send--reply
function chat(sentence) {
  console.log(sentence);
}

function cb() {
  console.log("I'm all done talkin'!");
}
```

Results in:

```
Hello, I am a bot. I must follow three rules:
// pauses 3025 milliseconds
1. I must not injure a human being or, through inaction, allow a human being to come to harm.
// pauses 5185 milliseconds
2. I must obey the orders given by human beings except where such orders would conflict with the First Law.
// pauses 5815 milliseconds
3. I must protect my own existence as long as such protection does not conflict with the First or Second Laws.
// pauses 5950 milliseconds
I'm all done talkin'!
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/


[npm-image]: https://img.shields.io/npm/v/read2me.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/read2me
[travis-image]: https://img.shields.io/travis/cfpb/read2me.svg?style=flat-square
[travis-url]: https://travis-ci.org/cfpb/read2me
