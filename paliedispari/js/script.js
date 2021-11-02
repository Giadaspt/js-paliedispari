
/*
- Pari e Dispari -
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


let evenOddUser = prompt('scegli pari o dispari');
let numberUser;
let output = document.getElementById('output');

let pc = getRandomNumber (1, 5);
console.log('il pc', pc);

const pari = 'pari';
const dispari = 'dispari';

if ((evenOddUser !== pari) && (evenOddUser !== dispari)) {
  evenOddUser;
}

// if ((numberUser <= 5) && (numberUser !== 0)) {
//   console.log("numero scelto dall'utente", numberUser);
// } else if ((numberUser > 5) && (numberUser === 0)) {
//   prompt('scegli un numero da 1 a 5');
// }

do {
  
  if ((numberUser <= 5) && (numberUser !== 0)) {
    console.log("numero scelto dall'utente", numberUser);
  } else if ((numberUser > 5) || (numberUser === 0)) {
    alert('il numero scelto deve essere tra 1 e 5');
  }

  numberUser= parseInt(prompt('scegli un numero da 1 a 5'))  ;
  console.log("numero scelto dall'utente", numberUser);
}
while(numberUser > 5){
}

let risultato = sumRandomNumber(numberUser, pc);
console.log('somma', risultato );

if ((evenOddUser === pari) && (risultato % 2 == 0) ) {
  output.innerHTML = `
  Bravo utente hai vinto! Il pc ha tirato ${pc}, tui hai tirato ${numberUser} e la somma è ${risultato} che è pari
  `;
  console.log('Bravo utente hai vinto');
} else if ((evenOddUser === dispari) && (risultato % 2 == 1) ) {
  output.innerHTML = `
  Bravo utente hai vinto! Il pc ha tirato ${pc}, tui hai tirato ${numberUser} e la somma è ${risultato} che è dispari
  `;
  console.log('Bravo utente hai vinto');
} else {
  output.innerHTML = `
  Ha vinto il pc! Tu hai tirato ${numberUser}, il pc ha tirato ${pc}, avevi scelto ${evenOddUser} e la somma è ${risultato}
  `;
  console.log('ha vinto il pc');
}


function getRandomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min +1) + min);
  return random;
}

function sumRandomNumber(num1, num2) {
  return num1 + num2;
}