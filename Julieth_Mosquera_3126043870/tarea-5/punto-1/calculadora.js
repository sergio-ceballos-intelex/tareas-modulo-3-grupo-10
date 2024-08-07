//Hacer un programa que le permita al usuario hacer un cálculo dependiendo
//de dos valores y de la operación que ingrese (suma, resta, multiplicación, división).
//Si el usuario ingresa los valores 7 y 8 y después ingresa una suma se deben 
//sumar los dos números que ingresó y asi con todas las operaciones aritméticas.

const number1 = Number(prompt("Digita el numero 1"));
const number2 = Number(prompt("Digita el numero 2")); // 3
const operacion = prompt("Digita la operacion que deseas realizar (suma, resta, multiplicacion o divsion)"); //"suma"

if(operacion === "suma"){
    const suma = number1 + number2
    document.write("El resultado es: ", suma);
} else if(operacion === "resta"){
    const resta = number1 - number2
    document.write("El resultado es: ", resta);
} else if(operacion === "multiplicacion"){
    const multiplicacion = number1 * number2
    document.write("El resultado es: ", multiplicacion);
} else if(operacion === "division"){
    const division = number1 / number2
    document.write("El resultado es: ", division);
} else {
    document.write("la operacion que deseas hacer no estas disponible");
}