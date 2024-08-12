//Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
const estudiantes = [
    { nombre: "Laura", edad: 29, promedio: 10 },
    { nombre: "Juan", edad: 23, promedio: 6 },
    { nombre: "Pablo", edad: 45, promedio: 8.7 },
];
// Imprime en la consola el nombre del segundo estudiante.
console.log(estudiantes[1].nombre)
//Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.
estudiantes[0].edad = 25
console.log(estudiantes)