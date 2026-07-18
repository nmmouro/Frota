// ================= IMPORTS =================

import { API } from "../config/config.js";

// ================= LISTAR =================

export async function listar(aba) {

    const resposta = await fetch(

        `${API.URL}?acao=listar&aba=${encodeURIComponent(aba)}`

    );

    if (!resposta.ok) {

        throw new Error("Erro ao consultar a API.");

    }

    const json = await resposta.json();

    return json.dados;

}

// ================= SALVAR =================

export async function salvar(aba, dados) {

    const resposta = await fetch(

        API.URL,

        {

            method: "POST",

            headers: API.HEADERS,

            body: JSON.stringify({

                acao: "salvar",

                aba,

                dados

            })

        }

    );

    if (!resposta.ok) {

        throw new Error("Erro ao salvar registro.");

    }

    return await resposta.json();

}
