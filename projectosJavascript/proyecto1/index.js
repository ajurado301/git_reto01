// Librería

// Función suma
function suma(op1, op2) {    
    let result = op1 + op2;
    return result;
}

// Función resta
function resta(op1, op2) {
    let result = op1 - op2;
    return result;
}

// Función suma
function multiplicacion(op1, op2) {
    let result = op1 * op2;
    return result;
}

// // Función suma
// function division(op1, op2) {
//     let result = op1 / op2;
//     return result;
// };

// Función cuadrado
function cuadrado(op1) {
    let result = op1 ** 2;
    return result;
};

// exportamos las funciones
module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    cuadrado
}