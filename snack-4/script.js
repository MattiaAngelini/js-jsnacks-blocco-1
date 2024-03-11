//Calcola la somma e la media dei primi 10 numeri. 

//Creo variabili della somma e della media con valore 0. 
let average = 0;
let sum = 0;

// Creo ciclo per avere i primi 10 numeri.
for(let i = 1; i < 11; i++) {

    // Sommo variabile 0 con l'indice dei 10 numeri ottenuto con loop for.
    sum += i;

    //Calcolo la media della somma dividendo 10 volte la somma di 10 numeri.
    average = sum / 10;
}

console.log(sum);
console.log(average);


