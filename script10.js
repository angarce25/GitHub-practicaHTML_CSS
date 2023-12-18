'use strict'
//Función, es una agrupación reutilizable de un conjunto de instrucciones

// //DEfino función, podemos añadir parámetros numero1 y numero2

// function calculadora(numero1,numero2,mostrar = false){
//     //conjunto de instrucciones a ejecutar
//     if(mostrar == false){
//     console.log('Suma= ' + (numero1+numero2))
//     console.log('Resta= ' + (numero1-numero2))
//     console.log('Multiplicación' + (numero1*numero2))
//     console.log('División' + (numero1/numero2))
//     console.log('****************')
    
// //return 'hola soy la calculadora' tambien se puede poner el return
// }else{
//     document.write('Suma= ' + (numero1+numero2)+'<br/>')
//     document.write('Resta= ' + (numero1-numero2)+'<br/>')
//     document.write('Multiplicación' + (numero1*numero2)+'<br/>')
//     document.write('División' + (numero1/numero2)+'<br/>')
//     document.write('****************')
// }
// }
// //invocar o llamar a la función
// calculadora(2,3,true)


//también puede recibir parámetros, defiendo parámetros numero 1 y numero2
//podemos usar bucles, le pasamos el parametro i y 8, operaciones del 1-10 y 8
// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     calculadora(i,8);
// }

//parámetros opcionales, se lo pasamos y ya vienen iniciliazmos como el true/false

//función dentro de otra función

function porConsola(numero1,numero2){
    console.log('Suma= ' + (numero1+numero2))
    console.log('Resta= ' + (numero1-numero2))
    console.log('Multiplicación' + (numero1*numero2))
    console.log('División' + (numero1/numero2))
    console.log('****************')
}

function porPantalla(numero1,numero2){
    document.write('Suma= ' + (numero1+numero2)+'<br/>')
    document.write('Resta= ' + (numero1-numero2)+'<br/>')
    document.write('Multiplicación' + (numero1*numero2)+'<br/>')
    document.write('División' + (numero1/numero2)+'<br/>')
    document.write('****************')
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2)
    }else{
        porPantalla(numero1,numero2)
    }
    return true;
}

calculadora(4,3)