import {
    obterLancamentos
} from "./services/lancamentos.js";

import {
    renderTabela
} from "./ui/table.js";

document.addEventListener(
    "DOMContentLoaded",
    carregarTabela
);

async function carregarTabela() {

    try {

        const dados =
            await obterLancamentos();

        renderTabela(
            document.getElementById("tabela"),
            dados
        );

    }
    catch (erro) {

        console.error(erro);

        document.getElementById("tabela").innerHTML = `
            <p class="erro">
                Erro ao carregar os lançamentos.
            </p>
        `;

    }

}


/*






import { obterLancamentos }
    from "../services/lancamentos.js";

import { renderTabela }
    from "../ui/table.js";

async function iniciar() {

    try {

        const dados = await obterLancamentos();

        renderTabela(
            document.getElementById("tabela"),
            dados
        );

    } catch (erro) {

        console.error("Erro ao carregar lançamentos:", erro);

    }

}

iniciar();


*/
