// Hoisting
console.log(miNombre);  //seria undefined, lo que imprime, al llamarlo antes, me crea la variable como indefinida
var miNombre = 'Diego';

// lo que sucede
var miNombre =  undefined;
console.log(miNombre); //imprime undefined
var miNombre = 'Diego'; //luego ya asignaria

//con funciones
hey();
function hey() {
  console.log('Hola' + miNombre);
}

var miNombre = 'Diego'; 
