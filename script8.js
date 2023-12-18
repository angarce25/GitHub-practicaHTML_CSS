'use strict'
//mostrar media y suma de resultados, hasta que se meta un número negativo
let suma = 0;
let contador = 0;
let numero;
//he añadido la variable numero fuera porque me daba problemas y solo he añadido su valor dentro del while
do{
    numero = parseInt(prompt ('introduce numero hasta que sea negativo', 0));
    if (isNaN(numero)){
        numero = 0;

    }else if(numero >=0){
        suma = suma + numero;

        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0)

alert('la suma de todos los números es: '+ suma);
alert('la media de todos los numeros es: '+ (suma/contador))