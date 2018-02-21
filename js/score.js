"use straict";

(function() {
  
  var POINT = window.settings.POINT;
  var ALL_PAIR = window.settings.ALL_PAIRS;
  
  window.score = new function() {    
    var totalScore = 0;
    var openPairs = 0;
    
    this.countScore = function(toIncrease) {      
      var stepScore = 0;
      
      if (toIncrease) {
        openPairs++;
        stepScore = (ALL_PAIR - openPairs) * POINT;
        totalScore += stepScore;
      } else {
        stepScore = openPairs * POINT;
        totalScore -= stepScore;
      }       
    };
    
    this.reset = function() {
      openPairs = 0;
      totalScore = 0;
    };
    
    this.getTotalScore = function() {
      return totalScore;
    };
    
  }();

  
})();