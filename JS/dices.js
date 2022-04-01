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
       //Réiniitalisation après le 1er lancer//
    displayBasicResult.innerHTML="?"
    displayBasicResult.style.webkitTextStrokeColor="#957D03";
  //------------------------------------//  
    if(convFace!==undefined){//vérification d'une valeur
      randomThrow(min,convFace);  
    }
}


//
function randomThrow(min,convFace){
  let basicResult=Math.floor(Math.random()*(convFace-min)+min);
  displayBasicResult.innerHTML=basicResult;//afiche le résultat du des
//--------RECUPERATION DES  OPTIONS--------//
      let bonusCheck=document.querySelector('.input--bonus').value;  
      let malusCheck=document.querySelector('.input--malus').value;
        
//--------FIN RECUPERATION DES OPTIONS--------//
  critics(basicResult,convFace);
  checkOptions(bonusCheck,malusCheck,basicResult);
  
}
function checkOptions(bonusCheck,malusCheck,basicResult){

  let bonus=parseInt(bonusCheck);
  let malus=parseInt(malusCheck);
  if(bonus|| malus !==0){
    let optionsResult;
      if (bonus>0){
        optionsResult=basicResult+bonus;
        displayAddResult.innerHTML=optionsResult;//affiche le résultat après calcul des options
        bonusCheck.value="0";
      } 
      else if(malus>0){
         optionsResult=basicResult-malus;
        displayAddResult.innerHTML=optionsResult;//affiche le résultat après calcul des options
        malusCheck.innerHTML="0";
      }
  } else{
     displayAddResult.innerHTML=basicResult;
  }
}
function critics(basicResult,convFace){
  let succes=convFace-1;
  if(basicResult==convFace || basicResult==succes){
    displayBasicResult.style.webkitTextStrokeColor="green";
  }else if(basicResult==1){
    displayBasicResult.style.webkitTextStrokeColor="red";
  }

}