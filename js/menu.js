import { obterLancamentos } from "./services/lancamentos.js";
import { renderTabela } from "./ui/table.js";

async function iniciar() {

    try {

        const tabela =
            document.getElementById("lancamentos");

        tabela.innerHTML =
            "<p>Carregando...</p>";

        const dados =
            await obterLancamentos();

        renderTabela(
            tabela,
            dados
        );

    } catch (erro) {

        console.error(erro);

        document.getElementById("tabela").innerHTML = `
            <div class="erro">
                Erro ao carregar os dados.
            </div>
        `;

    }

}

document.addEventListener(
    "DOMContentLoaded",
    iniciar
);
