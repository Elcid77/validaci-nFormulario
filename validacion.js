
// 1. Obtener referencias a los elementos del DOM
const formTraslado = document.getElementById("formTraslado");

const conductor = document.getElementById("conductor");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const horaSalida = document.getElementById("horaSalida");

const errorConductor = document.getElementById("errorConductor");
const errorOrigen = document.getElementById("errorOrigen");
const errorDestino = document.getElementById("errorDestino");
const errorHora = document.getElementById("errorHora");

// 2. Escuchar el evento submit del formulario
formTraslado.addEventListener("submit", function (event) {
    event.preventDefault();

    // Funciones auxiliares para gestionar mensajes y clases CSS
    function limpiarError(input, errorElement) {
        errorElement.textContent = "";
        errorElement.classList.remove("error-message-active");
        input.classList.remove("input-error");
        input.classList.add("input-success");
    }

    function mostrarError(input, errorElement, mensaje) {
        errorElement.textContent = mensaje;
        errorElement.classList.add("error-message-active");
        input.classList.remove("input-success");
        input.classList.add("input-error");
    }

    // Limpiar estados previos
    limpiarError(conductor, errorConductor);
    limpiarError(origen, errorOrigen);
    limpiarError(destino, errorDestino);
    limpiarError(horaSalida, errorHora);

    let esValido = true;

    // 3. Validaciones
    if (conductor.value.trim() === "") {
        mostrarError(conductor, errorConductor, "El conductor es obligatorio");
        esValido = false;
    }

    if (origen.value.trim() === "") {
        mostrarError(origen, errorOrigen, "El origen es obligatorio");
        esValido = false;
    }

    if (destino.value.trim() === "") {
        mostrarError(destino, errorDestino, "El destino es obligatorio");
        esValido = false;
    }
    if (origen.value.trim() !== "" &&
        destino.value.trim() !== "" &&
        origen.value.trim() ===
        destino.value.trim()) {

        errorDestino.textContent =
            "El origen y el destino " +
            "no pueden ser iguales";
    }


    if (horaSalida.value === "") {
        mostrarError(horaSalida, errorHora, "La hora de salida es obligatoria");
        esValido = false;
    }

    // 4. Si todo es válido, procesar el envío
    if (esValido) {
        console.log("Formulario válido. Enviando datos...");
        //formTraslado.submit(); // Descomentar para enviar realmente el formulario
    }
});