///PUNTO 1///
console.log("////////// INICIO PUNTO 1 //////////");
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productInStock = productos.filter(prod=>prod.stock>0);//CORRECCIÓN REALIZADA, SE CAMBIA EL RELACIONAL == POR >
console.log(productInStock);

const productsName = productos.map(prod=>prod.nombre);
console.log(productsName);

let totSum = 0;
productos.forEach(prod=>{
    if(prod.stock>0){
        totSum += (prod.precio*prod.stock);
    }
});
console.log(`El precio total de los productos disponibles es ${totSum}`);

console.log("////////// FIN PUNTO 1 //////////");

///PUNTO 2///
console.log("////////// INICIO PUNTO 2 //////////");
let estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(`El nombre del segundo estudiante es ${estudiantes[1].nombre}`);

estudiantes[0].edad = 25;
console.log(`El estudiante ${estudiantes[0].nombre} con promedio de ${estudiantes[0].promedio} ha actualizado su edad a ${estudiantes[0].edad} años`);
console.log("////////// FIN PUNTO 2 //////////");

///PUNTO 3///
console.log("////////// INICIO PUNTO 3 //////////");
let ageSum = 0;
let stats = [];
estudiantes.forEach((stu)=>{
    ageSum += stu.edad;    
});

//CORRECCIÓN REALIZADA, SE SACA DEL LOOP ESTE PROCESO QUE SE PUEDE REALIZAR FUERA 
let ageAvg = ageSum/estudiantes.length;
stats.push(ageSum);
stats.push(ageAvg);

console.log(`La edad total de los ${estudiantes.length} estudiantes es ${stats[0]} años con un promedio de edad de ${stats[1]} años`);
console.log("////////// FIN PUNTO 3 //////////");

///PUNTO 4///
console.log("////////// INICIO PUNTO 4 //////////");
estudiantes = [
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

const highestAvg = Math.max(...estudiantes.map(e => e.promedio));

const highestAvgStd = estudiantes.find(std => std.promedio === highestAvg);
//CORRECCIÓN REALIZADA, SE CAMBIA EL RELACIONAL == POR ===, ADEMAS SE CAMBIA EL METODO FILTER POR FIND 
//PARA NO TRABAJAR CON JSON's DENTRO DE ARRAY SINO CON EL JSON DIRECTAMENTE

console.log(`${highestAvgStd.genero=='Masculino' ? "El" : "La"} estudiante con mayor promedio es ${highestAvgStd.nombre} con ${highestAvgStd.promedio}`);

const estudiantesMayores = estudiantes.filter(std => std.edad>20);

console.log("Los estudiante mayores de 20 años son: ")
estudiantesMayores.forEach(std=>console.log(`${std.genero=='Masculino' ? "El" : "La"} estudiante ${std.nombre} tiene ${std.edad} años, su promedio es ${std.promedio}, estudia ${std.carrera} en la ciudad de ${std.ciudad}`));
console.log("////////// FIN PUNTO 4 //////////");
