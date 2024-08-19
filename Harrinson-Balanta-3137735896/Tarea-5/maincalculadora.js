// variable para guardar los valores que ingresa el usuarios
const operacion = prompt ("que operacion matematica deseas reaalizar ingrese simbolo ejemplo para suma +");
const numero1 = Number (prompt("ingrese numero 1"));
const numero2 = Number (prompt("ingrese numero 2"));
// operacion
if (operacion === "+"){
    const sum = numero1 + numero1
    document.write("la suma de los dos numeros es", suma)
}
else if (operacion === "-"){
    const resta = numero1 - numero1
    document.write("la la resta de los dos numeros es", resta)
}
else if (operacion === "/"){
    const division = numero1 / numero1
    document.write("la division de los dos numeros es", division)
}
else if (operacion === "*"){
    const multiplicacion = numero1 * numero1
    document.write("la multiplicacion de los dos numeros es", multiplicacion)
}