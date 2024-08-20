//Tarea 8: Callbacks
// 1. Callbacks en Manejo de Datos:
// Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.
// function sumarArreglo(numeros, callback) {
//     let resultado = 0;

//     numeros.forEach(n => {
//         resultado += n;
//     });

//     callback(resultado);
//   }
// const numeros = [1, 2, 3, 4, 5];
//   sumarArreglo(numeros, function (resultado) {
//     console.log(resultado); 
// });

// 2. Callbacks para Filtrar Elementos de un Arreglo:
// Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro.
// function filtrarArreglo(arreglo, callbackFiltro) {
//     const number = []; 
//     arreglo.forEach(numero => {
//         if(callbackFiltro(numero)){
//             number.push(numero);
//         }
//     });

//     return number;
// }
  
//   const numeros = [1, 2, 3, 4, 5];
//   const numerosPares = filtrarArreglo(numeros, function (numero) {
//     return numero % 2 === 0;
//   });
//   console.log(numerosPares);

// 3. Callbacks: Filtrar Números Pares
// Crea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.
// function filtrarPares(numeros, callback) {
    
//     const numerosPares = numeros.filter(numero => numero % 2 === 0  )

//     callback(numerosPares);
// }

// function mostrarPares(numerosPares) {
    
//     console.log(numerosPares);
// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filtrarPares(numeros3, mostrarPares);

// 4. Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur.
// Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:
// const vueloBog_Mad = (callback) => {
//     const bog = console.log("Estoy en Bogota"); 
//     setTimeout(() => {console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
//       console.log("Llegué a Madrid");
//       callback();
//     }, 7000);
// }  
  
// const vueloMad_Fkf = (callback) => {
//     setTimeout(() => {console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
//       console.log("Llegué a Frankfurt");
//       callback();
//     }, 2000);
// }
  
// const vueloFkf_Seul = () => {
//     setTimeout(() => {console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
//       console.log("Llegué a Seul");
//     }, 10000);
// }
