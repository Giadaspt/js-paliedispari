
/*
- Pari e Dispari -
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


let evenOddUser = prompt('scegli pari o dispari');
let numberUser = prompt('scegli un numero da 1 a 5');

let pc = getRandomNumber (1, 5);
console.log('questo è il pc', pc);

let risultato = sumRandomNumber(numberUser, pc);
console.log('questo è la somma', risultato );

const pari = 'pari';
const dispari = 'dispari';

// let numeroScelto = evenAndOdd (numberUser);
if ((numberUser <= 5) && (numberUser !== 0)) {
  console.log("sono il numero scelto dall'utente", numberUser);
} else {
  alert('Inserisci un numero tra 1 e 5');
  prompt('scegli un numero da 1 a 5');
}

if ((evenOddUser === pari) && (risultato % 2 == 0) ) {
  console.log('Bravo utente hai vinto');
} else if ((evenOddUser === dispari) && (risultato % 2 == 1) ) {
  console.log('Bravo utente hai vinto');
} else {
  console.log('ha vinto il pc');
}


function getRandomNumber(min, max) {

  let random = Math.floor(Math.random() * (max - min +1) + min);
  return random;
}

function sumRandomNumber(num1, num2) {
  return num1 + num2;
}