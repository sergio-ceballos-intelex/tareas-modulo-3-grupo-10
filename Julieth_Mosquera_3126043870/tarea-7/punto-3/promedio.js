const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
let = sumaEdades = 0
estudiantes.forEach(estudiante => {
    sumaEdades += estudiante.edad;
});

let promedioEdades = sumaEdades / estudiantes.length;

console.log("Suma de edades:", sumaEdades);
console.log("Promedio de edad:", promedioEdades);
