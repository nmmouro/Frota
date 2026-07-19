// ============================================================================
// LANÇAMENTOS
// Arquivo: js/pages/lancamentos.js
// ============================================================================

import {

    obterLancamentos,
    salvarLancamento,
    atualizarLancamento,
    excluirLancamento

} from "../services/lancamentos.js";

import {

    renderTable

} from "../ui/table.js";

import {

    mostrarLoading,
    esconderLoading

} from "../ui/loading.js";

// ============================================================================
// ELEMENTOS
// ============================================================================

const formulario =
    document.querySelector("#formLancamento");

const tbody =
    document.querySelector("#tabelaLancamentos");

const btnNovo =
    document.querySelector("#btnNovo");

// ============================================================================
// DADOS
// ============================================================================

let registros = [];

let registroEditando = null;

// ============================================================================

document.addEventListener(

    "DOMContentLoaded",

    init

);

// ============================================================================
// INIT
// ============================================================================

async function init() {

    try {

        mostrarLoading();

        registrarEventos();

        await carregarTabela();

        
    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

// ============================================================================
// EVENTOS
// ============================================================================

function registrarEventos() {

    formulario?.addEventListener(

        "submit",

        salvar

    );

    btnNovo?.addEventListener(

        "click",

        novo

    );

}

// ============================================================================
// CARREGAR
// ============================================================================

async function carregarTabela() {

    registros = 

        await obterLancamentos();


    console.log("Quantidade:", registros.length);

    console.log(registros);

    renderizar();

}

// ============================================================================
// RENDER
// ============================================================================

function renderizar() {

    renderTable(

        tbody,

        registros

    );

}

// ============================================================================
// NOVO
// ============================================================================

function novo() {

    registroEditando = null;

    formulario.reset();

}

// ============================================================================
// SALVAR
// ============================================================================

async function salvar(evento) {

    evento.preventDefault();

    try {

        mostrarLoading();

        const dados = obterDadosFormulario();

        if (registroEditando) {

            await atualizarLancamento(

                registroEditando,

                dados

            );

        }

        else {

            await salvarLancamento(

                dados

            );

        }

        formulario.reset();

        registroEditando = null;

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}

// ============================================================================
// EDITAR
// ============================================================================

window.editarLancamento = function(id) {

    const registro = registros.find(

        r => r.ID === id

    );

    if (!registro) return;

    registroEditando = id;

    preencherFormulario(

        registro

    );

};

// ============================================================================
// EXCLUIR
// ============================================================================

window.excluirLancamento = async function(id) {

    if (

        !confirm(

            "Excluir lançamento?"

        )

    ) return;

    try {

        mostrarLoading();

        await excluirLancamento(

            id

        );

        await carregarTabela();

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

};

// ============================================================================
// FORMULÁRIO
// ============================================================================

function obterDadosFormulario() {

    return {

        Data:

            formulario.data.value,

        Hora:

            formulario.hora.value,

        "Empregado / Matrícula":

            formulario.empregado.value,

        "Veículo":

            formulario.veiculo.value,

        "Passageiro / Setor / Motivo":

            formulario.passageiro.value,

        "Itinerário":

            formulario.itinerario.value,

        Checklist:

            formulario.checklist.value,

        Status:

            formulario.status.value,

        Usuário:

            formulario.usuario.value

    };

}

// ============================================================================

function preencherFormulario(registro) {

    formulario.data.value =

        registro.Data;

    formulario.hora.value =

        registro.Hora;

    formulario.empregado.value =

        registro["Empregado / Matrícula"];

    formulario.veiculo.value =

        registro["Veículo"];

    formulario.passageiro.value =

        registro["Passageiro / Setor / Motivo"];

    formulario.itinerario.value =

        registro["Itinerário"];

    formulario.checklist.value =

        registro.Checklist;

    formulario.status.value =

        registro.Status;

    formulario.usuario.value =

        registro["Usuário"];

}

// ============================================================================
// ERRO
// ============================================================================

function tratarErro(erro) {

    console.error(erro);

    alert(

        erro.message ||

        "Erro ao processar a solicitação."

    );

}
