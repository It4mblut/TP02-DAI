//Desarrollar una aplicación que podamos utilizar es el console.log() haciendo pruebas con dos strings, concatenarlos e interpolados.
function stringsInterpolados(nombre ="Flor", edad ="16"){
    console.log(`Hola soy ${nombre} y tengo ${edad} años`)
}

stringsInterpolados("Eitan", "17");
//----------------
let txtEntrada01 = "Eitan"
let txtEntrada02 = "Koze"
let textoSalida          = "";


textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear();        // Borra la pantalla en la consola.

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);


function concatInvert (texto1, texto2){

    let returnValue = '';

    [txtEntrada01, txtEntrada02] = [txtEntrada02, txtEntrada01]
    for (i = txt.length; i <= txt.length; i--){

    }
    console.log(txtEntrada01+txtEntrada02)

    return returnValue;
}



