//Modificar el ejercicio anterior para que en caso de que dentro de la función parsearUrl(url)
// se produzca una excepción (por ejemplo un nombre de URL invalida), muestre la excepción en la consola
// y retorna un objeto con sus propiedades nulas o un objeto vacío (según corresponda)
//Nota: Se acuerdan del try/catch?
import { URL } from 'url';

function parsearUrl(laURL){
    try{
    const url = new URL(laURL);
        return {
            host: url.protocol + '//' + url.host,
            pathname: url.pathname,
            parametros: url.searchParams
        }
    }
    catch (error) {
    console.log(`Error: ${error.message}`)
        return {
            host: null,
            pathname: null,
            parametros: {}
        }
    }
}

let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

miUrl = 'url invalida';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
