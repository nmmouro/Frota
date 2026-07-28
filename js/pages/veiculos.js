// ============================================================================
// VEÍCULOS
// Arquivo: js/pages/veiculos.js
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================

import {
    COLUNAS_VEICULOS
} from "../config/tabelas/veiculos.js";


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


import {

    dataInput,
    dataParaInput,
    horaInput,
    horaParaInput
    

} from "../utils/datas.js";

import {

    preencherSelect

} from "../utils/formulario.js";


// ============================================================================
// ELEMENTOS
// ============================================================================

const formulario =
document.querySelector("#formveiculo");

const tabela =
document.querySelector("#tabelaveiculos");

const btnNovo =
document.querySelector("#btnNovo");

const campoData =
document.querySelector("#data");

const campoveiculo =
document.querySelector("#veiculo");

const selectStatus =
document.querySelector("#status");


// ============================================================================
// CONFIGURAÇÃO DA TABELA
// ============================================================================

let registros = [];

let registroEditando = null;

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener(

    "DOMContentLoaded",

    init
);

async function init() {

    try {

        mostrarLoading();
        preencherDataAtual();
        registrarEventos();
        await carregarTabela();
        esconderLoading();

    }
    catch(erro){

        tratarErro(erro);
    }
    finally{

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
// LISTAGEM
// ============================================================================

async function carregarTabela() {

    const resposta = await obterVeiculos();

    registros =
        resposta?.dados ??
        resposta;

    renderizarTabela();

}

// ============================================================================
// RENDER
// ============================================================================

function renderizarTabela() {

    renderTable(
        tabela,
        COLUNAS_VEICULOS,
        registros,
        [
            {
                label: "Editar",
                className: "btn-edit",
                onClick:  registro =>
                    editarVeiculo(registro.ID)
            },
            {
                label: "Excluir",
                className: "btn-delete",
                onClick: registro =>
                    remover(registro.ID)
            }
        ]
    );

}

// ============================================================================
// EDITAR VEÍCULO
// ============================================================================

async function editarVeiculo(id) {

    try {

        const resposta =
            await obterVeiculo(id);

       const registro =

            resposta?.dados ??

            resposta;

        if (!registro) {

            throw new Error(

                "Veículo não encontrado."

            );

        }


        registroEditando =
            registro.ID;

        preencherFormulario(
            registro
        );

        const titulo =

            document.querySelector(

                "#tituloFormulario"

            );
        
        if (titulo) {

            titulo.textContent =

                "Editar veículo";

        }


        document.body.classList.add(

            "modo-edicao"

        );

    }

    catch (erro) {

        console.error(
            "Erro ao carregar veículo para edição:",
            erro
        );

        alert(
            erro.message ||
            "Não foi possível carregar o veículo."
        );

    }
}

window.editarVeiculo =

    editarVeiculo;

// ============================================================================
// SALVAR / ATUALIZAR VEÍCULO
// ============================================================================

async function salvar(evento) {

    evento.preventDefault();

    try {

        mostrarLoading();
        
        const dados =

            obterDadosFormulario();

        if (registroEditando) {

            await atualizarVeiculo(

                registroEditando,

                dados
            );
        }

        else {

            await salvarVeiculo(

                dados

            );

        }

        formulario.reset();

        preencherDataAtual();

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
// EXCLUIR VEÍCULO
// ============================================================================

async function remover(id) {

    if (

        !confirm(

            "Excluir veículo?")) {
        return;
    }

    try {

        mostrarLoading();
        await excluirVeiculo(id);
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
// NOVO VEÍCULO
// ============================================================================

function novo() {

    registroEditando = null;

    formulario.reset();

    preencherDataAtual();

}

// ============================================================================
// FORMULÁRIO
// ============================================================================

function obterDadosFormulario() {

    return {

        Data:
            campoData.value,

        Veículo:
            selectVeiculo.value,

        Status:
            formulario.status.value

    };

}

// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

function preencherFormulario(veiculo) {

    campoData.value =
        dataParaInput
        registro["Data"] || "";

    campoVeiculo.value =
        registro["Veiculo"] || "";

    campoStatus.value =
        registro["Status"] || "";

}

// ============================================================================
// DATA / HORA AUTOMÁTICA
// ============================================================================

function preencherDataAtual(){

    const data =
        document.querySelector("#data");

    
    if(data){

        data.value =

            dataInput();

   }

}

// ============================================================================
// TRATAMENTO DE ERROS
// ============================================================================

function tratarErro(

    erro

) {

    console.error(erro);

    alert(

        erro?.message ||

        "Erro ao processar veículo."
    );
}
