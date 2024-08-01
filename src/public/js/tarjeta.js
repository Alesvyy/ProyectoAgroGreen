var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;

cardDrop.addEventListener('click', function () {
    var node;

    for (var i = 0; i < this.childNodes.length - 1; i++)
        node = this.childNodes[i];

    if (node.className === 'dropdown-select') {
        node.classList.add('visible');
        activeDropdown = node;
    };
});

window.onclick = function (e) {
    console.log(e.target.tagName)
    console.log('dropdown');
    console.log(activeDropdown)

    if (e.target.tagName === 'LI' && activeDropdown) {
        if (e.target.innerHTML === 'Master Card') {
            document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Master Card';
        } else if (e.target.innerHTML === 'Visa') {
            document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Visa';
        }
    } else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
    }
}

// Formato específico para el número de tarjeta (cada 4 dígitos con un guión)
document.getElementById('card-number').addEventListener('input', function () {
    var inputValue = this.value;

    // Elimina cualquier guión existente
    inputValue = inputValue.replace(/-/g, '');

    // Inserta guiones después de cada 4 dígitos
    inputValue = inputValue.replace(/(\d{4})/g, '$1-');

    // Elimina un guión final si existe
    inputValue = inputValue.replace(/-$/, '');

    // Asigna el nuevo valor formateado
    this.value = inputValue;
});

document.getElementById('expiry-date').addEventListener('input', function () {
    var inputValue = this.value;

    // Elimina cualquier carácter no numérico
    inputValue = inputValue.replace(/[^\d]/g, '');

    // Limita la longitud total a 6 caracteres (MM-YYYY)
    if (inputValue.length > 6) {
        this.value = inputValue.slice(0, 6);
    }

    // Inserta un guion después de los dos primeros caracteres
    if (inputValue.length >= 2 && !inputValue.includes('-')) {
        this.value = inputValue.slice(0, 2) + '-' + inputValue.slice(2);
    }
});
