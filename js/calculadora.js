document.addEventListener("DOMContentLoaded", function () {
    let botones = document.querySelectorAll('.numeros');
    let operadores = document.querySelectorAll('.operadores');
    let inputPantalla = document.querySelector('#input-operacion');
    let resultado = 0;
    let numeroActual = [];
    let ultimoSigno = "";
    let penultimoSigno = "";

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function () {
            if (!Number(inputPantalla.value)) {
                inputPantalla.value = "";
            }
            inputPantalla.value += botones[i].textContent;
        });

    }

    function validar() {

        if (ultimoSigno === "+") {
            penultimoSigno = "+";
            
            if (numeroActual.length > 1) {
                resultado = (numeroActual[0] + numeroActual[1])
                numeroActual.splice(0, numeroActual.length);
                inputPantalla.value = resultado;
            }

        } else if (ultimoSigno === "-") {
            penultimoSigno = "-";
            if (numeroActual.length > 1) {
                resultado = ((numeroActual[0]) - (numeroActual[1]))
                numeroActual.splice(0, numeroActual.length);
                inputPantalla.value = resultado;
            }

        } else if (ultimoSigno === "*") {
            penultimoSigno = "*";
            if (numeroActual.length > 1) {
                resultado = (numeroActual[0] * numeroActual[1]);
                numeroActual.splice(0, numeroActual.length);
                inputPantalla.value = resultado;
            }
        } else if (ultimoSigno === "/") {
            penultimoSigno = "/";
            if (numeroActual.length > 1) {
                resultado = (numeroActual[0] / numeroActual[1]);
                numeroActual.splice(0, numeroActual.length);
                inputPantalla.value = resultado;
            }
        } else if (ultimoSigno === "C") {
            numeroActual.splice(0, numeroActual.length);
            inputPantalla.value = "0";

        } else if (ultimoSigno === "=") {
            if (numeroActual.length > 1) {
                if (penultimoSigno === "+") {
                    if (numeroActual.length > 1) {
                        resultado = (numeroActual[0] + numeroActual[1])
                        numeroActual.splice(0, numeroActual.length);
                        inputPantalla.value = resultado;
                    }
                } else if (penultimoSigno === "-") {
                    if (numeroActual.length > 1) {
                        resultado = ((numeroActual[0]) - (numeroActual[1]))
                        numeroActual.splice(0, numeroActual.length);
                        inputPantalla.value = resultado;
                    }
                } else if (penultimoSigno === "*") {
                    if (numeroActual.length > 1) {
                        resultado = (numeroActual[0] * numeroActual[1]);
                        numeroActual.splice(0, numeroActual.length);
                        inputPantalla.value = resultado;
                    }
                } else if (penultimoSigno === "/") {
                    if (numeroActual.length > 1) {
                        resultado = (numeroActual[0] / numeroActual[1]);
                        numeroActual.splice(0, numeroActual.length);
                        inputPantalla.value = resultado;
                    }
                }


            }
        }
    };


    for (let i = 0; i < operadores.length; i++) {

        operadores[i].addEventListener('click', function () {
            ultimoSigno = operadores[i].textContent;
            numeroActual.push(Number(inputPantalla.value));
            inputPantalla.value = ultimoSigno;


            validar();


        });

    }


});