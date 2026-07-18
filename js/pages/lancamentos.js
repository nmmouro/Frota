// ============================================================================
// LANÇAMENTOS
// Arquivo: js/pages/lancamentos.js
// ============================================================================

// ================= IMPORTS =================

import {

    obterLancamentos,
    salvarLancamento

} from "../services/lancamentos.js";

import {

    obterMotoristas

} from "../services/motoristas.js";

import {

    obterVeiculos

} from "../services/veiculos.js";

import {

    preencherSelect

} from "../utils/formulario.js";

import {

    renderTable

} from "../ui/table.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

// ================= ELEMENTOS =================

const formulario =
    document.querySelector("#formLancamento");

const tabela =
    document.querySelector("#tabelaLancamentos");

const motorista =
    document.querySelector("#motorista");

const veiculo =
    document.querySelector("#veiculo");

// ================= VARIÁVEIS =================

let lancamentos = [];

let motoristas = [];

let veiculos = [];

// ================= EVENTOS =================

document.addEventListener(

    "DOMContentLoaded",

    init

);

// ================= INIT =================

async function init() {

    try {

        mostrarLoading();

        await carregarDados();

        registrarEventos();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

// ================= DADOS =================

async function carregarDados() {

    [

        lancamentos,

        motoristas,

        veiculos

    ] = await Promise.all([

        obterLancamentos(),

        obterMotoristas(),

        obterVeiculos()

    ]);

    preencherCampos();

    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela() {

    renderTable(

        tabela,

        lancamentos

    );

}

// ================= FORMULÁRIO =================

function preencherCampos() {

    preencherSelect(

        motorista,

        motoristas,

        "nome",

        "nome"

    );

    preencherSelect(

        veiculo,

        veiculos,

        "placa",

        "placa"

    );

}

// ================= EVENTOS =================

function registrarEventos() {

    formulario.addEventListener(

        "submit",

        salvar

    );

}

// ================= AÇÕES =================

async function salvar(evento) {

    evento.preventDefault();

    try {

        const dados = obterDadosFormulario();

        await salvarLancamento(dados);

        formulario.reset();

        await carregarDados();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= HELPERS =================

function obterDadosFormulario() {

    return {

        data:

            formulario.data.value,

        hora:

            formulario.hora.value,

        motorista:

            formulario.motorista.value,

        veiculo:

            formulario.veiculo.value,

        passageiro:

            formulario.passageiro.value,

        setor:

            formulario.setor.value,

        motivo:

            formulario.motivo.value,

        itinerario:

            formulario.itinerario.value,

        status:

            formulario.status.value

    };

}

// ================= ERROS =================

function tratarErro(erro) {

    console.error(erro);

    alert(

        "Erro ao processar a solicitação."

    );

}
