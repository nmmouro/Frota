// ============================================================================
// MOTORISTAS
// Arquivo: js/pages/motoristas.js
// ============================================================================

// ================= IMPORTS =================

import {

    obterMotoristas,
    salvarMotorista

} from "../services/motoristas.js";

import {

    renderTable

} from "../ui/table.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

// ================= ELEMENTOS =================

const formulario =
    document.querySelector("#formMotorista");

const tabela =
    document.querySelector("#tabelaMotoristas");

// ================= VARIÁVEIS =================

let motoristas = [];

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

    motoristas = await obterMotoristas();

    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela() {

    renderTable(

        tabela,

        motoristas

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

        await salvarMotorista(dados);

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

        nome:

            formulario.nome.value.trim(),

        matricula:

            formulario.matricula.value.trim(),

        telefone:

            formulario.telefone.value.trim(),

        categoria:

            formulario.categoria.value,

        validade:

            formulario.validade.value,

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
