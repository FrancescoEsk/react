const numbers = [0, 1, 2, 3, 4];

numbers.forEach(n => {
    console.log("test", n)
});

// funzioni importanti per gli array

// immaginiamo che io voglia ottenere questo array
/*
const double = [0, 2, 4, 6, 8];

farei 

const double_numbers = []
for (const number of numbers){
    double_numbers.push(number * 2);
}
*/

const multiplier = 2;
const doubleNumbers = numbers.map(n => n*multiplier);       // posso anche passare variabili   
// map esegue calcoli su ogni elemento dell'array, in base alla arrow function data
// utile per fare copie e modifiche di array

console.log(doubleNumbers);

const doubleNumbers2 = numbers.map(n => {
    if (n == 0) return 'apple';
    else if (n == 1) return 'ananas';
    else return 'orange';
}); 

console.log(doubleNumbers2);

const numbersAbove2 = numbers.filter(n => n>2);     
// filter elimina tutti gli elementi che non soddisfano la return della arrow function
console.log(numbersAbove2);


/*
numbers.reduce();
*/

// ESEMPIO Array.find()
const idFederico = 1;

const users = [
    {id: 0, username : 'marco_433'},
    {id: 1, username : 'federico_477'},
    {id: 2, username : 'elisabetta_322'}
];

const findFedericoUsernameById = () => {
    const res = users.find(user => {
        const isFederico = user.id === idFederico;

        return isFederico;
    })

    console.log("res", res);
};

findFedericoUsernameById();



// ESEMPIO 2
const user1 = {
    id : 1,
    username : 'Marco'
}

const user2 = {
    id : 1,
    username : 'Marco'
}

console.log(user1 === user2);       // danno entrambi false
console.log(user1 == user2);        // confronta solo l'oggetto, quindi l'indirizzo di memoria


// ESEMPIO 3

const flag = true;

const f1 = () => {
    console.log("Running f1");
}

const f2 = () => {
    console.log("Running f2");
}

// Classico
if (flag)
    f1();
else
    f2();

// operatore Ternario
flag ? f1() : f2();