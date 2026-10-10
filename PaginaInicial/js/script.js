//Creamos la variable mensaje, esta variable contiene la etiqueta 
//<p> con id = mensajeIncio, posteriormente la usaremos para insertar
//el mensaje de error o exito
let mensaje;
mensaje = document.getElementById("mensajeInicio");

/**
 * Optenemos los dos inputs
 */
let inputUser = document.getElementById("usuario");
let inputPass = document.getElementById("contraseña");

//Constante para recoger el boton de hacer login
const botonLogin = document.getElementById("btnLogin");

//Constante para recoger el boton de hacer login
const botonReg = document.getElementById("btnReg");



/**
 * Llamamos a la funcion que borra el mensaje con ambos inputs
 */

inputUser.onfocus = borraMensaje;
inputPass.onfocus = borraMensaje;

//Funcion simple que escucha al boton de login
botonLogin.addEventListener("click", function(){

/**
 * Se recogen los datos de usuario y contraseña en las variables
 * logUsuario y logPass
 */
let logUsuario;
logUsuario = document.getElementById("usuario").value;

let logPass;
logPass = document.getElementById("contraseña").value;


/**
 * Primer if, comprobamos si los datos son correctos, si lo son
 * simplemente mandamos el mensaje de "redirigiendo y le assignamos la clase
 * "mensaje-exito" que se copntrola desde el css
 */
if(logUsuario == "usuario" && logPass == "contraseña"){
    mensaje.innerHTML = "REDIRIGIENDO...";
    mensaje.className = "mensaje-exito"
    
/**
 * Segundo y tercer if, si encontramos que el usuario o la contraseña
 *  no a sido introducido mandamos el mensaje
 * y le ponemos la clase "mensaje-error"
 */

}else if(logUsuario =="" && logPass != ""){
    mensaje.innerHTML = "Falta el Usuario!"
    mensaje.className = "mensaje-error"
    
}else if(logPass =="" && logUsuario != ""){
    mensaje.innerHTML = "Falta la contraseña!"
    mensaje.className = "mensaje-error"
/**
 * Por ultimo, si a pasado todo lo anteriro pero la contraseña y el usuario
 * son erroneos mandamos el siguiente mensaje
 */
}else{
    mensaje.innerHTML = "Usuario o contraseña erroneos"
    mensaje.className = "mensaje-error"
}

/**
 * Esto simplemente borra los valroes de los inputs
 */
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";

})



//Funcion que borra los mensajes al pulsar en los inputs
function borraMensaje(){
    mensaje.innerHTML ="";
}

/**
 * Funcion para ir a la pagina de registro
 */
document.getElementById('btnReg').addEventListener('click', function() {
  window.location.href = '/PagRegistro/index.html'; 
});