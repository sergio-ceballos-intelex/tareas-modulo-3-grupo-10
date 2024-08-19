//Callbacks en Manejo de Datos: 
//Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.
//Ejercicio:

function sumarArreglo(numeros, callback) {
    const suma = numeros.reduce((acumulado, num) => acumulado + num,0);
    callback(suma)
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
  });