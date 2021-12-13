var dado = {
    secuencia : []
};

function tirarDado() {
    var num = Math.floor(Math.random() * (6 - 1) + 1);
    dado.secuencia.push(num);
    alert("Numero random generado: " + num);
}

function mostrarSecuencia() {

    var array = "Array => ";

    for(var i = 0; i < dado.secuencia.length; i++) {
        array = array+ dado.secuencia[i] + " ";
    }

    console.log(array);
}