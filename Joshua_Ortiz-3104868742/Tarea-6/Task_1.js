
function calcular() {

    // Obtener los numero ingresados mediante el .getElementById el cual toma el dato ingresado a un input con el id nombrado y es un METODO

    //  La función parseFloat Convierte el valor que obtenga del input a un numero decimal y si no puede ser convertido en numero entonces retorna NaN

    var primero = parseFloat(document.getElementById("primero").value);
    var segundo = parseFloat(document.getElementById("segundo").value);

    // .trim()  esta función elimina espacios en blanco al principio y al final del texto

    // .toLowerCase() Esta función permite que los textos ingresados al input los convierta a letra en minúscula
    var operacion = document.getElementById("operacion").value.trim().toLowerCase();


    // Validar si los valores ingresados a los inputs son números
    if (isNaN(primero) || isNaN(segundo)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    // Crear la variable resultado
    var resultado;

    // Validar la operación y realizar el cálculo correspondiente
    if (operacion === "suma" || operacion === "+"  || operacion === "mas") {
        
        resultado = primero + segundo;
    } else if (operacion === "resta" || operacion === "-"  || operacion === "menos") {
        
        resultado = primero - segundo;
    } else if (operacion === "multiplicación" || operacion === "*" || operacion === "multiplicacion"  || operacion === "por") {
        
        resultado = primero * segundo;
    } else if ((operacion === "división" || operacion === "/"  || operacion === "dividido"  || operacion === "division") && segundo !== 0) {
        
        resultado = primero / segundo;
    } else if (operacion === "división" || operacion === "/" || operacion === "division" || operacion === "dividido") {
        
        alert("No se puede dividir por cero.");
        return;
    } else {
        
        alert("Por favor, ingresa una operación válida (suma, resta, multiplicación, división).");
        return;
    }

    // Mostrar el resultado
    //  se usa la propiedad innerText para añadir el resultado con el texto 
    document.getElementById("resultado").innerText = "El resultado es: " + resultado;
}