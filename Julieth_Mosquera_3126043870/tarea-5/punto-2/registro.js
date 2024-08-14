const nombre = "Andres";
const edad = 19;
const promedio = 7.0;
const esResgular = true
const cantidadMateriasAprobadas = 6;
const esBecado = true

if (edad < 18){
    console.log("el estudiante es menor de edad y no puede registrarse");

} else if (edad > 18, promedio < 6){
    console.log("el estudiante no cumple con el promedio minimo requerido");

} else if (edad > 18, promedio >= 6 , !esResgular){
    console.log("el estudiante debe registrarse como regular");

} else if (edad > 18, promedio >= 6 , esResgular , !esBecado){
    console.log("el estudiante puede solicitar una beca");

} else {
    console.log("el estudiante cumple con todos los requisitos")

}



