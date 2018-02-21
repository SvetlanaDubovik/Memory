"use strict";

(function() {
  
  var getSuitName = function(suitNumber) {
    var suitName = '';
    switch (suitNumber) {
      case 1:
        suitName = 'H';
        break;
      case 2:
        suitName = 'C';
        break;
      case 3:
        suitName = 'S';
        break;
      case 4:
        suitName = 'D';
        break;
    }
    return suitName;
  };
  
  var getValueName = function(valueNumber) {
    var valueName = '';
    switch (valueNumber) {
      case 1:
        valueName = 'A';
        break;
      case 11:
        valueName = 'J';
        break;
      case 12:
        valueName = 'Q';
        break;
      case 13:
        valueName = 'K';
        break;
      case 10:
        valueName = '0';
        break;
      default:
        valueName = valueNumber;
    }
    return valueName;
  };
    
  var getDeck = function() {
    var valueNumber = 0;
    var suitNumber = 0;
    var deck = [];
    for (var i = 0; i < 52; i++) {
      valueNumber = (i % 13) + 1;
      suitNumber = (i % 4) + 1;
      var value = getValueName(valueNumber);
      var suit = getSuitName(suitNumber);
      deck[i] = value + suit;
    }
    return deck;
  };  
  
  var deck = getDeck();
  
  window.generateCardNames = function() {
    var cardNames = window.util.getRandomArray(deck, window.settings.ALL_PAIRS);
    var doubleCardNames = cardNames.concat(cardNames);    
    return window.util.getRandomArray(doubleCardNames, doubleCardNames.length);
  };
  
})();