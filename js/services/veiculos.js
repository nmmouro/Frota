// ================= IMPORTS =================

import {

    listar,
    salvar

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

// ================= GRAVAÇÃO =================

export async function salvarVeiculo(dados) {

    return await salvar(

        ABAS.VEICULOS,

        dados

    );

}

// ================= ATUALIZAR =================

export async function atualizarVeiculo(
    linha,
    dados
){

    return await editar(

        ABAS.VEICULOS,

        linha,

        dados

    );

}

// ================= EXCLUIR =================

export async function excluirVeiculo(linha){

    return await excluir(

        ABAS.VEICULOS,

        linha

    );

}
