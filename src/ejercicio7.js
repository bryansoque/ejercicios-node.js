

let array = [Math.round(Math.random()*5)];
let Suma_total = 0;

for(i = 1; i <= 8; i++){

    Numero = Math.round(Math.random()*5); 
    array[i] = Numero; 
}

Suma_total = array.reduce(function(a, b){return a + b})

console.log('Array generado aleatoriamente', array);
console.log('La suma total del array es:',Suma_total);