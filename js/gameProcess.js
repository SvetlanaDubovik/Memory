"use strict";

(function() {

  var ALL_PAIRS = 9;
  
  var doActiveCard = function(block) {
    var cardBack = block.querySelector('.card__back');
    cardBack.classList.add('transparent');    
  };
  
  var deleteCards = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].parentElement.removeChild(arr[i]);
    }
    var successSound = document.querySelector('.successSound');

    var cardsArr = document.querySelectorAll('.card');
    if(cardsArr.length === 0) {
      var gamePage = document.querySelector('.game-page');
      gamePage.classList.add('hidden');
      var endPage = document.querySelector('.end-page');
      endPage.classList.remove('hidden');
      var scoreField = endPage.querySelector('h2 span');
      scoreField.textContent = window.score.totalScore;
       
      var backMusic = document.querySelector('#backMusic');
 
      
      if (window.score.totalScore >= 0) {        
        window.canvas.startCanvas();
        backMusic.src = 'media/lose.mp3';
      } else {
        backMusic.src = 'media/silent.mp3';
      }
      var gameAgain = document.querySelector('#gameAgain');
      gameAgain.addEventListener('click', function() {
        window.game.startGameHandler();
//        var audio = document.querySelector('audio');
        backMusic.src = 'media/pinkPantera.mp3'
        backMusic.currentTime = 0;
      });        
    } else {
      successSound.play();
    }

  };
  
  var checkGameResult = function(cards) {
    var cardId1 = cards[0].id;
    var cardId2 = cards[1].id;
    var cardValue1 = window.card.shuffleDoubleCards[cardId1];
    var cardValue2 = window.card.shuffleDoubleCards[cardId2];
    
    if(cardValue1 === cardValue2) {
      setTimeout(function() {
        window.score.countPoints(true);
        deleteCards(cards);
      }, 750);       
    } else {
      setTimeout(function() {
        window.score.countPoints(false);
//        var failureSound = document.querySelector('.failureSound');
//        failureSound.play();
        cards[0].classList.remove('active');
        cards[1].classList.remove('active');
        var cardBack1 = cards[0].querySelector('.card__back');
        var cardBack2 = cards[1].querySelector('.card__back');
        cardBack1.classList.remove('transparent');
        cardBack2.classList.remove('transparent');
      }, 750);
    }
  };
  
  window.gameProcess = {
    openPairs: 0,
    totalScore: 0,
    clickCardHandler: function (evt) {
      var target = evt.target;
      var divBlock = target.parentNode;
      if(divBlock.tagName === 'DIV' ) {
      var divBlockId = target.parentNode.id;
      var activeCards = document.querySelectorAll('.active');
        
      switch(activeCards.length) {
        case 0 :
          divBlock.classList.add('active');
          doActiveCard(divBlock);
          break;
        case 1: 
          divBlock.classList.add('active');
          doActiveCard(divBlock);
          var activeCardsArr = document.querySelectorAll('.active');
          if (activeCardsArr.length === 2) {
            checkGameResult(activeCardsArr);
          }
          break;
        } 
      }
    }    
  };
})();
