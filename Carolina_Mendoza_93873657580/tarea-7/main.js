// //Tarea 7: Manipulación Básica de Arrays y Objetos orientado a ES6
// //Punto 1: Obteniendo estadisticas de productos
// const productos = [
//     { nombre: "Camiseta", precio: 20, stock: 10 },
//     { nombre: "Pantalón", precio: 30, stock: 5 },
//     { nombre: "Zapatos", precio: 50, stock: 0 },
//     { nombre: "Bufanda", precio: 15, stock: 8 },
// ];
// // Utilizando filter
// const productoStock = productos.filter(prod=>prod.stock>0);//CORRECCIÓN REALIZADA, SE CAMBIA EL RELACIONAL == POR >
// console.log(productoStock);
// //Utilizando map
// const nombreProducto = productos.map(prod=>prod.nombre);
// console.log(nombreProducto);
// //Opcional
// let precioTotal = 0;
// productos.forEach(prod=>{
//     if(prod.stock>0){
//         precioTotal += (prod.precio*prod.stock);
//     }
// });
// console.log(`El precio total de los productos disponibles es ${totSum}`);

// //Punto 2: Acceso y Modificación Básica de Datos
// const estudiantes = [
//     { nombre: "Marcos", edad: 23, promedio: 10 },
//     { nombre: "Pedro", edad: 20, promedio: 9 },
//     { nombre: "Cristobal", edad: 39, promedio: 7.5 },
// ];

// console.log(`El nombre del segundo estudiante es: ${estudiantes[1].nombre}`);

// estudiantes[0].edad = 25;
// console.log(estudiantes[0]);

// //Punto 3: Cálculo de Estadísticas Básicas
// //Calcula la suma de las edades de todos los estudiante.
// let sumaTotalEdades = 0;
// estudiantes.forEach(estudiante =>{
//     sumaTotalEdades +=estudiante.edad
// });
// //Calcula el promedio de edad de los estudiantes.
// let promedio = sumaTotalEdades/estudiantes.length;
// //Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
// console.log(`La suma de las edades de todos los estudiantes es: ${sumaEdades} años, el promedio de las mismas es: ${promedio}`);

// //Punto 4: Búsqueda y Filtrado de Datos
// const estudiantes = [
//     {
//       nombre: "Ana",
//       edad: 20,
//       promedio: 85,
//       genero: "Femenino",
//       carrera: "Ingeniería Civil",
//       ciudad: "Bogotá",
//     },
//     {
//       nombre: "Juan",
//       edad: 22,
//       promedio: 78,
//       genero: "Masculino",
//       carrera: "Medicina",
//       ciudad: "Medellín",
//     },
//     {
//       nombre: "María",
//       edad: 21,
//       promedio: 90,
//       genero: "Femenino",
//       carrera: "Administración de Empresas",
//       ciudad: "Cali",
//     },
//     {
//       nombre: "Pedro",
//       edad: 23,
//       promedio: 82,
//       genero: "Masculino",
//       carrera: "Derecho",
//       ciudad: "Barranquilla",
//     },
//     {
//       nombre: "Laura",
//       edad: 24,
//       promedio: 88,
//       genero: "Femenino",
//       carrera: "Arquitectura",
//       ciudad: "Cartagena",
//     },
//     {
//       nombre: "Carlos",
//       edad: 20,
//       promedio: 75,
//       genero: "Masculino",
//       carrera: "Ingeniería de Sistemas",
//       ciudad: "Santa Marta",
//     },
//     {
//       nombre: "Sofía",
//       edad: 22,
//       promedio: 95,
//       genero: "Femenino",
//       carrera: "Psicología",
//       ciudad: "Pereira",
//     },
//   ];
// //Utilizando filter
//   const mejorPromedio = estudiantes2.filter(student => 
//    (student.promedio === Math.max(...estudiantes2.map(estudiante=>estudiante.promedio)))

// );
// //Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

// console.log(`El nombre del estudiante con promedio mas alto es: ${mejorPromedio[0].nombre} y su edad es: ${mejorPromedio[0].edad}`);

// //Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
// const estudiantesMayores = estudiantes2.filter(student => student.edad > 20);
// //Imprime en la consola la información completa de los estudiantes mayores de 20 años.
 console.log(estudiantesMayores)
