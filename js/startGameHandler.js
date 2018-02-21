'use strict';

(function() {
  
  var hidePage = function(page) {
    if(!page.classList.contains('hidden')) {
      page.classList.add('hidden');
    }
  };

  var showPage = function(page) {
    if(page.classList.contains('hidden')) {
      page.classList.remove('hidden');
    }
  };
  
  var clearPage = function() {
    var gameTable = document.querySelector('table');
    var cards = gameTable.querySelectorAll('.card');
    var gameTableCell = document.querySelectorAll('td');
    for (var i = 0; i < gameTableCell.length; i++) {
      gameTableCell[i].removeEventListener('click', window.clickCardHandler);
    }
    for (var j = 0; j < cards.length; j++) {
      cards[j].parentElement.removeChild(cards[j]);
    }
  };
  
  window.startGameHandler = function() {
    clearPage();
    var startPage = document.querySelector('.start-page');
    var gamePage = document.querySelector('.game-page');
    var endPage = document.querySelector('.end-page'); 
    var backgroundMusic = document.querySelector('#backgroundMusic');

    hidePage(startPage);
    hidePage(endPage);
    showPage(gamePage);
    
    //чтобы не было видно значения карт при перетаскивании таблицы мышью
    gamePage.addEventListener('mousemove', function(evt) {
      evt.preventDefault();
    });
    
    window.game.startNew();
      
    var btnReload = document.querySelector('#reloadGame');
    btnReload.addEventListener('click', function () {
      window.util.debounce(function () {
        backgroundMusic.currentTime = 0;
        window.startGameHandler();
      }, window.settings.DEBOUNCE_INTERVAL_MS);          
    });   
  };
 
  var btnStart = document.querySelector('#startGame');
  btnStart.addEventListener('click', window.startGameHandler);
  
})();