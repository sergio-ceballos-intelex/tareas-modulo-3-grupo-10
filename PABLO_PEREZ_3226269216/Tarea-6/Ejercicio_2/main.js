//Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];


let productoInicio = productos[0]

for( num = 0; num < productos.length ; num++){
    if (productos[num].precio < productoInicio.precio){
        productoInicio = productos[num]
    } 
}

console.log(productoInicio)