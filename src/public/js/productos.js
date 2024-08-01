function ordenarProductos() {
    var seleccion = document.getElementById('ordenar').value;
    var filaProductos = document.querySelector('.productos-fila');
    var productos = Array.from(document.querySelectorAll('.producto-container'));

    switch (seleccion) {
        case 'popularidad':
            productos.sort(function (a, b) {
                var productoA = parseInt(a.getAttribute('data-producto'));
                var productoB = parseInt(b.getAttribute('data-producto'));
                return productoA - productoB;
            });
            break;
        case 'menor-precio':
            productos.sort(function (a, b) {
                var precioA = parseInt(a.getAttribute('data-precio'));
                var precioB = parseInt(b.getAttribute('data-precio'));
                return precioA - precioB;
            });
            break;
        case 'mayor-precio':
            productos.sort(function (a, b) {
                var precioA = parseInt(a.getAttribute('data-precio'));
                var precioB = parseInt(b.getAttribute('data-precio'));
                return precioB - precioA;
            });
            break;
    }

    filaProductos.innerHTML = '';

    var filaActual = document.createElement('div');
    filaActual.classList.add('productos-fila');
    
    productos.forEach(function (producto, index) {
        filaActual.appendChild(producto);

        if ((index + 1) % 4 === 0) {
            filaProductos.appendChild(filaActual);
            filaActual = document.createElement('div');
            filaActual.classList.add('productos-fila');
        }
    });

    if (filaActual.children.length > 0) {
        filaProductos.appendChild(filaActual);
    }
}

