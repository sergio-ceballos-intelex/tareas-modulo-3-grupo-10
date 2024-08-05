// Sistema de Gestión de Registro de Estudiantes
const Estudiante = {
    Nombre: "Harry",
    edad: 25,
    promedio: 9,
    esregular: true,
    CantidadMateriasAprobadas: 8,
    esBecado: true
}
if (Estudiante.edad <18){
    console.log("eres menor de edad y no puede registrarte.")
}
else if (Estudiante.edad >18 && Estudiante.promedio <6){
    console.log("no cumple con el promedio mínimo requerido")
}
else if (Estudiante.edad > 18 && Estudiante.promedio >= 6 && !Estudiante.esregular) {
    console.log("El estudiante debe registrarse como regular.");
}
else if (Estudiante.edad > 18 && Estudiante.promedio >= 6 && Estudiante.esregular ===true && !Estudiante.esBecado) {
    console.log("El estudiante debe solicitar una beca.");
}
// por defecto si el estudiante cumple con todas las condiciones automaticamente pasa a esta ultima condicion
else {
    console.log("estudiante cumple con todos los requisitos")
}
