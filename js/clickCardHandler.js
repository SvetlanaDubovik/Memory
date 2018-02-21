'use strict';

(function() {
  
  window.clickCardHandler = function(evt) {
    var target = evt.target;
    var block = target.parentNode;
    
    if(block.tagName === 'DIV' ) { 
      window.game.clickCardProcess(block);      
    }
  };
  
})();