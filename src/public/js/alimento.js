


function cambiarInformacionProducto(nombre, precio, imagenGrande) {
    var imagenGrandeElement = document.getElementById('imagenGrande');
    var nombreProductoElement = document.getElementById('nombreProducto1');
    var precioProductoElement = document.getElementById('precioProducto1');

    imagenGrandeElement.src = imagenGrande;
    nombreProductoElement.textContent = nombre;
    precioProductoElement.textContent = '₡' + precio;
}

function cambiarSeleccion(imagenSeleccionada) {
    var opcionesPequenas = document.querySelectorAll('.opcion-pequena');
    opcionesPequenas.forEach(function(opcion) {
        opcion.classList.remove('seleccionada');
    });

    imagenSeleccionada.classList.add('seleccionada');
}
