const inputImagen = document.querySelector('.input-imagen');
const inputFile = document.querySelector('#imagen');
const imagenPredeterminada = document.querySelector('.input-imagen img');
const textoImagen = document.querySelector('.input-imagen .texto');

let isFileDialogOpen = false;

inputFile.addEventListener('change', function() {
  if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagenPredeterminada.src = e.target.result;

      const fileName = inputFile.files[0].name;

      const truncatedFileName = fileName.length > 51 ? fileName.substring(0, 48) + '...' : fileName;

      textoImagen.textContent = truncatedFileName;

      isFileDialogOpen = false;
    };
    reader.readAsDataURL(this.files[0]);
  }
});

inputImagen.addEventListener('click', function() {
  if (!isFileDialogOpen) {
    isFileDialogOpen = true;
    inputFile.click();
  }
});



function seleccionarOpcion() {
    var select = document.getElementById("ID");
    var fondoOption = select.options[0];

    if (select.value !== "") {
        fondoOption.disabled = true;
    } else {
        fondoOption.disabled = false;
    }
}


function redirectToLogin() {
    window.location.href = "/login";
}