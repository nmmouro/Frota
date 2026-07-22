// ============================================================================
// SERVICES / EMPREGADOS
// Arquivo: js/services/empregados.js
//
// Responsável exclusivamente pela comunicação CRUD
// com a aba EMPREGADOS do Google Sheets
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
// CONFIGURAÇÃO DA ABA
// ============================================================================

const ABA = ABAS.EMPREGADOS;



// ============================================================================
// LISTAR EMPREGADOS
// ============================================================================

export function obterEmpregados() {

    return listar(

        ABA

    );

}



// ============================================================================
// OBTER EMPREGADO POR ID
// ============================================================================

export function obterEmpregado(id) {

    return buscar(

        ABA,

        id

    );

}



// ============================================================================
// SALVAR EMPREGADO
// ============================================================================

export function salvarEmpregado(dados) {

    return salvar(

        ABA,

        dados

    );

}



// ============================================================================
// ATUALIZAR EMPREGADO
// ============================================================================

export function atualizarEmpregado(

    id,

    dados

) {

    return editar(

        ABA,

        id,

        dados

    );

}



// ============================================================================
// EXCLUIR EMPREGADO
// ============================================================================

export function excluirEmpregado(id) {

    return excluir(

        ABA,

        id

    );

}
