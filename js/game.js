'use strict';

(function() {
  
  window.game = new function() {
    
    var shownCards = [];
    var cards = window.cards;
    var deletedPairsCount = 0;
    var score = window.score;
    var ALL_PAIRS = window.settings.ALL_PAIRS;
    var CARDS_PAIR_SHOW_INTERVAL_MS = window.settings.CARDS_PAIR_SHOW_INTERVAL_MS;
    var showScore = window.showScore;
    var successSound = document.querySelector('.successSound');
    
    var shownCardsAreTheSame = function() {
      return cards.areTheSame(shownCards[0], shownCards[1]);
    };
    
    var hideCardsPair = function() {
      cards.hideCard(shownCards[0]);
      cards.hideCard(shownCards[1]);
    };
    
    var deleteCardsPair = function() {
      cards.deleteCard(shownCards[0]);
      cards.deleteCard(shownCards[1]);
    };
    
    var handleSuccessfullStep = function() {
      score.countScore(true);
      showScore();
      deleteCardsPair();
      deletedPairsCount++;
      shownCards = [];
      successSound.play();
    
      if(deletedPairsCount === ALL_PAIRS) {
        window.handleGameOver(score.getTotalScore());

      }
    };
    
    var handleFailStep = function() {
      score.countScore(false);
      showScore();
      hideCardsPair();
      shownCards = [];
    };
    
    this.startNew = function() {
      score.reset();
      shownCards = [];
      cards.refresh();
      showScore();
      cards.showAndHideAll();
      deletedPairsCount = 0;
    };
    
    this.clickCardProcess = function(card) {
      if(shownCards.length < 2 && shownCards.indexOf(card) === -1) {
        cards.showCard(card);
        shownCards.push(card);

        if (shownCards.length === 2) {         
          if(shownCardsAreTheSame()) {
            setTimeout(handleSuccessfullStep, CARDS_PAIR_SHOW_INTERVAL_MS);
          } else {
            setTimeout(handleFailStep, CARDS_PAIR_SHOW_INTERVAL_MS);
          }
        } 
      }
    };
  }();
  
})();