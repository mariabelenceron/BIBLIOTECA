//-------Variables
const formularioLogin = document.querySelector('#login_form');

//-------Eventos
formularioLogin.addEventListener('submit',inicioSesion);

function inicioSesion(e) {
    e.preventDefault();
    let contra = document.querySelector('#password').value;
    if(contra==="admin"){
        window.location.href = "http://127.0.0.1:5501/vistas/Home.html";
    }else{
        formularioLogin.reset();
    }
}