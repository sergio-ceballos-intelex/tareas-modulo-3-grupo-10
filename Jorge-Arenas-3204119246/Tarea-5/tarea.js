//Punto 1

//const number1 = Number(prompt("Digita el numero 1")); 
//const number2 = Number(prompt("Digita el numero 2")); 
//const operacion = prompt("Digita la operacion que deseas realizar (suma, resta, multiplicacion o divsion)"); 

//if(operacion === "suma"){
  //  const suma = number1 + number2
   // document.write("El resultado es: ", suma);
//} else if(operacion === "resta"){
  //  const resta = number1 - number2
    //document.write("El resultado es: ", resta);
//} else if(operacion === "multiplicación"){
  //  const multiplicacion = number1 * number2
    //document.write("El resultado es: ", multiplicacion);
//} else if(operacion === "división"){
  //  const division = number1 / number2
    //document.write("El resultado es: ", division);
//} else {
  //  document.write("la operacion que deseas hacer no estas disponible");
//}


//Punto 2

//const nombre = (prompt("Digita nombre del estudiante"));
//const edad = Number(prompt("Digita la edad"));
//const promedio = Number(prompt("Digita el promedio de calificaciones del estudiante (0-10)."));
//const esRegular = true;
//const cantidadDeMateriasAprobadas = Number(prompt("Ingrese materias aprobadas"));
//const esBecado = true;

//if (edad < 18){
//document.write ("El estudiante es menor de edad y no puede registrarse");
//} else if (edad > 18 && promedio < 6){
//    document.write ("El estudiante no cumple con el promedio mínimo requerido.")
//} else if (edad >= 18 && promedio >= 6 && !esRegular) {
 //   document.write ("El estudiante debe registrarse como regular")
//} else if (edad > 18 && promedio >= 6 && !esRegular && !esBecado){
    
//} else {
 //   document.write("El estudiante cumple con todos los requisitos")
//}

//Punto 3

verdadero || verdadero || falso && verdadero || falso && verdadero && verdadero || falso
verdadero || verdadero ||       falso        ||           falso                 || falso
verdadero || verdadero ||       falso        ||           falso     
verdadero || verdadero
verdadero 

_________________________________________________________________________________________________________
verdadero && (falso || falso && (verdadero && (verdadero || falso && verdadero))) || falso && (verdadero || falso)
verdadero && (falso || falso && (verdadero && (verdadero || falso && verdadero))) || falso && verdadero
verdadero && (falso || falso && (verdadero && (verdadero || falso))) || falso && verdadero
verdadero && (falso || falso && (verdadero && verdadero))|| falso && verdadero
verdadero && (falso && verdadero) || falso && verdadero
verdadero && falso || falso && verdadero
falso||falso
falso


!(!verdadero && (falso || falso && !!!verdadero || (verdadero && !falso))) || falso && verdadero
!(!verdadero && (falso || falso && !!!verdadero || verdadero)) || falso && verdadero
!(!verdadero && (falso || falso && falso && falso || verdadero)) || falso && verdadero
!(!verdadero && (falso || falso || verdadero)) ||falso && verdadero
!(!verdadero && verdadero) || falso && verdadero
!(falso) || falso && verdadero
verdadero || falso
verdadero