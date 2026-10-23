// Cerrar sesion redirige a lla pagina inicial
const btnCerrarSesion = document.querySelector(".btnCerrarSesion");

btnCerrarSesion.onclick = () => {
    window.location.href = "/PaginaInicial/index.html";
};

const fecha = document.getElementById("fecha");
const asignatura = document.getElementById("asignatura");
const tipo = document.getElementById("tipo");
const mensaje = document.getElementById("mensaje");

const btnRegistrar = document.querySelector(".btnAnadir");
const btnEliminar = document.querySelector(".btnEliminar");
const cuerpoFaltas = document.getElementById("cuerpoFaltas");

const totalFaltas = document.getElementById("totalFaltas");
const totalJustificadas = document.getElementById("totalJustificadas");
const totalPendientes = document.getElementById("totalPendientes");


function actualizarResumen() {
    const total = cuerpoFaltas.querySelectorAll("tr").length;
    const justificadas = cuerpoFaltas.querySelectorAll(".estadoJustificada").length;

    totalFaltas.textContent = total;
    totalJustificadas.textContent = justificadas;
    totalPendientes.textContent = total - justificadas;
}

function mostrarMensaje(texto, clase) {
    mensaje.textContent = texto;
    mensaje.className = clase;
}


function justificarFalta(boton) {
    const fila = boton.parentElement.parentElement;
    const celdaEstado = fila.children[3];

    celdaEstado.textContent = "Justificada";
    celdaEstado.className = "estadoJustificada";
    boton.parentElement.textContent = "-";

    actualizarResumen();
}

cuerpoFaltas.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btnJustificar")) {
        justificarFalta(evento.target);
    }
});

btnRegistrar.addEventListener("click", () => {
    if (fecha.value === "" || asignatura.value === "" || tipo.value === "") {
        mostrarMensaje("Rellena todos los campos", "mensaje-error");
        return;
    }

    const fechaObj = new Date(fecha.value);

    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${fechaObj.toLocaleDateString()}</td>
                      <td>${asignatura.value}</td>
                      <td>${tipo.value}</td>
                      <td class="estadoPendiente">Sin justificar</td>
                      <td><button class="btnJustificar">Justificar</button></td>`;

    cuerpoFaltas.appendChild(fila);

    mostrarMensaje("Falta registrada correctamente", "mensaje-exito");
    actualizarResumen();

    fecha.value = "";
    asignatura.value = "";
    tipo.value = "";
});

btnEliminar.addEventListener("click", () => {
    if (cuerpoFaltas.lastElementChild) {
        cuerpoFaltas.removeChild(cuerpoFaltas.lastElementChild);
        actualizarResumen();
    }
});

[fecha, asignatura, tipo].forEach(elem => {
    elem.addEventListener("focus", () => mostrarMensaje("", ""));
});

actualizarResumen();