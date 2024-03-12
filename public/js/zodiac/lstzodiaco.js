var db = firebase.apps[0].firestore();

const tabla = document.querySelector('#tabla');

db.collection("datosZodiaco").orderBy('posic', 'asc').get().then(function(query){
    tabla.innerHTML="";
    query.forEach(function(doc){
        var salida = '<div class="divAnuncio m-3">';
        salida += '<div class="imgBlock"><img src="' + doc.data().url +'" width="200%" /></div>';
        salida += '<div>'+ doc.data().signo + '<br/>'+ doc.data().rango + '</div>'+ doc.data().elemento + '</div>'+ doc.data().astro + '</div>'+ doc.data().piedra + '</div>';
        tabla.innerHTML += salida;
    });
});
