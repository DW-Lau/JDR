"use strict";

//récupération des variables//
var diceType = document.querySelectorAll('.btn--dice'); // diceType.addEventListener('click',function(){
// });

diceType.forEach(function (dice) {
  dice.addEventListener('click', function () {
    // console.log(diceType.data-dice-face);
    var value = diceType.data;
    console.log(value);
  });
});