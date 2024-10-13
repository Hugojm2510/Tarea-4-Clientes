class Alumno {
    constructor(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
}

const alumnos = [
    new Alumno("Pepe"),
    new Alumno("David"),
    new Alumno("Luna"),
    new Alumno("Kike"),
    new Alumno("Jose Antonio"),
    new Alumno("Hugo"),
    new Alumno("Fernando"),
    new Alumno("Jose antonio"),
    new Alumno("Ale"),
    new Alumno("Ortega"),
    new Alumno("Polo"),
    new Alumno("Santi"),
    new Alumno("Diana"),
    new Alumno("Fernando"),
    new Alumno("Ivan"),
    new Alumno("Miguel Angel"),
    new Alumno("Jose"),
    new Alumno("Velasco")
]

const alumnosGenerados = new Set();


function generarAlumno(){

    // comprobamos si los alumnos han sido generados
    if(alumnosGenerados.size >= alumnos.length){
        alert("todos los alumnos han sido generados");
        return;
    }

    let indiceAleatorio;
    let alumnoAleatorio;

    /*
    este bucle funciona tal que cuando generas un alumno "david" y lo añade al Set, de nuevo el bucle vuelve a generar otro alumno
    y si vuelve a ser "David", devuelve un true y el bucle vuelve a generar otro alumno aleatorio.
    */
    do {
        indiceAleatorio = Math.floor(Math.random() * alumnos.length);
        alumnoAleatorio = alumnos[indiceAleatorio];

    } while(alumnosGenerados.has(alumnoAleatorio));

    // ahora a la constante alumnosGenerados le metemos el alumnoAleatorio
    alumnosGenerados.add(alumnoAleatorio);

    // creamos un div, le añadimos la clase carta y le añadimos el valor, de un alumno aleatorio coger el nombre
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.innerHTML = `
    <h2>${alumnoAleatorio.nombre}</h2>
    <button>borrar</button>
    `;

    carta.querySelector('button').addEventListener('click', () => {
        carta.remove();
        alumnosGenerados.delete(alumnoAleatorio);
    })

    // seleccionamos el div con la clase "cartas" y le añadimos el div "carta".
    document.querySelector(".cartas").appendChild(carta);


}

// esto hace que genere un evento que cada vez que le des clic, va a utilizar la funcion generarAlumno

document.querySelector(".generar").addEventListener("click",generarAlumno);
