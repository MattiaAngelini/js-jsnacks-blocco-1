//Dato un array contenente 10 numeri, stampare in console il numero più grande.

// Creo array con 10 numeri.
const numbers = [2652,34,4312,12,421,123,425,12,53,23];

// Creo variabile del numero più grande, inserendo un elemento dell'array per il confronto.
let largerNumber = numbers[0];

// Creo ciclo for per cercare i 10 numeri nell'array.
for (let i = 0; i < 10; i++) {
    
    // Creo condizione in cui confronto indice dei 10 numeri dell'array fra di loro cercando il maggiore, 
    //aggiorno poi la variabile biggestNumber solo quando trova il numero più alto.
    if (numbers[i] > largerNumber) {
        largerNumber = numbers[i];
    }
}


console.log(largerNumber);