"use strict";
(function() {  

  var checkHiddenPage = function(page) {
    if(!page.classList.contains('hidden')) {
      page.classList.add('hidden');
    }
  };
  
  var clearPage = function() {
    window.card.deck = [];
    window.card.shuffleDoubleCards = null;
    var gameTable = document.querySelector('table');
    var cardsBlock = gameTable.querySelectorAll('.card');
    var gameTableCell = document.querySelectorAll('td');
    for (var i = 0; i < gameTableCell.length; i++) {
      gameTableCell[i].removeEventListener('click', window.gameProcess.clickCardHandler);
    }
    for (var i = 0; i < cardsBlock.length; i++) {
      cardsBlock[i].parentElement.removeChild(cardsBlock[i]);
    }
    window.score.totalScore = 0;
    window.score.showResult(window.gameProcess.totalScore);
    window.score.openPairs = 0;
  };
  
  window.game = {
    startGameHandler: function() {
      clearPage();
      var startPage = document.querySelector('.start-page');
      var gamePage = document.querySelector('.game-page');
      var endPage = document.querySelector('.end-page'); 
      var audio = document.querySelector('audio');

      checkHiddenPage(startPage);
      checkHiddenPage(endPage);
      gamePage.classList.remove('hidden');
      gamePage.addEventListener('mousemove', function(evt) {
        evt.preventDefault();
      });
      
      window.card.shuffleDoubleCards = window.card.getShuffleDoubleCards();
      window.card.showAllCards(window.card.shuffleDoubleCards);
      var btnReload = document.querySelector('#reloadGame');
      btnReload.addEventListener('click', function () {
        window.util.debounce(function () {
          audio.currentTime = 0;
          window.game.startGameHandler();
        });
          
      });
    }      
  };
  
  var btnStart = document.querySelector('#startGame');
  btnStart.addEventListener('click', window.game.startGameHandler);
  
  
})();
