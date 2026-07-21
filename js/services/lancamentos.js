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

export async function obterLancamentos(id) {
    return buscar(ABA, id);
}

export async function salvarLancamentos(dados) {
    return salvar(ABA, dados);
}

export async function atualizarLancamentos(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirLancamentos(id) {
    return excluir(ABA, id);
}
