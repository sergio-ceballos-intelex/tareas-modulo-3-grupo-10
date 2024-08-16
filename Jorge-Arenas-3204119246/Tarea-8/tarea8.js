//Punto 1
// function sumarArreglo(numeros, callback) {
//     const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
//     callback(suma);
//   }
//   const numeros = [1, 2, 3, 4, 5];
//   sumarArreglo(numeros, function (resultado) {
//     console.log(resultado); // Debería imprimir 15
//   });

//punto 2

// function filtrarArreglo(arreglo, callbackFiltro) {
//     const resultado = [];
//     for (let i = 0; i < arreglo.length; i++) {
//         if (callbackFiltro(arreglo[i])) {
//             resultado.push(arreglo[i]);
//         }
//     }
//     return resultado;
// }
// const numeros = [1, 2, 3, 4, 5];
// const numerosPares = filtrarArreglo(numeros, function (numero) {
//     return numero % 2 === 0;
// });
// console.log(numerosPares);

//punto 3

// function filtrarPares(numeros, callback) {
//     // Usar el método filter para obtener solo los números pares
//     const numerosPares = numeros.filter(function(numero) {
//       return numero % 2 === 0;
//     });
  
//     // Llamar al callback con el array de números pares
//     callback(numerosPares);
//   }
  
//   // Callback para mostrar los números pares en la consola
//   function mostrarPares(numerosPares) {
//     // Imprimir los números pares en la consola
//     console.log('Números pares:', numerosPares);
//   }
  
//   // Array de números de ejemplo
//   const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
//   // Llamar a la función filtrarPares y pasar el callback mostrarPares
//   filtrarPares(numeros, mostrarPares);

  //punto 4

//   function vuelo(origen, destino, duracion, callback) {
//     console.log(`Vuelo ${origen} - ${destino}, me demoré ${duracion / 1000} horas`);
//     setTimeout(() => {
//       console.log(`Llegué a ${destino}`);
//       callback();
//     }, duracion);
//   }
  
//   function simularViaje() {
//     console.log("Estoy en Bogotá");
  
//     vuelo('Bogotá', 'Madrid', 7000, () => {
//       vuelo('Madrid', 'Frankfurt', 2000, () => {
//         vuelo('Frankfurt', 'Seúl', 10000, () => {
//           console.log("Llegué a Seúl");
//         });
//       });
//     });
//   }
//   simularViaje();