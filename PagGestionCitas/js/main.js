// Definición de constantes
const btnCerrarSesion = document.querySelector(".btnCerrarSesion");

btnCerrarSesion.onclick = () => {
    window.location.href = "/PaginaInicial/index.html";
};

const citado = document.getElementById("citado");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const motivo = document.getElementById("motivo");

const divListaCitas = document.querySelector(".lista-citas");
const btnCita = document.querySelector(".btnCita");
const btnCancelar = document.querySelectorAll(".btnEliminar");


console.log(btnCancelar);

btnCancelar.forEach(elem => { // Recorro todos los elementos .btnEliminar
    elem.addEventListener('click', function() { // Añadir el evento que provocará que al pulsarse el botón "cancele" la cita
        divListaCitas.removeChild(this.parentElement);
    });
});

btnCita.addEventListener('click', () => {
    let div = document.createElement("div"); // Creamos un elemento div que contendrá el contenido de la cita
    div.className = "cita-info"; // Le añadimos la clase para que tenga el estilo de las citas

    let fechaObj = new Date(fecha.value);

    // Guardo el contenido html que va a tener la cita en una variable
    let contenido =`<h4>${citado.value}</h4>
                    <p><strong>Fecha:</strong> ${fechaObj.toLocaleDateString()}</p>
                    <p><strong>Hora:</strong> ${hora.value}</p>
                    <p><strong>Motivo:</strong> ${motivo.value}</p>`;

    div.innerHTML = contenido; // Lo asigno seguidamente con .innerHTML al div que contiene dicha información

    // Creación del div principal que va a contener tanto el contenido de la cita como el botón de cancelarla
    let divPrincipal = document.createElement("div");
    divPrincipal.className = "cita-card";

    // Creación del botón de cancelar cita
    let btnCancelar = document.createElement("button");
    btnCancelar.innerHTML = "Cancelar";
    btnCancelar.className = "btnEliminar";

    // Añadir el evento de eliminar al botón que se crea
    btnCancelar.addEventListener('click', function() { // Añadir el evento que provocará que al pulsarse el botón "cancele" la cita
        divListaCitas.removeChild(this.parentElement);
    });

    // Agrego al div principal el div con el contenido de la cita y el botón para cancelar la cita
    divPrincipal.appendChild(div);
    divPrincipal.appendChild(btnCancelar);
    

    // Agrego a la lista de citas la cita que se ha generado
    divListaCitas.appendChild(divPrincipal);

    limpiarFormulario();
});

/**
 * Función que limpia los campos del formulario
 */
function limpiarFormulario() {
    citado.value = "";
    fecha.value = "";
    hora.value = "";
    motivo.value = "";
}