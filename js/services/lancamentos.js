// ============================================================================
// LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
// ============================================================================

// ================= IMPORTS =================

import {

    listar,
    salvar

} from "../api/api.js";

import {

    ABAS

} from "../config/config.js";

// ================= CONSULTAS =================

export async function obterLancamentos() {

    return await listar(

        ABAS.LANCAMENTOS

    );

}

// ================= GRAVAÇÃO =================

export async function salvarLancamento(dados) {

    return await salvar(

        ABAS.LANCAMENTOS,

        dados

    );

}

// ================= ATUALIZAÇÃO =================

export async function atualizarLancamento(linha, dados) {

    return await editar(

        ABAS.LANCAMENTOS,

        linha,

        dados

    );

}

// ================= EXCLUSÃO =================

export async function excluirLancamento(linha) {

    return await excluir(

        ABAS.LANCAMENTOS,

        linha

    );

}
