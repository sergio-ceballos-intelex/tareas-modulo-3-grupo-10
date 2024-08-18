// Pedir los valores al usuario
let valor1 = parseInt(prompt("Ingrese el primer numero:"));
let valor2 = parseInt(prompt("Ingrese el segundo numero:"));

// Pedir la operación al usuario
let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):");

// Realizar la operación según la elección del usuario
switch (operacion) {
  case "suma":
    resultado = valor1 + valor2;
    break;
  case "resta":
    resultado = valor1 - valor2;
    break;
  case "multiplicacion":
    resultado = valor1 * valor2;
    break;
  case "division":
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
    } else {
      alert("Error: no se puede dividir por cero");
      resultado = null;
    }
    break;
  default:
    alert("Error: operación no válida");
    resultado = null;
}

// Mostrar el resultado
if (resultado !== null) {
  alert(`El resultado de la ${operacion} es: ${resultado}`);
}