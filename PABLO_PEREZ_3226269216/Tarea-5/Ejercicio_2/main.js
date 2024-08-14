const nombre = prompt("ingrese su nombre:")
const edad  = Number(prompt("ingresa tu edad:"))
const promedio = Number(prompt("ingrese su promedio:"))
const cantidadMateriasAprobadas = Number(prompt("ingresa las materias aprobadas"))

function evaluar_Estudiante(nombre, edad, promedio, cantidadMateriasAprobadas){
    const registro_estudiantes={
        name : nombre ,
        age : edad ,
        promed : promedio,
        regular : true,
        cantMateria : cantidadMateriasAprobadas,
        becado : true
    };
    if (edad < 18){
        alert ("el estudiantes es menor de edad y no se puede registrar")
    }else if (edad >= 18 && promedio < 6){
        alert ("no es un estudiantes destacado")
        }else if(registro_estudiantes.regular != true){
            alert ("el estudiante debe registrarse como regular")
        }else if(registro_estudiantes.regular === true && registro_estudiantes.becado !=true){
            alert("Puede solicitar una beca")
        }else if (registro_estudiantes.regular === true && registro_estudiantes.becado === true){
            alert("el becado cumple con todos los requisitos")
        }         
    return registro_estudiantes
}
console.log(evaluar_Estudiante(nombre, edad, promedio, cantidadMateriasAprobadas))
