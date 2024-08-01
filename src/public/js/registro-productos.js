document.getElementById("transferirContenido").addEventListener("click", function() {
    // Obtener el contenido que deseas transferir
    var contenido = document.getElementById("contenido").innerHTML;

    // Guardar el contenido en el localStorage para que esté disponible en la otra página
    localStorage.setItem("contenidoTransferido", contenido);

    // Redireccionar a la otra página
    window.location.href = "pagina2.html";