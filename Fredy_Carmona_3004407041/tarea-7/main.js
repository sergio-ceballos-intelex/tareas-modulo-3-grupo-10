

// Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.

//     const productos = [
//         { nombre: "Camiseta", precio: 20, stock: 10 },
//         { nombre: "Pantalón", precio: 30, stock: 5 },
//         { nombre: "Zapatos", precio: 50, stock: 0 },
//         { nombre: "Bufanda", precio: 15, stock: 8 },
//    ];
 
// const newproductos = productos.filter (productos => productos.stock > 0)
// console.log("productos cuyo stock es mayor a cero",newproductos)

// const prendas = productos.map (productos => productos.nombre )
// console.log(prendas)



// Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo

//   const estudiantes = [
//       { nombre: "Camilo", edad: 33, promedio: 10 },
//       { nombre: "Juan", edad: 30, promedio: 6 },
//       { nombre: "Andres", edad: 29, promedio: 8.7 },
//  ];
// estudiantes[1].nombre
//console.log(estudiantes[1].nombre)
//estudiantes[0].edad = 25
//console.log(estudiantes[0])

// Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
// let suma = 0;
// estudiantes.forEach((estudiante) => {
//     suma += estudiante.edad;
// });
// console.log(suma);


// Calcula el promedio de edad de los estudiantes.
// let calcularpromedio = 0;
// estudiantes.forEach((estudiante) => {
//     calcularpromedio += estudiante.promedio;
// });
// console.log(calcularpromedio);

//Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
// const estudiantes4 = [
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


  
// Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

// const promedioalto = estudiantes4.filter(estudiantes4 => estudiantes4.promedio  >94 )
// console.log(promedioalto)

// Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
// const estudiantesMayores = estudiantes4.filter(estudiantes4 => estudiantes4.edad  > 20 )
// console.log(estudiantesMayores)


// // Imprime en la consola la información completa de los estudiantes mayores de 20 años.

// const estudiantesMayores1 = estudiantes4.filter(estudiantes4 => estudiantes4.edad  >= 20 )
// console.log(estudiantesMayores1)


