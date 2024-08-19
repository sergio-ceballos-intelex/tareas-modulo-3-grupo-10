
// Callbacks en manejo de datos :
// Crea una función que tome un arreglo de números y un callback y llame
//  al callback con el resultado de sumar todos los números del arreglo.



function sumarArreglo(numeros, callback) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];   
    };
callback(suma);
};
  const numeros = [1, 2, 3, 4, 5];
  
  sumarArreglo(numeros, function(suma) {
    console.log(suma); 
  });