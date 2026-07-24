// ============================================================================
// SERVICES / LANÇAMENTOS
// Arquivo: js/services/lancamentos.js
// ============================================================================

import { criarCrud } from "./crudService.js";

import {
    ABAS
} from "../config/config.js";


// ============================================================================
// CRUD DE LANÇAMENTOS
// ============================================================================

const lancamentos = criarCrud(ABAS.LANCAMENTOS);


// ============================================================================
// API PÚBLICA
// ============================================================================

export const obterLancamentos = lancamentos.listar;

export const obterLancamento = lancamentos.buscar;

export const salvarLancamento = lancamentos.salvar;

export const atualizarLancamento = lancamentos.editar;

export const excluirLancamento = lancamentos.excluir;
