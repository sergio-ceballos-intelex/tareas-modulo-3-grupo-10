// 1. Calculadora

// const problema = prompt("sum, res, mul, div")
// const valorA = Number(prompt("digite el primer valor"))
// const valorB = Number(prompt("digite el segundo valor"))

// if (problema === "sum"){
//     const resultado = valorA + valorB
//     document.write("El resultado es:", resultado);
// }else if (problema === "res"){
//     const resultado = valorA - valorB
//     document.write("El resulatdo es:", resultado);
// }else if (problema === "mul"){
//     const resultado = valorA * valorB
//     document.write("El resulatdo es:", resultado);
// }else if (problema === "div"){
//     const resultado = valorA / valorB
//     document.write("El resulatdo es:", resultado);
// }

//2. Sistema de Gestión de Registro de Estudiantes de educación Superior

// const nombreEstudiante = prompt("Escriba el nombre del estudiante");
// const edad = Number(prompt("Digite edad del estudiante"));
// const promedio= Number(prompt("Indique promedio del estudiante (0-10"));
// const esRegular = confirm("Presione (SI) si el estudiante es regular");
// const cantidadMateriasAprobadas = Number(
//   prompt("Indique cantidad de materias aprobadas por el estudiante")
// );
// const esBecado = prompt("Escriba (true) si es becado de lo contrario escriba (false) ");

// function registroEstudiante(edad, promedio, esRegular, esBecado) {
//   if (edad < 18) {
//     return " Es menor de edad y NO se puede registrar";
//   } else if (edad >= 18 && promedio < 6) {
//     return " No cumple con el promedio minimo requerido";
//   } else if (edad >= 18 && promedio >= 6 && esRegular == false) {
//     return " Debe registrarse como regular";
//   } else if (edad >= 18 && promedio >= 6 && esRegular && becado == false) {
//     return " Puede solicitar una beca";
//   } else if (edad >= 18 && promedio >= 6 && esRegular && becado) {
//     return " Cumple con todos los requisitos";
//   } else {
//     return "ERROR se estan introduciendo datos fuera de los parametros";
//   }
// }
// alert(
//   `Durante el registro encontramos que el estudiante de nombre ${nombreEstudiante} ${registroEstudiante(
//     edad,
//     promedio,
//     esRegular,
//     esBecado
//   )}`
// );
// 3. Lógica proposicional

// 1. ejercicio
// console.log(true || true || false && true || false && true && true || false)

// true || true || false && true || false && true && true || false
// true || true || false || false || false
// true || true || false
// true || false
// true

// 2.
// console.log(true && (false || false && (true && (true || false && true))) || false && (true || false))

// (true && (false || false && (true && (true || false))) || false && (true || false))
// (true && (false || false && true) || false && (true || false))
// (true && (false || false && true) || false && true)
// (true && (false || false) || false && true)
// (true && false || false && true)
// (false || false && true)
// (false || false)
// false

// 3
console.log(!(!true && (false || false && !!!true || (true && !false))) || false && true);

// (!(!true && (false || false && !!!true || (true && !false))) || false && true)
// (!(!true && (false || false && !!!true || (true && true))) || false && true)
// (!(!true && (false || false && !!!true || true)) || false && true)
// (!(!true && (false || false && false || true)) || false && true)
// (!(!true && (false || false && false || false && true)))
// (!(!true && (false || false || false && true)))
// (!(!true && (false || false || false)))
// (!(!true && false))
// (!(false && false))
// (!false)
// true