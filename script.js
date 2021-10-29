/*
- Pari e Dispari -
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const numberUtente = prompt('scegli pari o dispari');

let numeroScelto = evenAndOdd (numberUtente);


function evenAndOdd (pari, dispari){

  if (pari % 2 == 0) {
    console.log('pari');
  }

  // for (let i = 0; i <= 5; i++) {
  //   if (number % 2 == 0) {
  //     console.log('pari');
  //   } else if (number % 2) {
  //     console.log('dispari');
  //   }
  // }



}

function oddAndEven (number) {


}



