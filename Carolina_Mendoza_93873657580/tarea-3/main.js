// 1.Crear un archivo .js y desarrollar un script que muestre en consola los numeros del 1 al 50.

// let myArray =[]

// for(let contar = 1; contar <= 50; contar++){
//     myArray.push(contar);
// }
// console.log(myArray);
// 2.Modificar el script para que ahora imprima en consola los numeros del 1 al 2000.

// let myArray =[]

// for(let contar = 1; contar <= 2000; contar++){
//     myArray.push(contar);
// }
// console.log(myArray);
//3.Modificar el script para que ahora imprima solo los numeros que empiezan por 2 (convertir a string el numero y verificar con starsWith).
const numeros = [22, 20, 25, 30, 47, 35, 28, 72, 15, 17, 50];

numeros.forEach(numero => {
    if (numero.toString().startsWith('2')) {
        console.log(numero);
    }
});