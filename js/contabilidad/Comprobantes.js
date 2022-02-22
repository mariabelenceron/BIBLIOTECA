function agregarComprobante() {
    // document.querySelector('#codigoComprobante').disabled = false;
    var btnRegistrar = document.getElementById("btnRegistrar");
    var btnActualizar = document.getElementById("btnActualizar");
    btnActualizar.style.display = "none";
    btnRegistrar.style.display = "block";
    document.getElementById("formularioComprobante").reset();
    $('#modalComprobante').modal('show');
}
