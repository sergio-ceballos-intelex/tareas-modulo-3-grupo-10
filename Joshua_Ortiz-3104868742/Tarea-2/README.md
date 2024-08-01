
    ----------------------------    Las estructuras de control  ----------------------------



Son estructuras las cuales permiten alterar la forma en q se ejecutan los datos y la informacion de un programa, lo que hacen la toma de decisiones tales como que bloques del codigo se ejecutan y ccuantas veces se repiten, teniendo en cuenta ciertas condiciones:

1) Estructuras de decisión o condicionales: Permite la ejecucion del codigo si cumple con la condicion definida

2) Estructuras de bucles o iterativas: Permiten repetir un bloque de código múltiples veces hasta que se cumpla una condición.

3) Estructuras de control de salto: Permiten alterar el flujo de ejecución saltando a diferentes partes del código.



----------------------------    Estructuras de Decisión


if...else


if (condición) {
    // Código a ejecutar si la condición es verdadera
} 

else {
    // Código a ejecutar si la condición es falsa
}


else if

if (condición1) {
    // Código a ejecutar si la condición1 es verdadera
} else if (condición2) {
    // Código a ejecutar si la condición2 es verdadera
} else {
    // Código a ejecutar si ninguna condición es verdadera
}



switch

switch (expresión) {
    case valor1:
        // Código a ejecutar si la expresión coincide con valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión coincide con valor2
        break;
    default:
        // Código a ejecutar si no hay coincidencias
}


----------------------------    Estructuras de Bucles


for

for (inicialización; condición; actualización) {
    // Código a ejecutar en cada iteración
}

while

while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}

do...while

do {
    // Código a ejecutar
}while (condición);


for...in (para iterar sobre propiedades de un objeto)


for (let propiedad in objeto) {
    // Código a ejecutar para cada propiedad en el objeto
}

for...of (para iterar sobre elementos de un iterable, como arrays)


for (let valor of iterable) {
    // Código a ejecutar para cada valor en el iterable
}

----------------------------    Estructuras de Control de Salto
break


// Usado para salir de un bucle o switch
break;
continue


// Usado para saltar a la siguiente iteración de un bucle
continue;
return (usado para salir de una función y, opcionalmente, devolver un valor)


function nombreFuncion() {
    // Código a ejecutar
    return valor;
}