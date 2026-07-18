// ================= IMPORTS =================

import {
    apiGet,
    apiPost,
    apiPut,
    apiDelete
} from "../app/api.js";

// ================= ENDPOINT =================

const ENDPOINT = "lancamentos";

// ================= CONSULTAS =================

export async function obterLancamentos() {

    return await apiGet(ENDPOINT);

}

export async function obterLancamento(id) {

    return await apiGet(`${ENDPOINT}/${id}`);

}

// ================= GRAVAÇÃO =================

export async function salvarLancamento(dados) {

    return await apiPost(ENDPOINT, dados);

}

export async function atualizarLancamento(id, dados) {

    return await apiPut(`${ENDPOINT}/${id}`, dados);

}

// ================= EXCLUSÃO =================

export async function excluirLancamento(id) {

    return await apiDelete(`${ENDPOINT}/${id}`);

}



/*
import { listar } from "../api/api.js";

export async function obterLancamentos() {
    return listar("LANCAMENTOS");
}

export async function salvarLancamento(){...}

export async function excluirLancamento(){...}

export async function atualizarLancamento(){...}

export async function obterLancamento(id){...}
*/
