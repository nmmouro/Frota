import {
    salvarLancamento
} from "../services/lancamentos.js";

const form = document.getElementById("form");

form.addEventListener("submit", salvar);

async function salvar(event) {

    event.preventDefault();

    const botao =
        form.querySelector('button[type="submit"]');

    botao.disabled = true;

    try {

        const dados = {

            Data: document.getElementById("data").value,

            Hora: document.getElementById("hora").value,

            Empregado: document.getElementById("empregado").value,

            Veiculo: document.getElementById("veiculo").value,

            Motivo: document.getElementById("motivo").value,

            Itinerario: document.getElementById("itinerario").value,

            Status: document.getElementById("status").value

        };

        validar(dados);

        const resposta =
            await salvarLancamento(dados);

        if (!resposta.sucesso) {

            throw new Error(
                resposta.mensagem ||
                "Erro ao salvar."
            );

        }

        alert("Lançamento salvo com sucesso!");

        location.href = "lancamentos.html";

    }
    catch (erro) {

        console.error(erro);

        alert(erro.message);

    }
    finally {

        botao.disabled = false;

    }

}

function validar(dados) {

    if (!dados.Data)
        throw new Error("Informe a data.");

    if (!dados.Hora)
        throw new Error("Informe a hora.");

    if (!dados.Empregado)
        throw new Error("Selecione o empregado.");

    if (!dados.Veiculo)
        throw new Error("Selecione o veículo.");

}
