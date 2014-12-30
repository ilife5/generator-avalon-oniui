'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('avalon-oniui:app bower', function () {
  this.timeout(10000);
  before(function () {
    this.runGen = helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withPrompt({
        packageManagement: "bower",
        appName: "avalon_oniui_yo"
      });
  });

  it('creates files', function (done) {
    this.runGen.on('end', function() {
        console.log('END IN TEST');
        assert.file([
          'bower.json',
          'package.json'
        ]);
        done();
    });
  });
});