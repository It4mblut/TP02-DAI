//Desarrollar una aplicación que podamos utilizar es el console.log() haciendo pruebas con dos strings, concatenarlos e interpolados.
let txtEntrada01 = "Eitan"
let txtEntrada02 = "Koze"
let textoSalida          = "";


textoSalida = concatInvert(txtEntrada01, txtEntrada02);

console.clear();        // Borra la pantalla en la consola.

console.log(`Textos de Entrada: "${txtEntrada01}" y "${txtEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);


function concatInvert (texto1, texto2){


    let returnValue = '';
    let txtConcatenados = texto1 + texto2
    for (i = txtConcatenados.length - 1; i>=0; i--){

    returnValue += txtConcatenados[i];

    }

    return returnValue;
}



