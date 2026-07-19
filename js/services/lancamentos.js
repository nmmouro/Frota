// ============================================================================
// SERVICES / LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
// Responsável pela comunicação CRUD da aba LANÇAMENTOS
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


const ABA =
ABAS.LANCAMENTOS;




// ============================================================================
// READ - LISTAR
// ============================================================================


export async function obterLancamentos(){


    return await listar(

        ABA

    );


}




// ============================================================================
// READ - BUSCAR POR ID
// ============================================================================


export async function obterLancamento(id){


    return await buscar(

        ABA,

        id

    );


}




// ============================================================================
// CREATE - NOVO LANÇAMENTO
// ============================================================================


export async function salvarLancamento(dados){


    return await salvar(

        ABA,

        dados

    );


}




// ============================================================================
// UPDATE - ALTERAR LANÇAMENTO
// ============================================================================


export async function atualizarLancamento(

    id,

    dados

){


    return await editar(

        ABA,

        id,

        dados

    );


}




// ============================================================================
// DELETE - EXCLUIR LANÇAMENTO
// ============================================================================


export async function excluirLancamento(id){


    return await excluir(

        ABA,

        id

    );


}
