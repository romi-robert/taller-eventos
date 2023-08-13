document.addEventListener('DOMContentLoaded', function(){

    const div = document.getElementById("div"); // Selecciona el elemento por su ID

    div.addEventListener("click", function () { // Agrega un manejador de eventos para el clic en el botón
        alert("Hola! Soy el div")
    });
});
