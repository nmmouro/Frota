// ============================================================================
// API
// Painel Frota
// Arquivo: js/api/api.js
// ============================================================================

import { CONFIG } from "../config/config.js";

// ============================================================================
// GET
// ============================================================================

async function get(acao, aba, id = null) {

    const params = new URLSearchParams({

        acao,
        aba

    });

    if (id) {

        params.append("id", id);

    }

    const resposta = await fetch(

        `${CONFIG.API_URL}?${params.toString()}`

    );

    if (!resposta.ok) {

        throw new Error(

            `Erro HTTP ${resposta.status}`

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
// POST
// ============================================================================

async function post(

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

                "Content-Type": "text/plain;charset=utf-8"

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

            `Erro HTTP ${resposta.status}`

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
// CRUD
// ============================================================================

export const listar = aba =>

    get(

        "listar",

        aba

    );

export const buscar = (

    aba,

    id

) =>

    get(

        "buscar",

        aba,

        id

    );

export const salvar = (

    aba,

    dados

) =>

    post(

        "salvar",

        aba,

        dados

    );

export const editar = (

    aba,

    id,

    dados

) =>

    post(

        "editar",

        aba,

        dados,

        id

    );

export const excluir = (

    aba,

    id

) =>

    post(

        "excluir",

        aba,

        {},

        id

    );
