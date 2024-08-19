// Estudiante #1

// const nombre= "Camilo"
// const edad= 23
// const promedioCalificaciones=6
// const esRegular= true
// const cantidadMateriasAprobadas= 7
// const esBecado= false



// Estudiante #2

const nombre= "Daniel"
const edad= 19
const promedioCalificaciones=9
const esRegular= true
const cantidadMateriasAprobadas= 7
const esBecado= false




if(edad<18){
    console.log("El estudiante es menor de edad y no puede registrarse.")
}else if(edad>=18 && promedioCalificaciones < 6){
    console.log("El estudiante no cumple con el promedio mínimo requerido.")
}else if(edad>=18 && promedioCalificaciones>=6 && esRegular===false){
    console.log("El estudiante debe registrarse como regular.")
}else if (edad>=18 && promedioCalificaciones>=6 && esRegular===true && esBecado===false){
    console.log("Puede solicitar una beca.")

}else if (edad>=18 && promedioCalificaciones>=6 && esRegular===true && esBecado===true){
    console.log("El estudiante cumple con todos los requisitos.")
}