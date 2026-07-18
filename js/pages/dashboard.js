import {
    obterDashboard
} from "../services/dashboard.js";

import {
    renderResumo
} from "../ui/cards.js";

import {
    renderTabela
} from "../ui/table.js";

// ================= ELEMENTOS =================

const divVeiculos =
    document.getElementById("veiculos");

const divMotoristas =
    document.getElementById("motoristas");

const divPainel =
    document.getElementById("painel");

const divAgenda =
    document.getElementById("agenda");

const divSocial =
    document.getElementById("social");

// ================= EVENTOS =================

document.addEventListener(
    "DOMContentLoaded",
    init
);

// ================= INIT =================

async function init() {

    try {

        await carregarDashboard();

        iniciarAtualizacaoAutomatica();

    }
    catch (erro) {

        tratarErro(erro);

    }

}

// ================= DADOS =================

async function carregarDashboard() {

    const dados =
        await obterDashboard();

    renderResumo(
        divVeiculos,
        dados.veiculos,
        dados.painel
    );

    renderResumo(
        divMotoristas,
        dados.motoristas,
        dados.painel
    );

    renderTabela(
        divPainel,
        dados.painel
    );

    renderTabela(
        divAgenda,
        dados.agenda
    );

    renderTabela(
        divSocial,
        dados.social
    );

}

// ================= ATUALIZAÇÃO =================

function iniciarAtualizacaoAutomatica() {

    setInterval(

        carregarDashboard,

        15000

    );

}

// ================= ERROS =================

function tratarErro(erro) {

    console.error(erro);

}
