const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// suma 
let suma=0
estudiantes.forEach(estudiante =>{
   suma = suma + estudiante.edad
})


const promedioEdad = suma / estudiantes.length;

console.log("Suma total de edades:", suma);
console.log("Promedio de edades:", promedioEdad);