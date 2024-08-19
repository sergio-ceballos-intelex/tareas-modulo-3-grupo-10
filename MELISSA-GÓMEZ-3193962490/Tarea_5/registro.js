function verificarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado) {
   if (edad < 18) {
       return `${nombre} es menor de edad y no puede registrarse.`;
   } else if (promedio < 6) {
       return `${nombre} no cumple con el promedio mínimo requerido.`;
   } else if (!esRegular) {
       return `${nombre} debe registrarse como regular.`;
   } else if (!esBecado) {
       return `${nombre} puede solicitar una beca.`;
   } else {
       return `${nombre} cumple con todos los requisitos.`;
   }
}

// Ejemplo de uso:
const nombre = "Melissa";
const edad = 21;
const promedio = 7;
const esRegular = true;
const cantidadMateriasAprobadas = 10;
const esBecado = true;

const mensaje = verificarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado);
console.log(mensaje);