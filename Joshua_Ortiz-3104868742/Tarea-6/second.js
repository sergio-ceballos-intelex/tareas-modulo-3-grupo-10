function registrarEstudiante() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);
    let esRegular = document.getElementById("esRegular").checked;
    let mateAprobadas = parseInt(document.getElementById("cantidadMateriasAprobadas").value);
    let esBecado = document.getElementById("esBecado").checked;

    // haré una condición ternaria con todos los mensajes a imprimir pasando por cada variable para crear cada condición 

        // condicion si es menor a un valor
        // condicion si la variable es no tiene valor entonces se le asigna el mensaje

    let mesage = (edad < 18)? "El estudiante es menor de edad, No puede ser registrado " 
    : (promedio < 6) ? "El promedio es menor al requerido, No puede ser registrado"
    : (!esRegular) ? "El estudiante debe ser registrado como regular"
    : (!esBecado)   ? "El estudiante puede registrar una beca"
    : "El estudiante cumple con los requisitos para el Registro";
    
    
    document.getElementById("mensaje").innerText = mesage;
}
    