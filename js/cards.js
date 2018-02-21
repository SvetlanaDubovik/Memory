'use strict';

(function() {
  
  var createCardBack = function () {
    var card = document.createElement('div');
    card.classList.add('card__back');
    card.classList.add('transparent');
    card.setAttribute('data-tid', 'Card-flipped');
    return card;
  };
  
  var createCard = function(imgSrc, cardId) {
    var card = document.createElement('div');
    card.id = cardId;
    card.classList.add('card');
    card.setAttribute('data-tid', 'Card');
    var cardImg = document.createElement('img');
    cardImg.setAttribute('alt', 'card');
    cardImg.src = 'img/' + imgSrc +'.png';
    cardImg.width = '100';
    cardImg.height = '140';
    card.appendChild(cardImg);
    card.appendChild(createCardBack());
    return card;
  };
  
  var hideAllCards = function() {
    var gamePage = document.querySelector('.game-page');
    var cardsTable = gamePage.querySelector('table');
    var cardBackList = cardsTable.querySelectorAll('.card__back');
    for (var i = 0; i < cardBackList.length; i++) {
      cardBackList[i].classList.remove('transparent');
    }
  };
   
  window.cards = new function() {
    
    var cardNames = window.generateCardNames();
    
    this.showAndHideAll = function() {      
      var gamePage = document.querySelector('.game-page');
      var cardsTableCells = gamePage.querySelectorAll('td');

      for (var i = 0; i < cardsTableCells.length; i++) {  
        cardsTableCells[i].appendChild(createCard(cardNames[i], i)); 
      }
      
      window.util.debounce(function() {
        hideAllCards();
        for (var i = 0; i < cardsTableCells.length; i++) {      
          cardsTableCells[i].addEventListener('click', window.clickCardHandler);
        }
      }, window.settings.ALL_CARDS_SHOW_INTERVAL_MS);       
    };
    
    this.refresh = function() {
      cardNames = window.generateCardNames();
    };
    
    this.showCard = function(card) {
      var cardBack = card.querySelector('.card__back');
      cardBack.classList.add('transparent');   
    };
    
    this.hideCard = function(card) {
      var cardBack = card.querySelector('.card__back');
      cardBack.classList.remove('transparent');   
    };
    
    this.deleteCard = function(card) {
       card.parentElement.removeChild(card);
    };
    
    this.areTheSame = function(card1, card2) {
      var cardId1 = card1.id;
      var cardId2 = card2.id;      
      return cardNames[cardId1] === cardNames[cardId2];
    };
    
    this.areAllDeleted = function() {
      var cards = document.querySelectorAll('.card');
      return cards.length === 0;
    }; 
    
  }();  
  
})();