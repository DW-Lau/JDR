"use strict";

var btnCredit = document.querySelector(".questionMark");
var overlay = document.querySelector(".txt--infos");
var btnClose = document.querySelector(".close--infos");
btnCredit.addEventListener("click", function () {
  overlay.classList.add("overlay");
});
btnClose.addEventListener("click", function () {
  overlay.classList.remove("overlay");
});