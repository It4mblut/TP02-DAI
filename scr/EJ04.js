import fs from 'fs';

const ARCHIVO_ENTRADA           = "./archivo-entrada.txt"; //Me refiero a cada archivo mediante variables diferentes
const ARCHIVO_SALIDA            = "./archivo-salida.txt";


console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA); //Defino cual archivo es origen y cual destino

function copiar(origen, destino){
const contenidoArchivo = fs.readFileSync(origen, 'utf-8') //Leo el archivo de origen y guardo el contenido en "contenidoArchivo"
fs.writeFileSync(destino, contenidoArchivo)                 //Escribo en el archivo destino 

}