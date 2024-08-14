const estudiantes = [
    { nombre: "Laura", edad: 29, promedio: 10 },
    { nombre: "Juan", edad: 23, promedio: 6 },
    { nombre: "Pablo", edad: 45, promedio: 8.7 },
];
// Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
let totalEdad = 0
estudiantes.forEach((estudiante)=>{
    totalEdad += estudiante.edad
})
//Calcula el promedio de edad de los estudiantes.
const promedioEdad = totalEdad / estudiantes.length
// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
console.log("La suma de las edad es: "+totalEdad +" El promedio de las edades es "+ promedioEdad)
