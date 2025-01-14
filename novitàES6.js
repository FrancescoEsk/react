/* 
ora vediamo le novità che furono introdotte con l'aggiornamento più massiccio di Javascript: ES6

come fa la nuova versione a funzionare agli utenti? I quali non hanno bisogno di aggiornare per vedere le pagine web

le nuove funzionalità di javascript sono SEMPRE traducibili in linguaggio javascript base 
quindi, tali funzionalità sono "compilate" in vecchio linguaggio

e quindi, si aggiunge un nuovo STEP DI 'COMPILAZIONE' ovvero transpilazione
*/

let x = 0;      // nuovo var
const y = 1;    // variabile che NON CAMBIA di valore

// nuovo operatore : SPREAD
const fruits = ['apple', 'orange', 'banana'];

// const fruitsWithPear = ['apple', 'orange', 'banana', 'pear'];
// fruits.push('pear');         funziona ma andrei a cambiare fruits. 
// l'obbiettivo è di creare una copia dell'array e aggiungerci pear

const fruitsWithPear = [...fruits, 'pear'];

console.log(fruitsWithPear);

const person = {
    firstName : "Marco"
}

const personWithAge = {         // vale anche per gli oggetti, e lo posso posizionare prima o dopo, dove preferisco
    age : 19,
    ...person
}

console.log(personWithAge);




// meccanismi di iterazione
// concetti di programmazione funzionale

for (let i=0; i<10; i++){
    console.log(i);
}

// const fruits = ['apple', 'orange', 'banana'];            non lo posso rimettere essendo const


// voglio fare il for each dell'array fruits
for(const fruit of fruits){
    console.log("Fruit: ", fruit);
}

fruits.forEach(fruit => {       // esiste anche il for each degli array che utilizza le lambda
    console.log("Fruit functional: ", fruit);
})

function sum (a, b) {
    return a+b;
}  
const result = sum(1);          // non da errore, ma sommerà un number con undefined -> NaN

console.log("result", result);

const sumF = (a, b) => {        // bisogna abituarsi al fatto che TUTTO può essere una funzione
    return a+b;
}

const result2 = sumF(1, 4); 

console.log("result", result2);

// fare function oppure fare una lambda su una const è la stessa cosa (per questo corso)
console.log();

function sayHello() {
    console.log("Hello!");
}

const f1 = (doSomething) => {
    doSomething();
    console.log("Done!");
}

f1(sayHello);
// posso incapsulare funzioni su funzioni (e anche su const)




const saySomething = (message) => console.log(message);

saySomething("\nCiao 2");

// ma 

const doThis = (a, b) => a+b;       // se avessi scritto return a+b; avrebbe dato errore. 
// le funzioni su una riga fanno automaticamente il return

console.log(doThis(1, 2));
