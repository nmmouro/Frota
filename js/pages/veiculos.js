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

const formulario =
document.querySelector("#formVeiculo");

const tabela =
document.querySelector("#tabelaVeiculos");

const btnNovo =
document.querySelector("#btnNovo");

const campoData =
document.querySelector("#data");

const campoPlaca =
document.querySelector("#placa");

const campoModelo =
document.querySelector("#modelo");

const campoMarca =
document.querySelector("#marca");

const campoAno =
document.querySelector("#ano");

const campoCor =
document.querySelector("#cor");

const campoCombustivel =
document.querySelector("#combustivel");

const campoStatus =
document.querySelector("#status");


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

function obterDadosFormulario() {

    return {

        Data:
            campoData.value,

        Placa:
            campoPlaca.value.trim(),

        Modelo:
            campoModelo.value.trim(),

        Marca:
            campoMarca.value.trim(),

        Ano:
            campoAno.value.trim(),

        Cor:
            campoCor.value.trim(),

        Combustivel:
            campoCombustivel.value.trim(),

        Status:
            campoStatus.value.trim()

    };

}



// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

function preencherFormulario(veiculo) {

    campoData.value =
        veiculo["Data"] || "";

    campoPlaca.value =
        veiculo["Placa"] || "";

    campoModelo.value =
        veiculo["Modelo"] || "";

    campoMarca.value =
        veiculo["Marca"] || "";

    campoAno.value =
        veiculo["Ano"] || "";

    campoCor.value =
        veiculo["Cor"] || "";

    campoCombustivel.value =
        veiculo["Combustivel"] || "";

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
