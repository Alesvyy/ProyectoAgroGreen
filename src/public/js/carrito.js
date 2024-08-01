function calcularSubtotal(input) {
    var cantidad = parseInt(input.value);

    if (cantidad > 0) {
        var precioUnitario = parseInt(input.parentNode.previousElementSibling.textContent.replace('₡', ''));
        var subtotal = precioUnitario * cantidad;
        var total = subtotal + 500;

        input.parentNode.nextElementSibling.textContent = '₡' + subtotal;
        actualizarTotal();
    } else {
        input.value = 1;
    }
}


function actualizarTotal() {
    var subtotales = document.querySelectorAll('.carrito-inputs');
    var subtotalTotal = 0;
    subtotales.forEach(function(input) {
        var precioUnitario = parseInt(input.parentNode.previousElementSibling.textContent.replace('₡', ''));
        var cantidad = parseInt(input.value);
        subtotalTotal += precioUnitario * cantidad;
    });

    var total = subtotalTotal + 500;

    document.getElementById('subtotal').textContent = '₡' + subtotalTotal;
    document.getElementById('total').textContent = '₡' + total;
}
