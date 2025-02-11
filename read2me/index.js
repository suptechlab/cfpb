/*
 * read2me
 *
 * A work of the public domain from the Consumer Financial Protection Bureau.
 */

var time2read = require('time2read');

function delay(line, cb, resume) {
  var time = time2read(line);
  cb(line);
  setTimeout(function () {
    resume();
  }, time);
}

function run(generatorFunction) {
  var generatorItr = generatorFunction(resume);
  function resume(callbackValue) {
    generatorItr.next(callbackValue);
  }
  generatorItr.next()
}

function read2me(lines, func, cb) {
  if (typeof lines === 'string') lines = [lines];
  if (!Array.isArray(lines)) return new Error('You must provide an array of strings.');
  run(function* myDelayedMessages(resume) {
    for (var i = 0; i < lines.length; i++) {
      yield delay(lines[i], func, resume)
    }
    if (cb) cb();
  })

}

module.exports = read2me;
