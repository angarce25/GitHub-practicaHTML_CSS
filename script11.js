'use strict'
//REST Y SPREAD
//a continuación función REST con los ...resto me crea un array
function listadoFrutas(fruta1, fruta2, ...resto){
    console.log('Fruta 1:', fruta1)
    console.log('Fruta 2:', fruta2)
    console.log(resto)

}
listadoFrutas ('naranja', 'manzana','sandía', 'pera','platano')

let frutas = ['naranja', 'manzana']
listadoFrutas (...frutas,'sandía','pera','coco')