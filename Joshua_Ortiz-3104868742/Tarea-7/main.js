

// Ejercicio de Bucle For con Arrays:

let numeros = [1, 2, 3, 4, 5];
let multiplicado = [];

for( let i = 0; i < numeros.length; i++){
    let numero = numeros[i] * 2;
    // console.log(numero);
    multiplicado.push(numero);
};

console.log(multiplicado);



// Ejercicio de Modificación de Propiedades de Objetos en un Array:

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];


let productoMasBarato = productos[0]; // se asume que el primer producto en la posicion 0 es el más barato inicialmente para mas adelante poder hacer alguna comparación en el if

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio < productoMasBarato.precio) {
    productoMasBarato = productos[i]; // Actualizamos el producto más barato asignandole el valor de la iteracion
  }
}

console.log(`El producto más barato es ${productoMasBarato.nombre} y cuesta $${productoMasBarato.precio}`);

//      FORMA CORTA

let precios = productos.map(producto => producto.precio);
let precioMasBajo = Math.min(...precios);
let productoBarato = productos.find(producto => producto.precio === precioMasBajo);

console.log(`El producto más barato es ${productoBarato.nombre} y cuesta $${productoBarato.precio}`);


  // 1. Usamos el método `map` para crear un nuevo array que contiene solo los precios de los productos.

  
  // 2. Utilizamos `Math.min` para encontrar el precio más bajo en el array `precios`.
  // El operador `...` (spread operator) se usa para pasar cada elemento del array `precios` como un argumento separado a `Math.min`.
  
  // 3. Utilizamos `find` para buscar en el array `productos` el primer producto cuyo precio coincida con `precioMasBajo`.
  // Esto nos devuelve el objeto completo del producto con el precio más bajo.
  
  // 4. Imprimimos el nombre y el precio del producto más barato encontrado.



//   Ejercicio de Modificación de Propiedades de Objetos en un Array:

  let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  // Bucle `for` para incrementar la edad de cada estudiante
  for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].edad += 1; // Incrementa la edad en 1
  }
  
  console.log(estudiantes);






//   Ejercicio de Filtrado de Arrays de Objetos:

  let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  
  let librosConEl = []; // Array para almacenar los libros que contienen "El" en el título
  
  // Bucle `for` para encontrar libros cuyo título contiene "El"
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo.includes("El")) {
      librosConEl.push(libros[i]); // Añadir libro al array librosConEl si el título contiene "El"
    }
  }
  

  console.log(librosConEl);  




//   Ejercicio de Concatenación de Arrays:


  let frutas1 = ["Manzana", "Plátano", "Naranja"];
  let frutas2 = ["Fresa", "Uva", "Piña"];
  
  // Bucle `for` para recorrer frutas2 y agregar cada fruta a frutas1
  for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]); // Añadir cada fruta de frutas2 al final de frutas1
  }
  
  
  console.log(frutas1);
  