//Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
let TotalFrutas = []

for (num= 0; num < frutas1.length ; num ++){
    TotalFrutas.push(frutas1[num])
}
for (num= 0; num < frutas2.length ; num ++){
    TotalFrutas.push(frutas2[num])
}
console.log(TotalFrutas)