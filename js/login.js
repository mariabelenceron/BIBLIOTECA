//-------Variables
const formularioLogin = document.querySelector('#login_form');

//-------Eventos
formularioLogin.addEventListener('submit',inicioSesion);

function inicioSesion(e) {
    e.preventDefault();
    let contra = document.querySelector('#password').value;
    if(contra==="admin"){
        window.location.href = "https://62152c828d4309175295dfbb--sharp-lalande-6322a5.netlify.app/vistas/Home.html";
    }else{
        formularioLogin.reset();
    }
}

//------------- Variables
const formulario = document.querySelector('#login_form');
const inputs = document.querySelectorAll('#login_form input');
const btnRegistrar = document.querySelector('#btnRegistrar');
const btnVerificar = document.querySelector('#btnVerificar');


document.addEventListener('DOMContentLoaded', bloquearBtnRegistrar);
btnVerificar.addEventListener('click', validarCaptcha);

function validarCaptcha() {
    const response = grecaptcha.getResponse();
    if (response) {
        desbloquearBtnRegistrar();
    } else {
        error.innerHTML = "Debe chequear el captcha";
        bloquearBtnRegistrar();
    }
}

/* ------------------------------------------------------------- UI -------------------------------------------------------------*/
// Función para bloquear el boton de registrar, poner formatos
function bloquearBtnRegistrar() {
    $("#btnRegistrar").attr("disabled", "true");
    btnRegistrar.classList.remove('btn-primary');
    btnRegistrar.classList.add('btn-light');
}
// Función para desbloquear el boton de registrar, regresar formato inicial
function desbloquearBtnRegistrar() {
    $("#btnRegistrar").removeAttr("disabled")
    btnRegistrar.classList.remove('btn-light');
    btnRegistrar.classList.add('btn-primary');
}