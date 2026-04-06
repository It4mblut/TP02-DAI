import { URL } from 'url';

let miUrl    = null;
let miObjeto = null;

function parsearUrl(laURL){ //Ojo, para tener en cuenta a futuro, tuve que mover la funcion acá arriba (antes de miUrl y etc) para que me tome los valores (particularmente el de miObjeto)
    const url = new URL(laURL);
    return {
        host: url.protocol + '//' + url.host,
        pathname: url.pathname,
        parametros: url.searchParams
    }
}

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);


