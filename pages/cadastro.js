import {

    salvarLancamento

}
from "../services/lancamentos.js";

const form =
    document.getElementById("form");

form.addEventListener(

    "submit",

    async e=>{

        e.preventDefault();

        const dados={

            Data:
                data.value,

            Hora:
                hora.value,

            Empregado:
                empregado.value,

            Veiculo:
                veiculo.value,

            Motivo:
                motivo.value,

            Itinerario:
                itinerario.value,

            Status:
                status.value

        };

        await salvarLancamento(
            dados
        );

        alert(
            "Registro salvo!"
        );

        location.href=
            "lancamentos.html";

    }

);
