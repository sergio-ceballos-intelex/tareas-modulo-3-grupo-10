const numer1 = Number(prompt("Ingrese el primer numero"))
const numer2 = Number(prompt("Ingrese el segundo numero"))
const operacion = prompt("Indica cual es la operacion que quieres usar, suma, resta, multiplicación, división");

function suma(num1, num2){
    resultado = num1+num2
    return resultado
}
function resta(num1, num2){
    resultado = num1-num2
    return resultado
}
function multiplicacion(num1, num2){
    resultado = num1*num2
    return resultado
}
function division(num1, num2){
    resultado = num1/num2
    return resultado
}
if (operacion === "suma" || operacion === "resta" || operacion === "multiplicacion" || operacion === "division"  ){
    if(operacion === "suma"){
        document.write(suma(numer1, numer2))
    }else if (operacion === "resta"){
        document.write(resta(numer1, numer2))
    }else if (operacion === "multiplicacion"){
        document.write(multiplicacion(numer1, numer2))
    }else if (operacion === "division"){
        document.write(division(numer1, numer2))
    }
}else{
    console.log("La operacion que hiciste tiene datos erroneos, recuerda que debe ser escrita tal cual se muestra en el texto ")
    alert("La operacion que hiciste tiene datos erroneos, recuerda que debe ser escrita tal cual se muestra en el texto")
}