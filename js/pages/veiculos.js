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
    excluirVeiculo as removerLancamento

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



// ================= ELEMENTOS =================

const formulario =
    document.querySelector("#formVeiculo");

const tabela =
    document.querySelector("#tabelaVeiculos");

const btnNovo =
document.querySelector("#btnNovo");

const campoData =
document.querySelector("#data");

const selectVeiculo =
document.querySelector("#veiculo");

const selectStatus =
document.querySelector("#status");

// ============================================================================
// CONFIGURAÇÃO DA TABELA
// ============================================================================

const COLUNAS = [

    {
        field:"ID",
        label:"ID"
    },

    {
        field:"Data",
        label:"Data"
    },

    {
        field:"Foto",
        label:"Foto"
    },

    {
        field:"Placa",
        label:"Placa"
    },

    {
        field:"Modelo",
        label:"Modelo"
    },

    {
        field:"Marca",
        label:"Marca"
    },

    {
        field:"Ano",
        label:"Ano"
    },

    {
        field:"Cor",
        label:"Cor"
    },

    {
        field:"Combustivel",
        label:"Combustivel"
    },

    {
        field:"Status",
        label:"Status",
        type:"status"
    }

];

// ================= VARIÁVEIS =================

let registros = [];

let linhaEdicao = null;

// ================= EVENTOS =================

document.addEventListener(

    "DOMContentLoaded",

    init

);

// ================= INIT =================

document.addEventListener(

"DOMContentLoaded",

init

);

async function init() {

    try {

        mostrarLoading();
        preencherDataHoraAtual();
        registrarEventos();
        await carregarDados();
        await carregarTabela();
        esconderLoading();
        

    }

    catch (erro) {

        tratarErro(erro);

    }

    finally {

        esconderLoading();

    }

}




// ================= EVENTOS =================

function registrarEventos() {

    formulario.addEventListener(

        "submit",

        salvar

    );

    btnNovo?.addEventListener(

        "click",

        novo

    );

}

// ================= DADOS =================

async function carregarDados() {

    veiculos = await obterVeiculos();

    renderizarTabela();

}

// ============================================================================
// LISTAGEM
// ============================================================================

async function carregarTabela(){

    registros =
    await obterLancamentos();
    renderizarTabela();

}

// ================= RENDER =================

function renderizarTabela(){

    renderTable(
       
        tabela,
        COLUNAS,
        registros,
        [

            {

                label:"Editar",
                className:"btn-edit",
                onClick:
                registro =>
                editarVeiculo(registro.ID)

            },

            {

                label:"Excluir",
                className:"btn-delete",
                onClick:
                registro =>
                remover(registro.ID)

            }

        ]

    );

}

// ============================================================================
// NOVO
// ============================================================================

function novo(){

    registroEditando = null;

    formulario.reset();

    preencherDataHoraAtual();

}

// ============================================================================
// SALVAR
// ============================================================================

async function salvar(evento){

    evento.preventDefault();

    try{

        mostrarLoading();
        const dados =
        obterDadosFormulario();

        if(registroEditando){

            await atualizarVeiculo(

                registroEditando,
                dados
            );

        }
        else{

            await salvarVeiculo(
                dados

            );

        }


        formulario.reset();

        preencherDataHoraAtual();

        registroEditando = null;

        await carregarTabela();

    }
    catch(erro){

        tratarErro(erro);

    }
    finally{

        esconderLoading();

    }

}

// ============================================================================
// EDITAR LANÇAMENTO
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

                "Veiculo não encontrado."

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

                "Editar veiculo";

        }


        document.body.classList.add(

            "modo-edicao"

        );


    } catch (erro) {

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
// EXCLUIR
// ============================================================================

async function remover(id){

    if(
        !confirm(
            "Excluir veículo?"
        )
    )
    return;

    try{

        mostrarLoading();

        await removerVeiculo(id);

        await carregarTabela();

    }
    catch(erro){

        tratarErro(erro);

    }
    finally{

        esconderLoading();

    }

}


// ============================================================================
// FORMULÁRIO
// ============================================================================

function obterDadosFormulario() {

    return {

        Data:
            campoData.value,
        
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
