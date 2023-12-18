'use strict'
// hacer programa que muestre todos los numeros introducidos por el usuario entre 2 numeros
let numero1 = parseInt (prompt ('introduce numero1'))
let numero2 = parseInt (prompt ('introduce numero1'))

document.write ('<h1> De'+numero1+' a '+numero2+' están los numeros:</h1>')
for(let i = numero1; i<= numero2; i++){
    document.write(i+'<br/>')
}