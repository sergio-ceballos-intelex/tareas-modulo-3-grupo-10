document.getElementById("estudiantes").addEventListener('submit', (event)=>{
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = Number(document.getElementById("edad").value);
    const promedio = Number(document.getElementById("promedio").value);
    const esRegular = document.querySelector('input[name="esRegular"]:checked').value==="si";
    const materiasAprob = Number(document.getElementById("materiasAprob").value);
    const esBecado = document.querySelector('input[name="beca"]:checked').value==="si";

    let mensaje;

    if(edad < 18){
        mensaje = `${nombre} es menor de edad y no puede registrarse`;
    } else {
        if(promedio < 6) {
            mensaje = `${nombre} tu promedio de ${promedio} no cumple con el promedio mínimo requwerido`;
        }else if(!esRegular) {
            mensaje = `${nombre} debes registrarte como regular`;
        }else if(!esBecado) {
            mensaje = `${nombre} puedes solicitar una beca`;
        } else {
            mensaje = `${nombre} cumples con todos los requisitos`;
        }
    }

    document.getElementById("resultado").textContent=mensaje;

})