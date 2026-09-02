
//Seleccion de nodos.

const formulario =
    document.querySelector("#formTraslado");

const conductor =
    document.querySelector("#conductor");
const origen =
    document.querySelector("#ori gen");
const destino =
    document.querySelector("#destino");
const horaSalida =
    document.querySelector("#horaSalida");
//Selecionamos el error.
const errorConductor = document
    .querySelector("#errorConductor");
const errorOrigen = document
    .querySelector("#errorOrigen");
const errorDestino = document
    .querySelector("#errorDestino");
const errorHora = document
    .querySelector("#errorHora");


formulario.addEventListener("submit",
    function (event) {
        event.preventDefault();
        errorConductor.textContent = "";
        errorOrigen.textContent = "";
        errorDestino.textContent = "";
        errorHora.textContent = "";

        if (origen.value.trim() === "") {
            errorOrigen.textContent =
                "El origen es obligatorio";
        }
        if (destino.value.trim() === "") {
            errorDestino.textContent =
                "El destino es obligatorio";
        }
        if (horaSalida.value === "") {
            errorHora.textContent =
                "La hora de salida es obligatoria";
        }


    });
