// npm install -g typescript    per installarlo globalmente. se non faccio il -g, viene istallato localmente solo in questo progetto
// quindi, per utilizzare il tsc devo anteporre sempre npx
// -> npx tsc --init

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


