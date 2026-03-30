//que tenga 4 funciones sumar, restar, multiplicar y dividir (dos de ellas arrow functions), 
// una constante (PI) y un Array con 4 string que tengan este contenido ["dos", "cuatro", "ocho", "diez"].
// Exportarlas y utilizarlas en el programa principal. en el caso del array, mostrar todos sus elementos.

const pi = 3.14

let arrayNumeros = ["dos", "cuatro", "ocho", "diez"];

const sumar = (a,b) => a + b;

const restar = (a,b) => a - b;

const multiplicar = (a,b) => a * b;

const dividir = (a,b) => a / b;



export {pi, arrayNumeros, sumar, restar, multiplicar, dividir}