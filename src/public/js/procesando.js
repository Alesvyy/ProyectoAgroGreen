function mostrarComprobado() {
    const cargandoDiv = document.getElementById('cargando');
    const comprobadoDiv = document.getElementById('comprobado');
    

    cargandoDiv.style.opacity = '0';
    cargandoDiv.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        cargandoDiv.style.display = 'none';
    }, 50);
    
 
    comprobadoDiv.classList.remove('oculto');
    comprobadoDiv.style.opacity = '1';
    comprobadoDiv.style.transition = 'opacity 1s ease';
    

    setTimeout(() => {
        window.location.href = '/menu';
    }, 4000);
}


setTimeout(mostrarComprobado, 5000);
