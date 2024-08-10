//Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
const productsMayor0 = productos.filter((producto)=> producto.stock > 0 );
console.log(productsMayor0);

//Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]

const nombresProductos = productos.map((producto) => producto.nombre)
console.log(nombresProductos)

//Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos

let total = 0;
productos.forEach((producto) => {
    total += producto.precio;
});
console.log(total)

