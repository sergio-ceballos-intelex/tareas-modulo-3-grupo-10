let numbers1 = [21 , 33, 40, 50, 71, 70, 742, 20, 90, 100]

let numbersCuadrados = numbers1.map((number)=> number*number)
console.log(numbersCuadrados)

     function every(){
      for(let num = 0; num < numbers1.length ; num++){
          if(numbers1[num]<18){
              return false
          }   
      }
      return true
  }
 console.log(every())


const numerosSieteyPar = numbers1.filter((number)=> String(number).startsWith('7') && number % 2 == 0)
console.log(numerosSieteyPar)
