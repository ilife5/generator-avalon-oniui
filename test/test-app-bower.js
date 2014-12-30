'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('avalon-oniui:app bower', function () {
  this.timeout(10000);
  before(function (done) {
    console.log(path.join(os.tmpdir(), './temp-test'))
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withPrompt({
        packageManagement: "bower",
        appName: "avalon_oniui_yo"
      }).on('end', function() {
        console.log(done)
        done();
      });
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json'
    ]);
  });
});