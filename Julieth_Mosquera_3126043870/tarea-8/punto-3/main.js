function sumarArreglo(numeros, callback) {
    let suma = 0;
    
    numeros.forEach(function(numero) {
      suma += numero;
    });
    
    callback(suma);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
  });
  
