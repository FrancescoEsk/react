console.log('Hello world');

const utils = require("./utils");

console.log(utils);

const res = utils.multiply(1, 2);

console.log('Res', res, utils.age);

const user = {
    id: 0,
    name: 'Marco',
    age: 26,
    sayHi : () => {
        console.log('hi');
    }
}

user.sayHi();