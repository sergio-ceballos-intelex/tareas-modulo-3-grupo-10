 estructuras de control en programación y cuales se pueden usar en javascript
 Las estructuras de control se utilizan para controlar el flujo de ejecución del código, hoy vamos a explicarlas y entrar en profundidad al bucle `for` y al método `map()` haciendo una comparación entre ellos.

**Bucle `while`:** se ejecuta mientras una condición especificada sea verdadera. La sintaxis es la siguiente:

```javascript
while (condición) {
  // Código a ejecutar
}
El código dentro del bucle se repetirá mientras la condición se evalúe como verdadera.

Bucle do-while: es similar al bucle while, pero garantiza que el código se ejecute al menos una vez antes de verificar la condición. La sintaxis es la siguiente:

javascript
Copiar código
do {
  // Código a ejecutar
} while (condición);
El código dentro del bucle se ejecutará al menos una vez y luego se repetirá mientras la condición sea verdadera.

Estructura if-else: se utiliza para ejecutar diferentes bloques de código dependiendo de una condición. La sintaxis básica es la siguiente:

javascript
Copiar código
if (condición) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}
Si la condición se evalúa como verdadera, se ejecuta el primer bloque de código; de lo contrario, se ejecuta el segundo bloque de código.

Estructura switch: permite evaluar una expresión y ejecutar diferentes bloques de código según el valor de la expresión. La sintaxis es la siguiente:

javascript
Copiar código
switch (expresión) {
  case valor1:
    // Código a ejecutar si la expresión coincide con valor1
    break;
  case valor2:
    // Código a ejecutar si la expresión coincide con valor2
    break;
  // Más casos...
  default:
    // Código a ejecutar si no coincide con ningún caso anterior
}
La expresión se evalúa y se compara con cada caso. Si coincide con un caso, se ejecuta el código correspondiente. Si no coincide con ningún caso, se ejecuta el bloque default. Utilizamos break para salir del bucle.

Los bucles for son estructuras de control en JavaScript que nos permiten repetir un bloque de código varias veces. Son especialmente útiles cuando queremos ejecutar una tarea un número conocido de veces o cuando queremos iterar sobre una colección de elementos, como un array. La sintaxis básica de un bucle for en JavaScript es la siguiente:

javascript
Copiar código
for (inicialización; condición; expresión final) {
  // Código a ejecutar en cada iteración
}
Inicialización: Se ejecuta una sola vez al comienzo del bucle y se utiliza para inicializar el contador o cualquier otra variable necesaria. Por ejemplo, let i = 0; inicializa la variable i con el valor 0.
Condición: Es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la condición es verdadera, el código dentro del bucle se ejecutará; de lo contrario, el bucle se detendrá. Por ejemplo, i < 5 indica que el bucle se ejecutará mientras i sea menor que 5.
Expresión final: Se ejecuta después de cada iteración y generalmente se utiliza para actualizar el contador o realizar otras operaciones. Por ejemplo, i++ incrementa el valor de i en 1 en cada iteración.