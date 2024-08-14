
const nombre = prompt("Ingresa tu nombre:");
const edad = parseInt(prompt("Ingresa tu edad:"));
const promedio = parseFloat(prompt("Ingresa tu promedio de (0 a 10):"));
const esRegular = prompt("¿Eres estudiante regular? (si/no):").toLowerCase() === 'si';
const cantidadMateriasAprobadas = parseInt(prompt("Ingresa tus materias aprobadas:"));
const esBecado = prompt("¿tienes una beca? (si/no):").toLowerCase() === 'si';

function verificarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado) {
    if (edad < 18) {
        return `${nombre} es menor de edad y no puede registrarse.`;
    } else if (edad > 18 && promedio < 6) {
        return `${nombre} no cumple con el promedio mínimo requerido.`;
    } else if (edad > 18 && promedio >= 6 && !esRegular) {
        return `${nombre} debe registrarse como estudiante regular.`;
    } else if (edad > 18 && promedio >= 6 && esRegular && !esBecado) {
        return `${nombre} puede solicitar una beca.`;
    } else if (edad > 18 && promedio >= 6 && esRegular && esBecado) {
        return `${nombre} cumple con todos los requisitos.`;
    } else {
        return `Datos no válidos para ${nombre}.`;
    }
}
const mensaje = verificarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado);
alert(mensaje);