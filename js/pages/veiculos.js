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
    dataParaInput

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

// ============================================================================
// CONFIGURAÇÃO DA TABELA
// ============================================================================

const COLUNAS = [

    {
        field: "ID",
        label: "ID"
    },
        
    {
        field: "Placa",
        label: "Placa"
    },

    {
        field: "Modelo",
        label: "Modelo"
    },

    {
        field: "Marca",
        label: "Marca"
    },

    {
        field: "Ano",
        label: "Ano"
    },

    {
        field: "Cor",
        label: "Cor"
    },

    {
        field: "Combustivel",
        label: "Combustível"
    },

    {
        field: "Status",
        label: "Status",
        type: "status"
    }

];

// ============================================================================
// ESTADO
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
        registrarEventos();
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

    registros =
    await obterVeiculos();

    if (!Array.isArray(registros)) {

        throw new Error(

            "Resposta inválida ao carregar veículos."
        );
    }

    renderizarTabela();

}

// ============================================================================
// RENDERIZAR TABELA
// ============================================================================

function renderizarTabela() {

    renderTable(

        tabela,
        COLUNAS,
        registros,

        [

            {
                label: "Editar",
                className: "btn-edit",
                onClick:
                registro =>
                editarVeiculo(registro.ID)
           
            },

            {
                label: "Excluir",
                className: "btn-delete",
                onClick:
                registro =>
                removerVeiculo(registro.ID)

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

                "Editar veiculo";

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

            "Não foi possível carregar o lançamento."

        );

    }

}

// ============================================================================
// DISPONIBILIZAR PARA A INTERFACE
// ============================================================================

window.editarVeiculo =

    editarVeiculo;

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
        await removerVeiculo(id);
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

        Placa:
            campoPlaca?.value,

        Modelo:
            campoModelo?.value,

        Marca:
            campoMarca?.value,

        Ano:
            campoAno?.value,

        Cor:
            campoCor?.value,

        Combustivel:
            campoCombustivel?.value,

        Status:
            campoStatus?.value

    };

}

// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

function preencherFormulario(registro) {

    console.log(

        "Registro recebido para edição:",

        registro

    );

    // ------------------------------------------------------------------------
    // PLACA
    // ------------------------------------------------------------------------

    campoPlaca.value =

        registro["Placa"]

        || "";
    // ------------------------------------------------------------------------
    // MODELO
    // ------------------------------------------------------------------------

    campoModelo.value =

        registro["Modelo"]

        || "";

    // ------------------------------------------------------------------------
    // MARCA
    // ------------------------------------------------------------------------

    campoMarca.value =

        registro["Marca"]

        || "";

    // ------------------------------------------------------------------------
    // ANO
    // ------------------------------------------------------------------------

    campoAno.value =

        registro["Ano"]

        || "";

    // ------------------------------------------------------------------------
    // COR
    // ------------------------------------------------------------------------

    campoCor.value =

        registro["Cor"]

        || "";

    // ------------------------------------------------------------------------
    // COMBUSTÍVEL
    // ------------------------------------------------------------------------

    campoCombustivel.value =

        registro["Combustivel"]

        || "";

    // ------------------------------------------------------------------------
    // STATUS
    // ------------------------------------------------------------------------

    campoStatus.value =

        registro["Status"]

        || "";

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

    }

}
