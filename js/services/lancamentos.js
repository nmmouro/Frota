// ============================================================================
// SERVICES / LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
// ============================================================================


// ================= IMPORTS =================

import {

    listar,
    salvar,
    editar,
    excluir

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


// ================= BUSCAR POR ID =================

export async function obterLancamento(id) {

    const dados = await listar(

        ABAS.LANCAMENTOS

    );

    return dados.find(

        item => item.id === id

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

export async function atualizarLancamento(
    linha,
    dados
) {

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
