//  Punto 1: Obteniendo estadisticas de productos:


const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

// Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).

const productosConStock = productos.filter((producto) => producto.stock !== 0);

console.log(productosConStock);

// Utilizando map, genera un nuevo array con solo los nombres de los productos.

const nombres = productos.map((producto) => producto.nombre);

console.log(nombres);

// Escribe un programa que calcule el precio total de los productos disponibles y obtener la suma de el precio de todos ellos.

let totalPrecioDisponibles = 0;
let sumaPrecioTotal = 0;

for (let i = 0; i < productos.length; i++) {
    sumaPrecioTotal += productos[i].precio;
    if (productos[i].stock > 0) {
        totalPrecioDisponibles += productos[i].precio * productos[i].stock;
    }
}
console.log("Precio total de productos disponibles: " + totalPrecioDisponibles);
console.log("Suma del precio de todos los productos: " + sumaPrecioTotal);
