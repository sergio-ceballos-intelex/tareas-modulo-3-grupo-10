//Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
/*
Utilizando filter, genera un nuevo array que contenga 
los productos en stock (todos los productos cuyo stock es mayor a cero).
*/

const newStock = productos.filter(producto=>producto.stock > 0);
console.log(newStock);
console.log("\n**********************************************************\n");

/*Utilizando map, genera un nuevo array con solo 
 los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
*/

const nombresProduct = productos.map(producto => producto.nombre);
console.log(nombresProduct);
console.log("\n**********************************************************\n");
 /*
    (Opcional) Escribe un programa que calcule el precio total de los productos disponibles,
    para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
 */
let precioTotal = 0;
productos.forEach(producto =>{
    if(producto.precio > 0){
        precioTotal +=producto.precio
    }
});

console.log(`El precio total de los producto es $ ${precioTotal}`);
console.log("\n**********************************************************\n");
/*
Punto 2: Acceso y Modificación Básica de Datos: Crea un array 
llamado estudiantes que contenga objetos representando a tres estudiantes.
*/
//Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.

const estudiantes = [
    { nombre: "Johnny", edad: 27, promedio: 8 },
    { nombre: "Laura", edad: 24, promedio: 9 },
    { nombre: "Maria", edad: 21, promedio: 9.4 },
];

//imprime en la consola el nombre del segundo estudiante.

console.log(`El nombre del segundo estudiant es: ${estudiantes[1].nombre}`);
console.log("\n**********************************************************\n");

/*
Actualiza la edad del primer estudiante a 25 años. 
Imprime en la consola la información completa del 
primer estudiante después de la actualización.
*/
estudiantes[0].edad = 25;
console.log(estudiantes[0]);
console.log("\n**********************************************************\n");

/*
Punto 3: Cálculo de Estadísticas Básicas: 
Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
*/
let sumaEdades = 0;
estudiantes.forEach(estudiante =>{
    sumaEdades +=estudiante.edad
});
//Calcula el promedio de edad de los estudiantes.
let promedio = sumaEdades/estudiantes.length;
//Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
console.log(`La suma de las edades de todos los estudiantes es: ${sumaEdades} años y el promedio de las mismas es: ${promedio}`);
console.log("\n**********************************************************\n");

//Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

const estudiantes2 = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];

const estMejorPromedio = estudiantes2.filter(student => 
    (student.promedio === Math.max(...estudiantes2.map(estudiante=>estudiante.promedio)))

);
  //Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

console.log(`El estudiante con promedio mas alto es: ${estMejorPromedio[0].nombre} y su edad es: ${estMejorPromedio[0].edad}`);
console.log("\n**********************************************************\n");

//Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.

const estudiantesMayores = estudiantes2.filter(student => student.edad > 20);

console.log(estudiantesMayores)