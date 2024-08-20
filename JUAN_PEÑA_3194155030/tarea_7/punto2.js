// Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];


// Imprime en la consola el nombre del segundo estudiante.
const segundoNombre=estudiantes.find((estudiante,index)=>index===1)
console.log(segundoNombre.nombre)

// Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.

const actualizacionEstudiante=estudiantes.map((estudiante,index)=>{
    if(index===0){
        const estudianteActualizado = {
            nombre: estudiante.nombre,
            edad: 25,  // Aquí estamos actualizando la edad
            promedio: estudiante.promedio
    }
    return estudianteActualizado;
    }

    return estudiante;
})

console.log(actualizacionEstudiante[0]);





 
  




