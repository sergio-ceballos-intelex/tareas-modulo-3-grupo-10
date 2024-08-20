function filtrarArreglo(arreglo, callbackFiltro) {
    // Crear un nuevo arreglo para los elementos que pasan el filtro
    const nuevoArreglo = [];
  
    // Iterar sobre cada elemento del arreglo original
    for (let i = 0; i < arreglo.length; i++) {
      // Si el elemento pasa el filtro, añadirlo al nuevo arreglo
      if (callbackFiltro(arreglo[i])) {
        nuevoArreglo.push(arreglo[i]);
      }
    }
  
    // Devolver el nuevo arreglo con los elementos filtrados
    return nuevoArreglo;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  
  console.log(numerosPares); // Debería imprimir [2, 4]
  