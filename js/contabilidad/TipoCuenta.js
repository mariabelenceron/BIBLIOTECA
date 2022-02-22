function agregarTipoCuenta() {
    // document.querySelector('#codigoTipCue').disabled = false;
    var btnRegistrar = document.getElementById("btnRegistrar");
    var btnActualizar = document.getElementById("btnActualizar");
    btnActualizar.style.display = "none";
    btnRegistrar.style.display = "block";
    document.getElementById("formularioTipCue").reset();
    $('#modalTipCue').modal('show');
}
