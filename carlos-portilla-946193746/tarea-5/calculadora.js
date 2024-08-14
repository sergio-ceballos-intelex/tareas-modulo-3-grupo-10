const valor1 = parseFloat(prompt('ingrese el primer numero'));
const valor2 = parseFloat(prompt('ingrese el segundo numero'));
const operacion = prompt('ingrese operacion');

function calculadora(valor1, valor2, operacion) {
      if (operacion == 'suma') {
         return valor1 + valor2;
      } else if (operacion == 'resta') {
        return valor1 - valor2;
      } else if (operacion == 'multiplicacion') {
        return valor1 * valor2;
      } else if (operacion == 'division') {
        if (valor2 !== 0) 
          return valor1/valor2;
        } else {
          return 'error: cero no permitido';
        } 
      }

resultado = calculadora(valor1, valor2, operacion);
alert(`la respuesta es:  ${resultado}`);