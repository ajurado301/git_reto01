// Importamos todo el fichero de libreria (index.js)
let myLib = require("./index");

// RETO 2 ******************************************************
console.log("Reto2");

let operador1 = 21;
let operador2 = 3;
// Probar todas las funciones de la libreria
console.log("Probar todas las funciones de la libreria");
// sumar
let resultado = myLib.suma(operador1, operador2);
console.log(`Suma de ${operador1}+${operador2} = ${resultado}`);
// restar
resultado = myLib.resta(operador1, operador2);
console.log(`Resta de ${operador1}-${operador2} = ${resultado}`);
// multiplicar
resultado = myLib.multiplicacion(operador1, operador2);
console.log(`Multiplicación de ${operador1}*${operador2} = ${resultado}`);
// dividir
resultado =myLib.division(operador1, operador2);
console.log(`División de ${operador1}/${operador2} = ${resultado}`);
console.log("______________________________________________\n");