
// Callbacks: filtrar numeros pares 
// Crea una función en JS que filtre los numeros pares de un array
//  y utilicen un callback para manejar el resultado.


function filtrarPares(numeros, callback) {
  const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
  });
  callback(numerosPares);
}


function mostrarPares(numerosPares) {
  console.log('Numeros pares:', numerosPares);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filtrarPares(numeros, mostrarPares);
