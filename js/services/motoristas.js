// ================= IMPORTS =================

import {
    apiGet,
    apiPost,
    apiPut,
    apiDelete
} from "../app/api.js";

// ================= ENDPOINT =================

const ENDPOINT = "motoristas";

// ================= CONSULTAS =================

export async function obterMotoristas() {

    return await apiGet(ENDPOINT);

}

export async function obterMotorista(id) {

    return await apiGet(`${ENDPOINT}/${id}`);

}

// ================= GRAVAÇÃO =================

export async function salvarMotorista(dados) {

    return await apiPost(ENDPOINT, dados);

}

export async function atualizarMotorista(id, dados) {

    return await apiPut(`${ENDPOINT}/${id}`, dados);

}

// ================= EXCLUSÃO =================

export async function excluirMotorista(id) {

    return await apiDelete(`${ENDPOINT}/${id}`);

}



/*
import { listar } from "../api/api.js";

export async function obterMotoristas() {

    return await listar("MOTORISTAS");

}
*/
