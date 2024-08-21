console.log("Estoy en Bogota");

setTimeout(() => {
    console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
    console.log("Llegué a Madrid");

    setTimeout(() => {
        console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
        console.log("Llegué a Frankfurt");

        setTimeout(() => {
            console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
            console.log("Llegué a Seul");
        }, 10000);  // 10,000ms = 10 horas

    }, 2000);  // 2,000ms = 2 horas

}, 7000);  // 7,000ms = 7 horas
