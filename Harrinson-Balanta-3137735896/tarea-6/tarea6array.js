// Dado el siguiente array de números:
// Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.

let numeros = [1, 2, 3, 4, 5];
let numerosmul = [];
for (let i = 0; i < numeros.length; i++) {
    numerosmul.push(numeros[i] * 2);    
}
console.log(numerosmul)

// Dado el siguiente array de objetos que representan productos:
// Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  let producto = productos[0];

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio< producto.precio) {
    producto = productos[i];
  }
}
console.log(producto.nombre, producto.precio);

// Dado el siguiente array de objetos que representan estudiantes:
// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];
for (let i = 0; i < estudiantes.length; i++) {
   estudiantes[i].edad +=1;
      
}
console.log(estudiantes)

// Dado el siguiente array de objetos que representan libros:
// Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros
let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

const libros2 = [];
for (let i = 0; i < libros.length; i++) {
if (libros[i].titulo.includes("El"))
  libros2.push(libros[i])
}
console.log(libros2)

// Dados los siguientes arrays de frutas:
// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
for (let i = 0; i < frutas2.length; i++) {
  frutas1.push(frutas2[i]);
}

console.log(frutas1);
