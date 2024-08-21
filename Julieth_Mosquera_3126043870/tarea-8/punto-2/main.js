const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrarPares(numeros, callback) {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
     callback(numerosPares);
  }
  function mostrarPares(numerosPares) {
    console.log('Números pares:', numerosPares);
  }
  filtrarPares(numeros, mostrarPares);

  
  
