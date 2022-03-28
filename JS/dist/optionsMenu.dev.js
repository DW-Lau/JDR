"use strict";

var detectCheatMod = document.querySelector(".input--cheat");
var menuCheatMod = document.querySelector("[data-info]"); //récupére  la div cachée "cheatModMenu"

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
      break;

    default:
      console.log("Une erreur est survenue");
  }
}

detectCheatMod.addEventListener("click", affichageMenu);