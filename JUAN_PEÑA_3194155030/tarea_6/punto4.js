let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  let librosConEl= []

  for(let i = 0; i<libros.length;i++){
    if(libros[i].titulo.toLowerCase().includes("el")){
        librosConEl.push(libros[i])
    }
  }

  console.log("Los libros que tienen la palabra El son:",librosConEl)