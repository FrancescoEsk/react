// per eseguire un file javascript -> node introduzione.js
var x = 0;
x = 0
// queste due righe sono esattamente la stessa cosa in javascript

// javascript, non essendo forzatamente tipato, posso assegnare tipi diversi alla stessa variabile (anche un array!)
x = 'ciao'
x = [1, 'ciao', 4.4]

console.log(x)


if (x == 0){
    console.log('ciao a tutti')
} else if (x == 1){
    console.log('ciao a tutti x2')
} else {
    console.log('non saluto nessuno')
}

var flag = false;

var x1 = ''; // stringa vuota e 0 è valutato come false
var x1 = 0;

if (x1)
    console.log('primo')
else
    console.log('secondo')

console.log('Uso lo equals')
if (0 == false) // È VERO
    console.log('primo')
else
    console.log('secondo')

// ma se usiamo lo STRICTLY EQUALS
console.log('Uso lo strictly equals')
if (0 === false) // È FALSO
    console.log('primo')
else
    console.log('secondo')


// null indica che è stato SPECIFICATAMENTE messo a nullo
// undefined è il valore base che viene assegnato alle variabili non inizializzate. indica quindi l'assenza di valore

const person = {
    firstName: "Marco",
    lastName: "Raffaello"
}
console.log(person.lastName)

while(x == 0){

}
for (var i = 0; i<10; i++){

}