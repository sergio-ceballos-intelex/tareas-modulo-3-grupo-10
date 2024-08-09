///PUNTO 1///
console.log("///PUNTO 1///");
function multiplyBy2(numeros){

    numeros.forEach((num,i) => {
        numeros[i] = num * 2;
    });

    return numeros;
}

let numeros = [1, 2, 3, 4, 5];

console.log(multiplyBy2(numeros));

///PUNTO 2///
console.log("///PUNTO 2///");
function findCheapest(productos){

    let cheapInd = 0;
    let cheapPrice = 0;

    productos.forEach((prod,i) => {
        if(i==0){
            cheapPrice = prod.precio;
        }else{
            if(prod.precio<cheapPrice){
                cheapInd = i;
                cheapPrice = prod.precio;
            }
        }
    });

    return productos[cheapInd];

}

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

let cheapestProduct = findCheapest(productos);

console.log(`El producto mas barato es ${cheapestProduct.nombre} con un precio de ${cheapestProduct.precio}`);

///PUNTO 3///
console.log("///PUNTO 3///");
function incrementAge1(estudiantes){

    estudiantes.forEach((est,i)=>{
        est.edad += 1;
        estudiantes[i] = est;
    });

    return estudiantes;

}

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

console.log(incrementAge1(estudiantes));

///PUNTO 4///
console.log("///PUNTO 4///");
function filterBooks(libros,filter){

    let filteredBooks = [];

    libros.forEach(book=>{
        if(book.titulo.toLowerCase().includes(filter.toLowerCase())){
            filteredBooks.push(book);
        }
    });

    console.log(`Resultados de libros filtrados por '${filter}'`)

    return filteredBooks;

}

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

const filteredBooks = filterBooks(libros,'El');

filteredBooks.forEach(book=>{
    console.log(book);
});

///PUNTO 5///
console.log("///PUNTO 5///");
function concatFruits(frutas1,frutas2){

    frutas2.forEach(fruit=>{
        if(!frutas1.includes(fruit)){
            frutas1.push(fruit);
        }
    });

    return frutas1;

}

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa","Naranja", "Uva", "Piña", "Mango" ,"Manzana"];

console.log(concatFruits(frutas1,frutas2));