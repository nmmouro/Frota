// ============================================================================
// SERVICES / VEÍCULOS
// Arquivo: js/services/veiculos.js
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

export async function obterVeiculos() {

    return await listar(

        ABAS.VEICULOS

    );

}


// Busca um veículo específico pelo ID

export async function obterVeiculo(id) {

    const dados = await listar(

        ABAS.VEICULOS

    );

    return dados.find(

        item => item.id === id

    );

}


// ================= GRAVAÇÃO =================

export async function salvarVeiculo(dados) {

    return await salvar(

        ABAS.VEICULOS,

        dados

    );

}


// ================= ATUALIZAÇÃO =================

export async function atualizarVeiculo(
    linha,
    dados
) {

    return await editar(

        ABAS.VEICULOS,

        linha,

        dados

    );

}


// ================= EXCLUSÃO =================

export async function excluirVeiculo(linha) {

    return await excluir(

        ABAS.VEICULOS,

        linha

    );

}
