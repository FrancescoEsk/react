// con import posso importare codice da altri file, che sia stato inserito export
import {multiply, divide} from './utils.js';

// ATTENZIONE! per usare l'import, va dichiarato nel package.json

const res = multiply(3, 2);

console.log('Res', res);

console.log('Res', multiply(3, 2));