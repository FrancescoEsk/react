const user = {
    firstName: "Francesco",
    age : 20,

    address : {
        street: "Via roma",
        number: 1
    }
};

console.log("Name", user.firstName);

// DECONSTRUCT
const {age, firstName, address} = user;

console.log(firstName, age, address);


// -----------------

const fruits = ['apple', 'ananas', 'banana'];

const [pippo, paperino] = fruits;

console.log('First element: ', pippo);
console.log('Second element: ', paperino);


console.log(typeof fruits);

const name1 = 'Marco';
const age1 = 26;

console.log(typeof name1);
console.log(typeof age1);