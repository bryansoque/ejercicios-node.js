

let array = [Math.round(Math.random()*100)];

for(i = 1; i < 10; i++){

    Numero = Math.round(Math.random()*100); 
    array[i] = Numero; 
}

let No_mayor = array[0];
let No_menor = array[0];
 
for(i = 0; i < array.length; i++){

    if (array[i] > No_mayor){
        No_mayor = array[i];
    }

    if (array[i] < No_menor){
        No_menor = array[i];
    }
}

console.log('Array generado aleatoriamente', array);
console.log('El No. mayor es', No_mayor);
console.log('El No. menor es', No_menor);