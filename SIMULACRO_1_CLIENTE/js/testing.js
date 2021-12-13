
var dia = prompt("Ingrese su dia de nacimiento");
var mes = prompt("Ingrese su mes de nacimiento"); 
var anyo = prompt("Ingrese su anyo de nacimiento");

var x = new Date(anyo, mes, dia);
var semana = ['domingo', 'lunes', 'miercoles', 'jueves', 'viernes', 'sabado'];

console.log("Dia de nacimiento: "+semana[x.getDay()]);

console.log("Edad: "+calcularEdad(x.getFullYear()));


function calcularEdad(anyo) {
    var fecha_actual = new Date();
    var anyo_actual = fecha_actual.getFullYear();

    return anyo_actual - anyo;
}
