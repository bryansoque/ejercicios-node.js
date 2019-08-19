

let array = [Math.round(Math.random()*100)];

for(i = 1; i < 10; i++){

    Numero = Math.round(Math.random()*100); 
    array[i] = Numero; 
}



let No_mayor = array[0];
let No_menor = array[0];
let No_par = new Array();
let No_impar = new Array();
 
for(i = 0; i < array.length; i++){
    

    if (array[i] > No_mayor){
        No_mayor = array[i];
    }
    

    if (array[i] < No_menor){
        No_menor = array[i];
    }
    

    if(array[i] % 2 == 0){
        

        No_par.push(array[i]);
       
    }else{
        

        No_impar.push(array[i]);
    }
}

console.log('Array generado aleatoriamente',array);
console.log('El No. mayor es', No_mayor);
console.log('El No. menor es', No_menor);
console.log('Los numeros pares del array son',No_par);
console.log('Los numeros impares del array son',No_impar);


