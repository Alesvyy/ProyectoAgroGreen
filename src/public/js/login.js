function validarCredenciales() {
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('contra').value;

    if (username === '402690409' && password === '12345678') {
        window.location.href = '/menu';
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        location.reload();
    }
}