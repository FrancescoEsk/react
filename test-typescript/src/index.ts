// npm install -g typescript    per installarlo globalmente. se non faccio il -g, viene istallato localmente solo in questo progetto
// quindi, per utilizzare il tsc devo anteporre sempre npx
// -> npx tsc --init

// poi, devo cambiare nel file tsconfig.json questo
//  "outDir": "./dist",

// e poi, eseguire npx tsc nella cartella generale del progetto
// dovrebbe generare una cartella dist, dove verranno posti tutti i file typescript tradotti in javascript (che sono effettivamente gli eseguibili)

// adesso devo installare il tsx
// npm install --save-dev tsx
// e viene aggiunto al package.json

// adesso, per eseguire i file typescript del progetto posso utilizzare
// npx tsx src/index.ts
// e questo compila ed esegue assieme

// questo comando tiene eseguito il codice. ogni volta che salvo il file index.ts, il programma viene rieseguito direttamente
// npx tsx --watch src/index.ts
// ovviamente, ctrl + c e stoppo il tutto

type User1 = {  
    id: number,
    name: string,
    age: number 
}

const users: User1[] = [
    {id: 0, name: 'Marco', age:20},
    {id: 1, name: 'Luca', age:25}
]

console.log(users[0]);
console.log(users[1]);

