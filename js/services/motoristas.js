// ============================================================================
// SERVICES / MOTORISTAS
// Arquivo: js/services/motoristas.js
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

export async function obterMotoristas() {

    return await listar(

        ABAS.MOTORISTAS

    );

}


// ================= BUSCA POR ID =================

export async function obterMotorista(id) {

    const dados = await listar(

        ABAS.MOTORISTAS

    );

    return dados.find(

        item => item.id === id

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

export async function atualizarMotorista(
    linha,
    dados
) {

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
