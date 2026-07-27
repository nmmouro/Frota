// ============================================================================
// SERVICES / EMPREGADOS
// Arquivo: js/services/empregados.js
// ============================================================================

import { criarCrud } from "./crudService.js";

import {
    ABAS
} from "../config/config.js";


// ============================================================================
// CRUD DE EMPREGADOS
// ============================================================================

const empregados = criarCrud(ABAS.EMPREGADOS);


// ============================================================================
// API PÚBLICA
// ============================================================================

const ABA = ABAS.EMPREGADOS;


export function obterEmpregados() {
    return listar(ABA);
}

export function obterEmpregado(id) {
    return buscar(ABA, id);
}

export function salvarEmpregado(dados) {
    return salvar(ABA, dados);
}

export function atualizarEmpregado(id, dados) {
    return editar(ABA, id, dados);
}

export function excluirEmpregado(id) {

    return excluir(ABA, id);
}
