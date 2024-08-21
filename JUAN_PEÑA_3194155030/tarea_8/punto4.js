function vueloBogotaMadrid(callback) {
    console.log("Estoy en Bogota");
    setTimeout(() => {
      console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
      console.log("Llegué a Madrid");
      callback();
    }, 7000); // 7 horas en milisegundos
  }
  
  function vueloMadridFrankfurt(callback) {
    setTimeout(() => {
      console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
      console.log("Llegué a Frankfurt");
      callback();
    }, 2000); // 2 horas en milisegundos
  }
  
  function vueloFrankfurtSeul(callback) {
    setTimeout(() => {
      console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
      callback();
    }, 10000); // 10 horas en milisegundos
  }
  
  function simularViaje() {
    vueloBogotaMadrid(() => {
      vueloMadridFrankfurt(() => {
        vueloFrankfurtSeul(() => {
          console.log("Llegué a Seul");
        });
      });
    });
  }
  
  simularViaje();
  
  