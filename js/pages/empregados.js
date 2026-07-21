// ============================================================================
// EMPREGAADOS
// Arquivo: js/pages/empregados.js
// ============================================================================

// ================= IMPORTS =================

import {

    obterempregados,
    obterempregado,
    salvarempregado,
    atualizarempregado,
    excluirempregado

} from "../services/empregados.js";

import {

    renderTable

} from "../ui/table.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

// ================= ELEMENTOS =================

const formulario =
    document.querySelector("#formEmpregados");

const tabela =
    document.querySelector("#tabelaEmpregados");

// ================= VARIÁVEIS =================

let empregados = [];

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

    motoristas = await obterEmpregados();

    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela() {

    renderTable(

        tabela,

        empregados

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

        await salvarEmpregado(dados);

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

        empregado:

            formulario.empregado.value.trim(),

        matricula:

            formulario.matricula.value.trim(),

        diretoria:

            formulario.diretoria.value.trim(),

        setor:

            formulario.setor.value,

        usuario:

            formulario.usuario.value,

        condicao:

            formulario.condicao.value,

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
