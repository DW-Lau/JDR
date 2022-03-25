console.log("hello world");
let detectCheatMod=document.querySelector(".input--cheat");
let menuCheatMod=document.querySelector(".cheatModMenu");
// if(detectCheatMod.checked==true){
//     console.log("soir")
// }

function optionsMenu(){console.log(menuCheatMod.className);
    if(menuCheatMod.className="inactiveted"){
        menuCheatMod.classList.remove("inactiveted");
        menuCheatMod.classList.add("activeOptions");
    }else if (menuCheatMod.className="activeOptions"){
        menuCheatMod.classList.remove("activeOptions");
        menuCheatMod.classList.add("inactiveted");
        
        console.log(menuCheatMod.className);
    }
    
}

detectCheatMod.addEventListener("click", optionsMenu);