const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const stockMayorACero = productos.filter (producto => producto.stock > 0);
console.log(stockMayorACero);


const nombresProductos = productos.map (producto => producto.nombre);
console.log(nombresProductos);

const totalPrecio = productos.reduce((total, producto) => {
    return total + (producto.stock > 0 ? producto.precio : 0);
}, 0);

console.log("El precio total de los productos disponibles es:", totalPrecio);

