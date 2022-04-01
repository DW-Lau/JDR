"use strict";

var btnDice = document.querySelectorAll('.btn--dice'); //récupération de TOUS les boutons de Des

var displayDice = document.querySelector('.draw--display'); //récupération de l'image du dés par défault;

var displayBasicResult = document.querySelector('.numberDrawNull'); //récupére le ? par default à gauche, résultat du lancer de des.

var displayAddResult = document.querySelector('.numberResultNull'); //récupère le ? par défault à droite, celui-ci sera le résultat après calcul des options

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

function getDice() {
  //récupérer la valeur du data et convertie en nombre 
  var faceDice = this.dataset.dice;
  convFace = parseInt(faceDice);
  displayDice.src = "Assets/Des/DES" + faceDice + ".png";
  return convFace;
}

function drawDices() {
  //lancer de des
  //Réiniitalisation après le 1er lancer//
  displayBasicResult.innerHTML = "?";
  displayBasicResult.style.webkitTextStrokeColor = "#957D03"; //------------------------------------//  

  if (convFace !== undefined) {
    //vérification d'une valeur
    randomThrow(min, convFace);
  }
} //


function randomThrow(min, convFace) {
  var basicResult = Math.floor(Math.random() * (convFace - min) + min);
  displayBasicResult.innerHTML = basicResult; //afiche le résultat du des
  //--------RECUPERATION DES  OPTIONS--------//

  var bonusCheck = document.querySelector('.input--bonus').value;
  var malusCheck = document.querySelector('.input--malus').value; //--------FIN RECUPERATION DES OPTIONS--------//

  critics(basicResult, convFace);
  checkOptions(bonusCheck, malusCheck, basicResult);
}

function checkOptions(bonusCheck, malusCheck, basicResult) {
  var bonus = parseInt(bonusCheck);
  var malus = parseInt(malusCheck);

  if (bonus || malus !== 0) {
    var optionsResult;

    if (bonus > 0) {
      optionsResult = basicResult + bonus;
      displayAddResult.innerHTML = optionsResult; //affiche le résultat après calcul des options

      bonusCheck.value = "0";
    } else if (malus > 0) {
      optionsResult = basicResult - malus;
      displayAddResult.innerHTML = optionsResult; //affiche le résultat après calcul des options

      malusCheck.innerHTML = "0";
    }
  } else {
    displayAddResult.innerHTML = basicResult;
  }
}

function critics(basicResult, convFace) {
  var succes = convFace - 1;

  if (basicResult == convFace || basicResult == succes) {
    displayBasicResult.style.webkitTextStrokeColor = "green";
  } else if (basicResult == 1) {
    displayBasicResult.style.webkitTextStrokeColor = "red";
  }
}