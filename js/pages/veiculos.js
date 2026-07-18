// ============================================================================
// VEÍCULOS
// Arquivo: js/pages/veiculos.js
// ============================================================================

// ================= IMPORTS =================

import {

    obterVeiculos,
    obterVeiculo,
    salvarVeiculo,
    atualizarVeiculo,
    excluirVeiculo

} from "../services/veiculos.js";

import {

    renderTable

} from "../ui/table.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

// ================= ELEMENTOS =================

const formulario =
    document.querySelector("#formVeiculo");

const tabela =
    document.querySelector("#tabelaVeiculos");

// ================= VARIÁVEIS =================

let veiculos = [];

let linhaEdicao = null;

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

    veiculos = await obterVeiculos();

    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela() {

    renderTable(

        tabela,

        veiculos

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

        await salvarVeiculo(dados);

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

        placa:

            formulario.placa.value.trim(),

        modelo:

            formulario.modelo.value.trim(),

        marca:

            formulario.marca.value.trim(),

        ano:

            formulario.ano.value,

        cor:

            formulario.cor.value.trim(),

        combustivel:

            formulario.combustivel.value,

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
