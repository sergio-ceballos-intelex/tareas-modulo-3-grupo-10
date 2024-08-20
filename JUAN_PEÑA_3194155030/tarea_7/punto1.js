const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

// productos cuyo stock es mayor a cero
const stockMayoresACero=productos.filter((element)=>element.stock>0)
console.log(stockMayoresACero)

// nombres de los productos
const nombresProductos=productos.map((element)=>element.nombre)
console.log(nombresProductos)



// // (Opcional) Escribe un programa que calcule el precio total de los productos disponibles,
//  para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
let precioTotal=0
productos.forEach(producto =>{
    precioTotal += producto.precio
})
console.log(precioTotal)



