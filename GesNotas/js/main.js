const btnCerrarSesion = document.getElementById("btnCerrarSesion");
const btnAnadir = document.getElementById("btnAnadir");
const btnEliminar = document.getElementById("btnEliminar");

const asignatura = document.getElementById("asignatura");
const evaluacion = document.getElementById("evaluacion");
const nota = document.getElementById("nota");
const mensaje = document.getElementById("mensaje");

const filtroEvaluacion = document.getElementById("filtroEvaluacion");
const cuerpoNotas = document.getElementById("cuerpoNotas");
const notaMedia = document.getElementById("notaMedia");

btnCerrarSesion.onclick = function () {
    window.location.href = "/PaginaInicial/index.html";
};

function calcularMedia() {
    const filas = cuerpoNotas.querySelectorAll("tr");
    let suma = 0;

    for (let i = 0; i < filas.length; i++) {
        suma = suma + parseFloat(filas[i].children[2].textContent);
    }

    if (filas.length > 0) {
        notaMedia.textContent = (suma / filas.length).toFixed(2);
    } else {
        notaMedia.textContent = "-";
    }
}

function filtrar() {
    const filas = cuerpoNotas.querySelectorAll("tr");

    for (let i = 0; i < filas.length; i++) {
        if (filtroEvaluacion.value === "todas" || filas[i].dataset.evaluacion === filtroEvaluacion.value) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}


btnAnadir.onclick = function () {
    const valorNota = parseFloat(nota.value);

    if (asignatura.value === "" || evaluacion.value === "" || isNaN(valorNota)) {
        mensaje.textContent = "Rellena todos los campos";
        mensaje.className = "mensaje-error";
        return;
    }

    if (valorNota < 0 || valorNota > 10) {
        mensaje.textContent = "La nota debe estar entre 0 y 10";
        mensaje.className = "mensaje-error";
        return;
    }

    let estado = "Aprobado";
    let clase = "notaAprobada";
    if (valorNota < 5) {
        estado = "Suspenso";
        clase = "notaSuspensa";
    }

    cuerpoNotas.innerHTML += `
        <tr data-evaluacion="${evaluacion.value}">
            <td>${asignatura.value}</td>
            <td>${evaluacion.value}ª Evaluación</td>
            <td>${valorNota.toFixed(1)}</td>
            <td class="${clase}">${estado}</td>
        </tr>`;

    mensaje.textContent = "Nota añadida correctamente";
    mensaje.className = "mensaje-exito";

    asignatura.value = "";
    evaluacion.value = "";
    nota.value = "";
    calcularMedia();
    filtrar();
};

btnEliminar.onclick = function () {
    const ultima = cuerpoNotas.lastElementChild;

    if (ultima) {
        cuerpoNotas.removeChild(ultima);
        calcularMedia();
    }
};

filtroEvaluacion.onchange = filtrar;

calcularMedia();