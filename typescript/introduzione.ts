let x: number;
// x = 'ciao';      non posso siccome ho dichiarato che x deve essere number

/*  TIPI BASE DI VARIABILE
number
string
boolean

NB: si può omettere. se assegno ad x un number, automaticamente quella variabile viene segnata come number
*/
let x2 = 2;

const fruits = ['apple', 'banana', 'ananas'];       // viene automaticamente messo come string[]

const fruits2: string[] = ['apple', 'banana', 'ananas'];
const fruits1: [string] = ['apple'];    // questo è un'array che ha solo un elemento, ovvero la stringa

// darebbe errore se mettessi qualcosa in più dentro ad esso



// ----------------

type User = {   // definisco il tipo user, in modo da poter dichiarare istanze di quell'oggetto senza dover dichiarare ogni volta tutti i tipi
    firstName: string,
    lastName: string,
    age?: number,
    address?: string    // mettendo il ? dichiaro che address potrebbe non esserci
}

const user: User = {
    firstName: 'Marco',
    lastName: 'bla',
    age: 20
}

const user2: User = {
    firstName: 'Giacomo',
    lastName: 'blu',
    address: "Via Roma"
}

console.log(user2.age);     // stampa undefined

// ----------------------

let x1: string | number = 3;    // dichiaro che x1 può essere stringa or number

type StringOrNumber = string | number;
let x3: StringOrNumber = 3;
x3 = 'ciao';

let address: string | undefined = undefined;

function retrieveAddress() {
    // do things...

    address = "Via Roma 1";
}

retrieveAddress();

console.log('Address', address);


// -----------------------

type Animal = {
    name: string
};

type Dog = Animal & {
    dogColor: string
};

type Cat = Animal & {
    catColor: string
};

const fuffi: Dog = {
    name: 'fuffi',
    dogColor: 'white'
}

// -----------------------

enum ROLE_TYPE {    // automaticamente, se non dico nulla mette da 0 in giù
    ADMIN = 1,
    USER = 2
}

const userType = ROLE_TYPE.USER;

// -----------------------
// sto dichiarando il tipo dei parametri => tipo di ritorno
type FunctionType = (a: number, b: number) => number | string

const multiply: FunctionType = (a: number, b: number) => {

    if (a > 0) return 'ciao';       // siccome c'è l'or di tipo, la funzione può fare la return di tipi diversi

    return a*b; 
};              // se non esplicito il tipo alla funzione, lo prende da solo vedendo il return

let color: 'red' | 'green' | 'blue' = 'red';    // se metto yellow non gli piace
let risposta: 'si' | 'no' = 'si';
let costante2: 2 = 2;

