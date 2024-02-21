/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (num1,num2) {
    console.log(num1+num2)
    if (num1===num2) {
        console.log((num1+num2)* 3 )
    }
}

crazySum(4,4)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary (numero) {
    if (numero===400 || (numero>=20 && numero<=100)) {
        console.log("true")
    } else {console.log("false")}
   
}

boundary (800) 

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA*/

function reverseString (stringa) {
let stringaSplittata=stringa.split("");
let reverseArray= stringaSplittata.reverse()
let joinArray= reverseArray.join ("") 
console.log(joinArray) 
}

reverseString("che bella giornata")



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function upperFirst(stringa) {
    let stringaSplit=stringa.split("")
    let letteraIniziale=stringa.slice(0,1)
    let restoDellaStringa=stringa.slice(1)
    let primaLetteraMaiuscola=letteraIniziale.toUpperCase()
    let stringaUnita= primaLetteraMaiuscola + restoDellaStringa
    console.log(stringaUnita)
}

upperFirst("giulia") 


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
for ( let i=0; i < n ; i++) {
    let arrayRandom=[];
    arrayRandom.push((Math.random()*10).toFixed(3))
    console.log(arrayRandom)
} 

}

 giveMeRandom(10)
  
  


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area (l1,l2) {
    let area= l1*l2
    console.log(area)
}
area(12,18)



/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
  let differenza= num - 19;
  if (differenza > 19) {
    console.log(differenza * 3)
  } else {
    console.log(differenza)
  }
}

crazyDiff(147)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/
function codify (stringa) {
  let stringaModificata= "code " + stringa
  if (stringa.includes("code", 0 )) {
    console.log(stringa)
  } else {
    console.log (stringaModificata)
  }
}
codify(" ciao?")


/* ESERCIZIO 4 
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7 (num) {
 if ( num % 3 ===0 || num % 7 ===0) {
    console.log("true")
 } else {
    console.log("false")
 }
}

check3and7(28)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
 let stringaSplit= stringa.split("");
 let stringaSplice= stringaSplit.slice(1,stringaSplit.length - 1)
 let stringaJoin= stringaSplice.join("")
 console.log(stringaJoin)
}

cutString("ciao")