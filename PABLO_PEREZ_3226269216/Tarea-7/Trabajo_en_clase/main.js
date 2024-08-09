//Modificar un array MAP puede retornar cualquier cosa 
const numbers = [1,2,3,4,5,6,7,8]
const numbers2 = [18,20,21,22,23,26,27,15]
const doubled = numbers.map((element) =>{
    return element*2
})
const doubled2 = numbers.map((element) => element*2)

console.log(doubled)

//Filtrar elemtos en un Array FILTER debes crear una funcion que retorne un tru 

const evenNumbers = numbers.filter((number)=> number % 2 == 0)
console.log(evenNumbers)

//Encontrar elemento que se encuentra un array FIND

const frutas =['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango']

const frutasEncontrada = frutas.find((fruta)=>fruta.length < 6)
console.log(frutasEncontrada)

//Ejecuta el codigo del array forEach

numbers.forEach(number => console.log(number))

// entrega un dato true o false, busca un solo elemento true SOME

numeroMayor5 = numbers.some(number => number>5)
console.log(numeroMayor5)

// entrega un dato true o false, busca TODOS LOS elementoS true    EVERY
const mayorDeEdad = numbers2.every(number => number >= 18)
console.log(mayorDeEdad)

function envery(){
    for(let num = 0; num < numbers2.length ; num++){
        let result = ""
        if(numbers2[num]>=18){
            result = true
        }else
            return result = false
            
    }
}
console.log(every())