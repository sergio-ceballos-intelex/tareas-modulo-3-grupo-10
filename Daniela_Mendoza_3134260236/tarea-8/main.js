// PUNTO 1
//  Crea una función que tome un arreglo de números y un callback, y llame al callback 
// con el resultado de sumar todos los números del arreglo.

function sumarArreglo(numeros, callback) {
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    callback(suma);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado);
  });

//   PUNTO 2
// Crea una función que tome un arreglo y un callback de filtro, 
// y devuelva un nuevo arreglo con los elementos que pasan el filtro.

function filtrarArreglo(arreglo, callbackFiltro) {
    const resultado = [];
  
    for (let i = 0; i < arreglo.length; i++) {
      if (callbackFiltro(arreglo[i])) {
        resultado.push(arreglo[i]);
      }
    }
    return resultado;
  }
  
  const numeros1 = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros1, function (numero) {
    return numero % 2 === 0;
  });
  
  console.log(numerosPares);

// PUNTO 3
// Creea una función en JavaScript que filtre los números 
// pares de un array y utilicen un callback para manejar el resultado.

function filtrarPares(numeros2, callback) {
    const numerosPares = numeros2.filter((numero) => numero % 2 === 0);
    callback(numerosPares);
  }
  
  function mostrarPares(numerosPares) {
    console.log(numerosPares);
  }
  const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filtrarPares(numeros2, mostrarPares);

// PUNTO 4
// Hacer un programa que simule un vuelo desde 
// Colombia hasta Corea del Sur respetando el orden de los vuelos:

// 1. Vuelo Bogota - Madrid: 7000ms (7 horas)
// 2. Vuelo Madrid - Frankfurt: 2000ms (2 horas)
// 3. Vuelo Frankfurt - Seul: 10000ms (10 horas)
// 4. Llegada a Seul

function vueloBogotaMadrid(callback) {
    console.log("Estoy en Bogota");
    setTimeout(() => {
      console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
      console.log("Llegué a Madrid");
      callback();
    }, 7000);
  }
  
  function vueloMadridFrankfurt(callback) {
    setTimeout(() => {
      console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
      console.log("Llegué a Frankfurt");
      callback();
    }, 2000);
  }
  
  function vueloFrankfurtSeul(callback) {
    setTimeout(() => {
      console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
      callback();
    }, 10000);
  }
  
  function simulacionVuelo() {
    vueloBogotaMadrid(() => {
      vueloMadridFrankfurt(() => {
        vueloFrankfurtSeul(() => {
          console.log("Llegué a Seul");
        });
      });
    });
  }
  
  simulacionVuelo();


