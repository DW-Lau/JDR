let btnDice=document.querySelectorAll('.btn--dice');//récupération de TOUS les boutons de Des
let displayDice=document.querySelector('.draw--display');//récupération de l'image du dés par défault;

let displayBasicResult=document.querySelector('.numberDrawNull');//récupére le ? par default à gauche, résultat du lancer de des.
let displayAddResult=document.querySelector('.numberResultNull');//récupère le ? par défault à droite, celui-ci sera le résultat après calcul des options

let btnDraw=document.querySelector(".draw--btn");




let convFace;//servira à convertir la valeur récupérer du des en nombre
const min=1;

for(let dice of btnDice){//Pour chaque des de boutonDes
    dice.addEventListener('click', getDice);
}

btnDraw.addEventListener("click",drawDices);

function getDice(){//récupérer la valeur du data et convertie en nombre 
    let faceDice=this.dataset.dice; 
    convFace=parseInt(faceDice);
    displayDice.src="Assets/Des/DES"+faceDice+".png";
    return convFace;
}
function drawDices(){//lancer de des
    if(convFace!==undefined){//vérification d'une valeur
      randomThrow(min,convFace);
       
    }else{
        console.log("Aucun dès séléctionné");
    }
}


//
function randomThrow(min,convFace){
  let basicResult=Math.floor(Math.random()*(convFace-min)+min);
  displayBasicResult.innerHTML=basicResult;//afiche le résultat du des
//--------RECUPERATION DES  OPTIONS--------//
      let bonusCheck=document.querySelector('.input--bonus').value;
        let bonus=parseInt(bonusCheck);
      let malusCheck=document.querySelector('.input--malus').value;
        let malus=parseInt(malusCheck);
//--------FIN RECUPERATION DES OPTIONS--------//

  checkOptions(bonusCheck,malusCheck,basicResult);
}
function checkOptions(bonus,malus,basicResult){
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
  }
  else{
     displayAddResult.innerHTML=basicResult;
  }
}