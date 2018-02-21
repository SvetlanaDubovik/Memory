var chai = require('chai');
var mocha  = require('mocha');
var assert = chai.assert;

var scoreJS = require('../js/score.js');

//var score = new Score();
var countScore = scoreJS.countScore;

describe('countScore', function() {
  
  it('countScore should 336', function() {
    assert.equal(1, countScore.openPairs);
  });
  
});