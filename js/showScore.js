"use strict";

(function() {
  
  window.showScore = function() {
    var scoreField = document.querySelector('.game-field__settings_score span');
    scoreField.textContent = window.score.getTotalScore();
  };  
  
})();