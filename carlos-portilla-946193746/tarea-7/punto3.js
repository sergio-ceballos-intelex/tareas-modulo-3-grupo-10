// Punto 3: Cálculo de Estadísticas Básicas:

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Calcula la suma de las edades de todos los estudiantes en el array

let sumaEdades = 0;

estudiantes.forEach(estudiante => { 
    sumaEdades += estudiante.edad;  
});

// Calcula el promedio de edad de los estudiantes.

let sumaDeEdades = 0;

estudiantes.forEach(estudiante => { 
    sumaDeEdades += estudiante.edad;    
});
const promedioEdad = sumaDeEdades / estudiantes.length;


// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

console.log("La suma de las edades de todos los estudiantes es : " + sumaEdades);

console.log("el promedio de edades es: " + promedioEdad.toFixed(2));

