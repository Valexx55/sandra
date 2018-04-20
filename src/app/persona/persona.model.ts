export class Persona {
    nombre : string;
    altura: number;
    peso: number;

    constructor (nombre: string, altura: number, peso: number) {
        this.nombre = nombre; // .nombre es la propiedad de la clase persona | = nombre es el valor que recibe el constructor
        this.altura = altura;
        this.peso = peso;
    }
}

