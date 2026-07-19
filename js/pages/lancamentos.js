// ============================================================================
// LANÇAMENTOS
// Arquivo: js/pages/lancamentos.js
// ============================================================================


// ============================================================================
// IMPORTS
// ============================================================================


import {

    obterLancamentos,
    salvarLancamento,
    atualizarLancamento,
    excluirLancamento as removerLancamento

} from "../services/lancamentos.js";


import {

    obterVeiculos

} from "../services/veiculos.js";


import {

    obterMotoristas

} from "../services/motoristas.js";


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
document.querySelector("#formLancamento");


const tabela =
document.querySelector("#tabelaLancamentos");


const btnNovo =
document.querySelector("#btnNovo");


const campoData =
document.querySelector("#data");


const campoHora =
document.querySelector("#hora");


const selectVeiculo =
document.querySelector("#veiculo");


const selectMotorista =
document.querySelector("#motorista");




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
        field:"Hora",
        label:"Hora"
    },


    {
        field:"Empregado / Matrícula",
        label:"Empregado"
    },


    {
        field:"Veículo",
        label:"Veículo"
    },


    {
        field:"Passageiro / Setor / Motivo",
        label:"Passageiro"
    },


    {
        field:"Itinerário",
        label:"Itinerário"
    },


    {
        field:"Status",
        label:"Status",
        type:"status"
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



async function init(){


    try{


        mostrarLoading();


        preencherDataHoraAtual();


        registrarEventos();


        await carregarVeiculos();


        await carregarMotoristas();


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
// EVENTOS
// ============================================================================


function registrarEventos(){


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


async function carregarTabela(){


    registros =
    await obterLancamentos();


    renderizarTabela();


}




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
                editarLancamento(registro.ID)

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


            await atualizarLancamento(

                registroEditando,

                dados

            );


        }
        else{


            await salvarLancamento(

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
// EDITAR
// ============================================================================


function editarLancamento(id){


    const registro =
    registros.find(

        item =>
        item.ID === id

    );


    if(!registro) return;


    registroEditando = id;


    preencherFormulario(registro);


}




window.editarLancamento =
editarLancamento;




// ============================================================================
// EXCLUIR
// ============================================================================


async function remover(id){


    if(
        !confirm(
            "Excluir lançamento?"
        )
    )
    return;



    try{


        mostrarLoading();


        await removerLancamento(id);


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


function obterDadosFormulario(){


    return {


        Data:
        campoData.value,


        Hora:
        campoHora.value,


        "Empregado / Matrícula":
        formulario.empregado.value,


        Veículo:
        selectVeiculo.value,


        "Passageiro / Setor / Motivo":

        [

            formulario.passageiro.value,

            formulario.setor.value,

            formulario.motivo.value

        ]
        .filter(Boolean)
        .join(" / "),



        Itinerário:
        formulario.itinerario.value,



        Status:
        formulario.status.value


    };


}




function preencherFormulario(registro){


    campoData.value =
    dataParaInput(
        registro.Data
    );


    campoHora.value =
    horaParaInput(
        registro.Hora
    );


    formulario.empregado.value =
    registro["Empregado / Matrícula"];


    selectVeiculo.value =
    registro.Veículo;



    formulario.itinerario.value =
    registro.Itinerário;


    formulario.status.value =
    registro.Status;


}




// ============================================================================
// SELECT VEÍCULOS
// ============================================================================


async function carregarVeiculos(){


    const resposta =
    await obterVeiculos();


    const lista =
    resposta.dados ?? resposta;



    selectVeiculo.innerHTML =
    `
    <option value="">
        Selecione o veículo
    </option>
    `;



    lista.forEach(item=>{


        const option =
        document.createElement("option");


        option.value =
        item.Placa;


        option.textContent =
        `${item.Placa} - ${item.Modelo}`;


        selectVeiculo.appendChild(option);


    });


}




// ============================================================================
// SELECT MOTORISTAS
// ============================================================================


async function carregarMotoristas(){


    const resposta =
    await obterMotoristas();


    const lista =
    resposta.dados ?? resposta;



    selectMotorista.innerHTML =
    `
    <option value="">
        Selecione o motorista
    </option>
    `;



    lista.forEach(item=>{


        const option =
        document.createElement("option");


        option.value =
        item.Motorista;


        option.textContent =
        item.Motorista;


        selectMotorista.appendChild(option);


    });


}





// ============================================================================
// DATA / HORA AUTOMÁTICA
// ============================================================================


function preencherDataHoraAtual(){


    const data =

        document.querySelector("#data");


    const hora =

        document.querySelector("#hora");



    if(data){

        data.value =

            dataInput();

    }



    if(hora){

        hora.value =

            horaInput();

    }


}



// ============================================================================
// ERROS
// ============================================================================


function tratarErro(erro){


    console.error(erro);


    alert(

        erro.message ||

        "Erro ao processar lançamento."

    );


}
