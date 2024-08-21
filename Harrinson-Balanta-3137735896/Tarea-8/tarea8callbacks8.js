// 1. Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.
// function sumarArreglo(numeros, callback) {
//     let sumar = 0;

//     // Usar el método forEach para iterar sobre cada número y sumar
//     numeros.forEach(function(numero) {
//       sumar += numero;
//     });
//     callback(sumar);
//   }
//   const numeros = [1, 2, 3, 4, 5];
//   sumarArreglo(numeros, function (resultado) {
//     console.log(resultado); // Debería imprimir 15
//   });


// //   2. Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:
// function filtrarArreglo(arreglo, callbackFiltro) {
//     return arreglo.filter(callbackFiltro);
// }
// const numeros = [1, 2, 3, 4, 5];
// const numerosPares = filtrarArreglo(numeros, function (numero) {
//     return numero % 2 === 0;
// });
// console.log(numerosPares); 

//  3. Descripción: Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.
function filtrarPares(numeros, callback) {
    const numerospares = numeros.filter(function(numero) {
      return numero % 2 === 0;
    });
    callback(numerospares);
  }
    
  function mostrarPares(numerospares) {
    console.log('estos son los numeros pares:', numerospares);
  }
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    filtrarPares(numeros, mostrarPares);

// // Llamar a la función filtrarPares y pasar el callback mostrarPares
// filtrarPares(numeros, mostrarPares);

//  4. Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur

// Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

// Vuelo Bogota - Madrid: 7000ms (7 horas)
// Vuelo Madrid - Frankfurt: 2000ms (2 horas)
// Vuelo Frankfurt - Seul: 10000ms (10 horas)
// Llegada a Seul

// function estoyenbogota(callback) {
//     setTimeout(() => {
//         console.log('vuelo bogota madrid');
//         callback();
//     }, 7000);
// }
// function llegueamadrid(callback) {
//     setTimeout(() => {
//         console.log('Llegué a Madrid');
//         callback();
//     }, 2000);
// }
// function LleguéaFrankfurt(callback) {
//     setTimeout(() => {
//         console.log('Llegué a Frankfurt');
//         callback();
//     }, 10000);
// }
// function LleguéaSeul(callback) {
//     console.log('Llegué a Seul');


// }

// estoyenbogota(() => {
//     llegueamadrid(() => {
//     });
//     LleguéaFrankfurt(() => {
//         LleguéaSeul ();
//     });


// });