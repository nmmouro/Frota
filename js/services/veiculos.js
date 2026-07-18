// ================= IMPORTS =================

import {
    apiGet,
    apiPost,
    apiPut,
    apiDelete
} from "../app/api.js";

// ================= ENDPOINT =================

const ENDPOINT = "veiculos";

// ================= CONSULTAS =================

export async function obterVeiculos() {

    return await apiGet(ENDPOINT);

}

export async function obterVeiculo(id) {

    return await apiGet(`${ENDPOINT}/${id}`);

}

// ================= GRAVAÇÃO =================

export async function salvarVeiculo(dados) {

    return await apiPost(ENDPOINT, dados);

}

export async function atualizarVeiculo(id, dados) {

    return await apiPut(`${ENDPOINT}/${id}`, dados);

}

// ================= EXCLUSÃO =================

export async function excluirVeiculo(id) {

    return await apiDelete(`${ENDPOINT}/${id}`);

}







/*
import { listar } from "../api/api.js";

export async function obterVeiculos() {

    return await listar("VEICULOS");

}
*/
