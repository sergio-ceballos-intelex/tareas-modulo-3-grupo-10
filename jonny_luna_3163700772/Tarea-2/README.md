Las estructuras de control en programación son fundamentales para dirigir el flujo de ejecución de un programa. Estas estructuras permiten a los programadores tomar decisiones, repetir acciones y controlar el orden en que se ejecutan las instrucciones del programa. Las estructuras de control más comunes son las condicionales y los bucles.

Estructuras de Control en JavaScript
En JavaScript, existen varias estructuras de control que se pueden usar para gestionar el flujo de un programa:

1. Estructuras Condicionales
Las estructuras condicionales permiten que un bloque de código se ejecute solo si se cumple una condición específica.

if: Ejecuta un bloque de código si una condición es verdadera.

if (condition) {
    // código a ejecutar si la condición es verdadera
}
else: Ejecuta un bloque de código si la condición del if es falsa.
if (condition) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}

else if: Proporciona una nueva condición si la condición anterior es falsa.
if (condition1) {
    // código a ejecutar si condition1 es verdadera
} else if (condition2) {
    // código a ejecutar si condition2 es verdadera
} else {
    // código a ejecutar si ninguna de las condiciones anteriores es verdadera
}

switch: Evalúa una expresión y ejecuta el bloque de código correspondiente al caso coincidente.

switch (expression) {
    case value1:
        // código a ejecutar si expression es igual a value1
        break;
    case value2:
        // código a ejecutar si expression es igual a value2
        break;
    default:
        // código a ejecutar si no hay coincidencias
}

2. Bucles
Los bucles permiten repetir un bloque de código mientras se cumpla una condición.

for: Repite un bloque de código un número específico de veces.

for (let i = 0; i < 10; i++) {
    // código a ejecutar 10 veces
}

while: Repite un bloque de código mientras una condición sea verdadera.

while (condition) {
    // código a ejecutar mientras la condición sea verdadera
}

do...while: Ejecuta un bloque de código una vez, y luego lo repite mientras una condición sea verdadera.

do {
    // código a ejecutar al menos una vez
} while (condition);

3. Bucles de Alta Orden
JavaScript también ofrece métodos de array que facilitan el trabajo con bucles, conocidos como bucles de alta orden.

forEach: Ejecuta una función para cada elemento de un array.

const array = [1, 2, 3, 4, 5];
array.forEach(function(item) {
    // código a ejecutar para cada elemento del array
});

