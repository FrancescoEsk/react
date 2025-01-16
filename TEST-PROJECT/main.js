const utils = require("./utils");

const res = utils.multiply(3, 2);

console.log('Res', res);

// facendo così, ho importato tutto l'oggetto di utils.
// e se volessi importare solo il multiply?

const {multiply} = require("./utils");
console.log('Res', utils.multiply(3, 2));