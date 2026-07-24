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
// CONFIGURAÇÃO DA ABA
// ============================================================================

const ABA = ABAS.LANCAMENTOS;

// ============================================================================
// LISTAR LANÇAMENTOS
// ============================================================================

export function obterLancamentos() {
    return listar(ABA);
}

export function obterLancamento(id) {
    return buscar(ABA, id);
}

export function salvarLancamento(dados) {
    return salvar(ABA, dados);
}

export function atualizarLancamento(id, dados) {

    return editar(ABA, id, dados);
}

export function excluirLancamento(id) {

    return excluir(ABA, id);
}
