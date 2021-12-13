// Creamos un array en el que almacenaremos las 3 opciones con la que jugara el ordenador.
var IA = ["piedra", "papel", "tijera"];

do {
  // creamos una variable 'boolean' para definir cuando saldremos del bucle
  var x = false;

  // Pedimos al usuario que escriba una de las 3 opciones y la almacenamos en una variable.
  var user = prompt("Escriba piedra, papel o tijera");

  if (user == "piedra" || user == "papel" || user == "tijera") {
    x = true;

    // Creamos una variable en el que almacenaremos el valor tras haber recorrido el array.
    var IA_juega = IA[obtenerOpcionAleatoria(3)];

    // Podemos comprobar por consola si los condicionales funcionan correctamente.
    console.log("La computadora ha elegido: " + IA_juega);
    console.log("El usuario ha elegido: " + user);

    // Dependiendo de la opcion que eligar el usuario se mostrara un mensaje u otro.
    if (IA_juega == "piedra" && user == "papel") {

      document.getElementById("result").innerHTML = "Ha ganado el usuario";

    } else if (IA_juega == "papel" && user == "tijera") {

      document.getElementById("result").innerHTML = "Ha ganado el usuario";

    } else if (IA_juega == "tijera" && user == "piedra") {

      document.getElementById("result").innerHTML = "Ha ganado el usuario";

    } else if (IA_juega == user) {

      document.getElementById("result").innerHTML = "Hubo un empate";

    } else {

      document.getElementById("result").innerHTML = "Ha ganado la computadora";

    }

    document.getElementById("user").innerHTML = "El usuario ha elegido: " + user;

    document.getElementById("computadora").innerHTML = "La computadora ha elegido: " + IA_juega;

  } else {
    // Si el String que recoge la variable 'user'no es igual a las opciones mostradas, saltara un alert.
    alert("Solo puede escribir piedra, papel o tijera");
  }
} while (x != true);

// Método que devuelve una posicion aleatoria, como parametro tenemos el máximo número a generar
function obtenerOpcionAleatoria(numMax) {
  return Math.floor(Math.random() * numMax);
}

function volverAJugar(){
    location.reload();
}
