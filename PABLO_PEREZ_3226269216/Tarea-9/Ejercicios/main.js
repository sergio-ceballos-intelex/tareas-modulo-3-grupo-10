const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 17
    },
    {
        nombre: 'Catalina',
        apellido: 'jimenez',
        edad: 25
    },
    {
        nombre: 'Federico',
        apellido: 'Martinez',
        edad: 16
    },
];

const estudianteMayorEdad = estudiantes.filter((estudiante)=> estudiante.edad >= 18)
// console.log(estudianteMayorEdad)

function myFilter (callback){
    const mayoresEdad = []
    for (i=0; i < estudiantes.length; i++ ){
        const condicion = callback(estudiantes[i]);
        if (condicion){
            mayoresEdad.push(estudiantes[i])
        }
    }
    return mayoresEdad
}
const estudianteMayorEdad1 = myFilter(function(estudiante){return estudiante.edad >= 18})
const estudianteMenorEdad1 = myFilter(estudiante => estudiante.edad < 18)
const estudianteNombreComienzaPorJ = myFilter(estudiante => estudiante.nombre.startsWith('J'));


// console.log(estudianteMayorEdad1)
// console.log(estudianteMenorEdad1)
// console.log(estudianteNombreComienzaPorJ)


console.log("descargando video 2 segundos")


setTimeout(() =>{
    console.log("procesando video 7 segundos")
}, 2000)
    
setTimeout(() =>{
    console.log("video descargado 0 segundos")
}, 9000)
    

