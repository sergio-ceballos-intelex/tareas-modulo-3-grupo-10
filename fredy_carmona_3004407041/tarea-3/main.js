// let myArray =[]

// for(let contador = 1; contador <= 50; contador++){
//     myArray.push(contador);
// }
// console.log(myArray);


// let myArray =[]

// for(let contador = 1; contador <= 2000; contador++){
//     myArray.push(contador);
// }
// console.log(myArray);



const numeros = [10, 20, 25, 30, 42, 55, 21, 22, 100, 200, 250];

// Filtrar y mostrar solo los números que empiezan con '2'
numeros.forEach(numero => {
    if (numero.toString().startsWith('2')) {
        console.log(numero);
    }
});