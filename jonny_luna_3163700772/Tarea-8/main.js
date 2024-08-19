console.log("\n ******************* PUNTO 1 ***********************\n");
/*** Callbacks en Manejo de Datos:***/

function sumarArreglo(numeros, callback) {
    //const suma = numeros.reduce((resultado, numero) => resultado + numero, 0);
   let suma = 0;
   numeros.forEach(function(numero) {
    suma +=numero;
   });
    
   callback(suma);
};

const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
console.log(resultado); // Debería imprimir 15
});


console.log("\n ******************* PUNTO 2 ***********************\n");
/*** Callbacks para Filtrar Elementos de un Arreglo: ***/

function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    const numbers = []; 
    arreglo.forEach(numero => {
        if(callbackFiltro(numero)){
            numbers.push(numero);
        }
    });

    return numbers;
}

const numeros2 = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros2, function (numero) {
    return numero % 2 === 0;
});
  
console.log(numerosPares); // Debería imprimir [2, 4]


console.log("\n ******************* PUNTO 3 ***********************\n");

/*** Callbacks: Filtrar Números Pares ***/
// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    
    const numerosPares = numeros.filter(numero => numero % 2 === 0  )

    callback(numerosPares);
}
  
  // Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
    
    console.log(numerosPares);
}
  
  // Array de números de ejemplo
  const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros3, mostrarPares);

  console.log("\n ******************* PUNTO 4 ***********************\n");

  //Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur

  //Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:
  
const bog_mad = (callback) => {
  const bog = console.log("Estoy en Bogotá"); 
  setTimeout(() => {console.log("Vuelo Bogotá - Madrid, me demoré 7 horas");
    console.log("Llegué a madrid");
    callback();
  }, 7000);
}  

const mad_fkf = (callback) => {
  setTimeout(() => {console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
    console.log("Llegué a Frankfurt");
    callback();
  }, 2000);
}

const fkf_seul = () => {
  setTimeout(() => {console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
    console.log("Llegué a Seul");
  }, 10000);
  
}

bog_mad(() => {
  mad_fkf(fkf_seul);
});





  

  


