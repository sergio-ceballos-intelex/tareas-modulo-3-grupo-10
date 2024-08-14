//Punto 1:

    const productos = [
        { nombre: "Camiseta", precio: 20, stock: 10 },
        { nombre: "Pantalón", precio: 30, stock: 5 },
        { nombre: "Zapatos", precio: 50, stock: 0 },
        { nombre: "Bufanda", precio: 15, stock: 8 },
   ];
//* filter
 const productosEnStock = productos.filter(productos => productos.stock > 0);
 console.log (productosEnStock);

//* Map
const nombreProductos = productos.map(productos => productos.nombre);
console.log (nombreProductos);

//*Suma
const precioTotal = productos
 .reduce((suma, producto) => suma + producto.precio, 0);
 console.log ( "El precio total de los producto es" , precioTotal);

//2. punto
// Cada objeto debe tener las siguientes propiedades: nombre, edad y promedio.
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// //Imprime en la consola el nombre del segundo estudiante.
console.log ("Nombre del 2do estudiante" , estudiantes[1].nombre);

// //Actualiza la edad del primer estudiante a 25 años. 
estudiantes[0].edad = 25;
console.log("La edad del estudiante Camilo es" ,estudiantes [0]);

//Punto 3

// suma de las edades de todos los estudiantes
const sumaEdades = estudiantes.reduce((suma, estudiante) => suma + estudiante.edad, 0);

// promedio de edad de los estudiantes
const promedioEdad = sumaEdades / estudiantes.length;

console.log("Suma de las edades de los estudiantes:", sumaEdades);
console.log("Promedio de edad de los estudiantes:", promedioEdad.toFixed(2));

//punto 4

// promedio más alto
const estudianteConMayorPromedio = estudiantes.reduce((max, estudiante) => estudiante.promedio > max.promedio ? estudiante : max, estudiantes[0]);

// estudiante con el promedio más alto
console.log(`El estudiante con el promedio más alto es ${estudianteConMayorPromedio.nombre}, con ${estudianteConMayorPromedio.edad} años.`);

// estudiantes mayores de 20 años
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);

// información completa de los estudiantes mayores de 20 años
console.log("Estudiantes mayores de 20 años:");
console.log(estudiantesMayores);

 