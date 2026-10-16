// Definición de constantes
const btnCerrarSesion = document.querySelector(".btnCerrarSesion");

btnCerrarSesion.onclick = () => {
    window.location.href = "/PaginaInicial/index.html";
};

const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const curso = document.getElementById("curso");
const notas = document.getElementById("notas");

const btnAnadirAlumno = document.querySelector(".btnAlumno");
const alumnosRegistrados = document.getElementById("alumnosRegistrados");

let btnEliminar = document.querySelector(".btnEliminar");

btnEliminar.addEventListener('click', () => {
    alumnosRegistrados.removeChild(alumnosRegistrados.lastChild);
});

btnAnadirAlumno.addEventListener('click', () => {
    let contenido =`<p><strong>Nombre y apellidos:</strong> ${nombre.value} ${apellidos.value}</p>
                    <p><strong>Edad:</strong> ${edad.value} años</p>
                    <p><strong>Curso:</strong> ${curso.value}</p>
                    <p><strong>Notas:</strong> ${notas.value}</p><br>`

    let div = document.createElement("div");
    div.className = "tarjetaAlumno";

    div.innerHTML = contenido;

    alumnosRegistrados.appendChild(div);
    
});