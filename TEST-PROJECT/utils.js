export function multiply(a, b){     // export per metodo namedexport
    return a*b;
}

function divide(a, b){
    return a*b;
}

// basta mettere la keyword export prima di una funzione  

// posso anche fare un export default (migliore e più compatto)
export default {
    multiply,
    divide
};