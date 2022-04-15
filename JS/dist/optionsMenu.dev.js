"use strict";

var detectCheatMod = document.querySelector(".input--cheat");
var menuCheatMod = document.querySelector("[data-info]"); //récupére  la div cachée "cheatModMenu"

var critSucces = document.querySelector(".cheatsucces");
var menuSucces = document.querySelector("[data-succes]");
var critFail = document.querySelector(".cheatfail");
var menuFail = document.querySelector("[data-fail]");

function affichageMenu() {
  //modification du name class pour faire apparaître la div voulue
  var classMenu = menuCheatMod.className;

  switch (classMenu) {
    case "inactivated":
      menuCheatMod.classList.add("activeOptions"); //apparition de la div par le css

      menuCheatMod.classList.remove("inactivated");
      break;

    case "activeOptions":
      menuCheatMod.classList.add("inactivated"); //désactive la div par le css

      menuCheatMod.classList.remove("activeOptions");
      critSucces.classList = "cheatsucces";
      critFail.classList = "cheatfail";
      break;

    default:
      console.log("Une erreur est survenue");
  }
}

function activeSucces() {
  //modification du name class pour faire apparaître la div voulue
  critSucces.classList.add("activeSucces"); //apparition de la div par le css

  critSucces.classList.remove("cheatsucces");
  critFail.classList.remove("activeFail"); //supprime la class ajouté l'échec critique
}

function activeFail() {
  //modification du name class pour faire apparaître la div voulue
  critFail.classList.add("activeFail"); //apparition de la div par le css

  critFail.classList.remove("cheatfail");
  critSucces.classList.remove("activeSucces"); //supprime la class ajouter par la réussite critique
}

detectCheatMod.addEventListener("click", affichageMenu);
critSucces.addEventListener("click", activeSucces);
critFail.addEventListener("click", activeFail);