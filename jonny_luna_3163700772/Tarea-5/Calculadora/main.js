
const pantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll("input");

botones.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        if(boton.id === "="){
            pantalla.value = eval(pantalla.value);
        }else if(boton.id ==="clear"){
            pantalla.value ="";
        }else if(boton.id === "borrar"){
            pantalla.value=pantalla.value.slice(0,-1);
        }else if(boton.id === "porcentaje"){
            calcularPorcentaje();
        }else{
            pantalla.value += boton.value;
        }
    })
});

function calcularPorcentaje(){
    const operadorExpReg = /[\+\-\*\/]/;
    const numeros = pantalla.value.split(operadorExpReg);

    if(numeros.length === 2){
        const num1 = parseFloat(numeros[0]);
        const num2 = parseFloat(numeros[1]);
        const operador = pantalla.value.match(operadorExpReg)[0];

        let resultado;
        if(operador === "*"|| operador === "/"){
            resultado=eval(`${num1} ${operador} ${(num2)/100}`)
        }else if(operador === "+"|| operador === "-"){
            resultado=eval(`${num1} ${operador} ${(num1*(num2/100))}`)
        }

        pantalla.value = resultado;
    }else{
        alert("Verifique la operación por ejemplo 50+15%")
    }
}

