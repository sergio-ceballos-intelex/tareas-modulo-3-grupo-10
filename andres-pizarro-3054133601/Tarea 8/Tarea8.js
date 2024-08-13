///PUNTO 1///
function sumarArreglo(numeros, callback) {

    let resultado = 0;

    numeros.forEach(n => {
        resultado += n;
    });

    callback(resultado);

}

let numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
    console.log(resultado);
});

///PUNTO 2///
function filtrarArreglo(arreglo, callbackFiltro) {
    return arreglo.filter(n=>callbackFiltro(n));
}
  
numeros = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
});

console.log(numerosPares);

//PUNTO 3///
function filtrarPares(numsArray,callback){
    const evenNums = numsArray.filter(n=>n%2===0);
    callback(evenNums);
}

function mostrarPares(numerosPares) {
    console.log(numerosPares);
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filtrarPares(numeros, mostrarPares);

///PUNTO 4///

console.log("Estoy en Bogota");

const flightBOG_MAD = (callback,callback2,callback3) => {
    callback2("Volando Bogota-Madrid");
    callback3(7000);
    setTimeout(() => {
        callback2("Vuelo Bogota - Madrid, me demoré 7 horas")
        callback2("Llegué a Madrid");
        callback2("///////////////");
        callback();
    }, 7000);
};

const flightMAD_FRA = (callback,callback2,callback3) => {
    callback2('Volando Madrid-Frankfurt');
    callback3(2000);
    setTimeout(() => {
        callback2("Vuelo Madrid - Frankfurt, me demoré 2 horas")
        callback2("Llegué a Frankfurt");
        callback2("///////////////");
        callback();
    }, 2000);
};

const flightFRA_ICN = (callback2,callback3) => {
    callback2('Volando Frankfurt-Seul');
    callback3(10000);
    setTimeout(() => {
        callback2("Vuelo Frankfurt - Seul, me demoré 10 horas")
        callback2("Llegué a Seul");
        callback2("///////////////");
    }, 10000);
};

function travelBogSeul(){
    flightBOG_MAD(()=>flightMAD_FRA(()=>flightFRA_ICN(printMessage,suspenseDots),printMessage,suspenseDots),printMessage,suspenseDots);
}

function printMessage(message){
    console.log(message);
}

function suspenseDots(duration){
    let interval = 300;
    let dots = '';
    let perc = 0;
    const maxDots = 3;

    const intervalId = setInterval(() => {
        dots = dots + '.';
        perc += interval; 
        process.stdout.write('\r' + `${((perc/duration)*100).toFixed()}%` + dots);        
    }, interval);

    setTimeout(() => {
        clearInterval(intervalId);
        process.stdout.write('\r');
    }, duration);
};

travelBogSeul();

