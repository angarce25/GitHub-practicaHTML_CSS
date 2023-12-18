//Función anónima
//no tiene nombre, se utiliza para callback (función que se ejecuta dentro de otra)

// let pelicula = function(nombre){
//     return 'la pelicula es:'+nombre;
// }
// para llamar a la función en consola invocamos pelicula('nombre') y nos devuelve el console.log
//callback
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    let sumar = numero1 + numero2
    sumaYmuestra(sumar)
    sumaPorDos(sumar)

    return sumar
}
//lo siguiente es un poco abstracto y alejada a lo que hemos dicho
sumame(4, 5, dato => {
    console.log('la suma es: ', dato)
},
    dato =>{
        console.log('la suma por dos es: ', (dato*2))
    })
//se sustituye function por la flecha => y se quitan parentesis