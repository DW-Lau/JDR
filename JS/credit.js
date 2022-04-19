const btnCredit=document.querySelector(".exclamationMark");

let overlay=document.querySelector(".txt--infos");
let btnClose=document.querySelector(".close--infos");


btnCredit.addEventListener("click",function(){
    overlay.classList.add("overlay");
});

btnClose.addEventListener("click",function(){
    overlay.classList.remove("overlay");
});

