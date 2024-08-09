//Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

for (num = 0 ;  num < estudiantes.length ; num++){
    estudiantes[num].edad = estudiantes[num].edad + 1
}

console.log(estudiantes)