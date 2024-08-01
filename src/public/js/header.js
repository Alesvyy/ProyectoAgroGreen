const getCookies = () => {
const allCookies = document.cookie.split(';');
const found = allCookies.find((cookie) => {return cookie.includes('user=')});

document.getElementById('btn_sesion').textContent = found ? "Cerrar Sesion" : "Inicia Sesion";

};

const cerrarSesion = () => {
    document.cookie =
      "user=null; expires=Fri, 31 Dec 1000 23:59:59 GMT; SameSite=None; Secure";
}

getCookies();
