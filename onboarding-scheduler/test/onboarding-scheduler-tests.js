'use strict';

var moment = require('moment');
var fixtures = require('./fixtures')
var onboardingScheduler = require('../');

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

var today;

exports.onboardingScheduler = {
  setUp: function(done){
    today = new Date('Tue May 24 2016 12:34:56 GMT-0400 (EDT)');
    done();
  },
  'process new employee messages': function(test){
    test.expect(4);
    test.deepEqual(onboardingScheduler(fixtures.inputs[0], today), fixtures.outputs[0], 'should handle single messages');
    test.deepEqual(onboardingScheduler(fixtures.inputs[1], today), fixtures.outputs[1], 'should handle multiple messages');
    test.deepEqual(onboardingScheduler(fixtures.inputs[2], today), fixtures.outputs[2], 'should handle messages with duplicate days');
    test.deepEqual(onboardingScheduler(fixtures.inputs[3], today), fixtures.outputs[3], 'should handle hella messages with duplicate days');
    test.done();
  },

  'should skip weekends': function(test){
    test.expect(1);
    var msgs = [{
      title: 'This is a message',
      day: 6,
      sent: false
    }];
    var sentMg = {
      title: 'This is a message',
      day: 6,
      sent: false,
      time: '2016-05-31T10:00:00-04:00'
    };
    var actual = onboardingScheduler(msgs, today);
    test.deepEqual(actual[0], sentMg, 'skip weekends');
    test.done();
  }

};
