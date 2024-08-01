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
const mes = fechaActual.toLocaleString('default', { month: 'long' }); // Obtener el nombre del mes
const año = fechaActual.getFullYear();

// Mostrar la fecha en el formato deseado
document.getElementById('calificado').innerHTML += `${dia} de ${mes} de ${año}`;

document.getElementById('provinciaSelect').addEventListener('change', function() {
    var provincia = this.value;
    var cantonSelect = document.getElementById('cantonSelect');
    var distritoSelect = document.getElementById('distritoSelect');
    
    // Reinicia el selector de distrito
    cantonSelect.innerHTML = '<option value="">Seleccione un Cantón</option>';
    distritoSelect.innerHTML = '<option value="">Seleccione un Distrito</option>';

    if (provincia === 'san_jose') {
        var cantonSanJose = ["San Jose", "Escazu", "Desamparados", "Puriscal", "Tarrazu", "Aserri", "Mora", "Goiecoehea","Santa Ana", "Alajuelita", "Vazquez de Coronado", "Acosta", "Tibas", "Moravia", "Montes de Oca", "Turrubares", "Dota", "Curridabat", "Perez Zeledon", "Leon Cortes Castro"];
        cantonSanJose.forEach(function(canton) {
            var option = document.createElement('option');
            option.text = canton;
            option.value = canton.toLowerCase().replace(/\s+/g, '_'); 
            cantonSelect.add(option);
        });
    } else if (provincia === 'alajuela') {
        var cantonAlajuela = ["Alajuela", "San Ramon", "Grecia", "San Mateo", "Atenas", "Naranjo", "Palmares","Poas", "Orotina", "San Carlos", "Zarcero", "Sarchi", "Upala", "Los Chiles", "Guatuso", "Rio Cuarto"];
        cantonAlajuela.forEach(function(canton) {
            var option = document.createElement('option');
            option.text = canton;
            option.value = canton.toLowerCase().replace(/\s+/g, '_'); 
            cantonSelect.add(option);
        });
    } else if (provincia === 'cartago') {
        var cantonCartago = ["Cartago", "Paraiso", "La Union", "Jimenez", "Turrialba", "Alvarado", "Oreamuno", "El Guarco"];
        cantonCartago.forEach(function(canton) {
            var option = document.createElement('option');
            option.text = canton;
            option.value = canton.toLowerCase().replace(/\s+/g, '_'); 
            cantonSelect.add(option);
        });
    } else if (provincia === 'heredia') {
        var cantonHeredia = ["Heredia", "Barva", "Santo Domingo", "Santa Barbara", "San Rafael", "San Isidro", "Belen", "Flores", "San Pablo", "Sarapiqui"];
        cantonHeredia.forEach(function(canton) {
            var option = document.createElement('option');
            option.text = canton;
            option.value = canton.toLowerCase().replace(/\s+/g, '_'); 
            cantonSelect.add(option);

        });
    } else if (provincia === 'guanacaste') {
        var cantonGuanacaste = ["Liberia", "Nicoya", "Santa Cruz", "Bagaces", "Carrillo", "Cañas", "Abangares", "Tilaran", "Nandayure", "La Cruz", "Hojancha"];
        cantonGuanacaste.forEach(function(canton) {
            var option = document.createElement('option');
            option.text = canton;
            option.value = canton.toLowerCase().replace(/\s+/g, '_'); 
            cantonSelect.add(option);

        });
    } else if (provincia === 'puntarenas') {
        var cantonPuntarenas = ["Puntarenas", "Esparza", "Buenos Aires", "Montes de Oro", "Osa", "Quepos", "Golfito", "Coto Brus", "Parrita", "Corredores", "Garabito", "Monteverde", "Puerto Jimenez"];
        cantonPuntarenas.forEach(function(canton) {
            var option = document.createElement('option');
            option.text = canton;
            option.value = canton.toLowerCase().replace(/\s+/g, '_'); 
            cantonSelect.add(option);

        });
    } else if (provincia === 'limon') {
        var cantonLimon = ["Limon", "Pococi", "Siquirres", "Talamanca", "Matina", "Guacimo"];
        cantonLimon.forEach(function(canton) {
            var option = document.createElement('option');
            option.text = canton;
            option.value = canton.toLowerCase().replace(/\s+/g, '_'); 
            cantonSelect.add(option);

        });
    }
    // Repite el mismo proceso para las demás provincias

    // Agregar evento change al select de cantones
    cantonSelect.addEventListener('change', function() {
        var canton = this.value;
        // Reinicia el selector de distrito
        distritoSelect.innerHTML = '<option value="">Seleccione un Distrito</option>';

        // Carga los distritos correspondientes al cantón seleccionado
        var distritos = obtenerDistritos(provincia, canton);
        distritos.forEach(function(distrito) {
            var option = document.createElement('option');
            option.text = distrito;
            option.value = distrito.toLowerCase().replace(/\s+/g, '_');
            distritoSelect.add(option);
        });
    });
});


