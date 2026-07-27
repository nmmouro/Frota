// ============================================================================
// VEÍCULOS
// Arquivo: js/pages/veiculos.js
//
// Responsável pela interface, formulário e tabela de veículos
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


// ============================================================================
// ELEMENTOS
// ============================================================================

let formulario;
let tabela;
let btnNovo;
let campoData;


let campoStatus;


// ================= VARIÁVEIS =================

let veiculos = [];

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

        // ================================================================
        // ELEMENTOS DO DOM
        // ================================================================

        formulario =
            document.querySelector("#formVeiculo");

        tabela =
            document.querySelector("#tabelaVeiculos");

        btnNovo =
            document.querySelector("#btnNovo");

        campoData =
            document.querySelector("#data");
        
       

        campoStatus =
            document.querySelector("#status");


        // ================================================================
        // INICIALIZAÇÃO
        // ================================================================

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
// LISTAGEM
// ============================================================================

async function carregarTabela() {

    try {

        const resposta =
            await obterVeiculos();

        if (!Array.isArray(resposta)) {

            throw new Error(
                "Resposta inválida ao carregar veículos."
            );

        }

        veiculos =
            resposta;

        renderizarTabela();

    } catch (erro) {

        console.error(
            "Erro ao carregar veículos:",
            erro
        );

        throw erro;

    }

}

// ============================================================================
// RENDERIZAR TABELA
// ============================================================================

function renderizarTabela() {

    renderTable(
        tabela,
        COLUNAS_VEICULOS,
        veiculos,
        [
            {
                label: "Editar",
                className: "btn-edit",
                onClick: (veiculo) =>
                    editarVeiculo(veiculo.ID)
            },
            {
                label: "Excluir",
                className: "btn-delete",
                onClick: (veiculo) =>
                    remover(veiculo.ID)
            }
        ]
    );

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
// SALVAR / ATUALIZAR VEÍCULO
// ============================================================================

async function salvar(evento) {

    evento.preventDefault();

    try {

        mostrarLoading();
        
        const dados =

            obterDadosFormulario();

console.log(
            "DADOS VEÍCULO:",
            dados
        );

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
// EDITAR VEÍCULO
// ============================================================================

async function editarVeiculo(id) {

    try {

        mostrarLoading();

        const veiculo =
            await obterVeiculo(id);

        if (!veiculo) {

            throw new Error(
                "Veículo não encontrado."
            );

        }

        registroEditando =
            veiculo.ID;

        preencherFormulario(
            veiculo
        );

        atualizarTitulo(
            "Editar veículo"
        );

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

            "Excluir veículo?"

        )

    ) {

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
// OBTER DADOS DO FORMULÁRIO
// ============================================================================

// ============================================================================
// OBTER DADOS DO FORMULÁRIO
// ============================================================================

function obterDadosFormulario() {

    const form = document.getElementById("formVeiculo");

    if (!form) {

        throw new Error(
            "Formulário #formVeiculo não encontrado."
        );

    }


    const elementoData =
        form.elements.namedItem("data");

    const elementoPlaca =
        form.elements.namedItem("placa");

    const elementoStatus =
        form.elements.namedItem("status");


    // ========================================================================
    // VALIDAR ELEMENTOS
    // ========================================================================

    if (!elementoData) {
        throw new Error("Campo name=\"data\" não encontrado.");
    }

    if (!elementoPlaca) {
        throw new Error("Campo name=\"placa\" não encontrado.");
    }

    if (!elementoModelo) {
        throw new Error("Campo name=\"modelo\" não encontrado.");
    }

    if (!elementoMarca) {
        throw new Error("Campo name=\"marca\" não encontrado.");
    }

    if (!elementoAno) {
        throw new Error("Campo name=\"ano\" não encontrado.");
    }

    if (!elementoCor) {
        throw new Error("Campo name=\"cor\" não encontrado.");
    }

    if (!elementoCombustivel) {
        throw new Error("Campo name=\"combustivel\" não encontrado.");
    }

    if (!elementoStatus) {
        throw new Error("Campo name=\"status\" não encontrado.");
    }


    // ========================================================================
    // MONTAR DADOS
    // ========================================================================

    const dados = {

        Data:
            elementoData.value,

        Placa:
            elementoPlaca.value.trim(),

       Status:
            elementoStatus.value.trim()

    };


    console.log(
        "DADOS VEÍCULO:",
        dados
    );


    return dados;

}


// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

function preencherFormulario(veiculo) {

    campoData.value =
        veiculo["Data"] || "";

   
    

   

    campoStatus.value =
        veiculo["Status"] || "";

}

// ============================================================================
// ATUALIZAR TÍTULO
// ============================================================================

function atualizarTitulo(

    texto

) {

    const titulo =

        document.querySelector(

            "#tituloFormulario"

        );


    if (titulo) {

        titulo.textContent =

            texto;

    }

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

    console.error(

        erro

    );


    alert(

        erro?.message ||

        "Erro ao processar veículo."

    );

}
