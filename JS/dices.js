let btnDice=document.querySelectorAll('.btn--dice');//récupération de TOUS les boutons de Des
let displayDice=document.querySelector('.draw--display');//récupération de l'image du dés par défault;

let btnDraw=document.querySelector(".draw--btn");

let convFace;//servira à convertir la valeur récupérer du des en nombre
const min=1;

for(let dice of btnDice){//Pour chaque des de boutonDes
    dice.addEventListener('click', getDice);
}

btnDraw.addEventListener("click",drawDices);
function drawDices(){
    if(convFace!==undefined){
      randomThrow(min,convFace);
       
    }else{
        console.log("Aucun dès séléctionné");
    }
}

function randomThrow(min,convFace){
  let basicResult=Math.floor(Math.random()*(convFace-min)+min);
  console.log(basicResult);
}
function getDice(){//récupérer la valeur du data et convertie en nombre 
    let faceDice=this.dataset.dice; 
    convFace=parseInt(faceDice);
    displayDice.src="Assets/Des/DES"+faceDice+".png";
    return convFace;
}
