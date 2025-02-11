var exec = require('child_process').execFile;
var getHelpText = require('../lib/getHelptext');
var getVersion = require('../lib/getVersion');

exports.cli = {
  setUp: function testSetup(done) {
    done();
  },
  'Returns helptext with flag -h': function testHelpWithH(test) {
    exec('./cli.js', ['-h'], function helpTextWithH(error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString());
        throw error;
      } else {
        test.equal(stdout.toString().trim(), getHelpText().toString().trim());
        test.done();
      }
    })
  },
  'Returns helptext with flag --help': function testHelpWithHelp(test) {
    exec('./cli.js', ['--help'], function helpTextWithHelp(error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString());
        throw error;
      } else {
        test.equal(stdout.toString().trim(), getHelpText().toString().trim());
        test.done();
      }
    })
  },
  'Returns version with flag -v': function testVersionWithV(test) {
    exec('./cli.js', ['-v'], function versionWithV (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString());
        throw error;
      } else {
        test.equal(stdout.toString().trim(), getVersion());
        test.done();
      }
    })
  },
  'Returns version with flag --version': function testVersionWithVersion(test) {
    exec('./cli.js', ['--version'], function versionWithV (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString());
        throw error;
      } else {
        test.equal(stdout.toString().trim(), getVersion());
        test.done();
      }
    })
  }
};