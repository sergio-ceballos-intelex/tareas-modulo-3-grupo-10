
// Callback Asincrono: simulacion de vuelo

/*Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:*/

function vueloBogotaMadrid(callback) {
  console.log("Estoy en Bogota");
  setTimeout(() => {
    console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
    console.log("Llegué a Madrid");
    callback();
  }, 7000); 
}

function vueloMadridFrankfurt(callback) {
  setTimeout(() => {
    console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
    console.log("Llegué a Frankfurt");
    callback();
  }, 2000); 
}

function vueloFrankfurtSeul(callback) {
  setTimeout(() => {
    console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
    console.log("Llegué a Seul");
    callback();
  }, 10000); 
}

vueloBogotaMadrid(() => {
  vueloMadridFrankfurt(() => {
    vueloFrankfurtSeul(() => {
    });
  });
});
