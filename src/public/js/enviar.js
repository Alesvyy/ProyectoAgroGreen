function updateRating() {
    var rating = document.querySelector('input[name="rating"]:checked');
    var ratingValue = rating ? rating.value : 0;
    if (rating && rating.dataset.clicked) {
        rating.checked = false;
        rating.dataset.clicked = '';
        document.querySelector('.rating-number').innerText = '0';
    } else {
        if (rating) {
            rating.dataset.clicked = 'true';
        }
        document.querySelector('.rating-number').innerText = ratingValue;
    }
}



const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.toLocaleString('default', { month: 'long' });
const año = fechaActual.getFullYear();


document.getElementById('calificado').innerHTML += `${dia} de ${mes} de ${año}`;