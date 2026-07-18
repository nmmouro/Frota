// ============================================================================
// MOTORISTAS
// Arquivo: js/services/motoristas.js
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

export async function obterMotoristas() {

    return await listar(

        ABAS.MOTORISTAS

    );

}

// ================= GRAVAÇÃO =================

export async function salvarMotorista(dados) {

    return await salvar(

        ABAS.MOTORISTAS,

        dados

    );

}

// ================= ATUALIZAÇÃO =================

export async function atualizarMotorista(linha, dados) {

    return await editar(

        ABAS.MOTORISTAS,

        linha,

        dados

    );

}

// ================= EXCLUSÃO =================

export async function excluirMotorista(linha) {

    return await excluir(

        ABAS.MOTORISTAS,

        linha

    );

}
