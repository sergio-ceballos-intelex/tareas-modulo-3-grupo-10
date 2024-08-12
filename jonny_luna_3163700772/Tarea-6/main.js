/****Ejercicio de Bucle For con Arrays:****/

let numeros = [1,2,3,4,5];
/*
Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado 
en un nuevo array. Luego, imprime el nuevo array.
*/
let newNumeros=[];
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    newNumeros.push(2*numero);
}
console.log(newNumeros); 
console.log("\n*******************************************************************\n");

/****Ejercicio de Búsqueda en Arrays de Objetos:****/
//Dado el siguiente array de objetos que representan productos:

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

  /*Utiliza un bucle for para encontrar el producto con el precio más bajo. 
  Luego, imprime el nombre y el precio de ese producto.
  */
let productoPrecioBajo = productos[0]
for (let i = 1; i < productos.length; i++) {
    const producto = productos[i];
    if(producto.precio < productoPrecioBajo.precio){
        productoPrecioBajo = producto;
    }
}

console.log(`el producto de mas bajo precio es ${productoPrecioBajo.nombre} con un precio de $ ${productoPrecioBajo.precio}` );
console.log("\n*******************************************************************\n");

/*Ejercicio de Modificación de Propiedades de Objetos en un Array:*/

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
/*Utiliza un bucle for para incrementar la edad de cada 
estudiante en 1 año. Luego, imprime el array modificado.
*/
for (let i = 0; i < estudiantes.length; i++) {
  const estudiante = estudiantes[i];
  estudiante.edad +=1;  
}
console.log(estudiantes);
console.log("\n*******************************************************************\n");

/*** Ejercicio de Filtrado de Arrays de Objetos:***/
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

/* 
Utiliza un bucle for para encontrar todos los libros cuyo 
título contenga la palabra "El". Luego, imprime estos libros.
*/
let librosEl = [];
for (let i = 0; i < libros.length; i++) {
  const libro = libros[i];
  if(libro.titulo.includes("El")){
    librosEl.push(libro);
  }
}

console.log(librosEl);
console.log("\n*******************************************************************\n");

/* Ejercicio de Concatenación de Arrays:*/

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

/*Utiliza un bucle for para concatenar frutas2 al final de frutas1. 
Luego, imprime el array resultante.*/

for (let i = 0; i < frutas2.length; i++) {
    const fruta2 = frutas2[i];
    frutas1.push(fruta2);
}

console.log(frutas1);




