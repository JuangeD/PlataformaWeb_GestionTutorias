//Creamos la variable mensaje, esta variable contiene la etiqueta 
//<p> con id = mensajeIncio, posteriormente la usaremos para insertar
//el mensaje de error o exito
let mensaje;
mensaje = document.getElementById("mensajeRegistro");

//Constante para recoger el boton de hacer login
const btnRegister = document.getElementById("btnRegister");



/**
 * Llamamos a la funcion que borra el mensaje con ambos inputs
 */

//inputUser.onfocus = borraMensaje;
//inputPass.onfocus = borraMensaje;

//Funcion simple que escucha al boton de registrar y comprueba datos
btnRegister.addEventListener("click", function(){

/**
 * Optenemos todos los dos inputs
 */

let inputCorreo = document.getElementById("correo").value;
let inputCorreo2 = document.getElementById("correo2").value;

let inputUser = document.getElementById("usuario").value;

let inputPass = document.getElementById("contraseña").value;
let inputPass2= document.getElementById("contraseña2").value;

let inputDNI= document.getElementById("DNI").value;




/**
 * 1-comprobamos los correos
 */

if(inputCorreo == "" || inputCorreo2 == ""){
    mensaje.innerHTML = "Falta Correo";
    mensaje.className = "mensaje-error"
}
else if(inputCorreo != inputCorreo2){
    mensaje.innerHTML = "Los Correos No Coinciden";
    mensaje.className = "mensaje-error"

/**
 * 2-comprobamos los Usuario
 */

}else if(inputUser == ""){
    mensaje.innerHTML = "Ingrese Usuario"
    mensaje.className = "mensaje-error"


/**
 * 3-comprobamos Contraseña
 */
}else if(inputPass == "" || inputPass2 ==""){
    mensaje.innerHTML = "Falta Contraseña";
    mensaje.className = "mensaje-error"


}else if(inputPass != inputPass2){
    mensaje.innerHTML = "Las Contraseñas No Coinciden"
    mensaje.className = "mensaje-error"
    
/**
 * 4-comprobamos los DNI
 */
}else if(inputDNI ==""){
    mensaje.innerHTML = "Ingrese DNI"
    mensaje.className = "mensaje-error"
    /**
 *SI no entra nada otdo esta bine
 */
}else{
    mensaje.innerHTML = "Usuario Registrado"
    mensaje.className = "mensaje-exito"
}

/**
 * Esto simplemente borra los valroes de los inputs
 */
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("contraseña2").value = "";
    document.getElementById("DNI").value = "";
    document.getElementById("correo2").value = "";
    document.getElementById("correo").value = "";

})



//Funcion que borra los mensajes al pulsar en los inputs
function borraMensaje(){
    mensaje.innerHTML ="";
}

/**
 * Funcion para ir a la pagina de incial
 */
document.getElementById('imgFlecha').addEventListener('click', function() {
  window.location.href = '/PaginaInicial/index.html'; 
});