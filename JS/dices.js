let btnDice=document.querySelectorAll('.btn--dice');//récupération de TOUS les boutons de Des
let displayDice=document.querySelector('.draw--display');//récupération de l'image du dés par défault;

let displayBasicResult=document.querySelector('.numberDrawNull');//récupére le ? par default à gauche, résultat du lancer de des.
let displayAddResult=document.querySelector('.numberResultNull');//récupère le ? par défault à droite, celui-ci sera le résultat après calcul des options

let btnDraw=document.querySelector(".draw--btn");//récupération du bouton de lancer

let checkCheatOptions;//nom de la classe donnée par l'activation du menu "cheatmod" dans le fichier OptionsMenu.js
let succesPriority=0;//Création de valeur pour l'option cheatMod
let failPriority=0;//Création de valeur pour l'option cheatMod

let convFace;//servira à convertir la valeur récupérer du des en nombre

const min=1;

//-------------------------------EVENTS-------------------------------//
for(let dice of btnDice){//Pour chaque des de boutonDes
    dice.addEventListener('click', getDice);
}

btnDraw.addEventListener("click",drawDices);

//-------------------------------FONCTIONS-------------------------------//

function getDice(){//récupérer la valeur du data et convertie en nombre 
    let faceDice=this.dataset.dice; 
    convFace=parseInt(faceDice);
    displayDice.src="Assets/Des/DES"+faceDice+".png";
    return convFace;
}
function drawDices(){//lancer de des
       //Réiniitalisation après le 1er lancer//
    displayBasicResult.innerHTML="?"
    displayBasicResult.style.webkitTextStrokeColor="#957D03";
  //------------------------------------//  
    if(convFace!==undefined){//vérification d'une valeur
      randomThrow(min,convFace);  
    }

}
function randomThrow(min,convFace){
  let faceMax=convFace+1;
  let basicResult=Math.floor(Math.random()*(faceMax-min)+min);
  console.log(basicResult);
  displayBasicResult.innerHTML=basicResult;//afiche le résultat du des
//--------RECUPERATION DES  OPTIONS--------//
      let bonusCheck=document.querySelector('.input--bonus').value;  
      let malusCheck=document.querySelector('.input--malus').value;
      let cheatSucces=document.querySelector('.activeSucces');  
      let cheatFail=document.querySelector('.activeFail');
//--------FIN RECUPERATION DES OPTIONS--------//

  checkCheats(checkCheatOptions,cheatSucces,cheatFail,convFace);//vérifie si le mode Triche est actif---- Si il est actif, renvoit des valeurs pour éviter les autres étapes
    if(succesPriority==5||failPriority==1){
        console.log("Retour basique");
    }else{
      critics(basicResult,convFace);//Vérifie si un Critique (succes ou fail) a été réalisé
      checkOptions(bonusCheck,malusCheck,basicResult);//Vérifie si une option a été ajouté
    }
 
}
function checkOptions(bonusCheck,malusCheck,basicResult){
  let bonus=parseInt(bonusCheck);
  let malus=parseInt(malusCheck);
  if(bonus|| malus !==0){
    let optionsResult;
      if (bonus>0){
        optionsResult=basicResult+bonus;
        displayAddResult.innerHTML=optionsResult;//affiche le résultat après calcul des options

      } 
      else if(malus>0){
         optionsResult=basicResult-malus;
        displayAddResult.innerHTML=optionsResult;//affiche le résultat après calcul des options

      }
  } else{
     displayAddResult.innerHTML=basicResult;
  }
}
function critics(basicResult,convFace){
  let succes=convFace-1;
  if(basicResult==convFace || basicResult==succes){
    displayBasicResult.style.webkitTextStrokeColor="#750E00";
  }else if(basicResult==1||basicResult==2){
    displayBasicResult.style.webkitTextStrokeColor="#52FF4D";
  }
}
function checkCheats(checkCheatOptions,cheatSucces,cheatFail,convFace){
  checkCheatOptions=document.querySelector(".activeOptions");
    if(checkCheatOptions!=null){
        if(cheatSucces!=undefined){
            displayBasicResult.innerHTML=convFace;
            displayAddResult.innerHTML=convFace;
          return succesPriority=5;
        }
        else if(cheatFail!=undefined){
            displayBasicResult.innerHTML="1";
            displayAddResult.innerHTML="1";
          return failPriority=1;
        }
    }
};