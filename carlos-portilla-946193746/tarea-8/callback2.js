
// Callbacks para filtrar elementos de un arreaglo :
// Crea una función que tome un arreglo y un callback de filtro 
// y devuelva un nuevo arreglo con elementos filtrados


function filtrarArreglo(numeros, callbackFiltro) {
  const nuevoArreglo = [];
  for (let i =0; i < numeros.length; i++) {
    if (callbackFiltro(numeros[i])) {
      nuevoArreglo.push(numeros[i]);
    }
  } 
  return nuevoArreglo;
}

const numeros = [1, 2, 3, 4, 5];

const numerosPares = filtrarArreglo(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares);