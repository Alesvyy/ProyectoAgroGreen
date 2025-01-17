const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{3,16}$/, // AQUI LE ESTAMOS DICIENDO QUE EN EL CAMPO USUARIO ACEPTE LETRAS MINUSCULAS Y MAYUSCULAS DE LA A HASTA LA Z, NÚMEROS DEL 0 HASTA EL 9, GUIONES BAJOS, GUIONES MEDIO Y UNA CANTIDAD MINIMA DE 4 CARACTERES Y MAXIMA DE 16 CARACTERES
    primerapellido: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    segundoapellido: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    password: /^.{4,12}$/, // SÓLO ACEPTARA UN MINIMO DE 4 DIGITOS Y UN MÁXIMO DE 12 DIGITOS
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    telefono: /^\d{7,14}$/, // ACEPTARA MINIMO 7 Y MAXIMO 14 NÚMEROS
    identificación:/^\d{7,14}$/
}

const campos = {
    usuario: false,
    primerapellido: false,
    segundoapellido: false,
    identificación:false,
    password: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {// e.target se trae el nombre del input
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
        break;
        case "primerapellido":
            validarCampo(expresiones.primerapellido, e.target, "primerapellido");
        break;
        case "segundoapellido":
            validarCampo(expresiones.primerapellido, e.target, "segundoapellido");
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
        case "identificación":
            validarCampo(expresiones.telefono, e.target, "identificación");
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");// cambia la clase para asignar el color
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    } else {
           document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
           document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
           document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
           document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
           document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
           campos[campo] = false;
           console.log("Funciona");
        }
}


// --------- VALIDAMOS NUESTRAS PASSWORD'S ---------------
const validarPassword2 = () => {
    let inputPassword1 = document.getElementById("password");
    let inputPassword2 = document.getElementById("password2");

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[password] = false;
        console.log("Funciona");
    } else {
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[password] = true;
        console.log("Funciona");
    }
}


// --------- CAPTURAMOS CADA VEZ QUE EL USUARIO PRESIONA UNA TECLA ---------------
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);//keyup evento cuando presionamos una tecla
    input.addEventListener("blur", validarFormulario);//blur evento cuando se quita
});



// --------- VALIDAMOS TODO NUESTRO FORMULARIO ---------------
/*$formulario.addEventListener("submit", (e) => {
    e.preventDefault();//Evita que se vaya de la página

    const $terminos = document.getElementById("terminos");
    if(campos.usuario && campos.primerapellido && campos.segundoapellido && campos.password && campos.correo && campos.identificación && campos.telefono && $terminos.checked) {
        // formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
            document.getElementById("formulario__grupo-terminos").style.display = "none";
            
        }, 3000);
        
        document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
            icono.classList.remove("formulario__grupo--correcto");
        });
        
        setTimeout(() => {
            location.reload();
        }, 5000);

    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});*/


