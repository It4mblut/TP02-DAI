//Realizar un programa que utilizando una biblioteca existente (buscarla en https://www.npmjs.com/) podamos hacer una función en la que le enviamos un nombre de un país (abreviado) y nos retorne el nombre de la moneda que utiliza el mismo.
//En el caso de que el nombre del país no exista, debe retornar null.


let monedaDelPais, codigoPais;

codigoPais = 'AR';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


codigoPais = 'UZA';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);