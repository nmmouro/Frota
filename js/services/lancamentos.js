// ============================================================================
// SERVICES / LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
//
// Responsável exclusivamente pela comunicação CRUD
// com a aba LANÇAMENTOS do Google Sheets
// ============================================================================



// ============================================================================
// IMPORTS
// ============================================================================


import {

    listar,
    buscar,
    salvar,
    editar,
    excluir

} from "../api/api.js";


import {

    ABAS

} from "../config/config.js";




// ============================================================================
// CONFIGURAÇÃO
// ============================================================================


const ABA = ABAS.LANCAMENTOS;





// ============================================================================
// LISTAR LANÇAMENTOS
// Retorna todos os registros
// ============================================================================


export async function obterLancamentos(){


    return await listar(

        ABA

    );


}





// ============================================================================
// BUSCAR LANÇAMENTO POR ID
// ============================================================================


export async function obterLancamento(id){


    return await buscar(

        ABA,

        id

    );


}





// ============================================================================
// SALVAR NOVO LANÇAMENTO
// ============================================================================


export async function salvarLancamento(dados){


    if(!dados){

        throw new Error(

            "Dados do lançamento não informados."

        );

    }



    return await salvar(

        ABA,

        dados

    );


}





// ============================================================================
// EDITAR LANÇAMENTO EXISTENTE
// ============================================================================


export async function atualizarLancamento(

    id,

    dados

){


    if(!id){

        throw new Error(

            "ID do lançamento não informado."

        );

    }



    return await editar(

        ABA,

        id,

        dados

    );


}





// ============================================================================
// EXCLUIR LANÇAMENTO
// ============================================================================


export async function excluirLancamento(id){


    if(!id){

        throw new Error(

            "ID do lançamento não informado."

        );

    }



    return await excluir(

        ABA,

        id

    );


}
