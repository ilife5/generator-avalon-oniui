'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('avalon-oniui:app fekit', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        packageManagement: "fekit",
        appName: "avalon_oniui_yo"
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'fekit.config',
      'package.json'
    ]);
  });
});
