import {
    preencherSelect
} from "../utils/formulario.js";

import {
    salvarLancamento
} from "../services/lancamentos.js";

import {
    obterMotoristas
} from "../services/motoristas.js";

import {
    obterVeiculos
} from "../services/veiculos.js";



const form =
    document.getElementById("form");

const cmbMotorista =
    document.getElementById("empregado");

const cmbVeiculo =
    document.getElementById("veiculo");



const txtData =
    document.getElementById("data");

const txtHora =
    document.getElementById("hora");

const txtMotivo =
    document.getElementById("motivo");

const txtItinerario =
    document.getElementById("itinerario");

const cmbStatus =
    document.getElementById("status");



let motoristas = [];
let veiculos = [];

document.addEventListener(
    "DOMContentLoaded", init);

form.addEventListener(
    "submit",
    salvar
);


async function init(){

try{

     await carregarMotoristas();

    await carregarVeiculos();


}
    catch (erro) {

        console.error(erro);

        alert("Erro ao carregar os dados do formulário.");

}
}

// ================= MOTORISTAS =================

async function carregarMotoristas() {

    motoristas =
        await obterMotoristas();

    preencherSelect(
        cmbMotorista,
        motoristas,
        "Nome",
        "ID"
    );

}

// ================= VEÍCULOS =================

async function carregarVeiculos() {

    veiculos =
        await obterVeiculos();

    preencherSelect(
        cmbVeiculo,
        veiculos,
        "Placa",
        "ID"
    );

}


// ================= SALVAR =================

async function salvar(event) {

    event.preventDefault();

    const botao =
        form.querySelector('button[type="submit"]');

    botao.disabled = true;

    botao.textContent =
        "Salvando...";

    try {

        const dados = {

    Data: txtData.value,

    Hora: txtHora.value,

    Empregado: cmbMotorista.value,

    Veiculo: cmbVeiculo.value,

    Motivo: txtMotivo.value,

    Itinerario: txtItinerario.value,

    Status: cmbStatus.value

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

        botao.textContent =
            "💾 Salvar";


    }

}

// ================= VALIDAÇÃO =================

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
}
