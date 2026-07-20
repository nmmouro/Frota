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

const ABA = ABAS.LANCAMENTOS;


// ============================================================================


export async function obterLancamentos() {
    return listar(ABA);
}

export async function obterLancamento(id) {
    return buscar(ABA, id);
}

export async function salvarLancamento(dados) {
    return salvar(ABA, dados);
}

export async function atualizarLancamento(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirLancamento(id) {
    return excluir(ABA, id);
}
