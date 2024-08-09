function calcular(){

    var numb1 = document.getElementById('number1').valueAsNumber;
    var numb2 = document.getElementById('number2').valueAsNumber;
    
    const operSelected = document.querySelector('input[name="oper"]:checked');
            
    if (operSelected) {
        var result = 0;
        if(operSelected.value=="suma"){
            result = numb1 + numb2;
        }else
        if(operSelected.value=="resta"){
            result = numb1 - numb2;
        }else
        if(operSelected.value=="multi"){
            result = numb1 * numb2;
        }else
        if(operSelected.value=="divi"){
            result = numb1 / numb2;
        }
        document.getElementById('result').innerHTML = `El resultado es: ${result}`;
    } else {
        alert('Seleccione una operación');
    }

    

}

function validateStudent(){

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const average = parseFloat(document.getElementById('average').value);
    const isRegular = document.getElementById('isRegular').checked;
    const approvedSubjects = parseInt(document.getElementById('approvedSubjects').value, 10);
    const isScholarship = document.getElementById('isScholarship').checked;

    let statusMessage = '';

    if (age < 18) {
        statusMessage = `El estudiante ${name} es menor de edad y no puede registrarse.`;
    } else if (average < 6) {
        statusMessage = `El estudiante ${name} no cumple con el promedio mínimo requerido.`;
    } else if (!isRegular) {
        statusMessage = `El estudiante ${name} debe registrarse como regular.`;
    } else if (isRegular && !isScholarship) {
        statusMessage = `El estudiante ${name} puede solicitar una beca.`;
    } else if (isRegular && isScholarship) {
        statusMessage = `El estudiante ${name} cumple con todos los requisitos.`;
    }

    document.getElementById('resultStudent').innerHTML = statusMessage;

}

function solve1(){
    const label = document.getElementById('solv1');
    label.style.display='block';
}

function solve2(){
    const label = document.getElementById('solv2');
    label.style.display='block';
}

function solve3(){
    const label = document.getElementById('solv3');
    label.style.display='block';
}