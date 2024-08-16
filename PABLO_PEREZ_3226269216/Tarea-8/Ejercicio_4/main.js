//Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur
//Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:
//Vuelo Bogota - Madrid: 7000ms (7 horas)
//Vuelo Madrid - Frankfurt: 2000ms (2 horas)
//Vuelo Frankfurt - Seul: 10000ms (10 horas)
//Llegada a Seul
//El programa debe imprimir lo siguiente:

  // Estoy en Bogota
  // Vuelo Bogota - Madrid, me demoré 7 horas
  // Llegué a Madrid
  // Vuelo Madrid - Frankfurt, me demoré 2 horas
  // Llegué a Frankfurt
  // Vuelo Frankfurt - Seul, me demoré 10 horas
  // Llegué a Seul
//Se puede usar setTimeout para simular el tiempo de los vuelos.

function vueloBogota(llegadaMadrid){
    setTimeout(function(){
        console.log("Vuelo Bogota - Madrid, me demoré 7 horas")
        llegadaMadrid();
    },7000);
    
}
function llegadaMadrid (vueloFrankfurt){
        console.log("Llegué a Madrid")
        vueloFrankfurt()
}
function vueloFrankfurt(llegadaFrankfurt){
    setTimeout(function(){
        console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas")
        llegadaFrankfurt()
    },2000)
    
}
function llegadaFrankfurt (vueloSeul){
    console.log("Llegué a Frankfurt")
    vueloSeul()
}
function vueloSeul(llegadaSeul){
    setTimeout(function(){
        console.log("Vuelo Frankfurt - Seul, me demoré 10 horas")
        llegadaSeul()
    },10000)
    
}
function llegadaSeul (){
    console.log("Llegué a Seul")
}
vueloBogota(function(){
    llegadaMadrid(function(){
        vueloFrankfurt(function(){
            llegadaFrankfurt(function(){
                vueloSeul(llegadaSeul)
            })
        })
    })
})