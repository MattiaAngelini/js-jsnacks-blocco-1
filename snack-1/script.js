
//Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati 
//(inserire il numero nell'array solo se non è già presente).

//Creo costante contenente un array per la lista dei numeri
const numbersList = [];

//Creo un ciclo for per richiedere tramite prompt un numero per 5 volte.
for(let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));

    //Creo condizione nella quale se il numero inserito da utente,
    // è incluso (.includes) nella lista, 
    if (numbersList.includes(userNumber) === false)
        numbersList.push(userNumber);
   
}

console.log(numbersList);