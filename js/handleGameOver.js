'use strict';

(function () {
  
  window.handleGameOver = function(finalCount) {
    var gamePage = document.querySelector('.game-page');
    gamePage.classList.add('hidden');
    var endPage = document.querySelector('.end-page');
    endPage.classList.remove('hidden');
    var endHeader = endPage.querySelectorAll('h2');
    var scoreField = endHeader[1].querySelector('span');
    scoreField.textContent = finalCount;       
    var backgroundMusic = document.querySelector('#backgroundMusic'); 
       
    if (finalCount >= 0) {        
      backgroundMusic.src = 'media/victory.mp3';
        
      if(endHeader[0].textContent === '') {
        endHeader[0].textContent = 'Поздравляем!';
      }
        
    } else {
      backgroundMusic.src = 'media/silent.mp3';
      endHeader[0].textContent = '';
    } 
    
    var gameAgain = document.querySelector('#gameAgain');      
    gameAgain.addEventListener('click', function() {
      window.startGameHandler();
      backgroundMusic.src = 'media/pinkPantera.mp3'
      backgroundMusic.currentTime = 0;
    });  
    
  };
  
})();
