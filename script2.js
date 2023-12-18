'use strict'
/*switch otra estructura de control
*/
let edad = 70;
let imprime = ""
switch(edad){

    case 18:
        imprime = "Acabas de cumplir mayoría de edad";
    break;
    case 40:
        imprime = "crisis de los cuarenta";
    break;
    case 70:
        imprime = "eres anciano";
    break;
    default:
        imprime = "eres normal";
    break;
}
console.log(imprime);