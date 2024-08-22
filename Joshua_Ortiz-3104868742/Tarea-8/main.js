            // Punto 1: Obteniendo estadisticas de productos:

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
  ];
  
  // 1. Filtrar productos en stock
  const enStock = productos.filter(producto => producto.stock >= 0);
  console.log("Productos en stock:", enStock);
  
  // 2. Crear un array con los nombres de los productos
  const ProductosName = productos.map(producto => producto.nombre);
  console.log("Nombres de todos los productos:", ProductosName);
  
  // 3. Calcular el precio total de los productos disponibles (callback)
  const precioTotal = enStock.reduce((total, producto) => total + producto.precio, 0);
  console.log(`El precio total de los productos disponibles es: $${precioTotal}`);



            // Punto 2: Acceso y Modificación Básica de Datos:

const estudiantes = [
  { nombre: "Joshua", edad: 17, promedio: 10 },
  { nombre: "Alejandro", edad: 15, promedio: 6 },
  { nombre: "Mike", edad: 19, promedio: 8.7 },
];

// Imprimir el nombre del segundo estudiante
console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

// Actualizar la edad del primer estudiante a 25 años
estudiantes[0].edad = 25;

// Imprimir la información completa del primer estudiante después de la actualización
console.log("Información del primer estudiante después de la actualización:", estudiantes[0]);



            // Punto 3: Cálculo de Estadísticas Básicas

// Calcular la suma de las edades (con un callback)
const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);

// Calcular el promedio de edad
const promedioEdad = sumaEdades / estudiantes.length;

console.log("Suma de las edades:", sumaEdades);
console.log("Promedio de edad:", promedioEdad.toFixed(2)); // Usamos toFixed(2) para limitar a dos decimales




            // Punto 4: Búsqueda y Filtrado de Datos


const estudiantes = [
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

// Encontrar al estudiante con el promedio más alto
const MejorProm = estudiantes.reduce((mejor, estudiante) => {

  return (estudiante.promedio > mejor.promedio) ? estudiante : mejor;

}, estudiantes[0]);

console.log("Estudiante con el promedio más alto:");
console.log(`Nombre: ${MejorProm.nombre}`);
console.log(`Edad: ${MejorProm.edad}`);

// Filtrar estudiantes mayores de 20 años
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);

console.log("Estudiantes mayores de 20 años:");
estudiantesMayores.forEach(estudiante => {
  console.log(estudiante);
});
