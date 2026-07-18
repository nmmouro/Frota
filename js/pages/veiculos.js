// ================= IMPORTS =================

import {
    obterVeiculos,
    salvarVeiculo,
    excluirVeiculo
} from "../services/veiculos.js";

import {
    preencherSelect
} from "../utils/formulario.js";

// ================= ELEMENTOS =================

const tabela = document.querySelector("#tabelaVeiculos");

const formulario = document.querySelector("#formVeiculo");

const btnSalvar = document.querySelector("#btnSalvar");

// ================= VARIÁVEIS =================

let veiculos = [];

// ================= EVENTOS =================

document.addEventListener(
    "DOMContentLoaded",
    init
);

// ================= INIT =================

async function init() {

    try {

        await carregarDados();

        registrarEventos();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= DADOS =================

async function carregarDados() {

    veiculos = await obterVeiculos();

    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela() {

    tabela.innerHTML = "";

    veiculos.forEach(renderizarLinha);

}

function renderizarLinha(veiculo) {

    const tr = document.createElement("tr");

    tr.innerHTML = `

        <td>${veiculo.placa}</td>
        <td>${veiculo.modelo}</td>
        <td>${veiculo.status}</td>

        <td>

            <button
                class="btn-editar"
                data-id="${veiculo.id}"
            >
                Editar
            </button>

            <button
                class="btn-excluir"
                data-id="${veiculo.id}"
            >
                Excluir
            </button>

        </td>

    `;

    tabela.appendChild(tr);

}

// ================= EVENTOS =================

function registrarEventos() {

    btnSalvar.addEventListener(
        "click",
        salvar
    );

    tabela.addEventListener(
        "click",
        cliqueTabela
    );

}

async function salvar(evento) {

    evento.preventDefault();

    try {

        const dados = obterDadosFormulario();

        await salvarVeiculo(dados);

        await carregarDados();

        formulario.reset();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

async function cliqueTabela(evento) {

    const botao = evento.target;

    if (!botao.dataset.id) return;

    const id = botao.dataset.id;

    if (botao.classList.contains("btn-excluir")) {

        await remover(id);

    }

}

// ================= AÇÕES =================

async function remover(id) {

    if (!confirm("Excluir veículo?")) return;

    try {

        await excluirVeiculo(id);

        await carregarDados();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= HELPERS =================

function obterDadosFormulario() {

    return {

        placa: formulario.placa.value.trim(),

        modelo: formulario.modelo.value.trim(),

        status: formulario.status.value

    };

}

// ================= ERROS =================

function tratarErro(erro) {

    console.error(erro);

    alert("Ocorreu um erro ao processar a operação.");

}
