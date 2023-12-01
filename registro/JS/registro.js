

function guardar() {
    let nombre_ = document.querySelector("#txtnombre")
    let apellido_ = document.querySelector("#txtapellido")
    let usuario_ = document.querySelector("#txtusuario")
    let correo_ = document.querySelector("#txtcorreo")
    let contraseña_ = document.querySelector("#txtcontraseña")
    let contraseña1_ = document.querySelector("#txtcontraseña1")
    let numero_ = document.querySelector("#txtnumero")
    if (nombre_.value != '' && apellido_.value != '' && usuario_ != '' && correo_ != '' && contraseña_ != '' && contraseña1_ != '' && numero_ != '') {
    let persona = {
        nombre: nombre_.value,
        apellido: apellido_.value,
        usuario: usuario_.value,
        correo: correo_.value,
        contraseña: contraseña_.value,
        contraseña1: contraseña1_.value,
        numero: numero_.value
    }
    console.log(persona)
}
else {
    alert("su puta madre");
}

}
