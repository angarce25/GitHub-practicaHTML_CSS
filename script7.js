//Ejercicio 1
//programa que pida 2 números y que nos diga cual es menor y si son igual

let numero1 = parseInt (prompt ('Introduce el primer numero',0))
let numero2 = parseInt (prompt ('introduce el segundo numero', 0))
//ponermos paseInt para transformarlo en numero
while( numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt (prompt ('Introduce el primer numero',0))
    numero2 = parseInt (prompt ('introduce el segundo numero', 0))
}

if(numero1 == numero2){
    alert ('los numeros son iguales')

}else if(numero1 > numero2) {
    alert('el numero mayor es: ' + numero1)
    alert('el numero menor es: '+ numero2)
}
else if(numero2 > numero1){
    alert('el numero mayor es: ' + numero2)
    alert('el numero menor es: '+ numero1)

}
else{
    alert('introduce numeros correctos')
}

//si los números no son numeros, o son menores que cero, nos lo vuelva a pedir
//para el plus del ejercicio añadimos el while con las condiciones, así garantizamos que se cumpla las condiciones y hasta que no se den los valores adecuados nos seguirá pidiendo el numero