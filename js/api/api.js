// ============================================================================
// API
// Painel Frota
// Arquivo: js/api/api.js
// ============================================================================

import { CONFIG } from "../config/config.js";

// ============================================================================
// REQUISIÇÃO
// ============================================================================

async function request(
    acao,
    aba,
    dados = {},
    id = null
) {

    const resposta = await fetch(

        CONFIG.API_URL,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                acao,

                aba,

                id,

                dados

            })

        }

    );

    if (!resposta.ok) {

        throw new Error(

            "Erro ao conectar com a API."

        );

    }

    const json = await resposta.json();

    if (!json.success) {

        throw new Error(

            json.message

        );

    }

    return json.data;

}

// ============================================================================
// LISTAR
// ============================================================================

export async function listar(aba) {

    return await request(

        "listar",

        aba

    );

}

// ============================================================================
// BUSCAR
// ============================================================================

export async function buscar(
    aba,
    id
) {

    return await request(

        "buscar",

        aba,

        {},

        id

    );

}

// ============================================================================
// SALVAR
// ============================================================================

export async function salvar(
    aba,
    dados
) {

    return await request(

        "salvar",

        aba,

        dados

    );

}

// ============================================================================
// EDITAR
// ============================================================================

export async function editar(
    aba,
    id,
    dados
) {

    return await request(

        "editar",

        aba,

        dados,

        id

    );

}

// ============================================================================
// EXCLUIR
// ============================================================================

export async function excluir(
    aba,
    id
) {

    return await request(

        "excluir",

        aba,

        {},

        id

    );

}
