//Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

let palabraBuscada = "El"

for (let num = 0; num < libros.length; num++) {

    let titulo = libros[num].titulo;

    if (titulo.includes(palabraBuscada)) {
        console.log( titulo + " contiene la palabra El");
    }
}