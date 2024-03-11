//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//Creo variabile con valore 0, per poter essere sommata con 
//valore inserito nel prompt.
let sum = 0;

//Creo un ciclo for per richiedere tramite prompt un numero per 5 volte.
for(let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));

    //sommo valore della variabile 0 con quelli del prompt per ottenere somma.
    sum = sum + userNumber;
}
console.log(sum);

