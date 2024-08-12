const numero1 = Number(prompt("ingrese un número "));
const numero2 = Number(prompt("ingrese un segundo número"));
const operacion = prompt("Operación que deseas realizar : +, -, * /").toLowerCase();

let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "/") {
    resultado = numero1 / numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else {
    resultado = "operación no conocida";
}

document.write("El resultado de la operación es: " + resultado);








