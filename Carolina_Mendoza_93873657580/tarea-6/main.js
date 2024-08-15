// 1. Ejercicio de Bucle For con Arrays
// let numeros = [1, 2, 3, 4, 5];
// let multiplicarPorDos = [];

// for (i = 0; i < numeros.length; i++){
//     let multiplicación = numeros[i] * 2;
//     multiplicarPorDos.push(multiplicación);
// }

// console.log(multiplicarPorDos);

// 2. Ejercicio de Búsqueda en Arrays de Objetos
// let productos = [
//     { nombre: "Camisa", precio: 20 },
//     { nombre: "Pantalón", precio: 30 },
//     { nombre: "Zapatos", precio: 50 },
//   ];
// let productoMasEconomico = productos[0];

// for (let i = 1; i< productos.length; i++){
//     if(productos[i].precio < productoMasEconomico.precio){
//         productoMasEconomico = productos[i];
//     }
// }

// console.log(`El producto más barato es: ${productoMasEconomico.nombre} con un precio de $${productoMasEconomico.precio}`);
 
// 3. Ejercicio de Modificación de Propiedades de Objetos en un Array
// let estudiantes = [
//     { nombre: "Juan", edad: 20 },
//     { nombre: "María", edad: 22 },
//     { nombre: "Pedro", edad: 19 },
//   ];
// const alumnos= [];

//   for (let i = 1; i < estudiantes.length; i++) {
//     estudiantes[i].edad += 1;
//       }
  
//   console.log(estudiantes); 

// 4. Ejercicio de Filtrado de Arrays de Objetos
// let libros = [
//     { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
//     { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
//     { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
//   ];
// let tituloConPalabraEL = [];

//   for (let i = 0; i < libros.length; i++) {
//     if (libros[i].titulo.includes("El")) {
//       tituloConPalabraEL.push(libros[i]);
//     }
//   }
  
//   console.log(tituloConPalabraEL); 

// 5. Ejercicio de Concatenación de Arrays
// let frutas1 = ["Manzana", "Plátano", "Naranja"];
// let frutas2 = ["Fresa", "Uva", "Piña"];

// for (let i = 0; i < frutas2.length; i++) {
//     frutas1.push(frutas2[i]);
//   }
  
//   console.log(frutas1);