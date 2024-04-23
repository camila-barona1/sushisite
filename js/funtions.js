const audioButton = document.getElementById('audio-button');
const audio = document.getElementById('audio');

audioButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
function validateForm() {
    var username = document.forms["registrationForm"]["username"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;

    if (username == "") {
        alert("Por favor, ingresa un nombre de usuario.");
        return false;
    }

    if (email == "") {
        alert("Por favor, ingresa un correo electrónico.");
        return false;
    }

    if (password == "") {
        alert("Por favor, ingresa una contraseña.");
        return false;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
}