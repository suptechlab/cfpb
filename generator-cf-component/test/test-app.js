'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('generator-cf-component:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ name: 'cf-test' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'Gruntfile.js',
      '.bowerrc',
      './src/cf-test.less',
      './demo/custom.html',
    ]);
  });
});
