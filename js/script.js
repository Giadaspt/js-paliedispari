/*
- Palidroma -
1. Chiedere all’utente di inserire una parola
2. Creare una funzione per capire se la parola inserita è palindroma
*/

const parolaUtente = prompt('Scrivi una parola');

let palindrome = palidromeWord(parolaUtente);
 

// palindrome.innerHTML = 'La parola è palindroma';

function palidromeWord (str) {

  let bool = false;

  if (str == str.split('').reverse().join('')) {
    console.log(str);
    bool = true;
  } else {
    console.log(str);
    bool = false;
  }
  console.log(bool);

  return bool;
}


