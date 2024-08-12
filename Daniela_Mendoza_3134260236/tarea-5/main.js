// 1. Calculadora

// const problema = prompt("suma, resta, multiplicacion, division")
// const numeroA = Number(prompt("digita el primer numero"))
// const numeroB = Number(prompt("digita el segundo numero"))

// if (problema === "suma"){
//     const resultado = numeroA + numeroB
//     document.write("tu resultado es:", resultado);
// }else if (problema === "resta"){
//     const resultado = numeroA - numeroB
//     document.write("tu resulatdo es:", resultado);
// }else if (problema === "multiplicacion"){
//     const resultado = numeroA * numeroB
//     document.write("tu resulatdo es:", resultado);
// }else if (problema === "division"){
//     const resultado = numeroA / numeroB
//     document.write("tu resulatdo es:", resultado);
// }

//2. Sistema de Gestión de Registro de Estudiantes

// const NombreEstudiante = prompt("Escriba el nombre del estudiante");
// const edad = Number(prompt("Digite edad del estudiante"));
// const promedio= Number(prompt("Indique promedio del estudiante (0-10"));
// const isRegular = confirm("Presione SI si el estudiante es regular");
// const tienebeca = Number(
//   prompt("Indique cantidad de materias aprobadas por el estudiante")
// );
// const hasScholarship = confirm("Presione SI si el estudiante es becado");

// function studentRegistration(edad, promedio, esRegular, becado) {
//   if (edad < 18) {
//     return " es menor de edad y NO se puede registrar";
//   } else if (edad >= 18 && promedio < 6) {
//     return " no cumple con el promedio minimo requerido";
//   } else if (edad >= 18 && promedio >= 6 && esRegular == false) {
//     return " debe registrarse como regular";
//   } else if (edad >= 18 && promedio >= 6 && esRegular && becado == false) {
//     return " puede solicitar una beca";
//   } else if (edad >= 18 && promedio >= 6 && esRegular && becado) {
//     return " cumple con todos los requisitos";
//   } else {
//     return "ERROR se estan introduciendo datos fuera de los parametros";
//   }
// }
// alert(
//   `Durante el registro encontramos que el estudiante de nombre ${NombreEstudiante} ${studentRegistration(
//     edad,
//     promedio,
//     isRegular,
//     tienebeca
//   )}`
// );

// 3. Lógica proposicional

// 1 //
// console.log(true || true || false && true || false && true && true || false)

// true || true || false && true || false && true && true || false
// true || true || false || false || false
// true || true || false
// true || false
// true

// 2
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