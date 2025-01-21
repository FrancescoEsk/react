"use strict";
// npm install -g typescript    per installarlo globalmente. se non faccio il -g, viene istallato localmente solo in questo progetto
// quindi, per utilizzare il tsc devo anteporre sempre npx
// -> npx tsc --init
const users = [
    { id: 0, name: 'Marco', age: 20 },
    { id: 1, name: 'Luca', age: 25 }
];
console.log(users[0]);
