import {
    obterLancamentos
} from "../services/lancamentos.js";

import {
    renderTabela
} from "../ui/table.js";

// ================= ELEMENTOS =================

const tabela =
    document.getElementById("tabela");

// ================= INICIALIZAÇÃO =================

document.addEventListener(
    "DOMContentLoaded",
    init
);

// ================= INIT =================

async function init() {

    try {

        await carregarLancamentos();

    }
    catch (erro) {

        console.error(erro);

        tabela.innerHTML = `
            <div class="erro">
                Erro ao carregar os lançamentos.
            </div>
        `;

    }

}

// ================= CARREGAR =================

async function carregarLancamentos() {

    const dados =
        await obterLancamentos();

    renderTabela(
        tabela,
        dados
    );

}
