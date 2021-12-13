// Generaremos un array denominado alumnos. 
var alumnos = new Array();

// Solicitamos el nombre de un alumno.


do {
    var alumno = prompt("Introduzca el nombre de un Alumno");
    var salir = false;

    if(alumno != "CLOSE") {
        alumnos.push(alumno);
    }else{
        salir = true;
    }

    
} while (salir != true);

alumnos.forEach(item => console.log(item));
console.log(alumnos.length);

