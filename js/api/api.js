// ============================================================================
// API
// Painel Frota
// Arquivo: js/api/api.js
//
// Responsável pela comunicação HTTP com Google Apps Script
// ============================================================================


// ============================================================================
// IMPORTS
// ============================================================================

import {

    CONFIG

} from "../config/config.js";


// ============================================================================
// REQUEST
// ============================================================================

async function request(url, options = {}) {

    console.log(
        "API Request:",
        url
    );


    // ========================================================================
    // REQUISIÇÃO HTTP
    // ========================================================================

    const resposta = await fetch(

        url,

        options

    );


    // ========================================================================
    // STATUS HTTP
    // ========================================================================

    if (!resposta.ok) {

        throw new Error(

            `Erro HTTP ${resposta.status}`

        );

    }


    // ========================================================================
    // CONVERTER RESPOSTA PARA JSON
    // ========================================================================

    let json;

    try {

        json = await resposta.json();

    }

    catch (erro) {

        throw new Error(

            "A API retornou uma resposta inválida."

        );

    }


    // ========================================================================
    // LOG
    // ========================================================================

    console.log(

        "Resposta bruta da API:",

        json

    );


    // ========================================================================
    // VALIDAR RESPOSTA
    // ========================================================================

    if (

        !json ||

        typeof json !== "object"

    ) {

        throw new Error(

            "Resposta inválida da API."

        );

    }


    // ========================================================================
    // VERIFICAR ERRO DA API
    //
    // Aceita os dois padrões:
    //
    // success: false
    //
    // sucesso: false
    //
    // ========================================================================

    if (

        json.success === false ||

        json.sucesso === false

    ) {

        throw new Error(

            json.message ||

            json.erro ||

            "Erro desconhecido na API."

        );

    }


    // ========================================================================
    // RETORNAR DADOS
    //
    // Pode ser:
    //
    // Array
    // Objeto
    // null
    // undefined
    //
    // Não usar mais:
    //
    // json.data ?? []
    //
    // porque isso força respostas sem data para array vazio.
    //
    // ========================================================================

    return json.data;

}


// ============================================================================
// GET
// ============================================================================

async function get(

    acao,

    aba,

    id = null

) {

    const params =

        new URLSearchParams();


    params.append(

        "acao",

        acao

    );


    params.append(

        "aba",

        aba

    );


    if (

        id !== null &&

        id !== undefined

    ) {

        params.append(

            "id",

            id

        );

    }


    const url =

        `${CONFIG.API_URL}?${params.toString()}`;


    return request(

        url

    );

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

    return request(

        CONFIG.API_URL,

        {

            method:

                "POST",


            headers: {

                "Content-Type":

                    "text/plain;charset=utf-8"

            },


            body:

                JSON.stringify({

                    acao,

                    aba,

                    id,

                    dados

                })

        }

    );

}


// ============================================================================
// LISTAR
// ============================================================================

export function listar(

    aba

) {

    return get(

        "listar",

        aba

    );

}


// ============================================================================
// BUSCAR
// ============================================================================

export function buscar(

    aba,

    id

) {

    return get(

        "buscar",

        aba,

        id

    );

}


// ============================================================================
// SALVAR
// ============================================================================

export function salvar(

    aba,

    dados

) {

    return post(

        "salvar",

        aba,

        dados

    );

}


// ============================================================================
// EDITAR
// ============================================================================

export function editar(

    aba,

    id,

    dados

) {

    return post(

        "editar",

        aba,

        dados,

        id

    );

}


// ============================================================================
// EXCLUIR
// ============================================================================

export function excluir(

    aba,

    id

) {

    return post(

        "excluir",

        aba,

        {},

        id

    );

}
