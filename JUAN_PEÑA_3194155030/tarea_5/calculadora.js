const numero1=Number(prompt("ingrese un número "))
const numero2=Number(prompt("ingrese un segundo número"))
const operacion=prompt("Operación que deseas realizar : + , - , * , / ").toLowerCase();

const suma = numero1 + numero2
const resta = numero1 - numero2
const division = numero1 / numero2
const multiplicacion= numero1 * numero2



if(operacion==="+"){
    document.write("La suma de ",numero1, "+", numero2, "=", suma)
} else if (operacion==="-"){
    document.write("La resta de ",numero1, "-", numero2, "=", resta)
} else if (operacion==="/"){
    document.write("La division de ",numero1, "/", numero2, "=", division)
}else if (operacion==="*"){
    document.write("La multiplicación de ",numero1, "*", numero2, "=", multiplicacion)
} else {
    document.write("operación no conocida")
}