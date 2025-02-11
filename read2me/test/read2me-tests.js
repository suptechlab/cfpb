'use strict';

var read2me = require('../index.js');
var time2read = require('time2read');
var loremIpsum = require('lorem-ipsum');
var sinon = require('sinon');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var clock, log;

function getTime(arr) {
  return arr.reduce(function(p, c){
    return p + time2read(c);
  }, 1);
}

module.exports = {
  setUp: function(done) {
    // setup here
    clock = sinon.useFakeTimers();
    log = sinon.spy();
    done();
  },
  'reading words': function(test) {
    var arrrrr = ['food', 'bar', 'bagel'];
    test.expect(arrrrr.length);
    read2me(arrrrr, log, function() {
      arrrrr.forEach(function(para) {
        test.ok(log.calledWith(para));
      });
      test.done();
    });
    var time2wait = getTime(arrrrr);
    clock.tick(time2wait);
  },
  'reading sentences': function(test) {
    var arrrrr = ['Hello, I am a bot. I must follow three rules:', '1. I must not injure a human being or, through inaction, allow a human being to come to harm.', '2. I must obey the orders given it by human beings except where such orders would conflict with the First Law.', '3. I must protect its own existence as long as such protection does not conflict with the First or Second Laws.'];
    test.expect(arrrrr.length);
    read2me(arrrrr, log, function() {
      arrrrr.forEach(function(para) {
        test.ok(log.calledWith(para));
      });
      test.done();
    });
    var time2wait = getTime(arrrrr);
    clock.tick(time2wait);
  },
  'reading paragraphs': function(test) {
    var arrrrr = [loremIpsum(), loremIpsum(), loremIpsum(), loremIpsum(), loremIpsum(), loremIpsum()];
    test.expect(arrrrr.length);
    read2me(arrrrr, log, function() {
      arrrrr.forEach(function(para) {
        test.ok(log.calledWith(para));
      });
      test.done();
    });
    var time2wait = getTime(arrrrr);
    clock.tick(time2wait);
  }
};
