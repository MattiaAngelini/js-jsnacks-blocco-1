//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, 
//se è dispari inseriscilo nell’array.

//Creo costante contenente un array per la lista dei numeri
const numbersList = [];

//Creo un ciclo for per richiedere tramite prompt un numero per 6 volte.
for(let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));

//Creo condizione in cui dico che se il numero inserito dall'utente è dispari
// (%2 !== 0) andrà 'pushato' (.push) nell'array.
    if (userNumber %2 !== 0) {
        numbersList.push(userNumber);
}
}

console.log(numbersList);