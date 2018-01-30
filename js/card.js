"use strict";
(function() {
  var INITIAL_CARDS_NUM = 9;
  
  var Card = function(value, suit) {
    this.value = value;
    this.suit = suit;
  };
  
  //сформируем колоду полностью  
  var getDeck = function() {
    var value = 0;
    var suit = 0;
    for (var i = 0; i < 52; i++) {
      value = (i % 13) + 1;
      suit = (i % 4) + 1;
      window.card.deck[i] = new Card(value, suit);
    }
  };
  
  //перевод числового значения масти в буквенное
  var getSymbol = function(cards) {
    var suitName = cards.suit;
    switch (suitName) {
      case 1:
          suitName = "H";
          break;
      case 2:
          suitName = "C";
          break;
      case 3:
          suitName = "S";
          break;
      case 4:
          suitName = "D";
          break;
      default:
          suitName = cards.suit;
    }

    return suitName;
  };

  //перевод числового значения карт в буквенные
  var getCardName = function(cards) {
    var cardName = cards.value;
    switch (cardName) {
      case 1:
          cardName = "A";
          break;
      case 11:
          cardName = "J";
          break;
      case 12:
          cardName = "Q";
          break;
      case 13:
          cardName = "K";
          break;
        case 10:
          cardName = "0";
          break;
      default:
          cardName = cards.value;
    }
    return cardName;
  };
  
  //Объединение масти и значения
  var concatCardNameAndSymbol = function(cards) {
    var name = "";
    var symbol = "";
    var arr = [];

    for (var i = 0; i < cards.length; i++) {
      name = getCardName(cards[i]);
      symbol = getSymbol(cards[i]);
      arr.push(name + symbol);
    }

    return arr;
  };

  //создаем блок с рубашкой
  var createCardBack = function () {
    var cardBlock = document.createElement('div');
    cardBlock.classList.add('card__back');
    cardBlock.classList.add('transparent');
    cardBlock.setAttribute('data-tid', 'Card-flipped');
    return cardBlock;
  };
  
  //создаем блок Карта
  var createCard = function(imgSrc, i) {
    var cardBlock = document.createElement('div');
    cardBlock.id = i;
    cardBlock.classList.add('card');
    cardBlock.setAttribute('data-tid', 'Card');
    var cardBackImg = document.createElement('img');
    cardBackImg.setAttribute('alt', 'card');
    cardBackImg.src = 'img/' + imgSrc +'.png';
    cardBackImg.width = '100';
    cardBackImg.height = '140';
    cardBlock.appendChild(cardBackImg);
    cardBlock.appendChild(createCardBack());
    return cardBlock;
  };
  
  //перевернуть карты рубашкой вверх
  var hiddenAllCards = function() {
    var gamePage = document.querySelector('.game-page');
    var cardsTable = gamePage.querySelector('table');
    var cardsTableCell = gamePage.querySelectorAll('td');
    var cardBackArr = cardsTable.querySelectorAll('.card__back');
    for (var i = 0; i < cardBackArr.length; i++) {
      cardBackArr[i].classList.remove('transparent');
    }
  };
  
  window.card = {
    deck: [],
    shuffleDoubleCards: null,
    getShuffleDoubleCards: function() {
      getDeck();
      var randomCardsDeck = window.util.getRandomArray(window.card.deck, INITIAL_CARDS_NUM);
      var cards = concatCardNameAndSymbol(randomCardsDeck);  
      var doubleCards = cards.concat(cards);
      return window.util.getRandomArray(doubleCards, doubleCards.length);
    },
    //начальный показ всех карт с задержкой на 5 сек
    showAllCards: function(cards) {
      var gamePage = document.querySelector('.game-page');
      var cardsTable = gamePage.querySelector('table');
      var cardsTableCell = gamePage.querySelectorAll('td');

      for (var i = 0; i < cardsTableCell.length; i++) {  
        cardsTableCell[i].appendChild(createCard(cards[i], i));  
      }

      setTimeout(function () {
        hiddenAllCards();
        for (var i = 0; i < cardsTableCell.length; i++) {          cardsTableCell[i].addEventListener('click', window.gameProcess.clickCardHandler);
        }
      }, 5000);
    }
  };
  
})();
