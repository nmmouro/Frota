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

import {

    dataParaInput,
    inputParaData,
    horaParaInput

} from "../utils/datas.js";

import {

obterVeiculos

} from "../services/veiculos.js";

// ============================================================================
// ELEMENTOS
// ============================================================================

const formulario =
    document.querySelector("#formLancamento");

const tbody =
    document.querySelector("#tabelaLancamentos");

const btnNovo =
    document.querySelector("#btnNovo");

const selectVeiculo =
document.querySelector("#veiculo");

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
        field: "Hora",
        label: "Hora"
    },

    {
        field: "Empregado / Matrícula",
        label: "Empregado"
    },

    {
        field: "Veículo",
        label: "Veículo"
    },

    {
        field: "Passageiro / Setor / Motivo",
        label: "Passageiro"
    },

    {
        field: "Itinerário",
        label: "Itinerário"
    },

    {
        field: "Status",
        label: "Status",
        type: "status"
    }

];

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
     
    renderizar();

}

// ============================================================================
// RENDER
// ============================================================================

function renderizar() {

    renderTable(

        tbody,

        COLUNAS,

        registros,

        [

            {
                label: "Editar",

                className: "btn-edit",

                onClick: registro => editarLancamento(registro.ID)

            },

            {
                label: "Excluir",

                className: "btn-delete",

                onClick: registro => excluirLancamento(registro.ID)

            }

        ]

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

        Data: formulario.data.value,

        Hora: formulario.hora.value,

        "Empregado / Matrícula": formulario.motorista.value,

        "Veículo": formulario.veiculo.value,

        "Passageiro / Setor / Motivo":

            `${formulario.passageiro.value} / ${formulario.setor.value} / ${formulario.motivo.value}`,

        "Itinerário": formulario.itinerario.value,

        Status: formulario.status.value

    };

}

// ============================================================================

function preencherFormulario(registro) {

    formulario.data.value =
        dataParaInput(registro.Data);

    formulario.hora.value =
        horaParaInput(registro.Hora);

    formulario.motorista.value =
        registro["Empregado / Matrícula"];

    formulario.veiculo.value =
        registro["Veículo"];

    const partes =
        (registro["Passageiro / Setor / Motivo"] || "")
        .split("/");

    formulario.passageiro.value =
        partes[0]?.trim() || "";

    formulario.setor.value =
        partes[1]?.trim() || "";

    formulario.motivo.value =
        partes.slice(2).join("/").trim();

    formulario.itinerario.value =
        registro["Itinerário"];

    formulario.status.value =
        registro.Status;

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

// ============================================================================
// CARREGAR VEÍCULOS
// ============================================================================


async function carregarVeiculos(){


    if(!selectVeiculo) return;



    try{


        const resposta =
        await obterVeiculos();



        const veiculos =
        resposta.dados || resposta;



        selectVeiculo.innerHTML = `

        <option value="">
            Selecione o veículo
        </option>

        `;



        veiculos.forEach(
        (veiculo)=>{


            const option =
            document.createElement("option");



            /*
              Ajustar conforme
              colunas da aba VEÍCULOS
            */


            option.value =
            veiculo.PLACA;



            option.textContent =
            `${veiculo.PLACA} - ${veiculo.MODELO}`;



            selectVeiculo.appendChild(option);



        });



    }
    catch(erro){


        console.error(
            "Erro ao carregar veículos",
            erro
        );


    }


}




// ============================================================================
// CARREGAR MOTORISTAS
// ============================================================================


async function carregarMotoristas(){


    if(!selectMotorista) return;



    try{


        const resposta =
        await obterMotoristas();



        const motoristas =
        resposta.dados || resposta;



        selectMotorista.innerHTML = `

        <option value="">
            Selecione o motorista
        </option>

        `;



        motoristas.forEach(
        (motorista)=>{


            const option =
            document.createElement("option");



            option.value =
            motorista.MOTORISTA;



            option.textContent =
            motorista.MOTORISTA;



            selectMotorista.appendChild(option);


        });



    }
    catch(erro){


        console.error(
            "Erro ao carregar motoristas",
            erro
        );


    }


}
