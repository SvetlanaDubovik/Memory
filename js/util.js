"use strict";

(function() {
  var lastTimeout; 
  
  window.util = {
    getRandomValue: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomArray: function (arr, k) {
      var res = [];
      var copyArr = [];
      copyArr = arr.slice();
      for (var i = 0; i < k; i++) {
        var randomIndex = window.util.getRandomValue(0, copyArr.length - 1);
        res.push(copyArr[randomIndex]);
        copyArr.splice(randomIndex, 1);
      }
      return res;
    },
    debounce: function (fun, interval) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(fun, interval);
    }
  };
  
})();
