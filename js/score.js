"use strict";

(function() {

  var ALL_PAIRS = 9;
  
  window.score = {
    openPairs: 0,
    totalScore: 0,
    countPoints: function(flag) {
      var score = 0;
      if (flag) {
        window.score.openPairs++;
        score = (ALL_PAIRS - window.score.openPairs) * 42;
        window.score.totalScore += score;
      } else {
        score = window.score.openPairs * 42;
        window.score.totalScore -= score;
      } 
//      if (window.score.totalScore < 0) {
//        window.score.totalScore = 0;
//      }           
      window.score.showResult(window.score.totalScore);
    },   
    showResult: function(count) {
      var scoreField = document.querySelector('.game-field__settings_score span');
      scoreField.textContent = count;
    }
  };
})();
