function agregarCuenta() {
    // document.querySelector('#codigoCuenta').disabled = false;
    var btnRegistrar = document.getElementById("btnRegistrar");
    var btnActualizar = document.getElementById("btnActualizar");
    btnActualizar.style.display = "none";
    btnRegistrar.style.display = "block";
    document.getElementById("formularioCuenta").reset();
    $('#modalCuenta').modal('show');
}
