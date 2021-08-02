var estudiantes = ['Maria', 'Sergio', 'José', 'Daniel']

function saludarEstudiantes (estudiante) {
  console.log(`Hola, ${estudiante}`);
}

//for
for (var i=0; i< estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

//for..of
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

//while

while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
} //vaciando el array, imprimo hasta que quede vacio

var i =0;
while (i <= estudiantes.length) {
  saludarEstudiantes(estudiantes[i]);
  i++;
}
