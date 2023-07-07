class Estudiante{
    nombre;
    asignaturas = ["Javascript", "HTML", "CSS"];

    constructor(nombre, asignaturas){
        this.nombre = nombre; //estas variables son atributos
        this.asignaturas = asignaturas;
    }

    obtenDatos(){
        return(`${this.nombre}${this.asignaturas}`)
    }
}

const alumno = new Estudiante ("Santi");
console.log(alumno.obtenDatos());