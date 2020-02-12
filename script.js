//hacer un boton
var buttonYellow = document.getElementById('button-yellow');

buttonYellow.onclick = function() {
    var email = window.prompt('Registrate')
    alert('Gracias por registrarte ' + email)
}