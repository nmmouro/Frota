// ================= IMPORTS =================

import {

    obterMotoristas,
    salvarMotorista,
    excluirMotorista

} from "../services/motoristas.js";

// ================= ELEMENTOS =================

const formulario = document.querySelector("#formMotorista");

const tabela = document.querySelector("#tabelaMotoristas");

const btnSalvar = document.querySelector("#btnSalvar");

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

        await carregarDados();

        registrarEventos();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= DADOS =================

async function carregarDados() {

    motoristas = await obterMotoristas();

    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela() {

    tabela.innerHTML = "";

    motoristas.forEach(renderizarLinha);

}

function renderizarLinha(item) {

    const tr = document.createElement("tr");

    tr.innerHTML = `

        <td>${item.nome}</td>

        <td>${item.matricula}</td>

        <td>${item.telefone}</td>

        <td>${item.categoria}</td>

        <td>${item.validade}</td>

        <td>${item.status}</td>

        <td>

            <button
                class="btn-excluir"
                data-id="${item.id}"
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

        await salvarMotorista(dados);

        formulario.reset();

        await carregarDados();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

async function cliqueTabela(evento) {

    const botao = evento.target;

    if (!botao.dataset.id) return;

    if (botao.classList.contains("btn-excluir")) {

        await remover(botao.dataset.id);

    }

}

// ================= AÇÕES =================

async function remover(id) {

    if (!confirm("Deseja excluir este motorista?")) return;

    try {

        await excluirMotorista(id);

        await carregarDados();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= HELPERS =================

function obterDadosFormulario() {

    return {

        nome: formulario.nome.value.trim(),

        matricula: formulario.matricula.value.trim(),

        telefone: formulario.telefone.value.trim(),

        categoria: formulario.categoria.value,

        validade: formulario.validade.value,

        status: formulario.status.value

    };

}

// ================= ERROS =================

function tratarErro(erro) {

    console.error(erro);

    alert("Erro ao processar a operação.");

}
