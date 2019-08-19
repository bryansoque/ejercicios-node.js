

let Longitud_vector = Math.round(Math.random()*20);
let array = [Math.round(Math.random()*20)];
let No_par = new Array();
let No_impar = new Array();
let Suma_pares = 0;
let Suma_impares = 0;

for(i = 1; i <= Longitud_vector; i++){

    Numero = Math.round(Math.random()*20); 
    array[i] = Numero; 

    
    if(array[i] % 2 == 0){
        
        No_par.push(array[i]);
         
    }else{
        
        
        No_impar.push(array[i]);
    }
}

Suma_pares = No_par.reduce(function(a, b){return a + b})
Suma_impares = No_impar.reduce(function(a, b){return a + b})

console.log('La longitud del vector es',Longitud_vector);
console.log('Los datos generados aleatoriamente para el vector son',array);
console.log('Los numeros pares son',No_par, 'longitud del vector',No_par.length);
console.log('Los suma de los numeros pares es',Suma_pares);
console.log('Los numeros impares son',No_impar, 'longitud del vector',No_impar.length);
console.log('Los suma de los numeros pares es',Suma_impares);