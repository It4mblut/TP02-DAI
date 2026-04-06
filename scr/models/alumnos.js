//Crear la clase Alumno en /src/models/alumno.js que tenga tres propiedades (username, DNI y edad) 
//y también un método toString() que retorne la información del alumno (string).
//Instanciar en un programa principal tres objetos y mostrarlos en la consola.

class Alumno{
    constructor (username = "", DNI = "", Edad = "") {
        this.username = username
        this.DNI = DNI

        this.Edad = Edad
    }
    toString() {return `Hola, mi apellido es ${this.username}, mi DNI es: ${this.DNI}, tengo ${this.Edad} años`}
}
export {Alumno}
