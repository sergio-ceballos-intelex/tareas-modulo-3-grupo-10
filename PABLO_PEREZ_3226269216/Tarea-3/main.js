function incioNumero(number) {
    return number.toString().startsWith('2');
}

for (i=1 ;  i <= 2000;  i++){
    if (incioNumero(i)){
        console.log(i)
    }
    
}

