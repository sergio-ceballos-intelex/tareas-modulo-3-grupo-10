for (let i = 1; i <= 2000; i++) {
    if (i.toString().startsWith("2")) {
        console.log(i);
    }
}

// Explicación:
// Bucle for: Recorre los números del 1 al 2000.
// i.toString(): Convierte el número actual a una cadena para poder usar startsWith().
// startsWith("2"): Verifica si la cadena comienza con "2".
// console.log(i): Imprime el número si cumple con la condición.

