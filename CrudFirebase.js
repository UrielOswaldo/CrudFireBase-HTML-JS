const db=firebase.firestore();

const form=document.getElementById("formularioR");
if(form){
    form.addEventListener('submit',e =>  {
        e.preventDefault();
        const nombre=form['txtNombre'].value;
        const apellidos=form['txtApellidos'].value;
        if (nombre!="" && apellidos!="") {
            db.collection('Usuarios').doc().set({
                nombre,
                apellidos
            });
            alert("Usuario Registrado Correctamente...");
            form.reset();
            setTimeout(function(){ window.location.replace('index.html'); }, 500);
        } else {
            alert("Debe ingresar los datos para registrar el Usuario");
        }
    })
}

var contenido=document.getElementById("contenido")
if (contenido) {
    db.collection("Usuarios").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            contenido.innerHTML+='<tr><td>'+doc.id+'</td><td>'+doc.data().nombre+'</td><td>'+doc.data().apellidos+'</td></tr>';
        });
    });
}

const formE=document.getElementById("formEliminar")
if (formE) {
    boton=formE["btnEliminarU"];
    boton.addEventListener("click", function(evento){
        evento.preventDefault();
        const id=formE['nomUsuarios'].value;
        db.collection("Usuarios").doc(id).delete().then(function () {
            alert("Registro eliminado correctamente...");
            setTimeout(function(){ window.location.replace('GestionarU.html'); }, 500);
        }).catch(function(error) {
            alert("Ocurrio un error al eliminar el registro...");
        });
    });
}