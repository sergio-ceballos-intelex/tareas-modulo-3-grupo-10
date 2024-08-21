function sumarArreglo(numeros, callback) {
    // Sumar todos los números del arreglo
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    // Llamar al callback con el resultado
    callback(suma);
}

const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
});
