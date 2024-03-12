const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtContra = document.querySelector('#txtContra');
const btnInsUser = document.querySelector('#btnInsUser');

btnInsUser.addEventListener('click', function () {
    const fechaCreacion = new Date().toISOString();
    auth.createUserWithEmailAndPassword(txtEmail.value, txtContra.value)
        .then((userCredential) => {
            const user = userCredential.user;
            db.collection("datosUsuarios").add({
                "idemp": user.uid,
                "usuario": txtNombre.value,
                "email": user.email,
                "fechaCreacion": fechaCreacion,
                "ultimoAcceso": null // Inicialmente null, se actualizará después
            }).then(function (docRef) {
                alert("Usuario agregado satisfactoriamente");
                limpiar();
            }).catch(function (FirebaseError) {
                alert("Error al registrar datos del usuario." + FirebaseError);
            });
        })
        .catch((error) => {
            alert("Error al agregar el nuevo usuario: " + error.message);
        });
});

function limpiar(){
    txtNombre.value = '';
    txtEmail.value = '';
    txtContra.value = '';
    txtNombre.focus();
}
