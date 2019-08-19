
let No_estudiantes = 25;
let array = [Math.round(Math.random()*5)];
let Suma_notas = 0;

for(i = 1; i <= No_estudiantes; i++){

    Notas = Math.round(Math.random()*5); 
    array[i] = Notas; 
}

Suma_notas = array.reduce(function(a, b){return a + b})

console.log('Array generado aleatoriamente', array);
console.log('La suma de todas las notas son:',Suma_notas);
console.log('El promedio total del salón es:',Suma_notas/No_estudiantes);