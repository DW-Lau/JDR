"use strict";

var btnDice = document.querySelectorAll('.btn--dice'); //récupération de TOUS les boutons de Des

var displayDice = document.querySelector('.draw--display'); //récupération de l'image du dés par défault;

var btnDraw = document.querySelector(".draw--btn");
var convFace; //servira à convertir la valeur récupérer du des en nombre

var min = 1;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = btnDice[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var dice = _step.value;
    //Pour chaque des de boutonDes
    dice.addEventListener('click', getDice);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

btnDraw.addEventListener("click", drawDices);

function drawDices() {
  if (convFace !== undefined) {
    randomThrow(min, convFace);
  } else {
    console.log("Aucun dès séléctionné");
  }
}

function randomThrow(min, convFace) {
  var basicResult = Math.floor(Math.random() * (convFace - min) + min);
  console.log(basicResult);
}

function getDice() {
  //récupérer la valeur du data et convertie en nombre 
  var faceDice = this.dataset.dice;
  convFace = parseInt(faceDice);
  displayDice.src = "Assets/Des/DES" + faceDice + ".png";
  return convFace;
}