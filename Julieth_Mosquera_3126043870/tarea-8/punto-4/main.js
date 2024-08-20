function filtrarArreglo(arreglo, callbackFiltro) {
    const nuevoArreglo = [];
    
    
    arreglo.forEach(function(elemento) {
      if (callbackFiltro(elemento)) {
        nuevoArreglo.push(elemento);
      }
    });
    
    return nuevoArreglo;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function(numero) {
    return numero % 2 === 0;
  });
  
  console.log(numerosPares); 
  