// ============================================================================
// TABLE UI
// Painel Frota
// Arquivo: js/ui/table.js
//
// Camada de interface para tabelas
// Responsável por controlar renderização,
// atualização e limpeza de tabelas.
// ============================================================================



// ============================================================================
// IMPORTS
// ============================================================================


import {

    renderTable as renderComponentTable

} from "../components/table.js";




// ============================================================================
// RENDERIZAR TABELA
// ============================================================================


export function renderTable(

    container,

    columns = [],

    data = [],

    actions = []

){


    if(!container) {


        console.warn(

            "Container da tabela não encontrado."

        );


        return;


    }



    renderComponentTable(

        container,

        {

            columns,

            data,

            actions

        }

    );


}




// ============================================================================
// LIMPAR TABELA
// ============================================================================


export function limparTabela(container){


    if(!container) return;


    container.innerHTML = "";


}




// ============================================================================
// ATUALIZAR TABELA
// ============================================================================


export function atualizarTabela(

    container,

    columns = [],

    data = [],

    actions = []

){


    limparTabela(

        container

    );


    renderTable(

        container,

        columns,

        data,

        actions

    );


}