// Función para obtener los distritos según la provincia y cantón seleccionados
function obtenerDistritos(provincia, canton) {
    // Define un objeto que mapea cantones a distritos
    var distritosPorCanton = {
        'san_jose': {
            'san_jose': ["Carmen", "Merced", "Hospital", "Catedral", "Zapote", "San Francisco de Dos Rios", "Uruca", "Mata Redonda", "Pavas", "Hatillo", "San Sebastian"], 
            'escazu': ["Escazu", "San Antonio", "San Rafael"], 
            'desamparados':["Desamparados", "San Miguel", "San Juan de Dios", "San Rafael Arriba", "San Antonio", "Frailes", "Patarra", "San Cristobal", "Rosario", "Damas", "San Rafael Abajo", "Gravilias", "Los Guido"],
            'puriscal':["Santiago", "Mercedes Sur", "Barbacoas", "Grifo Alto", "San Rafael", "Candelarita", "Desamparaditos", "San Antonio", "Chires"],
            'tarrazu':["San Marcos", "San Lorenzo", "San Carlos"],
            'aserri':["Aserri", "Tabarca", "Vuelta de Jorco", "San Gabriel", "Legua", "Monterrey", "Salitrillos"],
            'mora':["Colon", "Guayabo", "Tabarcia", "Piedras Negras", "Picagres", "Jaris", "Quitirrisi"],
            'goiecoehea':["Guadalupe", "San Francisco", "Calle blancos", "Mata de Platano", "Ipis", "Rancho Redondo", "Purral"],
            'santa_ana':["Santa Ana", "Salitral", "Pozos", "Uruca", "Piedades", "Brasil"],
            'alajuelita':["Alajuelita", "San Josecito", "San Antonio", "Concepcion", "San Felipe"],
            'vazquez_de_coronado':["San Isidro", "San Rafael", "Dulce Nombre de Jesus", "Patalillo", "Cascajal"],
            'acosta':["San Ignacio", "Guaitil", "Palmichal", "Cangrejal", "Sabanillas"],
            'tibas':["San Juan", "Cinco esquinas", "Anselmo Llorente", "Leon XIII", "Colima"],
            'moravia':["San Vicente", "San Jeronimo", "La Trinidad"],
            'montes_de_oca':["San Pedro", "Sabanilla", "Mercedes", "San Rafael"],
            'turrubares':["San Pablo", "San Pedro", "San Juan de Mata", "San Luis", "Carara"],
            'dota':["Santa Maria", "Jardin", "Copey",],
            'curridabat':["Curridabat", "Granadilla", "Sanchez", "Tirrases"],
            'perez_zeledon':["San Isidro de El General", "El General", "Daniel Flores", "Rivas", "San Pedro", "Platanares", "Pejibaye", "Cajon", "Baru", "Rio Nuevo", "Paramo", "La Amistad"],
            'leon_cortes_castro':["San Pablo", "San Andres", "Llano Bonito", "San Isidro", "Santa Cruz", "San Antonio"]
          
        },
        'alajuela':{
            'alajuela':["Alajuela", "San Jose", "Carrizal","San Antonio", "Guacima", "San Isidro", "Sabanilla", "San Rafael", "Rio Segundo", "Desamparados", "Turrucares", "Tambor", "Garita", "Sarapiqui"],
            'san_ramon':["San Ramon", "Santiago", "San Juan","Piedades Norte", "Piedades Sur", "San Rafael", "San Isidro", "Angeles", "Alfaro", "Volio", "Concepcion", "Zapotal", "Peñas Blancas", "San Lorenzo"],
            'grecia':["Grecia", "San Isidro", "San Jose", "San Roque", "Tacares", "Puente de piedra", "Bolivar"],
            'san_mateo':["San Mateo", "Desmonte", "Jesus Maria", "Labrador"],
            'atenas':["Atenas", "Jesus", "Mercedes", "San Isidro", "Concepcion", "San Jose", "Santa Eulalia", "Escobal"],
            'naranjo':["Naranjo", "San Miguel", "San Jose", "Cirri Sur", "San Jeronimo", "San Juan", "El Rosario", "Palmitos"],
            'palmares':["Palmares", "Zaragoza", "Buenos Aires", "Santiago", "Candelaria", "Esquipulas", "La Granja"],
            'poas':["San Pedro", "San Juan", "San Rafael", "Carrillos", "Sabana Redonda"],
            'san_carlos':["Quesada", "Florencia", "Buenavista", "Aguas Zarcas", "Venecia", "Pital", "La Fortuna", "La Tigra", "La Palmera", "Venado", "Cutris", "Monterrey", "Pocosol"],
            'zarcero':["Zarcero", "Laguna", "Tapesco", "Guadalupe", "Palmira", "Zapote", "Brisas"],
            'sarchi':["Sarchi Norte", "Sarchí Sur", "Toro Amarillo", "San Pedro", "Rodríguez"],
            'upala':["Upala", "Aguas Claras", "San José", "Bijagua", "Delicias", "Dos Ríos", "Yolillal", "Canalete"],
            'los_chiles':["Los Chiles", "Caño Negro", "El Amparo", "San Jorge"],
            'guatuso':["San Rafael", "Buenavista", "Cote", "Katira"],
            'rio_cuarto':["Río Cuarto", "Santa Rita", "Santa Isabel"],

        }, 
        'cartago':{
            'cartago':["Oriental", "Occidental", "Carmen","San Nicolás", "Aguacaliente", "Guadalupe", "Corralillo", "Tierra Blanca", "Dulce Nombre", "Llano Grande", "Quebradilla"],
            'paraiso':["Paraíso", "Santiago", "Orosi", "Cachí", "Llanos de Santa Lucía", "Birrisito"],
            'la_union':["Tres Ríos", "San Diego", "San Juan", "San Rafael", "Concepción", "Dulce Nombre", "San Ramón", "Río Azul"],
            'jimenez':["Juan Viñas", "Tucurrique", "Pejibaye", "La Victoria"],
            'turrialba':["Turrialba", "La Suiza", "Peralta","Santa Cruz", "Santa Teresita", "Pavones", "Tuis", "Tayutic", "Santa Rosa", "Tres Equis", "La Isabel", "Chirripó"],
            'alvarado':["Pacayas", "Cervantes", "Capellades"],
            'oreamuno':["San Rafael", "Cot", "Potrero Cerrado", "Cipreses", "Santa Rosa"],
            'el_guarco':["El Tejar", "San Isidro", "Tobosi", "Patio de Agua"]

        }, 
        'heredia':{
            'heredia':["Heredia", "Mercedes", "San Francisco", "Ulloa", "Varablanca"],
            'barva':["Barva", "San Pedro", "San Pablo", "San Roque", "Santa Lucía", "San José de la Montaña"],
            'santo_domingo':["Santo Domingo", "San Vicente", "San Miguel", "Paracito", "Santo Tomás", "Santa Rosa", "Tures", "Pará"],
            'santa_barbara':["Santa Bárbara", "San Pedro", "San Juan", "Jesús", "Santo Domingo", "Purabá"],
            'san_rafael':["San Rafael", "San Josecito", "Ángeles", "Concepción"],
            'san_isidro':["San Isidro", "San José", "Concepción", "San Francisco"],
            'belen':["San Antonio", "La Ribera", "La Asunción"],
            'flores':["San Joaquín", "Barrantes", "Llorente"],
            'san_pablo':["San Pablo", "Rincón de Sabanilla"],
            'sarapiqui':["Puerto Viejo", "La Virgen", "Las Horquetas", "Llanuras del Gaspar", "Cureña"],

        }, 
        'guanacaste':{
            'liberia':["Liberia", "Cañas Dulces", "Mayorga", "Nacascolo", "Curubandé"],
            'nicoya':["Nicoya", "Mansión", "San Antonio", "Quebrada Honda", "Sámara", "Nosara", "Belén de Nosarita"],
            'santa_cruz':["Santa Cruz", "Bolsón", "Veintisiete de Abril", "Tempate", "Cartagena", "Cuajiniquil", "Diriá", "Cabo Velas","Tamarindo"],
            'bagaces':["Bagaces", "La Fortuna", "Mogote", "Río Naranjo"],
            'carrillo':["Filadelfia", "Palmira", "Sardinal", "Belén"],
            'cañas':["Cañas", "Palmira", "San Miguel", "Bebedero", "Porozal"],
            'abangares':["Las Juntas", "Sierra", "San Juan", "Colorado"],
            'tilaran':["Tilarán", "Quebrada Grande", "Tronadora", "Santa Rosa", "Líbano", "Tierras Morenas", "Arenal", "Cabeceras"],
            'nandayure':["Carmona", "Santa Rita", "Zapotal", "San Pablo", "Porvenir", "Bejuco"],
            'la_cruz':["La Cruz", "Santa Cecilia", "La Garita", "Santa Elena"],
            'hojancha':["Hojancha", "Monte Romo", "Puerto Carrillo", "Huacas", "Matambú"],


        }, 
        'puntarenas':{
            'puntarenas':["Puntarenas", "Pitahaya", "Chomes", "Lepanto", "Paquera", "Manzanillo", "Guacimal", "Barranca","Isla del Coco", "Cóbano", "Chacarita", "Chira", "Acapulco", "El Roble", "Arancibia"],
            'esparza':["Espíritu Santo", "San Juan Grande", "Macacona", "San Rafael", "San Jerónimo", "Caldera"],
            'buenos_aires':["Buenos Aires", "Volcán", "Potrero Grande", "Boruca", "Pilas", "Colinas", "Chánguena", "Biolley", "Brunka"],
            'montes_de_oro':["Miramar", "La Unión", "San Isidro"],
            'osa':["Puerto Cortés", "Palmar", "Sierpe", "Bahía Ballena", "Piedras Blancas", "Bahía Drake"],
            'quepos':["Quepos", "Savegre", "Naranjito"],
            'golfito':["Golfito", "Guaycará", "Pavón"],
            'coto_brus':["San Vito", "Sabalito", "Aguabuena", "Limoncito", "Pittier", "Gutiérrez Braun"],
            'parrita':["Parrita"],
            'corredores':["Corredor", "La Cuesta", "Canoas", "Laurel"],
            'garabito':["Jacó", "Tárcoles", "Lagunillas"],
            'monteverde':["Monteverde"],
            'puerto_jimenez':["Puerto Jiménez"],

        },
        'limon':{
            'limon':["Limón", "Valle La Estrella", "Río Blanco", "Matama"], 
            'pococi':["Guápiles", "Jiménez", "Rita", "Roxana", "Cariari", "Colorado", "La Colonia"],
            'siquirres':["Siquirres", "Pacuarito", "Florida", "Germania", "El Cairo", "Alegría", "Reventazón"],
            'talamanca':["Bratsi", "Sixaola", "Cahuita", "Telire"], 
            'matina':["Matina", "Batán", "Carrandi"], 
            'guacimo':["Guácimo", "Mercedes", "Pocora", "Río Jiménez", "Duacari"]


        }
    };

    // Retorna los distritos correspondientes al cantón seleccionado
    return distritosPorCanton[provincia][canton] || [];
}
