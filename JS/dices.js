//récupération des variables//
let diceType=document.querySelectorAll('.btn--dice')
// diceType.addEventListener('click',function(){
   
// });
diceType.forEach(dice => {
    dice.addEventListener('click',() => {
        // console.log(diceType.data-dice-face);
        let value=diceType.data;
    console.log( value);
    })
})