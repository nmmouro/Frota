// ================= IMPORTS =================

import {

    obterLancamentos,
    salvarLancamento,
    excluirLancamento

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

// ================= ELEMENTOS =================

const formulario = document.querySelector("#formLancamento");

const tabela = document.querySelector("#tabelaLancamentos");

const btnSalvar = document.querySelector("#btnSalvar");

const motoristaSelect = document.querySelector("#motorista");

const veiculoSelect = document.querySelector("#veiculo");

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

        await carregarDados();

        registrarEventos();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= DADOS =================

async function carregarDados() {

    const [

        listaLancamentos,
        listaMotoristas,
        listaVeiculos

    ] = await Promise.all([

        obterLancamentos(),
        obterMotoristas(),
        obterVeiculos()

    ]);

    lancamentos = listaLancamentos;

    motoristas = listaMotoristas;

    veiculos = listaVeiculos;

    preencherCombos();

    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela() {

    tabela.innerHTML = "";

    lancamentos.forEach(renderizarLinha);

}

function renderizarLinha(item) {

    const tr = document.createElement("tr");

    tr.innerHTML = `

        <td>${item.data}</td>

        <td>${item.hora}</td>

        <td>${item.motorista}</td>

        <td>${item.veiculo}</td>

        <td>${item.passageiro}</td>

        <td>${item.itinerario}</td>

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

// ================= COMBOS =================

function preencherCombos() {

    preencherSelect(

        motoristaSelect,

        motoristas,

        "nome",

        "nome"

    );

    preencherSelect(

        veiculoSelect,

        veiculos,

        "placa",

        "placa"

    );

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

        await salvarLancamento(dados);

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

    if (!confirm("Deseja excluir este lançamento?")) return;

    try {

        await excluirLancamento(id);

        await carregarDados();

    }

    catch (erro) {

        tratarErro(erro);

    }

}

// ================= HELPERS =================

function obterDadosFormulario() {

    return {

        data: formulario.data.value,

        hora: formulario.hora.value,

        motorista: formulario.motorista.value,

        veiculo: formulario.veiculo.value,

        passageiro: formulario.passageiro.value,

        setor: formulario.setor.value,

        motivo: formulario.motivo.value,

        itinerario: formulario.itinerario.value,

        status: formulario.status.value

    };

}

// ================= ERROS =================

function tratarErro(erro) {

    console.error(erro);

    alert("Erro ao processar a operação.");

}



/*
import {
    obterLancamentos
} from "../services/lancamentos.js";

import {
    renderTabela
} from "../ui/table.js";

// ================= ELEMENTOS =================

const tabela =
    document.getElementById("tabela");

// ================= INICIALIZAÇÃO =================

document.addEventListener(
    "DOMContentLoaded",
    init
);

// ================= INIT =================

async function init() {

    try {

        await carregarLancamentos();

    }
    catch (erro) {

        console.error(erro);

        tabela.innerHTML = `
            <div class="erro">
                Erro ao carregar os lançamentos.
            </div>
        `;

    }

}

// ================= CARREGAR =================

async function carregarLancamentos() {

    const dados =
        await obterLancamentos();

    renderTabela(
        tabela,
        dados
    );

}
*/
