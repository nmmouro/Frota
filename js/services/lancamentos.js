// ============================================================================
// SERVICES / LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
// ============================================================================


// ================= IMPORTS =================

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

export const obterLancamentos = () =>

    listar(ABAS.LANCAMENTOS);

export const obterLancamento = id =>

    buscar(ABAS.LANCAMENTOS, id);

export const salvarLancamento = dados =>

    salvar(ABAS.LANCAMENTOS, dados);

export const atualizarLancamento = (id, dados) =>

    editar(ABAS.LANCAMENTOS, id, dados);

export const excluirLancamento = id =>

    excluir(ABAS.LANCAMENTOS, id);
