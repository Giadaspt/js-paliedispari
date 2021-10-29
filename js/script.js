/*
- Palidroma -
1. Chiedere all’utente di inserire una parola
2. Creare una funzione per capire se la parola inserita è palindroma
*/

const parolaUtente = prompt('Scrivi una parola');

let palindrome = palidromeWord(parolaUtente);
// let outPut = document.getElementById('output');
// outPut.innerHTML = 'La parola è palindroma';

// palindrome.innerHTML = 'La parola è palindroma';

function palidromeWord (str) {

  if ( str == str.split('').reverse().join('')) {
    str = true;
    console.log(str);
  } else {
    str = false;
    console.log(str);
  }

  return str;
}


