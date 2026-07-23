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

    document.querySelector(

        "#formVeiculo"

    );


const tabela =

    document.querySelector(

        "#tabelaVeiculos"

    );


const btnNovo =

    document.querySelector(

        "#btnNovo"

    );


const campoData =

    document.querySelector(

        "#data"

    );


const campoFoto =

    document.querySelector(

        "#foto"

    );


const campoPlaca =

    document.querySelector(

        "#placa"

    );


const campoModelo =

    document.querySelector(

        "#modelo"

    );


const campoMarca =

    document.querySelector(

        "#marca"

    );


const campoAno =

    document.querySelector(

        "#ano"

    );


const campoCor =

    document.querySelector(

        "#cor"

    );


const campoCombustivel =

    document.querySelector(

        "#combustivel"

    );


const campoStatus =

    document.querySelector(

        "#status"

    );



// ============================================================================
// CONFIGURAÇÃO DA TABELA
// ============================================================================

const COLUNAS = [

    {

        field: "ID",

        label: "ID"

    },

    {

        field: "Data",

        label: "Data"

    },

    {

        field: "Foto",

        label: "Foto"

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



// ============================================================================
// INIT
// ============================================================================

async function init() {

    try {

        mostrarLoading();


        preencherDataAtual();


        registrarEventos();


        await carregarTabela();


    }

    catch (erro) {

        tratarErro(

            erro

        );

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

    const resposta =

        await obterVeiculos();


    registros =

        resposta?.dados ??

        resposta;


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

                        editarVeiculo(

                            registro.ID

                        )

            },


            {

                label: "Excluir",

                className: "btn-delete",

                onClick:

                    registro =>

                        removerVeiculo(

                            registro.ID

                        )

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


    atualizarTitulo(

        "Novo veículo"

    );


    document.body.classList.remove(

        "modo-edicao"

    );

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


       atualizarTitulo(
 
            "Novo veículo"

        );


        document.body.classList.remove(

            "modo-edicao"

        );


        await carregarTabela();

    }

    catch (erro) {

        tratarErro(

            erro

        );

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

            await obterVeiculo(

                id

            );


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


        tratarErro(

            erro

        );

    }

    finally {

        esconderLoading();

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

async function removerVeiculo(id) {

    if (

        !confirm(

            "Deseja excluir este veículo?"

        )

    ) {

        return;

    }


    try {

        mostrarLoading();


        await excluirVeiculo(

            id

        );


        registroEditando = null;


        await carregarTabela();

    }

    catch (erro) {

        tratarErro(

            erro

        );

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

            campoData?.value ||

            "",


        Foto:

            campoFoto?.value ||

            "",


        Placa:

            campoPlaca?.value ||

            "",


        Modelo:

            campoModelo?.value ||

            "",


        Marca:

            campoMarca?.value ||

            "",


        Ano:

            campoAno?.value ||

            "",


        Cor:

            campoCor?.value ||

            "",


        Combustivel:

            campoCombustivel?.value ||

            "",


        Status:

            campoStatus?.value ||

            ""

    };

}



// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================

function preencherFormulario(

    registro

) {

    console.log(

        "Veículo recebido para edição:",

        registro

    );


    // ------------------------------------------------------------------------
    // DATA
    // ------------------------------------------------------------------------

    campoData.value =

        dataParaInput(

            registro["Data"]

        ) || "";



    // ------------------------------------------------------------------------
    // FOTO
    // ------------------------------------------------------------------------

    campoFoto.value =

        registro["Foto"]

        || "";



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
// DATA AUTOMÁTICA
// ============================================================================

function preencherDataAtual() {

    if (!campoData) {

        return;

    }


    campoData.value =

        dataInput();

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
