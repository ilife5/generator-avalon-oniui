'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('avalon-oniui:app bower', function () {
  console.log('here')
  before(function (done) {
    console.log('here2')
    this.timeout(10000)
    try {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withOptions({ 'skip-install': true })
        .withPrompt({
          packageManagement: "bower",
          appName: "avalon_oniui_yo"
        })
        .on('end', function() {
          console.log('here6');
          done();
        });
    } catch(e) {
      console.log(e);
      done();
    }
    
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json'
    ]);
  });
});